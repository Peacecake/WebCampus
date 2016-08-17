$(document).ready(function () {
    //source: http://stackoverflow.com/questions/1638895/how-do-i-make-a-div-move-up-and-down-when-im-scrolling-the-page
    $(window).scroll(function(){
        $(".mapContainer").stop().animate({
            "marginTop": ($(window).scrollTop()) + "px", "marginLeft":($(window).scrollLeft()) + "px"
        }, "slow" );
    });
});
