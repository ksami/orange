var clock;
var stopclock;
var timeToBeSet;
    function timeClick() {
      timeToBeSet = $('#timeentry').val();
      alert(timeToBeSet);
    }
$(document).ready(function(){
  var clock = $('#clock').FlipClock({
  autoStart: false
});
  var stopclock = $('#stopclock').FlipClock({
    autoStart: false,
    countDown: true
  })
  $("#stopclock").hide();

  $('#chooseclock').click(function(){
    $('#stopclock').hide();
    $('#clock').show();
    $('#startstopclock').show();
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
       clock.getTime();
       //document.getElementById('checkClockTime').innerHTML= time;
      }

  });
    $('#choosestopclock').click(function(){
    $('#startstopclock').hide();
    $('#clock').hide();
    $('#stopclock').show();
    stopclock.setTime(timeToBeSet);
    stopclock.start();


  });

  }); 