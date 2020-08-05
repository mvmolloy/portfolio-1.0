$(document).ready(function () {
  // nav menu
  $("#toggle-btn").on({
        click: function (){
            $("#nav-menu").toggle();
            $(this).toggleClass("isClicked");
                if (!$(this).hasClass("isClicked")) {
                $(this).removeClass("nav-el-active");
            }
        },  
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