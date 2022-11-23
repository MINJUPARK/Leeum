$(function() {
    $('.side-tab .tab-wrap').find('li').on('click', function(e) {
    var $this = $(this);
        var $index = $this.index();
        var $all_tab= $this.parents('.tab-wrap').find('.tab');
        var $tab_contents = $this.parents('.side-tab').find('.con-box');

        $all_tab.removeClass('on');
        $this.addClass('on');
        $tab_contents.find('li').removeClass('view');
        $tab_contents.find(`li:eq(${$index})`).addClass('view');
    });
}) 