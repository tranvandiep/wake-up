$(document).ready(function(){
   var count = 0;
   $(window).scroll(function(e1){
	    if($(this).scrollTop() > 200 ) {
	        $('#main-navbar').css("background-color", "#474545");
	    	} else {
	                $('#main-navbar').css("background-color", "transparent");
	        
	            }
	});

   	$('#toggle-nav-button').click(function(){
   		$('#main-navbar').css("background-color", "#474545");

   });


});