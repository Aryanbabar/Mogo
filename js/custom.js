$(function(){
    // back-to-top;
    $('.back-to-top').click(function(){
        $('html, body').animate({scrollTop:0},1000);
    });
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();

        if(scrolling > 300){
            $('.back-to-top').fadeIn(500);
        }
        else{
            $('.back-to-top').fadeOut(500);
        }
        if(scrolling > 200){
            $('header').addClass('bg');
        }
        else{
            $('header').removeClass('bg');
        }
    });

    //wow js;
    new WOW().init();

    //counterup;
    $('.counter').counterUp({
        delay: 5,
        time: 2000
    });

});

//animation scroll js
var html_body = $('html, body');
$('.menuber a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 90
            }, 1500);
            return false;
        }
    }
});

// preloader;
$(window).on('load', function(){
    $('.preloader').delay(800).fadeOut(500);
});