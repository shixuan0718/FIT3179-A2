// Draws every chart from its JSON specification in /specs.
// Charts that show states share a "hl" (highlight) signal, so hovering over a state in one chart lights it up in the others.
// The product-type menu sets a shared "cat" signal used by the treemap, the diverging bar chart and the streamgraph.
const CHARTS = [
  { id: "map1", spec: "specs/map1_choropleth.vl.json", state: true },
  { id: "map2", spec: "specs/map2_tilegrid.vl.json", state: true },
  { id: "map3", spec: "specs/map3_flow.vl.json" },
  { id: "map4", spec: "specs/map4_proportional.vl.json", state: true },
  { id: "chart5", spec: "specs/chart5_treemap.vega.json", cat: true },
  { id: "chart6", spec: "specs/chart6_parallel_coordinates.vl.json", state: true },
  { id: "chart7", spec: "specs/chart7_diverging_bar.vl.json", cat: true },
  { id: "chart8", spec: "specs/chart8_radial_bar.vl.json" },
  { id: "chart9", spec: "specs/chart9_heatmap.vl.json" },
  { id: "chart10", spec: "specs/chart10_streamgraph.vl.json", cat: true },
  { id: "chart11", spec: "specs/chart11_line.vl.json" }
];
const stateViews = [], catViews = [];

function stateOf(item) {
  let d = item && item.datum;
  if (d && Array.isArray(d)) d = d[0];
  if (!d) return "";
  if (d.state) return d.state;
  if (d.properties && d.properties.state) return d.properties.state;
  return "";
}
function setSignal(views, name, value) {
  for (const v of views) { try { v.signal(name, value).run(); } catch (e) { /* chart has no such signal */ } }
}

async function main() {
  await Promise.all(CHARTS.map(async (c) => {
    const el = document.getElementById(c.id);
    try {
      const spec = await (await fetch(c.spec)).json();
      const result = await vegaEmbed(el, spec, { actions: false, renderer: "svg", tooltip: { theme: "light" } });
      window.views = window.views || {}; window.views[c.id] = result.view;
      if (c.state) {
        stateViews.push(result.view);
        result.view.addEventListener("mouseover", (_e, item) => { const s = stateOf(item); if (s) setSignal(stateViews, "hl", s); });
        result.view.addEventListener("mouseout", () => setSignal(stateViews, "hl", ""));
      }
      if (c.cat) catViews.push(result.view);
    } catch (err) {
      console.error(c.id, err);
      el.innerHTML = '<div class="chart-error">This chart could not be loaded.</div>';
    }
  }));
  document.getElementById("catSelect").addEventListener("change", (e) => setSignal(catViews, "cat", e.target.value));
  document.body.dataset.ready = "1";
}
main();
