$("document").ready(function(){
  $("#initiateSearch").on("click", function(){
    var wikiSearch = $("#wikiSearch").val();
    var address = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&errorformat=html&search=" + wikiSearch + "&profile=fuzzy&suggest=1&warningsaserror=1&callback=?&utf8=1";
    $.ajax( {
    url: address,
    type: 'GET',
    contentType: "application/json; charset=utf-8",
    async: false,
    dataType: 'json',
    headers: { 'Api-User-Agent': 'Example/1.0' },
    success: function(data, status, jqXHR) {
      console.log(data); 
      
      $(".well").remove();
      for (i=0; i<data[1].length; i++) {
        $("#spacer").slideUp(800, "swing");
        $("#results" + i).html('<div class="well"><h3><a href="' + data[3][i] + '" target="_blank">' + data[1][i] + '</a></h3><p>' + data[2][i] + '<a href="' + data[3][i] + '" target="_blank">\ (See More\)</a></p></div>');
      }
      $("#wikiSearch").val('');
    }
    })
    .done(function(){
      console.log("success");
    })
    .fail (function(){
      console.log("error");
    })
    .always(function (){
      console.log("complete");
    });
} );
  $("#wikiSearch").keypress(function(e){
    if (e.which == 13) {
      $("#initiateSearch").click();
    }
  });
   //Tried using this to get the an autocomplete function, but it didn't work.  This feature was in the Zipline video only, and not in the User Stories published on the page or in the example project, so I am leaving it out.  
  /*$("#wikiSearch").autocomplete({
    source: function(request, response) {
      var wikiSearch = $("#wikiSearch").val();
      $.ajax({
        url: "http://en.wikipedia.org/w/api.php",
        dataType: "jsonp",
        data: {
          'action': "opensearch",
          'format': "json",
          'search': wikiSearch.term
        },
        success: function(data){
          response(data[1]);
        }
      });
    }
  });*/
  });
//Another script that did nothing!
/*function youCompleteMe(data){
    document.getElementById('complete').innerHTML = data;
  }
  var myScript = '';
  document.getElementById('wikiSearch').onkeyup = function(){
    var stuff_in_box = document.getElementById('wikisearch').value;
    myScript = document.createElement('script');
    myScript.src = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&errorformat=html&profile=fuzzy&suggest=1&warningsaserror=1&callback=youCompleteMe&utf8=1&search='+stuff_in_box;
    document.body.appendChild(myScript);
    console.log(myScript);
  };*/