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
    $(".card").on({
        mouseover: function(){
            $(this).children(".card-img-top").hide();
            $(this).children(".card-text").show();
        }, 
        mouseout: function(){
            $(this).children(".card-img-top").show();
            $(this).children(".card-text").hide();
        }
    })
});