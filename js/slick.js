$(function() {
  var $imageSlider = $(".main-slider");
  var sliderTimer = 30000;
  var total_slide = 0;

    $imageSlider.slick({
      autoplay: false,
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
  })

