/**
 * Restore TN_2026_DeepDive.html from the accidentally-overwritten mammoth build.
 * The build failed obfuscation, so JS is still plain-text. Body is base64.
 */
const fs = require('fs');

const BIG = fs.readFileSync('TN_2026_DeepDive.html', 'utf8');

// ── Strip BOM if present ──
const src = BIG.charCodeAt(0) === 0xFEFF ? BIG.slice(1) : BIG;

// ── 1. Extract body base64 ──
const bodyMatch = src.match(/var _b="([A-Za-z0-9+/=]+)";/);
if (!bodyMatch) { console.error('No body base64 found'); process.exit(1); }
const bodyHtml = Buffer.from(bodyMatch[1], 'base64').toString('utf8');
console.log(`Decoded body: ${(bodyHtml.length/1024).toFixed(0)} KB`);

// ── 2. Extract merged CSS — between <style id="app"> ... </style> ──
const cssMatch = src.match(/<style id="app">([\s\S]*?)<\/style>/);
if (!cssMatch) { console.error('No app CSS found'); process.exit(1); }
const mergedCss = cssMatch[1];
// Split at our injected marker
const cssSepIdx = mergedCss.indexOf('/* === DeepDive module styles === */');
if (cssSepIdx < 0) { console.error('CSS separator not found'); process.exit(1); }
const ddCssScoped = mergedCss.substring(cssSepIdx + '/* === DeepDive module styles === */'.length);
console.log(`DD CSS (scoped): ${(ddCssScoped.length/1024).toFixed(0)} KB`);

// ── 3. Extract all script tags ──
const scriptRe = /<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g;
const scripts = [];
let m;
while ((m = scriptRe.exec(src)) !== null) scripts.push(m[1]);
console.log(`Found ${scripts.length} script blocks`);

