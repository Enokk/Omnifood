$(document).ready(function() {
  new Waypoint({
    element: document.getElementsByClassName("js--section-features"),
    handler: function(direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    offset: 55
  });
});
