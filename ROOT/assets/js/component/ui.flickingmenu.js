//fn : UI플리킹 메뉴 2018.10.02
window.uiflickingMenu={
	init : function(o){
		this.cacheElement(o)
		this.setEvent();
		this.autoScroll();
		this.menuFix();
	},
	cacheElement : function(o){
		this.obj=o.obj;
		this.active=jQuery('#'+this.obj).find('li.active').index();
		this.isFixed=(o.mode == 'fixed') ? true : false;
		this.objH=jQuery('#'+this.obj).height(),
		this.idY=jQuery('#'+this.obj).offset().top;
		this.fixClass='fixed_'+jQuery('#'+this.obj).attr('class');
	},
	setEvent: function(){
		var e$=this;
		this.flickingMenu=new iScroll(this.obj,{
			vScroll:false,
			hScrollbar:false
		});
		jQuery(window).on('resize',function(){
			e$.refresh();
		});
	},
	refresh : function(){
		this.flickingMenu.refresh();
	},
	autoScroll : function(){
		var e$=this;
		setTimeout(function(){
			e$.flickingMenu.scrollToElement('li:nth-child('+e$.active+')',300);
		},300);
	},
	menuFix : function(){
		var e$=this;
		if(this.isFixed){
			jQuery(window).on('load scroll',function(){
				var scr=jQuery(this).scrollTop();
				if(scr>e$.idY){
					if(!jQuery('body').hasClass(e$.fixClass)) jQuery('body').css({paddingTop:e$.objH}).addClass(e$.fixClass);
				}else{
					if(jQuery('body').hasClass(e$.fixClass)) jQuery('body').css({paddingTop:0}).removeClass(e$.fixClass);
				}
			});
		}
	}
}