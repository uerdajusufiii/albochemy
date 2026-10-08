"use strict";
/* ---------- Journey scene artwork (one composition per chapter) ---------- */
Art.scene = (function () {
  const { blob, star, rng, f } = Art;
  const L = (d, inner) => `<div class="ly" style="--d:${d}"><div class="ly-in"><svg viewBox="0 0 600 560" focusable="false">${inner}</svg></div></div>`;
  const tint = (c, p) => `color-mix(in srgb,${c} ${p}%,var(--s-bg))`;
  const sparkles = (seed, n, cols) => {
    const r = rng(seed); let s = "";
    for (let i = 0; i < n; i++) s += `<path class="spark" d="${star(40 + r() * 520, 30 + r() * 500, 7 + r() * 11)}" style="--c:${cols[i % cols.length]};--t:${f(2.6 + r() * 2.4)}s;--dl:${f(r() * 3)}s"/>`;
    return s;
  };
  const bubbles = (seed, n, x0, x1, y, rise, cls) => {
    const r = rng(seed); let s = "";
    for (let i = 0; i < n; i++) s += `<circle class="${cls || "gb"}" cx="${f(x0 + r() * (x1 - x0))}" cy="${f(y - r() * 10)}" r="${f(4 + r() * 8)}" fill="#fff" fill-opacity=".85" style="--dl:${f(r() * 1.6)}s;--rise:${f(rise * (0.7 + r() * 0.3))}px"/>`;
    return s;
  };
  const leaf = (x, y, len, w, ang, c, vein) =>
    `<g transform="translate(${x} ${y}) rotate(${ang})"><path d="M0 0C${f(w * 0.62)} ${f(-len * 0.22)} ${f(w * 0.62)} ${f(-len * 0.78)} 0 ${-len}C${f(-w * 0.62)} ${f(-len * 0.78)} ${f(-w * 0.62)} ${f(-len * 0.22)} 0 0Z" fill="${c}"/>
     <path d="M0 -6V${f(-len * 0.9)}M0 ${f(-len * 0.3)}l${f(w * 0.28)} ${f(-len * 0.12)}M0 ${f(-len * 0.3)}l${f(-w * 0.28)} ${f(-len * 0.12)}M0 ${f(-len * 0.55)}l${f(w * 0.24)} ${f(-len * 0.1)}M0 ${f(-len * 0.55)}l${f(-w * 0.24)} ${f(-len * 0.1)}" stroke="${vein}" stroke-width="5" stroke-linecap="round" fill="none"/></g>`;
  const BEAKER = "M206 172V440Q206 474 240 474H360Q394 474 394 440V172Z";
  const BEAKER_IN = "M218 182V436Q218 462 244 462H356Q382 462 382 436V182Z";
  const beakerGlass = (id) => `<path d="${BEAKER}" fill="var(--art-edge)" transform="translate(10 10)"/><path d="${BEAKER}" fill="var(--art-white)"/><rect x="190" y="158" width="220" height="24" rx="12" fill="var(--art-white)"/>
    <defs><clipPath id="${id}"><path d="${BEAKER_IN}"/></clipPath></defs>`;
  const beakerFront = `<path d="M232 202V424" stroke="#fff" stroke-width="10" stroke-linecap="round" opacity=".7"/><path d="M356 236h20M362 276h14M356 316h20M362 356h14" stroke="var(--ink)" stroke-opacity=".22" stroke-width="4" stroke-linecap="round"/>`;

  const SCENES = {
    colour() {
            const ph = ["#c8394f", "#dc7a50", "#e2b93b", "#7fae4a", "#2a9d7f", "#2f6fc4", "#6a4fb0"];
      let dots = "";
      ph.forEach((c, i) => { const a = Math.PI * (0.88 + i * 0.04); dots += `<circle cx="${f(300 + Math.cos(a) * 0 + (i - 3) * 58)}" cy="${f(522 - Math.abs(i - 3) * 7)}" r="15" fill="${c}"/>`; });
      return L(0.12, `<path d="${blob(300, 285, 238, 9, 0.22, "c1")}" fill="var(--a3)"/><circle cx="300" cy="285" r="268" fill="none" stroke="var(--a1)" stroke-width="3" stroke-dasharray="2 14" stroke-linecap="round" opacity=".6"/>`) +
        L(0.3, leaf(170, 470, 300, 170, -34, "var(--a2)", tint("#fff", 35)) + leaf(436, 478, 280, 160, 32, "color-mix(in srgb,var(--a2) 75%,#000)", tint("#fff", 30)) + leaf(300, 476, 400, 160, 2, "color-mix(in srgb,var(--a2) 88%,#fff)", tint("#fff", 40))) +
        L(0.55, `${beakerGlass("cl-in")}<g clip-path="url(#cl-in)"><path class="liq" d="M200 302C250 288 300 314 350 296S400 300 410 298V480H200Z"/><circle class="swirl" cx="300" cy="300" r="190"/></g>${beakerFront}`) +
        L(0.8, `<g transform="translate(452 112) rotate(-28)"><circle r="66" fill="var(--a5)"/><circle r="54" fill="#fbf3cf"/>${[0, 1, 2, 3, 4, 5, 6, 7].map((i) => `<path d="M0 0L${f(Math.cos(i * 0.785) * 48)} ${f(Math.sin(i * 0.785) * 48)}A48 48 0 0 1 ${f(Math.cos(i * 0.785 + 0.6) * 48)} ${f(Math.sin(i * 0.785 + 0.6) * 48)}Z" fill="#f0d77a"/>`).join("")}<circle r="6" fill="#fbf3cf"/></g>
          ${[[404, 176, 0.1], [424, 200, 0.3], [396, 214, 0.5]].map(([x, y, d]) => `<path class="drop" d="M${x} ${y}c5 7 8 12 8 16a8 8 0 0 1-16 0c0-4 3-9 8-16z" fill="#f3e3a0" stroke="rgba(0,0,0,.12)" style="--dl:${d}s;--fall:${f(300 - y)}px"/>`).join("")}`) +
        L(1.05, dots + sparkles("cs", 5, ["var(--a5)", "var(--a4)", "#fff"]));
    },
    gas() {
      const r = rng("gasbg");
      let bg = "";
      for (let i = 0; i < 9; i++) { const x = r() < 0.5 ? 30 + r() * 140 : 430 + r() * 140, y = 60 + r() * 420, rad = 16 + r() * 34; bg += `<circle cx="${f(x)}" cy="${f(y)}" r="${f(rad)}" fill="var(--a5)"/><circle cx="${f(x - rad * 0.3)}" cy="${f(y - rad * 0.3)}" r="${f(rad * 0.25)}" fill="#fff" opacity=".55"/>`; }
      const cloud = (x, y, s) => `<g transform="translate(${x} ${y}) scale(${s})" fill="var(--art-white)"><circle cx="0" cy="0" r="34"/><circle cx="38" cy="-14" r="42"/><circle cx="80" cy="2" r="30"/><rect x="0" y="0" width="80" height="32" rx="16"/></g>`;
      const co2 = (x, y, s, t) => `<g transform="translate(${x} ${y}) scale(${s})"><g class="mol" style="--t:${t}s"><line class="bond" x1="-50" y1="0" x2="50" y2="0"/><circle class="o" cx="-52" r="22"/><circle class="c" r="22"/><circle class="o" cx="52" r="22"/></g></g>`;
      const FL = "M268 214V272L168 440Q156 480 196 484H404Q444 480 432 440L332 272V214Z", FLI = "M280 222V276L182 442Q174 470 202 472H398Q426 470 418 442L320 276V222Z";
      return L(0.1, `<path d="${blob(300, 300, 236, 8, 0.24, "g1")}" fill="var(--a2)"/>${cloud(70, 100, 1)}${cloud(430, 70, 0.8)}`) +
        L(0.3, bg) +
        L(0.55, `<path d="${FL}" fill="var(--art-edge)" transform="translate(10 10)"/><path d="${FL}" fill="var(--art-white)"/><defs><clipPath id="gs-in"><path d="${FLI}"/></clipPath></defs>
          <g clip-path="url(#gs-in)"><path d="M160 398C220 386 280 410 340 396S420 398 440 396V490H160Z" fill="#e4eef5"/>${bubbles("gb", 12, 200, 400, 466, -70)}<path class="powder" d="M262 470q38-18 76 0z" fill="#fff"/></g>
          <path d="M290 236V282L200 434" stroke="#fff" stroke-width="9" stroke-linecap="round" opacity=".7" fill="none"/>
          <g class="balloon"><path d="M300 214C238 212 206 140 228 84C248 30 352 30 372 84C394 140 362 212 300 214Z" fill="var(--a3)"/><ellipse cx="262" cy="96" rx="14" ry="24" fill="#fff" opacity=".35" transform="rotate(-18 262 96)"/></g>
          <rect x="280" y="204" width="40" height="20" rx="7" fill="color-mix(in srgb,var(--a3) 75%,#000)"/><rect x="260" y="214" width="80" height="14" rx="7" fill="var(--art-white)"/>`) +
        L(0.85, co2(110, 330, 0.8, 9) + co2(500, 236, 0.7, 11)) +
        L(1.1, sparkles("gs", 5, ["var(--a4)", "var(--a3)", "#fff"]));
    },
    fire() {
      const r = rng("stars");
      let stars = "";
      for (let i = 0; i < 26; i++) stars += `<circle cx="${f(r() * 600)}" cy="${f(r() * 420)}" r="${f(1.2 + r() * 2.6)}" fill="#fff" opacity="${f(0.4 + r() * 0.6)}"/>`;
      let spk = "";
      for (let i = 0; i < 9; i++) spk += `<circle class="spk" cx="${f(270 + r() * 60)}" cy="${f(150 + r() * 80)}" r="${f(2 + r() * 3)}" fill="#9fdcd6" style="--dl:${f(r() * 1.4)}s;--rise:${f(-60 - r() * 90)}px"/>`;
      return L(0.08, stars + `<circle cx="500" cy="92" r="42" fill="var(--a3)"/><circle cx="520" cy="78" r="38" fill="var(--s-bg)"/>` + sparkles("fs", 4, ["var(--a3)", "#fff"])) +
        L(0.25, `<circle cx="300" cy="250" r="228" fill="#152b47"/><circle cx="300" cy="250" r="172" fill="#1b3554"/><circle cx="300" cy="250" r="116" fill="#224062"/>`) +
        L(0.5, `<path d="M210 488C150 488 110 522 20 522" stroke="#b5683f" stroke-width="14" stroke-linecap="round" fill="none"/><path d="M196 506h208l-22-40H218z" fill="#8a94ab"/><rect x="278" y="296" width="44" height="176" rx="7" fill="#c3cbdb"/><rect x="284" y="300" width="9" height="160" rx="4" fill="#fff" opacity=".5"/><rect x="268" y="420" width="64" height="24" rx="7" fill="#6b7590"/>`) +
        L(0.72, `<path class="flame fo" d="M300 64C246 138 236 212 260 264C270 288 285 300 300 300C315 300 330 288 340 264C364 212 354 138 300 64Z"/>
          <path class="flame flame2 fm" d="M300 138C266 190 264 238 279 268C285 281 292 289 300 289C308 289 315 281 321 268C336 238 334 190 300 138Z"/>
          <path class="flame" d="M300 206C285 234 285 257 291 271C294 278 297 282 300 282C303 282 306 278 309 271C315 257 315 234 300 206Z" fill="#d6f0ff"/>`) +
        L(0.95, `<g class="loop"><line x1="40" y1="262" x2="254" y2="240" stroke="#d3d9e6" stroke-width="7" stroke-linecap="round"/><rect x="18" y="252" width="44" height="22" rx="8" fill="#b5683f" transform="rotate(-6 40 262)"/><circle cx="264" cy="239" r="10" stroke="#eef2f9" stroke-width="4" fill="none"/><circle cx="264" cy="239" r="6" fill="#20b89d"/></g>${spk}`);
    },
    energy() {
      let frost = "";
      [[196, 230, 0.2], [420, 300, 0.45], [200, 420, 0.7], [410, 452, 0.9], [300, 140, 1.1]].forEach(([x, y, d]) => {
        frost += `<g class="frost" style="--dl:${d + 1.2}s"><path d="M${x} ${y - 18}V${y + 18}M${x - 16} ${y - 9}L${x + 16} ${y + 9}M${x - 16} ${y + 9}L${x + 16} ${y - 9}" stroke="#fff" stroke-width="5" stroke-linecap="round"/><path d="M${x} ${y - 18}V${y + 18}M${x - 16} ${y - 9}L${x + 16} ${y + 9}M${x - 16} ${y + 9}L${x + 16} ${y - 9}" stroke="var(--a3)" stroke-width="2.5" stroke-linecap="round"/></g>`;
      });
      const rays = [0, 1, 2, 3, 4, 5, 6, 7].map((i) => { const a = i * Math.PI / 4; return `<line x1="${f(150 + Math.cos(a) * 58)}" y1="${f(130 + Math.sin(a) * 58)}" x2="${f(150 + Math.cos(a) * 80)}" y2="${f(130 + Math.sin(a) * 80)}" stroke="var(--a2)" stroke-width="10" stroke-linecap="round"/>`; }).join("");
      return L(0.1, `<path d="${blob(190, 290, 196, 8, 0.24, "e1")}" fill="${tint("var(--turq)", 28)}"/><path d="${blob(420, 280, 188, 8, 0.24, "e2")}" fill="${tint("var(--a3)", 42)}"/>`) +
        L(0.3, `${rays}<circle cx="150" cy="130" r="46" fill="var(--a2)"/><circle cx="150" cy="130" r="32" fill="color-mix(in srgb,var(--a2) 55%,#fff)"/>
          <g transform="translate(470 120)" stroke="var(--a5)" stroke-width="9" stroke-linecap="round"><path d="M0 -56V56M-48 -28L48 28M-48 28L48 -28"/><path d="M0 -40l-12 -12M0 -40l12 -12M0 40l-12 12M0 40l12 12" stroke-width="7"/></g>`) +
        L(0.55, `${beakerGlass("en-in")}<g clip-path="url(#en-in)"><path d="M200 318C250 306 300 330 350 314S400 318 410 316V480H200Z" fill="#e9f6ff"/>${bubbles("ef", 12, 230, 370, 458, -120)}</g>${beakerFront}${frost}`) +
        L(0.8, `<rect x="452" y="150" width="56" height="300" rx="28" fill="var(--art-edge)" transform="translate(8 8)"/><rect x="452" y="150" width="56" height="300" rx="28" fill="var(--art-white)"/><circle cx="480" cy="452" r="40" fill="var(--art-white)"/>
          <circle cx="480" cy="452" r="28" fill="#d9534f"/><rect class="merc" x="470" y="200" width="20" height="252" rx="10"/>
          <path d="M498 200h-10M498 250h-10M498 300h-10M498 350h-10M498 400h-10" stroke="var(--ink)" stroke-opacity=".3" stroke-width="3" stroke-linecap="round"/>`) +
        L(1.05, sparkles("es", 5, ["#fff", "var(--a4)", "var(--a2)"]));
    },
    electric() {
      return L(0.1, `<path d="${blob(300, 290, 234, 9, 0.2, "el1")}" fill="var(--a5)"/>
          <path d="M120 70l-40 90h44l-26 86 86-118h-48l32-58z" fill="var(--a2)"/><path d="M500 300l-28 62h30l-18 60 60-82h-34l22-40z" fill="var(--a2)"/>`) +
        L(0.3, `<path d="M300 150V96H118V170M300 96H486V170" fill="none" stroke="var(--ink)" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" opacity=".75"/>
          <path class="wire-flow" d="M300 150V96H118V170M300 96H486V170" fill="none" stroke="var(--a2)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
          <g transform="translate(76 170)"><rect x="0" y="0" width="84" height="132" rx="14" fill="var(--ink)"/><rect x="24" y="-14" width="36" height="18" rx="5" fill="var(--ink)"/><rect x="0" y="0" width="84" height="44" rx="14" fill="var(--a2)"/><path d="M42 72v28M28 86h28" stroke="#fff" stroke-width="7" stroke-linecap="round"/></g>`) +
        L(0.55, `${beakerGlass("el-in")}<g clip-path="url(#el-in)"><path class="cu" d="M200 262C250 250 300 274 350 258S400 262 410 260V480H200Z"/></g>
          <rect x="286" y="150" width="28" height="10" rx="3" fill="var(--ink)" opacity=".7"/><line x1="300" y1="96" x2="300" y2="152" stroke="var(--ink)" stroke-width="4" opacity=".6"/>
          <rect x="284" y="158" width="32" height="14" rx="5" fill="#8b929e"/><path d="M292 170h16v236l-8 22-8-22z" fill="#9aa1ad"/>
          <path class="coat" d="M292 262h16v144l-8 22-8-22z" fill="var(--copper)"/><path class="glint" d="${star(312, 320, 13)}" fill="#fff"/>${beakerFront}`) +
        L(0.82, `<g transform="translate(470 420)"><ellipse cx="0" cy="44" rx="56" ry="16" fill="color-mix(in srgb,var(--copper) 70%,#000)"/><ellipse cx="0" cy="30" rx="56" ry="16" fill="var(--copper)"/><ellipse cx="6" cy="16" rx="56" ry="16" fill="color-mix(in srgb,var(--copper) 80%,#fff)"/><ellipse cx="6" cy="16" rx="34" ry="9" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="3"/></g>`) +
        L(1.05, sparkles("ls", 5, ["var(--a2)", "#fff", "var(--a3)"]));
    },
    speed() {
      const rays = Array.from({ length: 16 }, (_, i) => { const a0 = (i / 16) * Math.PI * 2, a1 = a0 + Math.PI / 16; return `<path d="M300 280L${f(300 + Math.cos(a0) * 420)} ${f(280 + Math.sin(a0) * 420)}L${f(300 + Math.cos(a1) * 420)} ${f(280 + Math.sin(a1) * 420)}Z" fill="${i % 2 ? tint("var(--a3)", 55) : tint("var(--a2)", 35)}"/>`; }).join("");
      const r = rng("conf"); let conf = "";
      const cols = ["var(--a1)", "var(--a3)", "var(--a4)", "var(--a5)"];
      for (let i = 0; i < 14; i++) conf += `<rect x="${f(40 + r() * 520)}" y="${f(30 + r() * 480)}" width="${f(10 + r() * 10)}" height="${f(6 + r() * 6)}" rx="2" fill="${cols[i % 4]}" transform="rotate(${f(r() * 180)} 300 280)"/>`;
      const BOT = "M262 250V420Q262 470 300 470Q338 470 338 420V250Z";
      const foamBlobs = [[300, 238, 66], [252, 196, 50], [350, 190, 54], [300, 160, 58], [236, 138, 40], [362, 130, 44], [296, 104, 46], [214, 250, 34], [388, 250, 36], [210, 300, 28], [392, 312, 26]];
      return `<div class="ly" style="--d:0.06"><div class="ly-in"><svg viewBox="0 0 600 560" focusable="false"><defs><clipPath id="sp-c"><rect width="600" height="560" rx="40"/></clipPath></defs><g clip-path="url(#sp-c)"><g class="rays">${rays}</g></g></svg></div></div>` +
        L(0.28, `<path d="${blob(300, 300, 210, 8, 0.25, "s1")}" fill="var(--a1)"/>${conf}`) +
        L(0.5, `<ellipse cx="300" cy="482" rx="150" ry="22" fill="color-mix(in srgb,var(--a5) 70%,#000)"/><ellipse cx="300" cy="474" rx="150" ry="22" fill="var(--a5)"/>
          <path d="${BOT}" fill="var(--art-edge)" transform="translate(8 8)"/><path d="${BOT}" fill="var(--art-white)"/><rect x="248" y="238" width="104" height="20" rx="10" fill="var(--art-white)"/>
          <defs><clipPath id="sp-in"><path d="M272 258V418Q272 458 300 458Q328 458 328 418V258Z"/></clipPath></defs><g clip-path="url(#sp-in)"><rect x="260" y="330" width="80" height="140" fill="#cfe9ec"/></g>
          <path d="M280 270V424" stroke="#fff" stroke-width="7" stroke-linecap="round" opacity=".7"/>`) +
        L(0.7, `<g class="foam">${foamBlobs.map(([x, y, rad], i) => `<circle cx="${x}" cy="${y}" r="${rad}" fill="${i % 4 === 1 ? "#eaf6f7" : i % 4 === 3 ? "#f3f6fa" : "#ffffff"}"/>`).join("")}
            <path d="M262 250C240 300 232 360 248 420" stroke="#ffffff" stroke-width="30" stroke-linecap="round" fill="none"/><path d="M338 250C362 300 370 350 356 410" stroke="#ffffff" stroke-width="26" stroke-linecap="round" fill="none"/>
            <path d="M236 190q30-20 60 0t60 0" stroke="var(--a1)" stroke-width="10" stroke-linecap="round" fill="none" opacity=".55"/><path d="M250 130q25-16 50 0t50 0" stroke="var(--a3)" stroke-width="9" stroke-linecap="round" fill="none" opacity=".75"/></g>`) +
        L(0.95, `<g class="pour"><path d="M402 70h84l-12 64h-60z" fill="var(--art-white)"/><path d="M408 96h74l-6 34h-62z" fill="#d9b27a"/><rect x="396" y="60" width="96" height="16" rx="8" fill="var(--art-white)"/></g>
          ${[[388, 120, 0], [380, 130, 0.25], [394, 136, 0.5]].map(([x, y, d]) => `<circle class="yst" cx="${x}" cy="${y}" r="7" fill="#d9b27a" style="--dl:${d + 0.5}s;--fall:110px"/>`).join("")}${sparkles("ss", 4, ["#fff", "var(--a3)"])}`);
    }
  };
  return (key) => (SCENES[key] ? SCENES[key]() : "");
})();
