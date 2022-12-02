$(function() {
    $('.side-tab .tab-wrap').find('li').on('click', function(e) {
        var $this = $(this);
        var $index = $this.index();
        var $all_tab= $this.parents('.tab-wrap').find('.tab');

        let $tab_contents = $this.parents('.side-tab').find('.side-con-box');

        $all_tab.removeClass('selected');
        $this.addClass('selected');
        
        $tab_contents.removeClass('view');
        $tab_contents.parents('.floor-con-group').children(`#f${$index}`).addClass('view');
        $(".slide-main").slick("refresh");
    });
}) 