/*prototype.js 충돌방지를 위해 $대신 jQuery 사용*/
jQuery.noConflict();

//fn : 네이티브상세
nativeADdetail={
	init : function(){
		this.fnImageSlide();
		this.fnConnect();
	},
	fnImageSlide : function(){
		//차량 이미지 스와이프
		new uiSlide({
			obj:'.sponsorDetailImage',
			speed:333,
			loadImage:'.loadImage',
			noImage:'/images/ass/photo_l.gif',
			showNumber:true,
			mouseEvent:true,
			fnSlidestart:function(num){
				//넘버링 : 한줄광고 높이체크
				var w=jQuery('.carDetailImage'),
					tg=w.find('.itemScene:eq('+num+') .cartext'),
					pos=(tg.length) ? tg.outerHeight()+'px' : 0;
				w.find('.showNumber').css({marginBottom:pos});
			}
		});
		new uiSlide({
			obj:'.car_newList',
			speed:300,
			showNumber:true,
			mouseEvent:true
		});
	},
	fnConnect : function(){
		//연락하기 영역 애니메이션
		var tg=jQuery('.area_connect');
		jQuery(window).on('load scroll',function(){
			var scr=jQuery(this).scrollTop();
			(scr>2) ? tg.addClass('active') : tg.removeClass('active');
		});
	}
};