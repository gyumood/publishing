/*prototype.js 충돌방지를 위해 $대신 jQuery 사용*/
jQuery.noConflict();

/*변수 초기화*/
var deviceChk;
var preventBody = function(e){e.preventDefault()};
var movePos = 0;
var $body = null;
var $aside = null;
var $asideDmm = null;
var $asideContent = null;
var bodyScrPos;
var myScroll;
var $dSer = null;
var dSerPos;

/*document ready*/
jQuery(document).ready(function(){
	uiInit();
	uiInitEvent();
});

/*변수선언 및 초기 값*/
window.uiInit=function(){
	//변수 선언
	deviceChk = navigator.userAgent.toLowerCase();
	$body = jQuery('body');
	$aside = jQuery("#aside");
	$asideContent = jQuery(".aside_content");
	$asideDmm = jQuery("#asideDmm");

	//모바일orPC체크
	var touchAble = isTouchAble();
	var settings = {
		startevent : (touchAble) ? 'touchstart' : 'mousedown',
		endevent : (touchAble) ? 'touchend' : 'mouseup'
	};
	function isTouchAble(){
		if(('createTouch' in document) || ('ontouchstart' in document)){
			return true;
		}else{
			return false;
		}
	}
	//안드로이드 하위 기기 체크
	if (deviceChk.indexOf("android 2")!==-1 || deviceChk.indexOf("android 1")!==-1){
		$body.addClass("android_low");
	}
	//안드로이드 or IOS 체크
	if(deviceChk.indexOf("android")!==-1){
		jQuery("html").addClass("dvc_a");
	}else if(deviceChk.indexOf("iphone os")!==-1){
		jQuery("html").addClass("dvc_i");
	}
	//차량검색 결과페이지 버튼 값 체크
	if(jQuery("#container.carresult").length){
		$dSer = jQuery(".carresultSearch");
		if($dSer.length) dSerPos = $dSer.offset().top;
	}
}

/*초기 이벤트 선언*/
window.uiInitEvent=function(){
	//셀프진단 레이어 팝업 높이값
	var titleHeight = jQuery('.conttitle').height();
	jQuery("#layer").css({'height':jQuery(document).height()});
	jQuery("#layer_alert").css({'height':jQuery(document).height()});
	jQuery('.btn_check').click(function(){
		var itm = jQuery(this).attr('name');
		layer_open(itm);
	});
	jQuery('.btn_check_nom').click(function(){
		var itm = jQuery(this).attr('name');
		layer_open(itm);
	});
	jQuery('.hrefActive').click(function(){
		var tg=jQuery(this).add(jQuery(this).attr('href'));
		if(jQuery(this).hasClass('active')){
			tg.removeClass('active');
		}else{
			tg.addClass('active');
		};
		return false;
	});
	jQuery(window).on({
		resize : function(){
			motionTabPos();
		}, scroll : function(){
			searchOptFixed();
			cartScroll();
		}
	});
	motionTabPos();
}

