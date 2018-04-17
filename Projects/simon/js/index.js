$(document).ready(function() {
  /*jshint loopfunc: true */
  var power = false;
  var strict = false;
  var sequence = [0];
  var player = [0];
  var pInput = "disabled";
  var counter = 0;
  var asigna = {
    1: "lRed",
    2: "lYellow",
    3: "lGreen",
    4: "lBlue",
    audios: {
      1: "redMuse",
      2: "yellowMuse",
      3: "greenMuse",
      4: "blueMuse"
    },
    anim: {
      1: "lRed",
      2: "lYellow",
      3: "lGreen",
      4: "lBlue"
    },
    bulb: {
      1: "red-bulb",
      2: "yellow-bulb",
      3: "green-bulb",
      4: "blue-bulb"
    },
    filament: {
      1: "red-filament",
      2: "yellow-filament",
      3: "green-filament",
      4: "blue-filament"
    },
    string: {
      1: "red-string",
      2: "yellow-string",
      3: "green-string",
      4: "blue-string"
    },
    strAnim: {
      1: "redVibe",
      2: "yellVibe",
      3: "greenVibe",
      4: "blueVibe"
    }
  };
var sound;
  var buzz;

  function iterRate() {
    clearTimeout(buzz);
    //console.log("timeout cleared");
    pInput = "disabled";
    console.log(sequence);
    var howMuch = 1500;
    if (sequence.length > 13) {
      howMuch = 750;
    }
    for (var i = 0; i < sequence.length; i++) {
      setTimeout(
        function(y) {
          console.log(sequence[y]);
          var spot = sequence[y];
          sound = document.getElementById(asigna.audios[spot]);
          sound.play();
          console.log(pInput);
          $("#" + asigna.string[spot])
            .addClass(asigna.strAnim[spot])
            .delay(1000)
            .queue(function(next) {
              $(this).removeClass(asigna.strAnim[spot]);
              next();
            });

          $("#" + asigna.filament[spot])
            .addClass("filament-light")
            .delay(1000)
            .queue(function(next) {
              $(this).removeClass("filament-light");
              next();
            });
          $("#" + asigna.bulb[spot])
            .addClass(asigna.anim[spot])
            .delay(1000)
            .queue(function(next) {
              $(this).removeClass(asigna.anim[spot]);
              next();
            });
          if (y === sequence.length - 1) {
            pInput = "enabled";
            console.log("You have five seconds after the last beep!");
            buzz = setTimeout(function() {
              sound = document.getElementById("uRwrong");
              sound.load();
              sound.play();
              player.length = 1;
              if (strict === false) {
                console.log("Time's up! Try Again!");
                pInput = "true";
                setTimeout(function() {
                  iterRate();
                }, 2000);
              } else {
                setTimeout(function() {
                  sequence.length = 1;
                  counter = 0;
                  $("#counter").html("--");
                  iterRate();
                }, 2000);
              }
            }, 5000 + howMuch);
          }
        },
        i * howMuch,
        i
      );
    }
  }
  function addMore() {
    var rando = Math.ceil(Math.random() * 4);
    sequence.push(rando);
    counter++;
    console.log("counter is" + counter);
    $(".square").html(counter);
    iterRate();
  }
  function playPush(num) {
    if (pInput === "enabled") {
      player.push(num);
      for (var p = 1; p < player.length; p++) {
        if (player[p] === sequence[p]) {
          if (p === player.length - 1) {
            sound = document.getElementById(asigna.audios[num]);
            sound.load();
            sound.play();
            $("#" + asigna.filament[num])
              .addClass("filament-light")
              .delay(1000)
              .queue(function(next) {
                $(this).removeClass("filament-light");
                next();
              });
            $("#" + asigna.string[num])
              .addClass(asigna.strAnim[num])
              .delay(1000)
              .queue(function(next) {
                $(this).removeClass(asigna.strAnim[num]);
                next();
              });
            $("#" + asigna.bulb[num])
              .addClass(asigna.anim[num])
              .delay(1000)
              .queue(function(next) {
                $(this).removeClass(asigna.anim[num]);
                next();
              });
          }

          if (player.length === sequence.length) {
            if (p === player.length - 1) {
              if (player.length === 21) {
                clearTimeout(buzz);
                $("#counter").html("<small>WIN!</small>");
                setTimeout(function() {
                  sequence.length = 1;
                  player.length = 1;
                  counter = 0;
                  addMore();
                }, 2000);
              } else {
                pInput = "disabled";
                console.log("You finished, no more timer.");
                clearTimeout(buzz);
                setTimeout(function() {
                  player.length = 1;
                  addMore();
                }, 1000);
              }
            }
          }
        } else {
          if (strict === false) {
            if (p === player.length - 1) {
              sound = document.getElementById("uRwrong");
              sound.play();
              console.log("Bad! Try Again!");
              pInput = "disabled";
              setTimeout(function() {
                player.length = 1;
                iterRate();
              }, 2000);
            }
          } else {
            if (p === player.length - 1) {
              sound = document.getElementById("uRwrong");
              sound.play();
              setTimeout(function() {
                sequence.length = 1;
                player.length = 1;
                counter = 0;
                $("#counter").html("--");
                addMore();
              }, 2000);
            }
          }
        }
      }
    } else {
      console.log("WAIT!");
    }
  }
  function tooLong() {
    console.log("You have 5s. Input " + pInput);
    buzz = setTimeout(function() {
      var sound = document.getElementById("uRwrong");
      sound.play();
      pInput = "disabled";
      console.log("Input " + pInput);
      player.length = 1;
      if (strict === false) {
        console.log("Too long! Try Again!");
        setTimeout(function() {
          iterRate();
        }, 2000);
      } else {
        setTimeout(function() {
          sequence.length = 1;
          addMore();
        }, 2000);
      }
    }, 5000);

    /*setTimeout(function() {
      clearTimeout(buzz);
    }, 6000);*/
  }
  $("#on-off-circle").on("click", function() {
    if (power === false) {
      power = true;
      $("#switch").addClass("switcher");
    } else {
      power = false;
      $("#switch").removeClass("switcher");
      document.location.reload(false);
    }
  });

  $("#start").on("click", function() {
    if (power === true) {
      clearTimeout(buzz);
      counter = 0;
      sequence.length = 1;
      player.length = 1;
      addMore();
    }
  });
  $("#strict").on("click", function() {
    if (power === true) {
      if (strict === false) {
        $("#strict").css("fill", "#cccc00");
        strict = true;
        console.log("it's working");
      } else {
        $("#strict").css("fill", "#ff0000");
        strict = false;
      }
    }
  });
  $("#red-back").on("click", function() {
    clearTimeout(buzz);
    playPush(1);
    if (pInput === "enabled") {
      console.log("Too long started!");
      tooLong();
    } else {
      console.log("Too long not started!");
    }
  });
  $("#yellow-back").on("click", function() {
    clearTimeout(buzz);
    playPush(2);
    if (pInput === "enabled") {
      console.log("Too long started!");
      tooLong();
    } else {
      console.log("Too long not started!");
    }
  });
  $("#green-back").on("click", function() {
    clearTimeout(buzz);
    playPush(3);
    if (pInput === "enabled") {
      console.log("Too long started!");
      tooLong();
    } else {
      console.log("Too long not started!");
    }
  });
  $("#blue-back").on("click", function() {
    clearTimeout(buzz);
    playPush(4);
    if (pInput === "enabled") {
      console.log("Too long started!");
      tooLong();
    } else {
      console.log("Too long not started!");
    }
  });
});