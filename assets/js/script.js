$(document).ready(function () {
  // nav menu
  $("#toggle-btn").on({
        click: function (){
            $("#nav-menu").toggle();
            $(this).toggleClass("isClicked");
                if (!$(this).hasClass("isClicked")) {
                    $(this).removeClass("nav-el-active");
                    $("#toggle-icon").removeClass("fa-times").addClass("fa-bars")
                } else {
                    $("#toggle-icon").removeClass("fa-bars").addClass("fa-times")
                }
            }
    });
    // switch toggle colour over contact form
    $(window).on("load resize scroll", function(e){
        if ($(this).scrollTop() >= $('#contact').position().top) {
            $("#toggle-icon").removeClass("toggle-icon-blue").addClass("toggle-icon-pink");
            $(".nav-link").removeClass("nav-link-blue").addClass("nav-link-pink");
        } else {
            $("#toggle-icon").removeClass("toggle-icon-pink").addClass("toggle-icon-blue");
            $(".nav-link").removeClass("nav-link-pink").addClass("nav-link-blue");
        }
    });
});