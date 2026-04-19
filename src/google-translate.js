/* ================================================================
 * TN Launchpad — Google Translate Integration
 * ================================================================
 * Adds a clean Tamil/English toggle in the nav bar area.
 * Uses Google Translate's free widget under the hood.
 * Hides default branding for cleaner UX.
 * ================================================================ */
(function(){
'use strict';

/* Inject Google Translate Element (hidden) */
var gtDiv = document.createElement('div');
gtDiv.id = 'google_translate_element';
gtDiv.style.cssText = 'position:absolute;top:-9999px;left:-9999px;opacity:0;pointer-events:none';
document.body.appendChild(gtDiv);

/* Create visible toggle button */
var btn = document.createElement('button');
btn.id = 'langToggle';
btn.innerHTML = '\ud83c\uddee\ud83c\uddf3 \u0ba4\u0bae\u0bbf\u0bb4\u0bcd';
btn.title = 'Translate to Tamil';
btn.setAttribute('aria-label', 'Toggle Tamil translation');

var style = document.createElement('style');
style.textContent = '#langToggle{position:fixed;top:14px;right:16px;z-index:10001;font-size:12px;padding:5px 12px;border-radius:10px;border:1px solid rgba(255,255,255,.1);background:rgba(13,15,18,.85);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);color:#B8B0A2;cursor:pointer;font-family:inherit;transition:all .2s;white-space:nowrap}'
  + '#langToggle:hover{border-color:rgba(200,146,42,.3);color:#C8922A;background:rgba(200,146,42,.08)}'
  + '#langToggle.active{background:rgba(200,146,42,.15);color:#C8922A;border-color:rgba(200,146,42,.3)}'
  + '.goog-te-banner-frame,.skiptranslate{display:none!important}'
  + 'body{top:0!important}'
  + '@media(max-width:768px){#langToggle{top:auto;bottom:70px;right:auto;left:8px;font-size:11px;padding:4px 8px}}';
document.head.appendChild(style);
document.body.appendChild(btn);

var isTranslated = false;

btn.addEventListener('click', function(){
  if(!isTranslated){
    /* Trigger Google Translate to Tamil */
    var sel = document.querySelector('#google_translate_element select');
    if(sel){
      sel.value = 'ta';
      sel.dispatchEvent(new Event('change'));
      isTranslated = true;
      btn.innerHTML = '\ud83c\uddec\ud83c\udde7 English';
      btn.title = 'Switch back to English';
      btn.classList.add('active');
    }
  } else {
    /* Switch back to English */
    var sel2 = document.querySelector('#google_translate_element select');
    if(sel2){
      sel2.value = 'en';
      sel2.dispatchEvent(new Event('change'));
    }
    /* Also try the restore function */
    if(window.google && window.google.translate){
      var frame = document.querySelector('.goog-te-banner-frame');
      if(frame){
        var innerDoc = frame.contentDocument || frame.contentWindow.document;
        var restoreBtn = innerDoc.querySelector('.goog-close-link');
        if(restoreBtn) restoreBtn.click();
      }
    }
    isTranslated = false;
    btn.innerHTML = '\ud83c\uddee\ud83c\uddf3 \u0ba4\u0bae\u0bbf\u0bb4\u0bcd';
    btn.title = 'Translate to Tamil';
    btn.classList.remove('active');
  }
});

/* Load Google Translate script */
window.googleTranslateElementInit = function(){
  new google.translate.TranslateElement({
    pageLanguage: 'en',
    includedLanguages: 'ta',
    autoDisplay: false,
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE
  }, 'google_translate_element');
};

var gtScript = document.createElement('script');
gtScript.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
gtScript.async = true;
document.head.appendChild(gtScript);

})();
