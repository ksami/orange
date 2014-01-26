google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);
//IN PROGRESS:::run interval after timer starts and stop interval mining after time stop

var data = google.visualization.DataTable();
data.addColumn('string', 'Time Lapsed');
data.addcolumn('number', 'Alright');
data.addcolumn('number', 'This');

setInterval(mineData(),10000);
var tempData;
function mineData() {
  var tempsecond = document.getElementById('startstopclock').clock.getTime().getSeconds();
  var tempminute = document.getElementById('startstopclock').clock.getTime().getMinutes();
  var temphour = document.getElementById('startstopclock').clock.getTime().getHours();
  var temptimelapsed = tempsecond + tempminute*60 + temphour*3600;
  if (temptimelapsed != 0)
  {
     var dataPoint = new Array();
     dataPoint[0] = temptimelapsed.toString();
     dataPoint[1] = count1;
     dataPoint[2] = count2;
     data.addRows(dataPoint);
  }
}
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