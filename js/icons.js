/* ============================================================
   ICONS — Centralized SVG icon registry
   Custom mining/HSE themed icons (no emoji dependency)
   ============================================================ */

const Icons = (() => {
  const wrap = (path, opts = {}) => {
    const size = opts.size || 24;
    const cls = opts.class || '';
    const stroke = opts.stroke || 'currentColor';
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
      width="${size}" height="${size}" fill="none"
      stroke="${stroke}" stroke-width="${opts.sw || 1.8}"
      stroke-linecap="round" stroke-linejoin="round" class="${cls}">${path}</svg>`;
  };

  const set = {
    // Company / Building
    building: '<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M8 7h2M8 11h2M8 15h2M14 7h2M14 11h2M14 15h2M10 21v-3h4v3"/>',
    scroll: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h4"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/>',
    shield: '<path d="M12 2 L20 6 V12 c0 5 -3.5 9 -8 10 -4.5-1 -8-5 -8-10 V6 z"/><path d="M9 12l2 2 4-4"/>',
    helmet: '<path d="M4 18h16"/><path d="M5 14a7 7 0 0 1 14 0v4H5z"/><path d="M9 9V6h6v3"/>',
    mountain: '<path d="M3 19l5-9 4 7 3-5 6 7z"/><path d="M9 8l1-2 2 3"/>',
    tools: '<path d="M14 4l6 6-4 4-6-6z"/><path d="M11 7l-7 7v4h4l7-7"/><path d="M9 11l4 4"/>',
    factory: '<path d="M3 21V11l5 3V11l5 3V11l5 3V9h3v12z"/><path d="M9 17h2M14 17h2M19 17h2"/>',
    siren: '<path d="M7 13a5 5 0 0 1 10 0v3l2 3H5l2-3z"/><path d="M12 4V2M5 7L3.5 5.5M19 7l1.5-1.5M3 14H1M23 14h-2M9 19a3 3 0 0 0 6 0"/>',
    bed: '<path d="M3 18V8h6a3 3 0 0 1 3 3v0h9v7"/><path d="M3 14h18"/><path d="M6 21v-2M18 21v-2"/>',
    check: '<circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-6"/>',

    // HSE topics
    pickup: '<path d="M3 13l2-5a2 2 0 0 1 2-1h10a2 2 0 0 1 2 1l2 5v5H3z"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/><path d="M9 8V6h6v2"/>',
    compass: '<circle cx="12" cy="12" r="9"/><path d="M16 8l-2 5-5 2 2-5z" fill="currentColor"/>',
    clipboard: '<rect x="6" y="4" width="12" height="18" rx="1"/><path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1"/><path d="M9 10h6M9 14h6M9 18h4"/>',
    hand: '<path d="M7 11V6a2 2 0 1 1 4 0v5M11 11V4a2 2 0 1 1 4 0v7M15 11V6a2 2 0 1 1 4 0v8c0 4-3 7-7 7s-7-3-7-7v-2a2 2 0 1 1 4 0v3"/>',
    mic: '<rect x="9" y="3" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>',
    radio: '<rect x="5" y="2" width="14" height="20" rx="2"/><circle cx="12" cy="15" r="2"/><path d="M9 6h6"/>',
    flag: '<path d="M5 21V4h13l-2 4 2 4H5"/>',

    // Hazard pictograms
    flammable: '<path d="M12 3c1 4 5 5 5 10a5 5 0 1 1-10 0c0-2 1-3 2-4-1 2 1 3 2 3-1-3 0-6 1-9z" fill="currentColor" opacity=".25"/><path d="M12 3c1 4 5 5 5 10a5 5 0 1 1-10 0c0-2 1-3 2-4-1 2 1 3 2 3-1-3 0-6 1-9z"/>',
    toxic: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3" fill="currentColor"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/>',
    corrosive: '<path d="M9 3h6l-1 5a3 3 0 1 1-4 0z"/><path d="M8 11c-2 2-2 5 0 8M16 11c2 2 2 5 0 8M5 17l4-3M19 17l-4-3"/>',
    radiation: '<circle cx="12" cy="12" r="2" fill="currentColor"/><path d="M12 4a4 4 0 0 0-1 7.9M12 4a4 4 0 0 1 1 7.9M5 9a4 4 0 0 0 3.5 6M19 9a4 4 0 0 1-3.5 6M8 20a4 4 0 0 1 0-7M16 20a4 4 0 0 0 0-7" fill="currentColor" opacity=".7"/>',
    drop: '<path d="M12 3c-3 4-7 8-7 12a7 7 0 0 0 14 0c0-4-4-8-7-12z"/>',
    bolt: '<path d="M13 2L4 14h7l-1 8 9-12h-7z" fill="currentColor"/>',
    fire: '<path d="M12 3c1 4 5 5 5 10a5 5 0 1 1-10 0c0-2 1-3 2-4-1 2 1 3 2 3-1-3 0-6 1-9z" fill="currentColor"/>',

    // Equipment
    truck: '<rect x="3" y="8" width="13" height="10"/><path d="M16 11h4l2 3v4h-6"/><circle cx="7" cy="20" r="2"/><circle cx="17" cy="20" r="2"/>',
    ship: '<path d="M3 17c5 1 8 1 12 0s7-1 6 0M5 14l1-4h12l1 4M12 4v6M9 7l3-3 3 3M2 20h20"/>',
    excavator: '<rect x="3" y="14" width="14" height="6"/><circle cx="7" cy="22" r="2"/><circle cx="14" cy="22" r="2"/><path d="M17 14V8l5 2v6M17 8l-7-2v6"/>',
    shovel: '<rect x="3" y="14" width="14" height="6"/><circle cx="7" cy="22" r="2"/><circle cx="14" cy="22" r="2"/><path d="M17 16V6l-7 4"/>',
    crane: '<path d="M3 21h18M5 21V8M19 21V8M5 8h14M5 8V4h14v4"/><path d="M12 4v6"/>',
    drill: '<rect x="9" y="3" width="6" height="14" rx="1"/><path d="M12 17v4"/><circle cx="12" cy="22" r="1" fill="currentColor"/>',
    pump: '<circle cx="12" cy="12" r="6"/><path d="M12 6v6l4 2"/>',

    // PPE
    glass: '<path d="M3 14V6l4-2h10l4 2v8l-4 6H7z"/><path d="M3 14h18M7 6v4M11 6v4M15 6v4"/>',
    boot: '<path d="M6 3h6v8l4 3 2 3v4H6z"/><path d="M6 21h14M3 14h6"/>',
    vest: '<path d="M9 3l-5 3v15h16V6l-5-3-3 2z"/><path d="M9 6v15M15 6v15M4 8l5-2M20 8l-5-2"/>',
    glove: '<path d="M7 12V6a2 2 0 1 1 4 0v4M11 12V4a2 2 0 1 1 4 0v8M15 12V6a2 2 0 1 1 4 0v8c0 4-3 7-7 7-3 0-5-1-7-3v-2a2 2 0 0 1 4 0v1"/>',
    earp: '<path d="M6 13a6 6 0 0 1 12 0v3l-2 3h-3v-6M6 13v3l2 3h3v-6"/><path d="M9 19v2M15 19v2"/>',
    mask: '<path d="M4 8c0-2 2-4 5-4h6c3 0 5 2 5 4v3c0 5-3 9-8 9s-8-4-8-9z"/><path d="M8 11h8M8 14h6"/>',
    harness: '<path d="M7 4l5-2 5 2v6l-5 4-5-4zM12 8v14M8 22l4-4 4 4"/>',

    // Actions
    stop: '<circle cx="12" cy="12" r="9"/><rect x="8" y="8" width="8" height="8" rx="1" fill="currentColor"/>',
    play: '<polygon points="6 4 20 12 6 20 6 4" fill="currentColor"/>',
    pause: '<rect x="6" y="4" width="4" height="16" rx="1" fill="currentColor"/><rect x="14" y="4" width="4" height="16" rx="1" fill="currentColor"/>',
    next: '<path d="M9 6l6 6-6 6M15 6l6 6-6 6"/>',
    prev: '<path d="M15 6l-6 6 6 6M9 6l-6 6 6 6"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    close: '<path d="M18 6L6 18M6 6l12 12"/>',
    full: '<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-5-5"/>',
    bookmark: '<path d="M6 4h12v18l-6-4-6 4z"/>',
    audio: '<path d="M3 10v4h4l5 4V6L7 10z"/><path d="M16 8a5 5 0 0 1 0 8M19 5a9 9 0 0 1 0 14"/>',
    mute: '<path d="M3 10v4h4l5 4V6L7 10z"/><path d="M17 9l5 6M22 9l-5 6"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2"/>',
    moon: '<path d="M21 13A9 9 0 1 1 11 3a7 7 0 0 0 10 10z"/>',
    print: '<path d="M6 9V3h12v6M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
    list: '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
    chevron: '<path d="M9 6l6 6-6 6"/>',
    back: '<path d="M15 18l-6-6 6-6"/>',
    download: '<path d="M12 3v12m-5-5l5 5 5-5M5 21h14"/>',
    edit: '<path d="M14 3l7 7-11 11H3v-7z"/>',
    trash: '<path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1"/>',
    refresh: '<path d="M3 12a9 9 0 0 1 15-6l3 3M21 4v5h-5M21 12a9 9 0 0 1-15 6l-3-3M3 20v-5h5"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 8v.01M11 12h1v5h1"/>',
    warn: '<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.01"/>',
    danger: '<circle cx="12" cy="12" r="9"/><path d="M12 7v6M12 16v.01"/>',

    // Mining-specific
    ore: '<path d="M5 14l3-8 4 4 4-2 3 6H5z"/><circle cx="9" cy="10" r="1" fill="currentColor"/><circle cx="13" cy="12" r="1" fill="currentColor"/><circle cx="16" cy="14" r="1" fill="currentColor"/>',
    pit: '<path d="M3 18h18M5 18l2-7h10l2 7M8 11l4-3 4 3"/>',
    ladder: '<path d="M6 3v18M18 3v18M6 8h12M6 13h12M6 18h12"/>',
    anchor: '<circle cx="12" cy="5" r="2"/><path d="M12 7v14M5 12H3a9 9 0 0 0 18 0h-2M8 11h8"/>',
    weight: '<path d="M5 7h14l-2 13H7z"/><path d="M9 7V4a3 3 0 0 1 6 0v3"/>',
    chain: '<rect x="2" y="9" width="6" height="6" rx="3"/><rect x="16" y="9" width="6" height="6" rx="3"/><rect x="6" y="9" width="12" height="6"/>',
    dropper: '<path d="M9 2h6v6l-3 4-3-4z"/><path d="M12 12v6c0 2-2 3-3 3h-1"/>',
    eye: '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',

    // Misc
    star: '<path d="M12 3l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z"/>',
    lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 1 1 8 0v4"/>',
    key: '<circle cx="8" cy="12" r="4"/><path d="M12 12h10l-2 2M18 12v3"/>',
    cert: '<circle cx="12" cy="9" r="6"/><path d="M9 13l-2 8 5-3 5 3-2-8"/><path d="M9 9l2 2 4-4"/>',
    award: '<circle cx="12" cy="9" r="6"/><path d="M9 14l-2 7 5-3 5 3-2-7"/>',
    pencil: '<path d="M4 20l4-1 11-11-3-3L5 16z"/><path d="M14 6l3 3"/>',
    quote: '<path d="M3 21c0-4 3-7 7-7M14 21c0-4 3-7 7-7"/>',
    chat: '<path d="M21 12a8 8 0 0 1-12 7l-5 1 1-5a8 8 0 1 1 16-3z"/>',
    doc: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/>',
    chart: '<path d="M3 21V3M3 21h18M7 17v-6M11 17v-9M15 17v-4M19 17v-7"/>',
    cog: '<circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1.2l2-1.5-2-3.4-2.3.9a7 7 0 0 0-2-1.2L14 3h-4l-.6 2.6a7 7 0 0 0-2 1.2l-2.3-.9-2 3.4 2 1.5A7 7 0 0 0 5 12c0 .4 0 .8.1 1.2l-2 1.5 2 3.4 2.3-.9a7 7 0 0 0 2 1.2L10 21h4l.6-2.6a7 7 0 0 0 2-1.2l2.3.9 2-3.4-2-1.5c.1-.4.1-.8.1-1.2z"/>',
  };

  function get(name, opts = {}) {
    const path = set[name];
    if (!path) return '';
    return wrap(path, opts);
  }

  /* ============================================================
     3D SET — Ikon berlapis premium (gradien + bayangan + kilau).
     Token %% diganti ID unik per pemanggilan agar url(#id)
     tidak bertabrakan saat ikon dipakai berulang di halaman.
     viewBox 0 0 64 64. Murni dekoratif (aria-hidden).
     ============================================================ */
  const set3d = {
    helmet: `<defs><linearGradient id="%%-a" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fde68a"/><stop offset="1" stop-color="#f59e0b"/></linearGradient><linearGradient id="%%-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fbbf24"/><stop offset="1" stop-color="#b45309"/></linearGradient></defs><ellipse cx="32" cy="55" rx="21" ry="4" fill="rgba(0,0,0,0.35)"/><path d="M12 40 a20 20 0 0 1 40 0 z" fill="url(#%%-a)"/><rect x="8" y="40" width="48" height="7" rx="3.5" fill="url(#%%-b)"/><path d="M20 31 a20 20 0 0 1 8-13" stroke="#fffbeb" stroke-width="4" stroke-linecap="round" fill="none" opacity="0.75"/><rect x="28" y="11" width="8" height="9" rx="2" fill="#92400e"/>`,
    glasses: `<defs><linearGradient id="%%-a" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e0f2fe"/><stop offset="1" stop-color="#0284c7"/></linearGradient></defs><ellipse cx="32" cy="55" rx="21" ry="4" fill="rgba(0,0,0,0.35)"/><rect x="8" y="22" width="22" height="19" rx="8" fill="url(#%%-a)"/><rect x="34" y="22" width="22" height="19" rx="8" fill="url(#%%-a)"/><rect x="28" y="26" width="8" height="5" rx="2.5" fill="#075985"/><path d="M8 27 L3 22 M56 27 L61 22" stroke="#075985" stroke-width="3" stroke-linecap="round"/><path d="M14 27 h7 M43 27 h7" stroke="#ffffff" stroke-width="3" stroke-linecap="round" opacity="0.85"/>`,
    boots: `<defs><linearGradient id="%%-a" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fcd34d"/><stop offset="1" stop-color="#92400e"/></linearGradient></defs><ellipse cx="32" cy="55" rx="21" ry="4" fill="rgba(0,0,0,0.35)"/><path d="M22 8 h14 v17 l10 8 5 9 v6 H22 z" fill="url(#%%-a)"/><path d="M22 20 h14 M22 28 l14 2" stroke="#78350f" stroke-width="2.5" stroke-linecap="round"/><rect x="20" y="48" width="33" height="6" rx="3" fill="#1f2937"/><path d="M26 12 v10" stroke="#fffbeb" stroke-width="3" stroke-linecap="round" opacity="0.6"/>`,
    vest: `<defs><linearGradient id="%%-a" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d9f99d"/><stop offset="1" stop-color="#4d7c0f"/></linearGradient></defs><ellipse cx="32" cy="55" rx="21" ry="4" fill="rgba(0,0,0,0.35)"/><path d="M20 12 L28 8 H36 L44 12 L48 22 L40 24 V52 H24 V24 L16 22 Z" fill="url(#%%-a)"/><rect x="24" y="32" width="16" height="5" fill="#e2e8f0"/><rect x="24" y="41" width="16" height="5" fill="#e2e8f0"/><path d="M24 14 V26" stroke="#ffffff" stroke-width="3" stroke-linecap="round" opacity="0.6"/>`,
    glove: `<defs><linearGradient id="%%-a" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fdba74"/><stop offset="1" stop-color="#c2410c"/></linearGradient></defs><ellipse cx="32" cy="55" rx="20" ry="4" fill="rgba(0,0,0,0.35)"/><path d="M22 30 V15 a4 4 0 0 1 8 0 V27 M30 27 V10 a4 4 0 0 1 8 0 V27 M38 27 V13 a4 4 0 0 1 8 0 V32 c0 10-6 17-14 17 -8 0-12-6-12-13 V32" fill="url(#%%-a)"/><path d="M22 34 l-4 12" stroke="#7c2d12" stroke-width="3" stroke-linecap="round"/><rect x="20" y="44" width="26" height="8" rx="3" fill="#7c2d12"/>`,
    mask: `<defs><linearGradient id="%%-a" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#99f6e4"/><stop offset="1" stop-color="#0d9488"/></linearGradient></defs><ellipse cx="32" cy="55" rx="21" ry="4" fill="rgba(0,0,0,0.35)"/><path d="M18 26 a14 14 0 0 1 28 0 v6 a14 12 0 0 1-28 0 z" fill="url(#%%-a)"/><circle cx="32" cy="38" r="8" fill="#0f766e"/><circle cx="32" cy="38" r="4" fill="#99f6e4"/><path d="M18 28 L8 22 M46 28 L56 22" stroke="#115e59" stroke-width="3" stroke-linecap="round"/>`,
    shield: `<defs><linearGradient id="%%-a" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#93c5fd"/><stop offset="1" stop-color="#1d4ed8"/></linearGradient></defs><ellipse cx="32" cy="56" rx="19" ry="3.5" fill="rgba(0,0,0,0.35)"/><path d="M32 6 L50 13 V30 c0 12-8 20-18 24 C22 50 14 42 14 30 V13 Z" fill="url(#%%-a)"/><path d="M25 31 l5 5 9-11" stroke="#ffffff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M20 17 L24 15 V29" stroke="#ffffff" stroke-width="3" stroke-linecap="round" fill="none" opacity="0.5"/>`,
    leaf: `<defs><linearGradient id="%%-a" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#86efac"/><stop offset="1" stop-color="#15803d"/></linearGradient></defs><ellipse cx="32" cy="56" rx="18" ry="3.5" fill="rgba(0,0,0,0.35)"/><path d="M32 8 C48 16 52 36 32 54 C12 36 16 16 32 8 Z" fill="url(#%%-a)"/><path d="M32 15 V48 M32 25 L40 29 M32 33 L24 37 M32 41 L40 45" stroke="#14532d" stroke-width="2.5" stroke-linecap="round" fill="none"/>`,
    award: `<defs><linearGradient id="%%-a" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fde047"/><stop offset="1" stop-color="#b45309"/></linearGradient></defs><ellipse cx="32" cy="56" rx="19" ry="3.5" fill="rgba(0,0,0,0.35)"/><path d="M24 30 L17 52 L25 48 L32 54 L39 48 L47 52 L40 30 Z" fill="#dc2626"/><path d="M24 30 L17 52 L25 48 L25 30 Z" fill="#991b1b"/><circle cx="32" cy="22" r="14" fill="url(#%%-a)"/><polygon points="32,13 34.5,19.5 41.5,19.5 36,23.5 38,30 32,26 26,30 28,23.5 22.5,19.5 29.5,19.5" fill="#92400e"/>`,
    siren: `<defs><linearGradient id="%%-a" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fca5a5"/><stop offset="1" stop-color="#dc2626"/></linearGradient></defs><ellipse cx="32" cy="55" rx="20" ry="4" fill="rgba(0,0,0,0.35)"/><rect x="14" y="44" width="36" height="8" rx="3" fill="#7f1d1d"/><path d="M20 44 a12 12 0 0 1 24 0 z" fill="url(#%%-a)"/><circle cx="32" cy="37" r="5" fill="#fecaca"/><path d="M12 30 a24 24 0 0 1 6-12 M52 30 a24 24 0 0 0-6-12" stroke="#f87171" stroke-width="3" stroke-linecap="round" fill="none"/>`,
    alert: `<defs><linearGradient id="%%-a" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fde047"/><stop offset="1" stop-color="#f59e0b"/></linearGradient></defs><ellipse cx="32" cy="56" rx="19" ry="3.5" fill="rgba(0,0,0,0.35)"/><path d="M32 8 L56 50 H8 Z" fill="url(#%%-a)" stroke="#92400e" stroke-width="3" stroke-linejoin="round"/><rect x="30" y="22" width="4.5" height="14" rx="2" fill="#451a03"/><circle cx="32" cy="42" r="3" fill="#451a03"/>`,
    fire: `<defs><linearGradient id="%%-a" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f87171"/><stop offset="1" stop-color="#b91c1c"/></linearGradient><linearGradient id="%%-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fdba74"/><stop offset="1" stop-color="#ea580c"/></linearGradient></defs><ellipse cx="32" cy="55" rx="18" ry="4" fill="rgba(0,0,0,0.35)"/><path d="M32 6 c4 10 14 14 14 28 a14 14 0 1 1-28 0 c0-6 3-9 6-12 -2 6 4 8 6 8 -3-8-1-16 2-24z" fill="url(#%%-a)"/><path d="M32 25 c2 6 8 8 8 15 a8 8 0 1 1-16 0 c0-3 2-5 3-7 -1 3 3 4 4 4 -2-4-1-8 1-12z" fill="url(#%%-b)"/>`,
    lock: `<defs><linearGradient id="%%-a" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#cbd5e1"/><stop offset="1" stop-color="#334155"/></linearGradient></defs><ellipse cx="32" cy="56" rx="19" ry="3.5" fill="rgba(0,0,0,0.35)"/><path d="M22 30 V20 a10 10 0 0 1 20 0 V30" stroke="#e2e8f0" stroke-width="7" fill="none" stroke-linecap="round"/><rect x="16" y="30" width="32" height="22" rx="6" fill="url(#%%-a)"/><circle cx="32" cy="39" r="4.5" fill="#fbbf24"/><rect x="30.5" y="39" width="3" height="7" rx="1.5" fill="#92400e"/>`,
  };

  let seq3d = 0;

  function get3d(name, opts = {}) {
    const raw = set3d[name];
    if (!raw) return '';
    seq3d += 1;
    const body = raw.split('%%').join('u' + seq3d);
    const size = opts.size || 40;
    const cls = opts.class || '';
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="${size}" height="${size}" class="${cls}" aria-hidden="true" focusable="false">${body}</svg>`;
  }

  return { get, get3d };
})();
