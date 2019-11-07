
$(function(){
	var scrollArrty = ['.body-box .qx','.body-box .ls','.body-box .zr'];	
	var scrI = 0;
	var scrHeight = window.screen.availHeight;	
	var width = $(window).width();
	var n = 0;
	if(width>=1024){
		n = 350;
	}else{
		n = 50;
	}
	$(window).scroll(function(){
		scrollFn();
	})
	function scrollFn(){		
		if(scrI==scrollArrty.length){
			return false;
		}
	    var boxPos = $(scrollArrty[scrI]).offset().top;	
		var winPos = $(window).scrollTop()+scrHeight-n;
		if(boxPos<winPos){
			$(scrollArrty[scrI]).addClass('active');
			scrI++;
			if(scrI<scrollArrty.length){
				scrollFn();
			}else{
				return false;
			}
		}else{
			return false;
		}
	}
	scrollFn();
});