//补零操作
function BL(num) {
	if (num < 10) {
		return '0' + num;
	} else {
		return '' + num;
	}
}

/* 验证码 */ 
function yzm(num) {
	var arr = '0123456789zxcvbnmasdfghjklqwertyuiopZXCVBNMASDFGHJLQWERTYUIOP';
	var str = '';
	for (var i = 0; i < num; i++) {
		str += arr.charAt(parseInt(Math.random() * arr.length));
	}
	// console.log(str);
	return str;
}

//秒转换时间
function timeset(num) {
	var sec = BL(num % 60); //计算秒
	var min = BL(Math.floor((num / 60) % 60)); //计算分钟
	var hour = BL(Math.floor((num / 60 / 60) % 24)); //计算时
	var day = BL(Math.floor(num / 60 / 60 / 24)); //计算天数
	return {
		'secs': sec,
		'mins': min,
		'hours': hour,
		'days': day
	}
}

/*
 	毫秒转：年月日时分秒
 */
function setTimes(timer) {
	var time = new Date(timer);
	var year = time.getFullYear();//年
	var mon = BL(time.getMonth() + 1);//0 
	var day = BL(time.getDate());//24
	var hour = BL(time.getHours());//时
	var min = BL(time.getMinutes());//分
	var sec = BL(time.getSeconds());//秒

	return {
		secs: sec,
		mins: min,
		hours: hour,
		days: day,
		mons: mon,
		years: year
	}

}

/*
 	表单验证的方法： 调用里面的子功能  (json对象里面有很多子功能)
 	var checkReg = {
 		tel : function() {}
 	}
 	
 	调用方法：
 	checkReg.tel();
 	
*/

var checkReg = {
	trim: function(str) { //去掉前后空格
		var reg = /^\s+|\s+$/g;
		return str.replace(reg, '');
	},
	tel: function(str) { //号码
		var reg = /^1[3-9]\d{9}$/
		return reg.test(str);
	},
	email: function(str) { //邮箱正则:a_a2-+.s @ a_a+2-.s  .s_a2
		var reg = /^\w+([\-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/; //网上推荐
		return reg.test(str);
	},
	idcard: function(str) { //身份证
		var reg = /^(\d{17}|\d{14})[\dX]$/;
		return reg.test(str);
	},
	psweasy: function(str) { //6-18位首字母开头
		var reg = /^\w{6,17}$/;
		return reg.test(str);
	},
	pwwagain: function(str1, str2) { //确认密码
		return str1 === str2; //全等 恒等
	},
	urladr: function(str) { //路径：网址规则
		var reg = /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/;
		return reg.test(str);
	},
	name: function(str) { //账号字母开头,6-20位
		var reg = /^[a-zA-Z][\w\-]{5,19}$/;
		return reg.test(str);
	},
	chinese: function(str) { //中文
		var reg = /^[\u4e00-\u9fa5]{2,6}$/;
		return reg.test(str);
	},
	birthday: function(str) { //生日
		var reg = /^((((19|20)\d{2})-(0?[13-9]|1[012])-(0?[1-9]|[12]\d|30))|(((19|20)\d{2})-(0?[13578]|1[02])-31)|(((19|20)\d{2})-0?2-(0?[1-9]|1\d|2[0-8]))|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))-0?2-29))$/;
		return reg.test(str);
	}
}

//封装一个函数：取cookie 要参数，传键名，给我对应键值
function getCookie(key) {
	var str = document.cookie; //name=lemon; age=18; price=88; like=男
	var arr = str.split('; '); //['name=lemon','age=18','price=88','like=男']
	for(var value of arr) {
		var arr2 = value.split('='); //['name','lemon'] ['age',18]
		if(key == arr2[0]) {
			return arr2[1];
		}
	}
}

/*
 	getStyle() 获取样式
 	参数一：对象名
 	参数二：要获取样式的属性名
 	返回值：样式的值
*/
function getStyle(obj, attr) {
	if (getComputedStyle(obj, false)) {
		//高级浏览器
		return getComputedStyle(obj, false)[attr];
	} else {
		//低版本 IE6-9
		return obj.currentStyle[attr];
	}
}
/*
	运动框架封装：startMove()过渡    jq animate()
	最终版：多对象，多属性，链式运动框架(运动队列)
	参数一：对象名
	参数二：属性，目标值  键名：属性名，键值：目标值    {'width':200,'heigth':400}  实现：宽度和高度一起改变，宽度变成200，高度变成400
	参数三：回调函数(可选参数)
 */

function startMove(obj, json, fnend) {

	clearInterval(obj.timer); //防止定时器叠加
	obj.timer = setInterval(function () {

		var istrue = true;

		//1.获取属性名，获取键名：属性名->初始值
		for (var key in json) { //key:键名   json[key] :键值
			//			console.log(key); //width heigth opacity
			var cur = 0; //存初始值

			if (key == 'opacity') { //初始值
				cur = getStyle(obj, key) * 100; //透明度
			} else {
				cur = parseInt(getStyle(obj, key)); // 300px  300  width heigth borderwidth px为单位的

			}

			//2.根据初始值和目标值，进行判断确定speed方向，变形：缓冲运动
			//距离越大，速度越大,下面的公式具备方向
			var speed = (json[key] - cur) / 6; //出现小数
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed); //不要小数部分，没有这句话或晃动

			if (cur != json[key]) { //width 200 heigth 400
				istrue = false; //如果没有达到目标值，开关false
			} else {
				istrue = true; //true true
			}

			//3、运动
			if (key == 'opacity') {
				obj.style.opacity = (cur + speed) / 100;
				obj.style.filter = 'alpha(opacity:' + (cur + speed) + ')';
			} else {
				obj.style[key] = cur + speed + 'px'; //针对普通属性 left  top height 
			}

		}

		//4.回调函数:准备一个开关,确保以上json所有的属性都已经达到目标值,才能调用这个回调函数
		if (istrue) { //如果为true,证明以上属性都达到目标值了
			clearInterval(obj.timer);
			if (fnend) {
				fnend();
			}
		}

	}, 30); //obj.timer 每个对象都有自己定时器

}

	// 封装ajxa
	// 参数一：请求方式  get  post
 	// 参数二：url接口路径不同
 	// 参数三：传输给后台的数据不同data
	// 参数四：回调函数
	function ajax(type,url,data,fn){
		// 1. 创建请求对象
		var xhr = new XMLHttpRequest();
		// 2. 设置请求参数并发送请求
		if(type.toLowerCase() == 'get'){
			//如果是get方式并且有数据
			if(data){
				url = url + '?' + data;
			}
			xhr.open(type,url,true);
			xhr.send(null);
		}else{
			xhr.open(type,url,true);
			xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
			xhr.send(data);
		}
		// 3. 后台接受前端传输的处理并返回处理好数据

		// 4. 处理服务器返回的数据
		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4){
				if(xhr.status == 200){
					if(fn){
						fn(xhr.responseText);
					}else{
						alert('出错啦！' + xhr.status);
					}
				}
			}
		}
	}