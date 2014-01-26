var clock;
var stopclock;
//var timeToBeSet;
var timelapsed = 0;
var bigArray = new Array();
bigArray[0] = allWords;

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
        var tempNumWords = numWords; 
         // while(tempNumWords != 0)
         // {
         //  var x=0;
         //  allWords[x] += $("#word" + (x+1).toString() + " h3:first-of-type").text();
         //  x++;
         //  tempNumWords--;
         // }
         clock.start();
         
         var interval =setInterval(function(){
          for(var i=0;i<numWords+1;i++)
          {
            var tempArray;
            tempArray[0] = timelapsed;
            tempArray[i++] = $('#count'+(i+1)).val();
          }
          bigArray.push(tempArray);

          timelapsed += 10;
         },10000)

      }
      else
      {
       clock.stop();
       clearInterval(interval);
       alert(bigArray);
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
