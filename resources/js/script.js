$(document).ready(function () {
  // For the sticky navigation
  $(".js--section-features").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    { offset: "60px;" }
  );

  $(".js--scroll-to-start").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-features").offset().top },
      1000
    );
  });

  $(".js--scroll-to-plans").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-plans").offset().top },
      1000
    );
  });

  $(".js--scroll-to-steps").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-steps").offset().top },
      1000
    );
  });

  $(".js--scroll-to-cities").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-cities").offset().top },
      1000
    );
  });
});
