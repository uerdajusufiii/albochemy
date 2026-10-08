"use strict";
/* ---------- New experiments for grades 7–9 ---------- */
const EXP_JUNIOR = [
/* ===== Balloon blow-up ===== */
{
  id: "balloon", icon: "balloon", topic: "reactions", grades: "7–8", gmin: 7, gmax: 8,
  supervision: "supervised", time: 20, eqType: "equation", predictAt: 3, ppe: ["goggles"],
  demo: { s: "balloon", from: "#e0f2fe" },
  video: null,
  sources: [
    { org: "AACT (American Chemical Society)", title: "Inflating a balloon with chemistry", url: "https://teachchemistry.org/classroom-resources/inflating-a-balloon-with-chemistry" },
    { org: "American Chemical Society", title: "More than hot air (PDF activity)", url: "https://www.acs.org/content/dam/acsorg/education/outreach/kidschemistry/activities/more-than-hot-air.pdf" }
  ],
  en: {
    name: "Balloon Blow-Up", short: "Gas from a reaction",
    hook: "Inflate a balloon without blowing — just with a chemical reaction.",
    aim: "Show that mixing baking soda and vinegar produces a gas, and use that gas to inflate a balloon.",
    chemistry: [
      "Baking soda is sodium hydrogencarbonate, a carbonate compound. Vinegar contains ethanoic (acetic) acid. When an acid meets a carbonate, they react and make a salt, water and carbon dioxide gas.",
      "The carbon dioxide takes up much more space than the solids and liquids it came from. Trapped in the bottle, the gas has nowhere to go except into the balloon, so the balloon inflates."
    ],
    equation: "NaHCO₃ + CH₃COOH → CH₃COONa + H₂O + CO₂",
    equipment: ["Small plastic bottle (about 500 mL)", "100 mL white vinegar", "2 teaspoons of baking soda", "A balloon (latex-free if anyone is allergic)", "Small funnel", "Tray to work on", "Safety goggles"],
    steps: [
      "Put on goggles. Stretch the balloon a few times so it inflates easily.",
      "Use the funnel to put 2 teaspoons of baking soda inside the balloon.",
      "Pour 100 mL of vinegar into the bottle, standing on the tray.",
      "Stretch the neck of the balloon over the bottle top, keeping the balloon hanging to the side so no powder falls in yet.",
      "Lift the balloon upright so the baking soda falls into the vinegar.",
      "Watch the fizzing and the balloon. Feel the bottom of the bottle — is it warmer or colder?"
    ],
    predict: { q: "What will happen when the baking soda drops into the vinegar?", options: ["It fizzes and the balloon inflates", "Nothing happens", "The balloon is sucked into the bottle", "The vinegar turns solid"], answer: 0,
      result: "The mixture fizzes strongly and the balloon slowly stands up and inflates as carbon dioxide fills it. The bottle feels slightly cooler — this reaction takes in a little heat." },
    why: { q: "Where does the gas inside the balloon come from?", answer: 0, options: [
      { t: "A chemical reaction between the acid and the carbonate makes carbon dioxide", fb: "Acid + carbonate → salt + water + carbon dioxide. A new substance (a gas) has formed, which is a sign of a chemical reaction." },
      { t: "Air was hiding in the baking soda powder", fb: "There is only a tiny amount of air between the grains — far too little to inflate a balloon. The gas is made by the reaction." },
      { t: "The vinegar evaporates very quickly", fb: "Vinegar is mostly water and doesn't evaporate fast at room temperature. The gas is carbon dioxide from the reaction." },
      { t: "The balloon stretches by itself", fb: "A balloon only inflates when gas is pushed into it. Here the gas comes from the reaction in the bottle." }
    ] },
    hazards: ["Vinegar stings if it gets in your eyes.", "The balloon can pop off the bottle and spray liquid if too much powder is used.", "Latex balloons can trigger allergies in some people."],
    precautions: ["Wear goggles and stick to the amounts given.", "Point the bottle away from faces.", "Use latex-free balloons if anyone in the room has a latex allergy.", "Wash your hands at the end."],
    disposal: ["The liquid can go down the sink with plenty of water.", "Put the balloon in the bin and rinse the bottle."],
    supervisionNote: "Low-hazard activity, but the teacher should check the amounts before students start."
  },
  sq: {
    name: "Tullumbacja që fryhet vetë", short: "Gaz nga një reaksion",
    hook: "Fryj një tullumbace pa e fryrë me gojë — vetëm me një reaksion kimik.",
    aim: "Trego se përzierja e sodës së bukës me uthull prodhon një gaz dhe përdore këtë gaz për të fryrë një tullumbace.",
    chemistry: [
      "Soda e bukës është hidrogjenkarbonat natriumi, një përbërje karbonati. Uthulla përmban acid etanoik (acetik). Kur një acid takon një karbonat, ata reagojnë dhe formojnë një kripë, ujë dhe gaz dioksid karboni.",
      "Dioksidi i karbonit zë shumë më tepër vend se lëndët e ngurta dhe lëngjet nga vjen. I mbyllur në shishe, gazi nuk ka ku të shkojë përveçse në tullumbace, ndaj tullumbacja fryhet."
    ],
    equation: "NaHCO₃ + CH₃COOH → CH₃COONa + H₂O + CO₂",
    equipment: ["Shishe e vogël plastike (rreth 500 mL)", "100 mL uthull e bardhë", "2 lugë çaji sodë buke", "Një tullumbace (pa lateks nëse dikush është alergjik)", "Hinkë e vogël", "Tabaka për të punuar", "Syze mbrojtëse"],
    steps: [
      "Vendos syzet. Tërhiq tullumbacen disa herë që të fryhet më lehtë.",
      "Me hinkën, vendos 2 lugë çaji sodë buke brenda tullumbaces.",
      "Hidh 100 mL uthull në shishen që qëndron mbi tabaka.",
      "Vendos grykën e tullumbaces mbi kapakun e shishes, duke e mbajtur tullumbacen anash që pluhuri të mos bjerë ende.",
      "Ngrije tullumbacen drejt që soda e bukës të bjerë në uthull.",
      "Vëzhgo shkumëzimin dhe tullumbacen. Prek fundin e shishes — a është më e ngrohtë apo më e ftohtë?"
    ],
    predict: { q: "Çfarë do të ndodhë kur soda e bukës bie në uthull?", options: ["Shkumëzon dhe tullumbacja fryhet", "Nuk ndodh asgjë", "Tullumbacja thithet brenda shishes", "Uthulla ngurtësohet"], answer: 0,
      result: "Përzierja shkumëzon fort dhe tullumbacja ngrihet ngadalë dhe fryhet ndërsa e mbush dioksidi i karbonit. Shishja ndihet pak më e ftohtë — ky reaksion thith pak nxehtësi." },
    why: { q: "Nga vjen gazi brenda tullumbaces?", answer: 0, options: [
      { t: "Një reaksion kimik midis acidit dhe karbonatit prodhon dioksid karboni", fb: "Acid + karbonat → kripë + ujë + dioksid karboni. Është formuar një substancë e re (një gaz), që është shenjë e një reaksioni kimik." },
      { t: "Ajri ishte i fshehur në pluhurin e sodës", fb: "Midis kokrrizave ka vetëm pak ajër — shumë pak për të fryrë një tullumbace. Gazi prodhohet nga reaksioni." },
      { t: "Uthulla avullon shumë shpejt", fb: "Uthulla është kryesisht ujë dhe nuk avullon shpejt në temperaturën e dhomës. Gazi është dioksid karboni nga reaksioni." },
      { t: "Tullumbacja zgjatet vetvetiu", fb: "Një tullumbace fryhet vetëm kur futet gaz në të. Këtu gazi vjen nga reaksioni në shishe." }
    ] },
    hazards: ["Uthulla të djeg nëse të hyn në sy.", "Tullumbacja mund të shkëputet nga shishja dhe të spërkasë lëng nëse përdoret shumë pluhur.", "Tullumbacet prej lateksi mund të shkaktojnë alergji te disa njerëz."],
    precautions: ["Mbaj syze mbrojtëse dhe respekto sasitë e dhëna.", "Mbaje shishen larg fytyrave.", "Përdor tullumbace pa lateks nëse dikush në klasë ka alergji ndaj lateksit.", "Laj duart në fund."],
    disposal: ["Lëngu mund të derdhet në lavaman me shumë ujë.", "Hidhe tullumbacen në kosh dhe shpëlaj shishen."],
    supervisionNote: "Aktivitet me rrezik të ulët, por mësuesi duhet të kontrollojë sasitë para se të fillojnë nxënësit."
  }
},

/* ===== Density rainbow ===== */
{
  id: "density", icon: "layers", topic: "matter", grades: "7–8", gmin: 7, gmax: 8,
  supervision: "supervised", time: 25, eqType: "equation", predictAt: 2, ppe: ["goggles"],
  demo: { s: "beaker", layers: ["#b45309", "#16a34a", "#3b82f6", "#facc15"], level: 0.7 },
  video: { id: "IhrGjMn5UXU", title: "Easy water experiment: rainbow density tower", channel: "KiwiCo",
    note: { en: "A rainbow tower of coloured layers — the same density idea.", sq: "Një kullë ylberi me shtresa me ngjyra — e njëjta ide e dendësisë." } },
  sources: [
    { org: "Birmingham Museums", title: "Kitchen Science: Density Tower", url: "https://www.birminghammuseums.org.uk/resources/kitchen-science-density-tower-2" }
  ],
  en: {
    name: "Density Rainbow", short: "Density & layers",
    hook: "Stack four liquids into a rainbow tower that doesn't mix.",
    aim: "Compare the densities of everyday liquids by layering them in a tall glass, from most dense at the bottom to least dense at the top.",
    chemistry: [
      "Density tells us how much mass is packed into a certain volume. A liquid with more mass in the same volume is denser, so it sinks below less dense liquids.",
      "Honey is very dense because it is mostly sugar dissolved in a little water. Oil is less dense than water and does not mix with it, so it floats on top. Pouring slowly lets the layers settle without mixing."
    ],
    equation: "density = mass ÷ volume  (g/cm³)",
    equipment: ["Tall clear glass or measuring cylinder", "Honey (or golden syrup)", "Green washing-up liquid", "Water with blue food colouring", "Vegetable oil", "Spoon and 4 small cups", "Safety goggles"],
    steps: [
      "Put on goggles. Pour about 2 cm of honey into the bottom of the glass, without touching the sides.",
      "Slowly add the same amount of washing-up liquid, pouring it down the inside of the glass.",
      "Hold a spoon just above the last layer and pour the blue water gently onto the back of the spoon.",
      "Add the oil the same way, very slowly.",
      "Look at the layers from the side and draw them in order.",
      "Drop in small objects (a grape, a bead, a piece of pasta) and see which layer each one stops at."
    ],
    predict: { q: "In which order will the four liquids settle, from bottom to top?", options: ["Honey, washing-up liquid, water, oil", "Oil, water, washing-up liquid, honey", "They will all mix into one colour", "Water, honey, oil, washing-up liquid"], answer: 0,
      result: "From the bottom: golden honey, green washing-up liquid, blue water and yellow oil on top. Small objects sink until they reach a liquid that is denser than they are, then float there." },
    why: { q: "Why does the oil stay on top of the water?", answer: 0, options: [
      { t: "Oil is less dense than water and doesn't mix with it", fb: "Each cm³ of oil has less mass than a cm³ of water, so it floats. Oil and water also don't mix, so a clear boundary forms." },
      { t: "Oil is lighter in colour", fb: "Colour has nothing to do with sinking or floating. What matters is density — mass per volume." },
      { t: "The oil was poured last", fb: "Order helps keep layers neat, but if you poured the oil first, the water would still sink beneath it." },
      { t: "Oil is a gas", fb: "Oil is a liquid. It floats because it is less dense than water." }
    ] },
    hazards: ["Spilled oil, honey and soap make floors and benches very slippery.", "Washing-up liquid stings if it gets in your eyes."],
    precautions: ["Work on a tray and wipe up spills straight away.", "Never taste anything used in a science lesson.", "Wash your hands at the end."],
    disposal: ["Small amounts can be washed down the sink with plenty of hot water and washing-up liquid.", "Wipe oily glassware with paper towel before washing."],
    supervisionNote: "Low-hazard activity — the main risk is slipping on spills."
  },
  sq: {
    name: "Ylberi i dendësisë", short: "Dendësia dhe shtresat",
    hook: "Rendit katër lëngje në një kullë ylberi që nuk përzihen.",
    aim: "Krahaso dendësitë e lëngjeve të përditshme duke i vendosur në shtresa në një gotë të lartë, nga më i dendur poshtë te më pak i dendur sipër.",
    chemistry: [
      "Dendësia na tregon sa masë është e paketuar në një vëllim të caktuar. Një lëng me më shumë masë në të njëjtin vëllim është më i dendur, ndaj zhytet poshtë lëngjeve më pak të dendura.",
      "Mjalti është shumë i dendur sepse është kryesisht sheqer i tretur në pak ujë. Vaji është më pak i dendur se uji dhe nuk përzihet me të, ndaj noton sipër. Derdhja e ngadaltë i lejon shtresat të vendosen pa u përzier."
    ],
    equation: "dendësia = masa ÷ vëllimi  (g/cm³)",
    equipment: ["Gotë e lartë transparente ose cilindër matës", "Mjaltë (ose shurup)", "Detergjent enësh i gjelbër", "Ujë me ngjyrues ushqimor blu", "Vaj vegjetal", "Lugë dhe 4 gota të vogla", "Syze mbrojtëse"],
    steps: [
      "Vendos syzet. Hidh rreth 2 cm mjaltë në fund të gotës, pa prekur anët.",
      "Shto ngadalë të njëjtën sasi detergjenti, duke e derdhur përgjatë anës së brendshme të gotës.",
      "Mbaj një lugë pak mbi shtresën e fundit dhe derdh ujin blu butë mbi pjesën e pasme të lugës.",
      "Shto vajin në të njëjtën mënyrë, shumë ngadalë.",
      "Shiko shtresat nga ana dhe vizatoji sipas radhës.",
      "Hidh objekte të vogla (një rrush, një rruazë, një copë makarona) dhe shiko në cilën shtresë ndalon secili."
    ],
    predict: { q: "Në çfarë radhe do të vendosen katër lëngjet, nga poshtë lart?", options: ["Mjaltë, detergjent, ujë, vaj", "Vaj, ujë, detergjent, mjaltë", "Do të përzihen të gjitha në një ngjyrë", "Ujë, mjaltë, vaj, detergjent"], answer: 0,
      result: "Nga poshtë: mjalti i artë, detergjenti i gjelbër, uji blu dhe vaji i verdhë sipër. Objektet e vogla zhyten derisa arrijnë një lëng më të dendur se vetja, pastaj notojnë aty." },
    why: { q: "Pse vaji qëndron mbi ujë?", answer: 0, options: [
      { t: "Vaji është më pak i dendur se uji dhe nuk përzihet me të", fb: "Çdo cm³ vaj ka më pak masë se një cm³ ujë, ndaj noton. Vaji dhe uji gjithashtu nuk përzihen, ndaj formohet një kufi i qartë." },
      { t: "Vaji ka ngjyrë më të çelët", fb: "Ngjyra nuk ka lidhje me zhytjen ose notimin. Ajo që ka rëndësi është dendësia — masa për njësi vëllimi." },
      { t: "Vaji u derdh i fundit", fb: "Radha ndihmon që shtresat të jenë të rregullta, por edhe nëse do ta derdhje vajin të parin, uji do të zhytej poshtë tij." },
      { t: "Vaji është gaz", fb: "Vaji është lëng. Noton sepse është më pak i dendur se uji." }
    ] },
    hazards: ["Vaji, mjalti dhe sapuni i derdhur e bëjnë dyshemenë dhe tavolinat shumë të rrëshqitshme.", "Detergjenti të djeg nëse të hyn në sy."],
    precautions: ["Puno mbi një tabaka dhe fshi menjëherë çdo derdhje.", "Mos shijo kurrë asgjë që përdoret në orën e shkencës.", "Laj duart në fund."],
    disposal: ["Sasitë e vogla mund të shpëlahen në lavaman me shumë ujë të nxehtë dhe detergjent.", "Fshi enët me vaj me letër kuzhine para se t'i lash."],
    supervisionNote: "Aktivitet me rrezik të ulët — rreziku kryesor është rrëshqitja nga derdhjet."
  }
},

/* ===== Diffusion race ===== */
{
  id: "diffusion", icon: "drop", topic: "matter", grades: "7–8", gmin: 7, gmax: 8,
  supervision: "supervised", time: 15, eqType: "idea", predictAt: 3, ppe: ["goggles"],
  demo: { s: "beaker", from: "#e0f2fe", to: "#c4b5fd", drop: "#7c3aed", temp: "up" },
  video: { id: "lmqTVY5xePE", title: "Food Coloring in Hot and Cold Water Experiment", channel: "Kimberly Scott Science",
    note: { en: "Hot and cold water side by side — exactly what this activity compares.", sq: "Ujë i nxehtë dhe i ftohtë krah për krah — pikërisht ajo që krahason ky aktivitet." } },
  sources: [
    { org: "American Chemical Society", title: "Middle School Chemistry, Lesson 1.2: Molecules in Motion", url: "https://www.acs.org/middleschoolchemistry/lessonplans/chapter1/lesson2.html" }
  ],
  en: {
    name: "Diffusion Race", short: "Moving particles",
    hook: "Hot or cold — which water spreads food colouring faster?",
    aim: "Compare how quickly food colouring spreads (diffuses) through hot and cold water, and link it to how fast particles move.",
    chemistry: [
      "Water is made of tiny particles (molecules) that are always moving and bumping into each other. Those bumps push the food colouring particles around until they are spread evenly — this is diffusion.",
      "In hot water the water molecules have more energy and move faster, so they bump the colouring around more quickly. In cold water they move more slowly, so the colour spreads more slowly."
    ],
    equation: "higher temperature → particles move faster → faster diffusion",
    equipment: ["Two identical clear cups or beakers", "Hot water from the tap (not boiling — handled by the teacher)", "Cold water (add an ice cube beforehand)", "Food colouring with a dropper", "Thermometer", "Timer", "Safety goggles"],
    steps: [
      "Put on goggles. Fill one cup with cold water and the other with hot water to the same level.",
      "Measure and record the temperature of each cup.",
      "Let the water settle for one minute so it is completely still.",
      "Add one drop of food colouring to the middle of each cup at the same moment. Don't stir!",
      "Start the timer and watch from the side. Note what the colour looks like after 30 s, 1 min and 3 min.",
      "Record which cup becomes evenly coloured first."
    ],
    predict: { q: "In which cup will the food colouring spread out faster?", options: ["The hot water", "The cold water", "Both at exactly the same speed", "Neither — it stays as one drop"], answer: 0,
      result: "In the hot water the colour swirls and spreads through the whole cup within a minute or two. In the cold water it sinks slowly in a thin trail and takes much longer to spread." },
    why: { q: "Why does the colour spread faster in hot water?", answer: 0, options: [
      { t: "The water particles move faster and bump the colouring around more", fb: "Higher temperature means more kinetic energy, so particles move and collide faster — the colouring is mixed more quickly." },
      { t: "Hot water is less wet", fb: "Hot and cold water are the same substance. The difference is how fast the particles move." },
      { t: "The food colouring reacts with hot water", fb: "No new substance is made — the colour stays the same. It's just spreading faster." },
      { t: "Cold water particles don't move at all", fb: "Particles in cold water still move — just more slowly. That's why the colour spreads eventually." }
    ] },
    hazards: ["Hot water can scald.", "Food colouring stains skin, clothes and benches."],
    precautions: ["Only the teacher pours the hot water; use tap-hot water, never boiling.", "Keep cups away from the edge of the bench.", "Wear goggles and wipe up spills straight away."],
    disposal: ["Pour the coloured water down the sink.", "Rinse the cups."],
    supervisionNote: "The teacher handles the hot water."
  },
  sq: {
    name: "Gara e difuzionit", short: "Grimcat në lëvizje",
    hook: "I nxehtë apo i ftohtë — cili ujë e përhap më shpejt ngjyruesin ushqimor?",
    aim: "Krahaso sa shpejt përhapet (difundon) ngjyruesi ushqimor në ujë të nxehtë dhe të ftohtë, dhe lidhe këtë me shpejtësinë e lëvizjes së grimcave.",
    chemistry: [
      "Uji përbëhet nga grimca shumë të vogla (molekula) që lëvizin vazhdimisht dhe përplasen me njëra-tjetrën. Këto përplasje i shtyjnë grimcat e ngjyruesit derisa të shpërndahen në mënyrë të barabartë — ky është difuzioni.",
      "Në ujë të nxehtë molekulat kanë më shumë energji dhe lëvizin më shpejt, ndaj e shtyjnë ngjyruesin më shpejt. Në ujë të ftohtë ato lëvizin më ngadalë, ndaj ngjyra përhapet më ngadalë."
    ],
    equation: "temperaturë më e lartë → grimcat lëvizin më shpejt → difuzion më i shpejtë",
    equipment: ["Dy gota ose gota kimike të njëjta transparente", "Ujë i nxehtë nga rubineti (jo i vluar — e trajton mësuesi)", "Ujë i ftohtë (shto më parë një kub akulli)", "Ngjyrues ushqimor me pikatore", "Termometër", "Kohëmatës", "Syze mbrojtëse"],
    steps: [
      "Vendos syzet. Mbush një gotë me ujë të ftohtë dhe tjetrën me ujë të nxehtë deri në të njëjtin nivel.",
      "Mat dhe shëno temperaturën e secilës gotë.",
      "Lëre ujin të qetësohet për një minutë që të jetë plotësisht i palëvizshëm.",
      "Shto një pikë ngjyruesi në mes të secilës gotë në të njëjtin moment. Mos e përziej!",
      "Nis kohëmatësin dhe vëzhgo nga ana. Shëno si duket ngjyra pas 30 s, 1 min dhe 3 min.",
      "Shëno cila gotë ngjyroset e para në mënyrë të barabartë."
    ],
    predict: { q: "Në cilën gotë do të përhapet më shpejt ngjyruesi?", options: ["Në ujin e nxehtë", "Në ujin e ftohtë", "Në të dyja me të njëjtën shpejtësi", "Në asnjërën — mbetet një pikë"], answer: 0,
      result: "Në ujin e nxehtë ngjyra rrotullohet dhe përhapet në të gjithë gotën brenda një-dy minutash. Në ujin e ftohtë ajo zhytet ngadalë si një fije e hollë dhe përhapet shumë më vonë." },
    why: { q: "Pse ngjyra përhapet më shpejt në ujë të nxehtë?", answer: 0, options: [
      { t: "Grimcat e ujit lëvizin më shpejt dhe e shtyjnë më shumë ngjyruesin", fb: "Temperatura më e lartë do të thotë më shumë energji kinetike, ndaj grimcat lëvizin dhe përplasen më shpejt — ngjyruesi përzihet më shpejt." },
      { t: "Uji i nxehtë është më pak i lagësht", fb: "Uji i nxehtë dhe i ftohtë janë e njëjta substancë. Ndryshimi është sa shpejt lëvizin grimcat." },
      { t: "Ngjyruesi reagon me ujin e nxehtë", fb: "Nuk formohet asnjë substancë e re — ngjyra mbetet e njëjtë. Thjesht përhapet më shpejt." },
      { t: "Grimcat e ujit të ftohtë nuk lëvizin fare", fb: "Grimcat në ujë të ftohtë lëvizin — thjesht më ngadalë. Prandaj ngjyra përhapet më në fund." }
    ] },
    hazards: ["Uji i nxehtë mund të përvëlojë.", "Ngjyruesi ushqimor njollos lëkurën, rrobat dhe tavolinat."],
    precautions: ["Vetëm mësuesi derdh ujin e nxehtë; përdor ujë të nxehtë rubineti, kurrë të vluar.", "Mbaji gotat larg buzës së tavolinës.", "Mbaj syze mbrojtëse dhe fshi menjëherë derdhjet."],
    disposal: ["Derdhe ujin me ngjyrë në lavaman.", "Shpëlaj gotat."],
    supervisionNote: "Mësuesi trajton ujin e nxehtë."
  }
},

/* ===== Alum crystals ===== */
{
  id: "crystals", icon: "crystal", topic: "matter", grades: "7–9", gmin: 7, gmax: 9,
  supervision: "supervised", time: 30, eqType: "idea", predictAt: 3, ppe: ["goggles"],
  demo: { s: "beaker", from: "#f1f5f9", to: "#f8fafc", crystals: "#c7d2fe" },
  video: null,
  sources: [
    { org: "Science Buddies", title: "How to Grow the Best Crystals", url: "https://www.sciencebuddies.org/stem-activities/how-to-grow-crystals" },
    { org: "Royal Society of Chemistry", title: "Crystal chemistry", url: "https://edu.rsc.org/outreach/crystal-chemistry/1587.article" }
  ],
  en: {
    name: "Crystal Garden", short: "Crystallisation",
    hook: "Grow sparkling alum crystals on a string in just a few days.",
    aim: "Make a hot saturated solution of alum and let it cool slowly so that crystals grow on a string.",
    chemistry: [
      "Hot water can dissolve much more alum (potassium aluminium sulfate) than cold water. A solution that holds as much solute as it can is called saturated.",
      "As the hot saturated solution cools, it can no longer hold all the alum, so the extra comes out of solution. The particles join on to each other in a regular, repeating pattern, building crystals with flat faces and sharp edges. Slow cooling gives bigger, neater crystals."
    ],
    equation: "hot saturated solution → cools → less can stay dissolved → crystals form",
    equipment: ["Alum powder (about 3 tablespoons)", "Hot water from a kettle (handled by the teacher)", "Clean glass jar", "Spoon for stirring", "Cotton thread and a pencil", "Paper towel to cover the jar", "Safety goggles"],
    steps: [
      "Put on goggles. Your teacher pours about 150 mL of hot water into the jar.",
      "Stir in alum one spoonful at a time until no more will dissolve and a little stays at the bottom.",
      "Tie the thread to the middle of the pencil and rest the pencil across the top of the jar so the thread hangs in the solution without touching the sides or bottom.",
      "Cover the jar loosely with paper towel and leave it somewhere it won't be disturbed.",
      "Check it every day for 3–5 days. Draw the shapes you see.",
      "Lift the thread out, dry the crystals on paper towel and look at them with a magnifying glass."
    ],
    predict: { q: "What will you see on the thread after a few days?", options: ["Small clear crystals with flat faces", "Nothing — the alum stays dissolved", "A layer of white mould", "The thread dissolves"], answer: 0,
      result: "Clear, glassy crystals grow along the thread, many with flat faces and a shape like two pyramids joined at the base. Some smaller crystals also form on the bottom of the jar." },
    why: { q: "Why do crystals form as the solution cools?", answer: 0, options: [
      { t: "Cooler water can hold less dissolved alum, so the extra comes out as crystals", fb: "Solubility falls as temperature drops. The extra alum leaves the solution and its particles stack in a regular pattern." },
      { t: "The alum reacts with the thread", fb: "The thread is just a surface for crystals to start growing on. No reaction happens." },
      { t: "Water turns into crystals when it cools", fb: "The water doesn't freeze — the crystals are alum. Water only evaporates slowly as they grow." },
      { t: "Air puts the alum back together", fb: "Air plays no part. Crystals form because the solution becomes too full of alum as it cools." }
    ] },
    hazards: ["Hot water and hot solution can scald.", "Alum dust can irritate the eyes.", "Glass jars can crack if filled with very hot water when cold."],
    precautions: ["The teacher pours the hot water; warm the jar first with warm water.", "Wear goggles while dissolving the alum.", "Don't eat or taste the crystals, and wash your hands after handling them."],
    disposal: ["Left-over solution can be diluted with plenty of water and poured down the sink.", "Crystals can be kept in a labelled container or put in the bin."],
    supervisionNote: "Students do the stirring and set-up; the teacher handles the kettle."
  },
  sq: {
    name: "Kopshti i kristaleve", short: "Kristalizimi",
    hook: "Rrit kristale shapi që shkëlqejnë mbi një fije brenda pak ditësh.",
    aim: "Përgatit një tretësirë të nxehtë të ngopur shapi dhe lëre të ftohet ngadalë që të rriten kristale mbi një fije.",
    chemistry: [
      "Uji i nxehtë mund të tretë shumë më tepër shap (sulfat kaliumi dhe alumini) se uji i ftohtë. Një tretësirë që mban aq sa mundet nga lënda e tretur quhet e ngopur.",
      "Ndërsa tretësira e nxehtë e ngopur ftohet, ajo nuk mund ta mbajë më gjithë shapin, ndaj teprica del nga tretësira. Grimcat bashkohen me njëra-tjetrën në një model të rregullt që përsëritet, duke ndërtuar kristale me faqe të sheshta dhe skaje të mprehta. Ftohja e ngadaltë jep kristale më të mëdha dhe më të rregullta."
    ],
    equation: "tretësirë e nxehtë e ngopur → ftohet → mund të mbetet më pak e tretur → formohen kristale",
    equipment: ["Pluhur shapi (rreth 3 lugë gjelle)", "Ujë i nxehtë nga ibriku (e trajton mësuesi)", "Kavanoz qelqi i pastër", "Lugë për përzierje", "Fije pambuku dhe një laps", "Letër kuzhine për të mbuluar kavanozin", "Syze mbrojtëse"],
    steps: [
      "Vendos syzet. Mësuesi derdh rreth 150 mL ujë të nxehtë në kavanoz.",
      "Përziej shapin një lugë në një herë derisa të mos tretet më dhe pak të mbetet në fund.",
      "Lidh fijen në mes të lapsit dhe vendose lapsin mbi grykën e kavanozit që fija të varet në tretësirë pa prekur anët ose fundin.",
      "Mbuloje lehtë kavanozin me letër kuzhine dhe lëre diku ku nuk do të lëvizet.",
      "Kontrolloje çdo ditë për 3–5 ditë. Vizato format që sheh.",
      "Nxirre fijen, thaji kristalet në letër kuzhine dhe shihi me xham zmadhues."
    ],
    predict: { q: "Çfarë do të shohësh mbi fije pas disa ditësh?", options: ["Kristale të vogla transparente me faqe të sheshta", "Asgjë — shapi mbetet i tretur", "Një shtresë myku të bardhë", "Fija tretet"], answer: 0,
      result: "Mbi fije rriten kristale transparente si qelqi, shumë prej tyre me faqe të sheshta dhe formë si dy piramida të bashkuara në bazë. Disa kristale më të vogla formohen edhe në fund të kavanozit." },
    why: { q: "Pse formohen kristale ndërsa tretësira ftohet?", answer: 0, options: [
      { t: "Uji më i ftohtë mund të mbajë më pak shap të tretur, ndaj teprica del si kristale", fb: "Tretshmëria ulet kur bie temperatura. Shapi i tepërt largohet nga tretësira dhe grimcat e tij renditen në një model të rregullt." },
      { t: "Shapi reagon me fijen", fb: "Fija është thjesht një sipërfaqe ku kristalet fillojnë të rriten. Nuk ndodh asnjë reaksion." },
      { t: "Uji kthehet në kristale kur ftohet", fb: "Uji nuk ngrin — kristalet janë shap. Uji vetëm avullon ngadalë ndërsa ato rriten." },
      { t: "Ajri e bashkon përsëri shapin", fb: "Ajri nuk luan asnjë rol. Kristalet formohen sepse tretësira bëhet tepër e mbushur me shap ndërsa ftohet." }
    ] },
    hazards: ["Uji dhe tretësira e nxehtë mund të përvëlojnë.", "Pluhuri i shapit mund të irritojë sytë.", "Kavanozët e qelqit mund të çahen nëse mbushen me ujë shumë të nxehtë kur janë të ftohtë."],
    precautions: ["Mësuesi derdh ujin e nxehtë; ngrohe më parë kavanozin me ujë të vakët.", "Mbaj syze mbrojtëse ndërsa tret shapin.", "Mos i ha dhe mos i shijo kristalet, dhe laj duart pasi i prek."],
    disposal: ["Tretësira e mbetur mund të hollohet me shumë ujë dhe të derdhet në lavaman.", "Kristalet mund të ruhen në një enë me etiketë ose të hidhen në kosh."],
    supervisionNote: "Nxënësit bëjnë përzierjen dhe përgatitjen; mësuesi trajton ibrikun."
  }
},

/* ===== Separating salt and sand ===== */
{
  id: "saltsand", icon: "filter", topic: "separation", grades: "7–8", gmin: 7, gmax: 8,
  supervision: "supervised", time: 50, eqType: "idea", predictAt: 3, ppe: ["goggles"],
  demo: { s: "beaker", from: "#e7d6b5", to: "#e0f2fe", precip: "#a16207" },
  video: null,
  sources: [
    { org: "Royal Society of Chemistry", title: "Separating sand and salt by filtering and evaporation", url: "https://edu.rsc.org/experiments/separating-sand-and-salt-by-filtering-and-evaporation/386.article" }
  ],
  en: {
    name: "Rescue the Salt", short: "Filtering & evaporating",
    hook: "Someone mixed salt with sand. Can you get the salt back?",
    aim: "Separate a mixture of salt and sand by dissolving, filtering and evaporating, and collect pure salt crystals.",
    chemistry: [
      "Salt is soluble — it dissolves in water. Sand is insoluble — it does not. Adding water lets the salt go into solution while the sand stays as solid grains.",
      "Filter paper has tiny holes that let water and dissolved salt pass through but trap the sand grains (the residue). Heating the salty water (the filtrate) evaporates the water and leaves salt crystals behind."
    ],
    equation: "dissolve → filter (sand stays behind) → evaporate (salt crystals remain)",
    equipment: ["Salt and sand mixture (about 2 spoonfuls)", "Beaker with about 50 mL of warm water", "Stirring rod", "Filter funnel and filter paper", "Conical flask", "Evaporating basin, tripod, gauze and Bunsen burner (or a water bath)", "Safety goggles"],
    steps: [
      "Put on goggles. Add the mixture to the warm water and stir for 2 minutes.",
      "Fold the filter paper into a cone and place it in the funnel over the conical flask.",
      "Pour the mixture slowly into the funnel. Let all the liquid drain through.",
      "Look at what is left on the paper (residue) and what passed through (filtrate).",
      "Pour the filtrate into the evaporating basin and heat it gently.",
      "Stop heating when crystals first appear around the edge — the heat of the basin finishes the job. Let it cool, then look at the crystals."
    ],
    predict: { q: "After filtering, what will be left on the filter paper?", options: ["Wet sand", "Salt crystals", "Nothing — everything goes through", "A mixture of salt and sand"], answer: 0,
      result: "Wet sand stays on the filter paper, and a clear, salty liquid drips into the flask. After evaporating, small white cube-shaped salt crystals are left in the basin." },
    why: { q: "Why does the salt pass through the filter paper but the sand doesn't?", answer: 0, options: [
      { t: "The salt is dissolved into particles small enough to pass through; sand grains are too big", fb: "Dissolved salt is spread out as tiny particles in the water. The sand never dissolved, so its grains are trapped." },
      { t: "Salt is lighter than sand", fb: "It's not about weight — undissolved salt crystals would be trapped too. Dissolving is what lets salt pass through." },
      { t: "The filter paper attracts sand", fb: "Filter paper works like a sieve with tiny holes. It traps anything too large to fit through." },
      { t: "Sand reacts with the water", fb: "Sand doesn't react or dissolve — that's exactly why it can be separated." }
    ] },
    hazards: ["The Bunsen burner and hot basin can cause burns.", "Hot salt can spit out of the basin if it is heated to dryness."],
    precautions: ["Wear goggles, especially while evaporating.", "Stop heating when crystals start to form.", "Let the basin cool before touching it; use tongs.", "Tie back long hair near the flame."],
    disposal: ["Sand can go in the bin (not the sink).", "Salt can be put in the bin or dissolved and poured down the sink."],
    supervisionNote: "Students need a teacher present when heating with a Bunsen burner."
  },
  sq: {
    name: "Shpëto kripën", short: "Filtrimi dhe avullimi",
    hook: "Dikush e përzjeu kripën me rërë. A mund ta marrësh kripën përsëri?",
    aim: "Ndaj një përzierje kripe dhe rëre me tretje, filtrim dhe avullim, dhe mblidh kristale kripe të pastra.",
    chemistry: [
      "Kripa është e tretshme — tretet në ujë. Rëra është e patretshme — nuk tretet. Shtimi i ujit e lejon kripën të kalojë në tretësirë, ndërsa rëra mbetet si kokrriza të ngurta.",
      "Letra e filtrit ka vrima shumë të vogla që lejojnë ujin dhe kripën e tretur të kalojnë, por i mbajnë kokrrizat e rërës (mbetja). Ngrohja e ujit të kripur (filtrati) e avullon ujin dhe lë pas kristale kripe."
    ],
    equation: "tret → filtro (rëra mbetet) → avullo (mbeten kristalet e kripës)",
    equipment: ["Përzierje kripe dhe rëre (rreth 2 lugë)", "Gotë kimike me rreth 50 mL ujë të vakët", "Shkop përzierës", "Hinkë dhe letër filtri", "Kolbë konike", "Enë avullimi, trekëmbësh, rrjetë dhe llambë Bunsen (ose banjë uji)", "Syze mbrojtëse"],
    steps: [
      "Vendos syzet. Shto përzierjen në ujin e vakët dhe përziej për 2 minuta.",
      "Paloje letrën e filtrit si kon dhe vendose në hinkë mbi kolbën konike.",
      "Derdhe ngadalë përzierjen në hinkë. Lëre gjithë lëngun të kalojë.",
      "Shiko çfarë mbetet mbi letër (mbetja) dhe çfarë kaloi (filtrati).",
      "Derdhe filtratin në enën e avullimit dhe ngroheje butë.",
      "Ndalo ngrohjen kur shfaqen kristalet e para rreth buzës — nxehtësia e enës e përfundon punën. Lëre të ftohet, pastaj shiko kristalet."
    ],
    predict: { q: "Pas filtrimit, çfarë do të mbetet mbi letrën e filtrit?", options: ["Rërë e lagur", "Kristale kripe", "Asgjë — gjithçka kalon", "Një përzierje kripe dhe rëre"], answer: 0,
      result: "Rëra e lagur mbetet mbi letrën e filtrit dhe një lëng i kripur i kthjellët pikon në kolbë. Pas avullimit, në enë mbeten kristale të vogla të bardha kripe në formë kubi." },
    why: { q: "Pse kripa kalon nëpër letrën e filtrit, por rëra jo?", answer: 0, options: [
      { t: "Kripa është tretur në grimca aq të vogla sa kalojnë; kokrrizat e rërës janë shumë të mëdha", fb: "Kripa e tretur është e shpërndarë si grimca shumë të vogla në ujë. Rëra nuk u tret kurrë, ndaj kokrrizat e saj mbeten." },
      { t: "Kripa është më e lehtë se rëra", fb: "Nuk varet nga pesha — edhe kristalet e patretura të kripës do të mbeteshin. Tretja e lejon kripën të kalojë." },
      { t: "Letra e filtrit e tërheq rërën", fb: "Letra e filtrit punon si një sitë me vrima të vogla. Mban çdo gjë që është shumë e madhe për të kaluar." },
      { t: "Rëra reagon me ujin", fb: "Rëra nuk reagon dhe nuk tretet — pikërisht prandaj mund të ndahet." }
    ] },
    hazards: ["Llamba Bunsen dhe ena e nxehtë mund të shkaktojnë djegie.", "Kripa e nxehtë mund të kërcejë jashtë enës nëse ngrohet deri në tharje."],
    precautions: ["Mbaj syze mbrojtëse, sidomos gjatë avullimit.", "Ndalo ngrohjen kur fillojnë të formohen kristalet.", "Lëre enën të ftohet para se ta prekësh; përdor mashë.", "Lidh flokët e gjata pranë flakës."],
    disposal: ["Rëra hidhet në kosh (jo në lavaman).", "Kripa mund të hidhet në kosh ose të tretet dhe të derdhet në lavaman."],
    supervisionNote: "Nxënësit kanë nevojë për praninë e mësuesit kur ngrohin me llambë Bunsen."
  }
},

/* ===== Lava lamp ===== */
{
  id: "lavalamp", icon: "lamp", topic: "matter", grades: "7–8", gmin: 7, gmax: 8,
  supervision: "supervised", time: 15, eqType: "idea", predictAt: 3, ppe: ["goggles"],
  demo: { s: "beaker", layers: ["#ef4444", "#fde68a"], level: 0.8, blobs: "#ef4444", bubbles: 1 },
  video: { id: "EVYRtpZu2lQ", title: "Kids Science: Lava Lamp Science Experiement", channel: "STEAM SQUAD",
    note: { en: "A quick look at the bubbling blobs you should see.", sq: "Një vështrim i shpejtë i flluskave me ngjyrë që duhet të shohësh." } },
  sources: [
    { org: "Birmingham Museums", title: "Kitchen Science: Lava Lamp Experiment", url: "https://www.birminghammuseums.org.uk/resources/kitchen-science-lava-lamp-experiment" }
  ],
  en: {
    name: "Homemade Lava Lamp", short: "Density & gas",
    hook: "Coloured blobs rise and fall through oil — no electricity needed.",
    aim: "Use oil, coloured water and a fizzy tablet to see how density differences and gas bubbles make blobs rise and sink.",
    chemistry: [
      "Oil and water don't mix, and oil is less dense, so the coloured water sinks to the bottom under a thick layer of oil.",
      "The fizzy tablet reacts with the water to make carbon dioxide bubbles. Each bubble carries a blob of coloured water up through the oil. At the top the gas escapes, and the denser water blob sinks back down again."
    ],
    equation: "tablet + water → carbon dioxide bubbles → carry water blobs up → gas escapes → blobs sink",
    equipment: ["Tall clear bottle or glass", "Vegetable oil (to fill about ¾ of the bottle)", "Water", "Food colouring", "Effervescent (fizzy) tablet, broken into pieces — given out by the teacher", "Tray", "Safety goggles"],
    steps: [
      "Put on goggles and work on a tray. Fill the bottle about a quarter full with water.",
      "Slowly pour in oil until the bottle is nearly full. Wait for the layers to separate.",
      "Add 8–10 drops of food colouring and watch where the drops go.",
      "Drop in one piece of the tablet.",
      "Watch the blobs for a minute. Add another piece when the bubbling slows.",
      "Shine a torch from below for an even better effect."
    ],
    predict: { q: "What will happen after you drop the tablet piece into the bottle?", options: ["Coloured blobs rise to the top and sink again", "The oil and water mix into one colour", "The oil turns into foam and overflows", "Nothing — the tablet floats on the oil"], answer: 0,
      result: "Bubbles stream up from the tablet, lifting blobs of coloured water through the oil. At the surface the bubbles pop and the blobs slowly fall back — it looks just like a lava lamp." },
    why: { q: "Why do the coloured blobs sink again after reaching the top?", answer: 0, options: [
      { t: "The gas bubble escapes, and the water blob is denser than the oil", fb: "Without its gas bubble, the blob is just water — which is denser than oil — so it sinks." },
      { t: "The oil pushes them down", fb: "The blobs sink because of their own density compared with oil, not because the oil pushes harder." },
      { t: "The food colouring gets heavier", fb: "The colouring doesn't change. It's the loss of the light gas bubble that makes the blob sink." },
      { t: "They freeze at the top", fb: "Nothing freezes. The blob sinks once the buoyant gas bubble leaves it." }
    ] },
    hazards: ["Effervescent tablets are medicines or supplements — they must never be swallowed in a lab.", "Oil spills are slippery.", "Food colouring stains."],
    precautions: ["Only the teacher handles and hands out the tablet pieces.", "Work on a tray and wipe spills immediately.", "Wear goggles and wash your hands afterwards."],
    disposal: ["Put the lid on and keep the lamp to reuse, or pour the oil into a container for the bin — don't pour lots of oil down the sink.", "The water layer can go down the sink."],
    supervisionNote: "The teacher controls the tablets."
  },
  sq: {
    name: "Llambë lava e bërë vetë", short: "Dendësia dhe gazi",
    hook: "Pika me ngjyrë ngjiten dhe zbresin nëpër vaj — pa energji elektrike.",
    aim: "Përdor vaj, ujë me ngjyrë dhe një tabletë shkumëzuese për të parë si diferencat e dendësisë dhe flluskat e gazit i bëjnë pikat të ngjiten dhe të zbresin.",
    chemistry: [
      "Vaji dhe uji nuk përzihen, dhe vaji është më pak i dendur, ndaj uji me ngjyrë zhytet në fund poshtë një shtrese të trashë vaji.",
      "Tableta shkumëzuese reagon me ujin dhe prodhon flluska dioksidi karboni. Çdo flluskë mbart një pikë uji me ngjyrë lart nëpër vaj. Sipër gazi del, dhe pika e ujit, më e dendur, zbret përsëri poshtë."
    ],
    equation: "tabletë + ujë → flluska dioksidi karboni → mbartin pika uji lart → gazi del → pikat zbresin",
    equipment: ["Shishe ose gotë e lartë transparente", "Vaj vegjetal (për të mbushur rreth ¾ e shishes)", "Ujë", "Ngjyrues ushqimor", "Tabletë shkumëzuese, e thyer në copa — e jep mësuesi", "Tabaka", "Syze mbrojtëse"],
    steps: [
      "Vendos syzet dhe puno mbi tabaka. Mbush rreth një të katërtën e shishes me ujë.",
      "Hidh ngadalë vaj derisa shishja të jetë pothuajse plot. Prit që shtresat të ndahen.",
      "Shto 8–10 pika ngjyrues dhe shiko ku shkojnë pikat.",
      "Hidh një copë tablete.",
      "Vëzhgo pikat për një minutë. Shto një copë tjetër kur shkumëzimi ngadalësohet.",
      "Ndriçoje me një elektrik dore nga poshtë për një efekt edhe më të bukur."
    ],
    predict: { q: "Çfarë do të ndodhë pasi të hedhësh copën e tabletës në shishe?", options: ["Pika me ngjyrë ngjiten lart dhe zbresin përsëri", "Vaji dhe uji përzihen në një ngjyrë", "Vaji bëhet shkumë dhe derdhet", "Asgjë — tableta noton mbi vaj"], answer: 0,
      result: "Flluska ngjiten nga tableta, duke ngritur pika uji me ngjyrë nëpër vaj. Në sipërfaqe flluskat plasin dhe pikat bien ngadalë poshtë — duket pikërisht si një llambë lava." },
    why: { q: "Pse pikat me ngjyrë zbresin përsëri pasi arrijnë sipër?", answer: 0, options: [
      { t: "Flluska e gazit del, dhe pika e ujit është më e dendur se vaji", fb: "Pa flluskën e gazit, pika është thjesht ujë — që është më i dendur se vaji — ndaj zbret." },
      { t: "Vaji i shtyn poshtë", fb: "Pikat zbresin për shkak të dendësisë së tyre krahasuar me vajin, jo sepse vaji shtyn më fort." },
      { t: "Ngjyruesi bëhet më i rëndë", fb: "Ngjyruesi nuk ndryshon. Humbja e flluskës së lehtë të gazit e bën pikën të zbresë." },
      { t: "Ngrijnë sipër", fb: "Asgjë nuk ngrin. Pika zbret sapo flluska e gazit e lë." }
    ] },
    hazards: ["Tabletat shkumëzuese janë ilaçe ose suplemente — nuk duhen gëlltitur kurrë në laborator.", "Vaji i derdhur është i rrëshqitshëm.", "Ngjyruesi njollos."],
    precautions: ["Vetëm mësuesi i trajton dhe i shpërndan copat e tabletave.", "Puno mbi tabaka dhe fshi menjëherë derdhjet.", "Mbaj syze mbrojtëse dhe laj duart pas eksperimentit."],
    disposal: ["Mbylle me kapak dhe ruaje llambën për ta ripërdorur, ose derdhe vajin në një enë për koshin — mos derdh shumë vaj në lavaman.", "Shtresa e ujit mund të derdhet në lavaman."],
    supervisionNote: "Mësuesi kontrollon tabletat."
  }
},

/* ===== Turmeric secret messages ===== */
{
  id: "turmeric", icon: "message", topic: "acids", grades: "7–8", gmin: 7, gmax: 8,
  supervision: "supervised", time: 25, eqType: "idea", predictAt: 3, ppe: ["goggles"],
  demo: { s: "beaker", from: "#facc15", to: "#b91c1c" },
  video: { id: "8GEoIXLpd0E", title: "Turmeric as Indicator - Acid, Base and Neutralisation Reaction", channel: "Little Science Experiments",
    note: { en: "Shows turmeric turning red in a base and back to yellow with an acid.", sq: "Tregon shafranin e Indisë që skuqet në bazë dhe kthehet i verdhë me acid." } },
  sources: [
    { org: "American Chemical Society", title: "Appearing & Disappearing Ink", url: "https://www.acs.org/education/activities/appearing-and-disappearing-ink.html" },
    { org: "AIChE K-12", title: "Turmeric as a Natural Indicator", url: "https://www2.aiche.org/k-12/modules/turmeric-natural-indicator" }
  ],
  en: {
    name: "Secret Turmeric Messages", short: "Natural indicator",
    hook: "Write invisible messages that appear in red — using a kitchen spice.",
    aim: "Make turmeric indicator paper and use a base (baking soda solution) to reveal hidden messages, then make them vanish with an acid.",
    chemistry: [
      "Turmeric contains a yellow pigment called curcumin. In acidic or neutral conditions it stays yellow, but in alkaline (basic) conditions its molecules change and it turns red-brown.",
      "Baking soda solution is a weak base, so wherever you paint it on turmeric paper, the paper turns red. Adding an acid like vinegar neutralises the base and the colour goes back to yellow — the change is reversible."
    ],
    equation: "turmeric: yellow (acidic or neutral) ⇌ red-brown (alkaline)",
    equipment: ["1 teaspoon of turmeric powder mixed with 50 mL of water (or rubbing a little on paper)", "White paper or coffee filters", "Baking soda solution (1 teaspoon in 50 mL water)", "Vinegar in a small cup", "Cotton buds or paintbrushes", "Newspaper to protect the bench", "Safety goggles"],
    steps: [
      "Put on goggles and cover the bench. Paint the paper with the turmeric mixture and let it dry until it is evenly yellow.",
      "Dip a cotton bud in plain water and write a ‘secret’ word on one corner. Let it dry — what do you see?",
      "Dip a clean cotton bud in baking soda solution and write a secret message on the paper.",
      "Watch the message appear.",
      "Use a fresh cotton bud to dab vinegar over part of the message.",
      "Test other household liquids (soap solution, lemon juice) on spare turmeric paper and sort them into acids and bases."
    ],
    predict: { q: "What colour will appear where you write with baking soda solution?", options: ["Red-brown", "Bright blue", "Green", "It stays yellow"], answer: 0,
      result: "The message appears in red-brown letters on the yellow paper. Where you dab vinegar, the red fades back to yellow. Soap also turns turmeric red; lemon juice leaves it yellow." },
    why: { q: "Why does the writing turn red?", answer: 0, options: [
      { t: "Baking soda is a base, and turmeric's pigment changes colour in alkaline conditions", fb: "Curcumin is an indicator: it's yellow in acids and neutral solutions and red-brown in alkalis." },
      { t: "Baking soda is red when it's wet", fb: "Baking soda solution is colourless. The red colour comes from the turmeric reacting to the base." },
      { t: "The paper burns slightly", fb: "No heat is involved. It's a chemical colour change caused by the base." },
      { t: "Water always turns turmeric red", fb: "The plain water test stayed yellow — water is neutral. Only the base causes the change." }
    ] },
    hazards: ["Turmeric stains skin, clothes and benches strongly.", "Vinegar and baking soda solution can sting the eyes."],
    precautions: ["Wear goggles and an apron or old clothes.", "Cover benches with newspaper.", "Don't taste anything; wash your hands at the end."],
    disposal: ["Liquids can be poured down the sink with water.", "Dry papers can be taken home or put in the bin."],
    supervisionNote: "Low-hazard activity — expect yellow fingers!"
  },
  sq: {
    name: "Mesazhe sekrete me shafran", short: "Indikator natyral",
    hook: "Shkruaj mesazhe të padukshme që shfaqen me të kuqe — me një erëz kuzhine.",
    aim: "Përgatit letër indikatori me shafran të Indisë (kurkuma) dhe përdor një bazë (tretësirë sode buke) për të zbuluar mesazhe të fshehura, pastaj zhduki me një acid.",
    chemistry: [
      "Shafrani i Indisë përmban një pigment të verdhë që quhet kurkuminë. Në kushte acide ose neutrale mbetet i verdhë, por në kushte alkaline (bazike) molekulat e tij ndryshojnë dhe ai bëhet i kuq-kafe.",
      "Tretësira e sodës së bukës është bazë e dobët, ndaj kudo që e lyen mbi letrën me shafran, letra skuqet. Shtimi i një acidi si uthulla e neutralizon bazën dhe ngjyra kthehet në të verdhë — ndryshimi është i kthyeshëm."
    ],
    equation: "shafrani: i verdhë (acid ose neutral) ⇌ i kuq-kafe (alkalin)",
    equipment: ["1 lugë çaji shafran i Indisë i përzier me 50 mL ujë (ose pak i fërkuar në letër)", "Letër e bardhë ose filtra kafeje", "Tretësirë sode buke (1 lugë çaji në 50 mL ujë)", "Uthull në një gotë të vogël", "Shkopinj pambuku ose penela", "Gazeta për të mbrojtur tavolinën", "Syze mbrojtëse"],
    steps: [
      "Vendos syzet dhe mbulo tavolinën. Lyeje letrën me përzierjen e shafranit dhe lëre të thahet derisa të jetë e verdhë në mënyrë të njëtrajtshme.",
      "Zhyt një shkop pambuku në ujë të thjeshtë dhe shkruaj një fjalë ‘sekrete’ në një cep. Lëre të thahet — çfarë sheh?",
      "Zhyt një shkop të pastër në tretësirë sode buke dhe shkruaj një mesazh sekret në letër.",
      "Vëzhgo si shfaqet mesazhi.",
      "Me një shkop të ri, prek me uthull një pjesë të mesazhit.",
      "Provo lëngje të tjera shtëpiake (tretësirë sapuni, lëng limoni) në letër rezervë dhe ndaji në acide dhe baza."
    ],
    predict: { q: "Çfarë ngjyre do të shfaqet aty ku shkruan me tretësirë sode buke?", options: ["E kuqe-kafe", "Blu e ndezur", "E gjelbër", "Mbetet e verdhë"], answer: 0,
      result: "Mesazhi shfaqet me shkronja të kuqe-kafe mbi letrën e verdhë. Aty ku prek me uthull, e kuqja zbehet dhe kthehet në të verdhë. Sapuni gjithashtu e skuq shafranin; lëngu i limonit e lë të verdhë." },
    why: { q: "Pse shkrimi bëhet i kuq?", answer: 0, options: [
      { t: "Soda e bukës është bazë, dhe pigmenti i shafranit ndryshon ngjyrë në kushte alkaline", fb: "Kurkumina është indikator: është e verdhë në acide dhe tretësira neutrale dhe e kuqe-kafe në alkale." },
      { t: "Soda e bukës është e kuqe kur laget", fb: "Tretësira e sodës së bukës është e pangjyrë. Ngjyra e kuqe vjen nga shafrani që reagon ndaj bazës." },
      { t: "Letra digjet pak", fb: "Nuk përdoret nxehtësi. Është një ndryshim kimik ngjyre i shkaktuar nga baza." },
      { t: "Uji e skuq gjithmonë shafranin", fb: "Prova me ujë të thjeshtë mbeti e verdhë — uji është neutral. Vetëm baza e shkakton ndryshimin." }
    ] },
    hazards: ["Shafrani i Indisë njollos fort lëkurën, rrobat dhe tavolinat.", "Uthulla dhe tretësira e sodës së bukës mund të djegin sytë."],
    precautions: ["Mbaj syze mbrojtëse dhe përparëse ose rroba të vjetra.", "Mbuloji tavolinat me gazeta.", "Mos shijo asgjë; laj duart në fund."],
    disposal: ["Lëngjet mund të derdhen në lavaman me ujë.", "Letrat e thata mund t'i marrësh në shtëpi ose t'i hedhësh në kosh."],
    supervisionNote: "Aktivitet me rrezik të ulët — prisni gishta të verdhë!"
  }
},

/* ===== Rusting ===== */
{
  id: "rusting", icon: "nail", topic: "reactions", grades: "7–9", gmin: 7, gmax: 9,
  supervision: "supervised", time: 20, eqType: "equation", predictAt: 3, ppe: ["goggles"],
  demo: { s: "beaker", from: "#e0f2fe", to: "#ead9c0", nail: "#b45309" },
  video: null,
  sources: [
    { org: "Royal Society of Chemistry", title: "What causes iron to rust?", url: "https://edu.rsc.org/experiments/what-causes-iron-to-rust/434.article" },
    { org: "Royal Society of Chemistry", title: "Preventing rust", url: "https://edu.rsc.org/experiments/preventing-rust/1763.article" }
  ],
  en: {
    name: "What Makes Iron Rust?", short: "Oxidation",
    hook: "Set up four nails, wait a week, and find out what rust really needs.",
    aim: "Find out which conditions are needed for iron to rust by leaving iron nails in air and water, dry air, boiled water under oil, and salty water.",
    chemistry: [
      "Rusting is a chemical reaction in which iron reacts with oxygen from the air and with water. The product is hydrated iron(III) oxide — the flaky orange-brown solid we call rust.",
      "If either oxygen or water is missing, iron doesn't rust. Salt dissolved in the water speeds rusting up, which is why cars rust faster in places where salt is spread on icy roads."
    ],
    equation: "iron + oxygen + water → hydrated iron(III) oxide (rust)",
    equipment: ["4 clean iron nails (not galvanised)", "4 test tubes in a rack, with a bung for one of them", "Tap water and salty water", "Water that has been boiled and cooled (to remove dissolved air) — prepared by the teacher", "A little cooking oil", "Anhydrous calcium chloride (a drying agent) and cotton wool", "Labels and safety goggles"],
    steps: [
      "Put on goggles. Label the tubes A, B, C and D and put one nail in each.",
      "Tube A: add tap water until the nail is half covered (air + water).",
      "Tube B: add a little calcium chloride, a plug of cotton wool and the nail on top, then put in the bung (dry air).",
      "Tube C: fill with boiled water and add a 1 cm layer of oil on top (water, no air). Tube D: half-cover the nail with salty water.",
      "Leave the tubes in the rack for one week.",
      "Compare the nails and rank them from most to least rusty."
    ],
    predict: { q: "Which nail do you think will rust the most?", options: ["The nail in salty water", "The nail in dry air", "The nail in boiled water under oil", "None of them will rust"], answer: 0,
      result: "The nail in salty water is the rustiest, followed by the nail in tap water and air. The nails in dry air and in boiled water under oil hardly change at all." },
    why: { q: "Why doesn't the nail in boiled water under oil rust?", answer: 0, options: [
      { t: "Boiling removes dissolved oxygen and the oil stops air getting back in", fb: "Rusting needs both oxygen and water. With no oxygen available, the reaction can't happen." },
      { t: "Boiled water is too clean to react", fb: "It's not about cleanliness — it's that the oxygen has been removed and kept out." },
      { t: "Oil reacts with iron and protects it", fb: "Oil doesn't react; it just forms a barrier that keeps air out." },
      { t: "Iron only rusts in salty water", fb: "The nail in tap water and air rusted too. Salt only speeds rusting up." }
    ] },
    hazards: ["Anhydrous calcium chloride irritates the eyes and skin.", "Hot water for boiling is a scald risk (teacher only).", "Rusty nails can have sharp points."],
    precautions: ["Wear goggles; handle calcium chloride with a spatula, not fingers.", "The teacher boils and cools the water.", "Wash your hands after handling the nails."],
    disposal: ["Pour the water and salt water down the sink.", "Put nails and oily cotton wool in the bin; return calcium chloride to the teacher."],
    supervisionNote: "The set-up is quick; the teacher prepares the boiled water and drying agent."
  },
  sq: {
    name: "Çfarë e ndryshk hekurin?", short: "Oksidimi",
    hook: "Përgatit katër gozhdë, prit një javë dhe zbulo për çfarë ka vërtet nevojë ndryshku.",
    aim: "Zbulo cilat kushte nevojiten që hekuri të ndryshket, duke lënë gozhdë hekuri në ajër dhe ujë, në ajër të thatë, në ujë të zier nën vaj dhe në ujë me kripë.",
    chemistry: [
      "Ndryshkja është një reaksion kimik në të cilin hekuri reagon me oksigjenin e ajrit dhe me ujin. Produkti është oksid hekuri(III) i hidratuar — lënda e ngurtë portokalli-kafe që zhvishet dhe që e quajmë ndryshk.",
      "Nëse mungon oksigjeni ose uji, hekuri nuk ndryshket. Kripa e tretur në ujë e përshpejton ndryshkjen, prandaj makinat ndryshken më shpejt në vende ku rrugët me akull hidhen me kripë."
    ],
    equation: "hekur + oksigjen + ujë → oksid hekuri(III) i hidratuar (ndryshk)",
    equipment: ["4 gozhdë hekuri të pastra (jo të galvanizuara)", "4 provëza në mbajtëse, me tapë për njërën prej tyre", "Ujë rubineti dhe ujë me kripë", "Ujë i zier dhe i ftohur (pa ajër të tretur) — e përgatit mësuesi", "Pak vaj gatimi", "Klorur kalciumi anhidër (tharës) dhe pambuk", "Etiketa dhe syze mbrojtëse"],
    steps: [
      "Vendos syzet. Shëno provëzat A, B, C dhe D dhe vendos një gozhdë në secilën.",
      "Provëza A: shto ujë rubineti derisa gozhda të jetë gjysmë e mbuluar (ajër + ujë).",
      "Provëza B: shto pak klorur kalciumi, një tufë pambuku dhe gozhdën sipër, pastaj vendos tapën (ajër i thatë).",
      "Provëza C: mbushe me ujë të zier dhe shto sipër një shtresë vaji 1 cm (ujë, pa ajër). Provëza D: mbulo gjysmën e gozhdës me ujë me kripë.",
      "Lëri provëzat në mbajtëse për një javë.",
      "Krahaso gozhdët dhe renditi nga më e ndryshkura te më pak e ndryshkura."
    ],
    predict: { q: "Cila gozhdë mendon se do të ndryshket më shumë?", options: ["Gozhda në ujë me kripë", "Gozhda në ajër të thatë", "Gozhda në ujë të zier nën vaj", "Asnjëra nuk do të ndryshket"], answer: 0,
      result: "Gozhda në ujë me kripë është më e ndryshkura, e ndjekur nga gozhda në ujë rubineti dhe ajër. Gozhdët në ajër të thatë dhe në ujë të zier nën vaj pothuajse nuk ndryshojnë fare." },
    why: { q: "Pse nuk ndryshket gozhda në ujë të zier nën vaj?", answer: 0, options: [
      { t: "Zierja largon oksigjenin e tretur dhe vaji e ndalon ajrin të hyjë përsëri", fb: "Ndryshkja ka nevojë për oksigjen dhe ujë njëkohësisht. Pa oksigjen, reaksioni nuk mund të ndodhë." },
      { t: "Uji i zier është tepër i pastër për të reaguar", fb: "Nuk ka të bëjë me pastërtinë — por me faktin që oksigjeni është larguar dhe mbahet jashtë." },
      { t: "Vaji reagon me hekurin dhe e mbron", fb: "Vaji nuk reagon; thjesht krijon një pengesë që e mban ajrin jashtë." },
      { t: "Hekuri ndryshket vetëm në ujë me kripë", fb: "Edhe gozhda në ujë rubineti dhe ajër u ndryshk. Kripa vetëm e përshpejton ndryshkjen." }
    ] },
    hazards: ["Klorur kalciumi anhidër irriton sytë dhe lëkurën.", "Uji i nxehtë për zierje mund të përvëlojë (vetëm mësuesi).", "Gozhdët e ndryshkura mund të kenë maja të mprehta."],
    precautions: ["Mbaj syze mbrojtëse; trajtoje klorurin e kalciumit me spatulë, jo me gishta.", "Mësuesi e zien dhe e ftoh ujin.", "Laj duart pasi prek gozhdët."],
    disposal: ["Derdhe ujin dhe ujin me kripë në lavaman.", "Hidhi gozhdët dhe pambukun me vaj në kosh; ktheja klorurin e kalciumit mësuesit."],
    supervisionNote: "Përgatitja është e shpejtë; mësuesi përgatit ujin e zier dhe tharësin."
  }
},

/* ===== The cold fizz ===== */
{
  id: "coldfizz", icon: "snow", topic: "energy", grades: "7–9", gmin: 7, gmax: 9,
  supervision: "supervised", time: 20, eqType: "equation", predictAt: 3, ppe: ["goggles"],
  demo: { s: "beaker", from: "#f1f5f9", to: "#e0f2fe", bubbles: 2, temp: "down" },
  video: null,
  sources: [
    { org: "TeachEngineering", title: "Reaction Exposed: The Big Chill!", url: "https://www.teachengineering.org/activities/wsu_big_chill_activity1" }
  ],
  en: {
    name: "The Cold Fizz", short: "Endothermic reactions",
    hook: "A fizzy reaction that gets colder instead of hotter.",
    aim: "Measure the temperature change when citric acid reacts with baking soda, and decide whether the reaction is exothermic or endothermic.",
    chemistry: [
      "Every chemical reaction involves energy changes. In an exothermic reaction, energy is given out to the surroundings and the temperature rises. In an endothermic reaction, energy is taken in from the surroundings, so the mixture gets colder.",
      "Citric acid and sodium hydrogencarbonate (baking soda) react to make sodium citrate, water and carbon dioxide. This reaction takes in heat energy, so the temperature of the solution falls by several degrees."
    ],
    equation: "citric acid + sodium hydrogencarbonate → sodium citrate + water + carbon dioxide  (energy taken in)",
    equipment: ["Polystyrene cup inside a beaker (for insulation)", "50 mL of citric acid solution — prepared by the teacher", "3 spatulas of baking soda (sodium hydrogencarbonate)", "Thermometer", "Stirring rod", "Timer", "Safety goggles"],
    steps: [
      "Put on goggles. Measure 50 mL of citric acid solution into the polystyrene cup.",
      "Measure and record the starting temperature.",
      "Add the baking soda all at once and stir gently.",
      "Record the temperature every 15 seconds for 2 minutes.",
      "Note the lowest temperature reached and calculate the change.",
      "Carefully feel the outside of the cup."
    ],
    predict: { q: "What will happen to the temperature when the baking soda is added?", options: ["It goes down", "It goes up", "It stays exactly the same", "It goes up, then explodes"], answer: 0,
      result: "The mixture fizzes strongly and the temperature drops — typically by around 5–10 °C. The cup feels noticeably cold. This is an endothermic reaction." },
    why: { q: "Why does the mixture get colder?", answer: 0, options: [
      { t: "The reaction takes in heat energy from its surroundings", fb: "Endothermic reactions absorb energy from the solution and the cup, so the temperature falls." },
      { t: "Carbon dioxide gas is cold", fb: "The gas is made at the same temperature as the solution. The cooling happens because the reaction absorbs energy." },
      { t: "The baking soda was taken from a fridge", fb: "It was at room temperature. The temperature drop comes from the reaction itself." },
      { t: "Fizzing always makes things cold", fb: "Not always — magnesium fizzing in acid gets warm. It depends on whether the reaction gives out or takes in energy." }
    ] },
    hazards: ["Citric acid solution can irritate the eyes.", "Glass thermometers can break."],
    precautions: ["Wear goggles.", "Don't use the thermometer to stir — use a stirring rod.", "Wash your hands at the end."],
    disposal: ["The solution can be poured down the sink with plenty of water."],
    supervisionNote: "The teacher makes up the citric acid solution."
  },
  sq: {
    name: "Shkumëzimi i ftohtë", short: "Reaksione endotermike",
    hook: "Një reaksion me shkumë që ftohet në vend që të nxehet.",
    aim: "Mat ndryshimin e temperaturës kur acidi citrik reagon me sodën e bukës dhe vendos nëse reaksioni është ekzotermik apo endotermik.",
    chemistry: [
      "Çdo reaksion kimik përfshin ndryshime energjie. Në një reaksion ekzotermik, energjia jepet në mjedis dhe temperatura rritet. Në një reaksion endotermik, energjia merret nga mjedisi, ndaj përzierja ftohet.",
      "Acidi citrik dhe hidrogjenkarbonati i natriumit (soda e bukës) reagojnë dhe formojnë citrat natriumi, ujë dhe dioksid karboni. Ky reaksion thith energji nxehtësie, ndaj temperatura e tretësirës bie me disa gradë."
    ],
    equation: "acid citrik + hidrogjenkarbonat natriumi → citrat natriumi + ujë + dioksid karboni  (energji e marrë)",
    equipment: ["Gotë polistireni brenda një gote kimike (për izolim)", "50 mL tretësirë acidi citrik — e përgatit mësuesi", "3 spatula sodë buke (hidrogjenkarbonat natriumi)", "Termometër", "Shkop përzierës", "Kohëmatës", "Syze mbrojtëse"],
    steps: [
      "Vendos syzet. Mat 50 mL tretësirë acidi citrik në gotën prej polistireni.",
      "Mat dhe shëno temperaturën fillestare.",
      "Shto gjithë sodën e bukës njëherësh dhe përziej lehtë.",
      "Shëno temperaturën çdo 15 sekonda për 2 minuta.",
      "Shëno temperaturën më të ulët dhe llogarit ndryshimin.",
      "Prek me kujdes anën e jashtme të gotës."
    ],
    predict: { q: "Çfarë do të ndodhë me temperaturën kur shtohet soda e bukës?", options: ["Ulet", "Rritet", "Mbetet saktësisht e njëjtë", "Rritet, pastaj shpërthen"], answer: 0,
      result: "Përzierja shkumëzon fort dhe temperatura bie — zakonisht rreth 5–10 °C. Gota ndihet qartë e ftohtë. Ky është një reaksion endotermik." },
    why: { q: "Pse ftohet përzierja?", answer: 0, options: [
      { t: "Reaksioni merr energji nxehtësie nga mjedisi", fb: "Reaksionet endotermike thithin energji nga tretësira dhe gota, ndaj temperatura bie." },
      { t: "Gazi dioksid karboni është i ftohtë", fb: "Gazi prodhohet në të njëjtën temperaturë si tretësira. Ftohja ndodh sepse reaksioni thith energji." },
      { t: "Soda e bukës u mor nga frigoriferi", fb: "Ishte në temperaturën e dhomës. Rënia e temperaturës vjen nga vetë reaksioni." },
      { t: "Shkumëzimi i ftoh gjithmonë gjërat", fb: "Jo gjithmonë — magnezi që shkumëzon në acid ngrohet. Varet nëse reaksioni jep apo merr energji." }
    ] },
    hazards: ["Tretësira e acidit citrik mund të irritojë sytë.", "Termometrat prej qelqi mund të thyhen."],
    precautions: ["Mbaj syze mbrojtëse.", "Mos e përdor termometrin për të përzier — përdor shkop përzierës.", "Laj duart në fund."],
    disposal: ["Tretësira mund të derdhet në lavaman me shumë ujë."],
    supervisionNote: "Mësuesi përgatit tretësirën e acidit citrik."
  }
},

/* ===== Lemon battery ===== */
{
  id: "lemonbattery", icon: "battery", topic: "electro", grades: "7–9", gmin: 7, gmax: 9,
  supervision: "supervised", time: 30, eqType: "idea", predictAt: 3, ppe: ["goggles"],
  demo: { s: "lemon" },
  video: { id: "qGDABuhQCIU", title: "Make a Lemon Battery: Fun STEM Experiment for Kids", channel: "Clayton's Exploration Station",
    note: { en: "Shows lemons, metal strips and wires lighting an LED.", sq: "Tregon limona, shirita metalikë dhe tela që ndezin një LED." } },
  sources: [
    { org: "Australian National University", title: "How to make a lemon battery", url: "https://science.anu.edu.au/how-make-lemon-battery" },
    { org: "Science World", title: "Lemon Battery", url: "https://www.scienceworld.ca/resource/lemon-battery/" }
  ],
  en: {
    name: "Lemon Battery", short: "Electricity from chemistry",
    hook: "Light an LED with lemons, a nail and a coin.",
    aim: "Build a simple electrochemical cell from lemons, zinc and copper, measure its voltage and connect several in series to light an LED.",
    chemistry: [
      "A battery is made of two different metals (electrodes) in a liquid that conducts electricity (an electrolyte). Lemon juice is acidic and contains ions, so it works as the electrolyte.",
      "Zinc gives up electrons more easily than copper. When the two metals are joined by a wire, electrons flow from the zinc, through the wire, to the copper — that flow is an electric current. One lemon gives about 0.9 V, so several are needed in series to light an LED."
    ],
    equation: "zinc → zinc ions + electrons; electrons flow through the wire to the copper",
    equipment: ["3–4 fresh lemons", "Galvanised (zinc-coated) nails or zinc strips", "Copper strips or copper coins", "Crocodile-clip wires", "Red LED", "Voltmeter or multimeter", "Safety goggles"],
    steps: [
      "Put on goggles. Roll each lemon firmly on the bench to release the juice.",
      "Push one zinc nail and one copper strip into a lemon, about 2 cm apart, without touching.",
      "Connect the voltmeter to the two metals and record the voltage.",
      "Make two more lemon cells. Connect them in series: the copper of one lemon to the zinc of the next.",
      "Connect the LED to the free zinc and copper ends (try it both ways round — LEDs only work one way).",
      "Record the voltage of 1, 2, 3 and 4 lemons in series."
    ],
    predict: { q: "What will happen to the total voltage as you add more lemons in series?", options: ["It increases with each lemon", "It stays the same", "It goes down", "It drops to zero"], answer: 0,
      result: "Each lemon adds roughly 0.9 V. With three or four lemons in series the LED glows faintly — easiest to see in a darkened room." },
    why: { q: "Why does the lemon cell produce electricity?", answer: 0, options: [
      { t: "Zinc gives up electrons more easily than copper, so electrons flow between them through the wire", fb: "The difference in how readily the metals lose electrons creates a voltage. The lemon juice lets ions move inside to complete the circuit." },
      { t: "Lemons store electricity from sunlight", fb: "Lemons don't store electricity. The energy comes from chemical reactions at the metals." },
      { t: "Any two pieces of the same metal would work", fb: "Two identical metals give almost no voltage — you need two different metals." },
      { t: "The juice is electrically charged", fb: "The juice contains ions that let charge move, but the voltage comes from the two different metals." }
    ] },
    hazards: ["Sharp nails and metal strips can cut.", "Lemon juice stings eyes and cuts.", "Lemons used in the experiment must not be eaten (metal contamination)."],
    precautions: ["Wear goggles and push nails in carefully, away from your hand.", "Throw the lemons away afterwards — never eat them.", "Wash your hands at the end."],
    disposal: ["Lemons go in the food or general waste bin.", "Rinse and dry the metal strips so they can be reused."],
    supervisionNote: "Low-voltage, low-hazard activity."
  },
  sq: {
    name: "Bateria me limon", short: "Elektricitet nga kimia",
    hook: "Ndiz një LED me limona, një gozhdë dhe një monedhë.",
    aim: "Ndërto një qelizë të thjeshtë elektrokimike me limona, zink dhe bakër, mat tensionin e saj dhe lidh disa në seri për të ndezur një LED.",
    chemistry: [
      "Një bateri përbëhet nga dy metale të ndryshme (elektroda) në një lëng që përcjell elektricitet (elektrolit). Lëngu i limonit është acid dhe përmban jone, ndaj punon si elektrolit.",
      "Zinku i jep elektronet më lehtë se bakri. Kur dy metalet lidhen me një tel, elektronet rrjedhin nga zinku, nëpër tel, te bakri — kjo rrjedhje është rrymë elektrike. Një limon jep rreth 0.9 V, ndaj nevojiten disa në seri për të ndezur një LED."
    ],
    equation: "zink → jone zinku + elektrone; elektronet rrjedhin nëpër tel drejt bakrit",
    equipment: ["3–4 limona të freskët", "Gozhdë të galvanizuara (të veshura me zink) ose shirita zinku", "Shirita bakri ose monedha bakri", "Tela me kapëse krokodil", "LED e kuqe", "Voltmetër ose multimetër", "Syze mbrojtëse"],
    steps: [
      "Vendos syzet. Rrotulloje fort çdo limon mbi tavolinë që të lëshojë lëngun.",
      "Fut një gozhdë zinku dhe një shirit bakri në një limon, rreth 2 cm larg njëri-tjetrit, pa u prekur.",
      "Lidh voltmetrin me dy metalet dhe shëno tensionin.",
      "Bëj edhe dy qeliza të tjera me limon. Lidhi në seri: bakrin e një limoni me zinkun e limonit tjetër.",
      "Lidh LED-in me skajet e lira të zinkut dhe bakrit (provoje në të dy drejtimet — LED-et punojnë vetëm në një drejtim).",
      "Shëno tensionin e 1, 2, 3 dhe 4 limonave në seri."
    ],
    predict: { q: "Çfarë do të ndodhë me tensionin total ndërsa shton më shumë limona në seri?", options: ["Rritet me çdo limon", "Mbetet i njëjtë", "Ulet", "Bie në zero"], answer: 0,
      result: "Çdo limon shton afërsisht 0.9 V. Me tre ose katër limona në seri LED-i ndriçon dobët — më e lehtë për t'u parë në një dhomë të errësuar." },
    why: { q: "Pse qeliza me limon prodhon elektricitet?", answer: 0, options: [
      { t: "Zinku i jep elektronet më lehtë se bakri, ndaj elektronet rrjedhin midis tyre nëpër tel", fb: "Ndryshimi në sa lehtë i humbasin metalet elektronet krijon një tension. Lëngu i limonit lejon jonet të lëvizin brenda për të mbyllur qarkun." },
      { t: "Limonat ruajnë elektricitet nga drita e diellit", fb: "Limonat nuk ruajnë elektricitet. Energjia vjen nga reaksionet kimike te metalet." },
      { t: "Çdo dy copa të të njëjtit metal do të punonin", fb: "Dy metale të njëjta japin pothuajse zero tension — nevojiten dy metale të ndryshme." },
      { t: "Lëngu është i ngarkuar elektrikisht", fb: "Lëngu përmban jone që lejojnë ngarkesën të lëvizë, por tensioni vjen nga dy metalet e ndryshme." }
    ] },
    hazards: ["Gozhdët e mprehta dhe shiritat metalikë mund të presin.", "Lëngu i limonit djeg sytë dhe plagët.", "Limonat e përdorur në eksperiment nuk duhen ngrënë (ndotje me metale)."],
    precautions: ["Mbaj syze mbrojtëse dhe fut gozhdët me kujdes, larg dorës.", "Hidhi limonat pas eksperimentit — mos i ha kurrë.", "Laj duart në fund."],
    disposal: ["Limonat hidhen në koshin e mbeturinave ushqimore ose të përgjithshme.", "Shpëlaji dhe thaji shiritat metalikë që të ripërdoren."],
    supervisionNote: "Aktivitet me tension të ulët dhe rrezik të ulët."
  }
},

/* ===== Milk plastic ===== */
{
  id: "milkplastic", icon: "milk", topic: "organic", grades: "7–9", gmin: 7, gmax: 9,
  supervision: "supervised", time: 30, eqType: "idea", predictAt: 3, ppe: ["goggles"],
  demo: { s: "beaker", from: "#fafaf9", to: "#fef9c3", precip: "#fffbeb" },
  video: null,
  sources: [
    { org: "Science Buddies", title: "Turn Milk into Plastic!", url: "https://www.sciencebuddies.org/science-fair-projects/project-ideas/Chem_p101/chemistry/turn-milk-into-plastic" }
  ],
  en: {
    name: "Milk Plastic", short: "Natural polymers",
    hook: "Turn warm milk and vinegar into a mouldable plastic.",
    aim: "Separate the protein casein from milk using an acid, and shape it into a simple plastic.",
    chemistry: [
      "Milk contains a protein called casein. Protein molecules are long chains — natural polymers — that are normally curled up and spread through the milk.",
      "Adding an acid like vinegar changes the casein molecules so they uncoil and clump together into white lumps (curds). Squeezed and dried, these tangled chains form a hard, plastic-like material. Plastics are polymers too, which is why early plastics were made from milk."
    ],
    equation: "warm milk + acid → casein curds (polymer) + whey",
    equipment: ["250 mL milk, warmed (not boiled) — by the teacher", "4 tablespoons of white vinegar", "Heat-resistant jug or beaker", "Sieve and paper towels", "Spoon", "Cookie cutters or moulds (optional)", "Safety goggles"],
    steps: [
      "Put on goggles. Your teacher warms the milk until it is hot but not boiling and pours it into the jug.",
      "Add the vinegar and stir slowly for about a minute.",
      "Watch for white lumps forming in a cloudy yellowish liquid.",
      "Pour the mixture through the sieve, letting the liquid drain away.",
      "Press the curds between paper towels to squeeze out as much liquid as possible.",
      "Knead and shape the curds, then leave them to dry for 2 days."
    ],
    predict: { q: "What will happen when the vinegar is stirred into the warm milk?", options: ["White rubbery lumps form", "The milk turns pink", "The milk boils and froths over", "Nothing visible happens"], answer: 0,
      result: "Almost straight away, soft white lumps (curds) form and separate from a thin yellowish liquid (whey). After pressing and drying, the casein becomes a hard, slightly crumbly plastic." },
    why: { q: "Why do lumps form when vinegar is added?", answer: 0, options: [
      { t: "The acid makes casein protein chains uncoil and clump together", fb: "Acid changes the charges on the casein, so the long molecules stick together into curds — a natural polymer." },
      { t: "Vinegar freezes the milk", fb: "Nothing freezes — the milk is warm. The lumps are casein protein clumping together." },
      { t: "The milk burns", fb: "The milk is only warmed. The change is caused by the acid, not by burning." },
      { t: "Vinegar turns into plastic", fb: "The plastic comes from the milk protein. Vinegar just triggers the clumping." }
    ] },
    hazards: ["Hot milk can scald.", "Students with milk allergies should not handle the milk or curds.", "Vinegar stings eyes."],
    precautions: ["The teacher heats the milk; never boil it.", "Wear goggles and handle the jug with care.", "Don't eat anything made in the lab; wash your hands at the end."],
    disposal: ["Pour the whey down the sink with water.", "Put unwanted curds in the food or general bin (they go mouldy if not dried)."],
    supervisionNote: "The teacher heats the milk."
  },
  sq: {
    name: "Plastikë nga qumështi", short: "Polimere natyrale",
    hook: "Kthe qumështin e ngrohtë dhe uthullën në një plastikë që mund të formësohet.",
    aim: "Ndaj proteinën kazeinë nga qumështi me anë të një acidi dhe formësoje në një plastikë të thjeshtë.",
    chemistry: [
      "Qumështi përmban një proteinë që quhet kazeinë. Molekulat e proteinave janë zinxhirë të gjatë — polimere natyrale — që zakonisht janë të mbledhura dhe të shpërndara në qumësht.",
      "Shtimi i një acidi si uthulla i ndryshon molekulat e kazeinës, ndaj ato hapen dhe grumbullohen në copëza të bardha (gjizë). Të shtrydhura dhe të thara, këta zinxhirë të ngatërruar formojnë një material të fortë si plastikë. Edhe plastikat janë polimere, prandaj plastikat e para bëheshin nga qumështi."
    ],
    equation: "qumësht i ngrohtë + acid → copëza kazeine (polimer) + hirrë",
    equipment: ["250 mL qumësht, i ngrohur (jo i vluar) — nga mësuesi", "4 lugë gjelle uthull e bardhë", "Enë ose gotë kimike rezistente ndaj nxehtësisë", "Sitë dhe letër kuzhine", "Lugë", "Forma për biskota ose kallëpe (sipas dëshirës)", "Syze mbrojtëse"],
    steps: [
      "Vendos syzet. Mësuesi e ngroh qumështin derisa të jetë i nxehtë por jo i vluar dhe e derdh në enë.",
      "Shto uthullën dhe përziej ngadalë për rreth një minutë.",
      "Vëzhgo formimin e copëzave të bardha në një lëng të turbullt të verdhemë.",
      "Derdhe përzierjen nëpër sitë, duke e lënë lëngun të kullojë.",
      "Shtyp copëzat midis letrave të kuzhinës për të nxjerrë sa më shumë lëng.",
      "Brumose dhe formësoje masën, pastaj lëre të thahet për 2 ditë."
    ],
    predict: { q: "Çfarë do të ndodhë kur uthulla përzihet me qumështin e ngrohtë?", options: ["Formohen copëza të bardha si gome", "Qumështi bëhet rozë", "Qumështi vlon dhe derdhet me shkumë", "Nuk ndodh asgjë e dukshme"], answer: 0,
      result: "Pothuajse menjëherë formohen copëza të buta të bardha (gjizë) që ndahen nga një lëng i hollë i verdhemë (hirrë). Pas shtypjes dhe tharjes, kazeina bëhet një plastikë e fortë, pak e thërrmueshme." },
    why: { q: "Pse formohen copëza kur shtohet uthulla?", answer: 0, options: [
      { t: "Acidi i bën zinxhirët e proteinës kazeinë të hapen dhe të grumbullohen", fb: "Acidi ndryshon ngarkesat te kazeina, ndaj molekulat e gjata ngjiten me njëra-tjetrën në copëza — një polimer natyral." },
      { t: "Uthulla e ngrin qumështin", fb: "Asgjë nuk ngrin — qumështi është i ngrohtë. Copëzat janë proteina kazeinë që grumbullohet." },
      { t: "Qumështi digjet", fb: "Qumështi vetëm ngrohet. Ndryshimi shkaktohet nga acidi, jo nga djegia." },
      { t: "Uthulla kthehet në plastikë", fb: "Plastika vjen nga proteina e qumështit. Uthulla vetëm e nxit grumbullimin." }
    ] },
    hazards: ["Qumështi i nxehtë mund të përvëlojë.", "Nxënësit me alergji ndaj qumështit nuk duhet të prekin qumështin ose masën.", "Uthulla djeg sytë."],
    precautions: ["Mësuesi e ngroh qumështin; mos e vlo kurrë.", "Mbaj syze mbrojtëse dhe trajtoje enën me kujdes.", "Mos ha asgjë të bërë në laborator; laj duart në fund."],
    disposal: ["Derdhe hirrën në lavaman me ujë.", "Masën e panevojshme hidhe në koshin e ushqimeve ose të përgjithshëm (myket nëse nuk thahet)."],
    supervisionNote: "Mësuesi e ngroh qumështin."
  }
},

/* ===== Limewater breath test ===== */
{
  id: "limewater", icon: "wind", topic: "analysis", grades: "7–9", gmin: 7, gmax: 9,
  supervision: "supervised", time: 15, eqType: "equation", predictAt: 3, ppe: ["goggles"],
  demo: { s: "beaker", from: "#f8fafc", to: "#f8fafc", bubbles: 1, cloudy: "#ffffff" },
  video: { id: "yydUKzRoVrY", title: "Turning Limewater Milky With Just My Breath", channel: "The Aspiring Chemist",
    note: { en: "Breathing gently through a straw into limewater until it turns milky.", sq: "Fryrje e butë me kallam në ujë gëlqereje derisa të turbullohet." } },
  sources: [
    { org: "University of Wisconsin–Madison", title: "Reactions between carbon dioxide and limewater (chemistry demo)", url: "https://www2.chem.wisc.edu/deptfiles/genchem/demonstrations/Gen_Chem_Pages/15precippage/reactions_between_carbon_d.htm" }
  ],
  en: {
    name: "Breath Test", short: "Testing for CO₂",
    hook: "Prove there's carbon dioxide in your breath with one gentle blow.",
    aim: "Use limewater to test for carbon dioxide in the air you breathe out.",
    chemistry: [
      "Limewater is a clear solution of calcium hydroxide. It is the standard test for carbon dioxide: when CO₂ bubbles through it, a white solid called calcium carbonate forms, making the solution look milky.",
      "The air you breathe out contains about 4% carbon dioxide (made by respiration in your cells), compared with only about 0.04% in the air you breathe in — so exhaled air turns limewater milky quickly."
    ],
    equation: "Ca(OH)₂(aq) + CO₂(g) → CaCO₃(s) + H₂O(l)",
    equipment: ["Test tube in a rack, one-third full of limewater", "A clean drinking straw for each student", "A second test tube of limewater for comparison", "Safety goggles"],
    steps: [
      "Put on goggles. Look at the limewater and note that it is clear.",
      "Put your own clean straw into the limewater so the end is near the bottom.",
      "Breathe in through your nose, then breathe out GENTLY through the straw. Never suck!",
      "Keep blowing gently for about 20 seconds.",
      "Compare your tube with the untouched tube of limewater.",
      "Throw your straw away straight after use — never share straws."
    ],
    predict: { q: "What will happen to the limewater when you breathe out through it?", options: ["It turns milky white", "It turns bright pink", "It stays perfectly clear", "It boils"], answer: 0,
      result: "Within a few seconds the clear limewater turns cloudy and milky white. The comparison tube stays clear, showing the change is caused by the carbon dioxide in your breath." },
    why: { q: "Why does the limewater go milky?", answer: 0, options: [
      { t: "Carbon dioxide reacts with calcium hydroxide to make solid calcium carbonate", fb: "Tiny particles of insoluble calcium carbonate form and scatter light, making the liquid look milky." },
      { t: "Your breath is full of water vapour", fb: "Water vapour wouldn't turn limewater milky. The test is specific to carbon dioxide." },
      { t: "Bubbles make any liquid look white", fb: "Blowing through plain water doesn't make it milky. A new solid forms in limewater." },
      { t: "Oxygen from your breath reacts with it", fb: "You breathe out less oxygen than you breathe in. The milkiness is caused by carbon dioxide." }
    ] },
    hazards: ["Limewater (calcium hydroxide solution) can irritate the eyes and skin.", "Sucking instead of blowing could put limewater in your mouth.", "Shared straws spread germs."],
    precautions: ["Wear goggles. Blow gently and never suck.", "Use your own new straw and throw it away afterwards.", "If limewater gets in your mouth, rinse with water and tell the teacher."],
    disposal: ["Pour the limewater down the sink with plenty of water.", "Put straws in the bin."],
    supervisionNote: "The teacher should demonstrate blowing gently before students try."
  },
  sq: {
    name: "Testi i frymëmarrjes", short: "Testimi për CO₂",
    hook: "Provo që në frymën tënde ka dioksid karboni me një fryrje të butë.",
    aim: "Përdor ujë gëlqereje për të testuar praninë e dioksidit të karbonit në ajrin që nxjerr.",
    chemistry: [
      "Uji i gëlqeres është një tretësirë e kthjellët hidroksidi kalciumi. Ai është testi standard për dioksidin e karbonit: kur CO₂ kalon me flluska nëpër të, formohet një lëndë e bardhë e ngurtë që quhet karbonat kalciumi, dhe tretësira duket e qumështtë.",
      "Ajri që nxjerr përmban rreth 4% dioksid karboni (i prodhuar nga frymëmarrja në qelizat e tua), krahasuar me vetëm rreth 0.04% në ajrin që thith — ndaj ajri i nxjerrë e turbullon shpejt ujin e gëlqeres."
    ],
    equation: "Ca(OH)₂(aq) + CO₂(g) → CaCO₃(s) + H₂O(l)",
    equipment: ["Provëz në mbajtëse, një e treta e mbushur me ujë gëlqereje", "Një kallam pijeje i pastër për çdo nxënës", "Një provëz e dytë me ujë gëlqereje për krahasim", "Syze mbrojtëse"],
    steps: [
      "Vendos syzet. Shiko ujin e gëlqeres dhe vër re që është i kthjellët.",
      "Fut kallamin tënd të pastër në ujin e gëlqeres që fundi të jetë afër fundit të provëzës.",
      "Thith ajër nga hunda, pastaj nxirre BUTË nëpër kallam. Mos thith kurrë!",
      "Vazhdo të fryish butë për rreth 20 sekonda.",
      "Krahaso provëzën tënde me provëzën e paprekur me ujë gëlqereje.",
      "Hidhe kallamin menjëherë pas përdorimit — mos i ndaj kurrë kallamet."
    ],
    predict: { q: "Çfarë do t'i ndodhë ujit të gëlqeres kur fryn në të?", options: ["Bëhet i bardhë si qumësht", "Bëhet rozë e ndezur", "Mbetet krejt i kthjellët", "Vlon"], answer: 0,
      result: "Brenda pak sekondash uji i kthjellët i gëlqeres turbullohet dhe bëhet i bardhë si qumësht. Provëza e krahasimit mbetet e kthjellët, që tregon se ndryshimi shkaktohet nga dioksidi i karbonit në frymën tënde." },
    why: { q: "Pse uji i gëlqeres turbullohet?", answer: 0, options: [
      { t: "Dioksidi i karbonit reagon me hidroksidin e kalciumit dhe formon karbonat kalciumi të ngurtë", fb: "Formohen grimca të vogla karbonati kalciumi të patretshëm që shpërndajnë dritën, duke e bërë lëngun të duket si qumësht." },
      { t: "Fryma jote është plot me avull uji", fb: "Avulli i ujit nuk do ta turbullonte ujin e gëlqeres. Testi është specifik për dioksidin e karbonit." },
      { t: "Flluskat e bëjnë çdo lëng të duket i bardhë", fb: "Fryrja në ujë të thjeshtë nuk e turbullon. Në ujin e gëlqeres formohet një lëndë e re e ngurtë." },
      { t: "Oksigjeni i frymës reagon me të", fb: "Nxjerr më pak oksigjen sesa thith. Turbullimi shkaktohet nga dioksidi i karbonit." }
    ] },
    hazards: ["Uji i gëlqeres (tretësirë hidroksidi kalciumi) mund të irritojë sytë dhe lëkurën.", "Nëse thith në vend që të fryish, uji i gëlqeres mund të të hyjë në gojë.", "Kallamet e përbashkëta përhapin mikrobe."],
    precautions: ["Mbaj syze mbrojtëse. Fryj butë dhe mos thith kurrë.", "Përdor kallamin tënd të ri dhe hidhe pas përdorimit.", "Nëse uji i gëlqeres të hyn në gojë, shpëlaje me ujë dhe njofto mësuesin."],
    disposal: ["Derdhe ujin e gëlqeres në lavaman me shumë ujë.", "Hidhi kallamet në kosh."],
    supervisionNote: "Mësuesi duhet të demonstrojë fryrjen e butë para se të provojnë nxënësit."
  }
},

/* ===== Starch detective ===== */
{
  id: "starch", icon: "search", topic: "analysis", grades: "7–9", gmin: 7, gmax: 9,
  supervision: "supervised", time: 20, eqType: "idea", predictAt: 3, ppe: ["goggles"],
  demo: { s: "beaker", from: "#f59e0b", to: "#1e1b4b" },
  video: { id: "TdMqcirMH1A", title: "Reaction of iodine with starch", channel: "Aminulchem Innovation",
    note: { en: "The orange-brown to blue-black colour change in a few seconds.", sq: "Ndryshimi i ngjyrës nga portokalli-kafe në blu-të zezë brenda pak sekondash." } },
  sources: [
    { org: "Science Buddies", title: "Test Your Foods for Starch", url: "https://www.sciencebuddies.org/stem-activities/starch-food-test" }
  ],
  en: {
    name: "Starch Detective", short: "Iodine test",
    hook: "Which foods are hiding starch? One drop of iodine tells you.",
    aim: "Use iodine solution to test a range of foods for starch.",
    chemistry: [
      "Starch is a carbohydrate made of very long chains of glucose that coil into spirals. Iodine solution is orange-brown.",
      "When iodine meets starch, iodine particles slip inside the starch spirals. This complex absorbs light very differently and looks blue-black. Foods without starch leave the iodine orange-brown."
    ],
    equation: "iodine (orange-brown) + starch → blue-black complex",
    equipment: ["Dilute iodine solution in a dropper bottle", "White tile or paper plate", "Small samples: potato, bread, apple, cheese, rice, sugar, cucumber", "Knife (teacher only) for cutting samples", "Results table", "Safety goggles"],
    steps: [
      "Put on goggles. Place small pieces of each food on the white tile and label them.",
      "Predict which foods contain starch and write your predictions in the table.",
      "Add 2 drops of iodine solution to the first sample.",
      "Wait 30 seconds and record the colour.",
      "Test every sample the same way.",
      "Compare your results with your predictions."
    ],
    predict: { q: "What colour will appear when iodine is dropped onto a slice of potato?", options: ["Blue-black", "Bright red", "It stays orange-brown", "White"], answer: 0,
      result: "Potato, bread and rice turn blue-black — they contain lots of starch. Cheese, sugar and cucumber stay orange-brown. Apple may show only a little dark colour." },
    why: { q: "Why does iodine turn blue-black on potato?", answer: 0, options: [
      { t: "Iodine fits inside the coiled starch molecules, forming a blue-black complex", fb: "This complex absorbs most colours of light, so it appears very dark blue-black." },
      { t: "Potato juice is blue", fb: "Potato juice is colourless. The colour change comes from iodine combining with starch." },
      { t: "Iodine burns the potato", fb: "Nothing burns. It's a colour change caused by iodine and starch combining." },
      { t: "All foods turn iodine blue-black", fb: "Cheese and sugar stayed orange-brown, so the test is specific to starch." }
    ] },
    hazards: ["Iodine solution stains skin and clothes and can irritate the eyes.", "Food tested in the lab must not be eaten.", "Knives can cut (teacher only)."],
    precautions: ["Wear goggles and use the dropper carefully.", "Never eat any food used in the lab.", "Wash your hands at the end."],
    disposal: ["Put food samples in the bin.", "Rinse the tile; small amounts of dilute iodine can go down the sink with water."],
    supervisionNote: "The teacher prepares the food samples."
  },
  sq: {
    name: "Detektivi i niseshtesë", short: "Testi me jod",
    hook: "Cilat ushqime fshehin niseshte? Një pikë jodi ta tregon.",
    aim: "Përdor tretësirë jodi për të testuar disa ushqime për praninë e niseshtesë.",
    chemistry: [
      "Niseshteja është një karbohidrat i përbërë nga zinxhirë shumë të gjatë glukoze që mblidhen si spirale. Tretësira e jodit është portokalli-kafe.",
      "Kur jodi takon niseshtenë, grimcat e jodit futen brenda spiraleve të niseshtesë. Ky kompleks e thith dritën shumë ndryshe dhe duket blu-i zi. Ushqimet pa niseshte e lënë jodin portokalli-kafe."
    ],
    equation: "jod (portokalli-kafe) + niseshte → kompleks blu-i zi",
    equipment: ["Tretësirë e holluar jodi në shishe me pikatore", "Pllakë e bardhë ose pjatë letre", "Mostra të vogla: patate, bukë, mollë, djathë, oriz, sheqer, kastravec", "Thikë (vetëm mësuesi) për të prerë mostrat", "Tabelë rezultatesh", "Syze mbrojtëse"],
    steps: [
      "Vendos syzet. Vendos copa të vogla nga çdo ushqim mbi pllakën e bardhë dhe shënoji.",
      "Parashiko cilat ushqime përmbajnë niseshte dhe shkruaji parashikimet në tabelë.",
      "Shto 2 pika tretësirë jodi te mostra e parë.",
      "Prit 30 sekonda dhe shëno ngjyrën.",
      "Testo çdo mostër në të njëjtën mënyrë.",
      "Krahaso rezultatet me parashikimet e tua."
    ],
    predict: { q: "Çfarë ngjyre do të shfaqet kur hidhet jod mbi një fetë patateje?", options: ["Blu-e zezë", "E kuqe e ndezur", "Mbetet portokalli-kafe", "E bardhë"], answer: 0,
      result: "Patatja, buka dhe orizi bëhen blu-të zeza — përmbajnë shumë niseshte. Djathi, sheqeri dhe kastraveci mbeten portokalli-kafe. Molla mund të tregojë vetëm pak ngjyrë të errët." },
    why: { q: "Pse jodi bëhet blu-i zi mbi patate?", answer: 0, options: [
      { t: "Jodi futet brenda molekulave spirale të niseshtesë dhe formon një kompleks blu-të zi", fb: "Ky kompleks thith shumicën e ngjyrave të dritës, ndaj duket blu shumë e errët, pothuajse e zezë." },
      { t: "Lëngu i patates është blu", fb: "Lëngu i patates është i pangjyrë. Ndryshimi i ngjyrës vjen nga bashkimi i jodit me niseshtenë." },
      { t: "Jodi e djeg pataten", fb: "Asgjë nuk digjet. Është një ndryshim ngjyre nga bashkimi i jodit dhe niseshtesë." },
      { t: "Të gjitha ushqimet e bëjnë jodin blu-të zi", fb: "Djathi dhe sheqeri mbetën portokalli-kafe, ndaj testi është specifik për niseshtenë." }
    ] },
    hazards: ["Tretësira e jodit njollos lëkurën dhe rrobat dhe mund të irritojë sytë.", "Ushqimi i testuar në laborator nuk duhet ngrënë.", "Thikat mund të presin (vetëm mësuesi)."],
    precautions: ["Mbaj syze mbrojtëse dhe përdor pikatoren me kujdes.", "Mos ha kurrë ushqim të përdorur në laborator.", "Laj duart në fund."],
    disposal: ["Hidhi mostrat e ushqimit në kosh.", "Shpëlaje pllakën; sasi të vogla jodi të holluar mund të derdhen në lavaman me ujë."],
    supervisionNote: "Mësuesi përgatit mostrat e ushqimit."
  }
},

/* ===== Glow stick race ===== */
{
  id: "glowsticks", icon: "glow", topic: "energy", grades: "7–9", gmin: 7, gmax: 9,
  supervision: "supervised", time: 20, eqType: "idea", predictAt: 3, ppe: ["goggles"],
  demo: { s: "beaker", from: "#e0f2fe", to: "#fde68a", glow: "#a3e635", temp: "up" },
  video: { id: "HvhMWoKZqxU", title: "Ever Wonder Why Glow Sticks Glow?", channel: "Science North",
    note: { en: "A science centre explains the chemistry inside a glow stick.", sq: "Një qendër shkencore shpjegon kiminë brenda një shkopi ndriçues." } },
  sources: [
    { org: "American Chemical Society", title: "Slow the Glow", url: "https://www.acs.org/education/activities/slow-the-glow.html" }
  ],
  en: {
    name: "Glow Stick Race", short: "Light from chemistry",
    hook: "Does a glow stick shine brighter in hot or cold water?",
    aim: "Compare how brightly identical glow sticks glow in hot, room-temperature and ice water, and explain the result using reaction rates.",
    chemistry: [
      "When you bend a glow stick, a thin glass tube inside breaks and two chemicals mix. Their reaction releases energy as light instead of heat — this is called chemiluminescence.",
      "In hot water the molecules move faster and collide more often and with more energy, so the reaction goes faster and the stick glows more brightly (but runs out sooner). In ice water the reaction slows down and the glow is dimmer but lasts longer."
    ],
    equation: "warmer → more frequent, more energetic collisions → faster reaction → brighter, shorter glow",
    equipment: ["3 identical glow sticks of the same colour", "3 clear cups", "Hot tap water (not boiling — handled by the teacher)", "Room-temperature water", "Ice water", "Thermometer", "A dark room or a box to look into"],
    steps: [
      "Fill the three cups with hot, room-temperature and ice water, and record each temperature.",
      "Bend all three glow sticks at the same moment to activate them, and shake them.",
      "Put one stick in each cup at the same time.",
      "Wait 2 minutes, then darken the room.",
      "Compare the brightness and rank the sticks.",
      "Optional: leave them overnight and see which still glows the next day."
    ],
    predict: { q: "Which glow stick will glow most brightly?", options: ["The one in hot water", "The one in ice water", "The one at room temperature", "They will all be exactly the same"], answer: 0,
      result: "The stick in hot water glows most brightly, and the one in ice water is the dimmest. The next day, the ice-water stick is usually the one still glowing." },
    why: { q: "Why does the hot-water glow stick shine more brightly?", answer: 0, options: [
      { t: "Higher temperature speeds up the reaction, so light is released faster", fb: "Faster-moving molecules collide more often with enough energy, so more reactions happen each second." },
      { t: "Hot water conducts light", fb: "Water doesn't make light. The brightness comes from how fast the reaction inside the stick is going." },
      { t: "The heat makes the plastic transparent", fb: "The plastic doesn't change. The difference is the speed of the chemical reaction." },
      { t: "The stick absorbs light from the water", fb: "The water gives no light. All of the light comes from the chemical reaction." }
    ] },
    hazards: ["Hot water can scald.", "The liquid inside a glow stick irritates skin and eyes if the stick breaks open."],
    precautions: ["Never cut, bite or break open a glow stick.", "The teacher pours the hot water.", "If a stick leaks, wash skin with soap and water and tell the teacher."],
    disposal: ["Used glow sticks go in the general waste bin.", "Pour the water down the sink."],
    supervisionNote: "The teacher handles the hot water."
  },
  sq: {
    name: "Gara e shkopinjve ndriçues", short: "Dritë nga kimia",
    hook: "A ndriçon më fort një shkop ndriçues në ujë të nxehtë apo të ftohtë?",
    aim: "Krahaso sa fort ndriçojnë shkopinj ndriçues të njëjtë në ujë të nxehtë, në temperaturën e dhomës dhe në ujë me akull, dhe shpjego rezultatin me shpejtësinë e reaksioneve.",
    chemistry: [
      "Kur e përkul një shkop ndriçues, një tub i hollë qelqi brenda thyhet dhe dy kimikate përzihen. Reaksioni i tyre çliron energji si dritë në vend të nxehtësisë — kjo quhet kimiluminishencë.",
      "Në ujë të nxehtë molekulat lëvizin më shpejt dhe përplasen më shpesh dhe me më shumë energji, ndaj reaksioni shkon më shpejt dhe shkopi ndriçon më fort (por mbaron më shpejt). Në ujë me akull reaksioni ngadalësohet dhe drita është më e zbehtë, por zgjat më shumë."
    ],
    equation: "më ngrohtë → përplasje më të shpeshta dhe më energjike → reaksion më i shpejtë → dritë më e fortë, më e shkurtër",
    equipment: ["3 shkopinj ndriçues të njëjtë me të njëjtën ngjyrë", "3 gota transparente", "Ujë i nxehtë rubineti (jo i vluar — e trajton mësuesi)", "Ujë në temperaturën e dhomës", "Ujë me akull", "Termometër", "Një dhomë e errët ose një kuti për të parë brenda"],
    steps: [
      "Mbush tre gotat me ujë të nxehtë, në temperaturën e dhomës dhe me akull, dhe shëno secilën temperaturë.",
      "Përkul të tre shkopinjtë në të njëjtin moment për t'i aktivizuar dhe tundi.",
      "Vendos një shkop në secilën gotë në të njëjtën kohë.",
      "Prit 2 minuta, pastaj errëso dhomën.",
      "Krahaso ndriçimin dhe renditi shkopinjtë.",
      "Sipas dëshirës: lëri gjatë natës dhe shiko cili ndriçon ende të nesërmen."
    ],
    predict: { q: "Cili shkop ndriçues do të ndriçojë më fort?", options: ["Ai në ujë të nxehtë", "Ai në ujë me akull", "Ai në temperaturën e dhomës", "Të gjithë do të jenë saktësisht njësoj"], answer: 0,
      result: "Shkopi në ujë të nxehtë ndriçon më fort, dhe ai në ujë me akull është më i zbehti. Të nesërmen, zakonisht shkopi i ujit me akull është ai që ndriçon ende." },
    why: { q: "Pse shkopi në ujë të nxehtë ndriçon më fort?", answer: 0, options: [
      { t: "Temperatura më e lartë e përshpejton reaksionin, ndaj drita çlirohet më shpejt", fb: "Molekulat që lëvizin më shpejt përplasen më shpesh me energji të mjaftueshme, ndaj ndodhin më shumë reaksione në sekondë." },
      { t: "Uji i nxehtë përcjell dritën", fb: "Uji nuk prodhon dritë. Ndriçimi vjen nga shpejtësia e reaksionit brenda shkopit." },
      { t: "Nxehtësia e bën plastikën transparente", fb: "Plastika nuk ndryshon. Ndryshimi është shpejtësia e reaksionit kimik." },
      { t: "Shkopi thith dritë nga uji", fb: "Uji nuk jep dritë. E gjithë drita vjen nga reaksioni kimik." }
    ] },
    hazards: ["Uji i nxehtë mund të përvëlojë.", "Lëngu brenda shkopit ndriçues irriton lëkurën dhe sytë nëse shkopi çahet."],
    precautions: ["Mos e pre, mos e kafsho dhe mos e çaj kurrë një shkop ndriçues.", "Mësuesi derdh ujin e nxehtë.", "Nëse një shkop rrjedh, laje lëkurën me sapun dhe ujë dhe njofto mësuesin."],
    disposal: ["Shkopinjtë e përdorur hidhen në koshin e mbeturinave të përgjithshme.", "Derdhe ujin në lavaman."],
    supervisionNote: "Mësuesi trajton ujin e nxehtë."
  }
}
];
