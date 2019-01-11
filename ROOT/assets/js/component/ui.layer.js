//fn : ui레이어 2018.03.16
uiSlideStats=false; //전역체크

window.uiLayer={
	init : function(o){
		if (jQuery(o.obj).length&&!uiSlideStats) {
			this.cacheElement(o);
			if (this.objAll.hasClass(this.classObj)) this.fnReset();
			this.setEvent();
		}
	},
	cacheElement : function(o){
		this.obj=jQuery(o.obj);
		this.objAll=jQuery('.uilayer');
		this.objWrap=this.obj.find('.uilayer_wrap');
		this.classObj='view';
		this.classFix='fixed';
		this.namespaceBtn='.nameBtnAction';
		this.dimmed=(o.dimmed || o.dimmed==undefined) ? this.rtBgElement() : false;
		this.heightFull=o.heightFull;
		this.objAdd=jQuery(o.add);
		this.objDimmed=jQuery('.uilayer_dimmed');
		this.objTarget=(this.objAdd) ? this.obj.add(this.objAdd) : this.obj;
		this.fixChkOk=document.documentElement.clientHeight > this.objWrap.outerHeight();
		this.fixed=(o.fix || o.fixed==undefined) ? ((this.fixChkOk) ? true : false) : false;
		this.activeClass=(this.fixed) ? this.classObj+' '+this.classFix : this.classObj;
	},
	setEvent : function(){
		this.fnToogle(true);
		var e$=this,
			scrT=jQuery(window).scrollTop(),
			scrH=document.documentElement.clientHeight,
			objWrapH=e$.objWrap.outerHeight(),
			absolutePosT=(scrH<objWrapH) ? scrT : scrT+(scrH/2)-(objWrapH/2);
		if(e$.heightFull){
			jQuery(window).on('resize'+e$.namespaceBtn,function(){
				var scrH=document.documentElement.clientHeight;
				e$.objWrap.find('>div').css({height:scrH-90});
			}).trigger('resize'+e$.namespaceBtn);
		}
		//fixed : 스크린보다 컨텐츠 높이가 클때는 absolute로 자동 전환
		if(scrH<objWrapH) {
			e$.fixed=false;
			e$.activeClass=e$.classObj;
		};
		//absolute : position
		if(!e$.fixed) e$.objWrap.css({top:absolutePosT,marginLeft:-(e$.objWrap.outerWidth()/2)});
	},
	fnToogle : function(type){
		var e$=this;
		e$.objWrap.attr('style','').find('>div').css({height:'auto'});
		jQuery(window).off(e$.namespaceBtn);
		e$.fnBtnAction();
		if(type){
			e$.objTarget.addClass(e$.activeClass);
			e$.fnDimmed(true);
			e$.obj.trigger('shown.ui.layer');
		}else {
			e$.objTarget.removeClass(e$.activeClass);
			e$.fnDimmed(false);
			e$.obj.trigger('hidden.ui.layer');
		};
	},
	fnBtnAction : function(){
		var e$=this;
		e$.rtBtnActionElement('close').off(this.namespaceBtn).on('click'+e$.namespaceBtn,function(){
			e$.fnToogle(false);
			jQuery(this).off(e$.namespaceBtn);
			return false;
		});
	},
	fnDimmed : function(type){
		(type) ? this.objDimmed.addClass('on') : this.objDimmed.removeClass('on');
	},
	fnReset : function(){
		var e$=this;
		e$.objAll.filter('.'+this.classObj).trigger('hidden.ui.layer');
		e$.objAll.removeClass(e$.classObj+' '+e$.classFix);
		e$.fnDimmed(false);
	},
	rtBtnActionElement : function(value){
		return this.obj.find('a[ui-btn-action='+value+']').add(this.obj.find('input[ui-btn-action='+value+']')).add(this.obj.find('button[ui-btn-action='+value+']')).add(this.objDimmed);

	},
	rtBgElement : function(){
		if (!jQuery('.uilayer_dimmed').length) this.obj.after('<div class="uilayer_dimmed"></div>');
		return true;
	}
};