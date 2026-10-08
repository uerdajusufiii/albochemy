"use strict";
/* =========================================================================
   APP CORE — shared by every page.
   Language, light/dark theme, links between pages (with the paper-wipe
   transition), the app bar and menu, and small helpers.

   Each page tells this script who it is with <body data-page="…" data-root="…">:
     data-page  home | experiments | lab | present | about
     data-root  the way back to the project folder: "" for index.html,
                "../" for the files in pages/

   The part of the address after "#" keeps the language and theme when you
   move between pages, for example:
     index.html#/sq                     pages/experiments.html#/en/exp/cabbage
     pages/lab.html#/en/dark            pages/present.html#/en/present/3
   ========================================================================= */
const App = (function () {
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const icon = (n, c) => `<svg class="ic ${c || ""}" aria-hidden="true" focusable="false"><use href="#i-${n}"></use></svg>`;
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const behavior = () => (reduced.matches ? "auto" : "smooth");
  const topicStyle = (k) => `--tc:${TOPICS[k].c};--tcd:${TOPICS[k].d}`;
  const hasExperiments = () => typeof getExp === "function";

  /* ---------- which page is this? ---------- */
  const PAGE = document.body.dataset.page || "home";
  const ROOT = document.body.dataset.root || "";
  const IN_PAGES = ROOT !== "";
  const PAGES = { home: "index.html", experiments: "pages/experiments.html", lab: "pages/lab.html", present: "pages/present.html", about: "pages/about.html" };
  const DEFAULT_VIEW = PAGE === "experiments" ? "list" : PAGE;

  let lang = "en";
  let theme = null;                       // null = follow the device
  const route = { view: DEFAULT_VIEW, id: null, slide: null, section: null, from: null };
  const listeners = [];

  function t(key, vars) {
    let s = UI[lang][key];
    if (s === undefined) s = UI.en[key];
    if (s === undefined) return key;
    if (vars) s = s.replace(/\{(\w+)\}/g, (m, k) => (vars[k] !== undefined ? vars[k] : m));
    return s;
  }
  function announce(msg) { const live = $("#live"); if (!live) return; live.textContent = ""; setTimeout(() => { live.textContent = msg; }, 60); }
  let toastTimer = null;
  function toast(msg, ic) {
    const el = $("#toast"); if (!el) return;
    el.innerHTML = `<span class="t-ico">${icon(ic || "sparkle")}</span><span>${esc(msg)}</span>`;
    el.classList.add("on");
    clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove("on"), 3200);
  }

  /* ---------- theme ---------- */
  const effectiveTheme = () => theme || (darkQuery.matches ? "dark" : "light");
  function applyTheme() {
    if (theme) document.documentElement.setAttribute("data-theme", theme);
    else document.documentElement.removeAttribute("data-theme");
    const dark = effectiveTheme() === "dark";
    $$("[data-theme-btn]").forEach((b) => { b.innerHTML = icon(dark ? "sun" : "moon"); b.setAttribute("aria-label", dark ? t("themeToLight") : t("themeToDark")); b.title = b.getAttribute("aria-label"); });
    document.dispatchEvent(new CustomEvent("themechange"));
  }
  function toggleTheme() { theme = effectiveTheme() === "dark" ? "light" : "dark"; applyTheme(); writeHash(); }
  if (darkQuery.addEventListener) darkQuery.addEventListener("change", () => { if (!theme) applyTheme(); });
  // A host page (such as a hosted viewer) may set data-theme on <html> itself: follow its choice.
  function watchHostTheme() {
    const v = document.documentElement.getAttribute("data-theme");
    if (v === "dark" || v === "light") theme = v;
    if (!("MutationObserver" in window)) return;
    new MutationObserver(() => {
      const now = document.documentElement.getAttribute("data-theme");
      const val = now === "dark" || now === "light" ? now : null;
      if (val !== theme) { theme = val; applyTheme(); }
    }).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  }

  /* ---------- language ---------- */
  function renderStatic() {
    document.documentElement.lang = lang;
    const title = document.body.dataset.titleKey;
    document.title = title ? `${t(title)} · ChemLab Explorer` : t("docTitle");
    $$("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
    $$("[data-i18n-html]").forEach((el) => { el.innerHTML = t(el.dataset.i18nHtml); });
    $$("[data-i18n-label]").forEach((el) => el.setAttribute("aria-label", t(el.dataset.i18nLabel)));
    $$("[data-i18n-ph]").forEach((el) => el.setAttribute("placeholder", t(el.dataset.i18nPh)));
    $$("[data-lang]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    applyTheme();
  }
  function onRender(fn) { listeners.push(fn); }
  function renderAll() { renderStatic(); listeners.forEach((fn) => fn()); }
  function setLang(l) {
    if (l === lang || !UI[l]) return;
    lang = l; renderAll(); writeHash();
  }

  /* ---------- the address after "#" ---------- */
  function readHash() {
    let raw = location.hash;
    try { raw = decodeURIComponent(raw); } catch (e) { /* keep it as it is */ }
    const parts = raw.replace(/^#\/?/, "").split("/").filter(Boolean);
    route.view = DEFAULT_VIEW; route.id = null; route.slide = null; route.section = null;
    for (let i = 0; i < parts.length; i++) {
      const p = parts[i];
      if (p === "en" || p === "sq") lang = p;
      else if (p === "dark" || p === "light") theme = p;
      else if (p.charAt(0) === "~") route.from = p.slice(1) || "site";          // arrived from another page
      else if (p === "exp" && parts[i + 1]) { route.view = "exp"; route.id = parts[++i]; }
      else if (p === "present") { route.slide = Math.max(0, parseInt(parts[i + 1], 10) || 0); if (/^\d+$/.test(parts[i + 1] || "")) i++; }
      else if (hasExperiments() && getExp(p)) { route.view = "exp"; route.id = p; }
      else if (/^[a-z][\w-]*$/i.test(p)) route.section = p;                        // a part of the page, e.g. "journey"
    }
    if (route.view === "exp" && !(hasExperiments() && getExp(route.id))) { route.view = DEFAULT_VIEW; route.id = null; }
  }
  function hashFor() {
    let h = `#/${lang}`;
    if (route.view === "exp") h += `/exp/${route.id}`;
    if (PAGE === "present" && route.slide !== null) h += `/present/${route.slide}`;
    if (theme) h += `/${theme}`;
    return h;
  }
  let skipHash = false;
  function writeHash() {
    if (window.CHEMLAB_ARTIFACT) return;          // the hosted page keeps its state in memory
    const h = hashFor();
    if (location.hash === h) return;
    try { history.replaceState(null, "", h); } catch (e) { skipHash = true; location.hash = h; }
  }

  /* ---------- links between pages ---------- */
  function rel(page) {
    const p = PAGES[page];
    if (!IN_PAGES) return p;
    return page === "home" ? "../index.html" : p.replace("pages/", "");
  }
  function href(page, bits) { return `${rel(page)}#/${lang}${bits || ""}${theme ? "/" + theme : ""}`; }
  const expHref = (id) => href("experiments", `/exp/${id}`);

  // Cover the page with the paper sheets, then run `next` (usually: open another page).
  function leave(next) {
    const w = $("#wipe");
    if (!w || reduced.matches) { next(); return; }
    w.className = "wipe cover";
    setTimeout(next, 640);
  }
  function go(page, bits) {
    if (page === PAGE) { stay(bits); return; }
    const url = `${rel(page)}#/${lang}${bits || ""}${theme ? "/" + theme : ""}/~${PAGE}`;
    leave(() => { location.href = url; });
  }
  // A link to the page we are already on: scroll there instead of reloading.
  function stay(bits) {
    const section = bits && bits.replace(/^\//, "");
    if (PAGE === "experiments" && route.view === "exp" && !/^exp\//.test(section || "")) { showList(); return; }
    const el = section && document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: behavior(), block: "start" });
    else if (!section) window.scrollTo({ top: 0, behavior: behavior() });
  }
  // Back to where the visitor came from (used when leaving presentation mode).
  function back() {
    if (route.from && window.history.length > 1) { history.back(); return; }
    go("home");
  }

  /* ---------- page transition inside one page (paper wipe) ---------- */
  let busy = false;
  function transition(swap) {
    const w = $("#wipe");
    if (!w || busy) { swap(); return Promise.resolve(); }
    busy = true;
    if (reduced.matches) {
      w.className = "wipe fade on";
      return new Promise((res) => setTimeout(() => { swap(); w.className = "wipe fade"; busy = false; res(); }, 180));
    }
    w.className = "wipe cover";
    return new Promise((res) => {
      setTimeout(() => {
        swap();
        w.className = "wipe uncover";
        setTimeout(() => { w.className = "wipe"; busy = false; res(); }, 820);
      }, 780);
    });
  }

  /* ---------- experiments page: list view and experiment view ---------- */
  function showView(v) {
    const list = $("#list-view"), exp = $("#exp-view");
    if (list) list.hidden = v !== "list";
    if (exp) exp.hidden = v !== "exp";
    document.body.dataset.view = v;
    onScroll();
  }
  function openExp(id, opts) {
    opts = opts || {};
    if (!hasExperiments() || !getExp(id)) return;
    if (PAGE !== "experiments") { go("experiments", `/exp/${id}`); return; }
    const show = () => {
      if (route.view !== "exp") route.savedY = window.scrollY;
      route.view = "exp"; route.id = id;
      showView("exp"); if (window.ExpView) ExpView.render(id);
      window.scrollTo(0, 0); writeHash();
      const h = $("#xp-title"); if (h) h.focus({ preventScroll: true });
    };
    if (opts.instant) show(); else transition(show);
  }
  function showList(opts) {
    opts = opts || {};
    if (PAGE !== "experiments") { go("experiments"); return; }
    if (route.view === "list") { window.scrollTo({ top: 0, behavior: behavior() }); return; }
    const show = () => {
      route.view = "list"; route.id = null;
      showView("list"); writeHash();
      if (window.ExpView) ExpView.leave();
      window.scrollTo(0, route.savedY || 0); route.savedY = undefined;
      const h = $("#lib-title"); if (h) { h.setAttribute("tabindex", "-1"); h.focus({ preventScroll: true }); }
    };
    if (opts.instant) show(); else transition(show);
  }

  /* ---------- app bar, menu and clicks shared by every page ---------- */
  let onScroll = () => {};
  function setupChrome() {
    const bar = $(".appbar");
    if (bar) {
      onScroll = () => bar.classList.toggle("solid", window.scrollY > 24 || route.view === "exp");
      window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
    }
    $$("[data-theme-btn]").forEach((b) => b.addEventListener("click", toggleTheme));
    $$("[data-lang]").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));
    const menu = $("#menu"), mbtn = $("#menu-btn");
    const isOpen = () => !!menu && menu.classList.contains("open");
    const closeMenu = () => { if (!menu) return; menu.classList.remove("open"); mbtn.setAttribute("aria-expanded", "false"); };
    if (menu && mbtn) {
      mbtn.addEventListener("click", () => {
        const open = !isOpen(); menu.classList.toggle("open", open); mbtn.setAttribute("aria-expanded", String(open));
        if (open) { const f = menu.querySelector("a,button"); if (f) setTimeout(() => f.focus(), 30); }
      });
    }
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && isOpen()) { closeMenu(); mbtn.focus(); } });
    document.addEventListener("click", (e) => {
      if (isOpen() && !e.target.closest("#menu") && !e.target.closest("#menu-btn")) closeMenu();
      const plain = !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey && e.button === 0;
      const sk = e.target.closest(".skip");
      if (sk) {                                   // skip link: go to the content of the view that is showing
        e.preventDefault();
        const target = route.view === "exp" ? ($("#xp-title") || $("#exp-view")) : $("#main");
        if (target) { target.setAttribute("tabindex", "-1"); target.scrollIntoView({ block: "start" }); target.focus({ preventScroll: true }); }
        return;
      }
      const nav = e.target.closest("[data-nav]");
      if (nav && plain) { e.preventDefault(); closeMenu(); go(nav.dataset.nav, nav.dataset.section ? "/" + nav.dataset.section : ""); return; }
      const sec = e.target.closest("[data-goto]");
      if (sec) { e.preventDefault(); closeMenu(); stay("/" + sec.dataset.goto); return; }
      const ex = e.target.closest("[data-exp]");
      if (ex && plain) { e.preventDefault(); closeMenu(); openExp(ex.dataset.exp); return; }
      const pr = e.target.closest("[data-present]");
      if (pr && plain) { e.preventDefault(); closeMenu(); go("present", `/present/${parseInt(pr.dataset.present, 10) || 0}`); }
    });
    // keep the language and theme in ordinary links to other pages too (new tab, no JavaScript wipe)
    document.addEventListener("pointerdown", (e) => {
      const a = e.target.closest("a[data-nav]"); if (!a) return;
      a.href = href(a.dataset.nav, a.dataset.section ? "/" + a.dataset.section : "");
    });
    // reveal-on-scroll for simple elements
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver((ents) => ents.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { rootMargin: "0px 0px -10% 0px" });
      api.observeReveal = (root) => $$(".rv:not(.in)", root).forEach((el) => io.observe(el));
    } else api.observeReveal = (root) => $$(".rv", root).forEach((el) => el.classList.add("in"));
    // coming back with the browser's Back button may restore a page that was still covered
    window.addEventListener("pageshow", (e) => { if (e.persisted) { const w = $("#wipe"); if (w) w.className = "wipe"; } });
  }

  function prepare() {
    const langs = (navigator.languages || [navigator.language || "en"]).map((x) => String(x).toLowerCase());
    if (langs.some((x) => x.startsWith("sq"))) lang = "sq";
    watchHostTheme();
    readHash();
    setupChrome();
  }
  function init() {
    renderStatic();
    api.observeReveal(document);
    if (PAGE === "experiments") { if (route.view === "exp") openExp(route.id, { instant: true }); else showView("list"); }
    if (route.section) { const el = document.getElementById(route.section); if (el) el.scrollIntoView({ block: "start" }); }
    writeHash();                                   // tidy the address (drops the "came from" marker)
    setTimeout(() => document.documentElement.classList.remove("arriving"), 1400);
    window.addEventListener("hashchange", () => {
      if (skipHash) { skipHash = false; return; }
      const before = JSON.stringify([lang, theme, route.view, route.id, route.slide]);
      const prevLang = lang, prevView = route.view, prevId = route.id, prevSlide = route.slide;
      readHash();
      if (JSON.stringify([lang, theme, route.view, route.id, route.slide]) === before) { if (route.section) stay("/" + route.section); return; }
      if (lang !== prevLang) renderAll(); else applyTheme();
      if (PAGE === "experiments" && (route.view !== prevView || route.id !== prevId)) {
        const id = route.id; route.view = prevView;            // let openExp/showList do the change
        if (id) openExp(id, { instant: true }); else showList({ instant: true });
      }
      if (PAGE === "present" && route.slide !== prevSlide && window.Present) Present.show(route.slide || 0, 0, true);
    });
  }

  const api = {
    prepare, init, t, icon, esc, shuffle, announce, toast, topicStyle, reduced, behavior, transition, openExp, showList, onRender, writeHash, toggleTheme, setLang,
    go, back, href, expHref, page: PAGE, root: ROOT, lang: () => lang, theme: effectiveTheme, route, $, $$, observeReveal: () => {}
  };
  return api;
})();
