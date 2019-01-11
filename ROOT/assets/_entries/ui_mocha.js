//css : import
require('scss/mocha.scss');

//페이지 스와이프
var pageisScroll, uiMochaSettingFn, priceScroll;
uiMochaSetting={
    init : function(firstScene){
        var e$=this;
        //모카 스와이프
        var obj='.swipePage';
        uiMochaSettingFn=new uiMocha({
            obj:obj,
            first:firstScene,
            speed:222,
            mouseswipe:true,
            showNavi:'.pageTabCon li',
            lazyload:true
        });
        //모카 스와이프 : 장면 세팅
        jQuery(obj).on('show.ui.mocha',function(e){
            var activeNumber=jQuery(e.target).find('.itemScene.action').index();
            if (activeNumber==8) { //가격
                if (!priceScroll) {
                    var text='<div class="prcTabWrap"><div class="prcTab"><div id="prcTab" class="prcTabCon">'+jQuery('.hidden_tab').html()+'</div></div></div>';
                    jQuery('#container').append(text);
                    priceScroll=new iScroll('prcTab',{
                        vScroll:false,
                        hScrollbar:false,
                        bounce:false
                    });
                }
                e$.fnPrcDataRefresh(true); //새로고침
            }else{
                e$.fnPrcDataRefresh(false);
            }
        });
        //메뉴스크롤
        pageisScroll=new iScroll('pageTab',{
            vScroll:false,
            hScrollbar:false,
            bounce:false
        });
        e$.fnMenuScroll();
        //메뉴바로가기
        jQuery('a.pageTab').on('click',function(){
            var n='.'+jQuery(this).attr('href').slice(1);
            jQuery('.pageTabCon').find(n).click();
            return false;
        });
        //종합
        e$.fnMoreText('.total_text',251); //총평
        new uiToggleGroup({group:'mocha_faq'}); //모카faq
        //평가정보
        new uiToggleGroup({group:'area3_group',allClose:true,noOff:true}); //성능
        new uiToggleGroup({group:'area4_group',allClose:true,noOff:true}); //안전편의
        new uiToggleGroup({group:'area5_group',allClose:true,noOff:true}); //유지관리
        jQuery('.evaluation').each(function(){
            var thisArea=jQuery(this);
            var thisCon=thisArea.find('.con');
            var thisBtn=thisArea.find('.tab button');
            var num;
            //활성찾기
            thisCon.each(function(i){
                if (jQuery(this).find('.list>div').length!=0) {
                    num=i;
                    return false;
                }
            });
            //비활성처리
            thisCon.each(function(i){
                if (jQuery(this).find('.list>div').length==0) {
                    thisBtn.eq(i).parent().hide();
                }
            });
            //활성처리
            thisCon.eq(num).addClass('view');
            thisBtn.eq(num).addClass('view');
        });
        //추천컨텐츠
        e$.fnMoreText('.voteContents',91);
    },
    fnMenuScroll : function(){
        jQuery(window).on('load scroll resize',function(){
            var scr=jQuery(this).scrollTop(),
                body=jQuery('body'),
                idY=jQuery('#header').outerHeight();
                tgH=jQuery('.pageTabWrap').outerHeight();
            if(scr>=idY){
                body.addClass('headerFix').css({paddingTop:tgH});
            }else{
                body.removeClass('headerFix').css({paddingTop:0});
            };
            pageisScroll.refresh();
        });
    },
    fnMoreText : function(tg,height){
        var tg=jQuery(tg),
            tgT=tg.find('.commentText'),
            tgB=tg.find('.btnMore'),
            tgBody=jQuery('body').width();
        UIlineShort.init(tg,tgT,tgB,height);
        jQuery(window).on("resize",function(){
            var chkBody=jQuery('body').width();
            if(tgBody!=chkBody){
                tgBody=chkBody;
                UIlineShort.init(tg,tgT,tgB,height);
            };
        });
    },
    fnPrcDataRefresh : function(value){
        if (priceScroll) {
            jQuery(window).off('.namePrctab');
            if (value) {
                jQuery('#prcTab ul').html(jQuery('.hidden_tab ul').html());
                this.fnPrcMenu('.prcTabWrap');
                priceScroll.refresh();
                priceScroll.scrollToElement('li:nth-child(1)',0);
            }else{
                jQuery('.prcTabWrap').removeClass('active');
            }
        }
    },
    fnPrcMenu : function(target){
        var arrayTop=[];
        var floating=jQuery(target);
        var floatingH=floating.height();
        var menu=floating.find('a');
        var dataTable=jQuery('.tableCarPrc table');
        var result;
        jQuery(window).on("resize.namePrctab",function(){
            arrayTop=[];
            priceScroll.refresh();
            floating.parents('.carWrap').css({overflow:'hidden'});
            menu.each(function(i){
                var tg=dataTable.eq(i);
                var scrTop=(tg.length) ? tg.offset().top - floatingH - 48 : 0;
                arrayTop.push(scrTop)
                if (i==menu.length-1) {
                    arrayTop.push(scrTop+tg.outerHeight());
                }
            }).on('click.namePrctab', function(e){
                if (!priceScroll.moved) {
                    var tg=dataTable.eq(jQuery(this).parent().index());
                    if (tg.length) {
                        var top=tg.offset().top - floatingH - 91;
                        if (jQuery(this).index()==0) top += floatingH;
                        jQuery('html,body').stop().animate({'scrollTop':top+'px'},0);
                    }
                }
                e.preventDefault();
            });
            jQuery(window).off('scroll.namePrctab').on("scroll.namePrctab",function(){
                var scr=jQuery(this).scrollTop();
                if (scr>=arrayTop[0]){
                    floating.addClass('active');
                }else{
                    floating.removeClass('active');
                }
                var menuActive=0;
                for(var i=0;i<arrayTop.length;i++){
                    if (scr>arrayTop[i]){
                        menuActive=i;
                    }
                }
                var exeScroll=(result==menuActive);
                result=(exeScroll) ? result : menuActive;
                menu.removeClass('on').eq(menuActive).addClass('on'); //실행
                menuActive=(menuActive<1) ? 1 : menuActive+1; //iscroll 활성화 위치 조정
                if (!exeScroll) priceScroll.scrollToElement('li:nth-child('+menuActive+')',300); //iscroll 중복실행방지
                if (arrayTop.length-1 < menuActive) floating.removeClass('active'); //숨기기
            });
        }).trigger('resize');
    }
};

