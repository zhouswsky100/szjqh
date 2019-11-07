export default {
	install : function(Vue){
		Vue.filter("memberCenterMoneyFormat",function (value) {
			var s = 0;
			var flag = true;
			if(value == '') {
		        s = 0;
		    }else if(value >= 100000) {
		        s = parseFloat(value / 10000);
		        flag = false;
		    }else{
		    	s = value;
		    }
		    var n = 2;
		    s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
		    var l = s.split(".")[0].split("").reverse();
		    var r = s.split(".")[1];
		    var t = "";
		    for (var i = 0; i < l.length; i++) {
		        t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
		    }
			var result = t.split("").reverse().join("") + "." + r;
			if(flag){
				return result;
			}else{
				return result + "万";
			}
		});

		Vue.filter("pointFormat",function(num){
			var result;
		    var numToString = num + '';
		    var dotNum = numToString.indexOf(".");
		    if(Number(numToString) == 0){
		    	return '0.00';
		    }
		    if (dotNum == -1) {//无小数点
		        result = numToString + ".00";
		    } else {//有小数点
		        result = numToString.substring(0, dotNum + 3);
		    }
		    return result;
		});

		Vue.filter("dateFormat",function(num){
				var result;
		    result = num.substring(0, 4) + "-" + num.substring(4, 6) + "-" + num.substring(6, 8);
		    return result;
		});

		Vue.filter("getUnixTime",function(nS){
			if(nS == ''){
				return;
			}
			var time = new Date(parseInt(nS)).toLocaleString();
			if(time.length < 18){
				return time.substring(0,8);
			}else{
				return time.substring(0,10);
			}
		});
		//金额格式化，将金额格式化为12,345.00
		Vue.filter("moneyFormat",function(s,n){
	        var n = n >= 0 && n <= 20 ? n : 2;
	        var s = parseFloat(s).toFixed(n);
	        var re = /(\d{1,3})(?=(\d{3})+(?:\.))/g;
	        return s.replace(re, "$1,");
	    });

	    Vue.filter("formatMoneyFloor",function(num){
	        var out = Math.floor(num*10000/100)*1.0/100;
	        return out;
	    });

	    Vue.filter("formatMoneyRound",function(num){
	        var out = Math.round(num*10000/100)*1.0/100;
	        return out;
	    });
	    //名字格式化，将名字格式化为姓**
	    Vue.filter("nameFilter", function(name) {
	    	return name ? (name.substring(0,1) + '**') : '' 	
	    });
	    //手机号码格式化，将手机号码格式化成134****2134
	    Vue.filter("mbPhnFilter", function(mb) {
	    	return mb ? (mb.substring(0,3) + '****' + mb.substring(mb.length-4)) : '' 	
	    });
	    //身份证号码格式化，将身份证号码格式化成1234****5678
	    Vue.filter("idNoFilter", function(idNo) {
	    	return idNo ? (idNo.substring(0,4) + '****' + idNo.substring(idNo.length-4)) : ''
	    });
	    //银行卡号格式化，将银行卡号格式化成1234********5678
	    Vue.filter("cardFilter", function(cardNo){
	    	return cardNo ? (cardNo.substring(0,4) + '********' + cardNo.substring(cardNo.length-4)) : ''
	    })
	}
}