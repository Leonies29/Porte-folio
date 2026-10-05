# Léonie Schmit · Portfolio

**Data & Strategy Analyst · Final-year engineering student at ESME (Big Data & Digital Marketing)**

My personal portfolio: internships, data, marketing and web projects, awards, skills and contact details, in French and English.

🔗 **Live site:** https://leonies29.github.io/Porte-folio/

<!-- Add a screenshot of the home page, for example:
![Portfolio home page](assets/screenshot.png)
-->

---

## What's inside

- **Experience**: two internships at Renault Trucks (data, then organization) and student jobs.
- **Projects**, filterable by Data, Marketing & strategy, Entrepreneurship and Web development:
  - **RISE**, the international student mobility platform I co-founded and lead as CEO
  - **Istanbul Quest**, an event web app I built on my own
  - **Weather Clustering Explorer**, a Streamlit app from my Renault Trucks internship
  - **Jackars**, a marketing and data marketing strategy for a premium car brand
  - **Retail sales analysis** and **diabetes prediction**, two group data projects
  - **Rou’cool** and **Stork**, award-winning innovation projects
- **Awards**, **education**, **skills** and **contact**, with my CV to download.

## Features

- **French / English switch**: one button translates the whole page. The site opens in English for visitors whose browser is not set to French, and remembers their choice.
- **Project filters** to jump straight to data, marketing, entrepreneurship or web projects.
- **FAQ bubble** answering the three questions recruiters ask most.
- **CV download** that follows the language: the French or the English PDF.
- **Responsive** from phone to desktop, with keyboard focus styles and reduced motion respected.
- **No build step, no framework**: one HTML file with its CSS and JavaScript inside.

## Tech

HTML, CSS and vanilla JavaScript · Google Fonts (Nunito) · Hosted on GitHub Pages

---

## Project structure

```
.
├── index.html                     # The whole site: content, styles and scripts
└── assets/
    ├── Leonie_Schmit_photo_pro.png  # Profile photo
    ├── Leonie_Schmit_CV_Data_Strategy_Analyst_FR.pdf  # CV in French
    ├── Leonie_Schmit_CV_Data_Strategy_Analyst_EN.pdf  # CV in English
    └── Logo/                        # Company and school logos
```

File names are case-sensitive on GitHub Pages: keep them exactly as above.

## Run it locally

No installation needed. Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
```

Then open http://localhost:8000.

## Updating the content

**Text**: edit it directly in `index.html`.

**Translations**: English versions live in the `EN` dictionary near the end of `index.html`. Each key is the exact French text and each value its English translation:

```js
"Voir mes projets": "See my projects",
```

When you change a French sentence, update its key in `EN` too, otherwise that sentence stays in French on the English version.

**A new project**: copy an existing `<article class="project">` block and set its categories in `data-cat` (`data`, `marketing`, `entrepreneuriat`, `web`, several allowed, separated by spaces):

```html
<article class="project" data-cat="data web">
  <p class="kind">Context, year</p>
  <h3>Project name</h3>
  <p>What it does and what I did.</p>
  <p class="tools">Tools used</p>
</article>
```

**The CV**: replace the two PDFs in `assets/`, keeping the same file names.

## Deploying

The site is served by GitHub Pages from the `main` branch. Push your changes and the site updates within a minute or two.

---

## Contact

**Léonie Schmit**
[LinkedIn](https://www.linkedin.com/in/leonie-schmit) · [GitHub](https://github.com/Leonies29) · leonie.schmit@esme.fr