// Self-written js/jquery testing nia

var numClicks = 0;  // for clickanim.js
var numWords = 0;
var count1 = 0;
var count2 = 0;
var count3 = 0;
var count4 = 0;
var count5 = 0;
var count6 = 0;
var count7 = 0;
var count8 = 0;
var count9 = 0;

function counter(id) {
  // for clickanim.js
  numClicks++;

  if(id<=numWords) {
    var activecount = 0;
    switch(id)
    {
      case 1: count1++; activecount = count1; break;
      case 2: count2++; activecount = count2; break;
      case 3: count3++; activecount = count3; break;
      case 4: count4++; activecount = count4; break;
      case 5: count5++; activecount = count5; break;
      case 6: count6++; activecount = count6; break;
      case 7: count7++; activecount = count7; break;
      case 8: count8++; activecount = count8; break;
      case 9: count9++; activecount = count9; break;
    }
    var countid = "#count" + id.toString();
    $(countid).text(activecount);
    console.log("word is " + countid + " and =" + activecount);
  }
  else {
    console.log("id not shown yet");
  }
}

function brandColour() {
  var myColours = new Array();
  myColours[0] = "#03c03c";
  myColours[1] = "#ff0000";
  myColours[2] = "#0000ff";
  myColours[3] = "#ff6600";
  myColours[4] = "#cfafe8";
  myColours[5] = "#f0db3e";
  myColours[6] = "#ff4980";
  myColours[7] = "#3e6bf0";
  myColours[8] = "#8ef03e";
  myColours[9] = "#f0533e";

  var i = Math.floor(Math.random()*10);

  $("#brand:hover").css("color", myColours[i]);
}

function wordClick() {
  var word = $("#wordentry").val();
  if(word=="")
  {
    alert("Enter something to remember the count by!");
  }
  else {
    if((numWords+1)<=9) {
      numWords++;
      var wordid = "#word" + numWords.toString();
      $(wordid).removeClass("hide");
      $(wordid + " h3:first-of-type").text(word);
    }
    else {
      console.log("too many words")
    }
  }
}

function hoverRemove(id) {
  var wordid = "#word" + id.toString();
  $(wordid + " a i").toggleClass("icon-white");
}

function removeWord(id) {
  if(id<numWords) {
    for(i=id; i<numWords; i++) {
      var replacingWord = $("#word" + (i+1).toString() + " h3:first-of-type").text();
      $("#word" + i.toString() + " h3:first-of-type").text(replacingWord);

      var replacingCount = $("#count" + (i+1).toString()).text();
      $("#count" + i.toString()).text(replacingCount);
    }

    switch(id) {
      case 1: count1 = count2;
      case 2: count2 = count3;
      case 3: count3 = count4;
      case 4: count4 = count5;
      case 5: count5 = count6;
      case 6: count6 = count7;
      case 7: count7 = count8;
      case 8: count8 = count9;
      case 9: count9 = 0; break;
    }
  }
  else {
    switch(id) {
      case 1: count1 = 0; break;
      case 2: count2 = 0; break;
      case 3: count3 = 0; break;
      case 4: count4 = 0; break;
      case 5: count5 = 0; break;
      case 6: count6 = 0; break;
      case 7: count7 = 0; break;
      case 8: count8 = 0; break;
      case 9: count9 = 0; break;
    }
  }
  $("#word" + numWords.toString()).addClass("hide");
  numWords--;
}

// KEYBINDS

// konami code!
Mousetrap.bind('up up down down left right left right b a', function() {
  $("body").css("background-image", "url('../images/cosmos_room.jpg')");
  console.log("konami code activated");
});

// cookie code!
Mousetrap.bind('k c o o k i e', function() {
  alert("here's a cookie!");
});

Mousetrap.bind(['q', '1'], function() {
  counter(1);
});
Mousetrap.bind(['w', '2'],  function() {
  counter(2);
});
Mousetrap.bind(['e', '3'],  function() {
  counter(3);
});
Mousetrap.bind(['a', '4'],  function() {
  counter(4);
});
Mousetrap.bind(['s', '5'],  function() {
  counter(5);
});
Mousetrap.bind(['d', '6'],  function() {
  counter(6);
});
Mousetrap.bind(['z', '7'],  function() {
  counter(7);
});
Mousetrap.bind(['x', '8'],  function() {
  counter(8);
});
Mousetrap.bind(['c', '9'],  function() {
  counter(9);
});

// $(function () {
//   $('#userid').val(testLogin());
// });

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Time Lapsed', 'Alright', 'This'],
    ['0:20',                2,      3],
    ['0:40',                5,      4],
    ['1:00',                6,      8],
    ['1:20',               10,     11]
  ]);

  var options = {
    title: 'Company Performance'
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}
