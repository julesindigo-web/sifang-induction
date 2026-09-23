# Induksi K3L — PT. Sifang Mining Indonesia

> **Program Induksi Keselamatan, Kesehatan Kerja, dan Lingkungan (K3L) Seimbang**
> Pertambangan Nikel Open Pit • Edisi Interaktif Premium • Terpadu Keselamatan + Lingkungan
>
> Referensi inti edisi ini: **Membangun Fondasi K3L Seimbang — Panduan Induksi Terpadu untuk Keselamatan Operasional dan Perlindungan Lingkungan di Sektor Pertambangan Nikel** (filosofi Pulang Selamat + Operasi Berkelanjutan, regulasi PP 22/2021 & Permen 33/2021, risiko laterit, TSF/HPAL, air/reklamasi, tabel B3, LOTO aplikatif, budaya SWA–penghargaan–pelaporan 24 jam).

Platform pembelajaran interaktif berbasis web untuk inducti HSE pekerja baru,
kontraktor, dan tamu di area operasional pertambangan nikel open pit PT. Sifang
Mining Indonesia.

![Stack](https://img.shields.io/badge/Stack-HTML%20%2F%20CSS%20%2F%20JS-2b3990)
![Slides](https://img.shields.io/badge/Slides-82-fbbf24)
![Quiz](https://img.shields.io/badge/Quiz-LSR%20100%25%20%2B%20Umum%2080%25-2dd4bf)
![Certificate](https://img.shields.io/badge/Certificate-Auto%20Generated-fb923c)
![K3L](https://img.shields.io/badge/K3L-Seimbang%20%7C%20PP%2022%2F2021%20%26%20Permen%2033%2F2021-4ade80)

---

## � Fitur Utama

### 🎓 Konten & Pembelajaran
- **82 slide** materi induksi terstruktur dalam 11 modul (+5 slide K3L Seimbang: Fondasi, Risiko Laterit, Air/Reklamasi, Tabel B3, Budaya Penghargaan)
- **Fondasi K3L Seimbang**: Pulang Selamat + Operasi Berkelanjutan — produksi mengikuti otomatis; simbiosis safety–environment
- **Tabel regulasi 5 pilar** (UU 1/1970, Kepmen 1827/2018, PP 22/2021, Permen 33/2021, Permen 26/2018) + sanksi pidana KUHP
- **Risiko dominan laterit**: lereng soil-like, debu Ni/Co/Cr + silika (N95/P100), air asam tambang, HPAL/TSF exclusion zone
- **Tata kelola lingkungan**: drainase, reklamasi progresif topsoil/subsoil, TPS B3 berizin (tabel 5 jenis limbah)
- **Animasi transisi** slide dengan motion premium
- **Animated SVG mining scene** sebagai cover backdrop
- **Particle effects** (debu, percikan, ambient glow)
- **Confetti celebration** saat lulus / sertifikat terbit
- **Counter animasi** untuk statistik kunci

### 🧠 Interaktif (Nonstatis)
- ✅ **Pre-test** (5 soal) — uji pengetahuan awal
- ✅ **Matriks Risiko 5×5** interaktif (klik sel untuk contoh bahaya)
- ✅ **Pemilih APD** — pilih APD sesuai tugas dan sistem akan memvalidasi (termasuk N95/P100, baju kimia, tali pengaman, dan jaket pelampung)
- ✅ **Demo Sirene** — bunyikan pola alarm darurat via TTS
- ✅ **Post-test** 2 bagian: **LSR (wajib 100%)** dan Pengetahuan Umum (≥80%, kini 26 soal termasuk K3L Seimbang, PP 22/2021, laterit, B3, dan pelaporan 24 jam)
- ✅ **Panel Tanda Tangan Digital** (berbasis kanvas) — ikrar mencakup SWA lingkungan dan pelaporan 24 jam
- ✅ **Studi Kasus** industri nikel (longsor hujan, kendaraan ringan melawan truk jungkit, heat stroke, melewati pengaman, dan tumpahan B3)

### 💼 Profesional
- 🖋 **Tanda tangan digital** di canvas
- 📜 **Sertifikat otomatis** dengan nomor unik, masa berlaku 12 bulan
- 📊 **Progress tracking** otomatis (tersimpan di browser)
- � **Bookmark** slide untuk review ulang
- 📝 **Notes** per slide (planned)
- 🔍 **Full-text search** seluruh materi
- 📖 **Glosarium K3L** 100+ istilah dengan pencarian (baru: K3L Seimbang, PP 22/2021, Permen 33/2021, Air Asam Tambang, Topsoil/Subsoil, Reklamasi Progresif, TPS B3, N95/P100, PEL Silika, TSF Exclusion Zone, IBPR, Pelaporan 24 Jam)

### 🎨 Visual & UX
- 🌗 **Dark/Light theme** toggle (data-theme)
- 🔤 **Premium typography** (Space Grotesk + Manrope + JetBrains Mono)
- 📱 **Responsive** (mobile-first; swipe gesture)
- 🖨 **Print-ready** (handout + sertifikat A4)
- 🔊 **Audio narasi** Bahasa Indonesia (Web Speech API)
- ⌨ **Keyboard shortcuts** lengkap

---

## 📁 Struktur Project

```
18. INDUKSI/
├── index.html               ← Entry point
├── README.md                ← Anda di sini
│
├── assets/
│   ├── logo.svg             ← Logo symbol (icon only)
│   ├── logo-full.png        ← Logo PT. SMI lengkap dengan nama perusahaan
│   └── favicon.svg          ← Browser tab icon
│
├── css/
│   ├── tokens.css           ← Design system (warna, tipografi, spacing)
│   ├── base.css             ← Reset & base typography
│   ├── layout.css           ← App shell, topbar, botbar, stage
│   ├── components.css       ← Cards, buttons, panels, badges
│   ├── slides.css           ← Slide variants (cover, stats, matrix, APD, dll)
│   ├── effects.css          ← Particles, glassmorphism, shimmer
│   ├── responsive.css       ← Media queries
│   └── print.css            ← Print + certificate stylesheet
│
├── js/
│   ├── icons.js             ← 85+ SVG icon (custom mining/HSE themed)
│   ├── storage.js           ← LocalStorage wrapper
│   ├── state.js             ← Centralized app state
│   ├── effects.js           ← Particles, confetti, counters, toast
│   ├── progress.js          ← Progress tracking
│   ├── theme.js             ← Dark/light mode
│   ├── audio.js             ← TTS narration + sirene demo
│   ├── slides-data.js       ← 82 slide definitions (data-driven, incl. 5 slide K3L Seimbang)
│   ├── renderer.js          ← Dynamic DOM rendering
│   ├── navigation.js        ← Slide navigation (keyboard + touch)
│   ├── menu.js              ← TOC drawer
│   ├── glossary.js          ← Searchable glossary
│   ├── search.js            ← Full-text search
│   ├── bookmarks.js         ← Bookmark manager
│   ├── help.js              ← Keyboard shortcuts help
│   ├── quiz.js              ← Quiz engine (pretest, posttest, matrix, APD)
│   ├── signature.js         ← Canvas signature pad
│   ├── certificate.js       ← Auto-generate certificate
│   └── app.js               ← Bootstrap & orchestration
│
└── data/
    ├── quiz.json            ← Bank soal pretest (5) + posttest LSR (5, wajib 100%) + umum (26, ≥80%)
    └── glossary.json        ← 100+ HSE terms (incl. K3L Seimbang, PP 22/2021, B3, TSF, IBPR)
```

---

## 🚀 Cara Menjalankan

### Cara 1 — Langsung Buka di Browser
```bash
# Buka file index.html dengan browser modern (Chrome/Edge/Firefox)
# Beberapa fitur (fetch, audio) butuh protokol http:// atau https://
```

### Cara 2 — Local HTTP Server (Recommended)
```bash
# Python
python -m http.server 8000

# Node.js (npx)
npx http-server -p 8000

# PHP
php -S localhost:8000

# Lalu buka: http://localhost:8000
```

### Cara 3 — Live Deploy
Upload folder ini ke static host: **Netlify**, **Vercel**, **GitHub Pages**, **Cloudflare Pages**, atau shared hosting biasa.

---

## ⌨ Pintasan Keyboard

| Tombol | Aksi |
|--------|------|
| `→` / `PageDown` / `Space` | Slide berikutnya |
| `←` / `PageUp` | Slide sebelumnya |
| `Home` / `End` | Slide pertama / terakhir |
| `M` | Buka / tutup menu |
| `F` | Toggle fullscreen |
| `T` | Toggle tema (dark / light) |
| `A` | Toggle audio narasi |
| `?` | Buka panduan pintasan |
| Swipe kiri / kanan | Navigasi di mobile |

---

## 📚 Daftar Modul

| # | Modul | Topik Utama |
|---|-------|-------------|
| 1 | PEMBUKA | Cover (K3L Seimbang), Agenda 82 slide, Tujuan, **Fondasi Seimbang**, Statistik |
| 2 | PROFIL | Profil, **Risiko Laterit**, Hukum (PP 22/2021 dan Permen 33/2021 serta tabel), Kebijakan, LSR, SWA |
| 3 | ATURAN | Hak-Kewajiban, Aturan Site, Area, Rambu, Radio |
| 4 | RISIKO | IBPR/HIRADC dan JSA lingkungan, Matriks Risiko, Izin Kerja, SIMOPS/MOC |
| 5 | APD | APD Wajib, APD Spesifik (N95/P100 uji pas), **Pemilih APD** |
| 6 | KESEHATAN | Siap Kerja, Bahaya Nikel (NAB silika, Ni/Co/Cr) |
| 7 | AREA | Lalu Lintas, Alat Berat, Geoteknik (saprolit, gelembung, mata air baru) |
| 8 | KERJA | LOTO (hidrolik/slurry dan demo), Listrik, Ketinggian, Ruang Terbatas, Pekerjaan Panas, Pengangkatan, Galian |
| 9 | FASILITAS | Kimia/B3 dan **Tabel 5 Limbah**, Plant, Smelter/HPAL/TSF (zona larangan dan banjir)/Jetty, Fuel, Lingkungan dan **Air/Reklamasi Progresif** |
| 10 | DARURAT | Tanggap Darurat, **Demo Sirene**, P3K, Pelaporan dan **Budaya Penghargaan serta 24 Jam** |
| 11 | PENUNJANG | Camp, Keamanan, Etika |
| 12 | KASUS | Studi Kasus Industri Nikel (5 skenario) |
| 13 | EVAL | **Pre-test**, **Post-test (LSR 100% dan Umum 26 soal)**, **TTD Digital**, **Sertifikat** |

> **Integrasi K3L Seimbang**: Fondasi (PEMBUKA) → Risiko Laterit (PROFIL) → IBPR/JSA lingkungan (RISIKO) → N95/P100 dan NAB (APD/KESEHATAN) → Geoteknik tropis (AREA) → LOTO hidrolik/slurry (KERJA) → Tabel B3 dan Air/Reklamasi serta zona larangan TSF (FASILITAS) → Penghargaan dan Pelaporan 24 jam (DARURAT).

---

## ✅ Alur Penggunaan

```
Cover (K3L Seimbang)
  ↓
Materi (82 slide: fondasi → risiko laterit → hukum PP 22/Permen 33 → teknis → lingkungan → darurat)
  ↓
Pre-test (uji awal)
  ↓
Lanjut ke Materi Inti
  ↓
...
  ↓
Post-test
  ├─ LULUS (LSR 100% dan Umum ≥80%)
  │     ↓
  │   Tanda Tangan Digital
  │     ↓
  │   Sertifikat Otomatis (No. SMI-K3L-...)
  │     ↓
  │   Unduh / Cetak
  │
  └─ BELUM LULUS
        ↓
      Pelajari ulang dan remedial
```

---

## 🔒 Penyimpanan Data

Semua progres disimpan **lokal di browser** (localStorage):

| Key | Isi |
|-----|-----|
| `k3l_smi_induction_v1` | `{ state: { idx, visited, bookmarks, quiz, signature, user, settings, ... } }` |

Untuk **reset total**:
1. Buka DevTools (F12)
2. Console: `__APP__.State.reset(); location.reload()`
3. Atau bersihkan localStorage untuk domain ini

---

## 🛠 Tech Stack

- **HTML5** semantic markup
- **CSS3** modern (custom properties, grid, flexbox, animations, backdrop-filter)
- **Vanilla JavaScript (ES6+)** — tidak ada framework dependency
- **Web APIs**: localStorage, Canvas, Web Speech API, Fullscreen API
- **SVG** untuk ilustrasi, ikon, dan animasi (no emoji icons)

---

## 📋 Browser Support

| Browser | Status |
|---------|--------|
| Chrome / Edge 90+ | ✅ Full |
| Firefox 88+ | ✅ Full |
| Safari 14+ | ✅ Full |
| Mobile Safari iOS 14+ | ✅ Full |
| Chrome Android 90+ | ✅ Full |

---

## 📝 Lisensi & Atribusi

© 2026 PT. Sifang Mining Indonesia — HSE Department.
Materi internal untuk inducti K3L. Tidak untuk distribusi publik.

Font: **Space Grotesk**, **Manrope**, **JetBrains Mono** (SIL Open Font License via Fontsource CDN).

---

## � Dukungan

Pertanyaan atau masalah teknis:
- HSE Department PT. Sifang Mining Indonesia
- Email: hse@sifangmining.co.id

> **"Tidak ada target produksi yang sebanding dengan nyawa manusia."**
