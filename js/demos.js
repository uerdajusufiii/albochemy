"use strict";
/* =========================================================================
   DEMONSTRATION CLIPS — animated drawings of each experiment
   Each experiment has a small `demo` description. This draws it as an SVG
   picture; adding the class "play" to its container animates it from the
   starting state to the result. With reduced motion, the result appears
   instantly instead.
   ========================================================================= */
const Demo = (function () {
  function rng(seed) {
    let s = 7;
    for (const ch of String(seed)) s = (s * 31 + ch.charCodeAt(0)) >>> 0;
    return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
  }
  const f2 = (n) => (Math.round(n * 100) / 100).toString();
  const TABLE = '<line class="table" x1="24" y1="187" x2="216" y2="187"/>';

  function bubbles(r, n, xMin, xMax, yBottom, top, rmax) {
    let s = "";
    for (let i = 0; i < n; i++) {
      const cx = xMin + r() * (xMax - xMin), cy = yBottom - r() * 8, rad = 1.6 + r() * (rmax || 3);
      s += `<circle class="bub" cx="${f2(cx)}" cy="${f2(cy)}" r="${f2(rad)}" style="--d:${f2(r() * 1.6)}s;--rise:${f2(top - cy + 4)}px"/>`;
    }
    return s;
  }
  function thermometer(dir) {
    const arrow = dir === "up" ? '<path class="t-arrow" d="M214 74l7-11 7 11z" fill="#d9534f"/>' : '<path class="t-arrow" d="M214 63l7 11 7-11z" fill="#2f78c4"/>';
    return `<rect x="193" y="36" width="12" height="126" rx="6" fill="var(--surface)" stroke="var(--glass)" stroke-width="2"/>
      <circle cx="199" cy="167" r="10" fill="${dir === "down" ? "#2f78c4" : "#d9534f"}"/>
      <rect class="merc" x="196" y="52" width="6" height="112" rx="3"/>${arrow}`;
  }
  function halo(uid, color, cx, cy, rad) {
    return `<defs><radialGradient id="h-${uid}"><stop offset="0" stop-color="${color}" stop-opacity=".95"/><stop offset="1" stop-color="${color}" stop-opacity="0"/></radialGradient></defs>
      <circle class="halo" cx="${cx}" cy="${cy}" r="${rad}" fill="url(#h-${uid})"/>`;
  }

  /* ---------- Beaker scene (most experiments + the game cup) ---------- */
  function beaker(sp, uid, r) {
    const lvl = sp.level || 0.55;
    const T = 180 - lvl * 140;
    let back = "", inside = "", front = "", over = "";
    if (sp.glow) back += halo(uid, sp.glow, 120, 120, 100);
    if (sp.burette) {
      back += `<rect x="114" y="0" width="12" height="26" fill="var(--glass-fill)" stroke="var(--glass)" stroke-width="2"/><rect x="116" y="4" width="8" height="20" fill="#e0f2fe"/>
        <rect x="107" y="26" width="26" height="5" rx="2" fill="var(--glass)"/><path d="M118 31h4l-1 6h-2z" fill="var(--glass)"/>`;
      for (let i = 0; i < 4; i++) over += `<circle class="drip" cx="120" cy="40" r="2.6" fill="#93c5fd" style="--d:${f2(0.4 + i * 0.25)}s;--fall:${f2(T - 40)}px"/>`;
    }
    if (sp.crystals) {
      back += `<rect x="56" y="24" width="128" height="8" rx="3" fill="#f59e0b"/><path d="M184 24l10 4-10 4z" fill="#fcd9a5"/><line x1="120" y1="32" x2="120" y2="152" stroke="#94a3b8" stroke-width="1.5"/>`;
    }
    if (sp.nail) {
      back += `<rect x="116" y="26" width="8" height="146" rx="2" fill="#9ca3af"/><rect x="105" y="21" width="30" height="6" rx="2" fill="#6b7280"/>`;
    }
    if (sp.electrodes) {
      back += `<path d="M97 24V12h19M143 24V12h-19" fill="none" stroke="var(--text-3)" stroke-width="2"/>
        <line x1="116" y1="4" x2="116" y2="20" stroke="var(--text-2)" stroke-width="2.5"/><line x1="124" y1="8" x2="124" y2="16" stroke="var(--text-2)" stroke-width="4"/>
        <text x="80" y="56" font-size="18" font-weight="800" fill="var(--text-2)">−</text><text x="154" y="56" font-size="16" font-weight="800" fill="var(--text-2)">+</text>
        <rect x="92" y="24" width="10" height="142" rx="1" fill="#b87333"/><rect class="anode" x="138" y="24" width="10" height="142" rx="1" fill="#b87333"/>`;
    }
    // liquid
    if (sp.layers) {
      const H = lvl * 140, h = H / sp.layers.length;
      sp.layers.forEach((c, i) => { inside += `<rect class="layer" x="60" y="${f2(180 - (i + 1) * h)}" width="120" height="${f2(h + 1)}" fill="${c}" style="--d:${f2(i * 0.45)}s"/>`; });
      if (sp.blobs) {
        const top = 180 - h;
        for (let i = 0; i < 5; i++) inside += `<circle class="blob" cx="${f2(84 + r() * 72)}" cy="${f2(top - 2)}" r="${f2(5 + r() * 4)}" fill="${sp.blobs}" style="--d:${f2(r() * 2)}s;--rise:${f2(-h * 0.85)}px"/>`;
      }
    } else {
      inside += `<rect class="liq" x="60" y="${f2(T)}" width="120" height="${f2(186 - T)}"/><rect class="shine" x="60" y="${f2(T)}" width="120" height="3"/>`;
    }
    if (sp.drop) inside += `<circle class="dye" cx="120" cy="${f2(T + 4)}" r="46" fill="${sp.drop}"/>`;
    if (sp.cross) inside += `<path class="xmark" d="M106 142l28 26M134 142l-28 26" stroke="#111827" stroke-width="5" stroke-linecap="round"/>`;
    if (sp.solid) {
      const sy = sp.solid.float ? T - 6 : 163;
      inside += `<rect class="solid" x="105" y="${f2(sy)}" width="30" height="${sp.solid.float ? 9 : 14}" rx="4" fill="${sp.solid.c}" stroke="rgba(0,0,0,.15)"/>`;
    }
    if (sp.nail) inside += `<rect class="coat" x="115" y="${f2(T)}" width="10" height="${f2(172 - T)}" rx="2" fill="${sp.nail}"/>`;
    if (sp.electrodes) inside += `<rect class="coat" x="89" y="${f2(T)}" width="16" height="${f2(166 - T)}" rx="3" fill="${sp.electrodes.coat}"/>`;
    if (sp.precip) {
      for (let i = 0; i < 30; i++) {
        inside += `<circle class="ppt" cx="${f2(76 + r() * 88)}" cy="${f2(170 + r() * 8)}" r="${f2(1.6 + r() * 2)}" fill="${sp.precip}" style="--fy:${f2(-(18 + r() * (150 - T)))}px;--d:${f2(0.3 + r() * 1.4)}s"/>`;
      }
    }
    if (sp.crystals) {
      const pts = [[120, 70, 8], [120, 96, 11], [120, 124, 9], [120, 146, 7], [90, 172, 7], [148, 173, 8], [104, 174, 5]];
      pts.forEach((p, i) => {
        const [cx, cy, s] = p;
        inside += `<path class="xtal" d="M${cx} ${cy - s}L${f2(cx + s * 0.75)} ${cy}L${cx} ${cy + s}L${f2(cx - s * 0.75)} ${cy}z" fill="${sp.crystals}" stroke="rgba(30,27,75,.35)" stroke-width="1" style="--d:${f2(0.5 + i * 0.3)}s"/>`;
      });
    }
    if (sp.bubbles) inside += bubbles(r, sp.bubbles === 2 ? 16 : 8, 80, 160, 174, T, 3);
    if (sp.cloudy) inside += `<rect class="cloud" x="60" y="${f2(T)}" width="120" height="${f2(186 - T)}" fill="${sp.cloudy}"/>`;
    if (sp.foam) {
      over += `<g class="foam" style="transform-origin:120px ${f2(T)}px"><rect x="71" y="30" width="98" height="${f2(T - 28)}" fill="${sp.foam}"/>
        <path d="M58 44C48 22 74 4 96 13 108 1 132 1 144 13c22-9 48 9 38 31-6 12-118 12-124 0z" fill="${sp.foam}"/>
        <path d="M62 44c-6 22 0 40 4 46 3 5 7 2 7-3 0-12-3-26-1-40z" fill="${sp.foam}"/><path d="M178 44c6 20 1 36-3 42-3 4-7 1-6-4 1-12 2-24 0-36z" fill="${sp.foam}"/>
        <g fill="#fff" opacity=".5"><circle cx="92" cy="26" r="4"/><circle cx="138" cy="22" r="3"/><circle cx="116" cy="34" r="5"/></g></g>`;
    }
    if (sp.waft) {
      for (let i = 0; i < 3; i++) over += `<path class="waft" d="M${100 + i * 20} 34q6-6 0-12t0-12" fill="none" stroke="#94a3b8" stroke-width="2.5" stroke-linecap="round" style="--d:${f2(i * 0.5)}s"/>`;
    }
    if (sp.label) over += `<text class="cup-text" x="120" y="${f2(T + (180 - T) / 2 + 12)}" text-anchor="middle" font-size="${sp.label.length > 3 ? 22 : 34}" font-weight="800" fill="var(--text)" font-family="var(--mono)">${sp.label}</text>`;
    front += `<path class="glass" d="M62 38h8v128a15 15 0 0 0 15 15h70a15 15 0 0 0 15-15V38h8"/><path class="glass-line" d="M152 70h12M156 95h8M152 120h12M156 145h8"/>`;
    if (sp.temp) front += thermometer(sp.temp);
    return `${TABLE}<defs><clipPath id="c-${uid}"><path d="M71 40v126a14 14 0 0 0 14 14h70a14 14 0 0 0 14-14V40z"/></clipPath></defs>
      ${back}<g clip-path="url(#c-${uid})">${inside}</g>${front}${over}`;
  }

  /* ---------- Flame scene (flame tests, burning magnesium, fuels) ---------- */
  function flame(sp, uid) {
    let s = TABLE;
    if (sp.glare) s += halo(uid, "#ffffff", 120, 70, 110);
    const shift = sp.can ? 30 : 0;
    s += `<g transform="translate(0 ${shift})"><path class="fl-out" d="M120 26C98 58 100 86 106 100c3 8 8 12 14 12s11-4 14-12c6-14 8-42-14-74z"/>
      <path d="M120 64c-8 16-8 30-5 38 2 4 4 5 5 5s3-1 5-5c3-8 3-22-5-38z" fill="#bfdbfe" opacity=".9"/></g>`;
    if (sp.can) {
      s += `<rect x="100" y="150" width="40" height="32" rx="7" fill="#e0f2fe" stroke="var(--glass)" stroke-width="2"/><rect x="117" y="138" width="6" height="13" fill="#78716c"/>
        <rect x="90" y="12" width="60" height="40" rx="5" fill="#c2410c"/><rect x="94" y="16" width="52" height="10" rx="3" fill="#7dd3fc" opacity=".8"/>`;
      s += thermometer("up");
    } else {
      s += `<path d="M86 181H34" stroke="#f59e0b" stroke-width="4" stroke-linecap="round"/><rect x="86" y="176" width="68" height="10" rx="4" fill="var(--text-3)"/>
        <rect x="111" y="112" width="18" height="66" rx="2" fill="#94a3b8"/><rect x="108" y="150" width="24" height="9" rx="2" fill="#64748b"/>`;
    }
    if (sp.splint) s += `<g class="splint"><line x1="14" y1="70" x2="108" y2="76" stroke="#b45309" stroke-width="6" stroke-linecap="round"/><circle cx="108" cy="76" r="4" fill="#78350f"/></g>`;
    if (sp.glare) s += `<g class="splint"><path d="M10 64l30 6M10 76l30-6" stroke="var(--text-3)" stroke-width="3" stroke-linecap="round"/><line x1="40" y1="70" x2="112" y2="74" stroke="#d4d4d8" stroke-width="4" stroke-linecap="round"/></g>`;
    return s;
  }

  /* ---------- Paper chromatography ---------- */
  function paper(sp, uid) {
    const bands = sp.bands || ["#2563eb", "#db2777", "#d4a92c"];
    let b = "";
    bands.forEach((c, i) => { const y = 128 - i * 24; b += `<ellipse class="band" cx="120" cy="${y}" rx="9" ry="5" fill="${c}" style="--fy:${150 - y}px"/>`; });
    return `${TABLE}<line x1="66" y1="9" x2="174" y2="9" stroke="var(--text-3)" stroke-width="4" stroke-linecap="round"/><rect x="112" y="6" width="16" height="10" rx="2" fill="var(--text-3)"/>
      <defs><clipPath id="p-${uid}"><rect x="106" y="14" width="28" height="162" rx="2"/></clipPath></defs>
      <rect x="80" y="160" width="80" height="22" fill="#bfdbfe" opacity=".7"/>
      <rect x="106" y="14" width="28" height="162" rx="2" fill="#ffffff" stroke="var(--border-2)"/>
      <g clip-path="url(#p-${uid})"><rect class="front" x="106" y="34" width="28" height="142" fill="#bfdbfe" opacity=".55"/>
      <line x1="106" y1="150" x2="134" y2="150" stroke="#64748b" stroke-width="1.2"/>${b}<circle class="inkdot" cx="120" cy="150" r="5" fill="#111827"/></g>
      <path class="glass" d="M78 118v58a8 8 0 0 0 8 8h68a8 8 0 0 0 8-8v-58"/>`;
  }

  /* ---------- Lemon battery ---------- */
  function lemon(sp, uid) {
    return `${TABLE}${halo(uid, "#d9534f", 186, 50, 34)}
      <ellipse cx="104" cy="140" rx="64" ry="42" fill="#f1d36a" stroke="#d4a92c" stroke-width="2"/><ellipse cx="170" cy="140" rx="6" ry="4" fill="#d4a92c"/>
      <rect x="70" y="72" width="9" height="62" rx="1" fill="#9ca3af"/><rect x="126" y="72" width="9" height="62" rx="1" fill="#c2410c"/>
      <text x="60" y="66" font-size="11" font-weight="700" fill="var(--text-2)">Zn</text><text x="124" y="66" font-size="11" font-weight="700" fill="var(--text-2)">Cu</text>
      <path d="M74 72V28h108v14" fill="none" stroke="var(--text-3)" stroke-width="2.5"/><path d="M130 72V60h46" fill="none" stroke="var(--text-3)" stroke-width="2.5"/>
      <path class="flow" d="M74 72V28h108v14" fill="none" stroke="#60a5fa" stroke-width="2.5"/><path class="flow" d="M130 72V60h46" fill="none" stroke="#60a5fa" stroke-width="2.5"/>
      <path class="led" d="M176 62V52a10 10 0 0 1 20 0v10z" stroke="var(--text-3)" stroke-width="2"/>`;
  }

  /* ---------- Balloon on a flask ---------- */
  function balloon(sp, uid, r) {
    return `${TABLE}<defs><clipPath id="b-${uid}"><path d="M106 60v35L70 168a7 7 0 0 0 6 11h88a7 7 0 0 0 6-11L134 95V60z"/></clipPath></defs>
      <g clip-path="url(#b-${uid})"><rect class="liq" x="60" y="140" width="120" height="46"/>${bubbles(r, 16, 82, 158, 176, 140, 2.6)}</g>
      <path class="glass" d="M104 60v34L68 168a9 9 0 0 0 8 13h88a9 9 0 0 0 8-13L136 94V60"/>
      <g class="balloon"><ellipse cx="120" cy="30" rx="30" ry="26" fill="#d9534f"/><ellipse cx="110" cy="22" rx="7" ry="9" fill="#fff" opacity=".35"/><rect x="104" y="50" width="32" height="14" rx="4" fill="#b8433f"/></g>`;
  }

  /* ---------- Heated test tube ---------- */
  function tube(sp, uid, r) {
    let s = `${TABLE}<line x1="64" y1="40" x2="64" y2="186" stroke="var(--text-3)" stroke-width="4"/><rect x="62" y="40" width="40" height="6" rx="2" fill="var(--text-3)"/>
      <ellipse class="solid-c" cx="106" cy="134" rx="11" ry="9"/><rect class="solid-c" x="95" y="122" width="22" height="12"/>
      <path class="glass" d="M92 30v106a14 14 0 0 0 28 0V30"/><rect x="88" y="22" width="36" height="12" rx="3" fill="#64748b"/>
      <path d="M106 150c-8 12-7 22-5 26 2 4 4 6 5 6s3-2 5-6c2-4 3-14-5-26z" fill="#60a5fa" opacity=".75"/><rect x="100" y="182" width="12" height="5" fill="var(--text-3)"/>`;
    if (sp.lime) {
      s += `<path d="M112 22V12h66v96" fill="none" stroke="var(--glass)" stroke-width="3"/>
        <defs><clipPath id="t-${uid}"><path d="M168 100v70a10 10 0 0 0 20 0v-70z"/></clipPath></defs>
        <g clip-path="url(#t-${uid})"><rect x="160" y="128" width="40" height="60" fill="#f1f5f9"/>${bubbles(r, 6, 172, 184, 176, 128, 2)}<rect class="cloud" x="160" y="128" width="40" height="60" fill="#ffffff"/></g>
        <path class="glass" d="M166 100v70a12 12 0 0 0 24 0v-70"/>`;
    } else {
      s += `<g class="coat" fill="#bfdbfe"><circle cx="100" cy="46" r="2.5"/><circle cx="111" cy="54" r="2"/><circle cx="104" cy="62" r="2.5"/><circle cx="113" cy="40" r="2"/></g>`;
    }
    return s;
  }

  /* ---------- Simple distillation ---------- */
  function distill(sp, uid, r) {
    let drops = "";
    for (let i = 0; i < 3; i++) drops += `<circle class="drip" cx="190" cy="122" r="2.4" fill="#93c5fd" style="--d:${f2(1 + i * 0.3)}s;--fall:30px"/>`;
    return `${TABLE}<defs><clipPath id="d-${uid}"><circle cx="64" cy="138" r="28"/></clipPath></defs>
      <g clip-path="url(#d-${uid})"><rect x="30" y="136" width="70" height="40" fill="${sp.from || "#1e3a8a"}"/>${bubbles(r, 8, 46, 82, 162, 136, 2.2)}</g>
      <circle class="glass" cx="64" cy="138" r="30"/><path class="glass" d="M56 110V74h16v36" fill="none"/>
      <path d="M64 168c-7 9-6 15-4 17 2 2 6 2 8 0 2-2 3-8-4-17z" fill="#60a5fa"/>
      <path d="M64 74v-8h22" fill="none" stroke="var(--glass)" stroke-width="3"/>
      <path class="glass" d="M84 54l106 52-6 12L78 66z"/><path d="M86 61l100 50" stroke="var(--glass)" stroke-width="2"/>
      <path d="M100 58v-10M168 102v10" stroke="#60a5fa" stroke-width="3"/>
      ${drops}
      <rect class="rise" x="170" y="154" width="48" height="28" fill="#dbeafe"/>
      <path class="glass" d="M168 132v44a8 8 0 0 0 8 8h36a8 8 0 0 0 8-8v-44"/>`;
  }


  /* ---------- Rack of test tubes (indicator rainbows, precipitates, gas tests) ---------- */
  function rack(sp, uid, r) {
    const tubes = (sp.tubes || []).slice(0, 6), n = tubes.length || 1, gap = Math.min(34, 168 / n), x0 = 120 - (gap * (n - 1)) / 2;
    let back = "", body = "";
    tubes.forEach((t, i) => {
      const x = x0 + i * gap, d = f2(0.35 + i * 0.32);
      let inside = `<rect class="tl" x="${f2(x - 9)}" y="104" width="18" height="80" style="--tf:${t.from};--tt:${t.to};--d:${d}s"/>`;
      if (t.bubbles) for (let k = 0; k < 4; k++) inside += `<circle class="bub" cx="${f2(x - 4 + r() * 8)}" cy="${f2(170 - r() * 8)}" r="${f2(1.4 + r() * 1.6)}" style="--d:${f2(r() * 1.4)}s;--rise:-60px"/>`;
      if (t.precip) for (let k = 0; k < 14; k++) inside += `<circle class="ppt" cx="${f2(x - 6 + r() * 12)}" cy="${f2(168 + r() * 9)}" r="${f2(1.8 + r() * 1.8)}" fill="${t.precip}" stroke="rgba(0,0,0,.35)" stroke-width=".7" style="--fy:${f2(-(20 + r() * 50))}px;--d:${f2(0.5 + i * 0.32 + r() * 0.8)}s"/>`;
      back += `<clipPath id="rk-${uid}-${i}"><path d="M${f2(x - 9)} 50v126a9 9 0 0 0 18 0V50z"/></clipPath>`;
      body += `<g clip-path="url(#rk-${uid}-${i})">${inside}</g><path class="glass" d="M${f2(x - 11)} 44v132a11 11 0 0 0 22 0V44"/>`;
    });
    return `${TABLE}<defs>${back}</defs><rect x="16" y="176" width="208" height="10" rx="4" fill="var(--border-2)"/>
      <rect x="22" y="138" width="6" height="40" fill="var(--border-2)"/><rect x="212" y="138" width="6" height="40" fill="var(--border-2)"/>${body}
      <rect x="16" y="130" width="208" height="12" rx="4" fill="var(--surface)" stroke="var(--glass)" stroke-width="2"/>`;
  }

  /* ---------- Circuit: beaker with electrodes, battery and bulb ---------- */
  function circuit(sp, uid, r) {
    let inside = `<rect class="liq" x="60" y="96" width="120" height="90"/><rect class="shine" x="60" y="96" width="120" height="3"/>`;
    if (sp.bubbles) {
      for (let k = 0; k < 7; k++) inside += `<circle class="bub" cx="${f2(90 + r() * 8)}" cy="${f2(166 - r() * 30)}" r="${f2(1.6 + r() * 1.8)}" style="--d:${f2(r() * 1.6)}s;--rise:-60px"/>`;
      for (let k = 0; k < 4; k++) inside += `<circle class="bub" cx="${f2(142 + r() * 8)}" cy="${f2(166 - r() * 30)}" r="${f2(1.6 + r() * 1.8)}" style="--d:${f2(r() * 1.6)}s;--rise:-60px"/>`;
    }
    if (sp.coat) inside += `<rect class="coat" x="88" y="96" width="16" height="70" rx="3" fill="${sp.coat}"/>`;
    return `${TABLE}${sp.lit ? halo(uid, "#f1d36a", 200, 40, 40) : ""}
      <path d="M96 60V24H40V44M144 60V20H200V30" fill="none" stroke="var(--text-3)" stroke-width="3" stroke-linejoin="round"/>
      ${sp.lit ? `<path class="flow" d="M96 60V24H40V44M144 60V20H200V30" fill="none" stroke="#60a5fa" stroke-width="3"/>` : ""}
      <rect x="22" y="44" width="36" height="22" rx="4" fill="var(--text-2)"/><rect x="58" y="50" width="5" height="10" rx="1" fill="var(--text-2)"/><text x="31" y="60" font-size="12" font-weight="800" fill="var(--surface)">+ −</text>
      <path class="bulb ${sp.lit ? "lit" : ""}" d="M190 46a12 12 0 1 1 20 0c-3 4-4 6-4 10h-12c0-4-1-6-4-10z" stroke="var(--text-3)" stroke-width="2"/><rect x="194" y="56" width="12" height="7" rx="2" fill="var(--text-3)"/>
      <defs><clipPath id="c-${uid}"><path d="M71 40v126a14 14 0 0 0 14 14h70a14 14 0 0 0 14-14V40z"/></clipPath></defs>
      <g clip-path="url(#c-${uid})">${inside}</g>
      <rect x="90" y="58" width="12" height="108" rx="2" fill="#4b5563"/><rect x="138" y="58" width="12" height="108" rx="2" fill="#4b5563"/>
      <path class="glass" d="M62 38h8v128a15 15 0 0 0 15 15h70a15 15 0 0 0 15-15V38h8"/>`;
  }

  /* ---------- Egg in a jar ---------- */
  function egg(sp, uid, r) {
    let b = "";
    if (sp.bubbles) for (let k = 0; k < 12; k++) b += `<circle class="bub" cx="${f2(84 + r() * 72)}" cy="${f2(150 - r() * 30)}" r="${f2(1.4 + r() * 2)}" style="--d:${f2(r() * 1.6)}s;--rise:-70px"/>`;
    return `${TABLE}<defs><clipPath id="c-${uid}"><path d="M60 52v114a14 14 0 0 0 14 14h92a14 14 0 0 0 14-14V52z"/></clipPath></defs>
      <g clip-path="url(#c-${uid})"><rect class="liq" x="50" y="70" width="140" height="120"/>
      <ellipse cx="120" cy="134" rx="30" ry="40" fill="#fde68a" opacity=".85"/><ellipse cx="120" cy="140" rx="13" ry="13" fill="#f59e0b" opacity=".8"/>
      <ellipse class="shell" cx="120" cy="134" rx="31" ry="41" fill="#f4ece0" stroke="#d6c7b0" stroke-width="2"/>${b}</g>
      <path class="glass" d="M52 46h4v120a16 16 0 0 0 16 16h96a16 16 0 0 0 16-16V46h4"/><rect x="48" y="36" width="144" height="12" rx="4" fill="var(--text-3)" opacity=".8"/>`;
  }

  /* ---------- Cloud in a jar ---------- */
  function jar(sp, uid, r) {
    const c = sp.cloud || "#f1f5f9";
    let cl = "";
    for (let k = 0; k < 7; k++) cl += `<circle class="cl" cx="${f2(86 + r() * 68)}" cy="${f2(70 + r() * 34)}" r="${f2(14 + r() * 12)}" fill="${c}" style="--d:${f2(0.6 + k * 0.22)}s"/>`;
    return `${TABLE}<defs><clipPath id="c-${uid}"><path d="M64 48v120a12 12 0 0 0 12 12h88a12 12 0 0 0 12-12V48z"/></clipPath></defs>
      <g clip-path="url(#c-${uid})"><rect x="60" y="140" width="120" height="48" fill="#bfdbfe"/>${cl}
      ${[0, 1, 2].map((k) => `<path class="waft" d="M${100 + k * 20} 140q6-6 0-12t0-12" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" style="--d:${k * 0.4}s"/>`).join("")}</g>
      <path class="glass" d="M58 44v124a14 14 0 0 0 14 14h96a14 14 0 0 0 14-14V44"/>
      <rect x="52" y="34" width="136" height="12" rx="4" fill="var(--text-3)"/>
      ${sp.ice ? `<rect x="82" y="16" width="24" height="20" rx="4" fill="#e0f2fe" stroke="#93c5fd" stroke-width="2"/><rect x="110" y="12" width="26" height="24" rx="4" fill="#e0f2fe" stroke="#93c5fd" stroke-width="2"/><rect x="140" y="18" width="20" height="18" rx="4" fill="#e0f2fe" stroke="#93c5fd" stroke-width="2"/>` : ""}`;
  }

  /* ---------- Candle (with a jar lowered over it) ---------- */
  function candle(sp, uid) {
    return `${TABLE}${halo(uid, sp.color || "#f59e0b", 120, 84, 46).replace('class="halo"', 'class="chalo"')}
      <rect x="108" y="104" width="24" height="80" rx="4" fill="#fef3c7" stroke="#e7d5a5" stroke-width="2"/><line x1="120" y1="104" x2="120" y2="94" stroke="#44403c" stroke-width="2.5"/>
      <g class="cflame"><path d="M120 58c-10 14-12 26-8 33 2 3 5 5 8 5s6-2 8-5c4-7 2-19-8-33z" fill="${sp.color || "#f59e0b"}"/><path d="M120 74c-4 7-5 12-3 15 1 2 2 2 3 2s2 0 3-2c2-3 1-8-3-15z" fill="#fff7cc"/></g>
      <path class="smoke" d="M120 90c-6-10 6-16 0-26s6-16 0-26" fill="none" stroke="#94a3b8" stroke-width="3" stroke-linecap="round"/>
      ${sp.jar ? `<g class="cjar"><path class="glass" d="M76 186V44a10 10 0 0 1 10-10h68a10 10 0 0 1 10 10v142"/></g>` : ""}`;
  }

  function svg(spec, uid, extra) {
    const sp = Object.assign({}, spec, extra || {});
    const r = rng(uid);
    const from = sp.from || sp.color || "#e0f2fe";
    const to = sp.to || sp.color || from;
    let inner;
    switch (sp.s) {
      case "flame": inner = flame(sp, uid); break;
      case "paper": inner = paper(sp, uid); break;
      case "lemon": inner = lemon(sp, uid); break;
      case "balloon": inner = balloon(sp, uid, r); break;
      case "tube": inner = tube(sp, uid, r); break;
      case "distill": inner = distill(sp, uid, r); break;
      case "rack": inner = rack(sp, uid, r); break;
      case "circuit": inner = circuit(sp, uid, r); break;
      case "egg": inner = egg(sp, uid, r); break;
      case "jar": inner = jar(sp, uid, r); break;
      case "candle": inner = candle(sp, uid, r); break;
      default: inner = beaker(sp, uid, r);
    }
    const toColor = sp.s === "flame" || sp.s === "candle" ? sp.color || to : to;
    return `<svg class="dsvg" viewBox="0 0 240 200" aria-hidden="true" focusable="false" style="--from:${from};--to:${toColor}">${inner}</svg>`;
  }
  function classes(spec) {
    return [spec.temp ? "t-" + spec.temp : "", spec.delay ? "delay" : ""].filter(Boolean).join(" ");
  }
  function play(el) {
    el.classList.remove("play");
    void el.getBoundingClientRect();
    el.classList.add("play", "played");
  }
  return { svg, classes, play };
})();

/* ---------- Clip player: a 6-second "short demonstration clip" with 3 captions ---------- */
const Clip = (function () {
  const STEP = [0, 1500, 3300], END = 6400;
  function html(e, uid, opts) {
    opts = opts || {};
    const c = e[App.lang()];
    return `<figure class="clip tp ${opts.cls || ""}" style="${App.topicStyle(e.topic)}" data-clip="${e.id}">
      <div class="clip-screen">
        <div class="clip-bg" aria-hidden="true"></div>
        <div class="demo clip-stage ${Demo.classes(e.demo)}">${Demo.svg(e.demo, uid)}</div>
        <span class="clip-tag" aria-hidden="true">${App.icon("play")}${App.esc(App.t("clipTag"))}</span>
        <button type="button" class="clip-big" data-clip-play aria-label="${App.esc(App.t("playClip"))}: ${App.esc(c.name)}">${App.icon("play")}</button>
      </div>
      <figcaption class="clip-cap"><span class="n" aria-hidden="true">1</span><span class="txt">${App.esc(c.clip[0])}</span></figcaption>
      <div class="clip-foot"><div class="clip-bar" aria-hidden="true"><i></i><i></i><i></i></div>
        <button type="button" class="btn btn-sm" data-clip-play>${App.icon("play")}<span>${App.esc(App.t("playClip"))}</span></button></div>
    </figure>`;
  }
  function setStep(fig, i, caps) {
    const cap = fig.querySelector(".clip-cap");
    cap.innerHTML = `<span class="n" aria-hidden="true">${i + 1}</span><span class="txt">${App.esc(caps[i])}</span>`;
    const bars = fig.querySelectorAll(".clip-bar i");
    bars.forEach((b, k) => { b.classList.toggle("full", k < i); b.classList.remove("run"); });
    if (bars[i]) { const dur = (i < 2 ? STEP[i + 1] - STEP[i] : END - STEP[2]) / 1000; bars[i].style.setProperty("--dur", dur + "s"); void bars[i].offsetWidth; bars[i].classList.add("run"); }
  }
  function stop(fig) { (fig._timers || []).forEach(clearTimeout); fig._timers = []; }
  function play(fig) {
    const e = getExp(fig.dataset.clip); if (!e) return;
    const caps = e[App.lang()].clip, stage = fig.querySelector(".clip-stage"), btn = fig.querySelector(".clip-foot .btn");
    stop(fig);
    fig.classList.remove("done"); fig.classList.add("running");
    btn.innerHTML = `${App.icon("refresh")}<span>${App.esc(App.t("replayClip"))}</span>`;
    if (App.reduced.matches) {
      stage.classList.add("play", "no-anim"); setStep(fig, 2, caps);
      fig.querySelectorAll(".clip-bar i").forEach((b) => { b.classList.remove("run"); b.classList.add("full"); });
      fig.classList.remove("running"); fig.classList.add("done");
      App.announce(caps.join(". "));
      return;
    }
    stage.classList.remove("play", "no-anim"); void stage.getBoundingClientRect();
    setStep(fig, 0, caps);
    fig._timers = [
      setTimeout(() => { setStep(fig, 1, caps); Demo.play(stage); }, STEP[1]),
      setTimeout(() => setStep(fig, 2, caps), STEP[2]),
      setTimeout(() => { fig.classList.remove("running"); fig.classList.add("done"); fig.querySelectorAll(".clip-bar i").forEach((b) => { b.classList.remove("run"); b.classList.add("full"); }); }, END)
    ];
    App.announce(caps.join(". "));
  }
  document.addEventListener("click", (ev) => {
    const b = ev.target.closest("[data-clip-play]"); if (!b) return;
    const fig = b.closest(".clip"); if (fig) play(fig);
  });
  return { html, play, stop };
})();
