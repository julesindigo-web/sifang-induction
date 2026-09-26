/* ============================================================
   NAVIGATION — Slide navigation (keyboard, touch, buttons)
   ============================================================ */

const Navigation = (() => {
  let total = 0, idx = 0, onChange = null, slides = [];

  function init(opts) {
    slides = opts.slides;
    total = slides.length;
    onChange = opts.onChange;
    idx = clamp(State.get('idx') || 0, 0, total - 1);

    document.getElementById('btnPrev')?.addEventListener('click', prev);
    document.getElementById('btnNext')?.addEventListener('click', next);

    document.addEventListener('keydown', onKey);

    const stage = document.getElementById('stage');
    if (stage) {
      let tx = 0, ty = 0;
      stage.addEventListener('touchstart', e => {
        tx = e.touches[0].clientX;
        ty = e.touches[0].clientY;
      }, { passive: true });
      stage.addEventListener('touchend', e => {
        const dx = e.changedTouches[0].clientX - tx;
        const dy = e.changedTouches[0].clientY - ty;
        if (Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(dy) * 1.4) {
          dx < 0 ? next() : prev();
        }
      }, { passive: true });
    }

    setTimeout(() => render(), 50);
  }

  function clamp(n, lo, hi) { return Math.max(lo, Math.min(hi, n)); }

  function onKey(e) {
    if (e.target.matches('input, textarea, [contenteditable="true"]')) return;
    if (e.key === 'ArrowRight' || e.key === 'PageDown' || (e.key === ' ' && !e.target.closest('.quiz-opt, .apd-row, button'))) {
      e.preventDefault(); next();
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      e.preventDefault(); prev();
    } else if (e.key === 'Home') {
      go(0);
    } else if (e.key === 'End') {
      go(total - 1);
    } else if (e.key === 'm' || e.key === 'M') {
      document.getElementById('btnMenu')?.click();
    } else if (e.key === 'f' || e.key === 'F') {
      document.getElementById('btnFull')?.click();
    } else if (e.key === 't' || e.key === 'T') {
      document.getElementById('btnTheme')?.click();
    } else if (e.key === 'a' || e.key === 'A') {
      document.getElementById('btnAudio')?.click();
    } else if (e.key === '?') {
      document.getElementById('btnHelp')?.click();
    } else if (e.key === 'l' || e.key === 'L') {
      document.getElementById('btnLang')?.click();
    }
  }

  function next() { go(idx + 1); }
  function prev() { go(idx - 1); }

  function go(i) {
    const n = clamp(i, 0, total - 1);
    if (n === idx) return;
    idx = n;
    State.set('idx', idx);
    render();
  }

  function render(soft) {
    Renderer.show(idx, slides, soft);
    const counter = document.getElementById('counter');
    if (counter) counter.textContent = pad(idx + 1) + ' / ' + pad(total);
    const bar = document.getElementById('bar');
    if (bar) bar.style.width = (total > 1 ? (idx / (total - 1)) * 100 : 100) + '%';
    const modLabel = document.getElementById('modLabel');
    if (modLabel) {
      const rawMod = slides[idx]?.mod || '';
      modLabel.textContent = (typeof I18n !== 'undefined' ? I18n.mod(rawMod) : rawMod);
      modLabel.style.animation = 'none';
      requestAnimationFrame(() => modLabel.style.animation = '');
    }
    const btnPrev = document.getElementById('btnPrev');
    const btnNext = document.getElementById('btnNext');
    if (btnPrev) btnPrev.toggleAttribute('disabled', idx === 0);
    if (btnNext) btnNext.toggleAttribute('disabled', idx === total - 1);

    // Visit tracking
    const visited = State.get('visited') || [];
    if (!visited.includes(idx)) { visited.push(idx); State.set('visited', visited); }

    // Progress (simple average)
    const pct = Math.round(((visited.length) / total) * 100);
    State.set('progress', pct);
    Progress.update(pct);

    // Highlight active in menu (use data-idx since menu is grouped by module)
    document.querySelectorAll('.mitem').forEach(m => {
      m.classList.toggle('active', +m.getAttribute('data-idx') === idx);
    });

    if (typeof onChange === 'function') onChange(idx, slides[idx]);
  }

  function pad(n) { return n < 10 ? '0' + n : '' + n; }

  function refresh() { render(true); }

  return { init, next, prev, go, refresh, get idx() { return idx; }, get total() { return total; } };
})();
