/* ============================================================
   SLIDES DATA — All 50+ slide definitions
   Each slide is a typed object with render() handler.
   ============================================================ */

const SLIDES_DATA = [
  /* ============================================================
     1 · COVER
     ============================================================ */
  {
    type: 'cover',
    mod: 'PEMBUKA',
    title: 'Selamat Datang',
    render() {
      return `
        <div class="mining-scene" aria-hidden="true">
          <svg viewBox="0 0 1400 400" preserveAspectRatio="xMidYMax slice">
            <defs>
              <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#0a1428"/>
                <stop offset="100%" stop-color="#070d1a" stop-opacity="0"/>
              </linearGradient>
              <linearGradient id="ground" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#1a2a44"/>
                <stop offset="100%" stop-color="#070d1a"/>
              </linearGradient>
            </defs>
            <rect x="0" y="0" width="1400" height="400" fill="url(#sky)"/>
            <!-- Mountains -->
            <path d="M0 280 L200 160 L380 240 L520 180 L700 280 L880 200 L1040 260 L1200 180 L1400 280 L1400 400 L0 400 Z" fill="url(#ground)"/>
            <path d="M0 320 L180 240 L340 290 L500 250 L680 320 L840 270 L1020 320 L1200 250 L1400 320 L1400 400 L0 400 Z" fill="#0a1428" opacity="0.6"/>
            <!-- Pit benches -->
            <path d="M860 400 L900 360 L920 360 L920 400 Z" fill="#243757"/>
            <path d="M900 360 L940 340 L960 340 L960 400 L920 400 Z" fill="#1a2a44"/>
            <path d="M940 340 L990 320 L1010 320 L1010 400 L960 400 Z" fill="#243757"/>
            <!-- Dump truck silhouette (berjalan perlahan) -->
            <g class="haul-move">
            <g transform="translate(380 320)">
              <rect x="0" y="0" width="60" height="22" fill="#1e293b"/>
              <path d="M0 0 L60 0 L50 -18 L18 -18 L10 0 Z" fill="#1e293b"/>
              <rect x="5" y="-18" width="40" height="14" fill="#3b4863" rx="2"/>
              <circle cx="14" cy="24" r="6" fill="#0a1428" stroke="#475569"/>
              <circle cx="46" cy="24" r="6" fill="#0a1428" stroke="#475569"/>
            </g>
            </g>
            <!-- Excavator silhouette -->
            <g transform="translate(620 310)">
              <rect x="0" y="0" width="48" height="20" fill="#1e293b"/>
              <rect x="4" y="-12" width="20" height="12" fill="#3b4863" rx="1"/>
              <path d="M28 -6 L52 -2 L48 6 L24 -2 Z" fill="#1e293b"/>
              <path d="M52 -2 L60 6 L48 8 Z" fill="#3b4863"/>
              <circle cx="12" cy="22" r="6" fill="#0a1428" stroke="#475569"/>
              <circle cx="36" cy="22" r="6" fill="#0a1428" stroke="#475569"/>
              <circle cx="24" cy="22" r="5" fill="#0a1428" stroke="#475569"/>
            </g>
            <!-- Stars -->
            ${[120, 280, 460, 680, 920, 1180, 1320].map((x, i) => `<circle class="star-tw" style="animation-delay:${(i * 0.45).toFixed(2)}s" cx="${x}" cy="${60 + i * 12}" r="${0.8 + Math.random() * 1.2}" fill="#fbbf24" opacity="${0.3 + Math.random() * 0.5}"/>`).join('')}
          </svg>
        </div>
        <div class="inner">
          <div class="logo-big logo-png" style="background-image:url('assets/logo-full.png')" role="img" aria-label="PT. Sifang Mining Indonesia"></div>
          <div class="co">PT. Sifang Mining Indonesia</div>
          <h1 style="margin-top:10px">PROGRAM INDUKSI <em>K3L</em><br/>PERTAMBANGAN NIKEL OPEN PIT</h1>
          <div class="hazard" style="margin-left:auto;margin-right:auto;"></div>
          <p class="lead" style="margin:14px auto 0; text-align:center;">
            Selamat datang, Rekrutan Baru. Keselamatan Anda adalah prioritas utama kami.
            Ikuti seluruh materi ini hingga tuntas sebelum memasuki area site.
          </p>
          <div class="hero-3d" aria-hidden="true">
            <div class="hero-fig anim-float"><span class="halo">${Icons.get3d('helmet', { class: 'ico3d-svg', size: 46 })}</span><small>APD</small></div>
            <div class="hero-fig anim-float-slow anim-d1"><span class="halo">${Icons.get3d('leaf', { class: 'ico3d-svg', size: 46 })}</span><small>Lingkungan</small></div>
            <div class="hero-fig anim-float anim-d2"><span class="halo">${Icons.get3d('lock', { class: 'ico3d-svg', size: 46 })}</span><small>LOTO</small></div>
          </div>
          <div class="badges">
            <span class="badge gold">★ ZERO HARM</span>
            <span class="badge teal">K3L SEIMBANG</span>
            <span class="badge teal">SMKP MINERBA</span>
            <span class="badge">ISO 45001:2018</span>
            <span class="badge">ISO 14001:2015</span>
            <span class="badge">PP 22/2021 • PERMEN 33/2021</span>
            <span class="badge blue">${State.get('user.name') ? `👋 ${State.get('user.name')}` : 'PESERTA INDUKSI'}</span>
          </div>
          <div class="hint">Tekan <b>Lanjut</b> atau gunakan tombol panah keyboard untuk memulai ▸</div>
        </div>
      `;
    },
    afterRender() { Effects.celebrate(); },
  },

  /* ============================================================
     2 · AGENDA
     ============================================================ */
  {
    type: 'agenda',
    mod: 'PEMBUKA',
    title: 'Agenda Induksi',
    render() {
      return `
        <div class="inner stagger">
          <div class="kicker">Pembuka</div>
          <h2>Agenda <em>Induksi K3L</em></h2>
          <p class="lead">Sebelas blok materi yang wajib Anda kuasai. Tidak ada bagian yang boleh dilewati.</p>
          <div class="cards">
            <article class="card"><div class="ico">${Icons.get('building', { class: 'ico-svg' })}</div><h3>01 · Profil & Kebijakan</h3><p>Profil perusahaan, dasar hukum, kebijakan K3L, Life-Saving Rules, dan Stop Work Authority.</p></article>
            <article class="card t"><div class="ico">${Icons.get('scroll', { class: 'ico-svg' })}</div><h3>02 · Aturan & Perilaku</h3><p>Hak & kewajiban, aturan site, peta area, rambu, alarm, dan komunikasi radio.</p></article>
            <article class="card b"><div class="ico">${Icons.get('compass', { class: 'ico-svg' })}</div><h3>03 · Manajemen Risiko</h3><p>HIRADC, JSA, Take 5, hierarki pengendalian, izin kerja, SIMOPS & MOC.</p></article>
            <article class="card g"><div class="ico">${Icons.get('helmet', { class: 'ico-svg' })}</div><h3>04 · APD & Kesehatan</h3><p>APD wajib & spesifik, fit to work, fatigue, dan bahaya kesehatan khas nikel.</p></article>
            <article class="card r"><div class="ico">${Icons.get('mountain', { class: 'ico-svg' })}</div><h3>05 · Risiko Kritikal Area</h3><p>Traffic & haul road, alat berat, dan geoteknik laterit open pit.</p></article>
            <article class="card"><div class="ico">${Icons.get('tools', { class: 'ico-svg' })}</div><h3>06 · Pekerjaan Berbahaya</h3><p>LOTO, listrik, ketinggian, ruang terbatas, hot work, lifting, dan galian.</p></article>
            <article class="card t"><div class="ico">${Icons.get('factory', { class: 'ico-svg' })}</div><h3>07 · Fasilitas & Lingkungan</h3><p>Bahan kimia/B3, plant & conveyor, smelter/HPAL/TSF/jetty, fuel farm, lingkungan.</p></article>
            <article class="card r"><div class="ico">${Icons.get('siren', { class: 'ico-svg' })}</div><h3>08 · Darurat & Medis</h3><p>Tanggap darurat, muster point, P3K, medevac, dan pelaporan insiden.</p></article>
            <article class="card b"><div class="ico">${Icons.get('bed', { class: 'ico-svg' })}</div><h3>09 · Penunjang</h3><p>Camp & mess, transportasi, keamanan, komunitas, dan etika kerja.</p></article>
            <article class="card m"><div class="ico">${Icons.get('clipboard', { class: 'ico-svg' })}</div><h3>10 · Studi Kasus</h3><p>Pelajaran dari insiden nyata di industri nikel — agar tidak terulang di site kita.</p></article>
            <article class="card g"><div class="ico">${Icons.get('check', { class: 'ico-svg' })}</div><h3>11 · Evaluasi & Komitmen</h3><p>Pre-test, post-test, tanda tangan komitmen, dan penerbitan sertifikat induksi.</p></article>
          </div>
          <div class="footnote" style="margin-top:16px">Sebelas blok materi terpadu keselamatan dan lingkungan.</div>
        </div>
      `;
    },
  },

  /* ============================================================
     3 · INFORMASI UMUM - Ground Rules
      ============================================================ */
  {
    type: 'cards',
    mod: 'PEMBUKA',
    title: 'Informasi Umum & Tata Tertib',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Pembuka — Ground Rules</div>
          <h2>Informasi <em>Umum</em> — Tata Tertib Induksi</h2>
          <p class="lead">Agar induksi berjalan efektif, setiap peserta wajib mematuhi tata tertib berikut selama & setelah induksi.</p>
          <div class="cards stagger">
            <article class="card b"><div class="ico">${Icons.get('shield', { class: 'ico-svg' })}</div><h3>Prosedur Darurat</h3><p>Hafalkan <b>jalur evakuasi & Muster Point</b> ruangan induksi. Saat alarm: hentikan materi, ikuti instruktur ke titik kumpul.</p></article>
            <article class="card g"><div class="ico">${Icons.get('check', { class: 'ico-svg' })}</div><h3>Tepat Waktu</h3><p><b><i>On time.</i></b> Keterlambatan berarti mengulang sesi. Hormati waktu instruktur dan peserta lain.</p></article>
            <article class="card"><div class="ico">${Icons.get('mute', { class: 'ico-svg' })}</div><h3>Mode Senyap</h3><p>Atur ponsel pada <b>mode senyap atau getar</b>. Jawab telepon di luar ruangan, bukan saat materi berlangsung.</p></article>
            <article class="card t"><div class="ico">${Icons.get('eye', { class: 'ico-svg' })}</div><h3>Tetap Fokus</h3><p><b><i>Stay focused.</i></b> Arahkan pandangan ke instruktur dan catat poin kritis. Hindari percakapan di luar konteks materi.</p></article>
            <article class="card r"><div class="ico">${Icons.get('hand', { class: 'ico-svg' })}</div><h3>Partisipasi Aktif</h3><p><b><i>Participate.</i></b> Ajukan pertanyaan, jawab kuis, dan kerjakan simulasi. Sikap proaktif dapat menyelamatkan nyawa.</p></article>
            <article class="card"><div class="ico">${Icons.get('mic', { class: 'ico-svg' })}</div><h3>Dengarkan dengan Seksama</h3><p><b><i>Listen.</i></b> Jangan memotong pembicaraan. Saat satu orang berbicara, peserta lain mendengarkan.</p></article>
            <article class="card b"><div class="ico">${Icons.get('cert', { class: 'ico-svg' })}</div><h3>Nikmati Proses</h3><p><b><i>Enjoy the training.</i></b> Induksi bukan formalitas — ini investasi agar dapat pulang dengan selamat setiap hari.</p></article>
            <article class="card g"><div class="ico">${Icons.get('clipboard', { class: 'ico-svg' })}</div><h3>Aturan Keluar/Masuk</h3><p>Izin ke instruktur bila perlu ke toilet. Kembali segera & jangan meninggalkan sesi evaluasi.</p></article>
          </div>
        </div>
      `;
    },
  },

  /* ============================================================
     4 · TUJUAN & RUANG LINGKUP
      ============================================================ */
  {
    type: 'two',
    mod: 'PEMBUKA',
    title: 'Tujuan & Ruang Lingkup',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Pembuka</div>
          <h2>Tujuan & <em>Ruang Lingkup</em> Induksi</h2>
          <div class="two">
            <div class="panelbox">
              <h3><i></i>Tujuan Induksi</h3>
              <ul>
                <li><b>Memenuhi kewajiban hukum</b> perusahaan memberikan pelatihan K3 sebelum pekerja masuk area.</li>
                <li><b>Mengenali bahaya & risiko</b> khas tambang nikel open pit sebelum terpapar.</li>
                <li><b>Memahami aturan, prosedur darurat,</b> dan konsekuensi pelanggaran.</li>
                <li><b>Membangun budaya safety:</b> saling menegur, melapor, dan berani berhenti kerja saat tidak aman.</li>
                <li><b>Menyamakan standar kompetensi</b> seluruh personel: karyawan, kontraktor, dan pengunjung.</li>
              </ul>
            </div>
            <div class="panelbox warn">
              <h3><i></i>Ruang Lingkup & Ketentuan</h3>
              <ul>
                <li><b>Wajib diikuti:</b> karyawan baru, kontraktor, subkontraktor, magang, tamu, dan vendor.</li>
                <li><b>Jenis induksi:</b> umum (site), area spesifik (pit/plant/workshop/jetty), pengunjung, dan penyegaran.</li>
                <li><b>Tanpa induksi = tanpa akses.</b> Kartu/ID induksi adalah syarat masuk site.</li>
                <li><b>Evaluasi:</b> pre-test, post-test (passing grade ≥ 80%; 100% untuk Life-Saving Rules), remedial, dan sign-off.</li>
                <li><b>Penyegaran:</b> berkala, setelah insiden, cuti panjang, atau perubahan tugas/area.</li>
              </ul>
            </div>
          </div>
          <div class="footnote">Induksi umum tidak menggantikan induksi area spesifik dan toolbox meeting harian. Pekerjaan hanya dimulai setelah seluruh lapisan induksi selesai.</div>
        </div>
      `;
    },
  },

  /* ============================================================
     5 · PENGETAHUAN K3 & LAMBANG K3 (dari PDF p.05)
      ============================================================ */
  {
    type: 'cards',
    mod: 'PEMBUKA',
    title: 'Pengetahuan K3 & Lambang K3',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Pembuka — Dasar K3</div>
          <h2>Apa itu <em>K3</em>? Mengapa Utama?</h2>
          <div class="two">
            <div class="panelbox ok">
              <h3><i></i>1. Apakah K3?</h3>
              <p style="color:var(--muted); font-size:13.5px; line-height:1.7"><b style="color:var(--text)">Keselamatan & Kesehatan Kerja</b> adalah segala kegiatan untuk <b>menjamin dan melindungi</b> tenaga kerja melalui upaya <b>pencegahan kecelakaan & penyakit akibat kerja</b>.</p>
              <h3 style="margin-top:16px"><i></i>2. Mengapa K3 Paling Utama?</h3>
              <p style="color:var(--muted); font-size:13.5px; line-height:1.7">Agar <b>bebas risiko</b> kecelakaan, cedera, kecacatan, kematian, dan kerusakan harta benda — dengan hasil maksimal. <b>Produksi tidak sepadan dengan nyawa.</b></p>
            </div>
            <div class="panelbox">
              <h3><i></i>Lambang K3 — Makna (Permenaker)</h3>
              <ul>
                <li><b style="color:var(--green)">Roda Gigi:</b> bekerja dengan kesegaran jasmani & rohani</li>
                <li><b style="color:var(--green)">Warna Hijau:</b> selamat, sehat, sejahtera</li>
                <li><b style="color:var(--green)">Warna Putih:</b> bersih & suci</li>
                <li><b>Palang (+):</b> bebas dari kecelakaan & sakit akibat kerja</li>
                <li><b>11 Gerigi Roda:</b> 11 bab dalam <b>UU No. 1 Tahun 1970</b></li>
              </ul>
            </div>
          </div>
          <div class="cards stagger" style="margin-top:18px">
            <article class="card b"><div class="ico">${Icons.get('shield', { class: 'ico-svg' })}</div><h3>K3 Bukan Beban</h3><p>K3 adalah <b>investasi produktivitas</b>: zero harm = zero downtime = reputasi & keberlanjutan operasi nikel open pit.</p></article>
            <article class="card t"><div class="ico">${Icons.get('refresh', { class: 'ico-svg' })}</div><h3>11 Bab UU No. 1 Tahun 1970</h3><p>Syarat K3, pengawasan, pembinaan, P2K3, kecelakaan, dan sanksi — semuanya terangkum dalam 11 gerigi roda.</p></article>
            <article class="card g"><div class="ico">${Icons.get('cert', { class: 'ico-svg' })}</div><h3>Budaya SMI</h3><p><b>PT Sifang Mining Indonesia</b> mengadopsi makna lambang K3 sepenuhnya — berlaku untuk seluruh site nikel open pit SMI.</p></article>
          </div>
          <div class="footnote">Lambang K3 dimaknai sesuai ketentuan Permenaker.</div>
        </div>
      `;
    },
  },

  /* ============================================================
     5B · FONDASI K3L SEIMBANG (PDF Panduan K3L Seimbang Bab 1)
      ============================================================ */
  {
    type: 'two',
    mod: 'PEMBUKA',
    title: 'Fondasi K3L Seimbang',
    render() {
      return `
        <div class="inner">
          <div class="kicker k-teal">Fondasi K3L Seimbang — Core Value SMI</div>
          <h2>Dua Janji <em>Seimbang</em> — Selamat & Berkelanjutan</h2>
          <p class="lead">K3L bukan sekadar aturan administratif, melainkan <b style="color:var(--text)">nilai inti (core value)</b> yang mendefinisikan identitas operasional PT. Sifang Mining Indonesia. Keselamatan & lingkungan adalah <b style="color:var(--text)">simbiosis</b> — bukan trade-off.</p>
          ${Illustrations.fondasi()}
          <div class="two">
            <div class="panelbox ok">
              <h3><i></i>Janji 1 — Pulang Selamat</h3>
              <ul>
                <li>Setiap orang yang masuk area kerja <b>wajib pulang selamat & sehat</b> setiap hari.</li>
                <li>Keselamatan operasional yang prima adalah <b>prasyarat</b> perlindungan lingkungan yang baik.</li>
                <li>Contoh: disiplin APD & LOTO mencegah cedera <b>dan</b> mencegah tumpahan.</li>
              </ul>
            </div>
            <div class="panelbox">
              <h3><i></i>Janji 2 — Operasi Berkelanjutan</h3>
              <ul>
                <li>Operasi nikel laterit (pit, crushing, stockpile, <b>HPAL</b>) hanya lestari bila lingkungan dijaga.</li>
                <li>Satu insiden tumpahan B3 dapat berubah menjadi <b>krisis lingkungan</b> yang mahal & merusak reputasi.</li>
                <li>Setiap tindakan individu (pakai respirator, kenali longsor) = kontribusi keberlanjutan.</li>
              </ul>
            </div>
          </div>
          <div class="bigquote" style="margin-top:18px;">
            “Keselamatan diutamakan, lingkungan selalu diperhatikan, produksi mengikuti secara otomatis. Tidak ada target produksi yang membenarkan pelanggaran K3L.”
            <small>— Filosofi Fondasi K3L Seimbang • Panduan Induksi Terpadu Nikel</small>
          </div>
          <div class="k3l-duo">
            <div class="k3l-pill safety"><span class="pill-ico anim-bob">${Icons.get3d('shield', { class: 'ico3d-svg', size: 34 })}</span><b>SAFETY</b><span>Zero Harm • LSR • SWA • LOTO • APD</span></div>
            <div class="k3l-plus">+</div>
            <div class="k3l-pill env"><span class="pill-ico anim-bob anim-d1">${Icons.get3d('leaf', { class: 'ico3d-svg', size: 34 })}</span><b>ENVIRONMENT</b><span>Zero Spill • TPS B3 • Reklamasi • Air Bersih</span></div>
            <div class="k3l-plus">=</div>
            <div class="k3l-pill balanced"><span class="pill-ico anim-pulse-soft">${Icons.get3d('award', { class: 'ico3d-svg', size: 34 })}</span><b>K3L SEIMBANG</b><span>Produksi Aman & Berkelanjutan</span></div>
          </div>
          <div class="footnote">Sumber: Panduan Fondasi K3L Seimbang, Bab 1.</div>
        </div>
      `;
    },
  },

  /* ============================================================
     6 · STATS / COMMITMENT INTRO
      ============================================================ */
  {
    type: 'stats',
    mod: 'PEMBUKA',
    title: 'Mengapa Ini Penting',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Pembuka</div>
          <h2>Mengapa <em>Induksi K3L</em> Itu Penting?</h2>
          <p class="lead">Data keselamatan industri pertambangan global — pengingat mengapa setiap prosedur ada.</p>
          <div class="stats">
            <div class="stat danger">
              <div class="num" data-target="48">0</div>
              <div class="lbl">Kecelakaan Fatal Tambang / Tahun</div>
            </div>
            <div class="stat warn">
              <div class="num" data-target="80" data-suffix="%">0</div>
              <div class="lbl">Insiden Bisa Dicegah</div>
            </div>
            <div class="stat ok">
              <div class="num" data-target="10">0</div>
              <div class="lbl">Life-Saving Rules</div>
            </div>
            <div class="stat">
              <div class="num" data-target="82">0</div>
              <div class="lbl">Slide Interaktif</div>
            </div>
          </div>
          <div class="bigquote" style="margin-top:32px;">
            “Tidak ada target produksi, target waktu, atau target biaya yang sepadan dengan nyawa manusia.”
            <small>— Komitmen Manajemen PT. Sifang Mining Indonesia</small>
          </div>
        </div>
      `;
    },
    afterRender() { Effects.animateCounters(); },
  },

  /* ============================================================
     5 · PRE-TEST
     ============================================================ */
  {
    type: 'pretest',
    mod: 'EVAL',
    title: 'Pre-test',
    render() { return '<div id="quizContainer"></div>'; },
    afterRender() { Quiz.renderPretest(); },
  },
  {
    type: 'cards',
    mod: 'PROFIL',
    title: 'Profil Perusahaan',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Profil & Kebijakan</div>
          <h2>Profil <em>PT. Sifang Mining Indonesia</em></h2>
          <p class="lead">Kenali tempat Anda bekerja: karakteristik site menentukan bahaya yang akan Anda hadapi setiap hari.</p>
          <div class="cards stagger">
            <article class="card b"><div class="ico">${Icons.get('pickup', { class: 'ico-svg' })}</div><h3>Komoditas & Metode</h3><p>Pertambangan <b>nikel laterit</b> (limonit & saprolit) dengan metode <b>open pit</b> (terrace/strip mining). Laterit sangat sensitif terhadap air — licin dan rawan longsor saat hujan.</p></article>
            <article class="card"><div class="ico">${Icons.get('compass', { class: 'ico-svg' })}</div><h3>Area Operasional</h3><ul><li>Pit, bench, highwall, disposal, pit sump</li><li>Haul road & jalur LV/HE</li><li>Stockpile, crusher/conveyor plant</li><li>Workshop, warehouse, fuel farm, gudang B3</li><li>Kantor, klinik, camp/mess, muster point</li></ul></article>
            <article class="card t"><div class="ico">${Icons.get('refresh', { class: 'ico-svg' })}</div><h3>Sistem Kerja</h3><p>Shift/roster dengan kerja siang–malam. Manajemen kelelahan (<i>fatigue management</i>) diterapkan ketat: laporkan kondisi tidak fit sebelum memulai shift.</p></article>
            <article class="card g"><div class="ico">${Icons.get('shield', { class: 'ico-svg' })}</div><h3>Visi Keselamatan</h3><p><b>Zero Harm</b> — setiap orang harus pulang dalam kondisi sehat dan selamat, setiap hari. Produksi tidak pernah lebih penting dari nyawa.</p></article>
          </div>
        </div>
      `;
    },
  },

  /* ============================================================
     6B · RISIKO SPESIFIK NIKEL LATERIT (PDF K3L Seimbang Bab 1 & 3)
      ============================================================ */
  {
    type: 'cards',
    mod: 'PROFIL',
    title: 'Risiko Spesifik Nikel Laterit',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Profil & Kebijakan — Konteks Nikel Laterit</div>
          <h2>Risiko <em>Dominan</em> Tambang Nikel Laterit</h2>
          <p class="lead">Aktivitas open pit, crushing plant, stockpile & <b>HPAL</b> membawa risiko unik. Setiap pekerja — apa pun jabatannya — wajib memahami empat risiko dominan ini sebelum terpapar.</p>
          ${Illustrations.risiko()}
          <div class="cards stagger">
            <article class="card r"><div class="ico">${Icons.get('mountain', { class: 'ico-svg' })}</div><h3>1 · Kegagalan Lereng / Longsoran</h3><p>Laterit (limonit & saprolit) berkekuatan seperti <b>tanah</b>, bukan batuan. Hujan tropis menurunkan kuat geser drastis → longsoran, jatuhan batu, runtuhnya bench. Kenali retakan, gelembung & mata air baru.</p></article>
            <article class="card"><div class="ico">${Icons.get('mask', { class: 'ico-svg' })}</div><h3>2 · Debu Logam Berat & Silika</h3><p>Galian, hauling, stockpile & grinding menghasilkan debu <b>Ni, Co, Cr + silika respirabel</b> yang dapat melebihi NAB. Risiko: silikosis, gangguan napas kronis, sensitisasi kulit. Kendali: water spraying, ventilasi + respirator N95/P100 fit-tested.</p></article>
            <article class="card t"><div class="ico">${Icons.get('drop', { class: 'ico-svg' })}</div><h3>3 · Air Asam Tambang & Limpasan</h3><p>Limpasan pit & stockpile dapat membawa logam & keasaman ke ekosistem lokal. Satu tumpahan kimia = krisis lingkungan. Patuhi drainase, jangan buang apa pun ke selokan, laporkan air berubah warna/berminyak/berbau.</p></article>
            <article class="card b"><div class="ico">${Icons.get('factory', { class: 'ico-svg' })}</div><h3>4 · HPAL, Tailing & Interaksi HE</h3><p>HPAL menghasilkan tailing bervolume besar + residu kimia. <b>TSF = exclusion zone</b>. Ditambah interaksi LV vs HE (blind spot) dan kelelahan shift malam. Semua butuh izin, radio & SWA.</p></article>
          </div>
          <div class="panelbox warn" style="margin-top:16px">
            <h3><i></i>Risiko Halus tapi Sama Penting</h3>
            <ul>
              <li><b>Kebisingan tinggi</b> crushing/smelter, <b>radiasi alami</b> mineral tertentu & <b>beban fisik berat</b> — gunakan ear protection ganda, pantau pajanan & rotasi tugas.</li>
              <li>Anda adalah <b>subjek aktif</b> SMKP/SMK3 — bukan objek. Setiap pengamatan (debu tebal, rembesan aneh) wajib dilapor sebagai kontribusi perbaikan berkelanjutan.</li>
            </ul>
          </div>
          <div class="footnote">Sumber: Panduan Fondasi K3L Seimbang, Bab 1 dan 3.</div>
        </div>
      `;
    },
  },

  /* ============================================================
     7 · DASAR HUKUM (diperkaya dari PDF p.09)
      ============================================================ */
  {
    type: 'cards',
    mod: 'PROFIL',
    title: 'Dasar Hukum & Standar',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Profil & Kebijakan</div>
          <h2>Dasar Hukum & <em>Standar K3L</em></h2>
          <p class="lead">Seluruh aturan di site ini berlandaskan regulasi nasional dan standar internasional tambang dan lingkungan.</p>
          <div class="cards stagger">
            <article class="card"><div class="ico">${Icons.get('scroll', { class: 'ico-svg' })}</div><h3>UU No. 1 Tahun 1970</h3><p>Undang-Undang Keselamatan Kerja: kewajiban melindungi setiap pekerja dan orang di tempat kerja. Fondasi 11 Bab K3.</p></article>
            <article class="card b"><div class="ico">${Icons.get('mountain', { class: 'ico-svg' })}</div><h3>PERMEN ESDM No. 26/2018</h3><p>Prinsip & pelaksanaan kaidah pertambangan yang baik + pengawasan K3 pertambangan.</p></article>
            <article class="card"><div class="ico">${Icons.get('doc', { class: 'ico-svg' })}</div><h3>Kepmen ESDM 1827.K/30/MEM/2018</h3><p>Pedoman kaidah tambang yang baik — memuat <b>SMKP Minerba</b> wajib diaudit.</p></article>
            <article class="card g"><div class="ico">${Icons.get('cert', { class: 'ico-svg' })}</div><h3>Kepdirjen Minerba 185/2019</h3><p>Petunjuk teknis pelaksanaan SMKP Minerba. Standar operasional pengawasan & pelaporan.</p></article>
            <article class="card"><div class="ico">${Icons.get('mountain', { class: 'ico-svg' })}</div><h3>UU No. 3/2020 & PP 96/2021</h3><p>Rezim Minerba: kewajiban penerapan kaidah teknik baik, termasuk K3 & KO pertambangan (tetap dipertahankan).</p></article>
            <article class="card t"><div class="ico">${Icons.get('globe', { class: 'ico-svg' })}</div><h3>PP 50/2012, ISO 45001:2018, ISO 14001:2015</h3><p>SMK3 + ISO K3 & Lingkungan. Partisipasi, perbaikan berkelanjutan, aspek lingkungan.</p></article>
            <article class="card g"><div class="ico">${Icons.get('drop', { class: 'ico-svg' })}</div><h3>PP No. 22 Tahun 2021 (PLH)</h3><p><b>Baru — Fondasi K3L Seimbang.</b> Dari persetujuan pasif ke <b>penyelenggaraan proaktif</b>: baku mutu udara ambien, air limbah & <b>TPS B3 berizin + pemantauan ketat</b>.</p></article>
            <article class="card b"><div class="ico">${Icons.get('refresh', { class: 'ico-svg' })}</div><h3>Permen ESDM No. 33/2021</h3><p><b>Baru — Integrasi K3 + PLH.</b> Menegaskan keselamatan & lingkungan sebagai <b>dua pilar tak terpisahkan</b> pada usaha minerba. Dasar filosofi K3L Seimbang.</p></article>
            <article class="card b"><div class="ico">${Icons.get('truck', { class: 'ico-svg' })}</div><h3>UU 32/2009 PPLH + IMSBC Code</h3><p>Perlindungan & pengelolaan lingkungan hidup + kode IMO kargo curah nikel ore Grup A (likuefaksi).</p></article>
          </div>
          <div class="panelbox" style="margin-top:16px">
            <h3><i></i>Tabel Regulasi → Implikasi Praktis (K3L Seimbang)</h3>
            <div class="reg-table">
              <div class="reg-row reg-head"><span>Dasar Hukum</span><span>Deskripsi</span><span>Implikasi bagi Pekerja</span></div>
              <div class="reg-row"><span><b>UU No. 1 Tahun 1970</b></span><span>Keselamatan Kerja</span><span>Hak atas lingkungan aman & sehat</span></div>
              <div class="reg-row"><span><b>Kepmen 1827/2018</b></span><span>Kaidah Teknik (KT-TB)</span><span>Standar desain tambang, HE & TSF wajib dipatuhi</span></div>
              <div class="reg-row"><span><b>PP 22/2021</b></span><span>Perlindungan LH</span><span>Jaga udara/air/limbah; buang B3 hanya di TPS berizin</span></div>
              <div class="reg-row"><span><b>Permen 33/2021</b></span><span>Integrasi K3+PLH</span><span>SWA berlaku untuk bahaya <b>dan</b> dampak lingkungan</span></div>
              <div class="reg-row"><span><b>Permen 26/2018</b></span><span>Sanksi Administratif</span><span>Teguran → SP → skorsing → terminasi/deportasi</span></div>
            </div>
            <p style="margin:10px 0 0; color:var(--muted); font-size:12px; line-height:1.6">Pelanggaran regulasi = sanksi administratif perusahaan (denda/pencabutan izin) <b>dan</b> dapat menjerat individu dengan <b>tanggung jawab pidana (KUHP)</b>. Materi ini bukan opini perusahaan — melainkan implementasi kewajiban hukum.</p>
          </div>
          <div class="footnote">Landasan regulasi: UU No. 1 Tahun 1970, Kepmen ESDM 1827/2018, PP 22/2021, Permen 33/2021, dan Permen 26/2018.</div>
        </div>
      `;
    },
  },

  /* ============================================================
     8 · KEBIJAKAN K3L + NILAI PERUSAHAAN (dari PDF p.06)
      ============================================================ */
  {
    type: 'two',
    mod: 'PROFIL',
    title: 'Kebijakan & Nilai Perusahaan',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Profil & Kebijakan — Diselaraskan SMI</div>
          <h2>Kebijakan <em>K3L</em> & Nilai Perusahaan</h2>
          <div class="two">
            <div class="panelbox">
              <h3><i></i>8 Komitmen Mutu-K3-LH</h3>
              <ul>
                <li><b>Good Mining Practice (GMP):</b> cegah kerusakan aset & henti produksi; operasi aman-efektif-efisien.</li>
                <li><b>Kepatuhan regulasi:</b> Mutu, K3, Lingkungan sesuai peraturan & persyaratan lain.</li>
                <li><b>Perlindungan pekerja:</b> adakan kondisi aman, cegah tindakan tidak aman.</li>
                <li><b>Pengelolaan 5R & aman-nyaman-efisien:</b> ciptakan tempat kerja aman untuk semua.</li>
                <li><b>Pemeliharaan sarana:</b> standar pemeliharaan, perawatan, kelayakan, inspeksi prasarana & kompetensi teknisi.</li>
                <li><b>Kelayakan instalasi:</b> evaluasi kajian teknis pertambangan.</li>
                <li><b>Pembinaan pekerja & mitra & masyarakat:</b> program pengembangan & pemberdayaan.</li>
                <li><b>SDM, teknologi digital & partisipasi:</b> sumber daya + kerangka kerja + konsultasi pekerja.</li>
              </ul>
            </div>
            <div class="panelbox warn">
              <h3><i></i>5 Nilai Perusahaan</h3>
              <ul>
                <li><b>1. Leadership:</b> Integritas — Tanggung jawab</li>
                <li><b>2. Perilaku Baik:</b> Sikap positif, toleransi, tenggang rasa, sopan santun</li>
                <li><b>3. Kompetensi:</b> kemampuan diri, pengetahuan, cepat & dapat diandalkan</li>
                <li><b>4. Kualitas:</b> prestasi, keunggulan, perbaikan terus, inovatif</li>
                <li><b>5. Komitmen:</b> integritas & etika, sinergi, partisipasi membangun</li>
              </ul>
              <p style="margin-top:12px; color:var(--muted); font-size:11px; line-height:1.5">Dokumen kebijakan: STD-SO-SMI-001 — ditetapkan dan diketahui Presiden Direktur.</p>
            </div>
          </div>
          <div class="footnote">Kebijakan ini mencakup 8 komitmen mutu-K3-LH dan 5 nilai perusahaan yang berlaku di seluruh site.</div>
        </div>
      `;
    },
  },

  /* ============================================================
     9 · STRUKTUR ORGANISASI SMI (adaptasi dari PDF p.08)
      ============================================================ */
  {
    type: 'two',
    mod: 'PROFIL',
    title: 'Struktur Organisasi SMI',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Profil & Kebijakan — Adaptasi SMI</div>
          <h2>Struktur <em>Organisasi K3L</em> — PT Sifang Mining Indonesia</h2>
          <p class="lead">Struktur organisasi K3L <b>PT Sifang Mining Indonesia</b> menetapkan garis tanggung jawab dari Presiden Direktur hingga tim HSE.</p>
          <div class="two">
            <div class="panelbox">
              <h3><i></i>Manajemen Puncak</h3>
              <ul>
                <li><b>Presiden Direktur</b> — Penanggung jawab kebijakan K3L dan persetujuan akhir.</li>
                <li><b>Asisten Presiden Direktur</b> — Koordinasi strategis.</li>
                <li><b>Manajer Umum</b> — Pengendali operasional site.</li>
                <li><b>PJO (Penanggung Jawab Operasional)</b> — Otoritas K3 tambang dan pelaporan kepada KTT.</li>
              </ul>
            </div>
            <div class="panelbox warn">
              <h3><i></i>Pengawas & Pelaksana</h3>
              <ul>
                <li><b>Spv Operation / Senior Geologist / Spv MPE / Surveyor</b> — Pengelolaan pit, geoteknik & mine plan</li>
                <li><b>Spv HRGA + Driver LV</b> — SDM, komisioning, transportasi</li>
                <li><b>HSE Team</b> (Manager → Spv HSE) — Pengawasan K3, inspeksi, audit SMKP</li>
              </ul>
            </div>
          </div>
            <div class="panelbox" style="margin-top:16px">
              <h3><i></i>Dokumen Kontrol — STD-SO-SMI-001</h3>
            <ul>
              <li><b>Dokumen:</b> STD-SO-SMI-001 • <b>Departemen:</b> HRGA • <b>Mengetahui:</b> Presiden Direktur</li>
              <li>Setiap perubahan struktur = wajib MOC & sosialisasi ulang (lihat modul SIMOPS & MOC).</li>
            </ul>
          </div>
        </div>
      `;
    },
  },

  /* ============================================================
     10 · LIFE-SAVING RULES
      ============================================================ */
  {
    type: 'rules',
    mod: 'PROFIL',
    title: 'Life-Saving Rules',
    render() {
      const items = [
        { n: 1, t: 'Fit for Work', d: 'Dilarang bekerja di bawah pengaruh alkohol, narkoba, atau obat yang menurunkan kesadaran.' },
        { n: 2, t: 'Seatbelt & Batas Kecepatan', d: 'Selalu pakai seatbelt; patuhi batas kecepatan dan aturan traffic site.' },
        { n: 3, t: 'Komunikasi Radio', d: 'Masuk area operasional wajib lapor & komunikasi positif di channel yang ditetapkan.' },
        { n: 4, t: 'Hormati Exclusion Zone', d: 'Dilarang masuk zona buta alat berat, area blasting, atau area ber-barricade.' },
        { n: 5, t: 'LOTO Sebelum Maintenance', d: 'Isolasi dan kunci seluruh sumber energi sebelum servis/perbaikan.' },
        { n: 6, t: 'Harness di Ketinggian', d: 'Wajib fall protection pada kerja ≥ 1,8 m dengan anchor tersertifikasi.' },
        { n: 7, t: 'Permit Ruang Terbatas', d: 'Dilarang masuk confined space tanpa permit, gas test, dan attendant.' },
        { n: 8, t: 'Jangan Bypass Pengaman', d: 'Dilarang melepas/menonaktifkan guard, interlock, alarm, atau perangkat keselamatan.' },
        { n: 9, t: 'Permit Hot Work', d: 'Pekerjaan panas wajib permit, pembersihan area, dan fire watch.' },
        { n: 10, t: 'Stop Work', d: 'Wajib menghentikan pekerjaan yang tidak aman — tanpa takut sanksi.' },
      ];
      return `
        <div class="inner">
          <div class="kicker">Profil & Kebijakan</div>
          <h2><em>Life-Saving Rules</em> — 100% Wajib Dipahami</h2>
          <p class="lead">Sepuluh aturan penyelamat nyawa. Nilai post-test bagian LSR harus <b style="color:var(--amber)">100%</b> untuk lulus induksi.</p>
          <div class="rules stagger">
            ${items.map(r => `
              <div class="rule">
                <div class="n">${r.n}</div>
                <div><b>${r.t}</b><span>${r.d}</span></div>
              </div>`).join('')}
          </div>
          <div class="footnote">Pelanggaran terhadap Life-Saving Rules dapat berakibat <b>pemutusan hubungan kerja</b> dan, yang lebih penting, <b>kematian</b>.</div>
        </div>
      `;
    },
  },

  /* ============================================================
     11 · GOLDEN RULES & SPDK (dari PDF p.10-11)
      ============================================================ */
  {
    type: 'two',
    mod: 'PROFIL',
    title: 'Golden Rules & Disiplin SPDK',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Profil & Kebijakan — Adaptasi SMI</div>
          <h2><em>Golden Rules</em> & SPDK — Komitmen Disiplin</h2>
          <p class="lead"><b>Surat Pernyataan Disiplin Karyawan (SPDK) / Golden Rules</b> berlaku untuk <b>PT Sifang Mining Indonesia</b>. Pelanggaran dikenai sanksi bertahap.</p>
          <div class="two">
            <div class="panelbox ok">
              <h3><i></i>Komitmen Penerapan K3LH</h3>
              <ul>
                <li>Menandatangani <b>Surat Komitmen</b> keselamatan pertambangan & lingkungan hidup</li>
                <li>Golden Rules = <b>Life-Saving Rules</b> dengan penegakan disiplin yang sama</li>
                <li>Setiap pekerja berhak & wajib menegur pelanggaran Golden Rules</li>
                <li>Komitmen <b>SPDK (Surat Pernyataan Disiplin Karyawan)</b> berlaku untuk seluruh pekerja di site.</li>
              </ul>
            </div>
            <div class="panelbox danger">
              <h3><i></i>Penegakan Disiplin Bertingkat</h3>
              <ul>
                <li><b>Teguran lisan</b> → pelanggaran ringan pertama</li>
                <li><b>SP 1 / SP 2 / SP 3</b> → pelanggaran berulang / sedang</li>
                <li><b>Skorsing & PHK</b> → pelanggaran berat Golden Rules (fit for work, bypass pengaman, dll)</li>
                <li>Setiap sanksi terdokumentasi & ditandatangani pekerja & atasan</li>
              </ul>
            </div>
          </div>
          <div class="footnote">Golden Rules diberlakukan setara dengan Life-Saving Rules di seluruh site.</div>
        </div>
      `;
    },
  },

  /* ============================================================
     12 · STOP WORK AUTHORITY
      ============================================================ */
  {
    type: 'flow',
    mod: 'PROFIL',
    title: 'Stop Work Authority',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Profil & Kebijakan</div>
          <h2><em>Stop Work Authority</em> (SWA)</h2>
          <p class="lead">Setiap orang — dari level terendah hingga manajemen — memiliki <b>hak dan kewajiban</b> menghentikan pekerjaan yang dianggap tidak aman. Perusahaan menjamin <b>tidak ada retaliasi</b> bagi penghentian kerja yang beritikad baik.</p>
          <div class="flow">
            <div class="step step-ico" style="border-color:var(--red-line); background:var(--red-soft); color:var(--red)">${Icons.get('stop', { class: 'ico-svg', size: 16 })}<span>STOP</span></div>
            <div class="arr">➜</div>
            <div class="step step-ico" style="border-color:var(--amber-line); background:var(--amber-soft); color:var(--amber)">${Icons.get('mic', { class: 'ico-svg', size: 16 })}<span>LAPOR</span></div>
            <div class="arr">➜</div>
            <div class="step step-ico" style="border-color:var(--blue-line); background:var(--blue-soft); color:var(--blue)">${Icons.get('tools', { class: 'ico-svg', size: 16 })}<span>PERBAIKI</span></div>
            <div class="arr">➜</div>
            <div class="step step-ico" style="border-color:var(--green-line); background:var(--green-soft); color:var(--green)">${Icons.get('check', { class: 'ico-svg', size: 16 })}<span>LANJUT AMAN</span></div>
          </div>
          <h3 style="margin-top:30px; font-size:14px; color:var(--amber); letter-spacing:.1em; text-transform:uppercase;">Contoh Situasi Wajib SWA:</h3>
          <ul class="checks danger cols" style="margin-top:14px">
            <li>Hujan membuat haul road licin dan traksi hilang.</li>
            <li>Terlihat retakan (<i>tension crack</i>) pada lereng atau highwall.</li>
            <li>Alat berat tanpa alarm mundur / lampu / rem berfungsi.</li>
            <li>Tidak ada permit untuk pekerjaan panas / ruang terbatas / ketinggian.</li>
            <li>APD tidak sesuai atau rusak untuk tugas yang akan dilakukan.</li>
            <li>Rekan kerja menunjukkan tanda kelelahan berat atau tidak fit.</li>
          </ul>
        </div>
      `;
    },
  },

  /* ============================================================
     13 · HAK & KEWAJIBAN (UU 1/1970 Pasal 12 — dari PDF p.14)
      ============================================================ */
  {
    type: 'two',
    mod: 'ATURAN',
    title: 'Hak & Kewajiban (UU No. 1 Tahun 1970)',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Aturan & Perilaku — Hak Hukum</div>
          <h2>Hak & <em>Kewajiban</em> Anda — UU No. 1 Tahun 1970 BAB VIII Pasal 12</h2>
          <div class="two">
            <div class="panelbox ok">
              <h3><i></i>HAK Pekerja</h3>
              <ul>
                <li><b>Meminta pengurus</b> melaksanakan semua syarat K3 yang diwajibkan</li>
                <li><b>Menyatakan keberatan</b> bekerja bila syarat K3 & APD diragukan (kecuali hal khusus yang masih dapat dipertanggungjawabkan pengawas)</li>
                <li>Mengetahui bahaya, risiko, APD, prosedur aman</li>
                <li>Menolak pekerjaan tidak aman yang belum terkendali</li>
                <li>Melapor bahaya/insiden tanpa takut disalahkan — P2K3 / safety committee</li>
                <li>Mendapat pelatihan, induksi, penyegaran & pertolongan medis</li>
              </ul>
            </div>
            <div class="panelbox warn">
              <h3><i></i>KEWAJIBAN Pekerja (Pasal 12)</h3>
              <ul>
                <li><b>Memberikan keterangan benar</b> bila diminta pengawas / ahli K3</li>
                <li><b>Memakai APD yang diwajibkan</b></li>
                <li><b>Mentaati semua syarat K3</b> yang diwajibkan</li>
                <li>Tidak merusak/menonaktifkan perangkat keselamatan</li>
                <li>Menegur rekan tidak aman & melapor bahaya/near miss/tumpahan</li>
                <li>Mengikuti briefing, toolbox meeting, P5M & evaluasi</li>
              </ul>
            </div>
          </div>
          <div class="footnote" style="border-color:var(--green-line)">Sumber: UU No. 1 Tahun 1970 BAB VIII Pasal 12. Berlaku di <b>PT Sifang Mining Indonesia</b>.</div>
        </div>
      `;
    },
  },

  /* ============================================================
     14 · KEWAJIBAN PENGAWAS OPERASIONAL (PDF p.15)
      ============================================================ */
  {
    type: 'checks',
    mod: 'ATURAN',
    title: 'Kewajiban Pengawas Operasional',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Aturan & Perilaku</div>
          <h2>Kewajiban <em>Pengawas Operasional</em></h2>
          <p class="lead">Bertanggung jawab kepada <b>Kepala Teknik Tambang (KTT)</b> untuk keselamatan semua pekerja di bawah pengawasannya. Sumber: Kepmen 1827/MEM/2018 Lampiran I.</p>
          <ul class="checks cols">
            <li><b>Tanggung jawab penuh</b> keselamatan, kesehatan & kesejahteraan semua orang yang ditugaskan kepadanya</li>
            <li><b>Melaksanakan inspeksi, pemeriksaan & pengujian</b> rutin sesuai jadwal SMKP</li>
            <li><b>Membuat & menandatangani laporan</b> pemeriksaan & pengujian untuk KTT</li>
            <li>Menghentikan pekerjaan tidak aman & melaporkan ke PJO/KTT</li>
            <li>Memastikan setiap pekerja memahami JSA, SOP, IK & APD sebelum kerja</li>
            <li>Menjadi teladan: tidak memerintahkan pelanggaran demi target produksi</li>
          </ul>
        </div>
      `;
    },
  },

  /* ============================================================
     11 · ATURAN SITE
     ============================================================ */
  {
    type: 'checks',
    mod: 'ATURAN',
    title: 'Aturan Site & Perilaku',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Aturan & Perilaku</div>
          <h2>Aturan Site dan <em>Perilaku Wajib</em></h2>
          <p class="lead">Sepuluh aturan ini melindungi nyawa, lingkungan, dan keberlangsungan kerja Anda. Pelanggaran bukan sekadar teguran — berjenjang hingga pemutusan hubungan kerja dan proses hukum.</p>
          <ul class="checks cols">
            <li><b>Lencana identitas (<i>ID badge</i>)</b> wajib dipakai dan terlihat; ikuti aturan akses dan pendampingan (<i>escort</i>). Tanpa lencana valid, Anda dianggap tamu tanpa izin.</li>
            <li><b>Narkoba dan alkohol</b> dilarang total; tes acak diberlakukan. Bekerja di bawah pengaruhnya termasuk pelanggaran <i>Life-Saving Rules</i>.</li>
            <li><b>Merokok dan vape</b> hanya di area merokok khusus yang bertanda. Dekat BBM, B3, dan area mudah terbakar dilarang mutlak.</li>
            <li><b>Ponsel</b> dilarang saat mengemudi, berjalan di area alat berat, atau melakukan pekerjaan kritis. Satu detik lengah dapat berarti tertabrak unit 100 ton.</li>
            <li><b>Foto, video, dan drone</b> hanya dengan izin tertulis. Dokumentasi area kritis (pit aktif, plant, jetty, TSF) tanpa izin dapat membahayakan operasi.</li>
            <li><b>Kekerasan, pelecehan, perundungan (<i>bullying</i>), dan diskriminasi</b> merupakan pelanggaran berat. Hormati setiap orang tanpa kecuali.</li>
            <li><b>Pencurian</b> bijih, BBM, dan aset serta aktivitas ilegal berakibat pemecatan dan proses hukum. Termasuk mengambil sampel tanpa izin.</li>
            <li><b>Kerapian area (<i>housekeeping</i>):</b> jaga area kerja tetap rapi dan bebas tumpahan. Tumpahan kecil yang dibiarkan menjadi selip, kebakaran, atau pencemaran.</li>
            <li><b>Suap, gratifikasi,</b> dan laporan palsu dilarang keras. Menawarkan atau menerima imbalan untuk meloloskan pelanggaran akan diproses hukum.</li>
            <li><b>Hormati masyarakat lokal,</b> situs budaya, dan aturan komunitas. Temuan situs budaya berarti hentikan kerja dan melapor — bukan memindahkan temuan.</li>
          </ul>
          <div class="footnote">Contoh nyata: ponsel saat melintas di <i>haul road</i> membuat pejalan kaki tidak mendengar klakson mundur 3× — nyaris tertabrak <i>dump truck</i>. Aturan site ditulis dari pelajaran insiden, bukan untuk mempersulit.</div>
        </div>
      `;
    },
  },

  /* ============================================================
     15 · PETA AREA + JETTY (PDF p.12-13)
      ============================================================ */
  {
    type: 'cards',
    mod: 'ATURAN',
    title: 'Peta & Area Site',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Aturan & Perilaku</div>
          <h2>Kenali <em>Area Site</em> — SMI Nikel Open Pit</h2>
          <p class="lead">Peta site terkini (scale 1:40 m UTI, Jetty CDS Slot) dibagikan saat induksi lapangan.</p>
          <div class="cards stagger">
            <article class="card r"><div class="ico">${Icons.get('mountain', { class: 'ico-svg' })}</div><h3>Pit & Disposal</h3><p>Area berisiko tinggi: alat berat, lereng, sump. Akses hanya dengan izin & komunikasi radio. Waspadai geoteknik laterit.</p></article>
            <article class="card"><div class="ico">${Icons.get('truck', { class: 'ico-svg' })}</div><h3>Haul Road</h3><p>Jalur alat berat & LV. Patuhi right of way 8 level, batas kecepatan, & jarak 50 m / 3 detik.</p></article>
            <article class="card t"><div class="ico">${Icons.get('tools', { class: 'ico-svg' })}</div><h3>Workshop & Warehouse</h3><p>Bahaya mekanik, listrik, lifting, bahan kimia. APD spesifik & isolasi LOTO wajib.</p></article>
            <article class="card"><div class="ico">${Icons.get('flammable', { class: 'ico-svg' })}</div><h3>Fuel Farm & Gudang B3</h3><p>Area mudah terbakar: larangan api/HP, grounding, spill kit, bunding.</p></article>
            <article class="card b"><div class="ico">${Icons.get('factory', { class: 'ico-svg' })}</div><h3>Plant / Stockpile / Jetty</h3><p>Crusher, conveyor, smelter/HPAL, TSF, pengapalan CDS. <b>Jetty:</b> life jacket, likuefaksi Grup A (IMSBC).</p></article>
            <article class="card g"><div class="ico">${Icons.get('shield', { class: 'ico-svg' })}</div><h3>Klinik, Camp & Muster Point</h3><p>Ketahui lokasi klinik, titik kumpul, APAR, eyewash, & jalur evakuasi area Anda. Jangan hapal dari memori — cek papan info.</p></article>
          </div>
          <div class="footnote">Peta site terkini dibagikan saat induksi lapangan. Hari pertama wajib induksi area spesifik.</div>
        </div>
      `;
    },
  },

  /* ============================================================
     16 · PERSYARATAN MASUK AREA TAMBANG (PDF p.16)
      ============================================================ */
  {
    type: 'two',
    mod: 'ATURAN',
    title: 'Persyaratan Masuk Area Tambang',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Aturan & Perilaku</div>
          <h2><em>Persyaratan Masuk</em> Area Tambang</h2>
          <div class="two">
            <div class="panelbox">
              <h3><i></i>Karyawan</h3>
              <ul>
                <li><b>Mengikuti induksi HSE</b> umum & area spesifik</li>
                <li><b>Memiliki Mine Permit</b> (izin tetap area)</li>
                <li><b>Lulus uji kelayakan</b> & mendapatkan stiker komisioning kendaraan/unit</li>
                <li><b>Menggunakan APD wajib</b> yang ditetapkan</li>
                <li><b>Fit untuk bekerja</b> — sehat, tidak di bawah pengaruh alkohol/obat</li>
              </ul>
            </div>
            <div class="panelbox warn">
              <h3><i></i>Tamu / Visitor & Kendaraan</h3>
              <ul>
                <li><b>Tamu/Visitor:</b> induksi HSE Visitor + Mine Permit Visitor + APD wajib + stiker</li>
                <li><b>Jika mengemudi:</b> wajib <b>KIMPER</b> yang valid</li>
                <li><b>Kendaraan/Unit:</b> uji kelayakan, stiker, APD unit (APAR, P3K, cone, wheel chock, buggy whip)</li>
                <li><b>Dalam keadaan sehat</b> & patuhi aturan perjalanan</li>
              </ul>
            </div>
          </div>
          <div class="footnote">Tanpa induksi = tanpa akses.</div>
        </div>
      `;
    },
  },

  /* ============================================================
     17 · SIMPER / MINE PERMIT & ISOLATION (PDF p.17)
      ============================================================ */
  {
    type: 'checks',
    mod: 'ATURAN',
    title: 'SIMPER / Mine Permit & Aturan Unit',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Aturan & Perilaku — Akses Unit</div>
          <h2><em>SIMPER</em> & Mine Permit</h2>
          <ul class="checks cols">
            <li><b>Hanya dengan SIMPER/KIMPER & Mine Permit valid</b> boleh mengemudi/mengoperasikan unit</li>
            <li><b>Sabuk pengaman:</b> pengemudi & semua penumpang wajib pakai — tanpa pengecualian</li>
            <li><b>Dilarang HP</b> saat mengemudi/mengoperasikan unit; <b>dilarang merokok</b> di dalam unit</li>
            <li><b>Dilarang menumpang di belakang</b> truk terbuka / bak / attachment</li>
            <li><b>Ikuti aturan lalu lintas & keselamatan setiap saat</b> — termasuk hirarki prioritas kendaraan</li>
            <li>Sertakan <b>stiker komisioning valid</b> di kaca/unit</li>
          </ul>
          <div class="footnote">SIMPER = Surat Izin Mengemudi Perusahaan.</div>
        </div>
      `;
    },
  },

  /* ============================================================
     18 · PERAN PENGEMUDI/OPERATOR (PDF p.18)
      ============================================================ */
  {
    type: 'cards',
    mod: 'ATURAN',
    title: 'Peran & Tanggung Jawab Pengemudi',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Aturan & Perilaku</div>
          <h2>Peran <em>Pengemudi / Operator</em></h2>
          <div class="cards stagger">
                        <article class="card r"><div class="ico">${Icons.get('search', { class: 'ico-svg' })}</div><h3>Lapor 
Bahaya</h3><p>Aktif <b>mengidentifikasi bahaya</b>, mengendalikan, & melapor ke atasan/SHE.</p></article>
            <article class="card"><div class="ico">${Icons.get('shield', { class: 'ico-svg' })}</div><h3>Cek Stiker & P2H</h3><p>Pastikan <b>P2H</b> & cek masa berlaku <b>komisioning</b> sebelum unit dioperasikan.</p></article>
            <article class="card b"><div class="ico">${Icons.get('hand', { class: 'ico-svg' })}</div><h3>Patuh Aturan</h3><p>Mematuhi semua <b>peraturan lalu lintas</b> berlaku di PT SMI.</p></article>
            <article class="card t"><div class="ico">${Icons.get('cert', { class: 'ico-svg' })}</div><h3>Accident Report</h3><p><b>Laporkan segera kecelakaan</b> di jalan — jangan menunda.</p></article>
            <article class="card g"><div class="ico">${Icons.get('refresh', { class: 'ico-svg' })}</div><h3>Fit To Work</h3><p>Pastikan <b>kondisi tubuh fit</b> sebelum bekerja.</p></article>
            <article class="card"><div class="ico">${Icons.get('doc', { class: 'ico-svg' })}</div><h3>Jaga Komisioning</h3><p>Menjaga hasil <b>komisioning unit</b> & melapor masa berlakunya.</p></article>
          </div>
        </div>
      `;
    },
  },

  /* ============================================================
     19 · PERLENGKAPAN K3 UNIT (PDF p.19)
      ============================================================ */
  {
    type: 'cards',
    mod: 'ATURAN',
    title: 'Perlengkapan K3 di Unit',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Aturan & Perilaku — Unit Safety</div>
          <h2>Perlengkapan <em>K3 Wajib</em> di Unit</h2>
          <div class="cards stagger">
            <article class="card r"><div class="ico">${Icons.get('siren', { class: 'ico-svg' })}</div><h3>Kotak P3K & Isi</h3><p>Minimal <b>1 kotak P3K</b> sesuai standar per unit bergerak.</p></article>
            <article class="card"><div class="ico">${Icons.get('stop', { class: 'ico-svg' })}</div><h3>Safety Cone</h3><p>Minimal <b>2 pcs</b> per unit bergerak.</p></article>
            <article class="card b"><div class="ico">${Icons.get('fire', { class: 'ico-svg' })}</div><h3>APAR 6 kg ABC</h3><p>Wajib tersedia <b>APAR 6 kg type ABC</b> pada setiap unit bergerak. <b>CATNO & Buggy Whip:</b> LV wajib buggy whip 4 m, DT hauling TOP 1 m.</p></article>
            <article class="card t"><div class="ico">${Icons.get('tools', { class: 'ico-svg' })}</div><h3>Wheel Chock</h3><p>Wajib bagi unit beroda — cegah gerak liar saat parkir di lereng.</p></article>
          </div>
          <div class="footnote">Setiap unit bergerak wajib dilengkapi kotak P3K, 2 <i>safety cone</i>, APAR 6 kg ABC, ganjal roda, dan <i>buggy whip</i> sesuai ketentuan.</div>
        </div>
      `;
    },
  },

  /* ============================================================
     13 · RAMBU & ALARM
     ============================================================ */
  {
    type: 'cards',
    mod: 'ATURAN',
    title: 'Rambu, Warna & Alarm',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Aturan & Perilaku</div>
          <h2>Rambu, Warna & <em>Alarm</em></h2>
          <div class="cards stagger">
            <article class="card r" style="border-color:var(--red-line)">${Icons.get('stop', { class: 'ico-svg', stroke: 'var(--red)' })}<h3 style="color:var(--red)">Merah</h3><p>Larangan, bahaya, berhenti; peralatan pemadam kebakaran (APAR, hydrant).</p></article>
            <article class="card" style="border-color:var(--amber-line)">${Icons.get('warn', { class: 'ico-svg', stroke: 'var(--amber)' })}<h3 style="color:var(--amber)">Kuning</h3><p>Peringatan: hati-hati, area berisiko, batas kecepatan, alat berat beroperasi.</p></article>
            <article class="card b" style="border-color:var(--blue-line)">${Icons.get('info', { class: 'ico-svg', stroke: 'var(--blue)' })}<h3 style="color:var(--blue)">Biru</h3><p>Perintah/kewajiban: wajib helm, wajib kacamata, wajib lapor, jalur pejalan kaki.</p></article>
            <article class="card g" style="border-color:var(--green-line)">${Icons.get('check', { class: 'ico-svg', stroke: 'var(--green)' })}<h3 style="color:var(--green)">Hijau</h3><p>Kondisi aman: jalur evakuasi, muster point, P3K, pintu darurat.</p></article>
          </div>
          <div class="panelbox warn" style="margin-top:16px">
            <h3><i></i>Kode Sirene & Alarm Site</h3>
            <ul>
              <li><b>Sirene panjang berulang (3× panjang):</b> DARURAT — hentikan kerja, amankan diri, menuju muster point.</li>
              <li><b>Sirene putus-putus pendek:</b> SIAGA — bersiap, dengarkan instruksi radio/PA system.</li>
              <li><b>Satu bunyi panjang:</b> ALL CLEAR — situasi terkendali, kembali dengan instruksi supervisor.</li>
              <li><b>Sirene peledakan (jika ada):</b> 3× pendek = persiapan; panjang = ledakan; 1 panjang akhir = aman.</li>
            </ul>
          </div>
          <div class="footnote">Barricade, safety line, dan tag bahaya = larangan melintas. Dilarang memindahkan pengaman apa pun tanpa otorisasi.</div>
        </div>
      `;
    },
  },

  /* ============================================================
     14 · KOMUNIKASI RADIO
     ============================================================ */
  {
    type: 'two',
    mod: 'ATURAN',
    title: 'Komunikasi & Radio',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Aturan & Perilaku</div>
          <h2>Komunikasi & <em>Radio Site</em></h2>
          <div class="two">
            <div class="panelbox">
              <h3><i></i>Etika Radio & Positive Communication</h3>
              <ul>
                <li>Gunakan <b>channel sesuai peruntukan</b> (Operasi / Maintenance / Darurat-ERT).</li>
                <li>Sebut <b>callsign & posisi</b> sebelum berbicara; pastikan pesan dijawab (closed loop).</li>
                <li>Konfirmasi setiap instruksi kritis: "diterima, diulang…"</li>
                <li>Dilarang bercanda/memenuhi channel; utamakan panggilan darurat.</li>
                <li>Area blank spot = wajib prosedur khusus / tidak masuk tanpa izin.</li>
              </ul>
            </div>
            <div class="panelbox danger">
              <h3><i></i>Format Laporan Darurat (5 Poin)</h3>
              <ul>
                <li><b>LOKASI</b> — sebut area / patokan yang jelas.</li>
                <li><b>KEJADIAN</b> — jenis insiden (kebakaran, longsor, korban…).</li>
                <li><b>KORBAN</b> — jumlah & kondisi.</li>
                <li><b>TINDAKAN</b> yang sudah dilakukan.</li>
                <li><b>NAMA</b> pelapor & callsign.</li>
              </ul>
            </div>
          </div>
        </div>
      `;
    },
  },

  /* ============================================================
     15 · MANAJEMEN RISIKO
     ============================================================ */
  {
    type: 'cards',
    mod: 'RISIKO',
    title: 'Manajemen Risiko',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Manajemen Risiko</div>
          <h2>Manajemen <em>Risiko</em> di Lapangan</h2>
          <div class="cards stagger">
            <article class="card"><div class="ico">${Icons.get('compass', { class: 'ico-svg' })}</div><h3>HIRADC / IBPR</h3><p><b>Identifikasi Bahaya & Penilaian Risiko</b> — alat kolaboratif, bukan milik manajer. Setiap pekerja berhak & diharapkan berpartisipasi, terutama tugas non-rutin/risiko tinggi. Pelajari IBPR area Anda.</p></article>
            <article class="card b"><div class="ico">${Icons.get('clipboard', { class: 'ico-svg' })}</div><h3>JSA + Aspek Lingkungan</h3><p>Pecah tugas → bahaya tiap langkah → nilai risiko → kontrol. Setiap tugas dinilai ganda: <b>potensi cedera + potensi dampak lingkungan</b> (tumpahan, debu, bising fauna). Dibaca & ditandatangani kru.</p></article>
            <article class="card t"><div class="ico">${Icons.get('hand', { class: 'ico-svg' })}</div><h3>Take 5 / SLAM</h3><p><b>S</b>top, <b>L</b>ihat, <b>A</b>nalisis, <b>M</b>anage: penilaian risiko dinamis 5 menit sebelum setiap tugas.</p></article>
            <article class="card g"><div class="ico">${Icons.get('mic', { class: 'ico-svg' })}</div><h3>Toolbox Meeting</h3><p>Briefing awal shift: tugas, cuaca, perubahan area, kesiapan orang & alat.</p></article>
          </div>
          <div class="panelbox" style="margin-top:16px">
            <h3><i></i>Hierarki Pengendalian Risiko (urutan wajib)</h3>
            <ul>
              <li><b>1. Eliminasi</b> → hapus bahaya. <b>2. Substitusi</b> → ganti dengan yang lebih aman.</li>
              <li><b>3. Rekayasa teknik</b> → guard, ventilasi, barricade, sensor.</li>
              <li><b>4. Administratif</b> → SOP, permit, rambu, pelatihan, rotasi.</li>
              <li><b>5. APD</b> → pertahanan TERAKHIR, bukan yang pertama.</li>
            </ul>
          </div>
        </div>
      `;
    },
  },

  /* ============================================================
     16 · RISK MATRIX (Interactive)
     ============================================================ */
  {
    type: 'riskMatrix',
    mod: 'RISIKO',
    title: 'Matriks Risiko (5×5)',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Manajemen Risiko</div>
          <h2>Matriks <em>Risiko 5×5</em> (Interaktif)</h2>
          <p class="lead">Klik sel untuk melihat contoh bahaya pada kombinasi tingkat kemungkinan (L) dan keparahan (K) tersebut.</p>
          <div class="risk-matrix" id="riskMatrix">
            <div class="rm-axis-x">
              <span></span>
              <span>Rendah</span><span>Sedang</span><span>Tinggi</span><span>Sangat Tinggi</span><span>Ekstrem</span>
            </div>
            ${[
              { k: 'Sangat Tinggi', cells: ['l5','l5','l4','l3','l2'] },
              { k: 'Tinggi',        cells: ['l5','l4','l3','l2','l1'] },
              { k: 'Sedang',        cells: ['l4','l3','l2','l1','l1'] },
              { k: 'Rendah',        cells: ['l3','l2','l1','l1','l1'] },
              { k: 'Jarang',        cells: ['l2','l1','l1','l1','l1'] },
            ].map(row => `
              <div class="rm-row">
                <span class="rm-label-y">${row.k}</span>
                ${row.cells.map(c => `<div class="rm-cell ${c}" data-level="${c}">${c === 'l5' ? 'STOP' : c === 'l4' ? 'TINGGI' : c === 'l3' ? 'SEDANG' : c === 'l2' ? 'RENDAH' : 'R'}</div>`).join('')}
              </div>`).join('')}
            <div class="rm-axis-x">
              <span style="font-size:10px;color:var(--muted);text-align:right;padding-right:8px">→ Kemungkinan (L)</span>
              <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span>
            </div>
          </div>
          <div class="footnote" style="margin-top:14px"><b>Cara pakai:</b> Tentukan nilai <b>Kemungkinan</b> dan <b>Keparahan</b>, lalu lihat level di perpotongannya. Level L4/L5 = pekerjaan tidak boleh dimulai tanpa pengendalian tambahan.</div>
        </div>
      `;
    },
    afterRender() { Quiz.bindRiskMatrix(); },
  },

  /* ============================================================
     17 · IZIN KERJA
     ============================================================ */
  {
    type: 'checks',
    mod: 'RISIKO',
    title: 'Izin Kerja (PTW)',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Manajemen Risiko</div>
          <h2>Izin Kerja <em>(Permit to Work)</em></h2>
          <p class="lead">Izin kerja adalah pemeriksaan terakhir sebelum pekerjaan berbahaya dimulai. Izin memastikan bahaya telah dinilai, pengendali terpasang, dan semua pihak memahami perannya.</p>
          <ul class="checks cols">
            <li><b>Pekerjaan panas (<i>hot work</i>)</b> — pengelasan, pemotongan, dan gerinda yang menimbulkan percikan api. Wajib ada APAR dan penjaga api (<i>fire watch</i>).</li>
            <li><b>Masuk ruang terbatas</b> — tangki, <i>hopper</i>, <i>sump</i>, bejana, dan pipa besar. Wajib ada uji gas, ventilasi, dan penjaga di luar.</li>
            <li><b>Bekerja di ketinggian</b> — kerja ≥ 1,8 m tanpa pengaman permanen. Wajib ada tali pengaman ganda dan rencana penyelamatan.</li>
            <li><b>Penggalian dan parit</b> — galian dengan risiko utilitas bawah tanah dan longsoran dinding. Wajib ada deteksi utilitas dan penahan dinding.</li>
            <li><b>Pengangkatan kritis</b> — beban besar, angkat tandem, dan area kritis. Wajib ada rencana pengangkatan (<i>lifting plan</i>) dan juru isyarat.</li>
            <li><b>Pekerjaan listrik dan isolasi (LOTO)</b> — kerja listrik dan isolasi energi. Wajib ada verifikasi tegangan nol dan kunci pribadi.</li>
          </ul>
          <div class="panelbox warn" style="margin-top:16px">
            <h3><i></i>Masa Berlaku, Perpanjangan, dan Penutupan</h3>
            <ul>
              <li>Izin berlaku <b>satu shift atau satu lokasi</b> saja; perpanjang dengan verifikasi ulang bila pekerjaan berlanjut.</li>
              <li>Izin <b>gugur otomatis</b> bila kondisi berubah (hujan deras, alarm, bau gas), ganti shift tanpa serah terima, atau pekerjaan terhenti lama.</li>
              <li>Tutup izin setelah selesai: area dibersihkan, peralatan dikembalikan, dan serah terima kepada pemilik area.</li>
            </ul>
          </div>
          <div class="footnote">Prinsip emas: <b>tidak ada pekerjaan berisiko tanpa izin yang valid.</b> Contoh: mengelas braket di workshop tanpa izin panas — percikan menyambar tumpahan oli yang tidak terlihat — kebakaran bengkel. Izin memaksa pemeriksaan area terlebih dahulu.</div>
        </div>
      `;
    },
  },

  /* ============================================================
     18 · SIMOPS & MOC
     ============================================================ */
  {
    type: 'two',
    mod: 'RISIKO',
    title: 'SIMOPS & MOC',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Manajemen Risiko</div>
          <h2>SIMOPS & <em>Management of Change</em></h2>
          <div class="two">
            <div class="panelbox">
              <h3><i></i>SIMOPS — Operasi Simultan</h3>
              <ul>
                <li>Beberapa pekerjaan di satu area = risiko saling membahayakan (crane + hot work + traffic).</li>
                <li><b>Wajib koordinasi antar-penanggung jawab</b>, pembagian zona, dan komunikasi bersama.</li>
                <li>Tetapkan urutan kerja dan batas zona eksklusi yang disepakati.</li>
                <li>Hentikan SIMOPS bila komunikasi terputus atau kondisi berubah.</li>
              </ul>
            </div>
            <div class="panelbox warn">
              <h3><i></i>MOC — Management of Change</h3>
              <ul>
                <li>Setiap <b>perubahan</b> (alat, metode, bahan, desain, personel kunci, kondisi darurat) wajib dinilai risikonya <b>sebelum</b> diterapkan.</li>
                <li>Dilarang improvisasi prosedur di lapangan tanpa otorisasi.</li>
                <li>Perubahan sementara tetap wajib MOC dan batas waktu jelas.</li>
                <li>Dokumen, JSA, dan pelatihan diperbarui mengikuti perubahan.</li>
              </ul>
            </div>
          </div>
        </div>
      `;
    },
  },

  /* ============================================================
     19 · APD WAJIB
     ============================================================ */
  {
    type: 'cards',
    mod: 'APD',
    title: 'APD Wajib',
    render() {
      return `
        <div class="inner">
          <div class="kicker">APD & Kesehatan</div>
          <h2>APD <em>Wajib</em> di Seluruh Area Site</h2>
          <p class="lead">Lima APD dasar ini wajib dipakai sebelum memasuki area operasional. Periksa kelayakan setiap hari: retak, aus, kedaluwarsa, atau kontaminasi berarti diganti — bukan diperbaiki sendiri.</p>
          <div class="cards stagger">
            <article class="card"><div class="ico is3d anim-float">${Icons.get3d('helmet', { class: 'ico3d-svg', size: 38 })}</div><h3>Helm Keselamatan</h3><p>Standar SNI, ANSI, atau EN; tali dagu (<i>chinstrap</i>) terpasang bila bekerja di ketinggian atau area berangin. <b>Ganti setelah benturan</b>, walau terlihat utuh — struktur dalam sudah rusak. Masa pakai umumnya 3–5 tahun.</p></article>
            <article class="card b"><div class="ico is3d anim-float anim-d1">${Icons.get3d('glasses', { class: 'ico3d-svg', size: 38 })}</div><h3>Kacamata Keselamatan</h3><p>Wajib di seluruh area operasional; pelindung samping (<i>side shield</i>) untuk percikan dari arah samping. Pilih lensa sesuai tugas: bening untuk umum, gelap untuk area terang, dan kedap debu untuk area berdebu.</p></article>
            <article class="card t"><div class="ico is3d anim-float anim-d2">${Icons.get3d('boots', { class: 'ico3d-svg', size: 38 })}</div><h3>Sepatu Keselamatan</h3><p>Pelindung jari baja atau komposit, sol antitergelincir dan tahan tusukan. Wajib di area operasional; pastikan ukuran pas — sepatu longgar menyebabkan tersandung di <i>haul road</i> tidak rata.</p></article>
            <article class="card g"><div class="ico is3d anim-float anim-d1">${Icons.get3d('vest', { class: 'ico3d-svg', size: 38 })}</div><h3>Pakaian Keterlihatan Tinggi</h3><p>Rompi atau pakaian reflektif agar terlihat operator alat berat, siang dan malam. Ganti bila reflektor pudar atau terkontaminasi oli — rompi kusam sama dengan tidak memakai rompi.</p></article>
            <article class="card"><div class="ico is3d anim-float anim-d2">${Icons.get3d('glove', { class: 'ico3d-svg', size: 38 })}</div><h3>Sarung Tangan</h3><p>Sesuai tugas: tahan sayatan untuk material tajam, tahan kimia (nitril/butil) untuk B3, antivibrasi untuk alat genggam, atau umum untuk material biasa. Periksa robekan sebelum dipakai.</p></article>
          </div>
          <div class="footnote">APD adalah pertahanan terakhir dalam hierarki pengendalian. Jika APD saja tidak cukup mengendalikan risiko, pekerjaan tidak boleh dimulai — minta pengendalian rekayasa atau administratif tambahan.</div>
        </div>
      `;
    },
  },

  /* ============================================================
     20 · APD INTERACTIVE SELECTOR
     ============================================================ */
  {
    type: 'apdSelector',
    mod: 'APD',
    title: 'Pemilihan APD (Interaktif)',
    render() {
      const tasks = [
        { id: 'las', name: 'Pengelasan (Welding)', items: ['helmet','glass','glove','boot','vest','leather-apron'] },
        { id: 'chem', name: 'Penanganan Asam Sulfat', items: ['helmet','glass','chem-suit','chem-glove','chem-boot','vest'] },
        { id: 'h', name: 'Kerja di Ketinggian', items: ['helmet','glass','harness','boot','vest'] },
        { id: 'noise', name: 'Area Bising (Plant)', items: ['helmet','glass','earp','boot','vest'] },
        { id: 'dust', name: 'Area Berdebu', items: ['helmet','glass','mask','boot','vest'] },
        { id: 'weld-grind', name: 'Grinding / Cutting', items: ['helmet','face-shield','glass','glove','boot','vest'] },
        { id: 'elec', name: 'Pekerjaan Listrik', items: ['helmet','glass','elec-glove','boot','arc-suit'] },
        { id: 'water', name: 'Di Atas Air (Jetty)', items: ['helmet','glass','vest','boot','life-jacket'] },
      ];

      const apdLib = {
        'helmet':     { name: 'Helm Safety', sub: 'SNI/ANSI, chinstrap' },
        'glass':      { name: 'Kacamata Safety', sub: 'Side shield' },
        'glove':      { name: 'Sarung Tangan Umum', sub: 'Cut-resistant' },
        'boot':       { name: 'Safety Boots', sub: 'Steel toe + anti-slip' },
        'vest':       { name: 'High-Vis Vest', sub: 'Reflektif' },
        'leather-apron': { name: 'Apron Kulit', sub: 'Tahan percikan api' },
        'chem-suit':  { name: 'Chemical Suit', sub: 'Tahan asam' },
        'chem-glove': { name: 'Sarung Tangan Kimia', sub: 'Nitrile/butyl' },
        'chem-boot':  { name: 'Boots Tahan Kimia', sub: 'PVC/rubber' },
        'harness':    { name: 'Full Body Harness', sub: 'Double lanyard' },
        'earp':       { name: 'Earplug/Earmuff', sub: '≥85 dBA' },
        'mask':       { name: 'Respirator', sub: 'Fit-tested' },
        'face-shield':{ name: 'Face Shield', sub: 'Full face' },
        'elec-glove': { name: 'Sarung Tangan Isolasi', sub: 'Class sesuai tegangan' },
        'arc-suit':   { name: 'Arc Flash Suit', sub: 'CAT 2+' },
        'life-jacket':{ name: 'Life Jacket', sub: 'Auto-inflate' },
      };

      return `
        <div class="inner">
          <div class="kicker">APD & Kesehatan</div>
          <h2>Pemilihan <em>APD</em> — Alat Bantu Interaktif</h2>
          <p class="lead">Pilih tugas, lalu cek APD yang dibutuhkan. Sistem akan memberi tahu bila APD Anda belum lengkap.</p>
          <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(160px,1fr)); gap:8px; margin-top:14px" id="apdTaskBtns">
            ${tasks.map(t => `<button class="iconbtn apd-task" data-task="${t.id}" style="width:auto; padding:10px 14px; font-size:12px; height:auto; letter-spacing:.04em;">${t.name}</button>`).join('')}
          </div>
          <div id="apdList" class="apd-selector" style="margin-top:18px"></div>
          <div id="apdResult"></div>
        </div>
      `;
    },
    afterRender() { Quiz.bindAPDSelector(); },
  },

  /* ============================================================
     21 · APD SPESIFIK
     ============================================================ */
  {
    type: 'two',
    mod: 'APD',
    title: 'APD Spesifik & Pengelolaan',
    render() {
      return `
        <div class="inner">
          <div class="kicker">APD & Kesehatan</div>
          <h2>APD <em>Spesifik Tugas</em> & Pengelolaan</h2>
          <div class="two">
            <div class="panelbox">
              <h3><i></i>APD Sesuai Tugas</h3>
              <ul>
                <li><b>Earplug/earmuff</b> — area bising ≥ 85 dBA (plant, workshop, dekat HE).</li>
                <li><b>Respirator</b> — area berdebu/uap; wajib fit test; ganti filter berkala.</li>
                <li><b>Full body harness</b> — kerja ketinggian; inspeksi sebelum pakai.</li>
                <li><b>Face shield</b> — grinding, chemical handling, area percikan.</li>
                <li><b>Chemical suit/apron/boots</b> — penanganan asam & B3.</li>
                <li><b>APD tahan panas</b> — area smelter/molten (jika ada).</li>
                <li><b>Life jacket</b> — jetty, barge, kerja di atas air.</li>
              </ul>
            </div>
            <div class="panelbox warn">
              <h3><i></i>Pengelolaan APD</h3>
              <ul>
                <li>Inspeksi sebelum pakai: retak, aus, kedaluwarsa, kontaminasi.</li>
                <li>Bersihkan & simpan benar; APD terkontaminasi B3 dikelola khusus.</li>
                <li>APD rusak = tag & ganti; dilarang memakai APD tidak layak.</li>
                <li>Tidak memakai APD wajib = pelanggaran & sanksi disiplin.</li>
              </ul>
            </div>
          </div>
        </div>
      `;
    },
  },

  /* ============================================================
     22 · FIT TO WORK
     ============================================================ */
  {
    type: 'two',
    mod: 'KESEHATAN',
    title: 'Fit to Work & Fatigue',
    render() {
      return `
        <div class="inner">
          <div class="kicker">APD & Kesehatan</div>
          <h2><em>Fit to Work</em> & Manajemen Kelelahan</h2>
          <div class="two">
            <div class="panelbox ok">
              <h3><i></i>Syarat Fit to Work Harian</h3>
              <ul>
                <li>Sehat, sadar penuh, tidak demam/nyeri berat.</li>
                <li>Tidak terpengaruh alkohol/narkoba/obat kantuk (laporkan obat yang dikonsumsi).</li>
                <li>Tidur cukup sebelum shift; tidak kelelahan ekstrem.</li>
                <li>MCU awal & berkala sesuai risiko pekerjaan.</li>
                <li>Lapor supervisor/klinik bila merasa TIDAK FIT — tanpa sanksi.</li>
              </ul>
            </div>
            <div class="panelbox danger">
              <h3><i></i>Waspadai Fatigue & Microsleep</h3>
              <ul>
                <li>Tanda: menguap terus, mata berat, sulit fokus, reaksi lambat, hampir tertidur.</li>
                <li>Pengendalian: istirahat cukup, hidrasi, rotasi tugas, istirahat terjadwal, batas jam kerja.</li>
                <li>Operator HE: wajib lapor dispatcher bila mengantuk — berhenti di tempat aman.</li>
                <li>Rekan kerja wajib saling memantau melalui sistem pendamping (<i>buddy system</i>).</li>
              </ul>
            </div>
          </div>
        </div>
      `;
    },
  },

  /* ============================================================
     23 · BAHAYA KESEHATAN NIKEL
     ============================================================ */
  {
    type: 'cards',
    mod: 'KESEHATAN',
    title: 'Bahaya Kesehatan Nikel',
    render() {
      return `
        <div class="inner">
          <div class="kicker">APD & Kesehatan</div>
          <h2>Bahaya <em>Kesehatan</em> Khas Nikel</h2>
          ${Illustrations.kesehatan()}
          <div class="cards stagger">
            <article class="card"><div class="ico">${Icons.get('mask', { class: 'ico-svg' })}</div><h3>Debu Logam & Silika</h3><p>Debu <b>Ni, Co, Cr + silika respirabel</b> dari galian/hauling/stockpile/crushing dapat <b>melebihi NAB</b> (OSHA/MSHA memperketat PEL silika). Risiko: silikosis fatal, PPOK, sensitisasi. Kendali: <b>water spraying + dust collector/ventilasi</b> dulu, lalu <b>respirator N95/P100 fit-tested</b> — cek kebocoran & rawat benar.</p></article>
            <article class="card b"><div class="ico">${Icons.get('earp', { class: 'ico-svg' })}</div><h3>Kebisingan</h3><p>Alat berat, crusher, genset, furnace. Area ≥ 85 dBA = wajib pelindung telinga + program konservasi pendengaran (audiometri berkala).</p></article>
            <article class="card t"><div class="ico">${Icons.get('refresh', { class: 'ico-svg' })}</div><h3>Getaran</h3><p>Whole-body vibration (operator HE) & hand-arm (alat genggam). Kendali: rotasi, perawatan unit, kursi suspensi, istirahat.</p></article>
            <article class="card r"><div class="ico">${Icons.get('fire', { class: 'ico-svg' })}</div><h3>Heat Stress</h3><p>Iklim tropis + area panas (smelter). Kenali heat cramps → heat exhaustion → <b>heat stroke (darurat medis)</b>. Hidrasi elektrolit, work-rest cycle, area teduh.</p></article>
            <article class="card"><div class="ico">${Icons.get('dropper', { class: 'ico-svg' })}</div><h3>Dermatitis Nikel</h3><p><i>"Nickel itch"</i> — alergi kulit akibat kontak debu/lumpur nikel. Kendali: sarung tangan, pakaian kerja tertutup, mandi & ganti baju sebelum ke camp, pisahkan cucian pakaian kerja.</p></article>
            <article class="card g"><div class="ico">${Icons.get('info', { class: 'ico-svg' })}</div><h3>Biologis & Ergonomi</h3><p>Nyamuk (malaria/DBD), ular, hewan liar; serta cedera otot akibat manual handling. Kendali: repellent, sepatu boots, teknik angkat benar, alat bantu mekanis.</p></article>
          </div>
        </div>
      `;
    },
  },

  /* ============================================================
     24 · KESEHATAN UMUM — FATIGUE & HEAT STRESS DETAIL (PDF p.62-64)
      ============================================================ */
  {
    type: 'two',
    mod: 'KESEHATAN',
    title: 'Kesehatan Umum, Fatigue & Heat Stress',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Kesehatan</div>
          <h2>Kesehatan <em>Umum</em> — Fatigue & Heat Stress</h2>
          <div class="two">
            <div class="panelbox">
              <h3><i></i>Kesehatan Umum</h3>
              <ul>
                <li>Sakit / konsumsi obat → <b>lapor atasan/pengawas</b></li>
                <li><b>Zero tolerance alkohol & obat terlarang</b>: di bawah pengaruh = dikeluarkan dari site</li>
                <li>Dukung program <b>ALKOHOL & OBAT — ZERO TOLERANCE</b></li>
              </ul>
              <h3 style="margin-top:14px"><i></i>Fatigue</h3>
              <ul>
                <li><b>Gejala:</b> sulit konsentrasi, mood berubah, sensitif suara/cahaya, sakit kepala, lelah ekstrem</li>
                <li><b>Atasi:</b> tidur berkualitas, manajemen stres (meditasi/yoga), olahraga, rotasi, hidrasi, istirahat cukup</li>
              </ul>
            </div>
            <div class="panelbox danger">
              <h3><i></i>Heat Stress</h3>
              <ul>
                <li>Serangkaian kondisi <b>tekanan panas berlebihan</b> di lingkungan kerja</li>
                <li><b>Awali hari dengan minum air putih</b> cukup; hindari alkohol & kafein (dehidrasi)</li>
                <li>Gunakan pakaian <b>cerah, ringan, tipis, katun</b> menyerap keringat; hindari sintetis</li>
                <li><b>Konsumsi elektrolit</b> seimbang; work-rest cycle; area teduh</li>
                <li>Kenali heat cramps → exhaustion → stroke</li>
              </ul>
            </div>
          </div>
        </div>
      `;
    },
  },

  /* ============================================================
     25 · TRAFFIC (diperkaya PDF p.20-22)
      ============================================================ */
  {
    type: 'checks',
    mod: 'AREA',
    title: 'Traffic & Haul Road',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Risiko Kritikal Area</div>
          <h2>Keselamatan <em>Traffic & Haul Road</em></h2>
          ${Illustrations.traffic()}
          <ul class="checks cols">
            <li><b>Hirarki prioritas 8 level:</b> 1. Ambulance sirene → 2. Pemadam → 3. Pengangkut bahan peledak → 4. LV escort → 5. HE bermuatan → 6. HE kosong → 7. Truck bermuatan/kosong → 8. LV/Bus/Manhaul</li>
            <li><b>Batas kecepatan</b> sesuai Rencana Manajemen Lalu Lintas (TMP): kendaraan ringan ± 40 km/jam di <i>haul road</i>, lebih rendah saat hujan atau malam hari. Hak utama jalan: alat berat &gt; kendaraan ringan &gt; pejalan kaki; kendaraan menanjak diprioritaskan.</li>
            <li><b>Sabuk pengaman</b> wajib bagi seluruh penumpang; dilarang menggunakan ponsel saat mengemudi; dilarang menumpang di bak terbuka.</li>
            <li><b>Titik buta:</b> jangan pernah berada di zona buta alat berat; kontak mata dan komunikasi positif wajib dilakukan.</li>
            <li><b>Radio dan komunikasi positif</b> wajib digunakan sebelum memasuki atau melintasi jalur operasional.</li>
            <li><b>Pemeriksaan awal harian</b>: rem, ban, lampu, wiper, klakson, radio, APAR, dan sabuk pengaman.</li>
            <li><b>Parkir aman:</b> di tanah datar, rem parkir aktif, ganjal roda terpasang, hindari tepi lereng dan <i>sump</i>.</li>
            <li><b>Pejalan kaki:</b> hanya melalui jalur pejalan kaki; menyeberang di titik yang telah ditetapkan.</li>
          </ul>
          <div class="panelbox danger" style="margin-top:16px">
            <h3><i></i>Wet Weather Protocol — KHUSUS LATERIT</h3>
            <ul>
              <li>Jalan laterit <b>sangat licin</b> saat hujan; traksi hilang mendadak</li>
              <li>Kurangi kecepatan, nyalakan lampu, perbesar jarak aman</li>
              <li>Traksi hilang / jalan rusak berat: <b>STOP</b> di tempat aman, lapor dispatcher. SWA penuh</li>
            </ul>
          </div>
        </div>
      `;
    },
  },

  /* ============================================================
     25 · ISYARAT KLAKSON & JARAK AMAN (PDF p.21-22)
      ============================================================ */
  {
    type: 'two',
    mod: 'AREA',
    title: 'Isyarat Klakson & Jarak Aman',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Risiko Kritikal Area</div>
          <h2><em>Klakson</em> & Jarak Aman Beriringan</h2>
          <div class="two">
            <div class="panelbox">
              <h3><i></i>Isyarat Klakson</h3>
              <ul>
                <li><b>1× klakson:</b> akan menyalakan mesin</li>
                <li><b>2× klakson:</b> akan bergerak maju</li>
                <li><b>3× klakson:</b> akan bergerak mundur</li>
                <li><b>Klakson panjang:</b> keadaan darurat</li>
                <li>Bunyikan saat <b>memberi peringatan</b> ke orang/kendaraan lain</li>
              </ul>
            </div>
            <div class="panelbox warn">
              <h3><i></i>Jarak Aman 3 Detik</h3>
              <ul>
                <li>Pengemudi hanya memiliki <b>3 detik</b> untuk merespons kondisi di depan saat beriringan.</li>
                <li>Pada kecepatan <b>40 km/jam dibutuhkan ± 50 meter</b> jarak aman.</li>
                <li>Jarak aman berfungsi sebagai pengendalian untuk kondisi tidak terduga.</li>
                <li>Saat jalan basah, jarak aman harus diperbesar secara signifikan.</li>
              </ul>
            </div>
          </div>
        </div>
      `;
    },
  },

  /* ============================================================
     26 · KATEGORI & JENIS KECELAKAAN (PDF p.23-24)
      ============================================================ */
  {
    type: 'cards',
    mod: 'RISIKO',
    title: 'Kategori Kecelakaan Tambang',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Manajemen Risiko</div>
          <h2>Kategori & <em>Jenis Kecelakaan</em></h2>
          <p class="lead">Definisi: kejadian tidak diinginkan & tidak direncanakan dalam kegiatan tambang (terbuka/bawah tanah) yang benar-benar terjadi, ada bukti, & diakibatkan usaha tambang.</p>
          <div class="cards stagger">
            <article class="card r"><div class="ico">💀</div><h3>Fatality</h3><p>Kematian akibat kecelakaan tambang.</p></article>
            <article class="card"><div class="ico">🤕</div><h3>LTI — Lost Time Injury</h3><p>Cedera dengan kehilangan waktu kerja.</p></article>
            <article class="card b"><div class="ico">🦺</div><h3>RWI — Restricted Work</h3><p>Keterbatasan kerja karena cedera.</p></article>
            <article class="card t"><div class="ico">🏥</div><h3>MTI — Medical Treatment</h3><p>Perlu penanganan medis lanjutan.</p></article>
            <article class="card g"><div class="ico">🩹</div><h3>FAI — First Aid</h3><p>Pertolongan pertama saja.</p></article>
            <article class="card"><div class="ico">🏚️</div><h3>PD — Property Damage</h3><p>Kerusakan properti/aset.</p></article>
            <article class="card r"><div class="ico">⚡</div><h3>NM — Near Miss</h3><p>Hampir celaka — <b>wajib lapor</b>, pembelajaran terbaik.</p></article>
          </div>
          <div class="footnote">Lapor semua kategori, bukan hanya fatality.</div>
        </div>
      `;
    },
  },

  /* ============================================================
     27 · PENYEBAB KECELAKAAN 88/10/2 (PDF p.25)
      ============================================================ */
  {
    type: 'cards',
    mod: 'RISIKO',
    title: 'Penyebab Kecelakaan 88/10/2',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Manajemen Risiko — Heinrich Ratio</div>
          <h2>Penyebab <em>Kecelakaan</em> — Data Kecelakaan</h2>
          <div class="cards stagger">
            <article class="card r"><div class="ico">${Icons.get('tools', { class: 'ico-svg' })}</div><h3>88% — Tindakan Tidak Aman</h3><p>Perilaku pekerja menyimpang dari prosedur: shortcut, tidak pakai APD, meledek rekan, dll.</p></article>
            <article class="card"><div class="ico">${Icons.get('mountain', { class: 'ico-svg' })}</div><h3>10% — Kondisi Tidak Aman</h3><p>Lingkungan tidak standar: lantai licin, alat rusak, pencahayaan buruk, tumpukan tidak rapi.</p></article>
            <article class="card b"><div class="ico">${Icons.get('cert', { class: 'ico-svg' })}</div><h3>2% — Di Luar Kemampuan</h3><p>Nasib / force majeure — tetap investigasi untuk mitigasi.</p></article>
          </div>
          <div class="panelbox warn" style="margin-top:18px">
            <h3><i></i>Implikasi</h3>
            <ul>
                <li>88% kecelakaan dapat dicegah dengan <b>disiplin prosedur + SWA</b> — fokus pada perilaku dan kondisi sebelum menyalahkan nasib.</li>
              <li>Fokus: <b>perilaku + kondisi</b> sebelum menyalahkan nasib.</li>
            </ul>
          </div>
        </div>
      `;
    },
  },

  /* ============================================================
     28 · BAHAYA vs RISIKO & STUDI KASUS (PDF p.26-27)
      ============================================================ */
  {
    type: 'two',
    mod: 'RISIKO',
    title: 'Bahaya vs Risiko',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Manajemen Risiko</div>
          <h2><em>Bahaya</em> vs <em>Risiko</em> — Definisi Dasar</h2>
          <div class="two">
            <div class="panelbox">
              <h3><i></i>Bahaya (Hazard)</h3>
              <p style="color:var(--muted); font-size:13.5px; line-height:1.7">Suatu kondisi/situasi berpotensi menyebabkan kecelakaan, cedera, kerusakan, dampak negatif. Sifat: <b>fisik</b> (benda tajam, listrik), <b>kimia</b>, <b>biologis</b> (virus), <b>psikologis</b> (stres, kekerasan).</p>
              <div style="margin-top:12px; padding:10px; border:1px dashed var(--line-2); border-radius:10px; background:var(--surface)">
                <p style="margin:0; font-size:12.5px; color:var(--amber); text-align:center"><b>Studi Kasus Gambar:</b> High Pressure Air + Heavy Equipment — Temukan 5 bahaya pada gambar pit!</p>
              </div>
            </div>
            <div class="panelbox warn">
              <h3><i></i>Risiko (Risk)</h3>
              <p style="color:var(--muted); font-size:13.5px; line-height:1.7">Ukuran <b>kemungkinan × keparahan</b> bahaya. Risiko = probabilitas bahaya menjadi insiden nyata. Dikendalikan via hirarki pengendalian.</p>
              <ul>
                <li><b>Risiko tinggi</b> = kemungkinan besar + keparahan fatal → butuh eliminasi/isolation</li>
                <li><b>Risiko rendah</b> = jarang + ringan → kontrol administratif + APD</li>
              </ul>
            </div>
          </div>
        </div>
      `;
    },
  },

  /* ============================================================
     29 · KONDISI & TINDAKAN TIDAK AMAN (PDF p.28-31)
      ============================================================ */
  {
    type: 'two',
    mod: 'RISIKO',
    title: 'Kondisi & Tindakan Tidak Aman',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Manajemen Risiko</div>
          <h2>Kondisi & <em>Tindakan Tidak Aman</em></h2>
          <div class="two">
            <div class="panelbox danger">
              <h3><i></i>Kondisi Tidak Aman (Unsafe Condition)</h3>
              <ul>
                <li><b>Alat rusak:</b> kabel terkelupas, mesin bocor, APD tidak standar</li>
                <li><b>Housekeeping buruk:</b> lantai licin, material berantakan, pencahayaan kurang</li>
                <li><b>Lingkungan:</b> curah hujan, lereng retak, sump tidak stabil</li>
              </ul>
              <p style="margin-top:10px; color:var(--muted); font-size:12px">Tanggung jawab <b>bersama</b>: pekerja + manajemen harus ciptakan lingkungan aman.</p>
            </div>
            <div class="panelbox">
              <h3><i></i>Tindakan Tidak Aman (Unsafe Act)</h3>
              <ul>
                <li><b>Bekerja tanpa APD</b></li>
                <li><b>Menumpang alat kerja</b> / riding bak</li>
                <li>Bekerja di bawah pengaruh alkohol/obat</li>
                <li>Mengambil jalan pintas, melanggar prosedur, mengganggu rekan</li>
                <li>Definisi: perilaku menyimpang dari prosedur → dapat sebabkan insiden</li>
              </ul>
            </div>
          </div>
          <div class="footnote"><b>“Keselamatan adalah tanggung jawab bersama.”</b></div>
        </div>
      `;
    },
  },

  /* ============================================================
     30 · AKTIVITAS RISIKO TINGGI (PDF p.33)
      ============================================================ */
  {
    type: 'checks',
    mod: 'RISIKO',
    title: 'Aktivitas Risiko Tinggi Area Tambang',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Manajemen Risiko</div>
          <h2>Aktivitas <em>Risiko Tinggi</em> di Area Tambang</h2>
          <ul class="checks cols">
            <li><b>Pembukaan lahan, pengeboran, peledakan</b> (jika ada)</li>
            <li><b>Interaksi pejalan kaki</b> dengan kendaraan ringan & alat berat</li>
            <li><b>Akses kendaraan ringan & alat berat</b> di pit</li>
            <li><b>Kegiatan penambangan:</b> Loading, Hauling, Dumping</li>
            <li><b>Pengoperasian LV, truk ringan, manhaul</b></li>
            <li><b>Kegiatan perbaikan alat</b> di workshop</li>
            <li><b>Pengisolasian (LOTO)</b> & energized work</li>
            <li><b>Bekerja di dekat dinding/lereng</b> & sump</li>
            <li><b>Bekerja shift malam</b> — penerangan & fatigue</li>
            <li><b>Bekerja di dekat & di atas air</b> (jetty/TSF) & di ketinggian</li>
          </ul>
        </div>
      `;
    },
  },

  /* ============================================================
     31 · HIRARKI & MITIGASI (PDF p.34-35)
      ============================================================ */
  {
    type: 'two',
    mod: 'RISIKO',
    title: 'Hirarki Pengendalian & Mitigasi',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Manajemen Risiko</div>
          <h2>Hirarki & <em>Mitigasi Risiko</em></h2>
          <div class="two">
            <div class="panelbox">
              <h3><i></i>Hirarki Pengendalian (5 Tingkat)</h3>
              <ol style="margin:0; padding-left:18px; color:var(--muted); font-size:13px; line-height:1.7">
                <li><b>Eliminasi:</b> hilangkan bahaya total dari sumber</li>
                <li><b>Substitusi:</b> ganti dengan lebih aman</li>
                <li><b>Rekayasa:</b> isolasi fisik, guard, ventilasi</li>
                <li><b>Administratif:</b> SOP, JSEA, permit, rambu, pelatihan</li>
                <li><b>APD:</b> perlindungan terakhir setelah kontrol di atas</li>
              </ol>
              <p style="margin-top:10px; color:var(--amber); font-size:12px">Tujuan: cegah kecelakaan & lindungi kesehatan pekerja.</p>
            </div>
            <div class="panelbox warn">
              <h3><i></i>Upaya Mitigasi SMI</h3>
              <ul>
                <li><b>APD/PPE</b> + <b>Rambu/Sign</b> + <b>Safety Data Sheet</b></li>
                <li><b>P5M / Safety Talk</b> rutin</li>
                <li><b>Isolasi LOTO</b> + <b>Izin Bekerja PTW</b></li>
                <li><b>Laporan Bahaya</b> + <b>JSEA, SOP, IK</b></li>
                <li><b>Inspeksi/Audit</b> + <b>Pelatihan & Kesadaran</b></li>
              </ul>
            </div>
          </div>
        </div>
      `;
    },
  },

  /* ============================================================
     32 · P5M SAFETY TALK (PDF p.37)
      ============================================================ */
  {
    type: 'checks',
    mod: 'RISIKO',
    title: 'P5M & Safety Talk',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Manajemen Risiko</div>
          <h2><em>P5M</em> — Pembicaraan 5 Menit</h2>
          <p class="lead">Rutin harian mencakup Toolbox Meeting dan <b>P5M (Pembicaraan 5 Menit)</b> sebelum pekerjaan dimulai.</p>
          <ul class="checks cols">
            <li><b>Singkatan:</b> Pembicaraan 5 Menit — kegiatan rutin K3 sebelum kerja</li>
            <li><b>Tujuan:</b> tingkatkan kesadaran potensi bahaya & budaya keselamatan kuat</li>
            <li><b>Isi:</b> isu K3 aktual area, cuaca, perubahan kondisi, tugas hari ini</li>
            <li><b>Peserta:</b> seluruh kru termasuk kontraktor & tamu yang akan masuk pit</li>
            <li><b>Dokumentasi:</b> daftar hadir + poin bahaya + pengendalian disepakati</li>
          </ul>
        </div>
      `;
    },
  },

  /* ============================================================
     33 · JSEA / SOP / IK (PDF p.39-42)
      ============================================================ */
  {
    type: 'two',
    mod: 'RISIKO',
    title: 'JSEA — SOP — IK',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Manajemen Risiko</div>
          <h2><em>JSEA, SOP, IK</em> — Pengertian & Perbedaan</h2>
          <div class="two">
            <div class="panelbox">
              <h3><i></i>JSEA</h3>
              <p style="color:var(--muted); font-size:13px"><b>Job Safety & Environmental Analysis:</b> proses sistematis identifikasi bahaya, nilai risiko, kendalikan, & pantau dampak lingkungan. Fokus: perencanaan & evaluasi pekerjaan.</p>
              <h3 style="margin-top:12px"><i></i>SOP</h3>
              <p style="color:var(--muted); font-size:13px"><b>Standar Operasional Prosedur:</b> langkah terperinci bagaimana tugas harus dilakukan. Konsistensi, efisiensi, kualitas.</p>
              <h3 style="margin-top:12px"><i></i>IK</h3>
              <p style="color:var(--muted); font-size:13px"><b>Instruksi Kerja:</b> petunjuk spesifik pelaksanaan tugas + tanda tangan. Memastikan pekerja pahami langkah aman.</p>
            </div>
            <div class="panelbox warn">
              <h3><i></i>Perbedaan Kunci</h3>
              <table style="width:100%; font-size:12.5px; color:var(--muted); border-collapse:collapse; margin-top:8px">
                <tr style="border-bottom:1px solid var(--line)"><th style="text-align:left; padding:6px; color:var(--amber)">Fitur</th><th style="padding:6px">JSEA</th><th style="padding:6px">SOP</th><th style="padding:6px">IK</th></tr>
                <tr style="border-bottom:1px solid var(--line)"><td style="padding:6px">Fokus</td><td style="padding:6px">Risiko</td><td style="padding:6px">Langkah terperinci</td><td style="padding:6px">Pelaksanaan tugas</td></tr>
                <tr style="border-bottom:1px solid var(--line)"><td style="padding:6px">Detail</td><td style="padding:6px">Umum</td><td style="padding:6px">Spesifik</td><td style="padding:6px">Sangat spesifik</td></tr>
                <tr><td style="padding:6px">Pakai</td><td style="padding:6px">Perencanaan</td><td style="padding:6px">Rutin</td><td style="padding:6px">Harian</td></tr>
              </table>
              <p style="margin-top:12px; color:var(--amber); font-size:11.5px">Perbedaan ketiganya menentukan dokumen apa yang harus dibuat sebelum pekerjaan dimulai.</p>
            </div>
          </div>
        </div>
      `;
    },
  },

  /* ============================================================
     34 · TRAINING & RAMBU & SDS (PDF p.43-47)
      ============================================================ */
  {
    type: 'two',
    mod: 'RISIKO',
    title: 'Training, Rambu & SDS',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Manajemen Risiko</div>
          <h2><em>Training, Rambu & Bahan Kimia</em></h2>
          <div class="two">
            <div class="panelbox">
              <h3><i></i>Training & Awareness</h3>
              <ul>
                <li><b>Induksi Keselamatan:</b> lingkungan, bahaya, darurat, APD</li>
                <li><b>Pelatihan keterampilan:</b> peralatan, mesin, proses kerja</li>
                <li>Tujuan: tingkatkan pengetahuan & bangun kesadaran K3</li>
              </ul>
              <h3 style="margin-top:14px"><i></i>Kontrol Bahan Kimia</h3>
              <ul>
                <li>Semua bahan kimia <b>harus didaftar & punya SDS</b> (LDK)</li>
                <li><b>How to Read SDS:</b> 16 bagian — identifikasi, bahaya, komposisi, P3K, kebakaran, penyimpanan, toksikologi</li>
                <li>SDS tersedia di lokasi bahan kimia, penanganan sesuai instruksi</li>
              </ul>
            </div>
            <div class="panelbox warn">
              <h3><i></i>Rambu / Sign Pertambangan</h3>
              <ul>
                <li><b>Larangan:</b> dilarang merokok, masuk tanpa izin, pakai HP saat mengemudi</li>
                <li><b>Peringatan:</b> bahaya jatuh, longsor, listrik</li>
                <li><b>Lalu lintas:</b> petunjuk kendaraan & pejalan kaki</li>
                <li><b>Keselamatan:</b> jalur evakuasi, muster, APAR</li>
                <li><b>STOP:</b> tanda berhenti mutlak</li>
              </ul>
            </div>
          </div>
        </div>
      `;
    },
  },

  /* ============================================================
     35 · ALAT BERAT
      ============================================================ */
  {
    type: 'cards',
    mod: 'AREA',
    title: 'Alat Berat',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Risiko Kritikal Area</div>
          <h2>Keselamatan <em>Alat Berat (HE)</em></h2>
          <div class="cards stagger">
            <article class="card r"><div class="ico">${Icons.get('truck', { class: 'ico-svg' })}</div><h3>Exclusion Zone</h3><p>Dilarang masuk radius operasi/swing HE tanpa izin & komunikasi positif dengan operator. Unit berhenti total sebelum orang mendekat.</p></article>
            <article class="card"><div class="ico">${Icons.get('truck', { class: 'ico-svg' })}</div><h3>Loading & Dumping</h3><p>LV dilarang berada dekat excavator saat loading; posisi dump truck aman. Saat dumping: perhatikan berm/windrow & kestabilan ground.</p></article>
            <article class="card b"><div class="ico">${Icons.get('search', { class: 'ico-svg' })}</div><h3>Pre-Start & Walk-Around</h3><p>Periksa track/ban, hidrolik, attachment, rem, steering, fire suppression, alarm mundur. Unit tidak layak = tag & lapor.</p></article>
            <article class="card t"><div class="ico">${Icons.get('fire', { class: 'ico-svg' })}</div><h3>Kebakaran Unit</h3><p>Kenali lokasi APAR & sistem fire suppression unit; prosedur shutdown–evakuasi–lapor bila terjadi kebakaran.</p></article>
          </div>
          <ul class="checks danger" style="margin-top:16px">
            <li>Dilarang <b>riding</b> di bak/attachment; dilarang bekerja di bawah dump body tanpa prop/stand sah.</li>
            <li>Isolasi/LOTO wajib sebelum pembersihan, servis, atau perbaikan apa pun.</li>
            <li>Waspadai tekanan hidrolik: <b>fluid injection</b> (semburan oli bertekanan) dapat melukai fatal.</li>
          </ul>
        </div>
      `;
    },
  },

  /* ============================================================
     26 · GEOTEKNIK
     ============================================================ */
  {
    type: 'checks',
    mod: 'AREA',
    title: 'Geoteknik & Pit',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Risiko Kritikal Area</div>
          <h2>Geoteknik & <em>Open Pit Laterit</em></h2>
          <p class="lead">Laterit (saprolit & limonit) berkekuatan seperti <b>tanah</b> — bukan batuan padat. Hujan tropis menurunkan <b>kuat geser</b> signifikan. Jenuh air = lumpur cair yang menelan alat. Ini bahaya nomor satu pit nikel.</p>
          ${Illustrations.geotek()}
          <ul class="checks danger cols">
            <li><b>Highwall/lowwall:</b> dilarang bekerja/parkir di bawah material menggantung atau lereng tanpa inspeksi geotek.</li>
            <li><b>Tanda awal kegagalan (wajib hafal):</b> retakan crest (tension crack), <b>gelembung/pergerakan material</b>, perubahan bentuk lereng, <b>mata air baru</b>, rembesan, suara tanah, amblasan.</li>
            <li><b>Mudflow/liquefaction:</b> material basah dapat mengalir menelan alat — hormati jarak aman dari toe lereng & disposal.</li>
            <li><b>Pit sump:</b> dilarang parkir/dumping dekat tepi sump yang tidak stabil; waspadai pompa & pipa.</li>
            <li><b>Trigger hujan:</b> setelah hujan deras, area rawan ditutup sampai inspeksi geoteknik menyatakan aman.</li>
            <li><b>Barricade & rambu</b> geoteknik = larangan mutlak; dilarang memindahkan tanpa otorisasi.</li>
            <li><b>Scaling</b> hanya oleh personel berkompeten dengan metode & pengawasan yang disetujui.</li>
            <li>Lihat retakan/gelembung/mata air baru atau aliran lumpur? <b>Amankan area + STOP WORK → lapor dispatcher/geoteknik segera</b> — meski belum ada tanda longsor seketika. Anda diberi wewenang penuh.</li>
          </ul>
        </div>
      `;
    },
  },

  /* ============================================================
     27 · LOTO (diperkaya PDF p.46 warna & kepemilikan)
      ============================================================ */
  {
    type: 'flow',
    mod: 'KERJA',
    title: 'LOTO',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Pekerjaan Berbahaya</div>
          <h2><em>LOTO</em> — Lock Out Tag Out</h2>
          ${Illustrations.loto()}
          <div class="flow">
            <div class="step">1 · PERSIAPAN</div><div class="arr">➜</div>
            <div class="step">2 · SHUTDOWN</div><div class="arr">➜</div>
            <div class="step">3 · ISOLASI</div><div class="arr">➜</div>
            <div class="step">4 · LOCK & TAG</div><div class="arr">➜</div>
            <div class="step">5 · LEPAS ENERGI SISA</div><div class="arr">➜</div>
            <div class="step">6 · VERIFIKASI NOL ENERGI</div><div class="arr">➜</div>
            <div class="step">7 · BEKERJA & PELEPASAN</div>
          </div>
          <ul class="checks cols" style="margin-top:22px">
            <li><b>Hanya pemilik tag yang boleh pasang & lepas</b>; gembok + hasp/jaw + <b>tag merah-hitam-putih</b> "DANGER DO NOT OPERATE — This lock/tag may only be removed by [Nama]".</li>
            <li>Sumber energi: listrik, mekanik, hidrolik, pneumatik, gravitasi, panas, kimia, tersimpan.</li>
            <li><b>Konteks nikel:</b> buang <b>energi tersimpan hidrolik HE</b> & tekanan sisa <b>pipa slurry nikel</b> sebelum kerja — fluid injection & semburan slurry fatal.</li>
            <li><b>One person – one lock – one key.</b> Group LOTO pakai lockbox/hasp jelas.</li>
            <li>Verifikasi nol energi: coba start, ukur tegangan/tekanan/suhu. <b>Praktik langsung</b> LOTO panel/katup hidrolik adalah bagian wajib pelatihan, bukan sekadar slide.</li>
          </ul>
        </div>
      `;
    },
  },

  /* ============================================================
     28 · LISTRIK
     ============================================================ */
  {
    type: 'checks',
    mod: 'KERJA',
    title: 'Keselamatan Listrik',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Pekerjaan Berbahaya</div>
          <h2>Keselamatan <em>Listrik</em></h2>
          <ul class="checks cols">
            <li>Hanya <b>teknisi berwenang</b> yang membuka panel/melakukan kerja listrik.</li>
            <li>LOTO listrik wajib; verifikasi tegangan nol sebelum menyentuh konduktor.</li>
            <li>Waspadai <b>arc flash</b>: APD listrik & jarak aman sesuai batas kerja.</li>
            <li>Alat portable: inspeksi kabel/steker; gunakan <b>RCD/GFCI</b>; dilarang alat rusak.</li>
            <li>Jaga jarak aman dari <b>jaringan overhead</b> untuk crane/alat/tangga; koordinasikan pemadaman bila perlu.</li>
            <li>Deteksi <b>utilitas bawah tanah</b> sebelum menggali.</li>
            <li>Kabel rusak/terkelupas = tag, laporkan, jangan sentuh; area genangan air = risiko ganda.</li>
          </ul>
        </div>
      `;
    },
  },

  /* ============================================================
     29 · KETINGGIAN
     ============================================================ */
  {
    type: 'checks',
    mod: 'KERJA',
    title: 'Kerja di Ketinggian',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Pekerjaan Berbahaya</div>
          <h2>Kerja di <em>Ketinggian</em></h2>
          <ul class="checks cols">
            <li>Batas wajib fall protection: <b>≥ 1,8 m</b> (atau sesuai standar site) + permit.</li>
            <li><b>Full body harness + double lanyard</b> pada anchor tersertifikasi; inspeksi sebelum pakai.</li>
            <li>Scaffolding hanya dengan <b>tag aman</b>; dilarang mengubah struktur scaffold.</li>
            <li>MEWP/scissor lift: operator kompeten, harness terikat, permukaan stabil.</li>
            <li>Tangga: 3 titik kontak, dikaitkan, sudut benar, inspeksi rutin.</li>
            <li>Cegah <b>falling object</b>: tool lanyard, toe board, barricade area bawah.</li>
            <li><b>Wajib rescue plan</b> (evakuasi korban tergantung — cegah suspension trauma).</li>
            <li>Berhenti saat angin kencang, hujan licin, atau petir.</li>
          </ul>
        </div>
      `;
    },
  },

  /* ============================================================
     30 · CONFINED SPACE
     ============================================================ */
  {
    type: 'two',
    mod: 'KERJA',
    title: 'Ruang Terbatas',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Pekerjaan Berbahaya</div>
          <h2><em>Ruang Terbatas</em> (Confined Space)</h2>
          <div class="two">
            <div class="panelbox">
              <h3><i></i>Contoh & Bahaya</h3>
              <ul>
                <li>Tangki BBM, bin, hopper, sump, vessel, autoclave, pipa besar, conveyor gallery.</li>
                <li>Bahaya: kekurangan O₂, gas beracun (CO, H₂S, SO₂), gas mudah terbakar, material menimbun, suhu ekstrem.</li>
              </ul>
            </div>
            <div class="panelbox danger">
              <h3><i></i>Syarat Masuk Mutlak</h3>
              <ul>
                <li><b>Permit</b> confined space berlaku.</li>
                <li><b>Isolasi/LOTO + blanking</b> seluruh energi & material.</li>
                <li><b>Gas test:</b> O₂ 19,5–23,5%; gas mudah terbakar &lt; 5% LEL (0% untuk hot work); toksik di bawah NAB. Monitoring berkelanjutan.</li>
                <li><b>Ventilasi</b> paksa; <b>attendant</b> siaga di luar dengan komunikasi terus-menerus.</li>
                <li><b>Peralatan rescue</b> (tripod, winch, SCBA) siap; <b>dilarang rescue improvisasi</b>.</li>
              </ul>
            </div>
          </div>
        </div>
      `;
    },
  },

  /* ============================================================
     31 · HOT WORK & APAR
     ============================================================ */
  {
    type: 'two',
    mod: 'KERJA',
    title: 'Hot Work & APAR',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Pekerjaan Berbahaya</div>
          <h2><em>Hot Work</em> & Pencegahan Kebakaran</h2>
          ${Illustrations.hotwork()}
          <div class="two">
            <div class="panelbox warn">
              <h3><i></i>Aturan Hot Work</h3>
              <ul>
                <li>Permit hot work wajib; area dibersihkan dari bahan mudah terbakar atau dilindungi fire blanket.</li>
                <li><b>Fire watch</b> siaga selama kerja dan ± 30–60 menit setelah selesai.</li>
                <li>Gas test bila dekat fuel/chemical/area berpotensi gas.</li>
                <li>APAR sesuai kelas api tersedia di titik kerja.</li>
                <li>Khusus area fuel farm/chemical: isolasi & otorisasi tambahan mutlak.</li>
              </ul>
            </div>
            <div class="panelbox">
              <h3><i></i>APAR & Kelas Kebakaran</h3>
              <ul>
                <li><b>Kelas A</b> padat (kayu, kertas) — air/foam/powder.</li>
                <li><b>Kelas B</b> cair (BBM, oli) — foam/powder/CO₂.</li>
                <li><b>Kelas C</b> gas — powder/CO₂ (isolasi sumber).</li>
                <li><b>Kelas D</b> logam — powder khusus.</li>
                <li><b>Listrik:</b> CO₂/powder — jangan air.</li>
                <li>Teknik <b>PASS</b>: Pull, Aim, Squeeze, Sweep.</li>
              </ul>
            </div>
          </div>
          <div class="footnote">Api membesar? Jangan heroik. Evakuasi, bunyikan alarm, hubungi ERT.</div>
        </div>
      `;
    },
  },

  /* ============================================================
     32 · LIFTING (diperkaya PDF p.48)
      ============================================================ */
  {
    type: 'checks',
    mod: 'KERJA',
    title: 'Lifting & Rigging',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Pekerjaan Berbahaya</div>
          <h2><em>Lifting</em> & Rigging</h2>
          <ul class="checks cols">
            <li><b>Orang bersertifikat + signalman</b> wajib; operator harus punya <b>lisensi/SIO</b> — jangan gunakan alat rusak</li>
            <li>Patuhi <b>load chart & SWL</b> (Safe Working Load); jangan overload; ketahui berat beban sebelum angkat</li>
            <li>Inspeksi <b>lifting gear</b> (sling, shackle, hook, chain block) — <b>tag & singkirkan</b> rusak + cek masa sertifikasi masih berlaku</li>
            <li><b>Radius bahaya:</b> jangan pernah berjalan di bawah alat angkat operasi; exclusion zone ketat</li>
            <li>Gunakan <b>tagline</b>; satu komando signaler; radio bila pandangan terhalang; waspadai jaringan listrik</li>
            <li><b>Critical lift</b> (beban besar/tandem/bentuk tak stabil) wajib <b>lifting plan</b> terotorisasi</li>
            <li>Outrigger penuh pada ground stabil; berhenti saat angin kencang/petir</li>
          </ul>
        </div>
      `;
    },
  },

  /* ============================================================
     33 · MANUAL HANDLING (PDF p.49-51) — 3 poin
      ============================================================ */
  {
    type: 'two',
    mod: 'KERJA',
    title: 'Manual Handling — Bahaya',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Pekerjaan Berbahaya</div>
          <h2><em>Manual Handling</em> — Bahaya & Dampak</h2>
          <div class="two">
            <div class="panelbox danger">
              <h3><i></i>Definisi</h3>
              <p style="color:var(--muted); font-size:13px; line-height:1.65">Aktivitas memindahkan beban secara manual (angkat, turun, dorong, tarik, bawa, tahan) dalam rentang waktu tertentu.</p>
              <h3 style="margin-top:14px"><i></i>Bahaya</h3>
              <ul>
                <li><b>Cedera punggung</b> & otot-sendi</li>
                <li><b>Hernia</b></li>
                <li><b>Gangguan muskuloskeletal</b></li>
              </ul>
            </div>
            <div class="panelbox">
              <h3><i></i>Konteks SMI</h3>
              <p style="color:var(--muted); font-size:13.5px">Walaupun ada alat berat, banyak tugas ringan tetap manual: pindah sample ore, angkat filter, dorong drum. Semua = manual handling → butuh penilaian risiko.</p>
              <div style="margin-top:14px; padding:10px; background:var(--amber-soft); border:1px solid var(--amber-line); border-radius:10px">
                <p style="margin:0; font-size:12.5px; color:var(--amber)"><b>Ingat:</b> terlihat sederhana, tapi penyebab utama hernia & sakit punggung kronis di tambang.</p>
              </div>
            </div>
          </div>
        </div>
      `;
    },
  },

  /* ============================================================
     34 · MANUAL HANDLING — Kontrol & Teknik Benar (PDF p.50-51)
      ============================================================ */
  {
    type: 'two',
    mod: 'KERJA',
    title: 'Manual Handling — Kontrol',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Pekerjaan Berbahaya</div>
          <h2><em>Manual Handling</em> — Kontrol & Teknik Benar</h2>
          <div class="two">
            <div class="panelbox">
              <h3><i></i>Pengendalian</h3>
              <ul>
                <li><b>Penilaian risiko:</b> identifikasi tugas, berat, jarak, posisi tubuh</li>
                <li><b>Perbaikan ergonomi:</b> meja/kursi sesuai tinggi, pencahayaan baik, area lapang</li>
                <li>Gunakan alat bantu: troli, hoist, forklift bila beban &gt; batas manual</li>
                <li>Rotasi tugas &amp; istirahat</li>
              </ul>
            </div>
            <div class="panelbox ok">
              <h3><i></i>Teknik Angkat Benar — STOP & THINK</h3>
              <ul>
                <li><b>Jaga punggung lurus</b>; gunakan <b>kekuatan kaki</b>, bukan punggung</li>
                <li><b>Dekatkan beban ke tubuh</b>; pegang dengan kedua tangan</li>
                <li><b>Hindari memutar tubuh</b> saat mengangkat</li>
                <li>Steps: Position feet → Get firm grip → Adopt posture → Lift with legs → Move feet → Put down</li>
              </ul>
            </div>
          </div>
          <div class="footnote">Setiap situasi berbeda — nilai risiko spesifik sebelum mengangkat.</div>
        </div>
      `;
    },
  },

  /* ============================================================
     35 · BENDA JATUH & KETINGGIAN TAMBAHAN (PDF p.53-54)
      ============================================================ */
  {
    type: 'two',
    mod: 'KERJA',
    title: 'Benda Jatuh & Ketinggian — Tambahan',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Pekerjaan Berbahaya</div>
          <h2><em>Benda Jatuh</em> & Trauma Gantung</h2>
          <div class="two">
            <div class="panelbox danger">
              <h3><i></i>Benda Jatuh — Statis vs Dinamis</h3>
              <ul>
                <li><b>Statis:</b> benda jatuh karena gravitasi tanpa gaya tambahan (batu menggantung, material lepas)</li>
                <li><b>Dinamis:</b> jatuh karena gaya (tabrakan, tersangkut mesin, tumpukan roboh, alat lepas)</li>
                <li><b>Hati-hati kejatuhan batu/tanah</b> di lokasi pit — lakukan penilaian sebelum masuk</li>
              </ul>
            </div>
            <div class="panelbox warn">
              <h3><i></i>Ketinggian — Trauma Suspensi</h3>
              <ul>
                <li>Jatuh tanpa pelindung atau akibat peralatan yang salah dapat menyebabkan <b>cedera parah hingga fatal</b>.</li>
                <li>Tergantung terlalu lama pada <i>harness</i> setelah jatuh menghambat sirkulasi kaki → sesak napas, hilang kesadaran, hingga gagal ginjal (<b>trauma suspensi</b>). Korban harus dievakuasi dalam hitungan menit.</li>
                <li>Waspadai <b>bahaya sekunder saat penyelamatan</b> — rencana penyelamatan (<i>rescue plan</i>) wajib disiapkan sebelum pekerjaan dimulai, bukan saat kejadian.</li>
              </ul>
            </div>
          </div>
        </div>
      `;
    },
  },

  /* ============================================================
     36 · TEMPAT MEROKOK & KONTROL LISTRIK DETAIL (PDF p.52,55)
      ============================================================ */
  {
    type: 'two',
    mod: 'KERJA',
    title: 'Kontrol Listrik & Tempat Merokok',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Pekerjaan Berbahaya</div>
          <h2>Kontrol <em>Listrik Detail</em> & Area Merokok</h2>
          <div class="two">
            <div class="panelbox danger">
              <h3><i></i>Listrik — Detail Teknis</h3>
              <ul>
                <li>Semua <b>pintu panel tetap tertutup & terkunci</b></li>
                <li>Hanya <b>petugas listrik berizin</b> boleh akses panel induk; pasang sign bahaya</li>
                <li>Semua peralatan listrik harus <b>diuji & tagging valid</b></li>
                <li><b>Sengatan = darurat</b> — laporkan segera, korban didampingi</li>
              </ul>
            </div>
            <div class="panelbox warn">
              <h3><i></i>Tempat Merokok</h3>
              <ul>
                <li><b>Hanya di area bertanda "Area Merokok"</b></li>
                <li>Dilarang: kamar tidur, kantin, ruang terbatas, dekat bahan mudah terbakar/meledak</li>
                <li>Dilarang: <b>Fuel Storage/BBM, Gudang B3</b></li>
                <li>Pelanggaran = SPDK / Golden Rules</li>
              </ul>
            </div>
          </div>
        </div>
      `;
    },
  },

  /* ============================================================
     37 · GALIAN
      ============================================================ */
  {
    type: 'checks',
    mod: 'KERJA',
    title: 'Galian & Parit',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Pekerjaan Berbahaya</div>
          <h2><em>Galian</em> & Parit (Excavation)</h2>
          <ul class="checks cols">
            <li>Permit excavation wajib; <b>deteksi utilitas bawah tanah</b> (kabel, pipa) sebelum menggali.</li>
            <li>Pengendalian runtuh: <b>sloping/benching/shoring/shielding</b> sesuai kedalaman & jenis tanah (laterit jenuh = sangat rawan).</li>
            <li>Barricade + rambu di sekeliling galian; penerangan bila malam.</li>
            <li>Jalur masuk/keluar aman (tangga) setiap jarak tertentu; dilarang melompat masuk.</li>
            <li>Spoil pile & alat berat berjarak aman dari tepi galian.</li>
            <li>Inspeksi ulang setelah hujan, getaran, atau perubahan kondisi.</li>
            <li>Dilarang bekerja sendirian di dalam parit.</li>
          </ul>
        </div>
      `;
    },
  },

  /* ============================================================
     34 · KIMIA & B3
     ============================================================ */
  {
    type: 'checks',
    mod: 'FASILITAS',
    title: 'Bahan Kimia & B3',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Fasilitas & Lingkungan</div>
          <h2>Bahan <em>Kimia & B3</em></h2>
          <ul class="checks cols">
            <li><b>SDS (Safety Data Sheet)</b> wajib tersedia & dipahami untuk setiap bahan kimia.</li>
            <li>Wadah wajib <b>berlabel</b>; dilarang memindahkan ke wadah tanpa label.</li>
            <li><b>Segregasi</b> bahan incompatible (asam–basa, oksidator–flammable) + secondary containment/bunding.</li>
            <li><b>Asam sulfat</b> (jika ada HPAL/laboratorium): korosif & eksotermik — chemical suit, face shield, gloves khusus; tahu lokasi <b>eyewash & safety shower</b> (bilas ≥ 15 menit).</li>
            <li>Tabung gas: posisi tegak terikat, cap terpasang, jauh dari panas; segregasi oksigen–bahan bakar.</li>
            <li><b>Spill kit</b>: ketahui lokasi & cara pakai; tumpahan besar = evakuasi & lapor.</li>
            <li>Limbah B3 (oli bekas, filter, baterai, kemasan kimia, limbah medis) → tempat berlabel, dilarang buang sembarangan.</li>
          </ul>
        </div>
      `;
    },
  },

  /* ============================================================
     34B · TABEL LIMBAH B3 NIKEL (K3L Seimbang Bab 4 + PP 22/2021)
      ============================================================ */
  {
    type: 'two',
    mod: 'FASILITAS',
    title: 'Tabel Limbah B3 Site Nikel',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Fasilitas & Lingkungan — TPS B3 Berizin</div>
          <h2>Tabel <em>Limbah B3</em> — Kenali & Buang Benar</h2>
          <p class="lead">Limbah B3 <b>dilarang dibuang sembarangan, dibakar terbuka atau dikubur</b>. Hanya di <b>TPS B3 berizin</b>. Pelanggaran = sanksi berat perusahaan & individu.</p>
          ${Illustrations.b3()}
          <div class="panelbox" style="margin-top:6px">
            <div class="waste-table">
              <div class="waste-row waste-head"><span>Jenis</span><span>Contoh di Site Nikel</span><span>Prosedur Benar</span></div>
              <div class="waste-row"><span><b>Minyak & Fluida</b></span><span>Oli bekas HE, minyak rem/transmisi</span><span>Wadah tertutup → TPS B3. Jangan ke drainase/tanah</span></div>
              <div class="waste-row"><span><b>Kimia</b></span><span>Kemasan reagen flotasi/hidrometalurgi, elektrolit smelter</span><span>Pisahkan per jenis → pihak berwenang</span></div>
              <div class="waste-row"><span><b>Elektrik/Elektronik</b></span><span>Aki bekas kendaraan & peralatan</span><span>TPS B3 khusus elektronik</span></div>
              <div class="waste-row"><span><b>Tailing HPAL</b></span><span>Sisa High Pressure Acid Leaching</span><span>Permanen di <b>TSF</b> standar keselamatan</span></div>
              <div class="waste-row"><span><b>Domestik</b></span><span>Sisa makanan, plastik, kertas kantor/kantin</span><span>Tempat umum → vendor fasilitas umum</span></div>
            </div>
            <ul style="margin:12px 0 0">
              <li>Operator HE: kenali <b>bocor oli/BBM</b> → bersihkan segera cegah kontaminasi tanah/air.</li>
              <li>Staf lab: prosedur khusus reagen kimia. Semua pekerja: hafalkan lokasi <b>TPS B3</b> site Anda.</li>
            </ul>
          </div>
          <div class="footnote">Sumber: Panduan Fondasi K3L Seimbang, Bab 4.</div>
        </div>
      `;
    },
  },

  /* ============================================================
     35 · PLANT & CONVEYOR
     ============================================================ */
  {
    type: 'checks',
    mod: 'FASILITAS',
    title: 'Plant & Conveyor',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Fasilitas & Lingkungan</div>
          <h2><em>Plant</em>, Crusher & Conveyor</h2>
          <ul class="checks cols">
            <li><b>Moving parts</b> (crusher, screen, pulley, roller, coupling) = bahaya jepit/tertarik; <b>guarding wajib</b>, dilarang melepas guard/interlock.</li>
            <li>Conveyor: gunakan <b>crossing point</b>; dilarang riding/berjalan di atas belt; kenali <b>pull cord</b> darurat.</li>
            <li>Membersihkan jam/chute/hopper = <b>LOTO wajib</b> sebelum tangan/alat masuk.</li>
            <li>Debu & bising: APD wajib; sistem dust suppression & housekeeping rutin.</li>
            <li>Waspada confined space di hopper/bin/thickener/sump plant.</li>
            <li>Hot work di area plant = permit + fire watch (risiko debu/belt terbakar).</li>
          </ul>
        </div>
      `;
    },
  },

  /* ============================================================
     36 · SMELTER / HPAL / TSF / JETTY
     ============================================================ */
  {
    type: 'cards',
    mod: 'FASILITAS',
    title: 'Smelter / HPAL / TSF / Jetty',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Fasilitas & Lingkungan</div>
          <h2>Fasilitas Khusus <span class="tag cond">SESUAI KONFIGURASI SITE</span></h2>
          <div class="cards stagger">
            <article class="card r"><div class="ico">${Icons.get('fire', { class: 'ico-svg' })}</div><h3>Smelter / RKEF</h3><ul><li>Molten metal & slag: <b>dilarang ada air/genangan</b> di area tapping/slag (ledakan uap).</li><li>Radiant heat: APD tahan panas, work-rest, hidrasi.</li><li>Coal yard: spontaneous combustion & debu mudah terbakar.</li><li>Gas CO/SO₂: detektor gas & ventilasi.</li></ul></article>
            <article class="card"><div class="ico">${Icons.get('dropper', { class: 'ico-svg' })}</div><h3>HPAL / Hydrometallurgy</h3><ul><li>Asam sulfat pekat + sistem <b>bertekanan tinggi</b> (autoclave, pipa).</li><li>Oxygen enrichment: material kompatibel, bebas oli/grease.</li><li>Shower/eyewash, SCBA/escape set, alarm gas.</li></ul></article>
            <article class="card b"><div class="ico">${Icons.get('drop', { class: 'ico-svg' })}</div><h3>TSF (Tailings)</h3><ul><li><b>Exclusion zone sangat berbahaya</b> — akses dibatasi ketat; dilarang berenang/memancing.</li><li>Kegagalan dipicu <b>banjir bandang/cuaca ekstrem</b> atau kesalahan operasi → bencana lingkungan & kemanusiaan.</li><li>Kenali <b>rembesan/cairan aneh</b> → lapor K3L/ERT segera. Ikuti <b>latihan evakuasi tailing berkala</b> ke titik kumpul aman.</li><li>Kenali <b>Emergency Action Plan</b> & jalur evakuasi hilir.</li></ul></article>
            <article class="card t"><div class="ico">${Icons.get('ship', { class: 'ico-svg' })}</div><h3>Jetty & Barge (DSO)</h3><ul><li><b>Life jacket</b> wajib; kenali snap-back zone mooring line.</li><li>Nikel ore = kargo Grup A (IMSBC): bahaya <b>likuefaksi</b> bila kadar air melebihi TML.</li><li>Man overboard: alarm, life ring, rescue boat.</li><li>Batas cuaca: gelombang/angin/arus.</li></ul></article>
          </div>
        </div>
      `;
    },
  },

  /* ============================================================
     37 · FUEL FARM
     ============================================================ */
  {
    type: 'checks',
    mod: 'FASILITAS',
    title: 'Fuel Farm',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Fasilitas & Lingkungan</div>
          <h2><em>Fuel Farm</em> & Bahan Mudah Terbakar</h2>
          <ul class="checks cols">
            <li>Larangan api terbuka, rokok, HP; hot work hanya dengan permit + isolasi.</li>
            <li><b>Grounding & bonding</b> saat transfer BBM untuk mencegah listrik statis.</li>
            <li>Refueling unit: mesin mati, posisi aman, APAR siap, dilarang overfill.</li>
            <li>Bunding/secondary containment wajib; spill kit & pemisah oli-air berfungsi.</li>
            <li>APAR & sistem pemadam tersedia dan tidak terhalang.</li>
            <li>Kebocoran/bau BBM menyengat = lapor segera; tangani dengan prosedur spill.</li>
          </ul>
        </div>
      `;
    },
  },

  /* ============================================================
     38 · LINGKUNGAN (diperkaya PDF p.66-67)
      ============================================================ */
  {
    type: 'two',
    mod: 'FASILITAS',
    title: 'Perlindungan Lingkungan',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Fasilitas & Lingkungan</div>
          <h2>Perlindungan <em>Lingkungan</em></h2>
          <div class="two">
            <div class="panelbox">
              <h3><i></i>Prinsip & Regulasi</h3>
              <ul>
                <li><b>UU 32/2009 PPLH</b> + <b>UU 1/2004 Minerba</b>: keberlanjutan & lindungi lingkungan; sanksi hukum & reputasi bila tidak patuh</li>
                <li><b>Zero uncontrolled spill:</b> cegah & laporkan tumpahan BBM/oli/kimia sekecil apa pun</li>
                <li>Hormati <b>settling pond & drainase</b>; jangan ubah aliran air tanpa izin; kendalikan erosi</li>
                <li><b>Satwa & flora dilindungi:</b> larang berburu/memetik; situs budaya = stop kerja & lapor</li>
              </ul>
            </div>
            <div class="panelbox warn">
              <h3><i></i>Pengelolaan Sampah</h3>
              <ul>
                <li><b>Setiap orang tanggung jawab kebersihan lingkungan</b></li>
                <li><b>Pisahkan sampah:</b> <b>PLASTIC</b> (anorganik) vs <b>ORGANIC</b> (organik)</li>
                <li>Pilah: domestik, scrap, <b>limbah B3</b> ke wadah berlabel</li>
                <li>Dilarang buang limbah/oli ke tanah/drainase/badan air; keluhan debu/bising/air → fungsi lingkungan</li>
              </ul>
            </div>
          </div>
          <div class="footnote">Pisahkan sampah organik dan anorganik; limbah B3 hanya ke TPS berizin.</div>
        </div>
      `;
    },
  },

  /* ============================================================
     38B · AIR, REKLAMASI & SIKLUS HIDUP (K3L Seimbang Bab 4)
      ============================================================ */
  {
    type: 'two',
    mod: 'FASILITAS',
    title: 'Air, Reklamasi & Siklus Hidup',
    render() {
      return `
        <div class="inner">
          <div class="kicker k-teal">Lingkungan — Tata Kelola Air & Lahan</div>
          <h2>Air, <em>Reklamasi</em> & Siklus Hidup Tambang</h2>
          <p class="lead">Lingkungan bukan domain ahli saja — melainkan <b>tanggung jawab bersama</b> setiap pekerja. Dua pilar yang wajib Anda kuasai: manajemen air & reklamasi progresif.</p>
          ${Illustrations.air()}
          <div class="two">
            <div class="panelbox">
              <h3><i></i>Manajemen Air & Drainase</h3>
              <ul>
                <li><b>Jangan buang</b> sampah, minyak atau bahan kimia apa pun ke drainase, selokan atau badan air konsesi.</li>
                <li>Waspadai tanda pencemaran: <b>air berubah warna, lapisan minyak, bau tidak sedap</b> → lapor K3L segera.</li>
                <li>Laporkan <b>rembesan keruh</b> dari timbunan — indikasi erosi/pelepasan logam berat.</li>
                <li><b>Bersihkan kabin</b> dari tanah/lumpur sebelum keluar pit — cegah polusi perjalanan.</li>
              </ul>
            </div>
            <div class="panelbox ok">
              <h3><i></i>Reklamasi Progresif — Topsoil vs Subsoil</h3>
              <ul>
                <li>Reklamasi dilakukan <b>seiring penambangan</b>, bukan di akhir operasi (kewajiban hukum & etis).</li>
                <li><b>Topsoil subur</b> dipisahkan & disimpan dari <b>subsoil</b> — untuk menutup lereng reklamasi agar bisa ditanami kembali.</li>
                <li>Anda membantu dengan: <b>tidak merusak area reklamasi</b> & melaporkan kerusakan vegetasi muda.</li>
                <li>Tempatkan diri dalam <b>siklus hidup tambang</b>: eksploitasi → pemulihan.</li>
              </ul>
            </div>
          </div>
          <div class="footnote">Sumber: Panduan Fondasi K3L Seimbang, Bab 4.</div>
        </div>
      `;
    },
  },

  /* ============================================================
     39 · 5R & INSPEKSI RUTIN (PDF p.65 & p.56)
      ============================================================ */
  {
    type: 'two',
    mod: 'FASILITAS',
    title: '5R & Inspeksi Rutin',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Fasilitas & Lingkungan</div>
          <h2><em>5R</em> & Inspeksi Rutin</h2>
          <div class="two">
            <div class="panelbox">
              <h3><i></i>5R — Budaya Kerja</h3>
              <ul>
                <li><b>1. Ringkas:</b> hapus barang tak perlu</li>
                <li><b>2. Rapi:</b> letak pada tempat ditentukan</li>
                <li><b>3. Resik:</b> bersihkan rutin, hapus debu/sampah</li>
                <li><b>4. Rawat:</b> pertahankan bersih & rapi (RAWAT-RESIK-RAPIH-RAJIN)</li>
                <li><b>5. Rajin (Shitsuke):</b> disiplin berkelanjutan</li>
              </ul>
            </div>
            <div class="panelbox warn">
              <h3><i></i>Inspeksi Rutin — Contoh</h3>
              <ul>
                <li><b>Alat berat:</b> ban, rem, hidrolik, komponen (excavator, dozer, dump truck)</li>
                <li><b>Listrik:</b> kabel, sambungan, panel</li>
                <li><b>Pompa, pipa & saluran:</b> bocor, korosi, kerusakan</li>
                <li>Interval: harian, mingguan, bulanan — checklist terdokumentasi</li>
              </ul>
            </div>
          </div>
        </div>
      `;
    },
  },

  /* ============================================================
     41 · TANGGAP DARURAT (diperkaya PDF p.57-58)
      ============================================================ */
  {
    type: 'two',
    mod: 'DARURAT',
    title: 'Tanggap Darurat',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Darurat & Medis</div>
          <h2><em>Tanggap Darurat</em> & Evakuasi</h2>
          ${Illustrations.darurat()}
          <div class="two">
            <div class="panelbox danger">
              <h3><i></i>Bila Mengetahui Darurat</h3>
              <ul>
                <li><b>Jangan panik — teriakkan “EMERGENCY” 3×</b></li>
                <li>Jika terjadi kebakaran dan Anda mampu: gunakan APAR; bila tidak, segera evakuasi.</li>
                <li><b>Peringatkan orang di sekitar</b> dan minta bantuan.</li>
                <li><b>Format radio 7 poin:</b> Nama Anda → Jenis keadaan darurat → Lokasi → Orang/alat yang terlibat → Jenis kerusakan/cedera → Bantuan yang diperlukan → Pastikan <b>konfirmasi</b> sebelum menutup radio.</li>
                <li>Tunggu konfirmasi — jangan putus komunikasi</li>
              </ul>
            </div>
            <div class="panelbox">
              <h3><i></i>Evakuasi dan Titik Kumpul</h3>
              <ul>
                <li><b>Jangan panik, tetap tenang</b></li>
                <li><b>Muster Point</b> terdekat sesuai rambu — ikuti jalur evakuasi</li>
                <li><b>Jangan meninggalkan Muster Point</b> sampai <b>Tim Emergency / Warden menyatakan "Kondisi Aman"</b></li>
                <li>Headcount oleh muster officer; laporkan orang hilang</li>
                <li>Skenario: kebakaran, alat berat, longsor/mudflow, tumpahan kimia, man overboard, heat stroke, gempa</li>
              </ul>
            </div>
          </div>
        </div>
      `;
    },
  },

  /* ============================================================
     40 · GEMPA BUMI SOP (PDF p.61)
      ============================================================ */
  {
    type: 'checks',
    mod: 'DARURAT',
    title: 'Jika Terjadi Gempa',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Darurat & Medis</div>
          <h2>Jika Terjadi <em>Gempa</em></h2>
          <ul class="checks cols">
            <li><b>Notifikasi rekan kerja</b> segera</li>
            <li>Jika di dalam ruangan: <b>pergi cepat (tidak berlari) & tenang</b> ke luar; perhatikan benda jatuh & lantai tersandung</li>
            <li>Jika tidak dapat keluar tepat waktu: <b>berlindung di bawah meja kuat</b></li>
            <li>Pergi ke <b>titik kumpul terdekat</b></li>
            <li>Setelah gempa: waspadai <b>aftershock & longsoran</b> pit — SWA berlaku</li>
          </ul>
        </div>
      `;
    },
  },

  /* ============================================================
     41 · SIRENE DEMO (Interactive)
      ============================================================ */
  {
    type: 'sireneDemo',
    mod: 'DARURAT',
    title: 'Demo Sirene Site',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Darurat & Medis</div>
          <h2>Demo <em>Sirene Site</em> — Kenali Bunyinya</h2>
          <p class="lead">Tekan tombol di bawah untuk mendengarkan bunyi sirene (TTS Web Speech). Hafalkan polanya — ini bisa menyelamatkan nyawa.</p>
          <div class="siren-demo">
            <button class="siren-btn danger" data-sirene="darurat">
              <span class="sbtn-label"><span class="anim-pulse-soft" style="display:inline-flex">${Icons.get3d('siren', { class: 'ico3d-svg', size: 26 })}</span><span>DARURAT — 3× panjang</span></span>
              <span class="icon">▶</span>
            </button>
            <button class="siren-btn warn" data-sirene="siaga">
              <span class="sbtn-label"><span class="anim-blink-soft" style="display:inline-flex">${Icons.get3d('alert', { class: 'ico3d-svg', size: 26 })}</span><span>SIAGA — putus-putus pendek</span></span>
              <span class="icon">▶</span>
            </button>
            <button class="siren-btn ok" data-sirene="allclear">
              <span class="sbtn-label"><span style="display:inline-flex">${Icons.get3d('shield', { class: 'ico3d-svg', size: 26 })}</span><span>ALL CLEAR — 1× panjang</span></span>
              <span class="icon">▶</span>
            </button>
            <button class="siren-btn" data-sirene="blasting">
              <span class="sbtn-label"><span class="anim-bob" style="display:inline-flex">${Icons.get3d('fire', { class: 'ico3d-svg', size: 26 })}</span><span>BLASTING — pola peledakan</span></span>
              <span class="icon">▶</span>
            </button>
          </div>
        </div>
      `;
    },
    afterRender() { Audio.bindSirene(); },
  },

  /* ============================================================
     42 · P3K & MEDIS + JIKA CEDERA (diperkaya PDF p.59)
      ============================================================ */
  {
    type: 'two',
    mod: 'DARURAT',
    title: 'P3K & Jika Terjadi Cedera',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Darurat & Medis</div>
          <h2><em>P3K</em> & Jika Terjadi Cedera</h2>
          <div class="two">
            <div class="panelbox">
              <h3><i></i>P3K Umum</h3>
              <ul>
                <li>Ketahui lokasi <b>klinik, P3K kit, AED, stretcher, eyewash & shower</b></li>
                <li>Prinsip: <b>aman diri → aman lingkungan → aman korban</b>; jangan jadi korban kedua</li>
                <li>Kontak asam/kimia: bilas ≥ 15 menit</li>
                <li>Heat stroke = darurat: dinginkan & panggil medis</li>
                <li><b>Semua cedera wajib lapor</b> termasuk first aid</li>
              </ul>
            </div>
            <div class="panelbox danger">
              <h3><i></i>Jika Terjadi Cedera Personil</h3>
              <ul>
                <li><b>Wajib hentikan aktivitas</b></li>
                <li>P3K oleh personel terlatih → bawa ke klinik/RS</li>
                <li>Isi & laporkan <b>laporan insiden</b></li>
                <li><b>Cedera serius:</b> bunyikan alarm via telepon/radio, hubungi <b>ERT & ambulans/Emergency LV</b></li>
                <li><b>JANGAN pindahkan korban parah</b> kecuali ada bahaya mendesak</li>
              </ul>
            </div>
          </div>
        </div>
      `;
    },
  },

  /* ============================================================
     43 · JIKA TERJADI KEBAKARAN CARRA/PASS (PDF p.60)
      ============================================================ */
  {
    type: 'two',
    mod: 'DARURAT',
    title: 'Jika Terjadi Kebakaran',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Darurat & Medis</div>
          <h2>Jika Terjadi <em>Kebakaran — C.A.R.R.A & PASS</em></h2>
          <div class="two">
            <div class="panelbox danger">
              <h3><i></i>C.A.R.R.A</h3>
              <ul>
                <li><b>C</b> — Cabut pin pengaman? / <b>A</b> — Bunyikan alarm / Lapor ERT</li>
                <li>Lakukan <b>pemadaman dengan APAR jika mampu</b></li>
                <li><b>Evakuasi area</b> → tunggu di Muster Point terdekat</li>
              </ul>
              <h3 style="margin-top:14px"><i></i>PASS APAR</h3>
              <ul>
                <li><b>P</b>ull — Cabut pin</li>
                <li><b>A</b>im — Arahkan ke sumber api</li>
                <li><b>S</b>queeze — Remas pemicu</li>
                <li><b>S</b>weep — Ratakan ke seluruh sumber api</li>
              </ul>
            </div>
            <div class="panelbox warn">
              <h3><i></i>Prinsip</h3>
              <ul>
                <li>Api kecil & Anda terlatih → coba padamkan</li>
                <li>Api membesar → <b>evakuasi, jangan heroik</b>; tunggu ERT</li>
                <li>Kenali kelas api & APAR sesuai (A/B/C/D/listrik — jangan air untuk logam/listrik)</li>
              </ul>
            </div>
          </div>
        </div>
      `;
    },
  },

  /* ============================================================
     42 · PELAPORAN & JUST CULTURE
     ============================================================ */
  {
    type: 'two',
    mod: 'DARURAT',
    title: 'Pelaporan & Just Culture',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Darurat & Medis</div>
          <h2>Pelaporan & <em>Just Culture</em></h2>
          <div class="two">
            <div class="panelbox">
              <h3><i></i>Wajib Dilaporkan</h3>
              <ul>
                <li>Bahaya / kondisi tidak aman (unsafe condition).</li>
                <li>Perilaku tidak aman (unsafe act).</li>
                <li><b>Near miss</b> (hampir celaka) — sumber pembelajaran terbaik.</li>
                <li>Insiden, cedera, penyakit akibat kerja, kerusakan properti.</li>
                <li>Insiden lingkungan & keamanan.</li>
              </ul>
            </div>
            <div class="panelbox warn">
              <h3><i></i>Just Culture</h3>
              <ul>
                <li>Melapor = dilindungi; <b>tidak ada blame</b> untuk kesalahan yang jujur.</li>
                <li>Yang ditindak tegas: pelanggaran disengaja, sabotase, menyembunyikan insiden.</li>
                <li>TKP dijaga & bukti aman untuk investigasi; saksi dilindungi.</li>
                <li>Hasil investigasi → tindakan perbaikan → <b>safety alert</b> agar tidak terulang.</li>
              </ul>
            </div>
          </div>
          <div class="flow">
            <div class="step">LAPOR SEGERA</div><div class="arr">➜</div>
            <div class="step">CATAT & INVESTIGASI</div><div class="arr">➜</div>
            <div class="step">TINDAK PERBAIKAN</div><div class="arr">➜</div>
            <div class="step">BELAJAR BERSAMA</div>
          </div>
        </div>
      `;
    },
  },

  /* ============================================================
     42B · BUDAYA: PENGHARGAAN & PELAPORAN 24 JAM (K3L Seimbang Bab 6)
      ============================================================ */
  {
    type: 'two',
    mod: 'DARURAT',
    title: 'Penghargaan & Pelaporan 24 Jam',
    render() {
      return `
        <div class="inner">
          <div class="kicker k-teal">Budaya K3L — Sanksi Adil & Apresiasi</div>
          <h2>Dari <em>SWA</em> hingga Penghargaan</h2>
          <p class="lead">Sanksi konsisten menunjukkan aturan berlaku untuk semua. <b>Penghargaan terbuka</b> menunjukkan perilaku apa yang dihargai. Keduanya membangun budaya matang jangka panjang.</p>
          <div class="two">
            <div class="panelbox ok">
              <h3><i></i>Penghargaan Positif</h3>
              <ul>
                <li><b>Juru Kampanye Keselamatan</b> — pelapor bahaya/near miss terbanyak.</li>
                <li><b>Inisiatif Lingkungan</b> — penghemat sumber daya / penurun jejak karbon.</li>
                <li>Pengakuan publik + insentif — menciptakan <b>motivasi intrinsik</b> meniru perilaku baik.</li>
                <li>SWA diproses <b>tanpa menyalahkan</b> — pahami akar masalah, bukan menghukum.</li>
              </ul>
            </div>
            <div class="panelbox warn">
              <h3><i></i>Pelaporan Jujur 24 Jam — Tanpa Menyalahkan</h3>
              <ul>
                <li><b>Definisi insiden luas:</b> LTI/Fatality <b>+</b> near miss <b>+</b> spill lingkungan kecil — semua wajib lapor.</li>
                <li><b>Alur:</b> amankan lokasi bila mampu → first aid → lapor atasan + K3L <b>dalam 24 jam</b>.</li>
                <li>Tujuan: <b>belajar, bukan mencari pelaku</b>. Transparansi = investigasi efektif & cegah terulang.</li>
                <li>Skenario SWA: alat tak layak, kerja tanpa izin/JSA, potensi tumpahan B3 — <b>hentikan tanpa takut</b>.</li>
              </ul>
            </div>
          </div>
          <div class="footnote">Sumber: Panduan Fondasi K3L Seimbang, Bab 6.</div>
        </div>
      `;
    },
  },

  /* ============================================================
     43 · CAMP & TRANSPORTASI
     ============================================================ */
  {
    type: 'two',
    mod: 'PENUNJANG',
    title: 'Camp & Transportasi',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Penunjang</div>
          <h2><em>Camp, Mess</em> & Transportasi</h2>
          <div class="two">
            <div class="panelbox">
              <h3><i></i>Aturan Camp & Mess</h3>
              <ul>
                <li>Kenali jalur evakuasi, muster point, APAR, dan penerangan darurat camp.</li>
                <li>Larangan memasak di kamar; listrik aman (tanpa kabel rusak/overload).</li>
                <li>Higiene makanan & air minum; kelola sampah; jaga kebersihan bersama.</li>
                <li>Alkohol/narkoba/judi dilarang di camp; tamu wajib izin.</li>
                <li>Istirahat cukup — kualitas tidur = keselamatan di shift berikutnya.</li>
              </ul>
            </div>
            <div class="panelbox warn">
              <h3><i></i>Manajemen Perjalanan</h3>
              <ul>
                <li>Perjalanan di site hanya menggunakan kendaraan yang telah diinspeksi dan pengemudi yang berwenang.</li>
                <li>Sabuk pengaman wajib digunakan; dilarang menggunakan ponsel; susun rencana rute serta lapor berangkat dan tiba (<i>check-in/check-out</i>).</li>
                <li>Perjalanan laut: <b>jaket pelampung</b> wajib digunakan dan cuaca harus diperhatikan; perjalanan malam dibatasi sesuai aturan site.</li>
                <li>Kendaraan dilengkapi kotak P3K, APAR, dan alat komunikasi.</li>
              </ul>
            </div>
          </div>
        </div>
      `;
    },
  },

  /* ============================================================
     45 · KEAMANAN & ETIKA (diperkaya PDF p.68 BRIMOB)
      ============================================================ */
  {
    type: 'two',
    mod: 'PENUNJANG',
    title: 'Keamanan & Etika',
    render() {
      return `
        <div class="inner">
          <div class="kicker">Penunjang</div>
          <h2>Keamanan, <em>Komunitas</em> & Etika</h2>
          <div class="two">
            <div class="panelbox danger">
              <h3><i></i>Pengelolaan Keamanan</h3>
              <ul>
                <li><b>Aparat keamanan / BRIMOB</b> dioperasikan sesuai SOP pengamanan tambang SMI — hormati instruksi</li>
                <li><b>Tidak ada perjudian</b> di area operasional SMI (judi = pelanggaran berat, langsung SP3/PHK)</li>
                <li><b>Tidak ada intimidasi</b> di area operasional SMI — laporkan intimidasi ke HRGA/HSE</li>
                <li>Patuhi akses & badge system; laporkan orang tak dikenal ke security</li>
                <li>Dilarang pencurian ore/aset, penambangan ilegal, penyelundupan</li>
              </ul>
            </div>
            <div class="panelbox">
              <h3><i></i>Komunitas & Etika</h3>
              <ul>
                <li>Hormati masyarakat: budaya, adat, situs sakral, mata pencaharian</li>
                <li>Tidak ada kekerasan, pelecehan seksual, bullying, diskriminasi</li>
                <li>Anti suap & gratifikasi; tolak & lapor</li>
                <li><b>Whistleblowing</b> dijamin kerahasiaan & perlindungan</li>
                <li>Medsos: larang sebar informasi rahasia / foto area kritis tanpa izin</li>
              </ul>
            </div>
          </div>
          <div class="footnote">Patuhi instruksi petugas keamanan dan laporkan intimidasi ke HRGA/HSE.</div>
        </div>
      `;
    },
  },

  /* ============================================================
     45 · STUDI KASUS
     ============================================================ */
  {
    type: 'scenarios',
    mod: 'KASUS',
    title: 'Studi Kasus',
    render() {
      const cases = [
        {
          tag: 'INSIDEN FATAL',
          title: 'Longsor dinding pit saat hujan',
          story: 'Seorang operator truk jungkit (dump truck) melanjutkan pemuatan di area pit padahal hujan deras mulai turun dan rambu “Licin/Awas Geoteknik” sudah terpasang. Dinding pit (highwall) mengalami aliran lumpur (mudflow) dan menimbun unit. Operator tidak sempat keluar.',
          takeaway: 'Tanda bahaya di pit bukan pajangan. Setelah hujan, <b>hentikan pekerjaan</b> dan tunggu inspeksi geoteknik — tidak ada bijih yang senilai nyawa.',
        },
        {
          tag: 'HAMPIR CELAKA',
          title: 'Tabrakan kendaraan ringan melawan truk jungkit di persimpangan jalan angkut',
          story: 'Sebuah kendaraan ringan menyeberang tanpa panggilan radio di jalan angkut (haul road) yang aktif. Truk jungkit bermuatan penuh mengerem mendadak; material tumpah dan nyaris menabrak kendaraan ringan. Tidak ada korban, tetapi jarak keduanya kurang dari 1 m saat berhenti.',
          takeaway: 'Selalu <b>panggil radio dan lakukan kontak mata</b> sebelum memasuki atau menyeberangi jalan angkut. Jangan menganggap operator alat berat “pasti melihat Anda”.',
        },
        {
          tag: 'INSIDEN',
          title: 'Heat stroke di area timbunan siang hari',
          story: 'Seorang pekerja kontrak mengalami pusing, kebingungan, dan kulit panas setelah 4 jam bekerja di timbunan (stockpile) terbuka. Rekan kerja membawanya ke area teduh dan menghubungi klinik — diagnosis: heat stroke. Ia pulih total setelah 3 hari rawat inap.',
          takeaway: '<b>Kenali tanda heat stroke</b>: bingung, kulit kering dan panas, serta tidak berkeringat. Hidrasi, rotasi tugas, dan saling memantau menyelamatkan nyawa.',
        },
        {
          tag: 'KECELAKAAN',
          title: 'Tangan terjepit konveyor karena melewati pengaman',
          story: 'Untuk mempercepat pembersihan corong (chute), seorang pekerja menonaktifkan kunci pengaman (interlock) dan memasukkan tangan ke area bagian bergerak. Tangan kanan terjepit puli dan dua jari harus diamputasi.',
          takeaway: '<b>Jangan melewati perangkat keselamatan.</b> LOTO wajib dilakukan — sesederhana apa pun tugasnya.',
        },
        {
          tag: 'INSIDEN LINGKUNGAN',
          title: 'Tumpahan oli 20 liter mencemari drainase',
          story: 'Seorang operator melihat selang hidrolik bocor dan menetes ke tanah, tetapi menunda melapor karena “hanya tetesan”. Hujan sore membawa oli ke drainase dan kolam pengendap. Pembersihan memakan tiga hari, perusahaan menerima teguran, dan operator harus menjelaskan kelalaiannya.',
          takeaway: 'Tumpahan kecil yang dibiarkan menjadi krisis lingkungan. <b>Pasang pembatas, gunakan spill kit, dan lapor dalam 24 jam</b> — sekecil apa pun tumpahan B3.',
        },
      ];
      return `
        <div class="inner">
          <div class="kicker">Studi Kasus</div>
          <h2>Pelajaran dari <em>Insiden Nyata</em></h2>
          <p class="lead">Lima skenario industri nikel — empat keselamatan dan satu lingkungan — dipelajari agar tidak terulang di site kita. Bacalah perlahan dan renungkan: “Apa yang akan saya lakukan?”</p>
          <div class="scenarios stagger">
            ${cases.map(c => `
              <div class="scenario">
                <span class="scen-tag">${c.tag}</span>
                <h4>${c.title}</h4>
                <p>${c.story}</p>
                <div class="takeaway"><b style="color:var(--teal)">Pelajaran:</b> ${c.takeaway}</div>
              </div>`).join('')}
          </div>
        </div>
      `;
    },
  },

  /* ============================================================
     46 · POST-TEST
     ============================================================ */
  {
    type: 'posttest',
    mod: 'EVAL',
    title: 'Post-test & Sertifikasi',
    render() { return '<div id="quizContainer"></div>'; },
    afterRender() { Quiz.renderPosttest(); },
  },

  /* ============================================================
     47 · TANDA TANGAN
     ============================================================ */
  {
    type: 'signature',
    mod: 'EVAL',
    title: 'Tanda Tangan Komitmen',
    render() {
      const u = State.get('user') || {};
      return `
        <div class="inner">
          <div class="kicker">Evaluasi</div>
          <h2>Tanda Tangan <em>Komitmen K3L</em></h2>
          <div class="bigquote">
            "Saya berkomitmen: bekerja selamat, menjaga rekan saya, dan tidak pernah mengabaikan bahaya.
            Tidak ada target produksi yang sebanding dengan nyawa manusia."
            <small>— Ikrar Rekrutan Baru PT. Sifang Mining Indonesia</small>
          </div>
          <ul class="checks cols" style="margin-top:22px">
            <li>Saya akan memakai APD, mematuhi prosedur, dan menghormati setiap rambu.</li>
            <li>Saya akan melapor setiap bahaya, near miss & <b>spill lingkungan</b> dalam <b>24 jam</b> — hari ini dan seterusnya.</li>
            <li>Saya akan menggunakan <b>Stop Work Authority</b> untuk bahaya keselamatan <b>dan</b> dampak lingkungan — tanpa ragu, tanpa takut retaliasi.</li>
            <li>Saya akan menjaga drainase, TPS B3 & area reklamasi — <b>pulang selamat & operasi berkelanjutan</b>, dan memastikan rekan saya juga demikian.</li>
          </ul>

          <div class="two" style="margin-top:26px">
            <div class="panelbox">
              <h3><i></i>Identitas Peserta</h3>
              <div style="display:grid; gap:10px">
                <input id="sig-name" placeholder="Nama Lengkap" value="${u.name || ''}" style="padding:10px 12px; border-radius:10px; border:1px solid var(--line-2); background:var(--surface); color:var(--text); font-family:inherit; font-size:13px"/>
                <input id="sig-nik" placeholder="NIK / ID Karyawan" value="${u.nik || ''}" style="padding:10px 12px; border-radius:10px; border:1px solid var(--line-2); background:var(--surface); color:var(--text); font-family:inherit; font-size:13px"/>
                <input id="sig-pos" placeholder="Jabatan / Posisi" value="${u.position || ''}" style="padding:10px 12px; border-radius:10px; border:1px solid var(--line-2); background:var(--surface); color:var(--text); font-family:inherit; font-size:13px"/>
                <input id="sig-dept" placeholder="Departemen / Kontraktor" value="${u.department || ''}" style="padding:10px 12px; border-radius:10px; border:1px solid var(--line-2); background:var(--surface); color:var(--text); font-family:inherit; font-size:13px"/>
              </div>
            </div>
            <div class="panelbox warn">
              <h3><i></i>Tanda Tangan Digital</h3>
              <div class="sig-wrap">
                <canvas id="sigCanvas" class="sig-canvas"></canvas>
                <div class="sig-meta">
                  <span id="sigDate">— / — / —</span>
                  <span>TTD Peserta</span>
                </div>
              </div>
              <div class="sig-actions">
                <button class="navbtn" id="sigClear">Bersihkan</button>
                <button class="navbtn primary" id="sigSave" style="flex:1">Simpan Tanda Tangan</button>
              </div>
            </div>
          </div>

          <div style="text-align:center; margin-top:34px;">
            <p class="lead" style="text-align:center; margin:0 auto;">
              <b style="color:var(--text)">Selamat bergabung di keluarga besar PT. Sifang Mining Indonesia.</b><br/>
              Selamat bekerja — dan pulang dengan selamat, setiap hari. 🤝
            </p>
          </div>
        </div>
      `;
    },
    afterRender() { Signature.init(); },
  },

  /* ============================================================
     48 · SERTIFIKAT
     ============================================================ */
  {
    type: 'cert',
    mod: 'EVAL',
    title: 'Sertifikat Induksi',
    render() { return '<div id="certContainer"></div>'; },
    afterRender() { Certificate.render(); },
  },

  /* ============================================================
     49 · PENUTUP / TERIMA KASIH
     ============================================================ */
  {
    type: 'closing',
    mod: 'PENUTUP',
    title: 'Terima Kasih',
    render() {
      return `
        <div class="inner" style="text-align:center; padding-top:30px">
          <div class="logo-big logo-png" style="background-image:url('assets/logo-full.png')" role="img" aria-label="PT. Sifang Mining Indonesia"></div>
          <h1 style="margin-top:14px">Terima <em>Kasih</em></h1>
          <div class="hazard" style="margin-left:auto;margin-right:auto;"></div>
          <p class="lead" style="margin:14px auto 0; text-align:center; max-width:680px;">
            Anda telah menyelesaikan induksi K3L. Bawa pulang tiga hal:
            <b style="color:var(--text)">Komitmen</b>, <b style="color:var(--text)">Kompetensi</b>, dan <b style="color:var(--text)">Kewaspadaan</b>.
          </p>
          <div class="badges">
            <span class="badge gold">ZERO HARM</span>
            <span class="badge teal">SAFETY FIRST</span>
            <span class="badge blue">LIFE-SAVING RULES</span>
            <span class="badge">INDUKSI LULUS</span>
          </div>
          <div class="bigquote" style="margin-top:34px; text-align:left;">
            “Pulang selamat hari ini, kembali bekerja besok hari. Itu satu-satunya target yang benar.”
            <small>— HSE Departemen, PT. Sifang Mining Indonesia</small>
          </div>
        </div>
      `;
    },
    afterRender() { Effects.celebrate(); },
  },
];
