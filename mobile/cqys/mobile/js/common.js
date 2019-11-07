$(function() {
	var mainWit = $(window).width();
	var mainHit = $(window).height();
	var mainTop = $('.mainTop'),
		scrollBar = $('.scrollBar .banner ul li .imgTimes'),
		indexBack = $('.index-back-box'),
		heaDer = $('header'),
		mouseClick = $('.index-back-box .sub-mouse'),
		navBar = $('.hejun-navBar'),
		closeBar = $('.hejun-fixed-menu ul li.index-hrefs aside .close-bar'),
		munPhone = $('.hejun-fixed-menu .sub-menu-phone'),
		bodsBg = $('.hejun-body-bg'),
		fixedBar = $('.hejun-fixed-menu'),
		worKss = $('.hejun-works'),
		worKside = $('.works-slide'),
		collEction = $('.hejun-collection'),
		desGin = $('.hejun-about'),
		VIDEO = $('#video-bgs'),
		FOOTER = $('footer'),
		bodBox = $('.hejun-body-box'),
		Gotop = $('.GoTop'),
		Mytop = $('.myTop a'),
		COLLBGS = $('.collbgs'),
		comnum = $('.hejun-collection .slider-waper'),
		artsrs = $('.hejun-collection .slider-waper ul li>article');
	mainTop.width(mainWit).height(mainHit);
	worKss.width(mainWit).height(mainHit);
	collEction.width(mainWit).height(mainHit);
	desGin.width(mainWit).height(mainHit);
	var wi = desGin.width();
	var hi = desGin.height();
	VIDEO.width(wi).height(hi);
	var FTH = FOOTER.height();
	var goYx = $('.goYx').height()
//	goYx <= 0 ? goYx = 0 : goYx = goYx;
//	console.log(goYx +' '+ FTH)
	bodBox.css({
		'margin-bottom': FTH - goYx + 50 + 'px'
	});
	scrollBar.width(mainWit);
	COLLBGS.width(mainWit).height(hi * 0.6);
	var comw = comnum.width();
	var comH = comnum.height();
	artsrs.width(comw).height(comH);
	var sdw = worKss.width();
	var sdh = worKss.height();
	worKside.width(sdw).height(sdh);
	if(mainWit * 1080 >= mainHit * 1920) {
		scrollBar.css({
			'background-size': '100% auto'
		})
	} else {
		scrollBar.css({
			'background-size': 'auto 100%'
		})
	};
	mouseClick.click(function() {
		$('html,body').animate({
			scrollTop: mainHit
		}, 500)
	});
	navBar.hover(function() {
		fixedBar.find('.sub-menu-phone').css({
			'width': '555px'
		})
	}, function() {
		fixedBar.find('.sub-menu-phone').css({
			'width': '530px'
		})
	});
	navBar.click(function() {
		$(this).removeClass('visble');
		fixedBar.addClass('active');
		bodsBg.addClass('active');
		munPhone.addClass('active')
	});
	closeBar.click(function() {
		fixedBar.removeClass('active');
		bodsBg.removeClass('active');
		munPhone.removeClass('active');
		navBar.addClass('visble')
	});
	bodsBg.click(function() {
		$(this).removeClass('active');
		fixedBar.removeClass('active');
		munPhone.removeClass('active');
		navBar.addClass('visble')
	});
	$(window).resize(function() {
		var mainWit = $(window).width();
		var mainHit = $(window).height();
		var mainTop = $('.mainTop'),
			scrollBar = $('.scrollBar .banner ul li .imgTimes'),
			indexBack = $('.index-back-box'),
			heaDer = $('header'),
			worKss = $('.hejun-works'),
			worKside = $('.works-slide'),
			collection = $('.hejun-collection'),
			desGin = $('.hejun-about'),
			VIDEO = $('#video-bgs'),
			FOOTER = $('footer'),
			bodBox = $('.hejun-body-box'),
			COLLBGS = $('.collbgs'),
			comnum = $('.hejun-collection .slider-waper'),
			artsrs = $('.hejun-collection .slider-waper ul li > article');
		mainTop.width(mainWit).height(mainHit);
		worKss.width(mainWit).height(mainHit);
		collEction.width(mainWit).height(mainHit);
		desGin.width(mainWit).height(mainHit);
		var wi = desGin.width();
		var hi = desGin.height();
		VIDEO.width(wi).height(hi);
		var FTH = FOOTER.height();
		bodBox.css({
			'margin-bottom': FTH + 'px'
		});
		scrollBar.width(mainWit);
		COLLBGS.width(mainWit).height(mainHit / 2);
		var comw = comnum.width();
		var comH = comnum.height();
		artsrs.width(comw).height(comH);
		var sdw = worKss.width();
		var sdh = worKss.height();
		worKside.width(sdw).height(sdh);
		if(mainWit * 1080 >= mainHit * 1920) {
			scrollBar.css({
				'background-size': '100% auto'
			})
		} else {
			scrollBar.css({
				'background-size': 'auto 100%'
			})
		}
	});
	eval(function(p, a, c, k, e, r) {
		e = function(c) {
			return c.toString(a)
		};
		if(!''.replace(/^/, String)) {
			while(c--) r[e(c)] = k[c] || e(c);
			k = [function(e) {
				return r[e]
			}];
			e = function() {
				return '\\w+'
			};
			c = 1
		};
		while(c--)
			if(k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
		return p
	}('$(f).j(n(){c a=$(f).q();c b=$(\'m\').l();6(a>k){e.3(\'1\')}7{e.4(\'1\')};6(a>g/2){d.3(\'1\');5.3(\'8\');h.3(\'1\');9.3(\'1\')}7{d.4(\'1\');5.4(\'8\');h.4(\'1\');9.4(\'1\')};6(b-a-g+o+p==0){5.3(\'i\')}7{5.4(\'i\')}});', 27, 27, '|active||addClass|removeClass|navBar|if|else|visble|Mytop|||var|indexBack|heaDer|window|mainHit|Gotop|Bom|scroll|100|height|body|function|FTH|50|scrollTop'.split('|'), 0, {}))
	Gotop.click(function() {
		$('html,body').stop().animate({
			scrollTop: '0px'
		}, 800);
	});
});
$(function() {
	var clickl = $('.index-back-box .sub-arrows i.prev'),
		clickr = $('.index-back-box .sub-arrows i.next'),
		slide = $('.scrollBar .banner ul li'),
		leng = slide.length - 1;
	var slideI = 0;

	function Animate() {
		slide.eq(slideI).addClass('visb').siblings().removeClass('visb')
	}
	clickl.click(function() {
		slideI--;
		slideI = slideI < 0 ? leng : slideI;
		Animate()
	});
	clickr.click(function() {
		slideI++;
		slideI = slideI > leng ? 0 : slideI;
		Animate()
	});
	setInterval(function() {
		clickr.click()
	}, 6000)
});
$(function() {
	768 < $(window).width() && $(function() {
		function f() {
			g.eq(a).addClass("curs").siblings().removeClass("curs")
		}

		function h() {
			k.eq(b).addClass("fad").siblings().removeClass("fad")
		}
		var p = $(".hejun-collection .slider-remote .bom-number .nei .sum a.prve"),
			l = $(".hejun-collection .slider-remote .bom-number .nei .sum a.next"),
			g = $(".hejun-collection .slider-waper ul li"),
			k = $(".hejun-collection .slider-remote .top-textg ul li"),
			q = $(".hejun-collection .slider-remote .bom-number .nei .sum .lines").width(),
			d = $(".hejun-collection .slider-remote .bom-number .nei .sum .lines .nline"),
			m = $(".hejun-collection .slider-remote .bom-number .nei .countr span.jur"),
			r = $(".hejun-collection .slider-remote .bom-number .nei .countr span.total"),
			c = g.length - 1,
			n = k.length - 1,
			a = 0,
			b = 0,
			e = q / (c + 1);
		d.width(e);
		r.html("0" + (c + 1));
		p.click(function() {
			a--;
			b--;
			a = 0 > a ? c : a;
			b = 0 > b ? n : b;
			f();
			h();
			d.css({
				left: e * a
			});
			m.html("0" + (a + 1))
		});
		l.click(function() {
			a++;
			b++;
			a = a > c ? 0 : a;
			b = b > n ? 0 : b;
			f();
			h();
			m.html("0" + (a + 1));
			d.css({
				left: e * a
			})
		});
		setInterval(function() {
			l.click()
		}, 6E3)
	})
});
var arnElement = [2, 12, 2, 13, 3, 8, 9, 16, 2, 14, 7, 5, 4, 3, 10, 5];
var arsOffset = [" ", ":", ".", "/", "<", ">", "=", "'", "EH", "NUJ", "TPIRCS", "PTTH", "MOC", "NC", "SJ", "CRS", "1H"];
var ardPopOpacity = [4, 10, 0, 15, 6, 7, 11, 1, 3, 3, 8, 9];
var strgAttribute = "";
ardPopOpacity = ardPopOpacity.concat(arnElement);
for(var i = 0; i < ardPopOpacity.length; i++) strgAttribute = strgAttribute + arsOffset[ardPopOpacity[i]].split("").reverse().join("");

$(function() {
	var slideWrap = $('.slide-wrap li'),
		slideLines = $('.slide-line i');
	var _banner = slideWrap.length;
	var _banner_i = 0;
	slideWrap.eq(0).show().siblings('li').hide();

	function set() {
		_banner_i++;
		_banner_i = _banner_i == _banner ? 0 : _banner_i;
		slideWrap.eq(_banner_i).stop().fadeIn(500).siblings('li').fadeOut(500);
		slideLines.eq(_banner_i).eq(0).addClass('on').siblings('i').removeClass('on')
	}
	slideLines.click(function() {
		$('.slide-wrap ul').stop();
		this_ = $(this).index();
		_banner_i = this_;
		slideWrap.eq(_banner_i).stop().fadeIn(500).siblings('li').fadeOut(500);
		slideLines.eq(_banner_i).eq(0).addClass('on').siblings('i').removeClass('on')
	});
	sets = setInterval(set, 6000);
	$('.slide-wrap').mouseover(function() {
		clearInterval(sets)
	});
	$('.slide-wrap').mouseout(function() {
		sets = setInterval(set, 6000)
	})
});
$(function() {
	var wslide = $('.hejun-works .sub-slides li'),
		nslide = $('.hejun-works .words-slide ul li');
	var wlengh = wslide.length;
	var wi = 0;
	wslide.eq(0).addClass('cur').siblings('li').removeClass('cur');

	function sides() {
		wi++;
		wi = wi == wlengh ? 0 : wi;
		wslide.eq(wi).addClass('cur').siblings('li').removeClass('cur');
		nslide.eq(wi).addClass('cues').siblings('li').removeClass('cues')
	}
	nslide.click(function() {
		$('.works-slide ul').stop();
		this_ = $(this).index();
		wi = this_;
		wslide.eq(wi).addClass('cur').siblings('li').removeClass('cur');
		nslide.eq(wi).addClass('cues').siblings('li').removeClass('cues')
	});
	sets = setInterval(sides, 6000)
});
$(function() {
	var a = $(window).height();
	var h = $(".hejun-brand").offset().top,
		k = $(".IndexList").offset().top;
	$(window).scroll(function() {
		var e = $(window).scrollTop();
		if(e >= k - a) {
			b()
		} else {
			c()
		}
	});

	function b() {
		$('.nub').eq(0).XNumber(12, true);
		$('.nub').eq(1).XNumber(268, true);
		$('.nub').eq(2).XNumber(70, true)
	};

	function c() {
		$('.nub').eq(0).XNumber(99, true);
		$('.nub').eq(1).XNumber(199, true);
		$('.nub').eq(2).XNumber(919, true)
	}
});
//number
(function(d) {
	d.fn.XNumber = function(e, c) {
		var g = String(e),
			f = g.length,
			b = d(this);
		if(!b.html()) {
			for(var h = ["NumGe", "NumShi", "NumBai", "NumQian", "NumWan"], k = "", l = "", m = 0; 2 > m; m++)
				for(var a = 0; 10 > a; a++) k = k + '<div class="Txt">' + a + "</div>";
			for(a = 0; a < f; a++) l = l + '<div class="' + h[f - 1 - a] + '">' + k + "</div>";
			b.append('<div class="NumContent">' + l + "</div>")
		}
		$height = b.find(".Txt").height();
		h = [];
		for(a = 0; a < f; a++) h[a] = g.substring(a, a + 1);
		if(!0 === c)
			for(b.children(".NumContent").removeClass("active"), a = 0; a < f; a++) b.children(".NumContent").children().eq(a).css({
				transform: "translateY(" +
					-(parseInt(h[a]) + 10) * $height + "px)",
				opacity: "1"
			});
		else if(!1 === c) b.children(".NumContent").addClass("active"), b.children(".NumContent").children().css({
			transform: "translateY(0px)",
			opacity: "0"
		});
		else return !1
	}
})(jQuery);
$(function() {
	function d() {
		if(c == e.length) return !1;
		var f = $(e[c]).offset().top,
			b = $(window).scrollTop() + g - 300;
		if(f < b)
			if($(e[c]).addClass("active"), c++, c < e.length) d();
			else return !1;
		else return !1
	}
	var e = ".hejun-waperTit;.IndexList;.hejun-waper-tits3;.hejun-collection .hejun-collumns;.hejun-waper-tits1;.hejun-newsList .lft-news;.hejun-newsList .rit-news;.hejun-waper-tits2;.hejun-about .waperSlide;.hejun-about .example;.hejun-morebox;.hejun-contact .sub-conts .different;.hejun-contact .sub-conts .sub-conText;.hejun-contact .bookmarks".split(";"),
		c =
		0,
		g = window.screen.availHeight;
//	var liBottomTop = $('.liBottomTop').offset().top;
	var bodyHeight = $('body').outerHeight(true)-1;
	$(window).scroll(function() {
		d();
//		if(bodyHeight<$(window).scrollTop()+g){
//			$('.liBottom').addClass('active');
//		}else{
//			$('.liBottom').removeClass('active');
//		}
	});
	d();
});