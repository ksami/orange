// Self-written js/jquery testing nia
var count = 0;
function counter() {
  count++;
  $("#number").text(count);
  console.log(count);
}

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

function helloWorld() {
  $("#word1").text('helloWorld!');
}

function keyIncrease(e) {
  var unicode = e.charCode ? e.charCode : e.keyCode;
  var actualKey = String.fromCharCode(unicode);

  switch(actualKey)
  {
    case 1: if(numWords>=1) count1++; break;
    case 2: if(numWords>=2) count2++; break;
    case 3: if(numWords>=3) count3++; break;
    case 4: if(numWords>=4) count4++; break;
    case 5: if(numWords>=5) count5++; break;
    case 6: if(numWords>=6) count6++; break;
    case 7: if(numWords>=7) count7++; break;
    case 8: if(numWords>=8) count8++; break;
    case 9: if(numWords>=9) count9++; break;
    default: break;
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
  numWords++;
  if(numWords<=9) {
    var word = $("#wordentry").val();
    var wordid = "#word" + numWords.toString();
    $(wordid).removeClass("hide");
    $(wordid + " h3:first-child").text(word);
  }
  else {
    console.log("too many words")
  }
}

// $(function () {
//   $('#userid').val(testLogin());
// });
