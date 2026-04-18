/* ============================================================
 * TN 2026 — Tooltip System (multi-audience, floating UI)
 * ============================================================
 * Attach explanations to ANY element via:
 *   <span data-tip="manifesto">Manifesto</span>          → UI glossary lookup
 *   <span data-tip-text="Custom inline tip">…</span>     → literal text
 *   <button data-tip-scheme="42">Open</button>           → scheme #42 at current tier
 *
 * Tooltips:
 *   - hover (desktop) / tap (mobile)
 *   - re-render on tier change
 *   - keyboard-accessible (focusable triggers get same tooltip)
 *   - dismissable on Escape / outside-click
 *   - shows mini tier-switcher inline so reader can flip levels in-place
 * ============================================================ */

(function () {
  'use strict';
  if (!window.AudienceTiers) { console.warn('[tn26-tooltips] AudienceTiers not loaded'); return; }
  const AT = window.AudienceTiers;

  // ---------- styles ----------
  const css = `
.tn-tip-host { position: fixed; z-index: 99999; max-width: 360px; pointer-events: auto;
  background: rgba(8,8,16,0.97); color: #E8E8EC; border: 1px solid rgba(200,146,42,0.35);
  border-radius: 12px; padding: 14px 16px; font-family: 'Inter', system-ui, sans-serif;
  font-size: 13px; line-height: 1.55; box-shadow: 0 10px 40px rgba(0,0,0,0.6);
  backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
  opacity: 0; transform: translateY(4px) scale(0.98); transition: opacity .15s, transform .15s;
}
.tn-tip-host.show { opacity: 1; transform: translateY(0) scale(1); }
.tn-tip-host .tip-tier-row { display: flex; gap: 4px; margin: 0 0 10px 0; padding-bottom: 8px;
  border-bottom: 1px solid rgba(200,146,42,0.18); flex-wrap: wrap; }
.tn-tip-host .tip-tier-btn { flex: 1 1 auto; min-width: 0; padding: 4px 6px; font-size: 11px;
  background: transparent; color: rgba(232,232,236,0.55); border: 1px solid rgba(200,146,42,0.18);
  border-radius: 6px; cursor: pointer; font-family: inherit; transition: all .15s; }
.tn-tip-host .tip-tier-btn:hover { color: #E8E8EC; border-color: rgba(200,146,42,0.45); }
.tn-tip-host .tip-tier-btn.active { background: rgba(200,146,42,0.22); color: #FFD98C;
  border-color: rgba(200,146,42,0.65); font-weight: 600; }
.tn-tip-host .tip-body { color: #E8E8EC; }
.tn-tip-host .tip-body strong { color: #FFD98C; font-weight: 600; }
.tn-tip-host .tip-key { display: inline-block; font-size: 10px; letter-spacing: 0.08em;
  text-transform: uppercase; color: rgba(200,146,42,0.75); margin: 0 0 4px 0; font-weight: 600; }
.tn-tip-host .tip-section { margin-top: 8px; }
.tn-tip-host .tip-section-title { font-size: 10px; letter-spacing: 0.06em; text-transform: uppercase;
  color: rgba(200,146,42,0.65); margin-bottom: 3px; font-weight: 600; }
.tn-tip-host ul { margin: 4px 0 0 0; padding-left: 16px; }
.tn-tip-host ul li { margin: 2px 0; }
.tn-tip-host .tip-arrow { position: absolute; width: 10px; height: 10px;
  background: rgba(8,8,16,0.97); border-right: 1px solid rgba(200,146,42,0.35);
  border-bottom: 1px solid rgba(200,146,42,0.35); transform: rotate(45deg); }
[data-tip], [data-tip-text], [data-tip-scheme] { cursor: help;
  border-bottom: 1px dotted rgba(200,146,42,0.45); }
[data-tip]:focus-visible, [data-tip-text]:focus-visible, [data-tip-scheme]:focus-visible {
  outline: 2px solid rgba(200,146,42,0.7); outline-offset: 2px; border-radius: 2px;
}
/* Floating tier picker (top-right) */
#tn-tier-picker { position: fixed; top: 12px; right: 12px; z-index: 9998;
  background: rgba(8,8,16,0.92); border: 1px solid rgba(200,146,42,0.35);
  border-radius: 10px; padding: 6px; display: flex; gap: 4px;
  font-family: 'Inter', system-ui, sans-serif; font-size: 11px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.45); backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px); }
#tn-tier-picker .tp-label { display: flex; align-items: center; padding: 4px 8px;
  color: rgba(200,146,42,0.85); font-weight: 600; letter-spacing: 0.04em;
  text-transform: uppercase; font-size: 10px; }
#tn-tier-picker button { padding: 5px 9px; background: transparent; color: rgba(232,232,236,0.6);
  border: 1px solid transparent; border-radius: 6px; cursor: pointer;
  font-family: inherit; font-size: 11px; transition: all .15s; }
#tn-tier-picker button:hover { color: #E8E8EC; background: rgba(200,146,42,0.12); }
#tn-tier-picker button.active { background: rgba(200,146,42,0.22); color: #FFD98C;
  border-color: rgba(200,146,42,0.6); font-weight: 600; }
@media (max-width: 720px) {
  #tn-tier-picker { top: auto; bottom: 12px; right: 12px; left: 12px;
    justify-content: center; flex-wrap: wrap; }
  #tn-tier-picker .tp-label { display: none; }
  .tn-tip-host { max-width: calc(100vw - 24px); font-size: 12.5px; }
}
`;
  const styleEl = document.createElement('style');
  styleEl.id = 'tn-tooltip-styles';
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  // ---------- floating host (single, reused) ----------
  let hostEl = null;
  let currentTrigger = null;
  let lastTipPayload = null;

  function ensureHost() {
    if (hostEl) return hostEl;
    hostEl = document.createElement('div');
    hostEl.className = 'tn-tip-host';
    hostEl.setAttribute('role', 'tooltip');
    hostEl.setAttribute('aria-live', 'polite');
    document.body.appendChild(hostEl);
    return hostEl;
  }

  function hide() {
    if (!hostEl) return;
    hostEl.classList.remove('show');
    hostEl.style.pointerEvents = 'none';
    currentTrigger = null;
  }

  function escapeHtml(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function renderTipBody(payload, tier) {
    if (payload.kind === 'glossary') {
      const txt = AT.glossary(payload.key, tier) || '<em>(no entry)</em>';
      return `<div class="tip-key">${escapeHtml(payload.key)}</div><div class="tip-body">${escapeHtml(txt)}</div>`;
    }
    if (payload.kind === 'text') {
      return `<div class="tip-body">${escapeHtml(payload.text)}</div>`;
    }
    if (payload.kind === 'scheme') {
      const r = AT.renderSchemeForTier(payload.scheme, tier);
      const pros = r.pros.slice(0, 3).map(p => `<li>${escapeHtml(p)}</li>`).join('');
      const cons = r.cons.slice(0, 3).map(c => `<li>${escapeHtml(c)}</li>`).join('');
      return `
        <div class="tip-key">Scheme · ${escapeHtml(r.party.split('—')[0].trim())}</div>
        <div class="tip-body">
          <strong>${escapeHtml(r.headline)}</strong>
          <div class="tip-section"><div class="tip-section-title">Verdict</div>${escapeHtml(r.verdict)} · ${escapeHtml(r.stars)}</div>
          <div class="tip-section"><div class="tip-section-title">Cost</div>${escapeHtml(r.cost)}</div>
          ${r.summary ? `<div class="tip-section"><div class="tip-section-title">Summary</div>${escapeHtml(r.summary)}</div>` : ''}
          ${pros ? `<div class="tip-section"><div class="tip-section-title">Pros</div><ul>${pros}</ul></div>` : ''}
          ${cons ? `<div class="tip-section"><div class="tip-section-title">Cons</div><ul>${cons}</ul></div>` : ''}
        </div>`;
    }
    return '';
  }

  function renderTip(payload, anchorRect) {
    ensureHost();
    const tier = AT.current();
    const tierRow = AT.TIERS.map(t =>
      `<button type="button" class="tip-tier-btn ${t.id === tier ? 'active' : ''}" data-tier="${t.id}" title="${escapeHtml(t.desc)}">${t.icon} ${escapeHtml(t.label)}</button>`
    ).join('');
    hostEl.innerHTML = `<div class="tip-tier-row">${tierRow}</div>${renderTipBody(payload, tier)}`;
    hostEl.style.pointerEvents = 'auto';
    hostEl.classList.add('show');
    position(anchorRect);
    lastTipPayload = payload;

    // wire mini tier-switcher
    hostEl.querySelectorAll('.tip-tier-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const t = btn.getAttribute('data-tier');
        AT.setCurrent(t);
        // re-render in place
        if (currentTrigger) {
          const r = currentTrigger.getBoundingClientRect();
          renderTip(lastTipPayload, r);
        }
      });
    });
  }

  function position(rect) {
    if (!hostEl) return;
    const margin = 10;
    const vw = window.innerWidth, vh = window.innerHeight;
    const tipRect = hostEl.getBoundingClientRect();
    let left = rect.left + (rect.width / 2) - (tipRect.width / 2);
    let top = rect.bottom + margin;
    if (top + tipRect.height > vh - 8) top = rect.top - tipRect.height - margin;
    if (top < 8) top = 8;
    if (left + tipRect.width > vw - 8) left = vw - tipRect.width - 8;
    if (left < 8) left = 8;
    hostEl.style.left = left + 'px';
    hostEl.style.top = top + 'px';
  }

  function payloadFor(el) {
    if (el.hasAttribute('data-tip-scheme')) {
      const id = parseInt(el.getAttribute('data-tip-scheme'), 10);
      const scheme = (window.D || []).find(s => (s && s.id === id) || (Array.isArray(s) && s[0] === id))
        || (window.D || [])[id - 1];
      // Convert array-shaped scheme to object if needed
      let normalized = scheme;
      if (Array.isArray(scheme)) {
        normalized = {
          id, batchId: scheme[0], party: scheme[1], name: scheme[2], stars: scheme[3],
          cost: scheme[4], verdict: scheme[5], insight: scheme[6],
          pros: scheme[7] || [], cons: scheme[8] || [],
          worldContext: scheme[9] || '', tnRelevance: scheme[10] || '',
          categoryTitle: ''
        };
      }
      return normalized ? { kind: 'scheme', scheme: normalized } : { kind: 'text', text: 'Scheme not found' };
    }
    if (el.hasAttribute('data-tip-text')) {
      return { kind: 'text', text: el.getAttribute('data-tip-text') };
    }
    if (el.hasAttribute('data-tip')) {
      return { kind: 'glossary', key: el.getAttribute('data-tip') };
    }
    return null;
  }

  function showFor(el) {
    const payload = payloadFor(el);
    if (!payload) return;
    currentTrigger = el;
    renderTip(payload, el.getBoundingClientRect());
  }

  // ---------- delegated event handlers ----------
  document.addEventListener('mouseover', (e) => {
    const t = e.target.closest && e.target.closest('[data-tip],[data-tip-text],[data-tip-scheme]');
    if (t) showFor(t);
  });
  document.addEventListener('mouseout', (e) => {
    if (!hostEl) return;
    const t = e.target.closest && e.target.closest('[data-tip],[data-tip-text],[data-tip-scheme]');
    if (t && !hostEl.contains(e.relatedTarget)) {
      // delay to allow moving into the tooltip
      setTimeout(() => {
        if (!hostEl.matches(':hover') && currentTrigger === t) hide();
      }, 120);
    }
  });
  document.addEventListener('focusin', (e) => {
    const t = e.target.closest && e.target.closest('[data-tip],[data-tip-text],[data-tip-scheme]');
    if (t) showFor(t);
  });
  document.addEventListener('focusout', (e) => {
    setTimeout(() => { if (hostEl && !hostEl.matches(':focus-within')) hide(); }, 120);
  });
  document.addEventListener('click', (e) => {
    // mobile tap support
    const t = e.target.closest && e.target.closest('[data-tip],[data-tip-text],[data-tip-scheme]');
    if (t) { showFor(t); return; }
    if (hostEl && !hostEl.contains(e.target)) hide();
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') hide(); });
  window.addEventListener('scroll', () => hide(), { passive: true });
  window.addEventListener('resize', () => hide(), { passive: true });

  // ---------- floating tier picker ----------
  function buildPicker() {
    if (document.getElementById('tn-tier-picker')) return;
    const wrap = document.createElement('div');
    wrap.id = 'tn-tier-picker';
    wrap.setAttribute('role', 'group');
    wrap.setAttribute('aria-label', 'Reading level');
    const tier = AT.current();
    wrap.innerHTML =
      `<span class="tp-label" data-tip-text="Pick how detailed the explanations should be — useful for younger readers, casual voters, or policy specialists.">Read as</span>` +
      AT.TIERS.map(t =>
        `<button type="button" data-tier="${t.id}" class="${t.id === tier ? 'active' : ''}" title="${escapeHtml(t.desc)}" aria-label="${escapeHtml(t.label)}">${t.icon} ${escapeHtml(t.label.split(' ')[0])}</button>`
      ).join('');
    document.body.appendChild(wrap);
    wrap.addEventListener('click', (e) => {
      const b = e.target.closest('button[data-tier]');
      if (!b) return;
      AT.setCurrent(b.getAttribute('data-tier'));
    });
  }

  document.addEventListener('tn26:tier-change', (e) => {
    const t = e.detail.tier;
    document.querySelectorAll('#tn-tier-picker button[data-tier]').forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-tier') === t);
    });
    // re-render any open tooltip
    if (hostEl && hostEl.classList.contains('show') && currentTrigger && lastTipPayload) {
      renderTip(lastTipPayload, currentTrigger.getBoundingClientRect());
    }
    // notify rest of app
    document.dispatchEvent(new CustomEvent('tn26:rerender-for-tier', { detail: { tier: t } }));
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildPicker);
  } else {
    buildPicker();
  }

  window.TN26Tooltip = { show: showFor, hide };
})();
