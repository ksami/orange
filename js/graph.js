google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);

setInterval(mineData(),10000);
var tempData;
function minData() {
  var tempTime = document.getElementById('startstopclock').clock.getTime().getSeconds();
  var tempRate = count1 / 

}
var data = google.visualization.DataTable();
  ['Time', 'Alright', 'This'],
  ['0:30',         2,      3],
  ['1:00',         3,      3],
  ['1:30',         3,      2],
  ['2:00',         3,      1]
]);

function drawChart() {

  var options = {
    title: 'Rate of clicks',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}