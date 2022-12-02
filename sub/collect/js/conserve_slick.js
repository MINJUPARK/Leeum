$(function() {

  const $slideMain = $(".slide-main");
  
  let slickOpt = {
    slide: ".slide-item",
    slidesToShow: 1.3,
    slidesToScroll: 1,
    // adaptiveWidth: true,
    // adaptiveHeight: true,
    infinite: false,
    speed: 100,
    // centerMode: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    // centerPadding: '30px',
    useTransform: false,
    touchThreshold: 500,
    draggable : true,
    mobileFirst: true
  }
  
  if($(window).width() < 1440) {
    $slideMain.slick(slickOpt);
  }
  
  $(window).resize(function() {
    if($(window).width() >= 1440) {
      $slideMain.slick("unslick");
    } else {
      $slideMain.slick(slickOpt);
    }
  })
})