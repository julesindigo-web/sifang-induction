/* ============================================================
   APP — Main application orchestrator
   Bootstraps all modules and wires DOM events
   ============================================================ */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    bootApp();
  });

  function bootApp() {
    // 1. Mount slides into stage
    Renderer.mount(SLIDES_DATA);

    // 2. Build menu
    Menu.build(SLIDES_DATA);

    // 3. Particles
    Effects.particles(28);

    // 4. Topbar / Icon buttons
    bindTopbar();

    // 5. Navigation
    Navigation.init({
      slides: SLIDES_DATA,
      onChange(idx, slide) {
        // Audio narration (mengikuti bahasa aktif via Audio.narrateSlide)
        if (State.get('settings.audio')) {
          Audio.narrateSlide(idx, slide);
        }
        // Bookmark sync
        Bookmarks.syncButton(idx);
        // Reset progress on first mount
      },
    });

    // 6. Theme
    Theme.init();

    // 7. Audio
    Audio.init();

    // 8. Initial progress restore
    const savedProgress = State.get('progress') || 0;
    Progress.update(savedProgress);

    // 9. Resume position
    const savedIdx = State.get('idx') || 0;
    if (savedIdx > 0 && savedIdx < SLIDES_DATA.length) {
      Navigation.go(savedIdx);
    }

    // 10. Welcome toast (first time only)
    if (!Storage.get('welcomed')) {
      setTimeout(() => {
        Effects.toast(I18n.t('app_welcome'), 'ok');
        Storage.set('welcomed', true);
      }, 1200);
    }
  }

  function bindTopbar() {
    // Menu toggle
    document.getElementById('btnMenu')?.addEventListener('click', () => {
      const m = document.getElementById('menu');
      if (m) m.classList.toggle('open');
    });
    document.getElementById('btnClose')?.addEventListener('click', () => {
      const m = document.getElementById('menu');
      if (m) m.classList.remove('open');
    });

    // Fullscreen
    document.getElementById('btnFull')?.addEventListener('click', () => {
      if (document.fullscreenElement) document.exitFullscreen();
      else if (document.documentElement.requestFullscreen) document.documentElement.requestFullscreen();
    });

    // Glossary
    document.getElementById('btnGlossary')?.addEventListener('click', () => Glossary.open());

    // Search
    document.getElementById('btnSearch')?.addEventListener('click', () => Search.open(SLIDES_DATA));

    // Bookmarks
    document.getElementById('btnBookmark')?.addEventListener('click', () => {
      const idx = Navigation.idx;
      Bookmarks.toggle(idx);
    });
    document.getElementById('btnBookmarks')?.addEventListener('click', () => Bookmarks.open(SLIDES_DATA));

    // Help
    document.getElementById('btnHelp')?.addEventListener('click', () => Help.open());

    // Print certificate shortcut (only on cert slide)
    document.addEventListener('keydown', e => {
      if ((e.ctrlKey || e.metaKey) && (e.key === 'p' || e.key === 'P')) {
        const onCert = document.querySelector('.slide.active[data-type="cert"]');
        if (onCert) {
          // Print stylesheet will handle layout; just allow default
        }
      }
    });
  }

  // Expose for debugging
  window.__APP__ = { State, Storage, Navigation, Menu, Glossary, Search, Bookmarks, Help, Audio, Effects, Progress, Renderer, Quiz, Signature, Certificate, Theme };
})();
