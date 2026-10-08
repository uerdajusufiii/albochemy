"use strict";
/* ---------- 2. Experiments ----------
   Each experiment has shared settings (grade range, supervision, video,
   sources) plus an "en" and an "sq" block with all of its learning text.
   supervision: "supervised" | "close" | "demo"
   predictAt:   the step number (counting from 0) BEFORE which the
                "Stop! Make your prediction" reminder appears.
   Video IDs were checked on 4 Oct 2026 (title + channel confirmed).        */
const EXP_CORE = [
/* ===================== 1. RED CABBAGE INDICATOR ===================== */
{
  id: "cabbage", icon: "leaf", topic: "acids", grades: "7–9", gmin: 7, gmax: 9,
  supervision: "supervised", time: 40, eqType: "idea", predictAt: 4,
  ppe: ["goggles"],
  demo: { s: "beaker", from: "#7c3aed", to: "#ec4899" },
  video: { id: "EB9VT3hcETE", title: "Using a cabbage to do some chemistry", channel: "NileRed",
    note: { en: "A chemistry YouTuber shows the rainbow of colours red cabbage indicator can make.", sq: "Një kimist në YouTube tregon ylberin e ngjyrave që jep indikatori i lakrës së kuqe." } },
  sources: [
    { org: "The Royal Institution", title: "Colour changing cabbage juice", url: "https://www.rigb.org/learning/activities-and-resources/colour-changing-cabbage-juice" },
    { org: "Science Buddies", title: "Color-changing Cabbage Chemistry", url: "https://www.sciencebuddies.org/stem-activities/cabbage-pH-indicator" }
  ],
  en: {
    name: "Red Cabbage Rainbow",
    short: "pH indicator",
    hook: "Turn a purple vegetable into a colour-changing acid detector.",
    aim: "Make a natural pH indicator from red cabbage and use it to sort household liquids into acids, neutral substances and alkalis (bases).",
    chemistry: [
      "Red cabbage contains pigments called anthocyanins. Their molecules change shape slightly when the number of hydrogen ions (H⁺) around them changes — and each shape absorbs light differently, so we see a different colour.",
      "Acids have lots of H⁺ ions (low pH, below 7). Alkalis have very few H⁺ and lots of hydroxide ions, OH⁻ (high pH, above 7). Neutral substances, like pure water, are pH 7.",
      "Typical colours: red (very acidic, about pH 2) → purple (pH 4–6) → violet-blue (around pH 7–8) → green (about pH 10) → yellow (very alkaline, about pH 12)."
    ],
    equation: "acid (lots of H⁺) → red/pink  ·  neutral → purple  ·  alkali (lots of OH⁻) → blue → green → yellow",
    equipment: [
      "¼ of a red cabbage, chopped or grated",
      "Hot water from a kettle (handled only by the teacher)",
      "Heat-resistant jug or beaker and a sieve",
      "6 clear cups or test tubes in a rack",
      "Teaspoon or dropper",
      "Test liquids: lemon juice, white vinegar, tap water, baking soda solution, soap solution, washing soda solution",
      "Labels, a pen and white paper as a background",
      "Safety goggles"
    ],
    steps: [
      "Put on your goggles. Label six cups with the names of the liquids you will test.",
      "Your teacher pours hot water over the chopped cabbage. Leave it for 10–15 minutes until the water is deep purple.",
      "When it has cooled, pour it through the sieve. The purple liquid is your indicator.",
      "Pour the same amount of indicator (about 2 cm deep) into each cup.",
      "Add one teaspoon of each test liquid to its cup. Stir gently and hold the cup in front of white paper.",
      "Record each colour in a table and sort the liquids: acid, neutral or alkali.",
      "Bonus: add lemon juice drop by drop to the baking soda cup and watch the colour change back as the acid neutralises the alkali."
    ],
    predict: {
      q: "You add white vinegar to the purple cabbage indicator. What colour do you think it will turn?",
      options: ["Red / pink", "Green / yellow", "It stays purple", "It becomes colourless"],
      answer: 0,
      result: "The indicator turns red-pink. Vinegar contains ethanoic (acetic) acid, so it is acidic. The baking soda and washing soda cups turn blue-green or green because they are alkaline, while tap water stays roughly purple — close to neutral."
    },
    why: {
      q: "Why does the cabbage juice change colour?",
      answer: 0,
      options: [
        { t: "The pigment molecules change structure depending on how many H⁺ ions are present", fb: "Anthocyanin molecules gain or lose H⁺ ions. Each form absorbs different colours of light, so the colour we see depends on the pH." },
        { t: "The vinegar's own colour mixes with the purple juice", fb: "White vinegar is colourless, so it can't paint the juice red. The colour comes from a chemical change in the cabbage pigment itself." },
        { t: "The liquids make the juice hotter or colder", fb: "All the liquids are at room temperature. The change is caused by acidity (H⁺ ions), not temperature." },
        { t: "Oxygen from the air reacts with the juice", fb: "The juice was already touching the air and stayed purple. The colour only changes when an acid or alkali is added." }
      ]
    },
    hazards: [
      "Hot water can scald — only the teacher handles the kettle and the hot liquid.",
      "Vinegar and lemon juice sting if they get into your eyes.",
      "Washing soda (sodium carbonate) solution irritates the eyes and skin.",
      "Do NOT use bleach, oven cleaner or drain cleaner: they are corrosive, and bleach mixed with acids releases toxic chlorine gas."
    ],
    precautions: [
      "Wear goggles from start to finish.",
      "Never taste anything in the lab — not even food items like cabbage or lemon juice.",
      "Use small amounts and wipe up spills straight away.",
      "Wash your hands at the end."
    ],
    disposal: [
      "All the liquids can be poured down the sink with plenty of running water.",
      "Put cabbage leftovers in the compost or bin, then rinse all cups."
    ],
    supervisionNote: "The teacher prepares the hot cabbage extract; students then test the liquids."
  },
  sq: {
    name: "Ylberi i lakrës së kuqe",
    short: "Indikator pH",
    hook: "Kthe një perime vjollcë në një detektor acidesh që ndryshon ngjyrë.",
    aim: "Përgatit një indikator natyral pH nga lakra e kuqe dhe përdore për të ndarë lëngjet shtëpiake në acide, substanca neutrale dhe alkale (baza).",
    chemistry: [
      "Lakra e kuqe përmban pigmente që quhen antocianina. Molekulat e tyre ndryshojnë pak formë kur ndryshon numri i joneve të hidrogjenit (H⁺) rreth tyre — dhe çdo formë e thith dritën ndryshe, prandaj ne shohim një ngjyrë tjetër.",
      "Acidet kanë shumë jone H⁺ (pH i ulët, nën 7). Alkalet kanë shumë pak H⁺ dhe shumë jone hidroksid, OH⁻ (pH i lartë, mbi 7). Substancat neutrale, si uji i pastër, kanë pH 7.",
      "Ngjyrat tipike: e kuqe (shumë acide, rreth pH 2) → vjollcë (pH 4–6) → vjollcë-blu (rreth pH 7–8) → jeshile (rreth pH 10) → e verdhë (shumë alkaline, rreth pH 12)."
    ],
    equation: "acid (shumë H⁺) → e kuqe/rozë  ·  neutral → vjollcë  ·  alkal (shumë OH⁻) → blu → jeshile → e verdhë",
    equipment: [
      "¼ e një lakre të kuqe, e prerë ose e grirë",
      "Ujë i nxehtë nga ibriku (e trajton vetëm mësuesi)",
      "Enë ose gotë kimike rezistente ndaj nxehtësisë dhe një sitë",
      "6 gota transparente ose provëza në mbajtëse",
      "Lugë çaji ose pikatore",
      "Lëngjet për provë: lëng limoni, uthull e bardhë, ujë rubineti, tretësirë sode buke, tretësirë sapuni, tretësirë sode larëse",
      "Etiketa, stilolaps dhe letër e bardhë si sfond",
      "Syze mbrojtëse"
    ],
    steps: [
      "Vendos syzet mbrojtëse. Shëno gjashtë gotat me emrat e lëngjeve që do të provosh.",
      "Mësuesi derdh ujë të nxehtë mbi lakrën e prerë. Lëre 10–15 minuta derisa uji të marrë ngjyrë vjollcë të thellë.",
      "Kur të jetë ftohur, kaloje nëpër sitë. Lëngu vjollcë është indikatori yt.",
      "Hidh të njëjtën sasi indikatori (rreth 2 cm lartësi) në secilën gotë.",
      "Shto një lugë çaji nga secili lëng në gotën e vet. Përziej lehtë dhe mbaje gotën përpara letrës së bardhë.",
      "Shëno çdo ngjyrë në një tabelë dhe ndaji lëngjet: acid, neutral apo alkal.",
      "Bonus: shto lëng limoni pikë-pikë në gotën me sodë buke dhe shiko si kthehet ngjyra ndërsa acidi neutralizon alkalin."
    ],
    predict: {
      q: "Shton uthull të bardhë te indikatori vjollcë i lakrës. Çfarë ngjyre mendon se do të marrë?",
      options: ["E kuqe / rozë", "Jeshile / e verdhë", "Mbetet vjollcë", "Bëhet e pangjyrë"],
      answer: 0,
      result: "Indikatori bëhet i kuq-rozë. Uthulla përmban acid etanoik (acetik), prandaj është acide. Gotat me sodë buke dhe sodë larëse bëhen blu-jeshile ose jeshile sepse janë alkaline, ndërsa uji i rubinetit mbetet afërsisht vjollcë — pothuajse neutral."
    },
    why: {
      q: "Pse ndryshon ngjyrë lëngu i lakrës?",
      answer: 0,
      options: [
        { t: "Molekulat e pigmentit ndryshojnë strukturë në varësi të sasisë së joneve H⁺", fb: "Molekulat e antocianinës fitojnë ose humbasin jone H⁺. Çdo formë thith ngjyra të ndryshme drite, prandaj ngjyra që shohim varet nga pH." },
        { t: "Ngjyra e uthullës përzihet me lëngun vjollcë", fb: "Uthulla e bardhë është e pangjyrë, ndaj nuk mund ta ngjyrosë lëngun të kuq. Ngjyra vjen nga një ndryshim kimik në vetë pigmentin e lakrës." },
        { t: "Lëngjet e bëjnë lëngun më të nxehtë ose më të ftohtë", fb: "Të gjitha lëngjet janë në temperaturën e dhomës. Ndryshimi shkaktohet nga aciditeti (jonet H⁺), jo nga temperatura." },
        { t: "Oksigjeni i ajrit reagon me lëngun", fb: "Lëngu ishte tashmë në kontakt me ajrin dhe mbeti vjollcë. Ngjyra ndryshon vetëm kur shtohet një acid ose alkal." }
      ]
    },
    hazards: [
      "Uji i nxehtë mund të përvëlojë — vetëm mësuesi e trajton ibrikun dhe lëngun e nxehtë.",
      "Uthulla dhe lëngu i limonit të djegin nëse të hyjnë në sy.",
      "Tretësira e sodës larëse (karbonat natriumi) irriton sytë dhe lëkurën.",
      "MOS përdor varikinë, pastrues furre ose pastrues tubash: janë gërryes, dhe varikina e përzier me acide çliron gaz klor helmues."
    ],
    precautions: [
      "Mbaj syzet mbrojtëse nga fillimi deri në fund.",
      "Mos shijo kurrë asgjë në laborator — as ushqime si lakra apo lëngu i limonit.",
      "Përdor sasi të vogla dhe fshi menjëherë çdo derdhje.",
      "Laj duart në fund."
    ],
    disposal: [
      "Të gjitha lëngjet mund të derdhen në lavaman me shumë ujë të rrjedhshëm.",
      "Mbetjet e lakrës hidhi në kompost ose në kosh, pastaj shpëlaj të gjitha gotat."
    ],
    supervisionNote: "Mësuesi përgatit ekstraktin e nxehtë të lakrës; pastaj nxënësit provojnë lëngjet."
  }
},

/* ===================== 2. PAPER CHROMATOGRAPHY ===================== */
{
  id: "chromatography", icon: "chroma", topic: "separation", grades: "7–9", gmin: 7, gmax: 9,
  supervision: "supervised", time: 30, eqType: "equation", predictAt: 3,
  ppe: ["goggles"],
  demo: { s: "paper", bands: ["#2563eb", "#9333ea", "#db2777", "#eab308"] },
  video: { id: "No0Xs1Z3sRk", title: "Perform a Chromatography Experiment at Home", channel: "Chemical Kim Science",
    note: { en: "Marker ink separating on paper — what your strips should look like.", sq: "Boja e markerit që ndahet në letër — si duhet të duken shiritat e tu." } },
  sources: [
    { org: "Science Buddies", title: "Paper Chromatography: Is Black Ink Really Black?", url: "https://www.sciencebuddies.org/science-fair-projects/project-ideas/Chem_p008/chemistry/paper-chromatography" },
    { org: "Royal Society of Chemistry", title: "Kitchen roll chromatography", url: "https://edu.rsc.org/primary-science/kitchen-roll-chromatography/4012057.article" }
  ],
  en: {
    name: "Ink Detective",
    short: "Paper chromatography",
    hook: "Is black ink really black? Reveal the hidden colours in a mixture.",
    aim: "Use paper chromatography to separate the dyes in black felt-tip inks and compare different pens, just like a forensic scientist.",
    chemistry: [
      "Most inks are mixtures of several coloured dyes. Chromatography separates a mixture using two ‘phases’: a stationary phase that stays still (the paper) and a mobile phase that moves (the water, called the solvent).",
      "Water soaks up the paper by capillary action and carries the dyes with it. Dyes that dissolve well in water and are only weakly attracted to the paper travel far. Dyes that stick more strongly to the paper travel a shorter distance.",
      "Older students can calculate an Rf value for each dye. A dye always has the same Rf value under the same conditions — that's how scientists identify substances."
    ],
    equation: "Rf = distance moved by the dye ÷ distance moved by the solvent   (always between 0 and 1)",
    equipment: [
      "Filter paper or chromatography paper strips (about 2 cm × 12 cm)",
      "3–4 different black felt-tip pens (water-based pens work best)",
      "A beaker or tall glass",
      "Water",
      "A pencil (not a pen!) and a ruler",
      "A paper clip or tape and a pencil to hang the strip from",
      "Safety goggles"
    ],
    steps: [
      "Draw a pencil line 2 cm from the bottom of each strip. (We use pencil because graphite doesn't dissolve in water.)",
      "Put a small, strong dot of one black pen in the middle of the line. Use a different pen for each strip and write its name in pencil at the top.",
      "Pour water into the beaker to about 1 cm deep — the water must stay BELOW the ink dot.",
      "Hang the strip so its bottom edge just touches the water. Don't move it while it runs.",
      "Watch for 5–10 minutes as the water climbs. Take the strip out before the water reaches the top and mark the water line (solvent front) in pencil.",
      "Let it dry, then compare the colours and patterns from each pen.",
      "Grades 9+: measure the distances and calculate the Rf value of each dye."
    ],
    predict: {
      q: "What will happen to the black ink dot as the water climbs up the paper?",
      options: ["It separates into several different colours", "It stays as one black dot", "It moves up as one black spot", "It disappears completely"],
      answer: 0,
      result: "The black dot spreads out into bands of colour — often blue, purple, pink, yellow or brown. Different brands of black pen give different patterns, so chromatography can reveal which pen wrote a mystery note."
    },
    why: {
      q: "Why do the different colours end up at different heights?",
      answer: 0,
      options: [
        { t: "Each dye has a different balance between dissolving in water and sticking to the paper", fb: "Dyes that dissolve well and stick only weakly to the paper are carried further. Dyes that are attracted more strongly to the paper are left behind." },
        { t: "Heavy colours sink and light colours float", fb: "The dyes aren't floating — they are dissolved and carried through the paper. Their attraction to the paper compared with the water matters more than their weight." },
        { t: "The water makes new colours by reacting with the ink", fb: "No new substances are made — this is a physical separation. The colours were already mixed together in the black ink." },
        { t: "The pencil line pulls the colours upwards", fb: "The pencil line only marks the start. Graphite doesn't dissolve, so it can't move or pull anything." }
      ]
    },
    hazards: [
      "This is a low-hazard experiment, but spilled water makes the floor slippery.",
      "Some ‘permanent’ markers need alcohol instead of water as the solvent. Alcohol is flammable and harmful — only use it if your teacher provides it, and keep it away from flames.",
      "Ink can stain skin and clothes."
    ],
    precautions: [
      "Wear goggles, especially if any solvent other than water is used.",
      "Keep the beaker on a stable, flat surface and wipe up spills immediately.",
      "Keep pens, paper and solvent away from your mouth.",
      "Wash your hands afterwards."
    ],
    disposal: [
      "Water can be poured down the sink.",
      "Dry paper strips can be stuck in your notebook or put in the bin.",
      "If alcohol was used, give it back to your teacher — never pour it away near flames."
    ],
    supervisionNote: "If an alcohol solvent is needed, only the teacher handles it."
  },
  sq: {
    name: "Detektivi i bojës",
    short: "Kromatografia në letër",
    hook: "A është boja e zezë vërtet e zezë? Zbulo ngjyrat e fshehura në një përzierje.",
    aim: "Përdor kromatografinë në letër për të ndarë ngjyruesit në bojën e markerëve të zinj dhe për të krahasuar markera të ndryshëm, ashtu si një shkencëtar kriminalist.",
    chemistry: [
      "Shumica e bojërave janë përzierje të disa ngjyruesve. Kromatografia ndan një përzierje duke përdorur dy ‘faza’: një fazë të palëvizshme që qëndron në vend (letra) dhe një fazë të lëvizshme që lëviz (uji, që quhet tretës).",
      "Uji ngjitet nëpër letër me anë të kapilaritetit dhe i merr ngjyruesit me vete. Ngjyruesit që treten mirë në ujë dhe tërhiqen dobët nga letra udhëtojnë larg. Ngjyruesit që ngjiten më fort te letra udhëtojnë më pak.",
      "Nxënësit më të rritur mund të llogarisin vlerën Rf për çdo ngjyrues. Një ngjyrues ka gjithmonë të njëjtën vlerë Rf në të njëjtat kushte — kështu shkencëtarët identifikojnë substancat."
    ],
    equation: "Rf = distanca e përshkuar nga ngjyruesi ÷ distanca e përshkuar nga tretësi   (gjithmonë midis 0 dhe 1)",
    equipment: [
      "Shirita letre filtri ose letre kromatografie (rreth 2 cm × 12 cm)",
      "3–4 markera të zinj të ndryshëm (ata me bazë uji funksionojnë më mirë)",
      "Një gotë kimike ose gotë e lartë",
      "Ujë",
      "Një laps (jo stilolaps!) dhe një vizore",
      "Një kapëse letrash ose shirit ngjitës dhe një laps për ta varur shiritin",
      "Syze mbrojtëse"
    ],
    steps: [
      "Vizato me laps një vijë 2 cm nga fundi i çdo shiriti. (Përdorim lapsin sepse grafiti nuk tretet në ujë.)",
      "Vendos një pikë të vogël e të fortë me një marker të zi në mes të vijës. Përdor një marker tjetër për çdo shirit dhe shkruaj emrin e tij me laps në krye.",
      "Hidh ujë në gotë deri rreth 1 cm thellësi — uji duhet të mbetet POSHTË pikës së bojës.",
      "Vare shiritin që buza e poshtme sapo të prekë ujin. Mos e lëviz ndërsa uji ngjitet.",
      "Vëzhgo për 5–10 minuta ndërsa uji ngjitet. Nxirre shiritin para se uji të arrijë majën dhe shëno me laps vijën e ujit (fronti i tretësit).",
      "Lëre të thahet, pastaj krahaso ngjyrat dhe modelet e secilit marker.",
      "Klasa 9+: mat distancat dhe llogarit vlerën Rf të çdo ngjyruesi."
    ],
    predict: {
      q: "Çfarë do t'i ndodhë pikës së zezë të bojës ndërsa uji ngjitet në letër?",
      options: ["Ndahet në disa ngjyra të ndryshme", "Mbetet një pikë e zezë", "Ngjitet lart si një njollë e zezë", "Zhduket plotësisht"],
      answer: 0,
      result: "Pika e zezë shpërndahet në shirita ngjyrash — shpesh blu, vjollcë, rozë, të verdhë ose kafe. Marka të ndryshme markerësh të zinj japin modele të ndryshme, ndaj kromatografia mund të zbulojë cili marker ka shkruar një shënim misterioz."
    },
    why: {
      q: "Pse ngjyrat e ndryshme përfundojnë në lartësi të ndryshme?",
      answer: 0,
      options: [
        { t: "Çdo ngjyrues ka një ekuilibër tjetër midis tretjes në ujë dhe ngjitjes te letra", fb: "Ngjyruesit që treten mirë dhe ngjiten vetëm pak te letra barten më larg. Ngjyruesit që tërhiqen më fort nga letra mbeten pas." },
        { t: "Ngjyrat e rënda fundosen dhe ato të lehtat notojnë", fb: "Ngjyruesit nuk notojnë — ata janë të tretur dhe barten nëpër letër. Tërheqja nga letra krahasuar me ujin ka më shumë rëndësi se pesha e tyre." },
        { t: "Uji krijon ngjyra të reja duke reaguar me bojën", fb: "Nuk krijohen substanca të reja — kjo është një ndarje fizike. Ngjyrat ishin tashmë të përziera në bojën e zezë." },
        { t: "Vija e lapsit i tërheq ngjyrat lart", fb: "Vija e lapsit shënon vetëm fillimin. Grafiti nuk tretet, ndaj nuk mund të lëvizë ose të tërheqë asgjë." }
      ]
    },
    hazards: [
      "Ky është një eksperiment me rrezik të ulët, por uji i derdhur e bën dyshemenë të rrëshqitshme.",
      "Disa markera ‘të përhershëm’ kanë nevojë për alkool në vend të ujit si tretës. Alkooli është i ndezshëm dhe i dëmshëm — përdore vetëm nëse e jep mësuesi dhe mbaje larg flakës.",
      "Boja mund të njollosë lëkurën dhe rrobat."
    ],
    precautions: [
      "Mbaj syze mbrojtëse, sidomos nëse përdoret ndonjë tretës tjetër përveç ujit.",
      "Mbaje gotën në një sipërfaqe të qëndrueshme e të sheshtë dhe fshi menjëherë çdo derdhje.",
      "Mbaji markerat, letrën dhe tretësin larg gojës.",
      "Laj duart pas eksperimentit."
    ],
    disposal: [
      "Uji mund të derdhet në lavaman.",
      "Shiritat e thatë mund t'i ngjitësh në fletore ose t'i hedhësh në kosh.",
      "Nëse është përdorur alkool, ktheja mësuesit — mos e hidh kurrë pranë flakës."
    ],
    supervisionNote: "Nëse nevojitet një tretës me alkool, e trajton vetëm mësuesi."
  }
},

/* ===================== 3. ELEPHANT'S TOOTHPASTE ===================== */
{
  id: "foam", icon: "foam", topic: "reactions", grades: "7–10", gmin: 7, gmax: 10,
  supervision: "close", time: 20, eqType: "equation", predictAt: 4,
  ppe: ["goggles", "gloves"],
  demo: { s: "beaker", from: "#fbcfe8", to: "#fbcfe8", foam: "#f9a8d4", temp: "up" },
  video: { id: "VWpbhhoVfao", title: "Easy Elephant Toothpaste experiment at home", channel: "learningscienceisfun",
    note: { en: "A short at-home demonstration. Whatever version you watch, students use only 3% hydrogen peroxide.", sq: "Një demonstrim i shkurtër në shtëpi. Cilido version që shikon, nxënësit përdorin vetëm peroksid hidrogjeni 3%." } },
  sources: [
    { org: "Science Buddies", title: "Elephant Toothpaste", url: "https://www.sciencebuddies.org/stem-activities/elephant-toothpaste" }
  ],
  en: {
    name: "Elephant's Toothpaste",
    short: "Catalysts",
    hook: "A spoonful of yeast makes a fountain of foam. Meet the catalyst!",
    aim: "Observe how a catalyst — the enzyme catalase in yeast — speeds up the decomposition of hydrogen peroxide, and identify the gas that is produced.",
    chemistry: [
      "Hydrogen peroxide (H₂O₂) slowly breaks down by itself into water and oxygen gas — usually far too slowly to notice.",
      "Yeast contains an enzyme called catalase. Enzymes are biological catalysts: they speed up a reaction without being used up. Catalase makes hydrogen peroxide decompose extremely quickly.",
      "The oxygen is released so fast that the washing-up liquid traps it in millions of tiny bubbles — that's the foam. The reaction is exothermic (it gives out heat), so the bottle and foam feel warm."
    ],
    equation: "2H₂O₂(aq) → 2H₂O(l) + O₂(g)   — catalyst: catalase in yeast",
    equipment: [
      "Clean plastic bottle (about 500 mL)",
      "½ cup (about 120 mL) of 3% hydrogen peroxide (pharmacy strength)",
      "1 tablespoon of dried yeast + 3 tablespoons of warm water",
      "A good squirt of washing-up liquid",
      "Food colouring (optional)",
      "Large tray or tub to catch the foam",
      "Measuring cup, spoons and a funnel",
      "Safety goggles and gloves"
    ],
    steps: [
      "Put on goggles and gloves. Stand the bottle in the middle of the tray.",
      "Using the funnel, pour ½ cup of 3% hydrogen peroxide into the bottle.",
      "Add a squirt of washing-up liquid and a few drops of food colouring. Swirl gently.",
      "In a separate cup, mix the yeast with the warm water for about 30 seconds.",
      "Pour the yeast mixture into the bottle through the funnel, remove the funnel and step back.",
      "Observe the foam. Carefully touch the outside of the bottle (not the foam) — what do you notice?",
      "Extension with your teacher: a glowing (not flaming) splint held near the foam relights, which shows the gas is oxygen."
    ],
    predict: {
      q: "What do you think will happen when the yeast mixture is poured into the bottle?",
      options: ["A tower of foam rises quickly out of the bottle", "Nothing — yeast and peroxide don't react", "The liquid freezes into ice", "It slowly turns into a solid crystal"],
      answer: 0,
      result: "Within seconds, a thick, warm column of foam pours out of the bottle and keeps coming until most of the hydrogen peroxide has decomposed. The bottle feels warm because the reaction releases heat."
    },
    why: {
      q: "What is the job of the yeast in this reaction?",
      answer: 0,
      options: [
        { t: "It contains a catalyst (catalase) that speeds up the decomposition without being used up", fb: "Catalase lowers the energy needed for H₂O₂ to break down, so oxygen is released very quickly — and the enzyme itself isn't used up." },
        { t: "It is a fuel that burns to make the foam", fb: "Nothing is burning. The foam is oxygen gas from the hydrogen peroxide, trapped by the soap." },
        { t: "The yeast makes the foam by itself, like bread rising", fb: "Yeast can slowly make carbon dioxide when it ferments sugar — but here the gas is oxygen from H₂O₂, released in seconds thanks to catalase." },
        { t: "The soap reacts with the peroxide to make the gas", fb: "Soap doesn't make the gas — it traps it. Without soap you would still get oxygen, just as bubbles instead of foam." }
      ]
    },
    hazards: [
      "Hydrogen peroxide irritates the eyes and skin, even at 3%.",
      "Stronger hydrogen peroxide (6% and above, such as 30% ‘teacher demo’ versions) is corrosive and can burn skin — it is never used by students.",
      "The foam and the bottle get warm; with stronger peroxide they can get hot.",
      "Foam on the floor is slippery."
    ],
    precautions: [
      "Wear goggles and gloves.",
      "Use only the 3% hydrogen peroxide your teacher gives you.",
      "Don't touch or play with the foam, and don't put your face over the bottle.",
      "Work inside a tray and clean up spills straight away.",
      "Wash your hands afterwards."
    ],
    disposal: [
      "The foam is mostly water, soap and oxygen — wash it down the sink with plenty of water.",
      "Return any unused hydrogen peroxide to your teacher.",
      "Rinse the bottle and the tray."
    ],
    supervisionNote: "Students may only do the 3% version. Versions with stronger peroxide are teacher demonstrations only."
  },
  sq: {
    name: "Pasta e dhëmbëve e elefantit",
    short: "Katalizatorët",
    hook: "Një lugë maja krijon një shatërvan shkume. Njihu me katalizatorin!",
    aim: "Vëzhgo si një katalizator — enzima katalazë në maja — e përshpejton zbërthimin e peroksidit të hidrogjenit dhe identifiko gazin që çlirohet.",
    chemistry: [
      "Peroksidi i hidrogjenit (H₂O₂) zbërthehet vetvetiu ngadalë në ujë dhe gaz oksigjen — zakonisht aq ngadalë sa nuk vihet re.",
      "Maja përmban një enzimë që quhet katalazë. Enzimat janë katalizatorë biologjikë: e përshpejtojnë një reaksion pa u harxhuar. Katalaza e bën peroksidin e hidrogjenit të zbërthehet jashtëzakonisht shpejt.",
      "Oksigjeni çlirohet aq shpejt sa detergjenti e zë brenda miliona flluskave të vogla — kjo është shkuma. Reaksioni është ekzotermik (çliron nxehtësi), prandaj shishja dhe shkuma ndihen të ngrohta."
    ],
    equation: "2H₂O₂(aq) → 2H₂O(l) + O₂(g)   — katalizator: katalaza në maja",
    equipment: [
      "Shishe plastike e pastër (rreth 500 mL)",
      "½ filxhan (rreth 120 mL) peroksid hidrogjeni 3% (si ai i farmacisë)",
      "1 lugë gjelle maja e thatë + 3 lugë gjelle ujë të ngrohtë",
      "Pak detergjent enësh",
      "Ngjyrues ushqimor (sipas dëshirës)",
      "Tabaka ose legen i madh për të mbledhur shkumën",
      "Gotë matëse, lugë dhe një hinkë",
      "Syze mbrojtëse dhe doreza"
    ],
    steps: [
      "Vendos syzet dhe dorezat. Vendose shishen në mes të tabakasë.",
      "Me ndihmën e hinkës, hidh ½ filxhan peroksid hidrogjeni 3% në shishe.",
      "Shto pak detergjent dhe disa pika ngjyrues ushqimor. Tunde lehtë në rrethe.",
      "Në një gotë tjetër, përziej majanë me ujin e ngrohtë për rreth 30 sekonda.",
      "Hidh përzierjen e majasë në shishe me hinkë, hiqe hinkën dhe largohu pak.",
      "Vëzhgo shkumën. Prek me kujdes anën e jashtme të shishes (jo shkumën) — çfarë vë re?",
      "Zgjerim me mësuesin: një ashkël druri që vetëm shkëndijon (pa flakë), e afruar te shkuma, ndizet përsëri — kjo tregon se gazi është oksigjen."
    ],
    predict: {
      q: "Çfarë mendon se do të ndodhë kur përzierja e majasë hidhet në shishe?",
      options: ["Një kullë shkume ngrihet shpejt nga shishja", "Asgjë — maja dhe peroksidi nuk reagojnë", "Lëngu ngrin dhe bëhet akull", "Ngadalë kthehet në kristal të ngurtë"],
      answer: 0,
      result: "Brenda pak sekondash, një kolonë e trashë dhe e ngrohtë shkume del nga shishja dhe vazhdon të dalë derisa pjesa më e madhe e peroksidit të hidrogjenit të jetë zbërthyer. Shishja ndihet e ngrohtë sepse reaksioni çliron nxehtësi."
    },
    why: {
      q: "Cili është roli i majasë në këtë reaksion?",
      answer: 0,
      options: [
        { t: "Përmban një katalizator (katalazë) që e përshpejton zbërthimin pa u harxhuar", fb: "Katalaza ul energjinë e nevojshme që H₂O₂ të zbërthehet, ndaj oksigjeni çlirohet shumë shpejt — dhe vetë enzima nuk harxhohet." },
        { t: "Është një lëndë djegëse që digjet për të bërë shkumën", fb: "Asgjë nuk po digjet. Shkuma është gaz oksigjen nga peroksidi i hidrogjenit, i zënë nga sapuni." },
        { t: "Maja e bën shkumën vetë, si kur fryhet buka", fb: "Maja mund të prodhojë ngadalë dioksid karboni kur fermenton sheqerin — por këtu gazi është oksigjen nga H₂O₂, i çliruar në sekonda falë katalazës." },
        { t: "Sapuni reagon me peroksidin për të bërë gazin", fb: "Sapuni nuk e prodhon gazin — e zë brenda flluskave. Pa sapun do të kishe përsëri oksigjen, por si flluska në vend të shkumës." }
      ]
    },
    hazards: [
      "Peroksidi i hidrogjenit irriton sytë dhe lëkurën, edhe në 3%.",
      "Peroksidi më i fortë (6% e lart, si versionet 30% për demonstrim nga mësuesi) është gërryes dhe mund të djegë lëkurën — nuk përdoret kurrë nga nxënësit.",
      "Shkuma dhe shishja ngrohen; me peroksid më të fortë mund të nxehen shumë.",
      "Shkuma në dysheme është e rrëshqitshme."
    ],
    precautions: [
      "Mbaj syze mbrojtëse dhe doreza.",
      "Përdor vetëm peroksidin e hidrogjenit 3% që të jep mësuesi.",
      "Mos e prek dhe mos luaj me shkumën, dhe mos e mbaj fytyrën mbi shishe.",
      "Puno brenda tabakasë dhe pastro menjëherë çdo derdhje.",
      "Laj duart pas eksperimentit."
    ],
    disposal: [
      "Shkuma është kryesisht ujë, sapun dhe oksigjen — shpëlaje në lavaman me shumë ujë.",
      "Ktheja mësuesit peroksidin e hidrogjenit të papërdorur.",
      "Shpëlaj shishen dhe tabakanë."
    ],
    supervisionNote: "Nxënësit mund të bëjnë vetëm versionin me 3%. Versionet me peroksid më të fortë janë vetëm demonstrime nga mësuesi."
  }
},

/* ===================== 4. MAGNESIUM + HYDROCHLORIC ACID ===================== */
{
  id: "magnesium", icon: "beaker", topic: "reactions", grades: "9–11", gmin: 9, gmax: 11,
  supervision: "supervised", time: 45, eqType: "equation", predictAt: 4,
  ppe: ["goggles", "coat"],
  demo: { s: "beaker", from: "#f1f5f9", to: "#f1f5f9", bubbles: 2, solid: { c: "#a1a1aa", shrink: true }, temp: "up" },
  video: { id: "rmAVlzKN6HA", title: "Reaction of Magnesium ribbon with acetic acid and HCL | Class 10 science", channel: "ChemXpert",
    note: { en: "Compares magnesium in a weak acid and in hydrochloric acid — notice the difference in fizzing.", sq: "Krahason magnezin në një acid të dobët dhe në acid klorhidrik — vër re ndryshimin në shkumëzim." } },
  sources: [
    { org: "Royal Society of Chemistry", title: "The rate of reaction of magnesium with hydrochloric acid", url: "https://edu.rsc.org/experiments/the-rate-of-reaction-of-magnesium-with-hydrochloric-acid/1916.article" },
    { org: "CLEAPSS", title: "Student Safety Sheet 20: Hydrochloric acid (PDF)", url: "https://science.cleapss.org.uk/resource/sss020-hydrochloric-acid.pdf" }
  ],
  en: {
    name: "Magnesium Meets Acid",
    short: "Metals & reaction rates",
    hook: "Fizz, heat and hydrogen: watch a metal disappear in acid — and measure how fast it happens.",
    aim: "React magnesium with dilute hydrochloric acid, identify the gas produced, and measure how the volume of hydrogen changes over time to find the rate of reaction.",
    chemistry: [
      "Magnesium is more reactive than hydrogen, so it displaces hydrogen from the acid. The products are a salt (magnesium chloride) and hydrogen gas.",
      "In terms of electrons, each magnesium atom loses two electrons (oxidation) and hydrogen ions gain them (reduction): Mg → Mg²⁺ + 2e⁻ and 2H⁺ + 2e⁻ → H₂.",
      "The reaction is fastest at the start, when there are the most acid particles colliding with the magnesium surface. As the reactants are used up, collisions happen less often and the rate slows — so a graph of gas volume against time curves and then levels off."
    ],
    equation: "Mg(s) + 2HCl(aq) → MgCl₂(aq) + H₂(g)",
    equipment: [
      "3 cm strip of clean magnesium ribbon",
      "50 cm³ of dilute hydrochloric acid, 1 mol/dm³",
      "100 cm³ conical flask with a bung and delivery tube",
      "Trough or bowl of water and an upside-down 100 cm³ measuring cylinder (or a gas syringe)",
      "Clamp stand, boss and clamp",
      "Stopwatch",
      "Safety goggles"
    ],
    steps: [
      "Put on your goggles. Make sure there are no flames anywhere near your bench.",
      "Measure 50 cm³ of 1 mol/dm³ hydrochloric acid and pour it into the conical flask.",
      "Fill the measuring cylinder with water, turn it upside down in the trough and clamp it — with no air bubbles inside.",
      "Put the end of the delivery tube under the mouth of the measuring cylinder.",
      "Add the magnesium strip to the flask, put the bung in immediately and start the stopwatch.",
      "Record the volume of gas every 10 seconds until no more gas is produced.",
      "Plot a graph of the volume of hydrogen (cm³) against time (s). Where is the curve steepest — and what does that tell you?"
    ],
    predict: {
      q: "What do you expect to observe when the magnesium ribbon is added to the acid?",
      options: ["Fizzing, the magnesium gets smaller and disappears, and the flask gets warm", "The solution turns bright blue", "A white solid forms and nothing fizzes", "Nothing happens — metals don't react with acids"],
      answer: 0,
      result: "The magnesium fizzes rapidly and moves around as bubbles of hydrogen form on it, then disappears within a minute or two. The flask becomes warm because the reaction is exothermic. The gas volume rises quickly at first, then more slowly, then stops."
    },
    why: {
      q: "Why does the reaction slow down and then stop?",
      answer: 0,
      options: [
        { t: "The reactants get used up, so there are fewer successful collisions each second", fb: "As magnesium and acid are used up, their particles collide less often. When the magnesium is gone (or the acid runs out), no more hydrogen can be made." },
        { t: "The hydrogen gas puts the reaction out, like water on a fire", fb: "Hydrogen is a product — it doesn't stop the reaction. The rate depends on how often reactant particles collide." },
        { t: "The flask gets cold, which freezes the reaction", fb: "The flask actually gets warmer because the reaction is exothermic. The slowdown happens because the reactants are running out." },
        { t: "The magnesium turns into hydrogen", fb: "Atoms can't change into other elements in a chemical reaction. Magnesium becomes Mg²⁺ ions in magnesium chloride; the hydrogen comes from the acid." }
      ]
    },
    hazards: [
      "Hydrogen gas is extremely flammable — there must be no naked flames nearby.",
      "Hydrochloric acid (1 mol/dm³) can damage the eyes and irritate skin and cuts.",
      "Magnesium ribbon is flammable if it is heated in a flame.",
      "The flask gets warm, and glassware can crack or break if it is knocked."
    ],
    precautions: [
      "Wear goggles throughout the experiment.",
      "Keep Bunsen burners and matches away from your bench.",
      "Use clean, uncorroded magnesium and only the acid concentration your teacher gives you — never stronger.",
      "Don't lean over the flask or try to smell the gas.",
      "If acid gets on your skin, rinse it with running water and tell your teacher. If it gets in your eye, rinse with gently running water for at least 20 minutes and get help."
    ],
    disposal: [
      "The remaining solution (mostly magnesium chloride with a little acid) can be diluted with plenty of water and poured down the sink, following your school's rules.",
      "Give any unreacted magnesium back to your teacher — don't put it in the bin.",
      "Rinse all the glassware."
    ],
    supervisionNote: "Only the teacher may demonstrate the ‘squeaky pop’ test for hydrogen with a lit splint."
  },
  sq: {
    name: "Magnezi takon acidin",
    short: "Metalet dhe shpejtësia e reaksionit",
    hook: "Shkumëzim, nxehtësi dhe hidrogjen: shiko një metal të zhduket në acid — dhe mat sa shpejt ndodh.",
    aim: "Reago magnezin me acid klorhidrik të holluar, identifiko gazin që çlirohet dhe mat si ndryshon vëllimi i hidrogjenit me kalimin e kohës për të gjetur shpejtësinë e reaksionit.",
    chemistry: [
      "Magnezi është më aktiv se hidrogjeni, ndaj e zhvendos hidrogjenin nga acidi. Produktet janë një kripë (klorur magnezi) dhe gaz hidrogjen.",
      "Në lidhje me elektronet, çdo atom magnezi humbet dy elektrone (oksidim) dhe jonet e hidrogjenit i fitojnë ato (reduktim): Mg → Mg²⁺ + 2e⁻ dhe 2H⁺ + 2e⁻ → H₂.",
      "Reaksioni është më i shpejtë në fillim, kur ka më shumë grimca acidi që përplasen me sipërfaqen e magnezit. Ndërsa reaktantët harxhohen, përplasjet ndodhin më rrallë dhe shpejtësia ulet — prandaj grafiku i vëllimit të gazit kundrejt kohës përkulet dhe pastaj rrafshohet."
    ],
    equation: "Mg(s) + 2HCl(aq) → MgCl₂(aq) + H₂(g)",
    equipment: [
      "Shirit magnezi i pastër 3 cm",
      "50 cm³ acid klorhidrik i holluar, 1 mol/dm³",
      "Kolbë konike 100 cm³ me tapë dhe tub përcjellës",
      "Legen me ujë dhe një cilindër matës 100 cm³ i përmbysur (ose shiringë gazi)",
      "Mbajtëse metalike (stativ) me lidhëse dhe kapëse",
      "Kronometër",
      "Syze mbrojtëse"
    ],
    steps: [
      "Vendos syzet mbrojtëse. Sigurohu që nuk ka asnjë flakë pranë tavolinës tënde.",
      "Mat 50 cm³ acid klorhidrik 1 mol/dm³ dhe hidhe në kolbën konike.",
      "Mbushe cilindrin matës me ujë, përmbyse në legen dhe fiksoje me kapëse — pa flluska ajri brenda.",
      "Vendos fundin e tubit përcjellës nën grykën e cilindrit matës.",
      "Shto shiritin e magnezit në kolbë, vendos tapën menjëherë dhe nis kronometrin.",
      "Shëno vëllimin e gazit çdo 10 sekonda derisa të mos çlirohet më gaz.",
      "Ndërto grafikun e vëllimit të hidrogjenit (cm³) kundrejt kohës (s). Ku është lakorja më e pjerrët — dhe çfarë të tregon kjo?"
    ],
    predict: {
      q: "Çfarë pret të vëzhgosh kur shiriti i magnezit shtohet në acid?",
      options: ["Shkumëzim, magnezi zvogëlohet dhe zhduket, dhe kolba ngrohet", "Tretësira bëhet blu e ndezur", "Formohet një lëndë e bardhë e ngurtë dhe nuk ka shkumëzim", "Nuk ndodh asgjë — metalet nuk reagojnë me acidet"],
      answer: 0,
      result: "Magnezi shkumëzon fort dhe lëviz ndërsa mbi të formohen flluska hidrogjeni, pastaj zhduket brenda një-dy minutash. Kolba ngrohet sepse reaksioni është ekzotermik. Vëllimi i gazit rritet shpejt në fillim, pastaj më ngadalë, dhe pastaj ndalon."
    },
    why: {
      q: "Pse reaksioni ngadalësohet dhe pastaj ndalon?",
      answer: 0,
      options: [
        { t: "Reaktantët harxhohen, ndaj ka më pak përplasje të suksesshme në sekondë", fb: "Ndërsa magnezi dhe acidi harxhohen, grimcat e tyre përplasen më rrallë. Kur magnezi mbaron (ose mbaron acidi), nuk mund të prodhohet më hidrogjen." },
        { t: "Gazi hidrogjen e shuan reaksionin, si uji zjarrin", fb: "Hidrogjeni është produkt — nuk e ndalon reaksionin. Shpejtësia varet nga sa shpesh përplasen grimcat e reaktantëve." },
        { t: "Kolba ftohet dhe kjo e ngrin reaksionin", fb: "Në fakt kolba ngrohet sepse reaksioni është ekzotermik. Ngadalësimi ndodh sepse reaktantët po mbarojnë." },
        { t: "Magnezi shndërrohet në hidrogjen", fb: "Në një reaksion kimik atomet nuk shndërrohen në elemente të tjerë. Magnezi bëhet jone Mg²⁺ në klorurin e magnezit; hidrogjeni vjen nga acidi." }
      ]
    },
    hazards: [
      "Gazi hidrogjen është jashtëzakonisht i ndezshëm — nuk duhet të ketë asnjë flakë të hapur afër.",
      "Acidi klorhidrik (1 mol/dm³) mund të dëmtojë sytë dhe të irritojë lëkurën dhe plagët.",
      "Shiriti i magnezit është i ndezshëm nëse nxehet në flakë.",
      "Kolba ngrohet, dhe enët prej qelqi mund të çahen ose të thyhen nëse goditen."
    ],
    precautions: [
      "Mbaj syze mbrojtëse gjatë gjithë eksperimentit.",
      "Mbaji llambat Bunsen dhe shkrepset larg tavolinës tënde.",
      "Përdor magnez të pastër, jo të oksiduar, dhe vetëm përqendrimin e acidit që të jep mësuesi — kurrë më të fortë.",
      "Mos u përkul mbi kolbë dhe mos u përpiq ta nuhatësh gazin.",
      "Nëse acidi të bie në lëkurë, shpëlaje me ujë të rrjedhshëm dhe njofto mësuesin. Nëse të hyn në sy, shpëlaje me ujë që rrjedh butë për të paktën 20 minuta dhe kërko ndihmë."
    ],
    disposal: [
      "Tretësira që mbetet (kryesisht klorur magnezi me pak acid) mund të hollohet me shumë ujë dhe të derdhet në lavaman, sipas rregullave të shkollës.",
      "Ktheja mësuesit magnezin që nuk ka reaguar — mos e hidh në kosh.",
      "Shpëlaj të gjitha enët prej qelqi."
    ],
    supervisionNote: "Vetëm mësuesi mund të demonstrojë testin e ‘kërcitjes’ për hidrogjenin me një ashkël të ndezur."
  }
},

/* ===================== 5. FLAME TESTS ===================== */
{
  id: "flame", icon: "flame", topic: "analysis", grades: "9–12", gmin: 9, gmax: 12,
  supervision: "close", time: 40, eqType: "idea", predictAt: 2,
  ppe: ["goggles", "coat", "hair"],
  demo: { s: "flame", color: "#e11d48", splint: true },
  video: { id: "7IZTFq4Tgzk", title: "Genki Science: Flame Tests! GCSE Chemistry", channel: "Genki Science (Richard Graham)",
    note: { en: "Several metal salts and their flame colours, shown quickly.", sq: "Disa kripëra metalike dhe ngjyrat e flakës së tyre, të treguara shpejt." } },
  sources: [
    { org: "Royal Society of Chemistry", title: "Flame tests using metal salts", url: "https://edu.rsc.org/resources/flame-tests-using-metal-salts/1875.article" }
  ],
  en: {
    name: "Flame Test Colours",
    short: "Metal ions & light",
    hook: "Why do fireworks glow red, yellow and green? Find out with metal salts.",
    aim: "Identify metal ions from the colour they give to a flame, and explain the colours using electrons and energy levels.",
    chemistry: [
      "When a metal salt is heated in a flame, some of its electrons absorb energy and jump up to higher energy levels — they become ‘excited’.",
      "The excited electrons quickly fall back to lower levels and give out the extra energy as light. The energy gaps are different for every element, so each metal ion gives out its own colours of light, like a fingerprint.",
      "Typical colours: lithium – crimson (magenta-red); sodium – bright yellow-orange; potassium – lilac; calcium – orange-red; copper – blue-green. Firework makers use exactly these metals."
    ],
    equation: "electron absorbs energy → jumps up a level → falls back → gives out light of one particular colour",
    equipment: [
      "Bunsen burner on a heat-resistant mat",
      "Wooden splints soaked in metal salt solutions, prepared by your teacher (e.g. lithium, sodium, potassium, calcium and copper(II) chlorides)",
      "Or a nichrome wire loop, cleaned in dilute hydrochloric acid between tests",
      "A beaker of water to put used splints in",
      "Results table and coloured pencils",
      "Safety goggles; long hair tied back"
    ],
    steps: [
      "Put on your goggles, tie back long hair and clear everything flammable off the bench.",
      "Light the Bunsen burner and open the air hole to get a blue flame.",
      "Hold the soaked end of a splint at the edge of the flame for a few seconds only — you don't want the wood itself to catch fire.",
      "Observe the colour carefully and record it straight away.",
      "Put the used splint into the beaker of water. Repeat with each metal salt.",
      "Compare your colours with a reference table. Which metal ions were easiest to identify?",
      "Challenge: your teacher gives you an ‘unknown’ splint. Use your results to identify the metal."
    ],
    predict: {
      q: "A splint soaked in lithium chloride solution is held in the flame. What colour flame do you predict?",
      options: ["Crimson / magenta-red", "Bright yellow", "Lilac (pale purple)", "Blue-green"],
      answer: 0,
      result: "Lithium gives a beautiful crimson (magenta-red) flame. Sodium gives an intense yellow-orange that can hide other colours, potassium a pale lilac, and copper a blue-green flame."
    },
    why: {
      q: "Why does each metal give a different flame colour?",
      answer: 0,
      options: [
        { t: "Each element has different gaps between its electron energy levels, so it gives out light of particular energies (colours)", fb: "When excited electrons fall back down, they release energy as light. The size of the energy gap sets the colour, and every element's gaps are unique." },
        { t: "The metal burns and its smoke is coloured", fb: "The colour isn't smoke or burning metal. It's light given out when electrons drop from higher to lower energy levels." },
        { t: "The chloride part of the salt makes the colour", fb: "All the salts here are chlorides, yet they give different colours — so the colour must come from the metal ion." },
        { t: "The flame gets hotter for some metals", fb: "The flame temperature stays about the same. The colour depends on the metal's electron energy levels, not on how hot the flame is." }
      ]
    },
    hazards: [
      "Bunsen flame: burns, and a risk of setting hair, clothing or paper alight.",
      "Copper(II) chloride is harmful if swallowed and irritates the skin and eyes.",
      "Lithium chloride is harmful if swallowed.",
      "Strontium chloride (if used) can cause serious eye damage.",
      "Spraying solutions into flames or using ethanol or methanol ‘rainbow flame’ set-ups has caused serious accidents — never do this."
    ],
    precautions: [
      "Wear goggles and tie back long hair. Keep sleeves and paper away from the flame.",
      "Hold splints at the edge of the flame for a few seconds only, then put them straight into water.",
      "Use only the solutions your teacher has prepared, and never mix them.",
      "Don't touch your face or eat; wash your hands well afterwards.",
      "Turn the Bunsen to the yellow safety flame, or off, when you are not using it."
    ],
    disposal: [
      "Put used splints in the beaker of water, then in the bin once they are fully wet and cold.",
      "Give metal salt solutions back to your teacher for collection — copper and strontium compounds in particular must not be poured down the sink.",
      "Turn the gas tap fully off at the end."
    ],
    supervisionNote: "The teacher prepares the metal salt solutions and may demonstrate first. Many schools run this as a teacher demonstration."
  },
  sq: {
    name: "Ngjyrat e testit të flakës",
    short: "Jonet metalike dhe drita",
    hook: "Pse fishekzjarrët shkëlqejnë të kuq, të verdhë e jeshilë? Zbuloje me kripëra metalesh.",
    aim: "Identifiko jonet metalike nga ngjyra që i japin flakës dhe shpjego ngjyrat me anë të elektroneve dhe niveleve të energjisë.",
    chemistry: [
      "Kur një kripë metali nxehet në flakë, disa nga elektronet e saj thithin energji dhe kërcejnë në nivele më të larta energjie — bëhen ‘të ngacmuara’.",
      "Elektronet e ngacmuara kthehen shpejt në nivele më të ulëta dhe e lëshojnë energjinë e tepërt si dritë. Diferencat e energjisë janë të ndryshme për çdo element, ndaj çdo jon metalik lëshon ngjyrat e veta të dritës, si një gjurmë gishti.",
      "Ngjyrat tipike: litiumi – e kuqe e thellë (magenta); natriumi – e verdhë-portokalli e ndezur; kaliumi – ngjyrë jargavani; kalciumi – portokalli-e kuqe; bakri – blu-jeshile. Prodhuesit e fishekzjarrëve përdorin pikërisht këto metale."
    ],
    equation: "elektroni thith energji → kërcen një nivel lart → kthehet poshtë → lëshon dritë me një ngjyrë të caktuar",
    equipment: [
      "Llambë Bunsen mbi një pllakë rezistente ndaj nxehtësisë",
      "Ashkla druri të njomura në tretësira kripërash metalike, të përgatitura nga mësuesi (p.sh. klorure të litiumit, natriumit, kaliumit, kalciumit dhe bakrit(II))",
      "Ose një tel nikromi me lak, i pastruar në acid klorhidrik të holluar midis provave",
      "Një gotë me ujë për të futur ashklat e përdorura",
      "Tabelë rezultatesh dhe lapsa me ngjyra",
      "Syze mbrojtëse; flokët e gjata të lidhura"
    ],
    steps: [
      "Vendos syzet, lidh flokët e gjata dhe largo nga tavolina çdo gjë të ndezshme.",
      "Ndiz llambën Bunsen dhe hap vrimën e ajrit për të marrë një flakë blu.",
      "Mbaje fundin e njomur të ashklës në skajin e flakës vetëm për disa sekonda — nuk do që vetë druri të marrë flakë.",
      "Vëzhgo me kujdes ngjyrën dhe shënoje menjëherë.",
      "Fute ashklën e përdorur në gotën me ujë. Përsërite me secilën kripë metali.",
      "Krahaso ngjyrat e tua me një tabelë reference. Cilat jone metalike ishin më të lehta për t'u identifikuar?",
      "Sfidë: mësuesi të jep një ashkël ‘të panjohur’. Përdor rezultatet e tua për të identifikuar metalin."
    ],
    predict: {
      q: "Një ashkël e njomur në tretësirë kloruri litiumi mbahet në flakë. Çfarë ngjyre flake parashikon?",
      options: ["E kuqe e thellë / magenta", "E verdhë e ndezur", "Jargavan (vjollcë e zbehtë)", "Blu-jeshile"],
      answer: 0,
      result: "Litiumi jep një flakë të bukur të kuqe të thellë (magenta). Natriumi jep një ngjyrë të verdhë-portokalli shumë të fortë që mund të fshehë ngjyrat e tjera, kaliumi një jargavan të zbehtë dhe bakri një flakë blu-jeshile."
    },
    why: {
      q: "Pse çdo metal jep një ngjyrë tjetër flake?",
      answer: 0,
      options: [
        { t: "Çdo element ka diferenca të ndryshme midis niveleve të energjisë së elektroneve, ndaj lëshon dritë me energji (ngjyra) të caktuara", fb: "Kur elektronet e ngacmuara kthehen poshtë, çlirojnë energji si dritë. Madhësia e diferencës së energjisë përcakton ngjyrën, dhe diferencat e çdo elementi janë unike." },
        { t: "Metali digjet dhe tymi i tij ka ngjyrë", fb: "Ngjyra nuk është tym apo metal që digjet. Është dritë e lëshuar kur elektronet zbresin nga nivele më të larta në nivele më të ulëta energjie." },
        { t: "Pjesa e klorurit në kripë jep ngjyrën", fb: "Të gjitha kripërat këtu janë klorure, por japin ngjyra të ndryshme — ndaj ngjyra duhet të vijë nga joni metalik." },
        { t: "Flaka nxehet më shumë për disa metale", fb: "Temperatura e flakës mbetet pothuajse e njëjtë. Ngjyra varet nga nivelet e energjisë së elektroneve të metalit, jo nga sa e nxehtë është flaka." }
      ]
    },
    hazards: [
      "Flaka e Bunsen-it: djegie dhe rrezik që të marrin flakë flokët, rrobat ose letra.",
      "Kloruri i bakrit(II) është i dëmshëm nëse gëlltitet dhe irriton lëkurën dhe sytë.",
      "Kloruri i litiumit është i dëmshëm nëse gëlltitet.",
      "Kloruri i stronciumit (nëse përdoret) mund të shkaktojë dëmtim serioz të syve.",
      "Spërkatja e tretësirave në flakë ose përdorimi i etanolit apo metanolit për ‘flakën ylber’ ka shkaktuar aksidente të rënda — mos e bëj kurrë këtë."
    ],
    precautions: [
      "Mbaj syze mbrojtëse dhe lidh flokët e gjata. Mbaji mëngët dhe letrat larg flakës.",
      "Mbaji ashklat në skajin e flakës vetëm për disa sekonda, pastaj futi menjëherë në ujë.",
      "Përdor vetëm tretësirat që ka përgatitur mësuesi dhe mos i përziej kurrë.",
      "Mos prek fytyrën dhe mos ha; laj mirë duart në fund.",
      "Kthe llambën Bunsen në flakën e verdhë të sigurisë, ose fike, kur nuk e përdor."
    ],
    disposal: [
      "Fut ashklat e përdorura në gotën me ujë, pastaj në kosh kur të jenë plotësisht të lagura dhe të ftohta.",
      "Ktheja mësuesit tretësirat e kripërave metalike për grumbullim — sidomos përbërjet e bakrit dhe të stronciumit nuk duhen derdhur në lavaman.",
      "Mbyll plotësisht rubinetin e gazit në fund."
    ],
    supervisionNote: "Mësuesi përgatit tretësirat e kripërave metalike dhe mund të demonstrojë fillimisht. Shumë shkolla e bëjnë si demonstrim nga mësuesi."
  }
},

/* ===================== 6. ACID–BASE TITRATION ===================== */
{
  id: "titration", icon: "burette", topic: "acids", grades: "10–12", gmin: 10, gmax: 12,
  supervision: "supervised", time: 50, eqType: "equation", predictAt: 3,
  ppe: ["goggles", "coat"],
  demo: { s: "beaker", from: "#f472b6", to: "#f8fafc", burette: true },
  video: { id: "nszLc2Pdij0", title: "Acid Base Titration with Phenolphthalein", channel: "AUGCHEM",
    note: { en: "The moment the pink colour appears or disappears at the end point.", sq: "Momenti kur ngjyra rozë shfaqet ose zhduket në pikën përfundimtare." } },
  sources: [
    { org: "Royal Society of Chemistry", title: "Simple titration — practical videos, 14–16 years (recommends this video)", url: "https://edu.rsc.org/practical/simple-titration-practical-videos-14-16-students/4011981.article" },
    { org: "Royal Society of Chemistry", title: "A microscale acid–base titration (NaOH + HCl)", url: "https://edu.rsc.org/experiments/a-microscale-acid-base-titration/536.article" },
    { org: "CLEAPSS", title: "Student Safety Sheet 31: Sodium hydroxide (PDF)", url: "https://science.cleapss.org.uk/resource/sss031-sodium-hydroxide.pdf" }
  ],
  en: {
    name: "Neutralisation Titration",
    short: "Acids & alkalis",
    hook: "Find the exact moment an acid cancels out an alkali — one drop at a time.",
    aim: "Use an acid–alkali titration to find exactly what volume of hydrochloric acid neutralises 25.0 cm³ of sodium hydroxide solution, then calculate its concentration.",
    chemistry: [
      "Acids release hydrogen ions (H⁺) in water; alkalis such as sodium hydroxide release hydroxide ions (OH⁻). When they meet, they react to make water: H⁺ + OH⁻ → H₂O. This is neutralisation.",
      "Phenolphthalein indicator is pink in alkaline solutions (above about pH 8.2) and colourless in neutral or acidic ones. The end point is the moment one drop of acid makes the pink colour disappear for good.",
      "HCl and NaOH react in a 1 : 1 ratio, so at the end point moles of acid = moles of alkali. Since moles = concentration × volume (in dm³), you can work out an unknown concentration."
    ],
    equation: "HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l)",
    equipment: [
      "50 cm³ burette, small funnel, clamp stand and a white tile",
      "25.0 cm³ pipette with a pipette filler (never pipette by mouth)",
      "250 cm³ conical flask",
      "Dilute hydrochloric acid, 0.10 mol/dm³",
      "Sodium hydroxide solution, about 0.1 mol/dm³ (irritant)",
      "Phenolphthalein indicator (flammable)",
      "Wash bottle of distilled or deionised water",
      "Safety goggles"
    ],
    steps: [
      "Put on goggles. Rinse the burette with a little acid, then fill it using the funnel — below eye level. Remove the funnel and run a little acid through so there are no air bubbles in the tip.",
      "Read the starting volume at the bottom of the meniscus, with your eye level with the liquid.",
      "Use the pipette and filler to transfer 25.0 cm³ of sodium hydroxide into the conical flask. Add 2–3 drops of phenolphthalein.",
      "Stand the flask on the white tile. Add acid from the burette while swirling the flask.",
      "When the pink starts to fade more slowly, add the acid drop by drop. Stop when one drop turns the solution colourless.",
      "Record the final reading. Titre = final reading − starting reading. Your first go is a rough titration.",
      "Repeat until two titres agree within 0.10 cm³ (concordant results). Calculate the mean titre and the concentration of the NaOH."
    ],
    predict: {
      q: "The sodium hydroxide with phenolphthalein is pink. What will happen as you add acid up to the end point?",
      options: ["The pink colour disappears and the solution becomes colourless", "It turns dark blue", "It becomes a deeper pink", "It turns green and fizzes"],
      answer: 0,
      result: "The pink fades, flashes back when you swirl, and then — with one final drop — vanishes completely. A typical result: about 25 cm³ of 0.10 mol/dm³ acid neutralises 25.0 cm³ of the NaOH, so the alkali is also about 0.10 mol/dm³."
    },
    why: {
      q: "Why does the pink colour disappear at the end point?",
      answer: 0,
      options: [
        { t: "All the OH⁻ ions have reacted with H⁺ to make water, so the solution is no longer alkaline", fb: "Phenolphthalein is pink only above about pH 8.2. Once the hydroxide ions are used up, the indicator switches to its colourless form." },
        { t: "The acid bleaches the indicator and destroys it", fb: "The indicator isn't destroyed — add one drop of alkali and the pink comes straight back. It's a reversible colour change controlled by pH." },
        { t: "The extra water dilutes the pink until you can't see it", fb: "The volume only roughly doubles — not nearly enough to hide the colour. The sudden change happens because the solution stops being alkaline." },
        { t: "Salt crystals form and hide the colour", fb: "Sodium chloride is made, but it stays dissolved and is colourless. The colour change is caused by the change in pH." }
      ]
    },
    hazards: [
      "Sodium hydroxide is especially dangerous to the eyes. At about 0.1 mol/dm³ it can irritate eyes and skin; stronger solutions (0.5 mol/dm³ and above) are corrosive.",
      "Hydrochloric acid can damage the eyes and irritate the skin.",
      "Phenolphthalein solution is flammable because it is dissolved in ethanol.",
      "Filling a burette above head height can cause spills into your face, and broken glass can cut."
    ],
    precautions: [
      "Wear goggles at all times — even when you are just reading the burette.",
      "Fill the burette below eye level (lower it in the clamp or stand it on the floor) and use a funnel.",
      "Always use a pipette filler. Never pipette by mouth.",
      "Keep the indicator away from flames.",
      "If any solution gets in your eye, rinse with gently running water for at least 20 minutes and tell your teacher."
    ],
    disposal: [
      "Neutralised solutions are mostly salty water — dilute them with plenty of water and pour them down the sink.",
      "Leftover acid and alkali: return them to your teacher, or neutralise and dilute them as instructed.",
      "Rinse the burette and pipette with water and leave them to drain."
    ],
    supervisionNote: "Students must first be shown how to use a burette and pipette safely."
  },
  sq: {
    name: "Titrimi i neutralizimit",
    short: "Acidet dhe alkalet",
    hook: "Gjej momentin e saktë kur një acid neutralizon një alkal — pikë pas pike.",
    aim: "Përdor një titrim acid–alkal për të gjetur saktësisht çfarë vëllimi acidi klorhidrik neutralizon 25.0 cm³ tretësirë hidroksidi natriumi, pastaj llogarit përqendrimin e saj.",
    chemistry: [
      "Acidet çlirojnë jone hidrogjeni (H⁺) në ujë; alkalet si hidroksidi i natriumit çlirojnë jone hidroksid (OH⁻). Kur takohen, reagojnë dhe formojnë ujë: H⁺ + OH⁻ → H₂O. Ky është neutralizimi.",
      "Indikatori fenolftaleinë është rozë në tretësira alkaline (mbi rreth pH 8.2) dhe i pangjyrë në tretësira neutrale ose acide. Pika përfundimtare është momenti kur një pikë acidi e zhduk përgjithmonë ngjyrën rozë.",
      "HCl dhe NaOH reagojnë në raportin 1 : 1, ndaj në pikën përfundimtare molet e acidit = molet e alkalit. Meqë molet = përqendrimi × vëllimi (në dm³), mund të llogarisësh një përqendrim të panjohur."
    ],
    equation: "HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l)",
    equipment: [
      "Buretë 50 cm³, hinkë e vogël, stativ dhe një pllakë e bardhë",
      "Pipetë 25.0 cm³ me mbushës pipete (kurrë mos thith me gojë)",
      "Kolbë konike 250 cm³",
      "Acid klorhidrik i holluar, 0.10 mol/dm³",
      "Tretësirë hidroksidi natriumi, rreth 0.1 mol/dm³ (irritues)",
      "Indikator fenolftaleinë (i ndezshëm)",
      "Shishe larëse me ujë të distiluar ose të dejonizuar",
      "Syze mbrojtëse"
    ],
    steps: [
      "Vendos syzet mbrojtëse. Shpëlaje buretën me pak acid, pastaj mbushe me hinkë — poshtë nivelit të syve. Hiqe hinkën dhe lësho pak acid që maja të mos ketë flluska ajri.",
      "Lexo vëllimin fillestar në fund të meniskut, me sytë në nivel me lëngun.",
      "Me pipetën dhe mbushësin, kalo 25.0 cm³ hidroksid natriumi në kolbën konike. Shto 2–3 pika fenolftaleinë.",
      "Vendose kolbën mbi pllakën e bardhë. Shto acid nga bureta ndërsa e tund kolbën në rrethe.",
      "Kur ngjyra rozë fillon të zbehet më ngadalë, shto acidin pikë-pikë. Ndalo kur një pikë e bën tretësirën të pangjyrë.",
      "Shëno leximin përfundimtar. Titri = leximi përfundimtar − leximi fillestar. Prova jote e parë është titrim i përafërt.",
      "Përsërite derisa dy titra të përputhen brenda 0.10 cm³ (rezultate konkordante). Llogarit titrin mesatar dhe përqendrimin e NaOH."
    ],
    predict: {
      q: "Hidroksidi i natriumit me fenolftaleinë është rozë. Çfarë do të ndodhë ndërsa shton acid deri në pikën përfundimtare?",
      options: ["Ngjyra rozë zhduket dhe tretësira bëhet e pangjyrë", "Bëhet blu e errët", "Bëhet rozë më e thellë", "Bëhet jeshile dhe shkumëzon"],
      answer: 0,
      result: "Ngjyra rozë zbehet, rikthehet për një çast kur e tund, dhe pastaj — me një pikë të fundit — zhduket plotësisht. Një rezultat tipik: rreth 25 cm³ acid 0.10 mol/dm³ neutralizon 25.0 cm³ NaOH, ndaj edhe alkali është rreth 0.10 mol/dm³."
    },
    why: {
      q: "Pse zhduket ngjyra rozë në pikën përfundimtare?",
      answer: 0,
      options: [
        { t: "Të gjithë jonet OH⁻ kanë reaguar me H⁺ dhe kanë formuar ujë, ndaj tretësira nuk është më alkaline", fb: "Fenolftaleina është rozë vetëm mbi rreth pH 8.2. Sapo jonet hidroksid harxhohen, indikatori kalon në formën e tij të pangjyrë." },
        { t: "Acidi e zbardh indikatorin dhe e shkatërron", fb: "Indikatori nuk shkatërrohet — shto një pikë alkali dhe rozëja kthehet menjëherë. Është një ndryshim ngjyre i kthyeshëm që varet nga pH." },
        { t: "Uji shtesë e hollon rozën derisa nuk shihet më", fb: "Vëllimi vetëm sa dyfishohet përafërsisht — jo aq sa të fshehë ngjyrën. Ndryshimi i papritur ndodh sepse tretësira pushon së qeni alkaline." },
        { t: "Formohen kristale kripe që e fshehin ngjyrën", fb: "Formohet klorur natriumi, por ai mbetet i tretur dhe është i pangjyrë. Ndryshimi i ngjyrës shkaktohet nga ndryshimi i pH." }
      ]
    },
    hazards: [
      "Hidroksidi i natriumit është veçanërisht i rrezikshëm për sytë. Në rreth 0.1 mol/dm³ mund të irritojë sytë dhe lëkurën; tretësirat më të forta (0.5 mol/dm³ e lart) janë gërryese.",
      "Acidi klorhidrik mund të dëmtojë sytë dhe të irritojë lëkurën.",
      "Tretësira e fenolftaleinës është e ndezshme sepse është e tretur në etanol.",
      "Mbushja e buretës mbi lartësinë e kokës mund të shkaktojë derdhje në fytyrë, dhe qelqi i thyer mund të presë."
    ],
    precautions: [
      "Mbaj syze mbrojtëse gjatë gjithë kohës — edhe kur thjesht lexon buretën.",
      "Mbushe buretën poshtë nivelit të syve (ule në kapëse ose vendose në dysheme) dhe përdor hinkë.",
      "Përdor gjithmonë mbushës pipete. Kurrë mos thith me gojë.",
      "Mbaje indikatorin larg flakës.",
      "Nëse ndonjë tretësirë të hyn në sy, shpëlaje me ujë që rrjedh butë për të paktën 20 minuta dhe njofto mësuesin."
    ],
    disposal: [
      "Tretësirat e neutralizuara janë kryesisht ujë me kripë — holloji me shumë ujë dhe derdhi në lavaman.",
      "Acidi dhe alkali i mbetur: ktheja mësuesit, ose neutralizoji dhe holloji sipas udhëzimeve.",
      "Shpëlaj buretën dhe pipetën me ujë dhe lëri të kullojnë."
    ],
    supervisionNote: "Nxënësve duhet t'u tregohet fillimisht si të përdorin me siguri buretën dhe pipetën."
  }
}
];
