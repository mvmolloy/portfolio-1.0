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
    // ensure toggle menu always contrasts with background  
    $(window).on("load resize scroll", function(e){
    if($("#toggle-icon").offset().top > (window.innerHeight)) {
        $("#toggle-icon").removeClass("toggle-icon-light").addClass("toggle-icon-dark");
        $(".nav-link").removeClass("nav-link-light").addClass("nav-link-dark");
    } else {
        $("#toggle-icon").removeClass("toggle-icon-dark").addClass("toggle-icon-light");
        $(".nav-link").removeClass("nav-link-dark").addClass("nav-link-light");
    }
    });
});