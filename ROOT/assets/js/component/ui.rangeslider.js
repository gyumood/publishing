//fn : ui슬라이더 2018.04.26
window.uiRangeSlider=function(o){
	if (typeof jQuery.fn.slider !== 'undefined') this.init(o);
};
uiRangeSlider.prototype = {
	init : function(o){
		if (jQuery(o.obj).length) {
			this.cacheElement(o);
			this.setEvent(o);
		}
	},
	cacheElement : function(o){
		this.obj=jQuery(o.obj);
		this.data=o.data;
		this.unit=o.unit;
		this.config;
	},
	setEvent : function(o){
		var e$=this;
		this.rtConfig();
		this.obj.slider(this.config);
	},
	fnMove : function(tg,valueMin,valueMax){
		var txt=tg.parent().find('.text');
		var ifMinFull=valueMin==0;
		var ifMaxFull=valueMax==this.data.length-1;
		if (valueMin==0&&ifMaxFull) {
			txt.text('전체');
		}else if (ifMinFull) {//min full
			txt.text(this.rtComma(this.data[valueMax])+this.unit+' 이하');
		}else if (ifMaxFull) {//max full
			txt.text(this.rtComma(this.data[valueMin])+this.unit+' 이상');
		}else if (valueMin==valueMax) {//min max 같을때
			txt.text(this.rtComma(this.data[valueMin])+this.unit);
		}else{
			txt.text(this.rtComma(this.data[valueMin])+'~'+this.rtComma(this.data[valueMax])+this.unit);
		}
	},
	rtComma : function(num){
		var pattern = /(-?[0-9]+)([0-9]{3})/;
		num += '';
		while(pattern.test(num)){
			num = num.replace(pattern,"$1,$2");
		};
		return num;
	},
	rtConfig : function(){
		var e$=this,
			start=[e$.data[0], e$.data.length-1];
		e$.config = {
			range: true,
			min: 0,
			max: e$.data.length-1,
			step: 1,
			values: [start],
			create: function(event, ui){
				jQuery(this).slider('values',start)
				jQuery(this).find('.ui-slider-range').addClass('active');
				e$.obj.trigger('create.ui.slider');
			},
			start: function(event, ui){
				e$.obj.trigger('start.ui.slider');
			},
			slide: function( event, ui ) {
				if (ui.values[0]==ui.values[1]) return false;
				e$.fnMove(jQuery(this),ui.values[0],ui.values[1]);
				e$.obj.trigger('slide.ui.slider');
			},
			change: function(event, ui){
				e$.fnMove(jQuery(this),ui.values[0],ui.values[1]);
				e$.obj.trigger('change.ui.slider');
			}
		}
	}
}