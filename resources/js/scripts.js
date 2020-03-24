$(document).ready(function() {
  // Sticky navigation
  new Waypoint({
    element: document.getElementById("features"),
    handler: function(direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    offset: 55
  });

  /* ------ Navigation scroll ------*/
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top - 40
            },
            1000,
            function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });

  /* ------ Animations on scroll ------*/
  new Waypoint({
    element: $(".js--wp-1"),
    handler: function(direction) {
      $(".js--wp-1").addClass("animated fadeIn");
    },
    offset: "50%"
  });

  new Waypoint({
    element: $(".js--wp-2"),
    handler: function(direction) {
      $(".js--wp-2").addClass("animated fadeInUp");
    },
    offset: "50%"
  });

  new Waypoint({
    element: $(".js--wp-3"),
    handler: function(direction) {
      $(".js--wp-3").addClass("animated fadeIn");
    },
    offset: "50%"
  });

  new Waypoint({
    element: $(".js--wp-4"),
    handler: function(direction) {
      $(".js--wp-4").addClass("animated pulse");
    },
    offset: "50%"
  });
});
