window.addEventListener("load", function (e) {
    // header navbar menu toggle
    $("header .activeBars").click(function () {
      $("header .activeMenuBars").slideToggle(1000);
    });
    // headerTitle
    $(".headerLogin button").click(function (e) {
        e.preventDefault();
        if ($(".headerLogin input").val() === "") {
          $(".errorMsg").show();
        } else {
          $(".errorMsg").hide();
        }
      });

    $("header .signUp").click(function () {
        $(".headerTitle").fadeIn();
        $(".headerTitle").css("display", "flex");
      });
    //   work
    $(".work .owl-carousel").owlCarousel({
        items: 3,
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        nav: true,
      });
    //   center
    $(".center .fa-play").click(function () {
        document.querySelector(".videoPlayer video").play();
        $(".center .videoPlayer").addClass("active");
        $(this).fadeOut();
      });
    
      $(".center .videoPlayer").mouseover(function () {
        if ($(this).hasClass("active")) {
          $(".center .fa-pause").fadeIn(); // block
          $(".center .fa-pause").css("display", "flex");
        }
      });
    
      $(".center .videoPlayer").mouseout(function () {
        $(".center .fa-pause").fadeOut();
      });
    
      $(".center .fa-pause").click(function () {
        document.querySelector(".videoPlayer video").pause();
        $(".center .fa-play").fadeIn();
        $(".center .videoPlayer").removeClass("active");
      });
    //   headerBook
    $(".headerBook .close").click(function () {
        $(".headerBook").fadeOut(500);
      });

      $(".team .signUp").click(function () {
        $(".headerBook").fadeIn();
        $(".headerBook").css("display", "flex");
      });
    // block
    $(".block .owl-carousel").owlCarousel({
      items: 4,
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeout: 1000,
      nav: true,
    });
    
})
