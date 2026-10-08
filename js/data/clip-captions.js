"use strict";
/* Clip captions for the original 36 experiments */
const CLIP_CAPTIONS = {
  /* ----- 03a-core.js ----- */
  cabbage: {
    en: ["Purple cabbage juice", "Add a splash of vinegar", "It turns pink — an acid!"],
    sq: ["Lëngu vjollcë i lakrës së kuqe", "Shto pak uthull", "Bëhet rozë — është acid!"]
  },
  chromatography: {
    en: ["A black ink dot on a paper strip", "Dip the bottom edge in water", "Black splits into blue, purple, pink and yellow!"],
    sq: ["Një pikë boje të zezë mbi një shirit letre", "Zhyt skajin e poshtëm në ujë", "E zeza ndahet në blu, vjollcë, rozë dhe të verdhë!"]
  },
  foam: {
    en: ["Hydrogen peroxide, soap and colouring", "Pour in the yeast mixture", "Whoosh! A warm tower of foam erupts!"],
    sq: ["Peroksid hidrogjeni, detergjent dhe ngjyrues", "Derdh brenda përzierjen me maja", "Papritur shpërthen një kullë e ngrohtë shkume!"]
  },
  magnesium: {
    en: ["Dilute hydrochloric acid", "Drop in a strip of magnesium", "It fizzes with hydrogen, warms up and vanishes!"],
    sq: ["Acid klorhidrik i holluar", "Hidh brenda një shirit magnezi", "Lëshon flluska hidrogjeni, ngrohet dhe zhduket!"]
  },
  flame: {
    en: ["A wooden splint soaked in lithium salt", "Hold it at the edge of the flame", "The flame flashes bright crimson!"],
    sq: ["Një ashkël druri e njomur në kripë litiumi", "Mbaje në skajin e flakës", "Flaka merr ngjyrë të kuqe të thellë!"]
  },
  titration: {
    en: ["Alkali turned pink by phenolphthalein", "Add acid from the burette, drop by drop", "One last drop — the pink vanishes!"],
    sq: ["Alkal i ngjyrosur rozë nga fenolftaleina", "Shto acid nga bureta, pikë pas pike", "Një pikë e fundit — ngjyra rozë zhduket!"]
  },

  /* ----- 03b-junior.js ----- */
  balloon: {
    en: ["Vinegar in a bottle, baking soda in a balloon", "Tip the baking soda into the vinegar", "It fizzes and the balloon blows itself up!"],
    sq: ["Uthull në shishe, sodë buke në tullumbace", "Derdh sodën e bukës në uthull", "Shkumëzon dhe tullumbacja fryhet vetë!"]
  },
  density: {
    en: ["Honey, washing-up liquid, water and oil", "Pour them in gently, one by one", "Four layers stack up — densest at the bottom!"],
    sq: ["Mjaltë, detergjent enësh, ujë dhe vaj", "Derdhi me kujdes, një nga një", "Formohen katër shtresa — më e dendura në fund!"]
  },
  diffusion: {
    en: ["A cup of hot, perfectly still water", "Add one drop of food colouring", "It swirls out fast — hot particles move quicker!"],
    sq: ["Një gotë me ujë të nxehtë e të palëvizur", "Shto një pikë ngjyrues ushqimor", "Përhapet me vrull — grimcat e nxehta lëvizin shpejt!"]
  },
  crystals: {
    en: ["A hot, saturated alum solution", "Hang a thread in it and let it cool", "Glassy crystals grow along the thread!"],
    sq: ["Tretësirë shapi e nxehtë dhe e ngopur", "Var një fije brenda dhe lëre të ftohet", "Përgjatë fijes rriten kristale si qelq!"]
  },
  saltsand: {
    en: ["A mixture of salt and sand", "Stir it into warm water, then filter", "Sand stays behind — clear salty water drips through!"],
    sq: ["Një përzierje kripe dhe rëre", "Trazoje në ujë të ngrohtë, pastaj filtroje", "Rëra mbetet — uji i kripur pikon i kthjellët!"]
  },
  lavalamp: {
    en: ["Oil floating on red water", "Drop in a fizzy tablet", "Red blobs rise and fall like a lava lamp!"],
    sq: ["Vaj që noton mbi ujë të kuq", "Hidh brenda një tabletë shkumëzuese", "Pika të kuqe ngjiten e zbresin si në llambë lava!"]
  },
  turmeric: {
    en: ["Yellow turmeric paper", "Write on it with baking soda solution", "A red-brown message appears — it's a base!"],
    sq: ["Letër e verdhë me shafran", "Shkruaj mbi të me tretësirë sode buke", "Shfaqet një mesazh i kuq-kafe — është bazë!"]
  },
  rusting: {
    en: ["A shiny iron nail in water", "Leave it in air and water for a week", "Orange-brown rust creeps over the nail!"],
    sq: ["Një gozhdë hekuri e shndritshme në ujë", "Lëre në ajër dhe ujë për një javë", "Ndryshku portokalli-kafe mbulon gozhdën!"]
  },
  coldfizz: {
    en: ["Citric acid solution in a cup", "Tip in the baking soda and stir", "It fizzes — and the temperature drops!"],
    sq: ["Tretësirë acidi citrik në një gotë", "Hidh sodën e bukës dhe përzieje", "Shkumëzon — dhe temperatura bie!"]
  },
  lemonbattery: {
    en: ["Lemons with a zinc nail and copper strip", "Wire them in series to an LED", "The LED glows — electricity from lemons!"],
    sq: ["Limona me një gozhdë zinku dhe shirit bakri", "Lidhi në seri me një LED", "LED-i ndizet — elektricitet nga limonat!"]
  },
  milkplastic: {
    en: ["A jug of hot milk", "Stir in a splash of vinegar", "White curds form — the start of a plastic!"],
    sq: ["Një enë me qumësht të nxehtë", "Shto pak uthull dhe përzieje", "Formohet gjizë e bardhë — fillimi i plastikës!"]
  },
  limewater: {
    en: ["A tube of clear limewater", "Breathe out gently through a straw", "It turns milky — your breath has CO₂!"],
    sq: ["Një provëz me ujë gëlqereje të kthjellët", "Fryj lehtë nëpër një kallam pijeje", "Turbullohet si qumësht — fryma jote ka CO₂!"]
  },
  starch: {
    en: ["Orange-brown iodine solution", "Drip it onto a piece of potato", "It turns blue-black — starch found!"],
    sq: ["Tretësirë jodi portokalli-kafe", "Hidh disa pika mbi një copë patate", "Bëhet blu-e zezë — ka niseshte!"]
  },
  glowsticks: {
    en: ["A glow stick and a cup of hot water", "Bend the stick and drop it in", "It glows brighter — heat speeds it up!"],
    sq: ["Një shkop ndriçues dhe ujë i nxehtë", "Përkule shkopin dhe hidhe në ujë", "Ndriçon më fort — nxehtësia e shpejton reaksionin!"]
  },

  /* ----- 03c-senior.js ----- */
  displacement: {
    en: ["Blue copper sulfate solution", "Lower in a shiny iron nail", "Copper coats the nail and the blue fades!"],
    sq: ["Tretësirë blu e sulfatit të bakrit", "Zhyt një gozhdë hekuri të shndritshme", "Bakri vesh gozhdën dhe ngjyra blu zbehet!"]
  },
  marble: {
    en: ["Hydrochloric acid in a flask", "Drop in some marble chips", "It fizzes, the chips shrink — small ones fastest!"],
    sq: ["Acid klorhidrik në një kolbë", "Hidh brenda copëza mermeri", "Shkumëzon, copëzat zvogëlohen — të voglat më shpejt!"]
  },
  distillation: {
    en: ["Inky blue water in a flask", "Boil it and cool the steam", "Clear water drips out — the ink stays behind!"],
    sq: ["Ujë me bojë blu në një kolbë", "Zieje dhe ftohe avullin", "Pikon ujë i kthjellët — boja mbetet në kolbë!"]
  },
  copperdecomp: {
    en: ["Green copper carbonate powder", "Heat it strongly in a test tube", "It turns black and the limewater goes milky!"],
    sq: ["Pluhur i gjelbër karbonati bakri", "Nxehe fort në një provëz", "Nxihet dhe uji i gëlqeres turbullohet!"]
  },
  burnmg: {
    en: ["A strip of magnesium ribbon", "The teacher holds it in the flame", "It burns with a dazzling white light!"],
    sq: ["Një shirit i hollë magnezi", "Mësuesi e mban në flakë", "Digjet me një dritë të bardhë verbuese!"]
  },
  alkali: {
    en: ["Water made green by universal indicator", "The teacher drops in a tiny bit of sodium", "It fizzes, zooms about and turns purple!"],
    sq: ["Ujë i gjelbër nga indikatori universal", "Mësuesi hedh një copëz të vogël natriumi", "Shkumëzon, vrapon dhe uji bëhet vjollcë!"]
  },
  antacid: {
    en: ["Crushed antacid in green indicator", "Add acid a little at a time", "It fizzes, then suddenly turns orange-red!"],
    sq: ["Antiacid i shtypur dhe indikator i gjelbër", "Shto acid pak nga pak", "Shkumëzon, pastaj befas bëhet portokalli-e kuqe!"]
  },
  thiosulfate: {
    en: ["Clear thiosulfate over a black cross", "Add hydrochloric acid and swirl", "It turns cloudy yellow — the cross vanishes!"],
    sq: ["Tiosulfat i kthjellët mbi një kryq të zi", "Shto acid klorhidrik dhe tunde", "Turbullohet dhe zverdhet — kryqi zhduket!"]
  },

  /* ----- 03d-senior.js ----- */
  coppersalt: {
    en: ["Warm acid and black copper oxide", "Stir, filter, then let it cool slowly", "The acid turns blue — blue crystals grow!"],
    sq: ["Acid i ngrohtë dhe oksid bakri i zi", "Përzieje, filtroje dhe lëre të ftohet ngadalë", "Acidi bëhet blu — rriten kristale blu!"]
  },
  electrolysis: {
    en: ["Blue copper sulfate, two copper electrodes", "Pass an electric current through it", "Fresh copper coats the negative electrode!"],
    sq: ["Sulfat bakri blu dhe dy elektroda bakri", "Kalo rrymë elektrike nëpër tretësirë", "Bakri i ri vesh elektrodën negative!"]
  },
  iontests: {
    en: ["Pale blue copper(II) sulfate solution", "Add sodium hydroxide drop by drop", "A blue, jelly-like precipitate forms!"],
    sq: ["Tretësirë sulfati bakri(II) blu e çelët", "Shto hidroksid natriumi pikë pas pike", "Formohet një precipitat blu si pelte!"]
  },
  reversible: {
    en: ["Blue copper sulfate crystals", "Heat them gently in a test tube", "They turn white — water droplets appear!"],
    sq: ["Kristale blu të sulfatit të bakrit", "Ngrohi lehtë në një provëz", "Zbardhen dhe shfaqen pika uji!"]
  },
  iodineclock: {
    en: ["Two clear, colourless solutions", "Pour them together, start the clock", "Nothing… nothing… then suddenly blue-black!"],
    sq: ["Dy tretësira të kthjellëta, pa ngjyrë", "Derdhi bashkë dhe nis kronometrin", "Asgjë… asgjë… pastaj befas blu-e zezë!"]
  },
  combustion: {
    en: ["A can of water over a spirit burner", "Light the burner and stir the water", "The water heats up — the thermometer climbs!"],
    sq: ["Kanaçe me ujë mbi një llambë me alkool", "Ndiz llambën dhe përziej ujin", "Uji ngrohet dhe temperatura rritet!"]
  },
  esters: {
    en: ["Ethanol and ethanoic acid", "Warm the tube in a hot water bath", "A sweet, fruity smell wafts up!"],
    sq: ["Etanol dhe acid etanoik", "Ngroje provëzën në banjë me ujë të nxehtë", "Ngrihet një erë e ëmbël frutash!"]
  },
  vitaminc: {
    en: ["Fruit juice with a little starch", "Add iodine drop by drop", "Drops lose colour… then it suddenly turns blue-black!"],
    sq: ["Lëng frutash me pak niseshte", "Shto jod pikë pas pike", "Pikat çngjyrosen… pastaj befas bëhet blu-e zezë!"]
  }
};
