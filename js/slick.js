$(function() {

  // 메인 슬라이드
    var $imageSlider = $(".main-slider");
    var sliderTimer = 30000;
    var total_slide = 0;

    $imageSlider.slick({
      autoplay: true,
      autoplaySpeed: sliderTimer,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      pauseOnFocus: false, 
      pauseOnHover: false,
      draggable: true,
      infinite: true
    });
  
    $imageSlider.on('afterChange', function (event, slick, currentSlide) {

        prev_img = $(slick.$slides[currentSlide - 1]).find('video').attr('src');
        next_img = $(slick.$slides[currentSlide + 1]).find('video').attr('src');

        if (currentSlide == total_slide) {
          prev_img = $(currentSlide - 1).find('video').attr('src');
        }

        if (currentSlide == 0) {
          prev_img = $(slick.$slides[total_slide - 1]).find('video').attr('src');
        }

        if (currentSlide == total_slide - 1) {
          next_img = $(slick.$slides[0]).find('video').attr('src');
        }
    });
    
    function progressBar(){
      $('.slider-progress').find('span').removeAttr('style');
      $('.slider-progress').find('span').removeClass('active');
      setTimeout(function(){
        $('.slider-progress').find('span').css('transition-duration', (sliderTimer/1000)+'s').addClass('active');
      }, 100);
    }
    progressBar();
  
    $imageSlider.on('beforeChange', function(e, slick) {
      progressBar();
    });


    // 메인 공지사항 슬라이드
    $('.txt-slider').slick({
      vertical: true,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 500,
      prevArrow: false,
      nextArrow: false
    });


    // exhibition
    var $swipeTabsContainer = $('.swipe-tabs'),
        $swipeTabs = $('.swipe-tab'),
        $swipeTabsContentContainer = $('.swipe-tabs-container'),
        currentIndex = 0,
        activeTabClassName = 'active-tab';
  
      $swipeTabsContainer.on('init', function(event, slick) {
        $swipeTabsContentContainer.removeClass('invisible');
        $swipeTabsContainer.removeClass('invisible');
    
        currentIndex = slick.getCurrent();
        $swipeTabs.removeClass(activeTabClassName);
        $('.swipe-tab[data-slick-index=' + currentIndex + ']').addClass(activeTabClassName);
    });
  
    $swipeTabsContainer.slick({
      slidesToShow: 3.5,
      slidesToScroll: 5,
      arrows: false,
      infinite: false,
      swipeToSlide: true,
      touchThreshold: 10,
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 768, 
          settings: { 
            slidesToShow: 5,
            slidesToScroll: 1
          }
        }
      ]
    });
  
    $swipeTabsContentContainer.slick({
      asNavFor: $swipeTabsContainer,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      infinite: false,
      swipeToSlide: false,
      draggable: false,
      touchThreshold: 10,
      accessibility: false,
      swipe: false
    });
  
    $swipeTabs.on('click', function(event) {
          currentIndex = $(this).data('slick-index');
          $swipeTabs.removeClass(activeTabClassName);
          $('.swipe-tab[data-slick-index=' + currentIndex +']').addClass(activeTabClassName);
          $swipeTabsContainer.slick('slickGoTo', currentIndex);
          $swipeTabsContentContainer.slick('slickGoTo', currentIndex);
      });

      $swipeTabsContentContainer.on('swipe', function(event, slick, direction) {
        currentIndex = $(this).slick('slickCurrentSlide');
        $swipeTabs.removeClass(activeTabClassName);
        $('.swipe-tab[data-slick-index=' + currentIndex + ']').addClass(activeTabClassName);
    });


    $('.swipe-tab').on('click', function() {
      $(".ehb-slider").slick("refresh");
    });

    $('.ehb-slider').slick({
      dots: false,
      infinite: true,
      touchThreshold : 100,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      initialSlide : 1,
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