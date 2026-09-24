/* ============================================================
   ILLUSTRATIONS — Pustaka ilustrasi SVG interaktif (inline)
   Offline, tanpa dependensi: setiap fungsi mengembalikan
   <figure class="illus"> berisi SVG + caption + tombol toggle.
   Interaksi: tombol [data-illus-toggle] menyalakan lapisan
   [data-illus-layer] pada figure yang sama (delegasi global).
   ============================================================ */

const Illustrations = (() => {
  'use strict';

  function ctl(buttons, label) {
    return `<div class="illus-ctl" role="group" aria-label="${label}">` +
      buttons.map(b => `<button type="button" class="chip" data-illus-toggle="${b.k}" aria-pressed="false">${b.t}</button>`).join('') +
      `</div>`;
  }

  function fig(key, aria, svg, cap, buttons, groupLabel) {
    return `<figure class="illus" data-illus="${key}">` +
      `<div class="illus-stage" role="img" aria-label="${aria}">${svg}</div>` +
      `<figcaption class="illus-cap">${cap}</figcaption>` +
      ctl(buttons, groupLabel) +
      `</figure>`;
  }

  /* ---------- 1 · Neraca K3L Seimbang ---------- */
  function fondasi() {
    const svg = `
      <svg viewBox="0 0 800 360" aria-hidden="true">
        <circle cx="120" cy="70" r="90" class="f-teal-soft"/>
        <circle cx="690" cy="80" r="100" class="f-amb-soft"/>
        <line x1="80" y1="320" x2="720" y2="320" class="ln"/>
        <polygon points="400,220 372,320 428,320" class="f-mut"/>
        <circle cx="400" cy="205" r="10" class="f-amb"/>
        <line x1="180" y1="150" x2="620" y2="150" class="ln beam"/>
        <line x1="180" y1="150" x2="180" y2="190" class="ln"/>
        <line x1="620" y1="150" x2="620" y2="190" class="ln"/>
        <path d="M120 190 h120 l-14 44 h-92 z" class="f-amb-soft s-amb"/>
        <path d="M560 190 h120 l-14 44 h-92 z" class="f-teal-soft s-teal"/>
        <path d="M150 188 a30 22 0 0 1 60 0 v10 h-60 z" class="f-amb s-amb"/>
        <path d="M600 210 c-16-22-16-40 0-52 16 12 16 30 0 52z" class="f-teal s-teal"/>
        <path d="M600 210 c10-8 22-10 32-8" class="s-teal"/>
        <polygon points="400,52 407,72 428,72 411,84 417,104 400,92 383,104 389,84 372,72 393,72" class="f-amb a-pulse"/>
        <text x="400" y="135" text-anchor="middle" class="tx-s">SEIMBANG</text>
        <text x="180" y="260" text-anchor="middle" class="tx">Keselamatan</text>
        <text x="180" y="280" text-anchor="middle" class="tx-s">Pulang Selamat</text>
        <text x="620" y="260" text-anchor="middle" class="tx">Lingkungan</text>
        <text x="620" y="280" text-anchor="middle" class="tx-s">Operasi Berkelanjutan</text>
        <g data-illus-layer="simbiosis">
          <path d="M300 200 C 340 250, 460 250, 500 200" class="s-teal a-dash" stroke-dasharray="8 6"/>
          <polygon points="500,200 488,200 494,212" class="f-teal"/>
          <polygon points="300,200 312,200 306,212" class="f-teal"/>
          <text x="400" y="272" text-anchor="middle" class="tx-s">simbiosis — tumpahan B3 = krisis lingkungan</text>
        </g>
        <g data-illus-layer="produksi">
          <rect x="330" y="288" width="140" height="26" rx="13" class="f-grn-soft s-grn"/>
          <text x="400" y="306" text-anchor="middle" class="tx-s">produksi mengikuti otomatis</text>
        </g>
      </svg>`;
    return fig('fondasi',
      'Neraca seimbang antara keselamatan dan lingkungan',
      svg,
      'Neraca K3L Seimbang — keselamatan dan lingkungan sama berat; produksi mengikuti dengan sendirinya.',
      [{ k: 'simbiosis', t: 'Lihat simbiosis' }, { k: 'produksi', t: 'Lihat produksi' }],
      'Kontrol ilustrasi neraca');
  }

  /* ---------- 2 · Empat risiko laterit ---------- */
  function risiko() {
    const svg = `
      <svg viewBox="0 0 800 360" aria-hidden="true">
        <line x1="60" y1="300" x2="740" y2="300" class="ln"/>
        <g>
          <polygon points="120,300 120,180 220,300" class="f-mut s-ln"/>
          <polygon points="120,180 146,210 133,214" class="f-red a-blink"/>
          <text x="170" y="325" text-anchor="middle" class="tx">Lereng</text>
        </g>
        <g>
          <circle cx="330" cy="220" r="4" class="f-mut a-float"/>
          <circle cx="350" cy="200" r="3" class="f-mut a-float"/>
          <circle cx="368" cy="228" r="5" class="f-mut a-float"/>
          <circle cx="388" cy="205" r="3" class="f-mut a-float"/>
          <text x="360" y="325" text-anchor="middle" class="tx">Debu Ni/Co</text>
        </g>
        <g>
          <path d="M500 200 c-12 16-24 28-24 42 a24 24 0 0 0 48 0 c0-14-12-26-24-42z" class="f-blu-soft s-blu"/>
          <path d="M470 280 h60" class="s-blu a-dash" stroke-dasharray="6 5"/>
          <text x="500" y="325" text-anchor="middle" class="tx">Air asam</text>
        </g>
        <g>
          <rect x="610" y="210" width="90" height="70" rx="8" class="f-mut s-ln"/>
          <rect x="610" y="228" width="90" height="10" class="f-red-soft"/>
          <polygon points="655,170 655,210 665,210 665,170" class="f-mut"/>
          <text x="655" y="325" text-anchor="middle" class="tx">HPAL/TSF</text>
        </g>
        <g data-illus-layer="dampak">
          <text x="170" y="130" text-anchor="middle" class="tx-s t-red">longsoran</text>
          <text x="360" y="130" text-anchor="middle" class="tx-s t-red">sesak napas</text>
          <text x="500" y="130" text-anchor="middle" class="tx-s t-red">ekosistem rusak</text>
          <text x="655" y="130" text-anchor="middle" class="tx-s t-red">tumpahan massal</text>
        </g>
        <g data-illus-layer="kendali">
          <text x="170" y="155" text-anchor="middle" class="tx-s t-grn">barikade + SWA</text>
          <text x="360" y="155" text-anchor="middle" class="tx-s t-grn">N95/P100</text>
          <text x="500" y="155" text-anchor="middle" class="tx-s t-grn">drainase</text>
          <text x="655" y="155" text-anchor="middle" class="tx-s t-grn">zona larangan</text>
        </g>
      </svg>`;
    return fig('risiko',
      'Empat risiko dominan tambang nikel laterit',
      svg,
      'Empat risiko dominan laterit — tekan tombol untuk melihat dampak dan pengendalinya.',
      [{ k: 'dampak', t: 'Lihat dampak' }, { k: 'kendali', t: 'Lihat kendali' }],
      'Kontrol ilustrasi risiko');
  }

  /* ---------- 3 · Respirator & debu ---------- */
  function kesehatan() {
    const svg = `
      <svg viewBox="0 0 800 360" aria-hidden="true">
        <circle cx="250" cy="170" r="90" class="f-mut-soft s-ln"/>
        <circle cx="225" cy="150" r="8" class="f-tx"/>
        <path d="M200 200 q50 -10 100 10 l-8 50 q-45 -14 -84 0 z" class="f-teal-soft s-teal"/>
        <rect x="228" y="212" width="44" height="30" rx="6" class="f-teal s-teal"/>
        <line x1="200" y1="205" x2="160" y2="190" class="s-teal"/>
        <line x1="300" y1="215" x2="340" y2="200" class="s-teal"/>
        <g data-illus-layer="debu">
          <circle cx="480" cy="120" r="5" class="f-amb a-float"/>
          <circle cx="520" cy="160" r="4" class="f-amb a-float"/>
          <circle cx="560" cy="110" r="6" class="f-amb a-float"/>
          <circle cx="600" cy="170" r="4" class="f-amb a-float"/>
          <circle cx="640" cy="130" r="5" class="f-amb a-float"/>
          <circle cx="500" cy="210" r="4" class="f-amb a-float"/>
          <circle cx="580" cy="220" r="6" class="f-amb a-float"/>
          <text x="560" y="270" text-anchor="middle" class="tx-s">debu Ni, Co, Cr + silika</text>
        </g>
        <g data-illus-layer="pas">
          <rect x="440" y="286" width="280" height="30" rx="15" class="f-grn-soft s-grn"/>
          <text x="580" y="306" text-anchor="middle" class="tx-s">pilih — pakai — periksa kebocoran</text>
        </g>
        <text x="250" y="300" text-anchor="middle" class="tx">Respirator N95/P100</text>
      </svg>`;
    return fig('kesehatan',
      'Respirator dan partikel debu logam',
      svg,
      'Respirator hanya efektif bila tepat jenis, pas, dan diperiksa kebocorannya.',
      [{ k: 'debu', t: 'Lihat debu' }, { k: 'pas', t: 'Lihat uji pas' }],
      'Kontrol ilustrasi respirator');
  }

  /* ---------- 4 · Traffic & haul road ---------- */
  function traffic() {
    const svg = `
      <svg viewBox="0 0 800 360" aria-hidden="true">
        <polygon points="60,360 300,140 500,140 740,360" class="f-mut-soft s-ln"/>
        <line x1="400" y1="150" x2="400" y2="350" class="ln a-dash" stroke-dasharray="14 10"/>
        <g>
          <rect x="150" y="220" width="150" height="70" rx="8" class="f-amb-soft s-amb"/>
          <rect x="165" y="195" width="90" height="30" rx="4" class="f-mut s-ln"/>
          <circle cx="190" cy="300" r="18" class="f-tx"/>
          <circle cx="265" cy="300" r="18" class="f-tx"/>
          <text x="225" y="258" text-anchor="middle" class="tx-s">HE 100 T</text>
        </g>
        <g>
          <rect x="520" y="265" width="90" height="40" rx="8" class="f-teal-soft s-teal"/>
          <circle cx="545" cy="312" r="10" class="f-tx"/>
          <circle cx="585" cy="312" r="10" class="f-tx"/>
          <text x="565" y="290" text-anchor="middle" class="tx-s">LV</text>
        </g>
        <g data-illus-layer="buta">
          <polygon points="300,240 470,180 470,320" class="f-red-soft"/>
          <text x="400" y="120" text-anchor="middle" class="tx-s t-red">zona buta — jangan masuk tanpa kontak mata</text>
        </g>
        <g data-illus-layer="jarak">
          <line x1="330" y1="330" x2="500" y2="330" class="s-grn"/>
          <polygon points="330,330 342,325 342,335" class="f-grn"/>
          <polygon points="500,330 488,325 488,335" class="f-grn"/>
          <text x="415" y="322" text-anchor="middle" class="tx-s">50 m ≈ 3 detik pada 40 km/jam</text>
        </g>
        <path d="M610 200 a22 22 0 0 1 14 -20" class="s-amb a-pulse"/>
        <path d="M625 200 a36 36 0 0 1 22 -32" class="s-amb a-pulse"/>
        <text x="660" y="185" class="tx-s">klakson 3× = mundur</text>
      </svg>`;
    return fig('traffic',
      'Jalan angkut dengan alat berat, zona buta, dan jarak aman',
      svg,
      'Alat berat tidak melihat Anda di zona buta — jaga jarak 50 m dan selalu panggil radio.',
      [{ k: 'buta', t: 'Lihat zona buta' }, { k: 'jarak', t: 'Lihat jarak aman' }],
      'Kontrol ilustrasi jalan angkut');
  }

  /* ---------- 5 · Geoteknik lereng ---------- */
  function geotek() {
    const svg = `
      <svg viewBox="0 0 800 360" aria-hidden="true">
        <polygon points="60,320 60,80 240,80 240,140 420,140 420,200 600,200 600,260 740,260 740,320" class="f-mut-soft s-ln"/>
        <line x1="60" y1="80" x2="240" y2="80" class="s-grn"/>
        <text x="150" y="65" text-anchor="middle" class="tx-s">crest</text>
        <text x="400" y="335" text-anchor="middle" class="tx-s">toe — jaga jarak aman</text>
        <g>
          <rect x="520" y="272" width="80" height="30" rx="6" class="f-amb-soft s-amb"/>
          <circle cx="540" cy="308" r="9" class="f-tx"/>
          <circle cx="580" cy="308" r="9" class="f-tx"/>
        </g>
        <g>
          <line x1="660" y1="260" x2="660" y2="300" class="s-red"/>
          <line x1="700" y1="260" x2="700" y2="300" class="s-red"/>
          <rect x="648" y="252" width="64" height="12" rx="2" class="f-red"/>
        </g>
        <g data-illus-layer="retak">
          <polyline points="150,80 165,105 155,130 175,155" class="s-red a-blink" fill="none"/>
          <circle cx="165" cy="105" r="16" class="s-red a-pulse" fill="none"/>
          <text x="260" y="110" class="tx-s t-red">retakan + gelembung — STOP + lapor</text>
        </g>
        <g data-illus-layer="rembes">
          <path d="M420 200 C 460 220, 480 250, 500 285" class="s-blu a-dash" stroke-dasharray="7 6"/>
          <circle cx="505" cy="290" r="5" class="f-blu a-pulse"/>
          <text x="590" y="235" class="tx-s t-blu">mata air baru — waspada longsoran</text>
        </g>
      </svg>`;
    return fig('geotek',
      'Penampang lereng dengan retakan dan rembesan air',
      svg,
      'Retakan, gelembung, dan mata air baru adalah peringatan — amankan area dan lapor geoteknik.',
      [{ k: 'retak', t: 'Lihat retakan' }, { k: 'rembes', t: 'Lihat rembesan' }],
      'Kontrol ilustrasi lereng');
  }

  /* ---------- 6 · LOTO ---------- */
  function loto() {
    const svg = `
      <svg viewBox="0 0 800 360" aria-hidden="true">
        <rect x="80" y="90" width="180" height="180" rx="12" class="f-mut-soft s-ln"/>
        <rect x="120" y="130" width="100" height="60" rx="6" class="f-tx"/>
        <line x1="220" y1="160" x2="260" y2="160" class="s-grn a-dash" stroke-dasharray="6 5"/>
        <text x="170" y="250" text-anchor="middle" class="tx">Panel terisolasi</text>
        <g>
          <rect x="360" y="170" width="90" height="80" rx="10" class="f-red s-red"/>
          <path d="M380 170 v-25 a25 25 0 0 1 50 0 v25" class="s-red" fill="none"/>
          <circle cx="405" cy="210" r="8" class="f-bg"/>
        </g>
        <g>
          <rect x="480" y="150" width="120" height="70" rx="6" class="f-amb-soft s-amb"/>
          <line x1="495" y1="170" x2="585" y2="170" class="s-amb"/>
          <line x1="495" y1="188" x2="585" y2="188" class="s-amb"/>
          <line x1="495" y1="206" x2="545" y2="206" class="s-amb"/>
          <text x="540" y="240" text-anchor="middle" class="tx-s">DANGER — hanya pemilik yang melepas</text>
        </g>
        <g>
          <circle cx="680" cy="120" r="14" class="f-mut s-ln"/><text x="680" y="155" text-anchor="middle" class="tx-s">listrik</text>
          <circle cx="730" cy="120" r="14" class="f-mut s-ln"/><text x="730" y="155" text-anchor="middle" class="tx-s">mekanik</text>
          <circle cx="680" cy="200" r="14" class="f-mut s-ln"/><text x="680" y="235" text-anchor="middle" class="tx-s">hidrolik</text>
          <circle cx="730" cy="200" r="14" class="f-mut s-ln"/><text x="730" y="235" text-anchor="middle" class="tx-s">pneumatik</text>
          <circle cx="680" cy="280" r="14" class="f-mut s-ln"/><text x="680" y="315" text-anchor="middle" class="tx-s">gravitasi</text>
          <circle cx="730" cy="280" r="14" class="f-mut s-ln"/><text x="730" y="315" text-anchor="middle" class="tx-s">panas</text>
        </g>
        <g data-illus-layer="isolasi">
          <rect x="300" y="288" width="200" height="30" rx="15" class="f-grn-soft s-grn"/>
          <text x="400" y="308" text-anchor="middle" class="tx-s">verifikasi: NOL energi</text>
        </g>
        <g data-illus-layer="kunci">
          <rect x="300" y="288" width="200" height="30" rx="15" class="f-red-soft s-red"/>
          <text x="400" y="308" text-anchor="middle" class="tx-s">satu orang — satu kunci — satu tag</text>
        </g>
      </svg>`;
    return fig('loto',
      'Panel terisolasi, gembok, tag, dan sumber energi',
      svg,
      'LOTO: isolasi semua energi, kunci dengan gembok pribadi, verifikasi nol energi.',
      [{ k: 'isolasi', t: 'Lihat verifikasi' }, { k: 'kunci', t: 'Lihat aturan kunci' }],
      'Kontrol ilustrasi LOTO');
  }

  /* ---------- 7 · Segitiga api & APAR ---------- */
  function hotwork() {
    const svg = `
      <svg viewBox="0 0 800 360" aria-hidden="true">
        <polygon points="250,90 110,300 390,300" class="f-amb-soft s-amb"/>
        <path d="M250 180 c8 26 32 32 32 62 a32 32 0 1 1-64 0 c0-12 6-18 12-24 -6 12 6 18 12 18 -6-18 2-38 8-56z" class="f-red a-pulse"/>
        <text x="250" y="325" text-anchor="middle" class="tx">Segitiga api: panas + bahan bakar + oksigen</text>
        <g>
          <rect x="520" y="150" width="70" height="130" rx="14" class="f-red s-red"/>
          <rect x="540" y="120" width="30" height="22" rx="4" class="f-tx"/>
          <path d="M590 200 q40 10 30 60" class="s-tx" fill="none"/>
          <text x="555" y="310" text-anchor="middle" class="tx">APAR</text>
        </g>
        <g data-illus-layer="segitiga">
          <text x="250" y="70" text-anchor="middle" class="tx-s t-amb">panas</text>
          <text x="95" y="315" text-anchor="middle" class="tx-s t-amb">bahan bakar</text>
          <text x="405" y="315" text-anchor="middle" class="tx-s t-amb">oksigen</text>
        </g>
        <g data-illus-layer="pass">
          <rect x="470" y="60" width="260" height="34" rx="17" class="f-grn-soft s-grn"/>
          <text x="600" y="82" text-anchor="middle" class="tx-s">PASS: cabut — arah — remas — sapu</text>
        </g>
      </svg>`;
    return fig('hotwork',
      'Segitiga api dan tabung APAR',
      svg,
      'Padamkan hanya bila kecil dan terlatih — bila membesar, evakuasi dan hubungi ERT.',
      [{ k: 'segitiga', t: 'Lihat segitiga' }, { k: 'pass', t: 'Lihat PASS' }],
      'Kontrol ilustrasi kebakaran');
  }

  /* ---------- 8 · Lima limbah B3 ---------- */
  function b3() {
    function bin(x, top, icon, label) {
      return `<g>
        <rect x="${x}" y="150" width="110" height="120" rx="10" class="f-mut-soft s-ln"/>
        <rect x="${x}" y="150" width="110" height="22" rx="10" class="${top}"/>
        ${icon}
        <text x="${x + 55}" y="300" text-anchor="middle" class="tx-s">${label}</text>
      </g>`;
    }
    const svg = `
      <svg viewBox="0 0 800 360" aria-hidden="true">
        ${bin(60, 'f-tx', '<path d="M115 200 c-9 12-18 21-18 32 a18 18 0 0 0 36 0 c0-11-9-20-18-32z" class="f-mut s-ln"/>', 'Oli bekas')}
        ${bin(195, 'f-red', '<rect x="238" y="205" width="24" height="34" rx="4" class="f-red-soft s-red"/><line x1="250" y1="205" x2="250" y2="195" class="s-red"/>', 'Kemasan reagen')}
        ${bin(330, 'f-amb', '<rect x="368" y="205" width="34" height="40" rx="5" class="f-amb-soft s-amb"/><line x1="385" y1="205" x2="385" y2="196" class="s-amb"/><rect x="376" y="216" width="18" height="8" class="f-amb"/>', 'Aki bekas')}
        ${bin(465, 'f-blu', '<rect x="503" y="215" width="60" height="34" rx="4" class="f-blu-soft s-blu"/><path d="M510 232 h46" class="s-blu a-dash" stroke-dasharray="5 4"/>', 'Tailing HPAL')}
        ${bin(600, 'f-grn', '<path d="M630 205 h50 l-6 40 h-38 z" class="f-grn-soft s-grn"/><line x1="640" y1="205" x2="636" y2="196" class="s-grn"/><line x1="670" y1="205" x2="674" y2="196" class="s-grn"/>', 'Domestik')}
        <g data-illus-layer="tps">
          <rect x="60" y="60" width="680" height="34" rx="8" fill="none" stroke-width="2" class="s-grn a-dash" stroke-dasharray="10 7"/>
          <text x="400" y="83" text-anchor="middle" class="tx-s">hanya ke TPS B3 berizin — tailing ke TSF</text>
        </g>
        <g data-illus-layer="larang">
          <circle cx="250" cy="115" r="20" class="s-red" fill="none"/>
          <line x1="236" y1="101" x2="264" y2="129" class="s-red"/>
          <text x="250" y="150" text-anchor="middle" class="tx-s t-red">jangan dibakar</text>
          <circle cx="550" cy="115" r="20" class="s-red" fill="none"/>
          <line x1="536" y1="101" x2="564" y2="129" class="s-red"/>
          <text x="550" y="150" text-anchor="middle" class="tx-s t-red">jangan dikubur</text>
        </g>
      </svg>`;
    return fig('b3',
      'Lima wadah limbah sesuai jenisnya',
      svg,
      'Lima jenis limbah — dilarang dibakar atau dikubur; serahkan ke TPS B3 berizin.',
      [{ k: 'tps', t: 'Lihat tujuan buang' }, { k: 'larang', t: 'Lihat larangan' }],
      'Kontrol ilustrasi limbah');
  }

  /* ---------- 9 · Topsoil & air ---------- */
  function air() {
    const svg = `
      <svg viewBox="0 0 800 360" aria-hidden="true">
        <rect x="80" y="120" width="300" height="50" rx="6" class="f-grn-soft s-grn"/>
        <rect x="80" y="170" width="300" height="70" rx="6" class="f-amb-soft s-amb"/>
        <rect x="80" y="240" width="300" height="60" rx="6" class="f-mut-soft s-ln"/>
        <path d="M150 170 q4 -20 12 -28 M220 170 q4 -20 12 -28 M300 170 q4 -20 12 -28" class="s-grn" fill="none"/>
        <text x="400" y="150" class="tx-s">topsoil — simpan untuk reklamasi</text>
        <text x="400" y="210" class="tx-s">subsoil</text>
        <text x="400" y="272" class="tx-s">batuan dasar</text>
        <g data-illus-layer="topsoil">
          <rect x="70" y="110" width="320" height="70" rx="12" fill="none" stroke-width="2.5" class="s-grn a-pulse"/>
        </g>
        <g>
          <circle cx="540" cy="70" r="4" class="f-blu a-float"/>
          <circle cx="580" cy="60" r="4" class="f-blu a-float"/>
          <circle cx="620" cy="70" r="4" class="f-blu a-float"/>
          <rect x="500" y="250" width="180" height="50" rx="10" class="f-blu-soft s-blu"/>
          <text x="590" y="280" text-anchor="middle" class="tx-s">kolam pengendap</text>
        </g>
        <g data-illus-layer="air">
          <path d="M540 100 C 540 160, 540 200, 560 245" class="s-blu a-dash" stroke-dasharray="8 6"/>
          <path d="M600 100 C 600 160, 600 200, 600 245" class="s-blu a-dash" stroke-dasharray="8 6"/>
          <path d="M440 275 C 470 275, 480 275, 495 275" class="s-blu a-dash" stroke-dasharray="8 6"/>
          <text x="660" y="200" class="tx-s t-blu">jangan buang apa pun ke drainase</text>
        </g>
      </svg>`;
    return fig('air',
      'Lapisan tanah, hujan, dan kolam pengendap',
      svg,
      'Pisahkan topsoil untuk reklamasi; jaga drainase dan laporkan air berubah warna.',
      [{ k: 'topsoil', t: 'Lihat topsoil' }, { k: 'air', t: 'Lihat aliran air' }],
      'Kontrol ilustrasi tanah dan air');
  }

  /* ---------- 10 · Evakuasi ---------- */
  function darurat() {
    const svg = `
      <svg viewBox="0 0 800 360" aria-hidden="true">
        <rect x="80" y="150" width="150" height="120" rx="10" class="f-mut-soft s-ln"/>
        <path d="M140 190 c6 18 24 22 24 44 a24 24 0 1 1-48 0 c0-9 5-13 9-18 -5 9 5 13 9 13 -5-13 1-28 6-39z" class="f-red a-pulse"/>
        <rect x="280" y="180" width="150" height="90" rx="10" class="f-mut-soft s-ln"/>
        <text x="155" y="300" text-anchor="middle" class="tx">Area bahaya</text>
        <text x="355" y="300" text-anchor="middle" class="tx">Area kerja</text>
        <g data-illus-layer="jalur">
          <path d="M250 230 C 340 230, 420 220, 500 220" class="s-grn a-dash" stroke-dasharray="10 7"/>
          <polygon points="500,220 486,214 486,226" class="f-grn"/>
          <path d="M440 250 C 480 250, 500 244, 520 238" class="s-grn a-dash" stroke-dasharray="10 7"/>
          <polygon points="520,238 508,232 508,244" class="f-grn"/>
        </g>
        <g>
          <line x1="620" y1="270" x2="620" y2="140" class="s-grn"/>
          <polygon points="620,140 660,160 620,180" class="f-grn"/>
          <rect x="580" y="270" width="140" height="30" rx="15" class="f-grn-soft s-grn"/>
          <text x="650" y="290" text-anchor="middle" class="tx-s">titik kumpul</text>
        </g>
        <g>
          <path d="M120 90 a26 26 0 0 1 52 0 v14 l10 14 h-72 l10 -14 z" class="f-amb-soft s-amb"/>
          <circle cx="146" cy="126" r="4" class="f-amb a-blink"/>
        </g>
        <g data-illus-layer="kumpul">
          <circle cx="620" cy="140" r="26" fill="none" stroke-width="2" class="s-grn a-pulse"/>
          <text x="620" y="105" text-anchor="middle" class="tx-s t-grn">hadir 3/3 — tetap di sini</text>
        </g>
      </svg>`;
    return fig('darurat',
      'Jalur evakuasi menuju titik kumpul dengan bel alarm',
      svg,
      'Saat alarm: hentikan kerja, ikuti jalur evakuasi, dan tetap di titik kumpul.',
      [{ k: 'jalur', t: 'Lihat jalur' }, { k: 'kumpul', t: 'Lihat titik kumpul' }],
      'Kontrol ilustrasi evakuasi');
  }

  /* ---------- Delegasi klik global (sekali pasang) ---------- */
  let bound = false;
  function bind() {
    if (bound) return;
    bound = true;
    document.addEventListener('click', (e) => {
      const btn = e.target && e.target.closest ? e.target.closest('[data-illus-toggle]') : null;
      if (!btn) return;
      const figure = btn.closest ? btn.closest('.illus') : null;
      if (!figure) return;
      const key = btn.getAttribute('data-illus-toggle');
      const layer = figure.querySelector(`[data-illus-layer="${key}"]`);
      const pressed = btn.getAttribute('aria-pressed') === 'true';
      btn.setAttribute('aria-pressed', String(!pressed));
      if (layer) layer.classList.toggle('lit', !pressed);
    });
  }

  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', bind);
    } else {
      bind();
    }
  }

  return { fondasi, risiko, kesehatan, traffic, geotek, loto, hotwork, b3, air, darurat, bind };
})();
