$(function(){

    var navbarB = $('.navbar');
    var footer = $('.footer-btn').offset().top;
    var sec_height = $(window).height();
    navbarB.addClass('scrollt');
    function bannerSc(){
        // 瀵艰埅闈犲ご閮�
        var navbarB = $('.navbar');
        var footer = $('.footer-btn').offset().top;
        var sec_height = $(window).height();
        if(10<$(window).scrollTop()){
            navbarB.removeClass('menu-top');
        }else{
            navbarB.addClass('menu-top');
        }
        // 瀵艰埅闈犲簳閮�
        if(footer-sec_height+230<$(window).scrollTop()){
            navbarB.addClass('bottom');
        }else{
            navbarB.removeClass('bottom');
        }
    }
    $(window).scroll(function(){
        // 鍒嗛〉
        bannerSc();
    });
})
$(function(){
    // title 绾�
    var Line = $('.sub-title-border');
    var Width = $('.sub-title-txt h2').width();
    var MWidth = $('.sub-title').width();
    Line.width((MWidth-Width)/2-30);
})