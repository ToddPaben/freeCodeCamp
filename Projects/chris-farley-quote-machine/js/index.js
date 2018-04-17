$(document).ready(function() {
  $("#farleybutton").on("click", function() {
    var randoQuo = Math.floor(Math.random() * 20);
    var quotes = [
      '"Hey everybody, it\'s Tony Robbins!"',
      '"Fat guy in a little coat!"',
      '"Sinner!"',
      '"I\'m like Jojo the idiot circus boy with his pretty new pet!"',
      '"I swear I\'ve seen a lot of things in my life, but that was....  awesome!"',
      "\"I'm loking!  I'm loking!\"",
      '"It\'s HERBIE Hancock!  Dur!"',
      "\"We're gonna show this world a thing or two!  We're gonna show...\"",
      '"A lot of people go to college for seven years!"',
      '"Richard!  Were you watching Spanktravision?"',
      '"Could\'ve done without that."',
      '"You better pray to the god of skinny punks that this wind doesn\'t pick up..."',
      '"I wish we\'d known each other...this was a little awkward."',
      '"Shut up, Richard!"',
      '"YOUR brain has a shell on it."',
      '"Richard!  What\'s happening!"',
      '"Your weapons are useless against them!"',
      '"Do you know where the weightroom is?"',
      '"Uggghhh!  I killed it!  I killed my sale!"',
      '"Brothers don\'t shake hands!  Brothers gotta hug!"'
    ];
    document.getElementById("quoteboard").innerHTML = quotes[randoQuo];
  });
});
function tweetIt() {
  var phrase = document.getElementById("quoteboard").innerText;
  var tweetUrl =
    "https://twitter.com/share?text=" +
    encodeURIComponent(phrase) +
    "." +
    "&url=" +
    "https://codepen.io/pabe/full/jGxWbo/" +
    "&hashtags=" +
    "TommyBoyQuotes";

  window.open(tweetUrl);
}