$(document).ready(function () {
  // For the sticky nav-bar
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

  // Nvigation scroll
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

  // Mobile nav
  $(".js--nav-icon").click(function () {
    const nav = $(".js--main-nav");
    nav.slideToggle(200);

    const icon = $("#menu");

    if (icon.attr("name") === "menu") {
      $(icon.removeAttr("name"));
      $(icon.attr("name", "close"));
    } else {
      $(icon.removeAttr("name"));
      $(icon.attr("name", "menu"));
    }
  });

  // Animations on scroll
  $(".js--wp-fadeIn").waypoint(
    function (direction) {
      $(".js--wp-fadeIn").addClass("animate__animated animate__fadeIn");
    },
    {
      offset: "50%",
    }
  );

  $(".js--wp-fadeInUp").waypoint(
    function (direction) {
      $(".js--wp-fadeInUp").addClass("animate__animated animate__fadeInUp");
    },
    {
      offset: "50%",
    }
  );

  $(".js--wp-fadeInRightBig").waypoint(
    function (direction) {
      $(".js--wp-fadeInRightBig").addClass(
        "animate__animated animate__fadeInRight"
      );
    },
    {
      offset: "60%",
    }
  );

  $(".js--wp-pulse").waypoint(
    function (direction) {
      $(".js--wp-pulse").addClass("animate__animated animate__pulse");
    },
    {
      offset: "50%",
    }
  );
});
