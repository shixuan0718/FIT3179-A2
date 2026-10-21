# Stitched Economy — Topic 8: Fashion and Clothing in Malaysia

FIT3179 Data Visualisation 2, Monash University Malaysia, Semester 2, 2026. Author: Ong Shi Xuan.

## Purpose and limitations

A public-facing, single-page storytelling visualisation about **fashion product categories**, **fashion-related retail seasonality**, **Malaysia's clothing/footwear suppliers**, and **the changing import mix**. Trade data for HS 61/62/64 describe market supply, **not a survey of shoppers or a direct measure of consumer preferences**. MSIC 477 also includes goods outside fashion. Household income and the CPI data are contextual.

## Included files

- `index.html`, `style.css`, `main.js`: full page and interactive controls.
- `specs/`: 11 human-readable Vega or Vega-Lite specifications; chart links are shown on the page.
- `data/`: small derived CSVs/JSONs; provenance and calculation details in `data/README.md`.
- `geo/`: map shapes.
- `sketch.pdf`: original photograph of the hand-drawn design sketch, restored from the earlier supplied materials. **Check that your final submitted hand-drawn sketch still reflects your updated charts**; the supplied photo includes an earlier manufacturing map and household parallel-coordinates plan.
- `TOPIC_AND_SUBMISSION_NOTES.md`: topic fit, rubric and final checklist.

## How to preview

Serve locally using an HTTP server: `python -m http.server 8000` from the folder, then open `http://localhost:8000/`. Simply opening `index.html` as a `file://` URL can block local Vega data reads.

For GitHub Pages, upload the **folder contents** into repository root, preserving `specs/`, `data/`, and `geo/`. Under Settings → Pages publish the `main` branch, `/(root)`.

## Data and tools

Department of Statistics Malaysia / OpenDOSM (CPI by state, household income, retail group 477), UN Comtrade (Malaysia annual HS 61, 62 and 64 by partner and year, 2015–2025), a simplified Malaysia boundary file and public-domain world atlas. See the footer and `data/README.md` for more.

Generative AI-assisted code and wording are acknowledged on the site; verify final claims before submitting.
