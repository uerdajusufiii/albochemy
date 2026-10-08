"use strict";
/* =========================================================================
   HOME PAGE (index.html)
   Opening — the layered paper-cut scene, pointer/scroll parallax and the
             tap-the-flask reaction.
   Journey — six chapter scenes with parallax artwork and a "What happens
             next?" challenge each, then the finale.
   ========================================================================= */
const Opening = (function () {
  const op = document.getElementById("top");
  const PALS = [["#14a3a6", "#0b6f78", "#8fd3d0"], ["#2f6db5", "#163a63", "#8fb4de"], ["#3d8f86", "#1f5f5a", "#9fd0c9"], ["#5a6fa8", "#2e3f6e", "#aab7dc"], ["#0f8a95", "#0b4f6c", "#7fcfd6"]];
  let pi = -1, busy = false;
  function render() { op.querySelector(".op-art").innerHTML = Art.opening(); }
  function react(auto) {
    if (busy) return; busy = true;
    pi = (pi + 1) % PALS.length;
    const p = PALS[pi];
    op.style.setProperty("--next", p[0]);
    op.classList.remove("dropping", "burst"); void op.offsetWidth;
    op.classList.add("dropping", "burst");
    setTimeout(() => { op.style.setProperty("--lq1", p[0]); op.style.setProperty("--lq2", p[1]); op.style.setProperty("--lq3", p[2]); }, App.reduced.matches ? 0 : 480);
    setTimeout(() => { op.classList.remove("dropping", "burst"); busy = false; }, 1700);
    if (!auto) { const tap = op.querySelector(".op-tap"); if (tap) tap.classList.add("gone"); App.announce(App.t("tapFlaskDone")); }
  }
  function renderCopy() {
    const words = App.t("opTitle").split(" ");
    op.querySelector("#op-title").innerHTML = words.map((w, i) => {
      const em = /^\*.*\*$/.test(w), txt = App.esc(w.replace(/\*/g, ""));
      return `<span class="wl"><span class="w ${em ? "em" : ""}" style="--i:${i}">${txt}</span></span>`;
    }).join(" ");
  }
  function init() {
    render(); renderCopy(); App.onRender(renderCopy);
    op.addEventListener("click", (e) => { if (e.target.closest(".op-flask-btn") || e.target.closest(".op-tap")) react(false); });
    if (!App.reduced.matches) setTimeout(() => react(true), 1700);
    let raf = 0, mx = 0, my = 0;
    const fine = window.matchMedia("(pointer:fine)");
    op.addEventListener("pointermove", (e) => {
      if (App.reduced.matches || !fine.matches) return;
      mx = (e.clientX / window.innerWidth - 0.5) * 2; my = (e.clientY / window.innerHeight - 0.5) * 2;
      if (!raf) raf = requestAnimationFrame(() => { op.style.setProperty("--mx", mx.toFixed(3)); op.style.setProperty("--my", my.toFixed(3)); raf = 0; });
    });
    let visible = true;
    window.addEventListener("scroll", () => {
      if (!visible || App.reduced.matches) return;
      op.style.setProperty("--sy", Math.min(window.scrollY, 1200).toFixed(0));
    }, { passive: true });
    if ("IntersectionObserver" in window) new IntersectionObserver((en) => { visible = en[0].isIntersecting; op.classList.toggle("paused", !visible); }).observe(op);
  }
  return { init };
})();

