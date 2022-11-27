$(function() {
    AOS.init();

    $('.tabmenu-wrap .tab-nav').find('a').on('click', function(e) {
        AOS.init();
        var $this = $(this);
        var $all_tab_nav = $this.parents('.tab-nav').find('.nav');
        var $tab_contents = $this.parents('.tabmenu-wrap').find('.con-box');
        var id = $this.attr('href');
    
        e.preventDefault();
        $all_tab_nav.removeClass('on');
        $this.parent().addClass('on');
        $tab_contents.hide();
        $(id).show();
    });

    // 메인 '달라진 리움' 배너에서 -> 공용공간 리뉴얼 탭으로 이동
    function specificTab(e) {
        var hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');

        for(var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
        }
        if(hash[1] == 'renewal') {
            $('.tabmenu-wrap .tab-nav').find('.nav').removeClass('on');
            $('[href="#renewal"]').parent().addClass('on');
            $('.tab-con').find('.con-box').hide();
            $('.tab-con').find('#renewal').show();
        }
    }
    specificTab();
}) 