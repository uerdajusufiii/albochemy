"use strict";
/* =========================================================================
   EXPERIMENT VIEW (pages/experiments.html#/en/exp/<id>) — clip,
   "What happens next?", Why?, then How it works · Dangers · Video.
   ========================================================================= */
const ExpView = (function () {
  const { esc, icon, t, $, $$ } = App;
  const view = document.getElementById("exp-view");
  const LET = "ABCD";
  const st = {};
  let cur = null, observer = null;
  const S = (id) => (st[id] || (st[id] = { whyTried: [], whyOrder: App.shuffle([0, 1, 2, 3]), steps: new Set() }));
  const L = () => App.lang();
  const splitResult = (txt) => { const m = txt.match(/^(.+?[.!?])\s+(.*)$/s); return m ? [m[1], m[2]] : [txt, ""]; };
  const neighbours = (e) => { const i = EXPERIMENTS.indexOf(e); return [EXPERIMENTS[(i - 1 + EXPERIMENTS.length) % EXPERIMENTS.length], EXPERIMENTS[(i + 1) % EXPERIMENTS.length]]; };
  const expLink = (x, cls, inner) => `<a class="${cls || ""}" href="${App.expHref(x.id)}" data-exp="${x.id}">${inner}</a>`;

  function register(e) {
    const id = "x-" + e.id;
    WHN.register(id, {
      data: () => {
        const c = e[L()], [big, rest] = splitResult(c.predict.result);
        return { q: c.predict.q, options: c.predict.options, result: big, why: rest,
          media: `<div class="whn-demo demo ${Demo.classes(e.demo)}" aria-hidden="true">${Demo.svg(e.demo, "r-" + e.id)}</div>` };
      },
      onReset: () => { const b = document.getElementById("xp-why"); if (b) { b.hidden = true; b.innerHTML = ""; } }
    });
    return id;
  }

  function heroHTML(e, c) {
    const [prev, next] = neighbours(e), idx = EXPERIMENTS.indexOf(e);
    return `<header class="xp-hero">
      <div class="xp-layers" aria-hidden="true"><div class="big"></div><div class="big2"></div>
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none"><path d="${Art.wave(1440, 90, 30, 14, 2.5, e.id + "a")}" fill="color-mix(in srgb,var(--topic) 35%,var(--paper))"/><path d="${Art.wave(1440, 90, 52, 12, 3, e.id + "b")}" fill="color-mix(in srgb,var(--topic) 60%,var(--paper))"/><path d="${Art.wave(1440, 90, 68, 9, 3.5, e.id + "c")}" fill="var(--paper)"/></svg></div>
      <div class="container xp-hero-grid">
        <div class="xp-copy">
          <div class="xp-topbar"><a class="btn btn-sm" href="${App.href("experiments")}" data-nav="experiments">${icon("arrow-l")}${esc(t("allExperiments"))}</a>
            <div class="xp-pn">${expLink(prev, "icon-btn", icon("chev-l") + `<span class="sr-only">${esc(t("prev"))}: ${esc(prev[L()].name)}</span>`)}${expLink(next, "icon-btn", icon("chev-r") + `<span class="sr-only">${esc(t("next"))}: ${esc(next[L()].name)}</span>`)}</div></div>
          <span class="xp-topic"><span class="ti" aria-hidden="true">${icon(TOPICS[e.topic].icon)}</span>${esc(t("topic_" + e.topic))} · ${esc(c.short)}</span>
          <h1 class="display" id="xp-title" tabindex="-1">${esc(c.name)}</h1>
          <p class="lead">${esc(c.hook)}</p>
          <ul class="xp-meta">
            <li>${icon("grad")}${esc(t("grades"))} ${e.grades}</li>
            <li><span class="lv-dots" aria-hidden="true">${[1, 2, 3].map((k) => `<i class="${k <= e.level ? "on" : ""}"></i>`).join("")}</span>${esc(t("level_" + e.level))}</li>
            <li class="m-sup"><span class="sup-dot sup-${e.supervision}" aria-hidden="true"></span>${esc(t("sup_" + e.supervision))}</li>
            <li>${icon("clock")}~${e.time} ${esc(t("minutes"))}</li>
            <li>${icon("book")}${idx + 1} / ${EXPERIMENTS.length}</li>
          </ul>
          <div class="xp-ctas"><a class="btn btn-primary btn-lg" href="#xp-predict" data-jump="xp-predict">${icon("question")}${esc(t("whnTitle"))}</a>
            <button type="button" class="btn btn-lg" data-jump="xp-clip-box">${icon("play")}${esc(t("watchClip"))}</button></div>
        </div>
        <div class="xp-clip" id="xp-clip-box">${Clip.html(e, "h-" + e.id)}</div>
      </div></header>`;
  }

  function whyHTML(e, c, s) {
    const w = c.why, done = s.whyTried.includes(w.answer), last = s.whyTried.length ? s.whyTried[s.whyTried.length - 1] : null;
    let h = `<h3>${icon("bulb")}${esc(t("whyTitle"))}</h3><p class="q" id="why-q">${esc(w.q)}</p><div class="opts" role="group" aria-labelledby="why-q">`;
    s.whyOrder.forEach((i, k) => {
      const tried = s.whyTried.includes(i);
      let cls = "", stI = "";
      if (tried && i !== w.answer) { cls = "is-wrong"; stI = icon("x", "state"); }
      if (done && i === w.answer) { cls = "is-correct"; stI = icon("check", "state"); }
      h += `<button type="button" class="opt ${cls}" data-why="${i}" data-key="why-${i}" aria-pressed="${last === i}" ${done || tried ? 'aria-disabled="true"' : ""}><span class="opt-letter" aria-hidden="true">${LET[k]}</span><span class="opt-text">${esc(w.options[i].t)}</span>${stI}</button>`;
    });
    h += `</div>`;
    if (last !== null) {
      const ok = last === w.answer;
      h += `<div class="feedback ${ok ? "ok" : "bad"}" id="why-fb" tabindex="-1"><p class="fb-title">${icon(ok ? "check" : "info")}${esc(ok ? t("correct") : t("notQuite"))}</p><p>${esc(w.options[last].fb)}</p>${ok ? "" : `<p><b>${esc(t("pickAnother"))}</b></p>`}</div>`;
    }
    if (last !== null && !done) h += `<div class="actions"><button type="button" class="btn btn-sm" data-why-show>${icon("bulb")}${esc(t("showAnswer"))}</button></div>`;
    return h;
  }
  function stepsHTML(e, c, s) {
    let h = "";
    c.steps.forEach((txt, i) => {
      if (i === e.predictAt) h += `<li class="callout">${icon("eye")}<span>${esc(t("predictCallout"))}</span><button type="button" class="btn btn-sm btn-ink" data-jump="xp-predict">${esc(t("goPredict"))}${icon("arrow")}</button></li>`;
      h += `<li><label class="step"><input type="checkbox" data-step="${i}" ${s.steps.has(i) ? "checked" : ""}><span class="num" aria-hidden="true"><span class="n">${i + 1}</span>${icon("check", "ck")}</span><span class="txt">${esc(txt)}</span></label></li>`;
    });
    return h;
  }
  function howHTML(e, c, s) {
    return `<section class="section" id="sec-h" aria-labelledby="h-title">
      <div class="section-head"><span class="letter l-h" aria-hidden="true">${esc(t("letterH"))}</span><div><h2 id="h-title" tabindex="-1">${esc(t("secH"))}</h2><p>${esc(t("secHsub"))}</p></div></div>
      <div class="grid-how"><div class="stack">
        <article class="card aim"><h3>${icon("target")}${esc(t("aim"))}</h3><p>${esc(c.aim)}</p></article>
        <article class="card"><h3>${icon("atom")}${esc(t("chemistry"))}</h3>${c.chemistry.map((p) => `<p>${esc(p)}</p>`).join("")}
          <div class="eq ${e.eqType === "idea" ? "eq-idea" : ""}"><span class="eq-label">${esc(e.eqType === "idea" ? t("keyIdea") : t("keyEquation"))}</span><span class="eq-body">${esc(c.equation)}</span></div></article>
        <article class="card"><div class="steps-head"><h3>${icon("steps")}${esc(t("steps"))}</h3><span class="progress-pill" id="steps-progress" aria-live="polite">${esc(t("stepsDone", { n: s.steps.size, t: c.steps.length }))}</span></div>
          <p class="hint">${esc(t("stepsHint"))}</p><ol class="steps">${stepsHTML(e, c, s)}</ol></article>
      </div><aside class="sticky-col"><article class="card"><h3>${icon("tool")}${esc(t("equipment"))}</h3><ul class="equip">${c.equipment.map((x) => `<li>${icon("check")}<span>${esc(x)}</span></li>`).join("")}</ul></article></aside></div>
    </section>`;
  }
  function dangerHTML(e, c) {
    return `<section class="section" id="sec-d" aria-labelledby="d-title">
      <div class="section-head"><span class="letter l-d" aria-hidden="true">${esc(t("letterD"))}</span><div><h2 id="d-title" tabindex="-1">${esc(t("secD"))}</h2><p>${esc(t("secDsub"))}</p></div></div>
      <div class="sup-banner sb-${e.supervision}"><span class="sup-ico" aria-hidden="true">${icon("users")}</span><div>
        <span class="eyebrow">${esc(t("supervision"))} · ${esc(t("grades"))} ${e.grades}</span>
        <p class="sup-title">${esc(t("sup_" + e.supervision))}</p><p>${esc(t("supd_" + e.supervision))}</p><p class="sup-note">${esc(c.supervisionNote)}</p></div></div>
      <div class="grid-2">
        <article class="card card-haz"><h3>${icon("alert")}${esc(t("hazards"))}</h3><ul class="list list-haz">${c.hazards.map((x) => `<li>${icon("alert")}<span>${esc(x)}</span></li>`).join("")}</ul></article>
        <article class="card card-pre"><h3>${icon("shield")}${esc(t("precautions"))}</h3><ul class="list list-pre">${c.precautions.map((x) => `<li>${icon("check")}<span>${esc(x)}</span></li>`).join("")}</ul></article>
        <article class="card"><h3>${icon("goggles")}${esc(t("ppe"))}</h3><ul class="ppe">${e.ppe.map((k) => `<li>${icon(k)}<span>${esc(t("ppe_" + k))}</span></li>`).join("")}</ul></article>
        <article class="card"><h3>${icon("bin")}${esc(t("disposal"))}</h3><ul class="list">${c.disposal.map((x) => `<li>${icon("bin")}<span>${esc(x)}</span></li>`).join("")}</ul></article>
      </div>
      <aside class="emergency" aria-labelledby="em-title"><h3 id="em-title">${icon("alert")}${esc(t("emergencyTitle"))}</h3><ul>${UI[L()].emergency.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></aside>
    </section>`;
  }
  const canEmbed = (location.protocol === "http:" || location.protocol === "https:") && !window.CHEMLAB_ARTIFACT;
  function videoHTML(e, c) {
    let vid;
    if (!e.video) {
      vid = `<article class="card"><h3>${icon("play")}${esc(t("shortVideo"))}</h3><div class="no-video">${icon("info")}<div><b>${esc(t("noVideoTitle"))}</b>${esc(t("noVideo"))}</div></div></article>`;
    } else {
      const v = e.video, url = `https://www.youtube.com/shorts/${encodeURIComponent(v.id)}`;
      const inner = `<img src="https://i.ytimg.com/vi/${encodeURIComponent(v.id)}/hqdefault.jpg" alt="" loading="lazy"><span class="play-badge" aria-hidden="true">${icon("play")}</span><span class="thumb-label" aria-hidden="true">${canEmbed ? esc(t("playVideo")) : esc(t("watchYT")) + icon("ext")}</span>`;
      const thumb = canEmbed ? `<button type="button" class="thumb" data-play-video aria-label="${esc(t("playVideo"))}: ${esc(v.title)}">${inner}</button>`
        : `<a class="thumb" href="${url}" target="_blank" rel="noopener noreferrer" aria-label="${esc(t("watchYT"))}: ${esc(v.title)} (${esc(t("newTab"))})">${inner}</a>`;
      vid = `<article class="card"><h3>${icon("play")}${esc(t("shortVideo"))}</h3><div class="short-wrap">
        <div class="short-frame" id="short-frame">${thumb}</div>
        <div><span class="badge-short">${icon("clock")}${esc(t("shortBadge"))}</span>
          <p class="video-title">${esc(v.title)}</p><p class="video-meta">${icon("users")}${esc(t("channel"))}: ${esc(v.channel)}</p>
          <p class="video-note">${esc(v.note[L()])}</p>
          ${t("videoLang") ? `<p class="note">${icon("globe")}<span>${esc(t("videoLang"))}</span></p>` : ""}
          <p class="note ok">${icon("check")}<span>${esc(t("verified"))}</span></p>
          <a class="btn btn-sm video-yt" href="${url}" target="_blank" rel="noopener noreferrer">${icon("ext")}${esc(t("watchYT"))}<span class="sr-only"> (${esc(t("newTab"))})</span></a>
        </div></div></article>`;
    }
    const file = !window.CHEMLAB_ARTIFACT && typeof LOCAL_VIDEOS !== "undefined" && LOCAL_VIDEOS[e.id];
    const local = file ? `<article class="card local-video"><h3>${icon("play")}${esc(t("localVideoTitle"))}</h3>
        <video controls playsinline preload="metadata" src="${esc(App.root + "videos/" + file)}"></video><p class="note ok">${icon("check")}<span>${esc(t("localVideoNote"))}</span></p></article>` : "";
    return `<section class="section" id="sec-v" aria-labelledby="v-title">
      <div class="section-head"><span class="letter l-v" aria-hidden="true">${icon("play")}</span><div><h2 id="v-title" tabindex="-1">${esc(t("secV"))}</h2><p>${esc(t("secVsub"))}</p></div></div>
      <div class="video-grid">${Clip.html(e, "v-" + e.id)}${local}${vid}</div></section>`;
  }
  function tailHTML(e) {
    const [prev, next] = neighbours(e);
    const rel = EXPERIMENTS.filter((x) => x.topic === e.topic && x.id !== e.id).slice(0, 6);
    return `<section class="section card" aria-labelledby="src-title"><h3 id="src-title">${icon("book")}${esc(t("sources"))}</h3><p class="hint sources-note">${esc(t("sourcesNote"))}</p>
      <ul class="sources">${e.sources.map((s) => `<li><a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer"><span class="src-text"><span class="src-org">${esc(s.org)}</span><span class="src-title">${esc(s.title)}</span></span>${icon("ext")}<span class="sr-only"> (${esc(t("newTab"))})</span></a></li>`).join("")}</ul></section>
      <div class="related-row"><h3>${esc(t("moreTopic", { topic: t("topic_" + e.topic) }))}</h3><div class="related">${rel.map((x) => `<a class="rel-chip tp" style="${App.topicStyle(x.topic)}" href="${App.expHref(x.id)}" data-exp="${x.id}"><span class="ri" aria-hidden="true">${icon(x.icon)}</span>${esc(x[L()].name)}</a>`).join("")}</div></div>
      <nav class="pager" aria-label="${esc(t("allExperiments"))}">
        ${expLink(prev, "", `<small>${icon("arrow-l")}${esc(t("prev"))}</small><b>${esc(prev[L()].name)}</b>`)}
        ${expLink(next, "p-next", `<small>${esc(t("next"))}${icon("arrow")}</small><b>${esc(next[L()].name)}</b>`)}
      </nav>`;
  }

  function render(id) {
    const e = getExp(id); if (!e) return;
    if (cur) view.querySelectorAll(".clip").forEach(Clip.stop);
    cur = id;
    const c = e[L()], s = S(id), wid = register(e), revealed = WHN.state(wid).revealed;
    document.title = `${c.name} · ChemLab Explorer`;
    view.innerHTML = `<article class="xp tp" style="${App.topicStyle(e.topic)};--acc-l:${TOPICS[e.topic].c};--acc-d:${TOPICS[e.topic].d}" aria-labelledby="xp-title">
      ${heroHTML(e, c)}
      <div class="container xp-body">
        <section class="xp-predict" id="xp-predict" aria-label="${esc(t("whnTitle"))}">${WHN.box(wid)}<div class="card why-card" id="xp-why" ${revealed ? "" : "hidden"}>${revealed ? whyHTML(e, c, s) : ""}</div></section>
        <nav class="xp-tabs" aria-label="${esc(t("sectionsNav"))}"><div class="xp-tabs-inner">
          <button type="button" class="sec-tab" data-jump="sec-h" aria-current="true"><span class="tab-letter t-h" aria-hidden="true">${esc(t("letterH"))}</span>${esc(t("secH"))}</button>
          <button type="button" class="sec-tab" data-jump="sec-d"><span class="tab-letter t-d" aria-hidden="true">${esc(t("letterD"))}</span>${esc(t("secD"))}</button>
          <button type="button" class="sec-tab" data-jump="sec-v"><span class="tab-letter t-v" aria-hidden="true">${icon("play")}</span>${esc(t("secV"))}</button>
        </div></nav>
        ${howHTML(e, c, s)}${dangerHTML(e, c)}${videoHTML(e, c)}${tailHTML(e)}
      </div></article>`;
    if (revealed) { const d = view.querySelector(".whn-demo"); if (d) d.classList.add("play", "no-anim"); }
    watchSections();
  }
  function watchSections() {
    if (observer) observer.disconnect();
    if (!("IntersectionObserver" in window)) return;
    observer = new IntersectionObserver((ents) => ents.forEach((en) => { if (en.isIntersecting) $$(".sec-tab", view).forEach((b) => b.setAttribute("aria-current", String(b.dataset.jump === en.target.id))); }), { rootMargin: "-40% 0px -55% 0px" });
    ["sec-h", "sec-d", "sec-v"].forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el); });
  }
  function renderWhy(focus) {
    const e = getExp(cur), box = $("#xp-why"); if (!box) return;
    box.hidden = false; box.innerHTML = whyHTML(e, e[L()], S(cur));
    if (focus) { const f = focus.startsWith("#") ? $(focus, box) : $(`[data-key="${focus}"]`, box); if (f) f.focus({ preventScroll: true }); }
  }
  function jump(id) {
    const el = document.getElementById(id); if (!el) return;
    el.scrollIntoView({ behavior: App.behavior(), block: id === "xp-clip-box" ? "center" : "start" });
    const h = el.querySelector("h2[tabindex], .whn-opt, .clip-big"); if (h) h.focus({ preventScroll: true });
    if (id === "xp-clip-box") { const fig = el.querySelector(".clip"); if (fig && !fig.classList.contains("running")) setTimeout(() => Clip.play(fig), App.reduced.matches ? 0 : 450); }
  }
  view.addEventListener("click", (ev) => {
    const j = ev.target.closest("[data-jump]");
    if (j) { ev.preventDefault(); jump(j.dataset.jump); return; }
    const w = ev.target.closest("[data-why]");
    if (w) {
      if (w.getAttribute("aria-disabled") === "true") return;
      const e = getExp(cur), c = e[L()], s = S(cur), i = Number(w.dataset.why), ok = i === c.why.answer;
      s.whyTried.push(i); renderWhy(ok ? "#why-fb" : `why-${i}`);
      App.announce(`${ok ? t("correct") : t("notQuite")} ${c.why.options[i].fb}${ok ? "" : " " + t("pickAnother")}`);
      if (!ok && !App.reduced.matches) { const b = $(`[data-key="why-${i}"]`, view); if (b) b.classList.add("shake"); }
      return;
    }
    if (ev.target.closest("[data-why-show]")) {
      const e = getExp(cur), c = e[L()], s = S(cur);
      if (!s.whyTried.includes(c.why.answer)) s.whyTried.push(c.why.answer);
      renderWhy("#why-fb"); App.announce(`${t("correct")} ${c.why.options[c.why.answer].t}. ${c.why.options[c.why.answer].fb}`);
      return;
    }
    if (ev.target.closest("[data-play-video]")) {
      const e = getExp(cur), f = $("#short-frame");
      f.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(e.video.id)}?autoplay=1&rel=0&playsinline=1" title="${esc(e.video.title)}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>`;
      $("iframe", f).focus();
    }
  });
  view.addEventListener("error", (ev) => { const img = ev.target; if (img && img.tagName === "IMG" && img.closest(".thumb")) img.remove(); }, true);
  view.addEventListener("change", (ev) => {
    const box = ev.target.closest("input[data-step]"); if (!box) return;
    const e = getExp(cur), s = S(cur), i = Number(box.dataset.step);
    if (box.checked) s.steps.add(i); else s.steps.delete(i);
    $("#steps-progress").textContent = t("stepsDone", { n: s.steps.size, t: e[L()].steps.length });
  });
  document.addEventListener("whnrevealed", (ev) => {
    if (!cur || ev.detail.id !== "x-" + cur) return;
    const d = view.querySelector(".whn-demo"); if (d) requestAnimationFrame(() => Demo.play(d));
    renderWhy();
  });
  function leave() { view.querySelectorAll(".clip").forEach(Clip.stop); view.innerHTML = ""; cur = null; document.title = `${t("navExperiments")} · ChemLab Explorer`; }
  App.onRender(() => { if (cur) render(cur); });
  return { render, leave, current: () => cur };
})();
window.ExpView = ExpView;
