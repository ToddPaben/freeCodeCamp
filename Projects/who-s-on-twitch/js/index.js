$(document).ready(function() {
  var channels = [
    "ESL_SC2",
    "OgamingSC2",
    "cretetion",
    "freecodecamp",
    "storbeck",
    "habathcx",
    "RobotCaleb",
    "noobs2ninjas"
  ];
  var logos = [
    "https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-profile_image-d6db9488cec97125-70x70.jpeg",
    "https://static-cdn.jtvnw.net/jtv_user_pictures/ogamingsc2-profile_image-9021dccf9399929e-70x70.jpeg",
    "https://static-cdn.jtvnw.net/jtv_user_pictures/cretetion-profile_image-12bae34d9765f222-70x70.jpeg",
    "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_image-d9514f2df0962329-70x70.png",
    "https://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_70x70.png",
    "https://static-cdn.jtvnw.net/jtv_user_pictures/habathcx-profile_image-d75385dbe4f42a66-70x70.jpeg",
    "https://static-cdn.jtvnw.net/jtv_user_pictures/robotcaleb-profile_image-9422645f2f0f093c-70x70.png",
    "https://static-cdn.jtvnw.net/jtv_user_pictures/noobs2ninjas-profile_image-34707f847a73d934-70x70.png"
  ];
  reSet();
  function reSet() {
    $.getJSON(
      "https://wind-bow.gomix.me/twitch-api/streams/" +
        channels[0] +
        "?callback=?",
      function(data) {
        if (data.stream !== null) {
          $("#ch0")
            .html(
              '<div class="row linker removable"><div class="col-xs-2"><img src="' +
                data.stream.channel.logo +
                '" style="width:50px"></img></div><div class="col-xs-7"><a class="linker" href="' +
                data.stream.channel.url +
                '" target="_blank"><strong>' +
                data.stream.channel.display_name +
                "</strong></a><br>" +
                data.stream.game +
                ": " +
                data.stream.channel.status +
                '</div><div class="col-xs-3"><span class="glyphicon glyphicon-facetime-video" style="color:red"></span><small> LIVE</small></div></div>'
            )
            .addClass("channel");
        } else {
          $("#ch0")
            .html(
              '<div class="row linker removable"><div class="col-xs-2"><img src="' +
                logos[0] +
                '" style="width:50px"></img></div><div class="col-xs-7"><br><strong><a class="linker" href="https://www.twitch.tv/' +
                channels[0] +
                '" target="_blank">' +
                channels[0] +
                '</a></strong></div><div class="col-xs-3"><p>OFFLINE</p></div></div>'
            )
            .addClass("channel");
        }
      }
    );
    $.getJSON(
      "https://wind-bow.gomix.me/twitch-api/streams/" +
        channels[1] +
        "?callback=?",
      function(data) {
        if (data.stream !== null) {
          $("#ch1")
            .html(
              '<div class="row linker removable"><div class="col-xs-2"><img src="' +
                data.stream.channel.logo +
                '" style="width:50px"></img></div><div class="col-xs-7"><a class="linker" href="' +
                data.stream.channel.url +
                '" target="_blank"><strong>' +
                data.stream.channel.display_name +
                "</strong></a><br>" +
                data.stream.game +
                ": " +
                data.stream.channel.status +
                '</div><div class="col-xs-3"><span class="glyphicon glyphicon-facetime-video" style="color:red"></span><small> LIVE</small></div></div>'
            )
            .addClass("channel");
        } else {
          $("#ch1")
            .html(
              '<div class="row linker removable"><div class="col-xs-2"><img src="' +
                logos[1] +
                '" style="width:50px"></img></div><div class="col-xs-7"><br><strong><a class="linker" href="https://www.twitch.tv/' +
                channels[1] +
                '" target="_blank">' +
                channels[1] +
                '</a></strong></div><div class="col-xs-3"><p>OFFLINE</p></div></div>'
            )
            .addClass("channel");
        }
      }
    );
    $.getJSON(
      "https://wind-bow.gomix.me/twitch-api/streams/" +
        channels[2] +
        "?callback=?",
      function(data) {
        if (data.stream !== null) {
          $("#ch2")
            .html(
              '<div class="row linker removable"><div class="col-xs-2"><img src="' +
                data.stream.channel.logo +
                '" style="width:50px"></img></div><div class="col-xs-7"><a class="linker" href="' +
                data.stream.channel.url +
                '" target="_blank"><strong>' +
                data.stream.channel.display_name +
                "</strong></a><br>" +
                data.stream.game +
                ": " +
                data.stream.channel.status +
                '</div><div class="col-xs-3"><span class="glyphicon glyphicon-facetime-video" style="color:red"></span><small> LIVE</small></div></div>'
            )
            .addClass("channel");
        } else {
          $("#ch2")
            .html(
              '<div class="row linker removable"><div class="col-xs-2"><img src="' +
                logos[2] +
                '" style="width:50px"></img></div><div class="col-xs-7"><br><strong><a class="linker" href="https://www.twitch.tv/' +
                channels[2] +
                '" target="_blank">' +
                channels[2] +
                '</a></strong></div><div class="col-xs-3"><p>OFFLINE</p></div></div>'
            )
            .addClass("channel");
        }
      }
    );
    $.getJSON(
      "https://wind-bow.gomix.me/twitch-api/streams/" +
        channels[3] +
        "?callback=?",
      function(data) {
        if (data.stream !== null) {
          $("#ch3")
            .html(
              '<div class="row linker removable"><div class="col-xs-2"><img src="' +
                data.stream.channel.logo +
                '" style="width:50px"></img></div><div class="col-xs-7"><a class="linker" href="' +
                data.stream.channel.url +
                '" target="_blank"><strong>' +
                data.stream.channel.display_name +
                "</strong></a><br>" +
                data.stream.game +
                ": " +
                data.stream.channel.status +
                '</div><div class="col-xs-3"><span class="glyphicon glyphicon-facetime-video" style="color:red"></span><small> LIVE</small></div></div>'
            )
            .addClass("channel");
        } else {
          $("#ch3")
            .html(
              '<div class="row linker removable"><div class="col-xs-2"><img src="' +
                logos[3] +
                '" style="width:50px"></img></div><div class="col-xs-7"><br><strong><a class="linker" href="https://www.twitch.tv/' +
                channels[3] +
                '" target="_blank">' +
                channels[3] +
                '</a></strong></div><div class="col-xs-3"><p>OFFLINE</p></div></div>'
            )
            .addClass("channel");
        }
      }
    );
    $.getJSON(
      "https://wind-bow.gomix.me/twitch-api/streams/" +
        channels[4] +
        "?callback=?",
      function(data) {
        if (data.stream !== null) {
          $("#ch4")
            .html(
              '<div class="row linker removable"><div class="col-xs-2"><img src="' +
                data.stream.channel.logo +
                '" style="width:50px"></img></div><div class="col-xs-7"><a class="linker" href="' +
                data.stream.channel.url +
                '" target="_blank"><strong>' +
                data.stream.channel.display_name +
                "</strong></a><br>" +
                data.stream.game +
                ": " +
                data.stream.channel.status +
                '</div><div class="col-xs-3"><span class="glyphicon glyphicon-facetime-video" style="color:red"></span><small> LIVE</small></div></div>'
            )
            .addClass("channel");
        } else {
          $("#ch4")
            .html(
              '<div class="row linker removable"><div class="col-xs-2"><img src="' +
                logos[4] +
                '" style="width:50px"></img></div><div class="col-xs-7"><br><strong><a class="linker" href="https://www.twitch.tv/' +
                channels[4] +
                '" target="_blank">' +
                channels[4] +
                '</a></strong></div><div class="col-xs-3"><p>OFFLINE</p></div></div>'
            )
            .addClass("channel");
        }
      }
    );
    $.getJSON(
      "https://wind-bow.gomix.me/twitch-api/streams/" +
        channels[5] +
        "?callback=?",
      function(data) {
        if (data.stream !== null) {
          $("#ch5")
            .html(
              '<div class="row linker removable"><div class="col-xs-2"><img src="' +
                data.stream.channel.logo +
                '" style="width:50px"></img></div><div class="col-xs-7"><a class="linker" href="' +
                data.stream.channel.url +
                '" target="_blank"><strong>' +
                data.stream.channel.display_name +
                "</strong></a><br>" +
                data.stream.game +
                ": " +
                data.stream.channel.status +
                '</div><div class="col-xs-3"><span class="glyphicon glyphicon-facetime-video" style="color:red"></span><small> LIVE</small></div></div>'
            )
            .addClass("channel");
        } else {
          $("#ch5")
            .html(
              '<div class="row linker removable"><div class="col-xs-2"><img src="' +
                logos[5] +
                '" style="width:50px"></img></div><div class="col-xs-7"><br><strong><a class="linker" href="https://www.twitch.tv/' +
                channels[5] +
                '" target="_blank">' +
                channels[5] +
                '</a></strong></div><div class="col-xs-3"><p>OFFLINE</p></div></div>'
            )
            .addClass("channel");
        }
      }
    );
    $.getJSON(
      "https://wind-bow.gomix.me/twitch-api/streams/" +
        channels[6] +
        "?callback=?",
      function(data) {
        if (data.stream !== null) {
          $("#ch6")
            .html(
              '<div class="row linker removable"><div class="col-xs-2"><img src="' +
                data.stream.channel.logo +
                '" style="width:50px"></img></div><div class="col-xs-7"><a class="linker" href="' +
                data.stream.channel.url +
                '" target="_blank"><strong>' +
                data.stream.channel.display_name +
                "</strong></a><br>" +
                data.stream.game +
                ": " +
                data.stream.channel.status +
                '</div><div class="col-xs-3"><span class="glyphicon glyphicon-facetime-video" style="color:red"></span><small> LIVE</small></div></div>'
            )
            .addClass("channel");
        } else {
          $("#ch6")
            .html(
              '<div class="row linker removable"><div class="col-xs-2"><img src="' +
                logos[6] +
                '" style="width:50px"></img></div><div class="col-xs-7"><br><strong><a class="linker" href="https://www.twitch.tv/' +
                channels[6] +
                '" target="_blank">' +
                channels[6] +
                '</a></strong></div><div class="col-xs-3"><p>OFFLINE</p></div></div>'
            )
            .addClass("channel");
        }
      }
    );
    $.getJSON(
      "https://wind-bow.gomix.me/twitch-api/streams/" +
        channels[7] +
        "?callback=?",
      function(data) {
        if (data.stream !== null) {
          $("#ch7")
            .html(
              '<div class="row linker removable"><div class="col-xs-2"><img src="' +
                data.stream.channel.logo +
                '" style="width:50px"></img></div><div class="col-xs-7"><a class="linker" href="' +
                data.stream.channel.url +
                '" target="_blank"><strong>' +
                data.stream.channel.display_name +
                "</strong></a><br>" +
                data.stream.game +
                ": " +
                data.stream.channel.status +
                '</div><div class="col-xs-3"><span class="glyphicon glyphicon-facetime-video" style="color:red"></span><small> LIVE</small></div></div>'
            )
            .addClass("channel");
        } else {
          $("#ch7")
            .html(
              '<div class="row linker removable"><div class="col-xs-2"><img src="' +
                logos[7] +
                '" style="width:50px"></img></div><div class="col-xs-7"><br><strong><a class="linker" href="https://www.twitch.tv/' +
                channels[7] +
                '" target="_blank">' +
                channels[7] +
                '</a></strong></div><div class="col-xs-3"><p>OFFLINE</p></div></div>'
            )
            .addClass("channel");
        }
      }
    );
  }

  function live() {
    $.getJSON(
      "https://wind-bow.gomix.me/twitch-api/streams/" +
        channels[0] +
        "?callback=?",
      function(data) {
        if (data.stream !== null) {
          $("#ch0")
            .html(
              '<div class="row linker removable"><div class="col-xs-2"><img src="' +
                data.stream.channel.logo +
                '" style="width:50px"></img></div><div class="col-xs-7"><a class="linker" href="' +
                data.stream.channel.url +
                '" target="_blank"><strong>' +
                data.stream.channel.display_name +
                "</strong></a><br>" +
                data.stream.game +
                ": " +
                data.stream.channel.status +
                '</div><div class="col-xs-3"><span class="glyphicon glyphicon-facetime-video" style="color:red"></span><small> LIVE</small></div></div>'
            )
            .addClass("channel");
        } else {
          $("#ch0").html("");
        }
      }
    );
    $.getJSON(
      "https://wind-bow.gomix.me/twitch-api/streams/" +
        channels[1] +
        "?callback=?",
      function(data) {
        if (data.stream !== null) {
          $("#ch1")
            .html(
              '<div class="row linker removable"><div class="col-xs-2"><img src="' +
                data.stream.channel.logo +
                '" style="width:50px"></img></div><div class="col-xs-7"><a class="linker" href="' +
                data.stream.channel.url +
                '" target="_blank"><strong>' +
                data.stream.channel.display_name +
                "</strong></a><br>" +
                data.stream.game +
                ": " +
                data.stream.channel.status +
                '</div><div class="col-xs-3"><span class="glyphicon glyphicon-facetime-video" style="color:red"></span><small> LIVE</small></div></div>'
            )
            .addClass("channel");
        } else {
          $("#ch1").html("");
        }
      }
    );
    $.getJSON(
      "https://wind-bow.gomix.me/twitch-api/streams/" +
        channels[2] +
        "?callback=?",
      function(data) {
        if (data.stream !== null) {
          $("#ch2")
            .html(
              '<div class="row linker removable"><div class="col-xs-2"><img src="' +
                data.stream.channel.logo +
                '" style="width:50px"></img></div><div class="col-xs-7"><a class="linker" href="' +
                data.stream.channel.url +
                '" target="_blank"><strong>' +
                data.stream.channel.display_name +
                "</strong></a><br>" +
                data.stream.game +
                ": " +
                data.stream.channel.status +
                '</div><div class="col-xs-3"><span class="glyphicon glyphicon-facetime-video" style="color:red"></span><small> LIVE</small></div></div>'
            )
            .addClass("channel");
        } else {
          $("#ch2").html("");
        }
      }
    );
    $.getJSON(
      "https://wind-bow.gomix.me/twitch-api/streams/" +
        channels[3] +
        "?callback=?",
      function(data) {
        if (data.stream !== null) {
          $("#ch3")
            .html(
              '<div class="row linker removable"><div class="col-xs-2"><img src="' +
                data.stream.channel.logo +
                '" style="width:50px"></img></div><div class="col-xs-7"><a class="linker" href="' +
                data.stream.channel.url +
                '" target="_blank"><strong>' +
                data.stream.channel.display_name +
                "</strong></a><br>" +
                data.stream.game +
                ": " +
                data.stream.channel.status +
                '</div><div class="col-xs-3"><span class="glyphicon glyphicon-facetime-video" style="color:red"></span><small> LIVE</small></div></div>'
            )
            .addClass("channel");
        } else {
          $("#ch3").html("");
        }
      }
    );
    $.getJSON(
      "https://wind-bow.gomix.me/twitch-api/streams/" +
        channels[4] +
        "?callback=?",
      function(data) {
        if (data.stream !== null) {
          $("#ch4")
            .html(
              '<div class="row linker removable"><div class="col-xs-2"><img src="' +
                data.stream.channel.logo +
                '" style="width:50px"></img></div><div class="col-xs-7"><a class="linker" href="' +
                data.stream.channel.url +
                '" target="_blank"><strong>' +
                data.stream.channel.display_name +
                "</strong></a><br>" +
                data.stream.game +
                ": " +
                data.stream.channel.status +
                '</div><div class="col-xs-3"><span class="glyphicon glyphicon-facetime-video" style="color:red"></span><small> LIVE</small></div></div>'
            )
            .addClass("channel");
        } else {
          $("#ch4").html("");
        }
      }
    );
    $.getJSON(
      "https://wind-bow.gomix.me/twitch-api/streams/" +
        channels[5] +
        "?callback=?",
      function(data) {
        if (data.stream !== null) {
          $("#ch5")
            .html(
              '<div class="row linker removable"><div class="col-xs-2"><img src="' +
                data.stream.channel.logo +
                '" style="width:50px"></img></div><div class="col-xs-7"><a class="linker" href="' +
                data.stream.channel.url +
                '" target="_blank"><strong>' +
                data.stream.channel.display_name +
                "</strong></a><br>" +
                data.stream.game +
                ": " +
                data.stream.channel.status +
                '</div><div class="col-xs-3"><span class="glyphicon glyphicon-facetime-video" style="color:red"></span><small> LIVE</small></div></div>'
            )
            .addClass("channel");
        } else {
          $("#ch5").html("");
        }
      }
    );
    $.getJSON(
      "https://wind-bow.gomix.me/twitch-api/streams/" +
        channels[6] +
        "?callback=?",
      function(data) {
        if (data.stream !== null) {
          $("#ch6")
            .html(
              '<div class="row linker removable"><div class="col-xs-2"><img src="' +
                data.stream.channel.logo +
                '" style="width:50px"></img></div><div class="col-xs-7"><a class="linker" href="' +
                data.stream.channel.url +
                '" target="_blank"><strong>' +
                data.stream.channel.display_name +
                "</strong></a><br>" +
                data.stream.game +
                ": " +
                data.stream.channel.status +
                '</div><div class="col-xs-3"><span class="glyphicon glyphicon-facetime-video" style="color:red"></span><small> LIVE</small></div></div>'
            )
            .addClass("channel");
        } else {
          $("#ch6").html("");
        }
      }
    );
    $.getJSON(
      "https://wind-bow.gomix.me/twitch-api/streams/" +
        channels[7] +
        "?callback=?",
      function(data) {
        if (data.stream !== null) {
          $("#ch7")
            .html(
              '<div class="row linker removable"><div class="col-xs-2"><img src="' +
                data.stream.channel.logo +
                '" style="width:50px"></img></div><div class="col-xs-7"><a class="linker" href="' +
                data.stream.channel.url +
                '" target="_blank"><strong>' +
                data.stream.channel.display_name +
                "</strong></a><br>" +
                data.stream.game +
                ": " +
                data.stream.channel.status +
                '</div><div class="col-xs-3"><span class="glyphicon glyphicon-facetime-video" style="color:red"></span><small> LIVE</small></div></div>'
            )
            .addClass("channel");
        } else {
          $("#ch7").html("");
        }
      }
    );
  }

  function offline() {
    $.getJSON(
      "https://wind-bow.gomix.me/twitch-api/streams/" +
        channels[0] +
        "?callback=?",
      function(data) {
        if (data.stream !== null) {
          $("#ch0").html("");
        } else {
          $("#ch0")
            .html(
              '<div class="row linker removable"><div class="col-xs-2"><img src="' +
                logos[0] +
                '" style="width:50px"></img></div><div class="col-xs-7"><br><strong><a class="linker" href="https://www.twitch.tv/' +
                channels[0] +
                '" target="_blank">' +
                channels[0] +
                '</a></strong></div><div class="col-xs-3"><p>OFFLINE</p></div></div>'
            )
            .addClass("channel");
        }
      }
    );
    $.getJSON(
      "https://wind-bow.gomix.me/twitch-api/streams/" +
        channels[1] +
        "?callback=?",
      function(data) {
        if (data.stream !== null) {
          $("#ch1").html("");
        } else {
          $("#ch1")
            .html(
              '<div class="row linker removable"><div class="col-xs-2"><img src="' +
                logos[1] +
                '" style="width:50px"></img></div><div class="col-xs-7"><br><strong><a class="linker" href="https://www.twitch.tv/' +
                channels[1] +
                '" target="_blank">' +
                channels[1] +
                '</a></strong></div><div class="col-xs-3"><p>OFFLINE</p></div></div>'
            )
            .addClass("channel");
        }
      }
    );
    $.getJSON(
      "https://wind-bow.gomix.me/twitch-api/streams/" +
        channels[2] +
        "?callback=?",
      function(data) {
        if (data.stream !== null) {
          $("#ch2").html("");
        } else {
          $("#ch2")
            .html(
              '<div class="row linker removable"><div class="col-xs-2"><img src="' +
                logos[2] +
                '" style="width:50px"></img></div><div class="col-xs-7"><br><strong><a class="linker" href="https://www.twitch.tv/' +
                channels[2] +
                '" target="_blank">' +
                channels[2] +
                '</a></strong></div><div class="col-xs-3"><p>OFFLINE</p></div></div>'
            )
            .addClass("channel");
        }
      }
    );
    $.getJSON(
      "https://wind-bow.gomix.me/twitch-api/streams/" +
        channels[3] +
        "?callback=?",
      function(data) {
        if (data.stream !== null) {
          $("#ch3").html("");
        } else {
          $("#ch3")
            .html(
              '<div class="row linker removable"><div class="col-xs-2"><img src="' +
                logos[3] +
                '" style="width:50px"></img></div><div class="col-xs-7"><br><strong><a class="linker" href="https://www.twitch.tv/' +
                channels[3] +
                '" target="_blank">' +
                channels[3] +
                '</a></strong></div><div class="col-xs-3"><p>OFFLINE</p></div></div>'
            )
            .addClass("channel");
        }
      }
    );
    $.getJSON(
      "https://wind-bow.gomix.me/twitch-api/streams/" +
        channels[4] +
        "?callback=?",
      function(data) {
        if (data.stream !== null) {
          $("#ch4").html("");
        } else {
          $("#ch4")
            .html(
              '<div class="row linker removable"><div class="col-xs-2"><img src="' +
                logos[4] +
                '" style="width:50px"></img></div><div class="col-xs-7"><br><strong><a class="linker" href="https://www.twitch.tv/' +
                channels[4] +
                '" target="_blank">' +
                channels[4] +
                '</a></strong></div><div class="col-xs-3"><p>OFFLINE</p></div></div>'
            )
            .addClass("channel");
        }
      }
    );
    $.getJSON(
      "https://wind-bow.gomix.me/twitch-api/streams/" +
        channels[5] +
        "?callback=?",
      function(data) {
        if (data.stream !== null) {
          $("#ch5").html("");
        } else {
          $("#ch5")
            .html(
              '<div class="row linker removable"><div class="col-xs-2"><img src="' +
                logos[5] +
                '" style="width:50px"></img></div><div class="col-xs-7"><br><strong><a class="linker" href="https://www.twitch.tv/' +
                channels[5] +
                '" target="_blank">' +
                channels[5] +
                '</a></strong></div><div class="col-xs-3"><p>OFFLINE</p></div></div>'
            )
            .addClass("channel");
        }
      }
    );
    $.getJSON(
      "https://wind-bow.gomix.me/twitch-api/streams/" +
        channels[6] +
        "?callback=?",
      function(data) {
        if (data.stream !== null) {
          $("#ch6").html("");
        } else {
          $("#ch6")
            .html(
              '<div class="row linker removable"><div class="col-xs-2"><img src="' +
                logos[6] +
                '" style="width:50px"></img></div><div class="col-xs-7"><br><strong><a class="linker" href="https://www.twitch.tv/' +
                channels[6] +
                '" target="_blank">' +
                channels[6] +
                '</a></strong></div><div class="col-xs-3"><p>OFFLINE</p></div></div>'
            )
            .addClass("channel");
        }
      }
    );
    $.getJSON(
      "https://wind-bow.gomix.me/twitch-api/streams/" +
        channels[7] +
        "?callback=?",
      function(data) {
        if (data.stream !== null) {
          $("#ch7").html("");
        } else {
          $("#ch7")
            .html(
              '<div class="row linker removable"><div class="col-xs-2"><img src="' +
                logos[7] +
                '" style="width:50px"></img></div><div class="col-xs-7"><br><strong><a class="linker" href="https://www.twitch.tv/' +
                channels[7] +
                '" target="_blank">' +
                channels[7] +
                '</a></strong></div><div class="col-xs-3"><p>OFFLINE</p></div></div>'
            )
            .addClass("channel");
        }
      }
    );
  }

  $("#all").on("click", function() {
    $(".removable").remove();
    /*$("#all").addClass("redButton", "greenButton");
    $("#live").addClass("greenButton", "redButton");
    $("#offline").addClass("greenButton", "redButton");*/
    reSet();
  });
  $("#live").on("click", function() {
    $(".removable").remove();
    /*$("#all").switchClass("greenButton", "redButton");
    $("#live").switchClass("redButton", "greenButton");
    $("#offline").switchClass("greenButton", "redButton");*/
    live();
  });
  $("#offline").on("click", function() {
    $("#removable").remove();
    /*$("#all").switchClass("greenButton", "redButton");
    $("#live").switchClass("greenButton", "redButton");
    $("#offline").switchClass("redButton", "greenButton");*/
    offline();
  });
  //}
});