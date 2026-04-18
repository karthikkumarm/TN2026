/**
 * Build script: Creates obfuscated versions of TN_2026_DeepDive.html
 * 1. TN_2026_DeepDive_secured.html — obfuscated JS, CSS inline, works offline
 * 2. TN_2026_DeepDive_mammoth.html — single file, everything inlined & heavily obfuscated
 */

const fs = require('fs');
const https = require('https');
const JavaScriptObfuscator = require('javascript-obfuscator');

const SRC = 'TN_2026_DeepDive.html';
const OUT_SECURED = 'TN_2026_DeepDive_secured.html';
const OUT_MAMMOTH = 'TN_2026_DeepDive_mammoth.html';

// ── Fetch URL content ──
function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const get = url.startsWith('https') ? https.get : require('http').get;
    get(url, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchUrl(res.headers.location).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

// ── Fallback system fonts CSS (if Google Fonts fetch fails) ──
const FALLBACK_FONT_CSS = `
@font-face{font-family:'Inter';font-style:normal;font-weight:400;font-display:swap;src:local('Inter Regular'),local('Inter-Regular')}
@font-face{font-family:'Inter';font-style:normal;font-weight:500;font-display:swap;src:local('Inter Medium'),local('Inter-Medium')}
@font-face{font-family:'Inter';font-style:normal;font-weight:600;font-display:swap;src:local('Inter SemiBold'),local('Inter-SemiBold')}
@font-face{font-family:'Inter';font-style:normal;font-weight:700;font-display:swap;src:local('Inter Bold'),local('Inter-Bold')}
@font-face{font-family:'Playfair Display';font-style:normal;font-weight:700;font-display:swap;src:local('Playfair Display Bold'),local('PlayfairDisplay-Bold')}
@font-face{font-family:'Playfair Display';font-style:normal;font-weight:800;font-display:swap;src:local('Playfair Display ExtraBold'),local('PlayfairDisplay-ExtraBold')}
@font-face{font-family:'JetBrains Mono';font-style:normal;font-weight:400;font-display:swap;src:local('JetBrains Mono Regular'),local('JetBrainsMono-Regular')}
`;

async function build() {
  const html = fs.readFileSync(SRC, 'utf8');

  // ── Fetch Google Fonts CSS for inline embedding ──
  let fontCss = FALLBACK_FONT_CSS;
  try {
    console.log('Fetching Google Fonts CSS...');
    fontCss = await fetchUrl('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700;800&family=JetBrains+Mono:wght@400;500&display=swap');
    console.log(`  Fetched ${fontCss.length} chars of font CSS`);
  } catch (e) {
    console.log(`  ⚠ Could not fetch fonts, using fallback: ${e.message}`);
  }

  // ── Extract all <script> blocks ──
  const scriptRegex = /<script>([\s\S]*?)<\/script>/gi;
  let scripts = [];
  let match;
  while ((match = scriptRegex.exec(html)) !== null) {
    scripts.push({ full: match[0], code: match[1], index: match.index });
  }
  console.log(`Found ${scripts.length} script block(s)`);

  // ── Obfuscation settings — effective but runtime-safe ──
  const obfuscationConfig = {
    compact: true,
    controlFlowFlattening: true,
    controlFlowFlatteningThreshold: 0.5,
    deadCodeInjection: true,
    deadCodeInjectionThreshold: 0.3,
    debugProtection: false,
    disableConsoleOutput: false,
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

  // ══════════════════════════════════════════
  // BUILD SECURED VERSION
  // ══════════════════════════════════════════
  console.log('\nBuilding secured version...');
  let securedHtml = html;

  // Replace Google Fonts <link> with inline <style> containing font CSS
  securedHtml = securedHtml.replace(
    /<link rel="preconnect" href="https:\/\/fonts\.googleapis\.com">\n/,
    ''
  );
  securedHtml = securedHtml.replace(
    /<link href="https:\/\/fonts\.googleapis\.com\/css2[^"]*" rel="stylesheet">/,
    '<style id="gfonts">' + fontCss + '</style>'
  );

  // Obfuscate script blocks (reverse order to preserve indices)
  const scripts2 = [];
  const sr2 = /<script>([\s\S]*?)<\/script>/gi;
  while ((match = sr2.exec(securedHtml)) !== null) {
    scripts2.push({ full: match[0], code: match[1], index: match.index });
  }

  for (let i = scripts2.length - 1; i >= 0; i--) {
    const s = scripts2[i];
    const code = s.code.trim();
    if (code.length < 50) continue;

    console.log(`  Obfuscating script block ${i + 1} (${code.length} chars)...`);
    try {
      const obfuscated = JavaScriptObfuscator.obfuscate(code, obfuscationConfig);
      const obfCode = obfuscated.getObfuscatedCode();
      securedHtml = securedHtml.substring(0, s.index) +
                    '<script>' + obfCode + '</script>' +
                    securedHtml.substring(s.index + s.full.length);
      console.log(`  → ${obfCode.length} chars`);
    } catch (e) {
      console.log(`  ⚠ Skipping block ${i + 1}: ${e.message}`);
    }
  }

  fs.writeFileSync(OUT_SECURED, '\uFEFF' + securedHtml, 'utf8');
  const securedSize = (Buffer.byteLength(securedHtml) / 1024).toFixed(0);
  console.log(`\n✓ Secured: ${OUT_SECURED} (${securedSize} KB)`);

  // ══════════════════════════════════════════
  // BUILD MAMMOTH VERSION
  // ══════════════════════════════════════════
  console.log('\nBuilding mammoth single-file version...');

  // Start fresh from original HTML
  let mHtml = html;

  // Inline Google Fonts
  mHtml = mHtml.replace(
    /<link rel="preconnect" href="https:\/\/fonts\.googleapis\.com">\n/,
    ''
  );
  mHtml = mHtml.replace(
    /<link href="https:\/\/fonts\.googleapis\.com\/css2[^"]*" rel="stylesheet">/,
    '<style id="gfonts">' + fontCss + '</style>'
  );

  // Extract CSS
  const cssBlocks = [];
  const cssRx = /<style[^>]*>([\s\S]*?)<\/style>/gi;
  while ((match = cssRx.exec(mHtml)) !== null) {
    cssBlocks.push(match[1]);
  }
  const allCss = cssBlocks.join('\n');

  // Extract body content (everything between <body> and </body>)
  const bodyRx = /<body>([\s\S]*)<\/body>/i;
  const bodyMatch = mHtml.match(bodyRx);
  if (!bodyMatch) { console.error('ERROR: Could not find <body>'); process.exit(1); }
  const bodyContent = bodyMatch[1];

  // Find the main script block in the body (the big D[] + rendering code)
  const bodyScripts = [];
  const bsr = /<script>([\s\S]*?)<\/script>/gi;
  let bm;
  while ((bm = bsr.exec(bodyContent)) !== null) {
    bodyScripts.push(bm[1]);
  }

  // Body HTML (without script tags)
  let bodyHtmlOnly = bodyContent.replace(/<script>[\s\S]*?<\/script>/gi, '');

  // MAMMOTH version is standalone — remove "Main Page" back link (it references another file)
  bodyHtmlOnly = bodyHtmlOnly.replace(
    /<a class="back" href="[^"]*">[^<]*<\/a>\s*/,
    ''
  );

  // Combine all JS
  const allJs = bodyScripts.join('\n;\n');

  // Obfuscate the combined JS
  console.log(`  Obfuscating combined JS (${allJs.length} chars)...`);
  let obfJs;
  try {
    const result = JavaScriptObfuscator.obfuscate(allJs, {
      ...obfuscationConfig,
      deadCodeInjectionThreshold: 0.2,
      controlFlowFlatteningThreshold: 0.4
    });
    obfJs = result.getObfuscatedCode();
    console.log(`  → ${obfJs.length} chars`);
  } catch (e) {
    console.error(`  ⚠ Obfuscation failed: ${e.message}`);
    obfJs = allJs;
  }

  // Encode body HTML as base64, decode at runtime
  const bodyHtmlB64 = Buffer.from(bodyHtmlOnly, 'utf8').toString('base64');

  // Build the mammoth file
  const mammoth = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>TN 2026 Deep Dive — 174 Scheme Analysis</title>
