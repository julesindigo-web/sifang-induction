/* ============================================================
   MENU — Slide drawer / TOC overlay
   ============================================================ */

const Menu = (() => {
  function build(slides) {
    const overlay = document.getElementById('menu');
    if (!overlay) return;
    const grid = document.getElementById('menuGrid');
    grid.innerHTML = '';
    // Group by module
    const groups = {};
    slides.forEach((s, i) => {
      const m = s.mod || 'LAIN';
      if (!groups[m]) groups[m] = [];
      groups[m].push({ s, i });
    });
    const T = (typeof I18n !== 'undefined') ? I18n : null;
    Object.entries(groups).forEach(([mod, items]) => {
      const g = document.createElement('div');
      g.className = 'mod-group';
      const label = document.createElement('div');
      label.className = 'mod-group-label';
      label.textContent = T ? T.mod(mod) : mod;
      g.appendChild(label);
      const grid2 = document.createElement('div');
      grid2.style.display = 'grid';
      grid2.style.gridTemplateColumns = 'repeat(auto-fill,minmax(220px,1fr))';
      grid2.style.gap = '8px';
      items.forEach(({ s, i }) => {
        const btn = document.createElement('button');
        btn.className = 'mitem';
        btn.setAttribute('data-idx', i);
        const dispTitle = T ? T.title(s) : (s.title || '—');
        const dispMod = T ? T.mod(mod) : mod;
        btn.innerHTML = `<span class="no">${pad(i+1)}</span><span class="tt">${escapeHtml(dispTitle)}<small>${escapeHtml(dispMod)}</small></span>`;
        btn.addEventListener('click', () => {
          Navigation.go(i);
          close();
        });
        grid2.appendChild(btn);
      });
      g.appendChild(grid2);
      grid.appendChild(g);
    });
  }

  function open() {
    const o = document.getElementById('menu');
    if (o) o.classList.add('open');
  }

  function close() {
    const o = document.getElementById('menu');
    if (o) o.classList.remove('open');
  }

  function pad(n) { return n < 10 ? '0' + n : '' + n; }
  function escapeHtml(s) { return (s || '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }

  return { open, close, build };
})();