//fn : 탭 메뉴 하단 모션 라인 넓이 값 체크
window.motionTabPos=function(){
	if(jQuery(".motionTab").length){
		movePos = jQuery(".motionTab > ul > li").width();
		tabMotion();
	}
}
//fn : 셀프진단 등급구분 레이어창 열기 (id = name 매칭)
window.layer_open=function(el){
	jQuery('#layer').removeClass("hide");
	jQuery('#layer').addClass("show");
	var temp = jQuery('#' + el);
	jQuery(temp).css("display","block");
}
//fn : 셀프진단 등급구분 레이어 창 닫기
window.layer_close=function(){
	jQuery('.layer_pop').css({"display" : "none"});
	jQuery('#layer').addClass("hide");
	jQuery('#layer').removeClass("show");
	return false;
};
//fn : 공통 탭
window.tabMenuFn=function(target){
	var targetID = jQuery(target).attr("href");
	jQuery(target).parent("li").addClass("active").siblings().removeClass("active");
	jQuery(targetID).addClass("active").siblings().removeClass("active");
	if(jQuery(".tab_bar").length){
		tabMotion();
	}
}
//fn : 공통 탭 모션 (부모 class="motionTab" 적용)
window.tabMotion=function(){
	var $activeTab = jQuery(".motionTab > ul > li.active");
	var $tabBar = jQuery( ".tab_bar" );
	if($activeTab.length){
		$tabBar.css("display","block");
		var indexNum = $activeTab.index();
		$tabBar.animate({
			left: movePos*indexNum
		}, 300 );
	}
}
//fn : 공통 함수
window.wrapHidden=function(){jQuery("#wrap").css("display","none");}
window.bodyDimmOn=function(){jQuery("#dmm").addClass("openit");}
window.bodyDimmOff=function(){jQuery("#dmm").removeClass("openit");}
//fn : 확장메뉴 iscroll
window.asideIscroll=function(){
	if(jQuery("#aside_wrapper").length){
		if (deviceChk.indexOf("android 2")!==-1 || deviceChk.indexOf("android 1")!==-1){
			return false;
		}else{
			myScroll = new iScroll('aside_wrapper', {hScrollbar: false, vScrollbar: false, bounce:false,
				onBeforeScrollStart: function (e) {
					e.preventDefault();
					setTimeout(function (){myScroll.refresh(); }, 0);
				}
			});
		}
	}
}
//fn : 확장메뉴 열기
window.asideOpen=function(){
	if (deviceChk.indexOf("android 2")!==-1 || deviceChk.indexOf("android 1")!==-1){
		$body.addClass("aside-open"); //body class 추가
		$aside.addClass("openit").css("height", jQuery(document).height());
		$asideDmm.addClass("openit").css("height", jQuery(document).height());
		// 메뉴 확장시 노출수 증가는 앱에서 수행할 수 있도록 처리
	}else{
		if(!myScroll) asideIscroll();
		$body.addClass("aside-open"); //body class 추가
		$aside.addClass("openit");
		$asideDmm.addClass("openit");
		$body.bind('touchmove', function(e){e.preventDefault()});
		if (typeof AdBanner !== 'undefined') return AdBanner.refresh();    // 메뉴 확장시 노출수 증가
	}
}
//fn : 확장메뉴 닫기
window.asideClose=function(){
	$body.removeClass("aside-open"); //body class 추가
	$aside.removeClass("openit");
	$asideDmm.removeClass("openit");
	$body.unbind('touchmove');
}
//fn : 차량검색Layer열기
window.schLayerOpen=function(){
	var windowHeight = jQuery(window).height();
	var optTitH = jQuery(".opt_tit").outerHeight();
	jQuery(".optionWrap").css("min-height",windowHeight-optTitH);
	bodyScrPos = jQuery(window).scrollTop();
	jQuery(window).scrollTop(0);
	bodyDimmOn();
	wrapHidden();
	jQuery(".data-view").addClass("openit");
	jQuery("body").addClass("schLayerOpen");
}
//fn : 차량검색Layer닫기
window.schLayerClose=function(force){
	if(!force && jQuery(".data-view.openit:gt(0)").length){
		jQuery(".data-view:last-child").removeClass("openit");
		setTimeout(function(){
			jQuery(".data-view:last-child").remove();
		},300);
	}else{
		jQuery("#wrap").css("display", "block");
		jQuery(window).scrollTop(bodyScrPos);
		jQuery(".data-view").removeClass("openit");
		if(deviceChk.indexOf("android")!==-1){
			setTimeout(function(){
				jQuery(".data-view").remove();
				bodyDimmOff();
			},800)
		}else{
			jQuery(".data-view").remove();
			bodyDimmOff();
		}
	}
	jQuery("body").removeClass("schLayerOpen");
}
//fn : 셀프등록Layer열기
window.selfLayerOpen=function(){
	var windowHeight = jQuery(window).height();
	var optTitH = jQuery(".rsopt_tit").outerHeight();
	jQuery(".rsoptionWrap").css("min-height",windowHeight-optTitH);
	bodyScrPos = jQuery(window).scrollTop();
	jQuery(window).scrollTop(0);
	bodyDimmOn();
	wrapHidden();
	jQuery(".data-view").addClass("openit");
	jQuery("body").addClass("selfLayerOpen");
}
//fn : 셀프등록Layer닫기
window.selfLayerClose=function(){
	if(jQuery(".data-view.openit:gt(0)").length){
		jQuery(".data-view:last-child").removeClass("openit");
		setTimeout(function(){
			jQuery(".data-view:last-child").remove();
		},300);
	}else{
		jQuery("#wrap").css("display", "block");
		jQuery(window).scrollTop(bodyScrPos);
		jQuery(".data-view").removeClass("openit");
		if(deviceChk.indexOf("android")!==-1){
			setTimeout(function(){
				jQuery(".data-view").remove();
				bodyDimmOff();
			},800)
		}else{
			jQuery(".data-view").remove();
			bodyDimmOff();
		}
	}
	jQuery("body").removeClass("selfLayerOpen");
}
//fn : flipsnap 다중 적용 (class="flipsnapWrap" 을 가지고 있는 tag에 id 자동 부여)
window.inspFlipsnap=function(){
	var inspSwipe = [];
	jQuery(".flipsnapWrap").each(function(indexNum){
		jQuery(this).attr('id', 'flipsnapWrap'+ indexNum);
		$flipId = jQuery(this).attr('id');
		inspSwipe.push(
				new flipnapResponsive($flipId,{
				paging:true,
				loop:true,
				loadImage:'loadImage'
			})
		)
	})
}
//fn : 로딩중
//열기 : mLoadingFc('in');
//닫기 : mLoadingFc('out');
window.mLoadingFc=function(action){
	var $loadingWrap = jQuery(".loadingWrap");
	if (action == "in"){
		$loadingWrap.css("display","block");
	}else if(action=="out"){
		$loadingWrap.css("display","none");
	}
}
//fn : 공통 모달팝업&레이어
//열기&닫기:mLayerFc(target 레이어ID, this);
//target 레이어ID = 컨트롤 할 대상 레이어의 ID
//this = 클릭한 자신의 class 컨트롤 필요한 경우 추가
//더블클릭 중복방지 전역변수 체크 추가 2017.03.07
var mLayerFcDoublecheck=true;
var mLayerFcDoublecheckTime;
window.mLayerFc=function(target, ifSelf, delay){
	var innerPopHeight = screen.availHeight;
	var layerID = jQuery(target);
	var $innerPopBg = jQuery(".inner_pop_bg");
	var delay=(delay) ? delay : 0;
	if (mLayerFcDoublecheck) {
		if (delay) mLayerFcDoublecheck=false;
		if (layerID.hasClass("view")){
			jQuery(layerID).removeClass("view");
			$innerPopBg.remove();
			if(ifSelf != null){
				jQuery(ifSelf).removeClass("view");
			}
		}else{
			if (layerID.hasClass("type_full")){
				if($innerPopBg.length == 0){
					jQuery(layerID).append('<div class="inner_pop_bg"></div>');
				};
				jQuery(layerID).css({"height": innerPopHeight});
			};
			jQuery(layerID).addClass("view");
			$innerPopBg.css({"height": innerPopHeight});
			if(ifSelf != null){
				jQuery(ifSelf).addClass("view");
			}
		}
	};
	mLayerFcDoublecheckTime=setTimeout(function(){
		mLayerFcDoublecheck=true;
		clearTimeout(mLayerFcDoublecheckTime);
	}, delay);
};
// 레이어팝업(화면보다 클경우)
window.mLayerBigFc=function(target, itSelf){
	var bodyH = jQuery('body').innerHeight();
	var winH = jQuery(window).height();
	var scrT = jQuery(window).scrollTop();
	var $layer = jQuery(target);
	if ($layer.hasClass("view")){
		$layer.removeClass("view");
		if(itSelf != null){
			jQuery(ifSelf).removeClass("view");
		}
	}else{
		$layer.addClass("view");
		if(itSelf != null){
			jQuery(ifSelf).addClass("view");
		}
		viewCheck();
	};
	// 화면보다 큰지 체크
	function viewCheck(){
		var contH = $layer.find('.cmm_layer_popWrap').height();
		if(contH+40 > winH){
			$layer.css({'height' : bodyH}).addClass('popBig');
			$layer.find('.cmm_layer_popWrap').css({'top' : scrT+10 });
		}
		else{
			$layer.css({'height' : '100%'}).removeClass('popBig');
			$layer.find('.cmm_layer_popWrap').css({'top' : '50%' });
		};
	};
};
//스크롤값에 따른 클래스적용(header 고정등..)
//	var serviceFix = new fnfixElement('#section_searchWrap',{	//고정될 대상 (중복되지 않으면 클래스도가능)
//		parentEle : '#wrap',									//고정되었을때 간격등을 조절할 대상 (기본 #wrap)
//		startEle : '#section_searchWrap',						//시작 기준이되는 엘리먼트 (클래스가능,시작값과 시작기준은 한개만 적용하면됨)
//		startPoint : 0,											//시작 값 (기본0)
//		clName : 'searchFixed'									//시작시 추가되는 클래스 (기본 active)
//	});
//	serviceFix.kill()											//이벤트삭제
//	serviceFix.live()											//삭제된이벤트실행
window.fnfixElement=function(o,options){
	this.init(o,options);
};
fnfixElement.prototype = {
	init:function(o,options){
		this.cacheElement(o);
		this.setOption(options);
		this.action();
	},
	setOption:function(options){
		options=options || {};
		this.parentEle=options.parentEle !== undefined ? options.parentEle : jQuery('#wrap');
		this.startEle=options.startEle !== undefined ? options.startEle : false;
		this.startPoint=options.startPoint !== undefined ? options.startPoint : 0;
		if(this.startEle){
			this.startPoint=jQuery(this.startEle).offset().top;
		}
		this.clName=options.clName !== undefined ? options.clName : 'active';
		this.evtName='.fix_'+this.tg.attr('class');
	},
	cacheElement:function(o){
		this.tg = jQuery(o);
	},
	scrCheck:function(){
		var scr=jQuery(window).scrollTop();
		if(scr>this.startPoint){
			this.parentEle.addClass(this.clName);
			this.tg.addClass(this.clName)
		}
		else{
			this.parentEle.removeClass(this.clName);
			this.tg.removeClass(this.clName)
		}
	},
	action:function(){
		var e$=this;
		jQuery(window).on('load'+this.evtName+' scroll'+this.evtName+' resize'+this.evtName,function(){
			e$.scrCheck();
		});
	},
	kill:function(){
		jQuery(window).off('load'+this.evtName+' scroll'+this.evtName+' resize'+this.evtName)
		this.parentEle.removeClass(this.clName);
		this.tg.removeClass(this.clName);
	},
	live:function(){
		this.scrCheck();
		this.action();
	}
}
//fn : 엔카진단결과
window.scrollCheckFn=function(id,data){
	jQuery(window).on("load.scrollCheckFn scroll.scrollCheckFn resize.scrollCheckFn",function(){
		var scr=jQuery(this).scrollTop();
		var idY=jQuery('#'+id).offset().top;
		var idH=jQuery('#'+id).height();
		var first=idY-document.documentElement.clientHeight;
		var last=idY+idH;
		if(scr>=first-500&&scr<=last+500){
			jQuery('#'+id).addClass('action');
			if(scr>=first&&scr<=last){
				cksResulte2(data);
				jQuery(window).off('.scrollCheckFn');
			};
		};
	});
};
window.cksResulte2=function(data){
	var wrap=jQuery('.inspect_panel'),
		tg=wrap.find('.panel .i'),
		checkPoint=['006026','006033','006027','006003','006023','006006','006018','006009'];
	// 교환부위 유무 체크
	var resultCkeck=true;
	for(var k=0;k<data.length;k++) for(var j=0;j<checkPoint.length;j++) if(checkPoint[j]==data[k].split('_')[0]) if(data[k].split('_')[1]!=1) resultCkeck=false; //checkPoint만 체크
	//이미지 생성
	var is_tr = wrap.find('.view').hasClass('truck');//화물특장일경우
	var is_tr2 = wrap.find('.view').hasClass('truck2');//화물2Door일경우
	var imgSrc;
	if(is_tr){
		imgSrc = '/images/tr/inspect_';
	}
	else if(is_tr2){
		imgSrc = '/images/tr2/inspect_';
	}
	else{
		imgSrc = '/images/ca/inspect_';
	}
	wrap.find('.view .panel>div').each(function(i){
		var imgClass=jQuery(this).attr('class');

		jQuery('<img src="'+imgSrc+imgClass+'.png?170519" alt="" />').clone().appendTo(jQuery(this).find('.off'));
		jQuery('<img src="'+imgSrc+imgClass+'on.png?170519" alt="" />').clone().appendTo(jQuery(this).find('.on'));
	});

	jQuery('<span class="ok">정상</span>').clone().appendTo(wrap.find('.list li'));

	//교환부위 없을때
	var panelFrame = wrap.find('.view .frame .f_001');
	var panelFrame2 = wrap.find('.view .frame .f_002'); // 뒷펜더 용
	if(resultCkeck==true){
		jQuery('<img src="'+imgSrc+'f_001on.png?170519" alt="교환부위 없음" />').clone().appendTo(panelFrame.find('.on'));

		wrap.find('.view').addClass('good').parent().find('.view_explan').remove();
	}else{
		jQuery('<img src="'+imgSrc+'f_001.png?170519" alt="" />').clone().appendTo(panelFrame.find('.off'));
		if(!is_tr && !is_tr2){
			jQuery('<img src="'+imgSrc+'f_002.png?170519" alt="" />').clone().appendTo(panelFrame2.find('.off'));
		}
	};

	//ie7,8에서 translate값으로 left,top 설정
	if(tg.css('transform').indexOf('translate')!=-1){
		tg.each(function(i){
			var pos=jQuery(this).css('transform'),
				posL=pos.split('(')[1].split(',')[0],
				posT=pos.split(',')[1].split(')')[0];
			jQuery(this).css({left:posL,top:posT});
		});
	};
	if(resultCkeck==false){
		//활성화 체크
		for(var i=0;i<data.length;i++){
			var ckNum=data[i].split('_2')[0],
				tgview=wrap.find('.p_'+ckNum+' .i');
			jQuery('<span class="t"><img src="/images/ca/icon_pain.png" alt="교환" /></span>').clone().appendTo(tgview);
			var tglist;
			if(ckNum==checkPoint[0]){
				tglist=wrap.find('li.bonnet');
			}else if(ckNum==checkPoint[1]||ckNum==checkPoint[2]){
				tglist=wrap.find('li.frontFender');
			}else if(ckNum==checkPoint[3]||ckNum==checkPoint[4]){
				tglist=wrap.find('li.frontDoor');
			}else if(ckNum==checkPoint[5]||ckNum==checkPoint[6]){
				tglist=wrap.find('li.rearDoor');
			}else if(ckNum==checkPoint[7]){
				tglist=wrap.find('li.trunk');
			};
			jQuery(tglist).find('span').remove();
			jQuery('<span class="ck">교환</span>').clone().appendTo(tglist);
			tgview.addClass('active');
		};
	};
	jQuery(function(){ //이미지 로딩
		jQuery('<div class="loading"><span>Loading</span></div>').clone().appendTo(wrap.find('.view'));
		var n=0,
			imgs=wrap.find('.view>div>div em').find('img'),
			val=100/imgs.length,
			cache=new Date().getTime();
		for(var i=0;i<imgs.length;i++){
			var src1=jQuery(imgs[i]).attr('src');
			if(tg.css('transform').indexOf('translate')!=-1) src1+='&'+cache; //ie7,8 load 대응
			jQuery("<img />").attr("src", src1).load(function(){
				n=n+val;
				if(n>99){ //이미지 로딩 완료
					if(resultCkeck==false){
						wrap.find('.panel').addClass('animateGo');
					}
					wrap.find('.loading').stop().animate({opacity:0},300,function(){
						jQuery(this).remove();
					});
					//ie7,8에서 활성화 체크된것들 animate시킴
					if(tg.css('transform').indexOf('translate')!=-1){
						tg.each(function(i){
							var pos=jQuery(this).css('transform'),
								posL=pos.split('(')[1].split(',')[0],
								posT=pos.split(',')[1].split(')')[0];
							if(posL==0){
								jQuery(this).stop().delay(1000).animate({left:posL,top:posT},500);
							};
						});
					};
				};
			});
		};
	});
};
//fn : 검색결과리스트 : scroll시 검색조건변경 버튼 fixed
window.searchOptFixed=function(){
	if(jQuery("#container.carresult").length && !jQuery(".app_v2016").length){
		var $dSerParents = $dSer.parent("#container");
		var dSerH = $dSer.outerHeight();
		if(jQuery(window).scrollTop() >= dSerPos){
			$dSer.addClass("posFix");
			$dSerParents.css("paddingTop", dSerH);
		}else{
			$dSer.removeClass("posFix");
			$dSerParents.css("paddingTop","0px");
		}
	}
}
//fn : 셀프등록 결제 : 하단 고정 장바구니 열기
window.cartOpen=function(){
	var $cart = jQuery(".advertise_cart");
	if($cart.hasClass("open")){
		$cart.removeClass("open");
		jQuery("#wrap").css("paddingBottom", "0px")
	}else{
		$cart.addClass("open");
	};
}
//fn : 셀프등록 결제 : 하단 고정 장바구니 scroll 모션
window.cartScroll=function(){
	if(jQuery(".advertise_cart").length){
		var $cart = jQuery(".advertise_cart");
		var scrollBottom = jQuery(document).height() - jQuery(window).height() - jQuery(window).scrollTop();
		var carHeight = $cart.height();
		if(1 >= scrollBottom){
			$cart.removeClass("fixed");
		}else if(scrollBottom >= carHeight + 40){
			$cart.addClass("fixed");
		}
	}
}
//fn : 마이페이지 옵션선택 Toggle
window.optionToggleFn=function(target){
	var $optionTarget = jQuery(target);
	var $optionTargetContent = $optionTarget.next(".option_wrap");
	if($optionTarget.hasClass("show")){
		$optionTargetContent.removeClass("show");
		$optionTarget.removeClass("show");
	}else{
		$optionTargetContent.addClass("show");
		$optionTarget.addClass("show");
	}
	$optionTarget.siblings(".option_title").removeClass("show");
	$optionTargetContent.siblings(".option_wrap").removeClass("show");
	var thisPos = jQuery(target).offset().top;
	jQuery(window).scrollTop(thisPos);
}
//fn : 셀프등록 옵션입력 textarea 자동 높이 조절
window.txtAreaHeightSet=function(){
	var txtAreaH = jQuery(".enter_writeopt textarea").prop("scrollHeight");
	jQuery(".enter_writeopt textarea").css('height', txtAreaH);
}
//fn : 셀프등록 옵션입력 textarea 높이 초기화
window.txtAreaHeightInit=function(){
	jQuery(".enter_writeopt textarea").css('height', "25px");
}
//fn : 광고효과분석 - snb
window.popTypeSnb=function(){
	var iscroll;
	iscroll=new iScroll('sXsnb',{
		vScroll:false,
		hScrollbar:false
	});
	var n=jQuery('#sXsnb').find('li.active').index();
	if (n>2) iscroll.scrollToPage(n);
};
//광고효과분석 차량정보
window.adCarinfo=function(){
	var tmpT = 0;
	jQuery('.car_summary .car a').on({
		'click' : function(){
			if(jQuery(this).hasClass('view')){
				jQuery(this).removeClass('view');
				jQuery('#summary_cont').removeClass('view');
				window.scrollTo(0,tmpT);
			}
			else{
				tmpT = jQuery(window).scrollTop();
				jQuery(this).addClass('view');
				jQuery('#summary_cont').addClass('view');
				window.scrollTo(0,0);
			}
			return false;
		}
	});
}
//광고효과분석 - 요약
window.adSummaryUI = {
	init : function(){
		uiflickingMenu.init({
			obj : 'uiflicking_menu',
			mode : 'fixed'
		});
		adCarinfo();
		this.trackSet();
		this.valueSet();
	},
	trackSet : function(){
		var e$=this;
		this.track = jQuery('.track.active');
		this.phase = this.track.find('.phase li');
		this.phase.eq(0).addClass('on');
		this.flag = this.track.find('.goal');
		this.spend = this.track.find('.spend');
		this.now = this.spend.find('.now');
		this.now.css({'margin-left' : -this.now.innerWidth()/2});
		this.trackScroll=new iScroll('running_track',{
			vScroll:false,
			hScrollbar:false,
			onBeforeScrollStart: null
		});

		var period = this.track.data('period').split(',');
		var goal = this.track.data('goal');
		var spend = this.track.data('spend');
		var w = this.phase.eq(0).width();
		var goalPos = 0, spendPos = 0;

		//this.now.text(spend+'일째');
		for(i=0;i<period.length;i++){
			//this.phase.eq(i).find('.period').text(period[i]) //구간별 날짜 셋팅
			if(goal <= period[0]) {
				goalPos = w * goal / period[0];
			}
			if(goal > period[i]){
				//if(i == period.length-1){}
				var gap = period[i+1] - period[i];
				var rest = goal - period[i];
				var add = w * rest / gap;
				goalPos = w * (i+1) + add;
			}

			if(spend < period[0]) {
				spendPos = w * spend / period[0];
			}
			if(spend >= period[i]){
				this.phase.eq(i+1).addClass('on');
				var gap = period[i+1] - period[i];
				var rest = spend - period[i];
				var add = w * rest / gap;
				spendPos = w * (i+1) + add;
				if(i == period.length-1){
					spendPos = w * period.length;
				}
			}
		}
		//목표일과 현재일겹칠때 처리
		if(goalPos - spendPos < this.now.innerWidth()/2 && goalPos - spendPos >=0){
			var tmp = - this.now.innerWidth()/2 - this.now.innerWidth()/2 + goalPos - spendPos
			this.now.css({'margin-left' : tmp});
		}
		if(goalPos - spendPos > -this.now.innerWidth()/2 && goalPos - spendPos < 0){
			var tmp = - this.now.innerWidth()/2 + this.now.innerWidth()/2 + goalPos - spendPos
			this.now.css({'margin-left' : tmp});
		}
		this.flag.css({'left' : goalPos});
		this.spend.stop().animate({'width' : spendPos}, 800, function(){
			e$.track.addClass('done');
		});
		//스크롤
		jQuery(window).on('resize', function(){
			e$.trackScroll.refresh();
		});
		var scrPos = (spendPos+24-jQuery(window).width()/2 < 0) ? 0 : spendPos+24-jQuery(window).width()/2;
		if(scrPos > this.track.innerWidth()+48 - jQuery(window).width()){
			scrPos = this.track.innerWidth()+48 - jQuery(window).width();
		}
		this.trackScroll.scrollTo(-scrPos, 0, 800);
	},
	trackReset : function(){
		this.phase.removeClass('on');
		this.now.css({'margin-left' : 0});
		this.flag.css({'left' : 0});
		this.spend.stop().css({'width' : 0});
		this.track.removeClass('done');
	},
	trackUpdate : function(){
		this.trackReset();
		this.trackSet();
	},
	changeStandard : function(btn,tg){
		jQuery('.select_standard .standard .uitooltip_btn').text(jQuery(btn).next('label').text());
		this.track.removeClass('active');
		jQuery(tg).addClass('active');
		adSummaryUI.trackUpdate();
	},
	valueSet : function(){
		this.valueUnit = jQuery('.value_group > ul > li');
		this.valueUnit.each(function(){
			var phase = jQuery(this).data('phase');
			if(phase != undefined){
				jQuery(this).addClass('phase'+phase);
			}
		})
		UInumbercount.init(850);
	}
};
//광고효과분석 - 광고효과,관심고객,차량가격
window.adAnalysisUI = {
	init : function(){
		uiflickingMenu.init({
			obj : 'uiflicking_menu',
			mode : 'fixed'
		});
		adCarinfo();
		this.unitSet();
	},
	unitSet : function(){
		var e$=this;
		this.graph = jQuery('.value_unit .graph');
		this.my = this.graph.find('.my')
		var standard = (this.graph.data('phase') == undefined) ? 0 : this.graph.data('phase').split(',');
		var myVal = parseInt(standard[standard.length-1]);
		var myPos = 0;
		var w = 33.3;

		if(myVal <= standard[0]) {
			myPos = 0;
		}
		for(i=0;i<standard.length-1;i++){
			if(myVal > standard[i]){
				var gap = standard[i+1] - standard[i];
				var rest = myVal - standard[i];
				var add = w * rest / gap;
				myPos = (w * i + add > 100) ? 100 : w * i + add;
			}
		}
		this.my.stop().animate({'left' : myPos+'%'},0, function(){
			e$.graph.addClass('done');
			UInumbercount.init(500);
		});
	}
};
//광고효과분석 스크롤테이블
window.scrollTable=function(o){
	this.init(o);
};
scrollTable.prototype = {
	init : function(o){
		this.cacheElement(o);
		this.scrollSet(o);
		this.tableSet();
	},
	cacheElement : function(o){
		this.tg = jQuery('#'+o.scrollTg);
		this.tbl = this.tg.find(o.table);
		this.col = o.columns;
		this.colgroup = o.colgroup || false;
		this.wrap = this.tg.parents('.scroll_tablewrap');
		this.fixtable = jQuery('<div class="fixed_area"></div>').clone().prependTo(this.wrap);
		this.evtName ='.scrollAble'+o.scrollTg;
	},
	tableSet : function(){
		var e$=this;
		//클래스복사
		function copyClass(ele){
			var cl = ele.attr('class');
			if(cl !== undefined){
				return ' class="'+cl+'"';
			}
			else{
				return '';
			}
		}
		//colgroup
		if(this.colgroup){
			var j = 0;
			this.tbl.find('colgroup').each(function(){
				if(j>=e$.col){
					return false;
				}
				for(i=0;i<jQuery(this).find('col').length;i++){
					j++;
					jQuery(this).children().eq(i).clone().appendTo(e$.fixtable).end().end().addClass('fixed_cell');
				}
				e$.fixtable.children('col').wrapAll('<colgroup'+copyClass(jQuery(this))+'></colgroup>');
			});
		}
		else{
			this.tbl.find('colgroup').each(function(){
				for(i=0;i<e$.col;i++){
					jQuery(this).children().eq(i).clone().appendTo(e$.fixtable).end().end().addClass('fixed_cell');
				}
				e$.fixtable.children('col').wrapAll('<colgroup'+copyClass(jQuery(this))+'></colgroup>');
			});
		}
		this.fixtable.children('tr').wrapAll('<thead'+copyClass(this.tbl.find('thead'))+'></thead>');
		//thead,th
		this.tbl.find('thead tr').each(function(){
			var l = e$.col;
			for(i=0;i<e$.col;i++){
				var self = jQuery(this).children().eq(i);
				var colspan = self.attr('colspan') || 1;
				self.clone().appendTo(e$.fixtable);
				self.addClass('fixed_cell');
				l = l - colspan;
				if(l<=0){break;}
			}
			e$.fixtable.children('th').wrapAll('<tr'+copyClass(jQuery(this))+'></tr>');
		});
		this.fixtable.children('tr').wrapAll('<thead'+copyClass(this.tbl.find('thead'))+'></thead>');
		//tbody,td
		this.tbl.find('tbody tr').each(function(){
			var l = e$.col;
			for(i=0;i<e$.col;i++){
				var self = jQuery(this).children().eq(i);
				var colspan = self.attr('colspan') || 1;
				self.clone().appendTo(e$.fixtable);
				self.addClass('fixed_cell');
				l = l - colspan;
				if(l<=0){break;}
			}
			e$.fixtable.children('td').wrapAll('<tr'+copyClass(jQuery(this))+'></tr>');
		});
		this.fixtable.children('tr').wrapAll('<tbody'+copyClass(this.tbl.find('tbody'))+'></tbody>');
		//table
		this.fixtable.children('colgroup, thead, tbody').wrapAll('<div'+copyClass(this.tbl)+'><table'+copyClass(this.tbl.find('table'))+'></table></div>');
		this.tdResize();
		jQuery(window).on('resize', function(){
			e$.tdResize();
		});
	},
	tdResize : function(){
		var e$=this;
		this.tbl.find('tbody tr').each(function(i){
			var cl =  jQuery(this).attr('class');
			var tdH = jQuery(this).children().eq(0).height();
			if(jQuery(this).children().eq(0).css('border-bottom').indexOf('1px') !== -1){
				tdH = tdH +1;
			}
			e$.fixtable.find('tbody tr').eq(i).addClass(cl).find('td').css({'height' : tdH});
		});
		if(this.tbl.width() <= this.tg.width()){
			this.wrap.removeClass('live');
			this.tableScroll.scrollTo(0,0,0);
			this.tableScroll.disable();
		}
		else{
			this.wrap.addClass('live');
			this.tableScroll.enable();
			this.tableScroll.refresh();
		};
	},
	expected : function(){

	},
	scrollSet : function(o){
		var e$=this;
		var tblPos = this.wrap.offset().top;

		this.tableScroll=new iScroll(o.scrollTg,{
			vScroll:true,
			hScrollbar:false,
			bounce:false,
			onBeforeScrollStart: null
		});
	}
};
// 광고효과분석 - 시장상황
window.adMarketUI = {
	init : function(o){
		uiflickingMenu.init({
			obj : 'uiflicking_menu',
			mode : 'fixed'
		});
		adCarinfo();
		this.cacheElement(o);
		this.chartDataCreate(o);
		this.chartDraw();
	},
	cacheElement : function(o){
		this.redrawingEnabled = true;
		this.marketChart;
		this.period=o.period;
		this.data=o.data;
		this.step=o.step||1;
		this.filterBtn=jQuery('.market_summary .filter button');
	},
	chartDataCreate : function(o){
		this.chartWeek = new Array(),
		this.chartSearch = new Array(),
		this.chartProduct = new Array();
		var max=this.data.length;

		for(i=0;i<this.period;i++) {
			this.chartWeek.push(this.data[max-this.period+i].week);
			this.chartSearch.push(this.data[max-this.period+i].search);
			this.chartProduct.push(this.data[max-this.period+i].product);
		}
	},
	chartDraw : function(){
		var e$=this;
		this.marketChart = Highcharts.chart('marketchart', {
			chart: {
				events: {
					redraw: function () {
						if(e$.redrawingEnabled){
							e$.redrawingEnabled = false;
							e$.chartSize(this.chartWidth);
							e$.redrawingEnabled = true;
						}
					}
				}
			},
			credits:{
				enabled:false
			},
			title: {
				text: undefined
			},
			xAxis: [{
				categories: this.chartWeek,
				tickLength: 0,
				labels:{
					autoRotation :0,
					step: this.step,
					style: {
						color: '#666666',
						fontSize:'12px'
					}
				}
			}],
			yAxis: [{
				title: {
					text: null
				},
				labels: {
					format: '{value}',
					style: {
						color: '#F6900D',
						fontSize:'12px'
					}
				}
				//,minorTickInterval : 1000
			}, {
				title: {
					text: null
				},
				labels: {
					format: '{value}',
					style: {
						color: '#4472D2',
						fontSize:'12px'
					}
				},
				opposite: true
			}],
			tooltip: {
				shared: true
			},
			legend: {
				floating: false,
				margin: 20,
				verticalAlign: 'top',
				align: 'center',
				itemStyle: {
					color: '#666666',
					fontWeight: 'normal'
				}
			},
			series: [{
				name: '동급매물 수',
				data: this.chartProduct,
				marker:{
					symbol:'circle',
					width:8,
					height:8,
					radius:4,
				},
				color: '#FAA315'
			}, {
				name: '검색자 수',
				yAxis: 1,
				data: this.chartSearch,
				marker:{
					symbol:'circle',
					width:8,
					height:8,
					radius:4,
				},
				color: '#4C83F7'
			}]
		});
		this.chartSize(jQuery('#marketchart').width() - 30);
	},
	chartUpdate : function(ele,p,step){
		this.period=p;
		this.step=step;
		this.chartDataCreate();
		this.marketChart.update({
			xAxis: [{
				categories: this.chartWeek,
				labels:{
					step: this.step,
				}
			}],
			series: [{
				data: this.chartProduct
			}, {
				data: this.chartSearch
			}]
		});
		this.filterBtn.text(jQuery(ele).siblings('label').text());
	},
	chartSize : function(size){
		this.marketChart.legend.update({
			itemDistance: (size - 200)/2
		})
	}
};
//광고효과분석 - 안내(듀토리얼)
window.analysisIntro = {
	init : function(){
		this.cacheElement();
		this.scrollChk();
	},
	cacheElement : function(){
		this.wrap = jQuery('.myad_intro');
		this.section1 = this.wrap.find('.intro_section1');
		this.section2 = this.wrap.find('.intro_section2');
		this.section3 = this.wrap.find('.intro_section3');
		this.section4 = this.wrap.find('.intro_section4');
		this.section5 = this.wrap.find('.intro_section5');
		this.section6 = this.wrap.find('.intro_section6');
		this.section7 = this.wrap.find('.intro_section7');

		this.sectionPoint = new Array();
		for(i=1;i<8;i++) {
			var tmpT=this.wrap.find('.intro_section'+i).offset().top
			this.sectionPoint.push(tmpT);
		}
	},
	scrollChk : function(){
		var e$=this;
		var winH=jQuery(window).height(),
			scrT;
		this.action1();
		jQuery(window).on('scroll.guide', function(){
			scrT=jQuery(window).scrollTop();
			var viewPoint = winH + scrT;
			if(viewPoint-300 > e$.sectionPoint[1] && !e$.section2.hasClass('action')){
				e$.action2();
			}
			if(viewPoint-550 > e$.sectionPoint[3] && !e$.section4.hasClass('action')){
				e$.action4();
			}
			if(viewPoint-450 > e$.sectionPoint[4] && !e$.section5.hasClass('action')){
				e$.action5();
			}
			if(viewPoint-500 > e$.sectionPoint[5] && !e$.section6.hasClass('action')){
				e$.action6();
			}
			if(viewPoint-500 > e$.sectionPoint[6] && !e$.section7.hasClass('action')){
				e$.action7();
			}
		})
	},
	action1 : function(){
		this.section1.addClass('action');
	},
	action2 : function(){
		var e$=this;
		this.section2.addClass('action').find('.day').text('15일째');
		setTimeout(function(){
			e$.section2.addClass('action2').find('.day').text('24일째');
			setTimeout(function(){
				e$.section2.addClass('action3').find('.day').text('41일째');
			},1000);
		},1000);
	},
	action4 : function(){
		var e$=this;
		this.section4.addClass('action');
	},
	action5 : function(){
		var e$=this;
		this.section5.addClass('action');
	},
	action6 : function(){
		var e$=this;
		this.section6.addClass('action');
		setTimeout(function(){
			e$.section6.addClass('action2');
			setTimeout(function(){
				e$.section6.addClass('action3');
				setTimeout(function(){
					e$.section6.addClass('action4');
					setTimeout(function(){
						e$.section6.addClass('action5');
					},1000);
				},1200);
			},1600);
		},300);
	},
	action7 : function(){
		var e$=this;
		this.section7.addClass('action');
		setTimeout(function(){
			e$.section7.addClass('action2');
			setTimeout(function(){
				e$.section7.addClass('action3');
				setTimeout(function(){
					e$.section7.addClass('action4');
					setTimeout(function(){
						e$.section7.addClass('action5');
						setTimeout(function(){
							e$.section7.addClass('action6');
						},200);
					},500);
				},500);
			},500);
		},500);
	}
};
//fn : 콤마생성
window.numberFormat=function(num){
	var pattern = /(-?[0-9]+)([0-9]{3})/;
	while(pattern.test(num)){
		num = num.replace(pattern,"$1,$2");
	};
	return num;
};
//fn : 콤마제거
window.unNumberFormat=function(num){
	return (num.replace(/\,/g,""));
};
//fn : wrap 레이어
window.wrapLayer=function(tg){
	var wrap=jQuery('#wrap'),
		tg=jQuery(tg);
	if (tg.length) {
		if (tg.hasClass('view')){
			wrap.show();
			jQuery(tg).removeClass('view');
		}else{
			wrap.hide();
			jQuery(tg).addClass('view');
		};
		jQuery(window).scrollTop(0);
	};
};
//fn : 사진보기
window.scrollCheckFnImage=function(tg){
	var varName=true;
	jQuery(window).on("load scroll resize",function(){
		if(varName){
			var scr=jQuery(this).scrollTop(),
				idY=tg.offset().top,
				idH=tg.height(),
				first=idY-document.documentElement.clientHeight,
				last=idY+idH;
			if(scr>=first&&scr<=last){
				var img=tg.find('img').attr('data-src');
				tg.find('img').attr('src',img);
				varName=false;
			};
		};
	});
};