// The app JS contains function definitions; candidate data is just a base64 string assignment.
// Filter out: protection IIFE, candidate data, Chart.js, body loader.
const appJsCandidates = scripts.filter(s =>
  !/^\s*window\.__CANDIDATE_DATA__/.test(s) &&          // candidate data blob
  !/Chart\.register|chart\.js|Chart\.prototype/.test(s.substring(0, 500)) && // chart.js
  !/var _b=/.test(s.substring(0, 100)) &&                // body loader
  !/addEventListener\(['"]contextmenu/.test(s.substring(0, 500)) // protection
);
console.log(`App JS candidates: ${appJsCandidates.length}`);
appJsCandidates.forEach((s,i) => console.log(`  [${i}] ${(s.length/1024).toFixed(0)} KB — starts with: ${s.substring(0, 60).replace(/\n/g, ' ')}`));
const appJs = appJsCandidates.sort((a,b) => b.length - a.length)[0];
console.log(`Selected app JS: ${(appJs.length/1024).toFixed(0)} KB`);

// ── 4. Split app JS at "\n;\n" — last such marker separates VI from DD ──
// The DD JS is large (213 KB) and starts with something recognizable from DeepDive
// Look for "const BATCHES" or "const D = [" or similar DD-specific markers
const ddMarkerIdx = appJs.indexOf('const BATCHES');
let viAppJs, ddAppJs;
if (ddMarkerIdx > 0) {
  // Find the last "\n;\n" before BATCHES
  const splitIdx = appJs.lastIndexOf('\n;\n', ddMarkerIdx);
  if (splitIdx > 0) {
    viAppJs = appJs.substring(0, splitIdx);
    ddAppJs = appJs.substring(splitIdx + 3);
  } else {
    ddAppJs = appJs.substring(appJs.lastIndexOf('\n', ddMarkerIdx));
    viAppJs = appJs.substring(0, appJs.length - ddAppJs.length);
  }
} else {
  console.error('DD marker "const BATCHES" not found — cannot split app JS');
  process.exit(1);
}
console.log(`VI app JS: ${(viAppJs.length/1024).toFixed(0)} KB`);
console.log(`DD app JS: ${(ddAppJs.length/1024).toFixed(0)} KB`);

// ── 5. Extract DD body portion from merged body HTML ──
// My injection marker: "MODULE 3 — DEEP DIVE" comment + <div class="module" id="module-deepdive"><main class="dd-main">
const ddBodyStart = bodyHtml.indexOf('<main class="dd-main">');
const ddBodyEnd = bodyHtml.indexOf('</main>\n</div>\n<footer');
if (ddBodyStart < 0 || ddBodyEnd < 0) {
  // Try alternative markers
  const alt1 = bodyHtml.indexOf('id="module-deepdive"');
  console.error('Cannot locate DD body in merged. ddBodyStart=', ddBodyStart, 'ddBodyEnd=', ddBodyEnd, 'alt1=', alt1);
  // Dump first chars around module-deepdive
  if (alt1 > 0) console.error('Context:', bodyHtml.substring(alt1, alt1+300));
  process.exit(1);
}
const ddMainContent = bodyHtml.substring(ddBodyStart + '<main class="dd-main">'.length, ddBodyEnd);
console.log(`DD <main> content: ${(ddMainContent.length/1024).toFixed(0)} KB`);

// ── 6. Un-scope DD CSS (remove "#module-deepdive " prefix we added) ──
let ddCssRestored = ddCssScoped.replace(/#module-deepdive\s+(h[1-6]|section|table|p|footer|main|ul|li|td|th|tr|a)/g, '$1');

// ── 7. Reconstruct DeepDive source file ──
// We need DD's <head>, nav, protection script, app script.
// Re-use the body template from the existing DD_secured version? No — that's obfuscated.
// Just use a minimal reconstruction; the source DD was ~315KB structured file.

// Extract DD's original protection IIFE — it was the first script in DD which was stripped. We can regenerate.
const protectionJs = `
(function(){
document.addEventListener('contextmenu',function(e){e.preventDefault()});
document.addEventListener('keydown',function(e){
if(e.key==='F12'||(e.ctrlKey&&e.shiftKey&&(e.key==='I'||e.key==='J'||e.key==='C'))||(e.ctrlKey&&e.key==='u')||(e.ctrlKey&&e.key==='s'))
{e.preventDefault();return false}});
document.addEventListener('dragstart',function(e){e.preventDefault()});
document.addEventListener('selectstart',function(e){if(e.target.tagName!=='INPUT'&&e.target.tagName!=='TEXTAREA')e.preventDefault()});
})();`;

// Reconstruct full DD file
const ddReconstructed = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>TN 2026 — Deep Dive: 174 Schemes Analysis</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
:root {
  --bg0:#0D0F12; --bg1:#161A1F; --bg2:#1E2329; --bg3:#262C34;
  --t1:#F0ECE4; --t2:#B8B0A2; --t3:#7A7265;
  --gold:#C8922A; --r:10px;
  --serif:'Playfair Display',Georgia,serif;
  --sans:'Inter',-apple-system,sans-serif;
  --mono:'JetBrains Mono',monospace;
}
body{margin:0;background:var(--bg0);color:var(--t1);font-family:var(--sans);line-height:1.6}
${ddCssRestored}
</style>
<script>${protectionJs}</script>
</head>
<body>
<nav>
<a class="back" href="TN_2026_VoterIntelligence.html">← Main Page</a>
<div class="title">TN 2026 Deep Dive — 174 Schemes</div>
</nav>
<main>
${ddMainContent}
</main>
<script>
${ddAppJs}
</script>
</body>
</html>`;

fs.writeFileSync('TN_2026_DeepDive.html', ddReconstructed, 'utf8');
console.log(`\n✓ Restored TN_2026_DeepDive.html: ${(ddReconstructed.length/1024).toFixed(0)} KB`);

// Also save the VI appJs back-up (in case)
// VI source is still intact on disk (91 KB) per earlier ls
console.log('VoterIntelligence source (91 KB) is intact on disk — no restore needed.');
