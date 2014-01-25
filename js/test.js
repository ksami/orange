// Self-written js/jquery testing nia
var count = 0;

function plusplus() {
  count++;
  $("#number").text(count);
  console.log(count);
}

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

var numWords = 0;

function helloWorld() {
  $("#word1").text('helloWorld!');
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

// konami code!
Mousetrap.bind('up up down down left right left right b a', function() {
  $("body").css("background-color", "black");
});

// $(function () {
//   $('#userid').val(testLogin());
// });
