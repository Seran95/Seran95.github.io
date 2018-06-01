$(document).ready(function() {

  var audioHomer = document.createElement('audio');
  audioHomer.setAttribute('src', './bell.mp3');
  $.get();
  audioHomer.addEventListener("load", function() {
    audioHomer.play();
  }, true);






$('.play_Homer').clickToggle(function() {
audioHomer.play();
},
function() {
audioHomer.pause();
});










});
