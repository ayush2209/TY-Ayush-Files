
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);

// Add data
chart.data = [{
  "country": "January",
  "visits": 2025
}, {
  "country": "February",
  "visits": 1882
}, {
  "country": "March",
  "visits": 1809
}, {
  "country": "April",
  "visits": 1322
}, {
  "country": "May",
  "visits": 1122
}, {
  "country": "June",
  "visits": 1114
}, {
  "country": "July",
  "visits": 984
}, {
  "country": "August",
  "visits": 711
}, {
  "country": "September",
  "visits": 665
}, {
  "country": "October",
  "visits": 580
}, {
  "country": "November",
  "visits": 443
}, {
  "country": "December",
  "visits": 441
}];

// Create axes

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "country";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.minGridDistance = 30;

categoryAxis.renderer.labels.template.adapter.add("dy", function(dy, target) {
  if (target.dataItem && target.dataItem.index & 2 == 2) {
    return dy + 25;
  }
  return dy;
});

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

// Create series
var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.valueY = "visits";
series.dataFields.categoryX = "country";
series.name = "Visits";
series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
series.columns.template.fillOpacity = .8;

var columnTemplate = series.columns.template;
columnTemplate.strokeWidth = 2;
columnTemplate.strokeOpacity = 1;