//fn : 스크롤 이미지 로드, new UIimageScrollLoad('.class');
window.UIimageScrollLoad=function(o){
	this.init(o);
};
UIimageScrollLoad.prototype = {
	init : function(o){
		this.cacheElement(o);
		this.fnScroll();
	},
	cacheElement : function(o){
		this.tg=o.tg,
		this.noImage=o.noImage,
		this.win=jQuery(window),
		this.evtName='.UIimageEvent'+o.tg, //이벤트이름
		this.imgGet='.UIimageScrollLoad', //체크대상
		this.imgStart='.UIimageScrollLoadStart'; //로딩시작
		this.imgEnd='.UIimageScrollLoadEnd'; //로딩종료
		this.loop=o.loop;
		this.pos=200;
	},
	fnScroll : function(){
		var e$=this;
		if(e$.noImage) {
			//noimage 로딩 : 네트워크 중단되었을시 미리 로딩
			var lazyNoimage=new Image();
			lazyNoimage.src=e$.noImage;
		}
		//이벤트시작
		this.fnScrollCheck();
		e$.win.off(e$.evtName).on('load'+e$.evtName+' scroll'+e$.evtName+' resize'+e$.evtName+'',jQuery.proxy(this.fnScrollCheck,this));
	},
	fnScrollCheck : function(){
		var e$=this,
			currentTG=jQuery(e$.tg).not(e$.imgEnd);
		currentTG.each(function(){
			var tgthis=jQuery(this),
				scr=e$.win.scrollTop(),
				idY=tgthis.offset().top,
				first=idY-e$.win.height()-e$.pos,
				last=idY+tgthis.height()+e$.pos;
			if(scr>=first&&scr<=last&&!tgthis.hasClass(e$.imgStart.substring(1))){
				var thImg=tgthis.find(e$.imgGet),
					upperCase=false;
				tgthis.addClass(e$.imgStart.substring(1)).find(e$.imgGet).attr('src',thImg.attr('data-src')).on('load', function(){
					//성공
					tgthis.removeClass(e$.imgStart.substring(1)).addClass(e$.imgEnd.substring(1));
					thImg.removeAttr('data-src');
				}).on('error', function(){
					//실패
					fnImgError(this,e$.noImage,'.jpg','.JPG');
				});
			};
		});
		//이벤트종료
		if(!e$.loop&&currentTG.size()==0) e$.win.off(e$.evtName);
	}
};
window.fnImgError=function(element,noimg,beforeTxt,afterTxt){
	var image=new Image();
	image.onload=function() {
		element.src=this.src;
	}
	image.onerror=function() {
		//노이미지 유효 체크
		jQuery.get(noimg).done(function() { 
			element.src=noimg;
		}).fail(function() { 
			return false;
		})
	}
	image.src=element.src.replace(beforeTxt,afterTxt);
};

