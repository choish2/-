$(document).ready(function() {
    let winW = $(window).outerWidth(true); 


    function checkSectionVisibility() {
        let winTop = $(window).scrollTop();
        let winBottom = winTop + $(window).height();
        let section1Top = $('#spline1').offset().top; 
        let section1Bottom = section1Top + $('#spline1').outerHeight(); 
        
        if (winBottom > section1Top && winTop < section1Bottom) {
            $('#clickme').show(); 
          
        } else {
            $('#clickme').hide(); 
        }

    }

    $(window).on('scroll', checkSectionVisibility);
    checkSectionVisibility(); 
    $('.butttn img').eq(0).click(function() {
        $('#intro').fadeOut();
           
        return false;
    });


    $('.profile').click(function() {
        $('#intro').fadeIn().css('display', 'flex');
        $('#clickme').css('display', 'none'); 
        return false; 
    });

    $('.exit').click(function() {
        $('.spline_btn2').fadeOut().delay(500);
        $('.spline_btn3').fadeOut().delay(500);
        
         return false; 
    });

    $('.exit').click(function() {
        $('.spline_btn2').fadeOut()
         return false; 
    });
    $('.signin').click(function() {
        $('.spline_btn2').fadeIn()
         return false; 
    });

    $('.btnn a').click(function() {
        $('.helpp').fadeOut();
     
        return false; 
    });
    $('.help').click(function() {
        $('.helpp').fadeIn().css('opacity','1');
        $('#clickme').css({
            'display': 'none',
           
        });; 
        return false; 
    });


    $('.letter img').click(function() {
        $(this).attr('src', 'img/letter_2.png').css({
            'height': '400px',
            'width': '480px'
        });
        $('.btn').fadeIn(); 
    });
    $('.sp2').click(function() {
        $('.clickframe').css('display', 'block');
        return false;
    })
    $('.btnn a').click(function() {
        $('.clickframe').css('display', 'none');
      

    })

    $('.swiper2222').mouseenter(function() {
        $(this).css('transform','scale(1.2)')
          
        $(this).siblings().css('transform','scale(.8)')
        
    })
    $('.web a').click(function() {
        $('.spline_btn2').show();
        $('.spline_btn3').hide();
        
    })
    
    $('.pop').click(function() {
        
        $('.popuplist').csss({
            'display': 'flex',
        });
        $('.bannerlist').hide();
        
    })
    $('.banner').click(function() {
        $('.popuplist').hide();
        $('.bannerlist').css('display' , 'flex');
        
    })
    
    

});