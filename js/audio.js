/* ============================================================
   AUDIO — Web Speech API narration (Indonesia / 中文)
   ============================================================ */

const Audio = (() => {
  let enabled = false;
  let rate = 1.0;
  let lastUtter = null;
  let voicesLoaded = false;
  let idVoice = null;
  let zhVoice = null;

  function speechLang() {
    return (typeof I18n !== 'undefined' && I18n.lang() === 'zh') ? 'zh-CN' : 'id-ID';
  }

  function loadVoices() {
    if (!('speechSynthesis' in window)) return;
    const voices = window.speechSynthesis.getVoices();
    if (!voices.length) return;
    idVoice = voices.find(v => v.lang === 'id-ID' || v.lang.startsWith('id'))
           || voices.find(v => v.lang.startsWith('en'))
           || voices[0];
    zhVoice = voices.find(v => v.lang === 'zh-CN' || v.lang.startsWith('zh'))
           || voices.find(v => v.lang.startsWith('en'))
           || voices[0];
    voicesLoaded = true;
  }

  function init() {
    if (!('speechSynthesis' in window)) {
      const btn = document.getElementById('btnAudio');
      if (btn) btn.style.display = 'none';
      return;
    }
    window.speechSynthesis.onvoiceschanged = loadVoices;
    loadVoices();

    enabled = State.get('settings.audio') || false;
    rate = State.get('settings.audioRate') || 1.0;
    syncButton();

    const btn = document.getElementById('btnAudio');
    if (btn) btn.addEventListener('click', () => {
      enabled = !enabled;
      State.set('settings.audio', enabled);
      syncButton();
      Effects.toast(enabled ? I18n.t('audio_on') : I18n.t('audio_off'), enabled ? 'ok' : '');
      if (!enabled) stop();
    });
  }

  function syncButton() {
    const btn = document.getElementById('btnAudio');
    if (!btn) return;
    btn.innerHTML = enabled
      ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 10v4h4l5 4V6L7 10z"/><path d="M16 8a5 5 0 0 1 0 8M19 5a9 9 0 0 1 0 14"/></svg>'
      : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 10v4h4l5 4V6L7 10z"/><path d="M17 9l5 6M22 9l-5 6"/></svg>';
  }

  function speak(text) {
    if (!enabled || !('speechSynthesis' in window)) return;
    stop();
    const u = new SpeechSynthesisUtterance(text);
    const zh = speechLang() === 'zh-CN';
    u.lang = zh ? 'zh-CN' : 'id-ID';
    u.rate = rate;
    u.pitch = 1;
    const v = zh ? zhVoice : idVoice;
    if (v) u.voice = v;
    lastUtter = u;
    window.speechSynthesis.speak(u);
  }

  function stop() {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  }

  function narrateSlide(idx, slide) {
    if (!enabled || !slide) return;
    const zh = speechLang() === 'zh-CN';
    const title = (typeof I18n !== 'undefined' ? I18n.title(slide) : slide.title) || '';
    if (zh) { speak(title + '。'); return; }
    const lines = [];
    if (title) lines.push(title + '.');
    if (slide.render) {
      const html = slide.render();
      const text = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
      const summary = text.slice(0, 320);
      lines.push(summary);
    }
    speak(lines.join(' '));
  }

  const SIREN_ID = {
    darurat: 'Tanda bahaya! Tanda bahaya! Tanda bahaya! Hentikan semua pekerjaan. Menuju muster point. Mengulang, menuju muster point.',
    siaga: 'Siaga. Bersiaplah. Dengarkan instruksi selanjutnya.',
    allclear: 'All clear. Situasi terkendali. Kembali bekerja atas instruksi supervisor.',
    blasting: 'Tanda peledakan. Peledakan. All clear.',
  };
  const SIREN_ZH = {
    darurat: '危险！危险！危险！停止一切作业，前往集合点。重复，前往集合点。',
    siaga: '戒备，请做好准备，听候进一步指示。',
    allclear: '警报解除，情况受控，请按主管指示复工。',
    blasting: '爆破信号，爆破，警报解除。',
  };

  function bindSirene() {
    document.querySelectorAll('[data-sirene]').forEach(btn => {
      if (btn.dataset.sireneBound) return;
      btn.dataset.sireneBound = '1';
      btn.addEventListener('click', () => {
        const k = btn.dataset.sirene;
        const zh = speechLang() === 'zh-CN';
        const text = (zh ? SIREN_ZH : SIREN_ID)[k];
        if (!text) return;
        btn.classList.add('playing');
        // Use direct speech (independent of narration toggle) — sirene demo is standalone
        if ('speechSynthesis' in window) {
          window.speechSynthesis.cancel();
          const u = new SpeechSynthesisUtterance(text);
          u.lang = zh ? 'zh-CN' : 'id-ID';
          u.rate = rate;
          u.pitch = 1;
          const v = zh ? zhVoice : idVoice;
          if (v) u.voice = v;
          window.speechSynthesis.speak(u);
        }
        setTimeout(() => btn.classList.remove('playing'), 2200);
      });
    });
  }

  return { init, speak, stop, narrateSlide, bindSirene };
})();
