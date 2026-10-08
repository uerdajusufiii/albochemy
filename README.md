# ChemLab Explorer

A visual journey through chemistry for grades 7–12, in English and Albanian: an animated opening, six scroll scenes with "What happens next?" challenges, 72 experiments with short demonstration clips, a Mixing Lab game and a presentation mode for big audiences.

## Opening the website

- **Double-click `index.html`.** Everything works without internet, except playing the YouTube Shorts (they open on YouTube instead).
- **Or start the small local server** (needs Python 3):

  ```
  python python/app.py
  ```

  It opens `http://localhost:8000`. With internet, the YouTube Shorts then play inside the experiment pages. Add `--share` to let students on the same Wi-Fi open the site on their own devices.

To present, press **Present** in the top bar. The keys are listed on the About page (`pages/about.html`).

## Folders

```
chemlab-explorer/
├── index.html              Home: opening scene, the six-chapter journey, finale
├── pages/
│   ├── experiments.html    Library of 72 experiments, and each experiment's page
│   ├── lab.html            Mixing Lab game
│   ├── present.html        Presentation mode (full-screen slides)
│   └── about.html          How to use it in class, presentation keys, safety, credits
├── css/
│   ├── fonts.css           The two typefaces (files in assets/fonts)
│   ├── variables.css       Colours, sizes and spacing for the light and dark themes
│   ├── base.css            Text, buttons, chips, cards
│   ├── layout.css          Top bar, menu, footer, page transition, wave bands, page headings
│   ├── components.css      "What happens next?" cards and related-experiment chips
│   ├── home.css            Opening scene, journey scenes, finale
│   ├── library.css         Experiment library
│   ├── experiment.css      One experiment's page
│   ├── demos.css           Animated demonstration clips
│   ├── lab.css             Mixing Lab
│   ├── present.css         Presentation mode
│   ├── about.css           About page
│   ├── responsive.css      Every phone / tablet / wide-screen rule, grouped by section
│   └── animations.css      All animations, and the reduced-motion rules
├── js/
│   ├── boot.js             Sets the theme and language before the page is drawn
│   ├── icons.js            The icon set (made from images/icons by python/build_icons.py)
│   ├── data/               All text and content (see "Changing the content")
│   ├── app.js              Shared by every page: language, theme, links, menu
│   ├── artwork.js          Paper-cut artwork: opening scene, wave bands
│   ├── artwork-scenes.js   Artwork of the six journey scenes
│   ├── challenge.js        The "What happens next?" card
│   ├── demos.js            Demonstration clips (drawn with SVG)
│   ├── home.js             Opening and journey (index.html)
│   ├── library.js          Library filters and cards
│   ├── experiment.js       One experiment's page
│   ├── reactor.js          The animated cup of the Mixing Lab
│   ├── lab.js              Mixing Lab game
│   ├── present.js          Presentation mode
│   ├── about.js            About page
│   └── main.js             Starts the parts each page needs (always the last script)
├── python/
│   ├── app.py              Local web server
│   ├── build_icons.py      Rebuilds js/icons.js after you add or change an icon
│   └── check_project.py    Checks that every file the pages point to exists
├── images/
│   ├── icons/              One SVG file per icon, plus favicon.svg
│   └── textures/           The paper grain texture
├── videos/                 Your own video clips (see videos/README.md)
└── assets/
    └── fonts/              Inter and Lora (SIL Open Font License)
```

Every page links only the CSS and JavaScript files it needs. The part of the address after `#` keeps the language, the theme and the open experiment or slide, for example `pages/experiments.html#/sq/exp/cabbage/dark`.

## Changing the content

| What | Where |
| --- | --- |
| Interface text (both languages) | `js/data/ui-text.js` |
| Experiments | `js/data/experiments-*.js` |
| Clip captions for the first 36 experiments | `js/data/clip-captions.js` |
| YouTube Shorts and your own video files | `js/data/videos.js` |
| Topics and the experiment order | `js/data/catalog.js` |
| The six journey scenes | `js/data/journey.js` |
| Mixing Lab substances, reactions and challenges | `js/data/lab-chemistry.js` |
| Icons | `images/icons/*.svg`, then run `python python/build_icons.py` |

After moving or renaming files, run `python python/check_project.py`.

## Colours

All colours are set in `css/variables.css`. The presentation has its own projector colours in `css/present.css`.

- **Dark blue** (`--brand`, `--ink`): text, main buttons and selected items.
- **Soft grey and white** (`--paper`, `--paper-2`, `--card`): page and card backgrounds.
- **Turquoise** (`--turq…`, `--focus`): the accent for links, highlights, hover and the keyboard-focus outline. In dark mode the main buttons are turquoise.
- **Green, red and amber**: used only for meaning. Green is a correct answer (`--ok`), red an incorrect answer (`--bad`), amber and red are safety warnings (`--warn`, `--danger`).

Reaction colours inside the experiments, such as red cabbage turning pink, come from the experiment data and show what really happens.

## Credits

Experiment content is adapted from the Royal Society of Chemistry, the Royal Institution, the American Chemical Society, Science Buddies, CLEAPSS and the other sources listed with each experiment. The short videos belong to their creators. Typefaces: Inter (Rasmus Andersson) and Lora (Cyreal), SIL Open Font License 1.1 (see `assets/fonts/LICENSE.md`).
