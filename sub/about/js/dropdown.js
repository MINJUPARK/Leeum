$(function() {
    $('.floor-info .dropdown').on('click', function() {
        $(this).toggleClass('active');
        $(this).parent().siblings().slideToggle();
    });
})