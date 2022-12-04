$(function() {
    $('.floor-info .dropdown').on('click', function() {
        $(this).toggleClass('active');
        $(this).parent().siblings().slideToggle();
    });

    $('.faq-list .dropdown').on('click', function() {
        $(this).toggleClass('active');
        $(this).parent().siblings().slideToggle();
    });
})