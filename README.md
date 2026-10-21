# Stitched Economy: Fashion and Clothing in Malaysia

FIT3179 Data Visualisation 2, Monash University Malaysia, Semester 2, 2026. Author: Ong Shi Xuan.

A single scrollable page with 11 charts drawn in Vega-Lite and Vega: four maps (choropleth, tile-grid cartogram, flow map, proportional-symbol map), a treemap, parallel coordinates, a diverging bar chart, a radial bar chart, a heatmap, a streamgraph and a line chart.

## Files
- `index.html`, `style.css`, `main.js`: the page, its styling and the script that draws the charts.
- `specs/`: one readable JSON specification per chart (linked under each chart on the page).
- `data/`: the small chart-ready CSV and JSON files (about 0.3 MB in total).
- `geo/`: map shapes.
- `sketch.pdf`: the hand-drawn design sketch.

## Run locally
The charts load files, so serve the folder rather than opening `index.html` directly: `python -m http.server 8000`, then visit http://localhost:8000.

## Data
Department of Statistics Malaysia (OpenDOSM): consumer price index by state, household income and expenditure survey, wholesale and retail trade, annual real GDP by state and sector. United Nations Comtrade: Malaysia's trade in HS chapters 61, 62 and 64. Full links, access dates and limits are in the page footer.

## Generative AI
Used to check data, write and debug code, and copy-edit text. See the page footer.
