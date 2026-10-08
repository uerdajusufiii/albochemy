"use strict";
/* =========================================================================
   REACTOR — the animated cup of the Mixing Lab, drawn on a <canvas>.
   It knows how to pour, fizz, foam, make precipitates and curds, coat a
   nail, dissolve a metal, float oil, make an emulsion and show heat or cold.
   It only animates while something is happening, then rests.
   ========================================================================= */
class Reactor {
  constructor(canvas) {
    this.cv = canvas; this.ctx = canvas.getContext("2d");
    this.W = 400; this.H = 470;
    this.cup = { x0: 92, x1: 308, top: 112, bot: 424, r: 34 };
    this.inner = { x0: 101, x1: 299, bot: 415 };
    this.maxLevel = 0.82;
    this.t = 0; this.last = 0; this.raf = 0;
    this.readTheme();
    this.reset();
    this.resize();
    if ("ResizeObserver" in window) new ResizeObserver(() => this.resize()).observe(canvas);
    document.addEventListener("themechange", () => { this.readTheme(); this.kick(); });
  }
  readTheme() {
    const cs = getComputedStyle(document.documentElement);
    const g = (v, d) => (cs.getPropertyValue(v).trim() || d);
    this.th = { ink: g("--ink", "#0f2440"), card: g("--card", "#ffffff"), paper: g("--paper", "#f4f6f9"), dark: App.theme() === "dark" };
  }
  resize() {
    const r = this.cv.getBoundingClientRect(), dpr = Math.min(window.devicePixelRatio || 1, 2);
    if (!r.width) return;
    this.cv.width = Math.round(r.width * dpr); this.cv.height = Math.round(r.width * (this.H / this.W) * dpr);
    this.scale = (r.width * dpr) / this.W;
    this.draw();
  }
  reset() {
    this.level = 0; this.levelT = 0;
    this.col = [200, 225, 255, 0]; this.colT = [200, 225, 255, 0]; this.colRate = 2.2;
    this.blobs = []; this.bub = []; this.rings = []; this.ppt = []; this.curd = []; this.grain = []; this.drops = []; this.steam = []; this.frost = []; this.oilDrops = [];
    this.objs = {};
    this.fizz = 0; this.fizzUntil = 0; this.fizzAt = null;
    this.foam = 0; this.foamT = 0; this.foamCol = "#ffffff"; this.foamStripe = null; this.over = 0; this.overT = 0;
    this.sed = 0; this.sedCol = "#ffffff"; this.pile = 0; this.pileCol = "#ffffff";
    this.cloud = 0; this.cloudCol = [255, 255, 255];
    this.oil = 0; this.oilT = 0; this.oilCol = [242, 194, 48]; this.emul = 0; this.emulT = 0;
    this.heat = 0; this.heatUntil = 0;
    this.stream = null; this.agit = 0;
    this.draining = false;
  }
  /* ---------- helpers ---------- */
  static rgb(hex) { const h = hex.replace("#", ""); return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)]; }
  surfaceY(level) { const L = level === undefined ? this.level : level; return this.inner.bot - L * (this.inner.bot - 140); }
  rand(a, b) { return a + Math.random() * (b - a); }
  kick() { if (!this.raf) { this.last = performance.now(); this.raf = requestAnimationFrame((ts) => this.frame(ts)); } }
  get reducedMotion() { return App.reduced.matches; }
  /* ---------- actions ---------- */
  pour(hex, alpha, amount) {
    const rgb = Reactor.rgb(hex);
    this.stream = { col: rgb, a: Math.max(alpha, 0.35), t: 0, dur: 0.75 };
    this.levelT = Math.min(this.maxLevel, this.levelT + (amount || (this.levelT < 0.05 ? 0.34 : 0.15)));
    this.agit = Math.max(this.agit, 0.9);
    if (this.reducedMotion) { this.level = this.levelT; this.stream = null; }
    this.kick();
  }
  powder(hex) {
    const rgb = Reactor.rgb(hex);
    const n = this.reducedMotion ? 0 : 46;
    for (let i = 0; i < n; i++) this.grain.push({ x: 200 + this.rand(-16, 16), y: this.rand(-40, 20), vy: this.rand(40, 120), r: this.rand(1.4, 3.2), col: rgb, delay: i * 0.012 });
    if (this.level < 0.02 || this.reducedMotion) { this.pile = Math.min(1, this.pile + 0.5); this.pileCol = hex; }
    this.kick();
  }
  drop(type) {
    const o = type === "nail" ? { type, x: 214, y: 30, ty: 0, vy: 0, coat: 0, coatT: 0, coatCol: [194, 106, 50], size: 1, sizeT: 1 } : { type, x: 200, y: 40, ty: 0, vy: 0, coat: 0, coatT: 0, coatCol: [194, 106, 50], size: 1, sizeT: 1 };
    o.ty = type === "nail" ? this.inner.bot - 150 : this.inner.bot - 14;
    if (this.levelT > 0.02) this.levelT = Math.min(this.maxLevel, this.levelT + 0.03);
    if (this.reducedMotion) o.y = o.ty;
    this.objs[type] = o;
    this.kick();
  }
  setColor(hex, alpha, slow) {
    const rgb = Reactor.rgb(hex);
    this.colT = [rgb[0], rgb[1], rgb[2], alpha];
    this.colRate = slow ? 0.35 : 1.6;
    if (this.reducedMotion) this.col = this.colT.slice();
    else if (this.level > 0.05) for (let i = 0; i < (slow ? 2 : 4); i++) this.blobs.push({ x: this.rand(140, 260), y: this.surfaceY() + this.rand(10, 40), r: 6, rT: this.rand(90, 150), col: rgb, a: Math.min(1, alpha + 0.2), life: slow ? 4.5 : 2.2, age: -i * 0.18 });
    this.kick();
  }
  fizzOn(power, dur, at) { this.fizz = Math.max(this.fizz, power); this.fizzUntil = this.t + (dur || 4); this.fizzAt = at || null; this.agit = Math.max(this.agit, power); this.kick(); }
  foamOn(amount, hex, over, stripe) {
    this.foamT = Math.max(this.foamT, amount); this.foamCol = hex || "#ffffff"; this.foamStripe = stripe || null;
    if (over) this.overT = 1;
    if (this.reducedMotion) { this.foam = this.foamT; this.over = this.overT; }
    this.kick();
  }
  precip(hex, n) {
    const rgb = Reactor.rgb(hex), count = Math.round(170 * (n || 1)), s = this.surfaceY();
    this.cloudCol = rgb; this.sedCol = hex;
    for (let i = 0; i < count; i++) this.ppt.push({ x: this.rand(this.inner.x0 + 6, this.inner.x1 - 6), y: this.rand(s + 6, this.inner.bot - 20), vy: this.rand(6, 22), r: this.rand(1.2, 3), col: rgb, age: -this.rand(0, 1.4), ph: Math.random() * 6 });
    if (this.reducedMotion) { this.sed += count * 0.045; this.ppt = []; }
    this.kick();
  }
  curds(hex) {
    const rgb = Reactor.rgb(hex), s = this.surfaceY();
    for (let i = 0; i < 26; i++) this.curd.push({ x: this.rand(this.inner.x0 + 14, this.inner.x1 - 14), y: this.rand(s + 10, this.inner.bot - 16), r: 0, rT: this.rand(5, 12), vy: this.rand(-4, 7), col: rgb, ph: Math.random() * 6, age: -this.rand(0, 1.6), k: Math.floor(Math.random() * 3) });
    if (this.reducedMotion) this.curd.forEach((c) => { c.r = c.rT; c.age = 3; });
    this.kick();
  }
  coat(type, hex) { const o = this.objs[type]; if (!o) return; o.coatT = 1; o.coatCol = Reactor.rgb(hex); if (this.reducedMotion) o.coat = 1; this.kick(); }
  dissolve(type) { const o = this.objs[type]; if (!o) return; o.sizeT = 0.08; if (this.reducedMotion) o.size = o.sizeT; this.kick(); }
  oilOn() { this.oilT = 1; if (this.reducedMotion) this.oil = 1; this.kick(); }
  emulsify() {
    this.emulT = 1; this.oilT = 0;
    const s = this.surfaceY();
    for (let i = 0; i < 70; i++) this.oilDrops.push({ x: this.rand(this.inner.x0 + 8, this.inner.x1 - 8), y: this.rand(s + 6, this.inner.bot - 8), r: this.rand(2, 6), ph: Math.random() * 6, age: -this.rand(0, 1.2) });
    if (this.reducedMotion) { this.emul = 1; this.oil = 0; this.oilDrops.forEach((d) => (d.age = 2)); }
    this.kick();
  }
  heatOn(v) { this.heat = v; this.heatUntil = this.t + 5; this.kick(); }
  empty() {
    return new Promise((res) => {
      if (this.reducedMotion || this.level < 0.01) { this.reset(); this.draw(); res(); return; }
      this.draining = true; this.levelT = 0; this.foamT = 0; this.overT = 0; this.oilT = 0;
      this.onDrained = () => { this.reset(); this.draw(); res(); };
      this.kick();
    });
  }
  /* ---------- simulation ---------- */
  frame(ts) {
    const dt = Math.min(0.05, (ts - this.last) / 1000 || 0.016);
    this.last = ts; this.t += dt;
    const busy = this.step(dt);
    this.draw();
    this.raf = busy ? requestAnimationFrame((t2) => this.frame(t2)) : 0;
  }
  step(dt) {
    let busy = false;
    const ease = (cur, tgt, rate) => cur + (tgt - cur) * Math.min(1, dt * rate);
    // level
    if (Math.abs(this.level - this.levelT) > 0.002) { this.level = ease(this.level, this.levelT, this.draining ? 2.2 : 3.2); busy = true; }
    else this.level = this.levelT;
    if (this.draining && this.level < 0.012) { this.draining = false; if (this.onDrained) { const f = this.onDrained; this.onDrained = null; f(); } return false; }
    // colour
    for (let i = 0; i < 4; i++) { if (Math.abs(this.col[i] - this.colT[i]) > (i === 3 ? 0.004 : 0.5)) { this.col[i] = ease(this.col[i], this.colT[i], this.colRate); busy = true; } else this.col[i] = this.colT[i]; }
    // stream
    if (this.stream) { this.stream.t += dt; busy = true; if (this.stream.t > this.stream.dur) this.stream = null; }
    // agitation (surface waves)
    if (this.agit > 0.02) { this.agit = Math.max(this.fizz > 0 ? this.fizz * 0.6 : 0, this.agit - dt * 0.6); busy = true; }
    // blobs
    this.blobs = this.blobs.filter((b) => { b.age += dt; if (b.age < 0) return true; b.r = ease(b.r, b.rT, 1.6); return b.age < b.life; });
    if (this.blobs.length) busy = true;
    // fizz
    if (this.fizz > 0) {
      busy = true;
      if (this.t > this.fizzUntil) this.fizz = Math.max(0, this.fizz - dt * 0.5);
      const s = this.surfaceY(), n = this.fizz * 70 * dt;
      for (let i = 0; i < n; i++) {
        let x, y;
        const o = this.fizzAt && this.objs[this.fizzAt];
        if (o && o.size > 0.1) { x = o.type === "nail" ? this.rand(206, 232) : this.rand(170, 230); y = o.type === "nail" ? this.rand(s + 10, this.inner.bot - 20) : this.inner.bot - this.rand(4, 18); }
        else { x = this.rand(this.inner.x0 + 10, this.inner.x1 - 10); y = this.inner.bot - this.rand(2, 30); }
        if (y > s + 4) this.bub.push({ x, y, r: this.rand(1.5, 4.5), vy: this.rand(50, 130), ph: Math.random() * 6 });
      }
    }
    // bubbles
    if (this.bub.length) {
      busy = true;
      const s = this.surfaceY();
      this.bub = this.bub.filter((b) => {
        b.y -= b.vy * dt; b.x += Math.sin(this.t * 6 + b.ph) * 12 * dt;
        if (b.y <= s + 1) { if (Math.random() < 0.5) this.rings.push({ x: b.x, y: s, r: b.r, life: 0 }); return false; }
        return this.level > 0.02;
      });
      if (this.bub.length > 500) this.bub.splice(0, this.bub.length - 500);
    }
    this.rings = this.rings.filter((r) => { r.life += dt; return r.life < 0.35; });
    if (this.rings.length) busy = true;
    // foam
    if (Math.abs(this.foam - this.foamT) > 0.002) { this.foam = ease(this.foam, this.foamT, this.foamT > this.foam ? 0.9 : 2); busy = true; }
    if (Math.abs(this.over - this.overT) > 0.002) { this.over = ease(this.over, this.overT, this.overT > this.over ? 0.8 : 2.5); busy = true; }
    if (this.foam > 0.01) busy = true;
    // precipitate
    if (this.ppt.length) {
      busy = true;
      const floor = this.inner.bot - 2 - this.sed * 0.35;
      this.ppt = this.ppt.filter((p) => {
        p.age += dt; if (p.age < 0) return true;
        p.y += p.vy * dt * (p.age < 1.2 ? 0.25 : 1); p.x += Math.sin(this.t * 2 + p.ph) * 4 * dt;
        if (p.y >= floor) { this.sed = Math.min(60, this.sed + 0.045); return false; }
        return true;
      });
    }
    const pptCloud = Math.min(0.55, this.ppt.filter((p) => p.age >= 0).length / 260);
    if (Math.abs(this.cloud - pptCloud) > 0.003) { this.cloud = ease(this.cloud, pptCloud, 3); busy = true; }
    // curds
    this.curd.forEach((c) => {
      c.age += dt; if (c.age < 0) { busy = true; return; }
      if (c.r < c.rT - 0.1) { c.r = ease(c.r, c.rT, 1.4); busy = true; }
      if (c.age < 6) { c.y = Math.min(this.inner.bot - c.r - 2, Math.max(this.surfaceY() + c.r + 2, c.y + c.vy * dt)); c.x += Math.sin(this.t + c.ph) * 3 * dt; busy = true; }
    });
    // grains (powder)
    if (this.grain.length) {
      busy = true;
      const s = this.surfaceY();
      this.grain = this.grain.filter((g) => {
        if (g.delay > 0) { g.delay -= dt; return true; }
        g.vy += 400 * dt; g.y += g.vy * dt; g.x += Math.sin(g.y * 0.1) * 6 * dt;
        if (this.level > 0.02 && g.y > s) { g.vy = 20; g.fade = (g.fade || 1) - dt * 1.5; return g.fade > 0 && g.y < this.inner.bot; }
        if (this.level <= 0.02 && g.y > this.inner.bot - 6 - this.pile * 10) return false;
        return true;
      });
    }
    // objects
    Object.values(this.objs).forEach((o) => {
      if (o.y < o.ty) { o.vy += 900 * dt; o.y = Math.min(o.ty, o.y + o.vy * dt); if (o.y >= o.ty) this.agit = Math.max(this.agit, 1); busy = true; }
      if (Math.abs(o.coat - o.coatT) > 0.003) { o.coat = ease(o.coat, o.coatT, 0.45); busy = true; }
      if (Math.abs(o.size - o.sizeT) > 0.003) { o.size = ease(o.size, o.sizeT, 0.32); busy = true; }
    });
    // oil
    if (Math.abs(this.oil - this.oilT) > 0.003) { this.oil = ease(this.oil, this.oilT, this.oilT ? 1.6 : 1.2); busy = true; }
    if (Math.abs(this.emul - this.emulT) > 0.003) { this.emul = ease(this.emul, this.emulT, 0.9); busy = true; }
    this.oilDrops.forEach((d) => { d.age += dt; if (d.age < 3) busy = true; });
    // heat
    if (this.heat !== 0) {
      busy = true;
      if (this.t > this.heatUntil) this.heat = 0;
      else if (this.heat > 0 && Math.random() < dt * 5) this.steam.push({ x: this.rand(150, 250), y: this.cup.top - 4, life: 0, ph: Math.random() * 6 });
      else if (this.heat < 0 && Math.random() < dt * 8) this.frost.push({ x: Math.random() < 0.5 ? this.cup.x0 + this.rand(-4, 10) : this.cup.x1 + this.rand(-10, 4), y: this.rand(this.cup.top + 60, this.cup.bot - 20), life: 0, s: this.rand(4, 9) });
    }
    this.steam = this.steam.filter((s) => { s.life += dt; return s.life < 2.4; });
    this.frost = this.frost.filter((f) => { f.life += dt; return f.life < 4; });
    if (this.steam.length || this.frost.length) busy = true;
    return busy;
  }
  /* ---------- drawing ---------- */
  cupPath(ctx, inner) {
    const c = inner ? { x0: this.inner.x0, x1: this.inner.x1, top: this.cup.top + 4, bot: this.inner.bot, r: this.cup.r - 8 } : this.cup;
    ctx.beginPath();
    ctx.moveTo(c.x0, c.top);
    ctx.lineTo(c.x0, c.bot - c.r);
    ctx.quadraticCurveTo(c.x0, c.bot, c.x0 + c.r, c.bot);
    ctx.lineTo(c.x1 - c.r, c.bot);
    ctx.quadraticCurveTo(c.x1, c.bot, c.x1, c.bot - c.r);
    ctx.lineTo(c.x1, c.top);
  }
  surfacePath(ctx, y, x0, x1, amp, close) {
    ctx.beginPath();
    ctx.moveTo(x0, y + Math.sin(x0 * 0.045 + this.t * 2.4) * amp);
    for (let x = x0; x <= x1; x += 6) ctx.lineTo(x, y + Math.sin(x * 0.045 + this.t * 2.4) * amp + Math.sin(x * 0.021 - this.t * 1.4) * amp * 0.6);
    if (close) { ctx.lineTo(x1, this.inner.bot + 30); ctx.lineTo(x0, this.inner.bot + 30); ctx.closePath(); }
  }
  draw() {
    const ctx = this.ctx, s = this.scale || 1;
    if (!ctx) return;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, this.cv.width, this.cv.height);
    ctx.setTransform(s, 0, 0, s, 0, 0);
    const dark = this.th.dark, ink = this.th.ink;
    const sy = this.surfaceY(), amp = 1.2 + this.agit * 4.5;
    // shadow
    ctx.fillStyle = dark ? "rgba(0,0,0,.45)" : "rgba(92,62,32,.18)";
    ctx.beginPath(); ctx.ellipse(200, this.cup.bot + 12, 132, 14, 0, 0, Math.PI * 2); ctx.fill();
    // frost on the outside
    this.frost.forEach((f) => { const a = Math.min(1, f.life * 2) * (1 - Math.max(0, f.life - 3)); ctx.strokeStyle = `rgba(160,215,255,${0.9 * a})`; ctx.lineWidth = 2; ctx.beginPath(); for (let k = 0; k < 3; k++) { const ang = (k * Math.PI) / 3; ctx.moveTo(f.x - Math.cos(ang) * f.s, f.y - Math.sin(ang) * f.s); ctx.lineTo(f.x + Math.cos(ang) * f.s, f.y + Math.sin(ang) * f.s); } ctx.stroke(); });
    // glass back
    ctx.fillStyle = dark ? "rgba(255,255,255,.05)" : "rgba(255,255,255,.55)";
    this.cupPath(ctx, false); ctx.closePath(); ctx.fill();
    // inside the cup
    ctx.save(); this.cupPath(ctx, true); ctx.closePath(); ctx.clip();
    this.drawPile(ctx);
    this.drawObjects(ctx, sy);
    if (this.level > 0.004) this.drawLiquid(ctx, sy, amp);
    ctx.restore();
    // foam
    if (this.foam > 0.01) this.drawFoam(ctx, sy);
    // glass front
    ctx.lineJoin = "round"; ctx.lineCap = "round";
    ctx.strokeStyle = dark ? "rgba(246,239,228,.55)" : "rgba(26,23,32,.55)"; ctx.lineWidth = 4;
    this.cupPath(ctx, false); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(this.cup.x0 - 12, this.cup.top - 6); ctx.quadraticCurveTo(this.cup.x0 - 2, this.cup.top - 4, this.cup.x0, this.cup.top + 10); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(this.cup.x1 + 12, this.cup.top - 6); ctx.quadraticCurveTo(this.cup.x1 + 2, this.cup.top - 4, this.cup.x1, this.cup.top + 10); ctx.stroke();
    ctx.strokeStyle = "rgba(255,255,255,.75)"; ctx.lineWidth = 8;
    ctx.beginPath(); ctx.moveTo(this.cup.x0 + 16, this.cup.top + 26); ctx.lineTo(this.cup.x0 + 16, this.cup.bot - 50); ctx.stroke();
    ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(this.cup.x1 - 18, this.cup.top + 40); ctx.lineTo(this.cup.x1 - 18, this.cup.top + 90); ctx.stroke();
    ctx.strokeStyle = dark ? "rgba(246,239,228,.35)" : "rgba(26,23,32,.28)"; ctx.lineWidth = 2.5;
    for (let k = 0; k < 5; k++) { const y = this.cup.top + 60 + k * 52, w = k % 2 ? 14 : 24; ctx.beginPath(); ctx.moveTo(this.cup.x1 - 14 - w, y); ctx.lineTo(this.cup.x1 - 14, y); ctx.stroke(); }
    // stream being poured
    if (this.stream) {
      const st = this.stream, k = st.t / st.dur, w = 13 * Math.sin(Math.min(1, k * 1.15) * Math.PI);
      if (w > 0.5) {
        ctx.fillStyle = `rgba(${st.col[0]},${st.col[1]},${st.col[2]},${Math.min(1, st.a + 0.25)})`;
        ctx.beginPath(); ctx.moveTo(200 - w / 2, -10);
        for (let y = -10; y <= sy; y += 10) ctx.lineTo(200 - w / 2 + Math.sin(y * 0.08 + this.t * 20) * 1.5, y);
        for (let y = sy; y >= -10; y -= 10) ctx.lineTo(200 + w / 2 + Math.sin(y * 0.08 + this.t * 20) * 1.5, y);
        ctx.closePath(); ctx.fill();
        ctx.strokeStyle = dark ? "rgba(255,255,255,.25)" : "rgba(26,23,32,.18)"; ctx.lineWidth = 1; ctx.stroke();
      }
    }
    // powder grains
    this.grain.forEach((g) => { if (g.delay > 0) return; ctx.fillStyle = `rgba(${g.col[0]},${g.col[1]},${g.col[2]},${g.fade === undefined ? 1 : Math.max(0, g.fade)})`; ctx.beginPath(); ctx.arc(g.x, g.y, g.r, 0, Math.PI * 2); ctx.fill(); ctx.strokeStyle = "rgba(0,0,0,.18)"; ctx.lineWidth = 0.6; ctx.stroke(); });
    // steam
    this.steam.forEach((p) => { const a = Math.sin((p.life / 2.4) * Math.PI) * 0.55; ctx.strokeStyle = dark ? `rgba(255,255,255,${a})` : `rgba(150,140,160,${a})`; ctx.lineWidth = 5; ctx.beginPath(); for (let k = 0; k < 6; k++) { const yy = p.y - p.life * 46 - k * 9; const xx = p.x + Math.sin(k * 0.9 + p.ph + this.t * 2) * 7; if (k === 0) ctx.moveTo(xx, yy); else ctx.lineTo(xx, yy); } ctx.stroke(); });
  }
  drawPile(ctx) {
    if (this.pile <= 0) return;
    const rgb = Reactor.rgb(this.pileCol), h = this.pile * 16;
    ctx.fillStyle = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
    ctx.beginPath(); ctx.moveTo(150, this.inner.bot); ctx.quadraticCurveTo(200, this.inner.bot - h * 2, 250, this.inner.bot); ctx.closePath(); ctx.fill();
    ctx.strokeStyle = "rgba(0,0,0,.15)"; ctx.lineWidth = 1; ctx.stroke();
  }
  drawObjects(ctx, sy) {
    const nail = this.objs.nail, mg = this.objs.mg;
    if (nail) {
      ctx.save(); ctx.translate(nail.x, nail.y); ctx.rotate(-0.16);
      ctx.fillStyle = "#8b929e"; ctx.fillRect(-16, 0, 32, 10);
      ctx.fillStyle = "#9aa1ad"; ctx.beginPath(); ctx.moveTo(-6, 8); ctx.lineTo(6, 8); ctx.lineTo(6, 150); ctx.lineTo(0, 168); ctx.lineTo(-6, 150); ctx.closePath(); ctx.fill();
      if (nail.coat > 0.01) {
        const c = nail.coatCol, top = Math.max(8, sy - nail.y + 2);
        ctx.fillStyle = `rgba(${c[0]},${c[1]},${c[2]},${nail.coat})`;
        ctx.beginPath(); ctx.moveTo(-6.5, top); ctx.lineTo(6.5, top); ctx.lineTo(6.5, 150); ctx.lineTo(0, 168); ctx.lineTo(-6.5, 150); ctx.closePath(); ctx.fill();
        for (let k = 0; k < 10; k++) { ctx.fillStyle = `rgba(${c[0] - 30},${c[1] - 20},${c[2] - 10},${nail.coat})`; ctx.beginPath(); ctx.arc(((k * 37) % 11) - 5, top + 8 + k * 13, 1.6, 0, Math.PI * 2); ctx.fill(); }
      }
      ctx.fillStyle = "rgba(255,255,255,.45)"; ctx.fillRect(-4, 12, 2.5, 130);
      ctx.restore();
    }
    if (mg && mg.size > 0.02) {
      ctx.save(); ctx.translate(mg.x, mg.y);
      const w = 110 * mg.size;
      ctx.strokeStyle = "#cfd6e2"; ctx.lineWidth = 7 * Math.max(0.4, mg.size); ctx.lineCap = "round";
      ctx.beginPath(); for (let x = -w / 2; x <= w / 2; x += 4) { const y = Math.sin(x * 0.12) * 7 - 4; if (x === -w / 2) ctx.moveTo(x, y); else ctx.lineTo(x, y); } ctx.stroke();
      ctx.strokeStyle = "rgba(255,255,255,.7)"; ctx.lineWidth = 2; ctx.stroke();
      ctx.restore();
    }
  }
  drawLiquid(ctx, sy, amp) {
    const [r, g, b, a] = this.col, x0 = this.inner.x0 - 4, x1 = this.inner.x1 + 4;
    const oilH = this.oil * 34, waterTop = sy + oilH;
    const alpha = Math.max(0.16, a);
    const grd = ctx.createLinearGradient(0, waterTop, 0, this.inner.bot);
    grd.addColorStop(0, `rgba(${Math.min(255, r + 30)},${Math.min(255, g + 30)},${Math.min(255, b + 30)},${alpha * 0.92})`);
    grd.addColorStop(1, `rgba(${Math.max(0, r - 25)},${Math.max(0, g - 25)},${Math.max(0, b - 25)},${Math.min(1, alpha + 0.08)})`);
    ctx.fillStyle = grd; this.surfacePath(ctx, waterTop, x0, x1, amp, true); ctx.fill();
    ctx.save(); this.surfacePath(ctx, sy - 2, x0, x1, amp, true); ctx.clip();
    // colour blobs spreading
    this.blobs.forEach((bl) => {
      if (bl.age < 0) return;
      const k = Math.min(1, bl.age / bl.life), aa = bl.a * (1 - k) * 0.9;
      const rg = ctx.createRadialGradient(bl.x, bl.y, 0, bl.x, bl.y, bl.r);
      rg.addColorStop(0, `rgba(${bl.col[0]},${bl.col[1]},${bl.col[2]},${aa})`); rg.addColorStop(1, `rgba(${bl.col[0]},${bl.col[1]},${bl.col[2]},0)`);
      ctx.fillStyle = rg; ctx.beginPath(); ctx.arc(bl.x, bl.y, bl.r, 0, Math.PI * 2); ctx.fill();
    });
    // emulsion & oil droplets
    if (this.emul > 0.01) {
      ctx.fillStyle = `rgba(250,236,190,${this.emul * 0.45})`; this.surfacePath(ctx, waterTop, x0, x1, amp, true); ctx.fill();
      this.oilDrops.forEach((d) => { if (d.age < 0) return; const k = Math.min(1, d.age); ctx.fillStyle = `rgba(242,194,48,${0.7 * k})`; ctx.beginPath(); ctx.arc(d.x + Math.sin(this.t + d.ph) * 2, d.y + Math.cos(this.t * 0.8 + d.ph) * 2, d.r * k, 0, Math.PI * 2); ctx.fill(); });
    }
    // precipitate cloud + particles
    if (this.cloud > 0.01) { const c = this.cloudCol; ctx.fillStyle = `rgba(${c[0]},${c[1]},${c[2]},${this.cloud})`; this.surfacePath(ctx, waterTop, x0, x1, amp, true); ctx.fill(); }
    this.ppt.forEach((p) => { if (p.age < 0) return; const k = Math.min(1, p.age * 2); ctx.fillStyle = `rgba(${p.col[0]},${p.col[1]},${p.col[2]},${k})`; ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill(); });
    if (this.sed > 0.2) {
      const h = Math.min(46, this.sed * 0.35), c = Reactor.rgb(this.sedCol);
      ctx.fillStyle = `rgb(${c[0]},${c[1]},${c[2]})`;
      ctx.beginPath(); ctx.moveTo(x0, this.inner.bot);
      for (let x = x0; x <= x1; x += 8) ctx.lineTo(x, this.inner.bot - h - Math.sin(x * 0.2) * 1.6 - Math.sin(x * 0.07) * 2);
      ctx.lineTo(x1, this.inner.bot + 4); ctx.lineTo(x0, this.inner.bot + 4); ctx.closePath(); ctx.fill();
      ctx.strokeStyle = "rgba(0,0,0,.12)"; ctx.lineWidth = 1; ctx.stroke();
    }
    // curds
    this.curd.forEach((c) => {
      if (c.age < 0 || c.r < 0.3) return;
      ctx.fillStyle = `rgb(${c.col[0]},${c.col[1]},${c.col[2]})`; ctx.strokeStyle = "rgba(120,100,70,.35)"; ctx.lineWidth = 1;
      ctx.beginPath();
      for (let k = 0; k <= 8; k++) { const ang = (k / 8) * Math.PI * 2, rr = c.r * (0.75 + 0.25 * Math.sin(ang * 3 + c.ph)); const px = c.x + Math.cos(ang) * rr, py = c.y + Math.sin(ang) * rr; if (k === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py); }
      ctx.closePath(); ctx.fill(); ctx.stroke();
    });
    // bubbles
    this.bub.forEach((bb) => { ctx.fillStyle = "rgba(255,255,255,.55)"; ctx.strokeStyle = "rgba(255,255,255,.95)"; ctx.lineWidth = 1; ctx.beginPath(); ctx.arc(bb.x, bb.y, bb.r, 0, Math.PI * 2); ctx.fill(); ctx.stroke(); });
    ctx.restore();
    // oil layer on top
    if (oilH > 0.5) {
      const oc = this.oilCol;
      ctx.fillStyle = `rgba(${oc[0]},${oc[1]},${oc[2]},.82)`;
      this.surfacePath(ctx, sy, x0, x1, amp * 0.7, false); ctx.lineTo(x1, waterTop); ctx.lineTo(x0, waterTop); ctx.closePath(); ctx.fill();
      ctx.strokeStyle = "rgba(255,255,255,.6)"; ctx.lineWidth = 2; this.surfacePath(ctx, waterTop, x0, x1, amp * 0.5, false); ctx.stroke();
    }
    // surface highlight + pop rings
    ctx.strokeStyle = "rgba(255,255,255,.75)"; ctx.lineWidth = 2.2; this.surfacePath(ctx, sy, x0, x1, amp, false); ctx.stroke();
    this.rings.forEach((rg) => { const k = rg.life / 0.35; ctx.strokeStyle = `rgba(255,255,255,${0.8 * (1 - k)})`; ctx.lineWidth = 1.2; ctx.beginPath(); ctx.ellipse(rg.x, rg.y, rg.r + k * 6, (rg.r + k * 6) * 0.35, 0, 0, Math.PI * 2); ctx.stroke(); });
    // froth band when fizzing hard
    if (this.fizz > 0.45) { ctx.fillStyle = `rgba(255,255,255,${(this.fizz - 0.4) * 0.9})`; for (let x = x0 + 6; x < x1 - 4; x += 9) { ctx.beginPath(); ctx.arc(x, sy - 1 + Math.sin(x + this.t * 9) * 1.5, 3 + Math.sin(x * 3.1) * 1.4, 0, Math.PI * 2); ctx.fill(); } }
  }
  drawFoam(ctx, sy) {
    const top = this.cup.top, inH = sy - top, f = this.foam;
    const fillH = Math.min(inH, f * (inH + 40)), plume = Math.max(0, f * (inH + 190) - inH) * this.over;
    const col = this.foamCol, stripe = this.foamStripe;
    const stripeTint = stripe ? (() => { const c = Reactor.rgb(stripe); return `rgb(${Math.round(c[0] * 0.12 + 255 * 0.88)},${Math.round(c[1] * 0.12 + 255 * 0.88)},${Math.round(c[2] * 0.12 + 253 * 0.88)})`; })() : col;
    const blobs = [];
    const R = Art.rng("foam");
    // inside the cup
    for (let y = sy; y > sy - fillH; y -= 14) for (let x = this.inner.x0 + 10; x < this.inner.x1; x += 22) blobs.push([x + R() * 10 - 5, y - R() * 8, 14 + R() * 8]);
    // plume above the rim, and spill down the sides
    if (plume > 0) {
      const ph = Math.min(190, plume);
      for (let y = top; y > top - ph; y -= 12) { const spread = 70 + (top - y) * 0.45; for (let x = 200 - spread; x <= 200 + spread; x += 20) blobs.push([x + R() * 10 - 5, y - R() * 6, 16 + R() * 10]); }
      const drip = Math.min(this.cup.bot - top - 20, plume * 1.2);
      for (let y = top; y < top + drip; y += 10) { const w = 18 - (y - top) / 28 + R() * 4; blobs.push([this.cup.x0 - 8 + R() * 6, y, w]); blobs.push([this.cup.x1 + 8 - R() * 6, y, w]); }
    }
    ctx.save();
    if (plume <= 0) { this.cupPath(ctx, true); ctx.closePath(); ctx.clip(); }
    blobs.forEach(([x, y, r], i) => {
      const wob = Math.sin(this.t * 2 + i) * 1.2;
      ctx.fillStyle = stripe ? stripeTint : col;
      ctx.beginPath(); ctx.arc(x, y + wob, Math.max(4, r), 0, Math.PI * 2); ctx.fill();
    });
    ctx.fillStyle = "rgba(255,255,255,.9)";
    blobs.forEach(([x, y, r], i) => { if (i % 4) return; ctx.beginPath(); ctx.arc(x - r * 0.3, y - r * 0.35, Math.max(1.5, r * 0.18), 0, Math.PI * 2); ctx.fill(); });
    ctx.strokeStyle = "rgba(120,100,80,.12)"; ctx.lineWidth = 1;
    blobs.forEach(([x, y, r], i) => { if (i % 5) return; ctx.beginPath(); ctx.arc(x + 2, y + 2, Math.max(2, r * 0.3), 0, Math.PI * 2); ctx.stroke(); });
    ctx.restore();
  }
}
