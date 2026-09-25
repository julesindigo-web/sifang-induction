/* ============================================================
   HELP — Keyboard shortcuts and tips overlay
   ============================================================ */

const Help = (() => {
  function open() {
    const overlay = ensureOverlay();
    overlay.innerHTML = `
      <div class="overlay-header">
        <div class="overlay-title">⌨ ${I18n.t('help_h')}</div>
        <div class="overlay-actions">
          <button class="iconbtn" id="helpClose" aria-label="${I18n.t('aria_close')}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
          </button>
        </div>
      </div>
      <div style="max-width:var(--menu-max); margin:0 auto;">
        <div class="cards">
          <div class="card">
            <h3 style="color:var(--amber)">⌨ ${I18n.t('help_kb')}</h3>
            <table style="width:100%; border-collapse:collapse; margin-top:10px">
              <tr><td style="padding:6px 0; color:var(--muted)">→ / PageDown / Spasi</td><td style="padding:6px 0; color:var(--text); text-align:right"><code>${I18n.t('help_r_next')}</code></td></tr>
              <tr><td style="padding:6px 0; color:var(--muted)">← / PageUp</td><td style="padding:6px 0; color:var(--text); text-align:right"><code>${I18n.t('help_r_prev')}</code></td></tr>
              <tr><td style="padding:6px 0; color:var(--muted)">Home / End</td><td style="padding:6px 0; color:var(--text); text-align:right"><code>${I18n.t('help_r_home')}</code></td></tr>
              <tr><td style="padding:6px 0; color:var(--muted)">M</td><td style="padding:6px 0; color:var(--text); text-align:right"><code>${I18n.t('help_r_menu')}</code></td></tr>
              <tr><td style="padding:6px 0; color:var(--muted)">F</td><td style="padding:6px 0; color:var(--text); text-align:right"><code>${I18n.t('help_r_full')}</code></td></tr>
              <tr><td style="padding:6px 0; color:var(--muted)">T</td><td style="padding:6px 0; color:var(--text); text-align:right"><code>${I18n.t('help_r_theme')}</code></td></tr>
              <tr><td style="padding:6px 0; color:var(--muted)">A</td><td style="padding:6px 0; color:var(--text); text-align:right"><code>${I18n.t('help_r_audio')}</code></td></tr>
              <tr><td style="padding:6px 0; color:var(--muted)">L</td><td style="padding:6px 0; color:var(--text); text-align:right"><code>${I18n.t('help_r_lang')}</code></td></tr>
              <tr><td style="padding:6px 0; color:var(--muted)">?</td><td style="padding:6px 0; color:var(--text); text-align:right"><code>${I18n.t('help_r_help')}</code></td></tr>
            </table>
          </div>
          <div class="card t">
            <h3 style="color:var(--teal)">📱 ${I18n.t('help_touch')}</h3>
            <ul style="color:var(--muted); font-size:13px; line-height:1.7; padding-left:18px; margin-top:8px">
              <li><b>${I18n.t('help_m1')}</b> → ${I18n.t('help_m1b')}</li>
              <li><b>${I18n.t('help_m2')}</b> → ${I18n.t('help_m2b')}</li>
              <li>${I18n.t('help_m3')}</li>
            </ul>
          </div>
          <div class="card g">
            <h3 style="color:var(--green)">💾 ${I18n.t('help_saved')}</h3>
            <p style="color:var(--muted); font-size:13px; line-height:1.7; margin-top:8px">
              ${I18n.t('help_saved_p')}
            </p>
          </div>
          <div class="card b">
            <h3 style="color:var(--blue)">🖨 ${I18n.t('help_print')}</h3>
            <p style="color:var(--muted); font-size:13px; line-height:1.7; margin-top:8px">
              ${I18n.t('help_print_p')}
            </p>
          </div>
        </div>
        <div class="footnote" style="margin-top:14px">${I18n.t('help_foot')}</div>
      </div>
    `;
    overlay.classList.add('open');
    document.getElementById('helpClose').addEventListener('click', close);
  }

  function ensureOverlay() {
    let o = document.getElementById('helpOverlay');
    if (!o) {
      o = document.createElement('div');
      o.id = 'helpOverlay';
      o.className = 'overlay';
      document.body.appendChild(o);
    }
    return o;
  }

  function close() {
    const o = document.getElementById('helpOverlay');
    if (o) o.classList.remove('open');
  }

  return { open, close };
})();
