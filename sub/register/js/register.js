$(function() {
    $('.side-tab .tab-wrap').find('li').on('click', function(e) {
        var $this = $(this);
        var $index = $this.index();
        var $all_tab= $this.parents('.tab-wrap').find('.tab');

        if($this.parents('login')) {
            $all_tab.removeClass('on');
            $this.addClass('on');
        }
    });
}) 



/* $(function() {
    $('.side-tab .tab-wrap').find('li').on('click', function(e) {
        for(let i = 0; i < $('.tab').length; i++){
            tabOpen(i); 
        }
        
        // function tabOpen(e){
            $('.tab').eq(e).click(function(){
                $('.tab').removeClass('active');
                $('.tab').removeClass('show');
                $('.tab').eq(e).addClass('active');
                $('.tab').eq(e).addClass('show');
            });
        // }
    });
}) 
 */

/* $(function() {
    $('.side-tab .tab-wrap').find('li').on('click', function(e) {
        $('.tab-wrap a').removeClass('active');
        $(this).addClass('active');
        return false;
    })
    $('.tab-wrap span').click(function () {
        $('.login-form > div').filter(this.hash).fadeIn();
        $('.tab-wrap span').removeClass('active');
        $(this).addClass('active');
        return false;
    }).filter(':eq(0)').click();
}) */