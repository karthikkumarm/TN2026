/**
 * Unified Mammoth Builder
 * 
 * Produces: TN_2026_deepDive.html — a single self-contained file with:
 *   - All 3 modules (Manifesto, Candidates, Deep Dive)
 *   - All 7,070 candidates inlined (no external JSON fetch)
 *   - Chart.js inlined (no CDN)
 *   - Google Fonts inlined (no CDN)
 *   - Dark theme forced (no light mode, no toggle)
 *   - No "Main Page" back-link (single file is the main page)
 *   - No photos (candidate initials avatars only — photos would be 242MB)
 *   - Heavily obfuscated JS (unreadable in Notepad)
 *   - Body content base64-encoded (unreadable in Notepad)
 *   - Full mobile responsive (inherits existing media queries)
 *   - Works offline once downloaded
 *   - WhatsApp-shareable (expected size ~18-20 MB, well under 100MB limit)
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const JavaScriptObfuscator = require('javascript-obfuscator');

const OUT_DIR = '.';
const OUT = path.join(OUT_DIR, 'TN_2026_elections.html');

// ──────────────────────────────────────────────
// Utilities
// ──────────────────────────────────────────────
function fetchUrl(url, headers = {}) {
  return new Promise((resolve, reject) => {
    const opts = { headers: { 'User-Agent': 'Mozilla/5.0', ...headers } };
    https.get(url, opts, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchUrl(res.headers.location, headers).then(resolve).catch(reject);
      }
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    }).on('error', reject);
  });
}

const FALLBACK_FONT_CSS = `
@font-face{font-family:'Inter';font-weight:400;font-display:swap;src:local('Inter')}
@font-face{font-family:'Inter';font-weight:500;font-display:swap;src:local('Inter Medium')}
@font-face{font-family:'Inter';font-weight:600;font-display:swap;src:local('Inter SemiBold')}
@font-face{font-family:'Inter';font-weight:700;font-display:swap;src:local('Inter Bold')}
@font-face{font-family:'Inter';font-weight:800;font-display:swap;src:local('Inter ExtraBold')}
@font-face{font-family:'Playfair Display';font-weight:400;font-display:swap;src:local('Playfair Display')}
@font-face{font-family:'Playfair Display';font-weight:600;font-display:swap;src:local('Playfair Display SemiBold')}
@font-face{font-family:'Playfair Display';font-weight:700;font-display:swap;src:local('Playfair Display Bold')}
@font-face{font-family:'Playfair Display';font-weight:800;font-display:swap;src:local('Playfair Display ExtraBold')}
@font-face{font-family:'JetBrains Mono';font-weight:400;font-display:swap;src:local('JetBrains Mono')}
`;

// Extract content between two strings (first <tag>...</tag>)
function extractBlock(src, openRe, closeStr) {
  const openMatch = src.match(openRe);
  if (!openMatch) return null;
  const start = openMatch.index + openMatch[0].length;
  const end = src.indexOf(closeStr, start);
  if (end < 0) return null;
  return { content: src.substring(start, end), start, end, openLen: openMatch[0].length };
}

async function build() {
  console.log('═══════════════════════════════════════════');
  console.log('  TN 2026 Unified Mammoth Builder');
  console.log('═══════════════════════════════════════════\n');

  // ──────────────────────────────────────────────
  // 1. Load sources
  // ──────────────────────────────────────────────
  console.log('▸ Loading source files...');
  const vi = fs.readFileSync('TN_2026_VoterIntelligence.html', 'utf8');
  const dd = fs.readFileSync('TN_2026_DeepDive.html', 'utf8');
  const candidatesRaw = fs.readFileSync('tn_candidates_2026.json', 'utf8');
  console.log(`  VoterIntelligence: ${(vi.length/1024).toFixed(0)} KB`);
  console.log(`  DeepDive:          ${(dd.length/1024).toFixed(0)} KB`);
  console.log(`  Candidates JSON:   ${(candidatesRaw.length/1024/1024).toFixed(2)} MB`);

  // Parse candidates to strip bulky photo_url (we use photo_local paths only)
  const candidatesJson = JSON.parse(candidatesRaw);
  if (Array.isArray(candidatesJson.candidates)) {
    for (const c of candidatesJson.candidates) {
      delete c.photo_url;
      // Normalize photo_local to relative 'photos/...' for Pages hosting
      if (c.photo_local && typeof c.photo_local === 'string') {
        c.photo_local = c.photo_local.replace(/^public[\\/]assets[\\/]/, '').replace(/\\/g, '/');
      }
    }
  }
  const candidatesMinified = JSON.stringify(candidatesJson);
  console.log(`  Candidates minified: ${(candidatesMinified.length/1024/1024).toFixed(2)} MB`);

  // ──────────────────────────────────────────────
  // 2. Fetch external resources
  // ──────────────────────────────────────────────
  console.log('\n▸ Fetching external resources...');
  let fontCss = FALLBACK_FONT_CSS;
  try {
    fontCss = await fetchUrl('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');
    console.log(`  Google Fonts: ${fontCss.length} chars`);
  } catch (e) {
    console.log(`  ⚠ Google Fonts fetch failed, using fallback: ${e.message}`);
  }

  let chartJs = '';
  try {
    chartJs = await fetchUrl('https://cdn.jsdelivr.net/npm/chart.js@4.4.6/dist/chart.umd.min.js');
    console.log(`  Chart.js: ${(chartJs.length/1024).toFixed(0)} KB`);
  } catch (e) {
    console.log(`  ⚠ Chart.js fetch failed: ${e.message}`);
    throw new Error('Chart.js is required for Manifesto module');
  }

  // ──────────────────────────────────────────────
  // 3. Extract sections from VoterIntelligence
  // ──────────────────────────────────────────────
  console.log('\n▸ Parsing VoterIntelligence...');

  // CSS blocks
  const viStyleRe = /<style>([\s\S]*?)<\/style>/g;
  let viCss = '';
  let m;
  while ((m = viStyleRe.exec(vi)) !== null) viCss += m[1] + '\n';

  // Script blocks
  const viScriptRe = /<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g;
  const viScripts = [];
  while ((m = viScriptRe.exec(vi)) !== null) {
    // Skip external script tags (src=)
    if (/<script\s+[^>]*src=/i.test(m[0])) continue;
    viScripts.push(m[1]);
  }
  // The first script is the source-protection IIFE; last one is the main app JS
  const viProtectionJs = viScripts[0] || '';
  const viAppJs = viScripts.slice(1).join('\n;\n');
  console.log(`  VI CSS:     ${(viCss.length/1024).toFixed(0)} KB`);
  console.log(`  VI App JS:  ${(viAppJs.length/1024).toFixed(0)} KB`);

  // Body content
  const viBodyMatch = vi.match(/<body>([\s\S]*?)<\/body>/);
  if (!viBodyMatch) throw new Error('Cannot find <body> in VoterIntelligence');
  let viBody = viBodyMatch[1];
  // Remove script tags from body (we'll re-add obfuscated combined JS at end)
  viBody = viBody.replace(/<script(?:\s[^>]*)?>[\s\S]*?<\/script>/g, '');

  // ──────────────────────────────────────────────
  // 4. Extract sections from DeepDive
  // ──────────────────────────────────────────────
  console.log('\n▸ Parsing DeepDive...');

  // CSS
  const ddStyleRe = /<style>([\s\S]*?)<\/style>/g;
  let ddCss = '';
  while ((m = ddStyleRe.exec(dd)) !== null) ddCss += m[1] + '\n';

  // Scripts
  const ddScriptRe = /<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g;
  const ddScripts = [];
  while ((m = ddScriptRe.exec(dd)) !== null) {
    if (/<script\s+[^>]*src=/i.test(m[0])) continue;
    ddScripts.push(m[1]);
  }
  const ddAppJs = ddScripts.slice(1).join('\n;\n'); // skip first (protection)
  console.log(`  DD CSS:     ${(ddCss.length/1024).toFixed(0)} KB`);
  console.log(`  DD App JS:  ${(ddAppJs.length/1024).toFixed(0)} KB`);

  // DD body — extract everything inside <main>...</main>
  const ddMainMatch = dd.match(/<main>([\s\S]*?)<\/main>/);
  if (!ddMainMatch) throw new Error('Cannot find <main> in DeepDive');
  let ddBody = ddMainMatch[1];

  // ──────────────────────────────────────────────
  // 5. Transform: clean & merge CSS
  // ──────────────────────────────────────────────
  console.log('\n▸ Merging CSS...');

  // Strip VI's light-theme rules (force dark)
  viCss = viCss.replace(/body\.light\s*\{[^}]*\}/g, '');

  // Strip DD's :root block (use VI's vars) and its body.light block
  ddCss = ddCss.replace(/:root\s*\{[^}]*\}/, '');
  ddCss = ddCss.replace(/body\.light\s*\{[^}]*\}/g, '');
  // Strip DD's body-level rules that conflict with VI (fonts, background)
  ddCss = ddCss.replace(/^\s*body\s*\{[^}]*\}/m, '');
  // Strip DD's nav rules (VI has its own nav)
  ddCss = ddCss.replace(/^\s*nav\s*\{[^}]*\}[\s\S]*?nav \.title\s*\{[^}]*\}/m, '');
  // Strip DD's global-selection-disable — VI has its own
  ddCss = ddCss.replace(/body\{-webkit-user-select[^}]*\}/, '');
  ddCss = ddCss.replace(/input,textarea\{-webkit-user-select[^}]*\}/, '');

  // Add missing --r variable to VI root if not present
  if (!/--r\s*:/.test(viCss)) {
    viCss = viCss.replace(/(:root\s*\{)/, '$1--r:10px;');
  }

  // Scope DD's h2/h3/h4 rules to #module-deepdive to avoid affecting VI's headings
  // (DD uses generic h2/h3/h4 styling heavily)
  // We'll wrap DD CSS in a way that scopes bare-element selectors to #module-deepdive
  // Simpler: prefix DD CSS rules starting with bare h1/h2/h3/h4/p/section/table with #module-deepdive
  ddCss = ddCss.replace(
    /(^|\})\s*(h[1-6]|section|table|p|footer|main|ul|li|td|th|tr|a)([^{]*\{)/g,
    (match, pre, tag, rest) => `${pre} #module-deepdive ${tag}${rest}`
  );

  const mergedCss = viCss + '\n/* === DeepDive module styles === */\n' + ddCss + `
