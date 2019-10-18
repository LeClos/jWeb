// Smooth scroll Scripts
$(document).ready(function() {
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


