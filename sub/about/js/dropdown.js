$(function() {
    function dropdown() {
        $(this).children('.dropdown').toggleClass('active');
        $(this).next().slideToggle();
    }
    
    $('.floor-info .group-title').on('click', dropdown);
    $('.faq-list .q-box').on('click', dropdown);
})