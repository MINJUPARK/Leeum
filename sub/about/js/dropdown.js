$(function() {
    function dropdown() {
        $(this).toggleClass('active');
        $(this).parent().siblings().slideToggle();
    }
    
    $('.floor-info .dropdown').on('click', dropdown);
    $('.faq-list .dropdown').on('click', dropdown);
})