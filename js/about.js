"use strict";
/* =========================================================================
   ABOUT PAGE (pages/about.html) — fills in the emergency list in the chosen
   language. Everything else on the page is plain text in the HTML.
   ========================================================================= */
const About = (function () {
  function render() {
    const list = document.getElementById("emergency-list");
    if (list) list.innerHTML = UI[App.lang()].emergency.map((x) => `<li>${App.esc(x)}</li>`).join("");
  }
  function init() { render(); App.onRender(render); }
  return { init };
})();
