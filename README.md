# FIT3179 Data Visualisation 2 — Fashion & Clothing in Malaysia

This project is aligned to the assigned topic: **explore clothing and fashion products using retail datasets; compare product categories or seasonal trends; investigate change over time**.

## Run locally
Because the visualisations load CSV/JSON files, do not double-click `index.html`. Run a local HTTP server from this folder:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## GitHub Pages
Upload the whole folder contents to a GitHub repository, enable **Settings → Pages → Deploy from branch**, and select the branch/root folder. Test the public URL in an incognito window.

## Topic fit
The revised narrative prioritises:
- **Product categories:** knitted apparel, woven apparel and footwear.
- **Seasonal retail trends:** MSIC 477 monthly retail pattern.
- **Change over time:** fashion import mix from 2015–2025 and clothing CPI through 2026.
- **Supplier geography:** major import origins and trade flows.

Household expenditure is retained only as one context map. The previous economy-wide manufacturing GDP map and socioeconomic parallel-coordinates chart were removed from the story because they were too far from the assigned fashion-retail topic.

## Rubric coverage
- 11 visualisations total.
- 4 map panels: state point map, tile-grid cartogram, flow map and proportional-symbol map.
- At least 8 advanced idioms: map idioms + treemap + parallel coordinates + radial bar + heatmap + streamgraph.
- Four clear story sections, responsive single-page layout, non-standard display typography, embedded annotations and hover tooltips.
- Vega/Vega-Lite used for every chart.

## Data-honesty notes
1. HIES does **not** contain apparel expenditure, so the household expenditure map is labelled as context only.
2. MSIC 477 is a broad specialised-store retail group. It is used as a retail proxy, not a pure fashion-sales measure.
3. Import-category shifts are used as a **market availability / product-mix signal**, not as direct evidence of individual consumer preferences.
4. The broad retail data does not support a strong Hari Raya spike; the chart shows the clearer year-end lift.
5. CPI comparisons are unweighted averages across the 16 supplied state/territory series, not an official national CPI series.

## Data sources
- Department of Statistics Malaysia / OpenDOSM: HIES by state, CPI by state, wholesale & retail trade.
- UN Comtrade: Malaysia trade in HS 61, 62 and 64, 2015–2025.
- DOSM Open Data GitHub / Vega datasets: geographic boundaries used by maps.
