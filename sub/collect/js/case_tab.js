$(function() {
    $('.side-tab .tab-wrap').find('li').on('click', function(e) {
    var $this = $(this);
        var $index = $this.index();
        var $all_tab= $this.parents('.tab-wrap').find('.tab');
        var $back_img = $this.parents('.side-tab').find('.con-box').find('.background-img');
        var $fore_img = $this.parents('.side-tab').find('.con-box').find('.foreground-img');
        
        console.log($index);
        
        $all_tab.removeClass('on');
        $this.addClass('on');
        
        $back_img.css("background-image", "url('../image/conserve_case_before\(" + $index + "\).png')");

    });
}) 