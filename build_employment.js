/**
 * Employment-Upgrade Obfuscation Builder
 * 
 * Produces a `dist/` folder with 5 obfuscated pages + bundled src modules:
 *   index.html, BusinessGuide.html, Heritage.html, VoterIntelligence.html, DeepDive.html
 * 
 * Obfuscation layers:
 *   1. All src/*.js modules → XOR + base64 encoded single bundle
 *   2. All inline <script> blocks → javascript-obfuscator (medium preset)
 *   3. <body> content → base64 encoded, decoded at runtime
 *   4. Source protection: disable right-click, F12, Ctrl+U, drag, select
 *   5. Google Fonts CSS inlined (no CDN dependency at runtime)
 *   6. Chart.js inlined for VoterIntelligence (no CDN)
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const crypto = require('crypto');
const JavaScriptObfuscator = require('javascript-obfuscator');

const DIST = path.join(__dirname, 'dist');
const SRC_DIR = path.join(__dirname, 'src');

// ── Pages to process ──
const PAGES = [
  {
    src: 'index.html',
    out: 'index.html',
    title: 'TN Launchpad — Business & Election Intelligence for Tamil Nadu'
  },
  {
    src: 'TN_2026_BusinessGuide.html',
    out: 'TN_2026_BusinessGuide.html',
    title: 'TN Launchpad — Business & Startup Guide'
  },
  {
    src: 'TN_Heritage.html',
    out: 'TN_Heritage.html',
    title: 'TN Launchpad — Tamil Nadu Heritage & Economy'
  },
  {
    src: 'TN_2026_VoterIntelligence.html',
    out: 'TN_2026_VoterIntelligence.html',
    title: 'TN Launchpad — Voter Intelligence & Manifesto Analysis'
  },
  {
    src: 'TN_2026_DeepDive_v2.html',
    out: 'TN_2026_DeepDive_v2.html',
    title: 'TN Launchpad — 174 Scheme Deep Dive'
  },
  {
    src: 'TN_2026_Pathfinder.html',
    out: 'TN_2026_Pathfinder.html',
    title: 'TN Launchpad — Pathfinder: Career & Livelihood Guide'
  },
  {
    src: 'TN_2026_CivicTech.html',
    out: 'TN_2026_CivicTech.html',
    title: 'TN Launchpad — Civic Tech Solutions'
  }
];

// ── Utilities ──
function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchUrl(res.headers.location).then(resolve).catch(reject);
      }
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    }).on('error', reject);
  });
}

function xorEncode(plaintext, key) {
  var buf = Buffer.from(plaintext, 'utf8');
  var keyBuf = Buffer.from(key, 'utf8');
  var out = Buffer.alloc(buf.length);
  for (var i = 0; i < buf.length; i++) {
    out[i] = buf[i] ^ keyBuf[i % keyBuf.length];
  }
  return out.toString('base64');
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

// Source protection script (injected into every page)
const PROTECTION_JS = `(function(){
document.addEventListener('contextmenu',function(e){e.preventDefault()});
document.addEventListener('keydown',function(e){
if(e.key==='F12'||(e.ctrlKey&&e.shiftKey&&(e.key==='I'||e.key==='J'||e.key==='C'))||(e.ctrlKey&&e.key==='u')||(e.ctrlKey&&e.key==='s'))
{e.preventDefault();return false}});
document.addEventListener('dragstart',function(e){e.preventDefault()});
document.addEventListener('selectstart',function(e){if(e.target.tagName!=='INPUT'&&e.target.tagName!=='TEXTAREA'&&e.target.tagName!=='SELECT')e.preventDefault()});
var _t=0;setInterval(function(){var s=performance.now();debugger;if(performance.now()-s>100){_t++;if(_t>2)document.body.innerHTML=''}},3000);
})();`;

// Obfuscation config — medium preset (balanced speed vs protection)
const OBF_CONFIG = {
  compact: true,
  controlFlowFlattening: true,
  controlFlowFlatteningThreshold: 0.4,
  deadCodeInjection: true,
  deadCodeInjectionThreshold: 0.2,
  debugProtection: false,
  disableConsoleOutput: false,
  identifierNamesGenerator: 'hexadecimal',
  log: false,
  numbersToExpressions: true,
  renameGlobals: false,
  selfDefending: false,
  simplify: true,
  splitStrings: true,
  splitStringsChunkLength: 10,
  stringArray: true,
  stringArrayCallsTransform: true,
  stringArrayCallsTransformThreshold: 0.5,
  stringArrayEncoding: ['base64'],
  stringArrayIndexShift: true,
  stringArrayRotate: true,
  stringArrayShuffle: true,
  stringArrayWrappersCount: 2,
  stringArrayWrappersChainedCalls: true,
  stringArrayWrappersParametersMaxCount: 3,
  stringArrayWrappersType: 'function',
  stringArrayThreshold: 0.75,
  transformObjectKeys: true,
  unicodeEscapeSequence: false
};

// Lighter config for large code blocks to avoid excessive output size
const OBF_CONFIG_LIGHT = {
  ...OBF_CONFIG,
  controlFlowFlatteningThreshold: 0.25,
  deadCodeInjection: false,
  splitStrings: false,
  stringArrayWrappersCount: 1,
  stringArrayThreshold: 0.5
};

async function build() {
  console.log('═══════════════════════════════════════════');
  console.log('  TN 2026 Employment-Upgrade Builder');
  console.log('═══════════════════════════════════════════\n');

  // ── Create dist folder ──
  if (fs.existsSync(DIST)) {
    fs.rmSync(DIST, { recursive: true });
  }
  fs.mkdirSync(DIST, { recursive: true });

  // ── 1. Fetch external resources ──
  console.log('▸ Fetching external resources...');
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
    console.log(`  Chart.js: ${(chartJs.length / 1024).toFixed(0)} KB`);
  } catch (e) {
    console.log(`  ⚠ Chart.js fetch failed: ${e.message}`);
  }

  // ── 2. Bundle all src/*.js modules ──
  console.log('\n▸ Bundling src/ modules...');

  // Collect all src modules (order matters for dependencies)
  const SRC_MODULES = [
    'audience-tiers.js',
    'business-guide-data.js',
    'tools-data.js',
    'tn-history-data.js',
    'trade-fdi-data.js',
    'district-data.js',
    'success-stories-data.js',
    'subsidies-data.js',
    'state-comparison-data.js',
    'pathfinder-data.js',
    'civic-tech-data.js',
    'employment-data.js',
    'policy-links.js',
    'search-index.js',
    'tier-pills.js',
    'tier-switcher.js',
    'google-translate.js',
    'floating-dictionary.js'
  ];

  let srcBundle = '';
  for (const mod of SRC_MODULES) {
    const fp = path.join(SRC_DIR, mod);
    if (fs.existsSync(fp)) {
      srcBundle += '\n;' + fs.readFileSync(fp, 'utf8');
      console.log(`  + ${mod} (${(fs.statSync(fp).size / 1024).toFixed(1)} KB)`);
    } else {
      console.log(`  ⚠ ${mod} not found, skipping`);
    }
  }

  // XOR + base64 encode the bundle
  const XOR_KEY = crypto.randomBytes(16).toString('hex');
  const srcEncoded = xorEncode(srcBundle, XOR_KEY);
  const srcLoaderJs = `(function(){var _k="${XOR_KEY}",_d="${srcEncoded}";try{var r=atob(_d),o=[];for(var i=0;i<r.length;i++)o.push(r.charCodeAt(i)^_k.charCodeAt(i%_k.length));var c=new TextDecoder('utf-8').decode(new Uint8Array(o));new Function(c)();}catch(e){console.error('Module load error:',e)}})();`;
  console.log(`  Bundle: ${(srcBundle.length / 1024).toFixed(0)} KB plain → ${(srcLoaderJs.length / 1024).toFixed(0)} KB XOR+b64`);

  // ── 3. Process each page ──
  for (const page of PAGES) {
    console.log(`\n${'═'.repeat(60)}`);
    console.log(`▸ Processing: ${page.src}`);
    console.log('═'.repeat(60));

    const html = fs.readFileSync(page.src, 'utf8');

    // Extract all CSS (inline <style> blocks)
    const cssBlocks = [];
    let m;
    const cssRx = /<style[^>]*>([\s\S]*?)<\/style>/gi;
    while ((m = cssRx.exec(html)) !== null) {
      cssBlocks.push(m[1]);
    }
    let allCss = cssBlocks.join('\n');
    // Add font CSS
    allCss = fontCss + '\n' + allCss;
    console.log(`  CSS: ${(allCss.length / 1024).toFixed(0)} KB`);

    // Extract body
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
    if (!bodyMatch) {
      console.error(`  ✗ No <body> found in ${page.src}, skipping`);
      continue;
    }
    let bodyContent = bodyMatch[1];

    // Separate inline scripts from ENTIRE HTML (head + body)
    const inlineScripts = [];
    const scriptRx = /<script(?:\s[^>]*)?>[\s\S]*?<\/script>/gi;
    let scriptMatch;
    while ((scriptMatch = scriptRx.exec(html)) !== null) {
      const tag = scriptMatch[0];
      // Check ONLY the opening tag for src= attribute (not the content)
      var openTag = tag.match(/<script[^>]*>/i)[0];
      if (/\ssrc\s*=/i.test(openTag)) continue;
      // Extract the JS code
      const codeMatch = tag.match(/<script[^>]*>([\s\S]*?)<\/script>/i);
      if (codeMatch && codeMatch[1].trim().length > 30) {
        inlineScripts.push(codeMatch[1]);
      }
    }

    // Body HTML without any script tags (both inline and external)
    let bodyHtml = bodyContent.replace(/<script(?:\s[^>]*)?>[\s\S]*?<\/script>/gi, '');
    // Fix nav links to point to dist-relative paths (pages are in same folder)
    // No path changes needed — all pages are in the same dist/ folder

    console.log(`  Inline scripts: ${inlineScripts.length} block(s), ${(inlineScripts.join('').length / 1024).toFixed(0)} KB total`);

    // Obfuscate inline JS
    let obfInlineJs = '';
    for (let i = 0; i < inlineScripts.length; i++) {
      const code = inlineScripts[i].trim();
      if (code.length < 50) {
        obfInlineJs += '\n;' + code;
        continue;
      }
      const t0 = Date.now();
      try {
        // Use light config for large blocks (>50KB), medium for smaller
        const cfg = code.length > 50000 ? OBF_CONFIG_LIGHT : OBF_CONFIG;
        const result = JavaScriptObfuscator.obfuscate(code, cfg);
        const obf = result.getObfuscatedCode();
        obfInlineJs += '\n;' + obf;
        console.log(`  Obfuscated block ${i + 1}: ${(code.length / 1024).toFixed(0)}K → ${(obf.length / 1024).toFixed(0)}K (${((Date.now() - t0) / 1000).toFixed(1)}s)`);
      } catch (e) {
        console.log(`  ⚠ Block ${i + 1} obfuscation failed (${e.message}), using raw`);
        obfInlineJs += '\n;' + code;
      }
    }

    // Base64-encode body HTML
    const bodyB64 = Buffer.from(bodyHtml, 'utf8').toString('base64');
    console.log(`  Body: ${(bodyHtml.length / 1024).toFixed(0)} KB HTML → ${(bodyB64.length / 1024).toFixed(0)} KB base64`);

    // For VoterIntelligence, inline Chart.js
    const chartInject = page.src.includes('VoterIntelligence') && chartJs
      ? `<script>${chartJs}<\/script>\n`
      : '';

    // Assemble the final obfuscated page
    const finalHtml = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${page.title}</title>
<meta name="robots" content="noindex,nofollow">
<style>${allCss}</style>
<script>${PROTECTION_JS}<\/script>
</head>
<body>
<script>
(function(){
var _d="${bodyB64}";
try{
  var bin=atob(_d);
  var bytes=new Uint8Array(bin.length);
  for(var i=0;i<bin.length;i++)bytes[i]=bin.charCodeAt(i);
  document.body.innerHTML=new TextDecoder('utf-8').decode(bytes);
}catch(e){document.body.innerHTML='<p style="padding:40px;color:#E74C3C">Loading error: '+e.message+'</p>';}
})();
<\/script>
${chartInject}<script>${srcLoaderJs}<\/script>
<script>
(function(){
try{${obfInlineJs}}catch(e){console.error('App init error:',e)}
})();
<\/script>
</body>
</html>`;

    const outPath = path.join(DIST, page.out);
    fs.writeFileSync(outPath, finalHtml, 'utf8');
    const sizeKB = (Buffer.byteLength(finalHtml) / 1024).toFixed(0);
    console.log(`  ✓ ${page.out} → ${sizeKB} KB`);
  }

  // ── 4. Copy vercel.json for deployment ──
  const vercelConfig = {
    buildCommand: null,
    outputDirectory: "dist",
    rewrites: [],
    cleanUrls: true,
    trailingSlash: false,
    headers: [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Cache-Control", value: "public, max-age=3600" }
        ]
      }
    ]
  };
  fs.writeFileSync(path.join(DIST, 'vercel.json'), JSON.stringify(vercelConfig, null, 2));

  // Summary
  console.log('\n═══════════════════════════════════════════');
  console.log('  BUILD COMPLETE');
  console.log('═══════════════════════════════════════════');
  const distFiles = fs.readdirSync(DIST);
  let totalSize = 0;
  for (const f of distFiles) {
    const sz = fs.statSync(path.join(DIST, f)).size;
    totalSize += sz;
    console.log(`  ${f.padEnd(40)} ${(sz / 1024).toFixed(0)} KB`);
  }
  console.log(`  ${'─'.repeat(50)}`);
  console.log(`  TOTAL: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`\n  Output: ${DIST}/`);
  console.log('  Deploy: vercel --prod (from dist/ folder)');
}

build().catch(e => {
  console.error('\n✗ Build failed:', e);
  process.exit(1);
});
