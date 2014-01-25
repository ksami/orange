// Self-written js/jquery testing nia

function helloWorld() {
  $("#word1").html('helloWorld!');
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

function wordEntry() {
  
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