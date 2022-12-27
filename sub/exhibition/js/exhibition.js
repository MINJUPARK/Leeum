$(function() {

    $('.side-tab .tab-wrap').find('li').on('click', function(e) {
        var $this = $(this);
        var $index = $this.index();
        var $all_tab= $this.parents('.tab-wrap').find('.tab');

        let $tab_contents = $this.parents('.side-tab').find('.side-con-box');

        $all_tab.removeClass('selected');
        $this.addClass('selected');
        
        $tab_contents.removeClass('view');
        $tab_contents.parents('.floor-con-group').children(`#f${$index}`).addClass('view');
        $(".slide-main").slick("refresh");
    });
    
    $(".slide-main").slick({
        slide: ".slide-item",
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveWidth: true,
        adaptiveHeight: true,
        autoplay: true,
        infinite: true,
        speed: 300,
    });

    // $slideMain.on("afterChange", function (event, slick, currentSlide) {
    //     $slideNav.slick("slickGoTo", currentSlide);
    //     $slideNav.find(".slick-slide.is-active").removeClass("is-active");
    //     $slideNav
    //         .find('.slick-slide[data-slick-index="' + currentSlide + '"]')
    //         .addClass("is-active");
    // });

    // $slideNav.on("init", function (event, slick) {
    //     $(this).find(".slick-slide.slick-current").addClass("is-active");
    // })
    // .slick({
	// 	slide: ".slide-item",
	// 	slidesToShow: 3,
	// 	slidesToScroll: 1,
	// 	dots: false,
	// 	focusOnSelect: false,
	// 	infinite: true,
	// });

    // $slideNav.on("click", ".slick-slide", function (e) {
    //     e.preventDefault();
    //     var goToMainSlide = $(this).data("slick-index");
    //     $slideMain.slick("slickGoTo", goToMainSlide);
    // });


    $('.ehb-slider').slick({
        dots: true,
        infinite: false,
        touchThreshold : 100,
        autoplay: true,
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
                    slidesToScroll: 1
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

    $('.slick-cloned a').removeAttr('data-fancybox'); 
    $('.slick-cloned a').attr('data-fancybox-trigger', 'now');
})