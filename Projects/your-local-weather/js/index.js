 $(document).ready (function () {
var destino = document.getElementById("celsiusbox");
var destinoTwo = document.getElementById("fahrenheitbox");
var destinoThree = document.getElementById("windspeedbox");
var destinoFour = document.getElementById("conditions");
var destinoFive = document.getElementById("outside");
var destinoSix = document.getElementById("humid");
var myRequest = new XMLHttpRequest();

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var gotLatitude = (position.coords.latitude);
      var gotLongitude = (position.coords.longitude);
      myRequest.open('GET', 'https://fcc-weather-api.glitch.me/api/current?lat='+gotLatitude+'&lon='+gotLongitude);
      myRequest.onload = function (){
        var myData = JSON.parse(myRequest.responseText);
                renderTempF(myData);
                renderWind(myData);
                renderCity(myData);
                renderConditions(myData);
                renderHumidity(myData);
                changeBG(myData);
        
};

  $("#cBox").on("click", function() {
    $(this).css("background-color", "rgba(0,0,0,0.2)");
    $("#fBox").css("background-color", "rgba(0,0,0,0)");
    var gotLatitude = Math.round(position.coords.latitude);
    var gotLongitude = Math.round(position.coords.longitude);
    $.getJSON('https://fcc-weather-api.glitch.me/api/current?lat='+gotLatitude+'&lon='+gotLongitude, function(tempData){
      $("#temp").text(Math.round(tempData.main['temp']));
      
    });
  });
  $("#fBox").on("click", function() {
    $(this).css("background-color", "rgba(0,0,0,0.2)");
    $("#cBox").css("background-color", "rgba(0,0,0,0)");
    var gotLatitude = Math.round(position.coords.latitude);
    var gotLongitude = Math.round(position.coords.longitude);
    $.getJSON('https://fcc-weather-api.glitch.me/api/current?lat='+gotLatitude+'&lon='+gotLongitude, function(tempData){
      $("#temp").text(Math.round(tempData.main['temp'] * (9/5)) + 32);
      
    });
      });
  
     
myRequest.send();
    });
};
                                             
function renderTemp(data){
  var newString = "";
    newString +=  '<h1 id="temp">' + Math.round(data.main['temp']) + '</h1>';
  destinoTwo.insertAdjacentHTML('beforeend', newString);
};
function renderTempF(data){
  var celsiusToF = Math.round((data.main['temp'] * (9/5)) + 32);
  var newString = "";
    newString += '<h1 id="temp">' + celsiusToF + '</h1>';
  destinoTwo.insertAdjacentHTML('beforeend', newString);
};
function renderWind(data){
  var windSpeed = data.wind['speed'];
  var newString = "";
  var direction = data.wind['deg'];
  var card = "";
      if (direction > 348.75 && direction <= 11.25){
      var card = "N";
    } else if (direction > 11.25 && direction <= 33.75){
      var card = "NNE";
    } else if (direction > 33.75 && direction <= 56.25){
      var card = "NE";
    } else if (direction > 56.25 && direction <= 78.75){
      var card = "ENE";
    } else if (direction > 78.75 && direction <= 101.25){
      var card = "E";
    } else if (direction > 101.25 && direction <= 123.75){
      var card = "ESE";
    } else if (direction > 123.75 && direction <= 146.25){
      var card = "SE";
    } else if (direction > 146.25 && direction <= 168.75){
      var card = "SSE";
    } else if (direction > 168.75 && direction <= 191.25){
      var card = "S";
    } else if (direction > 191.25 && direction <= 213.75){
      var card = "SSW";
    } else if (direction > 213.75 && direction <= 236.25){
      var card = "SW";
    } else if (direction > 236.25 && direction <= 258.75){
      var card = "WSW";
    } else if (direction > 258.75 && direction <= 281.25){
      var card = "W";
    } else if (direction > 281.25 && direction <= 303.75){
      var card = "WNW";
    } else if (direction > 303.75 && direction <= 326.25){
      var card = "NW";
    } else if (direction > 326.25 && direction <= 348.75){
      var card = "NNW";
    }
     newString += card + ' at ' + (Math.round(1.152 * data.wind['speed'])) + ' mph';
  destinoThree.insertAdjacentHTML('beforeend', newString);
};
function renderCity(data){
  var newString = "";
     newString +=  data.name + ' Weather';
  destinoFour.insertAdjacentHTML('beforeend', newString);
};
function renderConditions(data){
  var newImg = "";
    newImg += '<img src="' + data.weather[0].icon + '"></img><br>' + data.weather[0].main;
  destinoFive.insertAdjacentHTML('beforeend', newImg);
};
function renderHumidity(data){
  var newString = "";
  newString += data.main['humidity'] + '<br>';
  destinoSix.insertAdjacentHTML('beforeend', newString);
};
function changeBG(data){
    if (data.weather[0].main === "Clear" && data.main['temp'] > 13 && data.main['temp'] < 30) {
      $("body").css("background-image", "url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/A_nice_sunny_day_in_Spring._%288922648980%29.jpg/1280px-A_nice_sunny_day_in_Spring._%288922648980%29.jpg)");
    } else if (data.weather[0].main === "Clear" && data.main['temp'] >= 30 ){
      $("body").css("background-image", "url(https://upload.wikimedia.org/wikipedia/commons/c/cc/Jordanian_desert_landscape_%2812464866503%29.jpg)");
    } else if (data.weather[0].main === "Clear" && data.main['temp'] <= 13){
      $("body").css("background-image", "url(http://www.publicdomainpictures.net/pictures/40000/velka/sunny-winter-day-2.jpg)")         
    } else if (data.weather[0].main === "Snow") {
      $("body").css("background-image", "url(https://c.pxhere.com/photos/7f/2c/peak_forest_snow_cloud_cloudy-1267425.jpg)")
    } else if (data.weather[0].main === "Clouds") {
      $("body").css("background-image", "url(https://upload.wikimedia.org/wikipedia/commons/6/6d/Downtown_Vancouver_cloudy_morning.jpg)")
    } else if (data.weather[0].main === "Rain") {
      $("body").css("background-image", "url(https://upload.wikimedia.org/wikipedia/commons/6/6d/Downtown_Vancouver_cloudy_morning.jpg)")
    } else if (data.weather[0].main === "Haze") {
      $("body").css("background-image", "url(https://static.pexels.com/photos/5106/forest-trees-fog-foggy.jpg)")
    } else {
      $("body").css("background-image", "url(https://upload.wikimedia.org/wikipedia/commons/c/c2/Las_Vegas_Lightning_Storm.jpg)")
    }
  };
});