const Journey = (function () {
  const { esc, icon, t } = App;
  const root = document.getElementById("journey");
  const words = (html) => html.split(" ").map((w, i) => `<span class="wl"><span style="--i:${i}">${w}</span></span>`).join(" ");
  function relChips(ids) {
    return ids.map(getExp).filter(Boolean).map((e) => `<a class="rel-chip tp" style="${App.topicStyle(e.topic)}" href="${App.expHref(e.id)}" data-exp="${e.id}"><span class="ri" aria-hidden="true">${icon(e.icon)}</span>${esc(e[App.lang()].name)}</a>`).join("");
  }
  function sceneStyle(ch) {
    const p = ch.pal;
    return `--s-bg-l:${p[0]};--s-bg-d:${p[1]};--a1:${p[2]};--a2:${p[3]};--a3:${p[4]};--a4:${p[5]};--a5:${p[6]}`;
  }
  // the wave band that leads from the section above into chapter `ch`
  function bandInto(ch, from) {
    return Art.band({ seed: ch.key, from, to: [ch.pal[0], ch.pal[1]], c1: `color-mix(in srgb,${ch.pal[4]} 70%,var(--edge-to))`, c2: ch.pal[2] });
  }
  // confetti lives only in the empty strips above and below the finale text
  function confetti(seed, n) {
    const cols = ["var(--coral)", "var(--sun)", "var(--cobalt)", "var(--mint)", "var(--magenta)", "var(--violet)"];
    const r = Art.rng(seed);
    let h = "";
    for (let i = 0; i < n; i++) h += `<i style="left:${(2 + r() * 96).toFixed(1)}%;top:${(12 + r() * 62).toFixed(1)}%;--c:${cols[i % 6]};--s:${(8 + r() * 14).toFixed(0)}px;--r:${(r() * 180).toFixed(0)}deg;--br:${r() > 0.5 ? "50%" : "3px"};--t:${(6 + r() * 6).toFixed(1)}s"></i>`;
    return h;
  }
  function render() {
    const L = App.lang();
    let h = `<div class="journey-intro"><div class="container">
        <span class="eyebrow rv"><span class="dot"></span>${esc(t("jKicker"))}</span>
        <h2 class="display rv" style="--rd:.08s">${t("jTitle")}</h2>
        <p class="lead rv" style="--rd:.16s">${esc(t("jLead"))}</p>
        <ol class="chapters-nav rv" style="--rd:.24s">${JOURNEY.map((ch, i) => `<li><a href="#ch-${ch.key}" data-goto="ch-${ch.key}" style="--c:${ch.pal[2]}"><span class="n">${i + 1}</span>${esc(ch[L].chapter)}</a></li>`).join("")}</ol>
      </div></div>`;
    let from = ["var(--s1bg)"];
    JOURNEY.forEach((ch, i) => {
      const c = ch[L], id = "j-" + ch.key;
      WHN.register(id, {
        data: () => ({ q: ch[App.lang()].q, options: ch[App.lang()].options, result: ch[App.lang()].result, why: ch[App.lang()].why,
          extra: i < JOURNEY.length - 1 ? `<a class="btn btn-sm" href="#ch-${JOURNEY[i + 1].key}" data-goto="ch-${JOURNEY[i + 1].key}">${icon("arrow")}${esc(t("nextChapter"))}</a>` : `<a class="btn btn-sm" href="#finale" data-goto="finale">${icon("arrow")}${esc(t("toFinale"))}</a>` }),
        onReveal: () => { const s = document.getElementById("ch-" + ch.key); if (s) s.classList.add("revealed"); },
        onReset: () => { const s = document.getElementById("ch-" + ch.key); if (s) s.classList.remove("revealed"); }
      });
      const revealed = WHN.state(id).revealed;
      h += bandInto(ch, from);
      h += `<section class="scene ${i % 2 ? "flip" : ""} ${ch.dark ? "dark-scene" : ""} ${revealed ? "revealed" : ""}" id="ch-${ch.key}" style="${sceneStyle(ch)}" aria-labelledby="t-${ch.key}">
        <div class="container scene-grid">
          <div class="scene-art art-${ch.key}" aria-hidden="true">${Art.scene(ch.key)}</div>
          <div class="scene-copy">
            <span class="chapter-tag fade" style="--rd:.05s"><span class="num">${i + 1}</span>${esc(t("chapter"))} ${i + 1} · ${esc(c.chapter)}</span>
            <h2 class="title" id="t-${ch.key}">${words(c.title)}</h2>
            <p class="idea fade" style="--rd:.3s">${esc(c.idea)}</p>
            <p class="body fade" style="--rd:.4s">${esc(c.body)}</p>
            <div class="fade" style="--rd:.5s">${WHN.box(id)}</div>
            <div class="related fade" style="--rd:.6s"><span class="lbl">${esc(t("tryIt"))}</span>${relChips(ch.related)}</div>
          </div>
        </div>
      </section>`;
      from = [ch.pal[0], ch.pal[1]];
    });
    h += Art.band({ seed: "fin", from, to: ["var(--paper)"], c1: "var(--sun)", c2: "var(--coral)" });
    h += `<section class="finale" id="finale" aria-labelledby="fin-title">
      <div class="confetti top" aria-hidden="true">${confetti("finale", 13)}</div><div class="confetti bottom" aria-hidden="true">${confetti("finale-b", 13)}</div>
      <div class="container finale-inner"><span class="eyebrow rv"><span class="dot"></span>${esc(t("finKicker"))}</span>
      <h2 class="title rv" id="fin-title" style="--rd:.1s">${t("finTitle")}</h2><p class="lead rv" style="--rd:.2s">${esc(t("finLead"))}</p>
      <div class="finale-ctas rv" style="--rd:.3s"><a class="btn btn-primary btn-lg" href="${App.href("experiments")}" data-nav="experiments">${icon("flask")}${esc(t("ctaExplore"))}</a>
        <a class="btn btn-lg" href="${App.href("lab")}" data-nav="lab">${icon("beaker")}${esc(t("ctaLab"))}</a>
        <a class="btn btn-lg btn-ink" href="${App.href("present", "/present/0")}" data-present="0">${icon("present")}${esc(t("present"))}</a></div></div></section>`;
    root.innerHTML = h;
    observe();
    App.observeReveal(root);
  }
  let io = null;
  function observe() {
    const scenes = Array.from(root.querySelectorAll(".scene"));
    if (io) io.disconnect();
    if (!("IntersectionObserver" in window)) { scenes.forEach((s) => s.classList.add("in")); return; }
    io = new IntersectionObserver((ents) => ents.forEach((en) => { if (en.isIntersecting) en.target.classList.add("in"); }), { rootMargin: "0px 0px -18% 0px", threshold: 0.05 });
    scenes.forEach((s) => io.observe(s));
  }
  let ticking = false;
  function onScroll() {
    if (ticking || App.reduced.matches) return;
    ticking = true;
    requestAnimationFrame(() => {
      const vh = window.innerHeight;
      root.querySelectorAll(".scene").forEach((s) => {
        const r = s.getBoundingClientRect();
        if (r.bottom < -200 || r.top > vh + 200) return;
        const p = Math.max(-1.3, Math.min(1.3, (r.top + r.height / 2 - vh / 2) / vh));
        s.style.setProperty("--p", p.toFixed(3));
      });
      ticking = false;
    });
  }
  function init() { render(); window.addEventListener("scroll", onScroll, { passive: true }); onScroll(); App.onRender(() => { render(); onScroll(); }); }
  return { init, render };
})();
