$(function(){
    var w = $(".banner").width();
    var h = $(".banner").height();
    $('.banner .slick-slider').royalSlider({
        autoPlay: {
            enabled: true,
            delay : 3000
        },
        transitionSpeed :600 ,
        autoScaleSliderWidth: w,
        autoScaleSliderHeight: h,
        loop: true,
        arrowsNavAutoHide: false,
        sliderDrag : document.body.clientWidth < 800 ? true :  false ,
        slidesSpacing: 0,
        fadeinLoadedSlide : false,
        transitionType : 'fade',
        imageScaleMode: 'fill',
        autoScaleSlider : true
    });
    //$('.banner').css('height','auto');

    var iw = $(".innerbanner").width();
    var ih = $(".innerbanner").height();

    $('.innerbanner .slick-slider').royalSlider({
        autoPlay: {
            enabled: true,
            delay : 3000
        },
        transitionSpeed :600 ,
        autoScaleSliderWidth: iw,
        autoScaleSliderHeight: ih,
        loop: true,
        arrowsNavAutoHide: false,
        sliderDrag : document.body.clientWidth < 800 ? true :  false ,
        slidesSpacing: 0,
        fadeinLoadedSlide : false,
        transitionType : 'fade',
        imageScaleMode: 'fill',
        autoScaleSlider : true
    });



    var roll = false;
    var start  = $(window).scrollTop();
    var positionArr = new Array();
    $('body .position').each(function(index, element) {
        positionArr[index] = $(this).offset().top;
        //alert( positionArr[index] +"|"+ start);
        if( positionArr[index] <= start){
            $(this).addClass('p_active').siblings().removeClass('p_active');
            $(window).scrollTop(positionArr[index]);
        }
    });


});

