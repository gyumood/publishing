var daum_adam_vars = {
	client : '164cZ19T133c909accb',
	position : 'MIDDLE',
	bannerDivId : 'encar_ad',
	test : false
};

var adBanner = document.getElementById(daum_adam_vars.bannerDivId);
var browserChk = navigator.userAgent.toLowerCase();

// 모바일 기기에서만 작동
if (browserChk.indexOf("android")!==-1 || browserChk.indexOf("iphone")!==-1 || browserChk.indexOf("ipad")!==-1){

	function adamViewModeCheck(){if ( window.innerWidth < window.innerHeight ) {adamViewMode = true;} else if ( window.innerWidth > window.innerHeight )	{adamViewMode = false;	}}
	function setAdPosition(target, position, topLimit, btmLimit) {
		if (!target)return false;
		var obj = target;
		obj.initTop = position;
		obj.topLimit = topLimit;
		obj.bottomLimit = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight) - btmLimit - obj.offsetHeight;
		obj.style.position = "absolute";
		obj.top = obj.initTop;
		obj.left = obj.initLeft;
		if (typeof(window.pageYOffset) == "number") {obj.getTop = function() {return window.pageYOffset;}}
			else if (typeof(document.documentElement.scrollTop) == "number") {obj.getTop = function() {return Math.max(document.documentElement.scrollTop, document.body.scrollTop);}}
			else {obj.getTop = function() {return 0;}}
		if (self.innerHeight) {obj.getHeight = function() {return self.innerHeight;}}
			else if(document.documentElement.clientHeight) {obj.getHeight = function() {return document.documentElement.clientHeight;}}
			else {obj.getHeight = function() {return 500;}}
		if (obj.initTop > 0) {pos = obj.getTop() + obj.initTop;} else {pos = obj.getTop() + obj.getHeight() + obj.initTop;}
		if (pos > obj.bottomLimit)pos = obj.bottomLimit;
		if (pos < obj.topLimit)pos = obj.topLimit;
		obj.style.top = (obj.top+pos) + "px";
	}
	function docLoadFixed(){
		var loc = location.href;
		if(loc.indexOf('index') > -1){
			// adBanner.style.position = 'fixed';
			// adBanner.style.width = '100%'
			// adBanner.style.bottom = '0';
			// adBanner.style.left = '0';
			// adBanner.style.zIndex = '1000';
		}

	}

	//갤럭시S1 (fixed layer + touchstart hidden 방식)
	if ( browserChk.indexOf('shw-m110s')!=-1 || browserChk.indexOf('shw-m110k')!=-1 || browserChk.indexOf('shw-m110l')!=-1 ) {
		function checkTouchS1(e) {
			adamViewModeCheck();
			if (adamViewMode){
				var evt = e || window.event;
				var target = evt.target || evt.srcElement;
				var node = target.parentNode;
				var hide = true;
				while (node) { if (node.id === daum_adam_vars.bannerDivId) {hide = false;break;}	node = node.parentNode;}
				if (hide) { adBanner.style.display = 'none'; 	}
			}
		}
		function scrollEventS1() {adBanner.style.display = 'block';}
		document.body.addEventListener('touchstart', checkTouchS1, false);
		window.addEventListener('scroll', scrollEventS1, false);
		window.addEventListener('load', docLoadFixed, false);
	}

	//갤럭시Tab
	else if ( browserChk.indexOf('shw-m180s')!=-1 || browserChk.indexOf('shw-m180k')!=-1 || browserChk.indexOf('shw-m180l')!=-1 ) {
		function checkTouchTab() {
			adBanner.style.position = 'static';
		}
		document.body.addEventListener('touchstart', checkTouchTab, false);
		window.addEventListener('load', docLoadFixed, false);
	}

	//안드로이드 3.x 이하 (absolute layer + touchstart hidden 방식)
	else if ( browserChk.indexOf('android 3')!=-1 || browserChk.indexOf('android 2')!=-1 || browserChk.indexOf('android 1')!=-1){
		function docLoadEtc() {
			setTimeout(scrollEventEtc, 1000);
		}

		function scrollEventEtc() {
			setAdPosition(adBanner, -24, 0, -24);
			adBanner.style.display = 'block';
		}

		function checkTouchEtc(e) {
			adamViewModeCheck();
			if (adamViewMode){
				var evt = e || window.event;
				var target = evt.target || evt.srcElement;
				var node = target.parentNode;
				var hide = true;
				while (node) { if (node.id === daum_adam_vars.bannerDivId) {hide = false;break;}	node = node.parentNode;}
				if (hide) {adBanner.style.display = 'none';}
			}
		}

		document.body.addEventListener('touchstart', checkTouchEtc, false);
		window.addEventListener('scroll', scrollEventEtc, false);
		window.addEventListener('load', docLoadEtc, false);
	}

	//IOS 6 이하 (absolute layer + touchstart hidden 방식)
	else if (browserChk.indexOf("iphone os 6") != -1 || browserChk.indexOf("iphone os 5") != -1 || browserChk.indexOf("iphone os 4") != -1 ) {
		function docLoadIOS6() {
			setTimeout(scrollEventEtc, 1000);
		}

		function scrollEventIOS6() {
			setAdPosition(adBanner, -24, 0, -24);
			adBanner.style.display = 'block';
		}

		function checkTouchIOS6(e) {
			adamViewModeCheck();
			if (adamViewMode){
				var evt = e || window.event;
				var target = evt.target || evt.srcElement;
				var node = target.parentNode;
				var hide = true;
				while (node) { if (node.id === daum_adam_vars.bannerDivId) {hide = false;break;}	node = node.parentNode;}
				if (hide) {adBanner.style.display = 'none';}
			}
		}

		document.body.addEventListener('touchstart', checkTouchIOS6, false);
		window.addEventListener('scroll', scrollEventIOS6, false);
		window.addEventListener('load', docLoadEtcIOS6, false);
	}

	//IOS 7 이상 & 안드로이드 4.x 이상 (fixed layer 방식)
	else if (browserChk.indexOf("iphone") != -1 || browserChk.indexOf("android") != -1) {
		window.addEventListener('load', docLoadFixed, false);
	}

	//기타 (absolute layer + touchstart hidden 방식)
	else{

		function docLoadEtc() {
			setTimeout(scrollEventEtc, 1000);
		}

		function scrollEventEtc() {
			setAdPosition(adBanner, -24, 0, -24);
			adBanner.style.display = 'block';
		}

		function checkTouchEtc(e) {
			adamViewModeCheck();
			if (adamViewMode){
				var evt = e || window.event;
				var target = evt.target || evt.srcElement;
				var node = target.parentNode;
				var hide = true;
				while (node) { if (node.id === daum_adam_vars.bannerDivId) {hide = false;break;}	node = node.parentNode;}
				if (hide) {adBanner.style.display = 'none';}
			}
		}
		document.body.addEventListener('touchstart', checkTouchEtc, false);
		window.addEventListener('scroll', scrollEventEtc, false);
		window.addEventListener('load', docLoadEtc, false);
	}
}