var clock;
var stopclock;
//var timeToBeSet;

function hideWordentry() {
  $("#wordentrydiv").toggleClass("hide");
  $("#anim").addClass("offset5");
}

$(document).ready(function(){
  var clock = $('#clock').FlipClock({
  autoStart: false
});
  var stopclock = $('#stopclock').FlipClock({
    autoStart: false,
    countDown: true,
  })
  $("#showstopclock").hide();
  $('#showclock').show();


  $('#chooseclock').click(function(){
    $('#showstopclock').hide();
    $('#showclock').show();
  });

  $('#choosestopclock').click(function(){
    $('#showstopclock').show();
    $('#showclock').hide();
  });


  $('#startstopclock').click(function(){
      var time = clock.getTime();
      //document.getElementById('checkClockTime').innerHTML= time;

      if(time == 0 || time == 1)
      {
         clock.start();
      }
      else
      {
       clock.stop();
       clock.setTime(0);
       //document.getElementById('checkClockTime').innerHTML= time;
      }
      hideWordentry();
  });

  $('#starttimer').click(function(){
    var timeToBeSet = $('#timeentry').val();
    stopclock.setTime(Number(timeToBeSet));
    //alert(timeToBeSet);
    stopclock.setCountdown(true);
    stopclock.start();

    hideWordentry();
  });

}); 