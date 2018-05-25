$(document).ready(function() {


// Add jQuery here


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function scrollTopFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

(function($) {
$.fn.clickToggle = function(func1, func2) {
  var funcs = [func1, func2];
  this.data('toggleclicked', 0);
  this.click(function() {
      var data = $(this).data();
      var tc = data.toggleclicked;
      $.proxy(funcs[tc], this)();
      data.toggleclicked = (tc + 1) % 2;
  });
  return this;
};
}(jQuery));



















  });
