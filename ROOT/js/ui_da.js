/*prototype.js �浹������ ���� $��� jQuery ���*/
jQuery.noConflict();

//fn : ����Ƽ���
nativeADdetail={
	init : function(){
		this.fnImageSlide();
		this.fnConnect();
	},
	fnImageSlide : function(){
		//���� �̹��� ��������
		new uiSlide({
			obj:'.sponsorDetailImage',
			speed:333,
			loadImage:'.loadImage',
			noImage:'/images/ass/photo_l.gif',
			showNumber:true,
			mouseEvent:true,
			fnSlidestart:function(num){
				//�ѹ��� : ���ٱ��� ����üũ
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
		//�����ϱ� ���� �ִϸ��̼�
		var tg=jQuery('.area_connect');
		jQuery(window).on('load scroll',function(){
			var scr=jQuery(this).scrollTop();
			(scr>2) ? tg.addClass('active') : tg.removeClass('active');
		});
	}
};