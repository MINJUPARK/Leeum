$(document).ready(function() {

    // a 링크 모두 target="_blank" 적용
    var a = document.getElementsByTagName('a'); 

    for(var i = 0; i < a.length; i++) { 
        a[i].target = "_blank"; 
    }

    // 모바일 메뉴
    $('.mobile-menu-popup').hide();
    $('.mobile-menu').click(function() {
        const sc_width = window.innerWidth - $(window).width();

        $(this).hide();
        $('.mobile-menu-popup').show();
        $('.window .close').css({ "right" : 20 + sc_width + "px" });
        $('body').css({ "overflow" : "hidden" });
    });
    $('.window .close').click(function() {
        $('.mobile-menu-popup').hide();
        $('.mobile-menu').show();
        $('body').css({ "overflow" : "visible" });
    });
    $('.wh-menu .group').click(function() {
        $(this).children('.dropdown').toggleClass('active');
        $(this).siblings().slideToggle();
    });

    // PC 메뉴 서브
    $('.pc-menu .group').mouseover(function() {
            $('.pc-menu .opt').addClass('hidden');
            $(this).next().removeClass('hidden');

            if($(this).hasClass('m1'))      { $(this).next().css({ "margin-left" : "-32px" }); }
            else if($(this).hasClass('m2')) { $(this).next().css({ "margin-left" : "-28px" }); }
            else if($(this).hasClass('m3')) { $(this).next().css({ "margin-left" : "-14px" }); }
            else if($(this).hasClass('m4')) { $(this).next().css({ "margin-left" : "-24px" }); }
            else if($(this).hasClass('m6')) { $(this).next().css({ "margin-left" : "-26px" }); }
    });
    $('.pc-menu .opt').mouseleave(function() {
        $(this).addClass('hidden');
    });

    // PC 검색 메뉴
    $('.icon-menu .search').click(function() {
        $(this).siblings().toggleClass('hidden');
        $(this).siblings().children('.searchbar').focus();
    });

    // 상단 메뉴 고정 (모바일 + PC)
    $(window).scroll(function() {
        const sc_top = $(this).scrollTop();
        
        if($(this).width() < 390) {
            if(sc_top > 220) { $('.logo-menu-wrap').addClass('menu-sc'); } 
            else             { $('.logo-menu-wrap').removeClass('menu-sc'); }
        } else if($(this).width() > 390 &&  $(this).width() < 1440) {
            if(sc_top > 240) { $('.logo-menu-wrap').addClass('menu-sc'); } 
            else             { $('.logo-menu-wrap').removeClass('menu-sc'); }
        } else {
            if(sc_top > 380) { $('.logo-menu-wrap').addClass('menu-sc'); } 
            else             { $('.logo-menu-wrap').removeClass('menu-sc'); }
        }
    });

    // 언어변경, 브레드크럼 드롭다운 목록
    $('.mini-menu .lang').click(function() {
            $(this).children('.dropdown').toggleClass('active');
            $('.lang-opt').slideToggle();
    });
    $('.breadcrumb .dropdown').click(function() {
        $(this).toggleClass('active');
        $(this).parent().siblings().slideToggle();
    });

    // 패밀리 사이트 이동
    $('select[name=family]').change(function() {
        window.open($(this).val());
    });
})
