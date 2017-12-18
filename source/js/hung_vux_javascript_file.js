$(document).ready(function(){


    $(window).scroll(function(){
                    if($(this).scrollTop() > 300 ) {
                        $('#scroll-btn').fadeIn();
                    } else {
                                $('#scroll-btn').fadeOut();
                        
                            }
                });
                $('#scroll-btn').click(function(){ 
                    $("html, body").animate({ scrollTop: 0 }, 500); 
                     
                });



    
    //giam gia js
    $('#km-button2').click(function(){
        $('#km-button2').css("background-color" , "#34bfa3");
        $('#km-button2  > a').css("color" , "white");
        $('#km-button1').css("background-color" , "white");
        $('#km-button1 > a').css("color" , "#34bfa3");
        $('.table').hide();
    });

     $('#km-button1').click(function(){
        $('#km-button1').css("background-color" , "#34bfa3");
        $('#km-button1  > a').css("color" , "white");
        $('#km-button2').css("background-color" , "white");
        $('#km-button2 > a').css("color" , "#34bfa3");
        $('.table').show();
    });
    //giam gia js

    //------------------------------------------------------------------------------------------------------------------------//

    //marketing js

     $('#mk-col2-div1').hide();
    $('#mk-head-btn1').click(function(){
        $('#mk-head-btn2').css("background-color" , "white");
        $('#mk-head-btn2  > a').css("color" , "#1DC7EA");
        $('#mk-head-btn1').css("background-color" , "#337ab7");
        $('#mk-head-btn1 > a').css("color" , "white");
        $('#mk-col1-body').show();
        $('#mk-col2-div1').hide();

   
    });

    $('#mk-head-btn2').click(function(){
        $('#mk-head-btn1').css("background-color" , "white");
        $('#mk-head-btn1  > a').css("color" , "#1DC7EA");
        $('#mk-head-btn2').css("background-color" , "#337ab7");
        $('#mk-head-btn2 > a').css("color" , "white");
        $('#mk-col1-body').hide();
        $('#mk-col2-div1').show();
  
    });


    $('#mk-form-btn').click(function(){
        $('.mk-append-html').append(
            '<div class="form-group">'
            +
            '<div class="khung-h">'
            +
            '<span>TỪ</span>'
            +
            '&nbsp;' 
            +               
            '<input type="time" class="from-to">'
            +
            '&nbsp;'
            +
            '<span>ĐẾN</span>'
            +
            '&nbsp;'
            +
            '<input type="time" class="from-to">'
            +
            '&nbsp;'
            +
            '&nbsp;'
            +
            '<button type="button" class="btn btn-danger" style="margin-top:7px;outline:none">XÓA</button>'
            +
            '</div>'
            +
            '</div>'
        );
  
        $('.khung-h').on('click', '.btn.btn-danger', function(){
            $(this).closest('.form-group').remove();

        });
    });

    //marketing js


    //------------------------------------------------------------------------------------------------------------------------//

    //cai dat js
        


    //cai dat js
     //------------------------------------------------------------------------------------------------------------------------//
});