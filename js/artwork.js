"use strict";
/* =========================================================================
   ARTWORK — layered paper-cut illustrations, drawn as inline SVG.
   Every illustration is split into layers. Each layer is its own <div> so it
   can glide at a different speed (parallax) without redrawing.
   ========================================================================= */
const Art = (function () {
  const f = (n) => (Math.round(n * 10) / 10).toString();
  function rng(seed) {
    let s = 7;
    for (const ch of String(seed)) s = (s * 31 + ch.charCodeAt(0)) >>> 0;
    return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
  }
  /* A smooth wave across width w, closed down to height h */
  function wave(w, h, base, amp, n, seed) {
    const r = rng(seed), k = Math.max(2, Math.round(n * 2)), seg = w / k;
    let y0 = base + (r() - 0.5) * amp, up = r() > 0.5, d = `M0 ${f(y0)}`;
    for (let i = 1; i <= k; i++) {
      const x0 = (i - 1) * seg, x1 = i * seg, y1 = base + (up ? -1 : 1) * amp * (0.55 + r() * 0.45);
      d += `C${f(x0 + seg / 3)} ${f(y0)} ${f(x1 - seg / 3)} ${f(y1)} ${f(x1)} ${f(y1)}`;
      y0 = y1; up = !up;
    }
    return d + `V${h}H0Z`;
  }
  /* An organic closed blob (paper cut-out) */
  function blob(cx, cy, rad, n, wobble, seed) {
    const r = rng(seed), pts = [];
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2, rr = rad * (1 - wobble / 2 + r() * wobble);
      pts.push([cx + Math.cos(a) * rr, cy + Math.sin(a) * rr]);
    }
    let d = `M${f(pts[0][0])} ${f(pts[0][1])}`;
    for (let i = 0; i < n; i++) {
      const p0 = pts[(i - 1 + n) % n], p1 = pts[i], p2 = pts[(i + 1) % n], p3 = pts[(i + 2) % n];
      d += `C${f(p1[0] + (p2[0] - p0[0]) / 6)} ${f(p1[1] + (p2[1] - p0[1]) / 6)} ${f(p2[0] - (p3[0] - p1[0]) / 6)} ${f(p2[1] - (p3[1] - p1[1]) / 6)} ${f(p2[0])} ${f(p2[1])}`;
    }
    return d + "Z";
  }
  const star = (cx, cy, r) => `M${f(cx)} ${f(cy - r)}Q${f(cx)} ${f(cy)} ${f(cx + r)} ${f(cy)}Q${f(cx)} ${f(cy)} ${f(cx)} ${f(cy + r)}Q${f(cx)} ${f(cy)} ${f(cx - r)} ${f(cy)}Q${f(cx)} ${f(cy)} ${f(cx)} ${f(cy - r)}Z`;
  const layer = (cls, style, vb, inner, par) => `<div class="ly ${cls}" style="${style}"><div class="ly-in"><svg viewBox="${vb}" preserveAspectRatio="${par || "xMidYMid meet"}" focusable="false">${inner}</svg></div></div>`;

  /* ---------------- OPENING ---------------- */
  const FLASK = "M205 52V250L78 548Q62 592 110 600H410Q458 592 442 548L315 250V52Z";
  const FLASK_IN = "M219 60V254L94 546Q82 580 116 587H404Q438 580 426 546L301 254V60Z";
  function liquidWave(top, amp, seed) { return wave(820, 700, 0, amp, 4, seed).replace(/^M0 /, "M0 ").replace(/([\d.]+) ([\d.-]+)/g, (m, x, y) => `${f(+x - 150)} ${f(+y + top)}`); }
  function flask() {
    const r = rng("bubbles");
    let bubs = "";
    for (let i = 0; i < 16; i++) {
      const x = 130 + r() * 260, rad = 4 + r() * 11, y = 560 - r() * 30;
      bubs += `<circle class="bub" cx="${f(x)}" cy="${f(y)}" r="${f(rad)}" style="--d:${f(r() * 4)}s;--t:${f(2.6 + r() * 2.6)}s;--rise:${f(-(190 + r() * 60))}px;--x:${f((r() - 0.5) * 30)}px"/>`;
    }
    const cols = ["var(--sun)", "var(--coral)", "var(--mint)", "var(--cobalt)", "var(--magenta)", "var(--lime)"];
    let cf = "";
    for (let i = 0; i < 14; i++) {
      const a = -Math.PI / 2 + (r() - 0.5) * 2.4, dist = 160 + r() * 160, c = cols[i % cols.length];
      const shape = i % 3 === 0 ? `<rect class="cf" x="254" y="30" width="14" height="14" rx="3"` : i % 3 === 1 ? `<circle class="cf" cx="260" cy="38" r="8"` : `<path class="cf" d="M260 28l9 16h-18z"`;
      cf += `${shape} fill="${c}" style="--tx:${f(Math.cos(a) * dist)}px;--ty:${f(Math.sin(a) * dist)}px;--rot:${f((r() - 0.5) * 720)}deg"/>`;
    }
    const back = `<svg viewBox="0 -140 520 780" focusable="false">
        <path class="thick" d="${FLASK}" transform="translate(12 12)"/><path class="glass" d="${FLASK}"/>
        <rect class="thick" x="207" y="40" width="130" height="26" rx="13"/><rect class="rim" x="195" y="28" width="130" height="26" rx="13"/>
        <path class="pip-glass" d="M249 -70h22v62l-11 22-11-22z"/><rect x="241" y="-80" width="38" height="12" rx="4" fill="var(--ink)" opacity=".75"/>
        <rect class="pip-bulb" x="234" y="-136" width="52" height="62" rx="24"/><path d="M246 -122q4-6 10-6" stroke="#fff" stroke-width="5" stroke-linecap="round" fill="none" opacity=".5"/>
      </svg>`;
    const front = `<svg viewBox="0 -140 520 780" focusable="false"><defs><clipPath id="op-in"><path d="${FLASK_IN}"/></clipPath></defs>
        <g clip-path="url(#op-in)">
          <path class="lq3 wv wv3" d="${liquidWave(330, 18, "a")}"/>
          <path class="lq2 wv wv2" d="${liquidWave(395, 22, "b")}"/>
          <path class="lq1 wv" d="${liquidWave(465, 20, "c")}"/>
          ${bubs}
        </g>
        <path class="pip-liq" d="M253 -40h14v32l-7 14-7-14z"/>
        <path class="drop" d="M260 12c5 7 8 12 8 16a8 8 0 0 1-16 0c0-4 3-9 8-16z"/>
        <path class="hl" d="M232 86V250L122 506" stroke-width="12"/><path class="hl" d="M296 300l40 92" stroke-width="7" opacity=".45"/>
        <path class="grad" d="M268 300h22M262 360h34M268 420h22M262 480h34"/>
        ${cf}</svg>`;
    return `<div class="fl fl-back">${back}</div><div class="fl fl-front">${front}</div>`;
  }
  function molecules() {
    const water = (x, y, s, t, dl) => `<g transform="translate(${x} ${y}) scale(${s})"><g class="mol" style="--t:${t}s;--dl:${dl}s"><line class="bond" x1="0" y1="0" x2="-34" y2="26"/><line class="bond" x1="0" y1="0" x2="34" y2="26"/><circle class="o" r="26"/><circle class="h" cx="-38" cy="30" r="16"/><circle class="h" cx="38" cy="30" r="16"/></g></g>`;
    const co2 = (x, y, s, t, dl) => `<g transform="translate(${x} ${y}) scale(${s})"><g class="mol" style="--t:${t}s;--dl:${dl}s"><line class="bond" x1="-50" y1="0" x2="50" y2="0"/><circle class="o" cx="-52" r="22"/><circle class="c" r="22"/><circle class="o" cx="52" r="22"/></g></g>`;
    const hex = (x, y, s, t, dl) => `<g transform="translate(${x} ${y}) scale(${s})"><g class="mol" style="--t:${t}s;--dl:${dl}s"><path class="hex" d="M0 -40L35 -20V20L0 40L-35 20V-20Z"/><circle class="n" cx="0" cy="-40" r="11"/></g></g>`;
    let sp = "";
    const r = rng("spark"), cols = ["var(--sun)", "var(--mint)", "var(--rose)", "var(--cobalt)"];
    for (let i = 0; i < 12; i++) sp += `<path class="spark" d="${star(30 + r() * 640, 60 + r() * 520, 8 + r() * 12)}" style="--c:${cols[i % 4]};--t:${f(2.6 + r() * 2)}s;--dl:${f(r() * 3)}s"/>`;
    return water(165, 170, 0.9, 9, 0) + co2(550, 320, 0.85, 11, 1.2) + hex(420, 112, 0.8, 10, 0.6) + water(80, 640, 0.6, 8, 2) + co2(610, 700, 0.6, 12, 0.4) + sp;
  }
  function opening() {
    const waves = [
      ["var(--cobalt)", 1, 70, 40, 2.5, "15s", 0.22, 0.15], ["var(--violet)", .82, 80, 34, 3, "12s", 0.32, 0.25],
      ["var(--magenta)", .64, 90, 30, 3.5, "17s", 0.45, 0.35]
    ];
    const front = [["var(--coral)", .47, 90, 26, 3, "13s", 0.7, 0.55], ["var(--sun)", .32, 100, 22, 4, "16s", 0.9, 0.65], ["var(--s1bg)", .17, 110, 18, 3.5, "18s", 1.1, 0.75]];
    const wl = (w, i) => layer("ly-wave", `--c:${w[0]};--hk:${w[1]};--t:${w[5]};--d:${w[6]};--in:${w[7]}s;--dl:-${i * 2}s`, "0 0 1728 400", `<path d="${wave(1728, 400, w[2] + 60, w[3], w[4], "w" + i + w[0])}"/>`, "none");
    const sun = layer("ly-sun", "--d:.12;--in:.05s", "0 0 800 800",
      `<circle class="sun" cx="400" cy="400" r="250"/><circle class="ring" cx="400" cy="400" r="320"/><circle class="ring2" cx="400" cy="400" r="380"/>
       <circle cx="400" cy="80" r="14" fill="var(--coral)"/><circle cx="720" cy="400" r="10" fill="var(--cobalt)"/><circle cx="131" cy="569" r="12" fill="var(--mint)"/>`);
    return sun + waves.map(wl).join("") +
      `<div class="ly ly-flask" style="--d:.55;--in:.45s"><div class="ly-in">${flask()}</div></div>` +
      front.map((w, i) => wl(w, i + 3)).join("") +
      layer("ly-mol", "--d:1;--in:.9s", "0 0 700 900", molecules(), "xMidYMid meet");
  }

  /* A band of layered paper waves placed BETWEEN two sections. Its background
     is the colour of the section above and the waves rise into the colours of
     the section below. It takes up its own space in the page, so it can never
     cover text or buttons.
     o = { seed, from: [light, dark], to: [light, dark], c1, c2, cls } — or fill
     an empty <div class="edge-band …" data-band="seed"> whose colours come from CSS. */
  function bandSvg(seed) {
    return `<svg viewBox="0 0 1440 90" preserveAspectRatio="none" focusable="false">
      <path d="${wave(1440, 90, 34, 16, 2.5, seed + "1")}" fill="var(--c1)"/><path d="${wave(1440, 90, 50, 14, 3, seed + "2")}" fill="var(--c2)"/>
      <path d="${wave(1440, 90, 66, 10, 3.5, seed + "3")}" fill="var(--edge-to)"/></svg>`;
  }
  function band(o) {
    const st = `--from-l:${o.from[0]};--from-d:${o.from[1] || o.from[0]};--to-l:${o.to[0]};--to-d:${o.to[1] || o.to[0]};--c1:${o.c1};--c2:${o.c2}`;
    return `<div class="edge-band ${o.cls || ""}" style="${st}" aria-hidden="true">${bandSvg(o.seed)}</div>`;
  }
  function fillBands(root) {
    (root || document).querySelectorAll(".edge-band[data-band]:empty").forEach((el) => { el.innerHTML = bandSvg(el.dataset.band); el.setAttribute("aria-hidden", "true"); });
  }

  return { wave, blob, star, layer, rng, f, opening, band, fillBands, FLASK, FLASK_IN };
})();
