"use strict";
/* =========================================================================
   THE MIXING LAB (pages/lab.html, and the live-lab slide in presentation
   mode) — the cup in the centre, substances around it.
   Free lab: discover all the reactions. Challenges: 10 goals, points, replay.
   ========================================================================= */
const Lab = (function () {
  const { esc, icon, t, $, $$ } = App;
  const L = () => App.lang();
  const sub = (id) => LAB.subs[id];
  const rule = (id) => LAB.rules.find((r) => r.id === id);
  const state = {
    mode: "free", shelf: "kitchen", cup: [], fired: new Set(), found: new Set(), temp: 20, card: null,
    ch: { i: 0, pts: 0, wrong: 0, tried: false, done: false, results: [], hinted: false, answered: false, finished: false }
  };
  let reactor = null, queue = Promise.resolve(), stageHome = null;
  const ANSWERS = { "ind-cabbage-acid": ["cabbage", "vinegar"], "ind-cabbage-alk": ["cabbage", "soda"], "ind-phph-pink": ["phph", "naoh"] };

  /* ---------- token artwork ---------- */
  function tokenArt(id) {
    const s = sub(id), c = s.c;
    if (s.kind === "metal") {
      return id === "nail" ? `<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="13" y="6" width="22" height="6" rx="2" fill="#7d8592"/><path d="M21 12h6v24l-3 7-3-7z" fill="#9aa1ad"/><rect x="22" y="14" width="1.6" height="20" fill="#fff" opacity=".6"/></svg>`
        : `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M6 30c6-12 10 8 16-4s10 8 20-6" fill="none" stroke="#c9d1dd" stroke-width="6" stroke-linecap="round"/><path d="M6 30c6-12 10 8 16-4s10 8 20-6" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".7"/></svg>`;
    }
    if (s.kind === "powder") {
      return `<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="12" y="8" width="24" height="7" rx="2" fill="var(--ink)" opacity=".7"/><path d="M11 15h26v22a5 5 0 0 1-5 5H16a5 5 0 0 1-5-5z" fill="var(--card)" stroke="var(--line-2)" stroke-width="1.5"/>
        <path d="M13 40c2-8 6-12 11-12s9 4 11 12z" fill="${c}" stroke="rgba(0,0,0,.15)"/></svg>`;
    }
    const strong = s.a > 0.4, fill = strong ? c : "color-mix(in srgb," + c + " 60%, #9fd0ff)";
    return `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M19 4h10v9l8 9v18a4 4 0 0 1-4 4H15a4 4 0 0 1-4-4V22l8-9z" fill="var(--card)" stroke="var(--line-2)" stroke-width="1.5"/>
      <path d="M12.5 26h23v14a2.5 2.5 0 0 1-2.5 2.5H15a2.5 2.5 0 0 1-2.5-2.5z" fill="${fill}" opacity="${strong ? 1 : 0.75}"/><rect x="18" y="2" width="12" height="5" rx="1.5" fill="var(--ink)" opacity=".7"/><path d="M15 24v14" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".7"/></svg>`;
  }
  /* ---------- layout ---------- */
  function ringIds() {
    if (state.mode === "challenge") return LAB.shelves[LAB.goals[state.ch.i].shelf];
    return LAB.shelves[state.shelf];
  }
  function renderRing() {
    const ids = ringIds(), n = ids.length;
    $("#lab-tokens").innerHTML = ids.map((id, i) => {
      const a = -Math.PI / 2 + (i / n) * Math.PI * 2, x = 50 + Math.cos(a) * 41.5, y = 50 + Math.sin(a) * 41.5, s = sub(id), inCup = state.cup.includes(id);
      return `<button type="button" class="tok ${inCup ? "used" : ""}" data-sub="${id}" style="left:${x.toFixed(2)}%;top:${y.toFixed(2)}%" aria-label="${esc(t("addSub", { name: s[L()].n }))}${s.teacher ? " — " + esc(t("teacherOnly")) : ""}" ${inCup ? 'aria-disabled="true"' : ""}>
        <span class="tok-art">${tokenArt(id)}</span><span class="tok-name">${esc(s[L()].n)}</span>${s.teacher ? `<span class="tok-flag" aria-hidden="true">!</span>` : ""}</button>`;
    }).join("");
    $("#lab-ring").style.setProperty("--n", n);
  }
  function cupList() {
    return state.cup.length ? state.cup.map((id) => `<li style="--c:${sub(id).c}"><span class="dot" aria-hidden="true"></span>${esc(sub(id)[L()].n)}</li>`).join("") : `<li class="empty">${esc(t("cupEmpty"))}</li>`;
  }
  function cardHTML() {
    const c = state.card;
    if (!c) return `<div class="rc rc-intro"><span class="rc-ico">${icon("sparkle")}</span><div><p class="rc-title">${esc(t(state.mode === "free" ? "labIntroTitle" : "chIntroTitle"))}</p><p>${esc(t(state.mode === "free" ? "labIntro" : "chIntro"))}</p></div></div>`;
    if (c.kind === "none") return `<div class="rc rc-none"><span class="rc-ico">${icon("info")}</span><div><p class="rc-title">${esc(t("noReactionTitle"))}</p><p>${esc(t("noReaction"))}</p></div></div>`;
    if (c.kind === "added") { const s = sub(c.id); return `<div class="rc rc-added" style="--c:${s.c}"><span class="rc-ico">${icon("drop")}</span><div><p class="rc-title">${esc(s[L()].n)} <span class="mono">${esc(s.f)}</span></p><p>${esc(t("addMore"))}</p>${s.teacher ? `<p class="rc-teacher">${icon("alert")}${esc(t("teacherOnlyNote"))}</p>` : ""}</div></div>`; }
    const d = c.kind === "rule" ? rule(c.id)[L()] : LAB.indicatorFinds[c.id][L()];
    return `<div class="rc rc-hit ${c.isNew ? "is-new" : ""}"><span class="rc-ico">${icon(c.kind === "rule" ? "flask" : "drop")}</span><div>
      ${c.isNew ? `<span class="rc-new">${icon("star")}${esc(t("newDiscovery"))}</span>` : ""}
      <p class="rc-title">${esc(d.n)}</p><p class="rc-obs">${esc(d.o)}</p>${d.eq ? `<p class="rc-eq mono">${esc(d.eq)}</p>` : ""}<p>${esc(d.w)}</p>
      ${c.teacher ? `<p class="rc-teacher">${icon("alert")}${esc(t("teacherOnlyNote"))}</p>` : ""}</div></div>`;
  }
  function discHTML() {
    const n = state.found.size, total = LAB.discoveries.length;
    return `<div class="disc-head"><span>${esc(t("discoveries"))}</span><b>${n} / ${total}</b></div><div class="disc-bar" aria-hidden="true"><i style="width:${(n / total) * 100}%"></i></div>
      <ul class="disc-grid">${LAB.discoveries.map((id) => { const f = state.found.has(id), d = id.startsWith("ind-") ? LAB.indicatorFinds[id][L()] : rule(id)[L()]; return `<li class="${f ? "got" : ""}" title="${f ? esc(d.n) : "?"}"><span aria-hidden="true">${f ? icon("check") : "?"}</span><span class="sr-only">${f ? esc(d.n) : esc(t("notFound"))}</span></li>`; }).join("")}</ul>`;
  }
  function tempHTML() {
    const d = state.temp - 20, cls = d > 1 ? "hot" : d < -1 ? "cold" : "";
    return `<span class="lab-temp ${cls}">${icon("tubeheat")}<b>${state.temp.toFixed(0)} °C</b>${d ? `<small>${d > 0 ? "+" : ""}${d.toFixed(0)}</small>` : ""}</span>`;
  }
  function panelFree() {
    return `<div class="lp-sec"><div class="lp-row"><h3>${esc(t("inCup"))}</h3><button type="button" class="btn btn-sm" data-lab="empty">${icon("refresh")}${esc(t("emptyCup"))}</button></div><ul class="cup-list">${cupList()}</ul></div>
      <div class="lp-card" id="lab-card" aria-live="polite">${cardHTML()}</div>
      <div class="lp-sec disc">${discHTML()}</div>`;
  }
  function dots() {
    return `<ol class="ch-dots" aria-label="${esc(t("roundsLabel"))}">${LAB.goals.map((g, i) => { const r = state.ch.results[i]; const cls = r === undefined ? (i === state.ch.i ? "now" : "") : r >= 7 ? "ok" : r > 0 ? "mid" : "miss"; return `<li class="${cls}"><span class="sr-only">${i + 1}</span></li>`; }).join("")}</ol>`;
  }
  function panelChallenge() {
    const ch = state.ch;
    if (ch.finished) {
      const pct = ch.pts, stars = pct >= 80 ? 3 : pct >= 50 ? 2 : 1;
      return `<div class="ch-results"><div class="trophy" aria-hidden="true">${icon("trophy")}</div><h3>${esc(t("chResults"))}</h3>
        <p class="score"><b>${pct}</b>/100</p><p class="stars" aria-label="${esc(t("starsLabel", { n: stars }))}">${[1, 2, 3].map((k) => `<span class="${k <= stars ? "on" : ""}">${icon("star")}</span>`).join("")}</p>
        <p>${esc(t(pct >= 80 ? "msgTop" : pct >= 50 ? "msgMid" : "msgLow"))}</p>
        <div class="ch-actions"><button type="button" class="btn btn-primary" data-lab="replay">${icon("refresh")}${esc(t("playAgain"))}</button><button type="button" class="btn" data-mode="free">${icon("flask")}${esc(t("freeLab"))}</button></div></div>`;
    }
    const g = LAB.goals[ch.i][L()];
    let fb = "";
    if (ch.done) {
      const c = state.card, d = c && (c.kind === "rule" ? rule(c.id)[L()] : c.kind === "ind" ? LAB.indicatorFinds[c.id][L()] : null);
      fb = `<div class="ch-fb ok"><p class="fb-title">${icon("check")}${esc(t("chSuccess", { p: ch.results[ch.i] }))}</p>${d ? `<p><b>${esc(d.n)}${/[.!?]$/.test(d.n) ? "" : "."}</b> ${esc(d.w)}</p>${d.eq ? `<p class="rc-eq mono">${esc(d.eq)}</p>` : ""}` : ""}</div>`;
    } else if (state.cup.length >= 2 && ch.tried) {
      const c = state.card, d = c && (c.kind === "rule" ? rule(c.id)[L()] : c.kind === "ind" ? LAB.indicatorFinds[c.id][L()] : null);
      fb = `<div class="ch-fb bad"><p class="fb-title">${icon("info")}${esc(t("chNotYet"))}</p><p>${d ? esc(t("chMade", { what: d.n })) + " " : ""}${esc(t("chEmptyTry"))}</p></div>`;
    }
    if (ch.hinted && !ch.done) fb += `<div class="ch-fb hint"><p class="fb-title">${icon("bulb")}${esc(t("hint"))}</p><p>${esc(g.h)}</p></div>`;
    if (ch.answered && !ch.done) fb += `<div class="ch-fb hint"><p class="fb-title">${icon("eye")}${esc(t("answerIs"))}</p><p>${esc(answerFor(ch.i).map((id) => sub(id)[L()].n).join(" + "))}</p></div>`;
    return `<div class="ch-top"><span class="ch-round">${esc(t("round"))} ${ch.i + 1} / ${LAB.goals.length}</span><span class="pts">${icon("star")}<b>${ch.pts}</b> ${esc(t("pts"))}</span></div>${dots()}
      <p class="ch-label">${esc(t("yourGoal"))}</p><p class="ch-goal">${esc(g.g)}</p>
      <div aria-live="polite">${fb}</div>
      <div class="ch-actions">${ch.done ? `<button type="button" class="btn btn-primary" data-lab="next">${esc(ch.i < LAB.goals.length - 1 ? t("nextRound") : t("seeResults"))}${icon("arrow")}</button>`
        : `<button type="button" class="btn btn-sm" data-lab="hint" ${ch.hinted ? 'aria-disabled="true"' : ""}>${icon("bulb")}${esc(t("hint"))}</button><button type="button" class="btn btn-sm" data-lab="empty">${icon("refresh")}${esc(t("emptyCup"))}</button>${ch.wrong >= 2 && !ch.answered ? `<button type="button" class="btn btn-sm btn-ghost" data-lab="answer">${icon("eye")}${esc(t("showAnswer"))}</button>` : ""}`}</div>
      <div class="lp-sec mini"><div class="lp-row"><h3>${esc(t("inCup"))}</h3></div><ul class="cup-list">${cupList()}</ul></div>`;
  }
  function renderPanel() {
    $("#lab-panel").innerHTML = state.mode === "free" ? panelFree() : panelChallenge();
    $("#lab-temp").innerHTML = tempHTML();
    $$(".mode-tabs [data-mode]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.mode === state.mode)));
    $$("[data-shelf]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.shelf === state.shelf)));
    $("#shelf-seg").hidden = state.mode !== "free";
  }
  function render() { renderRing(); renderPanel(); }
  function answerFor(i) { const n = LAB.goals[i].need[0]; return ANSWERS[n] || rule(n).needs.filter((x) => x[0] !== "@").concat(rule(n).needs.includes("@aq") ? ["water"] : []); }

  /* ---------- chemistry ---------- */
  function ph() {
    let net = 0;
    state.cup.forEach((id) => { if (sub(id).ph) net += sub(id).ph; });
    if (net <= -0.85) return 2; if (net <= -0.45) return 3.5; if (net <= -0.12) return 5.5; if (net < 0.12) return 7; if (net < 0.45) return 8.5; if (net < 0.85) return 10.5; return 12.5;
  }
  const hasAcid = () => state.cup.some((id) => (sub(id).ph || 0) < -0.1);
  const hasBase = () => state.cup.some((id) => (sub(id).ph || 0) > 0.1);
  function satisfied(r) { return r.needs.every((n) => (n === "@aq" ? state.cup.some((id) => LAB.aqueous.includes(id)) : state.cup.includes(n))); }
  function mixColor(exclude) {
    let w = 0, rgb = [0, 0, 0], a = 0;
    state.cup.forEach((id) => { const s = sub(id); if (s.kind !== "liquid" || id === exclude || id === "oil") return; const k = s.a + 0.1, c = Reactor.rgb(s.c); rgb = rgb.map((v, i) => v + c[i] * k); a += s.a * k; w += k; });
    if (!w) return null;
    return { hex: "#" + rgb.map((v) => Math.round(v / w).toString(16).padStart(2, "0")).join(""), a: a / w };
  }
  function evaluate() {
    const out = { rules: [], ind: null, color: null };
    const fresh = LAB.rules.filter((r) => !state.fired.has(r.id) && satisfied(r));
    fresh.forEach((r) => { if (!fresh.some((x) => x.supersedes === r.id)) out.rules.push(r); });
    out.rules.forEach((r) => state.fired.add(r.id));
    const colorFx = [...LAB.rules.filter((r) => state.fired.has(r.id))].reverse().map((r) => r.fx.find((f) => f.t === "color")).find(Boolean);
    const indId = state.cup.find((id) => sub(id).ind);
    if (indId && !colorFx) {
      const p = ph(), kind = sub(indId).ind;
      if (kind === "phph") {
        if (p >= 8.5) { out.color = { hex: "#e3409a", a: 0.85 }; if (hasBase()) out.ind = "ind-phph-pink"; }
        else out.color = mixColor(indId) || { hex: "#f6f6f6", a: 0.15 };
      } else {
        const tab = LAB.indicator[kind], hit = tab.find((x) => x[0] === p) || tab[3];
        out.color = { hex: hit[1], a: 0.9 };
        if (kind === "cabbage" && p < 7 && hasAcid()) out.ind = "ind-cabbage-acid";
        if (kind === "cabbage" && p > 7 && hasBase()) out.ind = "ind-cabbage-alk";
        if (kind === "uni" && p < 7 && hasAcid()) out.ind = "ind-uni-acid";
        if (kind === "uni" && p > 7 && hasBase()) out.ind = "ind-uni-alk";
        if (kind === "uni" && p === 7 && hasAcid() && hasBase()) out.ind = "ind-uni-neutral";
      }
    } else if (!colorFx) out.color = mixColor();
    return out;
  }
  function applyFx(r) {
    r.fx.forEach((f, i) => setTimeout(() => {
      if (f.t === "fizz") reactor.fizzOn(f.p, f.d, f.at);
      else if (f.t === "foam") reactor.foamOn(f.a, f.c, f.over, f.s);
      else if (f.t === "precip") reactor.precip(f.c, f.n);
      else if (f.t === "curds") reactor.curds(f.c);
      else if (f.t === "coat") reactor.coat(f.o, f.c);
      else if (f.t === "dissolve") reactor.dissolve(f.o);
      else if (f.t === "color") reactor.setColor(f.c, f.a, f.slow);
      else if (f.t === "oil") reactor.oilOn();
      else if (f.t === "emulsify") reactor.emulsify();
      else if (f.t === "heat") { reactor.heatOn(Math.sign(f.v)); animateTemp(state.temp + f.v); }
    }, i * 140));
  }
  function animateTemp(to) {
    const from = state.temp, t0 = performance.now(), dur = App.reduced.matches ? 1 : 2200;
    const tick = (now) => { const k = Math.min(1, (now - t0) / dur); state.temp = from + (to - from) * (1 - Math.pow(1 - k, 3)); $("#lab-temp").innerHTML = tempHTML(); if (k < 1) requestAnimationFrame(tick); };
    requestAnimationFrame(tick);
  }

  /* ---------- adding a substance ---------- */
  function fly(id) {
    return new Promise((res) => {
      const tok = $(`.tok[data-sub="${id}"]`), cup = $("#lab-canvas");
      if (!tok || App.reduced.matches) { res(); return; }
      const a = tok.querySelector(".tok-art").getBoundingClientRect(), b = cup.getBoundingClientRect();
      const fl = document.createElement("div");
      fl.className = "flyer"; fl.innerHTML = tokenArt(id);
      fl.style.cssText = `left:${a.left}px;top:${a.top}px;width:${a.width}px;height:${a.height}px`;
      document.body.appendChild(fl);
      const dx = b.left + b.width / 2 - (a.left + a.width / 2), dy = b.top + b.height * 0.12 - (a.top + a.height / 2);
      const anim = fl.animate([
        { transform: "translate(0,0) rotate(0) scale(1)" },
        { transform: `translate(${dx * 0.55}px,${dy * 0.55 - 70}px) rotate(-25deg) scale(1.25)`, offset: 0.55 },
        { transform: `translate(${dx}px,${dy}px) rotate(-110deg) scale(.9)`, opacity: 1 }
      ], { duration: 640, easing: "cubic-bezier(.4,0,.3,1)" });
      anim.onfinish = () => { fl.remove(); res(); };
    });
  }
  function add(id) {
    queue = queue.then(() => doAdd(id)).catch(() => {});
    return queue;
  }
  async function doAdd(id) {
    if (state.mode === "challenge" && (state.ch.done || state.ch.finished)) return;
    if (state.cup.includes(id)) { App.toast(t("alreadyIn"), "info"); return; }
    if (state.cup.length >= 4) { App.toast(t("cupFull"), "info"); return; }
    const s = sub(id);
    state.cup.push(id);
    const tok = $(`.tok[data-sub="${id}"]`); if (tok) { tok.classList.add("used"); tok.setAttribute("aria-disabled", "true"); }
    await fly(id);
    if (s.kind === "liquid") reactor.pour(s.c, s.a);
    else if (s.kind === "powder") reactor.powder(s.c);
    else reactor.drop(id);
    await new Promise((r) => setTimeout(r, App.reduced.matches ? 50 : 520));
    const res = evaluate();
    if (res.color) reactor.setColor(res.color.hex, res.color.a);
    let card = null;
    res.rules.forEach((r) => applyFx(r));
    const hits = [...res.rules.map((r) => ({ kind: "rule", id: r.id })), ...(res.ind && !state.fired.has(res.ind) ? [{ kind: "ind", id: res.ind }] : [])];
    if (res.ind) state.fired.add(res.ind);
    if (hits.length) {
      const last = hits[hits.length - 1];
      const isNew = !state.found.has(last.id);
      hits.forEach((h) => { if (!state.found.has(h.id)) { state.found.add(h.id); const d = h.kind === "rule" ? rule(h.id)[L()] : LAB.indicatorFinds[h.id][L()]; App.toast(t("discToast", { name: d.n }), "star"); } });
      card = { kind: last.kind, id: last.id, isNew, teacher: state.cup.some((x) => sub(x).teacher) };
    } else if (state.cup.length === 1) card = { kind: "added", id };
    else if (!state.card || state.card.kind === "added" || state.card.kind === "none") card = { kind: "none" };
    if (card) state.card = card;
    const d = card && (card.kind === "rule" ? rule(card.id)[L()] : card.kind === "ind" ? LAB.indicatorFinds[card.id][L()] : null);
    App.announce(`${s[L()].n}. ${d ? d.n + ". " + d.o : card && card.kind === "none" ? t("noReactionTitle") : ""}`);
    if (state.mode === "challenge") checkGoal(hits);
    renderPanel(); renderRing();
  }
  function checkGoal(hits) {
    const ch = state.ch, need = LAB.goals[ch.i].need;
    const hit = hits.find((h) => need.includes(h.id)) || (need.some((n) => state.fired.has(n)) ? { id: need.find((n) => state.fired.has(n)) } : null);
    if (hit) {
      ch.done = true;
      const p = ch.answered ? 1 : ch.wrong === 0 ? 10 : ch.wrong === 1 ? 7 : ch.wrong === 2 ? 5 : 3;
      ch.results[ch.i] = p; ch.pts += p;
      state.card = { kind: hit.id.startsWith("ind-") ? "ind" : "rule", id: hit.id };
      App.toast(t("chSuccess", { p }), "trophy");
    } else if (state.cup.length >= 2) ch.tried = true;
  }
  async function empty() {
    if (state.mode === "challenge" && state.ch.tried && !state.ch.done) { state.ch.wrong++; state.ch.tried = false; }
    state.cup = []; state.fired = new Set(); state.temp = 20;
    if (state.mode === "free") state.card = null;
    await reactor.empty();
    render();
  }
  function setMode(m) {
    if (m === state.mode && !(m === "challenge" && state.ch.finished)) return;
    state.mode = m;
    if (m === "challenge") Object.assign(state.ch, { i: 0, pts: 0, wrong: 0, tried: false, done: false, results: [], hinted: false, answered: false, finished: false });
    state.cup = []; state.fired = new Set(); state.temp = 20; state.card = null;
    reactor.reset(); reactor.draw(); render();
  }
  function nextRound() {
    const ch = state.ch;
    if (ch.i >= LAB.goals.length - 1) { ch.finished = true; renderPanel(); const h = $("#lab-panel h3"); if (h) { h.setAttribute("tabindex", "-1"); h.focus(); } return; }
    Object.assign(ch, { i: ch.i + 1, wrong: 0, tried: false, done: false, hinted: false, answered: false });
    state.cup = []; state.fired = new Set(); state.temp = 20; state.card = null;
    reactor.empty().then(() => { render(); const g = $(".ch-goal"); if (g) { g.setAttribute("tabindex", "-1"); g.focus({ preventScroll: true }); } });
  }

  /* ---------- drag and drop ---------- */
  function setupDrag() {
    const ring = $("#lab-ring");
    let drag = null;
    ring.addEventListener("pointerdown", (e) => {
      const tok = e.target.closest(".tok"); if (!tok || tok.getAttribute("aria-disabled") === "true" || e.button > 0) return;
      drag = { tok, id: tok.dataset.sub, x: e.clientX, y: e.clientY, moved: false, ghost: null };
    });
    window.addEventListener("pointermove", (e) => {
      if (!drag) return;
      if (!drag.moved && Math.hypot(e.clientX - drag.x, e.clientY - drag.y) > 8) {
        drag.moved = true;
        drag.ghost = document.createElement("div"); drag.ghost.className = "flyer drag"; drag.ghost.innerHTML = tokenArt(drag.id);
        document.body.appendChild(drag.ghost); drag.tok.classList.add("dragging");
      }
      if (drag.moved) {
        drag.ghost.style.cssText = `left:${e.clientX - 32}px;top:${e.clientY - 32}px;width:64px;height:64px`;
        const b = $("#lab-canvas").getBoundingClientRect();
        $("#lab-ring").classList.toggle("drop-hover", e.clientX > b.left && e.clientX < b.right && e.clientY > b.top && e.clientY < b.bottom);
      }
    });
    window.addEventListener("pointerup", (e) => {
      if (!drag) return;
      const d = drag; drag = null;
      $("#lab-ring").classList.remove("drop-hover");
      if (!d.moved) return;
      d.tok.classList.remove("dragging"); d.ghost.remove();
      const b = $("#lab-canvas").getBoundingClientRect();
      if (e.clientX > b.left && e.clientX < b.right && e.clientY > b.top && e.clientY < b.bottom) { d.tok.dataset.dropped = "1"; add(d.id); }
    });
    ring.addEventListener("click", (e) => {
      const tok = e.target.closest(".tok"); if (!tok) return;
      if (tok.dataset.dropped) { delete tok.dataset.dropped; return; }
      if (tok.getAttribute("aria-disabled") === "true") { App.toast(t("alreadyIn"), "info"); return; }
      add(tok.dataset.sub);
    });
  }

  function init() {
    reactor = new Reactor($("#lab-canvas"));
    stageHome = $("#lab-stage").parentElement;
    render(); setupDrag();
    // clicks are handled on the stage itself, so they still work when presentation mode borrows it
    const onClick = (e) => {
      const m = e.target.closest("[data-mode]"); if (m) { setMode(m.dataset.mode); return; }
      const sh = e.target.closest("[data-shelf]"); if (sh) { if (state.shelf !== sh.dataset.shelf) { state.shelf = sh.dataset.shelf; empty(); } return; }
      const b = e.target.closest("[data-lab]"); if (!b || b.getAttribute("aria-disabled") === "true") return;
      const a = b.dataset.lab;
      if (a === "empty") empty();
      else if (a === "next") nextRound();
      else if (a === "replay") { state.ch.finished = false; state.mode = "free"; setMode("challenge"); }
      else if (a === "hint") { state.ch.hinted = true; renderPanel(); }
      else if (a === "answer") { state.ch.answered = true; renderPanel(); answerFor(state.ch.i).forEach((id) => { const tk = $(`.tok[data-sub="${id}"]`); if (tk) tk.classList.add("pulse"); }); }
    };
    $("#lab-stage").addEventListener("click", onClick);
    $$(".mode-tabs").forEach((el) => el.addEventListener("click", onClick));
    App.onRender(render);
  }
  /* presentation mode borrows the lab */
  function mountTo(el) { el.appendChild($("#lab-stage")); setTimeout(() => reactor.resize(), 60); }
  function restore() { if (stageHome) stageHome.appendChild($("#lab-stage")); setTimeout(() => reactor.resize(), 60); }
  return { init, add, mountTo, restore, setMode };
})();
window.Lab = Lab;
