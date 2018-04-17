$(document).ready(function() {
  var toe =
    '<div id="toed" class="toe"><svg width="75" height="75" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><!-- Created with SVG-edit - http://svg-edit.googlecode.com/ --><defs><filter height="200%" width="200%" y="-50%" x="-50%" id="svg_21_blur"><feGaussianBlur stdDeviation="3.9"/></filter></defs><path filter="url(#svg_21_blur)" id="shadow" fill="#7f7f7f" stroke="#000000" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" d="m29.593599,50.055c-27.177038,-2.566002 -29.686083,-17.3465 -24.710018,-25.9235c-3.16047,-11.904 8.33192,-15.59857 18.89312,-9.8056c5.988701,0.3216 12.391005,1.849799 18.282103,3.7923c11.782299,3.885 21.519699,9.4277 21.813202,10.291201c0.146793,0.4317 3.987591,2.856798 4.046497,8.139999c8.262794,-2.998001 7.767593,9.727398 2.873795,10.3526c2.502899,4.322201 0.472702,14.917999 -8.650192,6.917301c-4.819401,2.054897 -8.8218,7.536598 -15.1558,5.3694l-17.392704,-9.133701l-0.000002,0z" stroke-width="0"/><path id="toeskin" fill="#ffd4aa" stroke="#000000" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" d="m47.604954,56.147926c-3.829323,1.389061 -10.03632,-0.71331 -18.322741,-8.5023c-26.97417,-2.316151 -31.733711,-16.85964 -21.45545,-29.14016c16.81897,-10.411741 54.895241,8.04241 55.47797,9.60124c0.582729,1.558819 -8.04113,25.26309 -15.69978,28.04122z" id="svg_3" stroke-width="0"/><path id="meat1" fill="#c40000" stroke="#000000" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" d="m51.609474,27.181917c-12.814457,6.540709 -20.423038,39.110777 4.271481,26.563299c24.694523,-12.547489 8.542973,-33.104012 -4.271481,-26.563299z" id="svg_2" stroke-width="0"/><path id="meat2" fill="#e09696" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" d="m53.088257,30.684725c-7.904823,4.718649 -12.598301,28.21562 2.634937,19.163507c15.233234,-9.052109 5.269882,-23.882158 -2.634937,-19.163507z" stroke-width="0" id="svg_6" stroke="#000000" transform="rotate(13.1975, 54.6895, 40.8398)"/><path id="bone" transform="rotate(16.3982, 61.3242, 44.9453)" fill="#ffffff" stroke="#000000" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" d="m57.082314,38.628166c7.341614,0.533932 6.51569,4.37994 6.674198,0.400452c0.158512,-3.979492 6.965153,-4.573902 8.358379,-0.23568c1.393242,4.338219 -0.718842,5.333138 -3.097656,6.65612c2.206345,3.128517 2.139938,3.456978 0.713341,6.73568c-1.426613,3.278698 -7.973892,1.94125 -8.777233,-0.875603c-0.423199,-1.70026 1.184669,-2.544537 -2.01894,-3.612408c-3.203609,-1.067871 -4.388279,-1.45998 -7.324928,-1.45998c-2.936642,0 -1.868771,-8.142521 5.472839,-7.608582z" id="svg_4" stroke-width="0"/><path id="nail" fill="#ffb8aa" stroke="#000000" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" d="m21.058336,27.916073c-1.87711,4.80542 -19.22167,1.051191 -16.89405,-6.832699c2.32763,-7.883901 7.3583,-9.085251 12.989648,-6.532371c2.928303,0.675759 6.682541,0.9761 12.163723,3.37881c-5.180841,2.17746 -6.3822,5.18084 -8.259323,9.986259l0.000002,0z" id="svg_5" stroke-width="0"/></svg></div>';
  var playChoose =
    '<p>Choose your game:</p><button id="twoPlayer" class="btn btn-primary btn-lg" style="width:125px">2 Players</button><p> </p><button id="compGame" class="btn btn-primary btn-lg" style="width:125px">vs. Computer</button>';
  var gamePieceChoose =
    '<p>Player 1: Tic-tac or Toe?</p><button id="ticPick" class="btn btn-primary" style="height:100px;width:100px"><div class="tic-tac" style="margin-top:5px"></div></button><button id="toePick" class="btn btn-primary" style="height:100px;width:100px;padding-top:0px">' +
    toe +
    "</button>";
  var ticTac = '<div class="tic-tac"></div>';
  var tacArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var pOneTurn = true;
  var turnCount = 0;
  var winners = [
    [1, 2, 3],
    [1, 4, 7],
    [1, 5, 9],
    [2, 5, 8],
    [3, 5, 7],
    [3, 6, 9],
    [4, 5, 6],
    [7, 8, 9]
  ];
  var pOneMoves = [];
  var pTwoMoves = [];
  var winning = false;
  var moveSix = 0;
  var finalMoveWin = false;
  var firstChoices = [1, 3, 5, 7, 9];
        var selection = firstChoices[Math.floor(Math.random() * 5)];
  $("#console")
    .hide()
    .html(playChoose)
    .fadeIn(1000);
  
  $("#oranger").on("click", function() {
    document.location.reload(false);
  });
  function reset() {
    $(".biggie").fadeOut(2000);
    tacArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    turnCount = 0;
    pOneMoves.length = 0;
    pTwoMoves.length = 0;
    winning = false;
    moveSix = 0;
  }
  function winnerCheck(arr, str) {
    winners.forEach(function(element) {
      if (arr.includes(element[0]) === true) {
        if (arr.includes(element[1]) === true) {
          if (arr.includes(element[2]) === true) {
            $(".tic-tac").css("animation", "growNspinOutTic(3s)");
            $("#console")
              .hide()
              .html(
                "<p>Winner, winner, chicken dinner!</p><p>" +
                  str +
                  " wins!</p><p><small><small>(Click to reset)</small></small></p>"
              )
              .fadeIn(1000);
            $("#console").on("click", function() {
              $("#console").fadeOut(1000);
              reset();
            });
            winning = true;
          }
        }
      }
    });
  }
  function winMove(arr1, arr2) {
    console.log("winMove");
    console.log(arr1);
    winners.forEach(function(element) {
      if (element.includes(arr1[0]) === true) {
        if (element.includes(arr1[1]) === true) {
          for (var i = 0; i < element.length; i++) {
            if (arr1.indexOf(element[i]) === -1) {
              console.log(element[i]);
              moveSix = element[i];
            }
          }
        }
      }
    });
  }
  function winMovePC1(arr1, arr2) {
    console.log("winMove");
    console.log(arr1);
    winners.forEach(function(element) {
      if (element.includes(arr1[0]) && element.includes(arr1[1])) {
        for (var i = 0; i < element.length; i++) {
          if (
            arr1.indexOf(element[i]) === -1 &&
            arr2.indexOf(element[i] !== -1)
          ) {
            console.log("Win " + element[i]);
            moveSix = element[i];
          }
        }
      }
    });
  }
  function blockMovePC1(arr1, arr2) {
   
    winners.forEach(function(element) {
      if (element.includes(arr1[0]) && element.includes(arr1[1])) {
        for (var m = 0; m < element.length; m++) {
          if (arr1.indexOf(element[m]) === -1) {
           
            moveSix = element[m];
          }
        }
      }
    });
  }
  function blockMove(arr1, arr2, arr3) {
    winners.forEach(function(element) {
      if (
        (element.includes(arr1[0]) && element.includes(arr1[1])) ||
        (element.includes(arr1[0]) && element.includes(arr1[2])) ||
        (element.includes(arr1[1]) && element.includes(arr1[2]))
      ) {
        for (var j = 0; j < element.length; j++) {
          if (
            arr1.indexOf(element[j]) === -1 &&
            arr2.indexOf(element[j]) !== -1 &&
            arr3.includes(element[j]) !== true
          ) {
            moveSix = element[j];
          }
        }
      }
    });
  }
  function winMoveII(arr1, arr2) {
    winners.forEach(function(element) {
      if (
        (element.includes(arr1[0]) === true &&
          element.includes(arr1[1]) === true) ||
        (element.includes(arr1[0]) === true &&
          element.includes(arr1[2]) === true) ||
        (element.includes(arr1[1]) === true &&
          element.includes(arr1[2]) === true)
      ) {
        for (var k = 0; k < element.length; k++) {
          if (
            arr1.indexOf(element[k]) === -1 &&
            arr2.indexOf(element[k]) !== -1
          ) {
            moveSix = element[k];
          }
        }
      }
    });
  }
  function winMoveIIPC1(arr1, arr2) {
    winners.forEach(function(element) {
      if (
        (element.includes(arr1[0]) === true &&
          element.includes(arr1[1]) === true) ||
        (element.includes(arr1[0]) === true &&
          element.includes(arr1[2]) === true) ||
        (element.includes(arr1[1]) === true &&
          element.includes(arr1[2]) === true)
      ) {
        for (var k = 0; k < element.length; k++) {
          if (
            arr1.indexOf(element[k]) === -1 &&
            arr2.indexOf(element[k]) !== -1
          ) {
            moveSix = element[k];
          }
        }
      }
    });
  }
  function blockMoveIIPC1(arr1, arr2) {
    winners.forEach(function(element) {
      if (
        (element.includes(arr1[0]) === true &&
          element.includes(arr1[1]) === true) ||
        (element.includes(arr1[0]) === true &&
          element.includes(arr1[2]) === true) ||
        (element.includes(arr1[1]) === true &&
          element.includes(arr1[2]) === true)
      ) {
        for (var k = 0; k < element.length; k++) {
          if (
            arr1.indexOf(element[k]) === -1 &&
            arr2.indexOf(element[k]) !== -1
          ) {
            moveSix = element[k];
          }
        }
      }
    });
  }
  function blockMoveII(arr1, arr2) {
    winners.forEach(function(element) {
      if (
        (element.includes(arr1[0]) && element.includes(arr1[1])) ||
        (element.includes(arr1[0]) && element.includes(arr1[2])) ||
        (element.includes(arr1[0]) && element.includes(arr1[3])) ||
        (element.includes(arr1[1]) && element.includes(arr1[2])) ||
        (element.includes(arr1[1]) && element.includes(arr1[3])) ||
        (element.includes(arr1[2]) && element.includes(arr1[3]))
      ) {
        for (var l = 0; l < element.length; l++) {
          if (
            arr1.indexOf(element[l]) === -1 &&
            arr2.indexOf(element[l]) !== -1
          ) {
            moveSix = element[l];
          }
        }
      }
    });
  }
  function finalPCMove(arr1) {
    winners.forEach(function(element) {
      if (
        arr1.includes(element[0]) &&
        arr1.includes(element[1]) &&
        arr1.includes(element[2])
      ) {
        finalMoveWin = true;
      }
    });
  }
  function versusTwo(arg1, arg2) {
    if (pOneTurn === true) {
      $("#mater")
        .hide()
        .html("PLAYER 1")
        .fadeIn(1000);
    }
    function arrayCheck(num) {
      if (tacArr.includes(num)) {
        if (pOneTurn === true) {
          $("#" + num)
            .hide()
            .html(arg1)
            .fadeIn(500);
          pOneMoves.push(num);
          pOneTurn = false;
          turnCount++;
          $("#mater").fadeOut(1000);
          $("#blueby")
            .hide()
            .html("PLAYER 2")
            .fadeIn(1000);
          if (turnCount > 4) {
            winnerCheck(pOneMoves, "Player 1");
          }
        } else {
          $("#" + num)
            .hide()
            .html(arg2)
            .fadeIn(500);
          pOneTurn = true;
          turnCount++;
          pTwoMoves.push(num);
          $("#blueby").fadeOut(1000);
          $("#mater")
            .hide()
            .html("PLAYER 1")
            .fadeIn(1000);
          if (turnCount > 4) {
            winnerCheck(pTwoMoves, "Player 2");
          }
        }
        var arraySpot = tacArr.indexOf(num);
        tacArr.splice(arraySpot, 1);
      } else {
      }

      if (tacArr.length === 0) {
        if (winning === false) {
          $("#console")
            .hide()
            .html(
              "<p>It's a draw!</p><p><small><small>(Click to reset)</small></small></p>"
            )
            .fadeIn(1000);
            $("#mater").fadeOut(1000);
            $("#blueby").fadeOut(1000);
          $("#console").on("click", function() {
            $("#console").fadeOut(1000);
            reset();
          });
        } else {
          reset();
        }
      }
    }

    $(".one").on("click", function() {
      arrayCheck(1);
    });
    $(".two").on("click", function() {
      arrayCheck(2);
    });
    $(".three").on("click", function() {
      arrayCheck(3);
    });
    $(".four").on("click", function() {
      arrayCheck(4);
    });
    $(".five").on("click", function() {
      arrayCheck(5);
    });
    $(".six").on("click", function() {
      arrayCheck(6);
    });
    $(".seven").on("click", function() {
      arrayCheck(7);
    });
    $(".eight").on("click", function() {
      arrayCheck(8);
    });
    $(".nine").on("click", function() {
      arrayCheck(9);
    });
  }
  function versusAI(arg1, arg2) {
    var turner = Math.floor(Math.random() * 2);
    var firstChoices = [1, 3, 5, 7, 9];
    var selection = firstChoices[Math.floor(Math.random() * 5)];
    if (turner === 1) {
      $("#mater")
        .hide()
        .html("PLAYER 1")
        .fadeIn(1000);
      function arrayCheck(num) {
        var arraySpot = tacArr.indexOf(num);
        if (turnCount === 0) {
          tacArr.splice(arraySpot, 1);
          $("#" + num)
            .hide()
            .html(arg1)
            .fadeIn(500);
          pOneMoves.push(num);
          $("#mater").fadeOut(1000);
          $("#blueby")
            .hide()
            .html("MACHINE")
            .fadeIn(1000);
          if (pOneMoves[0] !== 5) {
            $("#5")
              .hide()
              .html(arg2)
              .delay(1000)
              .fadeIn(500);
            pTwoMoves.push(5);
            tacArr.splice(tacArr.indexOf(5), 1);
          } else if (pOneMoves[0] === 5) {
            var corners = [1, 3, 7, 9];
            var choosed = corners[Math.floor(Math.random() * 3)];
            tacArr.splice(tacArr.indexOf(choosed), 1);
            pTwoMoves.push(choosed);
            $("#" + choosed)
              .hide()
              .html(arg2)
              .delay(1000)
              .fadeIn(500);
          }
          $("#blueby").fadeOut(1000);
          $("#mater")
            .hide()
            .html("PLAYER 1")
            .fadeIn(1000);
          turnCount = turnCount + 2;
        }
        if (turnCount === 2) {
          if (tacArr.includes(num)) {
            tacArr.splice(arraySpot, 1);
            $("#" + num)
              .hide()
              .html(arg1)
              .fadeIn(500);
            pOneMoves.push(num);
            pOneMoves.sort();
            $("#mater").fadeOut(1000);
            $("#blueby")
              .hide()
              .html("MACHINE")
              .fadeIn(1000);
            if (
              (pOneMoves[0] === 2 && pOneMoves[1] === 3) ||
              (pOneMoves[0] === 2 && pOneMoves[1] === 7) ||
              (pOneMoves[0] === 3 && pOneMoves[1] === 4) ||
              (pOneMoves[0] === 4 && pOneMoves[1] === 7) ||
              (pOneMoves[0] === 5 && pOneMoves[1] === 9) ||
              (pOneMoves[0] === 3 && pOneMoves[1] === 5 && pTwoMoves[0] === 7)
            ) {
              $("#1")
                .hide()
                .html(arg2)
                .delay(1000)
                .fadeIn(500);
              pTwoMoves.push(1);
              tacArr.splice(tacArr.indexOf(1), 1);
            } else if (
              (pOneMoves[0] === 1 && pOneMoves[1] === 3) ||
              (pOneMoves[0] === 5 && pOneMoves[1] === 8) ||
              (pOneMoves[0] === 3 && pOneMoves[1] === 7)
            ) {
              $("#2")
                .hide()
                .html(arg2)
                .delay(1000)
                .fadeIn(500);
              pTwoMoves.push(2);
              tacArr.splice(tacArr.indexOf(2), 1);
            } else if (
              (pOneMoves[0] === 1 && pOneMoves[1] === 2) ||
              (pOneMoves[0] === 1 && pOneMoves[1] === 6) ||
              (pOneMoves[0] === 2 && pOneMoves[1] === 6) ||
              (pOneMoves[0] === 2 && pOneMoves[1] === 9) ||
              (pOneMoves[0] === 5 &&
                pOneMoves[1] === 7 &&
                pTwoMoves[0] !== 3) ||
              (pOneMoves[0] === 6 && pOneMoves[1] === 9)
            ) {
              $("#3")
                .hide()
                .html(arg2)
                .delay(1000)
                .fadeIn(500);
              pTwoMoves.push(3);
              tacArr.splice(tacArr.indexOf(3), 1);
            } else if (
              (pOneMoves[0] === 1 && pOneMoves[1] === 7) ||
              (pOneMoves[0] === 5 && pOneMoves[1] === 6)
            ) {
              $("#4")
                .hide()
                .html(arg2)
                .delay(1000)
                .fadeIn(500);
              pTwoMoves.push(4);
              tacArr.splice(tacArr.indexOf(4), 1);
            } else if (
              (pOneMoves[0] === 3 && pOneMoves[1] === 9) ||
              (pOneMoves[0] === 4 && pOneMoves[1] === 5)
            ) {
              $("#6")
                .hide()
                .html(arg2)
                .delay(1000)
                .fadeIn(500);
              pTwoMoves.push(6);
              tacArr.splice(tacArr.indexOf(6), 1);
            } else if (
              (pOneMoves[0] === 1 && pOneMoves[1] === 4) ||
              (pOneMoves[0] === 1 && pOneMoves[1] === 8) ||
              (pOneMoves[0] === 4 && pOneMoves[1] === 8) ||
              (pOneMoves[0] === 4 && pOneMoves[1] === 9) ||
              (pOneMoves[0] === 8 && pOneMoves[1] === 9) ||
              (pOneMoves[0] === 3 &&
                pOneMoves[1] === 5 &&
                pTwoMoves[0] !== 7) ||
              (pOneMoves[0] === 5 &&
                pOneMoves[1] === 9 &&
                pTwoMoves[0] === 1) ||
              (pOneMoves[0] === 1 && pOneMoves[1] === 5 && pTwoMoves[0] === 9)
            ) {
              $("#7")
                .hide()
                .html(arg2)
                .delay(1000)
                .fadeIn(500);
              pTwoMoves.push(7);
              tacArr.splice(tacArr.indexOf(7), 1);
            } else if (
              (pOneMoves[0] === 7 && pOneMoves[1] === 9) ||
              (pOneMoves[0] === 2 && pOneMoves[1] === 5) ||
              (pOneMoves[0] === 1 && pOneMoves[1] === 9)
            ) {
              $("#8")
                .hide()
                .html(arg2)
                .delay(1000)
                .fadeIn(500);
              pTwoMoves.push(8);
              tacArr.splice(tacArr.indexOf(8), 1);
            } else if (
              (pOneMoves[0] === 3 && pOneMoves[1] === 6) ||
              (pOneMoves[0] === 3 && pOneMoves[1] === 8) ||
              (pOneMoves[0] === 6 && pOneMoves[1] === 7) ||
              (pOneMoves[0] === 6 && pOneMoves[1] === 8) ||
              (pOneMoves[0] === 7 && pOneMoves[1] === 8) ||
              (pOneMoves[0] === 4 && pOneMoves[1] === 6) ||
              (pOneMoves[0] === 2 && pOneMoves[1] === 8) ||
              (pOneMoves[0] === 1 &&
                pOneMoves[1] === 5 &&
                pTwoMoves[0] !== 9) ||
              (pOneMoves[0] === 5 &&
                pOneMoves[1] === 7 &&
                pTwoMoves[0] === 3) ||
              (pOneMoves[0] === 5 && pOneMoves[1] === 3 && pTwoMoves[0] === 7)
            ) {
              $("#9")
                .hide()
                .html(arg2)
                .delay(1000)
                .fadeIn(500);
              pTwoMoves.push(9);
              tacArr.splice(tacArr.indexOf(9), 1);
            }
            $("#blueby").fadeOut(1000);
            $("#mater")
              .hide()
              .html("PLAYER 1")
              .fadeIn(1000);
            turnCount = turnCount + 2;
          }
        }
        if (turnCount === 4) {
          if (tacArr.includes(num)) {
            tacArr.splice(arraySpot, 1);
            $("#" + num)
              .hide()
              .html(arg1)
              .fadeIn(500);
            pOneMoves.push(num);
            winMove(pTwoMoves, tacArr);
            $("#mater").fadeOut(1000);
            $("#blueby")
              .hide()
              .html("MACHINE")
              .fadeIn(1000);
            if (moveSix !== 0 && tacArr.includes(moveSix) === true) {
              $("#" + moveSix)
                .hide()
                .html(arg2)
                .delay(1000)
                .fadeIn(500);
              $("#console")
                .hide()
                .html(
                  "<p>The robots have won!</p><p>Humanity is doomed!</p><p><small><small>Click to restart</small></small></p>"
                )
                .delay(2000)
                .fadeIn(1000);
              $("#console").on("click", function() {
                $("#console").fadeOut(1000);
                reset();
                selection = 0;
                if (arg1 === toe) {
                    versusAI(toe, ticTac);
                  } else {
                    versusAI(ticTac, toe);
                  }
              });
            } else {
              blockMove(pOneMoves, tacArr, pTwoMoves);
              if (moveSix !== 0 && tacArr.includes(moveSix) === true) {
                $("#" + moveSix)
                  .hide()
                  .html(arg2)
                  .delay(1000)
                  .fadeIn(500);
                tacArr.splice(tacArr.indexOf(moveSix), 1);
                pTwoMoves.push(moveSix);
                moveSix = 0;
              } else {
                var nextMove = Math.floor(Math.random() * tacArr.length);
                var newNum = tacArr[nextMove];
                var newSpot = tacArr.indexOf(newNum);
                tacArr.splice(newSpot, 1);
                $("#" + newNum)
                  .hide()
                  .html(arg2)
                  .delay(1000)
                  .fadeIn(500);
              }
            }
            $("#blueby").fadeOut(1000);
            $("#mater")
              .hide()
              .html("PLAYER 1")
              .fadeIn(1000);
            turnCount = turnCount + 2;
          }
        }
        if (turnCount === 6) {
          if (tacArr.includes(num)) {
            tacArr.splice(arraySpot, 1);
            $("#" + num)
              .hide()
              .html(arg1)
              .fadeIn(500);
            pOneMoves.push(num);
            winMoveII(pTwoMoves, tacArr);
            $("#mater").fadeOut(1000);
            $("#blueby")
              .hide()
              .html("MACHINE")
              .fadeIn(1000);
            if (moveSix !== 0 && tacArr.includes(moveSix) === true) {
              $("#" + moveSix)
                .hide()
                .html(arg2)
                .delay(1000)
                .fadeIn(500);
              $("#console")
                .hide()
                .html(
                  "<p>The robots have won!</p><p>Humanity is doomed!</p><p><small>Click to restart</small></p>"
                )
                .delay(2000)
                .fadeIn(1000);
              $("#console").on("click", function() {
                $("#console").fadeOut(1000);
                reset();
                selection = 0;
                if (arg1 === toe) {
                    versusAI(toe, ticTac);
                  } else {
                    versusAI(ticTac, toe);
                  }
              });
            } else {
              blockMoveII(pOneMoves, tacArr);
              if (moveSix !== 0 && tacArr.includes(moveSix) === true) {
                $("#" + moveSix)
                  .hide()
                  .html(arg2)
                  .delay(1000)
                  .fadeIn(500);
                tacArr.splice(tacArr.indexOf(moveSix), 1);
                pTwoMoves.push(moveSix);
                moveSix = 0;
              } else {
                var nextMove = Math.floor(Math.random() * tacArr.length);
                var newNum = tacArr[nextMove];
                var newSpot = tacArr.indexOf(newNum);
                tacArr.splice(newSpot, 1);
                $("#" + newNum)
                  .hide()
                  .html(arg2)
                  .delay(1000)
                  .fadeIn(500);
              }
            }
            $("#blueby").fadeOut(1000);
            $("#mater")
              .hide()
              .html("PLAYER 1")
              .fadeIn(1000);
            turnCount = turnCount + 2;
          }
        }
        if (turnCount === 8) {
          if (tacArr.includes(num)) {
            $("#" + num)
              .hide()
              .html(arg1)
              .fadeIn(500);
            tacArr.splice(arraySpot, 1);
            $("#console")
              .hide()
              .html(
                "<p>It's a draw!</p><p><small><small>(Click to reset)</small></small></p>"
              )
              .delay(2000)
              .fadeIn(1000);
            $("#mater").fadeOut(1000);
            $("#blueby").fadeOut(1000);
            $("#console").on("click", function() {
              $("#console").fadeOut(2000);
              reset();
              selection = 0;
              if (arg1 === toe) {
                    versusAI(toe, ticTac);
                  } else {
                    versusAI(ticTac, toe);
                  }
            });
          }
        }
      }
    } else if (turner === 0) {
      if (turnCount === 0) {
        $("#blueby")
          .hide()
          .html("MACHINE")
          .fadeIn(1000);
        $("#" + selection)
          .hide()
          .html(arg2)
          .delay(1000)
          .fadeIn(500);
        tacArr.splice(tacArr.indexOf(selection), 1);
        pTwoMoves.push(selection);
        turnCount++;
        $("#blueby").fadeOut(1000);
        $("#mater")
          .hide()
          .html("PLAYER 1")
          .fadeIn(1000);
      }
      if (turnCount === 1) {
        function arrayRevise(num) {
          var arraySpotter = tacArr.indexOf(num);
          if (turnCount === 1) {
            
            if (tacArr.includes(num)) {
              tacArr.splice(arraySpotter, 1);
              $("#" + num)
                .hide()
                .html(arg1)
                .fadeIn(500);
              pOneMoves.push(num);
              $("#mater").fadeOut(1000);
              $("#blueby")
                .hide()
                .html("MACHINE")
                .fadeIn(1000);
              if (
                (pTwoMoves[0] === 3 && pOneMoves[0] === 4) ||
                (pTwoMoves[0] === 3 && pOneMoves[0] === 8) ||
                (pTwoMoves[0] === 3 && pOneMoves[0] === 9) ||
                (pTwoMoves[0] === 7 && pOneMoves[0] === 2) ||
                (pTwoMoves[0] === 7 && pOneMoves[0] === 6) ||
                (pTwoMoves[0] === 7 && pOneMoves[0] === 8) ||
                (pTwoMoves[0] === 7 && pOneMoves[0] === 9) ||
                (pTwoMoves[0] === 5 && pOneMoves[0] === 4) ||
                (pTwoMoves[0] === 5 && pOneMoves[0] === 2) ||
                (pTwoMoves[0] === 9 && pOneMoves[0] === 5)
              ) {
                $("#1")
                  .hide()
                  .html(arg2)
                  .delay(1000)
                  .fadeIn(500);
                pTwoMoves.push(1);
                tacArr.splice(tacArr.indexOf(1), 1);
              } else if (
                (pTwoMoves[0] === 5 && pOneMoves[0] === 1) ||
                (pTwoMoves[0] === 5 && pOneMoves[0] === 3)
              ) {
                $("#2")
                  .hide()
                  .html(arg2)
                  .delay(1000)
                  .fadeIn(500);
                pTwoMoves.push(2);
                tacArr.splice(tacArr.indexOf(2), 1);
              } else if (
                (pTwoMoves[0] === 1) & (pOneMoves[0] === 4) ||
                (pTwoMoves[0] === 1 && pOneMoves[0] === 7) ||
                (pTwoMoves[0] === 1 && pOneMoves[0] === 8) ||
                (pTwoMoves[0] === 1 && pOneMoves[0] === 9) ||
                (pTwoMoves[0] === 7 && pOneMoves[0] === 5) ||
                (pTwoMoves[0] === 9 && pOneMoves[0] === 1) ||
                (pTwoMoves[0] === 9 && pOneMoves[0] === 2) ||
                (pTwoMoves[0] === 9 && pOneMoves[0] === 7) ||
                (pTwoMoves[0] === 9 && pOneMoves[0] === 8)
              ) {
                $("#3")
                  .hide()
                  .html(arg2)
                  .delay(1000)
                  .fadeIn(500);
                pTwoMoves.push(3);
                tacArr.splice(tacArr.indexOf(3), 1);
              } else if (
                (pTwoMoves[0] === 1 && pOneMoves[0] === 2) ||
                (pTwoMoves[0] === 1 && pOneMoves[0] === 3) ||
                (pTwoMoves[0] === 1 && pOneMoves[0] === 7) ||
                (pTwoMoves[0] === 7 && pOneMoves[0] === 1) ||
                (pTwoMoves[0] === 3 && pOneMoves[0] === 8) ||
                (pTwoMoves[0] === 3 && pOneMoves[0] === 5) ||
                (pTwoMoves[0] === 9 && pOneMoves[0] === 3) ||
                (pTwoMoves[0] === 9 && pOneMoves[0] === 4) ||
                (pTwoMoves[0] === 9 && pOneMoves[0] === 6)
              ) {
                $("#7")
                  .hide()
                  .html(arg2)
                  .delay(1000)
                  .fadeIn(500);
                pTwoMoves.push(7);
                tacArr.splice(tacArr.indexOf(7), 1);
              } else if (
                (pTwoMoves[0] === 5 && pOneMoves[0] === 7) ||
                (pTwoMoves[0] === 5 && pOneMoves[0] === 9)
              ) {
                $("#8")
                  .hide()
                  .html(arg2)
                  .delay(1000)
                  .fadeIn(500);
                pTwoMoves.push(8);
                tacArr.splice(tacArr.indexOf(8), 1);
              } else if (
                (pTwoMoves[0] === 1 && pOneMoves[0] === 5) ||
                (pTwoMoves[0] === 3 && pOneMoves[0] === 2) ||
                (pTwoMoves[0] === 3 && pOneMoves[0] === 6) ||
                (pTwoMoves[0] === 3 && pOneMoves[0] === 7) ||
                (pTwoMoves[0] === 7 && pOneMoves[0] === 3) ||
                (pTwoMoves[0] === 7 && pOneMoves[0] === 4) ||
                (pTwoMoves[0] === 5 && pOneMoves[0] === 6) ||
                (pTwoMoves[0] === 5 && pOneMoves[0] === 8)
              ) {
                $("#9")
                  .hide()
                  .html(arg2)
                  .delay(1000)
                  .fadeIn(500);
                pTwoMoves.push(9);
                tacArr.splice(tacArr.indexOf(9), 1);
              }
              $("#blueby").fadeOut(1000);
              $("#mater")
                .hide()
                .html("PLAYER 1")
                .fadeIn(1000);
              turnCount = turnCount + 2;
            }
          } else if (turnCount === 3) {
            if (tacArr.includes(num)) {
              tacArr.splice(arraySpotter, 1);
              $("#" + num)
                .hide()
                .html(arg1)
                .fadeIn(500);
              pOneMoves.push(num);
              $("#mater").fadeOut(1000);
              $("#blueby")
                .hide()
                .html("MACHINE")
                .fadeIn(1000);
              winMovePC1(pTwoMoves, tacArr);
              if (moveSix !== 0 && tacArr.includes(moveSix)) {
                $("#" + moveSix)
                  .hide()
                  .html(arg2)
                  .delay(1000)
                  .fadeIn(500);
                $("#console")
                  .hide()
                  .html(
                    "<p>The robots have won!</p><p>Humanity is doomed!</p><p><small><small>Click to restart</small></small></p>"
                  )
                  .delay(2000)
                  .fadeIn(1000);
                $("#console").on("click", function() {
                  $("#console").fadeOut(1000);
                  
                  reset();
                  selection = 0;
                  if (arg1 === toe) {
                    versusAI(toe, ticTac);
                  } else {
                    versusAI(ticTac, toe);
                  }
                });
              } else {
                blockMovePC1(pOneMoves, tacArr);
                if (moveSix !== 0 && tacArr.includes(moveSix) === true) {
                  $("#" + moveSix)
                    .hide()
                    .html(arg2)
                    .delay(1000)
                    .fadeIn(500);
                  tacArr.splice(tacArr.indexOf(moveSix), 1);
                  pTwoMoves.push(moveSix);
                  moveSix = 0;
                } else {
                  var nextMove = Math.floor(Math.random() * tacArr.length);
                  var newNum = tacArr[nextMove];
                  var newSpot = tacArr.indexOf(newNum);
                  tacArr.splice(newSpot, 1);
                  $("#" + newNum)
                    .hide()
                    .html(arg2)
                    .delay(1000)
                    .fadeIn(500);
                }
              }
              $("#blueby").fadeOut(1000);
              $("#mater")
                .hide()
                .html("PLAYER 1")
                .fadeIn(1000);
              turnCount = turnCount + 2;
            }
          } else if (turnCount === 5) {
            if (tacArr.includes(num)) {
              tacArr.splice(arraySpotter, 1);
              $("#" + num)
                .hide()
                .html(arg1)
                .fadeIn(500);
              pOneMoves.push(num);
              winMoveIIPC1(pTwoMoves, tacArr);
              $("#mater").fadeOut(1000);
              $("#blueby")
                .hide()
                .html("MACHINE")
                .fadeIn(1000);
              if (moveSix !== 0 && tacArr.includes(moveSix) === true) {
                $("#" + moveSix)
                  .hide()
                  .html(arg2)
                  .delay(1000)
                  .fadeIn(500);
                $("#console")
                  .hide()
                  .html(
                    "<p>The robots have won!</p><p>Humanity is doomed!</p><p><small>Click to restart</small></p>"
                  )
                  .delay(2000)
                  .fadeIn(1000);
                $("#console").on("click", function() {
                  $("#console").fadeOut(1000);
                  reset();
                  selection = 0;
                  if (arg1 === toe) {
                    versusAI(toe, ticTac);
                  } else {
                    versusAI(ticTac, toe);
                  }
                });
              } else {
                blockMoveIIPC1(pOneMoves, tacArr);
                if (moveSix !== 0 && tacArr.includes(moveSix) === true) {
                  $("#" + moveSix)
                    .hide()
                    .html(arg2)
                    .delay(1000)
                    .fadeIn(500);
                  tacArr.splice(tacArr.indexOf(moveSix), 1);
                  pTwoMoves.push(moveSix);
                  moveSix = 0;
                } else {
                  var nextMove = Math.floor(Math.random() * tacArr.length);
                  var newNum = tacArr[nextMove];
                  var newSpot = tacArr.indexOf(newNum);
                  tacArr.splice(newSpot, 1);
                  $("#" + newNum)
                    .hide()
                    .html(arg2)
                    .delay(1000)
                    .fadeIn(500);
                }
              }
              $("#blueby").fadeOut(1000);
              $("#mater")
                .hide()
                .html("PLAYER 1")
                .fadeIn(1000);
              turnCount = turnCount + 2;
            }
          } else if (turnCount === 7) {
            if (tacArr.includes(num)) {
              tacArr.splice(arraySpotter, 1);
              $("#" + num)
                .hide()
                .html(arg1)
                .fadeIn(500);
              pOneMoves.push(num);
              $("#mater").fadeOut(1000);
              $("#blueby")
                .hide()
                .html("MACHINE")
                .fadeIn(1000);
              $("#" + tacArr[0])
                .hide()
                .html(arg2)
                .fadeIn(500);
              pTwoMoves.push(tacArr[0]);
              finalPCMove(pTwoMoves);
              if (finalMoveWin === true) {
                $("#console")
                  .hide()
                  .html(
                    "<p>The robots have won!</p><p>Humanity is doomed!</p><p><small>Click to restart</small></p>"
                  )
                  .delay(2000)
                  .fadeIn(1000);
                $("#console").on("click", function() {
                  $("#console").fadeOut(1000);
                 
                  reset();
                  selection = 0;
                  finalMoveWin = false;
                  if (arg1 === toe) {
                    versusAI(toe, ticTac);
                  } else {
                    versusAI(ticTac, toe);
                  }
                });
              } else {
                $("#console")
                  .hide()
                  .html(
                    "<p>It's a draw!</p><p><small><small>(Click to reset)</small></small></p>"
                  )
                  .delay(2000)
                  .fadeIn(1000);
                  $("#console").on("click", function() {
                    $("#console").fadeOut(2000);
                    $("#mater").fadeOut(1000);
                    $("#blueby").fadeOut(1000);  

                    reset();
                    selection = 0;
                    if (arg1 === toe) {
                      versusAI(toe, ticTac);
                    } else {
                      versusAI(ticTac, toe);
                    }
                });
              }
            }
          }
        }
      }
    }
    $(".one").on("click", function() {
      if (turner === 1) {
        arrayCheck(1);
      } else {
        arrayRevise(1);
      }
    });
    $(".two").on("click", function() {
      if (turner === 1) {
        arrayCheck(2);
      } else {
        arrayRevise(2);
      }
    });
    $(".three").on("click", function() {
      if (turner === 1) {
        arrayCheck(3);
      } else {
        arrayRevise(3);
      }
    });
    $(".four").on("click", function() {
      if (turner === 1) {
        arrayCheck(4);
      } else {
        arrayRevise(4);
      }
    });
    $(".five").on("click", function() {
      if (turner === 1) {
        arrayCheck(5);
      } else {
        arrayRevise(5);
      }
    });
    $(".six").on("click", function() {
      if (turner === 1) {
        arrayCheck(6);
      } else {
        arrayRevise(6);
      }
    });
    $(".seven").on("click", function() {
      if (turner === 1) {
        arrayCheck(7);
      } else {
        arrayRevise(7);
      }
    });
    $(".eight").on("click", function() {
      if (turner === 1) {
        arrayCheck(8);
      } else {
        arrayRevise(8);
      }
    });
    $(".nine").on("click", function() {
      if (turner === 1) {
        arrayCheck(9);
      } else {
        arrayRevise(9);
      }
    });
  }
  $("#twoPlayer").on("click", function() {
    $("#console").fadeOut(500);
    $("#console")
      .hide()
      .html(gamePieceChoose)
      .fadeIn(500);
    $("#ticPick").on("click", function() {
      $("#console").fadeOut(1000);
      versusTwo(ticTac, toe);
    });
    $("#toePick").on("click", function() {
      $("#console").fadeOut(1000);
      versusTwo(toe, ticTac);
    });
  });
  $("#compGame").on("click", function() {
    $("#console").fadeOut(500);
    $("#console")
      .hide()
      .html(gamePieceChoose)
      .fadeIn(500);

    $("#ticPick").on("click", function() {
      $("#console").fadeOut(1000);
      versusAI(ticTac, toe);
    });
    $("#toePick").on("click", function() {
      $("#console").fadeOut(1000);
      versusAI(toe, ticTac);
    });
  });
});