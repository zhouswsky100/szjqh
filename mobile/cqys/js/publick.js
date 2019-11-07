$(function() {
    $(".navbar").click(function() { This = $(this);
        This.attr("id") ? (This.removeAttr("id"), This.removeClass("active"), This.addClass("cur"), $("header").removeAttr("id"), $(".body-box-background").removeClass("active")) : (This.attr("id", "active"), $("header").attr("id", "Show"), This.addClass("active"), This.removeClass("cur"), $(".body-box-background").addClass("active")) });
    $(".navbar").hover(function() { $("header").addClass("PCanimate") }, function() { $("header").removeClass("PCanimate") });
    $(".body-box-background").click(function() { $(".navbar").click() });
    $("menu li aside .close").click(function() { $(".body-box-background").removeClass("active");
        $(".navbar").removeAttr("id");
        $("header").removeAttr("id") })
});
$(function() { var a = $(".GoTop"),
    myphone = $(".myPhone"),
    myqq = $(".myQQ"),
    zx = $('.zx'),
    g = window.screen.availHeight,
    bodyHeight = $('.body-box').outerHeight(true)-1;

    $(window).scroll(function() { 100 < $(window).scrollTop() ? a.addClass("active") : a.removeClass("active");
        100 < $(window).scrollTop() ? myphone.addClass("active") : myphone.removeClass("active");
        100 < $(window).scrollTop() ? myqq.addClass("active") : myqq.removeClass("active");
        100 < $(window).scrollTop() ? zx.addClass("active") : zx.removeClass("active");
//		bodyHeight<($(window).scrollTop()+g) ? $('.liBottom').addClass('active') : $('.liBottom').removeClass('active');
    });
    a.click(function() { $("html,body").animate({ scrollTop: 0 }, 400) }) });