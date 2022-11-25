$(function() {
    $('.side-tab .tab-wrap').find('li').on('click', function(e) {
    var $this = $(this);
        var $index = $this.index();
        var $all_tab= $this.parents('.tab-wrap').find('.tab');

        
        // 재질, 관람안내
        if($this.parents('.type-box') || $this.parents('.floor-select-group')) {
            var $tab_contents = $this.parents('.side-tab').find('.side-con-box');
    
            $all_tab.removeClass('selected');
            $this.addClass('selected');
            $tab_contents.find('li').removeClass('view');
            $tab_contents.find(`li:eq(${$index})`).addClass('view');
        }


        // 사례
        if($this.parents('before-after')) {
            var $back_img = $this.parents('.side-tab').find('.con-box').find('.background-img');
            var $fore_img = $this.parents('.side-tab').find('.con-box').find('.foreground-img');
            
            console.log($index);
            
            $all_tab.removeClass('on');
            $this.addClass('on');
            
            $back_img.css("background-image", "url('../collect/image/conserve_case_before\(" + $index + "\).png')");
            $fore_img.css("background-image", "url('../collect/image/conserve_case_after\(" + $index + "\).png')");
        }
    });
}) 