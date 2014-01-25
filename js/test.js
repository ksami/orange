// Self-written js/jquery testing nia
var count = 0;
function counter() {
  count++;
  console.log(count);
}

function helloWorld() {
  $("#word1").text('helloWorld!');
}

//todo more colours
function brandColour() {
  var myColours = new Array();
  myColours[0] = "#03c03c";
  myColours[1] = "#ff0000";
  myColours[2] = "#0000ff";
  myColours[3] = "#ff6600";

  var i = Math.floor(Math.random()*4);

  $("#brand:hover").css("color", myColours[i]);
}

// $(function () {
//   $('#userid').val(testLogin());
// });


function togglePage() {
  $("#page").toggleClass("hidepage");
}


function loginPlease() {
  //document.getElementById("page").innerHTML="PLease auth our app!";
  //$("#page2").toggleClass("hidepage");
  //window.location.assign("/");
  //$("#page").load("/addlist #page2");
  $("#page").html('<h3>Our reviews page only likes people who use Facebook sorry :(</h3> <br><h4>Psst... Try logging into Facebook over at the sidebar and remember to accept our app!</h4>');
  $("#page").toggleClass("hidepage");
}