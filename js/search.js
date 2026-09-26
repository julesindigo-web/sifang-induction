/* ============================================================
   SEARCH — Full-text search across slide titles and content
   ============================================================ */

const Search = (() => {
  function open(slides) {
    const overlay = ensureOverlay();
    overlay.innerHTML = `
      <div class="overlay-header">
        <div class="overlay-title">🔎 ${I18n.t('search_h')}</div>
        <div class="overlay-actions">
          <button class="iconbtn" id="searchClose" aria-label="${I18n.t('aria_close')}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
          </button>
        </div>
      </div>
      <div style="max-width:var(--menu-max); margin:0 auto;">
        <div class="gloss-search">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-5-5"/></svg>
          <input id="searchQ" type="search" placeholder="${I18n.t('search_ph')}" autocomplete="off"/>
        </div>
        <div id="searchResults" class="bm-grid"></div>
      </div>
    `;
    overlay.classList.add('open');

    const q = document.getElementById('searchQ');
    q.focus();
    q.addEventListener('input', e => doSearch(slides, e.target.value));
    document.getElementById('searchClose').addEventListener('click', close);
  }

  function doSearch(slides, term) {
    const r = document.getElementById('searchResults');
    term = term.trim().toLowerCase();
    if (!term) { r.innerHTML = `<div style="padding:30px; text-align:center; color:var(--muted)">${I18n.t('search_type')}</div>`; return; }

    const matches = slides.map((s, i) => {
      const title = (s.title || '').toLowerCase();
      const mod = (s.mod || '').toLowerCase();
      const body = stripTags(s.render ? s.render() : '').toLowerCase();
      let score = 0;
      if (title.includes(term)) score += 5;
      if (mod.includes(term)) score += 2;
      if (body.includes(term)) score += 1;
      // Word frequency
      const re = new RegExp('\\b' + term + '\\b', 'g');
      const m = body.match(re);
      if (m) score += m.length;
      return { i, s, score };
    }).filter(x => x.score > 0).sort((a, b) => b.score - a.score).slice(0, 25);

    if (!matches.length) {
      r.innerHTML = `<div style="padding:30px; text-align:center; color:var(--muted)">${I18n.t('search_none')}</div>`;
      return;
    }

    r.innerHTML = matches.map(m => {
      const idx = m.i;
      const slide = m.s;
      const preview = highlight(snippet(stripTags(slide.render ? slide.render() : ''), term), term);
      const dispT = (typeof I18n !== 'undefined' ? I18n.title(slide) : slide.title) || '—';
      const dispM = (typeof I18n !== 'undefined' ? I18n.mod(slide.mod || '') : slide.mod) || '';
      return `
        <button class="bm-item" data-i="${idx}">
          <span class="no">${pad(idx+1)}</span>
          <span class="tt">${escapeHtml(dispT)}<small style="display:block; color:var(--dim); font-size:10px; letter-spacing:.14em; margin-top:2px; text-transform:uppercase">${escapeHtml(dispM)}</small>
          <div style="font-size:11.5px; color:var(--muted); margin-top:4px; font-weight:400">${preview}</div></span>
        </button>
      `;
    }).join('');

    try { if (typeof I18n !== 'undefined') I18n.applyTo(r, I18n.lang()); } catch (e) { /* i18n opsional */ }
    r.querySelectorAll('.bm-item').forEach(b => {
      b.addEventListener('click', () => {
        Navigation.go(+b.dataset.i);
        close();
      });
    });
  }

  function stripTags(html) {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || '';
  }

  function snippet(text, term) {
    const i = text.toLowerCase().indexOf(term);
    if (i < 0) return text.slice(0, 140);
    const start = Math.max(0, i - 60);
    const end = Math.min(text.length, i + term.length + 80);
    let s = text.slice(start, end);
    if (start > 0) s = '… ' + s;
    if (end < text.length) s += ' …';
    return s;
  }

  function highlight(text, term) {
    if (!term) return escapeHtml(text);
    const re = new RegExp('(' + term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
    return escapeHtml(text).replace(re, '<mark style="background:rgba(251,191,36,0.32); color:var(--text); padding:0 2px; border-radius:3px">$1</mark>');
  }

  function ensureOverlay() {
    let o = document.getElementById('searchOverlay');
    if (!o) {
      o = document.createElement('div');
      o.id = 'searchOverlay';
      o.className = 'overlay';
      document.body.appendChild(o);
    }
    return o;
  }

  function close() {
    const o = document.getElementById('searchOverlay');
    if (o) o.classList.remove('open');
  }

  function pad(n) { return n < 10 ? '0' + n : '' + n; }
  function escapeHtml(s) { return (s || '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }

  return { open, close };
})();
