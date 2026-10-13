
const charts = [
  ['#map1','specs/map1_choropleth.vl.json'],
  ['#map2','specs/map2_tilegrid.vl.json'],
  ['#map3','specs/map3_flow.vl.json'],
  ['#map4','specs/map4_proportional.vl.json'],
  ['#chart5','specs/chart5_treemap.vl.json'],
  ['#chart6','specs/chart6_parallel_coordinates.vl.json'],
  ['#chart7','specs/chart7_diverging_bar.vl.json'],
  ['#chart8','specs/chart8_radial_bar.vl.json'],
  ['#chart9','specs/chart9_heatmap.vl.json'],
  ['#chart10','specs/chart10_streamgraph.vl.json'],
  ['#chart11','specs/chart11_line.vl.json']
];
const opts = {actions:false, renderer:'svg'};
Promise.all(charts.map(([el,spec]) => vegaEmbed(el,spec,opts).catch(err => {
  console.error(el, err);
  document.querySelector(el).innerHTML = `<div class="error">Chart failed to render: ${err.message}</div>`;
})));
