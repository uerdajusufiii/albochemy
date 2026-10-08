"use strict";
/* =========================================================================
   THE JOURNEY — six big ideas, each with a "What happens next?" challenge.
   In every challenge the correct option is listed FIRST (options are shuffled
   on screen). `pal` sets the paper colours of the scene: [background light,
   background dark, a1, a2, a3, a4, a5].
   ========================================================================= */
const JOURNEY = [
  {
    key: "colour", pal: ["#ffffff", "#0f1b2d", "var(--magenta)", "#5b4e8c", "var(--rose)", "var(--lime)", "#e2b93b"],
    related: ["cabbage", "universal", "titration", "turmeric", "trafficlight"],
    en: { chapter: "Colour", title: "Chemistry you can <em>see</em>", idea: "Some molecules change colour when their surroundings change.",
      body: "Red cabbage is full of anthocyanins — purple pigments that work like a pH detector. Acids turn them red; alkalis turn them blue, green and even yellow.",
      q: "We add lemon juice to purple red-cabbage juice. What happens next?",
      options: ["It turns pink-red", "It turns green", "It stays purple", "It turns completely clear"],
      result: "It turns pink-red!",
      why: "Lemon juice is acidic (about pH 2). Its H⁺ ions change the shape of the pigment molecules, so they reflect red light instead of purple." },
    sq: { chapter: "Ngjyra", title: "Kimi që mund ta <em>shohësh</em>", idea: "Disa molekula ndryshojnë ngjyrë kur ndryshon mjedisi rreth tyre.",
      body: "Lakra e kuqe është plot me antocianina — pigmente vjollcë që punojnë si detektor i pH-it. Acidet i bëjnë të kuqe; alkalet i bëjnë blu, të gjelbra e madje të verdha.",
      q: "Shtojmë lëng limoni në lëngun vjollcë të lakrës së kuqe. Çfarë ndodh më pas?",
      options: ["Bëhet rozë e kuqe", "Bëhet e gjelbër", "Mbetet vjollcë", "Bëhet krejt e tejdukshme"],
      result: "Bëhet rozë e kuqe!",
      why: "Lëngu i limonit është acid (rreth pH 2). Jonet e tij H⁺ ndryshojnë formën e molekulave të pigmentit, ndaj ato reflektojnë dritë të kuqe në vend të vjollcës." }
  },
  {
    key: "gas", pal: ["#f2f5f8", "#0d1a2b", "var(--teal)", "var(--mint)", "var(--cobalt)", "var(--sun)", "var(--sky)"],
    related: ["balloon", "yeast", "marble", "limewater", "fizzrace", "coldfizz"],
    en: { chapter: "Gas", title: "Invisible, but <em>powerful</em>", idea: "Reactions can turn solids and liquids into gas.",
      body: "When an acid meets a carbonate, carbon dioxide is made. A spoonful of baking soda produces enough gas to fill a balloon.",
      q: "Baking soda falls into vinegar inside a bottle with a balloon on top. What happens next?",
      options: ["It fizzes and the balloon inflates", "The balloon is sucked into the bottle", "Nothing — no gas is made", "The vinegar freezes"],
      result: "Fizz! The balloon inflates.",
      why: "Acid + carbonate → salt + water + carbon dioxide. The new gas takes up far more space than the powder, so it pushes its way into the balloon." },
    sq: { chapter: "Gazi", title: "I padukshëm, por i <em>fuqishëm</em>", idea: "Reaksionet mund t'i kthejnë lëndët e ngurta dhe të lëngshme në gaz.",
      body: "Kur një acid takon një karbonat, prodhohet dioksid karboni. Një lugë sodë buke jep aq gaz sa të mbushë një tullumbace.",
      q: "Soda e bukës bie në uthull brenda një shisheje me një tullumbace sipër. Çfarë ndodh më pas?",
      options: ["Shkumëzon dhe tullumbacja fryhet", "Tullumbacja thithet brenda shishes", "Asgjë — nuk prodhohet gaz", "Uthulla ngrin"],
      result: "Shkumë! Tullumbacja fryhet.",
      why: "Acid + karbonat → kripë + ujë + dioksid karboni. Gazi i ri zë shumë më tepër vend se pluhuri, ndaj shtyhet brenda tullumbaces." }
  },
  {
    key: "fire", dark: true, pal: ["#0f2238", "#0a1729", "var(--turq-strong)", "var(--tangerine)", "#e6edf5", "#7fd3cf", "var(--violet)"],
    related: ["flame", "burnmg", "steelwool", "candle", "combustion"],
    en: { chapter: "Fire", title: "Every metal has a <em>colour</em>", idea: "Heat makes electrons jump — and they give the energy back as light.",
      body: "In a flame test, each metal glows with its own colour, like a fingerprint: sodium is orange, potassium lilac, lithium crimson.",
      q: "A copper compound is held in a hot Bunsen flame. Which colour appears?",
      options: ["Blue-green", "Lilac", "Bright orange", "Crimson red"],
      result: "A blue-green flame!",
      why: "Heat lifts copper's electrons to higher energy levels. When they fall back, they release light of exact energies — which we see as blue-green." },
    sq: { chapter: "Zjarri", title: "Çdo metal ka <em>ngjyrën</em> e vet", idea: "Nxehtësia i bën elektronet të kërcejnë — dhe ata e kthejnë energjinë si dritë.",
      body: "Në provën e flakës, çdo metal shkëlqen me ngjyrën e vet, si një shenjë gishti: natriumi portokalli, kaliumi lejla, litiumi i kuq i thellë.",
      q: "Një përbërje bakri mbahet në flakën e nxehtë të Bunsenit. Cila ngjyrë shfaqet?",
      options: ["Blu e gjelbër", "Lejla", "Portokalli e ndezur", "E kuqe e thellë"],
      result: "Një flakë blu e gjelbër!",
      why: "Nxehtësia i ngre elektronet e bakrit në nivele më të larta energjie. Kur kthehen, lëshojnë dritë me energji të caktuar — që ne e shohim blu të gjelbër." }
  },
  {
    key: "energy", pal: ["#eaf1f8", "#0f1a2f", "var(--cobalt)", "#d98a4e", "var(--sky)", "#b9d3ee", "var(--cobalt)"],
    related: ["coldfizz", "coldpack", "handwarmer", "hotice", "glowsticks"],
    en: { chapter: "Energy", title: "Hot and <em>cold</em> reactions", idea: "Some reactions give out heat; others soak it up.",
      body: "Exothermic reactions warm their surroundings — like hand warmers. Endothermic reactions take heat in, so the mixture feels cold — like instant cold packs.",
      q: "Citric acid and baking soda are mixed in water. What happens to the temperature?",
      options: ["It gets colder", "It gets hotter", "It stays exactly the same", "It starts to boil"],
      result: "It gets colder!",
      why: "This reaction is endothermic: breaking the bonds in the reactants takes in more energy than making the products gives out, so heat is drawn from the water." },
    sq: { chapter: "Energjia", title: "Reaksione të nxehta dhe të <em>ftohta</em>", idea: "Disa reaksione lëshojnë nxehtësi; të tjerë e thithin atë.",
      body: "Reaksionet ekzotermike ngrohin mjedisin — si ngrohëset e duarve. Reaksionet endotermike thithin nxehtësi, ndaj përzierja ndihet e ftohtë — si paketat e ftohta të çastit.",
      q: "Acidi citrik dhe soda e bukës përzihen në ujë. Çfarë ndodh me temperaturën?",
      options: ["Bëhet më e ftohtë", "Bëhet më e nxehtë", "Mbetet krejt njësoj", "Fillon të vlojë"],
      result: "Bëhet më e ftohtë!",
      why: "Ky reaksion është endotermik: prishja e lidhjeve te reaktantët merr më shumë energji sesa jep formimi i produkteve, ndaj nxehtësia merret nga uji." }
  },
  {
    key: "electric", pal: ["#ffffff", "#0e1830", "var(--turq-ink)", "var(--turq)", "var(--sky)", "var(--copper)", "color-mix(in srgb,var(--sky) 30%,var(--s-bg))"],
    related: ["displacement", "lemonbattery", "electrolysis", "conductivity", "reactivity", "daniell"],
    en: { chapter: "Electricity", title: "Electrons on the <em>move</em>", idea: "Some metals give away electrons more easily than others.",
      body: "Iron gives up electrons more easily than copper. Put iron into a copper solution and electrons move across — copper metal appears. Guide that flow through a wire and you have a battery.",
      q: "An iron nail is placed in blue copper sulfate solution. What happens next?",
      options: ["The nail gets a copper-coloured coat", "The nail dissolves completely", "The solution turns bright red", "Nothing at all"],
      result: "The nail turns copper-coloured!",
      why: "Iron is more reactive than copper, so it displaces it: Fe + CuSO₄ → FeSO₄ + Cu. Copper atoms coat the nail and the blue colour slowly fades." },
    sq: { chapter: "Elektriciteti", title: "Elektronet në <em>lëvizje</em>", idea: "Disa metale i japin elektronet më lehtë se të tjerët.",
      body: "Hekuri i jep elektronet më lehtë se bakri. Vendose hekurin në një tretësirë bakri dhe elektronet kalojnë — shfaqet bakër metalik. Drejtoje këtë rrjedhë nëpër një tel dhe ke një bateri.",
      q: "Një gozhdë hekuri vendoset në tretësirën blu të sulfatit të bakrit. Çfarë ndodh më pas?",
      options: ["Gozhda vishet me një shtresë ngjyrë bakri", "Gozhda tretet plotësisht", "Tretësira bëhet e kuqe e ndezur", "Asgjë fare"],
      result: "Gozhda merr ngjyrë bakri!",
      why: "Hekuri është më aktiv se bakri, ndaj e zhvendos atë: Fe + CuSO₄ → FeSO₄ + Cu. Atomet e bakrit veshin gozhdën dhe ngjyra blu zbehet ngadalë." }
  },
  {
    key: "speed", pal: ["#f2f5f8", "#101a2c", "var(--magenta)", "var(--tangerine)", "var(--sun)", "var(--mint)", "var(--cobalt)"],
    related: ["foam", "catalase", "iodineclock", "thiosulfate", "marble"],
    en: { chapter: "Speed", title: "Catalysts make it <em>fast</em>", idea: "A catalyst speeds up a reaction without being used up.",
      body: "Hydrogen peroxide breaks down into water and oxygen very slowly. Yeast contains an enzyme, catalase, that makes it happen in seconds.",
      q: "Yeast is poured into hydrogen peroxide mixed with washing-up liquid. What happens next?",
      options: ["A huge foam eruption", "It slowly turns blue", "It explodes with a bang", "It freezes solid"],
      result: "Foam erupts out of the bottle!",
      why: "Catalase splits hydrogen peroxide into water and oxygen gas incredibly fast. The washing-up liquid traps the oxygen in millions of bubbles: 2H₂O₂ → 2H₂O + O₂." },
    sq: { chapter: "Shpejtësia", title: "Katalizatorët e bëjnë <em>shpejt</em>", idea: "Një katalizator e përshpejton një reaksion pa u harxhuar.",
      body: "Peroksidi i hidrogjenit zbërthehet në ujë dhe oksigjen shumë ngadalë. Majaja përmban një enzimë, katalazën, që e bën këtë në pak sekonda.",
      q: "Majaja hidhet në peroksid hidrogjeni të përzier me detergjent enësh. Çfarë ndodh më pas?",
      options: ["Një shpërthim i madh shkume", "Ngadalë bëhet blu", "Shpërthen me zhurmë", "Ngrin krejt"],
      result: "Shkuma shpërthen nga shishja!",
      why: "Katalaza e ndan peroksidin e hidrogjenit në ujë dhe gaz oksigjen jashtëzakonisht shpejt. Detergjenti e kap oksigjenin në miliona flluska: 2H₂O₂ → 2H₂O + O₂." }
  }
];
