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
});
