$(document).ready(function() {
  var timeForBreak = 5;
  var timeForWork = 25;
  var clockRunning = false;
  var okReset = true;
  var workReset = 25;
  var breakReset = 5;
  var state = "working";
  var pauser = false;
  var pausedVal = 0;
  //var tickTock = new Audio("https://drive.google.com/uc?id=1HfvpcXZk-g0zAhn5x4YKehq0dea221jp");
  var ding = new Audio(
    "https://drive.google.com/uc?id=17FF1ilX6p3O-eECK8xDp7vLFYASjNN74"
  );

  function toggleClock(count) {
    console.log("This is working");
    var myVar = setInterval(pomoTimer, 1000);
    function dropper() {
      /* jshint expr: true */
      myVar;
    }
    var timeSplit = count * 60 - 1;
    function pomoTimer() {
      if (state === "working") {
        $("#bottom").removeClass("darkgreen");
        $("#top").removeClass("lightGreen");
        $("#bottom").addClass("red");
        $("#top").addClass("lightred");
        $(".red").css("animation-play-state", "running");
        $(".lightred").css("animation-play-state", "running");
        $("#stem").addClass("stem-mover");
        $(".stem-mover").css("animation-play-state", "running");
      } else {
        $("#bottom").removeClass("red");
        $("#top").removeClass("lightred");
        $("#bottom").addClass("darkgreen");
        $("#top").addClass("lightGreen");
        $(".darkgreen").css("animation-play-state", "running");
        $(".lightGreen").css("animation-play-state", "running");
        $("#stem").addClass("stem-mover");
        $(".stem-mover").css("animation-play-state", "running");
      }

      var minutes = Math.floor(timeSplit / 60);
      var seconds = timeSplit % 60;
      if (seconds < 10 && seconds > -1) {
        seconds = "0" + seconds;
      }
      var timeDisplay = minutes.toFixed() + ":" + seconds;
      $("#theTime").html(timeDisplay);
      pausedVal = timeDisplay;
      if (pauser === true) {
        timeForWork = timeSplit / 60;
        clearInterval(myVar);
        //delete myVar;
        myVar = undefined;
        console.log(timeSplit);
        $("#theTime").html(pausedVal);

        $(".stem-mover").css("animation-play-state", "paused");
        $(".darkgreen").css("animation-play-state", "paused");
        $(".lightGreen").css("animation-play-state", "paused");
        $(".red").css("animation-play-state", "paused");
        $(".lightred").css("animation-play-state", "paused");
      }
      if (timeSplit > 0) {
        timeSplit--;
      }
      if (timeSplit === 0) {
        $("#theTime").html(":00");
        clearInterval(myVar);
        if (state === "working") {
          state = "breaking";
          timeForWork = workReset;
          $("#state").html("BREAK TIME!");
          toggleClock(timeForBreak);
        } else if (state === "breaking") {
          state = "working";
          timeForBreak = breakReset;
          $("#state").html("WORKING!");
          toggleClock(timeForWork);
        }
        ding.play();
      }
    }
    dropper();
    if (pauser === true) {
      console.log(pausedVal);
      clearInterval(myVar);
      //delete myVar;
      myVar = undefined;
      timeForWork = timeSplit / 60;
    }
  }

  $(".startbutton").on("click", function() {
    if (clockRunning === false && okReset === true) {
      clockRunning = true;
      okReset = false;
      $(".startbutton").html("PAUSE");
      $("#state").html("WORKING!");
      toggleClock(timeForWork);
    } else if (clockRunning === true && okReset === false) {
      clockRunning = false;
      $(".startbutton").html("START");
      console.log(timeForWork);
      pauser = true;
      toggleClock(timeForWork);
      $("#state").html("PAUSED");
      $("#resetter").toggleClass("resHighlt");
    } else if (clockRunning === false && okReset === false) {
      clockRunning = true;
      $(".startbutton").html("PAUSE");
      console.log("Continuing...");
      $("#bottom").css("animation-play-state", "running");
      $("#top").css("animation-play-state", "running");
      $("#stem").css("animation-play-state", "running");
      pauser = false;
      toggleClock(timeForWork);

      if (state === "working") {
        $("#state").html("WORKING!");
      } else {
        $("#state").html("BREAKING GOOD!");
      }
      $("#resetter").toggleClass("resHighlt");
    }
  });
  $("#resetter").on("click", function() {
    if (clockRunning === false && okReset === false) {
      okReset = true;
      pauser = false;
      state = "working";
      $("#theTime").html(workReset + ":00");
      timeForWork = workReset;
      timeForBreak = breakReset;
      $(".startbutton").html("START");
      $("#bottom").removeClass("red");
      $("#bottom").removeClass("darkgreen");
      $("#top").removeClass("lightred");
      $("#bottom").removeClass("lightGreen");
      $("#stem").removeClass("stem-mover");
      $("#top").css("fill", "#ff0000");
      $("#bottom").css("fill", "#ff0000");
      $("#resetter").toggleClass("resHighlt");
      $("#state").html("");
    }
  });
  $("#breakMore").on("click", function() {
    if (okReset === false) {
      console.log("Sorry no interruptions");
    } else if (clockRunning === false && okReset === true) {
      if (timeForBreak < 120) {
        timeForBreak += 1;
        breakReset += 1;
        $("#breakNum").html(timeForBreak);
      }
    }
  });
  $("#breakLess").on("click", function() {
    if (okReset === false) {
      console.log("Sorry no interruptions");
    } else if (clockRunning === false && okReset === true) {
      if (timeForBreak > 1) {
        timeForBreak -= 1;
        breakReset -= 1;
        $("#breakNum").html(timeForBreak);
      }
    }
  });
  $("#workMore").on("click", function() {
    if (okReset === false) {
      console.log("Sorry no interruptions");
    } else if (clockRunning === false && okReset === true) {
      if (timeForWork < 120) {
        timeForWork += 1;
        workReset += 1;
        $("#workNum").html(timeForWork);
        $("#theTime").html(timeForWork + ":00");
      }
    }
  });
  $("#workLess").on("click", function() {
    if (okReset === false) {
      console.log("Sorry no interruptions");
    } else if (clockRunning === false && okReset === true) {
      if (timeForWork > 1) {
        timeForWork -= 1;
        workReset -= 1;
        $("#workNum").html(timeForWork);
        $("#theTime").html(timeForWork + ":00");
      }
    }
  });
});