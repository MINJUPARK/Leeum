$(function() {

    // 터치 슬라이드 (상세 페이지 내 아이템)
    $(window).on('load resize', function() {

        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 2,
            centeredSlides: false,
            spaceBetween: '2%',
            grabCursor: true
        });
        // const ww = $(this).width();
        
        // if(ww < 1440) {
            
        // }
    });
})
