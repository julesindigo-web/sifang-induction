/* ============================================================
   BOOKMARKS — Save & manage bookmarked slides
   ============================================================ */

const Bookmarks = (() => {
  function open(slides) {
    const overlay = ensureOverlay();
    const bms = State.get('bookmarks') || [];
    overlay.innerHTML = `
      <div class="overlay-header">
        <div class="overlay-title">🔖 ${I18n.t('bm_h')}</div>
        <div class="overlay-actions">
          <button class="iconbtn" id="bmClose" aria-label="${I18n.t('aria_close')}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
          </button>
        </div>
      </div>
      <div style="max-width:var(--menu-max); margin:0 auto;">
        <p class="lead" style="margin-bottom:14px">${I18n.t('bm_lead')}</p>
        <div class="bm-grid" id="bmGrid"></div>
      </div>
    `;
    overlay.classList.add('open');
    const grid = document.getElementById('bmGrid');
    if (!bms.length) {
      grid.innerHTML = `<div style="padding:30px; text-align:center; color:var(--muted)">${I18n.t('bm_empty')}</div>`;
    } else {
      grid.innerHTML = bms.map(i => {
        const s = slides[i] || {};
        const dT = (typeof I18n !== 'undefined' ? I18n.title(s) : s.title) || '—';
        const dM = (typeof I18n !== 'undefined' ? I18n.mod(s.mod || '') : s.mod) || '';
        return `
          <button class="bm-item" data-i="${i}">
            <span class="no">${pad(i+1)}</span>
            <span class="tt">${escapeHtml(dT)}<small style="display:block; color:var(--dim); font-size:10px; letter-spacing:.14em; margin-top:2px; text-transform:uppercase">${escapeHtml(dM)}</small></span>
            <span style="color:var(--red); font-size:18px">✕</span>
          </button>
        `;
      }).join('');
      grid.querySelectorAll('.bm-item').forEach(b => {
        b.addEventListener('click', e => {
          if (e.target.textContent.trim() === '✕') {
            const i = +b.dataset.i;
            const arr = (State.get('bookmarks') || []).filter(x => x !== i);
            State.set('bookmarks', arr);
            open(slides);
            return;
          }
          Navigation.go(+b.dataset.i);
          close();
        });
      });
    }
    document.getElementById('bmClose').addEventListener('click', close);
  }

  function toggle(idx) {
    const arr = State.get('bookmarks') || [];
    const i = arr.indexOf(idx);
    if (i >= 0) { arr.splice(i, 1); Effects.toast(I18n.t('bm_del'), 'warn'); }
    else { arr.push(idx); Effects.toast('🔖 ' + I18n.t('bm_add'), 'ok'); }
    State.set('bookmarks', arr);
    syncButton(idx);
  }

  function syncButton(idx) {
    const btn = document.getElementById('btnBookmark');
    if (!btn) return;
    const arr = State.get('bookmarks') || [];
    const on = arr.includes(idx);
    btn.style.color = on ? 'var(--amber)' : '';
    btn.style.borderColor = on ? 'var(--amber)' : '';
  }

  function close() {
    const o = document.getElementById('bmOverlay');
    if (o) o.classList.remove('open');
  }

  function ensureOverlay() {
    let o = document.getElementById('bmOverlay');
    if (!o) {
      o = document.createElement('div');
      o.id = 'bmOverlay';
      o.className = 'overlay';
      document.body.appendChild(o);
    }
    return o;
  }

  function pad(n) { return n < 10 ? '0' + n : '' + n; }
  function escapeHtml(s) { return (s || '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }

  return { open, toggle, syncButton, close };
})();
