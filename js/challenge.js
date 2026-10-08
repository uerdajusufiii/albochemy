"use strict";
/* =========================================================================
   "WHAT HAPPENS NEXT?" — a predict-then-reveal card used in the journey,
   on experiment pages and in presentation mode.
   ========================================================================= */
const WHN = (function () {
  const { esc, icon, t } = App;
  const reg = {};       // id -> { data(), onReveal(id, right), onReset(id), manual }
  const st = {};        // id -> { pick, revealed, order, waiting }
  const LET = "ABCD";
  function register(id, cfg) { reg[id] = cfg; if (!st[id]) st[id] = { pick: null, revealed: false, waiting: false, order: App.shuffle([0, 1, 2, 3]) }; }
  function html(id) {
    const d = reg[id].data(), s = st[id], manual = reg[id].manual;
    let h = `<div class="whn-head"><span class="whn-badge" aria-hidden="true">?</span><span class="whn-label">${esc(t("whnTitle"))}</span></div>
      <p class="whn-q" id="q-${id}">${esc(d.q)}</p><div class="whn-opts" role="group" aria-labelledby="q-${id}">`;
    s.order.forEach((i, k) => {
      let cls = "", st2 = "";
      if (s.revealed) { if (i === 0) { cls = "is-correct"; st2 = icon("check", "st"); } else if (i === s.pick) { cls = "is-wrong"; st2 = icon("x", "st"); } }
      else if (i === s.pick) cls = "is-picked";
      h += `<button type="button" class="whn-opt ${cls}" data-whn="${id}" data-i="${i}" aria-pressed="${s.pick === i}" ${s.revealed || (s.waiting && !manual) ? 'aria-disabled="true"' : ""}><span class="k" aria-hidden="true">${LET[k]}</span><span>${esc(d.options[i])}</span>${st2}</button>`;
    });
    h += `</div>`;
    if (s.waiting) h += `<p class="whn-wait" role="status"><span class="dots" aria-hidden="true"><i></i><i></i><i></i></span>${esc(t("whnWatch"))}</p>`;
    if (manual && !s.revealed && !s.waiting) h += `<div class="whn-actions"><button type="button" class="btn btn-primary" data-whn-reveal="${id}">${icon("eye")}${esc(t("whnReveal"))}</button></div>`;
    if (s.revealed) {
      const right = s.pick === 0, none = s.pick === null;
      const txt = `${none ? "" : `<span class="verdict ${right ? "ok" : "surprise"}">${icon(right ? "check" : "sparkle")}${esc(right ? t("whnRight") : t("whnSurprise"))}</span>`}
        <p class="big">${esc(d.result)}</p>${d.why ? `<p>${esc(d.why)}</p>` : ""}`;
      h += `<div class="whn-result" id="r-${id}" tabindex="-1">${d.media ? `<div class="result-grid">${d.media}<div>${txt}</div></div>` : txt}</div>
        <div class="whn-actions"><button type="button" class="btn btn-sm btn-ghost" data-whn-reset="${id}">${icon("refresh")}${esc(t("whnAgain"))}</button>${d.extra || ""}</div>`;
    }
    return h;
  }
  function el(id) { return document.querySelector(`.whn[data-id="${id}"]`); }
  function render(id, focusSel) {
    const box = el(id); if (!box) return;
    box.innerHTML = html(id);
    box.classList.toggle("locked", st[id].revealed || st[id].waiting);
    if (focusSel) { const f = box.querySelector(focusSel); if (f) f.focus({ preventScroll: true }); }
  }
  function reveal(id) {
    const s = st[id]; if (s.revealed) return;
    s.waiting = true; render(id);
    reg[id].onReveal && reg[id].onReveal(id, s.pick === 0);
    const delay = App.reduced.matches ? 150 : 1400;
    setTimeout(() => {
      s.waiting = false; s.revealed = true; render(id, ".whn-result");
      document.dispatchEvent(new CustomEvent("whnrevealed", { detail: { id } }));
      const d = reg[id].data();
      App.announce(`${s.pick === 0 ? t("whnRight") : s.pick === null ? "" : t("whnSurprise")} ${d.result} ${d.why}`);
    }, delay);
  }
  function pick(id, i) {
    const s = st[id]; if (s.revealed || (s.waiting && !reg[id].manual)) return;
    s.pick = i;
    if (reg[id].manual) { render(id, `[data-i="${i}"]`); return; }
    reveal(id);
  }
  function reset(id) {
    Object.assign(st[id], { pick: null, revealed: false, waiting: false, order: App.shuffle([0, 1, 2, 3]) });
    reg[id].onReset && reg[id].onReset(id);
    render(id, ".whn-opt");
  }
  document.addEventListener("click", (e) => {
    const o = e.target.closest("[data-whn]");
    if (o) { pick(o.dataset.whn, Number(o.dataset.i)); return; }
    const r = e.target.closest("[data-whn-reveal]");
    if (r) { reveal(r.dataset.whnReveal); return; }
    const x = e.target.closest("[data-whn-reset]");
    if (x) reset(x.dataset.whnReset);
  });
  const box = (id, cls) => `<div class="whn ${cls || ""}" data-id="${id}">${html(id)}</div>`;
  return { register, html, box, render, reveal, pick, reset, state: (id) => st[id] };
})();
