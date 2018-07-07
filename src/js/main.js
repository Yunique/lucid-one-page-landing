//WOW library animation
new WOW().init();

//jQuery header scrolling
jQuery(document).ready(function() {
    jQuery(window).scroll(function() {
        if ($(window).width() >= '719') {
            if (jQuery(window).scrollTop() >= 100) {
                jQuery('.header__wrapper').css({'background': '#18171D'});
            }
            else {
                jQuery('.header__wrapper').css({'background': 'transparent'});
            }
        }
    });
});

//jQuery Smooth motion
$('.menu').on('click', 'a', function(event) {
    event.preventDefault();
    const id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 800);
});

//Owl carousel plugin
$('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    mouseDrag: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
});
