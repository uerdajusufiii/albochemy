"use strict";
/* =========================================================================
   CATALOGUE — topics, and the full list of experiments (EXPERIMENTS) built
   from the experiment files, with each one's level, video and clip captions.
   ========================================================================= */
const TOPICS = {
  reactions:  { c: "#34539b", d: "#9db3ee", icon: "flask" },
  acids:      { c: "#0d7377", d: "#6fcfcb", icon: "drop" },
  separation: { c: "#4b6a8b", d: "#a9c0d8", icon: "filter" },
  energy:     { c: "#5a5d96", d: "#b5b8ec", icon: "flame" },
  electro:    { c: "#1e65a0", d: "#84b8ea", icon: "bolt" },
  matter:     { c: "#2c7563", d: "#86ccb9", icon: "atom" },
  analysis:   { c: "#2a6a80", d: "#86c4d9", icon: "search" },
  organic:    { c: "#23406a", d: "#a0b6d8", icon: "leaf" }
};
const EXPERIMENTS = [...EXP_CORE, ...EXP_JUNIOR, ...EXP_SENIOR_A, ...EXP_SENIOR_B, ...EXP_NEW_1, ...EXP_NEW_2, ...EXP_NEW_3, ...EXP_NEW_4, ...EXP_NEW_5, ...EXP_NEW_6]
  .map((e, i) => {
    e._i = i;
    if (!e.level) e.level = e.supervision === "demo" || e.gmin >= 11 ? 3 : e.gmin >= 9 ? 2 : 1;
    if (!e.video && VIDEOS_NEW[e.id]) e.video = VIDEOS_NEW[e.id];
    const cap = typeof CLIP_CAPTIONS !== "undefined" && CLIP_CAPTIONS[e.id];
    if (cap) { if (!e.en.clip) e.en.clip = cap.en; if (!e.sq.clip) e.sq.clip = cap.sq; }
    return e;
  })
  .sort((a, b) => a.level - b.level || a.gmin - b.gmin || a._i - b._i);
const getExp = (id) => EXPERIMENTS.find((e) => e.id === id);
