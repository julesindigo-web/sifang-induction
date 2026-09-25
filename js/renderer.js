/* ============================================================
   RENDERER — Dynamic slide rendering from data
   ============================================================ */

const Renderer = (() => {
  function pad(n) { return n < 10 ? '0' + n : '' + n; }

  function buildSlide(slide, index) {
    const el = document.createElement('section');
    el.className = 'slide';
    el.id = 'slide-' + index;
    el.setAttribute('data-mod', slide.mod || '');
    el.setAttribute('data-title', slide.title || '');
    el.setAttribute('data-type', slide.type || '');
    el.setAttribute('data-idx', index);
    el.innerHTML = (slide.render ? slide.render() : '');
    return el;
  }

  function mount(slides) {
    const stage = document.getElementById('stage');
    if (!stage) return;
    stage.innerHTML = '';
    const frag = document.createDocumentFragment();
    slides.forEach((s, i) => frag.appendChild(buildSlide(s, i)));
    stage.appendChild(frag);
  }

  function show(i, slides) {
    const all = document.querySelectorAll('.slide');
    const prev = document.querySelector('.slide.active');
    const next = all[i];
    if (!next) return;
    if (prev && prev !== next) {
      prev.classList.add('leaving');
      setTimeout(() => prev.classList.remove('leaving', 'active'), 240);
    }
    setTimeout(() => {
      next.classList.add('active');
      const s = slides[i];
      if (s && typeof s.afterRender === 'function') {
        try { s.afterRender(); } catch (e) { /* afterRender opsional — abaikan agar slide tetap tampil */ }
      }
      try { if (typeof I18n !== 'undefined') I18n.applyTo(next, I18n.lang()); } catch (e) { /* i18n opsional */ }
    }, prev && prev !== next ? 60 : 0);

    const stage = document.getElementById('stage');
    if (stage) stage.scrollTop = 0;
  }

  return { mount, show };
})();