<style>${allCss}</style>
<script>
// Source protection
(function(){
document.addEventListener('contextmenu',function(e){e.preventDefault()});
document.addEventListener('keydown',function(e){
if(e.key==='F12'||(e.ctrlKey&&e.shiftKey&&(e.key==='I'||e.key==='J'||e.key==='C'))||(e.ctrlKey&&e.key==='u')||(e.ctrlKey&&e.key==='s'))
{e.preventDefault();return false}});
document.addEventListener('dragstart',function(e){e.preventDefault()});
document.addEventListener('selectstart',function(e){if(e.target.tagName!=='INPUT'&&e.target.tagName!=='TEXTAREA')e.preventDefault()});
})();
<\/script>
</head>
<body>
<script>
// Runtime loader with proper UTF-8 decoding
(function(){
var _d="${bodyHtmlB64}";
try{
  var bin=atob(_d);
  var bytes=new Uint8Array(bin.length);
  for(var i=0;i<bin.length;i++)bytes[i]=bin.charCodeAt(i);
  var html=new TextDecoder('utf-8').decode(bytes);
  document.body.innerHTML=html;
}catch(e){document.body.innerHTML='<p style="padding:40px;color:#E74C3C">Loading error: '+e.message+'</p>';}
})();
<\/script>
<script>${obfJs}<\/script>
</body>
</html>`;

  fs.writeFileSync(OUT_MAMMOTH, '\uFEFF' + mammoth, 'utf8');
  const mammothSize = (Buffer.byteLength(mammoth) / 1024).toFixed(0);
  console.log(`✓ Mammoth: ${OUT_MAMMOTH} (${mammothSize} KB)\n`);
  console.log('Done! Both files ready.');
}

build().catch(e => { console.error('Build failed:', e); process.exit(1); });
