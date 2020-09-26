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

async function showComments() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments?postId=1"
    );
    const commentsArray = await response.json();
    console.log(commentsArray);
    const commentContainer = $(".comments-container");

    for (let i = 1; i <= 3; i++) {
      const comment = commentsArray[i].body;
      commentContainer.append(`
    <div class=comment id=comment${i}>
      <blockquote>
        ${comment}
      </blockquote>
    </div>`);
    }
  } catch (err) {
    console.log(err);
  }
  showCommentsAuthor();
}

async function showCommentsAuthor() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const usersArray = await response.json();

    for (let i = 1; i <= 3; i++) {
      const name = usersArray[i].name;
      $(`#comment${i}`).append(
        `<cite
        ><img
          src="./resources/img/customer-${i}.jpg"
          alt="customer ${i} photo"
        />${name}</cite
      >`
      );
    }
  } catch (err) {
    console.log(err);
  }
}

showComments();

/* <div class=comment>
<blockquote>
  Omnifood is just awesome! I just launched a startup which leaves me
  with no time for cooking, so Omnifood is a life-saver. Now that I
  got used to it, I couldn't live without my daily meals!
  <cite
    ><img
      src="./resources/img/customer-1.jpg"
      alt="customer 1 photo"
    />Alberto Duncan</cite
  >
</blockquote>
</div> */

// comments-container
