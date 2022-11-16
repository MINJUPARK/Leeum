$(document).ready(function() {

    // 터치 슬라이드
    $(window).on('load resize', function() {
        const ww = $(this).width();
        
        if(ww < 1440) {
            var swiper = new Swiper(".mySwiper", {
                slidesPerView: 2,
                centeredSlides: false,
                spaceBetween: '2%',
                grabCursor: true
            });
        }
    });
})
