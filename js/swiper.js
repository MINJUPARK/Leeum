$(function() {

    var swiper;
    // *_detail : 탈그리드 아이템 슬라이드
    $(window).on('load resize', function() {

        swiper = new Swiper(".mySwiper", {
            slidesPerView: 2,
            centeredSlides: false,
            spaceBetween: '2%',
            grabCursor: true
        });
    });

    swiper = new Swiper('.prg-slider', {
        spaceBetween: 30,
        effect: 'fade',
        loop: true,
        // mousewheel: {
        //   invert: false,
        // },
        // autoplay: {
        //     delay: 10000,
        //     disableOnInteraction: false,
        //   },
        autoHeight: true,
        pagination: {
          el: '.prg-slider__pagination',
          clickable: true,
        }
     });
})
