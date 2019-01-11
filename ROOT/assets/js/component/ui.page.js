//fn : ui페이지 2018.03.30
var uiPageScrollTop;
var uiPageList=[];
uiSlideStats=false; //전역체크

window.uiPage={
	init : function(o){
		if (jQuery(o.obj).length&&!uiSlideStats) {
			this.cacheElement(o);
			this.setEvent();
		}
	},
	cacheElement : function(o){
		this.body=jQuery('body');
		this.o=o.obj;
		this.obj=jQuery(o.obj);
		this.caseBack=o.caseBack;
		this.classAnimate='uipageanimate';
		this.classOpen='uipagestartopen';
		this.classClose='uipagestartclose';
		this.classActive='uipageactive';
		this.classObj='active';
		this.classObjTransition=['forward','back'];
		this.classObjAdd=this.rtClassObjAdd();
		this.namespaceBtn='.nameBtnAction';
		this.objAll=jQuery('.uipage.'+this.classObj);
		this.win=jQuery(window);
		this.afterAction;
	},
	setEvent : function(){
		var toggle=this.obj.hasClass(this.classObj);
		if (!this.body.hasClass(this.classAnimate)) this.fnToogle(toggle);
	},
	fnToogle : function(type){
		var e$=this;
		e$.fnBtnAction();
		clearTimeout(e$.afterAction);
		if (!e$.obj.hasClass(e$.classObj)) {
			if (!e$.caseBack) uiPageList.push(e$.o);
			e$.obj.trigger('showstart.ui.page');
			if (e$.objAll.length) {
				e$.objAll.removeClass(this.classObj+' '+this.classObjTransition[0]+' '+this.classObjTransition[1]);
				e$.obj.addClass(e$.classObjAdd);
				return false;
			};
			uiPageScrollTop=e$.win.scrollTop();
			e$.obj.addClass(e$.classObjAdd).after('<div class="uipagedimmed"></div>');
			e$.body.addClass(e$.classAnimate+' '+e$.classOpen);
			e$.afterAction=setTimeout(function(){
				e$.body.removeClass(e$.classAnimate+' '+e$.classOpen).addClass(e$.classActive);
				e$.win.scrollTop(0);
				e$.obj.trigger('shown.ui.page');
			},500);
		}else{
			e$.obj.trigger('hidestart.ui.page');
			e$.body.removeClass(e$.classActive).addClass(e$.classAnimate+' '+e$.classClose);
			e$.afterAction=setTimeout(function(){
				jQuery('.uipagedimmed').remove();
				e$.body.removeClass(e$.classActive).removeClass(e$.classAnimate+' '+e$.classClose);
				e$.obj.removeClass(e$.classObjAdd);
				e$.obj.trigger('hidden.ui.page');
			},450);
			e$.win.scrollTop(uiPageScrollTop);
			uiPageList=[];
		};
	},
	fnBtnAction : function(){
		var e$=this;
		e$.rtBtnActionElement('back').off(e$.namespaceBtn).on('click'+e$.namespaceBtn,function(){
			uiPageList.pop();
			jQuery(e$).off(e$.namespaceBtn);
			if (uiPageList.length) {
				e$.init({obj:uiPageList.slice(-1)[0],caseBack:true});
			}else{
				e$.fnToogle(false);
			}
			return false;
		});
		e$.rtBtnActionElement('close').off(e$.namespaceBtn).on('click'+e$.namespaceBtn,function(){
			e$.fnToogle(false);
			jQuery(e$).off(e$.namespaceBtn);
			return false;
		});
	},
	rtClassObjAdd : function(){
		if (uiPageList[0]==undefined) {
			return this.classObj;
		}else if(this.caseBack==null){
			return this.classObj+' '+this.classObjTransition[0];
		}else if(this.caseBack!=null){
			return this.classObj+' '+this.classObjTransition[1];
		}
	},
	rtBtnActionElement : function(value){
		return this.obj.find('a[ui-btn-action='+value+']').add(this.obj.find('input[ui-btn-action='+value+']')).add(this.obj.find('button[ui-btn-action='+value+']'));
	},
};