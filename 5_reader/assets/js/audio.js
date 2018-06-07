$(document).ready(function() {

  var audioHomer = document.createElement('audio');
  audioHomer.setAttribute('src', 'https://rawgit.com/Seran95/Seran95.github.io/master/5_reader/assets/audio/h2.mp3');
  $.get();
  audioHomer.addEventListener("load", function() {
    audioHomer.play();
  }, true);

  var audioFILENAME2 = document.createElement('audio');
  audioFILENAME2.setAttribute('src', 'https://rawgit.com/Seran95/Seran95.github.io/master/5_reader/assets/js/._homernofunction.mp3');
  $.get();
  audioFILENAME2.addEventListener("load", function() {
    audioFILENAME2.play();
  }, true);

  var audioFilename3 = document.createElement('audio');
  audioFilename3.setAttribute('src', 'https://rawgit.com/Seran95/Seran95.github.io/master/5_reader/assets/audio/h2.mp3');
  $.get();
  audioFilename3.addEventListener("load", function() {
    audioFilename3.play();
  }, true);







  $('.play_homer').click(function() {
    audioHomer.play();
  });

  $('.play_audioFILENAME2').click(function() {
    audioFILENAME2.play();
  });

  $('.play_homer333').click(function() {
    audioFILENAME3.play();
  });




});
