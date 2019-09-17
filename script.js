// Smooth scroll Scripts
$(document).ready(function() {
  $("#navbar li a").click(function(e) {
    var targetHref = $(this).attr("href");

    $("html, body").animate(
      {
        scrollTop: $(targetHref).offset().top
      },
      1000
    );

    e.preventDefault();
  });

  $("#home").click(function(e) {
    var targetHref = $(this).attr("href");

    $("html, body").animate(
      {
        scrollTop: $(targetHref).offset().top
      },
      1000
    );

    e.preventDefault();
  });

  // Home button fading in
  $("#home1").css("display", "none");
  $("#home1").fadeIn(1000);
});

// scroll to top

//Get the button:
mybutton = document.getElementById("scroll");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
