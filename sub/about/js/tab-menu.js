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

    // 다른 페이지에서 -> 해당 페이지의 탭메뉴로 다이렉트 이동
    var hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');

    for(var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
    }

    if(hash[1]) {
        $('.tabmenu-wrap .tab-nav').find('.nav').removeClass('on');
        $(`[href='#${hash[1]}']`).parent().addClass('on');
        $('.tab-con').find('.con-box').hide();
        $('.tab-con').find(`#${hash[1]}`).show();
    }
}) 