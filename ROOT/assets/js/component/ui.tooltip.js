//fn : ui툴팁 2018.03.29
var uiTouchCheck = 'ontouchend' in window;
var uiTooltipTimeout;

window.uiTooltip={
	init : function(o){
		if (jQuery(o.obj).length) {
			this.cacheElement(o);
			this.setEvent();
		}
	},
	cacheElement : function(o){
		this.objAll=jQuery('.uitooltip');
		this.btnAll=jQuery('.uitooltip_btn').add(jQuery('.uitooltip_toggle'));
		this.obj=jQuery(o.obj);
		this.btn=jQuery(o.btn);
		this.btnArrow=(this.btn.find('.uitooltip_pos').length) ? this.btn.find('.uitooltip_pos') : jQuery(this.btn);
		this.classObj='view';
		this.classArr='arr';
		this.evtNamespace='.layerTooltip';
		this.namespaceBtn='.nameBtnAction';
		this.baseDiv=o.baseDiv;
		this.bothMargin=(o.bothMargin!=null) ? o.bothMargin: 15;
		this.win=jQuery(window);
		this.doc=jQuery(document);
		this.btnAdd=this.btn.find('.uitooltip_toggle');
		this.posTop=o.postop;
		this.plusTop=jQuery(o.plusTop).outerHeight();
	},
	setEvent : function(o){
		var toggle=!this.btn.hasClass(this.classObj);
		//arrow
		if (!this.obj.find('.'+this.classArr).length) this.obj.children().append('<div class="'+this.classArr+'"></div>');
		//toogle
		this.fnToogle(toggle);
	},
	fnToogle : function(type){
		var e$=this;
		//remove event
		e$.fnRemoveEvt();
		//all remove
		e$.objAll.attr('style','').add(e$.btnAll).add(e$.btnAdd).removeClass(e$.classObj);
		//btn
		e$.fnBtnAction();
		if (type) {
			//position
			e$.win.on('resize'+e$.evtNamespace,function(){
				e$.fnPos();
			}).trigger('resize'+e$.evtNamespace);
			//active
			e$.obj.add(e$.btn).add(e$.btnAdd).addClass(e$.classObj);
			//click event
			clearTimeout(uiTooltipTimeout);
			var evt=e$.rtEvt()+e$.evtNamespace;
			e$.doc.on(evt, function(e) {
				if (!e$.btn.is(e.target) && e$.btn.has(e.target).length === 0){
					uiTooltipTimeout=setTimeout(function(){
						e$.fnToogle(false);
					},100)
				}
			});
			e$.obj.on(evt, function(e) {
				e.stopPropagation();
			});
			e$.obj.trigger('shown.ui.tooltip');
		}else{
			e$.obj.trigger('hidden.ui.tooltip');
		}
	},
	rtEvt : function(){
		return (uiTouchCheck) ? 'touchend' : 'mouseup';
	},
	fnPos : function(){
		this.rtReset();
		var side=this.rtBaseDiv();
		var winW=this.win.outerWidth();
		var pos=this.btnArrow.offset();
		var btnHalf=this.btnArrow.outerWidth()/2;
		var arrHalf=this.obj.find('.'+this.classArr).outerWidth()/2;
		var layerHalf=this.obj.outerWidth()/2;
		var layerLeft=pos.left+btnHalf-layerHalf;
		var arrLeft=pos.left-side+btnHalf-arrHalf;
		var mt=this.btn.outerHeight()+this.obj.find('.'+this.classArr).outerHeight();
		//위치 : 좌우 오토
		if (layerLeft<=side) {
			layerLeft=side;
			arrLeft=arrLeft;
		}else{
			layerLeft=layerLeft;
			arrLeft=layerHalf-arrHalf;
		}
		//오른쪽정렬일때
		if (layerLeft+side+(layerHalf*2)>winW) {
			if (winW-(layerHalf*2)-side <= side) {
				layerLeft=side;
				arrLeft=pos.left+btnHalf-arrHalf-side;
			}else{
				layerLeft=winW-(layerHalf*2)-side;
				arrLeft=pos.left+btnHalf-arrHalf-layerLeft;
			}
		}
		//레이어위치가 왼쪽을 넘어갈때
		if (layerLeft<this.bothMargin){
			layerLeft=this.bothMargin;
			arrLeft=pos.left-layerLeft+btnHalf-arrHalf;
		}
		var	arrResult={left:Math.floor(arrLeft+1)};
		var layerResult={left:Math.floor(layerLeft),marginRight:Math.floor(side-1)};
		this.obj.css(layerResult).find('.'+this.classArr).css(arrResult); //위치 : left, margin-right, arrow

		//위치 : 상하 오토
		var caseLayerBottom=pos.top+mt;
		var caseLayerTop=pos.top-(this.obj.outerHeight()+this.obj.find('.'+this.classArr).outerHeight());
		var layerTop=caseLayerBottom;
		var ifBottom=this.win.outerHeight()+this.win.scrollTop()<this.obj.outerHeight()+mt+pos.top;
		var ifTop=this.win.scrollTop()>caseLayerTop-this.plusTop;
		if (!this.posTop) {
			if (ifBottom) {
				if (!ifTop) {
					layerTop=caseLayerTop;
					this.obj.addClass('reverse');
				}
			}else{
				layerTop=caseLayerBottom;
				this.obj.removeClass('reverse');
			}
		}else{
			if (ifTop) {
				layerTop=caseLayerBottom;
				this.obj.removeClass('reverse');
			}else{
				layerTop=caseLayerTop;
				this.obj.addClass('reverse');
			}
		}
		this.obj.css({top:Math.floor(layerTop-1)}); //위치 : top
	},
	fnRemoveEvt : function(){
		this.win.add(this.doc).add(this.obj).add(this.btn).off(this.evtNamespace);		
	},
	fnBtnAction : function(){
		var e$=this;
		this.rtBtnActionElement('close').off(this.namespaceBtn).on('click'+e$.namespaceBtn,function(){
			e$.fnToogle(false);
			jQuery(this).off(e$.namespaceBtn);
		});
	},
	rtReset : function(){
		this.objAll.attr('style',''); //초기화
		this.obj.removeClass('reverse');
		jQuery('.'+this.classArr).css({left:0});
	},
	rtBtnActionElement : function(value){
		return this.obj.find('a[ui-btn-action='+value+']').add(this.obj.find('input[ui-btn-action='+value+']')).add(this.obj.find('button[ui-btn-action='+value+']'));
	},
	rtBaseDiv : function(){
		if (this.baseDiv) {
			var winW=this.win.outerWidth();
			var tg=jQuery(this.baseDiv);
			var pos=tg.offset();
			var baseW=tg.outerWidth();
			return winW-pos.left-baseW+this.bothMargin;
		}else{
			return this.bothMargin;
		}

	}
};