// Smooth scroll Scripts for home page
$(document).ready(function() {
  
  $("#myTopnav a").click(function(e) {
    var targetHref = $(this).attr("href");

    $("html, body").animate(
      {
        scrollTop: $(targetHref).offset().top
      },
      500
    );

    e.preventDefault();
  });

  // Smooth scroll Scripts for projects page
  $("#navbar li a").click(function(e) {
    var targetHref = $(this).attr("href");

    $("html, body").animate(
      {
        scrollTop: $(targetHref).offset().top
      },
      500
    );

    e.preventDefault();
  });

  // Smooth scroll Scripts for home button page
  $("#home").click(function(e) {
    var targetHref = $(this).attr("href");

    $("html, body").animate(
      {
        scrollTop: $(targetHref).offset().top
      },
      500
    );

    e.preventDefault();
  });

  // Home button fading in
  $("#home1").css("display", "none");
  $("#home1").fadeIn(500);
  
});