//페이지 스와이프
var isWebKit = 'WebkitAppearance' in document.documentElement.style;
var uiMocha=function(o){
    this.init(o);
};
uiMocha.prototype = {
    init : function(o){
        this.cacheElement(o);
        this.setEvent();
    },
    cacheElement : function(o){
        this.obj=o.obj,
        this.tgW=jQuery(this.obj),
        this.tgA=this.tgW.children('.itemArea'),
        this.tgR=this.tgA.children('.itemRoll');
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
        this.lazyload=o.lazyload;
    },
    setEvent : function(){
        var e$=this;
        e$.fnTouchSwipe();
        e$.fnRefresh();
        setTimeout(function(){
            e$.fnMove(e$.first,'none');
            e$.tgW.addClass('itemSlideWrapAction');
            e$.tgI.removeClass('on').eq(e$.first).addClass('on');
        },50); //ios 뒤로가기 대응
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
        if(how=='none'){
            e$.tgR.css(e$.rtAnimation(spd,e$.posX)).children(e$.item).removeClass('action').eq(go).addClass('action');
            e$.fnSlide(go,how,origin);
        }else{
            e$.tgR.css(e$.rtAnimation(spd,e$.posX)).one(e$.rtTransitionend(),function(){
                e$.fnSlide(go,how,origin);
            }).children(e$.item).removeClass('action').eq(go).addClass('action');
        };
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
        if(e$.showNavi) e$.fnNavi(go);
        if(e$.lazyload){
            e$.rtItemCurrent().find('.lazyload').each(function(){ e$.fnLazyload(jQuery(this)) }); //이미지 로딩
            e$.tgI.not('.on').find('.lazyloadReady').attr('src','/images/mocha/trans.gif').removeClass('lazyloadReady'); //초기화
            e$.fnLazyloadBG();
        };
        if(!origin) e$.fnPageTabScroll(go);
        //e$.tgR.css(e$.rtAnimation(0,e$.posX));
        e$.wait=false;
        e$.tgW.trigger('show.ui.mocha');
    },
    fnMove : function(go,how,origin){
        var e$=this;
        if(how=='none'&&!origin) e$.posX=-2000; //reset
        e$.fxSlide(go,how,origin);
        uiPageEnd(e$.rtItemCurrent().index()); //touch end
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
        e$.tgN.on({
            click: function() {
                var num=jQuery(this).index();
                if(!jQuery(this).hasClass('on')) e$.fnMove(num,'none');
                jQuery(this).addClass('on').siblings('.on').removeClass('on'); //활성화
                return false;
            }
        }).eq(e$.rtItemCurrent().index()).addClass('on');
        if(isNaN(e$.tgNm)){ //추가 네비 설정시
            e$.tgNm.on({
                click: function() {
                    if(!pageisScroll.moved) e$.tgN.eq(jQuery(this).index()).click(); //부모실행
                    return false;
                }
            }).eq(e$.rtItemCurrent().index()).addClass('on').siblings('.on').removeClass('on');
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
            chkMove,
            eventCheck,
            chkLimit,
            moveEvent=['touchstart','touchmove','touchend'];
        if("ongesturestart" in window) document.addEventListener("gesturestart", function() {}); //iso 멀티터치 대응
        e$.tgW.off().on(moveEvent[0], function(e){
            if(!e$.wait){
                if(e$.stopPropagation) e.stopPropagation();
                eventCheck=e.originalEvent.touches[0];
                start_x=eventCheck.pageX,
                start_y=eventCheck.pageY,
                end_x=start_x,
                chkGesture=true,
                chkScroll=true,
                e$.auto=false;
                var diffArr=jQuery('body').width()/90;
                clearTimeout(e$.intRoll);
                jQuery(this).on(moveEvent[1], function(e){
                    eventCheck=e.originalEvent.touches[0];
                    var respon=(start_y>eventCheck.pageY) ? 6 : -6;
                    if(chkScroll&&chkGesture&&(Math.abs(start_x-eventCheck.pageX))<Math.abs(start_y-eventCheck.pageY+respon)){
                        chkGesture=false;
                        jQuery(this).off(moveEvent[1]+' '+moveEvent[2]);
                        return;
                    };
                    if(chkGesture){
                        e.preventDefault();
                        var diff=Number(eventCheck.pageX-start_x)/diffArr;
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
                    if(Math.abs(end_x-start_x)==0){
                    }else if((start_x-end_x)>move){
                        e$.fnMove(e$.rtFade(e$.howClass[1]),(chkLimit)?'none':e$.howClass[1]);
                    }else if((end_x-start_x)>move){
                        e$.fnMove(e$.rtFade(e$.howClass[0]),(chkLimit)?'none':e$.howClass[0]);
                    }else{
                        e$.fnMove(e$.rtItemCurrent().index(),'none',true);
                    };
                    jQuery(this).off(moveEvent[1]+' '+moveEvent[2]);
                    if(e$.mouseEvent){
                        e$.tgR.find('a').off('click').on('click',function(){
                            if(start_x==end_x){
                                return;
                            }else{
                                return false;
                            };
                        });
                    };
                });
            };
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
                        thImg.removeAttr('data-src').removeClass(e$.loadImage.slice(1)).closest(e$.item).addClass('loadingComplete');
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
    rtTransitionend : function(){
        var result=(isWebKit) ? 'webkitTransitionEnd' : 'transitionend';
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
    },
    fnPageTabScroll : function(go){
        var e$=this,
            pagescrollValue=(go>1) ? go : 1,
            headerH=jQuery('#header').outerHeight()+1;
        //탭메뉴 스크롤
        setTimeout(function(){
            if(jQuery(window).scrollTop()>headerH) jQuery(window).scrollTop(headerH);
            pageisScroll.scrollToElement('li:nth-child('+pagescrollValue+')',300);
        },50);
    },
    fnLazyload : function(tg){
        var e$=this,
            varName=true;
        var scrollHandler=function(){
            var scr=jQuery(this).scrollTop(),
                idH=tg.height();
            if(varName){
                var idY=tg.offset().top-40,
                    first=idY-document.documentElement.clientHeight,
                    last=idY+idH;
                if(scr>=first&&scr<=last){
                    var img=tg.attr('data-src');
                    tg.attr('src',img).addClass('lazyloadReady');
                    varName=false;      
                };
            }else{
                jQuery(window).off('.uiMocha',scrollHandler);
            };
        };
        scrollHandler();
        jQuery(window).on("load.uiMocha scroll.uiMocha resize.uiMocha",scrollHandler);
    },
    fnLazyloadBG : function(){
        var e$=this,
            tg=e$.rtItemCurrent().add(e$.tgR.children('.next')).add(e$.tgR.children('.prev'));
        tg.find('.lazyloadBG').each(function(){ jQuery(this).css({backgroundImage:'url('+jQuery(this).attr('data-src')+')'}); });       
        e$.tgI.not('.on, .prev, .next').find('.lazyloadBG').css({backgroundImage:''}); //초기화
        //이미지 슬라이드
        var imgSlide=e$.rtItemCurrent().find('.itemSlideWrap .itemRoll');
        imgSlide.children('.on').add(imgSlide.children('.next')).add(imgSlide.children('.prev')).find('.loadImage').each(function(){ jQuery(this).attr('src',jQuery(this).attr('data-src')); });
        e$.tgI.not('.on').find('.loadImage').attr('src','/images/mocha/img_slider_chk.gif');
    }
};

//fn : 사진보기 바로가기
function scrollCheckFnImagePos(num){
    var max=jQuery('.dv li').size()-1,
        result=(max<num) ? max : num,
        numValue=(result==0) ? 0 : (result==max) ? jQuery('#wrap').height() : jQuery('.dv li').eq(result).offset().top;
    jQuery(window).scrollTop(numValue);
};

