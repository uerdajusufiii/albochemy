"use strict";
/* ---------- New experiments for grades 9–12 (part 1) ---------- */
const EXP_SENIOR_A = [
/* ===== Displacement ===== */
{
  id: "displacement", icon: "swap", topic: "electro", grades: "9–11", gmin: 9, gmax: 11,
  supervision: "supervised", time: 30, eqType: "equation", predictAt: 3, ppe: ["goggles"],
  demo: { s: "beaker", from: "#3b82f6", to: "#a7d7c5", nail: "#b45309" },
  video: { id: "vItOCO7cFIM", title: "Single Displacement Reaction - CuSO4 and Fe", channel: "I Love Fun Science",
    note: { en: "An iron nail turning copper-coloured in blue copper sulfate solution.", sq: "Një gozhdë hekuri që merr ngjyrë bakri në tretësirën blu të sulfatit të bakrit." } },
  sources: [
    { org: "Royal Society of Chemistry", title: "Displacement reactions between metals and their salts", url: "https://edu.rsc.org/experiments/displacement-reactions-of-metals-on-a-microscale/510.article" },
    { org: "Royal Society of Chemistry", title: "Reactivity of metals — practical videos", url: "https://edu.rsc.org/practical/reactivity-of-metals-practical-videos-14-16-years/4012974.article" }
  ],
  en: {
    name: "Copper-Coated Nail", short: "Displacement & reactivity",
    hook: "Dip an iron nail in blue solution and watch it turn copper-coloured.",
    aim: "Show that a more reactive metal (iron) displaces a less reactive metal (copper) from a solution of its salt.",
    chemistry: [
      "Metals can be put in order of reactivity — the reactivity series. Iron is more reactive than copper, so it 'pushes' copper out of its compounds.",
      "Iron atoms lose electrons and go into solution as iron(II) ions, while copper(II) ions gain those electrons and become copper metal, which coats the nail. As blue copper(II) ions are used up, the solution fades and turns pale green from the iron(II) ions."
    ],
    equation: "Fe(s) + CuSO₄(aq) → FeSO₄(aq) + Cu(s)",
    equipment: ["Iron nail, cleaned with sandpaper", "Copper(II) sulfate solution, 0.5 mol/dm³ (harmful) — about 20 cm³", "Boiling tube in a rack", "Forceps", "Paper towel", "Safety goggles"],
    steps: [
      "Put on goggles. Clean the nail with sandpaper until it is shiny.",
      "Pour copper(II) sulfate solution into the boiling tube until it is about half full.",
      "Note the colour of the solution and the appearance of the nail.",
      "Use forceps to lower the nail into the solution.",
      "Observe after 5 minutes, 15 minutes and at the end of the lesson.",
      "Remove the nail with forceps, dab it dry and compare it with an untouched nail."
    ],
    predict: { q: "What will you see on the nail after 15 minutes in the solution?", options: ["A pinkish-brown coating of copper", "Nothing — the nail stays shiny", "The nail dissolves completely", "Blue crystals growing on it"], answer: 0,
      result: "The part of the nail in the solution becomes coated in pinkish-brown copper. Over a longer time, the blue solution fades and becomes pale green." },
    why: { q: "Why does copper appear on the iron nail?", answer: 0, options: [
      { t: "Iron is more reactive than copper, so it displaces copper from the solution", fb: "Iron gives electrons to copper(II) ions. The copper ions become copper atoms, while iron dissolves as iron(II) ions." },
      { t: "Copper sulfate paints the nail", fb: "It isn't a coating of paint — it's copper metal formed by a chemical reaction." },
      { t: "The nail turns into copper", fb: "Atoms can't change into a different element. The copper comes from the copper ions in the solution." },
      { t: "Copper is more reactive than iron", fb: "If copper were more reactive, nothing would happen. Displacement only works when the added metal is more reactive." }
    ] },
    hazards: ["Copper(II) sulfate is harmful if swallowed, irritates the eyes and skin, and is toxic to aquatic life.", "Sandpaper and nails can scratch."],
    precautions: ["Wear goggles; use forceps rather than fingers.", "Wipe up drips straight away and wash your hands afterwards.", "Don't pour copper solutions down the sink."],
    disposal: ["Collect the copper sulfate solution in the waste container provided by your teacher.", "Dry nails can go in the bin."],
    supervisionNote: "Students can carry this out with a teacher present."
  },
  sq: {
    name: "Gozhda e veshur me bakër", short: "Zhvendosja dhe aktiviteti",
    hook: "Zhyt një gozhdë hekuri në tretësirë blu dhe shiko si merr ngjyrë bakri.",
    aim: "Trego se një metal më aktiv (hekuri) zhvendos një metal më pak aktiv (bakrin) nga tretësira e kripës së tij.",
    chemistry: [
      "Metalet mund të renditen sipas aktivitetit — seria e aktivitetit. Hekuri është më aktiv se bakri, ndaj e ‘shtyn’ bakrin jashtë përbërjeve të tij.",
      "Atomet e hekurit humbasin elektrone dhe kalojnë në tretësirë si jone hekuri(II), ndërsa jonet e bakrit(II) i fitojnë ato elektrone dhe bëhen metal bakri që vesh gozhdën. Ndërsa jonet blu të bakrit(II) harxhohen, tretësira zbehet dhe merr ngjyrë jeshile të zbehtë nga jonet e hekurit(II)."
    ],
    equation: "Fe(s) + CuSO₄(aq) → FeSO₄(aq) + Cu(s)",
    equipment: ["Gozhdë hekuri, e pastruar me letër zmerile", "Tretësirë sulfati bakri(II), 0.5 mol/dm³ (e dëmshme) — rreth 20 cm³", "Provëz e madhe në mbajtëse", "Piskatore", "Letër kuzhine", "Syze mbrojtëse"],
    steps: [
      "Vendos syzet. Pastroje gozhdën me letër zmerile derisa të shkëlqejë.",
      "Hidh tretësirë sulfati bakri(II) në provëz deri në gjysmë.",
      "Shëno ngjyrën e tretësirës dhe pamjen e gozhdës.",
      "Me piskatore, ule gozhdën në tretësirë.",
      "Vëzhgo pas 5 minutash, 15 minutash dhe në fund të orës.",
      "Nxirre gozhdën me piskatore, thaje lehtë dhe krahasoje me një gozhdë të paprekur."
    ],
    predict: { q: "Çfarë do të shohësh mbi gozhdë pas 15 minutash në tretësirë?", options: ["Një shtresë bakri rozë-kafe", "Asgjë — gozhda mbetet e shndritshme", "Gozhda tretet plotësisht", "Kristale blu që rriten mbi të"], answer: 0,
      result: "Pjesa e gozhdës në tretësirë vishet me bakër rozë-kafe. Me kalimin e kohës, tretësira blu zbehet dhe bëhet jeshile e zbehtë." },
    why: { q: "Pse shfaqet bakër mbi gozhdën e hekurit?", answer: 0, options: [
      { t: "Hekuri është më aktiv se bakri, ndaj e zhvendos bakrin nga tretësira", fb: "Hekuri u jep elektrone joneve të bakrit(II). Jonet e bakrit bëhen atome bakri, ndërsa hekuri tretet si jone hekuri(II)." },
      { t: "Sulfati i bakrit e lyen gozhdën", fb: "Nuk është shtresë boje — është metal bakri i formuar nga një reaksion kimik." },
      { t: "Gozhda kthehet në bakër", fb: "Atomet nuk mund të shndërrohen në element tjetër. Bakri vjen nga jonet e bakrit në tretësirë." },
      { t: "Bakri është më aktiv se hekuri", fb: "Nëse bakri do të ishte më aktiv, nuk do të ndodhte asgjë. Zhvendosja ndodh vetëm kur metali i shtuar është më aktiv." }
    ] },
    hazards: ["Sulfati i bakrit(II) është i dëmshëm nëse gëlltitet, irriton sytë dhe lëkurën dhe është toksik për jetën ujore.", "Letra zmerile dhe gozhdët mund të gërvishtin."],
    precautions: ["Mbaj syze mbrojtëse; përdor piskatore në vend të gishtave.", "Fshi menjëherë pikat dhe laj duart pas eksperimentit.", "Mos i derdh tretësirat e bakrit në lavaman."],
    disposal: ["Mblidhe tretësirën e sulfatit të bakrit në enën e mbetjeve që jep mësuesi.", "Gozhdët e thata mund të hidhen në kosh."],
    supervisionNote: "Nxënësit mund ta kryejnë me praninë e mësuesit."
  }
},

/* ===== Marble chips & surface area ===== */
{
  id: "marble", icon: "stone", topic: "reactions", grades: "9–11", gmin: 9, gmax: 11,
  supervision: "supervised", time: 45, eqType: "equation", predictAt: 3, ppe: ["goggles"],
  demo: { s: "beaker", from: "#f1f5f9", to: "#f1f5f9", bubbles: 2, solid: { c: "#e7e5e4", shrink: true } },
  video: null,
  sources: [
    { org: "Chemguide", title: "The effect of surface area on the rates of chemical reactions", url: "https://www.chemguide.uk/14to16/rates/surface.html" },
    { org: "Royal Society of Chemistry", title: "How to teach rate experiments", url: "https://edu.rsc.org/cpd/how-to-teach-rate-experiments-teaching-practical-science/3008551.article" }
  ],
  en: {
    name: "Marble Chips Race", short: "Surface area & rate",
    hook: "Big chips or small chips — which reacts with acid faster?",
    aim: "Investigate how the surface area of marble chips affects the rate of their reaction with hydrochloric acid, by measuring the loss in mass as carbon dioxide escapes.",
    chemistry: [
      "Marble is calcium carbonate. It reacts with hydrochloric acid to form calcium chloride, water and carbon dioxide gas, which escapes from the flask so the mass goes down.",
      "Reactions happen when particles collide. Only particles on the surface of a solid can be hit by acid particles. Small chips have a much bigger total surface area than the same mass of large chips, so there are more collisions per second and the reaction is faster."
    ],
    equation: "CaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g)",
    equipment: ["Marble chips: 10 g of large chips and 10 g of small chips", "Dilute hydrochloric acid, 1 mol/dm³ — 50 cm³ for each run", "Conical flask and a loose plug of cotton wool", "Top-pan balance", "Stopwatch", "Safety goggles"],
    steps: [
      "Put on goggles. Pour 50 cm³ of acid into the conical flask and put it on the balance with the cotton wool beside it.",
      "Add 10 g of large marble chips, put the cotton wool loosely in the neck and start the stopwatch.",
      "Record the mass every 30 seconds for 5 minutes.",
      "Repeat with 10 g of small chips and fresh acid.",
      "Calculate the loss in mass at each time for both runs.",
      "Plot both sets of results on the same graph of mass lost against time."
    ],
    predict: { q: "Which will lose mass faster at the start?", options: ["The small chips", "The large chips", "Both exactly the same", "Neither — the mass goes up"], answer: 0,
      result: "The small chips fizz more vigorously and lose mass faster, so their curve is steeper at the start. Both curves level off at about the same total mass loss, because the same mass of marble was used." },
    why: { q: "Why do the small chips react faster?", answer: 0, options: [
      { t: "They have a larger surface area, so more acid particles can collide with them each second", fb: "More surface means more frequent collisions, so the rate is higher. The total amount of gas stays the same." },
      { t: "Small chips are made of a different substance", fb: "Both are calcium carbonate. Only the size — and therefore the surface area — is different." },
      { t: "Small chips make the acid hotter first", fb: "Temperature isn't the main factor here. It's the extra surface area exposed to the acid." },
      { t: "Large chips don't react with acid", fb: "Large chips do react — just more slowly at first. In the end they lose the same mass." }
    ] },
    hazards: ["Hydrochloric acid (1 mol/dm³) can damage the eyes and irritate skin.", "Acid spray can escape from the flask as the gas fizzes out."],
    precautions: ["Wear goggles throughout.", "Use the cotton wool plug to stop acid spray but let the gas escape.", "Wipe up spills and rinse skin with water if splashed."],
    disposal: ["Pour liquid away down the sink with plenty of water, following school rules.", "Rinse the left-over chips with water and return them to the teacher."],
    supervisionNote: "Standard class practical under teacher supervision."
  },
  sq: {
    name: "Gara e copëzave të mermerit", short: "Sipërfaqja dhe shpejtësia",
    hook: "Copëza të mëdha apo të vogla — cilat reagojnë më shpejt me acidin?",
    aim: "Studio si ndikon sipërfaqja e copëzave të mermerit në shpejtësinë e reaksionit të tyre me acid klorhidrik, duke matur humbjen e masës ndërsa del dioksidi i karbonit.",
    chemistry: [
      "Mermeri është karbonat kalciumi. Ai reagon me acidin klorhidrik dhe formon klorur kalciumi, ujë dhe gaz dioksid karboni, që del nga kolba, ndaj masa ulet.",
      "Reaksionet ndodhin kur grimcat përplasen. Vetëm grimcat në sipërfaqen e një lënde të ngurtë mund të goditen nga grimcat e acidit. Copëzat e vogla kanë një sipërfaqe totale shumë më të madhe se e njëjta masë copëzash të mëdha, ndaj ka më shumë përplasje në sekondë dhe reaksioni është më i shpejtë."
    ],
    equation: "CaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g)",
    equipment: ["Copëza mermeri: 10 g copëza të mëdha dhe 10 g copëza të vogla", "Acid klorhidrik i holluar, 1 mol/dm³ — 50 cm³ për çdo provë", "Kolbë konike dhe një tufë e lirshme pambuku", "Peshore elektronike", "Kronometër", "Syze mbrojtëse"],
    steps: [
      "Vendos syzet. Hidh 50 cm³ acid në kolbën konike dhe vendose në peshore me pambukun pranë.",
      "Shto 10 g copëza të mëdha mermeri, vendos pambukun lirshëm në grykë dhe nis kronometrin.",
      "Shëno masën çdo 30 sekonda për 5 minuta.",
      "Përsërite me 10 g copëza të vogla dhe acid të ri.",
      "Llogarit humbjen e masës në çdo kohë për të dyja provat.",
      "Paraqit të dyja grupet e rezultateve në të njëjtin grafik të masës së humbur kundrejt kohës."
    ],
    predict: { q: "Cilat do të humbasin masë më shpejt në fillim?", options: ["Copëzat e vogla", "Copëzat e mëdha", "Të dyja saktësisht njësoj", "Asnjëra — masa rritet"], answer: 0,
      result: "Copëzat e vogla shkumëzojnë më fort dhe humbasin masë më shpejt, ndaj lakorja e tyre është më e pjerrët në fillim. Të dyja lakoret rrafshohen në afërsisht të njëjtën humbje totale mase, sepse u përdor e njëjta masë mermeri." },
    why: { q: "Pse copëzat e vogla reagojnë më shpejt?", answer: 0, options: [
      { t: "Kanë sipërfaqe më të madhe, ndaj më shumë grimca acidi mund të përplasen me to në sekondë", fb: "Më shumë sipërfaqe do të thotë përplasje më të shpeshta, ndaj shpejtësia është më e lartë. Sasia totale e gazit mbetet e njëjtë." },
      { t: "Copëzat e vogla janë prej një lënde tjetër", fb: "Të dyja janë karbonat kalciumi. Ndryshon vetëm madhësia — dhe rrjedhimisht sipërfaqja." },
      { t: "Copëzat e vogla e nxehin më parë acidin", fb: "Temperatura nuk është faktori kryesor këtu. Është sipërfaqja shtesë e ekspozuar ndaj acidit." },
      { t: "Copëzat e mëdha nuk reagojnë me acidin", fb: "Copëzat e mëdha reagojnë — thjesht më ngadalë në fillim. Në fund humbasin të njëjtën masë." }
    ] },
    hazards: ["Acidi klorhidrik (1 mol/dm³) mund të dëmtojë sytë dhe të irritojë lëkurën.", "Spërkatje acidi mund të dalin nga kolba ndërsa gazi shkumëzon."],
    precautions: ["Mbaj syze mbrojtëse gjatë gjithë kohës.", "Përdor tufën e pambukut për të ndaluar spërkatjet, por për ta lënë gazin të dalë.", "Fshi derdhjet dhe shpëlaje lëkurën me ujë nëse spërkatet."],
    disposal: ["Derdhe lëngun në lavaman me shumë ujë, sipas rregullave të shkollës.", "Shpëlaji copëzat e mbetura me ujë dhe ktheja mësuesit."],
    supervisionNote: "Praktikë standarde klase nën mbikëqyrjen e mësuesit."
  }
},

/* ===== Simple distillation ===== */
{
  id: "distillation", icon: "distill", topic: "separation", grades: "9–10", gmin: 9, gmax: 10,
  supervision: "close", time: 45, eqType: "idea", predictAt: 3, ppe: ["goggles", "coat"],
  demo: { s: "distill", from: "#1e3a8a" },
  video: null,
  sources: [
    { org: "Royal Society of Chemistry", title: "Simple distillation — practical videos, 14–16 years", url: "https://edu.rsc.org/practical/simple-distillation-practical-videos-14-16-years/4018538.article" }
  ],
  en: {
    name: "Pure Water from Inky Water", short: "Simple distillation",
    hook: "Turn dark blue inky water into clear, pure water.",
    aim: "Use simple distillation to separate pure water from a solution of ink in water.",
    chemistry: [
      "Ink is a solution: coloured dyes dissolved in water. The water has a much lower boiling point than the dyes.",
      "When the solution is heated, the water boils and turns into steam, leaving the dyes behind. The steam travels into a condenser, where cold water flowing around the outside cools it so it condenses back into liquid water — the distillate — which drips into a clean beaker."
    ],
    equation: "heat → water evaporates → vapour cools in the condenser → pure liquid water collects",
    equipment: ["Round-bottomed or conical flask with 50 cm³ of inky water", "Anti-bumping granules", "Bung with a delivery tube, and a Liebig condenser with water hoses", "Clamp stands", "Bunsen burner, tripod and gauze", "Beaker to collect the distillate", "Safety goggles and lab coat"],
    steps: [
      "Put on goggles. Your teacher helps set up and checks the apparatus — the system must never be sealed.",
      "Add inky water and two anti-bumping granules to the flask.",
      "Turn on the cold water so it flows into the bottom of the condenser and out at the top.",
      "Heat the flask gently until the liquid boils steadily.",
      "Collect a few cm³ of distillate in the beaker, then turn off the Bunsen burner. Never let the flask boil dry.",
      "Compare the colour of the distillate with the inky water left in the flask."
    ],
    predict: { q: "What will the liquid that collects in the beaker look like?", options: ["Clear and colourless", "The same dark blue", "Light blue", "Black and thick"], answer: 0,
      result: "Clear, colourless water drips from the condenser into the beaker. The ink left in the flask becomes darker and more concentrated as the water leaves it." },
    why: { q: "Why does the distillate have no colour?", answer: 0, options: [
      { t: "Only the water boils off; the dyes have a much higher boiling point and stay behind", fb: "Distillation separates substances with different boiling points. The water vapour is pure, so it condenses to pure water." },
      { t: "The condenser filters out the colour", fb: "A condenser cools vapour — it doesn't filter. The dyes never left the flask." },
      { t: "Heat destroys the colour", fb: "The dyes aren't destroyed — the ink left in the flask is even darker." },
      { t: "Cold water bleaches the ink", fb: "The cooling water never touches the distillate; it flows around the outside of the condenser." }
    ] },
    hazards: ["Hot glassware and steam can cause burns.", "A sealed system could build up pressure and burst.", "Liquids can boil violently ('bump') without anti-bumping granules."],
    precautions: ["Let your teacher check the set-up before heating; never seal the apparatus.", "Use anti-bumping granules and heat gently.", "Turn off the heat before the flask boils dry; let glassware cool before dismantling.", "Wear goggles and a lab coat; tie back long hair."],
    disposal: ["The ink solution and distillate can be poured down the sink with water.", "Put anti-bumping granules in the bin, not the sink."],
    supervisionNote: "Close supervision: the teacher checks every set-up before heating starts."
  },
  sq: {
    name: "Ujë i pastër nga ujë me bojë", short: "Distilimi i thjeshtë",
    hook: "Kthe ujin blu të errët me bojë në ujë të kthjellët e të pastër.",
    aim: "Përdor distilimin e thjeshtë për të ndarë ujë të pastër nga një tretësirë boje në ujë.",
    chemistry: [
      "Boja është një tretësirë: ngjyrues të tretur në ujë. Uji ka pikë vlimi shumë më të ulët se ngjyruesit.",
      "Kur tretësira nxehet, uji vlon dhe kthehet në avull, duke i lënë ngjyruesit pas. Avulli kalon në një kondensator (ftohës), ku uji i ftohtë që rrjedh përreth e ftoh, ndaj ai kondensohet përsëri në ujë të lëngët — distilati — që pikon në një gotë të pastër."
    ],
    equation: "ngrohje → uji avullon → avulli ftohet në kondensator → mblidhet ujë i pastër i lëngët",
    equipment: ["Kolbë me fund të rrumbullakët ose konike me 50 cm³ ujë me bojë", "Granula kundër vlimit të vrullshëm", "Tapë me tub përcjellës dhe kondensator Liebig me tuba uji", "Stativë", "Llambë Bunsen, trekëmbësh dhe rrjetë", "Gotë kimike për të mbledhur distilatin", "Syze mbrojtëse dhe përparëse laboratori"],
    steps: [
      "Vendos syzet. Mësuesi ndihmon në montim dhe kontrollon aparatin — sistemi nuk duhet të jetë kurrë i mbyllur hermetikisht.",
      "Shto ujë me bojë dhe dy granula kundër vlimit në kolbë.",
      "Hap ujin e ftohtë që të hyjë nga fundi i kondensatorit dhe të dalë nga sipër.",
      "Ngroh kolbën butë derisa lëngu të vlojë në mënyrë të qëndrueshme.",
      "Mblidh disa cm³ distilat në gotë, pastaj fik llambën Bunsen. Mos e lër kurrë kolbën të thahet nga vlimi.",
      "Krahaso ngjyrën e distilatit me ujin me bojë që mbeti në kolbë."
    ],
    predict: { q: "Si do të duket lëngu që mblidhet në gotë?", options: ["I kthjellët dhe i pangjyrë", "I njëjti blu i errët", "Blu e çelët", "I zi dhe i trashë"], answer: 0,
      result: "Ujë i kthjellët dhe i pangjyrë pikon nga kondensatori në gotë. Boja që mbetet në kolbë bëhet më e errët dhe më e përqendruar ndërsa uji largohet." },
    why: { q: "Pse distilati nuk ka ngjyrë?", answer: 0, options: [
      { t: "Vetëm uji avullon; ngjyruesit kanë pikë vlimi shumë më të lartë dhe mbeten pas", fb: "Distilimi ndan substanca me pika vlimi të ndryshme. Avulli i ujit është i pastër, ndaj kondensohet në ujë të pastër." },
      { t: "Kondensatori e filtron ngjyrën", fb: "Një kondensator ftoh avullin — nuk filtron. Ngjyruesit nuk dolën kurrë nga kolba." },
      { t: "Nxehtësia e shkatërron ngjyrën", fb: "Ngjyruesit nuk shkatërrohen — boja që mbetet në kolbë është edhe më e errët." },
      { t: "Uji i ftohtë e zbardh bojën", fb: "Uji ftohës nuk e prek kurrë distilatin; ai rrjedh rreth anës së jashtme të kondensatorit." }
    ] },
    hazards: ["Enët e nxehta prej qelqi dhe avulli mund të shkaktojnë djegie.", "Një sistem i mbyllur mund të grumbullojë presion dhe të plasë.", "Lëngjet mund të vlojnë me vrull pa granula kundër vlimit."],
    precautions: ["Lëre mësuesin të kontrollojë montimin para ngrohjes; mos e mbyll kurrë aparatin.", "Përdor granula kundër vlimit dhe ngroh butë.", "Fike nxehtësinë para se kolba të thahet; lëri enët të ftohen para çmontimit.", "Mbaj syze mbrojtëse dhe përparëse laboratori; lidh flokët e gjata."],
    disposal: ["Tretësira e bojës dhe distilati mund të derdhen në lavaman me ujë.", "Granulat hidhen në kosh, jo në lavaman."],
    supervisionNote: "Mbikëqyrje e afërt: mësuesi kontrollon çdo montim para se të fillojë ngrohja."
  }
},

/* ===== Thermal decomposition of copper carbonate ===== */
{
  id: "copperdecomp", icon: "tubeheat", topic: "reactions", grades: "9–11", gmin: 9, gmax: 11,
  supervision: "supervised", time: 30, eqType: "equation", predictAt: 3, ppe: ["goggles"],
  demo: { s: "tube", from: "#4ade80", to: "#1c1917", lime: true },
  video: { id: "lJ1aodvkfNQ", title: "Copper carbonate Heating", channel: "Partha Sir's World",
    note: { en: "Green copper carbonate turning black as it is heated.", sq: "Karbonati i gjelbër i bakrit që nxihet ndërsa nxehet." } },
  sources: [
    { org: "Royal Society of Chemistry", title: "Thermal decomposition of metal carbonates", url: "https://edu.rsc.org/experiments/thermal-decomposition-of-metal-carbonates/450.article" }
  ],
  en: {
    name: "Green Turns Black", short: "Thermal decomposition",
    hook: "Heat a green powder and watch it turn black while it gives off a gas.",
    aim: "Heat copper(II) carbonate, observe the colour change and use limewater to identify the gas produced.",
    chemistry: [
      "Thermal decomposition is when a substance breaks down into simpler substances when heated. Many metal carbonates decompose to form a metal oxide and carbon dioxide.",
      "Green copper(II) carbonate breaks down into black copper(II) oxide. The carbon dioxide travels through the delivery tube and turns limewater milky, which confirms the gas."
    ],
    equation: "CuCO₃(s) → CuO(s) + CO₂(g)",
    equipment: ["Copper(II) carbonate powder — one spatula (harmful)", "Hard-glass test tube with bung and delivery tube", "Second test tube with limewater", "Clamp stand", "Bunsen burner", "Heat-resistant mat", "Safety goggles"],
    steps: [
      "Put on goggles. Put one spatula of copper(II) carbonate into the hard-glass tube and note its colour.",
      "Fit the bung and delivery tube and clamp the tube near its open end, sloping slightly downwards.",
      "Put the end of the delivery tube into the limewater.",
      "Heat the powder gently, then more strongly. Watch the solid and the limewater.",
      "IMPORTANT: lift the delivery tube out of the limewater BEFORE you stop heating, to prevent suck-back.",
      "Let the tube cool and compare the colour of the solid before and after."
    ],
    predict: { q: "What will happen to the green powder when it is heated?", options: ["It turns black and the limewater goes milky", "It melts into a green liquid", "It turns white and nothing happens to the limewater", "It catches fire with a green flame"], answer: 0,
      result: "The green powder turns black as it is heated, and bubbles of gas pass into the limewater, which turns milky. The black solid left behind is copper(II) oxide." },
    why: { q: "Why does the limewater turn milky?", answer: 0, options: [
      { t: "Copper carbonate breaks down and releases carbon dioxide", fb: "Carbon dioxide is the only common gas that turns limewater milky, so it confirms the carbonate has decomposed." },
      { t: "Hot air from the tube is pushed into it", fb: "Plain hot air wouldn't make limewater milky. A new gas — carbon dioxide — has been produced." },
      { t: "Copper particles travel into the limewater", fb: "The copper stays in the tube as black copper oxide. Only a gas passes through." },
      { t: "The limewater is boiling", fb: "The limewater stays cool. It turns milky because of a chemical reaction with carbon dioxide." }
    ] },
    hazards: ["Copper(II) carbonate and copper(II) oxide are harmful if swallowed.", "Hot glass and the Bunsen flame cause burns.", "Suck-back: cold limewater can be sucked into the hot tube and crack it."],
    precautions: ["Wear goggles and tie back long hair.", "Remove the delivery tube from the limewater before you stop heating.", "Let the tube cool before handling it; wash your hands afterwards."],
    disposal: ["Return the copper oxide residue to your teacher — don't put it in the sink.", "Limewater can be poured down the sink with water."],
    supervisionNote: "Students can carry this out under teacher supervision; the teacher should demonstrate how to avoid suck-back."
  },
  sq: {
    name: "E gjelbra bëhet e zezë", short: "Zbërthimi termik",
    hook: "Ngroh një pluhur të gjelbër dhe shiko si nxihet ndërsa çliron një gaz.",
    aim: "Ngroh karbonat bakri(II), vëzhgo ndryshimin e ngjyrës dhe përdor ujë gëlqereje për të identifikuar gazin që çlirohet.",
    chemistry: [
      "Zbërthimi termik ndodh kur një substancë shpërbëhet në substanca më të thjeshta nga nxehtësia. Shumë karbonate metalesh zbërthehen dhe formojnë një oksid metali dhe dioksid karboni.",
      "Karbonati i gjelbër i bakrit(II) zbërthehet në oksid bakri(II) të zi. Dioksidi i karbonit kalon nëpër tubin përcjellës dhe e turbullon ujin e gëlqeres, gjë që e konfirmon gazin."
    ],
    equation: "CuCO₃(s) → CuO(s) + CO₂(g)",
    equipment: ["Pluhur karbonati bakri(II) — një spatulë (i dëmshëm)", "Provëz qelqi rezistent me tapë dhe tub përcjellës", "Provëz e dytë me ujë gëlqereje", "Stativ", "Llambë Bunsen", "Pllakë rezistente ndaj nxehtësisë", "Syze mbrojtëse"],
    steps: [
      "Vendos syzet. Vendos një spatulë karbonati bakri(II) në provëzën e qelqit rezistent dhe shëno ngjyrën.",
      "Vendos tapën dhe tubin përcjellës dhe fiksoje provëzën pranë grykës, pak të pjerrët poshtë.",
      "Fut fundin e tubit përcjellës në ujin e gëlqeres.",
      "Ngroh pluhurin butë, pastaj më fort. Vëzhgo lëndën e ngurtë dhe ujin e gëlqeres.",
      "E RËNDËSISHME: nxirre tubin përcjellës nga uji i gëlqeres PARA se të ndalosh ngrohjen, për të shmangur thithjen mbrapsht.",
      "Lëre provëzën të ftohet dhe krahaso ngjyrën e lëndës para dhe pas."
    ],
    predict: { q: "Çfarë do t'i ndodhë pluhurit të gjelbër kur nxehet?", options: ["Nxihet dhe uji i gëlqeres turbullohet", "Shkrihet në një lëng të gjelbër", "Bëhet i bardhë dhe uji i gëlqeres nuk ndryshon", "Merr flakë me flakë të gjelbër"], answer: 0,
      result: "Pluhuri i gjelbër nxihet ndërsa nxehet, dhe flluska gazi kalojnë në ujin e gëlqeres, që turbullohet. Lënda e zezë që mbetet është oksid bakri(II)." },
    why: { q: "Pse uji i gëlqeres turbullohet?", answer: 0, options: [
      { t: "Karbonati i bakrit zbërthehet dhe çliron dioksid karboni", fb: "Dioksidi i karbonit është i vetmi gaz i zakonshëm që e turbullon ujin e gëlqeres, ndaj konfirmon se karbonati është zbërthyer." },
      { t: "Ajri i nxehtë nga provëza shtyhet në të", fb: "Ajri i thjeshtë i nxehtë nuk do ta turbullonte ujin e gëlqeres. Është prodhuar një gaz i ri — dioksidi i karbonit." },
      { t: "Grimcat e bakrit kalojnë në ujin e gëlqeres", fb: "Bakri mbetet në provëz si oksid bakri i zi. Kalon vetëm një gaz." },
      { t: "Uji i gëlqeres po vlon", fb: "Uji i gëlqeres mbetet i ftohtë. Turbullohet për shkak të një reaksioni kimik me dioksidin e karbonit." }
    ] },
    hazards: ["Karbonati i bakrit(II) dhe oksidi i bakrit(II) janë të dëmshëm nëse gëlltiten.", "Qelqi i nxehtë dhe flaka e Bunsen-it shkaktojnë djegie.", "Thithja mbrapsht: uji i ftohtë i gëlqeres mund të thithet në provëzën e nxehtë dhe ta çajë."],
    precautions: ["Mbaj syze mbrojtëse dhe lidh flokët e gjata.", "Nxirre tubin përcjellës nga uji i gëlqeres para se të ndalosh ngrohjen.", "Lëre provëzën të ftohet para se ta prekësh; laj duart pas eksperimentit."],
    disposal: ["Ktheja mësuesit mbetjen e oksidit të bakrit — mos e hidh në lavaman.", "Uji i gëlqeres mund të derdhet në lavaman me ujë."],
    supervisionNote: "Nxënësit mund ta kryejnë nën mbikëqyrjen e mësuesit; mësuesi duhet të tregojë si shmanget thithja mbrapsht."
  }
},

/* ===== Burning magnesium ===== */
{
  id: "burnmg", icon: "sun", topic: "reactions", grades: "9–11", gmin: 9, gmax: 11,
  supervision: "demo", time: 15, eqType: "equation", predictAt: 2, ppe: ["goggles"],
  demo: { s: "flame", color: "#ffffff", glare: true },
  video: { id: "c6P7Hk3Ri7E", title: "Burning of Magnesium Ribbon in Air — Dazzling White Flame Experiment", channel: "Ekaksha English Medium",
    note: { en: "Magnesium ribbon held in tongs burning with a brilliant white light.", sq: "Shirit magnezi i mbajtur me mashë që digjet me dritë të bardhë verbuese." } },
  sources: [
    { org: "Royal Society of Chemistry", title: "The change in mass when magnesium burns", url: "https://edu.rsc.org/experiments/the-change-in-mass-when-magnesium-burns/718.article" }
  ],
  en: {
    name: "Burning Magnesium", short: "Combustion & oxides",
    hook: "A strip of metal that burns with a light too bright to look at.",
    aim: "Observe magnesium burning in air (teacher demonstration) and identify the product as magnesium oxide.",
    chemistry: [
      "Combustion is a reaction with oxygen that releases energy. Magnesium reacts very exothermically with oxygen in the air, giving out intense white light and heat.",
      "The product is magnesium oxide, a white powder. Because oxygen atoms from the air join on to the magnesium, the product has a greater mass than the original metal — a classic example of mass increasing in a reaction."
    ],
    equation: "2Mg(s) + O₂(g) → 2MgO(s)",
    equipment: ["Short strip of magnesium ribbon (about 2 cm), cleaned", "Long tongs", "Bunsen burner", "Heat-resistant mat", "Safety screen", "Goggles for everyone; blue glass or viewing at an angle"],
    steps: [
      "Everyone puts on goggles. Students stand at least 2 metres back, behind the safety screen.",
      "The teacher holds the magnesium ribbon at one end with tongs.",
      "The teacher holds the other end in the hottest part of a Bunsen flame until it lights.",
      "Students observe — but don't stare directly at the flame.",
      "The burning ribbon is held over the heat-resistant mat until it finishes burning.",
      "Once cool, everyone looks at the white powder left on the mat."
    ],
    predict: { q: "What will the magnesium do when it is held in the flame?", options: ["Burn with a dazzling white light and leave a white powder", "Melt into a silver liquid", "Glow red and stay the same", "Turn into a black gas"], answer: 0,
      result: "After a moment the magnesium catches fire and burns with an extremely bright white flame, giving off white smoke. A crumbly white powder — magnesium oxide — is left behind." },
    why: { q: "What is the white powder left behind?", answer: 0, options: [
      { t: "Magnesium oxide, formed when magnesium combines with oxygen", fb: "Combustion joins magnesium with oxygen from the air: 2Mg + O₂ → 2MgO." },
      { t: "Ash from the magnesium burning away", fb: "Magnesium doesn't burn away into nothing — it combines with oxygen. The 'ash' is a new compound, magnesium oxide." },
      { t: "Unchanged magnesium", fb: "Magnesium is a shiny grey metal. The white powder has completely different properties — it's a new substance." },
      { t: "Salt from the air", fb: "There's no salt involved. The powder forms from magnesium and oxygen." }
    ] },
    hazards: ["The intensely bright light (including UV) can damage eyes if stared at.", "Burning magnesium is extremely hot and can't be put out with water.", "Burns from the flame and hot residue."],
    precautions: ["Teacher demonstration only, with a safety screen.", "Don't look directly at the burning magnesium; look away or through blue glass.", "Use only a short strip held in long tongs over a heat-resistant mat.", "Keep sand nearby in case of a magnesium fire."],
    disposal: ["Once cool, the magnesium oxide can go in the bin.", "Unused magnesium ribbon goes back to the teacher's store."],
    supervisionNote: "Teacher demonstration only. Students observe from behind a safety screen. (A crucible version is a common class practical for older students.)"
  },
  sq: {
    name: "Djegia e magnezit", short: "Djegia dhe oksidet",
    hook: "Një shirit metali që digjet me një dritë tepër të fortë për t'u parë.",
    aim: "Vëzhgo djegien e magnezit në ajër (demonstrim nga mësuesi) dhe identifiko produktin si oksid magnezi.",
    chemistry: [
      "Djegia është një reaksion me oksigjenin që çliron energji. Magnezi reagon shumë ekzotermikisht me oksigjenin e ajrit, duke dhënë dritë të bardhë intensive dhe nxehtësi.",
      "Produkti është oksid magnezi, një pluhur i bardhë. Meqë atomet e oksigjenit nga ajri bashkohen me magnezin, produkti ka masë më të madhe se metali fillestar — një shembull klasik i rritjes së masës në një reaksion."
    ],
    equation: "2Mg(s) + O₂(g) → 2MgO(s)",
    equipment: ["Shirit i shkurtër magnezi (rreth 2 cm), i pastruar", "Mashë e gjatë", "Llambë Bunsen", "Pllakë rezistente ndaj nxehtësisë", "Mburojë sigurie", "Syze për të gjithë; xham blu ose shikim anash"],
    steps: [
      "Të gjithë vendosin syzet. Nxënësit qëndrojnë të paktën 2 metra larg, pas mburojës së sigurisë.",
      "Mësuesi e mban shiritin e magnezit nga njëri skaj me mashë.",
      "Mësuesi e mban skajin tjetër në pjesën më të nxehtë të flakës së Bunsen-it derisa të ndizet.",
      "Nxënësit vëzhgojnë — por pa e parë drejtpërdrejt flakën.",
      "Shiriti që digjet mbahet mbi pllakën rezistente derisa të përfundojë djegia.",
      "Pasi të ftohet, të gjithë shohin pluhurin e bardhë që mbetet mbi pllakë."
    ],
    predict: { q: "Çfarë do të bëjë magnezi kur mbahet në flakë?", options: ["Digjet me dritë të bardhë verbuese dhe lë një pluhur të bardhë", "Shkrihet në një lëng argjendi", "Skuqet dhe mbetet i njëjtë", "Kthehet në një gaz të zi"], answer: 0,
      result: "Pas një çasti magnezi merr flakë dhe digjet me një flakë të bardhë jashtëzakonisht të ndritshme, duke lëshuar tym të bardhë. Mbetet një pluhur i bardhë i thërrmueshëm — oksidi i magnezit." },
    why: { q: "Çfarë është pluhuri i bardhë që mbetet?", answer: 0, options: [
      { t: "Oksid magnezi, i formuar kur magnezi bashkohet me oksigjenin", fb: "Djegia e bashkon magnezin me oksigjenin e ajrit: 2Mg + O₂ → 2MgO." },
      { t: "Hi nga magnezi që digjet dhe zhduket", fb: "Magnezi nuk zhduket — bashkohet me oksigjenin. ‘Hiri’ është një përbërje e re, oksidi i magnezit." },
      { t: "Magnez i pandryshuar", fb: "Magnezi është metal gri i shndritshëm. Pluhuri i bardhë ka veti krejt të ndryshme — është një substancë e re." },
      { t: "Kripë nga ajri", fb: "Nuk ka kripë këtu. Pluhuri formohet nga magnezi dhe oksigjeni." }
    ] },
    hazards: ["Drita jashtëzakonisht e fortë (përfshirë UV) mund të dëmtojë sytë nëse shikohet drejtpërdrejt.", "Magnezi që digjet është jashtëzakonisht i nxehtë dhe nuk shuhet me ujë.", "Djegie nga flaka dhe mbetjet e nxehta."],
    precautions: ["Vetëm demonstrim nga mësuesi, me mburojë sigurie.", "Mos e shiko drejtpërdrejt magnezin që digjet; shiko anash ose përmes xhamit blu.", "Përdor vetëm një shirit të shkurtër të mbajtur me mashë të gjatë mbi pllakë rezistente.", "Mbaj rërë afër në rast zjarri nga magnezi."],
    disposal: ["Pasi të ftohet, oksidi i magnezit mund të hidhet në kosh.", "Shiriti i papërdorur i magnezit kthehet në depon e mësuesit."],
    supervisionNote: "Vetëm demonstrim nga mësuesi. Nxënësit vëzhgojnë pas mburojës së sigurisë. (Versioni me poçe është praktikë e zakonshme klase për nxënësit më të rritur.)"
  }
},

/* ===== Alkali metals ===== */
{
  id: "alkali", icon: "splash", topic: "electro", grades: "9–11", gmin: 9, gmax: 11,
  supervision: "demo", time: 15, eqType: "equation", predictAt: 2, ppe: ["goggles"],
  demo: { s: "beaker", from: "#86efac", to: "#7c3aed", bubbles: 1, solid: { c: "#d4d4d8", shrink: true, float: true } },
  video: { id: "R5eTUODwJeU", title: "Alkali metals in water in 47s", channel: "Nigel Baldwin",
    note: { en: "Lithium, sodium and potassium compared in under a minute.", sq: "Litiumi, natriumi dhe kaliumi të krahasuar në më pak se një minutë." } },
  sources: [
    { org: "Royal Society of Chemistry", title: "The alkali metals videos: part 2", url: "https://edu.rsc.org/resources/the-alkali-metals-videos-part-2/1249.article" }
  ],
  en: {
    name: "Alkali Metals Meet Water", short: "Group 1 reactivity",
    hook: "Lithium fizzes, sodium zooms, potassium bursts into lilac flame.",
    aim: "Compare the reactions of lithium, sodium and potassium with water (teacher demonstration) and describe the trend in reactivity down Group 1.",
    chemistry: [
      "Group 1 metals all have one electron in their outer shell, which they lose easily. They react with water to make a metal hydroxide (an alkali) and hydrogen gas.",
      "Going down the group, the outer electron is further from the nucleus and more shielded, so it is lost more easily. That makes potassium more reactive than sodium, which is more reactive than lithium."
    ],
    equation: "2Na(s) + 2H₂O(l) → 2NaOH(aq) + H₂(g)",
    equipment: ["Large glass trough of water with a few drops of universal indicator", "Rice-grain-sized pieces of lithium, sodium and potassium (stored under oil)", "Scalpel, tile and forceps (teacher only)", "Filter paper to remove oil", "Safety screens", "Goggles for everyone"],
    steps: [
      "Everyone puts on goggles. Students stand at least 2 metres back, behind safety screens.",
      "The teacher cuts a tiny piece of lithium, dries off the oil and drops it onto the water.",
      "Students observe and describe what happens, including the indicator colour.",
      "The teacher repeats with sodium, then potassium, using fresh water each time if needed.",
      "Compare how fast each metal moves, fizzes and disappears.",
      "Put the observations in order of reactivity."
    ],
    predict: { q: "Which metal will react most vigorously with water?", options: ["Potassium", "Lithium", "Sodium", "They react equally"], answer: 0,
      result: "Lithium floats and fizzes steadily. Sodium melts into a silvery ball that zooms across the surface. Potassium reacts so fast that the hydrogen ignites with a lilac flame. The indicator turns purple, showing an alkali has formed." },
    why: { q: "Why does reactivity increase down Group 1?", answer: 0, options: [
      { t: "The outer electron is further from the nucleus, so it is lost more easily", fb: "Larger atoms with more shells hold their single outer electron less tightly, so they react faster." },
      { t: "Atoms get lighter down the group", fb: "Atoms actually get heavier down the group. Reactivity depends on how easily the outer electron is lost." },
      { t: "Lower metals have more outer electrons", fb: "All Group 1 metals have exactly one outer electron. What changes is its distance from the nucleus." },
      { t: "Potassium is softer, so water gets in", fb: "Softness is a sign of weaker metallic bonding, but the main reason is how easily the outer electron is lost." }
    ] },
    hazards: ["Alkali metals react violently with water; potassium can spit hot fragments.", "Hydrogen gas is flammable.", "The hydroxide solution formed is corrosive to eyes and skin."],
    precautions: ["Teacher demonstration only, using rice-grain-sized pieces and safety screens.", "Students stay at least 2 metres away and wear goggles.", "Never touch alkali metals with fingers; they are kept under oil.", "Never use larger pieces or put the metals in a closed container."],
    disposal: ["The teacher waits until every piece has fully reacted, then dilutes the alkaline water and pours it down the sink.", "Scraps of metal are destroyed by the teacher following school procedures."],
    supervisionNote: "Teacher demonstration only, behind safety screens."
  },
  sq: {
    name: "Metalet alkaline takojnë ujin", short: "Aktiviteti i grupit 1",
    hook: "Litiumi shkumëzon, natriumi vrapon, kaliumi merr flakë në ngjyrë jargavani.",
    aim: "Krahaso reaksionet e litiumit, natriumit dhe kaliumit me ujin (demonstrim nga mësuesi) dhe përshkruaj tendencën e aktivitetit poshtë grupit 1.",
    chemistry: [
      "Të gjitha metalet e grupit 1 kanë një elektron në shtresën e jashtme, të cilin e humbasin lehtë. Ato reagojnë me ujin dhe formojnë një hidroksid metali (një alkal) dhe gaz hidrogjen.",
      "Duke zbritur në grup, elektroni i jashtëm është më larg bërthamës dhe më i mbrojtur, ndaj humbet më lehtë. Kjo e bën kaliumin më aktiv se natriumi, që është më aktiv se litiumi."
    ],
    equation: "2Na(s) + 2H₂O(l) → 2NaOH(aq) + H₂(g)",
    equipment: ["Govatë e madhe qelqi me ujë dhe disa pika indikator universal", "Copëza sa një kokërr orizi litium, natrium dhe kalium (të ruajtura nën vaj)", "Bisturi, pllakë dhe piskatore (vetëm mësuesi)", "Letër filtri për të hequr vajin", "Mburoja sigurie", "Syze për të gjithë"],
    steps: [
      "Të gjithë vendosin syzet. Nxënësit qëndrojnë të paktën 2 metra larg, pas mburojave të sigurisë.",
      "Mësuesi pret një copëz të vogël litiumi, i heq vajin dhe e hedh mbi ujë.",
      "Nxënësit vëzhgojnë dhe përshkruajnë çfarë ndodh, përfshirë ngjyrën e indikatorit.",
      "Mësuesi përsërit me natrium, pastaj me kalium, duke përdorur ujë të ri nëse duhet.",
      "Krahaso sa shpejt lëviz, shkumëzon dhe zhduket secili metal.",
      "Rendit vëzhgimet sipas aktivitetit."
    ],
    predict: { q: "Cili metal do të reagojë më fuqishëm me ujin?", options: ["Kaliumi", "Litiumi", "Natriumi", "Reagojnë njësoj"], answer: 0,
      result: "Litiumi noton dhe shkumëzon qetësisht. Natriumi shkrihet në një top argjendi që vrapon mbi sipërfaqe. Kaliumi reagon aq shpejt sa hidrogjeni ndizet me flakë ngjyrë jargavani. Indikatori bëhet vjollcë, që tregon se është formuar një alkal." },
    why: { q: "Pse aktiviteti rritet poshtë grupit 1?", answer: 0, options: [
      { t: "Elektroni i jashtëm është më larg bërthamës, ndaj humbet më lehtë", fb: "Atomet më të mëdha me më shumë shtresa e mbajnë më dobët elektronin e vetëm të jashtëm, ndaj reagojnë më shpejt." },
      { t: "Atomet bëhen më të lehta poshtë grupit", fb: "Në fakt atomet bëhen më të rënda poshtë grupit. Aktiviteti varet nga sa lehtë humbet elektroni i jashtëm." },
      { t: "Metalet më poshtë kanë më shumë elektrone të jashtme", fb: "Të gjitha metalet e grupit 1 kanë saktësisht një elektron të jashtëm. Ajo që ndryshon është largësia e tij nga bërthama." },
      { t: "Kaliumi është më i butë, ndaj hyn uji", fb: "Butësia është shenjë e lidhjes metalike më të dobët, por arsyeja kryesore është sa lehtë humbet elektroni i jashtëm." }
    ] },
    hazards: ["Metalet alkaline reagojnë me vrull me ujin; kaliumi mund të hedhë copëza të nxehta.", "Gazi hidrogjen është i ndezshëm.", "Tretësira e hidroksidit që formohet është gërryese për sytë dhe lëkurën."],
    precautions: ["Vetëm demonstrim nga mësuesi, me copëza sa një kokërr orizi dhe mburoja sigurie.", "Nxënësit qëndrojnë të paktën 2 metra larg dhe mbajnë syze.", "Mos i prek kurrë metalet alkaline me gishta; ato ruhen nën vaj.", "Mos përdor kurrë copa më të mëdha dhe mos i vendos metalet në enë të mbyllur."],
    disposal: ["Mësuesi pret derisa çdo copëz të ketë reaguar plotësisht, pastaj e hollon ujin alkalin dhe e derdh në lavaman.", "Mbetjet e metalit shkatërrohen nga mësuesi sipas procedurave të shkollës."],
    supervisionNote: "Vetëm demonstrim nga mësuesi, pas mburojave të sigurisë."
  }
},

/* ===== Antacid challenge ===== */
{
  id: "antacid", icon: "pill", topic: "acids", grades: "9–10", gmin: 9, gmax: 10,
  supervision: "supervised", time: 40, eqType: "equation", predictAt: 3, ppe: ["goggles"],
  demo: { s: "beaker", from: "#22c55e", to: "#f97316", bubbles: 1 },
  video: null,
  sources: [
    { org: "Royal Society of Chemistry", title: "Using indigestion tablets (antacids) to neutralise an acid", url: "https://edu.rsc.org/concentration-of-solutions-and-titration/using-indigestion-tablets-to-neutralise-an-acid-14-18-years/698.article" }
  ],
  en: {
    name: "Antacid Challenge", short: "Neutralisation",
    hook: "Which indigestion tablet neutralises the most acid?",
    aim: "Compare how much hydrochloric acid different antacid tablets can neutralise, using universal indicator to show the end point.",
    chemistry: [
      "Your stomach contains hydrochloric acid to help digest food. Too much acid causes indigestion. Antacid tablets contain bases such as calcium carbonate or magnesium hydroxide that neutralise the excess acid.",
      "When acid is added to a crushed tablet with universal indicator, the mixture stays green (neutral) while there is still base left. Once all the base has reacted, the next drops of acid make it turn orange-red. More acid needed means a more effective tablet."
    ],
    equation: "CaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g)",
    equipment: ["Two or three different antacid tablets (handled only as lab samples — never swallowed)", "Pestle and mortar", "Conical flask with 25 cm³ of water", "Universal indicator solution", "Dilute hydrochloric acid, 0.5 mol/dm³, in a burette or graduated dropper", "White tile", "Safety goggles"],
    steps: [
      "Put on goggles. Crush one tablet in the mortar and tip the powder into the flask of water.",
      "Add 5 drops of universal indicator and swirl. Note the colour.",
      "Add the acid a little at a time, swirling after each addition.",
      "Stop when the colour changes to orange-red and stays that way.",
      "Record the volume of acid needed.",
      "Repeat with the other tablets and compare."
    ],
    predict: { q: "As acid is added to the tablet mixture, when will the indicator change colour?", options: ["Only after all the base in the tablet has reacted", "Immediately, with the first drop", "Never — it stays green", "It turns blue first"], answer: 0,
      result: "The mixture fizzes (if the tablet contains a carbonate) and stays green for a while. Suddenly one more addition turns it orange-red. Different tablets need noticeably different volumes of acid." },
    why: { q: "Why does the indicator stay green at first?", answer: 0, options: [
      { t: "The base in the tablet neutralises each portion of acid as it is added", fb: "As long as some base remains, the added acid is used up straight away, so the pH stays around 7." },
      { t: "The indicator needs time to warm up", fb: "Indicators change instantly. The colour stays the same because the acid is being neutralised." },
      { t: "Antacid tablets are acids too", fb: "Antacids are bases — that's why they neutralise acid." },
      { t: "Water stops the acid working", fb: "The acid still reacts in water. It's the base in the tablet that uses it up." }
    ] },
    hazards: ["Hydrochloric acid can damage the eyes and irritate skin.", "Antacid tablets are medicines and must never be eaten in the lab."],
    precautions: ["Wear goggles.", "Treat tablets as lab chemicals: don't taste or swallow them.", "Rinse any splashes with plenty of water."],
    disposal: ["Neutralised mixtures can be poured down the sink with plenty of water.", "Return unused tablets to the teacher."],
    supervisionNote: "Students can carry this out under teacher supervision."
  },
  sq: {
    name: "Sfida e antiacideve", short: "Neutralizimi",
    hook: "Cila tabletë kundër urthit neutralizon më shumë acid?",
    aim: "Krahaso sa acid klorhidrik mund të neutralizojnë tableta të ndryshme antiacide, duke përdorur indikator universal për të treguar pikën përfundimtare.",
    chemistry: [
      "Stomaku yt përmban acid klorhidrik që ndihmon tretjen e ushqimit. Acidi i tepërt shkakton urth. Tabletat antiacide përmbajnë baza si karbonat kalciumi ose hidroksid magnezi që neutralizojnë acidin e tepërt.",
      "Kur acidi shtohet te një tabletë e shtypur me indikator universal, përzierja mbetet e gjelbër (neutrale) për sa kohë ka ende bazë. Sapo e gjithë baza ka reaguar, pikat e tjera të acidit e bëjnë portokalli-të kuqe. Sa më shumë acid të nevojitet, aq më efektive është tableta."
    ],
    equation: "CaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g)",
    equipment: ["Dy ose tre tableta antiacide të ndryshme (të trajtuara vetëm si mostra laboratori — kurrë të gëlltitura)", "Havan dhe dorezë havani", "Kolbë konike me 25 cm³ ujë", "Tretësirë indikatori universal", "Acid klorhidrik i holluar, 0.5 mol/dm³, në buretë ose pikatore të shkallëzuar", "Pllakë e bardhë", "Syze mbrojtëse"],
    steps: [
      "Vendos syzet. Shtyp një tabletë në havan dhe hidhe pluhurin në kolbën me ujë.",
      "Shto 5 pika indikator universal dhe tunde. Shëno ngjyrën.",
      "Shto acidin pak nga pak, duke e tundur pas çdo shtimi.",
      "Ndalo kur ngjyra bëhet portokalli-e kuqe dhe mbetet e tillë.",
      "Shëno vëllimin e acidit që u nevojit.",
      "Përsërite me tabletat e tjera dhe krahasoji."
    ],
    predict: { q: "Ndërsa shtohet acid te përzierja e tabletës, kur do të ndryshojë ngjyrë indikatori?", options: ["Vetëm pasi e gjithë baza në tabletë të ketë reaguar", "Menjëherë, me pikën e parë", "Kurrë — mbetet e gjelbër", "Bëhet fillimisht blu"], answer: 0,
      result: "Përzierja shkumëzon (nëse tableta përmban karbonat) dhe mbetet e gjelbër për një kohë. Papritur një shtim tjetër e bën portokalli-të kuqe. Tableta të ndryshme kërkojnë vëllime acidi dukshëm të ndryshme." },
    why: { q: "Pse indikatori mbetet i gjelbër në fillim?", answer: 0, options: [
      { t: "Baza në tabletë neutralizon çdo sasi acidi sapo shtohet", fb: "Për sa kohë mbetet bazë, acidi i shtuar harxhohet menjëherë, ndaj pH qëndron rreth 7." },
      { t: "Indikatori ka nevojë për kohë që të ngrohet", fb: "Indikatorët ndryshojnë menjëherë. Ngjyra mbetet e njëjtë sepse acidi po neutralizohet." },
      { t: "Edhe tabletat antiacide janë acide", fb: "Antiacidet janë baza — prandaj neutralizojnë acidin." },
      { t: "Uji e ndalon acidin të veprojë", fb: "Acidi reagon edhe në ujë. Baza në tabletë është ajo që e harxhon." }
    ] },
    hazards: ["Acidi klorhidrik mund të dëmtojë sytë dhe të irritojë lëkurën.", "Tabletat antiacide janë ilaçe dhe nuk duhen ngrënë kurrë në laborator."],
    precautions: ["Mbaj syze mbrojtëse.", "Trajtoji tabletat si kimikate laboratori: mos i shijo dhe mos i gëlltit.", "Shpëlaj çdo spërkatje me shumë ujë."],
    disposal: ["Përzierjet e neutralizuara mund të derdhen në lavaman me shumë ujë.", "Ktheja mësuesit tabletat e papërdorura."],
    supervisionNote: "Nxënësit mund ta kryejnë nën mbikëqyrjen e mësuesit."
  }
},

/* ===== Disappearing cross ===== */
{
  id: "thiosulfate", icon: "cross", topic: "reactions", grades: "10–11", gmin: 10, gmax: 11,
  supervision: "supervised", time: 45, eqType: "equation", predictAt: 3, ppe: ["goggles"],
  demo: { s: "beaker", from: "#f8fafc", to: "#fef9c3", cloudy: "#fde68a", cross: true },
  video: null,
  sources: [
    { org: "Royal Society of Chemistry", title: "The effect of temperature on reaction rate", url: "https://edu.rsc.org/experiments/the-effect-of-temperature-on-reaction-rate/448.article" }
  ],
  en: {
    name: "The Disappearing Cross", short: "Temperature & rate",
    hook: "Time how long it takes for a cross to vanish behind a yellow cloud.",
    aim: "Investigate how temperature affects the rate of reaction between sodium thiosulfate and hydrochloric acid.",
    chemistry: [
      "Sodium thiosulfate reacts with hydrochloric acid to form a fine precipitate of sulfur. The sulfur makes the solution cloudy and yellow, so a cross drawn under the flask gradually disappears from view. The time taken is a measure of the rate.",
      "Heating the solutions gives particles more kinetic energy. They collide more often, and a larger proportion of collisions have at least the activation energy, so the reaction is faster and the cross disappears sooner."
    ],
    equation: "Na₂S₂O₃(aq) + 2HCl(aq) → 2NaCl(aq) + SO₂(g) + S(s) + H₂O(l)",
    equipment: ["Sodium thiosulfate solution (40 g/dm³) — 50 cm³ per run", "Dilute hydrochloric acid, 1 mol/dm³ — 5 cm³ per run", "Conical flask", "Paper with a black cross drawn on it", "Water bath or warm water to heat the thiosulfate", "Thermometer and stopwatch", "Safety goggles"],
    steps: [
      "Put on goggles. Put the conical flask on the paper cross.",
      "Warm 50 cm³ of sodium thiosulfate solution to the chosen temperature (e.g. 20, 30, 40, 50 °C) and pour it into the flask.",
      "Add 5 cm³ of hydrochloric acid, swirl once and start the stopwatch.",
      "Look down through the flask from above. Stop the clock when you can no longer see the cross.",
      "Pour the mixture straight into the waste container your teacher provides.",
      "Repeat at the other temperatures and plot time against temperature."
    ],
    predict: { q: "What will happen to the time for the cross to disappear as the temperature increases?", options: ["It gets shorter", "It gets longer", "It stays the same", "The cross never disappears"], answer: 0,
      result: "The solution slowly turns cloudy and pale yellow until the cross vanishes. At higher temperatures this happens much faster — often roughly twice as fast for every 10 °C rise." },
    why: { q: "Why does the cross disappear faster at higher temperatures?", answer: 0, options: [
      { t: "Particles move faster, collide more often and more collisions have enough energy to react", fb: "Both the frequency of collisions and the proportion of successful collisions increase, so sulfur forms faster." },
      { t: "Hot water dissolves the cross", fb: "The cross is under the flask on paper. It disappears from view because cloudy sulfur forms in the solution." },
      { t: "Heat makes more acid", fb: "The amount of acid stays the same. Temperature changes how fast the particles react." },
      { t: "Sulfur is only yellow when it's hot", fb: "Sulfur is yellow at any temperature. More forms per second at higher temperatures." }
    ] },
    hazards: ["The reaction gives off sulfur dioxide, a toxic gas that can trigger asthma attacks.", "Hydrochloric acid can damage the eyes and irritate skin.", "Warm solutions above 50 °C release more sulfur dioxide."],
    precautions: ["Work in a well-ventilated lab; students with asthma should take extra care or observe.", "Don't heat above 50 °C, and don't lean over the flasks.", "Wear goggles; dispose of each mixture immediately into the waste container."],
    disposal: ["Pour each finished mixture straight into the waste container provided by the teacher (it neutralises the acid and limits sulfur dioxide).", "Rinse flasks promptly to remove sulfur deposits."],
    supervisionNote: "Students can carry this out under teacher supervision in a well-ventilated room."
  },
  sq: {
    name: "Kryqi që zhduket", short: "Temperatura dhe shpejtësia",
    hook: "Mat sa kohë duhet që një kryq të zhduket pas një reje të verdhë.",
    aim: "Studio si ndikon temperatura në shpejtësinë e reaksionit midis tiosulfatit të natriumit dhe acidit klorhidrik.",
    chemistry: [
      "Tiosulfati i natriumit reagon me acidin klorhidrik dhe formon një precipitat të imët squfuri. Squfuri e bën tretësirën të turbullt dhe të verdhë, ndaj një kryq i vizatuar nën kolbë zhduket gradualisht nga shikimi. Koha e nevojshme është një masë e shpejtësisë.",
      "Ngrohja e tretësirave u jep grimcave më shumë energji kinetike. Ato përplasen më shpesh dhe një pjesë më e madhe e përplasjeve kanë të paktën energjinë e aktivizimit, ndaj reaksioni është më i shpejtë dhe kryqi zhduket më shpejt."
    ],
    equation: "Na₂S₂O₃(aq) + 2HCl(aq) → 2NaCl(aq) + SO₂(g) + S(s) + H₂O(l)",
    equipment: ["Tretësirë tiosulfati natriumi (40 g/dm³) — 50 cm³ për çdo provë", "Acid klorhidrik i holluar, 1 mol/dm³ — 5 cm³ për çdo provë", "Kolbë konike", "Letër me një kryq të zi të vizatuar", "Banjë uji ose ujë i ngrohtë për të ngrohur tiosulfatin", "Termometër dhe kronometër", "Syze mbrojtëse"],
    steps: [
      "Vendos syzet. Vendose kolbën konike mbi kryqin në letër.",
      "Ngroh 50 cm³ tretësirë tiosulfati natriumi në temperaturën e zgjedhur (p.sh. 20, 30, 40, 50 °C) dhe hidhe në kolbë.",
      "Shto 5 cm³ acid klorhidrik, tunde një herë dhe nis kronometrin.",
      "Shiko poshtë nëpër kolbë nga sipër. Ndalo kohën kur nuk e sheh më kryqin.",
      "Derdhe përzierjen menjëherë në enën e mbetjeve që jep mësuesi.",
      "Përsërite në temperaturat e tjera dhe ndërto grafikun e kohës kundrejt temperaturës."
    ],
    predict: { q: "Çfarë do të ndodhë me kohën që i duhet kryqit të zhduket ndërsa rritet temperatura?", options: ["Bëhet më e shkurtër", "Bëhet më e gjatë", "Mbetet e njëjtë", "Kryqi nuk zhduket kurrë"], answer: 0,
      result: "Tretësira turbullohet ngadalë dhe merr ngjyrë të verdhë të zbehtë derisa kryqi zhduket. Në temperatura më të larta kjo ndodh shumë më shpejt — shpesh afërsisht dy herë më shpejt për çdo rritje prej 10 °C." },
    why: { q: "Pse kryqi zhduket më shpejt në temperatura më të larta?", answer: 0, options: [
      { t: "Grimcat lëvizin më shpejt, përplasen më shpesh dhe më shumë përplasje kanë energji të mjaftueshme për të reaguar", fb: "Rriten si shpeshtësia e përplasjeve, ashtu edhe pjesa e përplasjeve të suksesshme, ndaj squfuri formohet më shpejt." },
      { t: "Uji i nxehtë e tret kryqin", fb: "Kryqi është nën kolbë mbi letër. Zhduket nga shikimi sepse në tretësirë formohet squfur i turbullt." },
      { t: "Nxehtësia krijon më shumë acid", fb: "Sasia e acidit mbetet e njëjtë. Temperatura ndryshon sa shpejt reagojnë grimcat." },
      { t: "Squfuri është i verdhë vetëm kur është i nxehtë", fb: "Squfuri është i verdhë në çdo temperaturë. Në temperatura më të larta formohet më shumë në sekondë." }
    ] },
    hazards: ["Reaksioni çliron dioksid squfuri, një gaz toksik që mund të shkaktojë kriza astme.", "Acidi klorhidrik mund të dëmtojë sytë dhe të irritojë lëkurën.", "Tretësirat mbi 50 °C çlirojnë më shumë dioksid squfuri."],
    precautions: ["Puno në një laborator të ajrosur mirë; nxënësit me astmë duhet të jenë shumë të kujdesshëm ose të vëzhgojnë.", "Mos ngroh mbi 50 °C dhe mos u përkul mbi kolbat.", "Mbaj syze mbrojtëse; hidhe çdo përzierje menjëherë në enën e mbetjeve."],
    disposal: ["Derdhe çdo përzierje të përfunduar drejtpërdrejt në enën e mbetjeve që jep mësuesi (ajo neutralizon acidin dhe kufizon dioksidin e squfurit).", "Shpëlaji kolbat shpejt për të hequr depozitat e squfurit."],
    supervisionNote: "Nxënësit mund ta kryejnë nën mbikëqyrjen e mësuesit në një dhomë të ajrosur mirë."
  }
}
];
