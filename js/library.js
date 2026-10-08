"use strict";
/* =========================================================================
   EXPERIMENT LIBRARY (pages/experiments.html) — filters, search and cards.
   Hover or focus a card to preview its clip; click it to open the experiment.
   ========================================================================= */
const Library = (function () {
  const { esc, icon, t, $ } = App;
  const f = { level: "all", grade: "all", topic: "all", q: "" };
  let expanded = false;
  const FIRST = 12;
  function matches(e) {
    if (f.level !== "all" && e.level !== Number(f.level)) return false;
    if (f.grade === "low" && e.gmin > 9) return false;
    if (f.grade === "high" && e.gmax < 10) return false;
    if (f.topic !== "all" && e.topic !== f.topic) return false;
    if (f.q) {
      const q = f.q.toLowerCase();
      const hay = [e.en.name, e.sq.name, e.en.short, e.sq.short, e.en.hook, e.sq.hook, UI.en["topic_" + e.topic], UI.sq["topic_" + e.topic]].join(" ").toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  }
  const filtered = () => f.level !== "all" || f.grade !== "all" || f.topic !== "all" || f.q;
  function lvDots(n) { return `<span class="lv-dots" aria-hidden="true">${[1, 2, 3].map((k) => `<i class="${k <= n ? "on" : ""}"></i>`).join("")}</span>`; }
  function card(e) {
    const c = e[App.lang()];
    return `<li><a class="xcard tp" style="${App.topicStyle(e.topic)}" href="${App.expHref(e.id)}" data-exp="${e.id}">
      <div class="xc-art demo ${Demo.classes(e.demo)}" aria-hidden="true"><div class="xc-badges"><span class="xc-badge">${lvDots(e.level)}${esc(t("level_" + e.level))}</span>${e.video ? `<span class="xc-badge vid">${icon("play")}${esc(t("shortBadgeMini"))}</span>` : ""}</div>${Demo.svg(e.demo, "c-" + e.id)}</div>
      <div class="xc-body"><span class="xc-topic">${icon(TOPICS[e.topic].icon)}${esc(t("topic_" + e.topic))}</span>
        <h3 class="xc-name">${esc(c.name)}</h3><p class="xc-short">${esc(c.short)}</p>
        <div class="xc-meta"><span>${esc(t("gradeShort"))} ${e.grades}</span><span class="sup-dot sup-${e.supervision}" title="${esc(t("sup_" + e.supervision))}"></span><span class="sr-only">${esc(t("sup_" + e.supervision))}, ${esc(t("level_" + e.level))}</span></div>
      </div></a></li>`;
  }
  function renderControls() {
    $("#lv-seg").innerHTML = ["all", "1", "2", "3"].map((v) => `<button type="button" data-lv="${v}" aria-pressed="${f.level === v}">${esc(v === "all" ? t("all") : t("level_" + v))}</button>`).join("");
    $("#gr-seg").innerHTML = [["all", t("all")], ["low", "7–9"], ["high", "10–12"]].map(([v, l]) => `<button type="button" data-gr="${v}" aria-pressed="${f.grade === v}">${esc(l)}</button>`).join("");
    $("#topic-chips").innerHTML = `<button type="button" class="chip" data-tp="all" aria-pressed="${f.topic === "all"}">${esc(t("allTopics"))}</button>` +
      Object.keys(TOPICS).map((k) => `<button type="button" class="chip tp" style="${App.topicStyle(k)}" data-tp="${k}" aria-pressed="${f.topic === k}"><span class="sw" aria-hidden="true"></span>${esc(t("topic_" + k))}</button>`).join("");
    $("#lib-search").value = f.q;
  }
  function renderGrid() {
    const list = EXPERIMENTS.filter(matches);
    const show = expanded || filtered() ? list : list.slice(0, FIRST);
    $("#xgrid").innerHTML = show.length ? show.map(card).join("") : `<li class="lib-empty"><p><b>${esc(t("noResults"))}</b></p><button type="button" class="btn" data-clear>${icon("refresh")}${esc(t("clearFilters"))}</button></li>`;
    $("#lib-count").textContent = t("showing", { n: show.length, t: EXPERIMENTS.length });
    const more = $("#lib-more");
    more.hidden = filtered() || list.length <= FIRST;
    more.innerHTML = expanded ? `${icon("arrow")}${esc(t("showLess"))}` : `${icon("tubes")}${esc(t("showAll", { n: EXPERIMENTS.length }))}`;
    more.setAttribute("aria-expanded", String(expanded));
  }
  function render() { renderControls(); renderGrid(); }
  function init() {
    render();
    App.onRender(render);
    $("#lv-seg").addEventListener("click", (e) => { const b = e.target.closest("[data-lv]"); if (!b) return; f.level = b.dataset.lv; renderControls(); renderGrid(); });
    $("#gr-seg").addEventListener("click", (e) => { const b = e.target.closest("[data-gr]"); if (!b) return; f.grade = b.dataset.gr; renderControls(); renderGrid(); });
    $("#topic-chips").addEventListener("click", (e) => { const b = e.target.closest("[data-tp]"); if (!b) return; f.topic = b.dataset.tp; renderControls(); renderGrid(); const nb = $(`[data-tp="${f.topic}"]`); if (nb) nb.focus(); });
    $("#lib-search").addEventListener("input", (e) => { f.q = e.target.value.trim(); renderGrid(); });
    $("#xgrid").addEventListener("click", (e) => { if (e.target.closest("[data-clear]")) { Object.assign(f, { level: "all", grade: "all", topic: "all", q: "" }); render(); } });
    $("#lib-more").addEventListener("click", () => {
      expanded = !expanded; renderGrid();
      if (!expanded) document.getElementById("library").scrollIntoView({ behavior: App.behavior(), block: "start" });
    });
    $("#surprise").addEventListener("click", () => {
      const list = EXPERIMENTS.filter(matches), pool = list.length ? list : EXPERIMENTS;
      const e = pool[Math.floor(Math.random() * pool.length)];
      App.toast(t("surpriseToast", { name: e[App.lang()].name }), "sparkle");
      App.openExp(e.id);
    });
    // hover or focus a card to play its clip preview
    const grid = $("#xgrid");
    const on = (e) => { const a = e.target.closest(".xcard"); if (!a || App.reduced.matches) return; const art = a.querySelector(".xc-art"); if (!art.classList.contains("play")) Demo.play(art); };
    const off = (e) => { const a = e.target.closest(".xcard"); if (!a || (e.relatedTarget && a.contains(e.relatedTarget))) return; a.querySelector(".xc-art").classList.remove("play"); };
    grid.addEventListener("mouseover", on); grid.addEventListener("focusin", on);
    grid.addEventListener("mouseout", off); grid.addEventListener("focusout", off);
  }
  return { init, render };
})();
