"use strict";
/* =========================================================================
   START-UP — the last script on every page.
   Each page loads only the scripts it needs (see the <script> tags at the
   bottom of its HTML); this starts the parts that page has.
   ========================================================================= */
(function () {
  const page = App.page;
  App.prepare();

  // Old single-page links (index.html#/en/exp/cabbage, #/en/present/3) still work.
  if (page === "home" && App.route.view === "exp") { location.replace(App.expHref(App.route.id)); return; }
  if (page === "home" && App.route.slide !== null) { location.replace(App.href("present", "/present/" + App.route.slide)); return; }

  if (typeof Art !== "undefined") Art.fillBands();           // the wave bands between sections
  if (page === "home") { Opening.init(); Journey.init(); }
  if (page === "experiments") Library.init();
  if (page === "lab" || page === "present") Lab.init();
  if (page === "about") About.init();
  App.init();
  if (page === "present") Present.init();
})();
