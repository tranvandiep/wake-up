new WOW().init();
$(document).ready(function(){

    $(window).scroll(function(){
        if($(this).scrollTop() > 150 ) {
            $('#main-navbar').css("background-color", "#474545");
        }
        else {
            $('#main-navbar').css("background-color", "transparent");
        }
    });

    $('#toggle-nav-button').click(function(){
        $('#main-navbar').css("background-color", "#474545");
    });
});