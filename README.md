# FIT3179 Data Visualisation 2 — Topic 8: Fashion & Clothing

**Assigned topic:** Explore clothing and fashion products using retail datasets. Compare brands, product categories, customer ratings or seasonal trends. Investigate how consumer preferences change over time.

This revision makes that topic explicit in the webpage title and narrative. It focuses on **product categories + seasonal trends + change over time** because those are the dimensions supported by the supplied datasets.

## Core story
1. **Where fashion comes from:** supplier specialisation, clothing-price geography, import flows and import hotspots.
2. **What products enter Malaysia:** knitted apparel, woven apparel and footwear, plus supplier differences.
3. **When the market changes:** seasonal retail activity and shifts in the product mix from 2015–2025.
4. **Price context:** long-run clothing CPI versus the wider basket.

## Important interpretation
The available data does not directly survey individual preferences. Therefore, changing import shares are labelled as a **market-level product-mix / availability signal**, not direct evidence that individual Malaysians prefer one category. MSIC 477 is also a broad specialised-store retail category, so it is used only as a seasonal retail proxy.

## Run locally
Because the visualisations load CSV/JSON files, run a local HTTP server:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## GitHub Pages
Upload the folder contents while preserving `specs/` and `data/`, enable **Settings → Pages → Deploy from branch**, choose the main branch and root folder, and test the public URL in an incognito window.

## Rubric coverage
- 11 visualisations.
- 4 map panels, including tile-grid, flow and proportional-symbol map idioms.
- 8+ advanced idioms across the page.
- Four clearly titled story sections.
- Vega/Vega-Lite for all maps and charts.
- Plain-language annotations, tooltips, source notes and AI acknowledgement.

## Data sources
- Department of Statistics Malaysia / OpenDOSM: state CPI and wholesale & retail trade.
- UN Comtrade: Malaysia trade in HS 61, 62 and 64, 2015–2025.
- DOSM Open Data GitHub / Vega datasets: geographic boundaries.
