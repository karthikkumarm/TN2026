/* ================================================================
 * TN Launchpad — Universal Floating Tier Switcher
 * ================================================================
 * Injects a floating pill bar at the bottom-right of every page.
 * Persists tier in localStorage via AudienceTiers.setCurrent().
 * Dispatches 'tn26:tier-change' which pages listen to for re-render.
 * ================================================================ */
(function(){
'use strict';

var AT = window.AudienceTiers;
if(!AT) return;

var TIERS = [
  {id:'K', label:'\ud83e\uddd2 Kid',   full:'Kid (10)'},
  {id:'T', label:'\ud83c\udf92 Teen',  full:'Teen (15)'},
  {id:'V', label:'\ud83d\uddf3\ufe0f Voter', full:'Voter 18+'},
  {id:'W', label:'\ud83d\udccb Wonk',  full:'Policy Wonk'},
  {id:'E', label:'\ud83d\udcc8 Econ',  full:'Economist'}
];

/* Build DOM */
var wrap = document.createElement('div');
wrap.id = 'tierFloat';
wrap.innerHTML = '<div class="tf-label">Read as:</div><div class="tf-pills" id="tfPills"></div>';

var pillsDiv = wrap.querySelector('#tfPills');
var current = AT.current ? AT.current() : 'V';

for(var i = 0; i < TIERS.length; i++){
  var btn = document.createElement('button');
  btn.className = 'tf-pill' + (TIERS[i].id === current ? ' active' : '');
  btn.setAttribute('data-tier', TIERS[i].id);
  btn.setAttribute('title', TIERS[i].full);
  btn.textContent = TIERS[i].label;
  pillsDiv.appendChild(btn);
}

/* Style */
var style = document.createElement('style');
style.textContent = '#tierFloat{position:fixed;bottom:20px;right:20px;z-index:9999;background:rgba(13,15,18,.92);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:8px 12px;display:flex;align-items:center;gap:8px;box-shadow:0 8px 32px rgba(0,0,0,.4);transition:all .3s cubic-bezier(.4,0,.2,1)}'
  + '#tierFloat:hover{border-color:rgba(200,146,42,.2);box-shadow:0 8px 32px rgba(200,146,42,.1)}'
  + '.tf-label{font-size:11px;color:#7A7265;font-weight:600;white-space:nowrap;letter-spacing:.04em}'
  + '.tf-pills{display:flex;gap:3px}'
  + '.tf-pill{font-size:11px;padding:4px 8px;border-radius:10px;border:1px solid rgba(255,255,255,.06);background:none;color:#B8B0A2;cursor:pointer;font-family:inherit;transition:all .2s;white-space:nowrap}'
  + '.tf-pill:hover{background:rgba(255,255,255,.04);color:#F0ECE4}'
  + '.tf-pill.active{background:#C8922A;color:#000;border-color:#C8922A;font-weight:600}'
  + '@media(max-width:768px){#tierFloat{bottom:68px;right:8px;left:8px;justify-content:center;padding:6px 8px}.tf-label{display:none}.tf-pill{font-size:10px;padding:3px 6px}}';
document.head.appendChild(style);

/* Event handler */
pillsDiv.addEventListener('click', function(e){
  var pill = e.target.closest('.tf-pill');
  if(!pill) return;
  var tier = pill.getAttribute('data-tier');
  var pills = pillsDiv.querySelectorAll('.tf-pill');
  for(var j = 0; j < pills.length; j++){
    pills[j].classList.toggle('active', pills[j].getAttribute('data-tier') === tier);
  }
  if(AT.setCurrent) AT.setCurrent(tier);
});

/* Inject into page */
document.body.appendChild(wrap);

})();
