$(function() {
    $('.ehb-slider').slick({
        dots: true,
        infinite: true,
        touchThreshold : 100,
        autoplay: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide : 0,
        centerMode: true,
        variableWidth: true,
        variableHeight: true,
        mobileFirst: true,
        nextArrow: false,
        prevArrow: false,
        responsive: [{
                breakpoint: 1440,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });
})