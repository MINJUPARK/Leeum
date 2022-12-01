$(function() {

  // 상세페이지용 이미지 슬라이드
  const $slideMain = $(".slide-main");
  
  $slideMain.slick({
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
  });
})