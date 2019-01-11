//fn : ui토글 2018.06.04
window.uiToggle= {
	init : function(o,tg){
		this.cacheElement(o,tg);
		this.setEvent();
	},
	cacheElement : function(o,tg){
		this.btn=jQuery(o);
		this.tg=(tg) ? jQuery(tg) : jQuery(this.btn.attr('href')); //타겟을 설정하지 않으면 href에서 대상을 찾는다
		this.clActive='view';
	},
	setEvent : function(){
		if (this.btn.hasClass(this.clActive)) {
			this.btn.add(this.tg).removeClass(this.clActive);
		}else{
			this.btn.add(this.tg).addClass(this.clActive);
		}
	}
}

//fn : ui토글 그룹 2018.06.04
window.uiToggleGroup=function(o){
	this.init(o);
};
uiToggleGroup.prototype = {
	init : function(o){
			this.cacheElement(o);
			if (!this.group.hasClass('uiToggleGroupActive')) this.setEvent(); //중복호출 대응
	},
	cacheElement : function(o){
		this.group=jQuery('[toggle-group='+o.group+']');
		this.clMain=(o.groupName) ? o.groupName : ['toggle_q','toggle_a']; //타겟세팅 및 변경
		this.allBtn=this.group.find('.'+this.clMain[0]);
		this.allTg=this.group.find('.'+this.clMain[1]);
		this.clActive='view';
		this.allClose=o.allClose; //다른타겟들 off하면서 on
		this.noOff=o.noOff; //토글중 off가 안됨
		this.start=Number(o.start); //첫장면 선택
	},
	setEvent : function(){
		var e$=this;
		e$.group.addClass('uiToggleGroupActive');
		e$.allBtn.on('click',function(e){
			var btn=jQuery(this);
			var tg=e$.rtNode(btn);
			e$.fnToggle(btn,tg);
			e.preventDefault();
		});
		if (this.start) e$.allBtn.eq(this.start-1).click();
	},
	fnToggle : function(btn,tg){
		if (this.allClose&&!btn.hasClass(this.clActive)) this.allBtn.add(this.allTg).removeClass(this.clActive);
		if (tg.hasClass(this.clActive)) {
			if (!this.noOff) tg.add(btn).removeClass(this.clActive);
		}else{
			tg.add(btn).addClass(this.clActive);
		}
	},
	rtNode : function(btn){
		var btn=jQuery(btn),
			index=btn.attr('toggle-index'),
			result;
		if (index) {
			result=this.allTg.eq(index-1);
		}else{
			if (btn.siblings('.'+this.clMain[1]).length) { result=btn.siblings('.'+this.clMain[1]); }
			else if (btn.parent().siblings('.'+this.clMain[1]).length) { result=btn.parent().siblings('.'+this.clMain[1]); }
			else if (btn.parent().parent().siblings('.'+this.clMain[1]).length) { result=btn.parent().parent().siblings('.'+this.clMain[1]); }
		}
		return result;
	}
}