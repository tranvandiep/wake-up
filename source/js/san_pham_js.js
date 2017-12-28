new WOW().init();
$(document).ready(function(){
    var count = 0;
    $(window).scroll(function(e1){
        if($(this).scrollTop() > 300 ) {
            $('#main-navbar').css("background-color", "#474545");
            $('#main-navbar').css("box-shadow", "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)");
        } else {
            $('#main-navbar').css("background-color", "transparent");
            $('#main-navbar').css("box-shadow", "none");
        }
    });

    $('#toggle-nav-button').click(function(){
        $('#main-navbar').css("background-color", "#474545");
        $('#main-navbar').css("box-shadow", "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)");

    });


});