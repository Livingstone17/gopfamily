




$(document).ready(function () {
    // first slider controls

    $('.slider-one').not('.slick-initialized').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        prevArrow: ".site-slider .slider-btn.prev",
        nextArrow: ".site-slider .slider-btn.next",
        responsive:[{
            breakpoint:850,
            settings:{
                dots:false
            }
        }]
    });
    // scroller
    $('.up').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
    });

    // read more

    $('.article-more').click(function(){
        $('.more').fadeToggle();
    });

    // magnify image
    if ($.fn.magnificPopup) {
        $('.card').magnificPopup({
            delegate: 'a',
            gallery: {
            enabled: true
            },
         type: 'image'
        });
    };


    // second slider
    $('.slider').slick({
        prevArrow: ".site-slider .prev",
        nextArrow: ".site-slider .next",
        slidesToShow: 5,
        slidesToScroll: 3,
        autoplaySpeed: 8000,
        autoplay: true,
        responsive: [{
            breakpoint: 850,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        }]
    });

    // testimonies


    $('.testiSlide').slick({
        slidesToShow: 3,
        infinite: true,
        slidesToScroll: 1,
        controls: false,
        dots: true,
        prevArrow: false,
        nextArrow: false,
        autoplay: true,
        autoplaySpeed: 10000,
        responsive: [{
            breakpoint: 850,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                controls: false
            }

        },
        {
            breakpoint: 620,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                controls: false,
                autoplaySpeed: 5000
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToScroll: 1,
                slidesToShow: 1,
                control: false
            }
        }
        ]
    });

    // featured products toggle
    $(".see").click(function () {
        $(".row-guys").fadeToggle();
    });
})(jQuery);
