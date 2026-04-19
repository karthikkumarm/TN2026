/* ================================================================
 * TN Launchpad — Element-Level Tier Pills
 * ================================================================
 * Injects K/T/V/W/E micro-pills into any card or section.
 * Only re-renders THAT element's content — no full-page re-render.
 *
 * Usage (from page JS):
 *   TierPills.attach(containerEl, renderFn)
 *     containerEl: the card/section DOM element
 *     renderFn(tier): returns HTML string for that tier
 *
 * The pills are injected at the top of the container.
 * Clicking a pill calls renderFn(tier) and swaps only the
 * content region inside that container.
 *
 * Global tier switcher still sets the DEFAULT for new pills.
 * Each element can independently override its tier.
 *
 * API:
 *   window.TierPills = {
 *     attach(el, renderFn, opts),   // inject pills + content wrapper
 *     refresh(el),                  // re-render current tier for one element
 *     refreshAll(),                 // re-render all attached elements at their current tier
 *     setDefault(tier),             // update default tier (called by global switcher)
 *     getDefault(),                 // get current default tier
 *     detach(el)                    // remove pills from element
 *   }
 * ================================================================ */
(function(){
'use strict';

var AT = window.AudienceTiers;
var TIER_IDS = ['K','T','V','W','E'];
var TIER_LABELS = {K:'\ud83e\uddd2',T:'\ud83c\udf92',V:'\ud83d\uddf3\ufe0f',W:'\ud83d\udccb',E:'\ud83d\udcc8'};
var TIER_TITLES = {K:'Kid (10)',T:'Teen (15)',V:'Voter 18+',W:'Policy Wonk',E:'Economist'};

/* Track all attached elements */
var registry = [];
var styleInjected = false;

function getDefault(){
  if(AT && AT.current) return AT.current();
  try{ return localStorage.getItem('tn26_tier') || 'V'; } catch(e){ return 'V'; }
}

function injectStyle(){
  if(styleInjected) return;
  styleInjected = true;
  var css = document.createElement('style');
  css.textContent =
    '.tp-bar{display:inline-flex;gap:2px;padding:2px;background:rgba(10,10,15,.7);border:1px solid rgba(255,255,255,.06);border-radius:10px;margin-bottom:8px;user-select:none;flex-wrap:wrap}'
  + '.tp-pill{font-size:10px;padding:2px 7px;border-radius:8px;border:none;background:none;color:var(--t3,#6A667E);cursor:pointer;font-family:inherit;transition:all .18s ease;line-height:1.4;white-space:nowrap}'
  + '.tp-pill:hover{background:rgba(255,255,255,.05);color:var(--t1,#F0ECE4)}'
  + '.tp-pill.active{background:rgba(200,146,42,.18);color:var(--gold,#C8922A);font-weight:600;border:1px solid rgba(200,146,42,.25)}'
  + '.tp-content{transition:opacity .2s ease}'
  + '.tp-content.tp-fading{opacity:0}'
  + '@media(max-width:480px){.tp-pill{font-size:9px;padding:2px 5px}}';
  document.head.appendChild(css);
}

/**
 * attach(el, renderFn, opts)
 * @param {HTMLElement} el — container element (card, section, panel)
 * @param {function(string):string} renderFn — returns HTML for given tier id
 * @param {object} opts — optional: { tier:'V', position:'top'|'bottom', cssClass:'' }
 */
function attach(el, renderFn, opts){
  if(!el || !renderFn) return;
  opts = opts || {};
  injectStyle();

  /* Don't double-attach */
  for(var i=0;i<registry.length;i++){
    if(registry[i].el === el){ registry[i].renderFn = renderFn; refresh(el); return; }
  }

  var tier = opts.tier || getDefault();

  /* Build pill bar */
  var bar = document.createElement('div');
  bar.className = 'tp-bar' + (opts.cssClass ? ' '+opts.cssClass : '');
  bar.setAttribute('role','tablist');
  bar.setAttribute('aria-label','Reading level');

  for(var j=0;j<TIER_IDS.length;j++){
    var btn = document.createElement('button');
    btn.className = 'tp-pill' + (TIER_IDS[j] === tier ? ' active' : '');
    btn.setAttribute('data-tp-tier', TIER_IDS[j]);
    btn.setAttribute('title', TIER_TITLES[TIER_IDS[j]]);
    btn.setAttribute('role','tab');
    btn.setAttribute('aria-selected', TIER_IDS[j] === tier ? 'true' : 'false');
    btn.textContent = TIER_LABELS[TIER_IDS[j]] + ' ' + TIER_IDS[j];
    bar.appendChild(btn);
  }

  /* Build content wrapper */
  var content = document.createElement('div');
  content.className = 'tp-content';

  /* Render initial content */
  try{ content.innerHTML = renderFn(tier); } catch(e){ content.innerHTML = ''; }

  /* Insert into container */
  if(opts.position === 'bottom'){
    el.appendChild(bar);
    el.appendChild(content);
  } else {
    el.insertBefore(content, el.firstChild);
    el.insertBefore(bar, el.firstChild);
  }

  /* Register */
  var entry = { el:el, bar:bar, content:content, renderFn:renderFn, tier:tier };
  registry.push(entry);

  /* Pill click handler */
  bar.addEventListener('click', function(ev){
    var pill = ev.target.closest('.tp-pill');
    if(!pill) return;
    var newTier = pill.getAttribute('data-tp-tier');
    if(newTier === entry.tier) return;

    /* Update pills */
    var pills = bar.querySelectorAll('.tp-pill');
    for(var k=0;k<pills.length;k++){
      var isActive = pills[k].getAttribute('data-tp-tier') === newTier;
      pills[k].classList.toggle('active', isActive);
      pills[k].setAttribute('aria-selected', isActive ? 'true' : 'false');
    }

    /* Fade out, swap, fade in */
    entry.tier = newTier;
    content.classList.add('tp-fading');
    setTimeout(function(){
      try{ content.innerHTML = entry.renderFn(newTier); } catch(e){ content.innerHTML = ''; }
      content.classList.remove('tp-fading');
    }, 180);
  });
}

/** Re-render a single element at its current tier */
function refresh(el){
  for(var i=0;i<registry.length;i++){
    if(registry[i].el === el){
      var e = registry[i];
      try{ e.content.innerHTML = e.renderFn(e.tier); } catch(ex){}
      return;
    }
  }
}

/** Re-render all attached elements at their current local tier */
function refreshAll(){
  for(var i=0;i<registry.length;i++){
    var e = registry[i];
    try{ e.content.innerHTML = e.renderFn(e.tier); } catch(ex){}
  }
}

/** When global tier changes, update default and optionally sync all elements */
function setDefault(tier){
  /* Don't force all elements — each keeps its own tier.
     Only newly attached elements will use this default. */
}

/** Get current default tier */
function detach(el){
  for(var i=registry.length-1;i>=0;i--){
    if(registry[i].el === el){
      try{ registry[i].bar.parentNode.removeChild(registry[i].bar); } catch(e){}
      try{ registry[i].content.parentNode.removeChild(registry[i].content); } catch(e){}
      registry.splice(i,1);
      return;
    }
  }
}

/* Listen for global tier changes — update newly created pills' default only */
document.addEventListener('tn26:tier-change', function(e){
  /* Don't force existing pills. Each element owns its tier. */
});

window.TierPills = {
  attach: attach,
  refresh: refresh,
  refreshAll: refreshAll,
  setDefault: setDefault,
  getDefault: getDefault,
  detach: detach
};

})();
