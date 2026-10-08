/* ChemLab Explorer — boot.js
   Runs in <head>, before the page is drawn, so there is no flash of the wrong
   theme or language when you move from page to page:
   - "#/…/dark" or "#/…/light" sets the theme straight away,
   - "#/sq" sets the page language,
   - "~" (added when you arrive from another page of the site) shows the
     paper sheets covering the screen; css/layout.css then slides them away. */
(function () {
  "use strict";
  var hash = location.hash || "";
  var root = document.documentElement;
  var theme = hash.match(/\/(dark|light)(?=\/|$)/);
  if (theme) root.setAttribute("data-theme", theme[1]);
  var lang = hash.match(/^#\/(en|sq)(?=\/|$)/);
  if (lang) root.lang = lang[1];
  var calm = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (/\/~/.test(hash) && !calm) root.classList.add("arriving");
})();
