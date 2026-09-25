/* ============================================================
   CERTIFICATE — Generate, render, and download certificate
   ============================================================ */

const Certificate = (() => {
  function render() {
    const c = document.getElementById('certContainer');
    if (!c) return;
    const u = State.get('user') || {};
    const post = State.get('posttest') || {};
    const sig = State.get('signature');
    const passed = post.submitted && (post.score || 0) >= 80;

    if (!passed) {
      c.innerHTML = `
        <div class="inner">
          <div class="kicker">${I18n.t('cert_k1')}</div>
          <h2>Sertifikat <em>${I18n.t('cert_un_h').replace('Sertifikat ', '')}</em></h2>
          <div class="panelbox danger" style="margin-top:14px">
            <h3><i></i>${I18n.t('cert_un_box')}</h3>
            <p style="color:var(--text); line-height:1.7">
              ${I18n.t('cert_un_p')}<br/>
              ${I18n.t('cert_un_st')}<b>${post.submitted ? (post.score + '%') : I18n.t('cert_un_none')}</b>.
            </p>
          </div>
          <p class="lead" style="margin-top:14px">${I18n.t('cert_un_lead')}</p>
        </div>
      `;
      return;
    }

    if (!sig) {
      c.innerHTML = `
        <div class="inner">
          <div class="kicker">${I18n.t('cert_k1')}</div>
          <h2>Sertifikat <em>${I18n.t('cert_w_h').replace(/^Sertifikat /, '').replace(/^证书/, '')}</em></h2>
          <div class="panelbox warn" style="margin-top:14px">
            <h3><i></i>${I18n.t('cert_w_box')}</h3>
            <p style="color:var(--text); line-height:1.7">
              ${I18n.t('cert_w_p')}
            </p>
          </div>
          <p class="lead" style="margin-top:14px">${I18n.t('cert_w_lead')}</p>
        </div>
      `;
      return;
    }

    const certId = State.get('certId') || generateCertId(u);
    State.set('certId', certId);
    const date = u.date || new Date().toISOString().slice(0, 10);
    const expiry = addMonths(date, 12);

    const wasCertified = State.get('certified');
    if (!wasCertified) {
      State.set('certified', true);
      State.set('certifiedAt', new Date().toISOString());
    }

    c.innerHTML = `
      <div class="inner">
        <div class="kicker">${I18n.t('cert_k2')}</div>
        <h2>${I18n.t('cert_h_full')}</h2>
        <p class="lead">${I18n.t('cert_lead')}</p>

        <div class="cert" id="certPrint">
          <div class="cert-header">
            <div class="left">
              <div class="logo-mark">${Icons.get('shield', { size: 32, stroke: '#2b3990', sw: 1.5 })}</div>
              <h3>PT. Sifang Mining Indonesia<small>${I18n.lang() === 'zh' ? '职业安全、健康与环境入职培训' : 'Occupational Safety, Health & Environment Induction Program'}</small></h3>
            </div>
            <div class="right">
              <b style="color:#1e293b">${I18n.t('cert_no')}</b><br/>
              ${certId}
            </div>
          </div>
          <div class="cert-body">
            <div class="cert-sub">${I18n.t('cert_sub')}</div>
            <div class="cert-title">${I18n.t('cert_title')}</div>
            <p class="cert-statement">${I18n.t('cert_stmt0')}</p>
            <div class="cert-name">${escapeHtml(u.name || I18n.t('cert_name_ph'))}</div>
            <p class="cert-id">NIK: ${escapeHtml(u.nik || '—')} · ${escapeHtml(u.position || '—')} · ${escapeHtml(u.department || '—')}</p>

            <p class="cert-statement" style="margin-top:14px">
              ${I18n.t('cert_stmt1')}
              <b style="color:var(--brand-indigo)">${post.score}%</b>
            </p>

            <div class="cert-details">
              <div class="cert-detail"><div class="lbl">${I18n.t('cert_d1')}</div><div class="val">${formatDate(date)}</div></div>
              <div class="cert-detail"><div class="lbl">${I18n.t('cert_d2')}</div><div class="val">${formatDate(expiry)}</div></div>
              <div class="cert-detail"><div class="lbl">${I18n.t('cert_d3')}</div><div class="val">${I18n.t('cert_active')}</div></div>
            </div>
          </div>
          <div class="cert-footer">
            <div class="cert-sig">
              <div class="line">${u.name || ''}</div>
              <small>${I18n.t('cert_part')}</small>
            </div>
            <div class="cert-sig">
              <div class="line">HSE Department</div>
              <small>${I18n.t('cert_by')}</small>
            </div>
          </div>
        </div>

        <div style="display:flex; gap:8px; justify-content:center; flex-wrap:wrap; margin-top:14px">
          <button class="navbtn primary" id="certDownload">${I18n.t('cert_dl')}</button>
          <button class="navbtn" id="certShare">${I18n.t('cert_share')}</button>
        </div>

        <div class="footnote" style="margin-top:14px">${I18n.t('cert_foot')}</div>
      </div>
    `;

    document.getElementById('certDownload').addEventListener('click', download);
    document.getElementById('certShare').addEventListener('click', share);
    // Only fire confetti + toast on first issuance
    if (!wasCertified) {
      Effects.confetti({ count: 100 });
      Effects.toast(I18n.t('cert_new'), 'ok');
    }
  }

  function generateCertId(u) {
    const yr = new Date().getFullYear();
    const r = (u.nik || '').replace(/\D/g, '').slice(-4) || '0000';
    const n = Math.floor(Math.random() * 9999).toString().padStart(4, '0');
    return `SMI-K3L-${yr}-${r}-${n}`;
  }

  function addMonths(dateStr, m) {
    const d = new Date(dateStr);
    d.setMonth(d.getMonth() + m);
    return d.toISOString().slice(0, 10);
  }

  function formatDate(s) {
    if (!s) return '—';
    const d = new Date(s);
    const months = I18n.t('months');
    return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
  }

  function escapeHtml(s) {
    return (s || '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  function download() {
    window.print();
  }

  async function share() {
    const u = State.get('user') || {};
    const post = State.get('posttest') || {};
    const text = I18n.t('cert_share_t', { name: u.name || '', nik: u.nik || '', score: post.score || 0 });
    if (navigator.share) {
      try {
        await navigator.share({ title: I18n.t('cert_h'), text });
      } catch (e) {}
    } else {
      try {
        await navigator.clipboard.writeText(text);
        Effects.toast(I18n.t('cert_copied'), 'ok');
      } catch (e) {
        Effects.toast(I18n.t('cert_copy_man') + text, 'warn');
      }
    }
  }

  return { render };
})();
