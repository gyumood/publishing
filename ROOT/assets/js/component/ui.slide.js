//fn : UI슬라이드 2016.07.13
jQuery.fn.chunk = function(size) {
	//wrap 만들기
	var arr = [];
	for(var i = 0; i < this.length; i += size) arr.push(this.slice(i, i + size));
	return this.pushStack(arr, "chunk", size);
};
var isWebKit = 'WebkitAppearance' in document.documentElement.style;
var uiTouchCheck = 'ontouchend' in window;
uiSlideStats=false; //전역체크

window.uiSlide=function(o){
	this.init(o);
};
uiSlide.prototype = {
	init : function(o){
		this.cacheElement(o);
		this.setEvent();
	},
	cacheElement : function(o){
		this.obj=o.obj,
		this.sceneCount=o.sceneCount;
		this.tgW=jQuery(this.obj),
		this.tgA=this.tgW.children('.itemArea'),
		this.tgR=this.tgA.children('.itemRoll');
		if(this.sceneCount){
			for(var k=0;k<this.sceneCount.length;k++) if(this.sceneCount[k]==0) this.sceneCount[k]=1;
			this.tgR.addClass('sceneCount').children('.itemScene').removeClass('itemScene').addClass('itemSceneIn').css({float:'left',width:100/this.sceneCount[0]+'%'}).chunk(this.sceneCount[0]*this.sceneCount[1]).wrap('<div class="itemScene"></div>');
		};
		this.item='.itemScene',
		this.tgI=this.tgR.children(this.item),
		this.tgN,
		this.first=(this.tgI.length<=o.first) ? 0 : o.first || 0,
		this.speed=Number((o.speed) ? o.speed : (o.speed==0) ? 0 : 300),
		this.auto=o.auto || 0,
		this.intRoll,
		this.showNavi=o.showNavi,
		this.showArrow=o.showArrow,
		this.showNumber=o.showNumber,
		this.mouseEvent=o.mouseEvent,
		this.loop=(o.loop==false) ? (o.auto) ? true : o.loop : (this.tgI.length<2) ? false : true,
		this.fnSlidestart=o.fnSlidestart,
		this.fnSlideend=o.fnSlideend,
		this.wait=false,
		this.sizeCheck=o.sizeCheck,
		this.loadImage=(o.loadImage) ? (o.loadImage==true) ? '.loadImage' : o.loadImage : false,
		this.loadImageThis=(o.loadImageThis) ? o.loadImageThis : false,
		this.noImage=o.noImage,
		this.stopPropagation=(o.stopPropagation==false) ? o.loop : true,
		this.tgItwo=(this.tgI.length==2&&this.loop) ? true : false, //2개이하 루프
		this.posX=0,
		this.howPos=[this.rtItemLength()-1,0],
		this.howClass=['prev','next'], //이전다음
		this.howFunc=['showArrow','showNumber','showNavi','sizeCheckWrap','itemImg']; //부가기능
	},
	setEvent : function(){
		var e$=this;
		e$.fnTouchSwipe();
		e$.fnRefresh();
		e$.fnMove(e$.first,'none');
		e$.tgW.addClass('itemSlideWrapAction');
		e$.tgI.removeClass('on').eq(e$.first).addClass('on');
	},
	ifRefresh : function(){
		var e$=this;
		e$.fnRefresh();
		e$.fnMove(e$.first,'none');
	},
	fnRefresh : function(){
		var e$=this,
			arr=e$.tgW.children('.'+e$.howFunc[0]),
			num=e$.tgW.children('.'+e$.howFunc[1]),
			nav=e$.tgW.children('.'+e$.howFunc[2]);
		(e$.showArrow) ? e$.ifArrow() : arr.remove();
		(e$.showNumber) ? e$.ifNumber() : num.remove();
		(e$.showNavi) ? e$.ifNavi() : nav.remove();
		if(e$.sizeCheck){
			e$.ifSizeCheck();
		}else{
			e$.tgW.removeClass(e$.howFunc[3]);
			e$.tgI.css({paddingTop:0});
		};
	},
	fxSlide : function(go,how,origin){
		var e$=this,
			chkN=!e$.loop&&go==e$.howPos[1]&&how==e$.howClass[1],
			chkP=!e$.loop&&go==e$.howPos[0]&&how==e$.howClass[0];
			spd=(how=='none') ? (origin)?e$.speed:0 : e$.speed,
			e$.posX=(how==e$.howClass[1]) ? (chkN) ? e$.posX : e$.posX-100 : (how==e$.howClass[0]) ? (chkP) ? e$.posX : e$.posX+100 : e$.posX;
		if(chkN) go=e$.howPos[0];
		if(chkP) go=e$.howPos[1];
		e$.wait=true;
		e$.tgR.css(e$.rtAnimation(spd,e$.posX));
		if(e$.fnSlidestart) e$.fnSlidestart(go);
		setTimeout(function(){ e$.fnSlide(go,how,origin); },0);
	},
	fnSlide : function(go,how,origin){
		var e$=this,
			going=[e$.tgI.eq(go).prev(),e$.tgI.eq(go).next()];
		if(!origin) e$.tgI.css({left:0}).removeClass(e$.howClass[0]+' '+e$.howClass[1]+' on').attr('aria-hidden','true').eq(go).css({left:e$.posX*-1+'%'}).addClass('on').attr('aria-hidden','false');
		if(e$.tgItwo){
			var zz=(how==e$.howClass[0]) ? 1 : 0,
				w=(!zz)?e$.posX+100:e$.posX-100;
			if(!origin) e$.rtItemCurrent().siblings().addClass(e$.howClass[zz]).css({left:w*-1+'%'});
		}else{
			for(var z=0;z<going.length;z++){
				var w=(z==0)?e$.posX+100:e$.posX-100,
					side=(going[z].length!=0) ? going[z] : (e$.loop) ? e$.tgI.eq(e$.howPos[z]) : false;
				if(side) side.addClass(e$.howClass[z]).css({left:w*-1+'%'});
			};
		};
		if(e$.showArrow) e$.fnArrow(go);
		if(e$.showNumber) e$.fnNumber(go);
		if(e$.showNavi) e$.fnNavi(go);
		setTimeout(function(){
			if(e$.loadImage) e$.fnLoadImage(go);
			if(e$.auto){
				var time=e$.auto || 3000,
					dataAutoValue=Number(e$.rtItemCurrent().attr('data-auto')) || Number(time);
				e$.fnAuto(dataAutoValue);
			};
			if(e$.fnSlideend) e$.fnSlideend(go);
		}, spd);
	},
	fnMove : function(go,how,origin){
		var e$=this;
		e$.fxSlide(go,how,origin);
	},
	fnAuto : function(dataAutoValue){
		var e$=this;
		clearTimeout(e$.intRoll);
		e$.intRoll=setTimeout(function(){
			e$.fnMove(e$.rtFade(e$.howClass[1]),e$.howClass[1]);
		}, dataAutoValue+e$.speed);
	},
	ifArrow : function(){
		var e$=this,
			btncon=(
				'<div class="'+e$.howFunc[0]+'">'+
				'<a href="#'+e$.howClass[0]+'" class="'+e$.howClass[0]+'"><span>'+e$.howClass[0]+'</span></a>'+
				'<a href="#'+e$.howClass[1]+'" class="'+e$.howClass[1]+'"><span>'+e$.howClass[1]+'</span></a>'+
				'</div>'
			);
		e$.tgW.children('.'+e$.howFunc[0]).remove(); //마크업 삭제
		jQuery(btncon).clone().appendTo(e$.tgW); //마크업 생성
		e$.tgW.children('.'+e$.howFunc[0]).find('a').off().on({
			click: function(){
				var btn=jQuery(this),
					btnDelay;
				if(btn.hasClass('disiable')||btn.hasClass('pause')){
				}else{
					clearTimeout(btnDelay);
					btn.addClass('pause').siblings().removeClass('pause');
					if(btn.hasClass(e$.howClass[1])){
						e$.fnMove(e$.rtFade(e$.howClass[1]),e$.howClass[1]);
					}else if(btn.hasClass(e$.howClass[0])){
						e$.fnMove(e$.rtFade(e$.howClass[0]),e$.howClass[0]);
					};
					btnDelay=setTimeout(function(){
						btn.removeClass('pause');
					},e$.speed);
				}
				return false;
			}
		});
	},
	fnArrow : function(go){
		var e$=this;
		if(!e$.loop){
			var max=e$.rtItemLength()-1,
				tgArrow=e$.tgW.children('.'+e$.howFunc[0]);
			tgArrow.find('a').removeClass('disiable');
			if(max==0&&go==0){
				tgArrow.find('.'+e$.howClass[0]+', .'+e$.howClass[1]).addClass('disiable');
			}else if(go==0){
				tgArrow.find('.'+e$.howClass[0]).addClass('disiable');
			}else if(go==max){
				tgArrow.find('.'+e$.howClass[1]).addClass('disiable');
			};
		};
	},
	ifNumber : function(){
		var e$=this;
		if(e$.showNumber==true){
			e$.tgW.children('.'+e$.howFunc[1]).remove(); //마크업 삭제
			jQuery('<div class="'+e$.howFunc[1]+'"><strong></strong><span></span></div>').clone().appendTo(e$.tgW); //마크업 생성
		}else{
			jQuery(e$.showNumber).html('<strong></strong><span></span>');
		};
	},
	fnNumber : function(go){
		var e$=this,
			tgNum=(e$.showNumber==true) ? e$.tgW.children('.'+e$.howFunc[1]) : jQuery(e$.showNumber);
		tgNum.find('strong').html(Number(go)+1);
		tgNum.find('span').html(e$.rtItemLength());
	},
	ifNavi : function(){
		var e$=this,
			tgNcon='';
		//마크업 생성
		e$.tgI.each(function(i){
			tgNcon+='<a href="#'+e$.obj.slice(1)+(i+1)+'"><span>'+(i+1)+'</span></a>';
		});
		e$.tgW.children('.'+e$.howFunc[2]).remove(); //마크업 삭제
		jQuery('<div class="'+e$.howFunc[2]+'">'+tgNcon+'</div>').clone().appendTo(e$.tgW); //마크업 생성
		e$.tgN=e$.tgW.children('.'+e$.howFunc[2]).find('a'); //네비 버튼
		e$.tgNm=jQuery(e$.showNavi); //추가 네비
		e$.tgN.off().on({
			click: function() {
				var num=jQuery(this).index();
				if(!jQuery(this).hasClass('on')) e$.fnMove(num,'none');
				jQuery(this).add(e$.tgNm.eq(num)).addClass('on').siblings('.on').removeClass('on'); //활성화
				return false;
			}
		}).eq(e$.rtItemCurrent().index()).addClass('on');
		if(isNaN(e$.tgNm)){ //추가 네비 설정시
			e$.tgNm.off().on({
				click:function(){
					e$.tgN.eq(jQuery(this).index()).click(); //부모실행
					return false;
				}
			}).eq(e$.rtItemCurrent().index()).addClass('on');
		};
	},
	fnNavi : function(go){
		var e$=this;
		e$.tgN=e$.tgW.children('.'+e$.howFunc[2]).find('a');
		e$.tgN.removeClass('on').eq(go).addClass('on');
		if(isNaN(e$.showNavi)) e$.tgNm.removeClass('on').eq(go).addClass('on');
	},
	fnTouchSwipe : function(){
		var e$=this,
			chkGesture,
			chkScroll,
			eventCheck,
			moveEvent=(uiTouchCheck) ? ['touchstart','touchmove','touchend'] : ['mousedown','mousemove','mouseup mouseleave'],
			uiSlideStatsTime;
		if("ongesturestart" in window) document.addEventListener("gesturestart", function() {}); //iso 멀티터치 대응
		e$.tgW.off().on(moveEvent[0], function(e){
			if(e$.stopPropagation) e.stopPropagation();
			if(!uiTouchCheck) e.preventDefault();
			eventCheck=(uiTouchCheck) ? e.originalEvent.touches[0] : e;
			start_x=eventCheck.pageX,
			start_y=eventCheck.pageY,
			end_x=start_x,
			chkGesture=true,
			chkScroll=true,
			e$.auto=false;
			var diffArr=jQuery('body').width()/90;
			clearTimeout(e$.intRoll);
			jQuery(this).on(moveEvent[1], function(e){
				eventCheck=(uiTouchCheck) ? e.originalEvent.touches[0] : e;
				if(chkScroll&&chkGesture&&(Math.abs(start_x-eventCheck.pageX))<Math.abs(start_y-eventCheck.pageY)){
					chkGesture=false;
					jQuery(this).off(moveEvent[1]+' '+moveEvent[2]);
					return;
				};
				if(chkGesture){
					e.preventDefault();
					var diff=Number(eventCheck.pageX-start_x)/diffArr,
						chkLimit=Math.abs(diff)>=100;
					if(chkLimit) diff=(diff>0) ? 100 : -100;
					e$.tgR.css(e$.rtAnimation(0,e$.posX+diff));
					end_x=eventCheck.pageX;
					if(e$.tgItwo) (diff<0) ? e$.fnItemTwo(e$.howClass[1]) : e$.fnItemTwo(e$.howClass[0]);
					chkScroll=false;
				};
			}).on(moveEvent[2], function(e){
				chkGesture=true;
				var move=20;
				uiSlideStats=true;
				clearTimeout(uiSlideStatsTime);
				uiSlideStatsTime=setTimeout(function (){ uiSlideStats=false; },100);
				if(Math.abs(end_x-start_x)==0){
					uiSlideStats=false;
				}else if((start_x-end_x)>move){
					e$.fnMove(e$.rtFade(e$.howClass[1]),e$.howClass[1]);
				}else if((end_x-start_x)>move){
					e$.fnMove(e$.rtFade(e$.howClass[0]),e$.howClass[0]);
				}else{
					e$.fnMove(e$.rtItemCurrent().index(),'none',true);
				};
				jQuery(this).off(moveEvent[1]+' '+moveEvent[2]);
				if(!uiTouchCheck){
					var tgLink=e$.tgR.find('a').add(e$.tgR.find('input')).add(e$.tgR.find('button')).add(e$.tgR.closest('a'));
					tgLink.off('click.nClick').on('click.nClick',function(e){
						if(start_x==end_x){
							return;
						}else{
							return false;
						};
					});
				};
			});
		})
	},
	fnItemTwo : function(value){
		var e$=this,
			tgValue=e$.rtItemCurrent().siblings().removeClass(e$.howClass[0]+' '+e$.howClass[1]);
		(value==e$.howClass[1]) ? tgValue.css({left:(e$.posX-100)*-1+'%'}).addClass(e$.howClass[1]) : tgValue.css({left:(e$.posX+100)*-1+'%'}).addClass(e$.howClass[0]);
	},
	ifSizeCheck : function(){
		var e$=this;
		e$.tgW.addClass(e$.howFunc[3]);
		e$.tgI.css({paddingTop:e$.sizeCheck}).find('.'+e$.howFunc[4]+' > span').add(e$.tgI.find('.'+e$.howFunc[4]+'')).contents().unwrap();
		e$.tgI.wrapInner('<div class="'+e$.howFunc[4]+'"><span></span></div>');
	},
	fnLoadImage : function(go){
		var e$=this,
			tg=(e$.loadImageThis) ? [e$.tgR.find('.on')] : [e$.tgR.find('.on'),e$.tgR.find('.'+e$.howClass[1]),e$.tgR.find('.'+e$.howClass[0])];
		for(var i=0;i<tg.length;i++){
			var th=tg[i].find(e$.loadImage);
			if(th.length){
				th.each(function(i){
					var thImg=jQuery(this);
					thImg.attr('src',thImg.attr('data-src')).on('load', function(){
						//thImg.removeAttr('data-src').removeClass(e$.loadImage.slice(1)).closest(e$.item).addClass('loadingComplete');
						thImg.closest(e$.item).addClass('loadingComplete');
					}).on('error', function(){
						if(e$.noImage) thImg.attr('src',e$.noImage);
					});
				});
			};
		}
	},
	rtAnimation : function(duration,translate3d){
		var result=(isWebKit) ? {webkitTransitionDuration:+duration+'ms',webkitTransform:'translate3d('+translate3d+'%, 0, 0)'} : {transitionDuration:+duration+'ms',transform:'translate3d('+translate3d+'%, 0, 0)'}
		return result;
	},
	rtItemLength : function(){
		var e$=this;
		return e$.tgI.length;
	},
	rtItemCurrent : function(){
		var e$=this,
			chk=e$.tgI.siblings('.on'),
			result=(chk.length) ? chk : e$.tgR.find('.on');
		return result;
	},
	rtFade : function(value){
		var e$=this,
			value;
		if(value==e$.howClass[1]){
			value=e$.rtItemCurrent().next().index();
			return (value==-1) ? 0 : value;
		}else if(value==e$.howClass[0]){
			value=e$.rtItemCurrent().prev().index();
			return (value==-1) ? e$.rtItemLength()-1 : value;
		};
	}
};