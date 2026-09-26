/* ============================================================
   GLOSSARY — Searchable HSE glossary overlay
   ============================================================ */

const Glossary = (() => {
  let data = null;

  async function load() {
    const lang = (typeof I18n !== 'undefined' ? I18n.lang() : 'id');
    if (data && data._lang === lang) return data;
    const files = lang === 'zh' ? ['data/glossary-zh.json', 'data/glossary.json'] : ['data/glossary.json'];
    data = null;
    for (const f of files) {
      try {
        const r = await fetch(f);
        data = await r.json();
        data._lang = (f.indexOf('-zh') >= 0) ? 'zh' : 'id';
        break;
      } catch (e) { /* coba berkas berikut */ }
    }
    if (!data) data = { _lang: lang, items: [] };
    return data;
  }

  async function open() {
    await load();
    const overlay = ensureOverlay();
    overlay.innerHTML = `
      <div class="overlay-header">
        <div class="overlay-title">📖 ${I18n.t('gloss_h')}</div>
        <div class="overlay-actions">
          <button class="iconbtn" id="glossClose" aria-label="${I18n.t('aria_close')}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
          </button>
        </div>
      </div>
      <div style="max-width:var(--menu-max); margin:0 auto;">
        <div class="gloss-search">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-5-5"/></svg>
          <input id="glossQ" type="search" placeholder="${I18n.t('gloss_ph')}" autocomplete="off"/>
        </div>
        <div class="gloss-grid" id="glossGrid"></div>
      </div>
    `;
    overlay.classList.add('open');
    render(data.items);
    const q = document.getElementById('glossQ');
    q.focus();
    q.addEventListener('input', e => {
      const term = e.target.value.trim().toLowerCase();
      if (!term) return render(data.items);
      const filtered = data.items.filter(it =>
        it.t.toLowerCase().includes(term) || it.d.toLowerCase().includes(term)
      );
      render(filtered);
    });
    document.getElementById('glossClose').addEventListener('click', close);
  }

  function render(items) {
    const g = document.getElementById('glossGrid');
    if (!g) return;
    if (!items.length) {
      g.innerHTML = `<div style="padding:30px; text-align:center; color:var(--muted)">${I18n.t('gloss_none')}</div>`;
      return;
    }
    g.innerHTML = items.map(it => `
      <div class="gloss-item">
        <b>${escapeHtml(it.t)}</b>
        <span>${escapeHtml(it.d)}</span>
      </div>
    `).join('');
  }

  function ensureOverlay() {
    let o = document.getElementById('glossOverlay');
    if (!o) {
      o = document.createElement('div');
      o.id = 'glossOverlay';
      o.className = 'overlay';
      document.body.appendChild(o);
    }
    return o;
  }

  function close() {
    const o = document.getElementById('glossOverlay');
    if (o) o.classList.remove('open');
  }

  function escapeHtml(s) {
    return (s || '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  return { open, close };
})();
