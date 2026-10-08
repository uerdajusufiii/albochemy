"use strict";
/* =========================================================================
   PRESENTATION MODE (pages/present.html) — full-screen slides for a big audience.
   Keys: → / Space / Page Down = next · ← / Page Up = back · 1–4 or A–D =
   choose an answer · Enter or R = reveal · F = full screen · T = light/dark ·
   L = language · G = all slides · B = black screen · Esc = exit.
   ========================================================================= */
const Present = (function () {
  const { esc, icon, t, $ } = App;
  const root = document.getElementById("present");
  const SPOT = ["foam", "flame", "trafficlight", "hotice"];
  let slides = [], idx = 0, open = false, ptheme = "dark", idleTimer = null, labMounted = false;
  const L = () => App.lang();

  function build() {
    slides = [{ type: "title" }];
    JOURNEY.forEach((ch, i) => { slides.push({ type: "idea", ch: i }); slides.push({ type: "whn", ch: i }); });
    SPOT.filter(getExp).forEach((id) => slides.push({ type: "spot", id }));
    slides.push({ type: "lab" }, { type: "end" });
  }
  function slideLabel(s, i) {
    if (s.type === "title") return t("pvTitleSlide");
    if (s.type === "idea") return `${t("chapter")} ${s.ch + 1} · ${JOURNEY[s.ch][L()].chapter}`;
    if (s.type === "whn") return `${t("whnTitle")} · ${JOURNEY[s.ch][L()].chapter}`;
    if (s.type === "spot") return `${t("pvSpotlight")} · ${getExp(s.id)[L()].name}`;
    if (s.type === "lab") return t("pvLiveLab");
    return t("pvEnd");
  }
  function sceneVars(ch) {
    const p = ch.pal, bg = ch.dark ? p[0] : ptheme === "dark" ? p[1] : p[0];
    return `--s-bg:${bg};--pv-bg:${bg};--a1:${p[2]};--a2:${p[3]};--a3:${p[4]};--a4:${p[5]};--a5:${p[6]}`;
  }
  function slideHTML(s) {
    if (s.type === "title") {
      return `<div class="pv-slide pv-title"><div class="opening" aria-hidden="true"><div class="op-art">${Art.opening().replace(/op-in/g, "pv-op-in")}</div></div>
        <div class="pv-title-copy"><span class="pv-kicker pa" style="--i:0">ChemLab Explorer · ${esc(t("pvKickerGrades"))}</span>
        <h1 class="pv-h pa" style="--i:1">${t("pvHeadline")}</h1><p class="pv-sub pa" style="--i:2">${esc(t("pvTagline"))}</p></div></div>`;
    }
    if (s.type === "idea" || s.type === "whn") {
      const ch = JOURNEY[s.ch], c = ch[L()], id = "p-" + ch.key;
      if (s.type === "idea") {
        return `<div class="pv-slide pv-scene ${ch.dark ? "dark-scene" : ""}" style="${sceneVars(ch)}">
          <div class="scene-art art-${ch.key} pa" style="--i:0" aria-hidden="true">${Art.scene(ch.key).replace(/id="([a-z]+-[a-z]+)"/g, 'id="pv-$1"').replace(/url\(#([a-z]+-[a-z]+)\)/g, "url(#pv-$1)")}</div>
          <div><span class="pv-kicker pa" style="--i:1"><span class="num">${s.ch + 1}</span>${esc(t("chapter"))} ${s.ch + 1} · ${esc(c.chapter)}</span>
          <h2 class="pv-h pa" style="--i:2">${c.title}</h2><p class="pv-sub pa" style="--i:3">${esc(c.idea)}</p><p class="pv-text pa" style="--i:4">${esc(c.body)}</p></div></div>`;
      }
      WHN.register(id, { manual: true, data: () => ({ q: ch[L()].q, options: ch[L()].options, result: ch[L()].result, why: ch[L()].why }),
        onReveal: () => { const sl = root.querySelector(".pv-slide.current"); if (sl) sl.classList.add("revealed"); },
        onReset: () => { const sl = root.querySelector(".pv-slide.current"); if (sl) sl.classList.remove("revealed"); } });
      return `<div class="pv-slide pv-scene pv-whn ${ch.dark ? "dark-scene" : ""} ${WHN.state(id).revealed ? "revealed" : ""}" style="${sceneVars(ch)}">
        <div class="scene-art art-${ch.key} pa" style="--i:0" aria-hidden="true">${Art.scene(ch.key).replace(/id="([a-z]+-[a-z]+)"/g, 'id="pw-$1"').replace(/url\(#([a-z]+-[a-z]+)\)/g, "url(#pw-$1)")}</div>
        <div class="pa" style="--i:1">${WHN.box(id)}</div></div>`;
    }
    if (s.type === "spot") {
      const e = getExp(s.id), c = e[L()], first = c.predict.result.split(/(?<=[.!?])\s/)[0];
      return `<div class="pv-slide pv-spot tp" style="${App.topicStyle(e.topic)}">
        <div class="pa" style="--i:0">${Clip.html(e, "pv-" + e.id)}</div>
        <div><span class="pv-kicker pa" style="--i:1">${esc(t("pvSpotlight"))} · ${esc(t("topic_" + e.topic))}</span>
          <h2 class="pv-h pa" style="--i:2">${esc(c.name)}</h2><p class="pv-sub pa" style="--i:3">${esc(c.hook)}</p>
          <ul class="pv-facts pa" style="--i:4"><li><span class="b">1</span><span>${esc(c.aim)}</span></li><li><span class="b">2</span><span>${esc(first)}</span></li><li><span class="b">3</span><span class="mono">${esc(c.equation)}</span></li></ul></div></div>`;
    }
    if (s.type === "lab") {
      return `<div class="pv-slide pv-lab"><div class="pv-lab-head pa" style="--i:0"><h2 class="pv-h">${t("pvLabTitle")}</h2><p class="pv-text">${esc(t("pvLabSub"))}</p></div><div class="pv-lab-slot pa" style="--i:1"></div></div>`;
    }
    // confetti stays in the empty strips above and below the text
    const conf = (seed) => {
      const cols = ["var(--coral)", "var(--sun)", "var(--cobalt)", "var(--mint)", "var(--magenta)"], r = Art.rng(seed);
      let h = "";
      for (let i = 0; i < 15; i++) h += `<i style="left:${(2 + r() * 96).toFixed(1)}%;top:${(10 + r() * 66).toFixed(1)}%;--c:${cols[i % 5]};--s:${(10 + r() * 18).toFixed(0)}px;--r:${(r() * 180).toFixed(0)}deg;--br:${r() > 0.5 ? "50%" : "4px"};--t:${(5 + r() * 6).toFixed(1)}s"></i>`;
      return h;
    };
    return `<div class="pv-slide pv-end"><div class="confetti top" aria-hidden="true">${conf("pvend")}</div><div class="confetti bottom" aria-hidden="true">${conf("pvend-b")}</div><div class="pv-end-inner">
      <span class="pv-kicker pa" style="--i:0">${esc(t("pvThanks"))}</span><h2 class="pv-h pa" style="--i:1">${t("pvEndTitle")}</h2>
      <p class="pv-sub pv-center pa" style="--i:2">${esc(t("pvEndSub"))}</p>
      <ul class="pv-stats pa" style="--i:3"><li><b>${EXPERIMENTS.length}</b><span>${esc(t("statExperiments"))}</span></li><li><b>${LAB.discoveries.length}</b><span>${esc(t("statReactions"))}</span></li><li><b>${JOURNEY.length}</b><span>${esc(t("statIdeas"))}</span></li><li><b>2</b><span>${esc(t("statLangs"))}</span></li></ul></div></div>`;
  }
  function chrome() {
    return `<div class="pv-progress" aria-hidden="true"><i></i></div><div class="pv-stage" id="pv-stage"></div>
      <p class="pv-help" aria-hidden="true">${esc(t("pvKeysHint"))}</p>
      <div class="pv-bar" role="toolbar" aria-label="${esc(t("pvControls"))}">
        <button type="button" data-pv="prev" aria-label="${esc(t("prevSlide"))}">${icon("arrow-l")}</button>
        <span class="pv-count" aria-live="polite"></span>
        <button type="button" class="pv-reveal" data-pv="reveal" hidden>${icon("eye")}<span>${esc(t("whnReveal"))}</span></button>
        <button type="button" class="pv-next" data-pv="next" aria-label="${esc(t("nextSlide"))}">${icon("arrow")}</button>
        <span class="pv-sep" aria-hidden="true"></span>
        <button type="button" class="opt-hide" data-pv="grid" aria-label="${esc(t("pvAllSlides"))}" title="${esc(t("pvAllSlides"))} (G)">${icon("layers")}</button>
        <button type="button" data-pv="theme" aria-label="${esc(t("pvTheme"))}" title="${esc(t("pvTheme"))} (T)">${icon(ptheme === "dark" ? "sun" : "moon")}</button>
        <button type="button" class="opt-hide" data-pv="lang" aria-label="${esc(t("language"))}" title="${esc(t("language"))} (L)">${L() === "en" ? "SQ" : "EN"}</button>
        <button type="button" data-pv="full" aria-label="${esc(t("pvFull"))}" title="${esc(t("pvFull"))} (F)">${icon("expand")}</button>
        <button type="button" data-pv="exit" aria-label="${esc(t("pvExit"))}" title="${esc(t("pvExit"))} (Esc)">${icon("x")}</button>
      </div>
      <div class="pv-grid" role="dialog" aria-label="${esc(t("pvAllSlides"))}"><h2>${esc(t("pvAllSlides"))}</h2><ol>${slides.map((s, i) => `<li><button type="button" data-pv-go="${i}"><small>${i + 1}</small>${esc(slideLabel(s, i))}</button></li>`).join("")}</ol></div>
      <div class="pv-black" aria-hidden="true"></div>`;
  }
  function show(i, dir, instant) {
    i = Math.max(0, Math.min(slides.length - 1, i));
    const stage = $("#pv-stage"), old = stage.querySelector(".pv-slide.current");
    if (labMounted && slides[idx].type === "lab" && i !== idx) { Lab.restore(); labMounted = false; }
    if (old) old.querySelectorAll(".clip").forEach(Clip.stop);
    idx = i;
    stage.insertAdjacentHTML("beforeend", slideHTML(slides[i]));
    const el = stage.lastElementChild;
    el.classList.add("current");
    el.setAttribute("aria-label", `${i + 1} / ${slides.length}: ${slideLabel(slides[i], i)}`);
    el.setAttribute("role", "group");
    if (old) {
      old.classList.remove("current");
      if (instant || App.reduced.matches) old.remove();
      else { old.classList.add("leave"); setTimeout(() => old.remove(), 700); }
    }
    if (!(instant || App.reduced.matches)) { el.classList.add("enter"); void el.offsetWidth; el.classList.remove("enter"); }
    requestAnimationFrame(() => el.classList.add("shown"));
    if (slides[i].type === "lab") { Lab.mountTo(el.querySelector(".pv-lab-slot")); labMounted = true; }
    if (slides[i].type === "spot") { const fig = el.querySelector(".clip"); if (fig) setTimeout(() => Clip.play(fig), App.reduced.matches ? 0 : 900); }
    updateBar();
    App.route.slide = i; App.writeHash();
    App.announce(`${t("slide")} ${i + 1} / ${slides.length}. ${slideLabel(slides[i], i)}`);
  }
  function currentWhn() { const s = slides[idx]; return s && s.type === "whn" ? "p-" + JOURNEY[s.ch].key : null; }
  function updateBar() {
    root.querySelector(".pv-count").textContent = `${idx + 1} / ${slides.length}`;
    root.querySelector(".pv-progress i").style.width = ((idx + 1) / slides.length) * 100 + "%";
    const w = currentWhn(), rv = root.querySelector(".pv-reveal");
    rv.hidden = !w || WHN.state(w).revealed || WHN.state(w).waiting;
    root.querySelectorAll("[data-pv-go]").forEach((b) => b.setAttribute("aria-current", String(Number(b.dataset.pvGo) === idx)));
  }
  function next() {
    const w = currentWhn();
    if (w && !WHN.state(w).revealed && !WHN.state(w).waiting) { WHN.reveal(w); setTimeout(updateBar, 1500); updateBar(); return; }
    if (idx < slides.length - 1) show(idx + 1, 1);
  }
  function prev() { if (idx > 0) show(idx - 1, -1); }
  function fullscreen() {
    const fail = () => App.toast(t("pvFullFail"), "info");
    try {
      if (!document.fullscreenElement) {
        const req = root.requestFullscreen || root.webkitRequestFullscreen;
        if (!req) { fail(); return; }
        const p = req.call(root); if (p && p.catch) p.catch(fail);
      } else {
        const p = (document.exitFullscreen || document.webkitExitFullscreen).call(document); if (p && p.catch) p.catch(() => {});
      }
    } catch (e) { fail(); }
  }
  function setTheme() { ptheme = ptheme === "dark" ? "light" : "dark"; root.dataset.ptheme = ptheme; rebuild(); }
  function rebuild() { const keep = idx; root.innerHTML = chrome(); show(keep, 0, true); wake(); }
  function wake() {
    root.classList.remove("idle");
    clearTimeout(idleTimer);
    if (window.matchMedia("(pointer:fine)").matches) idleTimer = setTimeout(() => { if (!root.querySelector(".pv-bar:focus-within")) root.classList.add("idle"); }, 2600);
  }
  function openP(i, opts) {
    build();
    open = true; root.hidden = false; root.dataset.ptheme = ptheme;
    document.body.classList.add("presenting");
    root.innerHTML = chrome();
    show(i || 0, 0, true);
    root.focus({ preventScroll: true });
    wake();
    if (!(opts && opts.instant)) App.toast(t("pvStartToast"), "present");
  }
  function close() {
    if (!open) return;
    if (labMounted) { Lab.restore(); labMounted = false; }
    root.querySelectorAll(".clip").forEach(Clip.stop);
    if (document.fullscreenElement) { try { const p = (document.exitFullscreen || document.webkitExitFullscreen).call(document); if (p && p.catch) p.catch(() => {}); } catch (e) { /* ignore */ } }
    open = false;
    App.back();                                  // back to the page the presenter came from
  }
  root.addEventListener("click", (e) => {
    wake();
    const b = e.target.closest("[data-pv]");
    if (b) {
      const a = b.dataset.pv;
      if (a === "next") next(); else if (a === "prev") prev(); else if (a === "reveal") next();
      else if (a === "full") fullscreen(); else if (a === "exit") close(); else if (a === "theme") setTheme();
      else if (a === "lang") App.setLang(L() === "en" ? "sq" : "en");
      else if (a === "grid") root.classList.toggle("overview");
      return;
    }
    const g = e.target.closest("[data-pv-go]");
    if (g) { root.classList.remove("overview"); show(Number(g.dataset.pvGo), 0); return; }
    if (e.target.closest("[data-whn]") || e.target.closest("[data-whn-reveal]")) setTimeout(updateBar, 50);
  });
  root.addEventListener("pointermove", wake);
  document.addEventListener("keydown", (e) => {
    if (!open) return;
    if (e.target.closest && e.target.closest("input, textarea")) return;
    const k = e.key;
    wake();
    if (root.classList.contains("blackout") && k !== "b" && k !== "B" && k !== ".") { root.classList.remove("blackout"); e.preventDefault(); return; }
    if (k === "ArrowRight" || k === "PageDown" || (k === " " && !e.target.closest("button"))) { e.preventDefault(); next(); }
    else if (k === "ArrowLeft" || k === "PageUp" || k === "Backspace") { e.preventDefault(); prev(); }
    else if ((k === "Enter" && (!e.target.closest("button") || e.target.closest(".whn-opt"))) || k === "r" || k === "R") { const w = currentWhn(); if (w || k === "Enter") { e.preventDefault(); next(); } }
    else if (/^[1-4]$/.test(k) || /^[a-dA-D]$/.test(k)) {
      const w = currentWhn(); if (!w) return;
      const pos = /^[1-4]$/.test(k) ? Number(k) - 1 : "abcd".indexOf(k.toLowerCase());
      const st = WHN.state(w); if (st.revealed) return;
      WHN.pick(w, st.order[pos]);
    }
    else if (k === "f" || k === "F") fullscreen();
    else if (k === "t" || k === "T") setTheme();
    else if (k === "l" || k === "L") App.setLang(L() === "en" ? "sq" : "en");
    else if (k === "g" || k === "G" || k === "o" || k === "O") root.classList.toggle("overview");
    else if (k === "b" || k === "B" || k === ".") root.classList.toggle("blackout");
    else if (k === "Home") show(0, 0); else if (k === "End") show(slides.length - 1, 0);
    else if (k === "Escape") { if (root.classList.contains("overview")) root.classList.remove("overview"); else if (!document.fullscreenElement) close(); }
  });
  App.onRender(() => { if (open) rebuild(); });
  document.addEventListener("whnrevealed", () => { if (open) updateBar(); });
  function init() { openP(App.route.slide || 0, { instant: !!App.route.from }); }
  return { init, open: openP, show: (i) => { if (open) show(i, 0, true); }, close, isOpen: () => open };
})();
window.Present = Present;
