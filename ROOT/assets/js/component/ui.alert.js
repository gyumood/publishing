//fn : ui얼럿 2018.06.04
window.uiAlert={
	init : function(o){
		this.cacheElement(o);
		this.fnReset();
		this.setEvent();
	},
	cacheElement : function(o){
		this.txt=o.txt;
		this.time=(o.time) ? o.time : 2000;
		this.skin=(o.skin) ? o.skin : 'uialert_box';
		this.objName='.uialert';
		this.objCheck=jQuery(this.objName);
		this.clActive='view';
		this.tag='<div class="uialert '+this.skin+'"><p>'+this.txt+'</p></div>';
		this.body=jQuery('body');
		this.timeout;
	},
	fnReset : function(){
		clearTimeout(this.timeout);
		this.objCheck.addClass(this.clActive);
	},
	fnOut : function(){
		var e$=this;
		var obj=jQuery(e$.objName);
		setTimeout(function(){
			var verticalMiddle=-obj.find('p').outerHeight()/2;
			obj.addClass(e$.clActive).find('p').css({marginTop:verticalMiddle});
		},0);
		e$.timeout=setTimeout(function(){
			obj.removeClass(e$.clActive);
			e$.timeout=setTimeout(function(){obj.remove()},500);
		},e$.time);
	},
	setIn : function(){
		this.objCheck.remove();
		this.body.append(this.tag);
		this.fnOut();
	},
	setEvent : function(){
		if (this.objCheck.find('p').html()!=this.txt) {
			this.setIn();
		}else{
			this.fnOut();
		}
	}
}