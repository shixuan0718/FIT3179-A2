# FIT3179 Data Visualisation 2 — Fashion & Clothing in Malaysia

This folder is a clean rebuild from the supplied sketch and assignment rubric.

## Run locally
Because the visualisations load CSV/JSON files, do not double-click `index.html`. Run a local HTTP server from this folder:

```bash
python -m http.server 8000
```
Then open `http://localhost:8000`.

## GitHub Pages
Upload the whole folder contents to a GitHub repository, enable **Settings → Pages → Deploy from branch**, and select the branch/root folder. Test the public URL in an incognito window.

## Rubric coverage
- 11 visualisations total.
- 4 map idioms: choropleth, tile-grid cartogram, flow map, proportional-symbol map.
- 9 advanced idioms if all map idioms are counted as advanced: 4 maps + treemap + parallel coordinates + radial bar + heatmap + streamgraph.
- 4 story sections, responsive single-page layout, non-standard display typography, embedded annotations and hover tooltips.
- Vega/Vega-Lite used for every chart.

## Important data-honesty changes from the sketch
1. HIES does **not** contain apparel expenditure, so Map 1 uses total mean household expenditure and labels it as budget context.
2. Manufacturing GDP is not textile-specific, so Map 4 explicitly labels it as all-manufacturing context rather than "textile hubs".
3. MSIC 477 is a broad specialised-store group. It includes clothing/footwear but also other goods, so Chart 8 is presented as a retail proxy.
4. The broad retail data does not support a strong Hari Raya spike; the chart shows the clearer year-end seasonal lift instead.
5. CPI comparisons are unweighted averages across the 16 supplied state/territory series, not an official national CPI series.

## Data sources
- Department of Statistics Malaysia / OpenDOSM: HIES by state, CPI by state, wholesale & retail trade, annual real GDP by state and sector.
- UN Comtrade: Malaysia trade in HS 61, 62 and 64, 2015–2025.
- DOSM Open Data GitHub: Malaysia state boundaries.

## AI acknowledgement
Generative AI was used to assist with data validation, code generation, copy editing, and visual layout iteration. The analytical claims in the page are based on the supplied datasets and should be reviewed by the student before submission/interview.
