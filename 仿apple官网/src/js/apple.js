$(document).ready(function(){
    $('.show-nav-cli').on('click',function(){
        $('.mobile-show-nav').slideToggle();
    })
    winWidth();
    function winWidth(){
        var winWidth = $(window).outerWidth();
        if (winWidth > 767) {
        $('.mobile-show-nav').hide();
        $('.footer-nav-cont>ul').show();
        $('.footer-nav-cont.mobile-only').hide();
        $('.tablet-computer-only').show();
        $('.footer-nav-cont>h6').unbind('click');
        } else {
        $('.footer-nav-cont>ul').hide();
        $('.tablet-computer-only').hide();
        $('.footer-nav-cont.mobile-only').show();
        $('.footer-nav-cont>h6').unbind('click');
        $('.footer-nav-cont>h6').on('click',function(){
            $(this).siblings('ul').slideToggle();
        })
        }
    }
    $(window).resize(function(){
        winWidth();
    })

    var inAppListIndex = 0;
    var inPhotosLength = $('.built-inPhotos-list li').length;
    $('.built-inPhotos-list li').eq(0).show().siblings('li').hide();
    $('.built-inApp-list li').on('click',function(){
        $(this).addClass('active').siblings('li').removeClass('active');
        inAppListIndex = $(this).index();
        builtInPhotosSlide();
    })
    $(".built-inPhotos-pages-l").on('click',function(){
        $(".built-inPhotos-pages-r").show();
        inAppListIndex --;
        if (inAppListIndex <= 0) {
            inAppListIndex = 0;
            $(this).hide();
        }
        builtInPhotosSlide();
    })
    $(".built-inPhotos-pages-r").on('click',function(){
        $(".built-inPhotos-pages-l").show();
        inAppListIndex ++;
        if (inAppListIndex >= inPhotosLength - 1) {
            inAppListIndex = inPhotosLength - 1;
            $(this).hide();
        }
        builtInPhotosSlide();
    })
    function builtInPhotosSlide(){
        $('.built-inPhotos-list li').eq(inAppListIndex).fadeIn().siblings('li').hide();
        $('.built-inPhotos-pages-num li').eq(inAppListIndex).addClass('active').siblings('li').removeClass('active');
    }
})