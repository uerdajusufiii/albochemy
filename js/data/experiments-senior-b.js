"use strict";
/* ---------- New experiments for grades 10–12 (part 2) ---------- */
const EXP_SENIOR_B = [
/* ===== Making copper sulfate crystals ===== */
{
  id: "coppersalt", icon: "gem", topic: "acids", grades: "10–11", gmin: 10, gmax: 11,
  supervision: "supervised", time: 60, eqType: "equation", predictAt: 3, ppe: ["goggles", "coat"],
  demo: { s: "beaker", from: "#f1f5f9", to: "#2563eb", solid: { c: "#1c1917", shrink: true }, crystals: "#1d4ed8" },
  video: null,
  sources: [
    { org: "Royal Society of Chemistry", title: "Preparing a salt — practical videos, 14–16 years", url: "https://edu.rsc.org/practical/preparing-a-salt-practical-videos-14-16-students/4011982.article" },
    { org: "Royal Society of Chemistry", title: "Reacting copper(II) oxide with sulfuric acid", url: "https://edu.rsc.org/resources/reacting-copper-ii-oxide-with-sulfuric-acid/1917.article" }
  ],
  en: {
    name: "Make Blue Crystals", short: "Making a salt",
    hook: "React a black powder with acid and grow bright blue crystals.",
    aim: "Prepare pure, dry crystals of copper(II) sulfate by reacting copper(II) oxide (an insoluble base) with dilute sulfuric acid.",
    chemistry: [
      "Acids react with bases to make a salt and water. Copper(II) oxide is a black, insoluble base. With warm sulfuric acid it reacts to form blue copper(II) sulfate solution.",
      "Adding the base in excess makes sure all the acid is used up. The unreacted solid is then filtered off, and the blue filtrate is concentrated by heating and left to cool so that crystals of hydrated copper(II) sulfate form."
    ],
    equation: "CuO(s) + H₂SO₄(aq) → CuSO₄(aq) + H₂O(l)",
    equipment: ["Dilute sulfuric acid, 0.5 mol/dm³ — 25 cm³", "Copper(II) oxide powder (harmful)", "Beaker, spatula and glass rod", "Bunsen burner, tripod and gauze (or water bath)", "Filter funnel, filter paper and conical flask", "Evaporating basin", "Safety goggles and lab coat"],
    steps: [
      "Put on goggles. Warm 25 cm³ of sulfuric acid gently in the beaker — do not boil it.",
      "Add copper(II) oxide a spatula at a time, stirring, until some black solid remains and won't react (excess).",
      "Let the mixture cool slightly, then filter it to remove the excess copper oxide.",
      "Pour the blue filtrate into the evaporating basin and heat it until about half the water has evaporated.",
      "Leave the basin somewhere cool for a few days so crystals can form slowly.",
      "Pat the crystals dry with filter paper and describe their shape and colour."
    ],
    predict: { q: "What will happen as the black copper(II) oxide is added to the warm acid?", options: ["It disappears and the solution turns blue", "It floats and the solution stays colourless", "It turns white and gives off a gas", "The solution turns black and thick"], answer: 0,
      result: "The black powder reacts and disappears, and the colourless acid turns a clear, bright blue. Once excess oxide stays black, filtering gives a blue solution which later grows diamond-shaped blue crystals." },
    why: { q: "Why is copper(II) oxide added in excess?", answer: 0, options: [
      { t: "To make sure all of the acid reacts, so the salt isn't contaminated with acid", fb: "Excess base uses up all the acid. The left-over solid is insoluble, so it's easy to filter off." },
      { t: "To make the crystals bigger", fb: "Crystal size depends on how slowly the solution cools, not on the excess oxide." },
      { t: "Because the acid is too weak to react otherwise", fb: "The acid reacts fine. Excess base simply guarantees none of it is left over." },
      { t: "So that the solution turns black", fb: "The solution is blue; the excess black solid is removed by filtering." }
    ] },
    hazards: ["Warm sulfuric acid can damage the eyes and skin.", "Copper(II) oxide and copper(II) sulfate are harmful if swallowed and irritate the eyes; copper compounds are toxic to aquatic life.", "Hot apparatus can burn; heating to dryness makes hot solid spit."],
    precautions: ["Wear goggles and a lab coat; warm the acid gently and never boil it.", "Stop evaporating when the volume has halved — don't heat to dryness.", "Use tongs for hot equipment and wash your hands afterwards."],
    disposal: ["Return the excess copper oxide and any unwanted copper solution to the teacher's copper waste container.", "Crystals can be kept in a labelled, sealed tube."],
    supervisionNote: "A standard practical, but students heat acid, so a teacher must supervise closely."
  },
  sq: {
    name: "Bëj kristale blu", short: "Përgatitja e një kripe",
    hook: "Reago një pluhur të zi me acid dhe rrit kristale blu të ndezura.",
    aim: "Përgatit kristale të pastra e të thata sulfati bakri(II) duke reaguar oksid bakri(II) (një bazë e patretshme) me acid sulfurik të holluar.",
    chemistry: [
      "Acidet reagojnë me bazat dhe formojnë një kripë dhe ujë. Oksidi i bakrit(II) është një bazë e zezë e patretshme. Me acid sulfurik të ngrohtë ai reagon dhe formon tretësirë blu sulfati bakri(II).",
      "Shtimi i bazës me tepricë siguron që i gjithë acidi të harxhohet. Pastaj lënda e ngurtë që nuk ka reaguar filtrohet, dhe filtrati blu përqendrohet me ngrohje dhe lihet të ftohet që të formohen kristale sulfati bakri(II) të hidratuar."
    ],
    equation: "CuO(s) + H₂SO₄(aq) → CuSO₄(aq) + H₂O(l)",
    equipment: ["Acid sulfurik i holluar, 0.5 mol/dm³ — 25 cm³", "Pluhur oksidi bakri(II) (i dëmshëm)", "Gotë kimike, spatulë dhe shkop qelqi", "Llambë Bunsen, trekëmbësh dhe rrjetë (ose banjë uji)", "Hinkë, letër filtri dhe kolbë konike", "Enë avullimi", "Syze mbrojtëse dhe përparëse laboratori"],
    steps: [
      "Vendos syzet. Ngroh butë 25 cm³ acid sulfurik në gotë — mos e vlo.",
      "Shto oksid bakri(II) një spatulë në një herë, duke përzier, derisa të mbetet pak lëndë e zezë që nuk reagon (tepricë).",
      "Lëre përzierjen të ftohet pak, pastaj filtroje për të hequr oksidin e tepërt të bakrit.",
      "Hidhe filtratin blu në enën e avullimit dhe ngroheje derisa të avullojë rreth gjysma e ujit.",
      "Lëre enën në një vend të freskët për disa ditë që kristalet të formohen ngadalë.",
      "Thaji kristalet lehtë me letër filtri dhe përshkruaj formën dhe ngjyrën e tyre."
    ],
    predict: { q: "Çfarë do të ndodhë ndërsa oksidi i zi i bakrit(II) shtohet në acidin e ngrohtë?", options: ["Zhduket dhe tretësira bëhet blu", "Noton dhe tretësira mbetet e pangjyrë", "Bëhet i bardhë dhe çliron një gaz", "Tretësira bëhet e zezë dhe e trashë"], answer: 0,
      result: "Pluhuri i zi reagon dhe zhduket, dhe acidi i pangjyrë bëhet blu e kthjellët dhe e ndezur. Kur teprica e oksidit mbetet e zezë, filtrimi jep një tretësirë blu nga e cila më vonë rriten kristale blu në formë diamanti." },
    why: { q: "Pse oksidi i bakrit(II) shtohet me tepricë?", answer: 0, options: [
      { t: "Për t'u siguruar që i gjithë acidi të reagojë, që kripa të mos ndotet me acid", fb: "Baza e tepërt e harxhon gjithë acidin. Lënda e mbetur është e patretshme, ndaj filtrohet lehtë." },
      { t: "Për t'i bërë kristalet më të mëdha", fb: "Madhësia e kristaleve varet nga sa ngadalë ftohet tretësira, jo nga teprica e oksidit." },
      { t: "Sepse acidi është tepër i dobët për të reaguar ndryshe", fb: "Acidi reagon mirë. Baza e tepërt thjesht garanton që të mos mbetet acid." },
      { t: "Që tretësira të bëhet e zezë", fb: "Tretësira është blu; lënda e zezë e tepërt hiqet me filtrim." }
    ] },
    hazards: ["Acidi sulfurik i ngrohtë mund të dëmtojë sytë dhe lëkurën.", "Oksidi i bakrit(II) dhe sulfati i bakrit(II) janë të dëmshëm nëse gëlltiten dhe irritojnë sytë; përbërjet e bakrit janë toksike për jetën ujore.", "Aparatet e nxehta mund të djegin; ngrohja deri në tharje e bën lëndën e nxehtë të kërcejë."],
    precautions: ["Mbaj syze mbrojtëse dhe përparëse laboratori; ngroh acidin butë dhe mos e vlo kurrë.", "Ndalo avullimin kur vëllimi të jetë përgjysmuar — mos ngroh deri në tharje.", "Përdor mashë për pajisjet e nxehta dhe laj duart pas eksperimentit."],
    disposal: ["Ktheja mësuesit oksidin e tepërt të bakrit dhe çdo tretësirë bakri të panevojshme në enën e mbetjeve të bakrit.", "Kristalet mund të ruhen në një provëz me etiketë dhe të mbyllur."],
    supervisionNote: "Praktikë standarde, por nxënësit ngrohin acid, ndaj mësuesi duhet të mbikëqyrë nga afër."
  }
},

/* ===== Electrolysis of copper sulfate ===== */
{
  id: "electrolysis", icon: "bolt", topic: "electro", grades: "10–12", gmin: 10, gmax: 12,
  supervision: "supervised", time: 45, eqType: "equation", predictAt: 3, ppe: ["goggles"],
  demo: { s: "beaker", from: "#3b82f6", to: "#3b82f6", electrodes: { coat: "#c2410c" } },
  video: { id: "KkmuszUEKiI", title: "GCSE Chemistry in 60 SECONDS - Electrolysis of Copper Sulfate (Using Copper Electrodes)", channel: "LittyInTheLaboratory",
    note: { en: "The copper-electrode version used on this page, explained in one minute.", sq: "Versioni me elektroda bakri që përdoret në këtë faqe, i shpjeguar në një minutë." } },
  sources: [
    { org: "Royal Society of Chemistry", title: "Electrolysis — practical videos, 14–16 years", url: "https://edu.rsc.org/practical/electrolysis-practical-videos-14-16-students/4011983.article" }
  ],
  en: {
    name: "Moving Copper with Electricity", short: "Electrolysis",
    hook: "Use electricity to move copper from one electrode to the other.",
    aim: "Electrolyse copper(II) sulfate solution with copper electrodes and measure the change in mass of each electrode.",
    chemistry: [
      "Electrolysis uses electricity to drive a chemical change. Positive copper(II) ions in the solution are attracted to the negative electrode (cathode), where they gain electrons and are deposited as copper metal.",
      "At the positive electrode (anode), copper atoms lose electrons and go into solution as copper(II) ions. So the anode loses mass, the cathode gains about the same mass, and the solution stays blue. This is how copper is purified and how objects are electroplated."
    ],
    equation: "cathode (−): Cu²⁺ + 2e⁻ → Cu    ·    anode (+): Cu → Cu²⁺ + 2e⁻",
    equipment: ["Two copper foil electrodes, cleaned with sandpaper", "Copper(II) sulfate solution, 0.5 mol/dm³ (harmful) — 100 cm³", "Beaker and electrode holder", "Low-voltage DC power supply (about 4–6 V) and leads with crocodile clips", "Ammeter (optional)", "Top-pan balance", "Safety goggles"],
    steps: [
      "Put on goggles. Label the electrodes ‘+’ and ‘−’, then weigh each one and record the mass.",
      "Pour copper(II) sulfate solution into the beaker and place the electrodes so they don't touch.",
      "Connect the electrodes to the power supply: the ‘−’ electrode to the negative terminal.",
      "Switch on at about 4 V for 20–30 minutes. Watch both electrodes.",
      "Switch off, remove the electrodes carefully, rinse them gently with water and let them dry.",
      "Reweigh both electrodes and calculate the change in mass of each."
    ],
    predict: { q: "What will happen to the mass of the negative electrode (cathode)?", options: ["It increases as copper is deposited", "It decreases", "It stays exactly the same", "It dissolves completely"], answer: 0,
      result: "A fresh pinkish layer of copper builds up on the cathode, which gains mass. The anode loses about the same mass. The solution stays blue because copper ions are replaced as fast as they are removed." },
    why: { q: "Why does the cathode gain mass?", answer: 0, options: [
      { t: "Copper(II) ions gain electrons there and become copper atoms", fb: "Reduction at the cathode turns Cu²⁺ ions into copper metal, which sticks to the electrode." },
      { t: "Water sticks to the cathode", fb: "The electrodes are dried before weighing. The extra mass is copper metal." },
      { t: "Sulfate ions are deposited on the cathode", fb: "Negative sulfate ions are attracted to the positive anode, not the cathode." },
      { t: "Electricity has mass", fb: "Electric current doesn't add mass. Copper atoms are transferred from the anode via the solution." }
    ] },
    hazards: ["Copper(II) sulfate is harmful if swallowed, irritates eyes and skin, and is toxic to aquatic life.", "Electrical equipment near liquids — keep plugs and sockets dry.", "Electrodes touching each other cause a short circuit."],
    precautions: ["Wear goggles and use only a low-voltage supply.", "Make sure the electrodes never touch; switch off before adjusting anything.", "Wash your hands after handling electrodes and solution."],
    disposal: ["Return the copper sulfate solution to the teacher for reuse or collection — don't pour it down the sink.", "Keep the copper electrodes for reuse."],
    supervisionNote: "Students can carry this out with low-voltage supplies under teacher supervision."
  },
  sq: {
    name: "Lëvizja e bakrit me elektricitet", short: "Elektroliza",
    hook: "Përdor elektricitetin për të lëvizur bakrin nga një elektrodë te tjetra.",
    aim: "Elektrolizo tretësirë sulfati bakri(II) me elektroda bakri dhe mat ndryshimin e masës së secilës elektrodë.",
    chemistry: [
      "Elektroliza përdor elektricitetin për të shkaktuar një ndryshim kimik. Jonet pozitive të bakrit(II) në tretësirë tërhiqen nga elektroda negative (katoda), ku fitojnë elektrone dhe depozitohen si metal bakri.",
      "Te elektroda pozitive (anoda), atomet e bakrit humbasin elektrone dhe kalojnë në tretësirë si jone bakri(II). Kështu anoda humbet masë, katoda fiton afërsisht të njëjtën masë, dhe tretësira mbetet blu. Kështu pastrohet bakri dhe kështu galvanizohen objektet."
    ],
    equation: "katoda (−): Cu²⁺ + 2e⁻ → Cu    ·    anoda (+): Cu → Cu²⁺ + 2e⁻",
    equipment: ["Dy elektroda nga fletë bakri, të pastruara me letër zmerile", "Tretësirë sulfati bakri(II), 0.5 mol/dm³ (e dëmshme) — 100 cm³", "Gotë kimike dhe mbajtëse elektrodash", "Burim rryme të vazhduar me tension të ulët (rreth 4–6 V) dhe tela me kapëse krokodil", "Ampermetër (sipas dëshirës)", "Peshore elektronike", "Syze mbrojtëse"],
    steps: [
      "Vendos syzet. Shëno elektrodat ‘+’ dhe ‘−’, pastaj peshoji dhe shëno masën e secilës.",
      "Hidh tretësirën e sulfatit të bakrit(II) në gotë dhe vendos elektrodat që të mos prekin njëra-tjetrën.",
      "Lidh elektrodat me burimin e rrymës: elektrodën ‘−’ me polin negativ.",
      "Ndize në rreth 4 V për 20–30 minuta. Vëzhgo të dyja elektrodat.",
      "Fike, nxirri elektrodat me kujdes, shpëlaji butë me ujë dhe lëri të thahen.",
      "Peshoji përsëri të dyja elektrodat dhe llogarit ndryshimin e masës së secilës."
    ],
    predict: { q: "Çfarë do të ndodhë me masën e elektrodës negative (katodës)?", options: ["Rritet ndërsa depozitohet bakër", "Ulet", "Mbetet saktësisht e njëjtë", "Tretet plotësisht"], answer: 0,
      result: "Mbi katodë formohet një shtresë e re bakri rozë, dhe ajo fiton masë. Anoda humbet afërsisht të njëjtën masë. Tretësira mbetet blu sepse jonet e bakrit zëvendësohen aq shpejt sa largohen." },
    why: { q: "Pse katoda fiton masë?", answer: 0, options: [
      { t: "Jonet e bakrit(II) fitojnë elektrone aty dhe bëhen atome bakri", fb: "Reduktimi te katoda i kthen jonet Cu²⁺ në metal bakri, që ngjitet te elektroda." },
      { t: "Uji ngjitet te katoda", fb: "Elektrodat thahen para peshimit. Masa shtesë është metal bakri." },
      { t: "Jonet sulfat depozitohen te katoda", fb: "Jonet negative sulfat tërhiqen nga anoda pozitive, jo nga katoda." },
      { t: "Elektriciteti ka masë", fb: "Rryma elektrike nuk shton masë. Atomet e bakrit transferohen nga anoda përmes tretësirës." }
    ] },
    hazards: ["Sulfati i bakrit(II) është i dëmshëm nëse gëlltitet, irriton sytë dhe lëkurën dhe është toksik për jetën ujore.", "Pajisje elektrike pranë lëngjeve — mbaji prizat dhe spinat të thata.", "Elektrodat që prekin njëra-tjetrën shkaktojnë qark të shkurtër."],
    precautions: ["Mbaj syze mbrojtëse dhe përdor vetëm burim me tension të ulët.", "Sigurohu që elektrodat të mos prekin kurrë njëra-tjetrën; fike para se të rregullosh diçka.", "Laj duart pasi prek elektrodat dhe tretësirën."],
    disposal: ["Ktheja mësuesit tretësirën e sulfatit të bakrit për ripërdorim ose grumbullim — mos e derdh në lavaman.", "Ruaji elektrodat e bakrit për ripërdorim."],
    supervisionNote: "Nxënësit mund ta kryejnë me burime me tension të ulët nën mbikëqyrjen e mësuesit."
  }
},

/* ===== Metal ion precipitate tests ===== */
{
  id: "iontests", icon: "tubes", topic: "analysis", grades: "10–12", gmin: 10, gmax: 12,
  supervision: "supervised", time: 30, eqType: "equation", predictAt: 3, ppe: ["goggles"],
  demo: { s: "beaker", from: "#bfdbfe", to: "#dbeafe", precip: "#2563eb" },
  video: { id: "LoeyElPpLUY", title: "Reaction of Sodium Hydroxide with Copper (II) Sulfate", channel: "Wayne Breslyn (Dr. B.)",
    note: { en: "The blue copper(II) hydroxide precipitate forming.", sq: "Formimi i precipitatit blu të hidroksidit të bakrit(II)." } },
  sources: [
    { org: "Royal Society of Chemistry", title: "Testing salts for anions and cations", url: "https://edu.rsc.org/experiments/testing-salts-for-anions-and-cations/464.article" }
  ],
  en: {
    name: "Precipitate Detective", short: "Testing metal ions",
    hook: "Identify mystery metal ions from the colour of the solid that appears.",
    aim: "Use sodium hydroxide solution to identify copper(II), iron(II) and iron(III) ions by the colour of the precipitates they form.",
    chemistry: [
      "Many metal hydroxides are insoluble. When sodium hydroxide solution is added to a solution containing certain metal ions, an insoluble hydroxide forms as a solid — a precipitate.",
      "The colour of the precipitate identifies the metal ion: copper(II) gives a blue precipitate, iron(II) a green one (which slowly turns brown at the surface in air), and iron(III) an orange-brown one."
    ],
    equation: "Cu²⁺(aq) + 2OH⁻(aq) → Cu(OH)₂(s)   (blue precipitate)",
    equipment: ["Dilute sodium hydroxide solution, 0.4 mol/dm³ (irritant), in a dropper bottle", "Solutions of copper(II) sulfate, iron(II) sulfate and iron(III) chloride (about 0.1 mol/dm³)", "One ‘unknown’ solution from the teacher", "Test tubes in a rack", "Dropping pipettes", "Safety goggles"],
    steps: [
      "Put on goggles. Put about 1 cm depth of each known solution into a separate labelled test tube.",
      "Add sodium hydroxide solution drop by drop to the first tube.",
      "Record the colour of any precipitate.",
      "Repeat for the other known solutions.",
      "Test the unknown solution the same way.",
      "Use your results to identify the metal ion in the unknown solution."
    ],
    predict: { q: "What will you see when sodium hydroxide is added to copper(II) sulfate solution?", options: ["A pale blue precipitate", "An orange-brown precipitate", "A white precipitate that fizzes", "No change at all"], answer: 0,
      result: "A pale blue, jelly-like precipitate of copper(II) hydroxide forms in copper(II) sulfate. Iron(II) sulfate gives a dirty-green precipitate and iron(III) chloride an orange-brown one." },
    why: { q: "Why does a solid appear when the solutions are mixed?", answer: 0, options: [
      { t: "The metal ions combine with hydroxide ions to form an insoluble hydroxide", fb: "Insoluble products come out of solution as a precipitate. Its colour depends on the metal ion." },
      { t: "Sodium hydroxide freezes the solution", fb: "Nothing freezes. A new insoluble compound forms." },
      { t: "The water evaporates", fb: "The volume barely changes. The solid is a new insoluble substance." },
      { t: "Sodium metal is produced", fb: "Sodium ions stay dissolved. The solid contains the other metal combined with hydroxide." }
    ] },
    hazards: ["Sodium hydroxide solution can damage eyes and irritate skin.", "Copper and iron salts are harmful if swallowed and irritate the eyes.", "Copper compounds are toxic to aquatic life."],
    precautions: ["Wear goggles at all times.", "Use small volumes and a separate pipette for each solution.", "Rinse splashes with plenty of water; wash your hands at the end."],
    disposal: ["Pour the mixtures into the heavy-metal waste container provided by the teacher.", "Rinse test tubes promptly."],
    supervisionNote: "Students can carry this out under teacher supervision."
  },
  sq: {
    name: "Detektivi i precipitateve", short: "Testimi i joneve metalike",
    hook: "Identifiko jone metalike misterioze nga ngjyra e lëndës së ngurtë që shfaqet.",
    aim: "Përdor tretësirë hidroksidi natriumi për të identifikuar jonet e bakrit(II), hekurit(II) dhe hekurit(III) nga ngjyra e precipitateve që formojnë.",
    chemistry: [
      "Shumë hidrokside metalesh janë të patretshme. Kur tretësira e hidroksidit të natriumit shtohet në një tretësirë që përmban jone të caktuara metalike, një hidroksid i patretshëm formohet si lëndë e ngurtë — një precipitat.",
      "Ngjyra e precipitatit e identifikon jonin metalik: bakri(II) jep precipitat blu, hekuri(II) një të gjelbër (që ngadalë skuqet në kafe në sipërfaqe në ajër), dhe hekuri(III) një portokalli-kafe."
    ],
    equation: "Cu²⁺(aq) + 2OH⁻(aq) → Cu(OH)₂(s)   (precipitat blu)",
    equipment: ["Tretësirë e holluar hidroksidi natriumi, 0.4 mol/dm³ (irrituese), në shishe me pikatore", "Tretësira sulfati bakri(II), sulfati hekuri(II) dhe kloruri hekuri(III) (rreth 0.1 mol/dm³)", "Një tretësirë ‘e panjohur’ nga mësuesi", "Provëza në mbajtëse", "Pipeta pikuese", "Syze mbrojtëse"],
    steps: [
      "Vendos syzet. Hidh rreth 1 cm thellësi nga çdo tretësirë e njohur në një provëz të veçantë me etiketë.",
      "Shto tretësirë hidroksidi natriumi pikë-pikë në provëzën e parë.",
      "Shëno ngjyrën e çdo precipitati.",
      "Përsërite me tretësirat e tjera të njohura.",
      "Testo tretësirën e panjohur në të njëjtën mënyrë.",
      "Përdor rezultatet për të identifikuar jonin metalik në tretësirën e panjohur."
    ],
    predict: { q: "Çfarë do të shohësh kur hidroksidi i natriumit shtohet në tretësirën e sulfatit të bakrit(II)?", options: ["Një precipitat blu të çelët", "Një precipitat portokalli-kafe", "Një precipitat të bardhë që shkumëzon", "Asnjë ndryshim"], answer: 0,
      result: "Në sulfatin e bakrit(II) formohet një precipitat blu i çelët, si pelte, i hidroksidit të bakrit(II). Sulfati i hekurit(II) jep një precipitat të gjelbër të errët dhe kloruri i hekurit(III) një portokalli-kafe." },
    why: { q: "Pse shfaqet një lëndë e ngurtë kur përzihen tretësirat?", answer: 0, options: [
      { t: "Jonet metalike bashkohen me jonet hidroksid dhe formojnë një hidroksid të patretshëm", fb: "Produktet e patretshme dalin nga tretësira si precipitat. Ngjyra e tij varet nga joni metalik." },
      { t: "Hidroksidi i natriumit e ngrin tretësirën", fb: "Asgjë nuk ngrin. Formohet një përbërje e re e patretshme." },
      { t: "Uji avullon", fb: "Vëllimi pothuajse nuk ndryshon. Lënda e ngurtë është një substancë e re e patretshme." },
      { t: "Prodhohet metal natriumi", fb: "Jonet e natriumit mbeten të tretura. Lënda e ngurtë përmban metalin tjetër të bashkuar me hidroksidin." }
    ] },
    hazards: ["Tretësira e hidroksidit të natriumit mund të dëmtojë sytë dhe të irritojë lëkurën.", "Kripërat e bakrit dhe të hekurit janë të dëmshme nëse gëlltiten dhe irritojnë sytë.", "Përbërjet e bakrit janë toksike për jetën ujore."],
    precautions: ["Mbaj syze mbrojtëse gjatë gjithë kohës.", "Përdor vëllime të vogla dhe një pipetë të veçantë për çdo tretësirë.", "Shpëlaj spërkatjet me shumë ujë; laj duart në fund."],
    disposal: ["Derdhi përzierjet në enën e mbetjeve të metaleve të rënda që jep mësuesi.", "Shpëlaji provëzat shpejt."],
    supervisionNote: "Nxënësit mund ta kryejnë nën mbikëqyrjen e mësuesit."
  }
},

/* ===== Reversible reaction: copper sulfate ===== */
{
  id: "reversible", icon: "cycle", topic: "energy", grades: "10–11", gmin: 10, gmax: 11,
  supervision: "supervised", time: 25, eqType: "equation", predictAt: 3, ppe: ["goggles"],
  demo: { s: "tube", from: "#2563eb", to: "#f1f5f9" },
  video: { id: "xK3Mev227-Y", title: "Heating Copper Sulphate Crystals | Science Experiment in 60 Seconds", channel: "Smart Culture Education",
    note: { en: "Blue crystals turning white as their water is driven off.", sq: "Kristalet blu që zbardhen ndërsa largohet uji i tyre." } },
  sources: [
    { org: "Royal Society of Chemistry", title: "A reversible reaction of hydrated copper(II) sulfate", url: "https://edu.rsc.org/experiments/a-reversible-reaction-of-hydrated-copperii-sulfate/437.article" }
  ],
  en: {
    name: "Blue ⇌ White", short: "Reversible reactions",
    hook: "Heat blue crystals until they turn white — then bring the blue back with a drop of water.",
    aim: "Show that the dehydration of hydrated copper(II) sulfate is a reversible reaction, and observe the energy changes in each direction.",
    chemistry: [
      "Blue copper(II) sulfate crystals contain water molecules locked into their structure (water of crystallisation). Heating drives off this water and leaves white anhydrous copper(II) sulfate. This direction is endothermic — it needs heat.",
      "Adding water back turns the white powder blue again and the tube gets hot, because the reverse reaction is exothermic. The same amount of energy is taken in one way and given out the other. This colour change is also used as a test for water."
    ],
    equation: "CuSO₄·5H₂O(s) (blue) ⇌ CuSO₄(s) (white) + 5H₂O(l)",
    equipment: ["Hydrated copper(II) sulfate crystals — a spatula (harmful)", "Hard-glass test tube and holder or clamp", "Bunsen burner and heat-resistant mat", "Dropping pipette and water", "Safety goggles"],
    steps: [
      "Put on goggles. Put a small spatula of blue crystals into the test tube.",
      "Heat the tube gently, held at an angle and pointing away from everyone.",
      "Watch the colour of the solid and the inside of the tube near the top.",
      "When the solid is completely white, stop heating and let the tube cool for several minutes.",
      "Add a few drops of water to the cooled white powder.",
      "Carefully feel the bottom of the tube."
    ],
    predict: { q: "What happens when water is added to the cooled white powder?", options: ["It turns blue again and gets hot", "It stays white and cold", "It turns black", "It bursts into flame"], answer: 0,
      result: "On heating, the blue crystals turn white and droplets of water condense near the top of the tube. Adding water to the cooled white powder turns it blue again and the tube becomes noticeably warm." },
    why: { q: "Why does the tube get hot when water is added?", answer: 0, options: [
      { t: "The reverse reaction is exothermic: it gives out the energy that was taken in during heating", fb: "In a reversible reaction, if one direction is endothermic, the other is exothermic by the same amount." },
      { t: "The tube was still hot from before", fb: "The tube was left to cool. The warmth comes from the reaction itself." },
      { t: "Water is always warm", fb: "The water is at room temperature. The heat is released by the reaction." },
      { t: "Copper is burning", fb: "Nothing is burning. Water is joining back into the crystal structure and releasing energy." }
    ] },
    hazards: ["Copper(II) sulfate is harmful if swallowed and irritates eyes and skin.", "Hot glass and the Bunsen flame can burn.", "Adding water to a hot solid can make it spit."],
    precautions: ["Wear goggles; point the tube away from people.", "Let the tube cool completely before adding water.", "Use small amounts and wash your hands afterwards."],
    disposal: ["Return the copper sulfate to the teacher for reuse or the copper waste container.", "Let hot glassware cool before washing."],
    supervisionNote: "Students can carry this out under teacher supervision."
  },
  sq: {
    name: "Blu ⇌ e bardhë", short: "Reaksionet e kthyeshme",
    hook: "Ngroh kristale blu derisa të zbardhen — pastaj ktheje blunë me një pikë uji.",
    aim: "Trego se dehidratimi i sulfatit të bakrit(II) të hidratuar është një reaksion i kthyeshëm dhe vëzhgo ndryshimet e energjisë në secilin drejtim.",
    chemistry: [
      "Kristalet blu të sulfatit të bakrit(II) përmbajnë molekula uji të bllokuara në strukturën e tyre (ujë kristalizimi). Ngrohja e largon këtë ujë dhe lë sulfat bakri(II) anhidër të bardhë. Ky drejtim është endotermik — ka nevojë për nxehtësi.",
      "Shtimi i ujit e kthen pluhurin e bardhë përsëri në blu dhe provëza nxehet, sepse reaksioni i kundërt është ekzotermik. E njëjta sasi energjie merret në një drejtim dhe jepet në tjetrin. Ky ndryshim ngjyre përdoret gjithashtu si test për ujin."
    ],
    equation: "CuSO₄·5H₂O(s) (blu) ⇌ CuSO₄(s) (e bardhë) + 5H₂O(l)",
    equipment: ["Kristale sulfati bakri(II) të hidratuar — një spatulë (të dëmshme)", "Provëz qelqi rezistent dhe mbajtëse ose kapëse", "Llambë Bunsen dhe pllakë rezistente ndaj nxehtësisë", "Pipetë pikuese dhe ujë", "Syze mbrojtëse"],
    steps: [
      "Vendos syzet. Vendos një spatulë të vogël kristalesh blu në provëz.",
      "Ngroh provëzën butë, të mbajtur pjerrët dhe të drejtuar larg të gjithëve.",
      "Vëzhgo ngjyrën e lëndës dhe pjesën e brendshme të provëzës pranë majës.",
      "Kur lënda të jetë krejt e bardhë, ndalo ngrohjen dhe lëre provëzën të ftohet për disa minuta.",
      "Shto disa pika uji te pluhuri i bardhë i ftohur.",
      "Prek me kujdes fundin e provëzës."
    ],
    predict: { q: "Çfarë ndodh kur shtohet ujë te pluhuri i bardhë i ftohur?", options: ["Bëhet përsëri blu dhe nxehet", "Mbetet i bardhë dhe i ftohtë", "Nxihet", "Merr flakë"], answer: 0,
      result: "Gjatë ngrohjes, kristalet blu zbardhen dhe pika uji kondensohen pranë majës së provëzës. Shtimi i ujit te pluhuri i bardhë i ftohur e kthen përsëri në blu dhe provëza ngrohet dukshëm." },
    why: { q: "Pse provëza nxehet kur shtohet uji?", answer: 0, options: [
      { t: "Reaksioni i kundërt është ekzotermik: jep energjinë që u mor gjatë ngrohjes", fb: "Në një reaksion të kthyeshëm, nëse një drejtim është endotermik, tjetri është ekzotermik me të njëjtën sasi." },
      { t: "Provëza ishte ende e nxehtë nga më parë", fb: "Provëza u la të ftohej. Ngrohtësia vjen nga vetë reaksioni." },
      { t: "Uji është gjithmonë i ngrohtë", fb: "Uji është në temperaturën e dhomës. Nxehtësia çlirohet nga reaksioni." },
      { t: "Bakri po digjet", fb: "Asgjë nuk digjet. Uji po rikthehet në strukturën kristalore dhe çliron energji." }
    ] },
    hazards: ["Sulfati i bakrit(II) është i dëmshëm nëse gëlltitet dhe irriton sytë dhe lëkurën.", "Qelqi i nxehtë dhe flaka e Bunsen-it mund të djegin.", "Shtimi i ujit te një lëndë e nxehtë mund ta bëjë të kërcejë."],
    precautions: ["Mbaj syze mbrojtëse; drejtoje provëzën larg njerëzve.", "Lëre provëzën të ftohet plotësisht para se të shtosh ujë.", "Përdor sasi të vogla dhe laj duart pas eksperimentit."],
    disposal: ["Ktheja mësuesit sulfatin e bakrit për ripërdorim ose për enën e mbetjeve të bakrit.", "Lëri enët e nxehta të ftohen para se t'i lash."],
    supervisionNote: "Nxënësit mund ta kryejnë nën mbikëqyrjen e mësuesit."
  }
},

/* ===== Iodine clock ===== */
{
  id: "iodineclock", icon: "clock", topic: "reactions", grades: "11–12", gmin: 11, gmax: 12,
  supervision: "supervised", time: 40, eqType: "equation", predictAt: 3, ppe: ["goggles"],
  demo: { s: "beaker", from: "#f8fafc", to: "#1e1b4b", delay: true },
  video: { id: "E50_HcZM7tg", title: "Concentration and Reaction Rate - The Iodine Clock", channel: "Dr Col Harrison",
    note: { en: "A chemistry educator shows how concentration changes the timing.", sq: "Një edukator kimie tregon si ndryshon koha me përqendrimin." } },
  sources: [
    { org: "Royal Society of Chemistry", title: "Iodine clock reaction demonstration method", url: "https://edu.rsc.org/experiments/iodine-clock-reaction-demonstration-method/744.article" },
    { org: "Royal Society of Chemistry", title: "A chemical stop-clock: iodine clock reaction", url: "https://edu.rsc.org/resources/a-chemical-stop-clock-iodine-clock-reaction/598.article" }
  ],
  en: {
    name: "The Iodine Clock", short: "Rates & concentration",
    hook: "A clear liquid that suddenly turns blue-black — exactly on time.",
    aim: "Investigate how the concentration of a reactant affects the time taken for an iodine clock reaction to turn blue-black.",
    chemistry: [
      "Hydrogen peroxide slowly oxidises iodide ions to iodine. A small, fixed amount of sodium thiosulfate in the mixture instantly turns any iodine back into iodide, so at first nothing visible happens.",
      "When all the thiosulfate has been used up, iodine starts to build up and immediately forms a blue-black complex with the starch. The faster the first reaction, the sooner the colour appears — so the time measures the rate."
    ],
    equation: "H₂O₂ + 2H⁺ + 2I⁻ → I₂ + 2H₂O;   I₂ + 2S₂O₃²⁻ → 2I⁻ + S₄O₆²⁻ (until the thiosulfate runs out)",
    equipment: ["Solution A: potassium iodide, sodium thiosulfate and starch (made up by the teacher)", "Solution B: dilute hydrogen peroxide with dilute sulfuric acid (made up by the teacher)", "Measuring cylinders", "Small beakers", "Distilled water for dilutions", "Stopwatch and white tile", "Safety goggles"],
    steps: [
      "Put on goggles. Measure 25 cm³ of solution A into a beaker on the white tile.",
      "Measure 25 cm³ of solution B into a separate cylinder.",
      "Pour B into A, swirl once and start the stopwatch.",
      "Stop the clock the instant the mixture turns blue-black.",
      "Repeat using diluted solution A (e.g. 20 cm³ A + 5 cm³ water, 15 + 10, 10 + 15).",
      "Plot 1/time (a measure of rate) against the volume of A used."
    ],
    predict: { q: "What will you see in the first few seconds after mixing?", options: ["Nothing — it stays colourless, then suddenly turns blue-black", "It turns blue-black immediately", "It slowly turns pale yellow and stays that way", "It fizzes violently"], answer: 0,
      result: "The mixture stays perfectly colourless for a while, then turns intensely blue-black in an instant. With more dilute solution A, the wait is longer." },
    why: { q: "Why does the colour appear suddenly rather than gradually?", answer: 0, options: [
      { t: "Thiosulfate removes iodine as it forms until the thiosulfate is used up; then iodine builds up and reacts with starch", fb: "The thiosulfate acts like a timer. Once it has run out, iodine accumulates and the starch complex forms almost at once." },
      { t: "Starch takes time to dissolve", fb: "The starch is already dissolved. The delay is set by the amount of thiosulfate." },
      { t: "The reaction only starts after a delay", fb: "The first reaction starts straight away; its product is just being removed by thiosulfate." },
      { t: "The light in the room changes", fb: "The colour change is a chemical event and happens regardless of the lighting." }
    ] },
    hazards: ["Dilute sulfuric acid and hydrogen peroxide can irritate eyes and skin.", "Iodine stains skin and clothes."],
    precautions: ["Wear goggles.", "Use the solutions exactly as prepared by the teacher; don't make them stronger.", "Rinse splashes with water and wash your hands afterwards."],
    disposal: ["The dilute mixtures can be poured down the sink with plenty of water, following school rules.", "Rinse glassware promptly to remove stains."],
    supervisionNote: "Students can carry this out under teacher supervision; the teacher prepares the solutions."
  },
  sq: {
    name: "Ora e jodit", short: "Shpejtësia dhe përqendrimi",
    hook: "Një lëng i kthjellët që papritur bëhet blu-i zi — saktësisht në kohë.",
    aim: "Studio si ndikon përqendrimi i një reaktanti në kohën që i duhet reaksionit të orës së jodit për t'u bërë blu-i zi.",
    chemistry: [
      "Peroksidi i hidrogjenit i oksidon ngadalë jonet jodur në jod. Një sasi e vogël e caktuar tiosulfati natriumi në përzierje e kthen menjëherë çdo jod përsëri në jodur, ndaj në fillim nuk ndodh asgjë e dukshme.",
      "Kur i gjithë tiosulfati është harxhuar, jodi fillon të grumbullohet dhe menjëherë formon një kompleks blu-të zi me niseshtenë. Sa më i shpejtë reaksioni i parë, aq më shpejt shfaqet ngjyra — ndaj koha mat shpejtësinë."
    ],
    equation: "H₂O₂ + 2H⁺ + 2I⁻ → I₂ + 2H₂O;   I₂ + 2S₂O₃²⁻ → 2I⁻ + S₄O₆²⁻ (derisa të mbarojë tiosulfati)",
    equipment: ["Tretësira A: jodur kaliumi, tiosulfat natriumi dhe niseshte (e përgatit mësuesi)", "Tretësira B: peroksid hidrogjeni i holluar me acid sulfurik të holluar (e përgatit mësuesi)", "Cilindra matës", "Gota kimike të vogla", "Ujë i distiluar për hollime", "Kronometër dhe pllakë e bardhë", "Syze mbrojtëse"],
    steps: [
      "Vendos syzet. Mat 25 cm³ tretësirë A në një gotë mbi pllakën e bardhë.",
      "Mat 25 cm³ tretësirë B në një cilindër tjetër.",
      "Derdhe B në A, tunde një herë dhe nis kronometrin.",
      "Ndalo kohën në çastin kur përzierja bëhet blu-e zezë.",
      "Përsërite duke përdorur tretësirë A të holluar (p.sh. 20 cm³ A + 5 cm³ ujë, 15 + 10, 10 + 15).",
      "Ndërto grafikun e 1/kohë (masë e shpejtësisë) kundrejt vëllimit të A-së së përdorur."
    ],
    predict: { q: "Çfarë do të shohësh në sekondat e para pas përzierjes?", options: ["Asgjë — mbetet e pangjyrë, pastaj papritur bëhet blu-e zezë", "Bëhet menjëherë blu-e zezë", "Bëhet ngadalë e verdhë e zbehtë dhe mbetet e tillë", "Shkumëzon me vrull"], answer: 0,
      result: "Përzierja mbetet krejt e pangjyrë për një kohë, pastaj në një çast bëhet blu-e zezë intensive. Me tretësirë A më të holluar, pritja është më e gjatë." },
    why: { q: "Pse ngjyra shfaqet papritur dhe jo gradualisht?", answer: 0, options: [
      { t: "Tiosulfati e largon jodin sapo formohet derisa harxhohet; pastaj jodi grumbullohet dhe reagon me niseshtenë", fb: "Tiosulfati vepron si kohëmatës. Sapo mbaron, jodi grumbullohet dhe kompleksi me niseshtenë formohet pothuajse menjëherë." },
      { t: "Niseshtesë i duhet kohë të tretet", fb: "Niseshteja është tashmë e tretur. Vonesa përcaktohet nga sasia e tiosulfatit." },
      { t: "Reaksioni fillon vetëm pas një vonese", fb: "Reaksioni i parë fillon menjëherë; produkti i tij thjesht po largohet nga tiosulfati." },
      { t: "Drita në dhomë ndryshon", fb: "Ndryshimi i ngjyrës është ngjarje kimike dhe ndodh pavarësisht ndriçimit." }
    ] },
    hazards: ["Acidi sulfurik i holluar dhe peroksidi i hidrogjenit mund të irritojnë sytë dhe lëkurën.", "Jodi njollos lëkurën dhe rrobat."],
    precautions: ["Mbaj syze mbrojtëse.", "Përdor tretësirat saktësisht siç i përgatit mësuesi; mos i bëj më të forta.", "Shpëlaj spërkatjet me ujë dhe laj duart pas eksperimentit."],
    disposal: ["Përzierjet e holluara mund të derdhen në lavaman me shumë ujë, sipas rregullave të shkollës.", "Shpëlaji enët shpejt për të hequr njollat."],
    supervisionNote: "Nxënësit mund ta kryejnë nën mbikëqyrjen e mësuesit; mësuesi përgatit tretësirat."
  }
},

/* ===== Burning alcohols (calorimetry) ===== */
{
  id: "combustion", icon: "fuel", topic: "organic", grades: "11–12", gmin: 11, gmax: 12,
  supervision: "close", time: 50, eqType: "equation", predictAt: 3, ppe: ["goggles", "coat", "hair"],
  demo: { s: "flame", color: "#60a5fa", can: true, temp: "up" },
  video: null,
  sources: [
    { org: "Royal Society of Chemistry", title: "Comparing heat energy from burning alcohols", url: "https://edu.rsc.org/experiments/comparing-heat-energy-from-burning-alcohols/1733.article" }
  ],
  en: {
    name: "Fuel Energy", short: "Calorimetry",
    hook: "Which alcohol fuel releases the most energy per gram?",
    aim: "Compare the energy released when different alcohols burn by measuring how much they heat a known mass of water.",
    chemistry: [
      "Alcohols such as ethanol, propanol and butanol burn in oxygen to form carbon dioxide and water, releasing energy. This is an exothermic combustion reaction.",
      "The energy transferred to the water can be calculated with Q = m × c × ΔT, where m is the mass of water, c = 4.18 J/g/°C and ΔT is the temperature rise. Dividing by the mass of fuel burned gives the energy per gram. Bigger alcohol molecules release more energy per mole, because more bonds form in the products."
    ],
    equation: "C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O;    Q = m × 4.18 × ΔT",
    equipment: ["Spirit burners containing ethanol, propanol and butanol — filled by the teacher", "Copper calorimeter can with 100 cm³ of water", "Clamp stand and draught shield", "Thermometer", "Top-pan balance", "Heat-resistant mat", "Safety goggles, lab coat and tied-back hair"],
    steps: [
      "Put on goggles and tie back long hair. Measure 100 cm³ of water into the copper can and clamp it about 3 cm above the burner wick.",
      "Weigh the spirit burner with its cap on and record the mass.",
      "Record the starting temperature of the water.",
      "Light the burner and heat the water, stirring gently, until the temperature rises by 20 °C.",
      "Put the cap on to put out the flame, then reweigh the burner straight away.",
      "Repeat with each alcohol and calculate the energy released per gram."
    ],
    predict: { q: "Which alcohol do you predict will release the most energy per gram?", options: ["Butanol (the largest molecule)", "Ethanol (the smallest molecule)", "They will all be the same", "None — alcohols absorb energy"], answer: 0,
      result: "All three heat the water, and soot often forms on the base of the can. Butanol usually releases the most energy per gram and ethanol the least, although heat losses make all the measured values lower than data-book values." },
    why: { q: "Why are the measured energy values lower than those in data books?", answer: 0, options: [
      { t: "Heat escapes to the air and the apparatus, and some combustion is incomplete", fb: "Not all the energy reaches the water; soot shows incomplete combustion, which releases less energy." },
      { t: "The thermometer is wrong", fb: "Thermometers are reasonably accurate. The main error is energy lost to the surroundings." },
      { t: "Alcohols don't really burn", fb: "They do burn — the flame and temperature rise prove it. Some energy is simply lost." },
      { t: "Water absorbs too much heat", fb: "Water's heat capacity is accounted for in the calculation. The problem is heat that never reaches the water." }
    ] },
    hazards: ["Alcohols are highly flammable and their vapour can catch fire.", "Some alcohols (especially methanol, if used) are toxic.", "Burns from the flame and the hot can."],
    precautions: ["Only the teacher fills spirit burners, away from any flames.", "Never move a lit burner; put out flames with the cap.", "Wear goggles and a lab coat, tie back hair and use a draught shield.", "Let the can cool before handling."],
    disposal: ["Return spirit burners to the teacher with their caps on.", "The water can be poured down the sink."],
    supervisionNote: "Close supervision: flammable liquids and open flames. The teacher fills and checks all burners."
  },
  sq: {
    name: "Energjia e karburanteve", short: "Kalorimetria",
    hook: "Cili karburant alkooli çliron më shumë energji për gram?",
    aim: "Krahaso energjinë që çlirohet kur digjen alkoole të ndryshme, duke matur sa e ngrohin një masë të njohur uji.",
    chemistry: [
      "Alkoolet si etanoli, propanoli dhe butanoli digjen në oksigjen dhe formojnë dioksid karboni dhe ujë, duke çliruar energji. Ky është një reaksion djegieje ekzotermik.",
      "Energjia e transferuar te uji mund të llogaritet me Q = m × c × ΔT, ku m është masa e ujit, c = 4.18 J/g/°C dhe ΔT është rritja e temperaturës. Pjesëtimi me masën e karburantit të djegur jep energjinë për gram. Molekulat më të mëdha të alkooleve çlirojnë më shumë energji për mol, sepse në produkte formohen më shumë lidhje."
    ],
    equation: "C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O;    Q = m × 4.18 × ΔT",
    equipment: ["Llamba me alkool që përmbajnë etanol, propanol dhe butanol — të mbushura nga mësuesi", "Kanaçe kalorimetri prej bakri me 100 cm³ ujë", "Stativ dhe mbrojtëse nga rryma e ajrit", "Termometër", "Peshore elektronike", "Pllakë rezistente ndaj nxehtësisë", "Syze mbrojtëse, përparëse laboratori dhe flokë të lidhura"],
    steps: [
      "Vendos syzet dhe lidh flokët e gjata. Mat 100 cm³ ujë në kanaçen e bakrit dhe fiksoje rreth 3 cm mbi fitilin e llambës.",
      "Peshoje llambën me kapak dhe shëno masën.",
      "Shëno temperaturën fillestare të ujit.",
      "Ndiz llambën dhe ngroh ujin, duke e përzier butë, derisa temperatura të rritet me 20 °C.",
      "Vendos kapakun për të shuar flakën, pastaj peshoje përsëri llambën menjëherë.",
      "Përsërite me secilin alkool dhe llogarit energjinë e çliruar për gram."
    ],
    predict: { q: "Cili alkool parashikon se do të çlirojë më shumë energji për gram?", options: ["Butanoli (molekula më e madhe)", "Etanoli (molekula më e vogël)", "Të gjithë do të jenë njësoj", "Asnjëri — alkoolet thithin energji"], answer: 0,
      result: "Të tre e ngrohin ujin, dhe shpesh në fund të kanaçes formohet blozë. Butanoli zakonisht çliron më shumë energji për gram dhe etanoli më pak, edhe pse humbjet e nxehtësisë i bëjnë të gjitha vlerat e matura më të ulëta se vlerat e librave." },
    why: { q: "Pse vlerat e matura të energjisë janë më të ulëta se ato në libra?", answer: 0, options: [
      { t: "Nxehtësia ikën në ajër dhe në aparat, dhe një pjesë e djegies është jo e plotë", fb: "Jo e gjithë energjia arrin te uji; bloza tregon djegie jo të plotë, që çliron më pak energji." },
      { t: "Termometri është i gabuar", fb: "Termometrat janë mjaft të saktë. Gabimi kryesor është energjia e humbur në mjedis." },
      { t: "Alkoolet nuk digjen vërtet", fb: "Digjen — flaka dhe rritja e temperaturës e provojnë. Thjesht humbet një pjesë e energjisë." },
      { t: "Uji thith tepër nxehtësi", fb: "Kapaciteti nxehtësor i ujit merret parasysh në llogaritje. Problemi është nxehtësia që nuk arrin kurrë te uji." }
    ] },
    hazards: ["Alkoolet janë shumë të ndezshme dhe avujt e tyre mund të marrin flakë.", "Disa alkoole (sidomos metanoli, nëse përdoret) janë toksike.", "Djegie nga flaka dhe kanaçja e nxehtë."],
    precautions: ["Vetëm mësuesi i mbush llambat me alkool, larg çdo flake.", "Mos e lëviz kurrë një llambë të ndezur; shuaje flakën me kapak.", "Mbaj syze mbrojtëse dhe përparëse laboratori, lidh flokët dhe përdor mbrojtëse nga rryma e ajrit.", "Lëre kanaçen të ftohet para se ta prekësh."],
    disposal: ["Ktheja mësuesit llambat me alkool me kapakët e vendosur.", "Uji mund të derdhet në lavaman."],
    supervisionNote: "Mbikëqyrje e afërt: lëngje të ndezshme dhe flakë të hapura. Mësuesi i mbush dhe i kontrollon të gjitha llambat."
  }
},

/* ===== Esters ===== */
{
  id: "esters", icon: "flower", topic: "organic", grades: "11–12", gmin: 11, gmax: 12,
  supervision: "close", time: 40, eqType: "equation", predictAt: 3, ppe: ["goggles", "coat", "gloves"],
  demo: { s: "beaker", from: "#f8fafc", to: "#fef3c7", waft: true },
  video: null,
  sources: [
    { org: "Royal Society of Chemistry", title: "Esters and perfumes", url: "https://edu.rsc.org/resources/esters-and-perfumes/1338.article" },
    { org: "Royal Society of Chemistry", title: "Microscale preparation of ethyl benzoate", url: "https://edu.rsc.org/experiments/microscale-preparation-of-ethyl-benzoate/561.article" }
  ],
  en: {
    name: "Fruity Esters", short: "Making esters",
    hook: "Combine a sour acid and an alcohol to make a sweet fruity smell.",
    aim: "Make a small amount of an ester by reacting a carboxylic acid with an alcohol, and identify the product by its smell.",
    chemistry: [
      "Esters are organic compounds that often have pleasant, fruity smells — they give many fruits and perfumes their scent. They are made when a carboxylic acid reacts with an alcohol (esterification), with a few drops of concentrated sulfuric acid as a catalyst.",
      "The reaction is reversible and slow, so the mixture is warmed. Pouring the product into sodium hydrogencarbonate solution neutralises the leftover acids so the ester's smell isn't hidden by the sharp smell of vinegar."
    ],
    equation: "ethanoic acid + ethanol ⇌ ethyl ethanoate + water   (catalyst: H⁺ from conc. H₂SO₄)",
    equipment: ["Ethanol and ethanoic acid — 1 cm³ of each, dispensed by the teacher", "Concentrated sulfuric acid — 2–3 drops, added ONLY by the teacher", "Test tube in a rack", "Beaker of hot water from a kettle (water bath — no flames)", "Small beaker of sodium hydrogencarbonate solution", "Safety goggles, lab coat and gloves"],
    steps: [
      "Put on goggles, a lab coat and gloves. Make sure there are no flames in the room.",
      "Your teacher puts 1 cm³ of ethanol and 1 cm³ of ethanoic acid into your test tube.",
      "The teacher adds 2–3 drops of concentrated sulfuric acid.",
      "Stand the tube in the hot water bath for about 5 minutes.",
      "Pour the contents into the sodium hydrogencarbonate solution and swirl.",
      "Smell the product carefully by wafting the air above it towards your nose — never sniff directly."
    ],
    predict: { q: "What will the product smell like compared with the starting acid?", options: ["Sweet and fruity, like pear drops or glue", "Exactly like vinegar", "It will have no smell", "Like rotten eggs"], answer: 0,
      result: "A thin oily layer floats on the solution, and wafting reveals a sweet, fruity smell like pear drops or nail-polish remover — ethyl ethanoate. Different acids and alcohols give different fruity smells." },
    why: { q: "Why is the mixture poured into sodium hydrogencarbonate solution?", answer: 0, options: [
      { t: "To neutralise left-over acids so their sharp smell doesn't hide the ester", fb: "The base reacts with the unreacted ethanoic acid and the sulfuric acid catalyst, leaving the ester's smell easier to detect." },
      { t: "To turn the ester into a solid", fb: "The ester stays as an oily liquid. The hydrogencarbonate removes the acids." },
      { t: "To make the reaction go faster", fb: "The reaction has finished by then. This step is about removing the acids." },
      { t: "To add colour", fb: "No colour is added. The step neutralises acids." }
    ] },
    hazards: ["Concentrated sulfuric acid is very corrosive and causes severe burns.", "Ethanoic acid is corrosive in concentrated form; ethanol is highly flammable.", "Ester vapours can irritate if inhaled deeply."],
    precautions: ["Only the teacher handles concentrated acids.", "No naked flames anywhere in the room — use a hot water bath.", "Wear goggles, a lab coat and gloves.", "Smell by wafting, never by sniffing directly from the tube."],
    disposal: ["Pour the neutralised mixtures into the organic waste container provided by the teacher.", "Rinse test tubes in a well-ventilated area."],
    supervisionNote: "Close supervision for older students: the teacher dispenses all acids and adds the concentrated sulfuric acid."
  },
  sq: {
    name: "Estere me erë frutash", short: "Përgatitja e estereve",
    hook: "Bashko një acid të thartë dhe një alkool për të bërë një erë të ëmbël frutash.",
    aim: "Përgatit një sasi të vogël esteri duke reaguar një acid karboksilik me një alkool dhe identifikoje produktin nga era.",
    chemistry: [
      "Esteret janë përbërje organike që shpesh kanë erë të këndshme frutash — ato u japin aromën shumë frutave dhe parfumeve. Ato formohen kur një acid karboksilik reagon me një alkool (esterifikim), me disa pika acid sulfurik të përqendruar si katalizator.",
      "Reaksioni është i kthyeshëm dhe i ngadaltë, ndaj përzierja ngrohet. Derdhja e produktit në tretësirë hidrogjenkarbonati natriumi neutralizon acidet e mbetura që era e esterit të mos fshihet nga era e fortë e uthullës."
    ],
    equation: "acid etanoik + etanol ⇌ etil etanoat + ujë   (katalizator: H⁺ nga H₂SO₄ i përqendruar)",
    equipment: ["Etanol dhe acid etanoik — 1 cm³ nga secili, të shpërndara nga mësuesi", "Acid sulfurik i përqendruar — 2–3 pika, i shtuar VETËM nga mësuesi", "Provëz në mbajtëse", "Gotë me ujë të nxehtë nga ibriku (banjë uji — pa flakë)", "Gotë e vogël me tretësirë hidrogjenkarbonati natriumi", "Syze mbrojtëse, përparëse laboratori dhe doreza"],
    steps: [
      "Vendos syzet, përparësen e laboratorit dhe dorezat. Sigurohu që nuk ka flakë në dhomë.",
      "Mësuesi hedh 1 cm³ etanol dhe 1 cm³ acid etanoik në provëzën tënde.",
      "Mësuesi shton 2–3 pika acid sulfurik të përqendruar.",
      "Vendose provëzën në banjën e ujit të nxehtë për rreth 5 minuta.",
      "Derdhe përmbajtjen në tretësirën e hidrogjenkarbonatit të natriumit dhe tunde.",
      "Nuhate produktin me kujdes duke e drejtuar ajrin sipër tij drejt hundës me dorë — mos e nuhat kurrë drejtpërdrejt."
    ],
    predict: { q: "Si do të mbajë erë produkti krahasuar me acidin fillestar?", options: ["E ëmbël dhe frutore, si karamele dardhe ose ngjitës", "Saktësisht si uthull", "Nuk do të ketë erë", "Si vezë të prishura"], answer: 0,
      result: "Një shtresë e hollë vajore noton mbi tretësirë, dhe drejtimi i ajrit me dorë zbulon një erë të ëmbël frutore si karamele dardhe ose heqës manikyri — etil etanoati. Acide dhe alkoole të ndryshme japin erëra të ndryshme frutash." },
    why: { q: "Pse përzierja derdhet në tretësirë hidrogjenkarbonati natriumi?", answer: 0, options: [
      { t: "Për të neutralizuar acidet e mbetura që era e tyre e fortë të mos fshehë esterin", fb: "Baza reagon me acidin etanoik që nuk ka reaguar dhe me katalizatorin e acidit sulfurik, duke e bërë erën e esterit më të lehtë për t'u dalluar." },
      { t: "Për ta kthyer esterin në lëndë të ngurtë", fb: "Esteri mbetet lëng vajor. Hidrogjenkarbonati largon acidet." },
      { t: "Për ta bërë reaksionin më të shpejtë", fb: "Reaksioni ka përfunduar deri atëherë. Ky hap ka të bëjë me largimin e acideve." },
      { t: "Për të shtuar ngjyrë", fb: "Nuk shtohet ngjyrë. Hapi neutralizon acidet." }
    ] },
    hazards: ["Acidi sulfurik i përqendruar është shumë gërryes dhe shkakton djegie të rënda.", "Acidi etanoik është gërryes në formë të përqendruar; etanoli është shumë i ndezshëm.", "Avujt e estereve mund të irritojnë nëse thithen thellë."],
    precautions: ["Vetëm mësuesi i trajton acidet e përqendruara.", "Asnjë flakë e hapur në dhomë — përdor banjë uji të nxehtë.", "Mbaj syze mbrojtëse, përparëse laboratori dhe doreza.", "Nuhate duke drejtuar ajrin me dorë, kurrë drejtpërdrejt nga provëza."],
    disposal: ["Derdhi përzierjet e neutralizuara në enën e mbetjeve organike që jep mësuesi.", "Shpëlaji provëzat në një zonë të ajrosur mirë."],
    supervisionNote: "Mbikëqyrje e afërt për nxënësit më të rritur: mësuesi shpërndan të gjitha acidet dhe shton acidin sulfurik të përqendruar."
  }
},

/* ===== Vitamin C ===== */
{
  id: "vitaminc", icon: "citrus", topic: "analysis", grades: "11–12", gmin: 11, gmax: 12,
  supervision: "supervised", time: 45, eqType: "equation", predictAt: 3, ppe: ["goggles"],
  demo: { s: "beaker", from: "#fed7aa", to: "#1e3a8a", delay: true },
  video: { id: "bajPudwomW8", title: "How to test for vitamin C at home", channel: "MEL Science",
    note: { en: "The iodine–starch idea behind this titration, shown with juice.", sq: "Ideja jod–niseshte pas këtij titrimi, e treguar me lëng frutash." } },
  sources: [
    { org: "Royal Society of Chemistry", title: "Measuring the amount of vitamin C in fruit juices", url: "https://edu.rsc.org/experiments/measuring-the-amount-of-vitamin-c-in-fruit-juices/539.article" },
    { org: "Royal Society of Chemistry", title: "Measuring vitamin C in fruit using a microscale titration", url: "https://edu.rsc.org/concentration-of-solutions-and-titration/measuring-vitamin-c-in-fruit-using-a-microscale-titration-14-16-years/104.article" }
  ],
  en: {
    name: "Vitamin C Detective", short: "Redox titration",
    hook: "Which juice really has the most vitamin C? Let iodine decide.",
    aim: "Compare the vitamin C content of different fruit juices by titrating them with iodine solution, using starch as the indicator.",
    chemistry: [
      "Vitamin C (ascorbic acid) is a reducing agent. It reacts with iodine, turning brown iodine into colourless iodide ions — so while vitamin C is present, added iodine disappears.",
      "Once all the vitamin C has reacted, the next drop of iodine stays and forms a blue-black complex with starch. The more iodine solution needed, the more vitamin C the juice contained."
    ],
    equation: "C₆H₈O₆ + I₂ → C₆H₆O₆ + 2H⁺ + 2I⁻",
    equipment: ["Fruit juices (e.g. orange, apple, lemon — filtered if they have pulp)", "Dilute iodine solution in a burette (prepared by the teacher)", "Starch indicator solution", "25 cm³ pipette with filler", "Conical flasks and white tile", "Safety goggles"],
    steps: [
      "Put on goggles. Fill the burette with iodine solution (below eye level) and record the starting reading.",
      "Use the pipette and filler to put 25 cm³ of juice into a conical flask. Add 1 cm³ of starch solution.",
      "Add iodine from the burette while swirling the flask on a white tile.",
      "Stop when one drop produces a blue-black colour that lasts for 20 seconds.",
      "Record the volume of iodine used. Repeat for concordant results.",
      "Repeat for the other juices and rank them by vitamin C content."
    ],
    predict: { q: "As iodine is added to orange juice with starch, what will happen at first?", options: ["The iodine colour disappears until the vitamin C is used up", "It turns blue-black straight away", "It turns bright green", "Bubbles of gas appear"], answer: 0,
      result: "At first each drop of brown iodine loses its colour as it reacts. Then, suddenly, the mixture turns a dark blue-black that stays. Fresh orange and lemon juice usually need much more iodine than apple juice." },
    why: { q: "Why does the iodine colour disappear at first?", answer: 0, options: [
      { t: "Vitamin C reduces iodine to colourless iodide ions", fb: "As long as vitamin C remains, it removes the iodine. Only when it has all reacted can iodine build up and colour the starch." },
      { t: "The juice dilutes the iodine until it's invisible", fb: "Dilution alone wouldn't remove the colour completely — a chemical reaction is changing the iodine." },
      { t: "Starch absorbs the iodine permanently", fb: "Iodine and starch form the blue-black colour. The colour is missing at first because vitamin C is reacting with the iodine." },
      { t: "Orange colour hides the iodine", fb: "The colour disappears even in pale juices. The iodine is being converted into iodide." }
    ] },
    hazards: ["Iodine solution stains and can irritate eyes and skin.", "Glass burettes and pipettes can break.", "Drinks used in the lab must not be consumed."],
    precautions: ["Wear goggles; fill the burette below eye level.", "Always use a pipette filler.", "Never drink juices that have been in the lab."],
    disposal: ["The dilute mixtures can be poured down the sink with plenty of water.", "Rinse burettes and pipettes promptly."],
    supervisionNote: "Students can carry this out under teacher supervision after practising burette technique."
  },
  sq: {
    name: "Detektivi i vitaminës C", short: "Titrim redoks",
    hook: "Cili lëng ka vërtet më shumë vitaminë C? Le të vendosë jodi.",
    aim: "Krahaso përmbajtjen e vitaminës C në lëngje të ndryshme frutash duke i titruar me tretësirë jodi, me niseshte si indikator.",
    chemistry: [
      "Vitamina C (acidi askorbik) është një reduktues. Ajo reagon me jodin, duke e kthyer jodin kafe në jone jodur të pangjyrë — ndaj për sa kohë ka vitaminë C, jodi i shtuar zhduket.",
      "Sapo e gjithë vitamina C ka reaguar, pika tjetër e jodit mbetet dhe formon një kompleks blu-të zi me niseshtenë. Sa më shumë tretësirë jodi të nevojitet, aq më shumë vitaminë C përmbante lëngu."
    ],
    equation: "C₆H₈O₆ + I₂ → C₆H₆O₆ + 2H⁺ + 2I⁻",
    equipment: ["Lëngje frutash (p.sh. portokalli, mollë, limon — të filtruar nëse kanë tul)", "Tretësirë e holluar jodi në buretë (e përgatit mësuesi)", "Tretësirë indikatori niseshteje", "Pipetë 25 cm³ me mbushës", "Kolba konike dhe pllakë e bardhë", "Syze mbrojtëse"],
    steps: [
      "Vendos syzet. Mbushe buretën me tretësirë jodi (poshtë nivelit të syve) dhe shëno leximin fillestar.",
      "Me pipetën dhe mbushësin, hidh 25 cm³ lëng në një kolbë konike. Shto 1 cm³ tretësirë niseshteje.",
      "Shto jod nga bureta ndërsa e tund kolbën mbi pllakën e bardhë.",
      "Ndalo kur një pikë jep një ngjyrë blu-të zezë që zgjat 20 sekonda.",
      "Shëno vëllimin e jodit të përdorur. Përsërite për rezultate konkordante.",
      "Përsërite me lëngjet e tjera dhe renditi sipas përmbajtjes së vitaminës C."
    ],
    predict: { q: "Ndërsa shtohet jod në lëng portokalli me niseshte, çfarë do të ndodhë në fillim?", options: ["Ngjyra e jodit zhduket derisa të harxhohet vitamina C", "Bëhet menjëherë blu-e zezë", "Bëhet e gjelbër e ndezur", "Shfaqen flluska gazi"], answer: 0,
      result: "Në fillim çdo pikë jodi kafe e humbet ngjyrën ndërsa reagon. Pastaj, papritur, përzierja bëhet blu-e zezë e errët që mbetet. Lëngu i freskët i portokallit dhe i limonit zakonisht kërkojnë shumë më tepër jod se lëngu i mollës." },
    why: { q: "Pse ngjyra e jodit zhduket në fillim?", answer: 0, options: [
      { t: "Vitamina C e redukton jodin në jone jodur të pangjyrë", fb: "Për sa kohë mbetet vitaminë C, ajo e largon jodin. Vetëm kur ka reaguar e gjitha, jodi mund të grumbullohet dhe të ngjyrosë niseshtenë." },
      { t: "Lëngu e hollon jodin derisa bëhet i padukshëm", fb: "Vetëm hollimi nuk do ta hiqte plotësisht ngjyrën — një reaksion kimik po e ndryshon jodin." },
      { t: "Niseshteja e thith jodin përgjithmonë", fb: "Jodi dhe niseshteja formojnë ngjyrën blu-të zezë. Ngjyra mungon në fillim sepse vitamina C po reagon me jodin." },
      { t: "Ngjyra portokalli e fsheh jodin", fb: "Ngjyra zhduket edhe në lëngje të zbehta. Jodi po shndërrohet në jodur." }
    ] },
    hazards: ["Tretësira e jodit njollos dhe mund të irritojë sytë dhe lëkurën.", "Buretat dhe pipetat prej qelqi mund të thyhen.", "Pijet e përdorura në laborator nuk duhen konsumuar."],
    precautions: ["Mbaj syze mbrojtëse; mbushe buretën poshtë nivelit të syve.", "Përdor gjithmonë mbushës pipete.", "Mos pi kurrë lëngje që kanë qenë në laborator."],
    disposal: ["Përzierjet e holluara mund të derdhen në lavaman me shumë ujë.", "Shpëlaji buretat dhe pipetat shpejt."],
    supervisionNote: "Nxënësit mund ta kryejnë nën mbikëqyrjen e mësuesit pasi të kenë praktikuar teknikën e buretës."
  }
}
];
