"use strict";
/* ---------- New experiments: rates, enzymes, redox & combustion ---------- */
const EXP_NEW_1 = [
/* ===== Fizzy tablet race ===== */
{
  id: "fizzrace", icon: "clock", topic: "reactions", grades: "7–8", gmin: 7, gmax: 8, level: 1,
  supervision: "supervised", time: 25, eqType: "equation", predictAt: 2, ppe: ["goggles"],
  demo: { s: "rack", tubes: [
    { from: "#e0f2fe", to: "#fef3c7", bubbles: true },
    { from: "#e0f2fe", to: "#fde68a", bubbles: true },
    { from: "#e0f2fe", to: "#fdba74", bubbles: true }
  ] },
  video: null,
  sources: [
    { org: "Science Buddies", title: "Alka-Seltzer Science: The Effect of Temperature on Reaction Time", url: "https://www.sciencebuddies.org/stem-activities/alkaseltzer-science-the-effect-of-temperature-on-reaction-time" },
    { org: "Tufts University (Middle School ChemE)", title: "The Alka Seltzer Reaction", url: "https://sites.tufts.edu/middleschoolcheme/2020/06/19/the-alka-seltzer-reaction/" },
    { org: "Science Buddies", title: "How Fast Does an Alka-Seltzer Tablet Make Gas?", url: "https://www.sciencebuddies.org/science-fair-projects/project-ideas/Chem_p026/chemistry/how-fast-does-an-alka-seltzer-tablet-make-gas" }
  ],
  en: {
    name: "Fizzy Tablet Race", short: "Temperature & rate",
    hook: "Can you make a fizzy tablet vanish faster just by changing the water temperature?",
    aim: "Find out how the temperature of water affects how quickly an effervescent tablet reacts, by timing how long the fizzing lasts.",
    chemistry: [
      "An effervescent (fizzy) tablet contains a solid acid, usually citric acid, mixed with sodium hydrogencarbonate. While the tablet is dry, the particles are held in place and cannot react. When it drops into water, both substances dissolve, their particles are free to move and meet, and they react to make carbon dioxide gas — the fizz.",
      "Particles only react when they collide with enough energy. In warmer water the particles move faster, so they collide more often and more of the collisions have enough energy to react. The reaction is faster and the tablet is used up sooner.",
      "In cold water the particles move more slowly, so there are fewer successful collisions each second and the fizzing lasts much longer. The same amount of gas is made in the end — only the speed of the reaction (the rate) changes."
    ],
    equation: "C₆H₈O₇ + 3NaHCO₃ → Na₃C₆H₅O₇ + 3H₂O + 3CO₂",
    equipment: ["3 identical clear beakers or cups (250 cm³), labelled cold, room and warm", "3 effervescent vitamin C tablets of the same brand — handed out by the teacher", "150 cm³ of ice-cold water (ice removed before the test)", "150 cm³ of water at room temperature", "150 cm³ of warm tap water, about 40 °C (not boiling — poured by the teacher)", "Measuring cylinder (250 cm³)", "Thermometer and stopwatch", "Safety goggles"],
    steps: [
      "Put on goggles. Pour 150 cm³ of cold, room-temperature and warm water into the three labelled beakers.",
      "Measure the temperature of each beaker and write it in a results table.",
      "Drop one tablet into the cold water and start the stopwatch at the same moment. Don't stir.",
      "Stop the stopwatch when the fizzing stops and no tablet is left. Record the time.",
      "Repeat with the room-temperature water and then the warm water, using a new tablet each time.",
      "Draw a bar chart of time against temperature and compare your results with other groups."
    ],
    predict: { q: "Which tablet will finish fizzing first?", options: ["The one in warm water", "The one in cold water", "The one at room temperature", "All three finish at the same time"], answer: 0,
      result: "The tablet in warm water fizzes hard and disappears in less than a minute. At room temperature it takes noticeably longer, and in ice-cold water the fizzing is gentle and can last several minutes. The warmer the water, the faster the reaction." },
    why: { q: "Why does the tablet react faster in warm water?", answer: 0, options: [
      { t: "The particles move faster, so they collide more often and with more energy", fb: "Exactly. More frequent, more energetic collisions mean more successful collisions per second, so carbon dioxide is made faster." },
      { t: "Warm water contains more gas to start with", fb: "It's the other way round — warm water holds less dissolved gas. The bubbles are carbon dioxide made by the reaction." },
      { t: "The heat melts the tablet", fb: "The tablet doesn't melt at 40 °C. It dissolves and reacts — and the reaction is faster because the particles move faster." },
      { t: "Warm water makes more carbon dioxide in total", fb: "Each tablet makes the same total amount of gas. Temperature changes how fast the gas is made, not how much." }
    ] },
    hazards: ["Warm water can scald if it is too hot.", "Effervescent tablets are supplements or medicines and must never be swallowed in a lab.", "Glass beakers can break and cut."],
    precautions: ["Only the teacher pours the warm water — never use boiling water.", "The teacher hands out the tablets; never eat or drink anything in the lab.", "Wear goggles — the fizzing can spit droplets.", "Wipe up spills and wash your hands at the end."],
    disposal: ["Pour the solutions down the sink with plenty of water.", "Rinse and dry the beakers; return unused tablets to the teacher."],
    supervisionNote: "Low-hazard activity: the teacher controls the tablets and pours the warm water.",
    clip: ["Cold, room-temperature and warm water", "Drop in a fizzy tablet", "Warm water fizzes away fastest!"]
  },
  sq: {
    name: "Gara e tabletave shkumëzuese", short: "Temperatura dhe shpejtësia",
    hook: "A mund ta zhdukësh më shpejt një tabletë shkumëzuese vetëm duke ndryshuar temperaturën e ujit?",
    aim: "Zbulo si ndikon temperatura e ujit në shpejtësinë e reaksionit të një tablete shkumëzuese, duke matur sa zgjat shkumëzimi.",
    chemistry: [
      "Një tabletë shkumëzuese (efervescente) përmban një acid të ngurtë, zakonisht acid citrik, të përzier me hidrogjenkarbonat natriumi. Për sa kohë tableta është e thatë, grimcat janë të palëvizshme dhe nuk mund të reagojnë. Kur bie në ujë, të dyja lëndët treten, grimcat e tyre lëvizin lirshëm dhe takohen, dhe reagojnë duke formuar gaz dioksid karboni — flluskat.",
      "Grimcat reagojnë vetëm kur përplasen me energji të mjaftueshme. Në ujë më të ngrohtë grimcat lëvizin më shpejt, ndaj përplasen më shpesh dhe më shumë përplasje kanë energjinë e duhur për të reaguar. Kështu reaksioni bëhet më i shpejtë dhe tableta mbaron më shpejt.",
      "Në ujë të ftohtë grimcat lëvizin më ngadalë, ndaj ka më pak përplasje të suksesshme në sekondë dhe shkumëzimi zgjat shumë më tepër. Në fund formohet e njëjta sasi gazi — ndryshon vetëm shpejtësia e reaksionit."
    ],
    equation: "C₆H₈O₇ + 3NaHCO₃ → Na₃C₆H₅O₇ + 3H₂O + 3CO₂",
    equipment: ["3 gota kimike ose gota transparente të njëjta (250 cm³), të shënuara: e ftohtë, e dhomës, e ngrohtë", "3 tableta shkumëzuese me vitaminë C të së njëjtës markë — i shpërndan mësuesi", "150 cm³ ujë shumë të ftohtë (akulli hiqet para provës)", "150 cm³ ujë në temperaturën e dhomës", "150 cm³ ujë të ngrohtë rubineti, rreth 40 °C (jo të vluar — e hedh mësuesi)", "Cilindër matës (250 cm³)", "Termometër dhe kronometër", "Syze mbrojtëse"],
    steps: [
      "Vendos syzet. Hidh nga 150 cm³ ujë të ftohtë, ujë të dhomës dhe ujë të ngrohtë në tri gotat e shënuara.",
      "Mat temperaturën në secilën gotë dhe shënoje në një tabelë rezultatesh.",
      "Hidh një tabletë në ujin e ftohtë dhe nis kronometrin në të njëjtin çast. Mos e përziej.",
      "Ndalo kronometrin kur shkumëzimi pushon dhe tableta është zhdukur plotësisht. Shëno kohën.",
      "Përsërite me ujin e dhomës dhe pastaj me ujin e ngrohtë, duke përdorur çdo herë një tabletë të re.",
      "Ndërto një diagram me shtylla të kohës kundrejt temperaturës dhe krahaso rezultatet me grupet e tjera."
    ],
    predict: { q: "Cila tabletë do të mbarojë e para së shkumëzuari?", options: ["Ajo në ujin e ngrohtë", "Ajo në ujin e ftohtë", "Ajo në ujin e dhomës", "Të treja mbarojnë njëkohësisht"], answer: 0,
      result: "Tableta në ujin e ngrohtë shkumëzon fort dhe zhduket për më pak se një minutë. Në ujin e dhomës zgjat dukshëm më shumë, ndërsa në ujin shumë të ftohtë shkumëzimi është i qetë dhe mund të zgjasë disa minuta. Sa më i ngrohtë uji, aq më i shpejtë reaksioni." },
    why: { q: "Pse tableta reagon më shpejt në ujë të ngrohtë?", answer: 0, options: [
      { t: "Grimcat lëvizin më shpejt, ndaj përplasen më shpesh dhe me më shumë energji", fb: "Pikërisht. Përplasjet më të shpeshta dhe më energjike japin më shumë përplasje të suksesshme në sekondë, ndaj dioksidi i karbonit formohet më shpejt." },
      { t: "Uji i ngrohtë përmban më shumë gaz që në fillim", fb: "Është e kundërta — uji i ngrohtë mban më pak gaz të tretur. Flluskat janë dioksid karboni i formuar nga reaksioni." },
      { t: "Nxehtësia e shkrin tabletën", fb: "Tableta nuk shkrihet në 40 °C. Ajo tretet dhe reagon — dhe reaksioni është më i shpejtë sepse grimcat lëvizin më shpejt." },
      { t: "Uji i ngrohtë prodhon gjithsej më shumë dioksid karboni", fb: "Çdo tabletë jep të njëjtën sasi totale gazi. Temperatura ndryshon sa shpejt formohet gazi, jo sa shumë." }
    ] },
    hazards: ["Uji i ngrohtë mund të përvëlojë nëse është shumë i nxehtë.", "Tabletat shkumëzuese janë suplemente ose ilaçe dhe nuk duhen gëlltitur kurrë në laborator.", "Gotat prej qelqi mund të thyhen dhe të presin."],
    precautions: ["Ujin e ngrohtë e hedh vetëm mësuesi — mos përdor kurrë ujë të vluar.", "Tabletat i shpërndan mësuesi; mos ha dhe mos pi kurrë asgjë në laborator.", "Mbaj syze mbrojtëse — shkumëzimi mund të spërkasë pika.", "Fshi derdhjet dhe laj duart në fund."],
    disposal: ["Derdhi tretësirat në lavaman me shumë ujë.", "Shpëlaji dhe thaji gotat; ktheja mësuesit tabletat e papërdorura."],
    supervisionNote: "Aktivitet me rrezik të ulët: mësuesi kontrollon tabletat dhe hedh ujin e ngrohtë.",
    clip: ["Ujë i ftohtë, i dhomës dhe i ngrohtë", "Hidh një tabletë shkumëzuese", "Në ujin e ngrohtë shkumëzon më shpejt!"]
  }
},

/* ===== Potato power (catalase) ===== */
{
  id: "catalase", icon: "foam", topic: "reactions", grades: "8–10", gmin: 8, gmax: 10, level: 2,
  supervision: "close", time: 30, eqType: "equation", predictAt: 2, ppe: ["goggles", "gloves"],
  demo: { s: "beaker", from: "#f8fafc", to: "#f1f5f9", level: 0.4, bubbles: 2, foam: "#ffffff", solid: { c: "#fde68a", shrink: false, float: false } },
  video: null,
  sources: [
    { org: "Royal Society of Chemistry", title: "Testing for catalase enzymes", url: "https://edu.rsc.org/experiments/testing-for-catalase-enzymes/425.article" },
    { org: "Cornell Institute for Biology Teachers", title: "The Properties of Enzymes: A Study of Catalase (PDF)", url: "https://prod.cibt.cornell.edu/labs_and_activities/images/Catalase.pdf" },
    { org: "Science Buddies", title: "Enzyme-Catalyzed Reactions — What Affects Their Rates?", url: "https://www.sciencebuddies.org/science-fair-projects/project-ideas/BioChem_p011/biotechnology-techniques/enzyme-catalyzed-reactions-what-affects-their-rates" }
  ],
  en: {
    name: "Potato Power", short: "Enzymes as catalysts",
    hook: "A cube of raw potato makes a liquid foam with oxygen — but a boiled one can't. Why?",
    aim: "Show that the enzyme catalase in raw potato speeds up the breakdown of hydrogen peroxide into water and oxygen, and that boiling destroys the enzyme.",
    chemistry: [
      "Hydrogen peroxide (H₂O₂) slowly breaks down into water and oxygen on its own — so slowly that you would not notice. Living cells make small amounts of hydrogen peroxide as a harmful by-product, so most of them contain an enzyme called catalase to break it down quickly.",
      "Enzymes are biological catalysts: they speed up a reaction without being used up. Catalase has an active site with a precise shape that hydrogen peroxide molecules fit into. One catalase molecule can break down millions of H₂O₂ molecules every second, so oxygen bubbles out fast. The oxygen relights a glowing splint.",
      "Boiling changes the shape of the enzyme for good — it is denatured. Hydrogen peroxide no longer fits the active site, so boiled potato produces almost no bubbles, even though the same chemicals are there."
    ],
    equation: "2H₂O₂(aq) → 2H₂O(l) + O₂(g)",
    equipment: ["3% hydrogen peroxide solution (10 volume) — 15 cm³", "Raw potato, cut into 1 cm cubes by the teacher (3 cubes)", "Potato cubes boiled for 5 minutes and cooled (3 cubes)", "3 boiling tubes in a rack, labelled A, B and C", "10 cm³ measuring cylinder", "Forceps and a ruler", "Wooden splints and a Bunsen burner or lighter — used only by the teacher", "Safety goggles and gloves"],
    steps: [
      "Put on goggles and gloves. Label the boiling tubes A (raw potato), B (boiled potato) and C (no potato) and stand them in the rack.",
      "Use the measuring cylinder to pour 5 cm³ of 3% hydrogen peroxide into each tube.",
      "With forceps, add three cubes of raw potato to tube A and three cubes of boiled potato to tube B. Add nothing to tube C.",
      "Watch for two minutes. Measure the height of the foam in each tube with a ruler after 1 and 2 minutes.",
      "The teacher lights a splint, blows it out so it just glows, and holds it inside the top of tube A — not in the liquid.",
      "The teacher repeats the glowing splint test on tube B. Record all your observations in a table.",
      "Extension: crush a fresh cube of raw potato with a glass rod before adding it to fresh peroxide — does the foam rise faster?"
    ],
    predict: { q: "What will happen in tubes A and B after the potato is added?", options: ["Tube A foams with bubbles; tube B hardly changes", "Both tubes foam the same amount", "Tube B foams more because the potato is softer", "Neither tube changes"], answer: 0,
      result: "Tube A quickly fills with bubbles and a white foam climbs up the tube, and the glowing splint relights. The boiled potato in tube B gives only a few tiny bubbles and the splint does not relight. Tube C shows almost no change." },
    why: { q: "Why does boiled potato make almost no bubbles?", answer: 0, options: [
      { t: "Boiling denatures catalase, so its active site loses its shape", fb: "Right. Heat permanently changes the enzyme's shape, so hydrogen peroxide can no longer fit — the catalyst stops working." },
      { t: "Boiling removes all the water from the potato", fb: "A boiled potato is still full of water. What changes is the shape of the enzyme molecules." },
      { t: "Enzymes only work when they are cold", fb: "Enzymes work faster as they warm up a little — until they get too hot. At boiling temperature the enzyme's shape is destroyed for good, so it stops working." },
      { t: "Boiled potato is too soft to react", fb: "Softness has nothing to do with it — in fact, crushed raw potato works even faster. The enzyme has been denatured by heat." }
    ] },
    hazards: ["3% hydrogen peroxide irritates the eyes and skin.", "The glowing splint and the flame can cause burns.", "Knives used to cut the potato are sharp."],
    precautions: ["Wear goggles and gloves, and use only the 3% hydrogen peroxide your teacher gives you.", "Only the teacher handles the splint and flame; keep hair and sleeves away.", "The teacher cuts and boils the potato before the lesson.", "Never eat the potato or anything else in the lab, and wash your hands at the end."],
    disposal: ["Pour the liquids down the sink with plenty of water.", "Put the potato pieces in the bin, not the sink.", "Put used splints in a beaker of water, then in the bin."],
    supervisionNote: "Close supervision: students handle hydrogen peroxide, and only the teacher carries out the glowing splint test.",
    clip: ["Hydrogen peroxide and potato cubes", "Drop raw potato into the peroxide", "Oxygen foam rises — the enzyme at work!"]
  },
  sq: {
    name: "Fuqia e patates", short: "Enzimat si katalizatorë",
    hook: "Një kubik patateje të pazier e bën një lëng të shkumëzojë me oksigjen — kurse një patate e zier jo. Pse?",
    aim: "Trego se enzima katalazë në pataten e pazier e përshpejton zbërthimin e peroksidit të hidrogjenit në ujë dhe oksigjen, dhe se zierja e shkatërron enzimën.",
    chemistry: [
      "Peroksidi i hidrogjenit (H₂O₂) zbërthehet vetvetiu në ujë dhe oksigjen — por aq ngadalë sa nuk e vë re. Qelizat e gjalla prodhojnë sasi të vogla peroksidi hidrogjeni si nënprodukt të dëmshëm, ndaj shumica e tyre përmbajnë një enzimë që quhet katalazë, e cila e zbërthen shpejt.",
      "Enzimat janë katalizatorë biologjikë: e përshpejtojnë një reaksion pa u harxhuar. Katalaza ka një qendër aktive me formë të saktë, ku futen molekulat e peroksidit të hidrogjenit. Një molekulë katalaze mund të zbërthejë miliona molekula H₂O₂ në sekondë, ndaj oksigjeni del me flluska me shpejtësi. Oksigjeni e rindez një ashkël që vetëm vezullon.",
      "Zierja e ndryshon formën e enzimës përgjithmonë — enzima denatyrohet. Peroksidi i hidrogjenit nuk futet më në qendrën aktive, ndaj patatja e zier nuk jep pothuajse asnjë flluskë, edhe pse lëndët kimike janë po ato."
    ],
    equation: "2H₂O₂(aq) → 2H₂O(l) + O₂(g)",
    equipment: ["Tretësirë peroksidi hidrogjeni 3% (10 vëllime) — 15 cm³", "Patate e pazier, e prerë nga mësuesi në kubikë 1 cm (3 kubikë)", "Kubikë patateje të zier për 5 minuta dhe të ftohur (3 kubikë)", "3 provëza të mëdha në mbajtëse, të shënuara A, B dhe C", "Cilindër matës 10 cm³", "Piskatore dhe vizore", "Ashkla druri dhe llambë Bunsen ose çakmak — i përdor vetëm mësuesi", "Syze mbrojtëse dhe doreza"],
    steps: [
      "Vendos syzet dhe dorezat. Shëno provëzat A (patate e pazier), B (patate e zier) dhe C (pa patate) dhe vendosi në mbajtëse.",
      "Me cilindrin matës, hidh 5 cm³ peroksid hidrogjeni 3% në secilën provëz.",
      "Me piskatore, shto tre kubikë patate të pazier në provëzën A dhe tre kubikë patate të zier në provëzën B. Në provëzën C mos shto asgjë.",
      "Vëzhgo për dy minuta. Mat me vizore lartësinë e shkumës në secilën provëz pas 1 dhe 2 minutash.",
      "Mësuesi ndez një ashkël, e shuan me një frymë që të vezullojë vetëm, dhe e mban brenda pjesës së sipërme të provëzës A — jo në lëng.",
      "Mësuesi e përsërit provën me ashklën që vezullon te provëza B. Shëno të gjitha vëzhgimet në një tabelë.",
      "Zgjerim: shtyp një kubik të ri patateje të pazier me një shkop qelqi para se ta hedhësh në peroksid të freskët — a ngrihet shkuma më shpejt?"
    ],
    predict: { q: "Çfarë do të ndodhë në provëzat A dhe B pasi të shtohet patatja?", options: ["Provëza A shkumëzon me flluska; provëza B pothuajse nuk ndryshon", "Të dyja provëzat shkumëzojnë njësoj", "Provëza B shkumëzon më shumë sepse patatja është më e butë", "Asnjëra provëz nuk ndryshon"], answer: 0,
      result: "Provëza A mbushet shpejt me flluska dhe një shkumë e bardhë ngjitet lart, ndërsa ashkla që vezullon rindizet. Patatja e zier në provëzën B jep vetëm pak flluska të vogla dhe ashkla nuk rindizet. Në provëzën C nuk vihet re pothuajse asnjë ndryshim." },
    why: { q: "Pse patatja e zier nuk jep pothuajse asnjë flluskë?", answer: 0, options: [
      { t: "Zierja e denatyron katalazën, ndaj qendra e saj aktive humbet formën", fb: "E saktë. Nxehtësia e ndryshon përgjithmonë formën e enzimës, ndaj peroksidi i hidrogjenit nuk futet më — katalizatori pushon së punuari." },
      { t: "Zierja ia heq patates gjithë ujin", fb: "Patatja e zier është ende plot ujë. Ajo që ndryshon është forma e molekulave të enzimës." },
      { t: "Enzimat punojnë vetëm kur janë të ftohta", fb: "Enzimat punojnë më shpejt kur ngrohen pak — derisa nxehen tepër. Në temperaturën e vlimit forma e enzimës shkatërrohet përgjithmonë, ndaj ajo nuk punon më." },
      { t: "Patatja e zier është shumë e butë për të reaguar", fb: "Butësia nuk ka lidhje — madje patatja e pazier e shtypur punon edhe më shpejt. Enzima është denatyruar nga nxehtësia." }
    ] },
    hazards: ["Peroksidi i hidrogjenit 3% irriton sytë dhe lëkurën.", "Ashkla që vezullon dhe flaka mund të shkaktojnë djegie.", "Thikat për prerjen e patates janë të mprehta."],
    precautions: ["Mbaj syze mbrojtëse dhe doreza, dhe përdor vetëm peroksidin e hidrogjenit 3% që të jep mësuesi.", "Ashklën dhe flakën i trajton vetëm mësuesi; mbaji flokët dhe mëngët larg.", "Mësuesi e pret dhe e zien pataten para orës.", "Mos ha kurrë pataten apo diçka tjetër në laborator dhe laj duart në fund."],
    disposal: ["Derdhi lëngjet në lavaman me shumë ujë.", "Hidhi copat e patates në kosh, jo në lavaman.", "Vendosi ashklat e përdorura në një gotë me ujë, pastaj hidhi në kosh."],
    supervisionNote: "Mbikëqyrje e afërt: nxënësit punojnë me peroksid hidrogjeni dhe vetëm mësuesi e bën provën me ashklën që vezullon.",
    clip: ["Peroksid hidrogjeni dhe kubikë patateje", "Hidh patate të pazier në peroksid", "Ngrihet shkuma e oksigjenit — enzima punon!"]
  }
},

/* ===== Burning steel wool gains mass ===== */
{
  id: "steelwool", icon: "sparkle", topic: "reactions", grades: "9–10", gmin: 9, gmax: 10, level: 2,
  supervision: "demo", time: 15, eqType: "equation", predictAt: 3, ppe: ["goggles", "hair"],
  demo: { s: "flame", color: "#fb923c" },
  video: null,
  sources: [
    { org: "Royal Society of Chemistry", title: "The combustion of iron wool", url: "https://edu.rsc.org/experiments/the-combustion-of-iron-wool/717.article" },
    { org: "Nuffield Foundation", title: "Combustion of iron wool (teacher and student sheets, PDF)", url: "https://www.nuffieldfoundation.org/sites/default/files/files/TC%20Iron%20wool%20-%20merged%20PDF.pdf" },
    { org: "The Wonder of Science", title: "Burning Steel Wool", url: "https://thewonderofscience.com/phenomenon/2018/7/8/burning-steel-wool" }
  ],
  en: {
    name: "Steel Wool That Gets Heavier", short: "Conservation of mass",
    hook: "Set fire to a metal and it ends up heavier than when it started!",
    aim: "Observe steel wool burning in air (teacher demonstration) and explain why the product has a greater mass than the iron it came from.",
    chemistry: [
      "Steel wool is made of very thin strands of iron with a huge surface area, so oxygen from the air can reach lots of iron atoms at once. Once it is lit, the iron reacts quickly and exothermically with oxygen, glowing and throwing off orange sparks.",
      "The product is iron oxide, a dark, brittle solid. No gas escapes in this reaction — instead, oxygen atoms from the air join on to the iron atoms. The product contains the iron plus the oxygen, so the balance reading goes up.",
      "This does not break the law of conservation of mass. Atoms are not created or destroyed: the mass of the iron plus the mass of the oxygen used equals the mass of the iron oxide. The 'extra' mass was there all along — in the air."
    ],
    equation: "4Fe(s) + 3O₂(g) → 2Fe₂O₃(s)",
    equipment: ["About 3 g of fine steel wool (grade 0 or finer), with no soap or oil", "Top-pan balance reading to 0.01 g", "Large heat-resistant mat to protect the balance", "9 V battery or a gas lighter to light the wool", "Tongs and gloves for handling the wool", "Fire blanket and safety screen nearby", "Safety goggles for everyone"],
    steps: [
      "Everyone puts on goggles. Students stand at least 2 metres back; the teacher ties back long hair and clears away paper and anything flammable.",
      "Wearing gloves, the teacher teases the steel wool into a loose, fluffy ball so that air can reach every strand.",
      "The teacher puts the heat-resistant mat on the balance, places the steel wool in the middle and records the starting mass.",
      "The teacher lights the steel wool by touching it briefly with both terminals of a 9 V battery (or a gas lighter), then removes the battery and steps back.",
      "Everyone watches the glowing sparks spread through the wool — and watches the balance reading.",
      "When the wool has stopped glowing, the teacher records the final mass and calculates the change.",
      "Once it is cool, the teacher shows the class the dark, brittle product and compares it with unburnt steel wool."
    ],
    predict: { q: "What will happen to the balance reading as the steel wool burns?", options: ["It goes up", "It goes down", "It stays exactly the same", "It drops to zero"], answer: 0,
      result: "The steel wool glows bright orange and sparks spread through the ball. The balance reading slowly rises — often by a few tenths of a gram — and the strands are left dark grey to black and brittle." },
    why: { q: "Why does the mass increase when steel wool burns?", answer: 0, options: [
      { t: "Oxygen atoms from the air join on to the iron to make iron oxide", fb: "Yes. The product contains iron and oxygen, so it is heavier than the iron alone. Mass is still conserved — the oxygen came from the air." },
      { t: "Burning adds heat, and heat has mass", fb: "Heat is energy, not matter, and it doesn't make things heavier on a balance. The extra mass is oxygen." },
      { t: "The burnt wool is denser, so it weighs more", fb: "Density is mass per volume — a denser lump with the same mass would weigh the same. The mass goes up because oxygen atoms have been added." },
      { t: "Mass is created in a chemical reaction", fb: "Atoms are never created or destroyed in a chemical reaction. The extra mass was already there, as oxygen in the air." }
    ] },
    hazards: ["Burning steel wool throws out hot sparks that can cause burns and start fires.", "The product and the mat stay hot for several minutes.", "Steel wool strands can splinter into skin and eyes.", "A 9 V battery touching steel wool can start a fire unexpectedly — they must be stored apart."],
    precautions: ["Teacher demonstration only, with students at least 2 metres away behind a safety screen.", "Clear the area of paper and flammable materials and keep a fire blanket ready.", "Everyone wears goggles; the teacher wears gloves to handle the wool and uses tongs for the hot residue.", "Store steel wool and batteries separately."],
    disposal: ["When completely cool, the iron oxide can go in the bin.", "Unused steel wool goes back to the teacher's store, away from batteries."],
    supervisionNote: "Teacher demonstration only: students watch from at least 2 metres away behind a safety screen.",
    clip: ["Fluffy steel wool on a balance", "Light it with a battery", "It glows, sparks — and gets heavier!"]
  },
  sq: {
    name: "Leshi i çelikut që rëndohet", short: "Ruajtja e masës",
    hook: "Vëri zjarrin një metali dhe në fund ai peshon më shumë se në fillim!",
    aim: "Vëzhgo djegien e leshit të çelikut në ajër (demonstrim nga mësuesi) dhe shpjego pse produkti ka masë më të madhe se hekuri nga i cili u formua.",
    chemistry: [
      "Leshi i çelikut përbëhet nga fije shumë të holla hekuri me sipërfaqe shumë të madhe, ndaj oksigjeni i ajrit arrin njëkohësisht te shumë atome hekuri. Pasi ndizet, hekuri reagon shpejt dhe në mënyrë ekzotermike me oksigjenin, duke u skuqur dhe duke lëshuar shkëndija portokalli.",
      "Produkti është oksid hekuri, një lëndë e ngurtë e errët dhe e thyeshme. Në këtë reaksion nuk del asnjë gaz — përkundrazi, atomet e oksigjenit nga ajri bashkohen me atomet e hekurit. Produkti përmban hekurin plus oksigjenin, ndaj leximi i peshores rritet.",
      "Kjo nuk e shkel ligjin e ruajtjes së masës. Atomet nuk krijohen dhe nuk zhduken: masa e hekurit plus masa e oksigjenit të përdorur është e barabartë me masën e oksidit të hekurit. Masa ‘shtesë’ ishte gjithmonë aty — në ajër."
    ],
    equation: "4Fe(s) + 3O₂(g) → 2Fe₂O₃(s)",
    equipment: ["Rreth 3 g lesh çeliku i imët (shkalla 0 ose më i imët), pa sapun dhe pa vaj", "Peshore elektronike me saktësi 0.01 g", "Pllakë e madhe rezistente ndaj nxehtësisë për të mbrojtur peshoren", "Bateri 9 V ose çakmak me gaz për ta ndezur leshin", "Mashë dhe doreza për të prekur leshin", "Batanije zjarri dhe mburojë sigurie pranë", "Syze mbrojtëse për të gjithë"],
    steps: [
      "Të gjithë vendosin syzet. Nxënësit qëndrojnë të paktën 2 metra larg; mësuesi lidh flokët e gjatë dhe largon letrat dhe çdo gjë të ndezshme.",
      "Me doreza, mësuesi e hap leshin e çelikut në një top të lirshëm e të butë, që ajri të arrijë te çdo fije.",
      "Mësuesi vendos pllakën rezistente mbi peshore, vendos leshin e çelikut në mes dhe shënon masën fillestare.",
      "Mësuesi e ndez leshin duke e prekur shkurt me të dy polet e një baterie 9 V (ose me çakmak), pastaj e largon baterinë dhe tërhiqet prapa.",
      "Të gjithë vëzhgojnë shkëndijat e skuqura që përhapen nëpër lesh — dhe leximin e peshores.",
      "Kur leshi pushon së skuquri, mësuesi shënon masën përfundimtare dhe llogarit ndryshimin.",
      "Pasi të ftohet, mësuesi i tregon klasës produktin e errët dhe të thyeshëm dhe e krahason me lesh çeliku të padjegur."
    ],
    predict: { q: "Çfarë do të ndodhë me leximin e peshores ndërsa digjet leshi i çelikut?", options: ["Rritet", "Ulet", "Mbetet saktësisht i njëjtë", "Bie në zero"], answer: 0,
      result: "Leshi i çelikut shndrit me ngjyrë portokalli të ndezur dhe shkëndijat përhapen nëpër top. Leximi i peshores rritet ngadalë — shpesh me disa të dhjeta të gramit — dhe fijet mbeten gri të errëta deri në të zeza dhe të thyeshme." },
    why: { q: "Pse rritet masa kur digjet leshi i çelikut?", answer: 0, options: [
      { t: "Atomet e oksigjenit nga ajri bashkohen me hekurin dhe formojnë oksid hekuri", fb: "Po. Produkti përmban hekur dhe oksigjen, ndaj është më i rëndë se hekuri i vetëm. Masa ruhet gjithsesi — oksigjeni erdhi nga ajri." },
      { t: "Djegia shton nxehtësi, dhe nxehtësia ka masë", fb: "Nxehtësia është energji, jo lëndë, dhe nuk i bën gjërat më të rënda në peshore. Masa shtesë është oksigjeni." },
      { t: "Leshi i djegur është më i dendur, ndaj peshon më shumë", fb: "Dendësia është masa për njësi vëllimi — një copë më e dendur me të njëjtën masë do të peshonte njësoj. Masa rritet sepse janë shtuar atome oksigjeni." },
      { t: "Në një reaksion kimik krijohet masë", fb: "Atomet nuk krijohen dhe nuk zhduken kurrë në një reaksion kimik. Masa shtesë ishte tashmë aty, si oksigjen në ajër." }
    ] },
    hazards: ["Leshi i çelikut që digjet lëshon shkëndija të nxehta që mund të shkaktojnë djegie dhe zjarr.", "Produkti dhe pllaka mbeten të nxehta për disa minuta.", "Fijet e leshit të çelikut mund të futen si ashkla në lëkurë dhe në sy.", "Një bateri 9 V që prek leshin e çelikut mund të ndezë zjarr papritur — ato duhen ruajtur veçmas."],
    precautions: ["Vetëm demonstrim nga mësuesi, me nxënësit të paktën 2 metra larg pas një mburoje sigurie.", "Largo nga zona letrat dhe lëndët e ndezshme dhe mbaj gati një batanije zjarri.", "Të gjithë mbajnë syze; mësuesi mban doreza kur prek leshin dhe përdor mashë për mbetjet e nxehta.", "Ruaji leshin e çelikut dhe bateritë veç e veç."],
    disposal: ["Kur të jetë ftohur plotësisht, oksidi i hekurit mund të hidhet në kosh.", "Leshi i papërdorur kthehet në depon e mësuesit, larg baterive."],
    supervisionNote: "Vetëm demonstrim nga mësuesi: nxënësit vëzhgojnë të paktën 2 metra larg, pas një mburoje sigurie.",
    clip: ["Lesh çeliku i butë mbi peshore", "Ndize me një bateri", "Skuqet, shkëndijon — dhe rëndohet!"]
  }
},

/* ===== Traffic light reaction ===== */
{
  id: "trafficlight", icon: "chroma", topic: "reactions", grades: "10–12", gmin: 10, gmax: 12, level: 3,
  supervision: "demo", time: 20, eqType: "idea", predictAt: 4, ppe: ["goggles", "gloves", "coat"],
  demo: { s: "beaker", from: "#16a34a", to: "#facc15", level: 0.6, delay: true },
  video: null,
  sources: [
    { org: "Carolina Biological Supply", title: "Traffic Light Demonstration", url: "https://knowledge.carolina.com/discipline/physical-science/color-change-chemical-reaction/" },
    { org: "Purdue University", title: "19.2 The Traffic Light Demonstration", url: "https://chemed.chem.purdue.edu/genchem/demosheets/19.2.html" },
    { org: "LibreTexts Chemistry", title: "The Traffic Light Demonstration", url: "https://chem.libretexts.org/Ancillary_Materials/Demos_Techniques_and_Experiments/Lecture_Demonstrations/Additional_Demos/The_Traffic_Light_Demonstration" }
  ],
  en: {
    name: "Traffic Light Reaction", short: "Redox colour changes",
    hook: "Shake a flask and it flicks from yellow to red to green — then slowly changes back, all by itself.",
    aim: "Observe how dissolved oxygen and glucose take turns to oxidise and reduce the indicator indigo carmine, giving a repeatable green–red–yellow colour cycle (teacher demonstration).",
    chemistry: [
      "Indigo carmine is a redox indicator: its colour depends on whether it has gained or lost electrons. In alkaline solution its oxidised form is green, its fully reduced form is yellow, and a half-reduced intermediate in between is red.",
      "Glucose in alkaline solution is a reducing agent. It slowly gives electrons to the indicator, so on standing the solution changes from green to red and then yellow, while the glucose itself is oxidised. Shaking the flask dissolves oxygen from the air above the liquid. Oxygen is an oxidising agent and quickly takes the electrons back, so the colour returns to red, or all the way to green.",
      "The amount of dissolved oxygen decides how far the colour goes: a gentle swirl dissolves a little oxygen and only reaches red, while a vigorous shake reaches green. Because oxidation by oxygen is fast and reduction by glucose is slow, the cycle can be repeated many times — until the glucose is used up and the colours fade to a brownish yellow."
    ],
    equation: "shake: O₂ oxidises the indicator (yellow → red → green);  stand: glucose reduces it (green → red → yellow)",
    equipment: ["1 dm³ conical flask with a rubber stopper", "7.5 g glucose dissolved in 375 cm³ of lukewarm water (about 35 °C)", "A small spatula tip (about 0.05 g) of indigo carmine", "125 cm³ of 0.75 mol/dm³ sodium hydroxide solution (corrosive) — about 0.2 mol/dm³ once mixed", "Two 250 cm³ beakers and a glass rod", "Tray to stand the flask on and a white background", "Goggles for everyone; gloves and a lab coat for the teacher"],
    steps: [
      "Everyone puts on goggles. Students watch from a safe distance; the teacher wears gloves and a lab coat.",
      "The teacher dissolves the indigo carmine in the warm glucose solution until it is deep blue, then pours it into the conical flask.",
      "The teacher adds the sodium hydroxide solution, swirls the flask gently and inserts the stopper firmly. The solution turns green.",
      "The flask is left to stand on the tray. Everyone watches the colour change over the next minute or two.",
      "When the solution is yellow, the teacher swirls the flask gently, holding the stopper down.",
      "The teacher then shakes the flask vigorously for a few seconds and puts it down again.",
      "The teacher repeats the cycle several times; students record the colours and how long each stage lasts."
    ],
    predict: { q: "The yellow flask is now shaken. What colour change do you expect?", options: ["It goes back through red to green, then fades to yellow again", "It stays yellow — the reaction has finished", "It turns colourless", "It turns blue and stays blue"], answer: 0,
      result: "A gentle swirl turns the yellow solution red; a vigorous shake turns it green. Left to stand, it fades back through red to yellow within about a minute, and the cycle repeats every time the flask is shaken." },
    why: { q: "Why does shaking the flask turn the solution back to green?", answer: 0, options: [
      { t: "Shaking dissolves oxygen, which oxidises the indicator back to its green form", fb: "Correct. Oxygen takes electrons back from the reduced indicator. When the dissolved oxygen is used up, glucose reduces the indicator again." },
      { t: "Shaking mixes the glucose and makes it react faster", fb: "Glucose is the reducing agent — it drives the change towards yellow. The green comes from the oxygen that dissolves when the flask is shaken." },
      { t: "Shaking warms the solution, which changes the colour", fb: "Shaking hardly changes the temperature. The key is the oxygen from the air in the flask dissolving into the liquid." },
      { t: "The indicator is a pH indicator, and the pH changes when the flask is shaken", fb: "Here indigo carmine acts as a redox indicator. The pH stays strongly alkaline; the colour depends on whether the indicator is oxidised or reduced." }
    ] },
    hazards: ["Sodium hydroxide solution is corrosive at 0.75 mol/dm³ and an irritant once diluted; it can seriously damage the eyes.", "Indigo carmine is harmful if swallowed and stains skin and clothing.", "The stopper can pop out when the flask is shaken, spraying alkaline solution."],
    precautions: ["Teacher demonstration only; goggles for everyone, and gloves and a lab coat for the teacher.", "Hold the stopper down firmly and shake over a tray, pointing the flask away from people.", "Make up the solutions just before the lesson — the colour change slows down as the glucose is used up.", "Rinse any splashes on skin with plenty of water."],
    disposal: ["The teacher dilutes the solution with plenty of water (or neutralises it) and pours it down the sink, following school rules."],
    supervisionNote: "Teacher demonstration only: the teacher handles the sodium hydroxide and shakes the flask while students watch.",
    clip: ["A green solution in a stoppered flask", "Leave it to stand… then shake", "Green → red → yellow — shake to restart!"]
  },
  sq: {
    name: "Reaksioni i semaforit", short: "Ndryshime ngjyre redoks",
    hook: "Tund një kolbë dhe ngjyra kalon nga e verdhë në të kuqe e në jeshile — pastaj kthehet ngadalë vetë.",
    aim: "Vëzhgo si oksigjeni i tretur dhe glukoza e oksidojnë dhe e reduktojnë me radhë treguesin indigo karmin, duke dhënë një cikël ngjyrash jeshile–e kuqe–e verdhë që përsëritet (demonstrim nga mësuesi).",
    chemistry: [
      "Indigo karmini është tregues redoks: ngjyra e tij varet nga fakti nëse ka fituar apo ka humbur elektrone. Në tretësirë bazike forma e oksiduar është jeshile, forma plotësisht e reduktuar është e verdhë, ndërsa një formë e ndërmjetme, gjysmë e reduktuar, është e kuqe.",
      "Glukoza në tretësirë bazike është reduktues. Ajo i jep ngadalë elektrone treguesit, ndaj kur kolba qëndron, tretësira kalon nga jeshile në të kuqe dhe pastaj në të verdhë, ndërsa vetë glukoza oksidohet. Tundja e kolbës tret oksigjenin e ajrit mbi lëng. Oksigjeni është oksidues dhe i merr shpejt elektronet mbrapsht, ndaj ngjyra kthehet në të kuqe ose deri në jeshile.",
      "Sasia e oksigjenit të tretur përcakton deri ku shkon ngjyra: një rrotullim i lehtë tret pak oksigjen dhe arrin vetëm te e kuqja, kurse një tundje e fortë arrin te jeshilja. Meqë oksidimi nga oksigjeni është i shpejtë dhe reduktimi nga glukoza i ngadaltë, cikli mund të përsëritet shumë herë — derisa glukoza të harxhohet dhe ngjyrat të zbehen në një të verdhë në kafe."
    ],
    equation: "tundje: O₂ e oksidon treguesin (e verdhë → e kuqe → jeshile);  qëndrim: glukoza e redukton (jeshile → e kuqe → e verdhë)",
    equipment: ["Kolbë konike 1 dm³ me tapë gome", "7.5 g glukozë të tretur në 375 cm³ ujë të vakët (rreth 35 °C)", "Pak indigo karmin në majë të spatulës (rreth 0.05 g)", "125 cm³ tretësirë hidroksidi natriumi 0.75 mol/dm³ (gërryese) — rreth 0.2 mol/dm³ pas përzierjes", "Dy gota kimike 250 cm³ dhe një shkop qelqi", "Tabaka për kolbën dhe një sfond i bardhë", "Syze për të gjithë; doreza dhe përparëse laboratori për mësuesin"],
    steps: [
      "Të gjithë vendosin syzet. Nxënësit vëzhgojnë nga një largësi e sigurt; mësuesi mban doreza dhe përparëse laboratori.",
      "Mësuesi e tret indigo karminin në tretësirën e vakët të glukozës derisa të bëhet blu e thellë, pastaj e hedh në kolbën konike.",
      "Mësuesi shton tretësirën e hidroksidit të natriumit, e rrotullon lehtë kolbën dhe e mbyll fort me tapë. Tretësira bëhet jeshile.",
      "Kolba lihet të qëndrojë mbi tabaka. Të gjithë vëzhgojnë si ndryshon ngjyra gjatë një-dy minutave.",
      "Kur tretësira bëhet e verdhë, mësuesi e rrotullon lehtë kolbën, duke e mbajtur tapën të shtypur.",
      "Pastaj mësuesi e tund fort kolbën për disa sekonda dhe e lë përsëri poshtë.",
      "Mësuesi e përsërit ciklin disa herë; nxënësit shënojnë ngjyrat dhe sa zgjat secila fazë."
    ],
    predict: { q: "Kolba e verdhë tani tundet. Çfarë ndryshimi ngjyre pret?", options: ["Kthehet përmes së kuqes në jeshile, pastaj zbehet sërish në të verdhë", "Mbetet e verdhë — reaksioni ka mbaruar", "Bëhet e pangjyrë", "Bëhet blu dhe mbetet blu"], answer: 0,
      result: "Një rrotullim i lehtë e kthen tretësirën e verdhë në të kuqe; një tundje e fortë e bën jeshile. Kur lihet të qëndrojë, zbehet përsëri përmes së kuqes në të verdhë brenda rreth një minute, dhe cikli përsëritet sa herë që tundet kolba." },
    why: { q: "Pse tundja e kolbës e kthen tretësirën në jeshile?", answer: 0, options: [
      { t: "Tundja tret oksigjen, i cili e oksidon treguesin përsëri në formën jeshile", fb: "E saktë. Oksigjeni i merr elektronet mbrapsht treguesit të reduktuar. Kur oksigjeni i tretur harxhohet, glukoza e redukton përsëri treguesin." },
      { t: "Tundja e përzien glukozën dhe e bën të reagojë më shpejt", fb: "Glukoza është reduktuesi — ajo e çon ngjyrën drejt së verdhës. Jeshilja vjen nga oksigjeni që tretet kur tundet kolba." },
      { t: "Tundja e ngroh tretësirën dhe kjo ndryshon ngjyrën", fb: "Tundja pothuajse nuk e ndryshon temperaturën. Çelësi është oksigjeni i ajrit në kolbë që tretet në lëng." },
      { t: "Treguesi është tregues pH dhe pH ndryshon kur tundet kolba", fb: "Këtu indigo karmini vepron si tregues redoks. pH mbetet fort bazik; ngjyra varet nga fakti nëse treguesi është i oksiduar apo i reduktuar." }
    ] },
    hazards: ["Tretësira e hidroksidit të natriumit është gërryese në 0.75 mol/dm³ dhe irrituese kur hollohet; mund të dëmtojë rëndë sytë.", "Indigo karmini është i dëmshëm nëse gëlltitet dhe njollos lëkurën dhe rrobat.", "Tapa mund të kërcejë kur tundet kolba dhe të spërkasë tretësirë bazike."],
    precautions: ["Vetëm demonstrim nga mësuesi; syze për të gjithë, doreza dhe përparëse laboratori për mësuesin.", "Mbaje tapën fort të shtypur dhe tunde kolbën mbi tabaka, larg njerëzve.", "Përgatiti tretësirat pak para orës — ndryshimi i ngjyrës ngadalësohet ndërsa harxhohet glukoza.", "Shpëlaj me shumë ujë çdo spërkatje në lëkurë."],
    disposal: ["Mësuesi e hollon tretësirën me shumë ujë (ose e neutralizon) dhe e derdh në lavaman, sipas rregullave të shkollës."],
    supervisionNote: "Vetëm demonstrim nga mësuesi: mësuesi punon me hidroksidin e natriumit dhe tund kolbën, ndërsa nxënësit vëzhgojnë.",
    clip: ["Tretësirë jeshile në kolbë me tapë", "Lëre të qëndrojë… pastaj tunde", "Jeshile → e kuqe → e verdhë — tunde përsëri!"]
  }
},

/* ===== Blue bottle reaction ===== */
{
  id: "bluebottle", icon: "cycle", topic: "reactions", grades: "11–12", gmin: 11, gmax: 12, level: 3,
  supervision: "demo", time: 20, eqType: "equation", predictAt: 3, ppe: ["goggles", "gloves", "coat"],
  demo: { s: "beaker", from: "#f1f5f9", to: "#2563eb", level: 0.5 },
  video: null,
  sources: [
    { org: "Royal Society of Chemistry", title: "The 'blue bottle' experiment", url: "https://edu.rsc.org/experiments/the-blue-bottle-experiment/729.article" },
    { org: "Royal Society of Chemistry", title: "Beyond the blue bottle (Exhibition chemistry)", url: "https://edu.rsc.org/exhibition-chemistry/beyond-the-blue-bottle/2000041.article" },
    { org: "Union College", title: "Blue Bottle Experiment (demonstration sheet, PDF)", url: "https://cpb-us-w2.wpmucdn.com/muse.union.edu/dist/f/149/files/2014/12/10-Blue-Bottle.pdf" }
  ],
  en: {
    name: "Blue Bottle Reaction", short: "Redox & reaction rate",
    hook: "A clear liquid turns bright blue when you shake it, then fades to colourless again — over and over.",
    aim: "Explain the repeating blue–colourless change of methylene blue in terms of oxidation and reduction, and investigate how dissolved oxygen controls how long the blue lasts (teacher demonstration).",
    chemistry: [
      "Methylene blue is a redox indicator. Its oxidised form (MB⁺) is blue; when it gains electrons (and a hydrogen ion) it becomes the reduced form, MBH, which is colourless. In alkaline solution glucose is a reducing agent: it gives electrons to methylene blue and is itself oxidised to gluconate.",
      "Shaking the stoppered flask dissolves oxygen from the air above the liquid. Oxygen rapidly oxidises colourless MBH back to blue MB⁺. As long as dissolved oxygen remains, any MBH that forms is turned straight back to blue, so the solution stays blue. When the oxygen runs out, the slow reduction by glucose wins and the colour fades.",
      "Reduction by glucose is the slow, rate-determining step: its rate depends on the concentrations of glucose, hydroxide ions and methylene blue (and on temperature), but not on oxygen. Dissolved oxygen therefore controls how long the blue lasts rather than how fast it fades — a harder or longer shake keeps it blue for longer. After many cycles, side reactions of glucose in the alkali turn the solution yellow and the effect stops."
    ],
    equation: "C₆H₁₂O₆ + MB⁺ + 2OH⁻ → C₆H₁₁O₇⁻ + MBH + H₂O;   2MBH + O₂ → 2MB⁺ + 2OH⁻",
    equipment: ["1 dm³ conical flask with a rubber stopper", "6 g sodium hydroxide dissolved in 300 cm³ water (0.5 mol/dm³, corrosive) — made up by the teacher", "10 g glucose", "5 cm³ of 0.1% methylene blue indicator solution and a dropping pipette", "Stopwatch", "Tray and a white background", "Goggles for everyone; gloves and a lab coat for the teacher"],
    steps: [
      "Everyone puts on goggles; the teacher also wears gloves and a lab coat. Students watch from a safe distance.",
      "The teacher pours the sodium hydroxide solution into the flask, adds the glucose and swirls until it dissolves.",
      "The teacher adds 5 cm³ of methylene blue solution, inserts the stopper and leaves the flask to stand until the blue colour has disappeared (about a minute).",
      "Holding the stopper firmly, the teacher shakes the flask vigorously for about 5 seconds and puts it down.",
      "Students time how long it takes for the blue colour to fade completely.",
      "The teacher repeats with a gentle 1-second shake and then a long 15-second shake; students time each one.",
      "Students compare the times and discuss what controls how long the blue colour lasts."
    ],
    predict: { q: "The colourless solution is shaken vigorously. What will you see?", options: ["It turns blue, then slowly fades to colourless again", "It stays colourless", "It turns blue and stays blue for good", "A white precipitate forms"], answer: 0,
      result: "The solution turns blue almost instantly when shaken. Left to stand, the blue fades from the bottom upwards and the liquid is colourless again within about half a minute. A longer, harder shake keeps it blue for longer; a short, gentle shake gives only a brief, pale blue." },
    why: { q: "Why does a longer shake keep the solution blue for longer?", answer: 0, options: [
      { t: "More oxygen dissolves, and the blue lasts until that oxygen has been used up", fb: "Exactly. Oxygen re-oxidises MBH as fast as glucose reduces MB⁺. Only when the dissolved oxygen is gone does the colour fade." },
      { t: "Shaking speeds up the reaction between glucose and methylene blue", fb: "The glucose step is the one that makes the solution colourless. Its rate doesn't depend on oxygen; shaking just supplies more oxygen to undo it." },
      { t: "Shaking adds more methylene blue to the solution", fb: "No dye is added. The same methylene blue molecules are switched between the blue (oxidised) and colourless (reduced) forms." },
      { t: "Shaking cools the solution, so the colour fades more slowly", fb: "Shaking makes almost no difference to the temperature. (A warmer solution does fade faster — but here the key factor is the amount of dissolved oxygen.)" }
    ] },
    hazards: ["Sodium hydroxide solution (0.5 mol/dm³) is corrosive and can cause serious eye damage.", "Methylene blue is harmful if swallowed and stains skin and clothes.", "The stopper may leak or pop out during shaking, spraying alkaline solution."],
    precautions: ["Teacher demonstration only; goggles for everyone, and gloves and a lab coat for the teacher.", "Hold the stopper firmly and shake over a tray, with the flask pointing away from people.", "Wipe up spills at once and rinse skin with plenty of water if splashed."],
    disposal: ["The teacher dilutes the solution with plenty of water (or neutralises it) and pours it down the sink, following school rules.", "Rinse the flask well."],
    supervisionNote: "Teacher demonstration only: the teacher prepares the alkaline solution and shakes the flask; students observe and time the colour changes.",
    clip: ["A colourless solution in a sealed flask", "Shake it hard!", "Bright blue — then it fades again on its own"]
  },
  sq: {
    name: "Reaksioni i shishes blu", short: "Redoksi dhe shpejtësia",
    hook: "Një lëng i pangjyrë bëhet blu i ndezur kur e tund, pastaj zbehet sërish — përsëri dhe përsëri.",
    aim: "Shpjego ndryshimin e përsëritur blu–i pangjyrë të blusë së metilenit me anë të oksidimit dhe reduktimit, dhe studio si oksigjeni i tretur përcakton sa zgjat ngjyra blu (demonstrim nga mësuesi).",
    chemistry: [
      "Bluja e metilenit është tregues redoks. Forma e saj e oksiduar (MB⁺) është blu; kur fiton elektrone (dhe një jon hidrogjeni) kthehet në formën e reduktuar, MBH, që është e pangjyrë. Në tretësirë bazike glukoza është reduktues: ajo i jep elektrone blusë së metilenit dhe vetë oksidohet në glukonat.",
      "Tundja e kolbës së mbyllur tret oksigjenin e ajrit mbi lëng. Oksigjeni e oksidon shpejt MBH-në e pangjyrë përsëri në MB⁺ blu. Për sa kohë ka oksigjen të tretur, çdo MBH që formohet kthehet menjëherë në blu, ndaj tretësira mbetet blu. Kur oksigjeni mbaron, fiton reduktimi i ngadaltë nga glukoza dhe ngjyra zbehet.",
      "Reduktimi nga glukoza është hapi i ngadaltë që përcakton shpejtësinë: shpejtësia e tij varet nga përqendrimet e glukozës, joneve hidroksid dhe blusë së metilenit (dhe nga temperatura), por jo nga oksigjeni. Prandaj oksigjeni i tretur përcakton sa zgjat ngjyra blu, jo sa shpejt zbehet — sa më fort ose më gjatë ta tundësh, aq më gjatë mbetet blu. Pas shumë ciklesh, reaksione anësore të glukozës në mjedis bazik e bëjnë tretësirën të verdhë dhe efekti ndalon."
    ],
    equation: "C₆H₁₂O₆ + MB⁺ + 2OH⁻ → C₆H₁₁O₇⁻ + MBH + H₂O;   2MBH + O₂ → 2MB⁺ + 2OH⁻",
    equipment: ["Kolbë konike 1 dm³ me tapë gome", "6 g hidroksid natriumi të tretur në 300 cm³ ujë (0.5 mol/dm³, gërryese) — e përgatit mësuesi", "10 g glukozë", "5 cm³ tretësirë treguesi blu metileni 0.1% dhe një pipetë me pika", "Kronometër", "Tabaka dhe një sfond i bardhë", "Syze për të gjithë; doreza dhe përparëse laboratori për mësuesin"],
    steps: [
      "Të gjithë vendosin syzet; mësuesi mban edhe doreza dhe përparëse laboratori. Nxënësit vëzhgojnë nga një largësi e sigurt.",
      "Mësuesi hedh tretësirën e hidroksidit të natriumit në kolbë, shton glukozën dhe e rrotullon kolbën derisa glukoza të tretet.",
      "Mësuesi shton 5 cm³ tretësirë blu metileni, e mbyll kolbën me tapë dhe e lë të qëndrojë derisa ngjyra blu të zhduket (rreth një minutë).",
      "Duke e mbajtur fort tapën, mësuesi e tund fort kolbën për rreth 5 sekonda dhe e lë poshtë.",
      "Nxënësit matin me kronometër sa kohë duhet që ngjyra blu të zbehet plotësisht.",
      "Mësuesi e përsërit me një tundje të lehtë prej 1 sekonde dhe pastaj me një tundje të gjatë prej 15 sekondash; nxënësit matin kohën për secilën.",
      "Nxënësit krahasojnë kohët dhe diskutojnë se çfarë përcakton sa zgjat ngjyra blu."
    ],
    predict: { q: "Tretësira e pangjyrë tundet fort. Çfarë do të shohësh?", options: ["Bëhet blu, pastaj zbehet ngadalë sërish deri në të pangjyrë", "Mbetet e pangjyrë", "Bëhet blu dhe mbetet blu përgjithmonë", "Formohet një precipitat i bardhë"], answer: 0,
      result: "Tretësira bëhet blu pothuajse menjëherë kur tundet. Kur lihet të qëndrojë, bluja zbehet nga poshtë lart dhe lëngu bëhet sërish i pangjyrë brenda rreth gjysmë minute. Një tundje më e gjatë dhe më e fortë e mban blu më gjatë; një tundje e shkurtër dhe e lehtë jep vetëm një blu të zbehtë për pak kohë." },
    why: { q: "Pse një tundje më e gjatë e mban tretësirën blu për më shumë kohë?", answer: 0, options: [
      { t: "Tretet më shumë oksigjen, dhe bluja zgjat derisa ky oksigjen të harxhohet", fb: "Pikërisht. Oksigjeni e rioksidon MBH-në aq shpejt sa glukoza e redukton MB⁺. Vetëm kur oksigjeni i tretur mbaron, ngjyra zbehet." },
      { t: "Tundja e përshpejton reaksionin midis glukozës dhe blusë së metilenit", fb: "Hapi i glukozës është ai që e bën tretësirën të pangjyrë. Shpejtësia e tij nuk varet nga oksigjeni; tundja thjesht sjell më shumë oksigjen që e kthen mbrapsht ndryshimin." },
      { t: "Tundja shton më shumë blu metileni në tretësirë", fb: "Nuk shtohet ngjyrues. Të njëjtat molekula blu metileni kalojnë nga forma blu (e oksiduar) në formën e pangjyrë (e reduktuar) dhe anasjelltas." },
      { t: "Tundja e ftoh tretësirën, ndaj ngjyra zbehet më ngadalë", fb: "Tundja pothuajse nuk e ndryshon temperaturën. (Një tretësirë më e ngrohtë zbehet më shpejt — por këtu faktori kryesor është sasia e oksigjenit të tretur.)" }
    ] },
    hazards: ["Tretësira e hidroksidit të natriumit (0.5 mol/dm³) është gërryese dhe mund të dëmtojë rëndë sytë.", "Bluja e metilenit është e dëmshme nëse gëlltitet dhe njollos lëkurën dhe rrobat.", "Tapa mund të rrjedhë ose të kërcejë gjatë tundjes dhe të spërkasë tretësirë bazike."],
    precautions: ["Vetëm demonstrim nga mësuesi; syze për të gjithë, doreza dhe përparëse laboratori për mësuesin.", "Mbaje tapën fort dhe tunde kolbën mbi tabaka, me grykën larg njerëzve.", "Fshi menjëherë derdhjet dhe shpëlaje lëkurën me shumë ujë nëse spërkatet."],
    disposal: ["Mësuesi e hollon tretësirën me shumë ujë (ose e neutralizon) dhe e derdh në lavaman, sipas rregullave të shkollës.", "Shpëlaje mirë kolbën."],
    supervisionNote: "Vetëm demonstrim nga mësuesi: mësuesi përgatit tretësirën bazike dhe tund kolbën; nxënësit vëzhgojnë dhe matin kohën e ndryshimeve të ngjyrës.",
    clip: ["Tretësirë e pangjyrë në kolbë të mbyllur", "Tunde fort!", "Blu e ndezur — pastaj zbehet vetë sërish"]
  }
},

/* ===== What burns in a candle? ===== */
{
  id: "candle", icon: "flame", topic: "organic", grades: "7–9", gmin: 7, gmax: 9, level: 1,
  supervision: "close", time: 30, eqType: "equation", predictAt: 5, ppe: ["goggles", "hair"],
  demo: { s: "candle", color: "#f59e0b", jar: true },
  video: null,
  sources: [
    { org: "Royal Society of Chemistry", title: "Simple chemical reactions: how do candles work? (11–14 years)", url: "https://edu.rsc.org/lesson-plans/simple-chemical-reactions-how-do-candles-work-11-14-years/63.article" },
    { org: "Royal Society of Chemistry", title: "Identifying the products of combustion", url: "https://edu.rsc.org/experiments/identifying-the-products-of-combustion/707.article" },
    { org: "Royal Society of Chemistry", title: "The chemistry of candles — Faraday's Chemical History of a Candle", url: "https://edu.rsc.org/feature/the-chemistry-of-candles/3007566.article" }
  ],
  en: {
    name: "What Burns in a Candle?", short: "Combustion of hydrocarbons",
    hook: "A candle flame isn't burning the solid wax at all — so what is it burning?",
    aim: "Find out what actually burns in a candle flame, identify the products of combustion (water and carbon dioxide) and show that burning needs oxygen.",
    chemistry: [
      "Candle wax (paraffin) is a mixture of hydrocarbons — compounds made only of hydrogen and carbon. The heat of the flame melts the wax near the wick, the liquid wax climbs up the wick, and the heat turns it into wax vapour. It is this vapour that burns — not the solid wax, and not really the wick.",
      "When hydrocarbons burn completely in oxygen they form carbon dioxide and water: hydrocarbon + oxygen → carbon dioxide + water. The water appears as a mist on a cold glass held above the flame, and the carbon dioxide turns limewater milky. If there is not enough oxygen, some carbon is left behind as black soot.",
      "Burning needs a supply of oxygen. Under a jar the flame uses up oxygen and the jar fills with carbon dioxide and water vapour, so the candle goes out — even though some oxygen is still left in the jar. A bigger jar holds more air, so the candle burns for longer."
    ],
    equation: "C₂₅H₅₂ + 38O₂ → 25CO₂ + 26H₂O",
    equipment: ["Tea light or short, wide candle on a heat-resistant mat", "Matches or a lighter and wooden splints — used by the teacher", "Cold, dry glass beaker (250 cm³), cooled in a fridge", "Two glass jars of different sizes (about 0.5 dm³ and 1 dm³) with lids or glass plates", "Limewater, about 20 cm³ — handled by the teacher", "Stopwatch", "Safety goggles"],
    steps: [
      "Tie back long hair and put on goggles. Stand the candle on the heat-resistant mat, away from paper and bags. The teacher lights it.",
      "Look closely at the flame. Draw the wick, the pool of melted wax and the different zones of the flame.",
      "Hold the cold, dry beaker upside down about 10 cm above the flame for 5 seconds, then look inside it.",
      "Lower the small jar over the candle and time how long the flame lasts. Repeat with the large jar.",
      "The teacher lifts one jar off the mat, quickly covers it with a lid, then adds a little limewater, replaces the lid and swirls.",
      "The teacher relights the candle, blows it out and at once holds a lit splint in the white smoke, about 2 cm above the wick."
    ],
    predict: { q: "What will happen when the lit splint touches the smoke above the wick?", options: ["The flame jumps down the smoke and relights the wick", "Nothing — smoke can't burn", "The smoke puts the splint out", "The smoke turns into a puff of black soot"], answer: 0,
      result: "The flame races down the trail of white smoke and relights the wick without touching it. The 'smoke' is mostly wax vapour that has condensed into tiny droplets — the fuel that a candle really burns." },
    why: { q: "What is actually burning in a candle flame?", answer: 0, options: [
      { t: "Wax vapour, made when the heat melts and evaporates the wax", fb: "Correct. Solid wax melts, climbs the wick and evaporates; the vapour mixes with oxygen and burns. That's why the smoke trail could be relit." },
      { t: "The wick, like a piece of string burning", fb: "The wick only chars slowly — its job is to carry liquid wax up to the flame. Without wax, a bare wick burns away in seconds." },
      { t: "The solid wax at the bottom of the candle", fb: "Solid wax doesn't burn directly. It has to melt and turn into vapour first — that's why the flame sits above the wick, not on the wax." },
      { t: "The oxygen in the air is the fuel", fb: "Oxygen is needed for burning, but it isn't the fuel. The fuel is the wax vapour, which reacts with the oxygen." }
    ] },
    hazards: ["The naked flame can set hair, sleeves and paper alight.", "Hot wax, the glass beaker and the jars can cause burns.", "Limewater is an irritant and can damage the eyes."],
    precautions: ["Tie back long hair, tuck in loose clothing and keep the candle on the heat-resistant mat.", "Hold the beaker high above the flame for only a few seconds, and let glassware cool before touching it.", "Only the teacher handles matches, splints and limewater; never leave a lit candle alone.", "Never eat or drink in the lab, and wash your hands at the end."],
    disposal: ["Pour the limewater down the sink with plenty of water.", "Put used matches and splints in a beaker of water, then in the bin.", "Let the candle cool and keep it to use again."],
    supervisionNote: "Close supervision: students work near a naked flame, and the teacher handles the matches, splints and limewater.",
    clip: ["A lit candle and an empty jar", "Lower the jar over the flame", "The flame dies when the oxygen runs low"]
  },
  sq: {
    name: "Çfarë digjet në një qiri?", short: "Djegia e hidrokarbureve",
    hook: "Flaka e qiririt nuk e djeg fare dyllin e ngurtë — atëherë çfarë djeg?",
    aim: "Zbulo çfarë digjet në të vërtetë në flakën e qiririt, identifiko produktet e djegies (ujin dhe dioksidin e karbonit) dhe trego se djegia ka nevojë për oksigjen.",
    chemistry: [
      "Dylli i qiririt (parafina) është një përzierje hidrokarburesh — përbërje që kanë vetëm hidrogjen dhe karbon. Nxehtësia e flakës shkrin dyllin pranë fitilit, dylli i lëngshëm ngjitet në fitil dhe nxehtësia e kthen në avuj dylli. Pikërisht këta avuj digjen — jo dylli i ngurtë, dhe në të vërtetë as fitili.",
      "Kur hidrokarburet digjen plotësisht në oksigjen, formojnë dioksid karboni dhe ujë: hidrokarbur + oksigjen → dioksid karboni + ujë. Uji shfaqet si një mjegull e hollë mbi një gotë të ftohtë të mbajtur mbi flakë, ndërsa dioksidi i karbonit e turbullon ujin e gëlqeres. Nëse oksigjeni nuk mjafton, një pjesë e karbonit mbetet si blozë e zezë.",
      "Djegia ka nevojë për oksigjen. Nën kavanoz flaka harxhon oksigjenin dhe kavanozi mbushet me dioksid karboni dhe avuj uji, ndaj qiriri shuhet — edhe pse në kavanoz ka mbetur ende pak oksigjen. Një kavanoz më i madh mban më shumë ajër, ndaj qiriri digjet më gjatë."
    ],
    equation: "C₂₅H₅₂ + 38O₂ → 25CO₂ + 26H₂O",
    equipment: ["Qiri i vogël (tealight) ose qiri i shkurtër e i gjerë mbi një pllakë rezistente ndaj nxehtësisë", "Shkrepëse ose çakmak dhe ashkla druri — i përdor mësuesi", "Gotë kimike qelqi e ftohtë dhe e thatë (250 cm³), e ftohur në frigorifer", "Dy kavanoza qelqi me madhësi të ndryshme (rreth 0.5 dm³ dhe 1 dm³) me kapak ose pllakë qelqi", "Ujë gëlqereje, rreth 20 cm³ — e trajton mësuesi", "Kronometër", "Syze mbrojtëse"],
    steps: [
      "Lidh flokët e gjatë dhe vendos syzet. Vendose qiririn mbi pllakën rezistente, larg letrave dhe çantave. Mësuesi e ndez.",
      "Shiko me kujdes flakën. Vizato fitilin, pellgun e dyllit të shkrirë dhe zonat e ndryshme të flakës.",
      "Mbaje gotën e ftohtë dhe të thatë përmbys, rreth 10 cm mbi flakë, për 5 sekonda, pastaj shiko brenda saj.",
      "Ule kavanozin e vogël mbi qiri dhe mat sa kohë zgjat flaka. Përsërite me kavanozin e madh.",
      "Mësuesi ngre njërin kavanoz nga pllaka, e mbulon shpejt me kapak, pastaj hedh pak ujë gëlqereje, e mbyll përsëri dhe e tund lehtë.",
      "Mësuesi e rindez qiririn, e shuan me një frymë dhe menjëherë mban një ashkël të ndezur në tymin e bardhë, rreth 2 cm mbi fitil."
    ],
    predict: { q: "Çfarë do të ndodhë kur ashkla e ndezur prek tymin mbi fitil?", options: ["Flaka zbret nëpër tym dhe e rindez fitilin", "Asgjë — tymi nuk digjet", "Tymi e shuan ashklën", "Tymi kthehet në një re blozë të zezë"], answer: 0,
      result: "Flaka zbret me shpejtësi nëpër shiritin e tymit të bardhë dhe e rindez fitilin pa e prekur. ‘Tymi’ është kryesisht avull dylli i kondensuar në pika shumë të vogla — lënda djegëse që digjet në të vërtetë te qiriri." },
    why: { q: "Çfarë digjet në të vërtetë në flakën e qiririt?", answer: 0, options: [
      { t: "Avujt e dyllit, që formohen kur nxehtësia e shkrin dhe e avullon dyllin", fb: "E saktë. Dylli i ngurtë shkrihet, ngjitet në fitil dhe avullon; avujt përzihen me oksigjenin dhe digjen. Prandaj shiriti i tymit mund të rindizej." },
      { t: "Fitili, si një copë spango që digjet", fb: "Fitili vetëm karbonizohet ngadalë — detyra e tij është ta ngjitë dyllin e lëngshëm deri te flaka. Pa dyll, një fitil i zhveshur digjet brenda pak sekondash." },
      { t: "Dylli i ngurtë në fund të qiririt", fb: "Dylli i ngurtë nuk digjet drejtpërdrejt. Ai duhet të shkrihet dhe të kthehet në avull më parë — prandaj flaka qëndron mbi fitil, jo mbi dyll." },
      { t: "Oksigjeni i ajrit është lënda djegëse", fb: "Oksigjeni nevojitet për djegien, por nuk është lënda djegëse. Lënda djegëse janë avujt e dyllit, që reagojnë me oksigjenin." }
    ] },
    hazards: ["Flaka e hapur mund t'u marrë zjarr flokëve, mëngëve dhe letrave.", "Dylli i nxehtë, gota dhe kavanozët mund të shkaktojnë djegie.", "Uji i gëlqeres është irritues dhe mund të dëmtojë sytë."],
    precautions: ["Lidh flokët e gjatë, mblidh rrobat e lirshme dhe mbaje qiririn mbi pllakën rezistente.", "Mbaje gotën lart mbi flakë vetëm për pak sekonda dhe lëre qelqin të ftohet para se ta prekësh.", "Shkrepëset, ashklat dhe ujin e gëlqeres i trajton vetëm mësuesi; mos e lër kurrë vetëm një qiri të ndezur.", "Mos ha dhe mos pi kurrë në laborator dhe laj duart në fund."],
    disposal: ["Derdhe ujin e gëlqeres në lavaman me shumë ujë.", "Vendosi shkrepëset dhe ashklat e përdorura në një gotë me ujë, pastaj hidhi në kosh.", "Lëre qiririn të ftohet dhe ruaje për herë tjetër."],
    supervisionNote: "Mbikëqyrje e afërt: nxënësit punojnë pranë flakës së hapur, ndërsa mësuesi trajton shkrepëset, ashklat dhe ujin e gëlqeres.",
    clip: ["Një qiri i ndezur dhe një kavanoz bosh", "Ule kavanozin mbi flakë", "Flaka shuhet kur pakësohet oksigjeni"]
  }
}
];


/* ---------- New experiments: acids, carbonates, pH and water hardness ---------- */
const EXP_NEW_2 = [
/* ===== The naked egg ===== */
{
  id: "nakedegg", icon: "beaker", topic: "acids", grades: "7–8", gmin: 7, gmax: 8,
  level: 1, supervision: "supervised", time: 20, eqType: "equation", predictAt: 2, ppe: ["goggles", "gloves"],
  demo: { s: "egg", from: "#e0f2fe", to: "#fef9c3", bubbles: true },
  video: null,
  sources: [
    { org: "Exploratorium", title: "Naked Egg (Science Snack)", url: "https://www.exploratorium.edu/snacks/naked-egg" },
    { org: "Science World", title: "Naked Eggs: Acid-Base Reaction", url: "https://www.scienceworld.ca/resource/naked-eggs-acid-base-reaction/" },
    { org: "Science Museum Group", title: "Bouncy egg", url: "https://learning.sciencemuseumgroup.org.uk/resources/bouncy-egg/" }
  ],
  en: {
    name: "The Naked Egg", short: "Acid meets carbonate",
    hook: "Can you take the shell off a raw egg without cracking it?",
    aim: "Find out how the acid in vinegar reacts with the calcium carbonate in an eggshell, leaving the egg held together only by its thin membrane.",
    chemistry: [
      "An eggshell is made almost entirely of calcium carbonate, the same compound found in chalk, limestone and seashells. Vinegar is a dilute solution (about 5%) of ethanoic acid, also called acetic acid. Acids react with carbonates to make a salt, water and carbon dioxide gas.",
      "As soon as the egg is covered with vinegar, tiny bubbles of carbon dioxide form all over the shell. The calcium ends up dissolved in the vinegar as calcium ethanoate, so over one to two days the hard shell disappears completely.",
      "Under the shell is a thin, flexible membrane that the acid does not dissolve. It holds the egg white and yolk together, so you are left with a soft, rubbery, see-through egg. Water from the vinegar also passes through the membrane by osmosis, so the egg usually gets a little bigger."
    ],
    equation: "CaCO₃ + 2CH₃COOH → Ca(CH₃COO)₂ + H₂O + CO₂",
    equipment: ["1 raw egg (plus a spare in case one breaks)", "Clear jar or beaker (about 400 mL) with a loose lid or cling film", "About 300 mL white vinegar (5% ethanoic acid)", "String and ruler, or a balance, to measure the egg", "Spoon for lifting the egg", "Paper towels and a tray", "Safety goggles and disposable gloves"],
    steps: [
      "Put on goggles and gloves. Before you start, check whether anyone in the group has an egg allergy.",
      "Measure the egg's circumference with string and a ruler, or weigh it on a balance. Record the result.",
      "Gently place the egg in the jar and pour in vinegar until the egg is completely covered.",
      "Watch the surface of the shell closely for a few minutes and note what you see.",
      "Cover the jar loosely — never seal it tightly, because gas is being made — and leave it in a cool place, away from food, for 24 hours.",
      "Use the spoon to lift the egg out, pour the old vinegar away and cover the egg with fresh vinegar. Leave it for another 24 hours.",
      "Lift the egg out gently, rinse it under a slow-running tap and rub away any remaining bits of shell with your gloved fingers.",
      "Measure the egg again, then hold it up to the light and squeeze it very gently. Compare it with how it was at the start."
    ],
    predict: { q: "What will happen to the egg when it is left in vinegar?", options: ["Bubbles form on the shell and the shell slowly disappears", "Nothing — eggshell is too hard for vinegar", "The whole egg dissolves, leaving only liquid", "The shell gets thicker and whiter"], answer: 0,
      result: "Within a minute or two, tiny bubbles of carbon dioxide cover the shell and rise to the surface. After one to two days the shell has gone completely, leaving a translucent, rubbery egg that wobbles and even bounces a little. It is usually slightly bigger than at the start because water has passed through the membrane." },
    why: { q: "Why does the shell disappear but the egg stays in one piece?", answer: 0, options: [
      { t: "The acid reacts with the calcium carbonate shell but not with the membrane underneath", fb: "Right. Acid + carbonate → salt + water + carbon dioxide. The membrane is made of protein fibres that vinegar does not dissolve, so it keeps the egg together." },
      { t: "The vinegar softens the shell, like water softens paper", fb: "Water doesn't soften eggshell at all — try it! The shell is chemically changed: the bubbles show that a new substance, carbon dioxide, is being made." },
      { t: "The shell melts because the vinegar is warm", fb: "The vinegar is at room temperature, and calcium carbonate only breaks down when heated above about 800 °C. This is a chemical reaction with the acid, not melting." },
      { t: "The bubbles are air escaping from inside the egg", fb: "There is only a small air pocket inside an egg, and it stays there. The steady stream of bubbles is carbon dioxide made wherever the acid touches the shell." }
    ] },
    hazards: ["Raw eggs can carry Salmonella bacteria, which cause food poisoning.", "Vinegar stings if it splashes into your eyes.", "Some people are allergic to eggs, even through skin contact.", "The shell-less egg bursts easily and spills raw egg."],
    precautions: ["Wear gloves when handling the egg, and wash your hands with soap afterwards.", "Wear goggles when pouring vinegar.", "Never eat the egg or drink the vinegar — never eat or drink in the lab.", "Work on a tray, wipe up spills with paper towels and then clean the surface with hot soapy water.", "Students with an egg allergy should observe rather than handle the egg."],
    disposal: ["Pour the used vinegar down the sink with plenty of water.", "Wrap the egg in a paper towel and put it in the general waste bin — do not eat it.", "Wash the jar and spoon in hot soapy water."],
    supervisionNote: "Low-hazard activity, but the teacher should check for egg allergies and make sure everyone washes their hands after touching raw egg.",
    clip: ["A raw egg in a jar of vinegar", "The acid attacks the shell", "Shell gone — a bouncy, see-through egg!"]
  },
  sq: {
    name: "Veza e zhveshur", short: "Acidi takon karbonatin",
    hook: "A mund ta heqësh lëvozhgën e një veze të papjekur pa e thyer?",
    aim: "Zbulo si reagon acidi i uthullës me karbonatin e kalciumit në lëvozhgën e vezës, duke e lënë vezën të mbajtur vetëm nga membrana e saj e hollë.",
    chemistry: [
      "Lëvozhga e vezës përbëhet pothuajse tërësisht nga karbonati i kalciumit, e njëjta përbërje që gjendet në shkumës, në gurin gëlqeror dhe në guaskat e detit. Uthulla është një tretësirë e holluar (rreth 5%) e acidit etanoik, që quhet edhe acid acetik. Acidet reagojnë me karbonatet dhe formojnë një kripë, ujë dhe gaz dioksid karboni.",
      "Sapo veza mbulohet me uthull, mbi gjithë lëvozhgën formohen flluska të vogla dioksidi karboni. Kalciumi mbetet i tretur në uthull si etanoat kalciumi, ndaj brenda një deri dy ditësh lëvozhga e fortë zhduket plotësisht.",
      "Nën lëvozhgë ndodhet një membranë e hollë dhe elastike që acidi nuk e tret. Ajo mban bashkë të bardhën dhe të verdhën e vezës, ndaj të mbetet një vezë e butë, si gomë dhe e tejdukshme. Uji i uthullës kalon gjithashtu nëpër membranë me osmozë, prandaj veza zakonisht zmadhohet pak."
    ],
    equation: "CaCO₃ + 2CH₃COOH → Ca(CH₃COO)₂ + H₂O + CO₂",
    equipment: ["1 vezë e papjekur (plus një rezervë, në rast se thyhet)", "Kavanoz ose gotë kimike e tejdukshme (rreth 400 mL) me kapak të lirë ose film ushqimor", "Rreth 300 mL uthull e bardhë (acid etanoik 5%)", "Spango dhe vizore, ose peshore, për të matur vezën", "Lugë për ta nxjerrë vezën", "Letra kuzhine dhe një tabaka", "Syze mbrojtëse dhe doreza njëpërdorimshe"],
    steps: [
      "Vendos syzet dhe dorezat. Para se të fillosh, kontrollo nëse dikush në grup është alergjik ndaj vezëve.",
      "Mat perimetrin e vezës me spango dhe vizore, ose peshoje me peshore. Shëno rezultatin.",
      "Vendose vezën me kujdes në kavanoz dhe hidh uthull derisa veza të mbulohet plotësisht.",
      "Vëzhgo nga afër sipërfaqen e lëvozhgës për disa minuta dhe shëno çfarë sheh.",
      "Mbuloje kavanozin lirshëm — mos e mbyll kurrë hermetikisht, sepse po prodhohet gaz — dhe lëre në një vend të freskët, larg ushqimeve, për 24 orë.",
      "Nxirre vezën me lugë, derdh uthullën e vjetër dhe mbuloje vezën me uthull të freskët. Lëre edhe 24 orë të tjera.",
      "Nxirre vezën me kujdes, shpëlaje nën një rrjedhë të ngadaltë uji dhe hiq me gishtat me doreza copëzat e mbetura të lëvozhgës.",
      "Mate përsëri vezën, pastaj mbaje kundër dritës dhe shtrydhe shumë lehtë. Krahasoje me gjendjen që kishte në fillim."
    ],
    predict: { q: "Çfarë do t'i ndodhë vezës kur lihet në uthull?", options: ["Mbi lëvozhgë formohen flluska dhe lëvozhga zhduket ngadalë", "Asgjë — lëvozhga është shumë e fortë për uthullën", "E gjithë veza tretet dhe mbetet vetëm lëng", "Lëvozhga bëhet më e trashë dhe më e bardhë"], answer: 0,
      result: "Brenda një-dy minutash, flluska të vogla dioksidi karboni mbulojnë lëvozhgën dhe ngjiten në sipërfaqe. Pas një deri dy ditësh lëvozhga është zhdukur plotësisht dhe mbetet një vezë e tejdukshme, si gomë, që lëkundet e madje kërcen pak. Zakonisht është pak më e madhe se në fillim, sepse uji ka kaluar nëpër membranë." },
    why: { q: "Pse zhduket lëvozhga, por veza mbetet e plotë?", answer: 0, options: [
      { t: "Acidi reagon me lëvozhgën prej karbonati kalciumi, por jo me membranën poshtë saj", fb: "Saktë. Acid + karbonat → kripë + ujë + dioksid karboni. Membrana përbëhet nga fibra proteinike që uthulla nuk i tret, ndaj e mban vezën të plotë." },
      { t: "Uthulla e zbut lëvozhgën, ashtu si uji zbut letrën", fb: "Uji nuk e zbut fare lëvozhgën e vezës — provoje! Lëvozhga ndryshon kimikisht: flluskat tregojnë se po formohet një substancë e re, dioksidi i karbonit." },
      { t: "Lëvozhga shkrihet sepse uthulla është e ngrohtë", fb: "Uthulla është në temperaturën e dhomës, ndërsa karbonati i kalciumit zbërthehet vetëm kur nxehet mbi rreth 800 °C. Ky është reaksion kimik me acidin, jo shkrirje." },
      { t: "Flluskat janë ajër që del nga brenda vezës", fb: "Brenda vezës ka vetëm një xhep të vogël ajri dhe ai mbetet aty. Rrjedha e vazhdueshme e flluskave është dioksid karboni që formohet kudo ku acidi prek lëvozhgën." }
    ] },
    hazards: ["Vezët e papjekura mund të mbartin bakterin Salmonela, që shkakton helmim nga ushqimi.", "Uthulla të djeg nëse të spërkat në sy.", "Disa njerëz janë alergjikë ndaj vezëve, madje edhe nga kontakti me lëkurën.", "Veza pa lëvozhgë çahet lehtë dhe derdh vezë të papjekur."],
    precautions: ["Mbaj doreza kur prek vezën dhe laji duart me sapun pas punës.", "Mbaj syze mbrojtëse kur hedh uthullën.", "Mos e ha kurrë vezën dhe mos pi uthullën — në laborator nuk hahet e nuk pihet kurrë.", "Puno mbi një tabaka, fshiji derdhjet me letër kuzhine dhe pastaj pastroje sipërfaqen me ujë të nxehtë me sapun.", "Nxënësit me alergji ndaj vezëve duhet të vëzhgojnë, jo ta prekin vezën."],
    disposal: ["Derdhe uthullën e përdorur në lavaman me shumë ujë.", "Mbështille vezën me letër kuzhine dhe hidhe në koshin e mbeturinave — mos e ha.", "Laji kavanozin dhe lugën me ujë të nxehtë me sapun."],
    supervisionNote: "Aktivitet me rrezik të ulët, por mësuesi duhet të kontrollojë për alergji ndaj vezëve dhe të sigurohet që të gjithë t'i lajnë duart pasi prekin vezë të papjekur.",
    clip: ["Një vezë e papjekur në kavanoz me uthull", "Acidi sulmon lëvozhgën", "Pa lëvozhgë — vezë e tejdukshme që kërcen!"]
  }
},

/* ===== Shiny coins ===== */
{
  id: "coins", icon: "sparkle", topic: "acids", grades: "7–8", gmin: 7, gmax: 8,
  level: 1, supervision: "supervised", time: 25, eqType: "equation", predictAt: 2, ppe: ["goggles"],
  demo: { s: "beaker", from: "#e0f2fe", to: "#ccfbf1", level: 0.35, solid: { c: "#b87333", shrink: false, float: false } },
  video: null,
  sources: [
    { org: "Science Buddies", title: "Shine Bright Like a… Penny!", url: "https://www.sciencebuddies.org/stem-activities/shine-bright-like-apenny" },
    { org: "American Chemical Society", title: "Let's Do Chemistry with the Penny! (PDF)", url: "https://www.acs.org/content/dam/acsorg/education/outreach/ncw/plan-an-event/educational-resources/let's-do-chemistry-with-the-penny.pdf" },
    { org: "Exploratorium", title: "Turn Old Pennies Bright and Shiny (Copper Caper)", url: "https://www.exploratorium.edu/explore/science/activity/copper-caper" }
  ],
  en: {
    name: "Shiny Coins", short: "Acids remove copper oxide",
    hook: "Turn dull brown coins bright and shiny again in just a few minutes.",
    aim: "Find out how a weak acid mixed with salt removes the dark copper oxide layer from old copper coins.",
    chemistry: [
      "Copper is a fairly unreactive metal, but over months and years it slowly reacts with oxygen in the air. A thin layer of copper oxide forms on the surface, turning bright copper coins dull and brown.",
      "Copper oxide is a base, so it reacts with acids. Vinegar (ethanoic acid) or lemon juice (citric acid) dissolves the oxide layer, forming a soluble copper salt and water. Adding table salt speeds this up a lot, because its chloride ions help pull the copper ions into solution. The copper metal underneath is hardly attacked, so the coin shines again.",
      "Many modern 'copper' coins are really steel or zinc with only a thin coating of copper, but the coating behaves just like solid copper. If cleaned coins are left wet with vinegar and salt instead of being rinsed, they react with the air again and can grow a blue-green coating, like the green roofs of old copper buildings."
    ],
    equation: "CuO + 2CH₃COOH → Cu(CH₃COO)₂ + H₂O",
    equipment: ["10–20 dull copper or copper-plated coins", "50 mL white vinegar (or lemon juice)", "1 teaspoon of table salt", "Small glass or plastic bowl (not metal)", "Plastic spoon for stirring", "Bowl of clean water for rinsing", "Paper towels", "Safety goggles"],
    steps: [
      "Put on goggles. Look closely at the coins and describe their colour.",
      "Pour the vinegar into the bowl, add the salt and stir until it dissolves.",
      "Put one coin aside as a control. Dip another coin halfway into the liquid and hold it there for about 20 seconds.",
      "Lift it out and compare the two halves of the coin.",
      "Put the rest of the coins into the bowl and leave them for 5 minutes, stirring now and then.",
      "Rinse half of the coins in clean water and dry them on a paper towel. Put the other half on a paper towel without rinsing them.",
      "Compare all the coins with the control. Look at the unrinsed coins again after an hour, or in the next lesson."
    ],
    predict: { q: "What will happen to a dull coin dipped in vinegar and salt?", options: ["The dipped part turns bright copper-coloured", "Nothing changes", "The coin dissolves completely", "The coin turns black"], answer: 0,
      result: "Within seconds the dipped half turns bright salmon-pink copper while the other half stays dull brown, leaving a sharp line across the coin. The acid has dissolved the copper oxide layer. Unrinsed coins left in the air slowly develop a blue-green coating." },
    why: { q: "Why do the coins become shiny again?", answer: 0, options: [
      { t: "The acid dissolves the dark copper oxide layer, uncovering the copper metal underneath", fb: "Exactly. Copper oxide is a base, so it reacts with the acid to make a soluble salt and water. Chloride ions from the salt make this much faster." },
      { t: "The salt scrubs the dirt off like sandpaper", fb: "The salt is dissolved, so there are no grains left to scrub with. The cleaning is a chemical reaction between the acid and the oxide." },
      { t: "The vinegar paints a new layer of copper onto the coin", fb: "No new copper is added. The shiny metal was there all along, hidden under a thin layer of oxide." },
      { t: "The surface of the coin melts slightly", fb: "Copper melts at over 1000 °C, and the vinegar is at room temperature. The change happens because the oxide reacts with the acid." }
    ] },
    hazards: ["Vinegar and lemon juice sting if they get into eyes or cuts.", "Coins carry dirt and germs from many hands.", "The used liquid contains dissolved copper compounds, which are harmful if swallowed."],
    precautions: ["Wear goggles while mixing and stirring.", "Never put coins or the liquid in your mouth — never eat or drink in the lab.", "Cover any cuts on your hands, and wash your hands well at the end.", "Rinse any splashes off your skin with plenty of water."],
    disposal: ["Pour the small amount of used liquid down the sink with plenty of water, unless your teacher collects it.", "Rinse the bowls and spoon, and return the coins to the teacher."],
    supervisionNote: "Low-hazard activity; the teacher should make sure students keep coins and liquids away from their mouths and wash their hands afterwards.",
    clip: ["Dull brown coins and a bowl of vinegar", "Add salt and dip in the coins", "The dark layer vanishes — shiny copper!"]
  },
  sq: {
    name: "Monedha që shkëlqejnë", short: "Acidet heqin oksidin e bakrit",
    hook: "Bëji monedhat e zbehta kafe përsëri të ndritshme e me shkëlqim, vetëm për pak minuta.",
    aim: "Zbulo si e heq një acid i dobët, i përzier me kripë, shtresën e errët të oksidit të bakrit nga monedhat e vjetra prej bakri.",
    chemistry: [
      "Bakri është metal mjaft pak reaktiv, por gjatë muajve dhe viteve reagon ngadalë me oksigjenin e ajrit. Mbi sipërfaqe formohet një shtresë e hollë oksidi bakri, që i bën monedhat e ndritshme prej bakri të zbehta dhe kafe.",
      "Oksidi i bakrit është bazë, ndaj reagon me acidet. Uthulla (acid etanoik) ose lëngu i limonit (acid citrik) e tret shtresën e oksidit dhe formon një kripë bakri të tretshme dhe ujë. Kripa e gjellës e shpejton shumë këtë proces, sepse jonet e saj të klorurit ndihmojnë që jonet e bakrit të kalojnë në tretësirë. Metali i bakrit poshtë pothuajse nuk preket, ndaj monedha shkëlqen përsëri.",
      "Shumë monedha të sotme 'bakri' janë në fakt prej çeliku ose zinku, me vetëm një shtresë të hollë bakri sipër, por kjo shtresë sillet njësoj si bakri i plotë. Nëse monedhat e pastruara lihen të lagura me uthull e kripë në vend që të shpëlahen, ato reagojnë sërish me ajrin dhe mund të mbulohen me një cipë blu në të gjelbër, si çatitë e gjelbra të ndërtesave të vjetra prej bakri."
    ],
    equation: "CuO + 2CH₃COOH → Cu(CH₃COO)₂ + H₂O",
    equipment: ["10–20 monedha bakri ose të veshura me bakër, të zbehta", "50 mL uthull e bardhë (ose lëng limoni)", "1 lugë çaji kripë gjelle", "Tas i vogël prej qelqi ose plastike (jo metalik)", "Lugë plastike për përzierje", "Tas me ujë të pastër për shpëlarje", "Letra kuzhine", "Syze mbrojtëse"],
    steps: [
      "Vendos syzet. Shiko nga afër monedhat dhe përshkruaj ngjyrën e tyre.",
      "Hidh uthullën në tas, shto kripën dhe përzieje derisa të tretet.",
      "Lër mënjanë një monedhë si kontroll. Zhyt një monedhë tjetër deri në gjysmë në lëng dhe mbaje aty rreth 20 sekonda.",
      "Nxirre dhe krahaso dy gjysmat e monedhës.",
      "Hidh monedhat e tjera në tas dhe lëri 5 minuta, duke i përzier herë pas here.",
      "Shpëlaj gjysmën e monedhave me ujë të pastër dhe thaji në letër kuzhine. Gjysmën tjetër vendose në letër kuzhine pa e shpëlarë.",
      "Krahaso të gjitha monedhat me monedhën e kontrollit. Shiko përsëri monedhat e pashpëlara pas një ore ose në orën tjetër të mësimit."
    ],
    predict: { q: "Çfarë do të ndodhë me një monedhë të zbehtë që zhytet në uthull me kripë?", options: ["Pjesa e zhytur merr ngjyrë të ndritshme bakri", "Nuk ndryshon asgjë", "Monedha tretet plotësisht", "Monedha nxihet"], answer: 0,
      result: "Brenda pak sekondash gjysma e zhytur merr ngjyrë bakri të ndritshme, rozë në portokalli, ndërsa gjysma tjetër mbetet kafe e zbehtë, me një vijë të qartë mes tyre. Acidi ka tretur shtresën e oksidit të bakrit. Monedhat e pashpëlara, të lëna në ajër, mbulohen ngadalë me një cipë blu në të gjelbër." },
    why: { q: "Pse monedhat bëhen përsëri me shkëlqim?", answer: 0, options: [
      { t: "Acidi tret shtresën e errët të oksidit të bakrit dhe zbulon metalin e bakrit poshtë saj", fb: "Pikërisht. Oksidi i bakrit është bazë, ndaj reagon me acidin dhe formon një kripë të tretshme dhe ujë. Jonet e klorurit nga kripa e bëjnë këtë shumë më të shpejtë." },
      { t: "Kripa e fërkon papastërtinë si letër zmerile", fb: "Kripa është e tretur, ndaj nuk mbeten kokrriza për të fërkuar. Pastrimi është një reaksion kimik midis acidit dhe oksidit." },
      { t: "Uthulla vendos një shtresë të re bakri mbi monedhë", fb: "Nuk shtohet bakër i ri. Metali me shkëlqim ishte aty gjatë gjithë kohës, i fshehur nën një shtresë të hollë oksidi." },
      { t: "Sipërfaqja e monedhës shkrihet pak", fb: "Bakri shkrihet mbi 1000 °C, ndërsa uthulla është në temperaturën e dhomës. Ndryshimi ndodh sepse oksidi reagon me acidin." }
    ] },
    hazards: ["Uthulla dhe lëngu i limonit djegin nëse futen në sy ose në plagë.", "Monedhat mbartin papastërti dhe mikrobe nga shumë duar.", "Lëngu i përdorur përmban përbërje bakri të tretura, që janë të dëmshme nëse gëlltiten."],
    precautions: ["Mbaj syze mbrojtëse kur përzien lëngun.", "Mos fut kurrë në gojë monedhat ose lëngun — në laborator nuk hahet e nuk pihet kurrë.", "Mbulo çdo plagë në duar dhe laji mirë duart në fund.", "Shpëlaj me shumë ujë çdo spërkatje në lëkurë."],
    disposal: ["Derdhe sasinë e vogël të lëngut të përdorur në lavaman me shumë ujë, përveç nëse mësuesi e mbledh.", "Shpëlaji tasat dhe lugën, dhe ktheja monedhat mësuesit."],
    supervisionNote: "Aktivitet me rrezik të ulët; mësuesi duhet të sigurohet që nxënësit t'i mbajnë monedhat dhe lëngjet larg gojës dhe t'i lajnë duart pas punës.",
    clip: ["Monedha të zbehta dhe një tas me uthull", "Shto kripë dhe zhyt monedhat", "Shtresa e errët zhduket — bakër që shkëlqen!"]
  }
},

/* ===== Acid rain vs stone ===== */
{
  id: "acidrain", icon: "stone", topic: "acids", grades: "8–9", gmin: 8, gmax: 9,
  level: 1, supervision: "supervised", time: 40, eqType: "equation", predictAt: 3, ppe: ["goggles"],
  demo: { s: "rack", tubes: [ { from: "#fef9c3", to: "#fefce8", bubbles: true }, { from: "#e0f2fe", to: "#e0f2fe", bubbles: true }, { from: "#dbeafe", to: "#dbeafe" } ] },
  video: null,
  sources: [
    { org: "American Chemical Society", title: "Disappearing Statues (PDF activity)", url: "https://www.acs.org/content/dam/acsorg/education/resources/k-8/science-activities/planetearth/land/disappearing-statues.pdf" },
    { org: "Let's Talk Science", title: "What are the effects of acid rain on rocks?", url: "https://letstalkscience.ca/educational-resources/hands-on-activities/what-are-effects-acid-rain-on-rocks" },
    { org: "US Environmental Protection Agency", title: "What is Acid Rain?", url: "https://www.epa.gov/acidrain/what-acid-rain" }
  ],
  en: {
    name: "Acid Rain vs Stone", short: "Acid rain and carbonate rocks",
    hook: "Why are some old marble statues slowly losing their faces?",
    aim: "Model how acid rain damages limestone and marble buildings by comparing what vinegar, fizzy water and tap water do to pieces of chalk.",
    chemistry: [
      "Limestone, marble and real chalk are all forms of calcium carbonate. Acids react with carbonates to produce a soluble salt, water and carbon dioxide gas, so the rock is slowly eaten away. Every acid does this, because it is the hydrogen ions (H⁺) in the acid that react with the carbonate.",
      "Rain is always slightly acidic (about pH 5.6) because carbon dioxide from the air dissolves in it to form weak carbonic acid — just like the fizzy water in this experiment. Burning fossil fuels in power stations, factories and vehicles releases sulfur dioxide (SO₂) and nitrogen oxides (NOₓ). These dissolve in rainwater to form sulfuric and nitric acids, making acid rain with a pH of 4 or even lower.",
      "Vinegar (pH about 3) is more acidic than typical acid rain, so in minutes it does what acid rain does over many years. Fizzy water is only weakly acidic and reacts much more slowly, while tap water barely reacts at all. This is why clean-air laws that cut SO₂ and NOₓ emissions help to protect old buildings and statues."
    ],
    equation: "CaCO₃(s) + 2H⁺(aq) → Ca²⁺(aq) + H₂O(l) + CO₂(g)",
    equipment: ["3 similar pieces of calcium carbonate chalk (not calcium sulfate board chalk), or marble chips", "3 beakers or clear cups (250 mL), labelled", "100 mL white vinegar", "100 mL fizzy (carbonated) water, freshly opened", "100 mL tap water", "Balance reading to 0.01 g", "Plastic spoon, paper towels and a marker pen", "Safety goggles"],
    steps: [
      "Put on goggles. Label three beakers 'vinegar', 'fizzy water' and 'tap water'.",
      "Weigh each piece of chalk, record its mass and note which beaker it will go into.",
      "Pour 100 mL of each liquid into its labelled beaker.",
      "Drop one piece of chalk into each beaker at the same time. Watch closely for 2–3 minutes and record what you see.",
      "Leave the chalk in the liquids for 20 minutes, then lift each piece out with the plastic spoon and place it on a labelled paper towel.",
      "Leave the chalk pieces to dry completely (for example overnight), then weigh them again.",
      "Calculate the change in mass of each piece and compare the three liquids. Which building stone would last longest in a polluted city?"
    ],
    predict: { q: "Which liquid will damage the chalk the most?", options: ["Vinegar — it fizzes and the chalk loses the most mass", "Tap water — it dissolves chalk fastest", "Fizzy water — its bubbles break the chalk apart", "None — chalk doesn't react with any of them"], answer: 0,
      result: "The chalk in vinegar fizzes steadily as carbon dioxide forms, and it loses clearly more mass than the others; its edges become rounded. In fizzy water a few bubbles appear (some are just the drink's own gas) and the loss of mass is small. Tap water hardly changes the chalk at all." },
    why: { q: "Why does vinegar damage the chalk more than fizzy water does?", answer: 0, options: [
      { t: "Vinegar is more acidic, so more hydrogen ions are available to react with the calcium carbonate", fb: "Correct. Vinegar has a pH of about 3, while the carbonic acid in fizzy water is much weaker and escapes as gas once the bottle is opened. More H⁺ ions means a faster reaction." },
      { t: "The bubbles in fizzy water protect the chalk", fb: "The bubbles don't form a protective layer. Fizzy water does react with chalk, just slowly, because carbonic acid is a very weak acid." },
      { t: "Vinegar simply dissolves chalk, like water dissolves sugar", fb: "The chalk doesn't just dissolve — it reacts and forms a new substance, carbon dioxide gas. That's a chemical change." },
      { t: "Vinegar contains more water, which softens the chalk", fb: "Vinegar is mostly water, but so are the other two liquids. The difference is how acidic each one is." }
    ] },
    hazards: ["Vinegar can sting and irritate the eyes.", "Chalk dust can irritate the eyes and throat.", "Glass beakers can break and cut, and spills make the floor slippery."],
    precautions: ["Wear goggles throughout.", "Handle the chalk gently to avoid making dust, and don't rub your eyes.", "Never taste the liquids, not even the fizzy water — never eat or drink in the lab.", "Wipe up spills straight away and wash your hands at the end."],
    disposal: ["Pour the liquids down the sink with plenty of water.", "Put the used chalk in the bin and rinse the beakers."],
    supervisionNote: "Low-hazard activity; the teacher should check beforehand that the chalk is calcium carbonate (it fizzes in vinegar), so that the results are meaningful.",
    clip: ["Chalk in vinegar, fizzy water and water", "Drop in the chalk and watch", "Vinegar fizzes and eats the chalk away!"]
  },
  sq: {
    name: "Shiu acid kundër gurit", short: "Shiu acid dhe gurët gëlqerorë",
    hook: "Pse disa statuja të vjetra prej mermeri po humbasin ngadalë fytyrat?",
    aim: "Modelo si i dëmton shiu acid ndërtesat prej guri gëlqeror dhe mermeri, duke krahasuar çfarë u bëjnë copave të shkumësit uthulla, uji i gazuar dhe uji i rubinetit.",
    chemistry: [
      "Guri gëlqeror, mermeri dhe shkumësi i vërtetë janë të gjitha forma të karbonatit të kalciumit. Acidet reagojnë me karbonatet dhe formojnë një kripë të tretshme, ujë dhe gaz dioksid karboni, ndaj shkëmbi gërryhet ngadalë. Këtë e bën çdo acid, sepse me karbonatin reagojnë jonet e hidrogjenit (H⁺) të acidit.",
      "Shiu është gjithmonë pak acid (rreth pH 5.6), sepse dioksidi i karbonit i ajrit tretet në të dhe formon acid karbonik të dobët — njësoj si uji i gazuar në këtë eksperiment. Djegia e lëndëve djegëse fosile në termocentrale, fabrika dhe automjete çliron dioksid squfuri (SO₂) dhe okside azoti (NOₓ). Këto treten në ujin e shiut dhe formojnë acid sulfurik dhe acid nitrik, duke krijuar shi acid me pH 4 ose edhe më të ulët.",
      "Uthulla (pH rreth 3) është më acide se shiu acid i zakonshëm, ndaj brenda pak minutash bën atë që shiu acid e bën gjatë shumë viteve. Uji i gazuar është vetëm pak acid dhe reagon shumë më ngadalë, ndërsa uji i rubinetit pothuajse nuk reagon fare. Prandaj ligjet për ajër më të pastër, që ulin shkarkimet e SO₂ dhe NOₓ, ndihmojnë në mbrojtjen e ndërtesave dhe statujave të vjetra."
    ],
    equation: "CaCO₃(s) + 2H⁺(aq) → Ca²⁺(aq) + H₂O(l) + CO₂(g)",
    equipment: ["3 copa të ngjashme shkumësi prej karbonati kalciumi (jo shkumës dërrase prej sulfati kalciumi), ose copa mermeri", "3 gota kimike ose gota të tejdukshme (250 mL), të etiketuara", "100 mL uthull e bardhë", "100 mL ujë i gazuar, i sapohapur", "100 mL ujë rubineti", "Peshore me saktësi 0.01 g", "Lugë plastike, letra kuzhine dhe një shënues", "Syze mbrojtëse"],
    steps: [
      "Vendos syzet. Etiketo tri gota kimike: 'uthull', 'ujë i gazuar' dhe 'ujë rubineti'.",
      "Peshoje secilën copë shkumësi, shëno masën e saj dhe shkruaj në cilën gotë do të shkojë.",
      "Hidh 100 mL nga secili lëng në gotën përkatëse.",
      "Hidh nga një copë shkumësi në secilën gotë në të njëjtën kohë. Vëzhgo nga afër për 2–3 minuta dhe shëno çfarë sheh.",
      "Lëre shkumësin në lëngje për 20 minuta, pastaj nxirre secilën copë me lugën plastike dhe vendose mbi një letër kuzhine të etiketuar.",
      "Lëri copat e shkumësit të thahen plotësisht (për shembull gjatë natës), pastaj peshoji përsëri.",
      "Llogarit ndryshimin e masës për secilën copë dhe krahaso tre lëngjet. Cili gur ndërtimi do të zgjaste më shumë në një qytet të ndotur?"
    ],
    predict: { q: "Cili lëng do ta dëmtojë më shumë shkumësin?", options: ["Uthulla — shkumëzon dhe shkumësi humbet më shumë masë", "Uji i rubinetit — e tret shkumësin më shpejt", "Uji i gazuar — flluskat e tij e copëtojnë shkumësin", "Asnjëri — shkumësi nuk reagon me asnjërin prej tyre"], answer: 0,
      result: "Shkumësi në uthull shkumëzon vazhdimisht ndërsa formohet dioksid karboni dhe humbet dukshëm më shumë masë se të tjerët; cepat e tij rrumbullakosen. Në ujin e gazuar shfaqen disa flluska (disa janë thjesht gazi i vetë pijes) dhe humbja e masës është e vogël. Uji i rubinetit pothuajse nuk e ndryshon fare shkumësin." },
    why: { q: "Pse uthulla e dëmton shkumësin më shumë se uji i gazuar?", answer: 0, options: [
      { t: "Uthulla është më acide, ndaj ka më shumë jone hidrogjeni për të reaguar me karbonatin e kalciumit", fb: "Saktë. Uthulla ka pH rreth 3, ndërsa acidi karbonik në ujin e gazuar është shumë më i dobët dhe del si gaz sapo hapet shishja. Më shumë jone H⁺ do të thotë reaksion më i shpejtë." },
      { t: "Flluskat në ujin e gazuar e mbrojnë shkumësin", fb: "Flluskat nuk formojnë shtresë mbrojtëse. Uji i gazuar reagon me shkumësin, por ngadalë, sepse acidi karbonik është acid shumë i dobët." },
      { t: "Uthulla thjesht e tret shkumësin, ashtu si uji tret sheqerin", fb: "Shkumësi nuk tretet thjesht — ai reagon dhe formon një substancë të re, gazin dioksid karboni. Ky është ndryshim kimik." },
      { t: "Uthulla përmban më shumë ujë, që e zbut shkumësin", fb: "Uthulla është kryesisht ujë, por të tillë janë edhe dy lëngjet e tjera. Ndryshimi qëndron te sa acid është secili lëng." }
    ] },
    hazards: ["Uthulla mund të djegë dhe të irritojë sytë.", "Pluhuri i shkumësit mund të irritojë sytë dhe fytin.", "Gotat kimike prej qelqi mund të thyhen dhe të presin, ndërsa derdhjet e bëjnë dyshemenë të rrëshqitshme."],
    precautions: ["Mbaj syze mbrojtëse gjatë gjithë kohës.", "Trajtoje shkumësin me kujdes që të mos bëjë pluhur dhe mos i fërko sytë.", "Mos i shijo kurrë lëngjet, as ujin e gazuar — në laborator nuk hahet e nuk pihet kurrë.", "Fshiji derdhjet menjëherë dhe laji duart në fund."],
    disposal: ["Derdhi lëngjet në lavaman me shumë ujë.", "Hidhe shkumësin e përdorur në kosh dhe shpëlaji gotat."],
    supervisionNote: "Aktivitet me rrezik të ulët; mësuesi duhet të kontrollojë paraprakisht që shkumësi të jetë karbonat kalciumi (shkumëzon në uthull), që rezultatet të kenë kuptim.",
    clip: ["Shkumës në uthull, ujë të gazuar dhe ujë", "Hidh shkumësin dhe vëzhgo", "Uthulla shkumëzon dhe e gërryen shkumësin!"]
  }
},

/* ===== Universal indicator rainbow ===== */
{
  id: "universal", icon: "tubes", topic: "acids", grades: "8–10", gmin: 8, gmax: 10,
  level: 2, supervision: "supervised", time: 30, eqType: "idea", predictAt: 3, ppe: ["goggles"],
  demo: { s: "rack", tubes: [ { from: "#22c55e", to: "#dc2626" }, { from: "#22c55e", to: "#f97316" }, { from: "#22c55e", to: "#22c55e" }, { from: "#22c55e", to: "#14b8a6" }, { from: "#22c55e", to: "#2563eb" }, { from: "#22c55e", to: "#7c3aed" } ] },
  video: null,
  sources: [
    { org: "Royal Society of Chemistry", title: "Universal indicator 'rainbow'", url: "https://edu.rsc.org/experiments/universal-indicator-rainbow/700.article" },
    { org: "Royal Society of Chemistry", title: "Universal indicator: microscale practical (11–16 years)", url: "https://edu.rsc.org/experiments/universal-indicator-microscale-11-16-years/4020613.article" },
    { org: "American Chemical Society", title: "Middle School Chemistry, Lesson 6.8: pH and Color Change", url: "https://www.acs.org/middleschoolchemistry/lessonplans/chapter6/lesson8.html" }
  ],
  en: {
    name: "Universal Indicator Rainbow", short: "The pH scale",
    hook: "One green liquid can tell you exactly how acidic or alkaline something is — in a rainbow of colours.",
    aim: "Use universal indicator to find the pH of six household solutions and place them on the pH scale from 1 to 14.",
    chemistry: [
      "Universal indicator is a mixture of several dyes, each of which changes colour at a different pH. Together they give a whole rainbow: red for strong acids (pH 1–2), orange and yellow for weaker acids (pH 3–6), green for neutral (pH 7), and blue to purple for alkalis (pH 8–14). Matching the colour to a chart tells you the pH.",
      "The pH number is a measure of the concentration of hydrogen ions (H⁺): the lower the pH, the more H⁺ ions there are. Each step down the scale means ten times more H⁺. Lemon juice and vinegar contain weak acids, while baking soda, soap and washing soda make alkaline solutions because they produce hydroxide ions (OH⁻) in water.",
      "'Strong' and 'concentrated' mean different things. A strong acid such as hydrochloric acid splits completely into ions in water, but a weak acid such as ethanoic acid (in vinegar) only partly does, so at the same concentration the strong acid has the lower pH. Concentration is how much acid is dissolved in a given volume: diluting vinegar makes it less concentrated, but it is still a weak acid."
    ],
    equation: "pH 1–6: acid (red → yellow) · pH 7: neutral (green) · pH 8–14: alkali (blue → purple)",
    equipment: ["Universal indicator solution with a dropper, and a pH colour chart", "7 test tubes in a rack, and a sheet of white paper as a background", "Lemon juice and white vinegar", "Distilled or tap water", "Baking soda solution (1 teaspoon in 100 mL water)", "Soap solution (a little hand soap in water)", "Dilute washing soda (sodium carbonate) solution, prepared by the teacher", "Dilute hydrochloric acid, 0.1 mol/dm³ (teacher only)", "Plastic pipettes (one per solution) and safety goggles"],
    steps: [
      "Put on goggles. Line up the six household solutions on your bench and label a test tube for each one.",
      "Use a separate clean pipette to put about 2 cm³ of each solution into its test tube.",
      "Add 2–3 drops of universal indicator to the water first and note its colour.",
      "Add 2–3 drops of indicator to each of the other solutions and swirl gently.",
      "Hold each tube against the white paper, compare it with the colour chart and record the pH.",
      "Arrange the tubes in order of pH, from most acidic to most alkaline, to make your rainbow.",
      "Mix 1 cm³ of vinegar with 9 cm³ of water, add indicator and compare the colour with undiluted vinegar.",
      "Watch as your teacher tests dilute (0.1 mol/dm³) hydrochloric acid, a strong acid, and compare its colour with vinegar."
    ],
    predict: { q: "Which solution do you think will turn universal indicator purple?", options: ["Washing soda solution", "Lemon juice", "Vinegar", "Water"], answer: 0,
      result: "Lemon juice turns red-orange (about pH 2), vinegar orange (about pH 3), water green (pH 7), baking soda solution green-blue (about pH 8), soap solution blue (pH 9–10) and washing soda solution purple (about pH 11). Washing soda is the most alkaline, so it gives the purple end of the rainbow." },
    why: { q: "Why does 0.1 mol/dm³ hydrochloric acid turn the indicator red, while vinegar only turns it orange?", answer: 0, options: [
      { t: "Hydrochloric acid is a strong acid that releases all its H⁺ ions, while ethanoic acid releases only a few", fb: "Yes! Vinegar actually contains more acid molecules than this hydrochloric acid, but only about 1 in 200 ethanoic acid molecules releases its H⁺ ion. Strength is about how much an acid splits into ions, not how much is dissolved." },
      { t: "The hydrochloric acid is more concentrated than vinegar", fb: "In fact the vinegar is more concentrated — about 0.8 mol/dm³ of acid. The difference is strength: hydrochloric acid splits completely into ions." },
      { t: "Vinegar contains water, which neutralises some of the acid", fb: "Both acids are dissolved in water, and water doesn't neutralise acids. The pH depends on how many H⁺ ions the acid releases." },
      { t: "Vinegar is a mixture, so the indicator can't detect all of it", fb: "Indicators respond to H⁺ ions wherever they come from. Vinegar gives fewer H⁺ ions because ethanoic acid is a weak acid." }
    ] },
    hazards: ["Washing soda solution irritates the eyes.", "Universal indicator solution contains ethanol, which is highly flammable, and it stains skin and clothes.", "Dilute hydrochloric acid can irritate the eyes and skin.", "Lemon juice and vinegar sting in eyes and cuts."],
    precautions: ["Wear goggles throughout.", "Keep the indicator bottle away from flames.", "Use a separate pipette for each solution so they don't get contaminated.", "Never taste any of the solutions, even the food ones — never eat or drink in the lab.", "Wash splashes off your skin with plenty of water."],
    disposal: ["All of these dilute solutions can be poured down the sink with plenty of water.", "Rinse the test tubes and pipettes with water."],
    supervisionNote: "Students can carry this out under teacher supervision; the teacher prepares the washing soda solution and handles the hydrochloric acid.",
    clip: ["Green indicator in six test tubes", "Add six household solutions", "A full rainbow from red to purple!"]
  },
  sq: {
    name: "Ylberi i indikatorit universal", short: "Shkalla e pH-së",
    hook: "Një lëng i gjelbër mund të të tregojë saktësisht sa acide ose alkaline është një substancë — me një ylber ngjyrash.",
    aim: "Përdor indikatorin universal për të gjetur pH-në e gjashtë tretësirave shtëpiake dhe vendosi ato në shkallën e pH-së nga 1 deri në 14.",
    chemistry: [
      "Indikatori universal është një përzierje e disa ngjyruesve, secili prej të cilëve ndryshon ngjyrë në një pH të ndryshëm. Së bashku ata japin një ylber të tërë: të kuqe për acidet e forta (pH 1–2), portokalli dhe të verdhë për acidet më të dobëta (pH 3–6), të gjelbër për tretësirat neutrale (pH 7) dhe nga bluja te vjollca për alkalet (pH 8–14). Duke e krahasuar ngjyrën me një tabelë, gjen pH-në.",
      "Numri i pH-së mat përqendrimin e joneve të hidrogjenit (H⁺): sa më i ulët pH-ja, aq më shumë jone H⁺ ka. Çdo shkallë më poshtë do të thotë dhjetë herë më shumë H⁺. Lëngu i limonit dhe uthulla përmbajnë acide të dobëta, ndërsa soda e bukës, sapuni dhe soda larëse japin tretësira alkaline, sepse në ujë prodhojnë jone hidroksid (OH⁻).",
      "'I fortë' dhe 'i përqendruar' nuk kanë të njëjtin kuptim. Një acid i fortë, si acidi klorhidrik, ndahet plotësisht në jone në ujë, ndërsa një acid i dobët, si acidi etanoik (në uthull), ndahet vetëm pjesërisht; prandaj, me të njëjtin përqendrim, acidi i fortë ka pH më të ulët. Përqendrimi tregon sa acid është tretur në një vëllim të caktuar: kur e hollon uthullën, ajo bëhet më pak e përqendruar, por mbetet përsëri acid i dobët."
    ],
    equation: "pH 1–6: acid (e kuqe → e verdhë) · pH 7: neutral (e gjelbër) · pH 8–14: alkali (blu → vjollcë)",
    equipment: ["Tretësirë indikatori universal me pikatore dhe tabelë ngjyrash të pH-së", "7 provëza në mbajtëse dhe një fletë e bardhë si sfond", "Lëng limoni dhe uthull e bardhë", "Ujë i distiluar ose ujë rubineti", "Tretësirë sode buke (1 lugë çaji në 100 mL ujë)", "Tretësirë sapuni (pak sapun duarsh në ujë)", "Tretësirë e holluar sode larëse (karbonat natriumi), e përgatitur nga mësuesi", "Acid klorhidrik i holluar, 0.1 mol/dm³ (vetëm për mësuesin)", "Pipeta plastike (një për çdo tretësirë) dhe syze mbrojtëse"],
    steps: [
      "Vendos syzet. Rendit gjashtë tretësirat shtëpiake në tavolinë dhe etiketo nga një provëz për secilën.",
      "Me një pipetë të veçantë e të pastër, hidh rreth 2 cm³ nga secila tretësirë në provëzën e saj.",
      "Shto 2–3 pika indikator universal fillimisht te uji dhe shëno ngjyrën e tij.",
      "Shto 2–3 pika indikator në secilën nga tretësirat e tjera dhe tundi lehtë.",
      "Mbaje secilën provëz para fletës së bardhë, krahasoje me tabelën e ngjyrave dhe shëno pH-në.",
      "Rendit provëzat sipas pH-së, nga më acidja te më alkalinja, për të krijuar ylberin tënd.",
      "Përziej 1 cm³ uthull me 9 cm³ ujë, shto indikator dhe krahaso ngjyrën me atë të uthullës së paholluar.",
      "Vëzhgo ndërsa mësuesi provon acid klorhidrik të holluar (0.1 mol/dm³), që është acid i fortë, dhe krahaso ngjyrën e tij me atë të uthullës."
    ],
    predict: { q: "Cila tretësirë mendon se do ta bëjë indikatorin universal vjollcë?", options: ["Tretësira e sodës larëse", "Lëngu i limonit", "Uthulla", "Uji"], answer: 0,
      result: "Lëngu i limonit bëhet i kuq në portokalli (rreth pH 2), uthulla portokalli (rreth pH 3), uji i gjelbër (pH 7), tretësira e sodës së bukës e gjelbër në blu (rreth pH 8), tretësira e sapunit blu (pH 9–10) dhe tretësira e sodës larëse vjollcë (rreth pH 11). Soda larëse është më alkalinja, ndaj jep skajin vjollcë të ylberit." },
    why: { q: "Pse acidi klorhidrik 0.1 mol/dm³ e bën indikatorin të kuq, ndërsa uthulla vetëm portokalli?", answer: 0, options: [
      { t: "Acidi klorhidrik është acid i fortë që çliron të gjitha jonet H⁺, ndërsa acidi etanoik çliron vetëm pak prej tyre", fb: "Po! Uthulla në fakt përmban më shumë molekula acidi se ky acid klorhidrik, por vetëm rreth 1 në 200 molekula acidi etanoik e çliron jonin e vet H⁺. Forca e një acidi lidhet me sa ndahet ai në jone, jo me sa është tretur." },
      { t: "Acidi klorhidrik është më i përqendruar se uthulla", fb: "Në fakt uthulla është më e përqendruar — rreth 0.8 mol/dm³ acid. Ndryshimi qëndron te forca: acidi klorhidrik ndahet plotësisht në jone." },
      { t: "Uthulla përmban ujë, që neutralizon një pjesë të acidit", fb: "Të dy acidet janë të tretur në ujë, dhe uji nuk i neutralizon acidet. pH-ja varet nga sa jone H⁺ çliron acidi." },
      { t: "Uthulla është përzierje, ndaj indikatori nuk mund ta dallojë të gjithën", fb: "Indikatorët reagojnë ndaj joneve H⁺, pavarësisht nga vijnë. Uthulla jep më pak jone H⁺ sepse acidi etanoik është acid i dobët." }
    ] },
    hazards: ["Tretësira e sodës larëse irriton sytë.", "Tretësira e indikatorit universal përmban etanol, që është shumë i ndezshëm, dhe njollos lëkurën e rrobat.", "Acidi klorhidrik i holluar mund të irritojë sytë dhe lëkurën.", "Lëngu i limonit dhe uthulla djegin në sy dhe në plagë."],
    precautions: ["Mbaj syze mbrojtëse gjatë gjithë kohës.", "Mbaje shishen e indikatorit larg flakëve.", "Përdor një pipetë të veçantë për secilën tretësirë, që të mos ndoten.", "Mos shijo asnjë tretësirë, as ato ushqimore — në laborator nuk hahet e nuk pihet kurrë.", "Laji spërkatjet në lëkurë me shumë ujë."],
    disposal: ["Të gjitha këto tretësira të holluara mund të derdhen në lavaman me shumë ujë.", "Shpëlaji provëzat dhe pipetat me ujë."],
    supervisionNote: "Nxënësit mund ta kryejnë nën mbikëqyrjen e mësuesit; mësuesi përgatit tretësirën e sodës larëse dhe trajton acidin klorhidrik.",
    clip: ["Indikator i gjelbër në gjashtë provëza", "Shto gjashtë tretësira shtëpiake", "Një ylber i plotë nga e kuqja te vjollca!"]
  }
},

/* ===== How hot is neutralisation? ===== */
{
  id: "neutralheat", icon: "burette", topic: "acids", grades: "10–12", gmin: 10, gmax: 12,
  level: 3, supervision: "close", time: 50, eqType: "equation", predictAt: 3, ppe: ["goggles", "coat", "gloves"],
  demo: { s: "beaker", from: "#e0f2fe", to: "#e0f2fe", level: 0.45, burette: true, temp: "up" },
  video: null,
  sources: [
    { org: "Royal Society of Chemistry", title: "A thermometric titration", url: "https://edu.rsc.org/experiments/a-thermometric-titration/429.article" },
    { org: "Oak National Academy", title: "Energy changes: neutralisation practical (GCSE)", url: "https://www.thenational.academy/teachers/programmes/combined-science-secondary-ks4-higher-aqa/units/energy-changes-in-reactions/lessons/energy-changes-neutralisation-practical" },
    { org: "Royal Society of Chemistry", title: "Energy changes in neutralisation", url: "https://edu.rsc.org/experiments/energy-changes-in-neutralisation/525.article" }
  ],
  en: {
    name: "How Hot Is Neutralisation?", short: "Exothermic neutralisation",
    hook: "Mixing an acid and an alkali, both at room temperature, can warm the mixture by several degrees — where does the heat come from?",
    aim: "Measure how the temperature changes as sodium hydroxide solution is added to hydrochloric acid, and use a graph to find the neutralisation point.",
    chemistry: [
      "When an acid reacts with an alkali, hydrogen ions (H⁺) from the acid and hydroxide ions (OH⁻) from the alkali join to form water. The sodium and chloride ions are spectator ions: they stay in solution as sodium chloride. Energy is released as the water molecules form, so the reaction is exothermic — energy is transferred to the surroundings and the solution warms up.",
      "Each 5 cm³ portion of alkali neutralises more of the acid and releases more heat, so the temperature climbs. When exactly enough alkali has been added to react with all the acid — the neutralisation point — the temperature reaches its maximum. After that, extra alkali has nothing left to react with: it only adds cooler liquid, and heat keeps escaping to the surroundings, so the temperature falls.",
      "Plotting temperature against volume of alkali gives two straight lines, one rising and one falling. Where they cross shows the volume needed for neutralisation and the highest temperature. With 1 mol/dm³ solutions this should be close to 25 cm³, with a rise of about 5–7 °C. The polystyrene cup and lid insulate the mixture so that less heat escapes; for any strong acid and strong alkali, about 57 kJ is released for every mole of water formed."
    ],
    equation: "H⁺(aq) + OH⁻(aq) → H₂O(l)   ΔH ≈ −57 kJ/mol",
    equipment: ["Polystyrene cup with a lid that has a hole for the thermometer", "250 cm³ beaker to stand the cup in", "Thermometer (−10 to 110 °C) or temperature probe", "25 cm³ measuring cylinder", "Burette filled by the teacher (or a 10 cm³ measuring cylinder) for the alkali", "25 cm³ dilute hydrochloric acid, 1 mol/dm³", "About 50 cm³ dilute sodium hydroxide solution, 1 mol/dm³ (CORROSIVE)", "Glass stirring rod", "Safety goggles, lab coat and gloves"],
    steps: [
      "Put on goggles, a lab coat and gloves. Stand the polystyrene cup in the beaker so that it cannot tip over.",
      "Measure 25 cm³ of hydrochloric acid with the measuring cylinder and pour it into the cup. Fit the lid and put the thermometer through the hole.",
      "Stir gently and record the starting temperature of the acid. Both solutions should be at room temperature.",
      "Add 5 cm³ of sodium hydroxide solution from the burette (or measuring cylinder), stir and record the highest temperature reached.",
      "Keep adding 5 cm³ portions, stirring and recording the highest temperature each time, until you have added 40 cm³ in total.",
      "Plot a graph of temperature (y-axis) against the total volume of sodium hydroxide added (x-axis). Draw one straight best-fit line through the rising points and another through the falling points.",
      "Read off where the two lines cross to find the volume needed for neutralisation and the maximum temperature. Repeat the experiment to check that your results are repeatable."
    ],
    predict: { q: "What will happen to the temperature as more and more sodium hydroxide is added?", options: ["It rises to a maximum, then slowly falls", "It keeps rising steadily the whole time", "It falls, because neutralisation takes in heat", "It stays the same — two solutions at room temperature can't change it"], answer: 0,
      result: "The temperature climbs with each portion — quickly at first, then more slowly — and peaks at about 25 cm³, roughly 5–7 °C above the starting temperature. After that it falls a little with each extra portion, because there is no acid left to react, and the cooler alkali and heat losses bring the temperature down." },
    why: { q: "Why does the temperature start to fall after about 25 cm³ of alkali has been added?", answer: 0, options: [
      { t: "All the acid has been used up, so no more heat is released, and the extra alkali and heat losses cool the mixture", fb: "Correct. Beyond the neutralisation point there are no H⁺ ions left to react. Adding room-temperature alkali dilutes the warm mixture, and heat escapes to the surroundings." },
      { t: "The reaction becomes endothermic once the solution is neutral", fb: "The reaction doesn't change direction. It simply stops, because there is no acid left — the cooling comes from the extra cool liquid and from heat loss." },
      { t: "The sodium hydroxide starts to freeze the mixture", fb: "The alkali is at room temperature, so it can't freeze anything. It only dilutes the warm mixture, which lowers its temperature a little." },
      { t: "The thermometer has reached its limit", fb: "The thermometer reads up to 110 °C, far above anything reached here. The fall is a real change in the temperature of the mixture." }
    ] },
    hazards: ["Sodium hydroxide solution (1 mol/dm³) is corrosive and can cause serious eye damage.", "Hydrochloric acid (1 mol/dm³) can irritate the eyes and skin.", "Glass thermometers and burettes can break and cause cuts.", "The light polystyrene cup can tip over and spill its contents."],
    precautions: ["Wear splash-proof goggles, a lab coat and gloves throughout.", "Stand the cup inside a beaker so that it cannot tip, and stir gently.", "Only the teacher fills the burette, below eye level and using a funnel.", "If alkali gets on your skin or in your eyes, rinse at once with plenty of running water for at least 10 minutes and tell the teacher.", "Never use the thermometer as a stirring rod."],
    disposal: ["The final mixture contains some excess sodium hydroxide, so dilute it with plenty of water before pouring it down the sink, or neutralise it as your teacher directs.", "Rinse the cup, measuring cylinders and burette with water; the teacher deals with any left-over sodium hydroxide."],
    supervisionNote: "Close supervision: students handle corrosive 1 mol/dm³ sodium hydroxide, so the teacher fills the burettes and makes sure goggles are worn at all times.",
    clip: ["Hydrochloric acid in a polystyrene cup", "Add sodium hydroxide, 5 cm³ at a time", "The temperature climbs, peaks, then falls"]
  },
  sq: {
    name: "Sa nxehtësi çliron neutralizimi?", short: "Neutralizimi ekzotermik",
    hook: "Përzierja e një acidi me një alkali, të dyja në temperaturën e dhomës, mund ta ngrohë tretësirën me disa gradë — nga vjen kjo nxehtësi?",
    aim: "Mat si ndryshon temperatura ndërsa tretësira e hidroksidit të natriumit i shtohet acidit klorhidrik dhe përdor një grafik për të gjetur pikën e neutralizimit.",
    chemistry: [
      "Kur një acid reagon me një alkali, jonet e hidrogjenit (H⁺) nga acidi dhe jonet hidroksid (OH⁻) nga alkali bashkohen dhe formojnë ujë. Jonet e natriumit dhe të klorurit janë jone spektatorë: mbeten në tretësirë si klorur natriumi. Gjatë formimit të molekulave të ujit çlirohet energji, ndaj reaksioni është ekzotermik — energjia kalon te mjedisi rrethues dhe tretësira ngrohet.",
      "Çdo sasi prej 5 cm³ alkali neutralizon edhe një pjesë të acidit dhe çliron më shumë nxehtësi, ndaj temperatura rritet. Kur është shtuar pikërisht aq alkali sa duhet për të reaguar me gjithë acidin — pika e neutralizimit — temperatura arrin maksimumin. Pas kësaj, alkali i tepërt nuk ka më me se të reagojë: ai vetëm shton lëng më të ftohtë, ndërsa nxehtësia vazhdon të humbasë në mjedis, prandaj temperatura bie.",
      "Grafiku i temperaturës kundrejt vëllimit të alkalit jep dy vija të drejta, njëra në rritje dhe tjetra në rënie. Pika ku ato priten tregon vëllimin e nevojshëm për neutralizim dhe temperaturën më të lartë. Me tretësira 1 mol/dm³ ky vëllim duhet të jetë afër 25 cm³, me një rritje temperature prej rreth 5–7 °C. Gota e polistirenit dhe kapaku e izolojnë përzierjen që të humbasë më pak nxehtësi; për çdo acid të fortë dhe alkali të fortë çlirohen rreth 57 kJ për çdo mol ujë që formohet."
    ],
    equation: "H⁺(aq) + OH⁻(aq) → H₂O(l)   ΔH ≈ −57 kJ/mol",
    equipment: ["Gotë polistireni me kapak që ka një vrimë për termometrin", "Gotë kimike 250 cm³ për të mbajtur gotën e polistirenit", "Termometër (−10 deri në 110 °C) ose sensor temperature", "Cilindër matës 25 cm³", "Buretë e mbushur nga mësuesi (ose cilindër matës 10 cm³) për alkalin", "25 cm³ acid klorhidrik i holluar, 1 mol/dm³", "Rreth 50 cm³ tretësirë e holluar hidroksidi natriumi, 1 mol/dm³ (GËRRYESE)", "Shufër qelqi për përzierje", "Syze mbrojtëse, përparëse laboratori dhe doreza"],
    steps: [
      "Vendos syzet, përparësen e laboratorit dhe dorezat. Vendose gotën e polistirenit brenda gotës kimike që të mos rrëzohet.",
      "Mat 25 cm³ acid klorhidrik me cilindrin matës dhe hidhe në gotë. Vendos kapakun dhe fut termometrin nëpër vrimë.",
      "Përzieje lehtë dhe shëno temperaturën fillestare të acidit. Të dyja tretësirat duhet të jenë në temperaturën e dhomës.",
      "Shto 5 cm³ tretësirë hidroksidi natriumi nga bureta (ose nga cilindri matës), përzieje dhe shëno temperaturën më të lartë që arrihet.",
      "Vazhdo të shtosh nga 5 cm³, duke përzier dhe duke shënuar çdo herë temperaturën më të lartë, derisa të kesh shtuar gjithsej 40 cm³.",
      "Ndërto grafikun e temperaturës (boshti y) kundrejt vëllimit të përgjithshëm të hidroksidit të natriumit të shtuar (boshti x). Hiq një vijë të drejtë që përshtatet më mirë me pikat në rritje dhe një tjetër për pikat në rënie.",
      "Gjej pikën ku priten dy vijat për të përcaktuar vëllimin e nevojshëm për neutralizim dhe temperaturën maksimale. Përsërite eksperimentin për të kontrolluar nëse rezultatet përsëriten."
    ],
    predict: { q: "Çfarë do të ndodhë me temperaturën ndërsa shtohet gjithnjë e më shumë hidroksid natriumi?", options: ["Rritet deri në një maksimum, pastaj bie ngadalë", "Rritet vazhdimisht gjatë gjithë kohës", "Bie, sepse neutralizimi thith nxehtësi", "Mbetet e njëjtë — dy tretësira në temperaturën e dhomës nuk mund ta ndryshojnë"], answer: 0,
      result: "Temperatura rritet me çdo sasi të shtuar — shpejt në fillim, pastaj më ngadalë — dhe arrin kulmin rreth 25 cm³, afërsisht 5–7 °C mbi temperaturën fillestare. Pas kësaj ajo bie pak me çdo sasi shtesë, sepse nuk ka mbetur acid për të reaguar, ndërsa alkali më i ftohtë dhe humbjet e nxehtësisë e ulin temperaturën." },
    why: { q: "Pse temperatura fillon të bjerë pasi janë shtuar rreth 25 cm³ alkali?", answer: 0, options: [
      { t: "I gjithë acidi është harxhuar, ndaj nuk çlirohet më nxehtësi, ndërsa alkali i tepërt dhe humbjet e nxehtësisë e ftohin përzierjen", fb: "Saktë. Pas pikës së neutralizimit nuk mbeten jone H⁺ për të reaguar. Alkali në temperaturën e dhomës e hollon përzierjen e ngrohtë, dhe nxehtësia humbet në mjedis." },
      { t: "Reaksioni bëhet endotermik kur tretësira bëhet neutrale", fb: "Reaksioni nuk ndryshon drejtim. Ai thjesht ndalon, sepse nuk ka më acid — ftohja vjen nga lëngu shtesë më i ftohtë dhe nga humbja e nxehtësisë." },
      { t: "Hidroksidi i natriumit fillon ta ngrijë përzierjen", fb: "Alkali është në temperaturën e dhomës, ndaj nuk mund të ngrijë asgjë. Ai vetëm e hollon përzierjen e ngrohtë, gjë që ia ul pak temperaturën." },
      { t: "Termometri ka arritur kufirin e tij", fb: "Termometri mat deri në 110 °C, shumë më lart se çdo temperaturë që arrihet këtu. Rënia është ndryshim i vërtetë i temperaturës së përzierjes." }
    ] },
    hazards: ["Tretësira e hidroksidit të natriumit (1 mol/dm³) është gërryese dhe mund të dëmtojë rëndë sytë.", "Acidi klorhidrik (1 mol/dm³) mund të irritojë sytë dhe lëkurën.", "Termometrat dhe buretat prej qelqi mund të thyhen dhe të shkaktojnë prerje.", "Gota e lehtë e polistirenit mund të rrëzohet dhe të derdhë përmbajtjen."],
    precautions: ["Mbaj gjatë gjithë kohës syze mbrojtëse kundër spërkatjeve, përparëse laboratori dhe doreza.", "Vendose gotën brenda një gote kimike që të mos rrëzohet dhe përzieje lehtë.", "Vetëm mësuesi e mbush buretën, poshtë nivelit të syve dhe me hinkë.", "Nëse alkali bie në lëkurë ose në sy, shpëlaje menjëherë me shumë ujë të rrjedhshëm për të paktën 10 minuta dhe njofto mësuesin.", "Mos e përdor kurrë termometrin si shufër përzierëse."],
    disposal: ["Përzierja përfundimtare përmban pak hidroksid natriumi të tepërt, ndaj holloje me shumë ujë para se ta derdhësh në lavaman, ose neutralizoje sipas udhëzimeve të mësuesit.", "Shpëlaj me ujë gotën, cilindrat matës dhe buretën; mësuesi merret me hidroksidin e natriumit që tepron."],
    supervisionNote: "Mbikëqyrje e afërt: nxënësit punojnë me hidroksid natriumi gërryes 1 mol/dm³, ndaj mësuesi i mbush buretat dhe kujdeset që syzet të mbahen gjatë gjithë kohës.",
    clip: ["Acid klorhidrik në një gotë polistireni", "Shto hidroksid natriumi, nga 5 cm³", "Temperatura rritet, arrin kulmin, pastaj bie"]
  }
},

/* ===== Hard or soft water? ===== */
{
  id: "hardwater", icon: "drop", topic: "analysis", grades: "8–10", gmin: 8, gmax: 10,
  level: 1, supervision: "supervised", time: 40, eqType: "equation", predictAt: 4, ppe: ["goggles"],
  demo: { s: "rack", tubes: [ { from: "#e0f2fe", to: "#e0f2fe" }, { from: "#e0f2fe", to: "#e2e8f0", precip: "#f1f5f9" }, { from: "#e0f2fe", to: "#e0f2fe" }, { from: "#e0f2fe", to: "#f1f5f9", precip: "#fafafa" }, { from: "#e0f2fe", to: "#f1f5f9", precip: "#fafafa" } ] },
  video: null,
  sources: [
    { org: "Royal Society of Chemistry", title: "Testing the hardness of water", url: "https://edu.rsc.org/experiments/testing-the-hardness-of-water/426.article" },
    { org: "Royal Society of Chemistry", title: "How can hardness in water be removed?", url: "https://edu.rsc.org/experiments/how-can-hardness-in-water-be-removed/1734.article" },
    { org: "WJEC", title: "Determination of the amount of hardness in water using soap solution (PDF)", url: "https://www.wjec.co.uk/media/d0lduz4j/determination-of-the-amount-of-hardness-in-water-using-soap-solution.pdf" }
  ],
  en: {
    name: "Hard or Soft Water?", short: "Water hardness and soap scum",
    hook: "Why does soap lather instantly in some towns but leave a grey scum in others?",
    aim: "Compare the hardness of different water samples by counting how many drops of soap solution are needed for a lasting lather, and find out which kind of hardness boiling removes.",
    chemistry: [
      "Hard water contains dissolved calcium ions (Ca²⁺) and magnesium ions (Mg²⁺), picked up as rainwater trickles through rocks such as limestone and chalk. Soft water contains very few of these ions, and distilled water has none at all.",
      "Soap is made of sodium or potassium salts of long-chain fatty acids, such as sodium stearate. In hard water, calcium and magnesium ions react with the soap to form calcium or magnesium stearate, an insoluble white solid called scum. Soap only lathers once all these ions have been used up, so the harder the water, the more soap you need.",
      "Temporary hardness is caused by dissolved calcium hydrogencarbonate. Boiling breaks it down into insoluble calcium carbonate — the limescale inside kettles — so boiled water becomes softer: Ca(HCO₃)₂ → CaCO₃ + H₂O + CO₂. Permanent hardness, caused by calcium or magnesium sulfate (such as Epsom salt), is not removed by boiling."
    ],
    equation: "Ca²⁺(aq) + 2C₁₇H₃₅COO⁻(aq) → Ca(C₁₇H₃₅COO)₂(s)",
    equipment: ["5 test tubes with stoppers, labelled, in a rack", "Distilled water and tap water", "Tap water boiled for 10 minutes and cooled (prepared by the teacher)", "Epsom salt solution: about 1 g of Epsom salt (magnesium sulfate) in 500 cm³ of distilled water", "The same Epsom salt solution, boiled for 10 minutes and cooled (prepared by the teacher)", "Soap solution: pure liquid soap (e.g. olive-oil castile soap) diluted 1 : 10 with distilled water — not washing-up liquid", "10 cm³ measuring cylinder and a dropping pipette", "Safety goggles"],
    steps: [
      "Put on goggles. Use the measuring cylinder to put 5 cm³ of each water sample into its labelled test tube.",
      "Add 2 drops of soap solution to the distilled water, put the stopper in and shake hard for 5 seconds.",
      "Keep adding soap 2 drops at a time, shaking after each addition, until a lather forms that lasts for 30 seconds. Record the total number of drops.",
      "Repeat with the tap water and then the boiled tap water, using the same pipette and shaking in the same way.",
      "Repeat with the Epsom salt solution and the boiled Epsom salt solution. Look out for white scum in the tubes.",
      "Record your results in a table and rank the samples from softest (fewest drops) to hardest (most drops).",
      "Decide which samples have temporary hardness (softened by boiling) and which have permanent hardness (unchanged by boiling)."
    ],
    predict: { q: "How will the boiled Epsom salt solution compare with the unboiled one?", options: ["About the same number of drops — boiling doesn't remove this kind of hardness", "Far fewer drops, just like distilled water", "No soap at all — it will lather by itself", "It will never lather, however much soap is added"], answer: 0,
      result: "Distilled water lathers after just a few drops. Tap water needs more drops in a hard-water area, and boiled tap water usually needs fewer than unboiled. Both Epsom salt solutions need the most soap and turn cloudy with white scum first — boiling makes almost no difference, because magnesium sulfate causes permanent hardness." },
    why: { q: "Why does the Epsom salt solution need so many drops before it lathers?", answer: 0, options: [
      { t: "Its magnesium ions react with the soap to form insoluble scum until they are all used up", fb: "Correct. The white scum is magnesium stearate. Only when all the Mg²⁺ ions have been removed is extra soap free to make a lather." },
      { t: "The salt makes the water too thick for bubbles", fb: "The solution is very dilute and just as runny as water. The soap is being used up in a reaction that forms scum." },
      { t: "Epsom salt is an acid that bursts the bubbles", fb: "Magnesium sulfate solution is close to neutral. It stops lathering because its magnesium ions react with the soap." },
      { t: "Any dissolved salt stops soap from lathering", fb: "Not all salts cause hardness — a little sodium chloride (table salt), for example, doesn't form scum. It is calcium and magnesium ions that make insoluble compounds with soap." }
    ] },
    hazards: ["Soap solution irritates the eyes.", "Glass test tubes can break if they are dropped or knocked while being shaken.", "Boiling water can scald (the teacher boils the samples in advance)."],
    precautions: ["Wear goggles throughout.", "Hold the stopper firmly with your thumb and shake over the rack, away from faces.", "Make sure the boiled samples have cooled completely before you use them.", "Don't drink any of the samples, not even the tap water — never eat or drink in the lab.", "Wipe up spills straight away, because soapy water is slippery."],
    disposal: ["All the samples can be poured down the sink with plenty of water.", "Rinse the test tubes thoroughly to remove the scum."],
    supervisionNote: "Low-hazard activity under teacher supervision; the teacher boils and cools the water samples before the lesson.",
    clip: ["Five water samples in a rack", "Shake each one with drops of soap", "Hard water turns cloudy with white scum!"]
  },
  sq: {
    name: "Ujë i fortë apo i butë?", short: "Fortësia e ujit dhe sapuni",
    hook: "Pse në disa qytete sapuni bën shkumë menjëherë, ndërsa në të tjera lë një llum gri?",
    aim: "Krahaso fortësinë e mostrave të ndryshme të ujit duke numëruar sa pika tretësirë sapuni nevojiten për një shkumë të qëndrueshme, dhe zbulo cilin lloj fortësie e heq zierja.",
    chemistry: [
      "Uji i fortë përmban jone të tretura kalciumi (Ca²⁺) dhe magnezi (Mg²⁺), që i merr kur uji i shiut rrjedh nëpër shkëmbinj si guri gëlqeror dhe shkumësi. Uji i butë përmban shumë pak nga këto jone, ndërsa uji i distiluar nuk ka fare.",
      "Sapuni përbëhet nga kripëra natriumi ose kaliumi të acideve yndyrore me zinxhir të gjatë, si stearati i natriumit. Në ujë të fortë, jonet e kalciumit dhe të magnezit reagojnë me sapunin dhe formojnë stearat kalciumi ose magnezi, një lëndë e bardhë e patretshme që quhet llum sapuni. Sapuni bën shkumë vetëm pasi janë harxhuar të gjitha këto jone, ndaj sa më i fortë të jetë uji, aq më shumë sapun nevojitet.",
      "Fortësia e përkohshme shkaktohet nga hidrogjenkarbonati i kalciumit i tretur. Zierja e zbërthen atë në karbonat kalciumi të patretshëm — gëlqerja që mblidhet brenda ibrikëve — ndaj uji i zier bëhet më i butë: Ca(HCO₃)₂ → CaCO₃ + H₂O + CO₂. Fortësia e përhershme, e shkaktuar nga sulfati i kalciumit ose i magnezit (si kripa angleze), nuk hiqet me zierje."
    ],
    equation: "Ca²⁺(aq) + 2C₁₇H₃₅COO⁻(aq) → Ca(C₁₇H₃₅COO)₂(s)",
    equipment: ["5 provëza me tapa, të etiketuara, në mbajtëse", "Ujë i distiluar dhe ujë rubineti", "Ujë rubineti i zier për 10 minuta dhe i ftohur (i përgatitur nga mësuesi)", "Tretësirë kripe angleze: rreth 1 g kripë angleze (sulfat magnezi) në 500 cm³ ujë të distiluar", "E njëjta tretësirë kripe angleze, e zier për 10 minuta dhe e ftohur (e përgatitur nga mësuesi)", "Tretësirë sapuni: sapun i lëngshëm i pastër (p.sh. sapun me vaj ulliri) i holluar 1 : 10 me ujë të distiluar — jo detergjent enësh", "Cilindër matës 10 cm³ dhe një pipetë pikuese", "Syze mbrojtëse"],
    steps: [
      "Vendos syzet. Me cilindrin matës, hidh 5 cm³ nga secila mostër uji në provëzën e saj të etiketuar.",
      "Shto 2 pika tretësirë sapuni te uji i distiluar, vendos tapën dhe tunde fort për 5 sekonda.",
      "Vazhdo të shtosh sapun nga 2 pika, duke e tundur pas çdo shtimi, derisa të formohet një shkumë që zgjat 30 sekonda. Shëno numrin e përgjithshëm të pikave.",
      "Përsërite me ujin e rubinetit dhe pastaj me ujin e zier të rubinetit, duke përdorur të njëjtën pipetë dhe duke tundur në të njëjtën mënyrë.",
      "Përsërite me tretësirën e kripës angleze dhe me tretësirën e zier të kripës angleze. Vëzhgo nëse në provëza shfaqet llum i bardhë.",
      "Shëno rezultatet në një tabelë dhe rendit mostrat nga më e buta (më pak pika) te më e forta (më shumë pika).",
      "Përcakto cilat mostra kanë fortësi të përkohshme (zbuten me zierje) dhe cilat kanë fortësi të përhershme (nuk ndryshojnë me zierje)."
    ],
    predict: { q: "Si do të krahasohet tretësira e zier e kripës angleze me atë të pazier?", options: ["Do të duhen afërsisht po aq pika — zierja nuk e heq këtë lloj fortësie", "Do të duhen shumë më pak pika, njësoj si te uji i distiluar", "Nuk do të duhet fare sapun — do të bëjë shkumë vetë", "Nuk do të bëjë kurrë shkumë, sado sapun të shtohet"], answer: 0,
      result: "Uji i distiluar bën shkumë pas vetëm pak pikash. Uji i rubinetit kërkon më shumë pika në zonat me ujë të fortë, dhe uji i zier i rubinetit zakonisht kërkon më pak pika se ai i pazier. Të dyja tretësirat e kripës angleze kërkojnë më shumë sapun dhe fillimisht turbullohen nga llumi i bardhë — zierja nuk bën pothuajse asnjë ndryshim, sepse sulfati i magnezit shkakton fortësi të përhershme." },
    why: { q: "Pse tretësira e kripës angleze kërkon kaq shumë pika para se të bëjë shkumë?", answer: 0, options: [
      { t: "Jonet e magnezit reagojnë me sapunin dhe formojnë llum të patretshëm derisa të harxhohen të gjitha", fb: "Saktë. Llumi i bardhë është stearat magnezi. Vetëm pasi janë larguar të gjitha jonet Mg²⁺, sapuni i shtuar mbetet i lirë për të bërë shkumë." },
      { t: "Kripa e bën ujin shumë të trashë për flluska", fb: "Tretësira është shumë e holluar dhe po aq e rrjedhshme sa uji. Sapuni harxhohet në një reaksion që formon llum." },
      { t: "Kripa angleze është acid që i shpërthen flluskat", fb: "Tretësira e sulfatit të magnezit është pothuajse neutrale. Shkuma nuk formohet sepse jonet e magnezit reagojnë me sapunin." },
      { t: "Çdo kripë e tretur e pengon sapunin të bëjë shkumë", fb: "Jo të gjitha kripërat shkaktojnë fortësi — për shembull, pak klorur natriumi (kripë gjelle) nuk formon llum. Jonet e kalciumit dhe të magnezit janë ato që formojnë përbërje të patretshme me sapunin." }
    ] },
    hazards: ["Tretësira e sapunit irriton sytë.", "Provëzat prej qelqi mund të thyhen nëse bien ose goditen gjatë tundjes.", "Uji që vlon mund të shkaktojë djegie (mësuesi i zien mostrat paraprakisht)."],
    precautions: ["Mbaj syze mbrojtëse gjatë gjithë kohës.", "Mbaje tapën fort me gishtin e madh dhe tunde mbi mbajtëse, larg fytyrave.", "Sigurohu që mostrat e ziera të jenë ftohur plotësisht para se t'i përdorësh.", "Mos pi asnjë mostër, as ujin e rubinetit — në laborator nuk hahet e nuk pihet kurrë.", "Fshiji menjëherë derdhjet, sepse uji me sapun është i rrëshqitshëm."],
    disposal: ["Të gjitha mostrat mund të derdhen në lavaman me shumë ujë.", "Shpëlaji mirë provëzat për të hequr llumin."],
    supervisionNote: "Aktivitet me rrezik të ulët nën mbikëqyrjen e mësuesit; mësuesi i zien dhe i ftoh mostrat e ujit para orës së mësimit.",
    clip: ["Pesë mostra uji në mbajtëse", "Tunde secilën me pika sapuni", "Uji i fortë turbullohet nga llumi i bardhë!"]
  }
}
];


/* ---------- New experiments: separation & everyday organic chemistry ---------- */
const EXP_NEW_3 = [
/* ===== Build a water filter ===== */
{
  id: "waterfilter", icon: "filter", topic: "separation", grades: "7–8", gmin: 7, gmax: 8,
  level: 1, supervision: "supervised", time: 40, eqType: "idea", predictAt: 4, ppe: ["goggles", "gloves"],
  demo: { s: "beaker", from: "#8b5a2b", to: "#efe6d2", level: 0.6 },
  video: null,
  sources: [
    { org: "Science Buddies", title: "From Contaminated to Clean: How Filtering Can Clean Water", url: "https://www.sciencebuddies.org/science-fair-projects/project-ideas/EnvEng_p030/environmental-engineering/how-filtering-can-clean-water" },
    { org: "Science Buddies", title: "Capable Carbon Filters", url: "https://www.sciencebuddies.org/stem-activities/capable-carbon-filters" },
    { org: "Bell Museum, University of Minnesota", title: "Filter Your Water", url: "https://www.bellmuseum.umn.edu/activities-for-kids/exoplanet-exploration-grades-7-8/filter-your-water-experiment/" }
  ],
  en: {
    name: "Build a Water Filter", short: "Sedimentation & filtration",
    hook: "Can you turn muddy water clear using nothing but sand, gravel and charcoal?",
    aim: "Build a layered filter in a plastic bottle and find out what filtration can remove from muddy water — and what it can't.",
    chemistry: [
      "Muddy water is a mixture: insoluble particles (soil, sand, bits of plants) floating in the water, plus substances dissolved in it. If it is left to stand, the heaviest particles sink to the bottom — this is sedimentation. Filtration separates insoluble solids from a liquid: the solid left behind is the residue, and the liquid that passes through is the filtrate.",
      "Each layer traps smaller and smaller particles: the gravel stops big bits, the sand catches finer grains, and the cotton wool stops the sand escaping and holds back very fine particles. Activated charcoal is full of tiny pores, so it has an enormous surface area; some coloured and smelly substances stick to its surface (adsorption).",
      "The water comes out much clearer, but it is NOT safe to drink. Bacteria and viruses are small enough to slip through, and dissolved substances (salts, some chemicals) pass straight through. Real water treatment works add extra steps, such as disinfecting the water with chlorine."
    ],
    equation: "muddy water → settle (sedimentation) → filter (residue stays in layers) → clearer filtrate — still not safe to drink",
    equipment: ["Large plastic bottle (1.5–2 L), cut in half by the teacher", "Cotton wool (a large handful)", "Activated charcoal (aquarium type), about 3 tablespoons, rinsed", "Clean fine sand, about 1 cup", "Small gravel or pebbles, about 1 cup", "Muddy water: 2 spoonfuls of garden soil stirred into 400 mL of water", "Two clear cups or beakers and a stopwatch", "Safety goggles and gloves"],
    steps: [
      "Put on goggles and gloves. Turn the top half of the bottle upside down and stand it in the bottom half, like a funnel.",
      "Push a wad of cotton wool firmly into the neck. Add the layers in this order: charcoal, then sand, then gravel on top — each about 3 cm deep.",
      "Pour about 200 mL of clean water through the filter to rinse out the charcoal dust. Throw this first water away.",
      "Stir the muddy water and pour a little into a clear cup to keep as a 'before' sample. Let the rest stand for 5 minutes and watch what sinks to the bottom.",
      "Slowly pour the muddy water onto the gravel. Time how long it takes for the water to start dripping out.",
      "Compare the filtered water (filtrate) with the 'before' sample against a sheet of white paper. Look at what is trapped in the top layers (residue).",
      "Pour the filtrate through a second time and compare again. Do NOT drink it."
    ],
    predict: { q: "What will the water look like when it drips out of the filter?", options: ["Much clearer, though maybe slightly tinted", "Just as muddy as before", "Perfectly pure and safe to drink", "Thicker and darker than before"], answer: 0,
      result: "The first drops may be a little cloudy, but soon the water dripping out is much clearer — pale yellow or almost colourless. Mud, sand grains and bits of leaves stay trapped in the top layers as residue. Even so, the filtrate is not safe to drink: microbes and dissolved substances pass straight through." },
    why: { q: "Why does the water come out clearer?", answer: 0, options: [
      { t: "The layers trap the insoluble particles, and the charcoal holds on to some coloured substances", fb: "Filtration separates insoluble solids from a liquid. Large bits stop in the gravel, finer ones in the sand and cotton wool, and the charcoal adsorbs some colour and smell." },
      { t: "The filter dissolves the mud", fb: "The mud doesn't dissolve — if it did, it would pass straight through with the water. It is trapped because the particles are too big to get through the gaps." },
      { t: "The filter kills the germs in the water", fb: "Sand and charcoal don't kill microbes, and most are small enough to slip through. That's exactly why the filtered water still isn't safe to drink." },
      { t: "The water reacts with the sand and becomes new, clean water", fb: "No chemical reaction happens — no new substance is made. Filtering is a physical separation: the particles are simply held back." }
    ] },
    hazards: ["The cut edge of a plastic bottle can be sharp.", "Soil can contain bacteria that may cause infections, especially through cuts.", "Charcoal dust can irritate the eyes and throat.", "Filtered water looks clean but can still contain harmful microbes and chemicals."],
    precautions: ["The teacher cuts the bottles and covers the cut edges with tape.", "Wear goggles and gloves, and cover any cuts on your hands.", "Rinse the charcoal gently to avoid making dust.", "Never drink the filtered water — and never eat or drink in the lab.", "Wash your hands thoroughly at the end."],
    disposal: ["Empty the soil, sand, gravel and charcoal into the bin or onto soil outside — never down the sink, as they block drains.", "Pour the leftover muddy water and the filtrate onto soil or a flower bed outside.", "Rinse and recycle the plastic bottle."],
    supervisionNote: "Low-hazard activity: the teacher cuts the bottles in advance and makes sure nobody drinks the filtered water.",
    clip: ["Muddy water and a layered bottle filter", "Pour the muddy water through the layers", "Clearer water drips out — but don't drink it!"]
  },
  sq: {
    name: "Ndërto një filtër uji", short: "Sedimentimi dhe filtrimi",
    hook: "A mund ta kthesh ujin me baltë në ujë të kthjellët vetëm me rërë, zhavorr dhe qymyr?",
    aim: "Ndërto një filtër me shtresa në një shishe plastike dhe zbulo çfarë heq filtrimi nga uji me baltë — dhe çfarë nuk mund të heqë.",
    chemistry: [
      "Uji me baltë është një përzierje: grimca të patretshme (dhé, rërë, copëza bimësh) pezull në ujë, si dhe substanca të tretura në të. Nëse e lëmë të qëndrojë, grimcat më të rënda bien në fund — kjo quhet sedimentim (fundërrim). Filtrimi ndan lëndët e ngurta të patretshme nga lëngu: lënda e ngurtë që mbetet quhet mbetje, ndërsa lëngu që kalon quhet filtrat.",
      "Çdo shtresë kap grimca gjithnjë e më të vogla: zhavorri ndalon copat e mëdha, rëra kap kokrrizat më të imëta, ndërsa pambuku nuk e lë rërën të dalë dhe mban grimcat shumë të imëta. Qymyri aktiv është plot me pore të vogla, ndaj ka një sipërfaqe jashtëzakonisht të madhe; disa substanca me ngjyrë ose me erë ngjiten në sipërfaqen e tij (adsorbim).",
      "Uji del shumë më i kthjellët, por NUK është i sigurt për t'u pirë. Bakteret dhe viruset janë aq të vogla sa kalojnë nëpër filtër, ndërsa substancat e tretura (kripëra, disa kimikate) kalojnë drejtpërdrejt. Impiantet e vërteta të trajtimit të ujit shtojnë hapa të tjerë, si dezinfektimi i ujit me klor."
    ],
    equation: "ujë me baltë → fundërrim (sedimentim) → filtrim (mbetja qëndron në shtresa) → filtrat më i kthjellët — ende jo i pijshëm",
    equipment: ["Shishe e madhe plastike (1,5–2 L), e prerë përgjysmë nga mësuesi", "Pambuk (një grusht i madh)", "Qymyr aktiv (i llojit për akuariume), rreth 3 lugë gjelle, i shpëlarë", "Rërë e imët e pastër, rreth 1 filxhan", "Zhavorr i imët ose guralecë, rreth 1 filxhan", "Ujë me baltë: 2 lugë dhé kopshti të përziera në 400 mL ujë", "Dy gota ose gota kimike transparente dhe një kronometër", "Syze mbrojtëse dhe doreza"],
    steps: [
      "Vendos syzet dhe dorezat. Ktheje përmbys gjysmën e sipërme të shishes dhe vendose brenda gjysmës së poshtme, si një hinkë.",
      "Shtyje fort një tufë pambuku në grykë. Shto shtresat me këtë radhë: qymyr, pastaj rërë dhe sipër zhavorr — secila rreth 3 cm e trashë.",
      "Hidh rreth 200 mL ujë të pastër nëpër filtër për të shpëlarë pluhurin e qymyrit. Hidhe këtë ujë të parë.",
      "Përziej ujin me baltë dhe hidh pak në një gotë transparente si mostër ‘para’. Pjesën tjetër lëre të qëndrojë 5 minuta dhe vëzhgo çfarë bie në fund.",
      "Derdhe ngadalë ujin me baltë mbi zhavorr. Mat sa kohë duhet që uji të fillojë të pikojë poshtë.",
      "Krahaso ujin e filtruar (filtratin) me mostrën ‘para’ përpara një flete të bardhë. Shiko çfarë ka mbetur e bllokuar në shtresat e sipërme (mbetja).",
      "Kaloje filtratin edhe një herë nëpër filtër dhe krahaso përsëri. MOS e pi."
    ],
    predict: { q: "Si do të duket uji kur pikon nga filtri?", options: ["Shumë më i kthjellët, ndoshta me një nuancë të lehtë", "Po aq me baltë sa më parë", "Krejtësisht i pastër dhe i sigurt për t'u pirë", "Më i trashë dhe më i errët se më parë"], answer: 0,
      result: "Pikat e para mund të jenë pak të turbullta, por shpejt uji që pikon bëhet shumë më i kthjellët — i verdhë i zbehtë ose pothuajse pa ngjyrë. Balta, kokrrizat e rërës dhe copëzat e gjetheve mbeten të bllokuara në shtresat e sipërme si mbetje. Megjithatë, filtrati nuk është i sigurt për t'u pirë: mikrobet dhe substancat e tretura kalojnë drejtpërdrejt." },
    why: { q: "Pse uji del më i kthjellët?", answer: 0, options: [
      { t: "Shtresat i kapin grimcat e patretshme, ndërsa qymyri mban disa substanca me ngjyrë", fb: "Filtrimi ndan lëndët e ngurta të patretshme nga lëngu. Copat e mëdha ndalen në zhavorr, më të imëtat në rërë dhe në pambuk, ndërsa qymyri adsorbon pak ngjyrë dhe erë." },
      { t: "Filtri e tret baltën", fb: "Balta nuk tretet — po të tretej, do të kalonte drejtpërdrejt bashkë me ujin. Ajo mbetet sepse grimcat janë shumë të mëdha për të kaluar nëpër boshllëqe." },
      { t: "Filtri i vret mikrobet në ujë", fb: "Rëra dhe qymyri nuk i vrasin mikrobet, dhe shumica e tyre janë aq të vogla sa kalojnë. Pikërisht për këtë uji i filtruar ende nuk është i sigurt për t'u pirë." },
      { t: "Uji reagon me rërën dhe bëhet ujë i ri e i pastër", fb: "Nuk ndodh asnjë reaksion kimik — nuk formohet substancë e re. Filtrimi është ndarje fizike: grimcat thjesht mbahen pas." }
    ] },
    hazards: ["Buza e prerë e shishes plastike mund të jetë e mprehtë.", "Dheu mund të përmbajë baktere që shkaktojnë infeksione, sidomos përmes plagëve.", "Pluhuri i qymyrit mund të irritojë sytë dhe fytin.", "Uji i filtruar duket i pastër, por mund të përmbajë ende mikrobe dhe kimikate të dëmshme."],
    precautions: ["Mësuesi i pret shishet dhe i mbulon buzët e prera me shirit ngjitës.", "Mbaj syze mbrojtëse dhe doreza, dhe mbulo çdo plagë në duar.", "Shpëlaje qymyrin me kujdes që të mos ngrihet pluhur.", "Mos e pi kurrë ujin e filtruar — dhe mos ha e mos pi kurrë në laborator.", "Laj mirë duart në fund."],
    disposal: ["Zbraz dheun, rërën, zhavorrin dhe qymyrin në kosh ose mbi tokë jashtë — kurrë në lavaman, sepse bllokojnë tubat.", "Derdhe ujin me baltë të mbetur dhe filtratin mbi tokë ose në një lulishte jashtë.", "Shpëlaje dhe ricikloje shishen plastike."],
    supervisionNote: "Aktivitet me rrezik të ulët: mësuesi i pret shishet paraprakisht dhe sigurohet që askush të mos e pijë ujin e filtruar.",
    clip: ["Ujë me baltë dhe një filtër me shtresa", "Derdh ujin me baltë nëpër shtresa", "Pikon ujë më i kthjellët — por mos e pi!"]
  }
},

/* ===== Iron in your cereal ===== */
{
  id: "ironcereal", icon: "nail", topic: "separation", grades: "7–9", gmin: 7, gmax: 9,
  level: 1, supervision: "supervised", time: 30, eqType: "equation", predictAt: 3, ppe: ["goggles"],
  demo: { s: "beaker", from: "#d4a766", to: "#c9995a", level: 0.5, nail: "#262626" },
  video: null,
  sources: [
    { org: "Royal Society of Chemistry", title: "Extracting iron from breakfast cereal", url: "https://edu.rsc.org/experiments/extracting-iron-from-breakfast-cereal/393.article" },
    { org: "AACT (American Chemical Society)", title: "Metallic Breakfast", url: "https://teachchemistry.org/classroom-resources/metallic-breakfast" },
    { org: "Scientific American (with Science Buddies)", title: "Get the Iron out—of Your Breakfast Cereal", url: "https://www.scientificamerican.com/article/get-the-iron-out-of-your-breakfast-cereal-bring-science-home/" }
  ],
  en: {
    name: "Iron in Your Cereal", short: "Magnetic separation",
    hook: "Your breakfast contains real metal — and you can pull it out with a magnet.",
    aim: "Use a strong magnet to separate tiny particles of iron from iron-fortified breakfast cereal, and find out why the iron is added.",
    chemistry: [
      "Many breakfast cereals are fortified: the manufacturer adds extra vitamins and minerals. Iron is often added as a very fine powder of pure (elemental) iron metal — grains so small that you can't see or taste them in the flakes. Your body needs iron to make haemoglobin, the substance in red blood cells that carries oxygen.",
      "Iron is magnetic, but starch, sugar, protein and water are not. Moving a strong magnet through the wet mixture drags the iron particles together so that they become visible. This is a physical separation that uses a difference in one property — magnetism.",
      "Your body can't absorb solid metal. In the stomach, hydrochloric acid reacts with the tiny iron particles to form iron(II) ions (Fe²⁺), which dissolve and can be absorbed in the intestine. The particles are very fine, so they have a large surface area and react quickly."
    ],
    equation: "Fe(s) + 2HCl(aq) → FeCl₂(aq) + H₂(g)",
    equipment: ["Iron-fortified breakfast flakes (check the label), about 50 g", "Strong zip-lock plastic bag (about 1 litre)", "Rolling pin", "About 150 mL of warm water", "Strong neodymium magnet", "Tray to work on", "Hand lens", "Safety goggles"],
    steps: [
      "Put on goggles. Find iron in the nutrition table on the cereal box and note how much it contains.",
      "Put about 50 g of flakes in the zip-lock bag, squeeze out the air and seal it. Crush the flakes into a fine powder with the rolling pin.",
      "Add about 150 mL of warm water, reseal the bag with a little air inside and squeeze it gently to make a runny mush. Leave it for 10 minutes to soften.",
      "Lay the bag flat on the tray. Press the magnet against the outside and move it slowly backwards and forwards over the mush for 2–3 minutes, as if stirring.",
      "Hold the magnet still on one spot, tilt the bag so the mush drains away from it, and look closely at the plastic next to the magnet with the hand lens.",
      "Slide the magnet slowly across the bag and watch whether the specks follow it. Then pull the magnet away completely.",
      "Optional: repeat with a cereal that has no added iron and compare."
    ],
    predict: { q: "What will collect on the plastic next to the magnet?", options: ["Tiny black specks of iron", "Nothing — the iron is invisible and can't be separated", "Shiny silver nuggets", "Orange flakes of rust"], answer: 0,
      result: "After a couple of minutes, a small cluster of tiny black specks gathers on the plastic right next to the magnet. They follow the magnet as it moves and spread out again when it is taken away — they are particles of metallic iron. Iron powder looks black, not shiny, because the grains are so small." },
    why: { q: "Why can a magnet pull iron out of the cereal?", answer: 0, options: [
      { t: "The iron was added as tiny particles of iron metal, which is magnetic", fb: "Only a few materials are attracted to magnets, and iron is one of them. Starch, sugar and water are not, so the magnet separates the iron from everything else." },
      { t: "All the minerals in cereal are magnetic", fb: "Calcium, zinc and salt are not attracted to a magnet. Iron, nickel and cobalt are the common magnetic metals." },
      { t: "The magnet pulls out iron that is dissolved in the water", fb: "Dissolved iron ions are spread out in solution and are not pulled out by a magnet. Here the iron is in the form of solid metal particles." },
      { t: "The magnet makes the iron by reacting with the cereal", fb: "Magnets don't cause chemical reactions. The iron was already there — the manufacturer added it." }
    ] },
    hazards: ["Strong neodymium magnets can snap together and pinch skin, and can chip or shatter.", "Swallowed magnets can cause serious internal injuries.", "Strong magnets can damage phones and bank cards and may affect pacemakers.", "Cereals can contain allergens such as gluten or nuts."],
    precautions: ["Use one magnet at a time, keep magnets apart, and never put a magnet in your mouth.", "Keep magnets away from phones, cards and anyone with a pacemaker.", "Treat the cereal as lab material — never eat or drink in the lab.", "Check for food allergies before the lesson and wash your hands afterwards."],
    disposal: ["Put the sealed bag with the cereal mush in the bin — check that no magnet is inside.", "Wipe the magnets clean and give them all back to the teacher to be counted."],
    supervisionNote: "Low-hazard activity, but the teacher should hand out and count the strong magnets and check for food allergies first.",
    clip: ["Crushed cereal mixed with warm water", "Stir the mush with a strong magnet", "Tiny black specks of iron cling to the magnet!"]
  },
  sq: {
    name: "Hekur në drithërat e mëngjesit", short: "Ndarja magnetike",
    hook: "Mëngjesi yt përmban metal të vërtetë — dhe mund ta nxjerrësh me një magnet.",
    aim: "Përdor një magnet të fortë për të ndarë grimcat e vogla të hekurit nga drithërat e mëngjesit të pasuruara me hekur dhe zbulo pse shtohet hekuri.",
    chemistry: [
      "Shumë drithëra mëngjesi janë të pasuruara: prodhuesi u shton vitamina dhe minerale. Hekuri shpesh shtohet si pluhur shumë i imët hekuri metalik (elementar) — kokrriza aq të vogla sa nuk i sheh dhe nuk i ndien në shije. Trupi yt ka nevojë për hekur për të prodhuar hemoglobinën, substancën në rruazat e kuqe të gjakut që mbart oksigjenin.",
      "Hekuri tërhiqet nga magneti, ndërsa niseshteja, sheqeri, proteinat dhe uji jo. Kur lëviz një magnet të fortë nëpër përzierjen e lagur, grimcat e hekurit mblidhen bashkë dhe bëhen të dukshme. Kjo është një ndarje fizike që shfrytëzon ndryshimin në një veti — magnetizmin.",
      "Trupi nuk mund ta thithë metalin e ngurtë. Në stomak, acidi klorhidrik reagon me grimcat e vogla të hekurit dhe formon jone hekuri(II) (Fe²⁺), të cilat treten dhe mund të thithen në zorrë. Grimcat janë shumë të imëta, ndaj kanë sipërfaqe të madhe dhe reagojnë shpejt."
    ],
    equation: "Fe(s) + 2HCl(aq) → FeCl₂(aq) + H₂(g)",
    equipment: ["Drithëra mëngjesi (flokë) të pasuruara me hekur (kontrollo etiketën), rreth 50 g", "Qese plastike e fortë me kapëse (rreth 1 litër)", "Okllai", "Rreth 150 mL ujë të vakët", "Magnet i fortë neodimi", "Tabaka për të punuar", "Lupë", "Syze mbrojtëse"],
    steps: [
      "Vendos syzet. Gjej hekurin në tabelën e vlerave ushqyese në kutinë e drithërave dhe shëno sa përmban.",
      "Vendos rreth 50 g flokë në qese, nxirr ajrin dhe mbylle. Shtypi flokët me një okllai derisa të bëhen pluhur i imët.",
      "Shto rreth 150 mL ujë të vakët, mbylle përsëri qesen me pak ajër brenda dhe shtrydhe butë që të bëhet një qull i lëngshëm. Lëre 10 minuta të zbutet.",
      "Shtrije qesen mbi tabaka. Mbaje magnetin të shtypur nga jashtë dhe lëvize ngadalë para-mbrapa mbi qullin për 2–3 minuta, sikur po e përzien.",
      "Mbaje magnetin të palëvizur në një pikë, anoje qesen që qulli të rrjedhë larg tij dhe shiko me kujdes me lupë plastikën pranë magnetit.",
      "Rrëshqite magnetin ngadalë përgjatë qeses dhe shiko nëse pikëzat e ndjekin. Pastaj largoje magnetin plotësisht.",
      "Sipas dëshirës: përsërite me drithëra pa hekur të shtuar dhe krahaso."
    ],
    predict: { q: "Çfarë do të mblidhet mbi plastikë pranë magnetit?", options: ["Pikëza të vogla të zeza hekuri", "Asgjë — hekuri është i padukshëm dhe nuk ndahet dot", "Copëza argjendi të shndritshme", "Fletëza portokalli ndryshku"], answer: 0,
      result: "Pas disa minutash, një tufë e vogël pikëzash të zeza mblidhet mbi plastikë, pikërisht pranë magnetit. Ato e ndjekin magnetin kur lëviz dhe shpërndahen përsëri kur ai largohet — janë grimca hekuri metalik. Pluhuri i hekurit duket i zi, jo i shndritshëm, sepse kokrrizat janë shumë të vogla." },
    why: { q: "Pse një magnet mund ta nxjerrë hekurin nga drithërat?", answer: 0, options: [
      { t: "Hekuri është shtuar si grimca të vogla hekuri metalik, i cili tërhiqet nga magneti", fb: "Vetëm pak materiale tërhiqen nga magnetët, dhe hekuri është njëri prej tyre. Niseshteja, sheqeri dhe uji jo, ndaj magneti e ndan hekurin nga gjithçka tjetër." },
      { t: "Të gjitha mineralet në drithëra tërhiqen nga magneti", fb: "Kalciumi, zinku dhe kripa nuk tërhiqen nga magneti. Hekuri, nikeli dhe kobalti janë metalet e zakonshme magnetike." },
      { t: "Magneti nxjerr hekurin që është i tretur në ujë", fb: "Jonet e tretura të hekurit janë të shpërndara në tretësirë dhe magneti nuk i nxjerr dot. Këtu hekuri është në formë grimcash metalike të ngurta." },
      { t: "Magneti e prodhon hekurin duke reaguar me drithërat", fb: "Magnetët nuk shkaktojnë reaksione kimike. Hekuri ishte aty që më parë — e shtoi prodhuesi." }
    ] },
    hazards: ["Magnetët e fortë të neodimit mund të përplasen me njëri-tjetrin, të kapin lëkurën dhe të thyhen në copëza.", "Magnetët e gëlltitur mund të shkaktojnë dëmtime të rënda të brendshme.", "Magnetët e fortë mund të dëmtojnë telefonat dhe kartat bankare dhe mund të ndikojnë te stimuluesit kardiakë (pacemaker).", "Drithërat mund të përmbajnë alergjenë si gluten ose arra."],
    precautions: ["Përdor një magnet në një kohë, mbaji magnetët larg njëri-tjetrit dhe mos fut kurrë magnet në gojë.", "Mbaji magnetët larg telefonave, kartave dhe kujtdo që ka stimulues kardiak.", "Trajtoji drithërat si material laboratori — mos ha e mos pi kurrë në laborator.", "Kontrollo për alergji ushqimore para orës së mësimit dhe laj duart në fund."],
    disposal: ["Hidhe qesen e mbyllur me qullin e drithërave në kosh — kontrollo që të mos ketë magnet brenda.", "Fshiji magnetët dhe ktheji të gjithë te mësuesi që t'i numërojë."],
    supervisionNote: "Aktivitet me rrezik të ulët, por mësuesi duhet t'i shpërndajë dhe t'i numërojë magnetët e fortë dhe të kontrollojë më parë për alergji ushqimore.",
    clip: ["Drithëra të shtypura me ujë të vakët", "Përziej qullin me një magnet të fortë", "Pikëza të zeza hekuri ngjiten te magneti!"]
  }
},

/* ===== Strawberry DNA ===== */
{
  id: "dna", icon: "search", topic: "separation", grades: "8–10", gmin: 8, gmax: 10,
  level: 2, supervision: "close", time: 40, eqType: "idea", predictAt: 4, ppe: ["goggles", "gloves"],
  demo: { s: "beaker", level: 0.65, layers: ["#f0718a", "#f9c6d0", "#eef2f7"], blobs: "#ffffff" },
  video: null,
  sources: [
    { org: "Royal Society of Chemistry", title: "Extracting DNA experiment (11–14 years)", url: "https://edu.rsc.org/outreach/extracting-dna-experiment-11-14-years/4015960.article" },
    { org: "National Human Genome Research Institute", title: "Strawberry DNA Extraction", url: "https://www.genome.gov/about-genomics/teaching-tools/strawberry-dna-extraction" },
    { org: "Science Buddies", title: "Do-It-Yourself DNA", url: "https://www.sciencebuddies.org/stem-activities/strawberry-dna-extraction" }
  ],
  en: {
    name: "Strawberry DNA", short: "Extracting DNA",
    hook: "Every strawberry is packed with DNA — and you can see it with your own eyes.",
    aim: "Extract DNA from strawberries using washing-up liquid, salt and ice-cold alcohol, and observe it as white strands.",
    chemistry: [
      "DNA is the long molecule that carries the genetic instructions of every living thing. It is found in the nucleus of cells. Strawberries are ideal for extracting it: they are soft and easy to mash, and each cell has eight copies of every chromosome, so there is a lot of DNA.",
      "Mashing breaks open the cell walls. The washing-up liquid (a detergent) breaks up the fatty membranes around each cell and its nucleus, so the DNA is released into the liquid. The salt provides positive sodium ions (Na⁺) that cancel out the negative charges on DNA, helping the long strands clump together. Filtering removes the pulp (residue); the DNA stays in the filtrate.",
      "DNA dissolves in water but not in alcohol. When ice-cold alcohol is layered on top, the DNA comes out of solution (precipitates) at the boundary as white, stringy threads. The cold makes DNA even less soluble and slows down enzymes that would break it up. Each visible thread is a tangle of millions of DNA molecules — a single molecule is far too thin to see."
    ],
    equation: "mash → detergent + salt release DNA → filter → add ice-cold alcohol → DNA precipitates as white strands",
    equipment: ["2–3 strawberries (fresh, or frozen and thawed)", "Strong zip-lock plastic bag", "Extraction mixture: 90 mL water + 10 mL washing-up liquid + 1 teaspoon of salt (about 20 mL per group)", "Filter funnel lined with a coffee filter or filter paper", "Test tube in a rack (or a small clear glass)", "About 10 mL of ice-cold ethanol or isopropyl alcohol per group, kept in a stoppered bottle in an ice bath and dispensed by the teacher", "Wooden skewer or plastic stirrer", "Goggles and nitrile gloves"],
    steps: [
      "Put on goggles and gloves. Check that there are no flames or other ignition sources anywhere in the room.",
      "Remove the green tops, put the strawberries in the zip-lock bag and squeeze out the air. Mash them thoroughly with your fingers for 2 minutes.",
      "Add about 20 mL of extraction mixture, reseal the bag and squish gently for another minute — try not to make lots of foam.",
      "Filter the mixture through the coffee filter into the test tube until the tube is about a quarter full.",
      "Hold the tube at an angle. Your teacher slowly pours an equal volume of ice-cold alcohol down the inside of the tube so it floats on top as a separate layer.",
      "Stand the tube in the rack and watch the boundary between the layers for 2–3 minutes without shaking it.",
      "Gently twist the skewer at the boundary to wind up the white strands, then lift them out to look at them."
    ],
    predict: { q: "What will you see when the cold alcohol is layered on top of the strawberry liquid?", options: ["White, stringy strands forming where the layers meet", "The whole liquid turns bright green", "Red crystals sinking to the bottom", "Nothing — DNA is far too small to see"], answer: 0,
      result: "Within a minute or two, cloudy white threads and tiny bubbles appear at the boundary between the pink strawberry layer and the clear alcohol. The threads float up into the alcohol and can be wound onto a skewer like wet cotton. This is a tangle of millions of DNA molecules, not a single one." },
    why: { q: "Why does the DNA only appear once the alcohol is added?", answer: 0, options: [
      { t: "DNA dissolves in water but not in cold alcohol, so it comes out of solution", fb: "Right — the DNA precipitates where the watery layer meets the alcohol. The salt helps the strands clump together, so they become thick enough to see." },
      { t: "The alcohol reacts with the strawberry juice to make DNA", fb: "No DNA is made in the tube — it was already inside every strawberry cell. The alcohol only makes it come out of solution." },
      { t: "The alcohol freezes the juice into white strands", fb: "Ice-cold alcohol isn't cold enough to freeze the liquid. The white threads are DNA precipitating." },
      { t: "The white strands are just foam from the washing-up liquid", fb: "Some bubbles can appear, but foam can't be wound onto a skewer. The detergent's job was to break open the cell membranes." }
    ] },
    hazards: ["Ethanol and isopropyl alcohol are highly flammable; their vapour can catch fire from a flame or spark.", "The alcohols and washing-up liquid irritate the eyes.", "Some people are allergic to strawberries.", "Glass test tubes can break and cut."],
    precautions: ["No flames anywhere in the room; only the teacher handles and pours the alcohol, and keeps the bottle stoppered.", "Wear goggles and nitrile gloves throughout.", "Check for fruit allergies first; never eat the strawberries or taste anything in the lab.", "Handle glassware carefully and report any breakage to the teacher."],
    disposal: ["Put the strawberry pulp and used filters in the bin.", "The teacher collects the alcohol mixtures; small volumes can be washed down the sink with plenty of water."],
    supervisionNote: "Close supervision: the teacher keeps and dispenses the flammable alcohol, makes sure there are no flames in the room and checks for fruit allergies.",
    clip: ["Filtered strawberry juice in a beaker", "Pour ice-cold alcohol gently on top", "White DNA strands appear at the boundary!"]
  },
  sq: {
    name: "ADN nga luleshtrydhet", short: "Nxjerrja e ADN-së",
    hook: "Çdo luleshtrydhe është plot me ADN — dhe mund ta shohësh me sytë e tu.",
    aim: "Nxirr ADN nga luleshtrydhet me detergjent enësh, kripë dhe alkool shumë të ftohtë, dhe vëzhgoje si fije të bardha.",
    chemistry: [
      "ADN-ja është molekula e gjatë që mbart udhëzimet gjenetike të çdo qenieje të gjallë. Ajo gjendet në bërthamën e qelizave. Luleshtrydhet janë ideale për ta nxjerrë: janë të buta dhe shtypen lehtë, dhe çdo qelizë ka tetë kopje të secilit kromozom, ndaj ka shumë ADN.",
      "Shtypja i çan muret qelizore. Detergjenti i enëve shpërbën membranat yndyrore rreth çdo qelize dhe bërthamës së saj, kështu ADN-ja lirohet në lëng. Kripa jep jone pozitive natriumi (Na⁺) që neutralizojnë ngarkesat negative të ADN-së dhe i ndihmojnë fijet e gjata të grumbullohen. Filtrimi largon tulin e frutave (mbetjen); ADN-ja mbetet në filtrat.",
      "ADN-ja tretet në ujë, por jo në alkool. Kur hidhet një shtresë alkooli shumë të ftohtë sipër, ADN-ja del nga tretësira (precipitohet) në kufirin midis shtresave si fije të bardha. I ftohti e ul edhe më shumë tretshmërinë e ADN-së dhe ngadalëson enzimat që do ta copëtonin. Çdo fije e dukshme është një lëmsh me miliona molekula ADN — një molekulë e vetme është shumë e hollë për t'u parë."
    ],
    equation: "shtyp → detergjenti + kripa lirojnë ADN-në → filtro → shto alkool shumë të ftohtë → ADN-ja precipitohet si fije të bardha",
    equipment: ["2–3 luleshtrydhe (të freskëta, ose të ngrira dhe të shkrira)", "Qese plastike e fortë me kapëse", "Përzierje nxjerrëse: 90 mL ujë + 10 mL detergjent enësh + 1 lugë çaji kripë (rreth 20 mL për grup)", "Hinkë me filtër kafeje ose letër filtri", "Provëz në mbajtëse (ose një gotë e vogël transparente)", "Rreth 10 mL etanol ose alkool izopropilik shumë të ftohtë për grup, i ruajtur në shishe të mbyllur në banjë akulli dhe i shpërndarë nga mësuesi", "Hell druri ose shkop plastik përzierës", "Syze mbrojtëse dhe doreza nitrili"],
    steps: [
      "Vendos syzet dhe dorezat. Sigurohu që nuk ka flakë apo burime të tjera ndezjeje askund në dhomë.",
      "Hiq bishtat e gjelbër, vendosi luleshtrydhet në qese dhe nxirr ajrin. Shtypi mirë me gishta për 2 minuta.",
      "Shto rreth 20 mL përzierje nxjerrëse, mbylle qesen dhe shtrydhe butë edhe një minutë — përpiqu të mos bësh shumë shkumë.",
      "Filtroje përzierjen nëpër filtrin e kafesë në provëz derisa provëza të mbushet rreth një të katërtën.",
      "Mbaje provëzën të pjerrët. Mësuesi derdh ngadalë një vëllim të barabartë alkooli shumë të ftohtë përgjatë murit të brendshëm të provëzës, që të qëndrojë sipër si shtresë më vete.",
      "Vendose provëzën në mbajtëse dhe vëzhgo kufirin midis shtresave për 2–3 minuta pa e tundur.",
      "Rrotullo butë hellin në kufirin midis shtresave për të mbështjellë fijet e bardha, pastaj ngriji për t'i parë."
    ],
    predict: { q: "Çfarë do të shohësh kur alkooli i ftohtë hidhet si shtresë mbi lëngun e luleshtrydheve?", options: ["Fije të bardha si pe që formohen aty ku takohen shtresat", "I gjithë lëngu bëhet jeshil i ndezur", "Kristale të kuqe që bien në fund", "Asgjë — ADN-ja është shumë e vogël për t'u parë"], answer: 0,
      result: "Brenda një ose dy minutash, në kufirin midis shtresës rozë të luleshtrydheve dhe alkoolit të kthjellët shfaqen fije të bardha të turbullta dhe flluska të vogla. Fijet ngjiten lart në alkool dhe mund të mbështillen rreth hellit si pambuk i lagur. Ky është një lëmsh me miliona molekula ADN, jo një molekulë e vetme." },
    why: { q: "Pse ADN-ja shfaqet vetëm pasi shtohet alkooli?", answer: 0, options: [
      { t: "ADN-ja tretet në ujë, por jo në alkool të ftohtë, ndaj del nga tretësira", fb: "Saktë — ADN-ja precipitohet aty ku shtresa ujore takon alkoolin. Kripa i ndihmon fijet të grumbullohen, ndaj bëhen aq të trasha sa të duken." },
      { t: "Alkooli reagon me lëngun e luleshtrydheve dhe prodhon ADN", fb: "Në provëz nuk prodhohet ADN — ajo ishte tashmë në çdo qelizë të luleshtrydhes. Alkooli vetëm e bën të dalë nga tretësira." },
      { t: "Alkooli e ngrin lëngun në fije të bardha", fb: "Alkooli i ftohtë nuk është aq i ftohtë sa ta ngrijë lëngun. Fijet e bardha janë ADN që precipitohet." },
      { t: "Fijet e bardha janë thjesht shkumë nga detergjenti", fb: "Mund të shfaqen disa flluska, por shkuma nuk mbështillet dot rreth hellit. Detyra e detergjentit ishte të çante membranat qelizore." }
    ] },
    hazards: ["Etanoli dhe alkooli izopropilik janë shumë të ndezshëm; avujt e tyre mund të marrin flakë nga një flakë ose shkëndijë.", "Alkoolet dhe detergjenti i enëve irritojnë sytë.", "Disa njerëz janë alergjikë ndaj luleshtrydheve.", "Provëzat prej qelqi mund të thyhen dhe të presin."],
    precautions: ["Asnjë flakë në dhomë; vetëm mësuesi e trajton dhe e derdh alkoolin, dhe e mban shishen të mbyllur.", "Mbaj syze mbrojtëse dhe doreza nitrili gjatë gjithë kohës.", "Kontrollo më parë për alergji ndaj frutave; mos ha kurrë luleshtrydhet dhe mos shijo asgjë në laborator.", "Trajtoji enët prej qelqi me kujdes dhe njofto mësuesin për çdo thyerje."],
    disposal: ["Hidhi tulin e luleshtrydheve dhe filtrat e përdorur në kosh.", "Mësuesi mbledh përzierjet me alkool; sasi të vogla mund të derdhen në lavaman me shumë ujë."],
    supervisionNote: "Mbikëqyrje e afërt: mësuesi e ruan dhe e shpërndan alkoolin e ndezshëm, sigurohet që nuk ka flakë në dhomë dhe kontrollon për alergji ndaj frutave.",
    clip: ["Lëng luleshtrydhesh i filtruar në gotë", "Hidh butë alkool shumë të ftohtë sipër", "Fije të bardha ADN-je shfaqen në kufi!"]
  }
},

/* ===== Hidden leaf colours ===== */
{
  id: "leafpigments", icon: "leaf", topic: "separation", grades: "9–10", gmin: 9, gmax: 10,
  level: 2, supervision: "close", time: 60, eqType: "idea", predictAt: 3, ppe: ["goggles", "gloves"],
  demo: { s: "paper", bands: ["#a3b833", "#1f8a70", "#facc15", "#f59e0b"] },
  video: null,
  sources: [
    { org: "Royal Society of Chemistry", title: "Leaf chromatography", url: "https://edu.rsc.org/experiments/leaf-chromatography/389.article" },
    { org: "Science Buddies", title: "Find the Hidden Colors of Leaves", url: "https://www.sciencebuddies.org/stem-activities/leaf-chromatography" },
    { org: "Science in School (EIROforum)", title: "Colour, chlorophyll and chromatography", url: "https://scienceinschool.org/article/2019/colour-chlorophyll-and-chromatography/" }
  ],
  en: {
    name: "Hidden Leaf Colours", short: "Chromatography & Rf values",
    hook: "Spinach leaves are green — so where are the yellow and orange colours hiding?",
    aim: "Separate the pigments in spinach leaves by paper chromatography and calculate their Rf values.",
    chemistry: [
      "Leaves contain several pigments, not just green chlorophyll. Chlorophyll a and chlorophyll b absorb red and blue light for photosynthesis. Carotenes (orange-yellow) and xanthophylls (yellow) absorb other colours and help protect the leaf. There is so much chlorophyll that it hides the other pigments — until autumn, when it breaks down and the yellows and oranges show.",
      "In paper chromatography the paper is the stationary phase and the alcohol is the mobile phase. As the solvent soaks up the paper, each pigment is constantly shared between dissolving in the moving solvent and sticking to the paper. Pigments that are more soluble in the solvent and less attracted to the paper travel further. Carotene, the least polar, usually runs close to the solvent front; chlorophyll b, the most strongly attracted to the paper, moves the least.",
      "Rf value = distance moved by the pigment ÷ distance moved by the solvent front, both measured from the pencil start line. Rf is always between 0 and 1, and for the same paper and solvent a substance always gives the same Rf, which helps to identify it. For example, if the solvent moved 8.0 cm and a band moved 3.2 cm, Rf = 3.2 ÷ 8.0 = 0.40."
    ],
    equation: "Rf = distance moved by pigment ÷ distance moved by solvent front",
    equipment: ["2–3 fresh spinach leaves", "Pestle and mortar with a pinch of clean sand", "About 20 mL isopropyl alcohol (propan-2-ol, 70% or stronger), dispensed by the teacher", "Chromatography paper strip (about 2 cm × 15 cm) and a pencil", "Capillary tube or fine paintbrush", "Tall jar or boiling tube with a lid or cling film", "Paper clip or wooden splint to hang the strip, and a ruler", "Goggles and gloves"],
    steps: [
      "Put on goggles and gloves. Check that there are no flames or heaters in the room and that it is well ventilated (windows open or fume cupboard on).",
      "Tear the spinach leaves into the mortar, add a pinch of sand and 5 mL of isopropyl alcohol from your teacher. Grind for 3–4 minutes until the liquid is dark green.",
      "Draw a pencil line 2 cm from the bottom of the paper strip. With the capillary tube, put a small spot of extract in the middle of the line, let it dry, and repeat on the same spot 10–15 times to make it small and dark.",
      "Pour isopropyl alcohol into the tall jar to a depth of about 1 cm. Hang the strip so its bottom dips into the solvent but the spot stays above the surface. Cover the jar.",
      "Leave the jar undisturbed for 20–40 minutes, until the solvent is about 1 cm from the top of the strip.",
      "Take the strip out, mark the solvent front with pencil straight away, and let the strip dry in the fume cupboard or near an open window.",
      "Mark the centre of each coloured band, measure how far it moved from the start line, and calculate each Rf value."
    ],
    predict: { q: "As the solvent rises up the paper, what will happen to the green spot?", options: ["It splits into several bands: orange-yellow, yellow and two different greens", "It moves up as one single green band", "It stays exactly where it is", "It turns blue and disappears"], answer: 0,
      result: "As the solvent climbs, the green spot spreads into separate bands. An orange-yellow band of carotene runs close to the solvent front, with a yellow xanthophyll band below it, then a blue-green band (chlorophyll a) and a yellow-green band (chlorophyll b) nearest the start line. The bands fade in bright light, so mark them quickly." },
    why: { q: "Why do the pigments end up at different heights on the paper?", answer: 0, options: [
      { t: "Each pigment has a different balance between dissolving in the solvent and sticking to the paper", fb: "Exactly — pigments that dissolve well and stick weakly (like carotene) travel furthest; those held more strongly by the paper (like chlorophyll b) lag behind." },
      { t: "The heaviest pigments are pulled down by gravity", fb: "Gravity has very little effect on such tiny amounts. Separation depends on solubility in the solvent and attraction to the paper." },
      { t: "The paper changes the colour of the chlorophyll as it rises", fb: "The colours were already in the leaf, hidden by the green chlorophyll. Chromatography only separates them; it doesn't create new colours." },
      { t: "The alcohol reacts with the pigments to make new substances", fb: "Chromatography is a physical separation — no new substances are made. The same pigments simply move at different speeds." }
    ] },
    hazards: ["Isopropyl alcohol is highly flammable; its vapour can catch fire from a flame or spark.", "Breathing in the vapour can cause headaches or drowsiness, and the liquid irritates the eyes.", "Glass capillary tubes can break and cut.", "Plant pigments stain skin and clothes."],
    precautions: ["No flames or heaters with exposed elements in the room; keep jars and bottles covered.", "Work in a well-ventilated room and dry the chromatograms in a fume cupboard or by an open window.", "Wear goggles and gloves; only the teacher dispenses the alcohol.", "Handle capillary tubes gently and put any broken glass in the broken-glass bin."],
    disposal: ["The teacher collects the used alcohol in a labelled, stoppered bottle for safe disposal.", "Leaf residue, sand and used paper go in the bin."],
    supervisionNote: "Close supervision: the teacher dispenses the flammable alcohol, ensures there are no ignition sources and keeps the room well ventilated.",
    clip: ["A dark green spot of spinach extract", "The alcohol creeps up the paper", "Orange, yellow and two greens separate!"]
  },
  sq: {
    name: "Ngjyrat e fshehura të gjetheve", short: "Kromatografia dhe vlerat Rf",
    hook: "Gjethet e spinaqit janë jeshile — atëherë ku fshihen ngjyrat e verdha dhe portokalli?",
    aim: "Ndaj pigmentet e gjetheve të spinaqit me kromatografi në letër dhe llogarit vlerat e tyre Rf.",
    chemistry: [
      "Gjethet përmbajnë disa pigmente, jo vetëm klorofilin jeshil. Klorofili a dhe klorofili b thithin dritën e kuqe dhe blu për fotosintezën. Karotenet (portokalli të verdha) dhe ksantofilet (të verdha) thithin ngjyra të tjera dhe ndihmojnë në mbrojtjen e gjethes. Ka aq shumë klorofil sa i fsheh pigmentet e tjera — deri në vjeshtë, kur ai shpërbëhet dhe dalin në pah ngjyrat e verdha dhe portokalli.",
      "Në kromatografinë në letër, letra është faza e palëvizshme dhe alkooli është faza lëvizëse. Ndërsa tretësi ngjitet në letër, çdo pigment ndahet vazhdimisht midis tretjes në tretësin që lëviz dhe ngjitjes pas letrës. Pigmentet që treten më mirë në tretës dhe tërhiqen më pak nga letra udhëtojnë më larg. Karoteni, më pak polari, zakonisht arrin afër frontit të tretësit; klorofili b, që tërhiqet më fort nga letra, lëviz më pak.",
      "Vlera Rf = distanca e përshkuar nga pigmenti ÷ distanca e përshkuar nga fronti i tretësit, të dyja të matura nga vija e fillimit me laps. Rf është gjithmonë midis 0 dhe 1, dhe për të njëjtën letër e të njëjtin tretës një substancë jep gjithmonë të njëjtën Rf, gjë që ndihmon në identifikimin e saj. Për shembull, nëse tretësi lëvizi 8,0 cm dhe një brez lëvizi 3,2 cm, Rf = 3,2 ÷ 8,0 = 0,40."
    ],
    equation: "Rf = distanca e përshkuar nga pigmenti ÷ distanca e përshkuar nga fronti i tretësit",
    equipment: ["2–3 gjethe të freskëta spinaqi", "Havan dhe shtypëse, me një majë rërë të pastër", "Rreth 20 mL alkool izopropilik (propan-2-ol, 70% ose më i fortë), i shpërndarë nga mësuesi", "Shirit letre kromatografie (rreth 2 cm × 15 cm) dhe laps", "Tub kapilar ose penel i hollë", "Kavanoz i gjatë ose provëz e madhe me kapak ose film ushqimor", "Kapëse letre ose shkop druri për të varur shiritin, dhe vizore", "Syze mbrojtëse dhe doreza"],
    steps: [
      "Vendos syzet dhe dorezat. Sigurohu që nuk ka flakë apo ngrohëse në dhomë dhe që ajo ajroset mirë (dritaret të hapura ose kapota thithëse e ndezur).",
      "Copëtoje spinaqin me duar në havan, shto një majë rërë dhe 5 mL alkool izopropilik nga mësuesi. Shtype për 3–4 minuta derisa lëngu të bëhet jeshil i errët.",
      "Vizato një vijë me laps 2 cm nga fundi i shiritit të letrës. Me tubin kapilar, vendos një pikë të vogël ekstrakti në mes të vijës, lëre të thahet dhe përsërite në të njëjtën pikë 10–15 herë që të jetë e vogël dhe e errët.",
      "Hidh alkool izopropilik në kavanozin e gjatë deri në rreth 1 cm thellësi. Vare shiritin që fundi i tij të zhytet në tretës, por pika të qëndrojë mbi sipërfaqe. Mbuloje kavanozin.",
      "Lëre kavanozin të qetë për 20–40 minuta, derisa tretësi të arrijë rreth 1 cm nga maja e shiritit.",
      "Nxirre shiritin, shëno menjëherë me laps frontin e tretësit dhe lëre të thahet në kapotën thithëse ose pranë një dritareje të hapur.",
      "Shëno qendrën e çdo brezi me ngjyrë, mat sa larg ka lëvizur nga vija e fillimit dhe llogarit vlerën Rf të secilit."
    ],
    predict: { q: "Ndërsa tretësi ngjitet në letër, çfarë do të ndodhë me pikën jeshile?", options: ["Ndahet në disa breza: portokalli të verdhë, të verdhë dhe dy jeshilë të ndryshëm", "Ngjitet lart si një brez i vetëm jeshil", "Mbetet pikërisht aty ku është", "Bëhet blu dhe zhduket"], answer: 0,
      result: "Ndërsa tretësi ngjitet, pika jeshile shpërndahet në breza të veçantë. Një brez portokalli i verdhë karoteni arrin afër frontit të tretësit, poshtë tij një brez i verdhë ksantofili, pastaj një brez jeshil-blu (klorofili a) dhe një brez jeshil-verdhë (klorofili b) më afër vijës së fillimit. Brezat zbehen në dritë të fortë, ndaj shënoji shpejt." },
    why: { q: "Pse pigmentet përfundojnë në lartësi të ndryshme në letër?", answer: 0, options: [
      { t: "Çdo pigment ka një ekuilibër të ndryshëm midis tretjes në tretës dhe ngjitjes pas letrës", fb: "Pikërisht — pigmentet që treten mirë dhe ngjiten dobët (si karoteni) udhëtojnë më larg; ato që mbahen më fort nga letra (si klorofili b) mbeten pas." },
      { t: "Pigmentet më të rënda tërhiqen poshtë nga graviteti", fb: "Graviteti ka shumë pak ndikim në sasi kaq të vogla. Ndarja varet nga tretshmëria në tretës dhe nga tërheqja ndaj letrës." },
      { t: "Letra e ndryshon ngjyrën e klorofilit ndërsa ai ngjitet", fb: "Ngjyrat ishin tashmë në gjethe, të fshehura nga klorofili jeshil. Kromatografia vetëm i ndan; nuk krijon ngjyra të reja." },
      { t: "Alkooli reagon me pigmentet dhe krijon substanca të reja", fb: "Kromatografia është ndarje fizike — nuk krijohen substanca të reja. Të njëjtat pigmente thjesht lëvizin me shpejtësi të ndryshme." }
    ] },
    hazards: ["Alkooli izopropilik është shumë i ndezshëm; avujt e tij mund të marrin flakë nga një flakë ose shkëndijë.", "Thithja e avujve mund të shkaktojë dhimbje koke ose përgjumje, dhe lëngu irriton sytë.", "Tubat kapilarë prej qelqi mund të thyhen dhe të presin.", "Pigmentet e bimëve njollosin lëkurën dhe rrobat."],
    precautions: ["Asnjë flakë apo ngrohëse me rezistencë të zhveshur në dhomë; mbaji kavanozët dhe shishet të mbuluara.", "Puno në një dhomë të ajrosur mirë dhe thaji kromatogramet në kapotën thithëse ose pranë një dritareje të hapur.", "Mbaj syze mbrojtëse dhe doreza; vetëm mësuesi e shpërndan alkoolin.", "Trajtoji tubat kapilarë me kujdes dhe hidh çdo qelq të thyer në koshin e posaçëm për qelqe."],
    disposal: ["Mësuesi e mbledh alkoolin e përdorur në një shishe të etiketuar dhe të mbyllur për asgjësim të sigurt.", "Mbetjet e gjetheve, rëra dhe letra e përdorur hidhen në kosh."],
    supervisionNote: "Mbikëqyrje e afërt: mësuesi e shpërndan alkoolin e ndezshëm, sigurohet që nuk ka burime ndezjeje dhe e mban dhomën të ajrosur mirë.",
    clip: ["Një pikë jeshile e errët ekstrakti spinaqi", "Alkooli ngjitet ngadalë në letër", "Ndahen portokallia, e verdha dhe dy jeshilë!"]
  }
},

/* ===== Yeast balloon ===== */
{
  id: "yeast", icon: "balloon", topic: "organic", grades: "8–10", gmin: 8, gmax: 10,
  level: 1, supervision: "supervised", time: 45, eqType: "equation", predictAt: 4, ppe: ["goggles"],
  demo: { s: "balloon", from: "#f3e3c3" },
  video: null,
  sources: [
    { org: "Exploratorium", title: "Science of Bread: Yeast-air Balloons", url: "https://www.exploratorium.edu/explore/cooking/activity/yeast-air-balloons" },
    { org: "Science Buddies", title: "Yeasty Beasties", url: "https://www.sciencebuddies.org/science-fair-projects/project-ideas/MicroBio_p011/microbiology/yeast-activity-balloons" },
    { org: "Science World (Vancouver)", title: "Yeast-Inflated Balloons", url: "https://www.scienceworld.ca/resource/yeast-inflated-balloons/" }
  ],
  en: {
    name: "Yeast Balloon", short: "Fermentation makes CO₂",
    hook: "Tiny living cells can blow up a balloon — if you feed them sugar.",
    aim: "Show that yeast ferments sugar to produce carbon dioxide, and find out how sugar and temperature affect how fast it happens.",
    chemistry: [
      "Yeast is a living, single-celled fungus. When it has sugar but little oxygen, it releases energy by fermentation (anaerobic respiration): glucose is broken down into ethanol and carbon dioxide. Ordinary table sugar (sucrose) is first split by yeast enzymes into glucose and fructose, which are then fermented.",
      "The carbon dioxide gas collects above the liquid, the pressure in the bottle rises and the balloon inflates. The small amount of ethanol stays dissolved in the water, which is why the mixture smells a little like bread dough. The same reaction makes bread rise and is used to brew beer and wine.",
      "Fermentation is controlled by enzymes, so temperature matters. In warm water (about 35–40 °C) the enzymes work quickly; in cold water the yeast is slow; above about 50 °C the enzymes are damaged and the yeast dies. Without sugar, the yeast has almost nothing to ferment, so the no-sugar bottle is the control."
    ],
    equation: "C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂",
    equipment: ["3 small plastic bottles (about 500 mL), labelled A, B and C", "3 sachets of dried yeast (7 g each)", "4 teaspoons of sugar", "200 mL warm water (35–40 °C) and 100 mL cold water (about 10 °C)", "3 balloons (latex-free if anyone is allergic)", "Funnel, measuring cylinder and thermometer", "String and a ruler", "Safety goggles"],
    steps: [
      "Put on goggles. Label the bottles A, B and C, and stretch each balloon a few times with your hands so it inflates easily.",
      "Use the funnel to add one sachet of yeast to each bottle. Add 2 teaspoons of sugar to bottles A and C only.",
      "Check the temperatures with the thermometer. Add 100 mL of warm water (35–40 °C) to bottles A and B, and 100 mL of cold water to bottle C.",
      "Swirl each bottle gently to mix, then quickly stretch a balloon over each neck.",
      "Stand the bottles side by side on a tray; keep bottle C in a bowl of cold water.",
      "Every 10 minutes for 30 minutes, measure around the widest part of each balloon with string and a ruler, and record your results in a table.",
      "At the end, remove one balloon and waft the air from the bottle towards your nose — notice the bread-dough smell."
    ],
    predict: { q: "Which balloon will inflate the most after 30 minutes?", options: ["A — yeast, sugar and warm water", "B — yeast and warm water, no sugar", "C — yeast, sugar and cold water", "All three will inflate the same"], answer: 0,
      result: "Bottle A froths, and its balloon starts to stand up within about 10 minutes and keeps growing. Bottle C makes only a little gas, slowly, and balloon B hardly changes. Yeast needs food (sugar) and warmth to ferment quickly." },
    why: { q: "Where does the gas in balloon A come from?", answer: 0, options: [
      { t: "Yeast ferments the sugar and produces carbon dioxide", fb: "Yeast enzymes break glucose down into ethanol and carbon dioxide. The gas has nowhere to go except into the balloon. Bubbled through limewater, it would turn it milky." },
      { t: "The warm water turns into steam", fb: "40 °C is far below the boiling point of water — and bottle B had warm water too but barely inflated. The gas comes from the yeast." },
      { t: "Sugar makes gas when it dissolves", fb: "Dissolving sugar doesn't release gas. Bottle C had sugar too, but made little gas because the cold slowed the yeast down." },
      { t: "Yeast gives off oxygen, like plants do", fb: "Yeast is a fungus, not a plant, and it doesn't photosynthesise. The gas it makes in fermentation is carbon dioxide." }
    ] },
    hazards: ["Some people are allergic to latex balloons or to yeast.", "Water that is too hot can scald.", "A balloon can pop off and spray yeasty liquid."],
    precautions: ["Use warm water no hotter than 40 °C, prepared by the teacher.", "Use plastic bottles, and latex-free balloons if anyone has a latex allergy.", "Wear goggles and point bottle necks away from faces.", "Never taste the mixture — no eating or drinking in the lab — and wash your hands at the end."],
    disposal: ["Pour the yeast mixtures down the sink with plenty of water.", "Rinse the bottles and put the balloons in the bin."],
    supervisionNote: "Low-hazard activity; the teacher prepares the warm water and checks for latex or yeast allergies before starting.",
    clip: ["Yeast, sugar and warm water in a flask", "Stretch a balloon over the neck", "Carbon dioxide slowly inflates the balloon!"]
  },
  sq: {
    name: "Tullumbacja me maja", short: "Fermentimi prodhon CO₂",
    hook: "Qeliza të vogla të gjalla mund të fryjnë një tullumbace — nëse u jep sheqer.",
    aim: "Trego se majaja fermenton sheqerin dhe prodhon dioksid karboni, dhe zbulo si ndikojnë sheqeri dhe temperatura në shpejtësinë e procesit.",
    chemistry: [
      "Majaja është një kërpudhë e gjallë njëqelizore. Kur ka sheqer, por pak oksigjen, ajo çliron energji me anë të fermentimit (frymëmarrjes anaerobe): glukoza zbërthehet në etanol dhe dioksid karboni. Sheqeri i zakonshëm (saharoza) fillimisht ndahet nga enzimat e majasë në glukozë dhe fruktozë, të cilat më pas fermentohen.",
      "Gazi i dioksidit të karbonit mblidhet mbi lëng, presioni në shishe rritet dhe tullumbacja fryhet. Sasia e vogël e etanolit mbetet e tretur në ujë, prandaj përzierja ka pak erë brumi buke. I njëjti reaksion e bën bukën të fryhet dhe përdoret për prodhimin e birrës dhe verës.",
      "Fermentimi kontrollohet nga enzimat, ndaj temperatura ka rëndësi. Në ujë të ngrohtë (rreth 35–40 °C) enzimat punojnë shpejt; në ujë të ftohtë majaja është e ngadaltë; mbi rreth 50 °C enzimat dëmtohen dhe majaja vdes. Pa sheqer, majaja nuk ka pothuajse asgjë për të fermentuar, ndaj shishja pa sheqer është kontrolli."
    ],
    equation: "C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂",
    equipment: ["3 shishe të vogla plastike (rreth 500 mL), të etiketuara A, B dhe C", "3 qese maja të thatë (nga 7 g secila)", "4 lugë çaji sheqer", "200 mL ujë të ngrohtë (35–40 °C) dhe 100 mL ujë të ftohtë (rreth 10 °C)", "3 tullumbace (pa lateks nëse dikush është alergjik)", "Hinkë, cilindër matës dhe termometër", "Spango dhe vizore", "Syze mbrojtëse"],
    steps: [
      "Vendos syzet. Etiketo shishet A, B dhe C, dhe tërhiq me duar secilën tullumbace disa herë që të fryhet më lehtë.",
      "Me hinkën, shto një qese maja në secilën shishe. Shto 2 lugë çaji sheqer vetëm në shishet A dhe C.",
      "Kontrollo temperaturat me termometër. Shto 100 mL ujë të ngrohtë (35–40 °C) në shishet A dhe B, dhe 100 mL ujë të ftohtë në shishen C.",
      "Tunde butë secilën shishe për ta përzier, pastaj vendos shpejt një tullumbace mbi grykën e secilës.",
      "Vendosi shishet krah njëra-tjetrës mbi një tabaka; mbaje shishen C në një tas me ujë të ftohtë.",
      "Çdo 10 minuta, për 30 minuta, mat perimetrin e pjesës më të gjerë të çdo tullumbaceje me spango dhe vizore, dhe shëno rezultatet në një tabelë.",
      "Në fund, hiq njërën tullumbace dhe drejto me dorë ajrin nga shishja drejt hundës — vëre erën e brumit të bukës."
    ],
    predict: { q: "Cila tullumbace do të fryhet më shumë pas 30 minutash?", options: ["A — maja, sheqer dhe ujë i ngrohtë", "B — maja dhe ujë i ngrohtë, pa sheqer", "C — maja, sheqer dhe ujë i ftohtë", "Të treja do të fryhen njësoj"], answer: 0,
      result: "Shishja A shkumëzon dhe tullumbacja e saj fillon të ngrihet brenda rreth 10 minutave dhe vazhdon të rritet. Shishja C prodhon vetëm pak gaz, ngadalë, ndërsa tullumbacja B pothuajse nuk ndryshon. Majaja ka nevojë për ushqim (sheqer) dhe ngrohtësi që të fermentojë shpejt." },
    why: { q: "Nga vjen gazi në tullumbacen A?", answer: 0, options: [
      { t: "Majaja fermenton sheqerin dhe prodhon dioksid karboni", fb: "Enzimat e majasë e zbërthejnë glukozën në etanol dhe dioksid karboni. Gazi nuk ka ku të shkojë tjetër përveçse në tullumbace. Nëse kalon nëpër ujë gëlqereje, e turbullon atë." },
      { t: "Uji i ngrohtë kthehet në avull", fb: "40 °C është shumë poshtë pikës së vlimit të ujit — dhe shishja B kishte gjithashtu ujë të ngrohtë, por mezi u fry. Gazi vjen nga majaja." },
      { t: "Sheqeri prodhon gaz kur tretet", fb: "Tretja e sheqerit nuk çliron gaz. Edhe shishja C kishte sheqer, por prodhoi pak gaz sepse i ftohti e ngadalësoi majanë." },
      { t: "Majaja lëshon oksigjen, si bimët", fb: "Majaja është kërpudhë, jo bimë, dhe nuk bën fotosintezë. Gazi që prodhon gjatë fermentimit është dioksidi i karbonit." }
    ] },
    hazards: ["Disa njerëz janë alergjikë ndaj tullumbaceve prej lateksi ose ndaj majasë.", "Uji shumë i nxehtë mund të shkaktojë përvëlime.", "Një tullumbace mund të shkëputet dhe të spërkasë lëng me maja."],
    precautions: ["Përdor ujë të ngrohtë jo më shumë se 40 °C, të përgatitur nga mësuesi.", "Përdor shishe plastike dhe tullumbace pa lateks nëse dikush ka alergji ndaj lateksit.", "Mbaj syze mbrojtëse dhe mbaji grykat e shisheve larg fytyrave.", "Mos e shijo kurrë përzierjen — në laborator nuk hahet e nuk pihet — dhe laj duart në fund."],
    disposal: ["Derdhi përzierjet me maja në lavaman me shumë ujë.", "Shpëlaji shishet dhe hidhi tullumbacet në kosh."],
    supervisionNote: "Aktivitet me rrezik të ulët; mësuesi përgatit ujin e ngrohtë dhe kontrollon për alergji ndaj lateksit ose majasë para fillimit.",
    clip: ["Maja, sheqer dhe ujë i ngrohtë në shishe", "Vendos një tullumbace mbi grykë", "Dioksidi i karbonit e fryn ngadalë tullumbacen!"]
  }
},

/* ===== Making soap ===== */
{
  id: "soap", icon: "foam", topic: "organic", grades: "10–12", gmin: 10, gmax: 12,
  level: 3, supervision: "demo", time: 45, eqType: "equation", predictAt: 4, ppe: ["goggles", "gloves", "coat"],
  demo: { s: "beaker", from: "#fde68a", to: "#fef9c3", level: 0.5, temp: "up", cloudy: "#fffdf5" },
  video: null,
  sources: [
    { org: "Royal Society of Chemistry", title: "Making soaps and detergents using castor oil", url: "https://edu.rsc.org/experiments/making-soaps-and-detergents-using-castor-oil/1746.article" },
    { org: "Science Buddies", title: "The Chemistry of Clean: Make Your Own Soap to Study Soap Synthesis", url: "https://www.sciencebuddies.org/science-fair-projects/project-ideas/Chem_p096/chemistry/how-to-make-soap" },
    { org: "The Open University (OpenLearn)", title: "DIY: Make your own soap", url: "https://www.open.edu/openlearn/science-maths-technology/science/chemistry/diy-make-your-own-soap" }
  ],
  en: {
    name: "Making Soap", short: "Saponification",
    hook: "Soap is made from oil — the same kind you cook with — plus a powerful alkali.",
    aim: "Watch a vegetable oil react with sodium hydroxide to make soap and glycerol (teacher demonstration), and see how salt makes the soap separate out.",
    chemistry: [
      "Fats and oils are triglycerides: esters made from glycerol (propane-1,2,3-triol) and three long-chain fatty acids. Heating them with sodium hydroxide breaks the ester bonds — an alkaline hydrolysis called saponification. In words: fat or oil + sodium hydroxide → soap (sodium salts of fatty acids) + glycerol.",
      "A soap particle has a long hydrocarbon tail that is hydrophobic and mixes with grease, and an ionic head (–COO⁻ Na⁺) that is hydrophilic and mixes with water. In washing, soap particles surround tiny droplets of grease (forming micelles) so they can be rinsed away.",
      "Soap dissolves quite well in water, so a concentrated salt solution is added. The large number of Na⁺ ions makes the soap much less soluble, and it separates as white curds that float — this is called salting out. Glycerol, salt and any unreacted sodium hydroxide stay in the water below. Even after rinsing, soap made like this can still contain sodium hydroxide, so it must not be used on skin."
    ],
    equation: "(C₁₇H₃₃COO)₃C₃H₅ + 3NaOH → 3C₁₇H₃₃COONa + C₃H₅(OH)₃",
    equipment: ["2 cm³ vegetable oil (e.g. olive or sunflower oil)", "10 cm³ sodium hydroxide solution, 2 mol/dm³ (CORROSIVE)", "10 cm³ saturated sodium chloride solution", "Boiling tube, test-tube holder and glass stirring rod", "250 cm³ beaker of water on a hot plate (boiling water bath)", "Filter funnel, filter paper and a little ice-cold distilled water", "Universal indicator paper", "Goggles for everyone; face shield, lab coat and nitrile gloves for the teacher; safety screen"],
    steps: [
      "Everyone puts on goggles. Students stand at least 2 metres away, behind a safety screen; the teacher also wears a face shield, lab coat and gloves.",
      "The teacher heats a 250 cm³ beaker of water on a hot plate until it boils gently — a water bath, with no naked flame.",
      "In a boiling tube, the teacher mixes 2 cm³ of vegetable oil with 10 cm³ of 2 mol/dm³ sodium hydroxide solution. Two layers are visible.",
      "The tube is stood in the water bath for about 20 minutes and stirred often with the glass rod. The teacher adds a little water if the volume drops, so the mixture never boils dry.",
      "The teacher lifts the tube out with a holder, lets it cool for a minute, adds 10 cm³ of saturated salt solution and stirs.",
      "As it cools, white soap curds collect at the top. The teacher filters them off and rinses them with a little ice-cold water.",
      "The teacher shakes a tiny piece of soap with distilled water in a test tube to show the lather, and touches the wet soap with universal indicator paper."
    ],
    predict: { q: "What will happen when the concentrated salt solution is stirred into the hot mixture?", options: ["White, soapy curds separate out and float to the top", "The mixture turns back into oil", "It fizzes and gives off a green gas", "Nothing — the salt just dissolves"], answer: 0,
      result: "The cloudy mixture separates: a white, waxy layer of soap curds collects at the surface, while a watery layer containing glycerol, salt and leftover sodium hydroxide stays below. A small piece of the soap lathers when shaken with water, and universal indicator turns dark blue or purple — the soap is strongly alkaline." },
    why: { q: "Why does adding concentrated salt solution make the soap separate out?", answer: 0, options: [
      { t: "Soap is much less soluble in very salty water, so it comes out of solution", fb: "This is salting out. The huge number of Na⁺ ions pushes the sodium salts of the fatty acids out of solution, while glycerol stays dissolved in the water." },
      { t: "The salt reacts with the oil to make the soap", fb: "The soap was already made by the sodium hydroxide during heating. The salt only makes it separate from the water." },
      { t: "The salt neutralises the sodium hydroxide", fb: "Sodium chloride is a neutral salt and does not neutralise alkali — that is why the soap still contains sodium hydroxide and must not touch skin." },
      { t: "The salt cools the mixture so the soap freezes", fb: "Salt solution doesn't freeze the soap. The curds form because soap is far less soluble in salty water." }
    ] },
    hazards: ["Sodium hydroxide solution (2 mol/dm³) is corrosive: it causes serious eye damage and skin burns.", "The hot alkaline mixture can spit when heated or stirred.", "The boiling water bath and hot plate can scald and burn.", "The soap made still contains sodium hydroxide and can harm skin and eyes."],
    precautions: ["Teacher demonstration only; students watch from at least 2 metres away, behind a safety screen.", "The teacher wears a face shield or goggles, a lab coat and nitrile gloves; everyone else wears goggles.", "Heat only in a water bath on a hot plate, keep the tube pointing away from people and never let it boil dry.", "Nobody touches the soap or uses it on skin; it stays in a labelled container.", "If alkali splashes on skin, rinse with plenty of cold water for at least 10 minutes; for eyes, rinse immediately and get medical help."],
    disposal: ["The teacher dilutes the leftover liquid with plenty of water (or neutralises it with dilute acid) and pours it down the sink.", "The soap is wrapped in paper and put in the bin — it is never taken home or used."],
    supervisionNote: "Teacher demonstration only, because hot sodium hydroxide solution is corrosive; students watch from a safe distance wearing goggles.",
    clip: ["Oil and sodium hydroxide in a hot water bath", "Heat, stir, then add salt solution", "White soap curds separate out!"]
  },
  sq: {
    name: "Prodhimi i sapunit", short: "Saponifikimi",
    hook: "Sapuni bëhet nga vaji — i njëjti lloj që përdorim në gatim — dhe një alkali i fortë.",
    aim: "Vëzhgo si një vaj vegjetal reagon me hidroksid natriumi për të formuar sapun dhe glicerinë (demonstrim nga mësuesi), dhe shiko si kripa e bën sapunin të ndahet.",
    chemistry: [
      "Yndyrnat dhe vajrat janë trigliceride: estere të përbëra nga glicerina (propan-1,2,3-triol) dhe tre acide yndyrore me zinxhir të gjatë. Kur ngrohen me hidroksid natriumi, lidhjet esterike këputen — një hidrolizë alkaline që quhet saponifikim. Me fjalë: yndyrë ose vaj + hidroksid natriumi → sapun (kripëra natriumi të acideve yndyrore) + glicerinë.",
      "Një grimcë sapuni ka një bisht të gjatë hidrokarburik që është hidrofob dhe përzihet me yndyrën, dhe një kokë jonike (–COO⁻ Na⁺) që është hidrofile dhe përzihet me ujin. Gjatë larjes, grimcat e sapunit rrethojnë pika të vogla yndyre (duke formuar micela), që të mund të shpëlahen.",
      "Sapuni tretet mjaft mirë në ujë, prandaj shtohet një tretësirë e përqendruar kripe. Numri i madh i joneve Na⁺ e bën sapunin shumë më pak të tretshëm dhe ai ndahet si gunga të bardha që notojnë — ky proces quhet ndarje me kripë (‘salting out’). Glicerina, kripa dhe hidroksidi i natriumit i pareaguar mbeten në ujin poshtë. Edhe pas shpëlarjes, sapuni i bërë në këtë mënyrë mund të përmbajë ende hidroksid natriumi, ndaj nuk duhet përdorur në lëkurë."
    ],
    equation: "(C₁₇H₃₃COO)₃C₃H₅ + 3NaOH → 3C₁₇H₃₃COONa + C₃H₅(OH)₃",
    equipment: ["2 cm³ vaj vegjetal (p.sh. vaj ulliri ose luledielli)", "10 cm³ tretësirë hidroksidi natriumi, 2 mol/dm³ (GËRRYESE)", "10 cm³ tretësirë e ngopur kloruri natriumi", "Provëz e madhe, mbajtëse provëzash dhe shkop qelqi për përzierje", "Gotë kimike 250 cm³ me ujë mbi pllakë ngrohëse (banjë uji që vlon)", "Hinkë, letër filtri dhe pak ujë i distiluar shumë i ftohtë", "Letër indikatori universal", "Syze për të gjithë; mburojë fytyre, përparëse laboratori dhe doreza nitrili për mësuesin; mburojë sigurie"],
    steps: [
      "Të gjithë vendosin syzet. Nxënësit qëndrojnë të paktën 2 metra larg, pas mburojës së sigurisë; mësuesi mban gjithashtu mburojë fytyre, përparëse laboratori dhe doreza.",
      "Mësuesi ngroh një gotë kimike 250 cm³ me ujë mbi pllakë ngrohëse derisa të vlojë lehtë — një banjë uji, pa flakë të hapur.",
      "Në një provëz të madhe, mësuesi përzien 2 cm³ vaj vegjetal me 10 cm³ tretësirë hidroksidi natriumi 2 mol/dm³. Duken dy shtresa.",
      "Provëza vendoset në banjën e ujit për rreth 20 minuta dhe përzihet shpesh me shkopin e qelqit. Mësuesi shton pak ujë nëse vëllimi ulet, që përzierja të mos thahet kurrë.",
      "Mësuesi e nxjerr provëzën me mbajtëse, e lë të ftohet një minutë, shton 10 cm³ tretësirë të ngopur kripe dhe e përzien.",
      "Ndërsa ftohet, gunga të bardha sapuni mblidhen sipër. Mësuesi i filtron dhe i shpëlan me pak ujë shumë të ftohtë.",
      "Mësuesi tund një copëz të vogël sapuni me ujë të distiluar në një provëz për të treguar shkumën, dhe prek sapunin e lagur me letër indikatori universal."
    ],
    predict: { q: "Çfarë do të ndodhë kur tretësira e përqendruar e kripës përzihet në përzierjen e nxehtë?", options: ["Gunga të bardha sapuni ndahen dhe notojnë sipër", "Përzierja kthehet përsëri në vaj", "Shkumëzon dhe lëshon një gaz të gjelbër", "Asgjë — kripa thjesht tretet"], answer: 0,
      result: "Përzierja e turbullt ndahet: një shtresë e bardhë, si dyll, me gunga sapuni mblidhet në sipërfaqe, ndërsa poshtë mbetet një shtresë ujore me glicerinë, kripë dhe hidroksid natriumi të mbetur. Një copëz e vogël sapuni bën shkumë kur tundet me ujë, dhe indikatori universal bëhet blu e errët ose vjollcë — sapuni është fort alkalin." },
    why: { q: "Pse shtimi i tretësirës së përqendruar të kripës e bën sapunin të ndahet?", answer: 0, options: [
      { t: "Sapuni është shumë më pak i tretshëm në ujë shumë të kripur, ndaj del nga tretësira", fb: "Kjo është ndarja me kripë. Numri i madh i joneve Na⁺ i shtyn kripërat e natriumit të acideve yndyrore jashtë tretësirës, ndërsa glicerina mbetet e tretur në ujë." },
      { t: "Kripa reagon me vajin dhe formon sapunin", fb: "Sapuni ishte formuar tashmë nga hidroksidi i natriumit gjatë ngrohjes. Kripa vetëm e ndan atë nga uji." },
      { t: "Kripa neutralizon hidroksidin e natriumit", fb: "Kloruri i natriumit është kripë neutrale dhe nuk neutralizon alkalin — prandaj sapuni përmban ende hidroksid natriumi dhe nuk duhet të prekë lëkurën." },
      { t: "Kripa e ftoh përzierjen dhe sapuni ngrin", fb: "Tretësira e kripës nuk e ngrin sapunin. Gungat formohen sepse sapuni është shumë më pak i tretshëm në ujë të kripur." }
    ] },
    hazards: ["Tretësira e hidroksidit të natriumit (2 mol/dm³) është gërryese: shkakton dëmtime të rënda të syve dhe djegie të lëkurës.", "Përzierja e nxehtë alkaline mund të spërkasë kur ngrohet ose përzihet.", "Banja e ujit që vlon dhe pllaka ngrohëse mund të shkaktojnë përvëlime dhe djegie.", "Sapuni i përgatitur përmban ende hidroksid natriumi dhe mund të dëmtojë lëkurën dhe sytë."],
    precautions: ["Vetëm demonstrim nga mësuesi; nxënësit vëzhgojnë nga të paktën 2 metra larg, pas mburojës së sigurisë.", "Mësuesi mban mburojë fytyre ose syze, përparëse laboratori dhe doreza nitrili; të gjithë të tjerët mbajnë syze.", "Ngroh vetëm në banjë uji mbi pllakë ngrohëse, mbaje provëzën të drejtuar larg njerëzve dhe mos e lër kurrë të thahet.", "Askush nuk e prek sapunin dhe nuk e përdor në lëkurë; ai mbahet në një enë të etiketuar.", "Nëse alkali spërkat lëkurën, shpëlaje me shumë ujë të ftohtë për të paktën 10 minuta; nëse spërkat sytë, shpëlaji menjëherë dhe kërko ndihmë mjekësore."],
    disposal: ["Mësuesi e hollon lëngun e mbetur me shumë ujë (ose e neutralizon me acid të holluar) dhe e derdh në lavaman.", "Sapuni mbështillet me letër dhe hidhet në kosh — nuk merret kurrë në shtëpi dhe nuk përdoret."],
    supervisionNote: "Vetëm demonstrim nga mësuesi, sepse tretësira e nxehtë e hidroksidit të natriumit është gërryese; nxënësit vëzhgojnë nga një distancë e sigurt me syze mbrojtëse.",
    clip: ["Vaj dhe hidroksid natriumi në banjë uji", "Ngroh, përziej, pastaj shto tretësirë kripe", "Gunga të bardha sapuni ndahen!"]
  }
}
];


/* ---------- New experiments: energy changes (part 4) + bromine water test ---------- */
const EXP_NEW_4 = [
/* ===== Ice cream in a bag ===== */
{
  id: "icecream", icon: "milk", topic: "energy", grades: "7–8", gmin: 7, gmax: 8, level: 1,
  supervision: "supervised", time: 30, eqType: "idea", predictAt: 2, ppe: ["gloves"],
  demo: { s: "beaker", from: "#fef3c7", to: "#fffbeb", level: 0.6, cloudy: "#ffffff", temp: "down" },
  video: null,
  sources: [
    { org: "Science Buddies", title: "Make Ice Cream in a Bag", url: "https://www.sciencebuddies.org/stem-activities/ice-cream-bag" },
    { org: "Science Museum Group", title: "Instant Ice Cream", url: "https://www.sciencemuseumgroup.org.uk/learning/resources/instant-ice-cream" },
    { org: "Royal Society of Chemistry", title: "Investigate practical applications of endothermic reactions (11–14 years)", url: "https://edu.rsc.org/outreach/investigating-cold-reactions-11-14-years/4015955.article" }
  ],
  en: {
    name: "Ice Cream in a Bag", short: "Salt lowers the freezing point",
    hook: "Make real ice cream in ten minutes — no freezer, just ice, salt and a lot of shaking.",
    aim: "Find out why adding salt to ice makes it cold enough to freeze cream, and compare it with plain ice.",
    chemistry: [
      "Pure water freezes, and ice melts, at 0 °C. When salt dissolves in the thin layer of water on the surface of ice, it gets in the way of water molecules joining back onto the ice. The ice keeps melting but cannot easily refreeze, so the freezing point of the salty water drops well below 0 °C.",
      "Melting needs energy. The melting ice takes this energy as heat from everything around it, so the ice–salt mixture cools to about −10 °C to −15 °C, while plain ice stays near 0 °C. Heat flows from the warmer cream mixture into this very cold mixture, and the cream freezes into tiny ice crystals.",
      "Shaking keeps everything moving, so heat is removed evenly and the ice crystals stay small — that is what makes ice cream smooth rather than icy. Salt is spread on icy roads in winter for the same reason: it lowers the freezing point of water."
    ],
    equation: "ice + salt → salty water below 0 °C; heat flows from the cream into it, so the cream freezes",
    equipment: ["120 mL whole milk or single cream (or a plant-based milk for anyone with a milk allergy)", "1 tablespoon of sugar and ¼ teaspoon of vanilla extract", "Small food-grade zip bag (about 1 litre)", "Large freezer bag (about 4 litres) — two per group for a no-salt comparison", "About 500 g of ice cubes (around 4 cups)", "About 100 g of coarse salt (around 6 tablespoons)", "Clean food thermometer", "Towel or warm gloves", "Spoons and bowls kept for food use only"],
    steps: [
      "Work in the food room. Wash your hands, wipe the bench and check that nobody in the group has a milk allergy.",
      "Put the milk or cream, sugar and vanilla into the small bag. Squeeze out the air and seal it tightly.",
      "Half-fill the large bag with ice and measure its temperature. Then add the salt, mix, and measure again after a minute.",
      "Put the small bag inside the large bag and seal the large bag.",
      "Wrap the bag in a towel (or wear gloves) and shake it for 5–10 minutes.",
      "Feel the small bag: when it is firm, take it out and rinse the salty water off the outside.",
      "Open it carefully, spoon the ice cream into a clean bowl and enjoy it."
    ],
    predict: { q: "What will happen to the temperature of the ice when you add the salt?", options: ["It drops well below 0 °C", "It rises above 0 °C", "It stays at exactly 0 °C", "It warms up, so the ice melts and the cream can't freeze"], answer: 0,
      result: "The ice starts melting into salty water and the thermometer falls to around −10 °C or lower, while plain ice stays near 0 °C. This salty mixture is cold enough to freeze the cream in 5–10 minutes." },
    why: { q: "Why does salty ice freeze the cream when plain ice does not?", answer: 0, options: [
      { t: "Salt lowers the freezing point, so the ice melts and takes in heat, cooling the mixture well below 0 °C", fb: "Right! Melting takes in energy. With salt, the mixture keeps melting below 0 °C, so it gets cold enough to pull heat out of the cream." },
      { t: "Salt is a cold substance that adds coldness to the ice", fb: "The salt starts at room temperature. Cold isn't something that can be added — heat flows out of the cream into the ice–salt mixture." },
      { t: "Salt reacts with the milk and turns it solid", fb: "The salt never touches the milk — it stays in the outer bag. The cream freezes because heat flows out of it." },
      { t: "Shaking makes heat by friction, and that freezes the cream", fb: "Shaking actually adds a tiny bit of heat. It helps by mixing, so heat leaves the cream evenly and the crystals stay small." }
    ] },
    hazards: ["The ice–salt mixture can reach −15 °C or lower and can cause cold burns to bare hands.", "Milk, cream and some plant milks (e.g. soya or nut) can cause allergic reactions, and some people are lactose intolerant.", "Food can be contaminated if lab equipment or dirty surfaces are used."],
    precautions: ["Only do this in a food room with clean food equipment — never use lab glassware, and never eat or drink in the lab.", "Check for milk and other food allergies first and offer a safe alternative.", "Hold the bag in a towel or wear gloves while shaking.", "Check that both bags are sealed so salty water cannot get in.", "Wash your hands before and after."],
    disposal: ["Pour the salty water down the sink and put the used bags in the recycling or the bin.", "Wash spoons and bowls in hot, soapy water."],
    supervisionNote: "Run this in the food room with clean, food-only equipment, and check pupils' allergy information before the lesson.",
    clip: ["Cream bag in ice and salt", "Shake for 5–10 minutes", "The brine hits −15 °C and the cream freezes!"]
  },
  sq: {
    name: "Akullore në qese", short: "Kripa ul pikën e ngrirjes",
    hook: "Bëj akullore të vërtetë për dhjetë minuta — pa frigorifer, vetëm me akull, kripë dhe shumë tundje.",
    aim: "Zbulo pse kripa e bën akullin aq të ftohtë sa të ngrijë ajkën dhe krahasoje me akullin pa kripë.",
    chemistry: [
      "Uji i pastër ngrin, dhe akulli shkrihet, në 0 °C. Kur kripa tretet në shtresën e hollë të ujit mbi sipërfaqen e akullit, ajo i pengon molekulat e ujit të ribashkohen me akullin. Akulli vazhdon të shkrihet, por nuk mund të ringrijë lehtë, ndaj pika e ngrirjes së ujit të kripur bie shumë nën 0 °C.",
      "Shkrirja kërkon energji. Akulli që shkrihet e merr këtë energji në formë nxehtësie nga gjithçka përreth, ndaj përzierja akull–kripë ftohet deri në rreth −10 °C deri −15 °C, ndërsa akulli pa kripë mbetet afër 0 °C. Nxehtësia kalon nga përzierja më e ngrohtë e ajkës te kjo përzierje shumë e ftohtë dhe ajka ngrin në kristale të vegjël akulli.",
      "Tundja i mban të gjitha në lëvizje, që nxehtësia të largohet në mënyrë të njëtrajtshme dhe kristalet e akullit të mbeten të vegjël — kjo e bën akulloren të butë dhe jo me kokrriza akulli. Për të njëjtën arsye, në dimër hidhet kripë në rrugët me akull: ajo ul pikën e ngrirjes së ujit."
    ],
    equation: "akull + kripë → ujë i kripur nën 0 °C; nxehtësia kalon nga ajka te ai, ndaj ajka ngrin",
    equipment: ["120 mL qumësht i plotë ose ajkë qumështi (ose qumësht bimor për këdo me alergji ndaj qumështit)", "1 lugë gjelle sheqer dhe ¼ luge çaji ekstrakt vaniljeje", "Qese e vogël ushqimore me mbyllje (rreth 1 litër)", "Qese e madhe për ngrirje (rreth 4 litra) — dy për grup për krahasimin pa kripë", "Rreth 500 g kubikë akulli (rreth 4 filxhanë)", "Rreth 100 g kripë e trashë (rreth 6 lugë gjelle)", "Termometër i pastër ushqimor", "Peshqir ose doreza të ngrohta", "Lugë dhe tasa që përdoren vetëm për ushqim"],
    steps: [
      "Puno në dhomën e ushqimit. Laj duart, fshi tavolinën dhe sigurohu që askush në grup të mos ketë alergji ndaj qumështit.",
      "Hidh qumështin ose ajkën, sheqerin dhe vaniljen në qesen e vogël. Nxirr ajrin dhe mbylle mirë.",
      "Mbush qesen e madhe deri në gjysmë me akull dhe mat temperaturën. Pastaj shto kripën, përziej dhe mate përsëri pas një minute.",
      "Fut qesen e vogël brenda qeses së madhe dhe mbyll qesen e madhe.",
      "Mbështille qesen me peshqir (ose vish doreza) dhe tunde për 5–10 minuta.",
      "Prek qesen e vogël: kur të jetë e fortë, nxirre dhe shpëlaje nga jashtë ujin e kripur.",
      "Hape me kujdes, hidhe akulloren me lugë në një tas të pastër dhe shijoje."
    ],
    predict: { q: "Çfarë do të ndodhë me temperaturën e akullit kur shton kripën?", options: ["Bie shumë nën 0 °C", "Rritet mbi 0 °C", "Mbetet saktësisht 0 °C", "Ngrohet, ndaj akulli shkrihet dhe ajka nuk mund të ngrijë"], answer: 0,
      result: "Akulli fillon të shkrihet në ujë të kripur dhe termometri bie deri në rreth −10 °C ose më poshtë, ndërsa akulli pa kripë mbetet afër 0 °C. Kjo përzierje e kripur është aq e ftohtë sa ta ngrijë ajkën për 5–10 minuta." },
    why: { q: "Pse akulli me kripë e ngrin ajkën, ndërsa akulli pa kripë jo?", answer: 0, options: [
      { t: "Kripa ul pikën e ngrirjes, ndaj akulli shkrihet dhe thith nxehtësi, duke e ftohur përzierjen shumë nën 0 °C", fb: "Saktë! Shkrirja thith energji. Me kripë, përzierja vazhdon të shkrihet edhe nën 0 °C, ndaj bëhet aq e ftohtë sa ta tërheqë nxehtësinë nga ajka." },
      { t: "Kripa është një lëndë e ftohtë që i shton të ftohtë akullit", fb: "Kripa është në temperaturën e dhomës. I ftohti nuk është diçka që shtohet — nxehtësia kalon nga ajka te përzierja akull–kripë." },
      { t: "Kripa reagon me qumështin dhe e ngurtëson", fb: "Kripa nuk e prek fare qumështin — ajo mbetet në qesen e jashtme. Ajka ngrin sepse nxehtësia largohet prej saj." },
      { t: "Tundja prodhon nxehtësi nga fërkimi dhe kjo e ngrin ajkën", fb: "Tundja në fakt shton pak nxehtësi. Ajo ndihmon sepse përzien, që nxehtësia të largohet në mënyrë të njëtrajtshme nga ajka dhe kristalet të mbeten të vegjël." }
    ] },
    hazards: ["Përzierja akull–kripë mund të arrijë −15 °C ose më poshtë dhe mund të shkaktojë djegie nga i ftohti në duart e zhveshura.", "Qumështi, ajka dhe disa qumështe bimore (p.sh. soje ose arrash) mund të shkaktojnë reaksione alergjike, dhe disa njerëz nuk e tolerojnë laktozën.", "Ushqimi mund të kontaminohet nëse përdoren mjete laboratori ose sipërfaqe të papastra."],
    precautions: ["Bëje vetëm në dhomën e ushqimit me mjete të pastra ushqimore — mos përdor kurrë enë laboratori dhe mos ha e mos pi kurrë në laborator.", "Kontrollo më parë për alergji ndaj qumështit dhe ushqimeve të tjera dhe ofro një alternativë të sigurt.", "Mbaje qesen me peshqir ose vish doreza kur e tund.", "Kontrollo që të dyja qeset të jenë mbyllur mirë, që uji i kripur të mos hyjë brenda.", "Laj duart para dhe pas aktivitetit."],
    disposal: ["Derdhe ujin e kripur në lavaman dhe hidhi qeset e përdorura në riciklim ose në kosh.", "Laji lugët dhe tasat me ujë të nxehtë dhe sapun."],
    supervisionNote: "Kryeni aktivitetin në dhomën e ushqimit me mjete vetëm për ushqim dhe kontrolloni informacionin për alergjitë e nxënësve para orës.",
    clip: ["Qesja me ajkë në akull dhe kripë", "Tunde për 5–10 minuta", "Uji i kripur arrin −15 °C dhe ajka ngrin!"]
  }
},

/* ===== DIY hand warmer ===== */
{
  id: "handwarmer", icon: "sun", topic: "energy", grades: "8–9", gmin: 8, gmax: 9, level: 1,
  supervision: "supervised", time: 30, eqType: "equation", predictAt: 3, ppe: ["goggles"],
  demo: { s: "beaker", from: "#52525b", to: "#9a3412", level: 0.4, temp: "up" },
  video: null,
  sources: [
    { org: "Royal Society of Chemistry", title: "Design a pocket handwarmer", url: "https://edu.rsc.org/in-search-of-more-solutions/design-a-pocket-handwarmer/596.article" },
    { org: "American Chemical Society", title: "Temperature change — Teacher Guide (Chemistry: Investigating Your World)", url: "https://acswebcontent.acs.org/iyckit/pdf/Lesson4_TeacherGuide.pdf" },
    { org: "The Cooper Union (META Lab)", title: "Hand warmers", url: "https://metalab.cooper.edu/hand-warmers" }
  ],
  en: {
    name: "DIY Hand Warmer", short: "Rusting gives out heat",
    hook: "Rusting is usually slow and boring — speed it up and it becomes a pocket heater.",
    aim: "Make a hand warmer from iron powder, salt and charcoal, and measure how much it warms up as the iron reacts with oxygen.",
    chemistry: [
      "Rusting is a chemical reaction between iron, oxygen from the air and water. It is exothermic: energy is given out to the surroundings as heat. A rusting nail warms up too, but it reacts so slowly that you can never feel it.",
      "A hand warmer speeds rusting up. Fine iron powder has a huge surface area, so far more iron atoms touch oxygen at once. Salt dissolved in the water helps the iron lose electrons faster, activated charcoal holds air and water close to the iron, and vermiculite keeps the mixture damp and loose. Lots of iron reacting quickly releases enough heat to feel.",
      "The product is iron(III) oxide — rust. Once all the iron has reacted, the warmer goes cold and cannot be used again, so this kind of hand warmer works only once."
    ],
    equation: "4Fe + 3O₂ → 2Fe₂O₃",
    equipment: ["2 heaped spatulas (about 10 g) of iron powder — from the teacher", "1 spatula (about 3 g) of activated charcoal", "1 spatula (about 3 g) of sodium chloride (table salt)", "1 spatula of vermiculite (optional)", "10 cm³ measuring cylinder and a dropping pipette of water", "Small zip-lock plastic bag", "Thermometer (or temperature probe)", "Safety goggles"],
    steps: [
      "Put on goggles. Measure and record the temperature of the room.",
      "Put the iron powder, activated charcoal, salt and vermiculite into the zip bag.",
      "Add about 3 cm³ of water, squeeze out most of the air and seal the bag. Shake it to mix.",
      "Open the bag slightly to let air in, then hold it in your hand.",
      "Press the thermometer bulb against the mixture through the bag (or tuck it inside) and record the temperature every minute for 10 minutes.",
      "Plot a graph of temperature against time and find the highest temperature reached."
    ],
    predict: { q: "What will happen to the temperature of the bag once air gets in?", options: ["It rises steadily over a few minutes", "It falls below room temperature", "It stays at room temperature", "It gets hot for a second, then cold"], answer: 0,
      result: "The bag warms up over a few minutes and often climbs 10–20 °C above room temperature, feeling clearly hot. Over time the grey iron powder turns reddish-brown as rust forms." },
    why: { q: "Why does the hand warmer get hot?", answer: 0, options: [
      { t: "Iron reacts with oxygen to form iron oxide, and this reaction gives out energy as heat", fb: "Yes — the oxidation of iron is exothermic. The fine powder and the salt make it happen fast enough to feel the heat." },
      { t: "Salt dissolving in water gives out heat", fb: "Dissolving salt hardly changes the temperature at all. The heat comes from the iron reacting with oxygen." },
      { t: "The activated charcoal is burning inside the bag", fb: "Nothing is burning — there is no flame. The charcoal just holds air and water next to the iron." },
      { t: "Your hand is warming the bag up", fb: "Your hand is cooler than the bag gets. A bag left on the bench warms up too, because the reaction itself releases energy." }
    ] },
    hazards: ["Fine iron powder can catch fire if it meets a flame, and its dust irritates the eyes.", "Activated charcoal is a fine black dust that is messy and irritates the eyes and lungs if breathed in.", "A hand warmer held against bare skin for a long time can cause a mild burn."],
    precautions: ["Wear goggles and keep the iron powder away from Bunsen burners and other flames.", "Pour powders gently to avoid making dust, and wipe up spills with a damp paper towel.", "Hold the bag through a sleeve or a cloth if it gets too hot, and never keep it on bare skin for long.", "Never eat the contents, and wash your hands afterwards."],
    disposal: ["When the warmer is cold and fully reacted, seal the bag and put it in the general waste bin.", "Return any unused iron powder to the teacher."],
    supervisionNote: "Students can carry this out with a teacher present; the teacher hands out the iron powder and keeps it away from flames.",
    clip: ["Iron powder, salt and charcoal in a bag", "Let air in and shake", "Rusting releases heat — the bag gets hot!"]
  },
  sq: {
    name: "Ngrohëse duarsh e bërë vetë", short: "Ndryshkja çliron nxehtësi",
    hook: "Ndryshkja zakonisht është e ngadaltë dhe e mërzitshme — përshpejtoje dhe bëhet një ngrohëse xhepi.",
    aim: "Ndërto një ngrohëse duarsh me pluhur hekuri, kripë dhe qymyr aktiv dhe mat sa ngrohet ndërsa hekuri reagon me oksigjenin.",
    chemistry: [
      "Ndryshkja është një reaksion kimik midis hekurit, oksigjenit të ajrit dhe ujit. Ajo është ekzotermike: energjia i jepet mjedisit në formë nxehtësie. Edhe një gozhdë që ndryshket ngrohet, por reagon aq ngadalë sa nuk e ndien kurrë.",
      "Ngrohësja e duarve e përshpejton ndryshkjen. Pluhuri i imët i hekurit ka sipërfaqe shumë të madhe, ndaj shumë më tepër atome hekuri takojnë oksigjenin njëkohësisht. Kripa e tretur në ujë e ndihmon hekurin të humbasë elektrone më shpejt, qymyri aktiv mban ajrin dhe ujin pranë hekurit, ndërsa vermikuliti e mban përzierjen të lagësht dhe të shkrifët. Shumë hekur që reagon shpejt çliron aq nxehtësi sa ta ndiesh.",
      "Produkti është oksid hekuri(III) — ndryshk. Pasi i gjithë hekuri të ketë reaguar, ngrohësja ftohet dhe nuk mund të përdoret më, ndaj ky lloj ngrohëseje punon vetëm një herë."
    ],
    equation: "4Fe + 3O₂ → 2Fe₂O₃",
    equipment: ["2 spatula të mbushura (rreth 10 g) pluhur hekuri — nga mësuesi", "1 spatulë (rreth 3 g) qymyr aktiv", "1 spatulë (rreth 3 g) klorur natriumi (kripë kuzhine)", "1 spatulë vermikulit (sipas dëshirës)", "Cilindër matës 10 cm³ dhe një pipetë me ujë", "Qese e vogël plastike me mbyllje", "Termometër (ose sensor temperature)", "Syze mbrojtëse"],
    steps: [
      "Vendos syzet. Mat dhe shëno temperaturën e dhomës.",
      "Hidh në qese pluhurin e hekurit, qymyrin aktiv, kripën dhe vermikulitin.",
      "Shto rreth 3 cm³ ujë, nxirr pjesën më të madhe të ajrit dhe mbylle qesen. Tunde që të përzihet.",
      "Hape pak qesen që të hyjë ajri, pastaj mbaje në dorë.",
      "Shtyp majën e termometrit pas përzierjes nga jashtë qeses (ose fute brenda) dhe shëno temperaturën çdo minutë për 10 minuta.",
      "Ndërto grafikun e temperaturës kundrejt kohës dhe gjej temperaturën më të lartë të arritur."
    ],
    predict: { q: "Çfarë do të ndodhë me temperaturën e qeses kur të hyjë ajri?", options: ["Rritet gradualisht brenda pak minutash", "Bie nën temperaturën e dhomës", "Mbetet në temperaturën e dhomës", "Nxehet për një sekondë, pastaj ftohet"], answer: 0,
      result: "Qesja ngrohet brenda pak minutash dhe shpesh arrin 10–20 °C mbi temperaturën e dhomës, duke u ndier qartë e nxehtë. Me kalimin e kohës, pluhuri gri i hekurit merr ngjyrë kafe të kuqërremtë ndërsa formohet ndryshku." },
    why: { q: "Pse nxehet ngrohësja e duarve?", answer: 0, options: [
      { t: "Hekuri reagon me oksigjenin dhe formon oksid hekuri, dhe ky reaksion çliron energji në formë nxehtësie", fb: "Po — oksidimi i hekurit është ekzotermik. Pluhuri i imët dhe kripa e bëjnë të ndodhë aq shpejt sa ta ndiesh nxehtësinë." },
      { t: "Kripa që tretet në ujë çliron nxehtësi", fb: "Tretja e kripës pothuajse nuk e ndryshon temperaturën. Nxehtësia vjen nga reaksioni i hekurit me oksigjenin." },
      { t: "Qymyri aktiv po digjet brenda qeses", fb: "Asgjë nuk po digjet — nuk ka flakë. Qymyri thjesht mban ajrin dhe ujin pranë hekurit." },
      { t: "Dora jote e ngroh qesen", fb: "Dora jote është më e ftohtë se sa nxehet qesja. Edhe një qese e lënë mbi tavolinë ngrohet, sepse vetë reaksioni çliron energji." }
    ] },
    hazards: ["Pluhuri i imët i hekurit mund të marrë flakë nëse takon një flakë, dhe pluhuri i tij irriton sytë.", "Qymyri aktiv është pluhur i imët i zi që ndot dhe irriton sytë e mushkëritë nëse thithet.", "Një ngrohëse e mbajtur gjatë mbi lëkurën e zhveshur mund të shkaktojë një djegie të lehtë."],
    precautions: ["Mbaj syze mbrojtëse dhe mbaje pluhurin e hekurit larg llambave Bunsen dhe flakëve të tjera.", "Hidhi pluhurat ngadalë që të mos ngrihet pluhur dhe fshiji derdhjet me letër kuzhine të lagur.", "Mbaje qesen përmes mëngës ose një cope nëse nxehet shumë dhe mos e mbaj kurrë gjatë mbi lëkurën e zhveshur.", "Mos e ha kurrë përmbajtjen dhe laj duart pas aktivitetit."],
    disposal: ["Kur ngrohësja të jetë ftohur dhe të ketë reaguar plotësisht, mbylle qesen dhe hidhe në koshin e mbeturinave të zakonshme.", "Ktheja mësuesit pluhurin e hekurit që nuk është përdorur."],
    supervisionNote: "Nxënësit mund ta kryejnë me praninë e mësuesit; mësuesi shpërndan pluhurin e hekurit dhe e mban larg flakëve.",
    clip: ["Pluhur hekuri, kripë dhe qymyr në qese", "Lëre të hyjë ajri dhe tunde", "Ndryshkja çliron nxehtësi — qesja nxehet!"]
  }
},

/* ===== Instant cold pack ===== */
{
  id: "coldpack", icon: "snow", topic: "energy", grades: "8–9", gmin: 8, gmax: 9, level: 2,
  supervision: "supervised", time: 30, eqType: "equation", predictAt: 3, ppe: ["goggles"],
  demo: { s: "beaker", from: "#f1f5f9", to: "#e0f2fe", level: 0.55, solid: { c: "#f8fafc", shrink: true, float: false }, temp: "down" },
  video: null,
  sources: [
    { org: "Science Buddies", title: "Cold Pack Chemistry: Exploring Endothermic and Exothermic Reactions", url: "https://www.sciencebuddies.org/teacher-resources/lesson-plans/endothermic-exothermic-reactions" },
    { org: "American Chemical Society", title: "Middle School Chemistry — Lesson 5.9: Temperature Changes in Dissolving", url: "https://www.acs.org/middleschoolchemistry/lessonplans/chapter5/lesson9.html" },
    { org: "Royal Society of Chemistry", title: "Investigate practical applications of endothermic reactions (11–14 years)", url: "https://edu.rsc.org/outreach/investigating-cold-reactions-11-14-years/4015955.article" }
  ],
  en: {
    name: "Instant Cold Pack", short: "Endothermic dissolving",
    hook: "Stir a white powder into water and watch the thermometer plunge — no fridge needed.",
    aim: "Measure the temperature change when ammonium chloride dissolves in water, and explain how an instant cold pack works.",
    chemistry: [
      "When a solid such as ammonium chloride dissolves, two things happen. Energy is needed to pull the ammonium (NH₄⁺) and chloride (Cl⁻) ions out of the crystal, and energy is released when water molecules surround the separated ions.",
      "For ammonium chloride, more energy is taken in to break up the crystal than is given out when the ions are surrounded by water. The extra energy is taken from the surroundings — the water, the cup and your hand — so the temperature falls. This is an endothermic change, and its ΔH value is positive.",
      "Instant cold packs used for sports injuries contain a solid such as ammonium chloride or ammonium nitrate and a separate pouch of water. Squeezing the pack bursts the pouch, the solid dissolves and the pack becomes cold within seconds."
    ],
    equation: "NH₄Cl(s) → NH₄⁺(aq) + Cl⁻(aq)   ΔH ≈ +15 kJ/mol",
    equipment: ["Polystyrene cup standing in a 250 cm³ beaker (for insulation)", "50 cm³ measuring cylinder and water", "Ammonium chloride (harmful, eye irritant) — 5 g, 10 g and 15 g weighed portions", "Balance and weighing boat", "Thermometer (−10 to 110 °C) or temperature probe", "Stirring rod", "Timer", "Safety goggles"],
    steps: [
      "Put on goggles. Measure 50 cm³ of water into the polystyrene cup.",
      "Stir gently and record the starting temperature of the water.",
      "Weigh out 10 g of ammonium chloride.",
      "Add all the ammonium chloride at once and stir until it has dissolved.",
      "Record the temperature every 15 seconds for 2 minutes and note the lowest value.",
      "Calculate the temperature change, then repeat with fresh water and 5 g, then 15 g, of the solid.",
      "Plot the temperature fall against the mass dissolved and describe the pattern."
    ],
    predict: { q: "What will happen to the temperature when the ammonium chloride dissolves?", options: ["It falls by about 10 °C", "It rises by about 10 °C", "It doesn't change", "The water freezes solid"], answer: 0,
      result: "The temperature drops quickly: with 10 g in 50 cm³ of water it usually falls by about 10 °C, and with 15 g by around 15 °C. The cup feels cold and drops of water may condense on the outside. More solid gives a bigger temperature fall." },
    why: { q: "Why does the water get colder when ammonium chloride dissolves?", answer: 0, options: [
      { t: "Breaking up the crystal takes in more energy than surrounding the ions with water gives out, so energy is taken from the water", fb: "Exactly — overall, this dissolving is endothermic. The energy comes from the water's own heat, so its temperature falls." },
      { t: "Ammonium chloride is stored somewhere cold", fb: "It starts at room temperature. The cooling happens because dissolving takes in energy from the surroundings." },
      { t: "Ammonium chloride reacts with water to make ice", fb: "No ice forms — the temperature only falls by 10–15 °C. The solid simply splits into ions that spread through the water." },
      { t: "Stirring the water cools it down", fb: "Stirring alone doesn't change the temperature noticeably. Try stirring water without the solid: the temperature stays the same." }
    ] },
    hazards: ["Ammonium chloride is harmful if swallowed.", "Ammonium chloride causes serious eye irritation.", "Glass thermometers can break if they are used for stirring."],
    precautions: ["Wear goggles throughout.", "Use a spatula to handle the solid and wipe up spills straight away.", "Stir with the stirring rod, not the thermometer.", "Never taste anything in the lab, and wash your hands at the end."],
    disposal: ["Small amounts of the solution can be poured down the sink with plenty of water, or collected by the teacher to recover the crystals."],
    supervisionNote: "Students can carry this out with a teacher present; the teacher checks that goggles stay on while the solid is being handled.",
    clip: ["Water in an insulated cup", "Stir in ammonium chloride", "The temperature drops by about 10 °C!"]
  },
  sq: {
    name: "Pako e ftohtë e çastit", short: "Tretje endotermike",
    hook: "Përziej një pluhur të bardhë në ujë dhe shiko termometrin të bjerë me shpejtësi — pa frigorifer.",
    aim: "Mat ndryshimin e temperaturës kur kloruri i amonit tretet në ujë dhe shpjego si funksionon një pako e ftohtë e çastit.",
    chemistry: [
      "Kur një lëndë e ngurtë si kloruri i amonit tretet, ndodhin dy gjëra. Duhet energji për t'i nxjerrë jonet e amonit (NH₄⁺) dhe të klorurit (Cl⁻) nga kristali, ndërsa çlirohet energji kur molekulat e ujit rrethojnë jonet e ndara.",
      "Te kloruri i amonit, energjia që merret për të shpërbërë kristalin është më e madhe se ajo që çlirohet kur jonet rrethohen nga uji. Energjia shtesë merret nga mjedisi — uji, gota dhe dora jote — ndaj temperatura bie. Ky është një ndryshim endotermik dhe vlera e ΔH është pozitive.",
      "Pakot e ftohta të çastit që përdoren për dëmtimet sportive përmbajnë një lëndë të ngurtë si klorur amoni ose nitrat amoni dhe një qeskë të veçantë me ujë. Kur e shtrydh pakon, qeska çahet, lënda e ngurtë tretet dhe pakoja ftohet brenda pak sekondash."
    ],
    equation: "NH₄Cl(s) → NH₄⁺(aq) + Cl⁻(aq)   ΔH ≈ +15 kJ/mol",
    equipment: ["Gotë polistireni brenda një gote kimike 250 cm³ (për izolim)", "Cilindër matës 50 cm³ dhe ujë", "Klorur amoni (i dëmshëm, irritues për sytë) — porcione të peshuara 5 g, 10 g dhe 15 g", "Peshore dhe enë peshimi", "Termometër (−10 deri 110 °C) ose sensor temperature", "Shkop përzierës", "Kohëmatës", "Syze mbrojtëse"],
    steps: [
      "Vendos syzet. Mat 50 cm³ ujë në gotën e polistirenit.",
      "Përziej lehtë dhe shëno temperaturën fillestare të ujit.",
      "Pesho 10 g klorur amoni.",
      "Shto gjithë klorurin e amonit njëherësh dhe përziej derisa të tretet.",
      "Shëno temperaturën çdo 15 sekonda për 2 minuta dhe shëno vlerën më të ulët.",
      "Llogarit ndryshimin e temperaturës, pastaj përsërite me ujë të ri, njëherë me 5 g dhe njëherë me 15 g lëndë të ngurtë.",
      "Ndërto grafikun e rënies së temperaturës kundrejt masës së tretur dhe përshkruaj rregullsinë."
    ],
    predict: { q: "Çfarë do të ndodhë me temperaturën kur tretet kloruri i amonit?", options: ["Bie rreth 10 °C", "Rritet rreth 10 °C", "Nuk ndryshon", "Uji ngrin plotësisht"], answer: 0,
      result: "Temperatura bie shpejt: me 10 g në 50 cm³ ujë zakonisht bie rreth 10 °C, ndërsa me 15 g rreth 15 °C. Gota ndihet e ftohtë dhe në anën e jashtme mund të kondensohen pika uji. Sa më shumë lëndë e ngurtë, aq më e madhe është rënia e temperaturës." },
    why: { q: "Pse ftohet uji kur tretet kloruri i amonit?", answer: 0, options: [
      { t: "Shpërbërja e kristalit merr më shumë energji sesa çlirohet kur jonet rrethohen nga uji, ndaj energjia merret nga uji", fb: "Pikërisht — në tërësi kjo tretje është endotermike. Energjia vjen nga nxehtësia e vetë ujit, ndaj temperatura e tij bie." },
      { t: "Kloruri i amonit ruhet në një vend të ftohtë", fb: "Ai është në temperaturën e dhomës. Ftohja ndodh sepse tretja merr energji nga mjedisi." },
      { t: "Kloruri i amonit reagon me ujin dhe formon akull", fb: "Nuk formohet akull — temperatura bie vetëm 10–15 °C. Lënda e ngurtë thjesht ndahet në jone që shpërndahen në ujë." },
      { t: "Përzierja e ujit e ftoh atë", fb: "Vetëm përzierja nuk e ndryshon dukshëm temperaturën. Provo të përziesh ujë pa lëndën e ngurtë: temperatura mbetet e njëjtë." }
    ] },
    hazards: ["Kloruri i amonit është i dëmshëm nëse gëlltitet.", "Kloruri i amonit shkakton irritim të rëndë të syve.", "Termometrat prej qelqi mund të thyhen nëse përdoren për përzierje."],
    precautions: ["Mbaj syze mbrojtëse gjatë gjithë kohës.", "Përdor spatulë për lëndën e ngurtë dhe fshiji menjëherë derdhjet.", "Përziej me shkopin përzierës, jo me termometrin.", "Mos shijo kurrë asgjë në laborator dhe laj duart në fund."],
    disposal: ["Sasi të vogla të tretësirës mund të derdhen në lavaman me shumë ujë, ose mësuesi mund t'i mbledhë për të rikuperuar kristalet."],
    supervisionNote: "Nxënësit mund ta kryejnë me praninë e mësuesit; mësuesi kontrollon që syzet të mbahen gjatë gjithë punës me lëndën e ngurtë.",
    clip: ["Ujë në një gotë të izoluar", "Përziej klorurin e amonit", "Temperatura bie rreth 10 °C!"]
  }
},

/* ===== Hot ice ===== */
{
  id: "hotice", icon: "crystal", topic: "energy", grades: "9–11", gmin: 9, gmax: 11, level: 2,
  supervision: "close", time: 30, eqType: "equation", predictAt: 3, ppe: ["goggles"],
  demo: { s: "beaker", from: "#eef6fb", to: "#f8fafc", level: 0.55, cloudy: "#ffffff", temp: "up", delay: true },
  video: null,
  sources: [
    { org: "Royal Society of Chemistry", title: "Sodium ethanoate ‘stalagmite’", url: "https://edu.rsc.org/experiments/sodium-ethanoate-stalagmite/1771.article" },
    { org: "Royal Society of Chemistry", title: "Design a pocket handwarmer", url: "https://edu.rsc.org/in-search-of-more-solutions/design-a-pocket-handwarmer/596.article" },
    { org: "Science Buddies", title: "Explore the Chemistry Within Hand Warmers", url: "https://www.sciencebuddies.org/science-fair-projects/project-ideas/Chem_p085/chemistry/how-hand-warmers-work" }
  ],
  en: {
    name: "Hot Ice", short: "Crystallisation releases energy",
    hook: "Touch a clear liquid with one tiny crystal and it turns into warm ‘ice’ before your eyes.",
    aim: "Observe a supersaturated sodium ethanoate solution crystallising, and measure the energy it releases as heat.",
    chemistry: [
      "When sodium ethanoate (sodium acetate) trihydrate is heated, it dissolves in its own water of crystallisation. If this hot solution is cooled slowly and kept very clean, it can stay liquid at room temperature, even though it holds far more solute than it normally could. This is a supersaturated solution — it is unstable and only needs something to start crystals forming.",
      "A seed crystal gives the ions a pattern to build on. Crystals spread through the whole liquid in seconds and the result looks like ice. Forming the ionic lattice and locking water molecules into the crystal releases energy, so crystallisation is exothermic and the solid warms to around 50 °C.",
      "Reusable hand warmers work this way: clicking a metal disc starts the crystallisation. Boiling the pack redissolves the crystals and stores the energy again, so it can be used many times."
    ],
    equation: "Na⁺(aq) + CH₃COO⁻(aq) + 3H₂O(l) → CH₃COONa·3H₂O(s)   ΔH < 0",
    equipment: ["Supersaturated sodium ethanoate solution in a clean, covered conical flask — prepared by the teacher from about 50 g of sodium ethanoate trihydrate and 5 cm³ of water", "A few seed crystals of sodium ethanoate trihydrate on a watch glass", "Thermometer (0–110 °C), placed in the flask by the teacher before it cooled", "Spatula", "Timer", "Heatproof mat", "Safety goggles"],
    steps: [
      "Before the lesson, the teacher warms the sodium ethanoate and water in a water bath until the solution is completely clear, adds a clean thermometer, covers the flask and leaves it to cool undisturbed.",
      "Put on goggles. Without moving the flask, read and record the temperature of the clear liquid.",
      "Look closely: the liquid is at room temperature and completely clear, with no solid at the bottom.",
      "Use the spatula to drop one small seed crystal into the liquid.",
      "Watch the crystals spread, time how long it takes and record the highest temperature reached.",
      "Carefully feel the outside of the flask and compare the solid with real ice.",
      "Return the flask to the teacher, who can reheat it to redissolve the crystals so it can be used again."
    ],
    predict: { q: "What will happen when the seed crystal touches the liquid?", options: ["Crystals spread through it quickly and it gets warm", "The crystal dissolves and nothing else happens", "Crystals spread through it and it gets very cold", "The liquid starts to boil"], answer: 0,
      result: "White, needle-like crystals shoot out from the seed and fill the flask within seconds, until it looks like solid ice. The thermometer climbs to around 50 °C and the flask feels warm — the opposite of real ice." },
    why: { q: "Why does the flask get warm as the crystals form?", answer: 0, options: [
      { t: "Crystallisation is exothermic: forming the crystal lattice releases energy as heat", fb: "Correct. Ions and water molecules lock into the solid lattice, and the energy that was taken in when the solid dissolved is released again." },
      { t: "The seed crystal was hot", fb: "The seed crystal was at room temperature, and it is tiny. The heat comes from the whole liquid crystallising." },
      { t: "Friction between the growing crystals produces heat", fb: "The crystals don't rub together noticeably. The heat comes from new bonds forming as the lattice builds up." },
      { t: "The solution reacts with oxygen in the air", fb: "Nothing reacts with the air here — a sealed hand warmer works in exactly the same way. It is the crystallisation that releases the energy." }
    ] },
    hazards: ["The hot solution and water bath used in the preparation can cause scalds.", "Sodium ethanoate dust or solution may irritate the eyes.", "Glass flasks can crack if they are heated unevenly or knocked."],
    precautions: ["Only the teacher heats the solution, in a water bath or on a hotplate, never directly in a flame.", "Wear goggles and handle the flask gently by its neck.", "Keep the flask covered and clean so it does not crystallise too early.", "The crystallised solid gets warm, around 50 °C — touch it only briefly.", "Wash your hands afterwards and never taste the crystals."],
    disposal: ["Keep the flask — the teacher can reheat it to redissolve the crystals and use it again.", "Unwanted sodium ethanoate can be dissolved in plenty of water and poured down the sink."],
    supervisionNote: "Close supervision: the teacher prepares and reheats the solution and watches students closely while they handle the warm flasks.",
    clip: ["A clear, cooled supersaturated solution", "Drop in a single seed crystal", "Crystals race through and it warms to 50 °C!"]
  },
  sq: {
    name: "Akulli i nxehtë", short: "Kristalizimi çliron energji",
    hook: "Prek një lëng të tejdukshëm me një kristal të vogël dhe ai kthehet në ‘akull’ të ngrohtë para syve të tu.",
    aim: "Vëzhgo kristalizimin e një tretësire të mbingopur të etanoatit të natriumit dhe mat energjinë që ajo çliron në formë nxehtësie.",
    chemistry: [
      "Kur nxehet trihidrati i etanoatit të natriumit (acetatit të natriumit), ai tretet në ujin e vet të kristalizimit. Nëse kjo tretësirë e nxehtë ftohet ngadalë dhe mbahet shumë e pastër, ajo mund të mbetet e lëngët në temperaturën e dhomës, edhe pse përmban shumë më tepër lëndë të tretur se zakonisht. Kjo është një tretësirë e mbingopur — është e paqëndrueshme dhe i mjafton diçka e vogël që të nisë formimi i kristaleve.",
      "Një kristal fillestar u jep joneve një model mbi të cilin të ndërtohen. Kristalet përhapen në të gjithë lëngun brenda pak sekondash dhe rezultati duket si akull. Formimi i rrjetës jonike dhe përfshirja e molekulave të ujit në kristal çlirojnë energji, ndaj kristalizimi është ekzotermik dhe lënda e ngurtë ngrohet deri në rreth 50 °C.",
      "Ngrohëset e duarve të ripërdorshme punojnë në këtë mënyrë: shtypja e një disku metalik nis kristalizimin. Kur pakoja zihet në ujë, kristalet ritreten dhe energjia ruhet përsëri, ndaj mund të përdoret shumë herë."
    ],
    equation: "Na⁺(aq) + CH₃COO⁻(aq) + 3H₂O(l) → CH₃COONa·3H₂O(s)   ΔH < 0",
    equipment: ["Tretësirë e mbingopur etanoati natriumi në një balonë konike të pastër dhe të mbuluar — e përgatit mësuesi nga rreth 50 g trihidrat etanoati natriumi dhe 5 cm³ ujë", "Disa kristale fillestare trihidrati etanoati natriumi mbi një xham ore", "Termometër (0–110 °C), i vendosur në balonë nga mësuesi para se ajo të ftohej", "Spatulë", "Kohëmatës", "Pllakë rezistente ndaj nxehtësisë", "Syze mbrojtëse"],
    steps: [
      "Para orës, mësuesi e ngroh etanoatin e natriumit me ujin në banjë uji derisa tretësira të bëhet plotësisht e tejdukshme, fut një termometër të pastër, e mbulon balonën dhe e lë të ftohet pa e lëvizur.",
      "Vendos syzet. Pa e lëvizur balonën, lexo dhe shëno temperaturën e lëngut të tejdukshëm.",
      "Vëzhgo nga afër: lëngu është në temperaturën e dhomës dhe plotësisht i tejdukshëm, pa asnjë lëndë të ngurtë në fund.",
      "Me spatulë, hidh një kristal fillestar të vogël në lëng.",
      "Shiko si përhapen kristalet, mat sa kohë zgjat dhe shëno temperaturën më të lartë të arritur.",
      "Prek me kujdes anën e jashtme të balonës dhe krahaso lëndën e ngurtë me akullin e vërtetë.",
      "Ktheja balonën mësuesit, i cili mund ta rinxehë për të ritretur kristalet, që të përdoret përsëri."
    ],
    predict: { q: "Çfarë do të ndodhë kur kristali fillestar të prekë lëngun?", options: ["Kristalet përhapen shpejt dhe lëngu ngrohet", "Kristali tretet dhe nuk ndodh asgjë tjetër", "Kristalet përhapen dhe lëngu ftohet shumë", "Lëngu fillon të vlojë"], answer: 0,
      result: "Kristale të bardha si gjilpëra shpërthejnë nga kristali fillestar dhe e mbushin balonën brenda pak sekondash, derisa ajo duket si akull i ngurtë. Termometri ngjitet në rreth 50 °C dhe balona ndihet e ngrohtë — e kundërta e akullit të vërtetë." },
    why: { q: "Pse ngrohet balona ndërsa formohen kristalet?", answer: 0, options: [
      { t: "Kristalizimi është ekzotermik: formimi i rrjetës kristalore çliron energji në formë nxehtësie", fb: "Saktë. Jonet dhe molekulat e ujit zënë vend në rrjetën e ngurtë dhe çlirohet përsëri energjia që u mor kur lënda e ngurtë u tret." },
      { t: "Kristali fillestar ishte i nxehtë", fb: "Kristali fillestar ishte në temperaturën e dhomës dhe është shumë i vogël. Nxehtësia vjen nga kristalizimi i gjithë lëngut." },
      { t: "Fërkimi midis kristaleve që rriten prodhon nxehtësi", fb: "Kristalet nuk fërkohen dukshëm me njëri-tjetrin. Nxehtësia vjen nga lidhjet e reja që formohen ndërsa ndërtohet rrjeta." },
      { t: "Tretësira reagon me oksigjenin e ajrit", fb: "Këtu asgjë nuk reagon me ajrin — një ngrohëse e mbyllur hermetikisht punon njësoj. Energjinë e çliron kristalizimi." }
    ] },
    hazards: ["Tretësira e nxehtë dhe banja e ujit gjatë përgatitjes mund të shkaktojnë djegie.", "Pluhuri ose tretësira e etanoatit të natriumit mund t'i irritojë sytë.", "Balonat prej qelqi mund të çahen nëse nxehen në mënyrë të pabarabartë ose goditen."],
    precautions: ["Vetëm mësuesi e nxeh tretësirën, në banjë uji ose në pllakë elektrike, kurrë drejtpërdrejt në flakë.", "Mbaj syze mbrojtëse dhe kape balonën me kujdes nga qafa.", "Mbaje balonën të mbuluar dhe të pastër, që të mos kristalizohet para kohe.", "Lënda e kristalizuar ngrohet deri në rreth 50 °C — preke vetëm për pak çaste.", "Laj duart pas aktivitetit dhe mos i shijo kurrë kristalet."],
    disposal: ["Ruaje balonën — mësuesi mund ta rinxehë për të ritretur kristalet dhe për ta përdorur përsëri.", "Etanoati i natriumit që nuk nevojitet mund të tretet në shumë ujë dhe të derdhet në lavaman."],
    supervisionNote: "Mbikëqyrje e afërt: mësuesi e përgatit dhe e rinxeh tretësirën dhe i ndjek nga afër nxënësit kur mbajnë balonat e ngrohta.",
    clip: ["Tretësirë e mbingopur, e tejdukshme, e ftohur", "Hidh një kristal të vetëm fillestar", "Kristalet përhapen dhe temperatura arrin 50 °C!"]
  }
},

/* ===== Calorimetry cup ===== */
{
  id: "calorimetry", icon: "beaker", topic: "energy", grades: "11–12", gmin: 11, gmax: 12, level: 3,
  supervision: "close", time: 50, eqType: "equation", predictAt: 3, ppe: ["goggles"],
  demo: { s: "beaker", from: "#3b82f6", to: "#e0f2fe", level: 0.5, precip: "#92400e", temp: "up" },
  video: null,
  sources: [
    { org: "CLEAPSS", title: "TL003 – Heat of reaction of zinc with copper(II) sulfate(VI)", url: "https://science.cleapss.org.uk/resource-info/tl003-heat-of-reaction-of-zinc-with-copper-ii-sulfate-vi.aspx" },
    { org: "Doc Brown's Chemistry", title: "Enthalpy of the displacement reaction between zinc and copper(II) sulfate solution", url: "https://www.docbrown.info/page07/delta1Hc-06.htm" },
    { org: "Chemguide", title: "Measuring enthalpy changes practically", url: "https://www.chemguide.co.uk/14to16/calculations/thermopractical.html" }
  ],
  en: {
    name: "Calorimetry Cup", short: "Measuring enthalpy change",
    hook: "A polystyrene cup, a thermometer and some maths are all you need to measure the energy of a reaction.",
    aim: "Measure the temperature rise when zinc displaces copper from copper(II) sulfate solution, and use it to calculate the enthalpy change of the reaction in kJ/mol.",
    chemistry: [
      "Zinc is more reactive than copper, so it displaces copper from copper(II) sulfate: Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s). The reaction is strongly exothermic. As the blue Cu²⁺ ions are used up, the solution fades towards colourless and a brown powder of copper forms.",
      "In a simple calorimeter the energy released heats the solution. Assuming the solution behaves like water (density 1.00 g/cm³, specific heat capacity c = 4.18 J g⁻¹ K⁻¹), the heat transferred is q = mcΔT, where m is the mass of the solution, not of the zinc. Dividing q by the amount in moles of the limiting reagent — here CuSO₄, because zinc is in excess — gives the enthalpy change: ΔH = −q ÷ n. The sign is negative because energy leaves the reacting system.",
      "Heat is lost to the surroundings even while the reaction is happening, so the highest reading underestimates the true temperature rise. Plotting temperature against time and extrapolating the cooling line back to the moment of mixing corrects for this. Typical class results are about −190 to −210 kJ/mol, compared with an accepted value of about −217 kJ/mol."
    ],
    equation: "Zn(s) + CuSO₄(aq) → ZnSO₄(aq) + Cu(s)",
    equipment: ["Polystyrene cup with a lid, standing in a 250 cm³ beaker", "25 cm³ pipette with a pipette filler (or a 25 cm³ measuring cylinder)", "25.0 cm³ of 0.50 mol/dm³ copper(II) sulfate solution (harmful, irritant, toxic to aquatic life)", "About 1.5 g of zinc powder (an excess) in a weighing boat — keep away from flames", "Thermometer reading to 0.1 °C, or a temperature probe and data logger", "Stopwatch", "Stirring rod", "Balance (0.01 g)", "Safety goggles"],
    steps: [
      "Put on goggles. Weigh about 1.5 g of zinc powder into a weighing boat and record the mass. Make sure there are no flames nearby.",
      "Pipette 25.0 cm³ of copper(II) sulfate solution into the polystyrene cup standing in the beaker, and fit the lid with the thermometer through it.",
      "Start the stopwatch and record the temperature every 30 seconds for 3 minutes.",
      "At exactly 3 minutes, tip in all the zinc, replace the lid and stir continuously.",
      "Keep recording the temperature every 30 seconds until 10 minutes, and note any colour changes.",
      "Plot temperature against time, draw lines of best fit before and after mixing, and extrapolate the cooling line back to 3 minutes to find ΔT.",
      "Calculate q = mcΔT using m = 25.0 g and c = 4.18 J g⁻¹ K⁻¹, then n(CuSO₄) and ΔH = −q ÷ n in kJ/mol."
    ],
    predict: { q: "What will the temperature–time graph look like after the zinc is added?", options: ["A steep rise to a maximum, then a slow fall", "A steady fall below the starting temperature", "A flat line — displacement reactions have no energy change", "A slow, steady rise for the whole 10 minutes"], answer: 0,
      result: "The temperature shoots up by around 20–25 °C within a minute or two, then falls slowly as the cup loses heat. The blue colour fades to almost colourless and a brown powder of copper settles at the bottom. Extrapolating the cooling line back to 3 minutes gives a ΔT slightly larger than the highest reading." },
    why: { q: "Why do we extrapolate the cooling line back to the time of mixing instead of just using the highest temperature?", answer: 0, options: [
      { t: "Heat is lost to the surroundings while the reaction is still going, so the highest reading is lower than the true rise", fb: "Right. The reaction takes time to finish and the cup loses heat meanwhile. Extrapolating estimates the temperature that would be reached if all the energy were released instantly." },
      { t: "The thermometer takes time to warm up, so it reads too high", fb: "A slow thermometer would read too low, not too high. The main reason is heat loss to the surroundings during the reaction." },
      { t: "The zinc absorbs some of the heat, which must be subtracted", fb: "The heat capacity of 1.5 g of zinc is tiny compared with 25 g of solution. Extrapolation corrects for heat lost to the surroundings over time." },
      { t: "To make the ΔH value come out positive", fb: "Extrapolating changes the size of ΔT, not the sign. ΔH stays negative because the reaction is exothermic." }
    ] },
    hazards: ["Copper(II) sulfate solution is harmful if swallowed, irritates the eyes and skin, and is toxic to aquatic life.", "Zinc powder is flammable and must be kept away from flames; it is also very toxic to aquatic life.", "The mixture gets hot (around 45 °C) and a lightweight cup can tip over easily."],
    precautions: ["Wear goggles throughout and use a pipette filler — never pipette by mouth.", "Keep zinc powder away from Bunsen burners and pour it carefully to avoid dust.", "Stand the cup in a beaker so it cannot tip over, and stir gently.", "Wipe up spills straight away and wash your hands at the end."],
    disposal: ["Let the solids settle, then pour the solution into the heavy-metal (copper/zinc) waste container — not down the sink.", "Collect the copper and leftover zinc powder in the solid residue container provided by the teacher."],
    supervisionNote: "Close supervision: the teacher dispenses zinc powder away from flames and makes sure all copper and zinc waste is collected.",
    clip: ["Blue copper sulfate in an insulated cup", "Tip in zinc powder and stir", "Temperature soars, blue fades, copper forms!"]
  },
  sq: {
    name: "Gota kalorimetrike", short: "Matja e ndryshimit të entalpisë",
    hook: "Një gotë polistireni, një termometër dhe pak matematikë mjaftojnë për të matur energjinë e një reaksioni.",
    aim: "Mat rritjen e temperaturës kur zinku zhvendos bakrin nga tretësira e sulfatit të bakrit(II) dhe përdore për të llogaritur ndryshimin e entalpisë së reaksionit në kJ/mol.",
    chemistry: [
      "Zinku është më aktiv se bakri, ndaj e zhvendos bakrin nga sulfati i bakrit(II): Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s). Reaksioni është fort ekzotermik. Ndërsa jonet blu Cu²⁺ harxhohen, tretësira zbehet drejt së pangjyrës dhe formohet një pluhur kafe bakri.",
      "Në një kalorimetër të thjeshtë, energjia e çliruar ngroh tretësirën. Duke supozuar se tretësira sillet si uji (dendësia 1.00 g/cm³, kapaciteti termik specifik c = 4.18 J g⁻¹ K⁻¹), nxehtësia e transferuar është q = mcΔT, ku m është masa e tretësirës, jo e zinkut. Kur q pjesëtohet me numrin e moleve të reagentit kufizues — këtu CuSO₄, sepse zinku është në tepricë — merret ndryshimi i entalpisë: ΔH = −q ÷ n. Shenja është negative sepse energjia largohet nga sistemi që reagon.",
      "Nxehtësia humbet në mjedis edhe ndërsa reaksioni po ndodh, ndaj leximi më i lartë e nënvlerëson rritjen e vërtetë të temperaturës. Kjo korrigjohet duke ndërtuar grafikun temperaturë–kohë dhe duke e zgjatur (ekstrapoluar) vijën e ftohjes deri në çastin e përzierjes. Rezultatet tipike në klasë janë rreth −190 deri −210 kJ/mol, krahasuar me vlerën e pranuar prej rreth −217 kJ/mol."
    ],
    equation: "Zn(s) + CuSO₄(aq) → ZnSO₄(aq) + Cu(s)",
    equipment: ["Gotë polistireni me kapak, e vendosur në një gotë kimike 250 cm³", "Pipetë 25 cm³ me pompë pipete (ose cilindër matës 25 cm³)", "25.0 cm³ tretësirë sulfati bakri(II) 0.50 mol/dm³ (e dëmshme, irrituese, toksike për jetën ujore)", "Rreth 1.5 g pluhur zinku (në tepricë) në një enë peshimi — mbaje larg flakëve", "Termometër me saktësi 0.1 °C, ose sensor temperature me regjistrues të dhënash", "Kronometër", "Shkop përzierës", "Peshore (0.01 g)", "Syze mbrojtëse"],
    steps: [
      "Vendos syzet. Pesho rreth 1.5 g pluhur zinku në një enë peshimi dhe shëno masën. Sigurohu që të mos ketë flakë afër.",
      "Me pipetë, hidh 25.0 cm³ tretësirë sulfati bakri(II) në gotën e polistirenit brenda gotës kimike dhe vendos kapakun me termometrin të futur përmes tij.",
      "Nis kronometrin dhe shëno temperaturën çdo 30 sekonda për 3 minuta.",
      "Saktësisht në minutën e 3-të, hidh gjithë zinkun, vendos përsëri kapakun dhe përziej pa ndërprerje.",
      "Vazhdo të shënosh temperaturën çdo 30 sekonda deri në minutën e 10-të dhe shëno çdo ndryshim ngjyre.",
      "Ndërto grafikun temperaturë–kohë, vizato vijat e përshtatjes më të mirë para dhe pas përzierjes dhe ekstrapolo vijën e ftohjes deri në minutën e 3-të për të gjetur ΔT.",
      "Llogarit q = mcΔT me m = 25.0 g dhe c = 4.18 J g⁻¹ K⁻¹, pastaj n(CuSO₄) dhe ΔH = −q ÷ n në kJ/mol."
    ],
    predict: { q: "Si do të duket grafiku temperaturë–kohë pasi të shtohet zinku?", options: ["Një rritje e shpejtë deri në një maksimum, pastaj një rënie e ngadaltë", "Një rënie e vazhdueshme nën temperaturën fillestare", "Një vijë e sheshtë — reaksionet e zhvendosjes nuk kanë ndryshim energjie", "Një rritje e ngadaltë dhe e vazhdueshme gjatë gjithë 10 minutave"], answer: 0,
      result: "Temperatura rritet me shpejtësi rreth 20–25 °C brenda një ose dy minutash, pastaj bie ngadalë ndërsa gota humbet nxehtësi. Ngjyra blu zbehet deri pothuajse në të pangjyrë dhe në fund depozitohet një pluhur kafe bakri. Ekstrapolimi i vijës së ftohjes deri në minutën e 3-të jep një ΔT pak më të madh se leximi më i lartë." },
    why: { q: "Pse e ekstrapolojmë vijën e ftohjes deri në çastin e përzierjes, në vend që të përdorim thjesht temperaturën më të lartë?", answer: 0, options: [
      { t: "Nxehtësia humbet në mjedis ndërsa reaksioni ende po ndodh, ndaj leximi më i lartë është më i ulët se rritja e vërtetë", fb: "Saktë. Reaksionit i duhet kohë për të përfunduar dhe ndërkohë gota humbet nxehtësi. Ekstrapolimi vlerëson temperaturën që do të arrihej nëse e gjithë energjia do të çlirohej menjëherë." },
      { t: "Termometrit i duhet kohë të ngrohet, ndaj tregon shumë lart", fb: "Një termometër i ngadaltë do të tregonte më ulët, jo më lart. Arsyeja kryesore është humbja e nxehtësisë në mjedis gjatë reaksionit." },
      { t: "Zinku thith një pjesë të nxehtësisë, e cila duhet zbritur", fb: "Kapaciteti termik i 1.5 g zinku është shumë i vogël krahasuar me 25 g tretësirë. Ekstrapolimi korrigjon humbjen e nxehtësisë në mjedis me kalimin e kohës." },
      { t: "Që vlera e ΔH të dalë pozitive", fb: "Ekstrapolimi ndryshon madhësinë e ΔT, jo shenjën. ΔH mbetet negative sepse reaksioni është ekzotermik." }
    ] },
    hazards: ["Tretësira e sulfatit të bakrit(II) është e dëmshme nëse gëlltitet, irriton sytë dhe lëkurën dhe është toksike për jetën ujore.", "Pluhuri i zinkut është i ndezshëm dhe duhet mbajtur larg flakëve; ai është gjithashtu shumë toksik për jetën ujore.", "Përzierja nxehet (rreth 45 °C) dhe një gotë e lehtë mund të përmbyset lehtësisht."],
    precautions: ["Mbaj syze mbrojtëse gjatë gjithë kohës dhe përdor pompë pipete — mos thith kurrë me gojë.", "Mbaje pluhurin e zinkut larg llambave Bunsen dhe hidhe me kujdes që të mos ngrihet pluhur.", "Vendose gotën brenda gotës kimike që të mos përmbyset dhe përziej lehtë.", "Fshiji menjëherë derdhjet dhe laj duart në fund."],
    disposal: ["Lëri lëndët e ngurta të depozitohen, pastaj derdhe tretësirën në enën e mbetjeve të metaleve të rënda (bakër/zink) — jo në lavaman.", "Mblidhe bakrin dhe pluhurin e mbetur të zinkut në enën e mbetjeve të ngurta që jep mësuesi."],
    supervisionNote: "Mbikëqyrje e afërt: mësuesi e shpërndan pluhurin e zinkut larg flakëve dhe siguron që të gjitha mbetjet e bakrit dhe të zinkut të mblidhen.",
    clip: ["Sulfat bakri blu në një gotë të izoluar", "Hidh pluhur zinku dhe përziej", "Temperatura rritet, bluja zbehet, formohet bakër!"]
  }
},

/* ===== Bromine water test ===== */
{
  id: "alkenes", icon: "tubes", topic: "organic", grades: "11–12", gmin: 11, gmax: 12, level: 3,
  supervision: "demo", time: 15, eqType: "equation", predictAt: 2, ppe: ["goggles", "gloves"],
  demo: { s: "rack", tubes: [{ from: "#f59e0b", to: "#f8fafc" }, { from: "#f59e0b", to: "#f59e0b" }] },
  video: null,
  sources: [
    { org: "Royal Society of Chemistry", title: "Testing for unsaturation with bromine on a microscale", url: "https://edu.rsc.org/experiments/testing-for-unsaturation-with-bromine-on-a-microscale/552.article" },
    { org: "Royal Society of Chemistry", title: "Everything you need to introduce alkenes", url: "https://edu.rsc.org/cpd/everything-you-need-to-introduce-alkenes/4019525.article" },
    { org: "Royal Society of Chemistry", title: "Unsaturation in fats and oils", url: "https://edu.rsc.org/experiments/unsaturation-in-fats-and-oils/394.article" }
  ],
  en: {
    name: "Bromine Water Test", short: "Saturated vs unsaturated",
    hook: "One shake tells you whether a molecule has a carbon–carbon double bond.",
    aim: "Watch how bromine water distinguishes an alkene (cyclohexene) from an alkane (cyclohexane), and explain the result using addition reactions.",
    chemistry: [
      "Alkanes such as cyclohexane are saturated: every carbon atom is joined to the others by single C–C bonds only. Alkenes such as cyclohexene are unsaturated: they contain a C=C double bond, which is a region of high electron density.",
      "Bromine molecules are attracted to the electron-rich double bond. One of the two bonds in C=C breaks and a bromine atom adds to each carbon — an addition reaction. The orange bromine is used up and a colourless product forms, so the orange colour disappears within seconds. (With bromine water some 2-bromocyclohexan-1-ol also forms, because water joins in, but the colour change is the same.)",
      "Alkanes have no double bond, so they cannot take part in addition reactions. In normal room light they do not react with bromine water and the orange colour remains; they react with bromine only slowly in UV light, by substitution. This makes decolourising bromine water a quick test for C=C double bonds — it is also used to compare unsaturated fats and oils."
    ],
    equation: "C₆H₁₀ + Br₂ → C₆H₁₀Br₂",
    equipment: ["Working fume cupboard (sash lowered between steps)", "Dilute bromine water (about 0.01 mol/dm³, pale orange) — made up by the technician", "1 cm³ of cyclohexene (highly flammable, harmful)", "1 cm³ of cyclohexane (highly flammable, harmful)", "2 labelled test tubes with stoppers, in a rack", "Plastic dropping pipettes", "Sodium thiosulfate solution (0.1 mol/dm³) for spills and leftover bromine", "Goggles for everyone; nitrile gloves for the teacher"],
    steps: [
      "Everyone puts on goggles. Students stand back at a safe distance and watch through the fume cupboard glass.",
      "Inside the fume cupboard, the teacher adds about 1 cm³ of bromine water to each of the two labelled test tubes.",
      "The teacher adds about 1 cm³ of cyclohexene to the first tube and about 1 cm³ of cyclohexane to the second.",
      "The teacher stoppers both tubes, shakes them gently for a few seconds and stands them back in the rack.",
      "Students compare the colours of the two tubes, and of the two layers in each tube.",
      "Students record their observations and decide which hydrocarbon is unsaturated."
    ],
    predict: { q: "What will happen to the orange bromine water when each hydrocarbon is shaken with it?", options: ["Cyclohexene turns it colourless; cyclohexane leaves it orange", "Both turn it colourless", "Neither changes the orange colour", "Cyclohexane turns it colourless; cyclohexene leaves it orange"], answer: 0,
      result: "The tube with cyclohexene goes from orange to colourless within seconds of shaking. The tube with cyclohexane stays orange — the colour simply moves into the upper hydrocarbon layer, because bromine dissolves better in it than in water. Only the alkene has reacted." },
    why: { q: "Why does cyclohexene decolourise bromine water while cyclohexane does not?", answer: 0, options: [
      { t: "Cyclohexene has a C=C double bond, so bromine adds across it to form a colourless product", fb: "Correct. The electron-rich double bond attracts bromine; one bond breaks and each carbon gains a bromine atom. The bromine is used up, so the colour goes." },
      { t: "Cyclohexane dissolves the bromine more easily, which hides the colour", fb: "Bromine does dissolve in cyclohexane — that's why the top layer turns orange. Dissolving doesn't remove the colour; only a reaction does." },
      { t: "Cyclohexene has more hydrogen atoms to react with bromine", fb: "Cyclohexene (C₆H₁₀) has fewer hydrogen atoms than cyclohexane (C₆H₁₂). The difference is the double bond, not the hydrogens." },
      { t: "Alkanes never react with bromine under any conditions", fb: "Alkanes do react with bromine, but only slowly in UV light, by substitution. Without UV, no reaction happens in the time of the test." }
    ] },
    hazards: ["Bromine water is harmful and irritates the eyes, skin and lungs; it gives off bromine vapour, which is toxic if breathed in.", "Cyclohexene and cyclohexane are highly flammable liquids whose vapours are harmful and can cause drowsiness.", "The organic products are harmful and toxic to aquatic life."],
    precautions: ["Teacher demonstration only, carried out entirely in a working fume cupboard with the sash as low as possible.", "Keep all flames and sparks away from the hydrocarbons.", "Use small volumes (about 1 cm³), stopper the tubes before shaking and point them away from people.", "Everyone wears goggles; the teacher also wears nitrile gloves and keeps sodium thiosulfate solution ready for bromine spills."],
    disposal: ["The teacher pours the contents of both tubes into a labelled halogenated organic waste bottle kept in the fume cupboard — never down the sink.", "Leftover bromine water can be decolourised with sodium thiosulfate solution before disposal, following school procedures."],
    supervisionNote: "Teacher demonstration only, in a working fume cupboard, with students watching from a safe distance.",
    clip: ["Orange bromine water in two tubes", "Shake with an alkene and an alkane", "Alkene tube goes colourless; alkane stays orange"]
  },
  sq: {
    name: "Prova me ujë bromi", short: "Të ngopur apo të pangopur?",
    hook: "Një tundje e vetme të tregon nëse një molekulë ka lidhje dyfishe karbon–karbon.",
    aim: "Shiko si e dallon uji i bromit një alken (ciklohekseni) nga një alkan (cikloheksani) dhe shpjego rezultatin me anë të reaksioneve të adicionit.",
    chemistry: [
      "Alkanet si cikloheksani janë të ngopura: çdo atom karboni lidhet me të tjerët vetëm me lidhje njëfishe C–C. Alkenet si ciklohekseni janë të pangopura: ato përmbajnë një lidhje dyfishe C=C, e cila është një zonë me dendësi të lartë elektronesh.",
      "Molekulat e bromit tërhiqen nga lidhja dyfishe e pasur me elektrone. Njëra nga dy lidhjet e C=C këputet dhe te secili karbon shtohet një atom bromi — një reaksion adicioni. Bromi portokalli harxhohet dhe formohet një produkt i pangjyrë, ndaj ngjyra portokalli zhduket brenda pak sekondash. (Me ujë bromi formohet edhe pak 2-bromocikloheksan-1-ol, sepse në reaksion merr pjesë edhe uji, por ndryshimi i ngjyrës është i njëjtë.)",
      "Alkanet nuk kanë lidhje dyfishe, ndaj nuk mund të japin reaksione adicioni. Në dritën e zakonshme të dhomës ato nuk reagojnë me ujin e bromit dhe ngjyra portokalli mbetet; me bromin reagojnë vetëm ngadalë nën dritë UV, me zëvendësim. Prandaj çngjyrosja e ujit të bromit është një provë e shpejtë për lidhjet dyfishe C=C — ajo përdoret edhe për të krahasuar yndyrnat dhe vajrat e pangopura."
    ],
    equation: "C₆H₁₀ + Br₂ → C₆H₁₀Br₂",
    equipment: ["Kapë aspiruese (dollap tymi) që funksionon, me xhamin e ulur ndërmjet hapave", "Ujë bromi i holluar (rreth 0.01 mol/dm³, portokalli i zbehtë) — i përgatitur nga tekniku", "1 cm³ cikloheksen (shumë i ndezshëm, i dëmshëm)", "1 cm³ cikloheksan (shumë i ndezshëm, i dëmshëm)", "2 provëza të etiketuara me tapa, në mbajtëse", "Pipeta plastike me pika", "Tretësirë tiosulfati natriumi (0.1 mol/dm³) për derdhjet dhe bromin e mbetur", "Syze për të gjithë; doreza nitrili për mësuesin"],
    steps: [
      "Të gjithë vendosin syzet. Nxënësit qëndrojnë në një largësi të sigurt dhe vëzhgojnë përmes xhamit të kapës aspiruese.",
      "Brenda kapës aspiruese, mësuesi hedh rreth 1 cm³ ujë bromi në secilën nga dy provëzat e etiketuara.",
      "Mësuesi shton rreth 1 cm³ cikloheksen në provëzën e parë dhe rreth 1 cm³ cikloheksan në të dytën.",
      "Mësuesi i mbyll të dyja provëzat me tapë, i tund lehtë për disa sekonda dhe i vendos përsëri në mbajtëse.",
      "Nxënësit krahasojnë ngjyrat e dy provëzave, si dhe të dy shtresave në secilën provëz.",
      "Nxënësit shënojnë vëzhgimet dhe vendosin cili hidrokarbur është i pangopur."
    ],
    predict: { q: "Çfarë do të ndodhë me ujin portokalli të bromit kur tundet me secilin hidrokarbur?", options: ["Ciklohekseni e bën të pangjyrë; cikloheksani e lë portokalli", "Të dy e bëjnë të pangjyrë", "Asnjëri nuk e ndryshon ngjyrën portokalli", "Cikloheksani e bën të pangjyrë; ciklohekseni e lë portokalli"], answer: 0,
      result: "Provëza me cikloheksen kalon nga portokalli në të pangjyrë brenda pak sekondash pas tundjes. Provëza me cikloheksan mbetet portokalli — ngjyra thjesht kalon në shtresën e sipërme të hidrokarburit, sepse bromi tretet më mirë në të sesa në ujë. Ka reaguar vetëm alkeni." },
    why: { q: "Pse ciklohekseni e çngjyros ujin e bromit, ndërsa cikloheksani jo?", answer: 0, options: [
      { t: "Ciklohekseni ka një lidhje dyfishe C=C, ndaj bromi i shtohet asaj dhe formon një produkt të pangjyrë", fb: "Saktë. Lidhja dyfishe e pasur me elektrone tërheq bromin; njëra lidhje këputet dhe secili karbon fiton një atom bromi. Bromi harxhohet, ndaj ngjyra zhduket." },
      { t: "Cikloheksani e tret bromin më lehtë dhe kjo e fsheh ngjyrën", fb: "Bromi vërtet tretet në cikloheksan — prandaj shtresa e sipërme bëhet portokalli. Tretja nuk e heq ngjyrën; këtë e bën vetëm një reaksion." },
      { t: "Ciklohekseni ka më shumë atome hidrogjeni që reagojnë me bromin", fb: "Ciklohekseni (C₆H₁₀) ka më pak atome hidrogjeni se cikloheksani (C₆H₁₂). Ndryshimi është lidhja dyfishe, jo hidrogjenët." },
      { t: "Alkanet nuk reagojnë kurrë me bromin, në asnjë kusht", fb: "Alkanet reagojnë me bromin, por vetëm ngadalë nën dritë UV, me zëvendësim. Pa UV, gjatë kohës së provës nuk ndodh asnjë reaksion." }
    ] },
    hazards: ["Uji i bromit është i dëmshëm dhe irriton sytë, lëkurën dhe mushkëritë; ai lëshon avuj bromi, të cilët janë toksikë nëse thithen.", "Ciklohekseni dhe cikloheksani janë lëngje shumë të ndezshme, avujt e të cilëve janë të dëmshëm dhe mund të shkaktojnë përgjumje.", "Produktet organike janë të dëmshme dhe toksike për jetën ujore."],
    precautions: ["Vetëm demonstrim nga mësuesi, i kryer tërësisht në një kapë aspiruese që funksionon, me xhamin sa më poshtë.", "Mbaji të gjitha flakët dhe shkëndijat larg hidrokarbureve.", "Përdor sasi të vogla (rreth 1 cm³), mbylli provëzat me tapë para tundjes dhe drejtoji larg njerëzve.", "Të gjithë mbajnë syze; mësuesi mban edhe doreza nitrili dhe ka gati tretësirë tiosulfati natriumi për derdhjet e bromit."],
    disposal: ["Mësuesi e derdh përmbajtjen e të dyja provëzave në një shishe të etiketuar për mbetje organike të halogjenuara, që mbahet në kapën aspiruese — kurrë në lavaman.", "Uji i bromit që mbetet mund të çngjyroset me tretësirë tiosulfati natriumi para se të asgjësohet sipas procedurave të shkollës."],
    supervisionNote: "Vetëm demonstrim nga mësuesi, në një kapë aspiruese që funksionon, ndërsa nxënësit vëzhgojnë nga një largësi e sigurt.",
    clip: ["Ujë bromi portokalli në dy provëza", "Tunde me një alken dhe një alkan", "Provëza me alken çngjyroset; me alkan mbetet portokalli"]
  }
}
];


/* ---------- New experiments: electrochemistry and analysis (set 5) ---------- */
const EXP_NEW_5 = [
/* ===== Which liquids conduct? ===== */
{
  id: "conductivity", icon: "bulb", topic: "electro", grades: "7–9", gmin: 7, gmax: 9, level: 1,
  supervision: "supervised", time: 25, eqType: "equation", predictAt: 2, ppe: ["goggles"],
  demo: { s: "circuit", from: "#e0f2fe", to: "#e0f2fe", lit: true },
  video: null,
  sources: [
    { org: "Science World", title: "Conducting Currents", url: "https://www.scienceworld.ca/resource/conducting-currents/" },
    { org: "Harvard Natural Sciences Lecture Demonstrations", title: "Conductivity of Solutions", url: "https://sciencedemonstrations.fas.harvard.edu/presentations/conductivity-solutions" },
    { org: "Home Science Tools", title: "Does Salt Water Conduct Electricity? A Salt Water Conductivity Experiment", url: "https://www.homesciencetools.com/article/saltwater-circuit-project/" }
  ],
  en: {
    name: "Which Liquids Conduct?", short: "Ions carry electric current",
    hook: "Can a glass of salty water switch on a light? Let's find out.",
    aim: "Use a simple low-voltage circuit to find out which liquids conduct electricity, and link this to whether they contain ions that can move.",
    chemistry: [
      "An electric current is a flow of charge. In metal wires the charge is carried by electrons, but in a liquid it must be carried by ions — charged particles that are free to move. A liquid that conducts because it contains moving ions is called an electrolyte.",
      "When table salt (sodium chloride) dissolves, it splits into sodium ions (Na⁺) and chloride ions (Cl⁻). In the circuit the positive ions drift towards the negative electrode and the negative ions towards the positive electrode, so charge flows through the liquid and the bulb lights. Sugar dissolves as whole, uncharged molecules, so sugar water hardly conducts at all.",
      "Pure (distilled) water contains almost no ions, so it is a very poor conductor. Tap water contains small amounts of dissolved minerals, so it conducts a tiny bit. Vinegar contains ethanoic acid, which forms only a few ions, so it conducts weakly — the more free ions, the brighter the light."
    ],
    equation: "NaCl(s) → Na⁺(aq) + Cl⁻(aq)",
    equipment: ["Battery pack, 3–6 V (e.g. 3–4 AA cells in a holder) — never mains electricity", "Small torch bulb in a holder, or an LED module with a built-in resistor", "Two electrodes (carbon rods or stainless-steel strips) and three leads with crocodile clips", "Five small beakers, each with about 50 cm³ of: distilled water, tap water, salt water, sugar water and white vinegar", "Wash bottle of distilled water and paper towels", "Labels and a results table", "Safety goggles"],
    steps: [
      "Put on goggles. Connect the battery, bulb and two electrodes in a series circuit, leaving a gap between the electrodes.",
      "Touch the two electrodes together for a second to check that the bulb lights, then separate them again.",
      "Label the five beakers. Dip both electrodes into the distilled water, about 2 cm apart and not touching, and watch the bulb for a few seconds.",
      "Record the bulb as off, dim or bright. Lift the electrodes out, rinse them with distilled water and dry them.",
      "Test the tap water, sugar water, vinegar and salt water in the same way, rinsing the electrodes between each one.",
      "Disconnect the battery, then rank the liquids from best to worst conductor."
    ],
    predict: { q: "Which liquid will make the bulb shine most brightly?", options: ["Salt water", "Sugar water", "Distilled water", "They will all shine equally"], answer: 0,
      result: "Salt water lights the bulb brightly. Vinegar gives a dim glow, tap water only a faint glow or none (easier to see with an LED), and distilled water and sugar water leave the bulb off. Tiny bubbles may also appear on the electrodes in the salt water." },
    why: { q: "Why does salt water conduct but sugar water does not?", answer: 0, options: [
      { t: "Dissolved salt forms ions that can move and carry charge; sugar stays as uncharged molecules", fb: "Na⁺ and Cl⁻ ions drift towards the oppositely charged electrodes. Sugar molecules have no overall charge, so they can't carry a current." },
      { t: "Salt water contains free electrons from the salt", fb: "In solutions the charge is carried by ions, not by free electrons. Electrons only flow through the metal wires and electrodes." },
      { t: "Sugar is a solid, so it blocks the current", fb: "The sugar has dissolved, so it isn't a solid any more. It doesn't conduct because its molecules carry no charge." },
      { t: "Any liquid conducts — the sugar water just needs more time", fb: "Waiting doesn't help. A liquid only conducts if it contains charged particles that can move, and sugar water has almost none." }
    ] },
    hazards: ["Salt water and vinegar sting if they get in your eyes or a cut.", "If the bare ends of the leads touch, a short circuit can make the wires and battery hot.", "Mains electricity is deadly — it must never be used with liquids."],
    precautions: ["Wear goggles and use only the low-voltage battery pack.", "Keep the electrodes apart in the liquid and disconnect the battery when you have finished.", "Dry your hands and keep electrical parts away from spills.", "Never taste the solutions — no eating or drinking in the lab."],
    disposal: ["All the solutions can be poured down the sink with plenty of water.", "Rinse and dry the electrodes and return the circuit parts."],
    supervisionNote: "Low-voltage activity for students with a teacher present; the teacher should check that every circuit uses only the battery pack.",
    clip: ["Battery, bulb and a beaker of salt water", "Dip the two electrodes in", "The bulb lights — moving ions carry the charge!"]
  },
  sq: {
    name: "Cilat lëngje përcjellin rrymë?", short: "Jonet bartin rrymën elektrike",
    hook: "A mund të ndezë një llambë një gotë me ujë të kripur? Le ta zbulojmë.",
    aim: "Përdor një qark të thjeshtë me tension të ulët për të zbuluar cilat lëngje e përcjellin elektricitetin dhe lidhe këtë me praninë e joneve që lëvizin lirisht.",
    chemistry: [
      "Rryma elektrike është lëvizje e ngarkesave. Në telat metalikë ngarkesën e bartin elektronet, por në një lëng ajo duhet të bartet nga jonet — grimca të ngarkuara që lëvizin lirisht. Një lëng që përcjell rrymë sepse përmban jone në lëvizje quhet elektrolit.",
      "Kur kripa e gjellës (klorur natriumi) tretet, ndahet në jone natriumi (Na⁺) dhe jone klorur (Cl⁻). Në qark, jonet pozitive lëvizin drejt elektrodës negative dhe jonet negative drejt elektrodës pozitive, kështu ngarkesa kalon përmes lëngut dhe llamba ndizet. Sheqeri tretet si molekula të plota pa ngarkesë, ndaj uji me sheqer pothuajse nuk përcjell fare.",
      "Uji i pastër (i distiluar) nuk ka pothuajse fare jone, ndaj është përcjellës shumë i dobët. Uji i rubinetit përmban pak minerale të tretura, ndaj përcjell shumë pak. Uthulla përmban acid etanoik, që formon vetëm pak jone, ndaj përcjell dobët — sa më shumë jone të lira, aq më e fortë drita."
    ],
    equation: "NaCl(s) → Na⁺(aq) + Cl⁻(aq)",
    equipment: ["Bateri 3–6 V (p.sh. 3–4 bateri AA në mbajtëse) — kurrë rrymë nga priza", "Llambë e vogël dore në mbajtëse, ose modul LED me rezistencë të integruar", "Dy elektroda (shufra karboni ose shirita çeliku inoks) dhe tre tela me kapëse krokodil", "Pesë gota kimike të vogla, secila me rreth 50 cm³: ujë të distiluar, ujë rubineti, ujë me kripë, ujë me sheqer dhe uthull të bardhë", "Shishe larëse me ujë të distiluar dhe letër kuzhine", "Etiketa dhe tabelë rezultatesh", "Syze mbrojtëse"],
    steps: [
      "Vendos syzet. Lidh baterinë, llambën dhe dy elektrodat në një qark në seri, duke lënë një hapësirë midis elektrodave.",
      "Prek për një sekondë dy elektrodat me njëra-tjetrën për të kontrolluar që llamba ndizet, pastaj ndaji përsëri.",
      "Vendos etiketat te pesë gotat. Zhyti të dyja elektrodat në ujin e distiluar, rreth 2 cm larg njëra-tjetrës dhe pa u prekur, dhe shiko llambën për disa sekonda.",
      "Shëno nëse llamba është e fikur, ndriçon dobët apo fort. Nxirri elektrodat, shpëlaji me ujë të distiluar dhe thaji.",
      "Testo në të njëjtën mënyrë ujin e rubinetit, ujin me sheqer, uthullën dhe ujin me kripë, duke i shpëlarë elektrodat pas çdo lëngu.",
      "Shkëput baterinë dhe rendit lëngjet nga përcjellësi më i mirë te më i dobëti."
    ],
    predict: { q: "Cili lëng do ta bëjë llambën të ndriçojë më fort?", options: ["Uji me kripë", "Uji me sheqer", "Uji i distiluar", "Të gjithë do të ndriçojnë njësoj"], answer: 0,
      result: "Uji me kripë e ndez llambën fort. Uthulla jep një dritë të dobët, uji i rubinetit vetëm një dritë mezi të dukshme ose aspak (më lehtë për t'u parë me LED), ndërsa uji i distiluar dhe uji me sheqer e lënë llambën të fikur. Mbi elektrodat në ujin me kripë mund të shfaqen edhe flluska të vogla." },
    why: { q: "Pse uji me kripë përcjell rrymë, ndërsa uji me sheqer jo?", answer: 0, options: [
      { t: "Kripa e tretur formon jone që lëvizin dhe bartin ngarkesë; sheqeri mbetet në molekula pa ngarkesë", fb: "Jonet Na⁺ dhe Cl⁻ lëvizin drejt elektrodave me ngarkesë të kundërt. Molekulat e sheqerit nuk kanë ngarkesë, ndaj nuk mund të bartin rrymë." },
      { t: "Uji me kripë përmban elektrone të lira nga kripa", fb: "Në tretësira ngarkesën e bartin jonet, jo elektronet e lira. Elektronet rrjedhin vetëm nëpër telat metalikë dhe elektrodat." },
      { t: "Sheqeri është i ngurtë, ndaj e bllokon rrymën", fb: "Sheqeri është tretur, ndaj nuk është më i ngurtë. Nuk përcjell sepse molekulat e tij nuk kanë ngarkesë." },
      { t: "Çdo lëng përcjell — uji me sheqer thjesht ka nevojë për më shumë kohë", fb: "Pritja nuk ndihmon. Një lëng përcjell vetëm nëse përmban grimca të ngarkuara që lëvizin, dhe uji me sheqer pothuajse nuk ka të tilla." }
    ] },
    hazards: ["Uji me kripë dhe uthulla djegin nëse hyjnë në sy ose në një plagë.", "Nëse skajet e zhveshura të telave prekin njëri-tjetrin, krijohet qark i shkurtër që mund t'i nxehë telat dhe baterinë.", "Rryma e prizës është vdekjeprurëse — nuk duhet përdorur kurrë me lëngje."],
    precautions: ["Mbaj syze mbrojtëse dhe përdor vetëm baterinë me tension të ulët.", "Mbaji elektrodat larg njëra-tjetrës në lëng dhe shkëput baterinë kur të mbarosh.", "Thaji duart dhe mbaji pjesët elektrike larg derdhjeve.", "Mos i shijo kurrë tretësirat — në laborator nuk hahet dhe nuk pihet."],
    disposal: ["Të gjitha tretësirat mund të derdhen në lavaman me shumë ujë.", "Shpëlaji dhe thaji elektrodat dhe ktheji pjesët e qarkut."],
    supervisionNote: "Aktivitet me tension të ulët që nxënësit e kryejnë me praninë e mësuesit, i cili kontrollon që çdo qark të përdorë vetëm baterinë.",
    clip: ["Bateri, llambë dhe një gotë me ujë të kripur", "Zhyt të dyja elektrodat", "Llamba ndizet — jonet në lëvizje bartin ngarkesën!"]
  }
},

/* ===== Metal race in acid ===== */
{
  id: "reactivity", icon: "tubes", topic: "electro", grades: "9–10", gmin: 9, gmax: 10, level: 2,
  supervision: "close", time: 30, eqType: "equation", predictAt: 3, ppe: ["goggles"],
  demo: { s: "rack", tubes: [
    { from: "#f1f5f9", to: "#f1f5f9", bubbles: true },
    { from: "#f1f5f9", to: "#f1f5f9", bubbles: true },
    { from: "#f1f5f9", to: "#e6f4d7", bubbles: true },
    { from: "#f1f5f9", to: "#f1f5f9" }
  ] },
  video: null,
  sources: [
    { org: "Royal Society of Chemistry", title: "Reactions of metals with acids producing salts", url: "https://edu.rsc.org/experiments/reactions-of-metals-with-acids-producing-salts/446.article" },
    { org: "Royal Society of Chemistry", title: "Microscale reactions of metals with acids – teacher notes", url: "https://edu.rsc.org/download?ac=513926" },
    { org: "University of Washington, Department of Chemistry", title: "Metals with Acid (lecture demonstration)", url: "https://chem.washington.edu/lecture-demos/metals-acid" }
  ],
  en: {
    name: "Metal Race in Acid", short: "The reactivity series",
    hook: "Four metals, one acid — which wins the bubble race, and which doesn't even start?",
    aim: "Compare how magnesium, zinc, iron and copper react with dilute hydrochloric acid and put them in order of reactivity.",
    chemistry: [
      "Many metals react with acids to make a salt and hydrogen gas: metal + acid → salt + hydrogen. With hydrochloric acid the salt is a chloride — magnesium makes magnesium chloride, zinc makes zinc chloride and iron makes iron(II) chloride.",
      "Metals do not all react at the same speed. The more reactive a metal, the more easily its atoms lose electrons to become positive ions, so the faster it fizzes and the more heat it gives out. Arranging metals by how vigorously they react gives the reactivity series: magnesium > zinc > iron > (hydrogen) > copper.",
      "Copper is below hydrogen in the reactivity series, so it cannot push hydrogen out of the acid — there is no reaction at all. The bubbles in the other tubes are hydrogen: hydrogen ions (H⁺) from the acid gain electrons from the metal and pair up to form H₂ molecules."
    ],
    equation: "Mg(s) + 2HCl(aq) → MgCl₂(aq) + H₂(g)",
    equipment: ["Small equal-sized pieces (about 1 cm × 0.5 cm) of magnesium ribbon, zinc foil, iron foil and copper foil, cleaned with emery paper", "Dilute hydrochloric acid, 1 mol/dm³ (can irritate eyes and skin) — 20 cm³", "Four test tubes in a rack, with labels", "10 cm³ measuring cylinder", "Thermometer (−10 to 110 °C)", "Tweezers", "Timer", "Safety goggles"],
    steps: [
      "Put on goggles. Stand four test tubes in a rack and label them Mg, Zn, Fe and Cu.",
      "Use the measuring cylinder to add 5 cm³ of 1 mol/dm³ hydrochloric acid to each tube.",
      "Measure and record the starting temperature of the acid in each tube.",
      "Use tweezers to drop one piece of each metal into its labelled tube, one straight after another.",
      "Watch for 3–5 minutes. Rate the bubbling in each tube from 0 (none) to 5 (very vigorous).",
      "Measure the highest temperature reached in each tube and work out the temperature rise.",
      "Put the metals in order of reactivity, from most to least reactive."
    ],
    predict: { q: "Which metal will fizz the most in the acid?", options: ["Magnesium", "Copper", "Iron", "They will all fizz the same"], answer: 0,
      result: "Magnesium fizzes vigorously, gets smaller and may disappear completely, and its tube warms up by several degrees. Zinc bubbles steadily, iron gives only a few slow bubbles, and copper shows no change at all." },
    why: { q: "Why is there no reaction in the tube with copper?", answer: 0, options: [
      { t: "Copper is less reactive than hydrogen, so it cannot displace hydrogen from the acid", fb: "Only metals above hydrogen in the reactivity series react with dilute acids to give hydrogen. Copper is below it." },
      { t: "The copper piece was too small", fb: "All the pieces were the same size. Even a large lump of copper doesn't react with dilute hydrochloric acid." },
      { t: "Copper has a waterproof coating", fb: "There is no coating — copper simply isn't reactive enough to replace hydrogen in the acid." },
      { t: "The acid had already been used up by the other metals", fb: "Each tube had its own fresh acid. The copper tube didn't react because copper is less reactive than hydrogen." }
    ] },
    hazards: ["Hydrochloric acid, even when dilute, irritates the eyes and stings cuts on the skin.", "Hydrogen gas is extremely flammable.", "Magnesium warms the acid and can cause small splashes as it fizzes."],
    precautions: ["Wear goggles throughout and keep your face away from the mouths of the tubes.", "Keep flames away and never put a bung in a tube that is producing gas.", "Use tweezers to handle the metals and wipe up spills straight away.", "Wash your hands at the end."],
    disposal: ["Pour the liquids into the waste beaker provided by your teacher, keeping any unreacted metal in the tube.", "Rinse unreacted metal pieces with water and return them — never put solid metal down the sink."],
    supervisionNote: "The teacher should supervise closely, dispense the acid and make sure no flames are lit while hydrogen is being produced.",
    clip: ["Mg, Zn, Fe and Cu in dilute acid", "Watch the bubble race begin", "Magnesium fizzes fastest — copper does nothing!"]
  },
  sq: {
    name: "Gara e metaleve në acid", short: "Seria e aktivitetit të metaleve",
    hook: "Katër metale, një acid — cili fiton garën e flluskave dhe cili as nuk niset?",
    aim: "Krahaso si reagojnë magnezi, zinku, hekuri dhe bakri me acid klorhidrik të holluar dhe renditi sipas aktivitetit.",
    chemistry: [
      "Shumë metale reagojnë me acidet dhe formojnë një kripë dhe gaz hidrogjen: metal + acid → kripë + hidrogjen. Me acidin klorhidrik kripa është një klorur — magnezi formon klorur magnezi, zinku klorur zinku dhe hekuri klorur hekuri(II).",
      "Metalet nuk reagojnë të gjitha me të njëjtën shpejtësi. Sa më aktiv të jetë një metal, aq më lehtë i humbasin atomet e tij elektronet për t'u bërë jone pozitive, ndaj shkumëzon më shpejt dhe çliron më shumë nxehtësi. Kur metalet renditen sipas fuqisë së reaksionit, fitohet seria e aktivitetit: magnez > zink > hekur > (hidrogjen) > bakër.",
      "Bakri ndodhet poshtë hidrogjenit në serinë e aktivitetit, ndaj nuk mund ta zhvendosë hidrogjenin nga acidi — nuk ndodh asnjë reaksion. Flluskat në provëzat e tjera janë hidrogjen: jonet e hidrogjenit (H⁺) të acidit marrin elektrone nga metali dhe bashkohen në molekula H₂."
    ],
    equation: "Mg(s) + 2HCl(aq) → MgCl₂(aq) + H₂(g)",
    equipment: ["Copa të vogla me madhësi të njëjtë (rreth 1 cm × 0.5 cm) shiriti magnezi, flete zinku, flete hekuri dhe flete bakri, të pastruara me letër zmerile", "Acid klorhidrik i holluar, 1 mol/dm³ (mund të irritojë sytë dhe lëkurën) — 20 cm³", "Katër provëza në mbajtëse, me etiketa", "Cilindër matës 10 cm³", "Termometër (−10 deri në 110 °C)", "Piskatore", "Kronometër", "Syze mbrojtëse"],
    steps: [
      "Vendos syzet. Vendos katër provëza në mbajtëse dhe shënoji Mg, Zn, Fe dhe Cu.",
      "Me cilindrin matës, hidh 5 cm³ acid klorhidrik 1 mol/dm³ në secilën provëz.",
      "Mat dhe shëno temperaturën fillestare të acidit në secilën provëz.",
      "Me piskatore, fut një copë nga secili metal në provëzën e vet, njërën menjëherë pas tjetrës.",
      "Vëzhgo për 3–5 minuta. Vlerëso flluskimin në secilën provëz nga 0 (aspak) deri në 5 (shumë i fortë).",
      "Mat temperaturën më të lartë në secilën provëz dhe llogarit sa u rrit.",
      "Rendit metalet sipas aktivitetit, nga më aktivi te më pak aktivi."
    ],
    predict: { q: "Cili metal do të shkumëzojë më shumë në acid?", options: ["Magnezi", "Bakri", "Hekuri", "Të gjithë do të shkumëzojnë njësoj"], answer: 0,
      result: "Magnezi shkumëzon fort, zvogëlohet dhe mund të zhduket plotësisht, ndërsa provëza e tij ngrohet me disa gradë. Zinku flluskon në mënyrë të qëndrueshme, hekuri jep vetëm pak flluska të ngadalta dhe bakri nuk ndryshon fare." },
    why: { q: "Pse nuk ndodh asnjë reaksion në provëzën me bakër?", answer: 0, options: [
      { t: "Bakri është më pak aktiv se hidrogjeni, ndaj nuk mund ta zhvendosë hidrogjenin nga acidi", fb: "Vetëm metalet mbi hidrogjenin në serinë e aktivitetit reagojnë me acidet e holluara duke çliruar hidrogjen. Bakri është poshtë tij." },
      { t: "Copa e bakrit ishte shumë e vogël", fb: "Të gjitha copat kishin të njëjtën madhësi. Edhe një copë e madhe bakri nuk reagon me acid klorhidrik të holluar." },
      { t: "Bakri ka një shtresë mbrojtëse që nuk e lë acidin ta prekë", fb: "Nuk ka asnjë shtresë — bakri thjesht nuk është mjaft aktiv për të zëvendësuar hidrogjenin në acid." },
      { t: "Acidi ishte harxhuar tashmë nga metalet e tjera", fb: "Çdo provëz kishte acidin e vet të freskët. Provëza me bakër nuk reagoi sepse bakri është më pak aktiv se hidrogjeni." }
    ] },
    hazards: ["Acidi klorhidrik, edhe kur është i holluar, irriton sytë dhe djeg plagët në lëkurë.", "Gazi hidrogjen është jashtëzakonisht i ndezshëm.", "Magnezi e ngroh acidin dhe mund të shkaktojë spërkatje të vogla ndërsa shkumëzon."],
    precautions: ["Mbaj syze mbrojtëse gjatë gjithë kohës dhe mbaje fytyrën larg grykës së provëzave.", "Mbaji flakët larg dhe mos vendos kurrë tapë në një provëz që prodhon gaz.", "Përdor piskatoren për metalet dhe fshi menjëherë çdo derdhje.", "Laj duart në fund."],
    disposal: ["Derdhi lëngjet në enën e mbetjeve që jep mësuesi, duke e mbajtur metalin e mbetur në provëz.", "Shpëlaji me ujë copat e metalit që nuk reaguan dhe ktheji — mos hidh kurrë metal të ngurtë në lavaman."],
    supervisionNote: "Mësuesi duhet të mbikëqyrë nga afër, të shpërndajë acidin dhe të sigurohet që nuk ka flakë të ndezura ndërsa prodhohet hidrogjen.",
    clip: ["Mg, Zn, Fe dhe Cu në acid të holluar", "Fillon gara e flluskave", "Magnezi shkumëzon më shpejt — bakri nuk lëviz!"]
  }
},

/* ===== Splitting water ===== */
{
  id: "waterelectrolysis", icon: "bolt", topic: "electro", grades: "9–11", gmin: 9, gmax: 11, level: 2,
  supervision: "close", time: 40, eqType: "equation", predictAt: 3, ppe: ["goggles"],
  demo: { s: "circuit", from: "#e0f2fe", to: "#e0f2fe", bubbles: true },
  video: null,
  sources: [
    { org: "Royal Society of Chemistry", title: "Electrolysis using a microscale Hoffman apparatus", url: "https://edu.rsc.org/experiments/electrolysis-using-a-microscale-hoffman-apparatus/541.article" },
    { org: "University of Washington, Department of Chemistry", title: "Electrolysis of Water (lecture demonstration)", url: "https://chem.washington.edu/lecture-demos/electrolysis-water" },
    { org: "American Chemical Society", title: "Electrolysis of Water — High School Energy", url: "https://highschoolenergy.acs.org/how-do-we-use-energy/electrolysis-of-water.html" }
  ],
  en: {
    name: "Splitting Water", short: "Electrolysis of water",
    hook: "Use a low-voltage current to pull water apart into two different gases.",
    aim: "Electrolyse water containing sodium sulfate, collect the gas made at each electrode and compare their volumes.",
    chemistry: [
      "Pure water barely conducts electricity, so a little sodium sulfate is dissolved in it to provide ions. During electrolysis an electric current drives a reaction that would not happen by itself: water molecules are broken down into hydrogen and oxygen.",
      "At the negative electrode (cathode), water gains electrons and hydrogen gas forms. At the positive electrode (anode), water loses electrons and oxygen gas forms. The sodium and sulfate ions are not discharged — sodium is far more reactive than hydrogen, and sulfate ions are much harder to discharge than water — so the sodium sulfate is left unchanged.",
      "Each water molecule contains two hydrogen atoms for every oxygen atom, so electrolysis gives two volumes of hydrogen for every one volume of oxygen. The gases can be identified: hydrogen burns with a squeaky pop and oxygen relights a glowing splint."
    ],
    equation: "2H₂O(l) → 2H₂(g) + O₂(g)",
    equipment: ["Sodium sulfate solution, about 0.5 mol/dm³ (low hazard) — about 200 cm³", "Electrolysis cell (a beaker or plastic tub) with two graphite (carbon) rod electrodes", "Two small test tubes, to be filled with the solution and inverted over the electrodes", "Low-voltage DC power supply set to 6–12 V, and two leads with crocodile clips", "Clamp stand or holder to keep the tubes upright", "Wooden splints and a flame, used only by the teacher for the gas tests", "Marker pen and ruler", "Safety goggles"],
    steps: [
      "Put on goggles. Pour the sodium sulfate solution into the cell until the graphite electrodes are covered by about 3 cm, making sure the electrodes don't touch.",
      "Fill both small test tubes to the brim with the solution, close each with a finger and turn it upside down over one electrode without letting in any air. Clamp the tubes upright.",
      "With the power supply switched off, connect the electrodes to it. Mark which tube is over the negative (−) electrode.",
      "Switch on at 6–12 V and watch both electrodes closely.",
      "After 10–15 minutes, mark the gas level in each tube, switch off and compare the volumes.",
      "The teacher lifts out the tube from the negative electrode, keeping it upside down, and holds a lighted splint at its mouth.",
      "The teacher then tests the tube from the positive electrode with a glowing splint."
    ],
    predict: { q: "When the current flows, which tube will collect more gas?", options: ["The tube over the negative electrode — about twice as much", "The tube over the positive electrode — about twice as much", "Both tubes will collect the same amount", "No gas will form — water can't be split"], answer: 0,
      result: "Bubbles stream from both electrodes, and the tube over the negative electrode fills about twice as fast. Its gas (hydrogen) burns with a squeaky pop, while the gas from the positive electrode (oxygen) relights a glowing splint. The oxygen volume is often a little less than half, because oxygen dissolves slightly in water and some reacts with the carbon electrode." },
    why: { q: "Why is there twice as much gas at the negative electrode?", answer: 0, options: [
      { t: "Water contains two hydrogen atoms for every oxygen atom, so twice as much hydrogen as oxygen is released", fb: "2H₂O → 2H₂ + O₂: two molecules of hydrogen for every one of oxygen, and equal numbers of gas molecules take up equal volumes." },
      { t: "The negative electrode is bigger", fb: "Both electrodes are the same size. The 2:1 ratio comes from the formula of water, H₂O." },
      { t: "The hydrogen comes from the sodium sulfate", fb: "The sodium sulfate only helps the water conduct and is left unchanged. Both gases come from water molecules." },
      { t: "Oxygen is heavier, so most of it stays in the solution", fb: "Oxygen does dissolve slightly, but that only explains a small difference. The main reason is the 2:1 ratio of hydrogen to oxygen atoms in water." }
    ] },
    hazards: ["Hydrogen is extremely flammable, and a mixture of hydrogen and oxygen explodes when lit.", "Electrical equipment is being used close to water.", "Lighted and glowing splints can cause burns."],
    precautions: ["Use only a low-voltage supply, keep plugs and sockets dry and switch off before touching the electrodes.", "Collect the two gases in separate tubes and only in small volumes — never mix them.", "Only the teacher carries out the splint tests, while students watch from a safe distance.", "Wear goggles throughout and wash your hands at the end."],
    disposal: ["The sodium sulfate solution can be kept for reuse or poured down the sink with plenty of water.", "Rinse and dry the electrodes; put used splints in a beaker of water before binning them."],
    supervisionNote: "Close supervision is needed: the teacher checks the circuits, keeps flames away during electrolysis and carries out the gas tests.",
    clip: ["Water, carbon electrodes and a power supply", "Switch on the current", "Bubbles rise — twice as much hydrogen as oxygen!"]
  },
  sq: {
    name: "Ndarja e ujit", short: "Elektroliza e ujit",
    hook: "Përdor një rrymë me tension të ulët për ta ndarë ujin në dy gazra të ndryshëm.",
    aim: "Elektrolizo ujë që përmban sulfat natriumi, mblidh gazin që formohet te secila elektrodë dhe krahaso vëllimet e tyre.",
    chemistry: [
      "Uji i pastër pothuajse nuk e përcjell elektricitetin, ndaj në të tretet pak sulfat natriumi që siguron jone. Gjatë elektrolizës, rryma elektrike shkakton një reaksion që nuk do të ndodhte vetvetiu: molekulat e ujit zbërthehen në hidrogjen dhe oksigjen.",
      "Te elektroda negative (katoda), uji merr elektrone dhe formohet gaz hidrogjen. Te elektroda pozitive (anoda), uji humbet elektrone dhe formohet gaz oksigjen. Jonet e natriumit dhe jonet sulfat nuk shkarkohen — natriumi është shumë më aktiv se hidrogjeni, dhe jonet sulfat shkarkohen shumë më vështirë se uji — ndaj sulfati i natriumit mbetet i pandryshuar.",
      "Çdo molekulë uji ka dy atome hidrogjeni për çdo atom oksigjeni, ndaj elektroliza jep dy vëllime hidrogjen për çdo vëllim oksigjen. Gazrat mund të identifikohen: hidrogjeni digjet me një plasje të vogël me fishkëllimë, kurse oksigjeni rindez një cifël druri me prush."
    ],
    equation: "2H₂O(l) → 2H₂(g) + O₂(g)",
    equipment: ["Tretësirë sulfati natriumi, rreth 0.5 mol/dm³ (rrezik i ulët) — rreth 200 cm³", "Enë elektrolize (gotë kimike ose enë plastike) me dy elektroda shufra grafiti (karboni)", "Dy provëza të vogla, që do të mbushen me tretësirë dhe do të përmbysen mbi elektrodat", "Burim rryme të vazhduar me tension të ulët, i vendosur në 6–12 V, dhe dy tela me kapëse krokodil", "Mbajtëse me kapëse për t'i mbajtur provëzat drejt", "Cifla druri dhe një flakë, që i përdor vetëm mësuesi për testet e gazrave", "Shënues dhe vizore", "Syze mbrojtëse"],
    steps: [
      "Vendos syzet. Hidh tretësirën e sulfatit të natriumit në enë derisa elektrodat e grafitit të mbulohen rreth 3 cm, duke u siguruar që elektrodat të mos prekin njëra-tjetrën.",
      "Mbushi deri në buzë të dyja provëzat me tretësirë, mbylli me gisht dhe përmbysi secilën mbi një elektrodë pa lënë të hyjë ajër. Fiksoji provëzat drejt me kapëse.",
      "Me burimin e rrymës të fikur, lidh elektrodat me të. Shëno cila provëz ndodhet mbi elektrodën negative (−).",
      "Ndize burimin në 6–12 V dhe vëzhgo me kujdes të dyja elektrodat.",
      "Pas 10–15 minutash, shëno nivelin e gazit në secilën provëz, fike burimin dhe krahaso vëllimet.",
      "Mësuesi e nxjerr provëzën e elektrodës negative, duke e mbajtur me grykë poshtë, dhe afron një cifël të ndezur te gryka e saj.",
      "Pastaj mësuesi teston provëzën e elektrodës pozitive me një cifël me prush."
    ],
    predict: { q: "Kur kalon rryma, cila provëz do të mbledhë më shumë gaz?", options: ["Provëza mbi elektrodën negative — rreth dy herë më shumë", "Provëza mbi elektrodën pozitive — rreth dy herë më shumë", "Të dyja provëzat do të mbledhin njësoj", "Nuk do të formohet gaz — uji nuk mund të ndahet"], answer: 0,
      result: "Nga të dyja elektrodat ngrihen flluska, dhe provëza mbi elektrodën negative mbushet rreth dy herë më shpejt. Gazi i saj (hidrogjeni) digjet me një plasje të vogël me fishkëllimë, ndërsa gazi nga elektroda pozitive (oksigjeni) rindez ciflën me prush. Vëllimi i oksigjenit shpesh del pak më i vogël se gjysma, sepse oksigjeni tretet pak në ujë dhe një pjesë reagon me elektrodën e karbonit." },
    why: { q: "Pse te elektroda negative ka dy herë më shumë gaz?", answer: 0, options: [
      { t: "Uji ka dy atome hidrogjeni për çdo atom oksigjeni, ndaj çlirohet dy herë më shumë hidrogjen se oksigjen", fb: "2H₂O → 2H₂ + O₂: dy molekula hidrogjeni për çdo molekulë oksigjeni, dhe numra të njëjtë molekulash gazi zënë vëllime të njëjta." },
      { t: "Elektroda negative është më e madhe", fb: "Të dyja elektrodat kanë të njëjtën madhësi. Raporti 2:1 vjen nga formula e ujit, H₂O." },
      { t: "Hidrogjeni vjen nga sulfati i natriumit", fb: "Sulfati i natriumit vetëm e ndihmon ujin të përcjellë rrymë dhe mbetet i pandryshuar. Të dy gazrat vijnë nga molekulat e ujit." },
      { t: "Oksigjeni është më i rëndë, ndaj pjesa më e madhe e tij mbetet në tretësirë", fb: "Oksigjeni tretet pak, por kjo shpjegon vetëm një ndryshim të vogël. Arsyeja kryesore është raporti 2:1 i atomeve të hidrogjenit me ato të oksigjenit në ujë." }
    ] },
    hazards: ["Hidrogjeni është jashtëzakonisht i ndezshëm, dhe një përzierje hidrogjeni me oksigjen shpërthen kur ndizet.", "Pajisjet elektrike përdoren pranë ujit.", "Ciflat e ndezura dhe me prush mund të shkaktojnë djegie."],
    precautions: ["Përdor vetëm burim me tension të ulët, mbaji prizat dhe spinat të thata dhe fike rrymën para se të prekësh elektrodat.", "Mblidhi të dy gazrat në provëza të veçanta dhe vetëm në sasi të vogla — mos i përziej kurrë.", "Testet me cifla i kryen vetëm mësuesi, ndërsa nxënësit vëzhgojnë nga një distancë e sigurt.", "Mbaj syze mbrojtëse gjatë gjithë kohës dhe laj duart në fund."],
    disposal: ["Tretësira e sulfatit të natriumit mund të ruhet për ripërdorim ose të derdhet në lavaman me shumë ujë.", "Shpëlaji dhe thaji elektrodat; futi ciflat e përdorura në një gotë me ujë para se t'i hedhësh në kosh."],
    supervisionNote: "Kërkohet mbikëqyrje e afërt: mësuesi kontrollon qarqet, mban flakët larg gjatë elektrolizës dhe kryen testet e gazrave.",
    clip: ["Ujë, elektroda karboni dhe burim rryme", "Ndiz rrymën", "Ngrihen flluska — dy herë më shumë hidrogjen se oksigjen!"]
  }
},

/* ===== Daniell cell ===== */
{
  id: "daniell", icon: "battery", topic: "electro", grades: "11–12", gmin: 11, gmax: 12, level: 3,
  supervision: "close", time: 45, eqType: "equation", predictAt: 4, ppe: ["goggles", "gloves"],
  demo: { s: "circuit", from: "#60a5fa", to: "#60a5fa", lit: true, coat: "#b45309" },
  video: null,
  sources: [
    { org: "Nuffield Foundation", title: "Making and testing electrochemical cells (Advanced Applied Science)", url: "https://www.tsfx.edu.au/resources/P_-_Daniell-Cell_-_Nuffield_Foundation_-_11_Cells_and_batteries.pdf" },
    { org: "Royal Society of Chemistry", title: "Electrochemical cells — practical videos, 16–18 students", url: "https://edu.rsc.org/practical/electrochemical-cells-practical-videos-16-18-students/4014323.article" },
    { org: "LibreTexts Chemistry", title: "16.2: Galvanic cells and electrodes", url: "https://chem.libretexts.org/Bookshelves/General_Chemistry/Chem1_(Lower)/16:_Electrochemistry/16.02:_Galvanic_cells_and_Electrodes" }
  ],
  en: {
    name: "Build a Daniell Cell", short: "Electrochemical cells & E°",
    hook: "Two metals, two solutions and a strip of wet paper — and you've built a battery.",
    aim: "Build a zinc–copper (Daniell) cell with a salt bridge, measure its voltage and compare it with the value predicted from standard electrode potentials.",
    chemistry: [
      "A Daniell cell has two half-cells: a zinc strip in zinc sulfate solution and a copper strip in copper(II) sulfate solution. Zinc is more reactive, so it is oxidised: Zn → Zn²⁺ + 2e⁻. The electrons travel through the external wire and voltmeter to the copper, where copper(II) ions are reduced: Cu²⁺ + 2e⁻ → Cu. Zinc is therefore the negative electrode (anode) and copper the positive electrode (cathode).",
      "The salt bridge completes the circuit without letting the solutions mix. Ions move through it to keep each half-cell electrically neutral: negative ions (NO₃⁻ or Cl⁻) drift towards the zinc half-cell, where Zn²⁺ ions are building up, and positive ions (K⁺ or Na⁺) drift towards the copper half-cell, where Cu²⁺ ions are being removed. Without the salt bridge no current flows and the reading drops to zero.",
      "The voltage can be predicted from standard electrode potentials: E°(Cu²⁺/Cu) = +0.34 V and E°(Zn²⁺/Zn) = −0.76 V, so E°cell = 0.34 − (−0.76) = +1.10 V. Real readings are usually a little lower, because the solutions are not exactly at standard conditions and the metal surfaces are not perfectly clean; changing the concentration of either solution also shifts the voltage slightly."
    ],
    equation: "(−) Zn → Zn²⁺ + 2e⁻   ·   (+) Cu²⁺ + 2e⁻ → Cu   ·   E° = +1.10 V",
    equipment: ["Zinc strip and copper strip (about 1 cm × 5 cm), cleaned with emery paper", "Zinc sulfate solution, 1.0 mol/dm³ (irritant to eyes) — 50 cm³", "Copper(II) sulfate solution, 1.0 mol/dm³ (harmful, irritant) — 50 cm³", "Two 100 cm³ beakers", "Strip of filter paper soaked in potassium nitrate solution (or sodium chloride solution) to act as a salt bridge", "High-resistance digital voltmeter and two leads with crocodile clips", "Emery paper and tweezers", "Safety goggles and gloves"],
    steps: [
      "Put on goggles and gloves. Clean the zinc and copper strips with emery paper until they are shiny.",
      "Pour about 50 cm³ of zinc sulfate solution into one beaker and about 50 cm³ of copper(II) sulfate solution into the other. Stand the beakers side by side.",
      "Put the zinc strip into the zinc sulfate and the copper strip into the copper(II) sulfate.",
      "Connect the copper to the voltmeter's positive (+) terminal and the zinc to its negative (COM) terminal. Note the reading before the salt bridge is added.",
      "Use tweezers to lay the soaked filter-paper strip across the beakers so that one end dips into each solution.",
      "Read the voltmeter and record the voltage every minute for 5 minutes.",
      "Lift the salt bridge out and watch the reading, then put it back. Swap the two leads and note what happens to the sign of the reading.",
      "Compare your reading with the predicted value of +1.10 V and suggest reasons for any difference."
    ],
    predict: { q: "What will the voltmeter read once the salt bridge connects the two beakers?", options: ["About 1.1 V, with copper as the positive electrode", "0 V — the solutions must mix first", "About 12 V, like a car battery", "About 1.1 V, with zinc as the positive electrode"], answer: 0,
      result: "Before the salt bridge is added the reading is 0 V. As soon as the soaked paper links the beakers, the voltmeter jumps to about 1.0–1.1 V with copper positive. Removing the bridge drops the reading back to zero, and swapping the leads simply makes the reading negative." },
    why: { q: "Why does the cell only work when the salt bridge is in place?", answer: 0, options: [
      { t: "The salt bridge lets ions move between the half-cells, completing the circuit and keeping each solution neutral", fb: "Electrons flow through the wire; ions flow through the bridge. Anions move towards the zinc half-cell and cations towards the copper half-cell, so charge never builds up." },
      { t: "Electrons travel through the salt bridge from zinc to copper", fb: "Electrons can't travel through a solution. They flow through the external wire, while the salt bridge carries ions." },
      { t: "The salt bridge supplies the energy for the cell", fb: "The energy comes from the redox reaction between zinc and copper(II) ions. The bridge only completes the circuit." },
      { t: "Potassium nitrate reacts with the zinc to produce the voltage", fb: "The potassium and nitrate ions are spectator ions that just carry charge. The voltage comes from the difference between the two electrode potentials." }
    ] },
    hazards: ["Copper(II) sulfate solution is harmful if swallowed, irritates the eyes and skin, and is toxic to aquatic life.", "Zinc sulfate solution can seriously irritate the eyes and is toxic to aquatic life.", "Potassium nitrate is an oxidiser: filter paper soaked in it burns fiercely if it dries out.", "Sharp edges of the metal strips can cut."],
    precautions: ["Wear goggles and gloves, and use tweezers to handle the salt bridge.", "Keep the soaked filter paper away from flames and never leave it to dry out on the bench.", "Wipe up drips at once and wash your hands at the end.", "Never pour the metal salt solutions down the sink."],
    disposal: ["Pour the zinc sulfate and copper(II) sulfate solutions into the separate labelled containers provided for reuse or collection.", "Rinse the salt bridge paper thoroughly with water before putting it in the bin.", "Rinse, dry and keep the metal strips for reuse."],
    supervisionNote: "Students can build the cell themselves, but the teacher should supervise closely, dispense the solutions and collect all metal-salt waste.",
    clip: ["Zinc in ZnSO₄, copper in CuSO₄", "Add the salt bridge, connect the meter", "Electrons flow from zinc to copper — about 1.1 V!"]
  },
  sq: {
    name: "Ndërto qelizën e Danielit", short: "Qelizat elektrokimike dhe E°",
    hook: "Dy metale, dy tretësira dhe një shirit letre të lagur — dhe ke ndërtuar një bateri.",
    aim: "Ndërto një qelizë zink–bakër (qelizën e Danielit) me urë kripe, mat tensionin e saj dhe krahasoje me vlerën e parashikuar nga potencialet standarde të elektrodave.",
    chemistry: [
      "Qeliza e Danielit ka dy gjysmëqeliza: një shirit zinku në tretësirë sulfati zinku dhe një shirit bakri në tretësirë sulfati bakri(II). Zinku është më aktiv, ndaj oksidohet: Zn → Zn²⁺ + 2e⁻. Elektronet kalojnë nëpër telin e jashtëm dhe voltmetrin drejt bakrit, ku jonet e bakrit(II) reduktohen: Cu²⁺ + 2e⁻ → Cu. Prandaj zinku është elektroda negative (anoda) dhe bakri elektroda pozitive (katoda).",
      "Ura e kripës e mbyll qarkun pa i lënë tretësirat të përzihen. Jonet lëvizin përmes saj për ta mbajtur secilën gjysmëqelizë elektrikisht neutrale: jonet negative (NO₃⁻ ose Cl⁻) shkojnë drejt gjysmëqelizës së zinkut, ku shtohen jonet Zn²⁺, dhe jonet pozitive (K⁺ ose Na⁺) shkojnë drejt gjysmëqelizës së bakrit, ku jonet Cu²⁺ pakësohen. Pa urë kripe nuk kalon rrymë dhe leximi bie në zero.",
      "Tensioni mund të parashikohet nga potencialet standarde të elektrodave: E°(Cu²⁺/Cu) = +0.34 V dhe E°(Zn²⁺/Zn) = −0.76 V, ndaj E° i qelizës = 0.34 − (−0.76) = +1.10 V. Leximet reale zakonisht dalin pak më të ulëta, sepse tretësirat nuk janë saktësisht në kushte standarde dhe sipërfaqet e metaleve nuk janë krejt të pastra; edhe ndryshimi i përqendrimit të njërës tretësirë e zhvendos pak tensionin."
    ],
    equation: "(−) Zn → Zn²⁺ + 2e⁻   ·   (+) Cu²⁺ + 2e⁻ → Cu   ·   E° = +1.10 V",
    equipment: ["Shirit zinku dhe shirit bakri (rreth 1 cm × 5 cm), të pastruar me letër zmerile", "Tretësirë sulfati zinku, 1.0 mol/dm³ (irriton sytë) — 50 cm³", "Tretësirë sulfati bakri(II), 1.0 mol/dm³ (e dëmshme, irrituese) — 50 cm³", "Dy gota kimike 100 cm³", "Shirit letre filtri i njomur në tretësirë nitrati kaliumi (ose klorur natriumi), që shërben si urë kripe", "Voltmetër dixhital me rezistencë të lartë dhe dy tela me kapëse krokodil", "Letër zmerile dhe piskatore", "Syze mbrojtëse dhe doreza"],
    steps: [
      "Vendos syzet dhe dorezat. Pastroji shiritat e zinkut dhe të bakrit me letër zmerile derisa të shkëlqejnë.",
      "Hidh rreth 50 cm³ tretësirë sulfati zinku në njërën gotë dhe rreth 50 cm³ tretësirë sulfati bakri(II) në tjetrën. Vendosi gotat pranë njëra-tjetrës.",
      "Fut shiritin e zinkut në sulfatin e zinkut dhe shiritin e bakrit në sulfatin e bakrit(II).",
      "Lidh bakrin me polin pozitiv (+) të voltmetrit dhe zinkun me polin negativ (COM). Shëno leximin para se të shtohet ura e kripës.",
      "Me piskatore, vendos shiritin e njomur të letrës së filtrit mbi gotat, në mënyrë që secili skaj të zhytet në njërën tretësirë.",
      "Lexo voltmetrin dhe shëno tensionin çdo minutë për 5 minuta.",
      "Hiqe urën e kripës dhe vëzhgo leximin, pastaj vendose përsëri. Ndërro dy telat dhe shiko çfarë ndodh me shenjën e leximit.",
      "Krahaso leximin tënd me vlerën e parashikuar +1.10 V dhe sugjero arsye për çdo ndryshim."
    ],
    predict: { q: "Çfarë do të tregojë voltmetri sapo ura e kripës të lidhë dy gotat?", options: ["Rreth 1.1 V, me bakrin si elektrodë pozitive", "0 V — tretësirat duhet të përzihen më parë", "Rreth 12 V, si një bateri makine", "Rreth 1.1 V, me zinkun si elektrodë pozitive"], answer: 0,
      result: "Para se të shtohet ura e kripës, leximi është 0 V. Sapo letra e njomur lidh gotat, voltmetri tregon rreth 1.0–1.1 V me bakrin pozitiv. Kur hiqet ura, leximi kthehet në zero, ndërsa ndërrimi i telave thjesht e bën leximin negativ." },
    why: { q: "Pse qeliza punon vetëm kur ura e kripës është në vend?", answer: 0, options: [
      { t: "Ura e kripës lejon jonet të lëvizin midis gjysmëqelizave, duke mbyllur qarkun dhe duke mbajtur secilën tretësirë neutrale", fb: "Elektronet rrjedhin nëpër tel; jonet lëvizin nëpër urë. Anionet shkojnë drejt gjysmëqelizës së zinkut dhe kationet drejt asaj të bakrit, ndaj ngarkesa nuk grumbullohet kurrë." },
      { t: "Elektronet kalojnë nëpër urën e kripës nga zinku te bakri", fb: "Elektronet nuk mund të kalojnë nëpër një tretësirë. Ato rrjedhin nëpër telin e jashtëm, ndërsa ura e kripës bart jone." },
      { t: "Ura e kripës i jep energji qelizës", fb: "Energjia vjen nga reaksioni redoks midis zinkut dhe joneve të bakrit(II). Ura vetëm e mbyll qarkun." },
      { t: "Nitrati i kaliumit reagon me zinkun dhe krijon tensionin", fb: "Jonet e kaliumit dhe të nitratit janë jone shoqëruese që thjesht bartin ngarkesë. Tensioni vjen nga ndryshimi midis dy potencialeve të elektrodave." }
    ] },
    hazards: ["Tretësira e sulfatit të bakrit(II) është e dëmshme nëse gëlltitet, irriton sytë dhe lëkurën dhe është toksike për jetën ujore.", "Tretësira e sulfatit të zinkut mund t'i irritojë rëndë sytë dhe është toksike për jetën ujore.", "Nitrati i kaliumit është oksidues: letra e filtrit e njomur me të digjet fuqishëm nëse thahet.", "Skajet e mprehta të shiritave metalikë mund të presin."],
    precautions: ["Mbaj syze mbrojtëse dhe doreza, dhe përdor piskatoren për urën e kripës.", "Mbaje letrën e njomur larg flakëve dhe mos e lër kurrë të thahet mbi tavolinë.", "Fshi menjëherë pikat dhe laj duart në fund.", "Mos i derdh kurrë tretësirat e kripërave të metaleve në lavaman."],
    disposal: ["Derdhi tretësirat e sulfatit të zinkut dhe të sulfatit të bakrit(II) në enët e veçanta me etiketë që jep mësuesi, për ripërdorim ose grumbullim.", "Shpëlaje mirë me ujë letrën e urës së kripës para se ta hedhësh në kosh.", "Shpëlaji, thaji dhe ruaji shiritat metalikë për ripërdorim."],
    supervisionNote: "Nxënësit mund ta ndërtojnë qelizën vetë, por mësuesi duhet të mbikëqyrë nga afër, të shpërndajë tretësirat dhe të mbledhë të gjitha mbetjet me kripëra metalesh.",
    clip: ["Zink në ZnSO₄, bakër në CuSO₄", "Shto urën e kripës, lidh voltmetrin", "Elektronet rrjedhin nga zinku te bakri — rreth 1.1 V!"]
  }
},

/* ===== Food detective ===== */
{
  id: "foodtests", icon: "search", topic: "analysis", grades: "9–10", gmin: 9, gmax: 10, level: 2,
  supervision: "close", time: 45, eqType: "idea", predictAt: 2, ppe: ["goggles", "coat"],
  demo: { s: "rack", tubes: [
    { from: "#b45309", to: "#1e1b4b" },
    { from: "#3b82f6", to: "#b91c1c", precip: "#9a3412" },
    { from: "#60a5fa", to: "#7c3aed" }
  ] },
  video: null,
  sources: [
    { org: "CLEAPSS", title: "Student safety sheet 4: Food testing (1)", url: "https://science.cleapss.org.uk/resource/sss004-food-testing-1.pdf" },
    { org: "CLEAPSS", title: "RB015 – Biuret reagent", url: "https://science.cleapss.org.uk/resource-info/rb015-biuret-reagent.aspx" },
    { org: "Philip Harris", title: "GCSE Biology food tests required practical", url: "https://www.philipharris.co.uk/required-practicals/gcse/biology/food-tests" }
  ],
  en: {
    name: "Food Detective", short: "Testing for nutrients",
    hook: "Which foods hide starch, sugar or protein? Three colour tests crack the case.",
    aim: "Use iodine solution, Benedict's reagent and biuret reagent to find out which foods contain starch, reducing sugar and protein.",
    chemistry: [
      "Starch is a long chain of glucose units that coils into a spiral. Orange-brown iodine solution fits inside the spiral and forms a blue-black complex, so a blue-black colour means starch is present.",
      "Benedict's reagent is blue because it contains copper(II) ions. When it is heated with a reducing sugar such as glucose, fructose, maltose or lactose, the sugar reduces the copper(II) ions to copper(I) oxide, a brick-red solid. The colour gives a rough idea of how much sugar there is: green (a little), then yellow, orange and brick-red (a lot). Ordinary table sugar (sucrose) is not a reducing sugar, so on its own it leaves the reagent blue.",
      "Biuret reagent contains copper(II) ions in an alkaline solution. The copper ions bond to the peptide links that join amino acids together in a protein, forming a purple (lilac) complex. If there is no protein, the mixture stays blue."
    ],
    equation: "starch + iodine → blue-black  ·  reducing sugar + Benedict's (heat) → brick-red  ·  protein + biuret → purple",
    equipment: ["Food samples prepared by the teacher: glucose solution, starch suspension, diluted egg white, milk and a ‘mystery’ fruit juice", "Dilute iodine solution in a dropper bottle", "Benedict's reagent (irritant) in a dropper bottle", "Biuret reagent (contains sodium hydroxide — can damage eyes) in a dropper bottle", "Test tubes in a rack, and a spotting tile", "Water bath at about 80 °C, filled from a kettle (no Bunsen burner needed)", "Test-tube holder, 10 cm³ measuring cylinder or plastic pipettes, and labels", "Safety goggles and lab coat"],
    steps: [
      "Put on goggles and a lab coat. Label your test tubes and the spotting tile with the name of each food.",
      "Starch test: put a few drops of each food on the spotting tile and add 2 drops of iodine solution. Record the colour.",
      "Sugar test: put 2 cm³ of each food into a test tube and add 2 cm³ of Benedict's reagent.",
      "Using a test-tube holder, stand the tubes in the hot water bath for 5 minutes, then lift them out and record the colours.",
      "Protein test: put 2 cm³ of each food into a clean test tube, add 2 cm³ of biuret reagent and shake gently.",
      "Wait 5 minutes, then record whether each tube is blue or purple.",
      "Use your results table to work out what the ‘mystery’ juice contains."
    ],
    predict: { q: "What colour will the glucose solution turn when it is heated with blue Benedict's reagent?", options: ["Brick-red", "It stays blue", "Purple", "Blue-black"], answer: 0,
      result: "In the hot water bath the glucose tube changes from blue through green and yellow to orange or brick-red as copper(I) oxide forms. Milk and most fruit juices also change colour, while the starch suspension stays blue. Iodine turns blue-black only with starch, and biuret turns purple with egg white and milk." },
    why: { q: "Why does Benedict's reagent turn brick-red with glucose?", answer: 0, options: [
      { t: "Glucose reduces the blue copper(II) ions to brick-red copper(I) oxide", fb: "Reducing sugars donate electrons to Cu²⁺ ions. The brick-red solid is copper(I) oxide, Cu₂O — the more sugar, the more of it forms." },
      { t: "Glucose is red, and the heat makes its colour show", fb: "Glucose solution is colourless. The red colour comes from a new substance formed when copper(II) ions are reduced." },
      { t: "Heat alone turns Benedict's reagent red", fb: "A tube of Benedict's reagent and water stays blue when heated. The colour change needs a reducing sugar." },
      { t: "Glucose reacts with iodine in the reagent", fb: "Benedict's reagent contains copper(II) ions, not iodine. Iodine is used for the starch test." }
    ] },
    hazards: ["Biuret reagent contains sodium hydroxide and can damage the eyes.", "Benedict's reagent irritates the eyes and skin.", "Hot water from the water bath can scald, and heated tubes can spit.", "Milk and egg can trigger allergies, and food used in the lab is not safe to eat."],
    precautions: ["Wear goggles throughout, especially when using biuret reagent.", "Use a test-tube holder, point tubes away from people and never heat Benedict's reagent directly in a flame.", "Tell your teacher about any food allergies before you start.", "Never eat or drink in the lab — not even the food samples.", "Wipe up iodine drips quickly (it stains) and wash your hands at the end."],
    disposal: ["Pour the test mixtures into the waste beaker provided by your teacher.", "Put solid food scraps in the bin and rinse the spotting tile and test tubes."],
    supervisionNote: "The teacher prepares the food samples and the water bath, and supervises closely while the reagents and hot water are in use.",
    clip: ["Three tests: iodine, Benedict's and biuret", "Add the foods and warm the sugar test", "Blue-black, brick-red, purple — case solved!"]
  },
  sq: {
    name: "Detektivi i ushqimeve", short: "Testimi i lëndëve ushqyese",
    hook: "Cilat ushqime fshehin niseshte, sheqer apo proteina? Tri teste me ngjyra e zgjidhin misterin.",
    aim: "Përdor tretësirë jodi, reaktivin e Benediktit dhe reaktivin e biuretit për të zbuluar cilat ushqime përmbajnë niseshte, sheqer reduktues dhe proteina.",
    chemistry: [
      "Niseshteja është një zinxhir i gjatë njësish glukoze që mblidhet si spirale. Tretësira portokalli-kafe e jodit futet brenda spirales dhe formon një kompleks blu të zi, ndaj ngjyra blu e zezë tregon se ka niseshte.",
      "Reaktivi i Benediktit është blu sepse përmban jone bakri(II). Kur nxehet me një sheqer reduktues si glukoza, fruktoza, maltoza ose laktoza, sheqeri i redukton jonet e bakrit(II) në oksid bakri(I), një lëndë e ngurtë e kuqe si tulla. Ngjyra jep një ide të përafërt për sasinë e sheqerit: jeshile (pak), pastaj e verdhë, portokalli dhe e kuqe tulle (shumë). Sheqeri i zakonshëm i kuzhinës (saharoza) nuk është sheqer reduktues, ndaj kur testohet vetëm, reaktivi mbetet blu.",
      "Reaktivi i biuretit përmban jone bakri(II) në një tretësirë alkaline. Jonet e bakrit lidhen me lidhjet peptidike që bashkojnë aminoacidet në një proteinë dhe formojnë një kompleks vjollcë (lila). Nëse nuk ka proteina, përzierja mbetet blu."
    ],
    equation: "niseshte + jod → blu e zezë  ·  sheqer reduktues + Benedikt (nxehje) → e kuqe tulle  ·  proteinë + biuret → vjollcë",
    equipment: ["Mostra ushqimi të përgatitura nga mësuesi: tretësirë glukoze, suspension niseshteje, e bardhë veze e holluar, qumësht dhe një lëng frutash ‘mister’", "Tretësirë e holluar jodi në shishe me pikatore", "Reaktivi i Benediktit (irritues) në shishe me pikatore", "Reaktivi i biuretit (përmban hidroksid natriumi — mund të dëmtojë sytë) në shishe me pikatore", "Provëza në mbajtëse dhe një pllakë me gropëza", "Banjë uji në rreth 80 °C, e mbushur nga ibriku elektrik (pa nevojë për djegës Bunsen)", "Pincë druri për provëza, cilindër matës 10 cm³ ose pipeta plastike, dhe etiketa", "Syze mbrojtëse dhe përparëse laboratori"],
    steps: [
      "Vendos syzet dhe përparësen. Shëno provëzat dhe pllakën me gropëza me emrin e çdo ushqimi.",
      "Testi i niseshtesë: hidh disa pika nga çdo ushqim në pllakë dhe shto 2 pika tretësirë jodi. Shëno ngjyrën.",
      "Testi i sheqerit: hidh 2 cm³ nga çdo ushqim në një provëz dhe shto 2 cm³ reaktiv Benedikti.",
      "Me pincën e provëzave, vendosi provëzat në banjën me ujë të nxehtë për 5 minuta, pastaj nxirri dhe shëno ngjyrat.",
      "Testi i proteinës: hidh 2 cm³ nga çdo ushqim në një provëz të pastër, shto 2 cm³ reaktiv biureti dhe tunde lehtë.",
      "Prit 5 minuta, pastaj shëno nëse çdo provëz është blu apo vjollcë.",
      "Përdor tabelën e rezultateve për të gjetur çfarë përmban lëngu ‘mister’."
    ],
    predict: { q: "Çfarë ngjyre do të marrë tretësira e glukozës kur nxehet me reaktivin blu të Benediktit?", options: ["E kuqe tulle", "Mbetet blu", "Vjollcë", "Blu e zezë"], answer: 0,
      result: "Në banjën me ujë të nxehtë, provëza me glukozë kalon nga bluja te jeshilja, e verdha dhe pastaj portokallia ose e kuqja tulle, ndërsa formohet oksid bakri(I). Edhe qumështi dhe shumica e lëngjeve të frutave ndryshojnë ngjyrë, ndërsa suspensioni i niseshtesë mbetet blu. Jodi bëhet blu i zi vetëm me niseshtenë, dhe biureti bëhet vjollcë me të bardhën e vezës dhe qumështin." },
    why: { q: "Pse reaktivi i Benediktit bëhet i kuq tulle me glukozën?", answer: 0, options: [
      { t: "Glukoza i redukton jonet blu të bakrit(II) në oksid bakri(I) të kuq tulle", fb: "Sheqernat reduktues u japin elektrone joneve Cu²⁺. Lënda e ngurtë e kuqe tulle është oksidi i bakrit(I), Cu₂O — sa më shumë sheqer, aq më shumë formohet." },
      { t: "Glukoza është e kuqe dhe nxehtësia e nxjerr në pah ngjyrën e saj", fb: "Tretësira e glukozës është e pangjyrë. Ngjyra e kuqe vjen nga një lëndë e re që formohet kur reduktohen jonet e bakrit(II)." },
      { t: "Vetëm nxehtësia e bën të kuq reaktivin e Benediktit", fb: "Një provëz me reaktiv Benedikti dhe ujë mbetet blu kur nxehet. Ndryshimi i ngjyrës kërkon një sheqer reduktues." },
      { t: "Glukoza reagon me jodin që përmban reaktivi", fb: "Reaktivi i Benediktit përmban jone bakri(II), jo jod. Jodi përdoret për testin e niseshtesë." }
    ] },
    hazards: ["Reaktivi i biuretit përmban hidroksid natriumi dhe mund t'i dëmtojë sytë.", "Reaktivi i Benediktit irriton sytë dhe lëkurën.", "Uji i nxehtë i banjës mund të përvëlojë, dhe provëzat e nxehura mund të spërkasin.", "Qumështi dhe veza mund të shkaktojnë alergji, dhe ushqimi i përdorur në laborator nuk është i sigurt për t'u ngrënë."],
    precautions: ["Mbaj syze mbrojtëse gjatë gjithë kohës, sidomos kur përdor reaktivin e biuretit.", "Përdor pincën e provëzave, mbaji provëzat larg njerëzve dhe mos e nxeh kurrë reaktivin e Benediktit drejtpërdrejt në flakë.", "Njofto mësuesin për çdo alergji ushqimore para se të fillosh.", "Mos ha dhe mos pi kurrë në laborator — as mostrat e ushqimit.", "Fshi shpejt pikat e jodit (njollos) dhe laj duart në fund."],
    disposal: ["Derdhi përzierjet e testeve në enën e mbetjeve që jep mësuesi.", "Hidhi mbetjet e ngurta të ushqimit në kosh dhe shpëlaj pllakën dhe provëzat."],
    supervisionNote: "Mësuesi përgatit mostrat e ushqimit dhe banjën me ujë, dhe mbikëqyr nga afër ndërsa përdoren reaktivët dhe uji i nxehtë.",
    clip: ["Tri teste: jod, Benedikt dhe biuret", "Shto ushqimet dhe ngroh testin e sheqerit", "Blu e zezë, e kuqe tulle, vjollcë — misteri u zgjidh!"]
  }
},

/* ===== Three gas tests ===== */
{
  id: "gastests", icon: "flame", topic: "analysis", grades: "9–10", gmin: 9, gmax: 10, level: 2,
  supervision: "close", time: 40, eqType: "equation", predictAt: 2, ppe: ["goggles", "coat", "hair"],
  demo: { s: "rack", tubes: [
    { from: "#f1f5f9", to: "#f1f5f9", bubbles: true },
    { from: "#f8fafc", to: "#f8fafc", bubbles: true, precip: "#292524" },
    { from: "#eef6fb", to: "#e5e7eb", precip: "#f8fafc", bubbles: true }
  ] },
  video: null,
  sources: [
    { org: "Royal Society of Chemistry", title: "Generating, collecting and testing gases", url: "https://edu.rsc.org/experiments/generating-collecting-and-testing-gases/693.article" },
    { org: "Creative Chemistry", title: "Gas tests", url: "https://www.creative-chemistry.org.uk/gcse/inorganic/chemical-analysis/gas-tests" },
    { org: "Carolina Biological Supply", title: "Signs of Chemical Changes: Testing for CO2, O2, and H2", url: "https://knowledge.carolina.com/discipline/physical-science/chemistry/testing-for-co2-o2-and-h2/" }
  ],
  en: {
    name: "Three Gas Tests", short: "Identifying H₂, O₂ and CO₂",
    hook: "A pop, a flash of flame and a milky cloud — each gas gives itself away.",
    aim: "Make small amounts of hydrogen, oxygen and carbon dioxide and identify each one with its standard laboratory test.",
    chemistry: [
      "Hydrogen, oxygen and carbon dioxide are all colourless and odourless, so we identify them by how they behave. Hydrogen is made when magnesium reacts with dilute hydrochloric acid. When a lighted splint is brought near, it burns extremely quickly with the oxygen in the air, making a squeaky pop: 2H₂ + O₂ → 2H₂O.",
      "Oxygen is made when hydrogen peroxide decomposes, which happens quickly with a catalyst such as manganese(IV) oxide: 2H₂O₂ → 2H₂O + O₂. Air is only about one-fifth oxygen; in nearly pure oxygen a splint that is only glowing bursts back into flame, because burning needs oxygen.",
      "Carbon dioxide is made when marble chips (calcium carbonate) react with acid: CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂. When it bubbles through limewater (calcium hydroxide solution), it forms tiny particles of insoluble calcium carbonate, which turn the limewater milky."
    ],
    equation: "2H₂ + O₂ → 2H₂O   ·   CO₂ + Ca(OH)₂ → CaCO₃ + H₂O",
    equipment: ["Magnesium ribbon in 2 cm pieces, and dilute hydrochloric acid, 1 mol/dm³ (can irritate eyes) — 15 cm³", "Marble chips (calcium carbonate)", "Hydrogen peroxide, up to 6% (‘20 volume’, irritant) and manganese(IV) oxide (harmful) — handled by the teacher", "Limewater (calcium hydroxide solution) — 5 cm³", "Test tubes and a boiling tube in a rack, and a bung fitted with a delivery tube", "Wooden splints and a Bunsen burner on a heat-resistant mat", "Beaker of water for used splints", "Safety goggles and lab coat"],
    steps: [
      "Put on goggles, tie back long hair and light the Bunsen burner (safety flame) on the heat-resistant mat, well away from the reaction tubes.",
      "Hydrogen: put 2 cm of magnesium ribbon into a test tube containing about 3 cm³ of hydrochloric acid, and hold an empty test tube upside down over its mouth to collect the gas for about 30 seconds.",
      "Keeping the collecting tube upside down, bring a lighted splint to its mouth and listen.",
      "Oxygen: the teacher adds a small spatula of manganese(IV) oxide to about 5 cm³ of hydrogen peroxide in a boiling tube.",
      "Light a splint, blow it out so that it only glows, and lower the glowing tip into the space above the bubbling liquid.",
      "Carbon dioxide: put three marble chips and 5 cm³ of hydrochloric acid in a test tube, quickly fit the bung and delivery tube, and let the gas bubble through 3 cm³ of limewater in a second tube.",
      "Watch the limewater, then put all used splints into the beaker of water and turn off the Bunsen burner."
    ],
    predict: { q: "What will happen when a lighted splint is held at the mouth of the tube of hydrogen?", options: ["There will be a squeaky pop", "The splint will burn more brightly and keep burning", "The splint will go out silently", "The gas will turn milky"], answer: 0,
      result: "There is a sharp, squeaky pop as the small amount of hydrogen burns. Later, the glowing splint bursts back into flame in the oxygen, and the limewater turns milky as carbon dioxide bubbles through it." },
    why: { q: "Why does a glowing splint relight in the gas from hydrogen peroxide?", answer: 0, options: [
      { t: "The gas is oxygen, and the higher concentration of oxygen makes the hot wood burn much faster", fb: "Air is about 21% oxygen. In nearly pure oxygen the hot wood reacts so quickly that the glow bursts into a flame." },
      { t: "The gas is hydrogen, which explodes", fb: "Hydrogen gives a squeaky pop with a lighted splint. A glowing splint relighting is the test for oxygen." },
      { t: "Hydrogen peroxide is a fuel that burns", fb: "The liquid isn't burning — it decomposes to release oxygen, and the oxygen lets the wood burn." },
      { t: "The manganese(IV) oxide catches fire", fb: "The catalyst only speeds up the decomposition and is not used up. The splint relights because of the oxygen released." }
    ] },
    hazards: ["Hydrochloric acid and hydrogen peroxide irritate the eyes and skin.", "Hydrogen is extremely flammable, so only small amounts are made.", "Burning splints and the Bunsen flame can cause burns or set hair alight.", "Manganese(IV) oxide is harmful if swallowed or breathed in as dust."],
    precautions: ["Wear goggles throughout and tie back long hair.", "Keep the Bunsen burner away from the reaction tubes and never point a tube at anyone.", "Only the teacher handles the hydrogen peroxide and manganese(IV) oxide.", "Put splints out in the beaker of water and wash your hands at the end."],
    disposal: ["Pour the liquids into the waste beaker provided by your teacher; leftover magnesium and marble chips are rinsed and collected.", "The teacher filters off the manganese(IV) oxide so that it can be reused.", "Put cold, wet splints in the bin."],
    supervisionNote: "The teacher should supervise closely, prepare the oxygen and make sure the Bunsen burner and splints are used safely.",
    clip: ["Three gases: H₂, O₂ and CO₂", "Test with splints and limewater", "Pop, relight, milky — every gas identified!"]
  },
  sq: {
    name: "Tri teste për gazrat", short: "Identifikimi i H₂, O₂ dhe CO₂",
    hook: "Një plasje, një flakë që rindizet dhe një re qumështore — çdo gaz e tradhton veten.",
    aim: "Prodho sasi të vogla hidrogjeni, oksigjeni dhe dioksidi karboni dhe identifiko secilin me testin e tij standard të laboratorit.",
    chemistry: [
      "Hidrogjeni, oksigjeni dhe dioksidi i karbonit janë të gjithë gazra pa ngjyrë dhe pa erë, ndaj i identifikojmë nga mënyra si sillen. Hidrogjeni prodhohet kur magnezi reagon me acid klorhidrik të holluar. Kur i afrohet një cifël e ndezur, ai digjet jashtëzakonisht shpejt me oksigjenin e ajrit dhe jep një plasje të vogël me fishkëllimë: 2H₂ + O₂ → 2H₂O.",
      "Oksigjeni prodhohet kur zbërthehet peroksidi i hidrogjenit, gjë që ndodh shpejt me një katalizator si oksidi i manganit(IV): 2H₂O₂ → 2H₂O + O₂. Ajri përmban vetëm rreth një të pestën oksigjen; në oksigjen pothuajse të pastër, një cifël që ka vetëm prush rindizet me flakë, sepse djegia ka nevojë për oksigjen.",
      "Dioksidi i karbonit prodhohet kur copëzat e mermerit (karbonat kalciumi) reagojnë me acid: CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂. Kur kalon me flluska nëpër ujë gëlqereje (tretësirë hidroksidi kalciumi), formon grimca të vogla karbonati kalciumi të patretshëm, që e bëjnë ujin e gëlqeres qumështor."
    ],
    equation: "2H₂ + O₂ → 2H₂O   ·   CO₂ + Ca(OH)₂ → CaCO₃ + H₂O",
    equipment: ["Shirit magnezi në copa 2 cm, dhe acid klorhidrik i holluar, 1 mol/dm³ (mund të irritojë sytë) — 15 cm³", "Copëza mermeri (karbonat kalciumi)", "Peroksid hidrogjeni deri në 6% (‘20 vëllime’, irritues) dhe oksid mangani(IV) (i dëmshëm) — i përdor vetëm mësuesi", "Ujë gëlqereje (tretësirë hidroksidi kalciumi) — 5 cm³", "Provëza dhe një provëz e madhe në mbajtëse, dhe një tapë me tub përcjellës", "Cifla druri dhe një djegës Bunsen mbi një pllakë rezistente ndaj nxehtësisë", "Gotë kimike me ujë për ciflat e përdorura", "Syze mbrojtëse dhe përparëse laboratori"],
    steps: [
      "Vendos syzet, lidhe flokun e gjatë dhe ndiz djegësin Bunsen (me flakë sigurie) mbi pllakën rezistente, larg provëzave të reaksioneve.",
      "Hidrogjeni: fut 2 cm shirit magnezi në një provëz me rreth 3 cm³ acid klorhidrik dhe mbaj një provëz bosh të përmbysur mbi grykën e saj për të mbledhur gazin për rreth 30 sekonda.",
      "Duke e mbajtur provëzën mbledhëse me grykë poshtë, afro një cifël të ndezur te gryka e saj dhe dëgjo.",
      "Oksigjeni: mësuesi shton një majë spatule oksid mangani(IV) në rreth 5 cm³ peroksid hidrogjeni në një provëz të madhe.",
      "Ndiz një cifël, fryje që të mbetet vetëm me prush dhe ule majën me prush në hapësirën mbi lëngun që flluskon.",
      "Dioksidi i karbonit: hidh tri copëza mermeri dhe 5 cm³ acid klorhidrik në një provëz, vendos shpejt tapën me tubin përcjellës dhe lëre gazin të kalojë me flluska nëpër 3 cm³ ujë gëlqereje në një provëz të dytë.",
      "Vëzhgo ujin e gëlqeres, pastaj futi të gjitha ciflat e përdorura në gotën me ujë dhe fike djegësin Bunsen."
    ],
    predict: { q: "Çfarë do të ndodhë kur një cifël e ndezur afrohet te gryka e provëzës me hidrogjen?", options: ["Do të dëgjohet një plasje e vogël me fishkëllimë", "Cifla do të digjet më fort dhe do të vazhdojë të digjet", "Cifla do të shuhet pa zhurmë", "Gazi do të bëhet qumështor"], answer: 0,
      result: "Dëgjohet një plasje e mprehtë me fishkëllimë ndërsa digjet sasia e vogël e hidrogjenit. Më pas, cifla me prush rindizet me flakë në oksigjen, dhe uji i gëlqeres bëhet qumështor ndërsa dioksidi i karbonit kalon me flluska nëpër të." },
    why: { q: "Pse një cifël me prush rindizet në gazin nga peroksidi i hidrogjenit?", answer: 0, options: [
      { t: "Gazi është oksigjen, dhe përqendrimi më i lartë i oksigjenit e bën drurin e nxehtë të digjet shumë më shpejt", fb: "Ajri ka rreth 21% oksigjen. Në oksigjen pothuajse të pastër druri i nxehtë reagon aq shpejt sa prushi shpërthen në flakë." },
      { t: "Gazi është hidrogjen, që shpërthen", fb: "Hidrogjeni jep një plasje me fishkëllimë me një cifël të ndezur. Rindezja e ciflës me prush është testi për oksigjenin." },
      { t: "Peroksidi i hidrogjenit është lëndë djegëse që digjet", fb: "Lëngu nuk digjet — ai zbërthehet dhe çliron oksigjen, dhe oksigjeni e ndihmon drurin të digjet." },
      { t: "Oksidi i manganit(IV) merr flakë", fb: "Katalizatori vetëm e shpejton zbërthimin dhe nuk harxhohet. Cifla rindizet nga oksigjeni i çliruar." }
    ] },
    hazards: ["Acidi klorhidrik dhe peroksidi i hidrogjenit irritojnë sytë dhe lëkurën.", "Hidrogjeni është jashtëzakonisht i ndezshëm, ndaj prodhohen vetëm sasi të vogla.", "Ciflat e ndezura dhe flaka e djegësit Bunsen mund të shkaktojnë djegie ose të ndezin flokët.", "Oksidi i manganit(IV) është i dëmshëm nëse gëlltitet ose thithet si pluhur."],
    precautions: ["Mbaj syze mbrojtëse gjatë gjithë kohës dhe lidhe flokun e gjatë.", "Mbaje djegësin Bunsen larg provëzave të reaksioneve dhe mos e drejto kurrë një provëz nga dikush.", "Peroksidin e hidrogjenit dhe oksidin e manganit(IV) i përdor vetëm mësuesi.", "Shuaji ciflat në gotën me ujë dhe laj duart në fund."],
    disposal: ["Derdhi lëngjet në enën e mbetjeve që jep mësuesi; magnezi dhe copëzat e mermerit që mbeten shpëlahen dhe mblidhen.", "Mësuesi e filtron oksidin e manganit(IV) që të ripërdoret.", "Hidhi në kosh ciflat e ftohta dhe të lagura."],
    supervisionNote: "Mësuesi duhet të mbikëqyrë nga afër, të përgatisë oksigjenin dhe të sigurohet që djegësi Bunsen dhe ciflat përdoren në mënyrë të sigurt.",
    clip: ["Tre gazra: H₂, O₂ dhe CO₂", "Provo me cifla dhe ujë gëlqereje", "Plasje, flakë, ujë qumështor — çdo gaz u zbulua!"]
  }
}
];

/* ---------- New experiments, set 6: matter (oobleck, clouds, polymers, supercooling, bioplastic) and halide analysis ---------- */
const EXP_NEW_6 = [
/* ===== Oobleck ===== */
{
  id: "oobleck", icon: "splash", topic: "matter", grades: "7–8", gmin: 7, gmax: 8, level: 1,
  supervision: "supervised", time: 20, eqType: "idea", predictAt: 3, ppe: ["goggles"],
  demo: { s: "beaker", from: "#f5f5f0", to: "#f5f5f0", level: 0.45, solid: { c: "#2563eb", float: true } },
  video: null,
  sources: [
    { org: "Science Buddies", title: "Oobleck: A Recipe for a Mesmerizing Mixture", url: "https://www.sciencebuddies.org/stem-activities/oobleck-colloid" },
    { org: "Science Learning Hub (University of Waikato)", title: "Non-Newtonian fluids", url: "https://www.sciencelearn.org.nz/resources/1502-non-newtonian-fluids" },
    { org: "Science Museum Group", title: "Oozing oobleck", url: "https://learning.sciencemuseumgroup.org.uk/resources/oozing-oobleck/" }
  ],
  en: {
    name: "Oobleck: Liquid or Solid?", short: "Non-Newtonian fluids",
    hook: "Punch it and it feels like rock — let your fingers sink in slowly and it pours like syrup.",
    aim: "Make oobleck from cornflour and water and find out how it behaves differently when a force is applied quickly or slowly.",
    chemistry: [
      "Oobleck is a suspension: tiny grains of cornflour (starch) are spread through the water but do not dissolve. When you move it slowly, there is enough water between the grains to act as a lubricant, so they slide past each other and the mixture flows like a liquid.",
      "When you hit or squeeze it suddenly, the water is pushed out from between the grains. They jam together and lock, so for a moment the mixture behaves like a solid. As soon as the force stops, water flows back between the grains and it becomes runny again.",
      "Ordinary liquids such as water keep the same runniness (viscosity) however hard you push them — they are called Newtonian fluids. Oobleck gets thicker the harder you push, so it is a non-Newtonian, 'shear-thickening' fluid. Similar materials are being tested for flexible body armour."
    ],
    equation: "slow force → grains slide → flows like a liquid;  sudden force → grains jam → acts like a solid",
    equipment: ["Cornflour (cornstarch) — about 8 heaped tablespoons", "Water — about 4 tablespoons, plus a little extra", "Mixing bowl or plastic tray", "Spoon", "Food colouring (optional)", "Small ball or marble", "Newspaper or a tray to protect the bench", "Safety goggles"],
    steps: [
      "Put on goggles and cover the bench. Put the cornflour into the bowl.",
      "Add the water a little at a time, stirring slowly, until you have about 2 parts cornflour to 1 part water and the mixture is thick but still flows. Add a drop of food colouring if you like.",
      "Slowly lower your fingers into the oobleck, then try to pull them out quickly.",
      "Slap the surface hard and fast with your open hand or the back of the spoon.",
      "Scoop some up and roll it quickly into a ball between your palms, then stop rolling and hold it still on your open hand.",
      "Drop the small ball onto the surface from about 20 cm, then rest it gently on the surface and compare.",
      "Record what happens each time: does the oobleck behave like a liquid or a solid?"
    ],
    predict: { q: "What will happen when you slap the surface of the oobleck hard?", options: ["It feels hard and hardly splashes", "It splashes everywhere like water", "Your hand sinks straight in", "It dissolves and turns clear"], answer: 0,
      result: "The surface feels firm, almost like hitting a solid, and hardly splashes. But fingers pushed in slowly sink in easily, and a ball rolled between your palms melts into a runny puddle as soon as you stop rolling." },
    why: { q: "Why does the oobleck turn solid when you hit it?", answer: 0, options: [
      { t: "The sudden force squeezes water from between the starch grains, so they jam together", fb: "Yes — with no water to lubricate them, the grains lock like cars in a traffic jam. When the force stops, water flows back in and the mixture runs again." },
      { t: "The cornflour freezes when it is hit", fb: "Nothing freezes — the temperature hardly changes. It is the grains jamming together that makes it feel solid." },
      { t: "A chemical reaction makes a new, hard substance", fb: "No new substance forms: the oobleck turns back into a liquid straight away, so this is a physical change, not a chemical one." },
      { t: "The cornflour dissolves and makes the water thick", fb: "Starch grains don't dissolve in cold water — they stay as tiny solid particles spread through it. That is why they can jam." }
    ] },
    hazards: ["Cornflour dust can irritate the eyes.", "Spilled oobleck makes floors and benches very slippery.", "Oobleck blocks sinks and drains if it is poured away.", "A few people are allergic to maize (corn) products."],
    precautions: ["Wear goggles and tip the cornflour in gently so it doesn't make dust.", "Work over a tray and wipe up spills straight away.", "Never eat or drink in the lab — not even food ingredients.", "Anyone with a corn allergy should not handle the mixture.", "Wash your hands at the end."],
    disposal: ["Never pour oobleck down the sink — scrape it into the bin.", "If possible, let leftover oobleck dry out first; it crumbles to a powder that is easy to sweep up.", "Wipe bowls with paper towel before washing them."],
    supervisionNote: "Low-hazard activity — the teacher should make sure nobody pours oobleck down the sink.",
    clip: ["A bowl of runny white oobleck", "Drop a ball onto the surface", "It rests on top — oobleck acts like a solid!"]
  },
  sq: {
    name: "Oobleck: lëng apo i ngurtë?", short: "Lëngjet jo-njutoniane",
    hook: "Godite me grusht dhe duket si gur — fute gishtat ngadalë dhe rrjedh si shurup.",
    aim: "Përgatit oobleck me niseshte misri dhe ujë dhe zbulo si sillet ndryshe kur forca ushtrohet shpejt ose ngadalë.",
    chemistry: [
      "Oobleck-u është një suspension: kokrriza shumë të vogla niseshteje misri shpërndahen në ujë, por nuk treten. Kur e lëviz ngadalë, midis kokrrizave ka mjaftueshëm ujë që vepron si lubrifikant, ndaj ato rrëshqasin pranë njëra-tjetrës dhe përzierja rrjedh si lëng.",
      "Kur e godet ose e shtrydh papritur, uji shtyhet jashtë hapësirave midis kokrrizave. Ato bllokohen dhe kapen me njëra-tjetrën, ndaj për një çast përzierja sillet si lëndë e ngurtë. Sapo forca pushon, uji kthehet midis kokrrizave dhe përzierja rrjedh sërish.",
      "Lëngjet e zakonshme si uji kanë të njëjtën rrjedhshmëri (viskozitet) sado fort t'i shtysh — ato quhen lëngje njutoniane. Oobleck-u trashet sa më fort ta shtysh, ndaj është një lëng jo-njutonian që ‘trashet nën forcë’. Materiale të ngjashme po provohen për veshje mbrojtëse fleksibël."
    ],
    equation: "forcë e ngadaltë → kokrrizat rrëshqasin → rrjedh si lëng;  forcë e papritur → kokrrizat bllokohen → sillet si i ngurtë",
    equipment: ["Niseshte misri — rreth 8 lugë gjelle të mbushura", "Ujë — rreth 4 lugë gjelle, plus pak më shumë", "Tas përzierjeje ose tabaka plastike", "Lugë", "Ngjyrues ushqimor (sipas dëshirës)", "Top i vogël ose bilë xhami", "Gazetë ose tabaka për të mbrojtur tavolinën", "Syze mbrojtëse"],
    steps: [
      "Vendos syzet dhe mbulo tavolinën. Hidh niseshtenë e misrit në tas.",
      "Shto ujin pak nga pak duke e përzier ngadalë, derisa të kesh rreth 2 pjesë niseshte për 1 pjesë ujë dhe përzierja të jetë e trashë, por ende të rrjedhë. Nëse do, shto një pikë ngjyrues ushqimor.",
      "Ul ngadalë gishtat në oobleck, pastaj provo t'i nxjerrësh shpejt.",
      "Godite sipërfaqen fort dhe shpejt me pëllëmbë të hapur ose me pjesën e pasme të lugës.",
      "Merr pak me lugë dhe rrotulloje shpejt mes pëllëmbëve si top, pastaj ndalo dhe mbaje të palëvizur në pëllëmbë të hapur.",
      "Lësho topin e vogël mbi sipërfaqe nga rreth 20 cm lartësi, pastaj vendose butë mbi sipërfaqe dhe krahaso.",
      "Shëno çfarë ndodh çdo herë: a sillet oobleck-u si lëng apo si lëndë e ngurtë?"
    ],
    predict: { q: "Çfarë do të ndodhë kur ta godasësh fort sipërfaqen e oobleck-ut?", options: ["Ndihet e fortë dhe mezi spërkat", "Spërkat gjithandej si uji", "Dora zhytet menjëherë brenda", "Tretet dhe bëhet e tejdukshme"], answer: 0,
      result: "Sipërfaqja ndihet e fortë, pothuajse si të godasësh një lëndë të ngurtë, dhe mezi spërkat. Por gishtat e futur ngadalë zhyten lehtë, dhe topi i rrotulluar mes pëllëmbëve shkrihet në një pellg të lëngshëm sapo ndalon së rrotulluari." },
    why: { q: "Pse oobleck-u ngurtësohet kur e godet?", answer: 0, options: [
      { t: "Forca e papritur e shtrydh ujin nga hapësirat midis kokrrizave të niseshtesë, ndaj ato bllokohen", fb: "Po — pa ujë që t'i lubrifikojë, kokrrizat bllokohen si makinat në trafik. Kur forca pushon, uji kthehet dhe përzierja rrjedh sërish." },
      { t: "Niseshteja ngrin kur goditet", fb: "Asgjë nuk ngrin — temperatura pothuajse nuk ndryshon. Është bllokimi i kokrrizave që e bën të ndihet e ngurtë." },
      { t: "Një reaksion kimik formon një lëndë të re të fortë", fb: "Nuk formohet asnjë lëndë e re: oobleck-u kthehet menjëherë në lëng, ndaj ky është ndryshim fizik, jo kimik." },
      { t: "Niseshteja tretet dhe e trash ujin", fb: "Kokrrizat e niseshtesë nuk treten në ujë të ftohtë — mbeten grimca të ngurta të shpërndara në të. Prandaj mund të bllokohen." }
    ] },
    hazards: ["Pluhuri i niseshtesë mund të irritojë sytë.", "Oobleck-u i derdhur e bën dyshemenë dhe tavolinat shumë të rrëshqitshme.", "Oobleck-u bllokon lavamanët dhe tubat e shkarkimit nëse derdhet në to.", "Disa njerëz janë alergjikë ndaj produkteve të misrit."],
    precautions: ["Mbaj syze mbrojtëse dhe hidhe niseshtenë butë që të mos ngrejë pluhur.", "Puno mbi një tabaka dhe fshi menjëherë çdo derdhje.", "Mos ha dhe mos pi kurrë në laborator — as përbërës ushqimorë.", "Kushdo që ka alergji ndaj misrit nuk duhet ta prekë përzierjen.", "Laj duart në fund."],
    disposal: ["Mos e derdh kurrë oobleck-un në lavaman — hidhe në kosh.", "Nëse është e mundur, lëre oobleck-un e mbetur të thahet më parë; ai shkërmoqet në pluhur që fshihet lehtë.", "Fshiji tasat me letër kuzhine para se t'i lash."],
    supervisionNote: "Aktivitet me rrezik të ulët — mësuesi duhet të sigurohet që askush të mos e derdhë oobleck-un në lavaman.",
    clip: ["Një tas me oobleck të bardhë e të lëngshëm", "Lësho një top mbi sipërfaqe", "Topi qëndron sipër — oobleck-u sillet si i ngurtë!"]
  }
},

/* ===== Cloud in a jar ===== */
{
  id: "cloudjar", icon: "cycle", topic: "matter", grades: "7–8", gmin: 7, gmax: 8, level: 1,
  supervision: "supervised", time: 15, eqType: "idea", predictAt: 4, ppe: ["goggles"],
  demo: { s: "jar", cloud: "#e2e8f0", ice: true },
  video: null,
  sources: [
    { org: "Science Buddies", title: "Cumulus Maximus: Test WEATHER you can make your own cloud!", url: "https://www.sciencebuddies.org/stem-activities/cumulus-maximus-test-weather-you-can-make-your-own-cloud" },
    { org: "UCAR Center for Science Education", title: "Cloud In a Jar", url: "https://scied.ucar.edu/activity/cloud-in-jar" },
    { org: "Exploratorium", title: "Fog Chamber — Science Snack", url: "https://www.exploratorium.edu/snacks/fog-chamber" }
  ],
  en: {
    name: "Cloud in a Jar", short: "Condensation & the water cycle",
    hook: "Make a real cloud inside a jar — then lift the lid and let it drift away.",
    aim: "Make a cloud form inside a jar and find out the three things a cloud needs: water vapour, cooling and tiny particles to condense on.",
    chemistry: [
      "Warm water evaporates, so the air in the jar fills with invisible water vapour. The ice on the lid cools the air at the top of the jar. Cooler air cannot hold as much water vapour, so some of the vapour starts to condense back into liquid water.",
      "Water molecules find it much easier to condense onto a surface than to clump together in mid-air. The tiny particles from the aerosol spray or match smoke act as condensation nuclei: millions of microscopic droplets form around them, and together they scatter light and look like a white cloud.",
      "Real clouds form in the same way. In the water cycle, water evaporates from seas and lakes, the warm, moist air rises and cools, and the vapour condenses onto dust, sea-salt and smoke particles high in the sky."
    ],
    equation: "warm water → water vapour → cooled by the ice → condenses on particles → tiny droplets (a cloud)",
    equipment: ["Large clear glass jar with a metal lid (about 1 litre, heat-resistant)", "Hot water — not boiling, about 60 °C (poured by the teacher)", "Ice cubes — a handful", "Aerosol spray, e.g. hairspray (or a match the teacher has just blown out)", "Black card or paper as a background", "Torch (optional)", "Tray", "Safety goggles"],
    steps: [
      "Put on goggles. Stand the jar on a tray with the black card behind it.",
      "The teacher pours hot (not boiling) water into the jar to a depth of about 3 cm and swirls it to warm the glass.",
      "Turn the lid upside down, rest it on the jar and fill it with ice cubes. Wait about 30 seconds.",
      "Lift the lid slightly while the teacher gives one very quick puff of aerosol into the jar (or drops in a match that has just been blown out). Put the lid with the ice back on at once.",
      "Watch the top of the jar against the black card for 1–2 minutes. Shine a torch from the side to see it better.",
      "Lift the lid off and watch what the cloud does.",
      "Compare: what happens with cold water, or with no aerosol or smoke?"
    ],
    predict: { q: "What will you see at the top of the jar after the puff of aerosol?", options: ["A white, swirling cloud forms", "Nothing changes — the air stays clear", "Rain falls straight away", "The water starts to boil"], answer: 0,
      result: "Within seconds a white mist appears and swirls under the cold lid, getting thicker. When the lid is lifted, the cloud rises out of the jar and drifts away. With cold water, or without particles, little or no cloud forms." },
    why: { q: "Why does the aerosol (or smoke) help the cloud to form?", answer: 0, options: [
      { t: "Its tiny particles give the water vapour a surface to condense on", fb: "Right — these condensation nuclei let millions of tiny droplets form. In the sky, dust, salt and smoke particles do the same job." },
      { t: "The aerosol is the cloud — it is just spray floating in the jar", fb: "One quick puff is far too little to fill the jar. The cloud is made of tiny water droplets that formed on the spray particles." },
      { t: "The aerosol makes the water boil", fb: "The water is not boiling and the spray doesn't heat it. The particles simply give the vapour something to condense on." },
      { t: "The aerosol reacts with the water to make a white gas", fb: "No new substance forms — this is a physical change. The 'cloud' is liquid water droplets, and it disappears as they evaporate." }
    ] },
    hazards: ["Hot water can scald.", "Hot water can crack thin or cold glass.", "Aerosol sprays are flammable and can trigger asthma.", "A lit match is a fire risk."],
    precautions: ["Only the teacher pours the hot water — never use boiling water.", "Use a heat-resistant jar and warm the glass gradually with the water.", "Use either one short puff of aerosol or match smoke — never both, because the spray is flammable.", "Spray away from faces; use match smoke instead if anyone has asthma.", "Only the teacher handles matches, blowing them out before dropping them in."],
    disposal: ["Let the water cool, then pour it down the sink.", "Put the used match into a beaker of water before binning it; dry the jar and return it."],
    supervisionNote: "The teacher pours the hot water and handles the aerosol or matches; students set up and observe.",
    clip: ["Warm water in a jar, ice on the lid", "Add a puff of particles and close it", "A cloud swirls — lift the lid and it drifts out!"]
  },
  sq: {
    name: "Re në kavanoz", short: "Kondensimi dhe cikli i ujit",
    hook: "Krijo një re të vërtetë brenda një kavanozi — pastaj ngrije kapakun dhe lëre të largohet.",
    aim: "Krijo një re brenda një kavanozi dhe zbulo tri gjërat që i nevojiten një reje: avull uji, ftohje dhe grimca shumë të vogla ku të kondensohet avulli.",
    chemistry: [
      "Uji i ngrohtë avullon, ndaj ajri në kavanoz mbushet me avull uji të padukshëm. Akulli mbi kapak ftoh ajrin në pjesën e sipërme të kavanozit. Ajri më i ftohtë nuk mund të mbajë aq shumë avull uji, ndaj një pjesë e avullit fillon të kondensohet përsëri në ujë të lëngshëm.",
      "Molekulave të ujit u është shumë më lehtë të kondensohen mbi një sipërfaqe sesa të grumbullohen në ajër. Grimcat e vogla nga spërkatësi aerosol ose tymi i shkrepëses veprojnë si bërthama kondensimi: rreth tyre formohen miliona pika mikroskopike, të cilat së bashku shpërndajnë dritën dhe duken si një re e bardhë.",
      "Retë e vërteta formohen në të njëjtën mënyrë. Në ciklin e ujit, uji avullon nga detet dhe liqenet, ajri i ngrohtë dhe i lagësht ngrihet e ftohet, dhe avulli kondensohet lart në qiell mbi grimca pluhuri, kripe deti dhe tymi."
    ],
    equation: "ujë i ngrohtë → avull uji → ftohet nga akulli → kondensohet mbi grimca → pika të vogla (një re)",
    equipment: ["Kavanoz i madh qelqi transparent me kapak metalik (rreth 1 litër, rezistent ndaj nxehtësisë)", "Ujë i nxehtë — jo i vluar, rreth 60 °C (e hedh mësuesi)", "Kuba akulli — një grusht", "Spërkatës aerosol, p.sh. llak flokësh (ose një shkrepëse që mësuesi sapo e ka fikur)", "Karton ose letër e zezë si sfond", "Elektrik dore (sipas dëshirës)", "Tabaka", "Syze mbrojtëse"],
    steps: [
      "Vendos syzet. Vendose kavanozin mbi një tabaka me kartonin e zi pas tij.",
      "Mësuesi hedh ujë të nxehtë (jo të vluar) në kavanoz deri në rreth 3 cm lartësi dhe e tund që të ngrohet qelqi.",
      "Ktheje kapakun përmbys, vendose mbi kavanoz dhe mbushe me kuba akulli. Prit rreth 30 sekonda.",
      "Ngrije pak kapakun ndërsa mësuesi lëshon një spërkatje shumë të shkurtër aerosoli në kavanoz (ose hedh brenda një shkrepëse të sapofikur). Vendose menjëherë përsëri kapakun me akull.",
      "Vëzhgo pjesën e sipërme të kavanozit përpara kartonit të zi për 1–2 minuta. Ndriçoje anash me elektrik dore që të shohësh më mirë.",
      "Hiqe kapakun dhe shiko çfarë bën reja.",
      "Krahaso: çfarë ndodh me ujë të ftohtë, ose pa aerosol a tym?"
    ],
    predict: { q: "Çfarë do të shohësh në pjesën e sipërme të kavanozit pas spërkatjes me aerosol?", options: ["Formohet një re e bardhë që vërtitet", "Asgjë nuk ndryshon — ajri mbetet i kthjellët", "Menjëherë bie shi", "Uji fillon të vlojë"], answer: 0,
      result: "Brenda pak sekondash shfaqet një mjegull e bardhë që vërtitet nën kapakun e ftohtë dhe bëhet gjithnjë më e dendur. Kur ngrihet kapaku, reja ngjitet jashtë kavanozit dhe shpërndahet. Me ujë të ftohtë ose pa grimca, formohet pak ose aspak re." },
    why: { q: "Pse aerosoli (ose tymi) ndihmon që të formohet reja?", answer: 0, options: [
      { t: "Grimcat e tij të vogla i japin avullit të ujit një sipërfaqe ku të kondensohet", fb: "Saktë — këto bërthama kondensimi lejojnë të formohen miliona pika të vogla. Në qiell, të njëjtën punë e bëjnë grimcat e pluhurit, të kripës dhe të tymit." },
      { t: "Aerosoli është vetë reja — thjesht spërkatje që qëndron pezull në kavanoz", fb: "Një spërkatje e shkurtër është shumë pak për të mbushur kavanozin. Reja përbëhet nga pika të vogla uji që u formuan mbi grimcat e spërkatjes." },
      { t: "Aerosoli e bën ujin të vlojë", fb: "Uji nuk po vlon dhe spërkatja nuk e ngroh. Grimcat thjesht i japin avullit diçka ku të kondensohet." },
      { t: "Aerosoli reagon me ujin dhe formon një gaz të bardhë", fb: "Nuk formohet asnjë lëndë e re — ky është ndryshim fizik. ‘Reja’ përbëhet nga pika uji të lëngshëm dhe zhduket kur ato avullojnë." }
    ] },
    hazards: ["Uji i nxehtë mund të përvëlojë.", "Uji i nxehtë mund të çajë qelqin e hollë ose të ftohtë.", "Spërkatësit aerosol janë të ndezshëm dhe mund të shkaktojnë krizë astme.", "Një shkrepëse e ndezur përbën rrezik zjarri."],
    precautions: ["Vetëm mësuesi e hedh ujin e nxehtë — mos përdor kurrë ujë që vlon.", "Përdor një kavanoz rezistent ndaj nxehtësisë dhe ngroheje qelqin gradualisht me ujin.", "Përdor ose një spërkatje të shkurtër aerosoli ose tym shkrepëseje — kurrë të dyja, sepse spërkatësi është i ndezshëm.", "Spërkat larg fytyrave; nëse dikush ka astmë, përdor tym shkrepëseje.", "Vetëm mësuesi i trajton shkrepëset dhe i fik para se t'i hedhë brenda."],
    disposal: ["Lëre ujin të ftohet, pastaj derdhe në lavaman.", "Fute shkrepësen e përdorur në një gotë me ujë para se ta hedhësh në kosh; thaje kavanozin dhe ktheje në vend."],
    supervisionNote: "Mësuesi hedh ujin e nxehtë dhe trajton aerosolin ose shkrepëset; nxënësit përgatitin pajisjet dhe vëzhgojnë.",
    clip: ["Ujë i ngrohtë në kavanoz, akull mbi kapak", "Shto pak grimca dhe mbylle", "Një re vërtitet — ngri kapakun dhe ajo del!"]
  }
},

/* ===== Leak-proof bag ===== */
{
  id: "leakproof", icon: "drop", topic: "matter", grades: "7–9", gmin: 7, gmax: 9, level: 1,
  supervision: "supervised", time: 15, eqType: "idea", predictAt: 2, ppe: ["goggles"],
  demo: { s: "beaker", from: "#bfdbfe", to: "#bfdbfe", level: 0.75 },
  video: null,
  sources: [
    { org: "American Chemical Society", title: "Poke but Don't Soak (Adventures in Chemistry)", url: "https://www.acs.org/education/whatischemistry/adventures-in-chemistry/experiments/poke-dont-soak.html" },
    { org: "American Chemical Society", title: "Poke, But Don't Soak (polymers activity, PDF)", url: "https://www.acs.org/content/dam/acsorg/education/resources/k-8/science-activities/characteristicsofmaterials/polymers/pok.pdf" },
    { org: "Fizzics Education", title: "Leak Proof Bag", url: "https://www.fizzicseducation.com.au/150-science-experiments/water-science-activities/leak-proof-bag/" }
  ],
  en: {
    name: "The Leak-Proof Bag", short: "Stretchy polymer chains",
    hook: "Stab sharp pencils right through a bag of water — and not a drop comes out.",
    aim: "Push pencils through a water-filled plastic bag and use the idea of long polymer chains to explain why the bag does not leak.",
    chemistry: [
      "Polythene (poly(ethene)) bags are made of a polymer: very long chain molecules built from thousands of small ethene molecules (monomers) joined end to end. The chains are tangled together like a bowl of cooked spaghetti.",
      "When a sharp pencil pushes through, the chains are pushed apart and stretched rather than snapped. Because they are flexible, they press back tightly around the smooth pencil, making a seal that water cannot get through.",
      "If you pull a pencil out, the stretched hole stays open and water pours out — the chains have been permanently moved apart. Choosing a polymer with the right properties, such as stretchiness or strength, is how chemists design materials for different jobs."
    ],
    equation: "many ethene units (CH₂=CH₂) → long polythene chains –(CH₂–CH₂)ₙ– that stretch and seal around the pencil",
    equipment: ["Strong polythene zip-lock freezer bag (about 1 litre)", "Water — enough to fill the bag about three-quarters full", "3–6 round pencils, freshly sharpened", "Large tray or bowl (or work over a sink)", "Paper towels", "Safety goggles"],
    steps: [
      "Put on goggles. Fill the bag about three-quarters full of water and seal it firmly.",
      "Hold the bag by its top edge over the tray, with your hand well away from where the pencil will come out.",
      "Push a sharpened pencil slowly and steadily into one side of the bag.",
      "Keep pushing until the point comes out through the other side, and leave the pencil in place.",
      "Add more pencils in the same way, spaced apart. Look closely at the plastic around each pencil.",
      "Finally, holding the bag over the tray, pull one pencil out and observe."
    ],
    predict: { q: "What will happen when the pencil goes right through the bag?", options: ["Hardly any water leaks out", "Water sprays out of both holes", "The bag bursts", "The water drains out slowly through the pencil"], answer: 0,
      result: "The pencil passes right through and the bag barely drips, even with several pencils in it. The plastic stretches into a tight collar around each pencil. When a pencil is pulled out, water pours out of the holes." },
    why: { q: "Why doesn't the water leak out around the pencils?", answer: 0, options: [
      { t: "The long, flexible polymer chains stretch and press tightly around the pencil", fb: "Yes — the chains are pushed aside, not broken, and they squeeze back against the pencil to form a watertight seal." },
      { t: "The pencil wood soaks up all the water", fb: "Wood absorbs only a little water, and slowly. The seal comes from the plastic stretching around the pencil." },
      { t: "Water is too thick to get through a hole", fb: "Water flows easily through holes — you can see that when a pencil is pulled out. It is the plastic sealing around the pencil that stops it." },
      { t: "The plastic melts around the pencil and glues it in place", fb: "Nothing gets hot enough to melt polythene. The chains simply stretch and grip the pencil." }
    ] },
    hazards: ["Sharpened pencil points can stab your hand.", "Spilled water makes the floor slippery."],
    precautions: ["Push the pencil slowly, away from your body, and keep your fingers away from where the point comes out.", "Work over a tray or sink and mop up spills straight away.", "Never point pencils at other people."],
    disposal: ["Empty the water into the sink.", "Put the punctured bag in the plastic recycling (or general waste if it isn't accepted) and dry the pencils."],
    supervisionNote: "Low-hazard activity — the teacher should remind students to push the pencils slowly and away from their hands.",
    clip: ["A bag full of water over a tray", "Push sharp pencils right through it", "Not a drop leaks out!"]
  },
  sq: {
    name: "Qesja që nuk pikon", short: "Zinxhirë polimerësh elastikë",
    hook: "Shpoje me lapsa të mprehur një qese me ujë — dhe nuk del asnjë pikë.",
    aim: "Fut lapsa përmes një qeseje plastike plot me ujë dhe përdor idenë e zinxhirëve të gjatë të polimerëve për të shpjeguar pse qesja nuk pikon.",
    chemistry: [
      "Qeset prej polietileni (poli(eteni)) janë prej një polimeri: molekula zinxhir shumë të gjata, të ndërtuara nga mijëra molekula të vogla eteni (monomere) të lidhura njëra pas tjetrës. Zinxhirët janë të ngatërruar me njëri-tjetrin si një pjatë me shpageti të ziera.",
      "Kur një laps i mprehur shtyhet përmes plastikës, zinxhirët largohen nga njëri-tjetri dhe zgjaten, por nuk këputen. Meqë janë elastikë, ata shtrëngohen fort rreth lapsit të lëmuar dhe formojnë një mbyllje nga e cila uji nuk mund të kalojë.",
      "Nëse e nxjerr një laps, vrima e zgjeruar mbetet e hapur dhe uji derdhet jashtë — zinxhirët janë larguar përgjithmonë. Kimistët zgjedhin polimere me vetitë e duhura, si elasticiteti ose qëndrueshmëria, për të projektuar materiale për përdorime të ndryshme."
    ],
    equation: "shumë njësi eteni (CH₂=CH₂) → zinxhirë të gjatë polietileni –(CH₂–CH₂)ₙ– që zgjaten dhe mbyllen rreth lapsit",
    equipment: ["Qese e fortë polietileni me mbyllje zinxhir, për ngrirës (rreth 1 litër)", "Ujë — sa për ta mbushur qesen rreth tre të katërtat", "3–6 lapsa të rrumbullakët, të sapomprehur", "Tabaka ose legen i madh (ose puno mbi lavaman)", "Letër kuzhine", "Syze mbrojtëse"],
    steps: [
      "Vendos syzet. Mbushe qesen me ujë rreth tre të katërtat dhe mbylle mirë.",
      "Mbaje qesen nga buza e sipërme mbi tabaka, me dorën larg vendit nga do të dalë lapsi.",
      "Shtyje një laps të mprehur ngadalë dhe në mënyrë të qëndrueshme në njërën anë të qeses.",
      "Vazhdo ta shtysh derisa maja të dalë nga ana tjetër dhe lëre lapsin në vend.",
      "Shto edhe lapsa të tjerë në të njëjtën mënyrë, larg njëri-tjetrit. Shiko nga afër plastikën rreth secilit laps.",
      "Në fund, duke e mbajtur qesen mbi tabaka, nxirr një laps dhe vëzhgo."
    ],
    predict: { q: "Çfarë do të ndodhë kur lapsi ta përshkojë qesen tej e tej?", options: ["Pothuajse nuk rrjedh ujë", "Uji spërkat nga të dyja vrimat", "Qesja plas", "Uji del ngadalë përmes lapsit"], answer: 0,
      result: "Lapsi kalon tej e tej dhe qesja mezi pikon, edhe me disa lapsa brenda. Plastika zgjatet dhe formon një jakë të ngushtë rreth secilit laps. Kur nxirret një laps, uji derdhet nga vrimat." },
    why: { q: "Pse uji nuk rrjedh rreth lapsave?", answer: 0, options: [
      { t: "Zinxhirët e gjatë dhe elastikë të polimerit zgjaten dhe shtrëngohen fort rreth lapsit", fb: "Po — zinxhirët shtyhen mënjanë, nuk këputen, dhe shtrëngohen përsëri pas lapsit duke formuar një mbyllje që nuk e lë ujin të kalojë." },
      { t: "Druri i lapsit e thith gjithë ujin", fb: "Druri thith vetëm pak ujë, dhe ngadalë. Mbyllja vjen nga plastika që zgjatet rreth lapsit." },
      { t: "Uji është shumë i trashë për të kaluar nëpër një vrimë", fb: "Uji rrjedh lehtë nëpër vrima — e sheh kur nxirret një laps. Ajo që e ndalon është plastika që mbyllet rreth lapsit." },
      { t: "Plastika shkrihet rreth lapsit dhe e ngjit atë", fb: "Asgjë nuk nxehet aq sa të shkrijë polietilenin. Zinxhirët thjesht zgjaten dhe e shtrëngojnë lapsin." }
    ] },
    hazards: ["Majat e mprehura të lapsave mund të të shpojnë dorën.", "Uji i derdhur e bën dyshemenë të rrëshqitshme."],
    precautions: ["Shtyje lapsin ngadalë, larg trupit, dhe mbaji gishtat larg vendit nga del maja.", "Puno mbi tabaka ose lavaman dhe fshi menjëherë çdo derdhje.", "Mos i drejto kurrë lapsat nga të tjerët."],
    disposal: ["Zbraze ujin në lavaman.", "Hidhe qesen e shpuar në koshin e riciklimit të plastikës (ose te mbeturinat e zakonshme nëse nuk pranohet) dhe thaji lapsat."],
    supervisionNote: "Aktivitet me rrezik të ulët — mësuesi duhet t'u kujtojë nxënësve t'i shtyjnë lapsat ngadalë dhe larg duarve.",
    clip: ["Një qese plot me ujë mbi tabaka", "Shtyj lapsa të mprehur tej e tej", "Nuk rrjedh asnjë pikë!"]
  }
},

/* ===== Instant ice (supercooling) ===== */
{
  id: "supercool", icon: "snow", topic: "matter", grades: "8–9", gmin: 8, gmax: 9, level: 1,
  supervision: "supervised", time: 25, eqType: "idea", predictAt: 3, ppe: ["goggles"],
  demo: { s: "beaker", from: "#e0f2fe", to: "#f1f5f9", cloudy: "#ffffff", delay: true, temp: "up" },
  video: null,
  sources: [
    { org: "Science Buddies", title: "Supercooling Water and Snap Freezing", url: "https://www.sciencebuddies.org/science-fair-projects/project-ideas/Phys_p033/physics/supercooling-water-and-snap-freezing" },
    { org: "University of Illinois Physics Van", title: "Supercooled Water in the Freezer", url: "https://van.physics.illinois.edu/ask/listing/19505" },
    { org: "Home Science Tools", title: "Super-Cooled Water Science Project", url: "https://learning-center.homesciencetools.com/article/super-cooled-water-science-project/" }
  ],
  en: {
    name: "Instant Ice", short: "Supercooling & nucleation",
    hook: "Tap a bottle of ice-cold water and watch it turn to ice before your eyes.",
    aim: "Observe supercooled water below 0 °C and find out how a tap or an ice crystal makes it freeze almost instantly.",
    chemistry: [
      "Water normally freezes at 0 °C, but to start freezing the molecules must first line up into a tiny ice crystal — a 'seed'. This first step is called nucleation, and it usually happens on dust, impurities or scratches. Very pure water in a smooth bottle has few of these, so if it is cooled gently and left undisturbed it can stay liquid several degrees below 0 °C. This is supercooled water.",
      "Supercooled water is unstable. A sharp tap, a shake or touching it with an ice crystal gives the molecules the start they need. Once the first crystals form, more molecules join on in a chain, so ice spreads through the bottle in seconds — or builds up into a tower when the water is poured onto an ice cube.",
      "Freezing releases energy (latent heat) as the molecules lock into the ice structure. This heat warms the mixture up to 0 °C, which stops it all freezing at once, so you get slushy ice at 0 °C. The same thing happens in clouds, where supercooled droplets freeze onto aircraft wings."
    ],
    equation: "supercooled water (below 0 °C) + a 'seed' crystal → ice + energy released (warms to 0 °C)",
    equipment: ["4 unopened 500 mL plastic bottles of purified (or distilled) water", "1 bottle of tap water for comparison", "Freezer at about −15 to −20 °C (prepared by the teacher)", "Ice cubes and a cold glass bowl or beaker", "Thermometer or temperature probe", "Tray and paper towels", "Safety goggles"],
    steps: [
      "About 2–2.5 hours before the lesson, the teacher lays the bottles flat in the freezer where they won't be knocked, and checks them from time to time.",
      "Put on goggles. The teacher gently lifts out a bottle of purified water without shaking it. Check that it is still liquid; the tap-water bottle may already contain ice.",
      "Record the freezer temperature: the water in the bottle is below 0 °C but still liquid.",
      "Hold the bottle by the neck and give it one sharp tap on the bench (or a quick shake). Watch closely.",
      "Slowly open a second bottle and pour it gently onto an ice cube in the cold bowl. Watch what grows.",
      "Put the thermometer into the slush and record the temperature.",
      "Compare with the tap-water bottle and discuss why purified water supercools more easily."
    ],
    predict: { q: "What will happen when you tap the bottle of supercooled water?", options: ["Ice crystals shoot through the water and it turns to slush in seconds", "Nothing — it stays liquid", "The bottle bursts open", "The water starts to boil"], answer: 0,
      result: "A cloud of white ice crystals spreads from the point of the tap through the whole bottle within a few seconds, leaving slush. Poured onto an ice cube, the water freezes as it lands and builds an icy tower. The slush measures about 0 °C — warmer than the freezer." },
    why: { q: "Why did the water stay liquid below 0 °C until it was tapped?", answer: 0, options: [
      { t: "Ice crystals need a starting point (a nucleus); the pure, still water had none until the tap provided one", fb: "Right — the tap (or the ice cube) triggers nucleation. Once the first tiny crystals form, the rest of the water freezes onto them very quickly." },
      { t: "The water was not really below 0 °C", fb: "The freezer was well below 0 °C and the water was in it for over two hours. It was colder than 0 °C — but still liquid, because nothing had started the crystals." },
      { t: "Purified water has a much lower freezing point than tap water", fb: "Pure water freezes at 0 °C. Purified water supercools more easily because it has fewer particles for ice to start forming on, not because its freezing point is different." },
      { t: "Tapping the bottle lets cold air in", fb: "The bottle stays sealed when you tap it. The tap causes a tiny disturbance that lets the first ice crystals form." }
    ] },
    hazards: ["Plastic bottles can split if the water freezes solid in the freezer; glass bottles can shatter.", "Very cold bottles and ice can cause cold burns if held for a long time.", "Melting ice and spilled water make the floor slippery."],
    precautions: ["Use plastic bottles only — never glass — and leave them in the freezer only as long as the teacher says.", "Handle cold bottles by the neck and put them down after a short time.", "Work over a tray and wipe up spills straight away.", "Never eat or drink in the lab — don't drink the water or eat the ice."],
    disposal: ["Let the ice melt and pour the water down the sink.", "Recycle the empty plastic bottles."],
    supervisionNote: "The teacher prepares the bottles and times them in the freezer; students do the tapping and pouring.",
    clip: ["A bottle of water, chilled below 0 °C", "Give it one sharp tap", "Ice spreads through it in seconds!"]
  },
  sq: {
    name: "Akull në çast", short: "Mbiftohja dhe bërthamëzimi",
    hook: "Godit lehtë një shishe me ujë të akullt dhe shiko si kthehet në akull para syve të tu.",
    aim: "Vëzhgo ujin e mbiftohur nën 0 °C dhe zbulo si një goditje e lehtë ose një kristal akulli e bën të ngrijë pothuajse menjëherë.",
    chemistry: [
      "Uji zakonisht ngrin në 0 °C, por që të fillojë ngrirja, molekulat duhet fillimisht të renditen në një kristal të vogël akulli — një ‘farë’. Ky hap i parë quhet bërthamëzim (nukleacion) dhe zakonisht ndodh mbi pluhur, papastërti ose gërvishtje. Uji shumë i pastër në një shishe të lëmuar ka pak prej tyre, ndaj nëse ftohet butë dhe nuk lëvizet, mund të mbetet i lëngshëm disa gradë nën 0 °C. Ky është ujë i mbiftohur.",
      "Uji i mbiftohur është i paqëndrueshëm. Një goditje e fortë, një tundje ose prekja me një kristal akulli u jep molekulave nisjen që u duhet. Sapo formohen kristalet e para, molekula të tjera bashkohen me to si në zinxhir, ndaj akulli përhapet në shishe brenda pak sekondash — ose ngrihet si kullë kur uji derdhet mbi një kub akulli.",
      "Ngrirja çliron energji (nxehtësi latente) ndërsa molekulat fiksohen në strukturën e akullit. Kjo nxehtësi e ngroh përzierjen deri në 0 °C, gjë që e pengon të ngrijë e gjitha njëherësh, ndaj përftohet akull i qullët (si granita) në 0 °C. E njëjta gjë ndodh në re, ku pikat e mbiftohura ngrijnë mbi krahët e avionëve."
    ],
    equation: "ujë i mbiftohur (nën 0 °C) + një kristal ‘farë’ → akull + energji e çliruar (ngrohet deri në 0 °C)",
    equipment: ["4 shishe plastike të pahapura 500 mL me ujë të pastruar (ose të distiluar)", "1 shishe me ujë rubineti për krahasim", "Ngrirës në rreth −15 deri −20 °C (i përgatitur nga mësuesi)", "Kuba akulli dhe një tas qelqi ose gotë kimike e ftohtë", "Termometër ose sondë temperature", "Tabaka dhe letër kuzhine", "Syze mbrojtëse"],
    steps: [
      "Rreth 2–2.5 orë para orës së mësimit, mësuesi i vendos shishet shtrirë në ngrirës, aty ku nuk goditen, dhe i kontrollon herë pas here.",
      "Vendos syzet. Mësuesi nxjerr me kujdes një shishe me ujë të pastruar pa e tundur. Kontrollo që uji është ende i lëngshëm; shishja me ujë rubineti mund të ketë tashmë akull.",
      "Shëno temperaturën e ngrirësit: uji në shishe është nën 0 °C, por ende i lëngshëm.",
      "Mbaje shishen nga qafa dhe godite një herë fort mbi tavolinë (ose tunde shpejt). Vëzhgo me vëmendje.",
      "Hap ngadalë një shishe të dytë dhe derdhe butë mbi një kub akulli në tasin e ftohtë. Shiko çfarë rritet.",
      "Fut termometrin në akullin e qullët dhe shëno temperaturën.",
      "Krahaso me shishen me ujë rubineti dhe diskuto pse uji i pastruar mbiftohet më lehtë."
    ],
    predict: { q: "Çfarë do të ndodhë kur ta godasësh shishen me ujë të mbiftohur?", options: ["Kristalet e akullit përhapen në ujë dhe brenda pak sekondash bëhet akull i qullët", "Asgjë — mbetet i lëngshëm", "Shishja plas", "Uji fillon të vlojë"], answer: 0,
      result: "Nga pika e goditjes përhapet një re kristalesh të bardha akulli që brenda pak sekondash mbush gjithë shishen dhe e kthen ujin në akull të qullët. I derdhur mbi një kub akulli, uji ngrin sapo bie dhe ngre një kullë akulli. Akulli i qullët mat rreth 0 °C — më ngrohtë se ngrirësi." },
    why: { q: "Pse uji mbeti i lëngshëm nën 0 °C derisa u godit?", answer: 0, options: [
      { t: "Kristalet e akullit kanë nevojë për një pikënisje (bërthamë); uji i pastër dhe i palëvizur nuk kishte asnjë derisa e krijoi goditja", fb: "Saktë — goditja (ose kubi i akullit) shkakton bërthamëzimin. Sapo formohen kristalet e para të vogla, pjesa tjetër e ujit ngrin shumë shpejt mbi to." },
      { t: "Uji në të vërtetë nuk ishte nën 0 °C", fb: "Ngrirësi ishte shumë nën 0 °C dhe uji qëndroi aty më shumë se dy orë. Ishte më i ftohtë se 0 °C — por ende i lëngshëm, sepse asgjë nuk i kishte nisur kristalet." },
      { t: "Uji i pastruar ka pikë ngrirjeje shumë më të ulët se uji i rubinetit", fb: "Uji i pastër ngrin në 0 °C. Uji i pastruar mbiftohet më lehtë sepse ka më pak grimca ku të fillojë akulli, jo sepse pika e ngrirjes është ndryshe." },
      { t: "Goditja e shishes fut brenda ajër të ftohtë", fb: "Shishja mbetet e mbyllur kur e godet. Goditja shkakton një shqetësim të vogël që lejon të formohen kristalet e para të akullit." }
    ] },
    hazards: ["Shishet plastike mund të çahen nëse uji ngrin plotësisht në ngrirës; shishet prej qelqi mund të thyhen copë-copë.", "Shishet shumë të ftohta dhe akulli mund të shkaktojnë djegie nga të ftohtit nëse mbahen gjatë.", "Akulli që shkrihet dhe uji i derdhur e bëjnë dyshemenë të rrëshqitshme."],
    precautions: ["Përdor vetëm shishe plastike — kurrë prej qelqi — dhe lëri në ngrirës vetëm aq sa thotë mësuesi.", "Mbaji shishet e ftohta nga qafa dhe lëri poshtë pas pak kohe.", "Puno mbi tabaka dhe fshi menjëherë çdo derdhje.", "Mos ha dhe mos pi kurrë në laborator — mos e pi ujin dhe mos e ha akullin."],
    disposal: ["Lëre akullin të shkrihet dhe derdhe ujin në lavaman.", "Riciklo shishet plastike bosh."],
    supervisionNote: "Mësuesi i përgatit shishet dhe mat kohën e tyre në ngrirës; nxënësit bëjnë goditjen dhe derdhjen.",
    clip: ["Një shishe me ujë, e ftohur nën 0 °C", "Jepi një goditje të fortë", "Akulli përhapet brenda saj për pak sekonda!"]
  }
},

/* ===== Bioplastic ===== */
{
  id: "bioplastic", icon: "leaf", topic: "matter", grades: "9–11", gmin: 9, gmax: 11, level: 2,
  supervision: "close", time: 40, eqType: "idea", predictAt: 2, ppe: ["goggles", "coat", "hair"],
  demo: { s: "beaker", from: "#f5f5f4", to: "#dbe7e4", level: 0.35, temp: "up" },
  video: null,
  sources: [
    { org: "Royal Society of Chemistry", title: "Making plastic from potato starch", url: "https://edu.rsc.org/experiments/making-plastic-from-potato-starch/1741.article" },
    { org: "National Science Week (Australia)", title: "DIY Science: Corn Flour Bioplastic (PDF)", url: "https://www.scienceweek.net.au/wp-content/uploads/2022/07/Corn_Flour_Bioplastic.pdf" }
  ],
  en: {
    name: "Make a Bioplastic", short: "Starch, a natural polymer",
    hook: "Turn cornflour from the kitchen cupboard into a sheet of plastic you can bend.",
    aim: "Make a starch-based bioplastic film and compare how flexible it is when it is made with and without glycerol.",
    chemistry: [
      "Starch is a natural polymer made by plants: long chains of glucose units joined together. It comes in two forms — amylose, which has straight chains, and amylopectin, which is highly branched. Heating starch with water makes the grains swell and burst, so the chains spread out and the cloudy mixture turns into a clear gel.",
      "The branched amylopectin gets in the way of the chains lining up. A little acid (the ethanoic acid in vinegar) helps to break up some of these branches, so the chains can pack together and form a film as the water evaporates.",
      "On its own the film is brittle, because the chains pack tightly. Glycerol (propane-1,2,3-triol) is a plasticiser: its small molecules, and the water they hold, sit between the chains and stop them locking together, so the plastic stays flexible. Bioplastics like this come from renewable plants and many are biodegradable, unlike most plastics made from crude oil."
    ],
    equation: "starch chains + water + glycerol (plasticiser) —heat, a little acid→ clear gel → dries to a flexible bioplastic film",
    equipment: ["Cornflour (cornstarch) — 2 × 10 g", "Water — 2 × 60 cm³", "White vinegar — 2 × 5 cm³", "Glycerol — 3 cm³", "250 cm³ beaker and a glass rod (or spoon) for stirring", "Hotplate, or Bunsen burner with tripod and gauze", "Two labelled Petri dishes (or baking paper / aluminium foil)", "Heat-resistant mat and beaker tongs", "Safety goggles and lab coat"],
    steps: [
      "Put on goggles and a lab coat (tie back long hair if you are using a Bunsen burner). Label two dishes 'with glycerol' and 'without glycerol'.",
      "In the beaker, stir 10 g of cornflour into 60 cm³ of cold water until there are no lumps. Add 5 cm³ of vinegar and 3 cm³ of glycerol.",
      "Heat gently, stirring all the time. Do not let it boil hard or boil dry.",
      "Keep stirring as the mixture thickens. Stop heating when it changes from milky white to a thick, clear gel (about 5–10 minutes).",
      "Use tongs to move the beaker onto the heat-resistant mat. Let it cool for a few minutes, then spread the gel thinly in the dish labelled 'with glycerol'.",
      "Repeat with fresh cornflour, water and vinegar but no glycerol, and spread it in the other dish.",
      "Leave both to dry for 1–2 days, then peel them off and compare how they bend, stretch and break."
    ],
    predict: { q: "How will the film made without glycerol compare with the one made with glycerol?", options: ["It will be more brittle and crack when bent", "It will be more flexible and stretchy", "It will stay liquid and never set", "They will be exactly the same"], answer: 0,
      result: "While heating, the milky mixture suddenly thickens into a clear, sticky gel. After drying, the film with glycerol is see-through and bends like a plastic bag, while the film without glycerol is stiff and brittle and cracks when you bend it." },
    why: { q: "Why does adding glycerol make the bioplastic flexible?", answer: 0, options: [
      { t: "Glycerol molecules sit between the starch chains and stop them packing tightly together", fb: "Yes — glycerol is a plasticiser. It (and the water it holds) keeps the chains apart so they can slide past each other when the film bends." },
      { t: "Glycerol reacts with the starch to make a new, rubbery polymer", fb: "Glycerol doesn't join onto the chains here; it simply sits between them. It is a physical effect, which is why it is called a plasticiser." },
      { t: "Glycerol makes the starch chains much longer", fb: "The chains don't get longer — if anything, the acid shortens some branches. Glycerol works by spacing the chains apart." },
      { t: "Glycerol keeps the plastic wet forever", fb: "The film does dry, but glycerol holds on to a little water. Mainly, glycerol and that water separate the chains, which keeps the film flexible." }
    ] },
    hazards: ["The hot starch gel is sticky and can cause serious burns if it gets on skin.", "The thick mixture can spit or 'pop' as it heats.", "Hot beakers, hotplates and tripods stay hot for a long time.", "Vinegar stings if it gets in your eyes."],
    precautions: ["Wear goggles and a lab coat; stand up while heating and keep your face away from the beaker.", "Heat gently and stir all the time; never let the mixture boil dry.", "Move the beaker only with tongs, and let the gel cool before spreading it.", "If hot gel touches skin, cool it under cold running water for at least 10 minutes and tell the teacher.", "Never eat or drink in the lab — not even the food ingredients."],
    disposal: ["Put leftover gel and finished films in the bin or compost — do not pour gel down the sink.", "Soak beakers in warm water to loosen dried starch before washing them."],
    supervisionNote: "Close supervision while heating: the teacher checks that the mixture is heated gently and that hot beakers are moved with tongs.",
    clip: ["Milky cornflour, water and glycerol", "Heat gently and stir all the time", "It turns to a clear gel — tomorrow, plastic!"]
  },
  sq: {
    name: "Përgatit një bioplastikë", short: "Niseshteja, një polimer natyror",
    hook: "Ktheje niseshtenë e misrit nga dollapi i kuzhinës në një fletë plastike që përkulet.",
    aim: "Përgatit një film bioplastike nga niseshteja dhe krahaso sa fleksibël është kur bëhet me glicerinë dhe pa glicerinë.",
    chemistry: [
      "Niseshteja është një polimer natyror që e prodhojnë bimët: zinxhirë të gjatë njësish glukoze të lidhura së bashku. Ajo ka dy forma — amilozën, me zinxhirë të drejtë, dhe amilopektinën, shumë të degëzuar. Kur niseshteja ngrohet me ujë, kokrrizat fryhen dhe çahen, zinxhirët shpërndahen dhe përzierja e turbullt kthehet në një xhel të tejdukshëm.",
      "Amilopektina e degëzuar i pengon zinxhirët të rreshtohen. Pak acid (acidi etanoik në uthull) ndihmon të copëtohen disa prej këtyre degëve, kështu që zinxhirët mund të paketohen pranë njëri-tjetrit dhe të formojnë një film ndërsa uji avullon.",
      "Pa asgjë tjetër, filmi del i brishtë, sepse zinxhirët paketohen ngushtë. Glicerina (propan-1,2,3-trioli) është plastifikues: molekulat e saj të vogla, bashkë me ujin që mbajnë, futen midis zinxhirëve dhe i pengojnë të kapen me njëri-tjetrin, ndaj plastika mbetet fleksibël. Bioplastikat si kjo vijnë nga bimë të rinovueshme dhe shumë prej tyre janë të biodegradueshme, ndryshe nga shumica e plastikave të prodhuara nga nafta."
    ],
    equation: "zinxhirë niseshteje + ujë + glicerinë (plastifikues) —nxehtësi, pak acid→ xhel i tejdukshëm → thahet në një film fleksibël bioplastike",
    equipment: ["Niseshte misri — 2 × 10 g", "Ujë — 2 × 60 cm³", "Uthull e bardhë — 2 × 5 cm³", "Glicerinë — 3 cm³", "Gotë kimike 250 cm³ dhe shufër qelqi (ose lugë) për përzierje", "Pllakë ngrohëse, ose llambë Bunsen me trekëmbësh dhe rrjetë teli", "Dy pjata Petri të etiketuara (ose letër furre / letër alumini)", "Mbështetëse rezistente ndaj nxehtësisë dhe darë për gota", "Syze mbrojtëse dhe përparëse laboratori"],
    steps: [
      "Vendos syzet dhe përparësen e laboratorit (lidh flokët e gjatë nëse përdor llambë Bunsen). Etiketo dy pjata: ‘me glicerinë’ dhe ‘pa glicerinë’.",
      "Në gotën kimike, përziej 10 g niseshte misri me 60 cm³ ujë të ftohtë derisa të mos mbeten gunga. Shto 5 cm³ uthull dhe 3 cm³ glicerinë.",
      "Ngroh butë duke e përzier vazhdimisht. Mos e lër të vlojë fort ose të thahet.",
      "Vazhdo ta përziesh ndërsa përzierja trashet. Ndalo ngrohjen kur ajo kthehet nga e bardhë si qumësht në një xhel të trashë e të tejdukshëm (rreth 5–10 minuta).",
      "Me darë, kaloje gotën mbi mbështetësen rezistente ndaj nxehtësisë. Lëre të ftohet disa minuta, pastaj shtrije xhelin hollë në pjatën ‘me glicerinë’.",
      "Përsërite me niseshte, ujë dhe uthull të freskët, por pa glicerinë, dhe shtrije në pjatën tjetër.",
      "Lëri të dyja të thahen për 1–2 ditë, pastaj shkëputi dhe krahaso si përkulen, zgjaten dhe thyhen."
    ],
    predict: { q: "Si do të jetë filmi pa glicerinë krahasuar me atë me glicerinë?", options: ["Më i brishtë dhe do të çahet kur përkulet", "Më fleksibël dhe më elastik", "Do të mbetet i lëngshëm dhe nuk do të ngurtësohet kurrë", "Do të jenë saktësisht njësoj"], answer: 0,
      result: "Gjatë ngrohjes, përzierja e bardhë si qumësht trashet papritur dhe kthehet në një xhel ngjitës e të tejdukshëm. Pas tharjes, filmi me glicerinë është i tejdukshëm dhe përkulet si një qese plastike, ndërsa filmi pa glicerinë është i ngurtë e i brishtë dhe çahet kur e përkul." },
    why: { q: "Pse shtimi i glicerinës e bën bioplastikën fleksibël?", answer: 0, options: [
      { t: "Molekulat e glicerinës futen midis zinxhirëve të niseshtesë dhe i pengojnë të paketohen ngushtë", fb: "Po — glicerina është plastifikues. Ajo (dhe uji që mban) i mban zinxhirët larg njëri-tjetrit, që të rrëshqasin kur filmi përkulet." },
      { t: "Glicerina reagon me niseshtenë dhe formon një polimer të ri si gome", fb: "Këtu glicerina nuk lidhet me zinxhirët; thjesht futet midis tyre. Është efekt fizik, prandaj quhet plastifikues." },
      { t: "Glicerina i bën zinxhirët e niseshtesë shumë më të gjatë", fb: "Zinxhirët nuk zgjaten — përkundrazi, acidi shkurton disa degë. Glicerina vepron duke i larguar zinxhirët nga njëri-tjetri." },
      { t: "Glicerina e mban plastikën të lagur përgjithmonë", fb: "Filmi thahet, por glicerina mban pak ujë. Kryesisht, glicerina dhe ky ujë i ndajnë zinxhirët, gjë që e mban filmin fleksibël." }
    ] },
    hazards: ["Xheli i nxehtë i niseshtesë është ngjitës dhe mund të shkaktojë djegie të rënda nëse bie në lëkurë.", "Përzierja e trashë mund të spërkasë ose të ‘kërcasë’ gjatë ngrohjes.", "Gotat, pllakat ngrohëse dhe trekëmbëshat mbeten të nxehtë për shumë kohë.", "Uthulla të djeg nëse të hyn në sy."],
    precautions: ["Mbaj syze mbrojtëse dhe përparëse laboratori; qëndro në këmbë gjatë ngrohjes dhe mbaje fytyrën larg gotës.", "Ngroh butë dhe përziej vazhdimisht; mos e lër kurrë përzierjen të thahet.", "Lëvize gotën vetëm me darë dhe lëre xhelin të ftohet para se ta shtrish.", "Nëse xheli i nxehtë prek lëkurën, ftohe nën ujë të ftohtë që rrjedh për të paktën 10 minuta dhe njofto mësuesin.", "Mos ha dhe mos pi kurrë në laborator — as përbërësit ushqimorë."],
    disposal: ["Hidhi xhelin e mbetur dhe filmat e përfunduar në kosh ose në kompost — mos e derdh xhelin në lavaman.", "Lëri gotat në ujë të ngrohtë që të zbutet niseshteja e tharë para se t'i lash."],
    supervisionNote: "Mbikëqyrje e afërt gjatë ngrohjes: mësuesi kontrollon që përzierja të ngrohet butë dhe që gotat e nxehta të lëvizen me darë.",
    clip: ["Niseshte, ujë dhe glicerinë, të bardha si qumësht", "Ngroh butë dhe përziej pa pushim", "Bëhet xhel i tejdukshëm — nesër, plastikë!"]
  }
},

/* ===== Silver halide precipitates ===== */
{
  id: "halides", icon: "tubes", topic: "analysis", grades: "11–12", gmin: 11, gmax: 12, level: 3,
  supervision: "close", time: 30, eqType: "equation", predictAt: 3, ppe: ["goggles", "gloves", "coat"],
  demo: { s: "rack", tubes: [
    { from: "#f8fafc", to: "#f1f5f9", precip: "#ffffff" },
    { from: "#f8fafc", to: "#f5efd9", precip: "#efe2b8" },
    { from: "#f8fafc", to: "#fbf3c4", precip: "#fde047" }
  ] },
  video: null,
  sources: [
    { org: "Royal Society of Chemistry", title: "Testing for negative ions", url: "https://edu.rsc.org/experiments/testing-for-negative-ions/758.article" },
    { org: "Chemguide", title: "Testing for halide ions", url: "https://www.chemguide.co.uk/inorganic/group7/testing.html" },
    { org: "Royal Society of Chemistry", title: "Solubility trends of metal halides (microscale)", url: "https://edu.rsc.org/experiments/solubility-trends-of-metal-halides/1888.article" }
  ],
  en: {
    name: "Silver Halide Precipitates", short: "Testing for halide ions",
    hook: "Three colourless solutions, one reagent — and three differently coloured precipitates reveal which halide is which.",
    aim: "Use acidified silver nitrate solution to identify chloride, bromide and iodide ions from the colour of their precipitates, and confirm the results with ammonia solution.",
    chemistry: [
      "Silver nitrate solution contains Ag⁺ ions. Most silver salts are soluble, but silver chloride, silver bromide and silver iodide are very insoluble, so a precipitate forms at once when Ag⁺ meets a halide ion. The colour changes from white (AgCl) to cream (AgBr) to pale yellow (AgI) going down the halogen group (Group 7).",
      "The test solution is first acidified with dilute nitric acid. This removes ions such as carbonate (CO₃²⁻) and hydroxide (OH⁻), which would otherwise give their own silver precipitates and confuse the result. Hydrochloric acid cannot be used because it would add chloride ions; nitrate ions do not form a precipitate with silver.",
      "Because white, cream and pale yellow can look similar, ammonia solution is used as a confirming test. Ammonia forms the soluble complex ion [Ag(NH₃)₂]⁺: AgCl dissolves in dilute ammonia, AgBr only in concentrated ammonia, and AgI in neither, because the solubility of the silver halides falls from chloride to iodide. Silver halides also darken in sunlight — the chemistry behind film photography."
    ],
    equation: "Ag⁺(aq) + Cl⁻(aq) → AgCl(s)   ·   Ag⁺(aq) + Br⁻(aq) → AgBr(s)   ·   Ag⁺(aq) + I⁻(aq) → AgI(s)",
    equipment: ["Sodium chloride, sodium bromide and sodium iodide solutions, 0.1 mol/dm³ — about 2 cm³ of each", "Dilute nitric acid, 0.5 mol/dm³ (irritant) — about 3 cm³", "Silver nitrate solution, 0.05 mol/dm³ (stains skin; irritant) — in a dropper bottle", "Dilute ammonia solution (2 mol/dm³) and concentrated ammonia — used ONLY by the teacher", "3 test tubes in a rack, labelled Cl⁻, Br⁻ and I⁻", "Dropping pipettes", "Black card or tile as a background", "Safety goggles, nitrile gloves and lab coat"],
    steps: [
      "Put on goggles, gloves and a lab coat.",
      "Add about 1 cm³ (a depth of about 1 cm) of each halide solution to its labelled test tube.",
      "Add about 1 cm³ of dilute nitric acid to each tube and swirl gently.",
      "Add 5 drops of silver nitrate solution to each tube.",
      "Hold the tubes against the black card and record the colour of each precipitate.",
      "The teacher pours a little of each mixture into fresh tubes and adds dilute ammonia solution, then — in a fume cupboard — concentrated ammonia. Record which precipitates dissolve.",
      "Optional: leave a tube of silver chloride on a sunny windowsill for 10–15 minutes and note any colour change."
    ],
    predict: { q: "What will you see when silver nitrate is added to the three acidified solutions?", options: ["White, cream and pale yellow precipitates", "All three stay colourless", "All three give the same white precipitate", "Bubbles of gas in every tube"], answer: 0,
      result: "A precipitate forms instantly in every tube: white with chloride, cream with bromide and pale yellow with iodide. In the ammonia test, the white precipitate dissolves in dilute ammonia, the cream one only in concentrated ammonia, and the yellow one does not dissolve. Silver chloride left in sunlight slowly turns grey-purple." },
    why: { q: "Why is the solution acidified with dilute nitric acid, not hydrochloric acid, before silver nitrate is added?", answer: 0, options: [
      { t: "Nitric acid removes carbonate and hydroxide ions without adding any ion that forms a silver precipitate", fb: "Correct — carbonate and hydroxide would also give precipitates with Ag⁺. Hydrochloric acid would add Cl⁻ and give a white precipitate every time." },
      { t: "The acid makes the precipitate colours brighter", fb: "The acid doesn't change the colours. Its job is to remove ions that would give false precipitates." },
      { t: "Silver nitrate only reacts in hot acid", fb: "The reaction happens instantly at room temperature. The acid is there to remove interfering ions such as carbonate." },
      { t: "Nitric acid dissolves the silver halide so it can be seen", fb: "Silver halides do not dissolve in dilute nitric acid — that is why the precipitate stays. The acid removes other ions that could interfere." }
    ] },
    hazards: ["Silver nitrate solution stains skin and clothes brown-black and irritates the eyes; it is toxic to aquatic life.", "Dilute nitric acid (0.5 mol/dm³) irritates the eyes and skin.", "Concentrated ammonia is corrosive and gives off choking fumes.", "Mixtures of silver salts and ammonia can form explosive compounds if they are left to stand and dry out."],
    precautions: ["Wear goggles, nitrile gloves and a lab coat throughout.", "Use dropping pipettes and small volumes; wipe up drips and wash skin straight away if it is splashed.", "Only the teacher handles ammonia solution, and concentrated ammonia only in a fume cupboard.", "Never store silver–ammonia mixtures — they are made safe straight after the test."],
    disposal: ["Collect all silver-containing mixtures (without ammonia) in the silver residues container — never pour them down the sink.", "The teacher makes any silver–ammonia mixtures safe immediately after the test (e.g. by acidifying with dilute nitric acid), following CLEAPSS guidance — they must never be kept.", "Rinse test tubes with plenty of water."],
    supervisionNote: "Close supervision for older students: the teacher supplies the silver nitrate in dropper bottles, carries out all ammonia tests (concentrated ammonia in a fume cupboard) and makes silver–ammonia residues safe at once.",
    clip: ["Three colourless halide solutions", "Add a few drops of silver nitrate", "White, cream and yellow precipitates appear!"]
  },
  sq: {
    name: "Halogjenuret e argjendit", short: "Prova për jonet halogjenure",
    hook: "Tri tretësira pa ngjyrë, një reagjent — dhe tri precipitate me ngjyra të ndryshme zbulojnë cili halogjenur është cili.",
    aim: "Përdor tretësirë nitrati argjendi të acidifikuar për të identifikuar jonet klorur, bromur dhe jodur nga ngjyra e precipitateve, dhe konfirmo rezultatet me tretësirë amoniaku.",
    chemistry: [
      "Tretësira e nitratit të argjendit përmban jone Ag⁺. Shumica e kripërave të argjendit janë të tretshme, por kloruri, bromuri dhe joduri i argjendit janë shumë pak të tretshëm, ndaj kur Ag⁺ takon një jon halogjenur, formohet menjëherë një precipitat. Ngjyra kalon nga e bardhë (AgCl) në krem (AgBr) dhe në të verdhë të zbehtë (AgI) duke zbritur në grupin e halogjenëve (grupi 7).",
      "Tretësira që provohet fillimisht acidifikohet me acid nitrik të holluar. Kjo largon jone si karbonati (CO₃²⁻) dhe hidroksidi (OH⁻), të cilët përndryshe do të jepnin precipitatet e tyre me argjendin dhe do ta ngatërronin rezultatin. Acidi klorhidrik nuk mund të përdoret sepse do të shtonte jone klorur; jonet nitrat nuk formojnë precipitat me argjendin.",
      "Meqë e bardha, kremi dhe e verdha e zbehtë mund të duken të ngjashme, tretësira e amoniakut përdoret si provë konfirmuese. Amoniaku formon jonin kompleks të tretshëm [Ag(NH₃)₂]⁺: AgCl tretet në amoniak të holluar, AgBr vetëm në amoniak të përqendruar, ndërsa AgI në asnjërin, sepse tretshmëria e halogjenureve të argjendit zvogëlohet nga kloruri te joduri. Halogjenuret e argjendit errësohen edhe në dritën e diellit — kjo është kimia në bazë të fotografisë me film."
    ],
    equation: "Ag⁺(aq) + Cl⁻(aq) → AgCl(s)   ·   Ag⁺(aq) + Br⁻(aq) → AgBr(s)   ·   Ag⁺(aq) + I⁻(aq) → AgI(s)",
    equipment: ["Tretësira klorur natriumi, bromur natriumi dhe jodur natriumi, 0.1 mol/dm³ — rreth 2 cm³ nga secila", "Acid nitrik i holluar, 0.5 mol/dm³ (irritues) — rreth 3 cm³", "Tretësirë nitrati argjendi, 0.05 mol/dm³ (njollos lëkurën; irrituese) — në shishe me pikatore", "Tretësirë amoniaku e holluar (2 mol/dm³) dhe amoniak i përqendruar — VETËM për mësuesin", "3 provëza në mbajtëse, të etiketuara Cl⁻, Br⁻ dhe I⁻", "Pipeta pikuese", "Karton ose pllakë e zezë si sfond", "Syze mbrojtëse, doreza nitrili dhe përparëse laboratori"],
    steps: [
      "Vendos syzet, dorezat dhe përparësen e laboratorit.",
      "Hidh rreth 1 cm³ (rreth 1 cm lartësi) nga secila tretësirë halogjenuri në provëzën me etiketën përkatëse.",
      "Shto rreth 1 cm³ acid nitrik të holluar në secilën provëz dhe tundi lehtë.",
      "Shto 5 pika tretësirë nitrati argjendi në secilën provëz.",
      "Mbaji provëzat përpara kartonit të zi dhe shëno ngjyrën e secilit precipitat.",
      "Mësuesi hedh pak nga secila përzierje në provëza të reja dhe shton tretësirë amoniaku të holluar, pastaj — nën aspirator — amoniak të përqendruar. Shëno cilat precipitate treten.",
      "Sipas dëshirës: lëre një provëz me klorur argjendi në një dritare me diell për 10–15 minuta dhe shëno çdo ndryshim ngjyre."
    ],
    predict: { q: "Çfarë do të shohësh kur të shtohet nitrati i argjendit në tri tretësirat e acidifikuara?", options: ["Precipitate të bardhë, krem dhe të verdhë të zbehtë", "Të tria mbeten pa ngjyrë", "Të tria japin të njëjtin precipitat të bardhë", "Flluska gazi në çdo provëz"], answer: 0,
      result: "Në çdo provëz formohet menjëherë një precipitat: i bardhë me klorurin, krem me bromurin dhe i verdhë i zbehtë me jodurin. Në provën me amoniak, precipitati i bardhë tretet në amoniak të holluar, ai krem vetëm në amoniak të përqendruar, ndërsa i verdhi nuk tretet. Kloruri i argjendit i lënë në diell merr ngadalë ngjyrë gri-vjollcë." },
    why: { q: "Pse tretësira acidifikohet me acid nitrik të holluar, dhe jo me acid klorhidrik, para se të shtohet nitrati i argjendit?", answer: 0, options: [
      { t: "Acidi nitrik largon jonet karbonat dhe hidroksid pa shtuar asnjë jon që formon precipitat me argjendin", fb: "Saktë — karbonati dhe hidroksidi do të jepnin gjithashtu precipitate me Ag⁺. Acidi klorhidrik do të shtonte Cl⁻ dhe do të jepte çdo herë një precipitat të bardhë." },
      { t: "Acidi i bën ngjyrat e precipitateve më të ndezura", fb: "Acidi nuk i ndryshon ngjyrat. Detyra e tij është të largojë jonet që do të jepnin precipitate të rreme." },
      { t: "Nitrati i argjendit reagon vetëm në acid të nxehtë", fb: "Reaksioni ndodh menjëherë në temperaturën e dhomës. Acidi shërben për të larguar jonet ndërhyrëse si karbonati." },
      { t: "Acidi nitrik e tret halogjenurin e argjendit që të shihet", fb: "Halogjenuret e argjendit nuk treten në acid nitrik të holluar — prandaj precipitati mbetet. Acidi largon jonet e tjera që mund të ndërhyjnë." }
    ] },
    hazards: ["Tretësira e nitratit të argjendit e njollos lëkurën dhe rrobat në kafe të errët deri në të zezë dhe irriton sytë; është toksike për jetën ujore.", "Acidi nitrik i holluar (0.5 mol/dm³) irriton sytë dhe lëkurën.", "Amoniaku i përqendruar është gërryes dhe lëshon avuj mbytës.", "Përzierjet e kripërave të argjendit me amoniak mund të formojnë përbërje shpërthyese nëse lihen të qëndrojnë e të thahen."],
    precautions: ["Mbaj syze mbrojtëse, doreza nitrili dhe përparëse laboratori gjatë gjithë kohës.", "Përdor pipeta pikuese dhe sasi të vogla; fshi pikat dhe laje menjëherë lëkurën nëse spërkatet.", "Vetëm mësuesi e trajton tretësirën e amoniakut, dhe amoniakun e përqendruar vetëm nën aspirator.", "Mos i ruaj kurrë përzierjet argjend–amoniak — ato bëhen të sigurta menjëherë pas provës."],
    disposal: ["Mblidhi të gjitha përzierjet që përmbajnë argjend (pa amoniak) në enën e mbetjeve të argjendit — mos i derdh kurrë në lavaman.", "Mësuesi i bën të sigurta përzierjet argjend–amoniak menjëherë pas provës (p.sh. duke i acidifikuar me acid nitrik të holluar), sipas udhëzimeve të CLEAPSS — ato nuk duhen ruajtur kurrë.", "Shpëlaji provëzat me shumë ujë."],
    supervisionNote: "Mbikëqyrje e afërt për nxënësit më të rritur: mësuesi jep nitratin e argjendit në shishe me pikatore, kryen të gjitha provat me amoniak (amoniakun e përqendruar nën aspirator) dhe i bën menjëherë të sigurta mbetjet argjend–amoniak.",
    clip: ["Tri tretësira halogjenuresh pa ngjyrë", "Shto disa pika nitrat argjendi", "Shfaqen precipitate të bardhë, krem dhe të verdhë!"]
  }
}
];

