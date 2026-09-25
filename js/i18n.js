/* ============================================================
   I18N — Dual bahasa Indonesia (id) & China (zh, Sederhana)
   - I18n.lang()/setLang()/toggle() — status di State.settings.lang
   - I18n.t(k, vars) — string chrome UI
   - I18n.title(slide)/mod(m) — judul & modul via peta
   - I18n.applyTo(root, toLang) — pass dua arah:
     h1/h2/p.lead utuh (ZH_H/ZH_LEAD) + simpul teks eksak (ZH_TEXT)
   - Peta balik (REV_*) dibangun otomatis dari nilai unik,
     sehingga swap zh→id memulihkan teks asli tanpa render ulang.
   Kebijakan: teks navigasi/struktural bilingual; isi penjelasan
   rinci tetap Indonesia (tahap 2).
   ============================================================ */

const I18n = (() => {
  'use strict';

  const MOD_ZH = {
    'PEMBUKA': '开场', 'PROFIL': '公司概况', 'ATURAN': '规章制度',
    'RISIKO': '风险管理', 'APD': '劳保用品', 'KESEHATAN': '职业健康',
    'AREA': '关键区域', 'KERJA': '危险作业', 'FASILITAS': '设施环境',
    'DARURAT': '应急医疗', 'PENUNJANG': '后勤保障', 'KASUS': '事故案例',
    'EVAL': '考核评估', 'PENUTUP': '结尾',
  };

  const TITLE_ZH = {
    'Selamat Datang': '欢迎',
    'Agenda Induksi': '培训议程',
    'Informasi Umum & Tata Tertib': '通用信息与培训纪律',
    'Tujuan & Ruang Lingkup': '培训目的与范围',
    'Pengetahuan K3 & Lambang K3': 'K3知识与K3标志',
    'Fondasi K3L Seimbang': 'K3L平衡基础',
    'Mengapa Ini Penting': '为什么这很重要',
    'Pre-test': '入职前测试',
    'Profil Perusahaan': '公司简介',
    'Risiko Spesifik Nikel Laterit': '红土镍矿特定风险',
    'Dasar Hukum & Standar': '法律依据与标准',
    'Kebijakan & Nilai Perusahaan': '公司K3L政策与价值观',
    'Struktur Organisasi SMI': 'SMI组织架构',
    'Life-Saving Rules': '救命规则',
    'Golden Rules & Disiplin SPDK': '金科玉律与员工纪律',
    'Stop Work Authority': '停止作业授权',
    'Hak & Kewajiban (UU No. 1 Tahun 1970)': '权利与义务 (1970年第1号法)',
    'Kewajiban Pengawas Operasional': '作业监督员的职责',
    'Aturan Site & Perilaku': '矿区规章与行为规范',
    'Peta & Area Site': '矿区地图与区域',
    'Persyaratan Masuk Area Tambang': '进入矿区的要求',
    'SIMPER / Mine Permit & Aturan Unit': '公司驾照/采矿许可与设备规定',
    'Peran & Tanggung Jawab Pengemudi': '驾驶员/操作员的角色与责任',
    'Perlengkapan K3 di Unit': '设备上的安全装备',
    'Rambu, Warna & Alarm': '标志、颜色与警报',
    'Komunikasi & Radio': '通讯与无线电',
    'Manajemen Risiko': '风险管理',
    'Matriks Risiko (5×5)': '风险矩阵 (5×5)',
    'Izin Kerja (PTW)': '作业许可',
    'SIMOPS & MOC': '联合作业与变更管理',
    'APD Wajib': '必备劳保用品',
    'Pemilihan APD (Interaktif)': '劳保用品选择 (互动)',
    'APD Spesifik & Pengelolaan': '专项劳保与管理',
    'Fit to Work & Fatigue': '适岗状态与疲劳管理',
    'Bahaya Kesehatan Nikel': '镍矿健康危害',
    'Kesehatan Umum, Fatigue & Heat Stress': '通用健康、疲劳与热应激',
    'Traffic & Haul Road': '交通与运矿道路',
    'Isyarat Klakson & Jarak Aman': '喇叭信号与安全距离',
    'Kategori Kecelakaan Tambang': '矿山事故类别',
    'Penyebab Kecelakaan 88/10/2': '事故原因 88/10/2',
    'Bahaya vs Risiko': '危险源与风险',
    'Kondisi & Tindakan Tidak Aman': '不安全条件与不安全行为',
    'Aktivitas Risiko Tinggi Area Tambang': '矿区高风险活动',
    'Hirarki Pengendalian & Mitigasi': '风险控制层级与缓解',
    'P5M & Safety Talk': 'P5M与安全讲话',
    'JSEA — SOP — IK': 'JSEA—SOP—作业指导书',
    'Training, Rambu & SDS': '培训、标志与SDS',
    'Alat Berat': '重型设备',
    'Geoteknik & Pit': '地质技术与采坑',
    'LOTO': '上锁挂牌',
    'Keselamatan Listrik': '电气安全',
    'Kerja di Ketinggian': '高处作业',
    'Ruang Terbatas': '受限空间',
    'Hot Work & APAR': '动火作业与灭火器',
    'Lifting & Rigging': '起重与索具',
    'Manual Handling — Bahaya': '人工搬运——危害',
    'Manual Handling — Kontrol': '人工搬运——管控',
    'Benda Jatuh & Ketinggian — Tambahan': '落物与高处——补充',
    'Kontrol Listrik & Tempat Merokok': '电气管控与吸烟区',
    'Galian & Parit': '基坑与沟渠',
    'Bahan Kimia & B3': '化学品与B3废物',
    'Tabel Limbah B3 Site Nikel': '镍矿现场B3废物表',
    'Plant & Conveyor': '选矿厂与皮带机',
    'Smelter / HPAL / TSF / Jetty': '冶炼/高压酸浸/尾矿库/码头',
    'Fuel Farm': '油库',
    'Perlindungan Lingkungan': '环境保护',
    'Air, Reklamasi & Siklus Hidup': '水、复垦与矿山生命周期',
    '5R & Inspeksi Rutin': '5R与日常检查',
    'Tanggap Darurat': '应急响应',
    'Jika Terjadi Gempa': '发生地震时',
    'Demo Sirene Site': '现场警笛演示',
    'P3K & Jika Terjadi Cedera': '急救与人员受伤时',
    'Jika Terjadi Kebakaran': '发生火灾时',
    'Pelaporan & Just Culture': '报告与公正文化',
    'Penghargaan & Pelaporan 24 Jam': '表彰与24小时报告',
    'Camp & Transportasi': '营地与交通',
    'Keamanan & Etika': '安保与道德',
    'Studi Kasus': '事故案例',
    'Post-test & Sertifikasi': '结业考试与认证',
    'Tanda Tangan Komitmen': '承诺签名',
    'Sertifikat Induksi': '培训证书',
    'Terima Kasih': '谢谢',
  };

  /* h1/h2 utuh (teks dinormalisasi) -> HTML (boleh <em>/<br/>/<span>) */
  const ZH_H = {
    'PROGRAM INDUKSI K3LPERTAMBANGAN NIKEL OPEN PIT': '入职培训 <em>K3L</em><br/>镍露天开采',
    'Terima Kasih': '<em>谢谢</em>',
    'Agenda Induksi K3L': '培训议程 <em>K3L</em>',
    'Informasi Umum — Tata Tertib Induksi': '通用信息——培训纪律',
    'Tujuan & Ruang Lingkup Induksi': '培训目的与范围',
    'Apa itu K3? Mengapa Utama?': '什么是K3？为何至关重要？',
    'Dua Janji Seimbang — Selamat & Berkelanjutan': '<em>平衡</em>的两个承诺——平安与可持续',
    'Mengapa Induksi K3L Itu Penting?': '为什么<em>K3L入职培训</em>如此重要？',
    'Profil PT. Sifang Mining Indonesia': '<em>印尼四方矿业</em>公司简介',
    'Risiko Dominan Tambang Nikel Laterit': '红土镍矿<em>主要</em>风险',
    'Dasar Hukum & Standar K3L': '法律依据与<em>K3L标准</em>',
    'Kebijakan K3L & Nilai Perusahaan': '<em>K3L</em>政策与公司价值观',
    'Struktur Organisasi K3L — PT Sifang Mining Indonesia': '<em>K3L组织架构</em>——四方矿业',
    'Life-Saving Rules — 100% Wajib Dipahami': '<em>救命规则</em>——必须100%掌握',
    'Golden Rules & SPDK — Komitmen Disiplin': '<em>金科玉律</em>与SPDK——纪律承诺',
    'Stop Work Authority (SWA)': '<em>停止作业授权</em>(SWA)',
    'Hak & Kewajiban Anda — UU No. 1 Tahun 1970 BAB VIII Pasal 12': '您的权利与义务——1970年第1号法第八章第12条',
    'Kewajiban Pengawas Operasional': '<em>作业监督员</em>的职责',
    'Aturan Site dan Perilaku Wajib': '矿区规章与<em>必守行为</em>',
    'Kenali Area Site — SMI Nikel Open Pit': '认识<em>矿区</em>——SMI镍露天矿',
    'Persyaratan Masuk Area Tambang': '<em>准入要求</em>',
    'SIMPER & Mine Permit': '<em>SIMPER</em>与采矿许可',
    'Peran Pengemudi / Operator': '<em>驾驶员/操作员</em>的角色',
    'Perlengkapan K3 Wajib di Unit': '设备上必备的<em>K3装备</em>',
    'Rambu, Warna & Alarm': '标志、颜色与<em>警报</em>',
    'Komunikasi & Radio Site': '通讯与<em>现场无线电</em>',
    'Manajemen Risiko di Lapangan': '现场<em>风险</em>管理',
    'Matriks Risiko 5×5 (Interaktif)': '<em>风险矩阵5×5</em>(互动)',
    'Izin Kerja (Permit to Work)': '作业许可<em>(PTW)</em>',
    'SIMOPS & Management of Change': 'SIMOPS与<em>变更管理</em>',
    'APD Wajib di Seluruh Area Site': '全矿区必备<em>劳保</em>',
    'Pemilihan APD — Alat Bantu Interaktif': '<em>劳保</em>选择——互动工具',
    'APD Spesifik Tugas & Pengelolaan': '<em>专项劳保</em>与管理',
    'Fit to Work & Manajemen Kelelahan': '<em>适岗状态</em>与疲劳管理',
    'Bahaya Kesehatan Khas Nikel': '镍矿特有<em>健康</em>危害',
    'Kesehatan Umum — Fatigue & Heat Stress': '<em>通用健康</em>——疲劳与热应激',
    'Keselamatan Traffic & Haul Road': '<em>交通与运矿道路</em>安全',
    'Klakson & Jarak Aman Beriringan': '<em>喇叭</em>与跟车安全距离',
    'Kategori & Jenis Kecelakaan': '事故类别与<em>种类</em>',
    'Penyebab Kecelakaan — Data Kecelakaan': '<em>事故</em>原因——事故数据',
    'Bahaya vs Risiko — Definisi Dasar': '<em>危险源</em>与<em>风险</em>——基本定义',
    'Kondisi & Tindakan Tidak Aman': '不安全条件与<em>不安全行为</em>',
    'Aktivitas Risiko Tinggi di Area Tambang': '矿区<em>高风险</em>活动',
    'Hirarki & Mitigasi Risiko': '层级与<em>风险缓解</em>',
    'P5M — Pembicaraan 5 Menit': '<em>P5M</em>——五分钟讲话',
    'JSEA, SOP, IK — Pengertian & Perbedaan': '<em>JSEA、SOP、IK</em>——含义与区别',
    'Training, Rambu & Bahan Kimia': '<em>培训、标志与化学品</em>',
    'Keselamatan Alat Berat (HE)': '重型设备<em>(HE)</em>安全',
    'Geoteknik & Open Pit Laterit': '地质技术与<em>红土露天坑</em>',
    'LOTO — Lock Out Tag Out': '<em>LOTO</em>——上锁挂牌',
    'Keselamatan Listrik': '<em>电气</em>安全',
    'Kerja di Ketinggian': '<em>高处</em>作业',
    'Ruang Terbatas (Confined Space)': '<em>受限空间</em>',
    'Hot Work & Pencegahan Kebakaran': '<em>动火作业</em>与防火',
    'Lifting & Rigging': '<em>起重</em>与索具',
    'Manual Handling — Bahaya & Dampak': '<em>人工搬运</em>——危害与后果',
    'Manual Handling — Kontrol & Teknik Benar': '<em>人工搬运</em>——管控与正确方法',
    'Benda Jatuh & Trauma Gantung': '落物与<em>悬吊创伤</em>',
    'Kontrol Listrik Detail & Area Merokok': '<em>电气</em>细节管控与吸烟区',
    'Galian & Parit (Excavation)': '<em>基坑</em>与沟渠',
    'Bahan Kimia & B3': '<em>化学品与B3</em>',
    'Tabel Limbah B3 — Kenali & Buang Benar': '<em>B3废物表</em>——识别与正确处置',
    'Plant, Crusher & Conveyor': '<em>选矿厂</em>、破碎与皮带机',
    'Fasilitas Khusus SESUAI KONFIGURASI SITE': '特殊设施<span class="tag cond">按现场配置</span>',
    'Fuel Farm & Bahan Mudah Terbakar': '<em>油库</em>与易燃物',
    'Perlindungan Lingkungan': '<em>环境</em>保护',
    'Air, Reklamasi & Siklus Hidup Tambang': '水、<em>复垦</em>与矿山生命周期',
    '5R & Inspeksi Rutin': '<em>5R</em>与日常检查',
    'Tanggap Darurat & Evakuasi': '<em>应急响应</em>与疏散',
    'Jika Terjadi Gempa': '发生<em>地震</em>时',
    'Demo Sirene Site — Kenali Bunyinya': '现场警笛演示——辨认<em>警笛声</em>',
    'P3K & Jika Terjadi Cedera': '<em>急救</em>与人员受伤时',
    'Jika Terjadi Kebakaran — C.A.R.R.A & PASS': '发生<em>火灾——C.A.R.R.A与PASS</em>',
    'Pelaporan & Just Culture': '报告与<em>公正文化</em>',
    'Dari SWA hingga Penghargaan': '从<em>SWA</em>到表彰',
    'Camp, Mess & Transportasi': '<em>营地食堂</em>与交通',
    'Keamanan, Komunitas & Etika': '安保、<em>社区</em>与道德',
    'Pelajaran dari Insiden Nyata': '从<em>真实事件</em>中学习',
    'Tanda Tangan Komitmen K3L': '<em>K3L承诺</em>签名',
  };

  /* p.lead utuh -> HTML terjemahan (boleh <b>) */
  const ZH_LEAD = {
    'Sebelas blok materi yang wajib Anda kuasai. Tidak ada bagian yang boleh dilewati.': '必须掌握十一个模块，缺一不可。',
    'Agar induksi berjalan efektif, setiap peserta wajib mematuhi tata tertib berikut selama & setelah induksi.': '为保证培训效果，每位学员在培训期间及之后都必须遵守以下纪律。',
    'K3L bukan sekadar aturan administratif, melainkan nilai inti (core value) yang mendefinisikan identitas operasional PT. Sifang Mining Indonesia. Keselamatan & lingkungan adalah simbiosis — bukan trade-off.': 'K3L不只是一套行政规定，而是定义印尼四方矿业运营特质的<b style="color:var(--text)">核心价值</b>。安全与环境是<b style="color:var(--text)">共生关系</b>——而非取舍。',
    'Data keselamatan industri pertambangan global — pengingat mengapa setiap prosedur ada.': '全球矿业安全数据——提醒我们每条程序存在的意义。',
    'Kenali tempat Anda bekerja: karakteristik site menentukan bahaya yang akan Anda hadapi setiap hari.': '了解你的工作场所：现场特点决定你每天面对的危险。',
    'Aktivitas open pit, crushing plant, stockpile & HPAL membawa risiko unik. Setiap pekerja — apa pun jabatannya — wajib memahami empat risiko dominan ini sebelum terpapar.': '露天开采、破碎厂、堆场和<b>高压酸浸</b>带来独特风险。无论岗位，每位员工上岗前必须了解这四大主要风险。',
    'Seluruh aturan di site ini berlandaskan regulasi nasional dan standar internasional tambang dan lingkungan.': '本矿区所有规章均依据国家法规及矿山与环境国际标准。',
    'Sepuluh aturan penyelamat nyawa. Nilai post-test bagian LSR harus 100% untuk lulus induksi.': '十条救命规则。结业考试LSR部分必须<b style="color:var(--amber)">100%</b>正确才能通过入职培训。',
    'Setiap orang — dari level terendah hingga manajemen — memiliki hak dan kewajiban menghentikan pekerjaan yang dianggap tidak aman. Perusahaan menjamin tidak ada retaliasi bagi penghentian kerja yang beritikad baik.': '每个人——从一线到管理层——都有<b>权利和义务</b>叫停不安全作业。公司保证善意停工<b>不受报复</b>。',
    'Sepuluh aturan ini melindungi nyawa, lingkungan, dan keberlangsungan kerja Anda. Pelanggaran bukan sekadar teguran — berjenjang hingga pemutusan hubungan kerja dan proses hukum.': '这十条规章保护你的生命、环境和工作。违规不只是警告——逐级直至解除劳动关系并追究法律责任。',
    'Peta site terkini (scale 1:40 m UTI, Jetty CDS Slot) dibagikan saat induksi lapangan.': '最新矿区地图将在现场入职时发放。',
    'Klik sel untuk melihat contoh bahaya pada kombinasi tingkat kemungkinan (L) dan keparahan (K) tersebut.': '点击单元格，查看该可能性(L)与严重度(K)组合的危险实例。',
    'Izin kerja adalah pemeriksaan terakhir sebelum pekerjaan berbahaya dimulai. Izin memastikan bahaya telah dinilai, pengendali terpasang, dan semua pihak memahami perannya.': '作业许可是危险作业开始前的最后一道检查，确认危险已评估、措施已落实、各方明确职责。',
    'Lima APD dasar ini wajib dipakai sebelum memasuki area operasional. Periksa kelayakan setiap hari: retak, aus, kedaluwarsa, atau kontaminasi berarti diganti — bukan diperbaiki sendiri.': '进入作业区前必须佩戴这五件基本劳保。每天检查：开裂、磨损、过期或污染即更换——不得自行修理。',
    'Pilih tugas, lalu cek APD yang dibutuhkan. Sistem akan memberi tahu bila APD Anda belum lengkap.': '选择作业，再核对所需劳保。若不齐全，系统会提醒。',
    'Definisi: kejadian tidak diinginkan & tidak direncanakan dalam kegiatan tambang (terbuka/bawah tanah) yang benar-benar terjadi, ada bukti, & diakibatkan usaha tambang.': '定义：在采矿活动（露天/井下）中真实发生、有证据、由采矿作业导致的非期望非计划事件。',
    'Rutin harian mencakup Toolbox Meeting dan P5M (Pembicaraan 5 Menit) sebelum pekerjaan dimulai.': '每日例行包括班前会和开工前<b>P5M（五分钟讲话）</b>。',
    'Laterit (saprolit & limonit) berkekuatan seperti tanah — bukan batuan padat. Hujan tropis menurunkan kuat geser signifikan. Jenuh air = lumpur cair yang menelan alat. Ini bahaya nomor satu pit nikel.': '红土（腐泥土和褐铁矿）强度如<b>土壤</b>——并非硬岩。热带降雨大幅降低<b>抗剪强度</b>。饱水即成吞噬设备的泥浆。这是镍矿采坑头号危险。',
    'Limbah B3 dilarang dibuang sembarangan, dibakar terbuka atau dikubur. Hanya di TPS B3 berizin. Pelanggaran = sanksi berat perusahaan & individu.': 'B3废物<b>严禁乱倒、露天焚烧或填埋</b>，只能送往<b>持证B3暂存点</b>。违规将重罚公司与个人。',
    'Lingkungan bukan domain ahli saja — melainkan tanggung jawab bersama setiap pekerja. Dua pilar yang wajib Anda kuasai: manajemen air & reklamasi progresif.': '环境不只是专家的事——而是每位员工的<b>共同责任</b>。你必须掌握两大支柱：水管理与渐进式复垦。',
    'Tekan tombol di bawah untuk mendengarkan bunyi sirene (TTS Web Speech). Hafalkan polanya — ini bisa menyelamatkan nyawa.': '点击下方按钮收听警笛声（语音合成）。记住信号——关键时刻能救命。',
    'Sanksi konsisten menunjukkan aturan berlaku untuk semua. Penghargaan terbuka menunjukkan perilaku apa yang dihargai. Keduanya membangun budaya matang jangka panjang.': '一致的处罚表明规则人人平等，<b>公开表彰</b>表明公司推崇何种行为，两者共同营造成熟的安全文化。',
    'Selamat datang, Rekrutan Baru. Keselamatan Anda adalah prioritas utama kami. Ikuti seluruh materi ini hingga tuntas sebelum memasuki area site.': '欢迎，新同事。您的安全是我们的首要任务。进入现场前请学完所有课程。',
    'Selamat bergabung di keluarga besar PT. Sifang Mining Indonesia. Selamat bekerja — dan pulang dengan selamat, setiap hari. 🤝': '欢迎加入印尼四方矿业大家庭。祝工作顺利——每天平安回家。🤝',
    'Anda telah menyelesaikan induksi K3L. Bawa pulang tiga hal: Komitmen, Kompetensi, dan Kewaspadaan.': '你已完成K3L入职培训，带走三样东西：承诺、能力和警觉。',
  };

  /* Simpul teks eksak -> terjemahan (hanya yang struktural) */
  const ZH_TEXT = {
    'Pembuka': '开场',
    'Pembuka — Ground Rules': '开场——基本规则',
    'Pembuka — Dasar K3': '开场——K3基础',
    'Fondasi K3L Seimbang — Core Value SMI': 'K3L平衡基础——SMI核心价值',
    'Profil & Kebijakan': '公司概况与政策',
    'Profil & Kebijakan — Konteks Nikel Laterit': '公司概况与政策——红土镍矿背景',
    'Profil & Kebijakan — Diselaraskan SMI': '公司概况与政策——SMI版',
    'Profil & Kebijakan — Adaptasi SMI': '公司概况与政策——SMI适用版',
    'Aturan & Perilaku — Hak Hukum': '规章与行为——法律权利',
    'Aturan & Perilaku': '规章制度与行为',
    'Aturan & Perilaku — Akses Unit': '规章制度与行为——设备准入',
    'Aturan & Perilaku — Unit Safety': '规章制度与行为——设备安全',
    'Manajemen Risiko': '风险管理',
    'Manajemen Risiko — Heinrich Ratio': '风险管理——海因里希比例',
    'APD & Kesehatan': '劳保与健康',
    'Kesehatan': '健康',
    'Risiko Kritikal Area': '关键区域风险',
    'Pekerjaan Berbahaya': '危险作业',
    'Fasilitas & Lingkungan': '设施与环境',
    'Fasilitas & Lingkungan — TPS B3 Berizin': '设施与环境——持证B3暂存点',
    'Lingkungan — Tata Kelola Air & Lahan': '环境——水土管理',
    'Darurat & Medis': '应急与医疗',
    'Budaya K3L — Sanksi Adil & Apresiasi': 'K3L文化——公正奖惩',
    'Penunjang': '后勤保障',
    'Studi Kasus': '事故案例',
    'Evaluasi': '考核评估',
    '01 · Profil & Kebijakan': '01 · 公司概况与政策',
    'Profil perusahaan, dasar hukum, kebijakan K3L, Life-Saving Rules, dan Stop Work Authority.': '公司简介、法律依据、K3L政策、救命规则与停工授权。',
    '02 · Aturan & Perilaku': '02 · 规章与行为',
    'Hak & kewajiban, aturan site, peta area, rambu, alarm, dan komunikasi radio.': '权利义务、矿区规章、区域地图、标志警报与无线电通讯。',
    '03 · Manajemen Risiko': '03 · 风险管理',
    'HIRADC, JSA, Take 5, hierarki pengendalian, izin kerja, SIMOPS & MOC.': 'HIRADC、JSA、Take 5、控制层级、作业许可、SIMOPS与MOC。',
    '04 · APD & Kesehatan': '04 · 劳保与健康',
    'APD wajib & spesifik, fit to work, fatigue, dan bahaya kesehatan khas nikel.': '必备与专项劳保、适岗评估、疲劳及镍矿特有健康危害。',
    '05 · Risiko Kritikal Area': '05 · 关键区域风险',
    'Traffic & haul road, alat berat, dan geoteknik laterit open pit.': '交通与运矿道路、重型设备及红土露天矿地质技术。',
    '06 · Pekerjaan Berbahaya': '06 · 危险作业',
    'LOTO, listrik, ketinggian, ruang terbatas, hot work, lifting, dan galian.': '上锁挂牌、电气、高处、受限空间、动火、起重与基坑。',
    '07 · Fasilitas & Lingkungan': '07 · 设施与环境',
    'Bahan kimia/B3, plant & conveyor, smelter/HPAL/TSF/jetty, fuel farm, lingkungan.': '化学品/B3、选矿厂与皮带机、冶炼/高压酸浸/尾矿库/码头、油库、环境。',
    '08 · Darurat & Medis': '08 · 应急与医疗',
    'Tanggap darurat, muster point, P3K, medevac, dan pelaporan insiden.': '应急响应、集合点、急救、医疗转运与事件报告。',
    '09 · Penunjang': '09 · 后勤保障',
    'Camp & mess, transportasi, keamanan, komunitas, dan etika kerja.': '营地食堂、交通、安保、社区与职业道德。',
    '10 · Studi Kasus': '10 · 事故案例',
    'Pelajaran dari insiden nyata di industri nikel — agar tidak terulang di site kita.': '从镍矿行业真实事件中吸取教训——杜绝在我矿重演。',
    '11 · Evaluasi & Komitmen': '11 · 考核与承诺',
    'Pre-test, post-test, tanda tangan komitmen, dan penerbitan sertifikat induksi.': '入职前测试、结业考试、承诺签名与培训证书颁发。',
    'Sebelas blok materi terpadu keselamatan dan lingkungan.': '安全与环境一体化的十一个模块。',
    'Kecelakaan Fatal Tambang / Tahun': '矿山死亡事故/年',
    'Insiden Bisa Dicegah': '可预防的事件',
    'Life-Saving Rules': '救命规则',
    'Slide Interaktif': '互动课件',
    '“Tidak ada target produksi, target waktu, atau target biaya yang sepadan dengan nyawa manusia.”': '“任何产量、工期或成本目标都抵不上一条生命。”',
    '— Komitmen Manajemen PT. Sifang Mining Indonesia': '——印尼四方矿业管理层承诺',
    'SAFETY': '安全',
    'Zero Harm • LSR • SWA • LOTO • APD': '零伤害 • 救命规则 • 停工授权 • 上锁挂牌 • 劳保',
    'ENVIRONMENT': '环境',
    'Zero Spill • TPS B3 • Reklamasi • Air Bersih': '零泄漏 • B3暂存 • 复垦 • 清水',
    'K3L SEIMBANG': 'K3L平衡',
    'Produksi Aman & Berkelanjutan': '安全可持续生产',
    '“Keselamatan diutamakan, lingkungan selalu diperhatikan, produksi mengikuti secara otomatis. Tidak ada target produksi yang membenarkan pelanggaran K3L.”': '“安全优先，环境常记心中，生产自然跟上。任何生产目标都不能成为违反K3L的理由。”',
    '— Filosofi Fondasi K3L Seimbang • Panduan Induksi Terpadu Nikel': '——K3L平衡基础理念 • 镍矿综合入职指南',
    'Fit for Work': '适岗作业',
    'Dilarang bekerja di bawah pengaruh alkohol, narkoba, atau obat yang menurunkan kesadaran.': '严禁在酒精、毒品或致意识不清药物影响下作业。',
    'Seatbelt & Batas Kecepatan': '安全带与限速',
    'Selalu pakai seatbelt; patuhi batas kecepatan dan aturan traffic site.': '始终系安全带；遵守限速与现场交通规则。',
    'Komunikasi Radio': '无线电通讯',
    'Masuk area operasional wajib lapor & komunikasi positif di channel yang ditetapkan.': '进入作业区必须报告并在指定频道保持正向通讯。',
    'Hormati Exclusion Zone': '遵守隔离区',
    'Dilarang masuk zona buta alat berat, area blasting, atau area ber-barricade.': '严禁进入重型设备盲区、爆破区或围栏隔离区。',
    'LOTO Sebelum Maintenance': '维修前上锁挂牌',
    'Isolasi dan kunci seluruh sumber energi sebelum servis/perbaikan.': '维修保养前隔离并锁定全部能源。',
    'Harness di Ketinggian': '高处系安全带',
    'Wajib fall protection pada kerja ≥ 1,8 m dengan anchor tersertifikasi.': '≥1.8米作业必须使用认证锚点防坠落保护。',
    'Permit Ruang Terbatas': '受限空间许可',
    'Dilarang masuk confined space tanpa permit, gas test, dan attendant.': '无许可、气体检测和监护人，严禁进入受限空间。',
    'Jangan Bypass Pengaman': '严禁跨越安全装置',
    'Dilarang melepas/menonaktifkan guard, interlock, alarm, atau perangkat keselamatan.': '严禁拆除或停用护罩、联锁、报警及安全装置。',
    'Permit Hot Work': '动火作业许可',
    'Pekerjaan panas wajib permit, pembersihan area, dan fire watch.': '动火作业必须办证、清理现场并设监火人。',
    'Stop Work': '停止作业',
    'Wajib menghentikan pekerjaan yang tidak aman — tanpa takut sanksi.': '必须叫停不安全作业——无需担心处罚。',
    'STOP': '停止',
    'LAPOR': '报告',
    'PERBAIKI': '整改',
    'LANJUT AMAN': '安全复工',
    'Contoh Situasi Wajib SWA:': '必须行使SWA的情形：',
    'LAPOR SEGERA': '立即报告',
    'CATAT & INVESTIGASI': '记录与调查',
    'TINDAK PERBAIKAN': '整改措施',
    'BELAJAR BERSAMA': '共同学习',
    '1 · PERSIAPAN': '1 · 准备',
    '2 · SHUTDOWN': '2 · 停机',
    '3 · ISOLASI': '3 · 隔离',
    '4 · LOCK & TAG': '4 · 上锁挂牌',
    '5 · LEPAS ENERGI SISA': '5 · 释放残余能量',
    '6 · VERIFIKASI NOL ENERGI': '6 · 验证零能量',
    '7 · BEKERJA & PELEPASAN': '7 · 作业与解锁',
    'DARURAT — 3× panjang': '紧急——3声长鸣',
    'SIAGA — putus-putus pendek': '戒备——断续短鸣',
    'ALL CLEAR — 1× panjang': '解除警报——1声长鸣',
    'BLASTING — pola peledakan': '爆破——爆破信号',
    'INSIDEN FATAL': '死亡事故',
    'HAMPIR CELAKA': '未遂事件',
    'INSIDEN': '事件',
    'KECELAKAAN': '事故',
    'INSIDEN LINGKUNGAN': '环境事件',
    'Lima skenario industri nikel — empat keselamatan dan satu lingkungan — dipelajari agar tidak terulang di site kita. Bacalah perlahan dan renungkan: “Apa yang akan saya lakukan?”': '五个镍矿行业场景——四个安全、一个环境——供学习，杜绝在我矿重演。请细读并思考：“我会怎么做？”',
    'Dasar Hukum': '法律依据',
    'Deskripsi': '说明',
    'Implikasi bagi Pekerja': '对员工的要求',
    'Jenis': '类别',
    'Contoh di Site Nikel': '镍矿现场实例',
    'Prosedur Benar': '正确做法',
    'Rendah': '低',
    'Sedang': '中',
    'Tinggi': '高',
    'Sangat Tinggi': '很高',
    'Ekstrem': '极高',
    '→ Kemungkinan (L)': '→ 可能性 (L)',
    'Bersihkan': '清除',
    'Simpan Tanda Tangan': '保存签名',
    'TTD Peserta': '学员签名',
    'Identitas Peserta': '参训人员信息',
    'Tanda Tangan Digital': '电子签名',
    '"Saya berkomitmen: bekerja selamat, menjaga rekan saya, dan tidak pernah mengabaikan bahaya. Tidak ada target produksi yang sebanding dengan nyawa manusia."': '“我承诺：安全作业，守护工友，绝不忽视危险。任何生产目标都抵不上一条生命。”',
    '— Ikrar Rekrutan Baru PT. Sifang Mining Indonesia': '——印尼四方矿业新员工誓词',
    'Selamat bergabung di keluarga besar PT. Sifang Mining Indonesia.': '欢迎加入印尼四方矿业大家庭。',
    'Selamat bekerja — dan pulang dengan selamat, setiap hari. 🤝': '祝工作顺利——每天平安回家。🤝',
    'Komitmen': '承诺',
    'Kompetensi': '能力',
    'Kewaspadaan': '警觉',
    'ZERO HARM': '零伤害',
    'SAFETY FIRST': '安全第一',
    'INDUKSI LULUS': '培训合格',
    '“Pulang selamat hari ini, kembali bekerja besok hari. Itu satu-satunya target yang benar.”': '“今天平安回家，明天再来上班。这才是唯一正确的目标。”',
    '— HSE Departemen, PT. Sifang Mining Indonesia': '——印尼四方矿业HSE部',
    '★ ZERO HARM': '★ 零伤害',
    'PESERTA INDUKSI': '参训人员',
    'Tekan ': '按',
    'Lanjut': '继续',
    ' atau gunakan tombol panah keyboard untuk memulai ▸': '或使用键盘方向键开始 ▸',
    'APD': '劳保',
    'Lingkungan': '环保',
    'LOTO': '上锁挂牌',
    'Induksi umum tidak menggantikan induksi area spesifik dan toolbox meeting harian. Pekerjaan hanya dimulai setelah seluruh lapisan induksi selesai.': '通用入职不能代替区域专项入职和每日班前会。只有完成各层培训后方可开工。',
    'Lambang K3 dimaknai sesuai ketentuan Permenaker.': 'K3标志含义遵循人力部条例。',
    'Sumber: Panduan Fondasi K3L Seimbang, Bab 1.': '来源：《K3L平衡基础指南》第1章。',
    'Sumber: Panduan Fondasi K3L Seimbang, Bab 1 dan 3.': '来源：《K3L平衡基础指南》第1、3章。',
    'Sumber: Panduan Fondasi K3L Seimbang, Bab 4.': '来源：《K3L平衡基础指南》第4章。',
    'Sumber: Panduan Fondasi K3L Seimbang, Bab 6.': '来源：《K3L平衡基础指南》第6章。',
    'Landasan regulasi: UU No. 1 Tahun 1970, Kepmen ESDM 1827/2018, PP 22/2021, Permen 33/2021, dan Permen 26/2018.': '法规依据：1970年第1号法、ESDM 1827/2018部长决定、2021年第22号政府条例、2021年第33号ESDM部长条例及2018年第26号ESDM部长条例。',
    'Kebijakan ini mencakup 8 komitmen mutu-K3-LH dan 5 nilai perusahaan yang berlaku di seluruh site.': '本政策涵盖8项质量-K3-环境承诺和5项公司价值观，全矿区适用。',
    'Golden Rules diberlakukan setara dengan Life-Saving Rules di seluruh site.': '金科玉律与救命规则在全矿区同等执行。',
    'Tanpa induksi = tanpa akses.': '未培训＝无准入。',
    'SIMPER = Surat Izin Mengemudi Perusahaan.': 'SIMPER＝公司驾照。',
    'Lapor semua kategori, bukan hanya fatality.': '所有类别都要报告，不只是死亡事故。',
    'Setiap situasi berbeda — nilai risiko spesifik sebelum mengangkat.': '每种情况都不同——起吊前评估具体风险。',
    'Pisahkan sampah organik dan anorganik; limbah B3 hanya ke TPS berizin.': '干湿垃圾分类；B3废物只送持证暂存点。',
    'Patuhi instruksi petugas keamanan dan laporkan intimidasi ke HRGA/HSE.': '服从安保人员指令，遇恐吓向HRGA/HSE报告。',
    'Peta site terkini dibagikan saat induksi lapangan. Hari pertama wajib induksi area spesifik.': '最新矿区地图在现场入职时发放。第一天必须完成区域专项入职。',
    'Contoh nyata: ponsel saat melintas di': '实例：行人经过',
    'haul road': '运矿道路',
    'membuat pejalan kaki tidak mendengar klakson mundur 3× — nyaris tertabrak dump truck. Aturan site ditulis dari pelajaran insiden, bukan untuk mempersulit.': '时玩手机，听不到3声倒车喇叭——差点被矿卡撞到。现场规章来自事故教训，而非刁难。',
    'Barricade, safety line, dan tag bahaya = larangan melintas. Dilarang memindahkan pengaman apa pun tanpa otorisasi.': '围栏、安全线和危险标签即禁止通行。未经授权严禁移动任何防护。',
    'Api membesar? Jangan heroik. Evakuasi, bunyikan alarm, hubungi ERT.': '火势扩大？不要蛮干。疏散、拉响警报、联系ERT。',
    'APD adalah pertahanan terakhir dalam hierarki pengendalian. Jika APD saja tidak cukup mengendalikan risiko, pekerjaan tidak boleh dimulai — minta pengendalian rekayasa atau administratif tambahan.': '劳保是控制层级中的最后一道防线。若仅靠劳保不足以控制风险，不得开工——要求工程或管理措施。',
  };

  /* Normalisasi kunci kamus (samakan dengan norm() saat lookup) */
  [ZH_TEXT, ZH_H, ZH_LEAD].forEach(map => {
    for (const k in map) {
      const nk = norm(k);
      if (nk !== k && map[nk] === undefined) { map[nk] = map[k]; delete map[k]; }
    }
  });

  /* String chrome UI: id = sumber Indonesia, zh = China */
  const T = {
    id: {
      menu_h: 'DAFTAR MATERI INDUKSI', aria_close: 'Tutup',
      search_h: 'Pencarian Materi', search_ph: 'Cari kata kunci (mis. LOTO, APD, longsor, hot work)',
      search_type: 'Ketik untuk mencari…', search_none: 'Tidak ditemukan. Coba kata kunci lain.',
      gloss_h: 'Glosarium K3L', gloss_ph: 'Cari istilah... (mis. LOTO, APD, HIRADC)', gloss_none: 'Tidak ada istilah ditemukan.',
      bm_h: 'Bookmark', bm_lead: 'Slide yang Anda tandai untuk dipelajari ulang nanti. Klik untuk melompat ke slide.',
      bm_empty: 'Belum ada bookmark. Tekan ikon bookmark di topbar untuk menambah.',
      bm_add: 'Slide di-bookmark', bm_del: 'Bookmark dihapus',
      help_h: 'Panduan & Pintasan', help_kb: 'Pintasan Keyboard', help_touch: 'Sentuh (Mobile)',
      help_saved: 'Progress Tersimpan', help_print: 'Cetak',
      help_r_next: 'Next slide', help_r_prev: 'Previous slide', help_r_home: 'First / Last slide',
      help_r_menu: 'Open menu', help_r_full: 'Fullscreen', help_r_theme: 'Toggle theme (dark/light)',
      help_r_audio: 'Toggle audio narration', help_r_help: 'Buka panduan ini', help_r_lang: 'Ganti bahasa (ID/中文)',
      help_m1: 'Swipe kiri', help_m1b: 'Slide berikutnya', help_m2: 'Swipe kanan', help_m2b: 'Slide sebelumnya',
      help_m3: 'Tap tombol di topbar untuk menu, bookmark, dll.',
      help_saved_p: 'Semua progres — visited, quiz score, signature, sertifikat — tersimpan otomatis di browser ini. Bookmark membantu Anda menandai slide yang ingin di-review ulang.',
      help_print_p: 'Tekan Ctrl/Cmd + P atau gunakan tombol cetak di sertifikat untuk mencetak handout / sertifikat A4.',
      help_foot: 'Induksi ini hanya alat bantu. Induksi area spesifik & toolbox meeting harian tetap WAJIB dilakukan di lapangan.',
      q_eval_awal: 'Evaluasi Awal', q_pre_h: 'Pre-test', q_pre_h_sub: 'Cek Pemahaman Awal', q_pre_lead: 'Lima pertanyaan singkat. Hasilnya tidak menggagalkan kelulusan, tetapi membantu memetakan pengetahuan awal Anda.',
      q_send: 'Kirim Jawaban', q_pre_done: 'Pre-test selesai — lanjutkan ke materi inti.', q_go_next: 'Lanjut ke Materi',
      q_toast_pre: 'Pre-test selesai! Skor: ', q_eval_akhir: 'Evaluasi Akhir', q_post_h: 'Post-test', q_post_h_sub: 'Sertifikasi Induksi',
      q_post_lead_a: 'Terdiri atas dua bagian. ', q_post_lead_b: ' harus dijawab benar 100%. Nilai pengetahuan umum minimal ',
      q_sec_a: 'Bagian A — Life-Saving Rules', q_sec_b: 'Bagian B — Pengetahuan Umum',
      q_pass_v: 'LULUS — lanjut ke tanda tangan & sertifikat.', q_fail_v: 'Belum lulus. Pelajari ulang materi & coba remedial.',
      q_go_sign: 'Lanjut ke Tanda Tangan', q_retry: 'Reset & Coba Lagi', q_grade: 'Kirim & Nilai',
      q_toast_pass: 'LULUS! Skor: ', q_lsr_need: 'Life-Saving Rules belum 100%', q_umum_need: 'Pengetahuan umum ',
      q_qno: 'Soal ', q_qno_b: '', q_ok: '✓ Benar.', q_bad: '✗ Kurang tepat.',
      apd_t_las: 'Pengelasan (Welding)', apd_t_chem: 'Penanganan Asam Sulfat', apd_t_h: 'Kerja di Ketinggian',
      apd_t_noise: 'Area Bising (Plant)', apd_t_dust: 'Area Berdebu', apd_t_grind: 'Grinding / Cutting',
      apd_t_elec: 'Pekerjaan Listrik', apd_t_water: 'Di Atas Air (Jetty)',
      apd_n_helmet: 'Helm Safety', apd_s_helmet: 'SNI/ANSI, chinstrap',
      apd_n_glass: 'Kacamata Safety', apd_s_glass: 'Side shield',
      apd_n_glove: 'Sarung Tangan Umum', apd_s_glove: 'Cut-resistant',
      apd_n_boot: 'Safety Boots', apd_s_boot: 'Steel toe + anti-slip',
      apd_n_vest: 'High-Vis Vest', apd_s_vest: 'Reflektif',
      apd_n_leather_apron: 'Apron Kulit', apd_s_leather_apron: 'Tahan percikan api',
      apd_n_chem_suit: 'Chemical Suit', apd_s_chem_suit: 'Tahan asam',
      apd_n_chem_glove: 'Sarung Tangan Kimia', apd_s_chem_glove: 'Nitrile/butyl',
      apd_n_chem_boot: 'Boots Tahan Kimia', apd_s_chem_boot: 'PVC/rubber',
      apd_n_harness: 'Full Body Harness', apd_s_harness: 'Double lanyard',
      apd_n_earp: 'Earplug/Earmuff', apd_s_earp: '≥85 dBA',
      apd_n_mask: 'Respirator', apd_s_mask: 'Fit-tested',
      apd_n_face_shield: 'Face Shield', apd_s_face_shield: 'Full face',
      apd_n_elec_glove: 'Sarung Tangan Isolasi', apd_s_elec_glove: 'Class sesuai tegangan',
      apd_n_arc_suit: 'Arc Flash Suit', apd_s_arc_suit: 'CAT 2+',
      apd_n_life_jacket: 'Life Jacket', apd_s_life_jacket: 'Auto-inflate',
      risk_l1: 'Risiko rendah. Contoh: berjalan di area pedestrian. APD standar cukup.',
      risk_l2: 'Risiko rendah–sedang. Contoh: inspeksi visual area kerja.',
      risk_l3: 'Risiko sedang. Contoh: bekerja di dekat alat berat dengan jarak aman.',
      risk_l4: 'Risiko tinggi. Contoh: bekerja di atas 1,8 m tanpa harness, atau dekat highwall aktif.',
      risk_l5: 'Risiko ekstrem. Contoh: confined space tanpa permit, hot work dekat bahan mudah terbakar, geoteknik hazard aktif. STOP WORK.',
      apd_need: 'APD belum lengkap.', apd_still: 'Anda masih perlu: ', apd_ready: 'APD lengkap.',
      apd_ready_for: 'Anda siap bekerja untuk tugas', apd_extra: 'Anda memilih APD ekstra: ',
      sig_t_clear: 'Tanda tangan dihapus', sig_t_empty: 'Tanda tangan kosong — silakan tanda tangani dulu',
      sig_t_id: 'Lengkapi nama & NIK sebelum simpan', sig_t_saved: '✓ Tanda tangan disimpan',
      cert_k1: 'Sertifikat', cert_un_h: 'Sertifikat Belum Tersedia', cert_un_box: 'Belum Memenuhi Syarat',
      cert_un_p: 'Untuk menerbitkan sertifikat induksi, Anda harus lulus Post-Test dengan skor ≥ 80% (dan 100% pada bagian Life-Saving Rules).',
      cert_un_st: 'Status post-test saat ini: ', cert_un_none: 'belum dikerjakan', cert_un_lead: 'Silakan kembali ke slide sebelumnya dan selesaikan post-test terlebih dahulu.',
      cert_w_h: 'Sertifikat Menunggu Tanda Tangan', cert_w_box: 'Belum Ditandatangani',
      cert_w_p: 'Anda lulus post-test, tetapi belum menandatangani komitmen K3L. Sertifikat baru diterbitkan setelah tanda tangan digital tersimpan.',
      cert_w_lead: 'Silakan kembali ke slide Tanda Tangan Komitmen.',
      cert_k2: 'Penutup', cert_h: 'Sertifikat Induksi K3L', cert_h_full: 'Sertifikat <em>Induksi K3L</em>',
      cert_lead: 'Selamat! Anda telah lulus program induksi K3L. Sertifikat ini sah sebagai bukti kompetensi awal masuk site.',
      cert_no: 'No. Sertifikat', cert_sub: 'Sertifikat Kelulusan', cert_title: 'Program Induksi K3L',
      cert_stmt0: 'Dengan ini menyatakan bahwa:', cert_name_ph: '— Nama Peserta —',
      cert_stmt1: 'telah menyelesaikan dan lulus Program Induksi Keselamatan, Kesehatan Kerja, dan Lingkungan (K3L) untuk operasional pertambangan nikel open pit, dengan skor post-test:',
      cert_d1: 'Tanggal Terbit', cert_d2: 'Berlaku Sampai', cert_d3: 'Status', cert_active: 'AKTIF · ZERO HARM',
      cert_part: 'Peserta Induksi', cert_by: 'Disahkan oleh', cert_dl: '⬇ Unduh / Cetak Sertifikat', cert_share: '📤 Bagikan',
      cert_foot: 'Sertifikat ini wajib diperlihatkan saat memasuki site. Masa berlaku 12 bulan — penyegaran wajib setelahnya.',
      cert_new: '🎉 Sertifikat diterbitkan!', cert_share_t: 'Saya {name} ({nik}) telah lulus Program Induksi K3L PT. Sifang Mining Indonesia! Skor post-test: {score}%. #ZeroHarm #SafetyFirst',
      cert_copied: 'Teks disalin ke clipboard', cert_copy_man: 'Salin manual: ',
      app_welcome: 'Tekan ? untuk panduan atau M untuk daftar materi',
      audio_on: '🔊 Narasi aktif', audio_off: '🔇 Narasi nonaktif',
      months: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
    },
    zh: {
      menu_h: '培训目录', aria_close: '关闭',
      search_h: '课程搜索', search_ph: '搜索关键词（如 LOTO、APD、滑坡、动火）',
      search_type: '输入以搜索…', search_none: '未找到，请换个关键词。',
      gloss_h: 'K3L术语表', gloss_ph: '搜索术语…（如 LOTO、APD、HIRADC）', gloss_none: '未找到相关术语。',
      bm_h: '收藏', bm_lead: '您标记稍后复习的课件，点击可跳转。',
      bm_empty: '暂无收藏，点击顶栏收藏图标添加。',
      bm_add: '已收藏本页', bm_del: '已取消收藏',
      help_h: '指南与快捷键', help_kb: '键盘快捷键', help_touch: '触屏（手机）',
      help_saved: '进度已保存', help_print: '打印',
      help_r_next: '下一页', help_r_prev: '上一页', help_r_home: '首页 / 末页',
      help_r_menu: '打开目录', help_r_full: '全屏', help_r_theme: '切换主题（深色/浅色）',
      help_r_audio: '开关语音讲解', help_r_help: '打开本指南', help_r_lang: '切换语言（印尼文/中文）',
      help_m1: '左滑', help_m1b: '下一页', help_m2: '右滑', help_m2b: '上一页',
      help_m3: '点击顶栏按钮使用目录、收藏等功能。',
      help_saved_p: '所有进度——浏览记录、考试分数、签名、证书——自动保存在本浏览器中。收藏可标记想重看的课件。',
      help_print_p: '按 Ctrl/Cmd + P，或使用证书上的打印按钮，打印讲义/A4证书。',
      help_foot: '本培训仅为辅助工具。区域专项入职与每日班前会仍必须在现场进行。',
      q_eval_awal: '课前评估', q_pre_h: '入职前测试', q_pre_h_sub: '摸底', q_pre_lead: '五个小问题，结果不影响通过，用于了解你的基础。',
      q_send: '提交答案', q_pre_done: '前测完成——继续学习正课。', q_go_next: '进入正课',
      q_toast_pre: '前测完成！得分：', q_eval_akhir: '结业评估', q_post_h: '结业考试', q_post_h_sub: '认证',
      q_post_lead_a: '共两部分，', q_post_lead_b: '必须100%正确，通用知识至少 ',
      q_sec_a: '第一部分——救命规则', q_sec_b: '第二部分——通用知识',
      q_pass_v: '通过——前往签名与证书。', q_fail_v: '未通过，请重学并补考。',
      q_go_sign: '前往签名', q_retry: '重置并重考', q_grade: '提交并评分',
      q_toast_pass: '通过！得分：', q_lsr_need: '救命规则未达100%', q_umum_need: '通用知识 ',
      q_qno: '第', q_qno_b: '题', q_ok: '✓ 正确。', q_bad: '✗ 不对。',
      apd_t_las: '焊接', apd_t_chem: '硫酸操作', apd_t_h: '高处作业',
      apd_t_noise: '噪声区（车间）', apd_t_dust: '粉尘区', apd_t_grind: '打磨/切割',
      apd_t_elec: '电气作业', apd_t_water: '水上作业（码头）',
      apd_n_helmet: '安全帽', apd_s_helmet: 'SNI/ANSI，下巴带',
      apd_n_glass: '安全眼镜', apd_s_glass: '侧挡',
      apd_n_glove: '通用手套', apd_s_glove: '防切割',
      apd_n_boot: '安全鞋', apd_s_boot: '钢头防滑',
      apd_n_vest: '反光背心', apd_s_vest: '反光',
      apd_n_leather_apron: '皮围裙', apd_s_leather_apron: '防飞溅',
      apd_n_chem_suit: '防化服', apd_s_chem_suit: '耐酸',
      apd_n_chem_glove: '耐化学手套', apd_s_chem_glove: '丁腈/丁基',
      apd_n_chem_boot: '耐化学靴', apd_s_chem_boot: 'PVC/橡胶',
      apd_n_harness: '全身安全带', apd_s_harness: '双挂绳',
      apd_n_earp: '耳塞/耳罩', apd_s_earp: '≥85分贝',
      apd_n_mask: '口罩', apd_s_mask: '密合测试',
      apd_n_face_shield: '面屏', apd_s_face_shield: '全面',
      apd_n_elec_glove: '绝缘手套', apd_s_elec_glove: '按电压等级',
      apd_n_arc_suit: '防电弧服', apd_s_arc_suit: 'CAT 2+',
      apd_n_life_jacket: '救生衣', apd_s_life_jacket: '自动充气',
      risk_l1: '低风险，如：人行道行走，标准劳保即可。',
      risk_l2: '低至中风险，如：作业区目视检查。',
      risk_l3: '中风险，如：保持安全距离在重型设备附近作业。',
      risk_l4: '高风险，如：1.8米以上无安全带作业，或在危险的高边坡附近。',
      risk_l5: '极高风险，如：无许可进入受限空间、易燃物旁动火、边坡失稳征兆明显。停止作业。',
      apd_need: '劳保不齐。', apd_still: '还缺：', apd_ready: '劳保齐全。',
      apd_ready_for: '你可以胜任该作业', apd_extra: '你多选了：',
      sig_t_clear: '签名已清除', sig_t_empty: '签名为空——请先签名',
      sig_t_id: '保存前请填写姓名和工号', sig_t_saved: '✓ 签名已保存',
      cert_k1: '证书', cert_un_h: '证书暂不可用', cert_un_box: '条件未满足',
      cert_un_p: '要获得入职证书，结业考试须≥80%（救命规则部分100%）。',
      cert_un_st: '当前考试状态：', cert_un_none: '尚未考试', cert_un_lead: '请先返回上一页完成结业考试。',
      cert_w_h: '等待签名', cert_w_box: '尚未签署',
      cert_w_p: '你已通过考试，但尚未签署K3L承诺。保存电子签名后颁发证书。',
      cert_w_lead: '请返回承诺签名页。',
      cert_k2: '结尾', cert_h: 'K3L入职证书', cert_h_full: 'K3L<em>入职证书</em>',
      cert_lead: '恭喜！你已通过K3L入职培训，本证书是进场上岗能力的有效证明。',
      cert_no: '证书编号', cert_sub: '结业证书', cert_title: 'K3L入职培训',
      cert_stmt0: '兹证明：', cert_name_ph: '— 学员姓名 —',
      cert_stmt1: '已完成并通过镍露天矿安全、健康与环境（K3L）入职培训，结业考试得分：',
      cert_d1: '签发日期', cert_d2: '有效期至', cert_d3: '状态', cert_active: '有效 · 零伤害',
      cert_part: '参训学员', cert_by: '批准单位', cert_dl: '⬇ 下载/打印证书', cert_share: '📤 分享',
      cert_foot: '进场须出示本证书，有效期12个月——到期必须复训。',
      cert_new: '🎉 证书已颁发！', cert_share_t: '我{name}（{nik}）已通过印尼四方矿业K3L入职培训！结业得分：{score}%。#零伤害 #安全第一',
      cert_copied: '文本已复制', cert_copy_man: '请手动复制：',
      app_welcome: '按 ? 查看指南，或按 M 打开目录',
      audio_on: '🔊 语音讲解开', audio_off: '🔇 语音讲解关',
      months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    },
  };

  const PH = [
    ['sig-name', 'Nama Lengkap', '姓名'],
    ['sig-nik', 'NIK / ID Karyawan', '工号'],
    ['sig-pos', 'Jabatan / Posisi', '岗位'],
    ['sig-dept', 'Departemen / Kontraktor', '部门/承包商'],
  ];

  const DOC_TITLE = {
    id: 'Induksi K3L — PT. Sifang Mining Indonesia | Nikel Open Pit',
    zh: 'K3L入职培训 — 印尼四方矿业 | 镍露天矿',
  };

  function lang() { return State.get('settings.lang') === 'zh' ? 'zh' : 'id'; }
  function norm(s) { return (s || '').replace(/\s+/g, ' ').trim(); }

  function t(k, vars) {
    let s = (T[lang()] && T[lang()][k] !== undefined) ? T[lang()][k] : (T.id[k] !== undefined ? T.id[k] : k);
    if (Array.isArray(s)) return s;
    if (vars) for (const key in vars) s = String(s).split('{' + key + '}').join(vars[key]);
    return s;
  }

  function title(slide) {
    if (lang() === 'zh' && slide && TITLE_ZH[slide.title]) return TITLE_ZH[slide.title];
    return slide ? slide.title : '';
  }

  function mod(m) {
    if (lang() === 'zh' && MOD_ZH[m]) return MOD_ZH[m];
    return m;
  }

  /* Peta balik untuk swap zh→id (hanya nilai unik agar tak ambigu) */
  function invert(map) {
    const seen = {}, out = {};
    for (const k in map) {
      const v = map[k];
      if (typeof v !== 'string' || seen[v]) continue;
      seen[v] = 1; out[v] = k;
    }
    return out;
  }
  let REV_TEXT = invert(ZH_TEXT), REV_H = invert(ZH_H), REV_LEAD = invert(ZH_LEAD);

  function extend(obj, target) {
    if (!obj || typeof obj !== 'object') return 0;
    const map = target === 'LEAD' ? ZH_LEAD : (target === 'H' ? ZH_H : ZH_TEXT);
    let n = 0;
    for (const k in obj) {
      if (typeof obj[k] !== 'string' || map[k] !== undefined) continue;
      map[k] = obj[k];
      n++;
    }
    if (target === 'LEAD') REV_LEAD = invert(ZH_LEAD);
    else if (target === 'H') REV_H = invert(ZH_H);
    else REV_TEXT = invert(ZH_TEXT);
    return n;
  }

  function applyTo(root, toLang) {
    if (!root) return;
    const F = toLang === 'zh'
      ? { H: ZH_H, LEAD: ZH_LEAD, TXT: ZH_TEXT }
      : { H: REV_H, LEAD: REV_LEAD, TXT: REV_TEXT };
    root.querySelectorAll('h1,h2,p.lead').forEach(el => {
      const k = norm(el.textContent);
      const tag = el.tagName;
      if ((tag === 'H1' || tag === 'H2') && F.H[k] !== undefined) el.innerHTML = F.H[k];
      else if (tag === 'P' && F.LEAD[k] !== undefined) el.innerHTML = F.LEAD[k];
    });
    const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(n) {
        if (!n.nodeValue || !n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        const p = n.parentElement;
        if (!p) return NodeFilter.FILTER_REJECT;
        const tag = p.tagName;
        if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'CODE' || tag === 'INPUT' || tag === 'TEXTAREA') return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      },
    });
    const nodes = [];
    while (w.nextNode()) nodes.push(w.currentNode);
    nodes.forEach(n => {
      const v = F.TXT[norm(n.nodeValue)];
      if (v === undefined) return;
      const m = n.nodeValue.match(/^(\s*)([\s\S]*?)(\s*)$/);
      n.nodeValue = m[1] + v + m[3];
    });
    PH.forEach(([id, idPh, zhPh]) => {
      const el = root.querySelector('#' + id) || document.getElementById(id);
      if (el) el.placeholder = toLang === 'zh' ? zhPh : idPh;
    });
  }

  function syncChrome() {
    const zh = lang() === 'zh';
    document.documentElement.lang = zh ? 'zh-CN' : 'id';
    document.title = DOC_TITLE[zh ? 'zh' : 'id'];
    const set = (id, aria, title) => {
      const el = document.getElementById(id);
      if (!el) return;
      if (aria) el.setAttribute('aria-label', aria);
      if (title) el.setAttribute('title', title);
    };
    const P = {
      btnBookmark: zh ? ['收藏本页', '收藏 (B)'] : ['Bookmark slide ini', 'Bookmark (B)'],
      btnSearch: zh ? ['搜索', '搜索课程'] : ['Cari', 'Cari materi'],
      btnGlossary: zh ? ['术语表', 'K3L术语表'] : ['Glosarium', 'Glosarium K3L'],
      btnAudio: zh ? ['语音讲解', '语音讲解 (A)'] : ['Audio narasi', 'Audio narasi (A)'],
      btnTheme: zh ? ['主题', '浅色/深色主题 (T)'] : ['Tema', 'Tema terang/gelap (T)'],
      btnHelp: zh ? ['指南', '指南 (?)'] : ['Panduan', 'Panduan (?)'],
      btnBookmarks: zh ? ['收藏列表', '查看收藏'] : ['Daftar bookmark', 'Lihat bookmark'],
      btnMenu: zh ? ['课件目录', '课件目录 (M)'] : ['Daftar slide', 'Daftar materi (M)'],
      btnFull: zh ? ['全屏', '全屏 (F)'] : ['Layar penuh', 'Layar penuh (F)'],
      btnClose: zh ? ['关闭', '关闭'] : ['Tutup', 'Tutup'],
      btnLang: zh ? ['切换为印尼文', '切换语言 (L)'] : ['Ganti ke bahasa China', 'Ganti bahasa (L)'],
    };
    for (const id in P) set(id, P[id][0], P[id][1]);
    const bl = document.getElementById('btnLang');
    if (bl) bl.textContent = zh ? 'ID' : '中文';
    const mt = document.getElementById('menuTitle');
    if (mt) mt.textContent = t('menu_h');
    const pv = document.querySelector('#btnPrev .label-full');
    if (pv) pv.textContent = zh ? '上一页' : 'Sebelumnya';
    const nx = document.querySelector('#btnNext .label-full');
    if (nx) nx.textContent = zh ? '下一页' : 'Lanjut';
    const pa = document.getElementById('btnPrev');
    if (pa) pa.setAttribute('aria-label', zh ? '上一页' : 'Sebelumnya');
    const na = document.getElementById('btnNext');
    if (na) na.setAttribute('aria-label', zh ? '下一页' : 'Lanjut');
  }

  function retranslate() {
    if (typeof Menu !== 'undefined' && typeof SLIDES_DATA !== 'undefined') Menu.build(SLIDES_DATA);
    syncChrome();
    if (typeof Navigation !== 'undefined' && typeof Renderer !== 'undefined' && typeof SLIDES_DATA !== 'undefined') {
      const slide = SLIDES_DATA[Navigation.idx];
      if (slide && typeof slide.afterRender === 'function') {
        const needsData = slide.type === 'pretest' || slide.type === 'posttest' || slide.type === 'cert';
        if (needsData) { try { slide.afterRender(); } catch (e) { /* abaikan */ } }
      }
      Navigation.refresh();
    }
  }

  function setLang(l, opts) {
    const v = l === 'zh' ? 'zh' : 'id';
    State.set('settings.lang', v);
    if (!opts || opts.sync !== false) syncChrome();
  }

  function toggle() {
    setLang(lang() === 'zh' ? 'id' : 'zh', { sync: false });
    retranslate();
  }

  function init() {
    setLang(lang(), { sync: false });
    document.addEventListener('DOMContentLoaded', () => {
      const btn = document.getElementById('btnLang');
      if (btn) btn.addEventListener('click', toggle);
      syncChrome();
    });
  }

  return { lang, setLang, toggle, t, title, mod, applyTo, retranslate, syncChrome, init, extend };
})();

I18n.init();
