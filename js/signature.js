/* ============================================================
   SIGNATURE — Canvas-based digital signature pad
   ============================================================ */

const Signature = (() => {
  let canvas, ctx, drawing = false, last = null;
  let cssW = 0, cssH = 0;

  function init() {
    canvas = document.getElementById('sigCanvas');
    if (!canvas) return;
    ctx = canvas.getContext('2d');
    setupCanvas();
    bind();
    document.getElementById('sigClear').addEventListener('click', clear);
    document.getElementById('sigSave').addEventListener('click', save);
    document.querySelectorAll('#sig-name,#sig-nik,#sig-pos,#sig-dept').forEach(inp => {
      inp.addEventListener('input', () => {
        const u = State.get('user') || {};
        if (inp.id === 'sig-name') u.name = inp.value;
        if (inp.id === 'sig-nik') u.nik = inp.value;
        if (inp.id === 'sig-pos') u.position = inp.value;
        if (inp.id === 'sig-dept') u.department = inp.value;
        State.set('user', u);
      });
    });
    updateDate();
    // Pre-load if any (use CSS dimensions, not DPR-scaled canvas dimensions)
    const sig = State.get('signature');
    if (sig) {
      const img = new Image();
      img.onload = () => ctx.drawImage(img, 0, 0, cssW, cssH);
      img.src = sig;
    }
  }

  function setupCanvas() {
    const r = canvas.getBoundingClientRect();
    cssW = r.width;
    cssH = r.height;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.round(cssW * dpr);
    canvas.height = Math.round(cssH * dpr);
    ctx.scale(dpr, dpr);
    ctx.strokeStyle = '#0f172a';
    ctx.lineWidth = 2.2;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    canvas.style.background = '#fff';
    canvas.style.borderRadius = '10px';
  }

  function bind() {
    canvas.addEventListener('mousedown', start);
    canvas.addEventListener('touchstart', e => { e.preventDefault(); start(e.touches[0]); }, { passive: false });
    canvas.addEventListener('mousemove', move);
    canvas.addEventListener('touchmove', e => { e.preventDefault(); move(e.touches[0]); }, { passive: false });
    canvas.addEventListener('mouseup', end);
    canvas.addEventListener('touchend', e => { e.preventDefault(); end(); }, { passive: false });
    canvas.addEventListener('mouseleave', end);
  }

  function pos(p) {
    const r = canvas.getBoundingClientRect();
    return { x: p.clientX - r.left, y: p.clientY - r.top };
  }

  function start(p) {
    drawing = true;
    last = pos(p);
  }
  function move(p) {
    if (!drawing) return;
    const cur = pos(p);
    ctx.beginPath();
    ctx.moveTo(last.x, last.y);
    ctx.lineTo(cur.x, cur.y);
    ctx.stroke();
    last = cur;
  }
  function end() {
    drawing = false;
    last = null;
  }

  function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    State.set('signature', null);
    Effects.toast(I18n.t('sig_t_clear'), 'warn');
  }

  function save() {
    if (!canvas.width) return;
    // Check if anything was drawn
    const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    let hasInk = false;
    for (let i = 3; i < data.length; i += 4) { if (data[i] > 0) { hasInk = true; break; } }
    if (!hasInk) { Effects.toast(I18n.t('sig_t_empty'), 'warn'); Effects.shake(canvas); return; }

    const dataURL = canvas.toDataURL('image/png');
    State.set('signature', dataURL);

    const u = State.get('user') || {};
    if (!u.name || !u.nik) {
      Effects.toast(I18n.t('sig_t_id'), 'warn');
      return;
    }

    State.set('user.date', new Date().toISOString().slice(0, 10));
    Effects.toast(I18n.t('sig_t_saved'), 'ok');
    Effects.pulse(canvas);
    setTimeout(() => Navigation.next(), 700);
  }

  function updateDate() {
    const el = document.getElementById('sigDate');
    if (!el) return;
    const d = new Date();
    el.textContent = `${d.getDate().toString().padStart(2,'0')} / ${(d.getMonth()+1).toString().padStart(2,'0')} / ${d.getFullYear()}`;
  }

  return { init };
})();
