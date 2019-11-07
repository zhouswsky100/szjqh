import $ from 'jquery'
import configUrl from '../data/configUrl'

const util = {
	//获取url参数
	getURLParameters: function(parameter){
		var parameters = window.location.search;
		var parametersObj = {};
		if(parameters.indexOf('?') > -1){
			var str = parameters.substr(1);
				str = str.split('&');
			for(var i = 0;i < str.length;i ++){
				parametersObj[str[i].split('=')[0]] = decodeURIComponent(str[i].split('=')[1]);
			}
		}
		return parametersObj[parameter];
	},
	//URL去除哈希值
	getUrlExceptHash: function(){
		var href = window.location.href, hash = window.location.hash;
		return hash ? href.substr(0, href.indexOf(hash)) : href;
	},
	//异步加载数据
	getMyrequest: function(opt) {
		var deferred = $.Deferred();
		opt.data = typeof opt.data === 'undefined' ? {} : opt.data;
		$.ajax({
			type: opt.type,
			dataType: 'json',
			url: opt.url,
			data: opt.data
		})
		.done(function (resp) {
			if (resp.code == '1000') {
				deferred.resolve(resp);
				opt.success(resp)
			} else {
				deferred.reject(resp);
				opt.fail(resp)
			}
		})
		.fail(function (resp) {
			deferred.reject(resp);
			opt.fail(resp)
		});

		return deferred.promise();
	},
	//异步提交复杂数据
	getMyCompGetRequest: function(opt) {
		var deferred = $.Deferred();
		opt.data = typeof opt.data === 'undefined' ? {} : opt.data;
		$.ajax({
			type: opt.type,
			dataType: 'json',
			url: opt.url,
			contentType: "application/json; charset=utf-8"
		})
		.done(function (resp) {
			if (resp.code == '1000') {
				deferred.resolve(resp);
				opt.success(resp)
			} else {
				deferred.reject(resp);
				opt.fail(resp)
			}
		})
		.fail(function (resp) {
			deferred.reject(resp);
			opt.fail(resp)
		});

		return deferred.promise();
  },
  getMyCompPostRequest: function(opt) {
		var deferred = $.Deferred();
		opt.data = typeof opt.data === 'undefined' ? {} : opt.data;
		$.ajax({
			type: opt.type,
			dataType: 'json',
			url: opt.url,
			data: opt.data,
		})
		.done(function (resp) {
			if (resp.code == '1000') {
				deferred.resolve(resp);
				opt.success(resp)
			} else {
				deferred.reject(resp);
				opt.fail(resp)
			}
		})
		.fail(function (resp) {
			deferred.reject(resp);
			opt.fail(resp)
		});

		return deferred.promise();
	},
	//转义特殊字符<,>,",'
	escapeToHtmlEntity: function (str) {
		if (!str) {
			return '';
		}

		var escape = {
			'<': '&lt;',
			'>': '&gt;',
			'\"': '&quot;',
			'&': '&amp;'
		};

		return str.replace(/[&<>"]/g, function (match) {
			return escape[match] || match;
		});
	},

  //转义特殊字符<,>,",'
  unEscapeToHtmlEntity: function (str) {
      if (!str) {
          return '';
      }

      str = str.replace(/&lt;/g, '<')
              .replace(/&gt;/g, '>')
              .replace(/&quot;/g, '\"')
              .replace(/&amp;/g, '&')
              .replace(/&nbsp;/g, ' ')
              .replace(/<br>/g, '\n');

      return str;
  },
  //	延迟函数
  delay: function (time, callBack) {
  	setTimeout(function () {
  		callBack && callBack();
  	}, time)
  },
  diffTime: function(start, end) {
  	var start = new Date(start),
  		end = new Date(end);
    var diff = end.getTime() - start.getTime();
    var days=Math.floor(diff/(24*3600*1000));

    //计算出小时数
    var leave1=diff%(24*3600*1000);    //计算天数后剩余的毫秒数
    var hours=Math.floor(leave1/(3600*1000));
    //计算相差分钟数
    var leave2=leave1%(3600*1000);        //计算小时数后剩余的毫秒数
    var minutes=Math.floor(leave2/(60*1000));

    //计算相差秒数
    var leave3=leave2%(60*1000);      //计算分钟数后剩余的毫秒数
    var seconds=Math.round(leave3/1000);

    var returnStr = "";
    if(minutes>0) {
        returnStr = minutes + "分" + returnStr;
    }
    if(hours>0) {
        returnStr = hours + "小时" + returnStr;
    }
    if(days>0) {
        returnStr = days + "天" + returnStr;
    }
    return returnStr;
  },
  //	选择日期 将2016-09-09转换成new Date()格式
  selectDateFormat: function (date, sep) {
  	date = date.split(sep);
  	var y = Number(date[0]),
  			m = Number(date[1]) - 1,
  			d = Number(date[2]);
  	return new Date(y, m, d)
   },
   getNowFormatDate :function(data) {
    var date = new Date(data);
    var seperator1 = "-";
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = year + seperator1 + month + seperator1 + strDate;
    return currentdate;
},
  //	设置日期
  setDate: function (num, date, native) {
  	date = typeof date === 'undefined' ? new Date() : date;
  	var y,
  			m,
  			d = date.getDate() + num;

  	var dd = new Date(date.setDate(d));

    if (native === 'native') {
      return dd;
    }

		y = dd.getFullYear();
		m = dd.getMonth() + 1;
		d = dd.getDate();
  	m = m > 9 ? m : '0' + m;
  	d = d > 9 ? d : '0' + d;
  	return y + '-' + m + '-' + d;
  },

  //	根据日期获取天数
  getDays: function (start, end, sep) {
  	var dd = end.split(sep),
  			y = Number(dd[0]),
  			m = Number(dd[1] - 1),
  			d = Number(dd[2]);
  	end = +new Date(y, m, d);
  	dd = start.split(sep);
  	y = Number(dd[0]);
  	m = Number(dd[1] - 1);
  	d = Number(dd[2]);
  	start = +new Date(y, m, d)

  	return Math.floor((end - start) / 1000 / (24 * 60 * 60))
  },
  // 将标准时间转换为字符串
  getDateStr: function (date, fmt) {
    if(!date){
      return date
    }
    var dateStr = new Date(date);

    if (fmt) {
      var year, month, date, hour, minute, second, day,
        reg, rule, afterFormat;
      var dayObj = {
        '0': '日',
        '1': '一',
        '2': '二',
        '3': '三',
        '4': '四',
        '5': '五',
        '6': '六'
      };
      year = dateStr.getFullYear();
      month = dateStr.getMonth() + 1;
      date = dateStr.getDate();
      hour = dateStr.getHours();
      minute = dateStr.getMinutes();
      second = dateStr.getSeconds();
      day = dateStr.getDay();
      rule = {
        'yy': year - 2000,
        'yyyy': year,
        'M': month,
        'MM': month < 10 ? '0' + month : month,
        'd': date,
        'dd': date < 10 ? '0' + date : date,
        'h': hour,
        'hh': hour < 10 ? '0' + hour : hour,
        'm': minute,
        'mm': minute < 10 ? '0' + minute : minute,
        's': second,
        'ss': second < 10 ? '0' + second : second,
        'w': '星期' + dayObj[day]
      };

      reg = /y{2,4}|M{1,2}|d{1,2}|h{1,2}|m{1,2}|s{1,2}|w/g;

      afterFormat = fmt.replace(reg, function($) {
        if ($ in rule) {
          return rule[$];
        } else {
          return $;
        }
      });

      return afterFormat;
    }

    var y = dateStr.getFullYear();
    var m = dateStr.getMonth() + 1 > 9 ? dateStr.getMonth() + 1 : '0' + (dateStr.getMonth() + 1);
    var d = dateStr.getDate() > 9 ? dateStr.getDate() : '0' + dateStr.getDate();
    return y + '-' + m + '-' + d;
  },

  //	数组去重 将原数组去掉选中的数组   selectArr--选中数组  arr--原数组  key--去重比较字符串
  getNewArr (selectArr, arr, key) {
  	let newArr = []
  	for (var i = 0; i < arr.length; i ++) {
  		var push = true
  		for (var j = 0; j < selectArr.length;j ++) {
  			if (arr[i][key] === selectArr[j][key]) {
  				push = false
  				break;
  			}
  		}

  		if (push) {
  			newArr.push(arr[i])
  		}
  	}

  	return newArr
  },

  //  根据key 取出数组里面对应匹配的obj   key----数组对象要比较的属性  ayy----对象数组  val----比较的值
  getKeyObj (key, arr, val) {
    let obj = {}

    for (var i = 0; i < arr.length; i ++) {
      if (val === arr[i][key]) {
        obj = arr[i]
        return obj
      }
    }
  },

  // 数组字段查询
  kasKey(arr, key, str) {
	  if (!Array.isArray(arr)) {
	    return
    }
    if (Object.prototype.toString.call(key) !== "[object String]") {
      return
    }
    let len = arr.length
    let index = -1
    while (++index < len) {
	    let val = arr[index]
	    if (val[key] === str) {
	      return true
      }
      continue
    }
  },
  // canvas
  drawBg() {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.lineWidth = .3;
    ctx.strokeStyle = (new Color(150)).style;

    let mousePosition = {
      x: 30 * canvas.width / 100,
      y: 30 * canvas.height / 100
    };

    let dots = {
      nb: 250,
      distance: 100,
      d_radius: 150,
      array: []
    };

    function colorValue(min) {
      return Math.floor(Math.random() * 255 + min);
    }

    function createColorStyle(r,g,b) {
      return 'rgba(' + r + ',' + g + ',' + b + ', 0.8)';
    }

    function mixComponents(comp1, weight1, comp2, weight2) {
      return (comp1 * weight1 + comp2 * weight2) / (weight1 + weight2);
    }

    function averageColorStyles(dot1, dot2) {
      let color1 = dot1.color,
        color2 = dot2.color;

      let r = mixComponents(color1.r, dot1.radius, color2.r, dot2.radius),
        g = mixComponents(color1.g, dot1.radius, color2.g, dot2.radius),
        b = mixComponents(color1.b, dot1.radius, color2.b, dot2.radius);
      return createColorStyle(Math.floor(r), Math.floor(g), Math.floor(b));
    }

    function Color(min) {
      min = min || 0;
      this.r = colorValue(min);
      this.g = colorValue(min);
      this.b = colorValue(min);
      this.style = createColorStyle(this.r, this.g, this.b);
    }

    function Dot(){
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;

      this.vx = -.5 + Math.random();
      this.vy = -.5 + Math.random();

      this.radius = Math.random() * 2;

      this.color = new Color();
    }

    Dot.prototype = {
      draw: function(){
        ctx.beginPath();
        ctx.fillStyle = this.color.style;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fill();
      }
    };

    function createDots(){
      for(let i = 0; i < dots.nb; i++){
        dots.array.push(new Dot());
      }
    }

    function moveDots() {
      for(let i = 0; i < dots.nb; i++){

        let dot = dots.array[i];

        if(dot.y < 0 || dot.y > canvas.height){
          dot.vx = dot.vx;
          dot.vy = - dot.vy;
        }
        else if(dot.x < 0 || dot.x > canvas.width){
          dot.vx = - dot.vx;
          dot.vy = dot.vy;
        }
        dot.x += dot.vx;
        dot.y += dot.vy;
      }
    }

    function connectDots() {
      for(let i = 0; i < dots.nb; i++){
        for(let j = 0; j < dots.nb; j++){
          let i_dot = dots.array[i];
          let j_dot = dots.array[j];

          if((i_dot.x - j_dot.x) < dots.distance && (i_dot.y - j_dot.y) < dots.distance && (i_dot.x - j_dot.x) > - dots.distance && (i_dot.y - j_dot.y) > - dots.distance){
            if((i_dot.x - mousePosition.x) < dots.d_radius && (i_dot.y - mousePosition.y) < dots.d_radius && (i_dot.x - mousePosition.x) > - dots.d_radius && (i_dot.y - mousePosition.y) > - dots.d_radius){
              ctx.beginPath();
              ctx.strokeStyle = averageColorStyles(i_dot, j_dot);
              ctx.moveTo(i_dot.x, i_dot.y);
              ctx.lineTo(j_dot.x, j_dot.y);
              ctx.stroke();
              ctx.closePath();
            }
          }
        }
      }
    }

    function drawDots() {
      for(let i = 0; i < dots.nb; i++){
        let dot = dots.array[i];
        dot.draw();
      }
    }

    function animateDots() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      moveDots();
      connectDots();
      drawDots();

      requestAnimationFrame(animateDots);
    }

    document.getElementById('canvas').addEventListener('mousemove', function(e){
      mousePosition.x = e.pageX;
      mousePosition.y = e.pageY;
    });

    document.getElementById('canvas').addEventListener('mouseleave', function(e){
      mousePosition.x = canvas.width / 2;
      mousePosition.y = canvas.height / 2;
    });

    createDots();
    requestAnimationFrame(animateDots);
  }
};

export default util

