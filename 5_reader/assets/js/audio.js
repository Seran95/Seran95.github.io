$(document).ready(function() {

  var audioHomer = document.createElement('audio');
  audioHomer.setAttribute('src', './bell.mp3');
  $.get();
  audioHomer.addEventListener("load", function() {
    audioHomer.play();
  }, true);


  var audioLisa = document.createElement('audio');
  audioLisa.setAttribute('src', 'http://www.soundjay.com/misc/sounds/bell-ringing-01.mp3');
  $.get();
  audioLisa.addEventListener("load", function() {
    audioLisa.play();
  }, true);





$('.play_homer').clickToggle(function() {
audioHomer.play();
},
function() {
audioHomer.pause();
});









});
