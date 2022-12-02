$(function() {
    const nav = $('.tab-nav > .scroll > a');

    nav.on("click", function(e) {
        e.preventDefault();
        $('html').animate({ scrollTop: $(this.hash).offset().top }, 600)
    })
})