//fn : 차량상세
UIcardetail={
	init : function(){
		this.fnImageSlide();
		this.fnConnect();
		this.fnDetailText();
		this.fnImageScroll();
		new uiToggleGroup({group:'mocha_faq'}); //모카faq
	},
	fnImageSlide : function(){
		//차량 이미지 스와이프
		new uiSlide({
			obj:'.carDetailImage',
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
		//전화걸기후 레이어
		new uiSlide({
			obj:'.uislide_callafter',
			showNavi:true,
			first:0
		});
	},
	fnConnect : function(){
		//연락하기 영역 애니메이션
		var tg=jQuery('.area_connect');
		jQuery(window).on('load scroll',function(){
			var scr=jQuery(this).scrollTop();
			(scr>2) ? tg.addClass('active') : tg.removeClass('active');
		});
	},
	fnDetailText : function(){
		//차량 설명 더보기
		var tg=jQuery('.card_carinfo .comment'),
			tgT=tg.find('.commentText'),
			tgB=tg.find('.btnMore'),
			tgBody=jQuery('body').width();
		UIlineShort.init(tg,tgT,tgB,354);
		jQuery(window).on("resize",function(){
			var chkBody=jQuery('body').width();
			if(tgBody!=chkBody){
				tgBody=chkBody;
				UIlineShort.init(tg,tgT,tgB,354);
			};
		});
	},
	fnImageScroll : function(){
		//셀러 이미지 로딩
		new UIimageScrollLoad({
			tg:'.area_user .img span', //스크롤 이미지 : 로드,
			noImage:'/images/ca/seller.png', //스크롤 이미지 : 노이미지
			loop:false
		});
	}
};
//fn : 라인 줄임표
UIlineShort={
	init : function(tg,tgT,tgB,height){ //타겟, 텍스트, 버튼, 높이
		tg.removeClass('js');
		if(tgT.height()<height){
			tgB.hide();
		}else{
			tgB.show().off('click').on('click',function(e){
				uiToggle.init(tgT,tgB);
				e.preventDefault();
			});
		};
		tg.addClass('js');
	}
};

//fn : 성능점검 기록부
UIcarInspect={
	init : function(o){
		this.setEvent(o);
	},
	setEvent : function(o){
		for(i=0; i<o.length; i++){
			var splitCodeValue=o[i].split("_"),
				result='<em class="ic">'+this.rtCase(splitCodeValue[1])+'</em>',
				tg=jQuery('.checkList').find('[data-number="'+splitCodeValue[0]+'"]');
			jQuery(result).clone().appendTo(tg);
		};
	},
	rtCase : function(value){
		var result;
		if(value==1){
			result='<img src="/images/ca/inspect_check_cha.png" alt="교환(교체)" />';
		}else if(value==2){
			result='<img src="/images/ca/inspect_check_pain.png" alt="판금·용접" />';
		}else if(value==3){
			result='<img src="/images/ca/inspect_check_cor.png" alt="부식" />';
		}else if(value==4){
			result='<img src="/images/ca/inspect_check_cha.png" alt="교환(교체)" /><img src="/images/ca/inspect_check_cor.png" alt="부식" />';
		}else if(value==5){
			result='<img src="/images/ca/inspect_check_pain.png" alt="판금·용접" /><img src="/images/ca/inspect_check_cor.png" alt="부식" />';
		}else{
			result='';
		}
		return result;
	}
};

//fn : 토글
UIcarToggle={
	init : function(tg){
		this.setEvent(tg);
	},
	setEvent : function(tg){
		var tg=jQuery(tg),
			tgAll=tg.find('a.btnAll'),
			tgFaq=tg.find('.faq'),
			tgBtn=tg.find('.faq a.q'),
			activeClass='view';
		tgBtn.on("click",function(){
			var tgW=jQuery(this).parents('.faq');
			if(tgW.hasClass(activeClass)){
				tgW.removeClass(activeClass);
			}else{
				tgW.addClass(activeClass);
			};
			//모두 열렸을때
			if(tgFaq.filter('.'+activeClass).length==tgFaq.size()){
				tgAll.addClass(activeClass);
			}else{
				tgAll.removeClass(activeClass);
			};
			return false;
		});
		tgAll.on("click",function(){
			if(tgAll.hasClass(activeClass)){
				tgAll.add(tgFaq).removeClass(activeClass);
			}else{
				tgAll.add(tgFaq).addClass(activeClass);
			};
			return false;
		});
	}
};

//fn : 토글
UItab={
	init : function(num,tabMenu,tabContent){
		this.setEvent(num,tabMenu,tabContent);
	},
	setEvent : function(num,tabMenu,tabContent){
		var tgM=jQuery(tabMenu),
			tgC=jQuery(tabContent);
		tgM.find('li').removeClass('on').eq(num).addClass('on');
		tgC.removeClass('on').eq(num).addClass('on');
	}
};

//fn : 판매자정보
UIsellerinfo={
	init : function(){
		this.fnDetailText();
	},
	fnDetailText : function(){
		//판매자 설명 더보기
		var tg=jQuery('.seller_message .comment'),
			tgT=tg.find('.commentText'),
			tgB=tg.find('.btnMore a'),
			tgBody=jQuery('body').width();
		UIlineShort.init(tg,tgT,tgB,61);
		jQuery(window).on("resize",function(){
			var chkBody=jQuery('body').width();
			if(tgBody!=chkBody){
				tgBody=chkBody;
				UIlineShort.init(tg,tgT,tgB,61);
			};
		});
	}
};

//fn : 레이어팝업 2016.08.02
layerEvent = {
	open : function() {
		this.bodyEl = document.getElementsByTagName("body")[0];
		this.bodyEl.className += ' layer_open';
	},
	close : function() {
		this.bodyEl.className = this.bodyEl.className.replace( /(?:^|\s)layer_open(?!\S)/g , '' );
	}
}

//fn : 마이페이지 인터렉션
UImycar={
	init : function(){
		this.fnTabAction();
		this.fnInputMulti();
	},
	fnTabAction : function(){
		//탭 스크롤 fixed
		var tg=jQuery('.layout_menu_2dep'),
			tgH=tg.height(),
			idY=tg.offset().top,
			body=jQuery('body'),
			chkClass='fixed_'+tg.attr('class');
		jQuery(window).on('load scroll',function(){
			var scr=jQuery(this).scrollTop();
			if(scr>idY){
				if(!body.hasClass(chkClass)) body.css({paddingTop:tgH}).addClass(chkClass);
			}else{
				if(body.hasClass(chkClass)) body.css({paddingTop:0}).removeClass(chkClass);
			}
		});
		//탭 플리킹 동작
		if(tg.find('li').length>=4){
			tg.attr('id','pageTab').wrap('<div class="flickingMenu"></div>');
			var pageisScroll=new iScroll('pageTab',{
				vScroll:false,
				hScrollbar:false,
				bounce:true
			});
			var n=tg.find('.on').index();
			setTimeout(function (){
				pageisScroll.scrollToElement('li:nth-child('+n+')',300);
			},300);
		};
	},
	fnInputMulti : function(dctr){
		var cont=jQuery('#container'),
			chkClass='.activeCarList',
			tg='.checkMulti input', //개별선택
			tgA='.checkMultiAll input', //전체선택
			ct='.carRegMulticontrol', //레이어
			ctMulti='.if2', //2개이상
			off;
		//개별선택
		jQuery(tg).off('click').on('click',function(){ rtbox(); });
		//전체선택
		jQuery(tgA).off('click').on('click',function(){
			if(dctr) cont=jQuery(chkClass);
			if(jQuery(this).prop('checked')){
				cont.find(tg).prop('checked', true);
			}else{
				cont.find(tg).prop('checked', false);
			};
			rtbox();
		});
		function rtbox(){
			if(dctr) cont=jQuery(chkClass);
			//input
			cont.find(tg).each(function(i){
				if(jQuery(this).prop('checked')){
					off=true;
					return false;
				}else{
					off=false;
					return;
				};
			});
			//레이어
			(off)?cont.find(ct).addClass('view'):cont.find(ct).removeClass('view');

			var total=cont.find(tg).length,
				number=cont.find(tg).filter(":checked").length;
			//2개이상
			(cont.find(ctMulti)&&number>1)?cont.find(ctMulti).addClass('none'):cont.find(ctMulti).removeClass('none');
			//카운트
			cont.find(ct).find('.number .total').html(total);
			cont.find(ct).find('.number .num').html(number);
			//전체선택
			if(number==total) cont.find(tgA).prop('checked', true); //전체선택 활성
			if(number<total) cont.find(tgA).prop('checked', false); //전체선택 비활성
		};
		//레이어 닫기
		jQuery(ct).find('.btnClose a').off('click').on('click',function(){
			if(dctr) cont=jQuery(chkClass);
			cont.find(tg).add(cont.find(tgA)).prop('checked', false);
			cont.find(ct).removeClass('view');
			return false;
		});
		rtbox();
	}
};

//fn : 페이지내 알림
UInotice={
	init : function(){
		this.cacheElement();
		this.fnNoti();
	},
	cacheElement : function(){
		this.a='.notice_type_area', //전체 element
		this.b='.notice_type_base', //체크해야할 element
		this.t='.notice_type_js', //다시보지않기 element
		this.i='.notice_type_image', //다시보지않기 element
		this.bt='.todayclose', //다시보지않기 button
		this.ck='data-cookie',//다시보지않기 cookie value
		this.active='view',//활성화 class
		this.wrapPause='wrap_pause',//활성화 class
		this.tg=jQuery(this.a+' '+this.t);
	},
	fnNoti : function(){
		for(var i=this.tg.length-1;i>=0;i--){
			var coo=this.tg.eq(i).find(this.bt).attr(this.ck);
			//로컬스토리지 or 쿠키 체크
			if(this.rtGetStorage(coo)!="no") this.fnOpen(i);
		};
		if(jQuery(this.a+' '+this.b+'.'+this.active).length){
			var e$=this;
			setTimeout(function (){ jQuery(e$.a).addClass(e$.active); },300);
		};
	},
	fnOpen : function(i){
		this.tg.eq(i).addClass(this.active);
		if(jQuery(this.a+' '+this.i+'.'+this.active).length) jQuery('body').addClass(this.wrapPause); //이미지형 체크
	},
	fnClose : function(v){
		jQuery(v).parents(this.t).removeClass(this.active);
		if(jQuery(this.t+this.i)) jQuery('body').removeClass(this.wrapPause); //이미지형 체크
	},
	fnTodayClose : function(v,expiredays){
		this.cacheElement();
		var coo=jQuery(v).attr(this.ck),
			expiredays=expiredays||0;
		this.fnClose(v);
		//로컬스토리지 or 쿠키 체크
		if(typeof(Storage)!=="undefined") {
			var todayDate=new Date();
			todayDate.setDate(todayDate.getDate()+expiredays);
			localStorage.setItem(coo, JSON.stringify({isView: 'no', expires: todayDate.toGMTString()}) );
		}else{
			this.fnSetCookie(coo, "no" , expiredays);
		};
	},
	fnSetCookie : function(name, value, expiredays){
		var todayDate = new Date();todayDate.setDate( todayDate.getDate() + expiredays );document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";";
	},
	fnGetCookie : function(c_name){
		var c_value = document.cookie;var c_start = c_value.indexOf(" " + c_name + "=");if (c_start == -1)  {   c_start = c_value.indexOf(c_name + "=");  }if (c_start == -1)  {   c_value = null;  }else  {  c_start = c_value.indexOf("=", c_start) + 1;var c_end = c_value.indexOf(";", c_start);  if (c_end == -1)  { c_end = c_value.length;}c_value = unescape(c_value.substring(c_start,c_end));}return c_value;
	},
	rtGetStorage : function(v){
		var result="";
		if(typeof(Storage)!=="undefined"){
			var populView=JSON.parse(localStorage.getItem(v));
			if(populView!=null){
				var nowDate=new Date();
				if (new Date(populView.expires)<=new Date(nowDate.toGMTString())){
					localStorage.removeItem(v);
				}else{
					result = populView.isView;
				};
			};
		}else{
			result=this.fnGetCookie(v);
		};
		return result;
	},
	fnSoloOpen : function(t){ //솔로
		this.cacheElement();
		var t=jQuery(t),
			coo=t.find(this.bt).attr(this.ck);
		if(this.rtGetStorage(coo)!="no"){
			t.addClass(this.active);
		}else{
			t.removeClass(this.active);
		};
	},
	fnMultiRandomOpen : function(){ //랜덤
		this.cacheElement();
		//캐시처리된 요소는 삭제
		for(var i=this.tg.length-1;i>=0;i--){
			var coo=this.tg.eq(i).find(this.bt).attr(this.ck);
			(this.rtGetStorage(coo)!="no") ? '' : this.tg.eq(i).remove();
		};
		//변수 재설정
		this.cacheElement();
		var e$=this,
			randomNumber=Math.floor((Math.random()*this.tg.length)),
			coo=this.tg.eq(randomNumber).find(this.bt).attr(this.ck);
		//딤드 클릭
		this.tg.eq(randomNumber).append('<div class="dimmdEvent"></div>');
		jQuery('.dimmdEvent').on('click',function(){ 
			e$.fnClose(this);
			if (typeof setAppIndexSortButton == 'function'){//앱홈 정렬버튼 케이스 추가 app_v2017
				setAppIndexSortButton();
			}
		});
		//로컬스토리지 or 쿠키 체크
		if(this.rtGetStorage(coo)!="no") this.fnOpen(randomNumber);
	}
};

//푸터 정보
window.footerInfoView=function(){
	var windowHeight = jQuery('body').height();
	mLayerFc('#footer',this);
	jQuery(window).scrollTop(windowHeight);
}


//시세개편 사고정보 입력
prTab={
	currnet: null,
	menu: null,

	init: function(){
		this.cacheElem('.u_tab');
		this.setEvent();
	},

	cacheElem: function(scope){
		var root = this,
			scope = jQuery(scope),
			menu = scope.find('.ui_tab a'),
			cont = scope.find('.item_accident');

		menu.each(function(a){
			var self = jQuery(this).closest('li'),
				con = cont.eq(a);

			self.data('con', con);
			self.removeClass('active');
			self.data('con').removeClass('active');

			if(a === 0){
				self.addClass('active');
				self.data('con').addClass('active');
				root.current = self;
			}
		});

		this.menu = menu;
	},

	setEvent: function(){
		var root = this;
		this.menu.on('click',function(e){
			if(root.current) root.deActive(root.current);
			root.active(jQuery(this).closest('li'));
			return false;
		});
	},

	active: function(item){
		item.addClass('active');
		item.data('con').addClass('active');
		this.current = item;
	},

	deActive: function(item){
		item.removeClass('active');
		item.data('con').removeClass('active');
	}
};

//시세개편 사고정보 입력
prNewTab={
	currnet: null,
	menu: null,

	init: function(cls){
		this.cacheElem(cls);
		this.setEvent();
	},

	cacheElem: function(cls){
		var root = this,
			scope = jQuery(cls),
			menu = scope.find('.uiTabMenu'),
			cont = scope.find('.uiTabContent');

		menu.each(function(a){
			var self = jQuery(this),
				con = cont.eq(a);

			self.data('con', con);
			self.removeClass('active');
			self.data('con').removeClass('active');

			if(a === 0){
				root.active(self);
			}
		});

		this.menu = menu;
	},

	setEvent: function(){
		var root = this;
		this.menu.on('click',function(e){
			if(root.current) root.deActive(root.current);
			root.active(jQuery(this));
			return false;
		});
	},

	active: function(item){
		item.addClass('active');
		item.data('con').addClass('active');
		this.current = item;
	},

	deActive: function(item){
		item.removeClass('active');
		item.data('con').removeClass('active');
	}
};

//시세개편 결과 페이지 어코디언 메뉴
prAccord={
	menu: null,
	current: null,

	init: function(scope){
		this.cacheElem(scope);
		this.setEvent();
	},

	cacheElem: function(scope){
		var root = this,
			scope = jQuery(scope),
			menu = scope.find('.u_accord_menu'),
			cont = scope.find('.u_accord_cont');

		menu.each(function(a){
			var self = jQuery(this),
				con = cont.eq(a);

			self.data('con', con);
		});

		this.menu = menu;
	},

	setEvent: function(){
		var root = this;
		this.menu.on('click',function(e){
			var self = jQuery(this)
				self_flag = self.hasClass('on');

			if(root.current){
				root.deActive(root.current);
				if(self_flag) return false;
			}
			root.active(self);
			return false;
		});
	},

	active: function(item){
		item.addClass('on');
		item.data('con').addClass('on');
		this.current = item;
	},

	deActive: function(item){
		item.removeClass('on');
		item.data('con').removeClass('on');
	}
};

prChart = {
	commify: function(n){
		var reg = /(^[+-]?\d+)(\d{3})/;   // 정규식
		n += '';                          // 숫자를 문자열로 변환

		while (reg.test(n))
			n = n.replace(reg, '$1' + ',' + '$2');

		return n;
	},

	changeFontSize: function(){
        var resultPrice = jQuery('.uiResultPrice'),
            startNumber = resultPrice.find('.uiStartNumber'),
            finishNumber = resultPrice.find('.uiFinishNumber');


        if(!startNumber.length || !finishNumber.length){
            resultPrice.removeClass('font_size_s');
            return;
		}

        if(startNumber.data('count').length > 9 || finishNumber.data('count').length > 9){
            resultPrice.addClass('font_size_s');
        }else{
            resultPrice.removeClass('font_size_s');
        }
	},

	chartValue: function(data, type){
		if(!jQuery('#chart_val').length) return;

		jQuery('#chart_val').empty();

		var items = data.items,
			leng = items.length,
			result = [],
			score = 100,
			xPlotLine = [],
			min = 0,
			max = 0,
			mainColor = type === 'buy' ? '#2bb8e0' : '#cc001e',
			lastScore = 0;
		var lastScoreDev = data.lastScoreDev;

		for(var i=0; i<items.length; i++){
			var arr = [];
			score += items[i][1];

			if(i === 0){
				min = score;
				max = score;
			}else{
				if(score < min) min = score;
				if(score > max) max = score;
			}

			if(i === items.length-1) lastScore = score;
			lastScore = Math.floor(lastScore * 10) / 10;

			arr[0] = items[i][0];
			arr[1] = score;
			result[i] = arr;

			if(items[i][0].indexOf('네비게이션') !== -1){
				items[i][0] = items[i][0].replace('네비게이션', '네비');
			}

			var fontColor = (Number(items[i][1]) < 0) ? mainColor : '#666'; //this
			var plObj = {
				value: i,
				width: 1,
				color: '#e3e3e3',
				zIndex: 1,
				label: {
					rotation: 360,
					text: '<span style="display:block;position:relative;line-height:13px;padding-bottom:5px;background:#fff;font-size:11px;letter-spacing:-1px;color:' + fontColor + ';text-align:center">'+ items[i][0] + '<span style="display:block;color:' + fontColor + '">(' + items[i][1] +')</span>'+'</span>',
					align: 'center',
					verticalAlign: 'top',
					useHTML: true
				}
			}

			xPlotLine[i] = plObj;
		}

		max = max + 5;
		if(max <= 100) max = 105;
		min = min - 5;
		if(min >= 100) min = 95;

		new Highcharts.Chart({
			chart : {
				renderTo : 'chart_val',
				type : 'area',
				spacingRight: 50,
				spacingLeft: 40
			},

			title : {
				text : ''
			},

			legend : {
				enabled : false
			},

			navigation : null,

			xAxis : {
				plotLines: xPlotLine,
				endOnTick : false,
				showLastLabel : true,
				startOnTick : false,
				crosshair : false,
				allowDecimals : false,
				tickWidth: 0,
				labels : false
			},

			yAxis : {
				title : {
					text : ''
				},
				plotLines:[{
					value : 100,
					width: 2,
					color : '#888',
					zIndex : 4,
					dashStyle: 'shortdot'
				},{
					value: lastScore,
					label: {
						x: 50,
						y: 3,
						rotation: 360,
						//text: lastScore + '점',
						text: lastScoreDev + '점',

						align: 'right',
						style:{
							fontWeight: 'bold'
						},
						verticalAlign: 'top',
						useHTML: false
					}
				}],
				gridLineWidth: 0,
				tickAmount : 4,
				startOnTick : false,
				endOnTick : false,
				showLastLabel : false,
				maxPadding : 0.25,
				min: min,
				max: max,
				labels : {
					align : 'left',
					x : -35,
					y : 3,
					style : {
						fontSize : '11px',
						color: '#000'
					},
					formatter : function () {
						var numberComma=Highcharts.numberFormat(this.value, 0, ',');
						if(Number(numberComma) === 100){
							return numberComma+'점';
						}else{
							return '';
						}
					}
				}
			},

			tooltip : {
				enabled: false
			},

			credits : {
				enabled : false
			},

			plotOptions: {
				area: {
					fillOpacity: 0.5,
					fillColor:'rgba(235,235,235,.7)',
					lineWidth: 2,
					lineColor:mainColor, //this
					linkedTo:':before',
					marker: {
						enabled: true,
						radius: 4,
						symbol: 'circle',
						lineWidth: 3,
						lineColor: mainColor, //this
						fillColor : '#fff'
					}
				}
			},

			series: [{data:result}]
		},function(chart){});
	},

	chartPrice: function(data){
		if(!jQuery('#chart_price').length) return;

		jQuery('#chart_price').empty();

		var gap = Number(jQuery('#chart_price').parent().css('padding-left').replace('px',''))*2;
		var wrapper = jQuery(window).width()*0.9;
		var chartWidth = wrapper - gap;

		var commify = this.commify,
			items = data.items,
			leng = items.length,
			max = items[0][1],
			min = items[0][1],
			my_score = data.current;

		for(var i=0; i<leng; i++){
			if(i>0){
				if(max < items[i][1]) max = items[i][1];
				if(min > items[i][1]) min = items[i][1];
			}

			if(items[i][0] === my_score[0] && items[i][1] === my_score[1]){
				items[i] = {
					x: my_score[0],
					y: my_score[1],
					marker: {
						symbol: 'url(/images/pr/symbol_car_on.png)',
						width: 13,
						height:10.5
					}
				};
			}
		}

		max += 200;
		min -= 200;

		var _chart = new Highcharts.Chart({
			chart : {
				renderTo : 'chart_price',
				type : 'scatter',
				width : chartWidth,
				spacingTop: 20
			},

			title : {
				text : ''
			},

			legend : {
				enabled : false
			},

			// navigation : {
			// 	buttonOptions: {
			//         enabled: false
			//     }
			// },

			navigation : null,

			xAxis : {
				endOnTick : true,
				showLastLabel : true,
				startOnTick : true,
				crosshair : false,
				// gridLineWidth:2,
				// gridLineDashStyle:'shortdot',
				gridZIndex:1,
				allowDecimals : false,
				tickWidth: 0,
				labels : {
					align : 'center',
					x : 0,
					y : 20,
					style : {
						fontSize: '11px',
						color: '#858585'
					},
					formatter : function () {
						var numberComma=Highcharts.numberFormat(this.value, 0, ',');
						return numberComma+'점';
					}
				}
			},

			yAxis : {
				title : {
					text : ''
				},
				tickAmount : 4,
				tickInterval: 200,
				startOnTick : true,
				endOnTick : true,
				showLastLabel : true,
				gridLineWidth:2,
				gridLineDashStyle:'shortdot',
				gridZIndex:1,
				max: max,
				min: min,
				labels : {
					align : 'right',
					x : -10,
					y : 0,
					style : {
						fontSize: '11px',
						color: '#858585'
					},
					formatter : function (a) {
						return commify(this.value) + '만원';
					}
				}
			},

			tooltip : {
				enabled: false
			},

			credits : {
				enabled : false
			},

			plotOptions: {
				scatter:{
					marker: {
						symbol: 'url(/images/pr/symbol_car.png)',
						width: 13,
						height: 10.5,
						states: {
							hover: {
								enabled: false
							},
							select: {
								enabled: false
							}
						}
					},
					dataLabels:{
						align: 'center',
						verticalAlign:'bottom',
						enabled: true,
						allowOverlap: true,
						shape:'callout',
						//borderRadius:10,
						backgroundColor:'#007dbd',
						style:{
							fontSize:12,
							fontWeight: 'bold',
							color:'white',
							textShadow:false,
							textOutline:'none'
						},
						y:-32,
						x:5,
						formatter: function(){
							if(this.x === my_score[0] && this.y === my_score[1]){
								return commify(this.y);
							}
						}
					}
				}
			},

			series: [{data:items}]
		},function(chart){});
	},

	chartRange: function(data){
		var zoneItem = jQuery('.zone'),
			flagItem = jQuery('.flag'),
			priceStart = zoneItem.find('.start'),
			priceEnd = zoneItem.find('.end'),
			start = Number(data.area.start),
			end = Number(data.area.end),
			zoneStart = Number(data.zone.start),
			zoneEnd = Number(data.zone.end),
			flag = Number(data.selected_item),
			railStart = 0,
			railEnd = end - start,
			per = railEnd/210,
			realZoneStart = zoneStart - start,
			realZoneEnd = zoneEnd - start,
			realZoneW = (realZoneEnd - realZoneStart) / per,
			realZoneLeft = realZoneStart / per,
			realFlag = flag - start,
			realFlagLeft = (realFlag / per) - 7;

		if(realZoneStart < railStart) realZoneStart = railStart;
		if(realZoneEnd < railEnd) realZoneEnd = railEnd;

		zoneItem.width(realZoneW);
		zoneItem.css('left', realZoneLeft + 'px');
		priceStart.text(this.commify(zoneStart));
		priceEnd.text(this.commify(zoneEnd));
		flagItem.css('left', realFlagLeft + 'px');

		if(realFlag < realZoneStart || realFlag > realZoneEnd) flagItem.addClass('out');
		if(realFlag < railStart || realFlag > railEnd) flagItem.addClass('hide');
	}
}

prNewUI = {
	commify: function(n){
		var reg = /(^[+-]?\d+)(\d{3})/;   // 정규식
		n += '';                          // 숫자를 문자열로 변환

		while (reg.test(n))
		n = n.replace(reg, '$1' + ',' + '$2');

		return n;
	},

	chartValue: function(data, type){
		if(!jQuery('#chart_val').length) return;

		jQuery('#chart_val').empty();

		var items = data.items,
			leng = items.length,
			result = [],
			score = 100,
			xPlotLine = [],
			min = 0,
			max = 0,
			lastScore = 0;

		var lastScoreDev = data.lastScoreDev;
		var ua = navigator.userAgent;
		var is_ie = ua.indexOf('MSIE') >= 0 ? true : false;
		var ie_ver = -1;

		if(is_ie) ie_ver = Number(ua.split('MSIE ')[1].split('.')[0]);

		for(var i=0; i<items.length; i++){
			var arr = [];
			score += items[i][1];

			if(i === 0){
				min = score;
				max = score;
			}else{
				if(score < min) min = score;
				if(score > max) max = score;
			}

			if(i === items.length-1) lastScore = score;
			lastScore = Math.floor(lastScore * 10) / 10;

			arr[0] = items[i][0];
			arr[1] = score;
			result[i] = arr;

			if(items[i][0].indexOf('네비게이션') !== -1){
				items[i][0] = items[i][0].replace('네비게이션', '네비');
			}

			//var fontColor = (Number(items[i][1]) < 0) ? '#ff3333' : '#666';
			var fontColor = '#666';
			var plObj = {
				value: i,
				width: 1,
				color: '#e3e3e3',
				zIndex: 1,
				label: {
					rotation: 360,
					text: '<span style="display:block;position:relative;line-height:13px;background:#fff;font-size:12px;color:' + fontColor + ';text-align:center">'+ items[i][0] + '<span style="display:block;font-size:12px;color:' + fontColor + '">(' + items[i][1] +')</span>'+'</span>',
					align: 'center',
					verticalAlign: 'bottom',
					y:30,
					textAlign: 'center',
					useHTML: true
				}
			}

			xPlotLine[i] = plObj;
		}

		max = max + 5;
		if(max <= 100) max = 105;
		min = min - 5;
		if(min >= 100) min = 95;

		new Highcharts.Chart({
			chart : {
				renderTo : 'chart_val',
				type : 'area',
				spacingRight: 50,
				spacingLeft: 40,
				spacingBottom:50,
				height:145
			},

			title : {
				text : ''
			},

			legend : {
				enabled : false
			},

			navigation : null,

			xAxis : {
				plotLines: xPlotLine,
				endOnTick : false,
				showLastLabel : true,
				startOnTick : false,
				crosshair : false,
				allowDecimals : false,
				tickWidth: 0,
				labels : false
			},

			yAxis : {
				title : {
					text : ''
				},
				plotLines:[{
					value : 100,
					width: 1,
					color : '#979797',
					zIndex : 4,
					dashStyle: 'shortdot'
				},{
					value: lastScore,
					label: {
						x: (is_ie && ie_ver <= 8) ? 5 : 45,
						y: 3,
						//rotation: 360,
						//text: lastScore + '점',
						text: lastScoreDev + '점',
						align: 'right',
						style:{
							fontSize : '13px',
							fontWeight: 'bold',
							color: '#333'
						},
						verticalAlign: 'top',
						useHTML: false
					}
				}],
				gridLineWidth: 0,
				tickAmount : 4,
				startOnTick : false,
				endOnTick : false,
				showLastLabel : false,
				maxPadding : 0.25,
				min: min,
				max: max,
				labels : {
					align : 'left',
					x : -40,
					y : 3,
					style : {
						fontSize : '13px',
						fontWeight: 'bold',
						color: '#333'
					},
					formatter : function () {
						var numberComma=Highcharts.numberFormat(this.value, 0, ',');
						if(Number(numberComma) === 100){
							return numberComma+'점';
						}else{
							return '';
						}
					}
				}
			},

			tooltip : {
				enabled: false
			},

			credits : {
				enabled : false
			},

			plotOptions: {
				area: {
					fillOpacity: 0.5,
					fillColor:'rgba(235,235,235,.7)',
					lineWidth: 1,
					lineColor:'#ff3333',
					linkedTo:':before',
					states:{
						hover:{
							enabled:false
						}
					},
					marker: {
						enabled: true,
						radius: 4,
						symbol: 'circle',
						lineWidth: 1,
						lineColor: '#ff3333',
						fillColor : '#fff',
						states:{
							hover:{
								enabled:false
							}
						}
					}
				}
			},

			series: [{data:result}]
		},function(chart){});
	},

	chartPrice: function(idName, data){
		var id = '#' + idName;
		var commify = this.commify;
		if(!jQuery(id).length) return;

		jQuery(id).empty();
		jQuery(id).data('loaded',false);

		var items = data.items,
			leng = items.length,
			max = items[0][1],
			min = items[0][1],
			my_score = data.current,
			tempIndex = 0,
			tempItem = null;

		for(var i=0; i<leng; i++){
			if(i>0){
				if(max < items[i][1]) max = items[i][1];
				if(min > items[i][1]) min = items[i][1];
			}

			if(items[i][0] === my_score[0] && items[i][1] === my_score[1]){
				items[i] = {
					x: my_score[0],
					y: my_score[1],
					z: items[i][2],
					marker: {
						symbol: 'url(/images/pr/symbol_newcar_on.png?180403)',
						width:29,
						height:17
					}
				};
				tempIndex = i;
			}else{
				items[i] = {
					x: items[i][0],
					y: items[i][1],
					z: items[i][2]
				};
			}
		}

		max += 200;
		min -= 200;

		tempItem = items.splice(tempIndex, 1)[0];
		items.unshift(tempItem);

		new Highcharts.Chart({
			chart : {
				renderTo : idName,
				type : 'scatter',
				spacingRight: 10,
				spacingBottom: 10,
				spacingLeft:0,
				height:164
			},

			title : {
				text : ''
			},

			legend : {
				enabled : false
			},

			navigation : null,

			xAxis : {
				endOnTick : true,
				showLastLabel : true,
				startOnTick : true,
				crosshair : false,
				//gridLineWidth:2,
				//gridLineDashStyle:'shortdot',
				//gridZIndex:1,
				allowDecimals : false,
				tickWidth: 0,
				labels : {
					align : 'center',
					x : 0,
					y : 25,
					style : {
						fontSize: '11px',
						color: '#858585'
					},
					formatter : function () {
						var numberComma=Highcharts.numberFormat(this.value, 0, ',');
						return numberComma+'점';
					}
				}
			},

			yAxis : {
				title : {
					text : ''
				},
				tickAmount : 4,
				tickInterval: 200,
				startOnTick : true,
				endOnTick : true,
				showLastLabel : true,
				gridLineWidth:1,
				//gridLineDashStyle:'shortdot',
				gridZIndex:1,
				max: max,
				min: min,
				labels : {
					align : 'right',
					x : -20,
					y : 4,
					style : {
						fontSize: '11px',
						color: '#858585'
					},
					formatter : function (a) {
						return commify(this.value) + '만원';
					}
				}
			},

			tooltip : {
				enabled: false
			},

			credits : {
				enabled : false
			},

			plotOptions: {
				scatter:{
					marker: {
						symbol: 'url(/images/pr/symbol_newcar.png?180403)',
						states:{
							hover:{
								enabled:false
							}
						},
						width:29,
						height:17
					},
					dataLabels: {
						enabled: true,
						shape:'callout',
						borderRadius:10,
						borderWidth:1,
						borderColor:'#d9d9d9',
						backgroundColor:'#fff',
						shadow:{
							opacity:0.025,
							offsetX:1.7,
							offsetY:1.7,
							width:8.5
						},
						padding:10,
						style:{
							fontSize:13,
							fontWeight: 'bold',
							color:'#999',
							textOutline: '0px contrast'
						},
						y:-17,
						formatter: function(){
							if(this.x === my_score[0] && this.y === my_score[1]){
								return '<span style="color:#ff3333">' + commify(this.x) + '</span>' + '점 / ' + '<span style="color:#ff3333">' + commify(this.y) + '</span>' + '만원';
							}
						}
					}
				}
			},

			series: [{data:items}]
		},function(chart){});
	},

	chartRange: function(scope){
		if(!scope.data('init')){
			var zoneItem = scope.find('.range_zone'),
				rangeStart = scope.find('.rail_start'),
				rangeEnd = scope.find('.rail_end'),
				myItem = scope.find('.my_item'),
				rangeZone = scope.find('.range_zone'),
				priceStart = rangeZone.find('.zone_start'),
				priceEnd = rangeZone.find('.zone_end'),
				start = Number(scope.attr('data-rail-start')),
				end = Number(scope.attr('data-rail-end')),
				zoneStart = Number(scope.attr('data-zone-start')),
				zoneEnd = Number(scope.attr('data-zone-end')),
				itemStart = Number(scope.attr('data-item')),
				railStart = 0,
				railEnd = end - start,
				currentRailWidth = jQuery(window).width() - 30,
				per = railEnd/currentRailWidth,
				realZoneStart = (zoneStart - start)/per,
				realZoneEnd = (zoneEnd - start)/per,
				realZoneW = realZoneEnd - realZoneStart,
				realZoneLeft = realZoneStart,
				realItem = (itemStart - start)/per,
				realItemLeft = realItem - 17;

			railEnd = Math.round(railEnd/per);

			if(realZoneStart < railStart) realZoneStart = railStart;
			if(realZoneEnd > railEnd) realZoneEnd = railEnd;

			zoneItem.width((realZoneW/currentRailWidth*100) + '%');
			zoneItem.css('left', (realZoneLeft/currentRailWidth*100) + '%');
			priceStart.text(this.commify(zoneStart));
			priceEnd.text(this.commify(zoneEnd));
			rangeStart.text(this.commify(start));
			rangeEnd.text(this.commify(end));
			myItem.css('left', (realItemLeft/currentRailWidth*100) + '%').addClass('active');

			if(realItem < realZoneStart) myItem.text('Low');
			if(realItem > realZoneEnd) myItem.text('High');
			if(realItem < railStart || realItem > railEnd) myItem.removeClass('active');
			rangeZone.addClass('init');

			scope.data('init', true);
		}
	},

	setDisplay: function(){
		var winHeight = jQuery(window).height();
		var headerHeight = jQuery('#header').height();
		var menuHeight = jQuery('.uiAreaMenu').height();
		var selected = jQuery('.uiAreaSelected');
		var selectedHeight = winHeight - headerHeight - menuHeight;
		var btnClose = jQuery('.uiSearchClose');

		selected.css({
			top: headerHeight + 'px'
		});
		selected.height(selectedHeight);
		selected.scrollTop(100);

		jQuery('.wrap_price').css({
			'padding-top': (winHeight - menuHeight) + 'px'
		});
		btnClose.css({top: headerHeight + selectedHeight - btnClose.height() + 'px'});
	},

	setSlider: function(){
		var root = this;

		jQuery('.uiSlider').slider({
			range: true,
			min: 0,
			max: 200000,
			values: [ 0, 200000 ],
			step: 10000,
			create: function(event, ui){
				//jQuery(this).data('init', true);
				jQuery('.slider_default').addClass('active_info');
			},
			start: function(event, ui){
				//if(currentSelect !== null) currentSelect.data('instance').hideOption();
			},
			slide: function( event, ui ) {
				jQuery('.slider_min').text(root.commify(ui.values[0]));
				jQuery('.slider_max').text(root.commify(ui.values[1]));
				if(ui.values[0] !== 0 || ui.values[1] !== 200000){
					jQuery('.ui-slider-range').addClass('active');
					jQuery('.slider_info').addClass('active_info');
					jQuery('.slider_default').removeClass('active_info');
				}else{
					jQuery('.ui-slider-range').removeClass('active');
					jQuery('.slider_info').removeClass('active_info');
					jQuery('.slider_default').addClass('active_info');
				}
			},
			change: function(event, ui){
				jQuery('.slider_min').text(root.commify(ui.values[0]));
				jQuery('.slider_max').text(root.commify(ui.values[1]));
				if(ui.values[0] !== 0 || ui.values[1] !== 200000){
					jQuery('.ui-slider-range').addClass('active');
				}else{
					jQuery('.ui-slider-range').removeClass('active');
				}
			}
		});
	},

	setPriceMenu: function(){
		var scope = jQuery('.uiPriceMenu');
		var menu = scope.find('a');
		var menuWrap = jQuery('.uiAreaMenu');
		var searchClose = jQuery('.uiSearchClose');

		menu.each(function(){
			var self = jQuery(this);
			var type = self.attr('data-menu-type');
			var content = jQuery('.ui_selectcar[data-search-type='+ type +']');
			self.data('content', content);
		});

		menu.on('click', function(e){
			var content = jQuery(this).data('content');
			content.addClass('active');
			menuWrap.hide();

			searchClose.show();
			searchClose.on('click', function(){
				content.removeClass('active');
				menuWrap.show();
				jQuery(this).off('click').hide();

				return false;
			});

			if(content.attr('data-search-type') === 'manufacturer'){
				content.find('.link_item').on('click', function(){
					content.removeClass('active');
					content.find('.link_item').off('click');
					content = jQuery('.ui_selectcar[data-search-type=model]').addClass('active');
					return false;
				});
			}

			return false;
		});
	}
}

// 숫자 카운트 애니메이션
UInumbercount={
	init : function(speed){
		this.fnAction(speed);
	},
	fnAction : function(speed){
		var e$=this,
			speed=(speed) ? speed : 1000;
		jQuery('.uiNumbercount').each(function() {
			var countText = jQuery(this),
				countTo = countText.attr('data-count').replace(/[^0-9]/g,''),
				point = countTo.split(".");
			countText.text('0');
			jQuery({ countNum: countText.text()}).animate({
				countNum: countTo
			},{
				duration: speed,
				easing:'linear',
				step: function() {
					var n=(point[1]) ? Number(this.countNum).toFixed(point[1].length) : Math.floor(this.countNum); //소수점일때 체크
					countText.text(e$.fnNumberCommas(n));
				},
				complete: function() {
					var n=(point[1]) ? Number(this.countNum).toFixed(point[1].length) : Math.floor(this.countNum); //소수점일때 체크
					countText.text(e$.fnNumberCommas(n));
				}
			});
		});
	},
	fnNumberCommas : function(x){ //천단위 쉼표
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}
};

//fn : 상사 선택 팝업
UISelectCompany={
	init : function(){
		this.setListHeight();
	},
	setListHeight : function(){
		//리스트 높이 셋팅
		var win_h = jQuery(window).height(),
			header_h = jQuery('.backType_header').outerHeight(),
			sel_h = jQuery('.srch_comp_sel').outerHeight()
			foot_h = jQuery('.us_btn_fix').outerHeight()
			cont_h = win_h - header_h - sel_h - foot_h + 1;

		jQuery('.comp_list').height(cont_h + 1);
	}
};

//차량검색 리스트
UIcarresult={
	init : function(){
		var e$=this,
			dataWaiting;
		clearInterval(dataWaiting);
		dataWaiting=setInterval(function(){ //데이터가 들어올때까지
			if(jQuery('.carresult_list_wrap').length){
				e$.fnFix();
				e$.fnMobilePremiumImage();
				setTimeout(function (){
					e$.fnVisited();
					e$.fnImageScroll();
					//뒤로가기 대응
					window.onpageshow = function (event) {
						if (event.persisted) e$.fnVisited();
					}
				}, 0);
				clearInterval(dataWaiting);
			};
		}, 100);
		//방문했던 페이지 체크
		jQuery('.carresult_list_wrap li>a').on('click',function(){
			jQuery(this).addClass('visited');
		});
		e$.fnMochaFaqSlide();
	},
	fnMobilePremiumImage : function () {
		//모바일 프리미엄 이미지 스와이프
		var mobilePremiumImage=jQuery('.carResultImage');
		mobilePremiumImage.each(function(i){
			var tg=jQuery(this),
				tgAni=tg.parents('li').find('.ass, .cert, .hotmark, .btnLikeList'),
				msgChk=tg.find('.userMsg').length;
			tgAni.addClass('animation_remove');
			new uiSlide({
				obj:tg,
				speed:333,
				loop:false,
				loadImage:'.loadImage',
				noImage:'/images/ass/photo_l.gif',
				mouseEvent:true,
				fnSlidestart:function(num){                 
					//판매자의 한마디
					var thImg=tg.find('.userMsg .img img'),
						imgData=thImg.attr('data-src'),
						upperCase=false,
						domainCase=false;
					if (num==1&&msgChk!=0) {
						tgAni.addClass('action');
						if (imgData) {
							thImg.attr('src',thImg.attr('data-src')).on('load', function(){
								//성공
								thImg.removeAttr('data-src');
							}).on('error', function(){
								//실패
								if (!upperCase){ //대문자
									thImg.attr('src',imgData.replace(/jpg/, 'JPG'));
									upperCase=true;
									return;
								}else if(!domainCase){ //CDN 대응
									var cdnUrl= (location.href.indexOf('m.encar.com') > 0) ? '//cim.' : '//testci.';
									thImg.attr('src',imgData.replace(cdnUrl, '//img.'));
									domainCase=true;
									return;
								};
								if(upperCase&&domainCase) thImg.attr('src','/images/ca/seller.png').closest('.img').addClass('noimage');
							});
						}
					}else{
						tgAni.removeClass('action');
					}
				}
			});
		});
	},
	fnImageScroll : function(){
		new UIimageScrollLoad({
			tg:'.carresultList.normal .thum', //스크롤 이미지 : 로드,
			noImage:'/images/ass/photo_s.gif', //스크롤 이미지 : 노이미지
			loop:true
		});
		new UIimageScrollLoad({
			tg:'.carresultList.premium .thum .itemScene:nth-child(1) .carimg, .carresultList.premium .thum .itemScene:nth-child(2) .carimg', //스크롤 이미지 : 로드,
			noImage:'/images/ass/photo_l.gif', //스크롤 이미지 : 노이미지
			loop:true
		});
	},
	fnVisited : function () {
		//방문했던 페이지 체크
		var vCar=localStorage.getItem('RecentViewcar#data'),
			vTruck=localStorage.getItem('RecentViewtruck#data'),
			recentViewcar=(vCar) ? vCar.split( ',') : [],
			recentViewtruck=(vTruck) ? vTruck.split( ',') : [],
			result = recentViewcar.concat(recentViewtruck);
		for (var i = 0; i < result.length; i++) {
			var v=result[i].replace(/[^0-9]+/g, '');
			if (v) jQuery('.carresult_list_wrap li[id*='+v+']').find('>a').addClass('visited'); //li의 id속성은 IT에서 작성
		}
	},
	fnFix : function () {
		//상단 고정
		var tg=jQuery('.carresultSortWrap');
		var chkNone=tg.css('display')=='block';
		if(chkNone){
			var myFixed;
			var start=jQuery('#header').height()-10;
			myFixed=jQuery(window).off('.evtFixed').on("load.evtFixed scroll.evtFixed resize.evtFixed",function(){
				var scr=jQuery(window).scrollTop();
				if(scr>start){
					tg.addClass('fixed');
					jQuery('.carresult').css({paddingTop:tg.height()})
				}else{
					tg.removeClass('fixed');
					jQuery('.carresult').css({paddingTop:0})
				};
			});

		}
	},
	fnMochaFaqSlide : function(){
		//모카faq
		var tg='.mochaFaqCard';
		if (jQuery(tg).length) {
			new uiSlide({
				obj:tg,
				speed:333,
				loop:false,
				showNavi:true,
				mouseEvent:true
			});
		}
	}
}
//비교견적안내 스크롤시 애니메이션
window.sellCarAnimation=function(){
	jQuery(window).bind('scroll', function(){
		jQuery('.sellcar_timeline .timeline').each(function(){
			var viewPoint = jQuery(this).offset().top - jQuery(window).height() + 59 + 50 + 65 + 50; // 하단버튼 + 영역상단 + 텍스트영역 + 추가딜레이영역
			if(jQuery(window).scrollTop() > viewPoint){
				jQuery('.sellcar_timeline').addClass('animate'+jQuery(this).index());
			}
			else{
				jQuery('.sellcar_timeline').removeClass('animate'+jQuery(this).index());
			}
		});
	});
};

//비교견적 딜러프로필
dealerProfile={
	init : function(){
		this.clone();
		this.flicking();
		this.setEvent();
		var hashiScroll;
		var hashiScroll2;
	},
	clone : function(){
		var copy = jQuery('.certificate_detail .about_dealer').clone()
			.find('.rank1').remove().end()
			.find('.hashtag_list').attr('id','hashtag_list2').end()
			.find('.heis').remove().end();
		copy.prependTo('#uipage_dealer .uipage_container').wrap('<div class="certificate_detail"></div>');
	},
	flicking : function(){
		new uiSlide({
			obj:'.car_photo',
			showArrow:true,
			showNumber:true
		});
		hashiScroll = new iScroll('hashtag_list',{
			vScroll:false,
			hScrollbar:false,
			bounce:true
		});
		hashiScroll2 = new iScroll('hashtag_list2',{
			vScroll:false,
			hScrollbar:false,
			bounce:true
		});
	},
	update : function(){
		hashiScroll2.refresh();
	},
	setEvent : function(){
		var e$=this;
		jQuery('.uipage_dealer').on('shown.ui.page', function(e){
			e$.update()
			jQuery('.uipage_dealer').off('shown.ui.page')
		});
	}
};

// 클린엔카 저렴매물 알림
cleanNoti = {
	init : function(){
		this.fnEvent();
		this.view();
	},
	fnEvent : function(){
		jQuery('#lowPrice_warn .more a').on('click', function(){
			jQuery('#lowPrice_warn').addClass('open');
			return false;
		});
		jQuery('#lowPrice_warn .guide_btn_white_silver').on('click', function(){
			jQuery('#lowPrice_warn').addClass('close');
			return false;
		});
	},
	view : function(){
		setTimeout(function(){
			jQuery('#lowPrice_warn').addClass('view');
		},0);
	}
};

//중고차론 스크롤시 애니메이션
window.loanAnimation=function(){
	jQuery(window).bind('scroll', function(){
		jQuery('.loan_timeline .timeline').each(function(){
			var viewPoint = jQuery(this).offset().top - jQuery(window).height() + 100; // 하단버튼 + 영역상단 + 텍스트영역 + 추가딜레이영역
			if(jQuery(window).scrollTop() > viewPoint){
				jQuery('.loan_timeline').addClass('animate'+jQuery(this).index());
			}
			else{
				jQuery('.loan_timeline').removeClass('animate'+jQuery(this).index());
			}
		});
	});
};

// 비교견적 신청 슬라이드
estimateSlide = {
	init : function () {
		this.default();
		this.fnSummary();
	},
	default : function () {
		// 신청프로세스 카드 슬라이드
		new uiSlide({
			obj:'.slide_estimate',
			speed:333,
			loop:false,
			showNavi:'.page_slide .num_page',
			showArrow:true,
			mouseEvent:true,
			fnSlidestart:function (num) {
				var currentPage = jQuery('.page_slide .num_page').eq(num);
				currentPage.nextAll().removeClass('active');
				currentPage.addClass('active').prevAll().addClass('active')
			}
		});
		// 다음버튼 슬라이드 기능
		var slideNext = jQuery('.slide_estimate .next_btn button');
		slideNext.on('click', function () {
			jQuery('.showArrow .next').trigger('click');
		});
	},
	fnSummary : function () {
		// 요약보기 바로가기 기능
		var btnSummary = jQuery('.uipage_summary .link_summary');
		btnSummary.on('click', function () {
			var i = btnSummary.index(this);
			var btnNavi = jQuery('.showNavi a');
			btnNavi.eq(i).trigger('click');
			uiPage.fnToogle(false);
		});
	},
	fnToggle : function (target) {
		// 약관동의 펼침 토글
		var tg = jQuery(target);
		var onTarget = tg.closest('li');
		if(onTarget.hasClass('on')){
			onTarget.removeClass('on');
		}else{
			onTarget.addClass('on');
		};
	}
}

//중고차론 INDEX
loanUI = (function($){
	'use strict';

	var state = {
			recentcars: [],
			price: 0,
			month: 36
		},
		domSlideRecent = null,
		uiSlideRecent = null,
		uiAccordionFaq = null,
		uiTabReview = null,
		domTxtType = null,
		domTxtMonth = null,
		domInputPrice = null,
		domPriceCalc = null,
		domAreaSlide = null;

	window.currentSelect = null;

	function init(){
		setCache();
		setEvent();
		setSlideRecent();
		setTab();
		setFaq();
	}

	function setCache(){
		domSlideRecent = $('.uiSlideRecent');
		domSlideRecent.find('.itemScene').each(function(e){
			state.recentcars.push($(this).find('.num').text());
		});
		domInputPrice = $('.uiInputPrice');
		domPriceCalc = $('.uiPriceCalc');
		domAreaSlide = $('.area_slide');
		domTxtType = $('.uiTxtType');
		domTxtMonth = $('.uiTxtMonth');
	}

	function setEvent(){
		$(document).on({
			'keydown': function(e){
				var target = $(e.target);

				if(target.hasClass('uiInputPrice')){
					var code = e.keyCode;
					if (code > 47 && code < 58) return;
					if (code === 9 || code === 36 || code === 35 || code === 37 ||
						code === 39 || code === 8 || code === 46) {
						return;
					}

					e.preventDefault();
				}
			},
			'keyup': function(e){
				var target = $(e.target);

				if(target.hasClass('uiInputPrice')){
					var val = target.val();
					target.val(comma(uncomma(val)));

					if(e.keyCode === 13){
						target.trigger('focusout');
						target.trigger('blur');
					}
				}
			},
			'focusin': function(e){
				var target = $(e.target);
				if(target.hasClass('uiInputPrice')){
					target.val('');
					target.parent().removeClass('checked');
					state.price = 0;
					domPriceCalc.trigger('calculate');
				}
			},
			'focusout': function(e){
				var target = $(e.target);
				if(target.hasClass('uiInputPrice')){
					// if(target.val() !== ''){
					//     target.parent().addClass('checked');
					// }else{
					//     target.parent().removeClass('checked');
					// }
					state.price = Number(target.val().replace(',', ''));
					domPriceCalc.trigger('calculate');
				}
			},
			'calculate': function(e){
				var target = $(e.target);
				if(target.hasClass('uiPriceCalc')){
					var price = state.price * 10000,
						month = state.month,
						ratio = 0.039;

					//대출원금 × 이자율 ÷ 12 × (1 + 이자율 ÷ 12)^기간 ÷ ((1 + 이자율 ÷ 12)^기간 -1)
					var monthly = Math.round(price * (ratio / 12) * Math.pow((1 + ratio / 12), month) / (Math.pow((1 + ratio / 12), month) - 1));

					var attr = comma(monthly).split('').join('/');
					target.attr('data-count', attr);
					UInumbercount.init(300);
				}
			},
			'slide': function(e, data){
				var target = $(e.target);

				if(target.hasClass('uiSlideRecent')){
					domInputPrice.val(state.recentcars[data.currentNum]);
					state.price = Number(state.recentcars[data.currentNum].replace(',', ''));
					domPriceCalc.trigger('calculate');
					domInputPrice.trigger('focusout');
				}
			},
			'click': function(e){
				var target = $(e.target);

				if(target.hasClass('uiBtnOpt')){
					uiPage.fnToogle(false);

					var parent = target.closest('.uipage'),
						txt = target.text();

					if(parent.hasClass('uipage_selecttype')){
						domTxtType.text(txt);

						state.month = 36;
						domTxtMonth.text(state.month + '개월');

						if(target.text() === '최근 본 차량') {
							domAreaSlide.removeClass('type_calc');
							domSlideRecent.trigger('slide', {currentNum: uiSlideRecent.rtItemCurrent().index()});
							domPriceCalc.trigger('calculate');
						}else{
							state.price = 1000;
							domInputPrice.val(state.price).trigger('keyup');

							domPriceCalc.trigger('calculate');

							domAreaSlide.addClass('type_calc');
						}
					}else{
						domTxtMonth.text(txt);
						state.month = Number(target.text().replace('개월', ''));
						domPriceCalc.trigger('calculate');
					}
				}
			}
		});
	}

	function setSlideRecent(){
		state.month = 36;
		domTxtMonth.text(state.month + '개월');

		if(!state.recentcars.length){
			domTxtType.text('차량 구매 자금');
			domTxtType.parent().addClass('disabled');
			domTxtType.parent().attr('onclick', 'javascript:return false;');
			domAreaSlide.addClass('type_calc');

			state.price = 1000;
			domInputPrice.val(state.price).trigger('keyup');

			domPriceCalc.trigger('calculate');
			return;
		}

		uiSlideRecent = new uiSlide({
			obj:'.uiSlideRecent',
			loop: false,
			fnSlideend: function(num){
				domSlideRecent.trigger('slide', {currentNum: num});
			}
		});
	}

	function resetSlideRecent(){
		domSlideRecent = $('.uiSlideRecent');

		state.recentcars = [];
		domSlideRecent.find('.scene').each(function(e){
			state.recentcars.push($(this).find('.num').text());
		});

		uiSlideRecent = null;
		setSlideRecent();
	}

	function setTab(){
		uiTabReview = new TabUI({scope: '.uiTab'});
	}

	function setFaq(){
		uiAccordionFaq = new AccordionUI({scope: '.uiAcc'});
	}

	function comma(str) {
		str = String(str);
		return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
	}

	function uncomma(str) {
		str = String(str);
		return str.replace(/[^\d]+/g, '');
	}

	//아코디언 UI
	function AccordionUI(param){
		this.scope = $(param.scope);
		this.menu = null;

		this.init();
	}

	AccordionUI.prototype = {
		init: function(){
			this.setCache();
			this.setEvent();
		},

		setCache: function(){
			var root = this;

			this.menu = this.scope.find('.uiAccMenu');

			this.menu.each(function(a){
				var self = $(this),
					parent = self.parent('.uiAccContent');

				self.data('parent', parent);
			});
		},

		setEvent: function(){
			var root = this;

			this.scope.on('click', function(e){
				var target = $(e.target);

				if(target.hasClass('uiAccMenu')){
					root.active(target.data('parent'));
					return false;
				}else if(target.hasClass('uiico_arrow')){
					target.parent().trigger('click');
					e.preventDefault();
				}else if(target.hasClass('uiAccBtnAll') || target.hasClass('uiTxtAllBtn')){
					root.activeAll();
					$('.btn_all').addClass('hide');
					return false;
				}
			});
		},

		active: function(item){
			if(item.hasClass('active')){
				item.removeClass('active');
			}else{
				item.addClass('active');
			}

		},

		activeAll: function(){
			this.menu.each(function(){
				$(this).data('parent').removeClass('hide');
			});
		}
	};

	function TabUI(param){
		this.scope = $(param.scope);
		this.menu = null;
		this.current = null;

		this.init();
	}

	TabUI.prototype = {
		init: function(){
			this.setCache();
			this.setEvent();
		},

		setCache: function(){
			var root = this;

			this.menu = this.scope.find('.uiTabMenu');
			this.contents = this.scope.find('.uiTabContent');

			this.menu.each(function(a){
				var self = $(this),
					content = root.contents.eq(a);

				self.data('content', content);

				if(a === 0) root.active(self);
			});
		},

		setEvent: function(){
			var root = this;

			this.scope.on('click', function(e){
				var target = $(e.target);

				if(target.hasClass('uiTabMenu')){
					if(root.current) root.deactive(root.current);
					root.active(target);
					return false;
				}
			});
		},

		deactive: function(item){
			item.removeClass('active');
			item.data('content').removeClass('active');
		},

		active: function(item){
			item.addClass('active');
			item.data('content').addClass('active');
			this.current = item;
		}
	};

	/* 숫자 카운트 애니메이션 */
	var UInumbercount={
		init : function(speed){
			this.fnAction(speed);
		},
		fnAction : function(speed){
			var e$=this,
				speed=(speed) ? speed : 1000;
			jQuery('.uiNumbercount').each(function() {
				var countText = jQuery(this),
					countTo = countText.attr('data-count').replace(/[^0-9]/g,''),
					point = countTo.split(".");
				countText.text('0');
				jQuery({ countNum: countText.text()}).animate({
					countNum: countTo
				},{
					duration: speed,
					easing:'linear',
					step: function() {
						var n=(point[1]) ? Number(this.countNum).toFixed(point[1].length) : Math.floor(this.countNum); //소수점일때 체크
						countText.text(e$.fnNumberCommas(n));
					},
					complete: function() {
						var n=(point[1]) ? Number(this.countNum).toFixed(point[1].length) : Math.floor(this.countNum); //소수점일때 체크
						countText.text(e$.fnNumberCommas(n));
					}
				});
			});
		},
		fnNumberCommas : function(x){ //천단위 쉼표
			return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		}
	};

	return {
		init: function(){
			init();
		},

		setSlideRecent: function(){
			resetSlideRecent();
		},

		getCarId: function(){
			return uiSlideRecent.rtItemCurrent().find('#rgsid').val();
		}
	};

}(jQuery));

/*
	UIAccordion

	@PARAMETER
		{
			scope: '.uiAcc' //최상위 부모 classname
		}

	@OVERRIDE
		prototype에 추가

	@DOM
		<ul class="uiAcc">
			<li class="uiAccTarget">
				<a href="#" class="uiAccMenu">자세히 보기</a>
				<div class="uiAccContent">
					content1...
				</div>
			</li>
			<li class="uiAccTarget">
				<a href="#" class="uiAccMenu">자세히 보기</a>
				<div class="uiAccContent">
					content2...
				</div>
			</li>
			...
		</ul>

	@CSS
		.uiAcc .uiAccContent{display:none}
		.uiAcc .active .uiAccContent{display:block}
*/
UIAccordion = (function($){
	'use strict';

	function Accordion(param){
		this.scope = $(param.scope);
		this.menu = null;

		this.init();
	}

	Accordion.prototype = {
		init: function(){
			this.setCache();
			this.setEvent();
		},

		setCache: function(){
			var context = this;

			this.menu = this.scope.find('.uiAccMenu');
			this.menu.each(function(a){
				var self = $(this),
					target = self.closest('.uiAccTarget');

				self.data('target', target);
			});
		},

		setEvent: function(){
			var context = this;

			this.menu.on('click', function(e){
				context.active($(this).data('target'));
				e.preventDefault();
			});
		},

		active: function(item){
			if(item.hasClass('active')){
				item.removeClass('active');
			}else{
				item.addClass('active');
			}
		}
	};

	return Accordion;
}(jQuery));

/* ew 개인 결제 서비스 약관 동의 form ui */
ewUI = (function($){
	'use strict';

	var domChkAll = null,
		domChk = null,
		btnNext = null,

		state = {
			terms: false,
			personal: false,
            others: false
		};

	function init(){
		setCache();
		setAcc();
		setEvent();
	}

	function setCache(){
		domChkAll = $('.uiChkAll');
		domChk = $('.uiChk');
		btnNext = $('.uiBtnNext');
	}

	function setAcc(){
		new UIAccordion({scope: '.uiAcc'});
	}

	function setEvent(){
		$(document).on({
			'change': function(e){
				var target = $(e.target),
					flagChk;

				if(target.hasClass('uiChk')){
					setState(target);
					setChkAll();
					setBtnNext();
				}else if(target.hasClass('uiChkAll')){
					flagChk = target.hasClass('active');
					activeAllChk(target, flagChk);
					activeChks(flagChk);
				}
			}
		});
	}

	function setState(item){
		state[item.data('name')] = item.prop('checked');
	}

	function setChkAll(){
		var flag = (state.terms && state.personal && state.others) ? true : false;
		activeAllChk(domChkAll, !flag);
		domChkAll.prop('checked', flag);
	}

	function setBtnNext(){
		if(state.terms && state.personal && state.others){
			btnNext.removeClass('uibtn_silver');
			btnNext.addClass('uibtn_red uibtn_shadow');
		}else{
			btnNext.removeClass('uibtn_red uibtn_shadow');
			btnNext.addClass('uibtn_silver');
		}
	}

	function activeAllChk(item, flag){
		if(flag){
			item.removeClass('active');
		}else{
			item.addClass('active');
		}
	}

	function activeChks(flag){
		domChk.each(function(){
			$(this).prop('checked', !flag).trigger('change');
		});
	}

	return {
		init: function(){
			init();
		}
	};
}(jQuery));

/*
	UITab

	@PARAMETER
		{
			scope: '.uiTab' //최상위 부모 classname,
			callback: function(){} //메뉴 변경 후 실행할 작업
		}

	@METHOD
		* instance.navigate(index);
		var tab = new UITab({scope: '.uiTab'});
		tab.navigate(0); //해당 인덱스 메뉴로 셋팅

	@OVERRIDE
		prototype에 추가

	@DOM
		<div class="uiTab">
			<div>
				<a href="#" class="uiTabMenu">menu1</a>
				<a href="#" class="uiTabMenu">menu2</a>
				...
			</div>
			<div class="uiTabContainer">
				<div class="uiTabContent">
					content1
				</div>
				<div class="uiTabContent">
					content2
				</div>
				...
			</div>
		</div>

	@CSS
		.uiTab .uiTabContainer .uiTabContent{display:none}
		.uiTab .uiTabContainer .active{display:block}
*/
UITab = (function($){
	function Tab(options){
		this.options = {
			scope: '.uiTab',
			start: 0,
			callback: null
		};
		this.setOtions(options);

		this.scope = $(this.options.scope);
		this.menu = null;

		this.init();
	}

	Tab.prototype = {
		init: function(){
			this.setCache();
			this.setEvent();
		},

		setOtions: function(options){
			if(typeof options === 'undefined') return;

			for(var i in options){
				this.options[i] = options[i];
			}
		},

		setCache: function(){
			var context = this,
				start = this.options.start,
				contents = this.scope.find('.uiTabContent');

			this.menu = this.scope.find('.uiTabMenu');
			this.menu.each(function(a){
				var self = $(this),
					content = contents.eq(a);

				self.data('info', {
					index: a,
					content: content
				});

				if(a === start) context.active(self);
			});
		},

		setEvent: function(){
			var context = this;

			this.menu.on('click', function(e){
				if(context.current) context.deactive(context.current);
				context.active($(this));
				e.preventDefault();
			});
		},

		active: function(item){
			item.addClass('active');
			item.data('info').content.addClass('active');
			this.current = item;
		},

		deactive: function(item){
			item.removeClass('active');
			item.data('info').content.removeClass('active');
		},

		navigate: function(index){
			if(this.current.data('info').index === index) return;
			this.menu.eq(index).trigger('click');
		}
	};

	return Tab;
}(jQuery));

/* 차량상세 엔카보증 혜택 안내 페이지 */
ewInfoUI = (function($){
	var tab = null;

	function init(){
		setTab();
	}

	function setTab(){
		tab = new UITab();
	}

	return {
		init: function(){
			init();
		},

		setTab: function(index){
			tab.navigate(index);
		}
	}
}(jQuery));

//차량상세 선택옵션 자세히보기
window.uiTooltipOption=function(obj,btn){
	if (!jQuery(obj).length) jQuery('body').append('<div class="uitooltip '+obj.replace('.','')+'"><div class="uitooltip_box"><strong class="option_ttl"></strong><p class="option_desc"></p></div></div>');
	optionLayer=jQuery(obj);
	optionLayer.find('.option_ttl').text(jQuery(btn).parent().find('.t').text());
	optionLayer.find('.option_desc').text(jQuery(btn).siblings('.explan').text());
	uiTooltip.init({obj:obj,btn:btn});
}

// 셀프등록 옵션 레이어 퀵메뉴 기능
window.optionLayer=function(){
	function set_cache_elem(){
		tgScroll = jQuery('.option_wrap .type_form'),
		tgCategory = jQuery('.option_wrap .list_category li'),
		linkQuick = jQuery('.option_wrap .list_category .link_g');
	}
	set_cache_elem();
	//현재 스크롤 위치에 따른 퀵메뉴 인덱스
	function get_index(scrTop){
		var current_idx,
			leng=tgScroll.length;

		tgScroll.each(function(n){
			var self=jQuery(this),
				min=Math.ceil(self.offset().top)-80,
				max=min+Math.ceil(self.outerHeight());
			// 마지막 카테고리일 경우
			if(n===leng-2){
				max -= 440;
			}else if(n===leng-1){
				min -= 440;
			}
			// 기타옵션 케이스
			if(self.parents('.rsoptionWrap').hasClass('enterEtcopt')){
				if(n===leng-3){
					max -= 440;
				}else if(n===leng-2){
					min -= 440;
				}
			}

			if(scrTop >= min && scrTop < max){
				current_idx = n;
				return false;
			}
		});
		return current_idx;
	}
	//현재 스크롤 위치에 따른 퀵 메뉴 활성화
	var current = '';
	function active_menu(idx){
		if(typeof idx === 'undefined') return;
		if(idx===current){
			return;
		}else{
			tgCategory.eq(current).removeClass('on');
			tgCategory.eq(idx).addClass('on');
			current=idx;
		}

	}
	jQuery(window).on('scroll', function () {
		var scrTop=jQuery(this).scrollTop(),
			idx=get_index(scrTop);
		active_menu(idx);
	}).trigger('scroll');
	//퀵 메뉴 클릭시 스크롤 이동
	linkQuick.on('click',function(){
		var self=jQuery(this),
			idx=self.parent().index(),
			top=Math.ceil(tgScroll.eq(idx).offset().top)-43;
		if(tgScroll.parents('.rsoptionWrap').hasClass('enterEtcopt')) {
			if(idx === 2)top -= 440;
		}
		jQuery('html,body').stop().animate({'scrollTop':top+'px'},300);

		return false;
	});
}

inspectUI = (function($){
	var inspectData = {
		'hood': {
			code: '002',
			key: 'hood',
			name: '후드',
			lank: '1',
			has_old: false,
			position: {
				left: '48%',
				top: '20%'
			}
		},
		'frontFenderLeft': {
			code: '003',
			key: 'frontFenderLeft',
			name: '프론트 휀더(좌)',
			lank: '1',
			has_old: false,
			position: {
				left: '12%',
				top: '22%'
			}
		},
		'frontFenderRight': {
			code: '004',
			key: 'frontFenderRight',
			name: '프론트 휀더(우)',
			lank: '1',
			has_old: false,
			position: {
				left: '83%',
				top: '22%'
			}
		},
		'frontDoorLeft': {
			code: '005',
			key: 'frontDoorLeft',
			name: '프론트 도어(좌)',
			lank: '1',
			has_old: false,
			position: {
				left: '14%',
				top: '42%'
			}

		},
		'rearDoorLeft': {
			code: '006',
			key: 'rearDoorLeft',
			name: '리어 도어(좌)',
			lank: '1',
			has_old: false,
			position: {
				left: '14%',
				top: '62%'
			}
		},
		'frontDoorRight': {
			code: '007',
			key: 'frontDoorRight',
			name: '프론트 도어(우)',
			lank: '1',
			has_old: false,
			position: {
				left: '83%',
				top: '42%'
			}
		},
		'rearDoorRight': {
			code: '008',
			key: 'rearDoorRight',
			name: '리어 도어(우)',
			lank: '1',
			has_old: false,
			position: {
				left: '83%',
				top: '62%'
			}
		},
		'trunkLead': {
			code: '009',
			key: 'trunkLead',
			name: '트렁크 리드',
			lank: '1',
			has_old: false,
			position: {
				left: '48%',
				top: '92%'
			}
		},
		'frontPanel': {
			code: '011',
			key: 'frontPanel',
			name: '프론트 패널',
			lank: 'A',
			has_old: false,
			position: {
				left: '48%',
				top: '9%'
			}
		},
		'insidePanelLeft': {
			code: '012',
			key: 'insidePanelLeft',
			name: '인사이드 패널(좌)',
			lank: 'A',
			has_old: false,
			position: {
				left: '36%',
				top: '17%'
			}
		},
		'insidePanelRight': {
			code: '013',
			key: 'insidePanelRight',
			name: '인사이드 패널(우)',
			lank: 'A',
			has_old: false,
			position: {
				left: '60.5%',
				top: '17%'
			}
		},
		'frontWheelHouseLeft': {
			code: '014',
			key: 'frontWheelHouseLeft',
			name: '프론트 휠하우스(좌)',
			lank: 'B',
			has_old: false,
			position: {
				left: '36%',
				top: '26%'
			}
		},
		'frontWheelHouseRight': {
			code: '015',
			key: 'frontWheelHouseRight',
			name: '프론트 휠하우스(우)',
			lank: 'B',
			has_old: false,
			position: {
				left: '60.5%',
				top: '26%'
			}
		},
		'crossMember': {
			code: '016',
			key: 'crossMember',
			name: '크로스 멤버',
			lank: 'A',
			has_old: false,
			position: {
				left: '48%',
				top: '32%'
			}
		},
		'dashPanel': {
			code: '017',
			key: 'dashPanel',
			name: '대쉬 패널',
			name_old: '프론트 대쉬 패널',
			lank: 'C',
			has_old: true,
			position: {
				left: '48%',
				top: '37%'
			}
		},
		'roofPanel': {
			code: '018',
			key: 'roofPanel',
			name: '루프 패널',
			lank: '2',
			has_old: false,
			position: {
				left: '48%',
				top: '65%'
			}
		},
		'floorPanel': {
			code: '019',
			key: 'floorPanel',
			name: '플로어 패널',
			lank: 'C',
			has_old: false,
			position: {
				left: '48%',
				top: '53%'
			}
		},
		'rearDashPanel': {
			code: '020',
			key: 'rearDashPanel',
			name: '리어 대쉬 패널',
			lank: '',
			has_old: false
		},
		'rearWheelHouseLeft': {
			code: '021',
			key: 'rearWheelHouseLeft',
			name: '리어 휠하우스(좌)',
			lank: 'B',
			has_old: false,
			position: {
				left: '35%',
				top: '80%'
			}
		},
		'rearWheelHouseRight': {
			code: '022',
			key: 'rearWheelHouseRight',
			name: '리어 휠하우스(우)',
			lank: 'B',
			has_old: false,
			position: {
				left: '61.5%',
				top: '80%'
			}
		},
		'trunkFloor': {
			code: '023',
			key: 'trunkFloor',
			name: '트렁크 플로어',
			lank: 'A',
			has_old: false,
			position: {
				left: '48%',
				top: '82%'
			}
		},
		'rearPanel': {
			code: '024',
			key: 'rearPanel',
			name: '리어 패널',
			lank: 'A',
			has_old: false,
			position: {
				left: '48%',
				top: '90%'
			}
		},
		'quarterPanelLeft': {
			code: '025',
			key: 'quarterPanelLeft',
			name: '쿼터 패널(좌)',
			lank: '2',
			has_old: false,
			position: {
				left: '16%',
				top: '80%'
			}
		},
		'quarterPanelRight': {
			code: '026',
			key: 'quarterPanelRight',
			name: '쿼터 패널(우)',
			lank: '2',
			has_old: false,
			position: {
				left: '81%',
				top: '80%'
			}
		},
		'sideSillPanelLeft': {
			code: '027',
			key: 'sideSillPanelLeft',
			name: '사이드실 패널(좌)',
			lank: '2',
			has_old: false,
			position: {
				left: '5%',
				top: '51%'
			}
		},
		'sideSillPanelRight': {
			code: '028',
			key: 'sideSillPanelRight',
			name: '사이드실 패널(우)',
			lank: '2',
			has_old: false,
			position: {
				left: '91%',
				top: '51%'
			}
		},
		'pillarPanelFrontLeft': {
			code: '029',
			key: 'pillarPanelFrontLeft',
			name: '필러 패널 A(좌)',
			name_old: '필러 패널(앞)(좌)',
			lank: 'B',
			has_old: true,
			position: {
				left: '26%',
				top: '38%'
			}
		},
		'pillarPanelMiddleLeft': {
			code: '030',
			key: 'pillarPanelMiddleLeft',
			name: '필러 패널 B(좌)',
			name_old: '필러 패널(중간)(좌)',
			lank: 'B',
			has_old: true,
			position: {
				left: '24%',
				top: '53%'
			}
		},
		'pillarPanelRearLeft': {
			code: '031',
			key: 'pillarPanelRearLeft',
			name: '필러 패널 C(좌)',
			name_old: '필러 패널(뒤)(좌)',
			lank: 'B',
			has_old: true,
			position: {
				left: '27%',
				top: '68%'
			}
		},
		'pillarPanelFrontRight': {
			code: '032',
			key: 'pillarPanelFrontRight',
			name: '필러 패널 A(우)',
			name_old: '필러 패널(앞)(우)',
			lank: 'B',
			has_old: true,
			position: {
				left: '70%',
				top: '38%'
			}
		},
		'pillarPanelMiddleRight': {
			code: '033',
			key: 'pillarPanelMiddleRight',
			name: '필러 패널 B(우)',
			name_old: '필러 패널(중간)(우)',
			lank: 'B',
			has_old: true,
			position: {
				left: '72%',
				top: '53%'
			}
		},
		'pillarPanelRearRight': {
			code: '034',
			key: 'pillarPanelRearRight',
			name: '필러 패널 C(우)',
			name_old: '필러 패널(중간)(우)',
			lank: 'B',
			has_old: true,
			position: {
				left: '69%',
				top: '68%'
			}
		},
		'rearSideMemberLeft': {
			code: '035',
			key: 'rearSideMemberLeft',
			name: '리어 사이드 멤버(좌)',
			lank: 'B',
			has_old: false,
			position: {
				left: '40.5%',
				top: '82%'
			}
		},
		'frontSideMemberLeft': {
			code: '036',
			key: 'frontSideMemberLeft',
			name: '프론트 사이드 멤버(좌)',
			lank: 'B',
			has_old: false,
			position: {
				left: '41.5%',
				top: '21%'
			}
		},
		'radiatorSupport': {
			code: '037',
			key: 'radiatorSupport',
			name: '라디에이터 서포트(볼트체결부품)',
			lank: '1',
			has_old: false,
			position: {
				left: '48%',
				top: '2%'
			}
		},
		'frontSideMemberRight': {
			code: '038',
			key: 'frontSideMemberRight',
			name: '프론트 사이드 멤버(우)',
			lank: 'B',
			has_old: false,
			position: {
				left: '54.5%',
				top: '21%'
			}
		},
		'rearSideMemberRight': {
			code: '039',
			key: 'rearSideMemberRight',
			name: '리어 사이드 멤버(우)',
			lank: 'B',
			has_old: false,
			position: {
				left: '56%',
				top: '82%'
			}
		},
		'packageTray': {
			code: '040',
			key: 'packageTray',
			name: '패키지 트레이',
			lank: 'C',
			has_old: false,
			position: {
				left: '48%',
				top: '73%'
			}
		}
	},

	point = ['교환','판금/용접','흠집','요철','부식','손상'],
	domInspectFront = null,
	domInspectBack = null;

	function init(){
		setCacheDom();
		setTab();
		setSlide();
		setAccordion();
		setInspect();
		setEvent();
	}

	function setCacheDom(){
		domInspectFront = $('.uiInspectFront');
		domInspectBack = $('.uiInspectBack');
	}

	function setTab(){
		new TabUI({scope: '.uiTab'});
	}

	function setSlide(){
		new uiSlide({
			obj:'.uislide_inspect',
			showNavi: true
		});
	}

	function setAccordion(){
		new AccordionUI({scope:'.uiAcc'});
	}

	function setInspect(){
		var data = inscodeValue;

		for(var key in data){
			setIcon(key, data[key]);
		}
	}

	function setIcon(key, data){
		var stats = getStats(data),
			target = inspectData[key],
			position = getPosition(target.position),
			parent = (target.lank === '1' || target.lank === '2') ? domInspectFront : domInspectBack;
			ihtml = '';

		ihtml += '<a class="i uitooltip_btn" style="' + position + '">';
		ihtml += '  <em class="t">' + target.name + '</em>';
		ihtml += '  <em class="performance_explan">' + stats + '</em>';
		ihtml += '</a>';

		$(ihtml).appendTo(parent);
	}

	function setEvent(){
		var link=$('.uislide_inspect .area_inspectico a');
		$('#container').append('<div class="uitooltip uitooltip_performance_explan"><div class="uitooltip_box"><strong class="option_ttl"></strong><p class="option_desc"></p></div></div>');
		var optionLayer=$('.uitooltip_performance_explan');
		var checkOptionTime;
		link.on('click',function() {
			clearTimeout(checkOptionTime);
			var tg=$(this);
			checkOptionTime=setTimeout(function(){
				var obj=tg.find('.performance_explan');
				if (obj.length) {
					var optionHover=[tg.find('.t').text(),obj.clone()];
					optionLayer.find('.option_ttl').text(optionHover[0]);
					optionLayer.find('.option_desc').html('').html(optionHover[1]);
					uiTooltip.init({obj:'.uitooltip_performance_explan',btn:tg});
				}
			},500);
		}).on('mouseleave blur',function(e){
			clearTimeout(checkOptionTime);
		});
	}

	function getPosition(data){
		return 'left:'+ data.left + ';top:' + data.top;
	}

	function getStats(value){
		var tag = '', leng = value.length;
		for(i=0; i<leng; i++){
			switch (value[i]){
				case "CHANGE" :
					tag = tag+'<span class="i1">'+point[0]+' <em>있음</em></span>';
					break;
				case "METAL" :
					tag = tag+'<span class="i2">'+point[1]+' <em>있음</em></span>';
					break;
				case "SCRATCH" :
					tag = tag+'<span class="i3">'+point[2]+' <em>있음</em></span>';
					break;
				case "HILLS" :
					tag = tag+'<span class="i4">'+point[3]+' <em>있음</em></span>';
					break;
				case "CORROSION" :
					tag = tag+'<span class="i5">'+point[4]+' <em>있음</em></span>';
					break;
				case "DAMAGE" :
					tag = tag+'<span class="i6">'+point[5]+' <em>있음</em></span>';
					break;
			}
		}
		return tag;
	}

	return {
		init: function(){
			init();
		}
	}
}(jQuery));

//TabUI TODO: 통합
window.TabUI=function(param){
	this.scope = jQuery(param.scope);
	this.menu = null;
	this.current = null;

	this.init();
}

TabUI.prototype = {
	init: function(){
		this.setCache();
		this.setEvent();
	},

	setCache: function(){
		var root = this;

		this.menu = this.scope.find('.uiTabMenu');
		this.contents = this.scope.find('.uiTabContent');

		this.menu.each(function(a){
			var self = jQuery(this),
				content = root.contents.eq(a);

			self.data('content', content);

			if(a === 0) root.active(self);
		});
	},

	setEvent: function(){
		var root = this;

		this.scope.on('click', function(e){
			var target = jQuery(e.target);

			if(target.hasClass('uiTabMenu')){
				if(root.current) root.deactive(root.current);
				root.active(target);
				return false;
			}
		});
	},

	deactive: function(item){
		item.removeClass('active');
		item.data('content').removeClass('active');
	},

	active: function(item){
		item.addClass('active');
		item.data('content').addClass('active');
		this.current = item;
	}
};

//AccordionUI TODO: 통합
window.AccordionUI=function(param){
	this.scope = jQuery(param.scope);
	this.menu = null;
	this.content = null;

	this.init();
}

AccordionUI.prototype = {
	init: function(){
		this.setCache();
		this.setEvent();
	},

	setCache: function(){
		var root = this;

		this.menu = this.scope.find('.uiAccMenu');
		this.content = this.scope.find('.uiAccContent');

		this.menu.each(function(a){
			var self = jQuery(this),
				content = root.content.eq(a);

			self.data('content', content);
		});
	},

	setEvent: function(){
		var root = this;

		this.scope.on('click', function(e){
			var target = jQuery(e.target),
				parent = target.parent('.uiAccMenu');

			if(target.hasClass('uiAccMenu')){
				root.active(target, target.data('content'));
				return false;
			}else if(typeof parent !== 'undefined' && parent.length){
				root.active(parent, parent.data('content'));
				return false;
			}else if(target.hasClass('uiAccBtnAll')){
				root.activeAll(target);
				return false;
			}
		});
	},

	active: function(menu, content){
		if(menu.hasClass('active')){
			menu.removeClass('active');
			content.removeClass('active');
		}else{
			menu.addClass('active');
			content.addClass('active');
		}

	},

	activeAll: function(item){
		var flag = item.hasClass('on'),
			txt = '모두 펼쳐보기';

		if(!flag) txt = '모두 닫기';
		item.text(txt);

		this.menu.each(function(){
			var self = jQuery(this);

			if(!flag){
				self.addClass('active');
				self.data('content').addClass('active');
				item.addClass('on');
			}else{
				self.removeClass('active');
				self.data('content').removeClass('active');
				item.removeClass('on');
			}
		});
	}
};
