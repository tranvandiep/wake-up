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

$(document).ready(function(){
    // Add scrollspy to <body>
    $('body').scrollspy({target: ".navbar", offset: 50});

    // Add smooth scrolling on all links inside the navbar
    $("#myNavbar a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }  // End if
    });
});

/**
 * Author: Heather Corey
 * jQuery Simple Parallax Plugin
 *
 */
 
(function($) {
 
    $.fn.parallax = function(options) {
 
        var windowHeight = $(window).height();
 
        // Establish default settings
        var settings = $.extend({
            speed        : 0.15
        }, options);
 
        // Iterate over each object in collection
        return this.each( function() {
 
            // Save a reference to the element
            var $this = $(this);
 
            // Set up Scroll Handler
            $(document).scroll(function(){
 
                    var scrollTop = $(window).scrollTop();
                        var offset = $this.offset().top;
                        var height = $this.outerHeight();
 
            // Check if above or below viewport
            if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) {
                return;
            }
 
            var yBgPosition = Math.round((offset - scrollTop) * settings.speed);
 
                 // Apply the Y Background Position to Set the Parallax Effect
                $this.css('background-position', 'center ' + yBgPosition + 'px');
                
            });
        });
    }
}(jQuery));

$('.bg-1,.bg-3,body').parallax({
    speed : 0.15
});

$('.bg-2').parallax({
    speed : 0.25
});