"use strict";
/* =========================================================================
   VIDEOS
   1. VIDEOS_NEW — verified YouTube Shorts for the newer experiments (the
      Shorts of the first 36 experiments are written inside each experiment).
   2. LOCAL_VIDEOS — your own clips saved in the videos/ folder. They play
      even without internet. Copy the file into videos/ and add a line below,
      for example:   cabbage: "cabbage.mp4",
   ========================================================================= */
/* Verified YouTube Shorts for the newer experiments (checked with YouTube oEmbed on 5 Oct 2026: the video exists, is vertical, and the title and channel match). */
const VIDEOS_NEW = {
 "catalase": {
  "id": "ViecaJcLSEo",
  "title": "Hydrogen Peroxide vs Potato? | Catalase Enzyme Catalysts",
  "channel": "The Elkchemist",
  "note": {
   "en": "Potato is added to hydrogen peroxide and the catalase enzyme quickly breaks it down, releasing bubbles of oxygen.",
   "sq": "Patatja shtohet në peroksid hidrogjeni dhe enzima katalazë e zbërthen shpejt atë, duke çliruar flluska oksigjeni."
  },
  "checked": "5 Oct 2026"
 },
 "trafficlight": {
  "id": "WYjes3oj2sY",
  "title": "Demo of the Week: Chemical Traffic Light",
  "channel": "Chemistry and Biochemistry Demo lab at OSU",
  "note": {
   "en": "A university demo lab shows the chemical traffic light, where shaking the indigo carmine solution makes it change between green, red and yellow.",
   "sq": "Një laborator demonstrimesh universitar tregon semaforin kimik, ku tundja e tretësirës së indigo karminës e bën të ndryshojë mes së gjelbrës, së kuqes dhe së verdhës."
  },
  "checked": "5 Oct 2026"
 },
 "candle": {
  "id": "CqoP7MtrgBQ",
  "title": "Relight a Candle with Smoke!",
  "channel": "Museum of Science",
  "note": {
   "en": "A blown-out candle is relit by touching a flame to its rising smoke trail, because the smoke contains vaporised wax.",
   "sq": "Një qiri i shuar ndizet përsëri duke afruar një flakë te tymi që ngrihet, sepse tymi përmban dyll të avulluar."
  },
  "checked": "5 Oct 2026"
 },
 "nakedegg": {
  "id": "hDaFh-ZhpLE",
  "title": "The Egg That Bounces! Acidic Science at Home",
  "channel": "Museum of Science",
  "note": {
   "en": "An egg soaked in vinegar loses its shell as the acid dissolves the calcium carbonate, leaving a rubbery egg that bounces.",
   "sq": "Një vezë e lënë në uthull e humb lëvozhgën, sepse acidi tret karbonatin e kalciumit, dhe mbetet një vezë si gome që kërcen."
  },
  "checked": "5 Oct 2026"
 },
 "universal": {
  "id": "Yy6Nfn0vlpM",
  "title": "Rainbow Fizz! Simple Science Experiment",
  "channel": "The Elkchemist",
  "note": {
   "en": "Acid is added to an alkaline solution containing universal indicator, and the fizzing mixture forms a rainbow of pH colours from red to purple.",
   "sq": "Acidi shtohet në një tretësirë bazike me tregues universal dhe përzierja që shkumëzon formon një ylber ngjyrash të pH-së, nga e kuqja te vjollca."
  },
  "checked": "5 Oct 2026"
 },
 "waterfilter": {
  "id": "Iz1wAnXNg7s",
  "title": "Home Made Charcoal Filter",
  "channel": "Fundi Bots",
  "note": {
   "en": "Dirty water is passed through a homemade charcoal filter and comes out noticeably clearer.",
   "sq": "Uji i ndotur kalohet nëpër një filtër shtëpiak me qymyr druri dhe del dukshëm më i pastër."
  },
  "checked": "5 Oct 2026"
 },
 "handwarmer": {
  "id": "64sZYMH55yU",
  "title": "here's how those hand warmers work",
  "channel": "Reactions",
  "note": {
   "en": "ACS Reactions explains how iron-powder hand warmers get hot: the iron rusts quickly in air and releases heat.",
   "sq": "ACS Reactions shpjegon si nxehen ngrohëset e duarve me pluhur hekuri: hekuri ndryshket shpejt në ajër dhe çliron nxehtësi."
  },
  "checked": "5 Oct 2026"
 },
 "hotice": {
  "id": "BRBeJVG4nO0",
  "title": "Watch This Liquid Turn Into HOT Ice Instantly!",
  "channel": "vt.physics",
  "note": {
   "en": "A supersaturated sodium acetate solution crystallises instantly into warm ‘hot ice’ once it is triggered.",
   "sq": "Një tretësirë e mbingopur e acetatit të natriumit kristalizohet menjëherë në ‘akull të nxehtë’ të ngrohtë sapo nxitet."
  },
  "checked": "5 Oct 2026"
 },
 "alkenes": {
  "id": "Evc76znohKQ",
  "title": "Test for Alkenes with Bromine Water | AQA GCSE Chemistry (9-1) | Unsaturated Hydrocarbons",
  "channel": "Pass my GCSE science",
  "note": {
   "en": "Orange bromine water is shaken with an alkene and turns colourless, showing that the hydrocarbon is unsaturated.",
   "sq": "Uji i bromit me ngjyrë portokalli tundet me një alken dhe bëhet i pangjyrë, gjë që tregon se hidrokarburi është i pangopur."
  },
  "checked": "5 Oct 2026"
 },
 "waterelectrolysis": {
  "id": "b9ZBeilw_mQ",
  "title": "Electrolysis of Water #shorts",
  "channel": "Manocha Academy",
  "note": {
   "en": "Electricity splits water into hydrogen and oxygen, with bubbles of gas forming at the two electrodes.",
   "sq": "Rryma elektrike e zbërthen ujin në hidrogjen dhe oksigjen, me flluska gazi që formohen në të dy elektrodat."
  },
  "checked": "5 Oct 2026"
 },
 "oobleck": {
  "id": "6PSgaUSiPKo",
  "title": "Oobleck Explained in 40 Seconds – Try This at Home!",
  "channel": "Museum of Science",
  "note": {
   "en": "Cornflour and water make oobleck, which acts like a solid when squeezed or hit but flows like a liquid when handled gently.",
   "sq": "Niseshteja e misrit me ujë krijon oobleck-un, i cili sillet si i ngurtë kur e shtrydh ose e godet, por rrjedh si lëng kur e prek butë."
  },
  "checked": "5 Oct 2026"
 },
 "cloudjar": {
  "id": "RSwyhteBx5w",
  "title": "Make a Cloud in a Jar ☁️ | Easy Earth Day Science Experiment for Kids",
  "channel": "Gateway to Science",
  "note": {
   "en": "Warm water vapour in a jar is cooled from above, and a cloud forms as the vapour condenses into tiny droplets.",
   "sq": "Avulli i ujit të ngrohtë në një kavanoz ftohet nga sipër dhe formohet një re, ndërsa avulli kondensohet në pika të vogla."
  },
  "checked": "5 Oct 2026"
 },
 "leakproof": {
  "id": "xEqYFttY2rY",
  "title": "Spectacular Science Experiment! Leakproof Bag!",
  "channel": "Spectacular Science",
  "note": {
   "en": "Sharp pencils are pushed through a plastic bag full of water without it leaking, because the stretchy polymer seals around each pencil.",
   "sq": "Lapsa të mprehur shpohen nëpër një qese plastike plot me ujë pa rrjedhur, sepse polimeri elastik mbyllet rreth secilit laps."
  },
  "checked": "5 Oct 2026"
 },
 "bioplastic": {
  "id": "mTUeEMrbA2w",
  "title": "Bioplastic production from cornstarch, & degradation testing",
  "channel": "Process Engineering Fundamentals (Kevin Harding)",
  "note": {
   "en": "Cornstarch is heated with water and other ingredients to make a bioplastic, which is then tested to see how it breaks down.",
   "sq": "Niseshteja e misrit ngrohet me ujë dhe përbërës të tjerë për të bërë një bioplastikë, e cila më pas testohet për të parë si zbërthehet."
  },
  "checked": "5 Oct 2026"
 },
 "halides": {
  "id": "EfWaB4udf6k",
  "title": "Testing for Halide Ions (AgNO₃ Test) 🧪✨",
  "channel": "Chemistry Student",
  "note": {
   "en": "Silver nitrate is added to chloride, bromide and iodide solutions, giving white, cream and yellow precipitates.",
   "sq": "Nitrati i argjendit shtohet në tretësira klorurash, bromurash dhe jodurash, duke dhënë precipitate të bardha, krem dhe të verdha."
  },
  "checked": "5 Oct 2026"
 }
};

/* =========================================================================
   ALL EXPERIMENTS — merged, with a difficulty level and clip captions
   ========================================================================= */

/* Clips saved in the videos/ folder (experiment id: file name). */
const LOCAL_VIDEOS = {
  // cabbage: "cabbage.mp4",
};
