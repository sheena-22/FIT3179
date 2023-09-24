var vg_1 = "hw.vg.json"; // location of vega-lite json file
// embeds in div with id "bar_chart" (add another div if want another vis)
vegaEmbed("#choropleth_map", vg_1).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);