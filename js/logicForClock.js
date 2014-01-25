var clock;
var stopclock;
//var timeToBeSet;



$(document).ready(function(){
  var clock = $('#clock').FlipClock({
  autoStart: false
});
  var stopclock = $('#stopclock').FlipClock({
    autoStart: false,
    countDown: true,
  })
  $("#stopclock").hide();
  $('#storetimeentry').hide();

  $('#chooseclock').click(function(){
  $('#stopclock').hide();
  $('#storetimeentry').hide();
  $('#clock').show();
  $('#startstopclock').show();
  });

  $('#choosestopclock').click(function(){
  $('#stopclock').show();
  $('#storetimeentry').show();
  $('#clock').hide();
  $('#startstopclock').hide();
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

  });
  $('#starttimer').click(function(){
    var timeToBeSet = $('#timeentry').val();
    stopclock.setTime(Number(timeToBeSet));
    //alert(timeToBeSet);
    stopclock.setCountdown(true);
    stopclock.start();
  });

  }); 