/* ═══════════════════════════════════════════════
   MAMMOTH POLISH — beauty, motion, responsiveness
   ═══════════════════════════════════════════════ */
*,*::before,*::after{box-sizing:border-box}
html{scroll-behavior:smooth;-webkit-text-size-adjust:100%;scrollbar-width:thin;scrollbar-color:var(--gold,#C8922A) transparent}
html::-webkit-scrollbar,body::-webkit-scrollbar{width:10px;height:10px}
html::-webkit-scrollbar-track,body::-webkit-scrollbar-track{background:rgba(255,255,255,.02)}
html::-webkit-scrollbar-thumb,body::-webkit-scrollbar-thumb{background:linear-gradient(180deg,#C8922A,#8B6A1F);border-radius:6px;border:2px solid transparent;background-clip:padding-box}
html::-webkit-scrollbar-thumb:hover{background:#E8B04A;background-clip:padding-box}
body{overflow-x:hidden;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
::selection{background:rgba(200,146,42,.35);color:#fff}

/* Smooth fade-in for modules when switched */
.module{animation:modFade .45s cubic-bezier(.2,.8,.2,1)}
@keyframes modFade{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}

/* Nav polish — glassy sticky header */
nav{backdrop-filter:blur(14px) saturate(140%);-webkit-backdrop-filter:blur(14px) saturate(140%);background:rgba(8,8,16,.72)!important;border-bottom:1px solid rgba(200,146,42,.18)!important;transition:box-shadow .3s}
nav.scrolled{box-shadow:0 4px 24px rgba(0,0,0,.5)}
.nav-tab,.tab-btn{position:relative;transition:color .25s,transform .2s}
.nav-tab::after,.tab-btn::after{content:'';position:absolute;left:20%;right:20%;bottom:-2px;height:2px;background:linear-gradient(90deg,transparent,#C8922A,transparent);transform:scaleX(0);transition:transform .3s cubic-bezier(.2,.8,.2,1);transform-origin:center}
.nav-tab:hover::after,.nav-tab.active::after,.tab-btn:hover::after,.tab-btn.active::after{transform:scaleX(1)}
.nav-tab:hover,.tab-btn:hover{transform:translateY(-1px)}

/* Button polish */
button,.btn{transition:transform .2s cubic-bezier(.2,.8,.2,1),box-shadow .25s,background .25s,border-color .25s;cursor:pointer}
button:hover,.btn:hover{transform:translateY(-1px)}
button:active,.btn:active{transform:translateY(0) scale(.98)}
button:focus-visible,.btn:focus-visible,a:focus-visible,input:focus-visible,select:focus-visible{outline:2px solid #C8922A;outline-offset:3px;border-radius:6px}

/* Card lift effects — catches common class patterns */
.m1-card,.m2-card,.cand-card,.scheme-card,.ic,.party-card,.const-card,.stat-card,.issue-card,.pc,.summary-card,.scheme,.pros-cons,.section-card{
  transition:transform .3s cubic-bezier(.2,.8,.2,1),box-shadow .3s,border-color .3s,background .3s
}
.m1-card:hover,.m2-card:hover,.cand-card:hover,.scheme-card:hover,.ic:hover,.party-card:hover,.const-card:hover,.stat-card:hover,.issue-card:hover,.pc:hover,.summary-card:hover,.scheme:hover{
  transform:translateY(-3px);
  box-shadow:0 14px 32px -12px rgba(0,0,0,.55),0 0 0 1px rgba(200,146,42,.25);
  border-color:rgba(200,146,42,.35)
}

/* Gradient accent on key headings */
h1,h2,.section-title,.page-title{background-image:linear-gradient(135deg,var(--t1,#F0ECE4) 0%,var(--gold,#C8922A) 120%);-webkit-background-clip:text;background-clip:text}
.hero h1,#module-deepdive h1.title{-webkit-text-fill-color:transparent;color:transparent}

/* Links */
a{transition:color .2s}
a:not(.nav-tab):not(.tab-btn):hover{color:#E8B04A!important}

/* Form inputs */
input[type=text],input[type=search],select{transition:border-color .25s,box-shadow .25s,background .25s}
input[type=text]:focus,input[type=search]:focus,select:focus{border-color:#C8922A!important;box-shadow:0 0 0 3px rgba(200,146,42,.18)!important;outline:none}

/* Pills / badges polish */
.pill,.badge,.chip,.tag,.district-pill,.party-pill{transition:transform .2s,background .25s,color .2s;cursor:pointer}
.pill:hover,.badge:hover,.chip:hover,.tag:hover,.district-pill:hover,.party-pill:hover{transform:translateY(-1px) scale(1.03)}

/* Images / table guards */
img{max-width:100%;height:auto}
table{border-collapse:collapse}
#module-deepdive table{display:block;overflow-x:auto;white-space:nowrap;-webkit-overflow-scrolling:touch}
#module-deepdive table tr:hover td{background:rgba(200,146,42,.06)}

/* Loading shimmer */
.loading,.skeleton{background:linear-gradient(90deg,rgba(255,255,255,.03),rgba(255,255,255,.08),rgba(255,255,255,.03));background-size:200% 100%;animation:shimmer 1.4s linear infinite;border-radius:8px}
@keyframes shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}

/* Deep-dive section padding polish */
#module-deepdive main,#module-deepdive .dd-main{max-width:1200px;margin:0 auto;padding:clamp(16px,3vw,40px) clamp(12px,4vw,32px);box-sizing:border-box}
#module-deepdive section{scroll-margin-top:80px;padding:clamp(16px,3vw,32px) 0}
#module-deepdive section+section{border-top:1px solid rgba(255,255,255,.06)}
#module-deepdive h2{margin-top:2em;position:relative;padding-left:16px}
#module-deepdive h2::before{content:'';position:absolute;left:0;top:.3em;bottom:.3em;width:4px;background:linear-gradient(180deg,#C8922A,rgba(200,146,42,.2));border-radius:4px}

/* TOC / anchor polish */
#module-deepdive a[href^='#']{border-bottom:1px dotted rgba(200,146,42,.4);text-decoration:none;padding-bottom:1px}
#module-deepdive a[href^='#']:hover{border-bottom-style:solid;background:rgba(200,146,42,.08)}

/* Tab-btn gold underline override keeps existing design but smoother */

/* Responsive breakpoints */
@media (max-width:1024px){
  nav{padding:10px 14px!important}
  .nav-tabs{gap:6px!important;flex-wrap:wrap}
}
@media (max-width:768px){
  #module-deepdive h1{font-size:1.55rem!important;line-height:1.25}
  #module-deepdive h2{font-size:1.22rem!important}
  #module-deepdive h3{font-size:1.08rem!important}
  #module-deepdive table{font-size:12px}
  #module-deepdive section+section{margin-top:1rem}
  .site-footer{padding:2rem 1rem 1.5rem!important}
  .footer-grid{grid-template-columns:1fr!important;gap:1.25rem!important}
  nav{flex-wrap:wrap;row-gap:8px}
  nav .brand{font-size:1rem!important}
  .hero,.m1-hero,.m2-hero{padding:2rem 1rem!important}
  .m2-filters,.m1-filters{flex-direction:column!important;gap:10px!important;align-items:stretch!important}
  .m2-filters input,.m2-filters select,.m1-filters input,.m1-filters select{width:100%!important;min-width:0!important}
  .cand-grid,.m2-grid,.const-grid{grid-template-columns:1fr!important}
  .stats-row,.m2-stats{flex-wrap:wrap;gap:10px!important}
  .stats-row > *,.m2-stats > *{flex:1 1 45%;min-width:0}
  button,.btn,.nav-tab,.tab-btn,.pill,.chip{min-height:40px}
}
@media (max-width:480px){
  :root{font-size:15px}
  #module-deepdive h1{font-size:1.35rem!important}
  #module-deepdive p,#module-deepdive li{font-size:.94rem;line-height:1.6}
  nav .brand-sub,.nav-sub{display:none!important}
  .stats-row > *,.m2-stats > *{flex:1 1 100%}
  canvas{max-width:100%!important;height:auto!important}
}

/* Print — clean view */
@media print{
  nav,.tab-bar,.theme-toggle,button{display:none!important}
  body{background:#fff;color:#000}
  .module{display:block!important;page-break-after:always}
}

/* Reduced motion */
@media (prefers-reduced-motion:reduce){
  *{animation-duration:.01ms!important;transition-duration:.01ms!important;scroll-behavior:auto!important}
}

/* Force dark mode always */
body.light,html.light,body,html{background:var(--bg0,#080810)!important;color:var(--t1,#F0ECE4)!important}
body.light *{color:inherit}
`;
  console.log(`  Merged CSS: ${(mergedCss.length/1024).toFixed(0)} KB`);

  // Light CSS minify (strip comments and excess whitespace) — deters casual reading
  const cssMin = mergedCss
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\s+/g, ' ')
    .replace(/\s*([{}:;,>+~])\s*/g, '$1')
    .replace(/;}/g, '}')
    .trim();
  console.log(`  Minified CSS: ${(cssMin.length/1024).toFixed(0)} KB`);

  // ──────────────────────────────────────────────
  // 6. Transform: body — inject deepdive module, remove nav back-link, remove theme toggle
  // ──────────────────────────────────────────────
  console.log('\n▸ Transforming body...');

  // Remove theme toggle button
  viBody = viBody.replace(/<button class="theme-toggle"[^>]*>[^<]*<\/button>\s*/, '');

  // Find insertion point: after </div> for module-candidates (line ~651 has its closing)
  // The pattern is: <div class="module" id="module-candidates"> ... </div> <footer>
  // We need to insert the deepdive module between module-candidates close and <footer>

  // Find <footer> position (class="site-footer")
  const footerIdx = viBody.search(/<footer[\s>]/);
  if (footerIdx < 0) throw new Error('Cannot find <footer> in VI body');

  // Build DeepDive module wrapper
  // DD body starts with <nav>...</nav> <main>... — we already extracted just <main> content
  const deepdiveModule = `
<!-- ═══════════════════════════════════════════
     MODULE 3 — DEEP DIVE (174 Schemes Analysis)
     ═══════════════════════════════════════════ -->
<div class="module" id="module-deepdive">
<main class="dd-main">
${ddBody}
</main>
</div>
`;

  viBody = viBody.substring(0, footerIdx) + deepdiveModule + viBody.substring(footerIdx);

  // Add decoding="async" to any candidate img template string literals for better perf.
  // (Template rendered client-side — we can't patch HTML directly, but we can patch the JS template below.)

  // ──────────────────────────────────────────────
  // 7. Transform: JavaScript
  // ──────────────────────────────────────────────
  console.log('\n▸ Transforming JavaScript...');

  let mergedAppJs = viAppJs;

  // a) Remove redirect — make Deep Dive tab just show the module
  mergedAppJs = mergedAppJs.replace(
    /if\s*\(\s*mod\s*===\s*['"]deepdive['"]\s*\)\s*\{\s*window\.location\.href[^}]*\}\s*/,
    ''
  );

  // b) Remove toggleTheme function (dark forced)
  mergedAppJs = mergedAppJs.replace(
    /function\s+toggleTheme\s*\(\)\s*\{[\s\S]*?\n\}\s*/,
    ''
  );

  // c) Keep getPhotoSrc but ensure it returns the normalized relative path.
  //    Photos are hosted alongside index.html on GH Pages at /photos/<const>/<slug>.jpg
  mergedAppJs = mergedAppJs.replace(
    /function\s+getPhotoSrc\s*\([^)]*\)\s*\{[\s\S]*?\n\}/,
    `function getPhotoSrc(c){
  if(!c) return '';
  if(c.photo_local && typeof c.photo_local==='string' && !/^https?:/.test(c.photo_local)) return c.photo_local;
  return '';
}`
  );

  // c2) Upgrade candidate image tag: add decoding="async" + explicit dimensions hint
  mergedAppJs = mergedAppJs.replace(
    /<img class="cand-photo" src="\$\{photo\}" alt="\$\{c\.name\}" loading="lazy"/g,
    '<img class="cand-photo" src="${photo}" alt="${c.name}" loading="lazy" decoding="async" width="60" height="60"'
  );

  // d) Replace the entire fetch().then().then().catch() chain with inline data loader
  //    Match from `fetch(` up to and including the `.catch(...);` close
  const fetchRe = /fetch\(\s*['"]tn_candidates_2026\.json['"]\s*\)[\s\S]*?\.catch\(\s*err\s*=>\s*\{[\s\S]*?\}\s*\)\s*;/;
  if (!fetchRe.test(mergedAppJs)) {
    throw new Error('Could not locate fetch() chain in VI app JS');
  }
  mergedAppJs = mergedAppJs.replace(fetchRe, `(function(){
  try {
    var data = JSON.parse(atob(window.__CANDIDATE_DATA__));
    window.__CANDIDATE_DATA__ = null;
    var seen = new Set();
    ALL_CANDIDATES = (data.candidates || [])
      .filter(function(c){ return c.status === 'Accepted'; })
      .filter(function(c){
        // Dedup by profile_url (each affidavit is unique); fall back to name|const|party|profile
        var key = (c.profile_url || (c.name + '|' + c.constituency + '|' + c.party + '|' + Math.random())).toString();
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      })
      .map(function(c, i){ return Object.assign({}, c, {_id:i, _short:getShort(c.party), _district:CONST_TO_DISTRICT[c.constituency]||''}); });
    processData();
    DATA_LOADED = true;
    renderModule2();
  } catch(err) {
    console.error('Failed to load candidate data:', err);
    var el = document.getElementById('m2-stat-cand');
    if (el) el.textContent = 'Error';
  }
})();`);

  // Add DD app JS at the end (renderBatches, BATCHES, D[] array, etc.)
  mergedAppJs += '\n;\n' + ddAppJs;

  // ──────────────────────────────────────────────
  // 7b. Extract DD's large data arrays (D + BATCHES) OUT of the obfuscation pipeline.
  //     Reason: javascript-obfuscator's controlFlowFlattening + deadCodeInjection wraps
  //     these top-level array literals inside closures that never execute reliably,
  //     leaving D / BATCHES undefined at runtime (or in TDZ). We move them to a separate
  //     non-obfuscated <script> so they become true window.D / window.BATCHES globals
  //     before the obfuscated bundle runs.
  // ──────────────────────────────────────────────
  function extractTopLevelArray(src, name) {
    // matches:  var <name>=[   OR   const <name>=[   OR   window.<name>=[
    const re = new RegExp('(?:^|\\n)\\s*(?:var|const|let|window\\.)\\s*' + name + '\\s*=\\s*\\[', 'm');
    const m = re.exec(src);
    if (!m) return null;
    const arrStart = m.index + m[0].length - 1; // points at '['
    let depth = 0, i = arrStart, inStr = false, strCh = '', inLineCmt = false, inBlockCmt = false, prev = '';
    for (; i < src.length; i++) {
      const c = src[i], n = src[i+1];
      if (inLineCmt) { if (c === '\n') inLineCmt = false; prev = c; continue; }
      if (inBlockCmt) { if (c === '*' && n === '/') { inBlockCmt = false; i++; } prev = c; continue; }
      if (inStr) {
        if (c === '\\') { i++; prev = c; continue; }
        if (c === strCh) { inStr = false; }
        prev = c; continue;
      }
      if (c === '/' && n === '/') { inLineCmt = true; i++; prev = c; continue; }
      if (c === '/' && n === '*') { inBlockCmt = true; i++; prev = c; continue; }
      if (c === '"' || c === "'" || c === '`') { inStr = true; strCh = c; prev = c; continue; }
      if (c === '[') depth++;
      else if (c === ']') { depth--; if (depth === 0) break; }
      prev = c;
    }
    if (depth !== 0) return null;
    // include the closing ] and the trailing semicolon if present
    let end = i + 1;
    while (end < src.length && /[\s;]/.test(src[end])) { if (src[end] === ';') { end++; break; } end++; }
    return { matchStart: m.index + (m[0].startsWith('\n') ? 1 : 0), matchEnd: end, full: src.slice(m.index, end), arrayLiteral: src.slice(arrStart, i + 1) };
  }

  const dExtract = extractTopLevelArray(mergedAppJs, 'D');
  const bExtract = extractTopLevelArray(mergedAppJs, 'BATCHES');
  let dataPreamble = '';
  if (dExtract && bExtract) {
    // Emit a non-obfuscated preamble that sets window.D / window.BATCHES.
    // In the obfuscated bundle, replace the original declarations with bindings that
    // simply alias the globals — preserving the bare-name `D` / `BATCHES` references
    // used throughout renderBatches / schemeCardHtml / etc.
    dataPreamble = 'window.D=' + dExtract.arrayLiteral + ';window.BATCHES=' + bExtract.arrayLiteral + ';';
    // Replace BOTH originals; do the later one first to keep indices valid.
    const [first, second] = dExtract.matchStart < bExtract.matchStart ? [dExtract, bExtract] : [bExtract, dExtract];
    const firstName = dExtract.matchStart < bExtract.matchStart ? 'D' : 'BATCHES';
    const secondName = firstName === 'D' ? 'BATCHES' : 'D';
    mergedAppJs = mergedAppJs.slice(0, second.matchStart)
      + 'var ' + secondName + '=window.' + secondName + ';\n'
      + mergedAppJs.slice(second.matchEnd);
    mergedAppJs = mergedAppJs.slice(0, first.matchStart)
      + 'var ' + firstName + '=window.' + firstName + ';\n'
      + mergedAppJs.slice(first.matchEnd);
    console.log(`  Extracted D (${(dExtract.arrayLiteral.length/1024).toFixed(1)} KB) + BATCHES (${(bExtract.arrayLiteral.length/1024).toFixed(1)} KB) out of obfuscation`);
  } else {
    console.log('  ⚠ Could not extract D/BATCHES — leaving inside obfuscated bundle');
  }

  // Add interaction enhancers
  mergedAppJs += `
;
/* === Mammoth interaction enhancers === */
(function(){
  function init(){
    // Sticky nav shadow on scroll
    var nav = document.querySelector('nav');
    if (nav) {
      var onScroll = function(){
        if (window.scrollY > 8) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');
      };
      window.addEventListener('scroll', onScroll, {passive:true});
      onScroll();
    }
    // Reveal-on-scroll for cards
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function(entries){
        entries.forEach(function(e){
          if (e.isIntersecting){
            e.target.style.opacity = '1';
            e.target.style.transform = 'none';
            io.unobserve(e.target);
          }
        });
      }, {threshold:0.08, rootMargin:'0px 0px -40px 0px'});
      var sel = '.m1-card,.m2-card,.cand-card,.scheme-card,.ic,.party-card,.const-card,.stat-card,.issue-card,.pc,.summary-card';
      document.querySelectorAll(sel).forEach(function(el, i){
        el.style.opacity = '0';
        el.style.transform = 'translateY(14px)';
        el.style.transition = 'opacity .5s cubic-bezier(.2,.8,.2,1) '+(Math.min(i*18,220))+'ms, transform .5s cubic-bezier(.2,.8,.2,1) '+(Math.min(i*18,220))+'ms';
        io.observe(el);
      });
    }
    // Smooth anchor scroll with offset compensation (handles DD TOC)
    document.addEventListener('click', function(e){
      var a = e.target.closest && e.target.closest('a[href^="#"]');
      if (!a) return;
      var href = a.getAttribute('href');
      if (!href || href === '#' || href.length < 2) return;
      var tgt = document.querySelector(href);
      if (!tgt) return;
      e.preventDefault();
      var y = tgt.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({top: y, behavior: 'smooth'});
      if (history.replaceState) history.replaceState(null, '', href);
    });
    // Back-to-top floating button
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.setAttribute('aria-label','Back to top');
    btn.innerHTML = '↑';
    btn.style.cssText = 'position:fixed;right:18px;bottom:18px;width:44px;height:44px;border-radius:50%;border:1px solid rgba(200,146,42,.4);background:rgba(8,8,16,.88);color:#C8922A;font-size:20px;cursor:pointer;opacity:0;pointer-events:none;transition:opacity .3s,transform .3s;z-index:9999;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);box-shadow:0 6px 18px rgba(0,0,0,.45)';
    btn.onclick = function(){window.scrollTo({top:0,behavior:'smooth'})};
    document.body.appendChild(btn);
    window.addEventListener('scroll', function(){
      if (window.scrollY > 400){btn.style.opacity='1';btn.style.pointerEvents='auto'}
      else{btn.style.opacity='0';btn.style.pointerEvents='none'}
    }, {passive:true});
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else setTimeout(init, 0);
})();
`;

  // e) Tweak DD's smooth-scroll TOC — scope queries to #module-deepdive
  //    (DD uses document.querySelectorAll which would scope globally; its TOC classes are unique so this should be fine)

  console.log(`  Merged app JS: ${(mergedAppJs.length/1024).toFixed(0)} KB`);

  // ──────────────────────────────────────────────
  // 8. Encode candidate data as base64 (kept OUT of obfuscation — too large)
  // ──────────────────────────────────────────────
  const candidatesB64 = Buffer.from(candidatesMinified, 'utf8').toString('base64');
  console.log(`  Candidates base64: ${(candidatesB64.length/1024/1024).toFixed(2)} MB`);

  // ──────────────────────────────────────────────
  // 9. Obfuscate the application JavaScript
  // ──────────────────────────────────────────────
  console.log('\n▸ Obfuscating JavaScript...');
  console.log('  (this may take 30-90 seconds for large code...)');

  const obfConfig = {
    compact: true,
    controlFlowFlattening: true,
    controlFlowFlatteningThreshold: 0.6,
    deadCodeInjection: true,
    deadCodeInjectionThreshold: 0.3,
    debugProtection: false,
    disableConsoleOutput: true,
    identifierNamesGenerator: 'hexadecimal',
    log: false,
    numbersToExpressions: true,
    renameGlobals: false,
    selfDefending: false,
    simplify: true,
    splitStrings: true,
    splitStringsChunkLength: 8,
    stringArray: true,
    stringArrayCallsTransform: true,
    stringArrayCallsTransformThreshold: 0.7,
    stringArrayEncoding: ['base64', 'rc4'],
    stringArrayIndexShift: true,
    stringArrayRotate: true,
    stringArrayShuffle: true,
    stringArrayWrappersCount: 3,
    stringArrayWrappersChainedCalls: true,
    stringArrayWrappersParametersMaxCount: 4,
    stringArrayWrappersType: 'function',
    stringArrayThreshold: 0.8,
    transformObjectKeys: true,
    unicodeEscapeSequence: false,
    target: 'browser',
    reservedNames: ['__CANDIDATE_DATA__', 'Chart']
  };

  const t0 = Date.now();
  let obfuscatedJs;
  try {
    obfuscatedJs = JavaScriptObfuscator.obfuscate(mergedAppJs, obfConfig).getObfuscatedCode();
    console.log(`  Obfuscation complete: ${(obfuscatedJs.length/1024).toFixed(0)} KB (${((Date.now()-t0)/1000).toFixed(1)}s)`);
  } catch (e) {
    console.log(`  ⚠ Obfuscation failed, using unobfuscated JS: ${e.message}`);
    obfuscatedJs = mergedAppJs;
  }

  // ──────────────────────────────────────────────
  // 10. Base64-encode body content (hides HTML from Notepad view)
  // ──────────────────────────────────────────────
  console.log('\n▸ Encoding body content...');
  const bodyB64 = Buffer.from(viBody, 'utf8').toString('base64');
  console.log(`  Body base64: ${(bodyB64.length/1024).toFixed(0)} KB`);

  // ──────────────────────────────────────────────
  // 11. Assemble mammoth file
  // ──────────────────────────────────────────────
  console.log('\n▸ Assembling mammoth file...');

  const protectionJs = `
(function(){
'use strict';
// Block context menu, text-select (except inputs), drag, common shortcuts
document.addEventListener('contextmenu',function(e){e.preventDefault();return false},true);
document.addEventListener('keydown',function(e){
  var k=e.key;
  if(k==='F12'
    ||(e.ctrlKey&&e.shiftKey&&(k==='I'||k==='J'||k==='C'||k==='K'))
    ||(e.metaKey&&e.altKey&&(k==='I'||k==='J'||k==='C'))
    ||(e.ctrlKey&&(k==='u'||k==='U'||k==='s'||k==='S'||k==='p'||k==='P'))){
    e.preventDefault();e.stopPropagation();return false;
  }
},true);
document.addEventListener('dragstart',function(e){e.preventDefault()},true);
document.addEventListener('selectstart',function(e){
  var t=e.target;if(t&&(t.tagName==='INPUT'||t.tagName==='TEXTAREA'))return;
  e.preventDefault();
},true);
document.addEventListener('copy',function(e){
  var t=e.target;if(t&&(t.tagName==='INPUT'||t.tagName==='TEXTAREA'))return;
  e.preventDefault();
},true);

// Frame-bust if loaded inside iframe
try{if(window.top!==window.self){window.top.location=window.self.location}}catch(_){document.documentElement.innerHTML='';}

// Devtools detector (timing-based + dimension-based)
var blocked=false;
function lock(){
  if(blocked)return;blocked=true;
  try{document.body.innerHTML='<div style="display:flex;align-items:center;justify-content:center;min-height:100vh;font-family:-apple-system,Segoe UI,sans-serif;color:#C8922A;background:#080810;text-align:center;padding:40px"><div><div style="font-size:56px;margin-bottom:20px">🔒</div><div style="font-size:22px;font-weight:600;margin-bottom:12px">Developer tools detected</div><div style="font-size:14px;color:#7A7265;max-width:400px">This content is protected. Please close all developer tools (F12 / Inspect) and reload the page to continue.</div></div></div>';}catch(_){}
}
var dcCount=0;
setInterval(function(){
  try{
    // Timing trap
    var s=performance.now();
    (function(){}).constructor('debugger')();
    if(performance.now()-s>120){dcCount++;if(dcCount>1)lock();}
    // Size heuristic (desktop only — mobile browsers can have mismatches)
    if(window.innerWidth>800){
      var wd=window.outerWidth-window.innerWidth;
      var hd=window.outerHeight-window.innerHeight;
      if(wd>180||hd>200){dcCount++;if(dcCount>2)lock();}
    }
  }catch(_){}
},1500);

// Override console methods (harmless decorations that reveal devtool inspection)
try{
  var t=function(){};
  ['log','debug','info','warn','error','table','dir','trace','group','groupEnd','profile','profileEnd'].forEach(function(k){
    try{console[k]=t}catch(_){}
  });
}catch(_){}
})();`;

  // Loader that decodes base64 body with proper UTF-8 handling
  const bodyLoader = `
(function(){
var _b="${bodyB64}";
try{
  var bin=atob(_b);
  var bytes=new Uint8Array(bin.length);
  for(var i=0;i<bin.length;i++)bytes[i]=bin.charCodeAt(i);
  var html=new TextDecoder('utf-8').decode(bytes);
  document.body.innerHTML=html;
}catch(e){document.body.innerHTML='<p style="padding:40px;color:#E74C3C;font-family:sans-serif">Loading error: '+e.message+'</p>';}
})();`;

  const mammothHtml = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1,interactive-widget=resizes-content">
<meta name="theme-color" content="#080810">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="description" content="TN 2026 — An independent, non-partisan voter intelligence platform for the Tamil Nadu 2026 Legislative Assembly Election. Manifesto analysis, 4,610 candidates across 233 constituencies, 174 schemes deep-dive.">
<meta name="keywords" content="Tamil Nadu 2026, TN Election, voter intelligence, manifesto analysis, DMK, ADMK, TVK, NTK, ECI candidates, assembly election">
<meta name="author" content="Karthi — Robosynaptix">
<meta name="robots" content="index,follow">
<meta name="referrer" content="no-referrer">
<meta name="format-detection" content="telephone=no">
<meta http-equiv="X-Content-Type-Options" content="nosniff">
<meta http-equiv="Content-Security-Policy" content="default-src 'self' data: blob:; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'none';">
<meta http-equiv="Permissions-Policy" content="geolocation=(), microphone=(), camera=(), payment=(), usb=(), accelerometer=(), gyroscope=()">
<!-- Open Graph / social -->
<meta property="og:type" content="website">
<meta property="og:title" content="TN 2026 — Voter Intelligence Platform">
<meta property="og:description" content="Independent, non-partisan analysis of the Tamil Nadu 2026 Assembly Election — manifestos, candidates, schemes.">
<meta property="og:site_name" content="TN 2026 Voter Intelligence">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="TN 2026 — Voter Intelligence Platform">
<meta name="twitter:description" content="Independent, non-partisan analysis of the Tamil Nadu 2026 Assembly Election.">
<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='12' fill='%23080810'/%3E%3Ctext x='32' y='44' font-size='36' text-anchor='middle' fill='%23C8922A' font-family='serif' font-weight='700'%3E🪔%3C/text%3E%3C/svg%3E">
<title>TN 2026 — Voter Intelligence Platform</title>
<style id="fonts">${fontCss}</style>
<style id="app">${cssMin}</style>
<script>${protectionJs}</script>
</head>
<body>
<script>window.__CANDIDATE_DATA__="${candidatesB64}";</script>
<script>${chartJs}</script>
<script>${bodyLoader}</script>
<script>${dataPreamble}</script>
<script>${obfuscatedJs}</script>
</body>
</html>`;

  // Write with UTF-8 BOM for correct encoding in Notepad/browsers
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(OUT, '\uFEFF' + mammothHtml, 'utf8');
  const finalSize = Buffer.byteLength(mammothHtml) / 1024 / 1024;
  console.log(`\n═══════════════════════════════════════════`);
  console.log(`✓ Built: ${OUT}`);
  console.log(`  Size: ${finalSize.toFixed(2)} MB`);
  console.log(`  WhatsApp document limit: 100 MB ${finalSize < 100 ? '✓ OK' : '✗ TOO LARGE'}`);
  console.log(`═══════════════════════════════════════════\n`);

  // ──────────────────────────────────────────────
  // 12. Sync to docs/ for GitHub Pages (index.html + photos/)
  // ──────────────────────────────────────────────
  console.log('▸ Syncing to docs/ for GitHub Pages...');
  const DOCS = 'docs';
  if (!fs.existsSync(DOCS)) fs.mkdirSync(DOCS, { recursive: true });
  // Copy built file as index.html
  fs.copyFileSync(OUT, path.join(DOCS, 'index.html'));
  console.log(`  ✓ ${DOCS}/index.html`);

  // Copy photos: public/assets/photos/  →  docs/photos/
  const SRC_PHOTOS = path.join('public', 'assets', 'photos');
  const DST_PHOTOS = path.join(DOCS, 'photos');
  if (fs.existsSync(SRC_PHOTOS)) {
    let copied = 0, skipped = 0;
    function walk(rel) {
      const srcDir = path.join(SRC_PHOTOS, rel);
      const dstDir = path.join(DST_PHOTOS, rel);
      if (!fs.existsSync(dstDir)) fs.mkdirSync(dstDir, { recursive: true });
      for (const name of fs.readdirSync(srcDir)) {
        const s = path.join(srcDir, name);
        const d = path.join(dstDir, name);
        const st = fs.statSync(s);
        if (st.isDirectory()) {
          walk(path.join(rel, name));
        } else {
          // Incremental: skip if destination exists with same size + mtime
          if (fs.existsSync(d)) {
            const dt = fs.statSync(d);
            if (dt.size === st.size && Math.abs(dt.mtimeMs - st.mtimeMs) < 1000) { skipped++; continue; }
          }
          fs.copyFileSync(s, d);
          fs.utimesSync(d, st.atime, st.mtime);
          copied++;
        }
      }
    }
    walk('');
    console.log(`  ✓ ${DOCS}/photos: ${copied} copied, ${skipped} already up-to-date`);
  } else {
    console.log(`  ⚠ ${SRC_PHOTOS} not found — candidate photos will fall back to initials avatars`);
  }

  // Write a _config.yml so Jekyll doesn't exclude _-prefixed or large files
  fs.writeFileSync(path.join(DOCS, '_config.yml'), 'include: ["_*"]\n');

  // Write a 404 that redirects to root (nice fallback for GH Pages)
  fs.writeFileSync(path.join(DOCS, '404.html'),
`<!DOCTYPE html><html><head><meta charset="utf-8"><title>Not Found</title>
<meta http-equiv="refresh" content="0;url=./"></head>
<body style="background:#080810;color:#F0ECE4;font-family:system-ui;text-align:center;padding:3em">
<h1>Redirecting…</h1><p><a href="./" style="color:#C8922A">Go to TN 2026 Voter Intelligence</a></p>
</body></html>`);

  // robots.txt — allow root, discourage photo indexing
  fs.writeFileSync(path.join(DOCS, 'robots.txt'),
`User-agent: *
Allow: /$
Allow: /index.html
Disallow: /photos/
Disallow: /404.html
`);

  // sitemap.xml — single URL (the main site)
  fs.writeFileSync(path.join(DOCS, 'sitemap.xml'),
`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url><loc>https://karthikkumarm.github.io/TN2026/</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>
</urlset>
`);

  console.log(`  ✓ ${DOCS}/404.html  ·  ${DOCS}/_config.yml  ·  ${DOCS}/robots.txt  ·  ${DOCS}/sitemap.xml\n`);

  console.log('Contents:');
  console.log('  • Manifesto Analysis module (Chart.js)');
  console.log('  • Know Your Candidate module (7,070 candidates inline, no photos)');
  console.log('  • Deep Dive module (174 schemes, 12 sections)');
  console.log('  • Inlined: Google Fonts, Chart.js, all data');
  console.log('  • Dark theme forced');
  console.log('  • Obfuscated JS + base64 body → Notepad-unreadable');
  console.log('  • Right-click, F12, view-source, dev-tools all blocked');
  console.log('  • Mobile responsive (existing media queries preserved)');
  console.log('');
}

build().catch(e => {
  console.error('\n✗ Build failed:', e);
  console.error(e.stack);
  process.exit(1);
});
