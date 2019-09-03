/* addEvent */
function UIaddEvent(obj, type, fn){if (obj.addEventListener) {obj.addEventListener(type, fn, false);} else if (obj.attachEvent) {obj["e"+type+fn] = fn;obj[type+fn] = function(){obj["e"+type+fn]( window.event );};obj.attachEvent("on"+type, obj[type+fn]);}}

/*getElementsByClassName*/
getElementsByClassName = function(className) {if(document.getElementsByClassName) {return document.getElementsByClassName(className);} var regEx = new RegExp('(^| )'+className+'( |$)');var nodes = new Array();var elements = document.body.getElementsByTagName("*");var len = elements.length;for(var i=0; i < len ; i++) {if(regEx.test(elements[i].className)) {nodes.push(elements[i]);}}elements = null;return nodes;}

/* 쿠키 함수 */
function UIgetCookieVal (offset) {var endstr = document.cookie.indexOf (";", offset);if (endstr == -1) endstr = document.cookie.length;return unescape(document.cookie.substring(offset, endstr));}
function UIGetCookie (name) {var arg = name + "=";var alen = arg.length;var clen = document.cookie.length;var i = 0;while (i < clen) {var j = i + alen;if (document.cookie.substring(i, j) == arg)return UIgetCookieVal (j);i = document.cookie.indexOf(" ", i) + 1;if (i == 0) break;}return null;}
function UISetCookie (name, value) {var argv = UISetCookie.arguments;var argc = UISetCookie.arguments.length;var expires = (2 < argc) ? argv[2] : null;var path = (3 < argc) ? argv[3] : null;var domain = (4 < argc) ? argv[4] : null;var secure = (5 < argc) ? argv[5] : false;document.cookie = name + "=" + escape (value) + ((expires == null) ? "" : ("; expires=" + expires.toGMTString())) + ((path == null) ? "" : ("; path=" + path)) + ((domain == null) ? "" : ("; domain=" + domain)) + ((secure == true) ? "; secure" : "");}

/* 플래시 */
function flashplayer(src, width, height, auto_start, flashvars) {
	if(src.indexOf('files')==0) src = request_uri+src;
	if(auto_start) auto_start = "true";
	else auto_start = "false";

	var clsid = "";
	var codebase = "";
	var html = "";

	if(typeof(flashvars)=="undefined") flashvars = "";

	if(/\.swf/i.test(src)) {
		clsid = "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";
		codebase = "http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,28,0";
		html = ""+
			"<object classid=\""+clsid+"\" codebase=\""+codebase+"\" width=\""+width+"\" height=\""+height+"\" flashvars=\""+flashvars+"\">"+
			"<param name=\"wmode\" value=\"transparent\" />"+
			"<param name=\"allowScriptAccess\" value=\"sameDomain\" />"+
			"<param name=\"movie\" value=\""+src+"\" />"+
			"<param name=\"quality\" value=\"high\" />"+
			"<param name=\"allowScriptAccess\" value=\"always\" />"+
			"<param name=\"flashvars\" value=\""+flashvars+"\" />"+
			"<embed allowScriptAccess=\"always\" src=\""+src+"\" autostart=\""+auto_start+"\"  width=\""+width+"\" height=\""+height+"\" flashvars=\""+flashvars+"\" wmode=\"transparent\" pluginspage=\"http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash\" type=\"application/x-shockwave-flash\"></embed>"+
			"<\/object>";
	} else if(/\.flv/i.test(src)) {
		html = "<embed src=\""+request_uri+"common/tpl/images/flvplayer.swf\" allowfullscreen=\"true\" autostart=\""+auto_start+"\" width=\""+width+"\" height=\""+height+"\" flashvars=\"&file="+src+"&width="+width+"&height="+height+"&autostart="+auto_start+"\" />";
	} else {
		html = "<embed src=\""+src+"\" autostart=\""+auto_start+"\" allowfullscreen=\"true\" width=\""+width+"\" height=\""+height+"\"></embed>";
	}


	document.writeln(html);
}

/* wing ad_encar */
var browserChk = navigator.userAgent.toLowerCase();
var isie6 = ( (browserChk.indexOf('msie 6')!=-1) && !(browserChk.indexOf('msie 7')!=-1) && !(browserChk.indexOf('msie 8')!=-1) && !(browserChk.indexOf('msie 9')!=-1) ) ? true : false;
window.onscroll = function() {

	var adObj = document.getElementById("ad_encar");
	var pgGroup = document.body.className.substr(0,2);
	var pgDetail = document.body.className.split(' ');
	var fixPos = 10; //position value (px)

	/* setting (default position, sync by common.css) */
	if(pgGroup == 'in'){ //index
		var maxTop = 100;
	} else if(pgDetail[2] == 'carsearchlist'){
		var maxTop = 190;
	} else if(pgDetail[2] == 'cardetail'){
		var maxTop = 239;
	} else if(pgDetail[2] == 'dc_cardetail'){
		var maxTop = 140;
	} else if(pgDetail[1] == 'fc_carlease' || pgDetail[1] == 'cs_event'){
		var maxTop = 165;
	} else if(pgDetail[2] == 'mynotice_on'){ //개인마이페이지 띠공지 분기
		var maxTop = 168;
	} else if(pgGroup == 'cs' || pgGroup == 'my' || pgGroup == 'es' || pgGroup == 'md_index' || pgGroup == 'mdcm' || pgGroup== 'mdad' || pgGroup == 'mdst' || pgGroup == 'mdsm' || pgGroup == 'mdin' || pgGroup == 'mdus' || pgGroup == 'mdex'){
		var maxTop = 136;
	} else if(pgDetail[1] == 'car_compare'){ //매물비교
		var maxTop = 77;
	}else if(pgDetail[1] == 'dc_carchecked' || pgDetail[1] == 'fc_carchecked' || pgDetail[1] == 'dc_carcompensated_l01' || pgDetail[1] == 'fc_carcompensated_l01' || pgDetail[1] == 'ev_carchecked' || pgDetail[1] == 'ev_carcompensated_l01' || pgDetail[1] == 'hs_carchecked'){ //보증차량,헛걸음
		var maxTop = 378;
	} else { //sub etc
		var maxTop = 125;
	}

	if (adObj && !isie6) {
		sct = (document.body.scrollTop)? document.body.scrollTop : document.documentElement.scrollTop;

		if(sct <= 0) {
		adObj.style.top = maxTop+'px';
		}else if(sct < maxTop){
			adObj.style.top = (maxTop-sct)+'px';
		}else if(sct > maxTop && adObj.style.top != fixPos+'px'){
			adObj.style.top = fixPos + 'px';
		}
	}
};

/* 센터 한국 지도 */
function centerMap(loc, locT){
	var mapArea = document.getElementById("mapKor");
	var mapPoint = document.getElementById("mapPt");
	var maps = mapArea.getElementsByTagName("area");
	var points =  mapPoint.getElementsByTagName("em");
	var locInfo = document.getElementById("locInfo");

	if (loc != null && loc.nodeName == "AREA") {
		var locT = loc.getAttribute("alt");
		var loc = loc.getAttribute("value");
	} else if(loc == null){locInfo.style.display = "none";}

	mapArea.className = "map_kor "+ loc;
	for (y=0; y<=(points.length-1); y++){
		if (points[y].getAttribute("value") == loc){
			points[y].childNodes[0].className = "on";
		}
	}
	locInfo.className = "loc_info lo_" + loc;
	locInfo.innerHTML = locT;

	for (i=0; i<=(maps.length-1); i++){
		maps[i].onmouseover = function(){
			mapArea.className = "map_kor " + this.getAttribute("value");
			for (x=0; x<=(points.length-1); x++){
				if (points[x].getAttribute("value") == this.getAttribute("value")){points[x].childNodes[0].className = "on";}
				if ((points[x].getAttribute("value") == loc)&&(points[x].getAttribute("value") != this.getAttribute("value"))){points[x].childNodes[0].className = "";}
			}
			locInfo.style.display = "";
			locInfo.className = "loc_info lo_" + this.getAttribute("value");locInfo.innerHTML = this.getAttribute("alt");
		}
		maps[i].onmouseout = function(){
			if (loc != null){mapArea.className = "map_kor " + loc;}
			else{mapArea.className = "map_kor";}

			for (z=0; z<=(points.length-1); z++){
				if (points[z].getAttribute("value") == this.getAttribute("value")){points[z].childNodes[0].className = "";}
				if (points[z].getAttribute("value") == loc){points[z].childNodes[0].className = "on";}
			}
			if (loc != null){
				locInfo.className = "loc_info lo_" + loc;locInfo.innerHTML = locT;
			} else {locInfo.style.display = "none";locInfo.className = "loc_info";}

		}
	}
}

/* 성능 자동차 상태표시 UI 관련 스크립트 */
// 그림영역 box 그리기
function insChkbox(){
    //그림 영역 전체 span 그리기
    jq$('.pic_wrap .picarea').append('<em class="area"><span></span></em>');
    //테이블 영역 부위별 항목명 불러오기
    var targetSpan = jq$('.pic_wrap .picarea');
    jq$('.performdata tbody tr').each(function(i){
        var findTd = jq$(this).find('td');
        var apnString1 = "<em class='box'><strong>";
        findTd.each(function(j){if( j == 0 ){apnString1 += this.innerHTML + ". ";}else if(j < 2){apnString1 += this.innerHTML;}});
        apnString1 +=   "</strong></em>\n";
        targetSpan.eq(i).append(apnString1);
    });
    //교환 판금 checkbox, label 그리기
    jq$('em.box').each(function(i){
        var apnString2 = '<span><label for="ipchg_'+i+' "><input type="checkbox" id="ipchg_'+i+' " />교환</label><label for="ipmet_'+i+' "><input type="checkbox" id="ipmet_'+i+' " />판금/용접</label><label for="ipcor_'+i+' "><input type="checkbox" id="ipcor_'+i+' " />부식</label></span>';
        jq$(this).append(apnString2);
    });
};

// 신성능
function insChkboxNew(){
	//그림 영역 전체 span 그리기
	jq$('.pic_wrap .picarea').append('<em class="area"><span></span></em>');
	//테이블 영역 부위별 항목명 불러오기
	var targetSpan = jq$('.pic_wrap .picarea');
	jq$('.performdata tbody tr').each(function(i){
		var self = jq$(this),
			child_leng = self.children().length,
			start = 1,
			end = 2;

		if(child_leng < 9){
            start = 0;
            end = 1;
		}

		var findTd = self.find('td');
		var apnString1 = "<em class='box'><strong>";
		findTd.each(function(j){
			if( j == start ){
				apnString1 += this.innerHTML + ". ";
			}else if(j == end){
				apnString1 += this.innerHTML;
			}

		});
		apnString1 +=   "</strong><span class='icon_arrow spr_new_perform'></span></em>\n";
		targetSpan.eq(i).append(apnString1);
	});
	//교환 판금 checkbox, label 그리기
	jq$('em.box').each(function(i){
		 var apnString2 = '';

		 apnString2 += '<span>';
		 apnString2 += '	<label for="ipchg_' + i + '"><input type="checkbox" id="ipchg_' + i + '" /><em class="icon_chk spr_new_perform"></em>교환</label>';
		 apnString2 += '	<label for="ipmet_' + i + '"><input type="checkbox" id="ipmet_' + i + '" /><em class="icon_chk spr_new_perform"></em>판금/용접</label>';
		 apnString2 += '	<label for="ipcsr_' + i + '" class="floatRt"><input type="checkbox" id="ipcsr_' + i + '" /><em class="icon_chk spr_new_perform"></em>흠집</label>';
		 apnString2 += '	<label for="ipune_' + i + '"><input type="checkbox" id="ipune_' + i + '" /><em class="icon_chk spr_new_perform"></em>요철</label>';
		 apnString2 += '	<label for="ipcor_' + i + '"><input type="checkbox" id="ipcor_' + i + '" /><em class="icon_chk spr_new_perform"></em>부식</label>';
		 apnString2 += '	<label for="ipdam_' + i + '" class="floatRt"><input type="checkbox" id="ipdam_' + i + '" /><em class="icon_chk spr_new_perform"></em>손상</label>';
		 apnString2 += '</span>';

		 jq$(this).append(apnString2);
	});
};

// 테이블 내 선택된 체크 박스 찾기
function tbChkSel(){
    var p=document.getElementById('performdata'),
        tr=p.getElementsByTagName('tr'),
        leng=tr.length;

    for(var i=0; i<leng; i++){
        if(i===0 || i===15) continue;
        performUI('varData',tr[i]);
    }
};

//신성능
function tbChkSelNew(){
	var p=document.getElementById('performdata'),
		tr=p.getElementsByTagName('tr'),
		leng=tr.length;

	for(var i=0; i<leng; i++){
		if(i===0 || i===15) continue;
		performUINew('varData',tr[i]);
	}
};

// 자동차 상태표시 UI
function performUI(var1, target){
    var chk = target.getElementsByTagName('input');
    var chk2 = target.getElementsByTagName('label');
    var chked = false;
    for (var k=0;k<chk.length;k++){if(chk[k].checked){chked = true;}};
    var apdIcox = '<span class="icox"></span>';
    var apdIcow = '<span class="icow"></span>';
    var apdIcoc = '<span class="icoc"></span>';

    if(var1 == "varPic"){
        var seldataID = jq$("#"+target.id+"data");

        // 사용 안하는듯....
        var labelChg = seldataID.find(".ins_inputwrap label:eq(0)");
        var labelMet = seldataID.find(".ins_inputwrap label:eq(1)");
        var labelCor = seldataID.find(".ins_inputwrap label:eq(2)");

        var selChg = chk[0].checked;
        var selMet = chk[1].checked;
        var selCor = chk[2].checked;

        var seldataChg = seldataID.find('input:eq(0)');
        var seldataMet = seldataID.find('input:eq(1)');
        var seldataCor = seldataID.find('input:eq(2)');

        var icoBox = jq$(target).find("em.icon");
        var icoIMGx = jq$(target).find("em.icon span.icox");
        var icoIMGw = jq$(target).find("em.icon span.icow");
        var icoIMGc = jq$(target).find("em.icon span.icoc");

        if(chked){
            jq$(target).addClass("active_sel");
            seldataID.addClass('seldataOn');
        }else{
            jq$(target).removeClass("active_sel");
            seldataID.removeClass('seldataOn')
        };

        if (icoBox[0] == null){
            jq$(target).append('<em class="icon"></em>');
        };

        //교환(교체)
        if(selChg) {
            seldataChg[0].checked=true;
            labelChg.addClass(" check_checkbox");
            labelMet.addClass("check_disabled");
            seldataMet[0].disabled='disabled';
            chk[1].disabled='disabled';

            if( icoIMGx[0] == null ){
                jq$(target).find("em.icon").append(apdIcox)
            }
        }else{
            seldataChg[0].checked=false;
            icoBox.children('span.icox').remove();
            labelChg.removeClass("check_checkbox");
            labelMet.removeClass("check_disabled");
            seldataMet[0].disabled='';
            chk[1].disabled='';
        };

        //판금/용접
        if(selMet) {
            seldataMet[0].checked=true;
            labelMet.addClass(" check_checkbox");
            labelChg.addClass("check_disabled");
            seldataChg[0].disabled='disabled';
            chk[0].disabled='disabled';

            if( icoIMGw[0] == null ){
                jq$(target).find("em.icon").append(apdIcow)
            }
        }else{
            seldataMet[0].checked=false;
            icoBox.children('span.icow').remove();
            labelMet.removeClass("check_checkbox");
            labelChg.removeClass("check_disabled");
            seldataChg[0].disabled='';
            chk[0].disabled='';
        };

        //부식
        if(selCor) {
            seldataCor[0].checked=true;
            labelCor.addClass(" check_checkbox");

            if( icoIMGc[0] == null ){
                jq$(target).find("em.icon").append(apdIcoc)
            }
        }else{
            seldataCor[0].checked=false;
            icoBox.children('span.icoc').remove();
            labelCor.removeClass("check_checkbox");
        };
    };

    if(var1 == "varData"){
        var idSplit = (target.id).split("data").join("");
        var selPicID = jq$("#" + idSplit);

        var seldataChg = chk[0].checked;
        var seldataMet = chk[1].checked;
        var seldataCor = chk[2].checked;

        var selPicChg = selPicID.find('input:eq(0)');
        var selPicMet = selPicID.find('input:eq(1)');
        var selPicCor = selPicID.find('input:eq(2)');


        var seldataChg2 = jq$(target).find('label:eq(0)');
        var seldataMet2 = jq$(target).find('label:eq(1)');
        var seldataCor2 = jq$(target).find('label:eq(2)');


        var icoBox = selPicID.find("em.icon");
        var icoIMGx = selPicID.find("em.icon span.icox");
        var icoIMGw = selPicID.find("em.icon span.icow");
        var icoIMGc = selPicID.find("em.icon span.icoc");

        if(chked){
            jq$(target).addClass("seldataOn");
            selPicID.addClass("active_sel");
        }else{
            jq$(target).removeClass("seldataOn");
            selPicID.removeClass("active_sel");
        };

        if (icoBox[0] == null){
            selPicID.append('<em class="icon"></em>');
        };

        if(seldataChg) {
            selPicChg[0].checked=true;
            selPicMet[0].disabled='disabled';
            seldataMet2.addClass('check_disabled');
            chk[1].disabled='disabled';

            if( icoIMGx[0] == null ){
                selPicID.find("em.icon").append(apdIcox);
            }
        }else{
            selPicChg[0].checked=false;
            icoBox.children('span.icox').remove();
            seldataChg2.removeClass("check_checkbox");
            seldataMet2.removeClass('check_disabled');
            selPicMet[0].disabled='';
            chk[1].disabled='';
        };

        if(seldataMet) {
            selPicMet[0].checked=true;
            selPicChg[0].disabled='disabled';
            seldataChg2.addClass('check_disabled');
            chk[0].disabled='disabled';

            if( icoIMGw[0] == null ){
                selPicID.find("em.icon").append(apdIcow);
            }
        }else{
            selPicMet[0].checked=false;
            icoBox.children('span.icow').remove();
            seldataMet2.removeClass("check_checkbox");
            seldataChg2.removeClass('check_disabled');
            selPicChg[0].disabled='';
            chk[0].disabled='';
        };

        if(seldataCor) {
            selPicCor[0].checked=true;

            if( icoIMGc[0] == null ){
                selPicID.find("em.icon").append(apdIcoc);
            }
        }else{
            selPicCor[0].checked=false;
            icoBox.children('span.icoc').remove();
            seldataCor2.removeClass("check_checkbox");
        };
    };

    if(var1 == "vardataOver"){
        var idSplit = (target.id).split("data").join("");
        jq$("#"+ idSplit).addClass("active");
        jq$(target).addClass("selThisOn");
        //jq$("#"+ idSplit).find("em.box").fadeToggle(100, "linear");
    };
    if(var1 == "vardataOut"){
        var idSplit = (target.id).split("data").join("");
        jq$("#"+ idSplit).removeClass("active");
        jq$(target).removeClass("selThisOn");
        //jq$("#"+ idSplit).find("em.box").fadeToggle(100, "linear");
    };
    if(var1 == "varpicOver"){
        jq$(target).addClass("active");
        jq$("#"+target.id+"data").addClass('selThisOn');
        // jq$(target).find("em.box").fadeToggle(100, "linear");
    };
    if(var1 == "varpicOut"){
        jq$(target).removeClass("active");
        jq$("#"+target.id+"data").removeClass('selThisOn');
        //jq$(target).find("em.box").fadeToggle(100, "linear");
    };
}

//신성능 자동차 상태표시
var performState = {
    accident: false,

    repair: false,
    lank1: false,
    lank2: false,

    frame: false,
    lank: [],
    lankA: false,
    lankB: false,
    lankC: false,

    dom: {
        uiAccidentInfo: null,
        uiRepairInfo: null,
        uiLank1Info: null,
        uiLank2Info: null,
        uiFrameInfo: null,
        uiFrameDetailInfo: null
    }
};

function performUINew(var1, target){
	var chk = target.getElementsByTagName('input');
	var chk2 = target.getElementsByTagName('label');
	var chked = false;
	for (var k=0;k<chk.length;k++){if(chk[k].checked){chked = true;}};

	if(var1 == "varPic"){
		var seldataID = jq$("#"+target.id+"data");

        var labelChg = seldataID.find(".ins_inputwrap label:eq(0)");
        var labelMet = seldataID.find(".ins_inputwrap label:eq(1)");
        var labelScr = seldataID.find(".ins_inputwrap label:eq(2)");
        var labelUne = seldataID.find(".ins_inputwrap label:eq(3)");
        var labelCor = seldataID.find(".ins_inputwrap label:eq(4)");
        var labelDam = seldataID.find(".ins_inputwrap label:eq(5)");

		var selChg = chk[0].checked;
		var selMet = chk[1].checked;
		var selScr = chk[2].checked;
        var selUne = chk[3].checked;
        var selCor = chk[4].checked;
        var selDam = chk[5].checked;

		var seldataChg = seldataID.find('input:eq(0)');
		var seldataMet = seldataID.find('input:eq(1)');
		var seldataScr = seldataID.find('input:eq(2)');
        var seldataUne = seldataID.find('input:eq(3)');
        var seldataCor = seldataID.find('input:eq(4)');
        var seldataDam = seldataID.find('input:eq(5)');

		var icoBox = jq$(target).find("em.icon");
		var icoIMGx = jq$(target).find("em.icon span.icox");
		var icoIMGw = jq$(target).find("em.icon span.icow");
		var icoIMGc = jq$(target).find("em.icon span.icoc");

		if(chked){
			jq$(target).addClass("active_sel");
			seldataID.addClass('seldataOn');
		}else{
			jq$(target).removeClass("active_sel");
			seldataID.removeClass('seldataOn')
		};

		if (icoBox[0] == null){
			jq$(target).append('<em class="icon spr_new_perform"></em>');
		};

		//교환(교체)
		if(selChg) {
			seldataChg[0].checked=true;
			labelChg.addClass(" check_checkbox");
            jq$(chk2[0]).addClass('checked');
		}else{
			seldataChg[0].checked=false;
			labelChg.removeClass("check_checkbox");
            jq$(chk2[0]).removeClass('checked');
		};

		//판금/용접
		if(selMet) {
			seldataMet[0].checked=true;
			labelMet.addClass(" check_checkbox");
            jq$(chk2[1]).addClass('checked');
		}else{
			seldataMet[0].checked=false;
			labelMet.removeClass("check_checkbox");
            jq$(chk2[1]).removeClass('checked');
		};

        if(selScr) {
            seldataScr[0].checked=true;
            labelScr.addClass(" check_checkbox");
            jq$(chk2[2]).addClass('checked');
        }else{
            seldataScr[0].checked=false;
            labelScr.removeClass("check_checkbox");
            jq$(chk2[2]).removeClass('checked');
        };

        if(selUne) {
            seldataUne[0].checked=true;
            labelUne.addClass(" check_checkbox");
            jq$(chk2[3]).addClass('checked');
        }else{
            seldataUne[0].checked=false;
            labelUne.removeClass("check_checkbox");
            jq$(chk2[3]).removeClass('checked');
        };

		//부식
		if(selCor) {
			seldataCor[0].checked=true;
			labelCor.addClass(" check_checkbox");
            jq$(chk2[4]).addClass('checked');
		}else{
			seldataCor[0].checked=false;
			labelCor.removeClass("check_checkbox");
            jq$(chk2[4]).removeClass('checked');
		};

        if(selDam) {
            seldataDam[0].checked=true;
            labelDam.addClass(" check_checkbox");
            jq$(chk2[5]).addClass('checked');
        }else{
            seldataDam[0].checked=false;
            labelDam.removeClass("check_checkbox");
            jq$(chk2[5]).removeClass('checked');
        };

        newPerformUI.update();
	};

	if(var1 == "varData"){
		var idSplit = (target.id).split("data").join("");
		var selPicID = jq$("#" + idSplit);

		var seldataChg = chk[0].checked;
		var seldataMet = chk[1].checked;
		var seldataScr = chk[2].checked;
        var seldataUne = chk[3].checked;
        var seldataCor = chk[4].checked;
        var seldataDam = chk[5].checked;

		var selPicChg = selPicID.find('input:eq(0)');
		var selPicMet = selPicID.find('input:eq(1)');
		var selPicScr = selPicID.find('input:eq(2)');
        var selPicUne = selPicID.find('input:eq(3)');
        var selPicCor = selPicID.find('input:eq(4)');
        var selPicDam = selPicID.find('input:eq(5)');

		var seldataChg2 = jq$(target).find('label:eq(0)');
		var seldataMet2 = jq$(target).find('label:eq(1)');
		var seldataScr2 = jq$(target).find('label:eq(2)');
        var seldataUne2 = jq$(target).find('label:eq(3)');
        var seldataCor2 = jq$(target).find('label:eq(4)');
        var seldataDam2 = jq$(target).find('label:eq(5)');

		var icoBox = selPicID.find("em.icon");

		if(chked){
			jq$(target).addClass("seldataOn");
			selPicID.addClass("active_sel");
		}else{
			jq$(target).removeClass("seldataOn");
			selPicID.removeClass("active_sel");
		};

		if (icoBox[0] == null){
			selPicID.append('<em class="icon spr_new_perform"></em>');
		};

		if(seldataChg) {
			selPicChg[0].checked=true;
            selPicID.find('label:eq(0)').addClass('checked');
		}else{
			selPicChg[0].checked=false;
            selPicID.find('label:eq(0)').removeClass('checked');
			seldataChg2.removeClass("check_checkbox");
		};

		if(seldataMet) {
			selPicMet[0].checked=true;
            selPicID.find('label:eq(1)').addClass('checked');
		}else{
			selPicMet[0].checked=false;
            selPicID.find('label:eq(1)').removeClass('checked');
			seldataMet2.removeClass("check_checkbox");
		};

        if(seldataScr) {
            selPicScr[0].checked=true;
            selPicID.find('label:eq(2)').addClass('checked');
        }else{
            selPicScr[0].checked=false;
            selPicID.find('label:eq(2)').removeClass('checked');
            seldataScr2.removeClass("check_checkbox");
        };

        if(seldataUne) {
            selPicUne[0].checked=true;
            selPicID.find('label:eq(3)').addClass('checked');
        }else{
            selPicUne[0].checked=false;
            selPicID.find('label:eq(3)').removeClass('checked');
            seldataUne2.removeClass("check_checkbox");
        };

		if(seldataCor) {
			selPicCor[0].checked=true;
            selPicID.find('label:eq(4)').addClass('checked');
		}else{
			selPicCor[0].checked=false;
            selPicID.find('label:eq(4)').removeClass('checked');
			seldataCor2.removeClass("check_checkbox");
		};

        if(seldataDam) {
            selPicDam[0].checked=true;
            selPicID.find('label:eq(5)').addClass('checked');
        }else{
            selPicDam[0].checked=false;
            selPicID.find('label:eq(5)').removeClass('checked');
            seldataDam2.removeClass("check_checkbox");
        };

        newPerformUI.update();
	};

	if(var1 == "vardataOver"){
		var idSplit = (target.id).split("data").join("");
		jq$("#"+ idSplit).addClass("active");
		jq$(target).addClass("selThisOn");
	};
	if(var1 == "vardataOut"){
		var idSplit = (target.id).split("data").join("");
		jq$("#"+ idSplit).removeClass("active");
		jq$(target).removeClass("selThisOn");
	};
	if(var1 == "varpicOver"){
		 jq$(target).addClass("active");
		 jq$("#"+target.id+"data").addClass('selThisOn');
	};
	if(var1 == "varpicOut"){
		jq$(target).removeClass("active");
		jq$("#"+target.id+"data").removeClass('selThisOn');
	};
}

var newPerformUI = {
    state: {
        isAccident: false,

        exterior: false,
        lank1: {
            status: false,
            statusLimit: false,
            parent: '.uiFrontPerform',
            start: 1,
            end: 9,
            hasIgnore: true,
            ignoreIndex: 9
        },
        lank2: {
            status: false,
            statusLimit: false,
            parent: '.uiFrontPerform',
            start: 10,
            end: 14,
            hasIgnore: false
        },

        frame: {
            status: false,
            statusArray: []
        },
        lankA: {
            status: false,
            statusLimit: false,
            parent: '.uiBackPerform',
            start: 1,
            end: 6,
            hasIgnore: true,
            ignoreIndex: 2
        },
        lankB: {
            status: false,
            statusLimit: false,
            parent: '.uiBackPerform',
            start: 7,
            end: 21,
            hasIgnore: false
        },
        lankC: {
            status: false,
            statusLimit: false,
            parent: '.uiBackPerform',
            start: 22,
            end: 23,
            hasIgnore: false
        },

        dom: {
            isCached: false,
            uiAccidentInfo: null,
            uiRepairInfo: null,
            uiLank1Info: null,
            uiLank2Info: null,
            uiFrameInfo: null,
            uiFrameDetailInfo: null
        }
    },
    domInputPrice: null,
    domOverlay: null,
    domHideArea: null,
    currentTuning1: false,
    currentTuning2: false,
    domTuning1: null,
    domTuning2: null,
    domTuning3: null,

    confirmFlag: false,
    confirmFlag2: false,

    init: function(){
        this.setCacheDom();
        this.setTuning1();
        this.setEvent();
    },

    setCacheDom: function(){
        this.domOverlay = jq$('.uiOverlay');
        this.domInputPrice = jq$('.uiInputPrice');
        this.domHideArea = jq$('.uiHideArea');
        this.domTuning1 = jq$('.uiTuning1');
        this.domTuning2 = jq$('.uiTuning2');
        this.domTuning3 = jq$('.uiTuning3');
    },

    setEvent: function(){
        var root = this;

        jq$(document).on({
            'click': function(e){
                var target = jq$(e.target);

                if(target.hasClass('uiChkPrice')){
                    if(!target.hasClass('on')){
                        target.addClass('on');
                        root.domOverlay.addClass('hide');
                        root.domHideArea.addClass('show');
                    }else{
                        target.removeClass('on');
                        root.domOverlay.removeClass('hide');
                        root.domHideArea.removeClass('show');
                    }

                }else if(target.hasClass('uiTuning1')){
                    if(jq$('body').hasClass('uiDisabled')) return;
                    root.setTuning2(target.hasClass('uiExist'));

                }else if(target.hasClass('uiTuning2')){
                    if(jq$('body').hasClass('uiDisabled')) return;
                    if(!root.currentTuning1) return;

                    if(!target.hasClass('on')){
                        target.addClass('on');
                    }else{
                        target.removeClass('on');
                    }

                    var flag = false;

                    root.domTuning2.each(function(e){
                        if(jq$(this).hasClass('on')){
                            flag = true;
                            return;
                        }
                    });

                    root.currentTuning2 = flag;
                    root.setTuning3(flag);

                }else if(target.hasClass('uiTuning3')){
                    if(!root.currentTuning2) return;
                }
            }
        });

        //TODO: 정리 필요...
        // jq$('.uiUseConfirm').on('change', function(){
        //     var self = jq$(this),
        //         label = self.parent().find('label'),
        //         tr = self.closest('tr'),
        //         children = tr.find('input[type=checkbox]'),
        //         checked = self.prop('checked'),
        //         flag = false,
        //         trFlag = false;
        //         //useFlag = false;
        //
        //     if(checked && !root.state.isAccident){
        //         flag = confirm('볼트 체결식인 경우 무사고 차량이며, 그 외는 유사고에 해당합니다. \'볼트 체결식\' 차량인가요?');
        //
        //         if(flag){
        //             self.prop('checked', true);
        //             label.addClass('check_checkbox');
        //         }else{
        //             self.prop('checked', false);
        //             label.removeClass('check_checkbox');
        //         }
        //     }
        //
        //     children.each(function(a){
        //         if(jq$(this).prop('checked')){
        //             //if(a<2) useFlag = true;
        //             trFlag = true;
        //             return false;
        //         }
        //     });
        //
        //     //root.confirmFlag = useFlag;
        //
        //     if(trFlag){
        //         tr.addClass('seldataOn');
        //     }else{
        //         tr.removeClass('seldataOn');
        //         //root.confirmFlag = false;
        //     }
        // });
    },

    setTuning1: function(){
        this.domTuning1.eq(0).trigger('click');
        this.setTuning2(false);
    },

    setTuning2: function(flag){
        if(flag){
            this.domTuning2.removeClass('disabled');
            this.domTuning2.prev().prop('disabled', !flag);
            this.currentTuning1 = flag;
        }else{
            this.domTuning2.addClass('disabled');
            this.domTuning2.removeClass('check_checkbox');
            this.domTuning2.prev().prop('disabled', !flag);
            this.domTuning2.prev().prop('checked', flag);
            this.currentTuning1 = flag;

            this.setTuning3(flag);
        }
    },

    setTuning3: function(flag){
        if(!flag){
            this.domTuning3.addClass('disabled');
            this.domTuning3.removeClass('check_checkbox');
            this.domTuning3.prev().prop('disabled', !flag);
            this.domTuning3.prev().prop('checked', flag);
        }else{
            this.domTuning3.removeClass('disabled');
            this.domTuning3.prev().prop('disabled', !flag);
        }
    },

    setCachePerformDom: function(){
        var dom = this.state.dom;

        dom.uiAccidentInfo = jq$('.uiAccidentInfo');
        dom.uiRepairInfo = jq$('.uiRepairInfo');
        dom.uiLank1Info = jq$('.uiLank1Info');
        dom.uiLank2Info = jq$('.uiLank2Info');
        dom.uiFrameInfo = jq$('.uiFrameInfo');
        dom.uiFrameDetailInfo = jq$('.uiFrameDetailInfo');
        dom.isCached = true;
    },

    setState: function(){
        var state = this.state,
            lank1 = state.lank1,
            lank2 = state.lank2,
            lankA = state.lankA,
            lankB = state.lankB,
            lankC = state.lankC;

        lank1.status = this.getStateLank(false, lank1.parent, lank1.start, lank1.end, lank1.hasIgnore, lank1.ignoreIndex);
        lank1.statusLimit = this.getStateLank(true, lank1.parent, lank1.start, lank1.end, lank1.hasIgnore, lank1.ignoreIndex);
        lank2.status = this.getStateLank(false, lank2.parent, lank2.start, lank2.end, lank2.hasIgnore);
        lank2.statusLimit = this.getStateLank(true, lank2.parent, lank2.start, lank2.end, lank2.hasIgnore);

        lankA.status = this.getStateLank(false, lankA.parent, lankA.start, lankA.end, lankA.hasIgnore, lankA.ignoreIndex);
        lankA.statusLimit = this.getStateLank(true, lankA.parent, lankA.start, lankA.end, lankA.hasIgnore, lankA.ignoreIndex);
        lankB.status = this.getStateLank(false, lankB.parent, lankB.start, lankB.end, lankB.hasIgnore);
        lankB.statusLimit = this.getStateLank(true, lankB.parent, lankB.start, lankB.end, lankB.hasIgnore);
        lankC.status = this.getStateLank(false, lankC.parent, lankC.start, lankC.end, lankC.hasIgnore);
        lankC.statusLimit = this.getStateLank(true, lankC.parent, lankC.start, lankC.end, lankC.hasIgnore);

        state.exterior  = lank1.statusLimit ? true : false;

        state.frame.status = (lankA.status || lankB.status || lankC.status) ? true : false;
        state.frame.statusArray = this.getFrameArray([lankA.status, lankB.status, lankC.status]);

        state.isAccident  = (lank2.statusLimit || lankA.statusLimit || lankB.statusLimit || lankC.statusLimit) ? true : false;
    },

    setView: function(){
        var state = this.state,
            dom = state.dom,
            framStatusArray = state.frame.statusArray,
            leng = framStatusArray.length;

        dom.uiAccidentInfo.text(state.isAccident ? '있음' : '없음');
        dom.uiRepairInfo.text(state.exterior ? '있음' : '없음');
        dom.uiLank1Info.text(state.lank1.status ? '있음' : '없음');
        dom.uiLank2Info.text(state.lank2.status ? '있음' : '없음');
        dom.uiFrameInfo.text(state.frame.status ? '있음' : '없음');

        dom.uiFrameDetailInfo.empty();
        if(leng){
            for(var i=0; i<leng; i++){
                dom.uiFrameDetailInfo.append('<em class="txt_frame">' + framStatusArray[i] + '랭크</em>');
            }
        }
    },

    getStateLank: function(isLimit, parent, start, end, ignore, ignoreIndex){
        var state = this.state,
            flag = false,
            limitFlag = false,
            tr = jq$(parent).find('tbody tr'),
            leng = tr.length,
            limit = 2; //교환, 판금/용접만

        if(start===10) limit = 1; //2랭크일 경우 교환만

        for(var i=0; i<leng; i++){
            var self = tr.eq(i),
                index = i + 1,
                child, size;

            if(index >= start && index <= end){
                //if(ignore && index === ignoreIndex) continue;

                child = self.find('input[type=checkbox]');
                size = child.length;

                child.each(function (a) {
                    if(isLimit){
                        if(a < limit){
                            if(ignore && index === ignoreIndex) {

                            }else{
                                if(jq$(this).prop('checked')) {
                                    flag = true;
                                    return;
                                }
                            }
                        }
                    }else{
                        if(jq$(this).prop('checked')) {
                            flag = true;
                            return;
                        }
                    }

                    // if(isLimit) size = limit;
                    // if(a < size){
                    //     if(ignore && index === ignoreIndex){
                    //
                    //     }else{
                    //         if(jq$(this).prop('checked')) {
                    //             flag = true;
                    //             return;
                    //         }
                    //     }
                    // }
                });
            }

            if(flag) break;
        }

        return flag;
    },

    getFrameArray: function(arr){
        var leng = arr.length,
            valueArray = ['A', 'B', 'C'],
            resultArray = [];

        for(var i=0; i<leng; i++){
            if(arr[i]) resultArray.push(valueArray[i]);
        }
        return resultArray;
    },

    update: function(){
        if(!this.state.dom.isCached) this.setCachePerformDom();

        this.setState();
        this.setView();
    }
};

function FormTreeUI(options){
    this.scope = options.scope;
    this.options = options;
    this.state = {};

    this.init();
}

FormTreeUI.prototype = {
    init: function(){
        this.setCache();
        this.setEvent();

        this.setView();
    },

    setCache: function(){
        var context = this,
            leng = this.options.depth,
            target,
            depth1_status = false;

        for(var i=1; i<=leng; i++){
            target = this.scope.find('.uiFormTreeDepth' + i);
            target.each(function(a){
                var self = jQuery(this);

                self.data('label', self.parent().find('label'));

                if(i === 1 && self.prop('checked') && self.val() !== context.options.disabledValue){
                    depth1_status = true;
                }
            });

            this['depth' + i] = target;

            if(depth1_status){
                this.state['depth' + i] = true;
            }else{
                this.state['depth' + i] = false;
            }
        }
    },

    setEvent: function(){
        var root = this;

        this.scope.on({
            'change': function(e){
                root.setState(jq$(e.target));
            }
        });
    },

    setState: function(item){
        var options = this.options,
            type = item.attr('type'),
            classRegx = /uiFormTreeDepth[0-9]/g,
            depthRegx = /[0-9]/g,
            classArr = classRegx.exec(item.attr('class')),
            className, depth, flag;

        if(classArr !== null){
            className = classArr[0];
            depth = depthRegx.exec(className)[0];

            if(depth < options.depth){
                switch(type){
                    case 'radio':
                        flag = item.val() === options.disabledValue ? false : true;

                        for(var i=depth; i<= options.depth; i++){
                            this.state['depth' + i] = flag;
                        }

                        break;

                    case 'checkbox':
                        //TODO: checkbox일 경우 처리..
                        break;

                    default:
                }

                this.setView();
            }
        }
    },

    setView: function(){
        var context = this,
            leng = this.options.depth;

        for(var i=2; i<=leng; i++){
            this['depth' + i].each(function(){
                jQuery(this).prop('disabled', !context.state['depth' + i]);
            });

            if(this.state['depth' + i]){
                this['depth' + i].each(function(){
                    jQuery(this).data('label').removeClass('disabled');
                });
            }else{
                this['depth' + i].each(function(){
                    var self = jQuery(this);
                    self.prop('checked', false);
                    self.data('label').addClass('disabled');
                    self.data('label').removeClass('check_checkbox');
                });

            }

        }
    }
};

/* 중고차시황 평균선 세로값 지정 함수 */
function avrBarSize(resultGraph, avrBar){
	setTimeout(
		function() {
			try{
				var tbSize = 0;
				var resultGraphEl = document.getElementById(resultGraph);
				var avrBarEl=document.getElementById(avrBar);
				var resultGraphTr = resultGraphEl.getElementsByTagName("tbody")[0].getElementsByTagName("tr");
				for (var x=1;x<=(resultGraphTr.length-1);x++){tbSize+=resultGraphTr[x].getElementsByTagName("td")[0].clientHeight;}
				avrBarEl.style.height = tbSize+"px";
			}catch(e){}
		}
	, 100);
};

/* --- 공통UI --- */
function D$(d){return document.getElementById(d)}
function T$(tg,t){return tg.getElementsByTagName(t)}
function E$(e){return document.createElement(e)}
var browserChk=navigator.userAgent.toLowerCase(); //브라우저
var tridentChk=navigator.userAgent.match(/Trident\/(\d)/i); //문서모드
var mobilePhones = new Array('iphone','ipad','android','blackberry','bb10','windows ce','lg','mot','samsung','nokia','webos','opera mini','sonyericsson','opera mobi','iemobile','microsoft windows');
var oldIE7=browserChk.indexOf('msie 7')!=-1;
var oldIE8=browserChk.indexOf('msie 8')!=-1;
var oldIE9=browserChk.indexOf('msie 9')!=-1;
/* tab menu */
var uiTabT1=function(id){
	var tg=id.slice(id.indexOf("#")+1);
	var tw=tg.slice(0,-1);
	var num=tg.slice(tg.lastIndexOf(0));
	var te=document.getElementById(tw).getElementsByTagName('li');
	for(i=0;i<=te.length-1;i++){
		te[i].className=te[i].className.replace('active', '');
		document.getElementById(tw+(i+1)).className=document.getElementById(tw+(i+1)).className.replace('active', '');
	}
	te[num-1].className+=''+' active';
	document.getElementById(tg).className+=''+' active';
}
var uiTabT2=function(id){
	var tg=id.slice(id.indexOf("#")+1);
	var tw=tg.slice(0,-1);
	var num=tg.slice(tg.lastIndexOf(0));
	var te=document.getElementById(tw).getElementsByTagName('div');
	var k=0;
	for(h=0;h<=te.length-1;h++){
		(te[h].parentNode.id==undefined||te[h].parentNode.id==null)? l=0:l=te[h].parentNode.id;
		if(l==tw) k++;
	}
	for(i=1;i<=k;i++) document.getElementById(tw+i).className=document.getElementById(tw+i).className.replace('active', '');
	document.getElementById(tg).className+=''+' active';
}

var css3Vendors = ['-moz-','-webkit-','-o-','-ms-','-khtml-',''];

function toCamelCase(str){
	return str.toLowerCase().replace(/(\-[a-z])/g, function($1){
		return $1.toUpperCase().replace('-','');
	});
};

function setCss3Style(el,prop,val){
	for(var i=0,l=css3Vendors.length;i<l;i++){
		var p = toCamelCase(css3Vendors[i] + prop);
		if(p in el.style) el.style[p] = val;
	};
};

function setCss3Fade(obj,type){
	var objcss=obj.style;
	objcss.display='block';
	objcss.opacity=0;
	setTimeout(function(){
		if(type=='open'){
			setCss3Style(obj,'transition','opacity 0.15s ease-in-out, visibility 0s 0s'); //css3
			objcss.opacity=1;
			objcss.visibility='visible';
		}else if(type='close'){
			setCss3Style(obj,'transition','opacity 0.15s ease-in-out, visibility 0s 0.15s'); //css3
			objcss.opacity=0;
			objcss.marginTop=0;
			objcss.visibility='hidden';
		};
	},10);
};

/* Layer A */
function uiLayerA(id,type,action){
	var obj=D$(id);
	obj.style.display='block';
	obj.style.opacity=0;
	setTimeout(function(){
		if(type==null||type=='') type=(obj.style.visibility=='visible')?'close':'open';
		if(type=='open'){
			setCss3Style(obj,'transition','opacity 0.15s ease-in-out,visibility 0s 0s');
			obj.style.opacity=1;
			obj.style.visibility='visible';
		}else if(type=='close'){
			if(action=='block'){
				setCss3Style(obj,'transition','opacity 0.15s ease-in-out,visibility 0s 0.15s');
				obj.style.opacity=0;
				obj.style.visibility='hidden';
				obj.style.display='none';
			}else{
				setCss3Style(obj,'transition','opacity 0.15s ease-in-out,visibility 0s 0.15s');
				obj.style.opacity=0;
				obj.style.visibility='hidden';
				setTimeout(function(){obj.style.display='none'},100);
			}
		};
	},0);
};

/* Layer B - 정중앙, 딤드, 내부스크롤유무('yes') */
function uiLayerB(id,type,innerScroll,bgClick){
	var obj=D$(id);
	var winH=document.documentElement.clientHeight;
	obj.style.display='block';
	var n=obj.getElementsByTagName('div').length-1;
	//var bodyDiv=D$("bodydiv");
	var bg=T$(obj,'div')[n];
	var objHtml=T$(obj,'div')[3];
	if(type==null||type=='') type=(obj.style.visibility=='visible')?'close':'open';
	if(type=='open'){
		//obj.style.display="block";
		document.body.className+=' uiLayerZindex'; //body class 추가
		var sct=(document.body.scrollTop)? document.body.scrollTop : document.documentElement.scrollTop; //스크롤값
		if(winH>=obj.clientHeight){sct+=(winH-obj.clientHeight)/2} //컨텐츠가 작을때 세로 중앙
		if(innerScroll=='yes'&&winH<obj.clientHeight){ //내부스크롤 : 컨텐츠가 클때
			objHtml.style.height=winH-210+'px'; //header높이(200px)+10px(상하여백을위해)
			objHtml.style.overflow='hidden';
			objHtml.style.overflowY='auto';
		};
		obj.style.top=(sct-100)+'px'; //header높이(200px)-30px(상하여백을위해)
		if(document.body.className.indexOf('pop') >= 0){//팝업창일 경우
			 obj.style.top = ( sct + 20 )+'px';
			 obj.style.marginBottom = '20px';
		}
		var objW=obj.clientWidth;
		obj.style.width=objW+'px';
		obj.style.marginLeft=-objW/2+'px';
		if(n>1){
			setCss3Fade(obj,'open');
		};
	}else if(type=='close'){
		setCss3Fade(obj,'close');
		obj.style.top='-5000'+'em'; //visibility로 제어되기때문에(영역이 잡히기때문에) 보내버렸음
		document.body.className=document.body.className.replace(' uiLayerZindex','');
		if(innerScroll=='yes') objHtml.style.height='auto';
	};
	if(bgClick !== 'no') bg.onclick=function(){uiLayerB(id,'close')};
	/*document.onkeyup=function(e){
		if(e.which==27){uiLayerB(id,'close')}
	}*/
};

/* 20140514 ver 1.0 Input 디자인 (checkbox, radio) - 접근성개선

지원 브라우저 - IE(7~), etc 등

조건체크하여 input의 부모태그에 class적용
#1.input 다음에 label 존재체크 && type이 체크박스나 라디오인지 체크
#2.input 활성화 체크, label에 활성화 class적용
#3.type별로 부모에 class입력 ( class="encarInput d-radio d-checkbox" )

마크업
<input type=".." /> <label>텍스트</label>

활용되는 class명
부모  = encarInput, d-checkbox, d-radio
label = focus, check_checkbox, check_radio, disabled

사용법
new inputLabel(id);

!20150707 disabled 형식 추가
!20160802 class 변경방식 수정
*/
function inputLabelFind(label){//label 찾기
	if(!label.nextElementSibling){//ie8, earlier
		if(label.nextSibling && label.nextSibling.nodeType!=1){//white space check
			return label.nextSibling.nextSibling;
		}else{
			return label.nextSibling;
		};
	}else{//ie9+, modern browser
		return label.nextElementSibling;
	}
}

function inputLabel(id,refresh){
	var w = D$(id);
	if(w == null) return false;

	var p = T$(w,'input'),
		leng = p.length;

	for(n=0; n<leng; n++){
		var x = p[n],
			type = x.getAttribute('type'),
			th = inputLabelFind(x);

		if(!!th && th.tagName !== 'LABEL') continue;

		if(th && (type === 'checkbox' || type === 'radio')){ //#1
			//새로고침
			if(x.checked){
				th.className = addClass(th.className, 'check_' + type);
			}else{
				th.className = removeClass(th.className, 'check_' + type);
			}

			//기본
			if(x.parentNode.className.indexOf('encarInput') === -1){
				x.parentNode.className = addClass(x.parentNode.className, 'encarInput');
				x.parentNode.className = addClass(x.parentNode.className, 'd-' + type);

				x.onfocus=function(){//포커스 in
					var th=inputLabelFind(this);
					if(th) th.className = addClass(th.className, 'focus');
				};

				x.onblur=function(){//포커스 out
					var th=inputLabelFind(this);
					if(th) th.className = removeClass(th.className, 'focus');
				};

				function eleClick(event){//클릭
					var ele = (event !== null && event.srcElement !== null) ? event.srcElement : this,
						type = ele.getAttribute('type'),
						th = inputLabelFind(ele);

					if(type === 'radio'){//라디오 타입
						var nameGroup=document.getElementsByName(ele.name),
							leng = nameGroup.length;

						for(r=0; r<leng; r++){
							var tn = inputLabelFind(nameGroup[r]);
							if(tn) tn.className = removeClass(tn.className, 'check_' + type);
						}
					}

					if(ele.checked){
						th.className = addClass(th.className, 'check_' + type);
					}else{
						th.className = removeClass(th.className, 'check_' + type);
					}
				}

				if(x.addEventListener){
					x.addEventListener('click', eleClick, false);
				}else{//ie8이하
					x.attachEvent('onclick', eleClick);
				};
			}

			//disabled 체크
			if(x.disabled){
				th.className = addClass(th.className, 'disabled');
			}else{
				th.className = removeClass(th.className, 'disabled');
			}
		}
	}

	//class 추가
	function addClass(cl, add){
		if(cl === '') return add;

		var arr = cl.split(' '),
			leng = arr.length,
			flag = false;

		for(var i=0; i<leng; i++){
			if(arr[i] === add){
				flag = true;
				break;
			}
		}

		if(!flag) arr[leng] = add;

		return arr.join(' ');
	}

	//class 삭제
	function removeClass(cl, remove){
		if(cl === '') return cl;

		var arr = cl.split(' '),
			leng = arr.length;

		for(var i=0; i<leng; i++){
			if(arr[i] === remove){
				arr.splice(i, 1);
				break;
			}
		}

		return arr.join(' ');
	}
}

/* jquery 사용
function inputLabel(id){
	var temp$ = jQuery.noConflict();

	(function($){
		var wrapper = $('#' + id);
		if(!wrapper.length) return false;

		var inpt = wrapper.find('input');
		inpt.each(function(a){
			var self = $(this),
				type = self.attr('type'),
				lbl = find_lbl(self);

			if(!!lbl.length && (type === 'checkbox' || type ==='radio')){
				if(self.prop('checked')) lbl.addClass('check_' + type); else lbl.removeClass('check_' + type);

				self.data('info',{
					'label' : lbl,
					'type' : type
				});

				var parent = self.parent();

				if(!parent.hasClass('encarInput')){
					parent.addClass('encarInput');
					parent.addClass('d-' + type);

					self.on('focus',function(){
						$(this).data('info').label.addClass('focus');
					});

					self.on('blur',function(){
						$(this).data('info').label.removeClass('focus');
					});

					self.on('click',function(){
						var target = $(this),
							is_checked = target.prop('checked'),
							label = target.data('info').label,
							cls = 'check_' + type;

						if(type === 'radio'){
							var name = target.attr('name'),
								radio = $('input[name=' + name + ']');

							radio.each(function(){
								$(this).data('info').label.removeClass('check_' + type);
							});
						}

						if(is_checked){
							label.addClass(cls);
						}else{
							label.removeClass(cls);
						}
					});
				}
			}
		});

		function find_lbl(item){
			return item.parent().find('label');
		}
	}(temp$));
}*/

/* Scroll Fixed 공통
- 고정:uiScrFix(타겟,스크롤시작값,스크롤끝값,class제어타겟) of 유동적:uiScrFix(타겟,시작ID,컨텐츠ID,class제어타겟) */
function uiScrFix(target,first,last,classTarget,endTarget){
	for(var i=0;i<mobilePhones.length;i++){//모바일 체크
		if(browserChk.indexOf(mobilePhones[i])!=-1){
			return false;
		};
	};
	if(isNaN(first)){//문자
		var fT=D$(first).offsetTop,
			fH=D$('headerDIV').clientHeight,
			first=fT+fH;
	};
	var a=D$(target),
		aH=a.clientHeight,
		aC=a.className;
	if(last==null){//없음
		var bH=document.body.clientHeight;
	}else if(isNaN(last)){//문자
		var bH=D$(last).clientHeight;
	}else if(!isNaN(last)){//숫자
		var bH=last;
	};
	if (endTarget) {
		var fT=D$(endTarget).offsetTop,
			winH=document.documentElement.clientHeight,
			fH=D$('headerDIV').clientHeight,
			endTarget=fT-winH+fH+aH;
	};
	var end=(endTarget) ? endTarget : first+bH-aH;
	if(classTarget) a=D$(classTarget);
	var sct=(document.body.scrollTop)?document.body.scrollTop:document.documentElement.scrollTop,
		classFix=a.className.match(/_fix/g),
		classEnd=a.className.match(/_end/g);
	if(sct<first){
		if(classFix) a.className=a.className.replace(' '+target+'_fix','');
		if(classEnd) a.className=a.className.replace(' '+target+'_end','');
	}
	else if(sct>end){
		if(classFix) a.className=a.className.replace(' '+target+'_fix','');
		if(!classEnd) a.className+=' '+target+'_end';
	}
	else if(sct>=first){
		if(classEnd) a.className=a.className.replace(' '+target+'_end','');
		if(!classFix)  a.className+=' '+target+'_fix';
	};
};


/*자동 롤링 슬라이드*/
function rollSlide(){
	var itemSize = jq$('.sgroup li').outerHeight(true);
	var size=jq$('.sgroup li').size();
	if(size!=1){
		if(size==2) jq$(jq$('.sgroup').html()).clone().appendTo(jq$('.sgroup')); //2개
		jq$('.sgroup li:first').before( jq$('.sgroup li:last'));
		jq$('.sgroup').css('top',-itemSize +'px');
		setInterval(function(){
			var positionInt = parseInt(jq$('.sgroup').css('top')) - itemSize;
			jq$('.sgroup').animate({'top':positionInt+'px'},600,function(){
				jq$('.sgroup li:last').after(jq$('.sgroup li:first'));
				jq$('.sgroup').css('top',-itemSize+'px');
			});
		},3000);
	};
};
//가격가이드 동영상
function movControl(action){
	var objCon='<iframe src="https://player.vimeo.com/video/125020251?autoplay=1&color=ffffff&title=0&byline=0&portrait=0" width="536" height="357" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
	var objarea = jq$("#movarea");
	var objTag = jq$("#movarea iframe");
	if(action == 'mvplay'){
		objarea.html(objCon);
	}else if(action == 'mvstop'){
		objTag.remove();
	}
	jq$("#movie_priceguide div").click(function(){
		movControl('mvstop');
	});

}

/* 롤링 스크립트 (디폴트값)
new uiSlide({
	obj:'#testWrap',	//타겟
	first:2,			//첫장면 (1)
	scene:'fade',		//전환효과 slide, fade (slide)
	speed:500,			//전환속도 (1000)
	auto:3000,			//자동롤링 시간 (0)
	loop:false,			//무한루프
	hover:true,			//자동롤링 : 마우스 오버시 멈춤 (false)
	mouseswipe:true,	//마우스스와이프
	showNavi:'.target', //네비 true, false OR '.target' (false)
	showArrow:true,		//버튼 : 이전 다음 (false)
	showNumber:true,	//페이징 (false)
	showPlay:true,		//버튼 : 재생 멈춤 (false)
	showBG:true			//배경
});
*/
var uiSlide = function(o){
	this.init(o);
};
uiSlide.prototype = {
	init : function(o){
		this.cacheElement(o);
		this.setEvent();
	},
	cacheElement : function(o){
		if (o.auto||o.showPlay) o.loop=true;
		this.item='.scene',
		this.obj=o.obj,
		this.first=o.first || 1,
		this.scene=o.scene,
		this.speed=o.speed || 1000,
		this.auto=o.auto || 0,
		this.hover=o.hover,
		this.mouseswipe=o.mouseswipe,
		this.navi=o.showNavi,
		this.arrow=o.showArrow,
		this.number=o.showNumber,
		this.pause=o.showPlay,
		this.bg=o.showBG,
		this.loop=(o.loop==false) ? o.loop : true,
		this.fnSlideend=o.fnSlideend,
		this.pauseChk='',
		this.tgW=jQuery(this.obj),
		this.tgR=this.tgW.find('.showRoll>ul'),
		this.tgI='',
		this.pos=this.tgR.find(this.item).outerWidth(),
		this.css3check=getSupportedTransformIE10(),
		this.intRoll='',
		this.caseOnlyone;
	},
	setEvent : function(){
		var e$=this;
			shadowClass=(e$.loop) ? 'shadow' : 'shadow hidden',
			eleFirst=e$.tgR.find(e$.item+':first'),
			eleLast=e$.tgR.find(e$.item+':last');
			jQuery(eleFirst).clone().appendTo(e$.tgR).addClass(shadowClass);
			jQuery(eleLast).clone().prependTo(e$.tgR).addClass(shadowClass);

		e$.tgI=e$.tgR.find(e$.item); //재정의
		e$.caseOnlyone=e$.rtItemLength()>1;
		(e$.scene=='fade') ? e$.tgI.not('.shadow').css({position:'absolute',left:0,top:0}) : e$.tgR.css({left:0});
		if (e$.caseOnlyone) {
			if(e$.navi) e$.ifNavi();
			if(e$.arrow) e$.ifArrow();
			if(e$.number) jQuery('<div class="showNumber"><strong></strong>/<span></span></div>').clone().appendTo(e$.tgW);
			if(e$.hover) e$.ifHover();
			if(e$.bg) e$.ifBG();
			if(e$.mouseswipe) e$.ifMouseSwipe();
			e$.fnMove(e$.first,'fxNon');
			e$.tgR.css({width:(e$.rtItemLength()+2)*100+'%'}); //width추가
			if(e$.auto){
				e$.pauseChk=true;
				e$.fnAuto();
			};
			if(e$.pause) e$.ifPause();
		}else{
			e$.fnMove(e$.first,'fxNon');
		}
	},
	fxFade : function(go,how){
		var e$=this;
		if(e$.css3check){
			//css
			e$.tgI.css({zIndex:0,opacity:0,transition:e$.speed/1000+'s'}).removeClass('on').eq(go).addClass('on').css({zIndex:1,opacity:1}).stop().animate({top:0},e$.speed,function(){
				e$.tgI.removeClass('action').eq(go).addClass('action');
			});
		}else{
			//animate
			e$.tgI.css({zIndex:0}).stop().animate({opacity:0},e$.speed).removeClass('on').eq(go).addClass('on').css({zIndex:1}).stop().animate({opacity:1},e$.speed,function(){
				e$.tgI.removeClass('action').eq(go).addClass('action');
			});
		};
	},
	fxSlide : function(go,how){
		var e$=this,
			posX=e$.pos*(go),
			if1=go==0,	//first
			if2=e$.rtItemLength(),	//last
			real=(if1) ? e$.tgI.eq(if2) : (go==if2+1) ? e$.tgI.eq(1) : '';
		//css & animate
		var tgRcss=(e$.css3check) ? {transition:(how=='fxNon') ? '0s' : e$.speed/1000+'s',transform:'translate(-'+posX+'px, 0px)'} : {top:0},
			tgRani=(e$.css3check) ? {top:0} : {left:'-'+posX+'px'};
		e$.tgR.addClass('wait').css(tgRcss).stop().animate(tgRani,e$.speed,function(){
			e$.tgR.removeClass('wait').find(e$.item).removeClass('action').eq(go).add(real).addClass('action');
			if(e$.fnSlideend) e$.fnSlideend((if1) ? if2 : (go==if2+1) ? 1 : go);
			if(if1||go==if2+1){//사이드일때
				var sidePos;
				(if1) ?	sidePos=if2 : sidePos=1;
				var tgRcssSide=(e$.css3check) ? {transition:'0s',transform:'translate(-'+e$.pos*sidePos+'px, 0px)'} : {left:'-'+e$.pos*sidePos+'px'};
				e$.tgR.css(tgRcssSide).find(e$.item).removeClass('on action').eq(sidePos).addClass('on action');
				return;
			};
		}).find(e$.item).removeClass('on').eq(go).add(real).addClass('on');

        this.tgW.trigger('slide', {currentNum: e$.rtItemCurrent().index() - 1}); //[손] 18/05/13 : event trigger
	},
	fnMove : function(go,how){
		var e$=this;
		if(!e$.loop){
			var max=e$.rtItemLength();
			(go==0) ? go=1 : (go>max) ? go=max : '';
			if(e$.arrow) e$.fnArrow(go,max);
		};
		(e$.scene=='fade') ? e$.fxFade(go,how) : e$.fxSlide(go,how);
		if (e$.caseOnlyone) {
			if(e$.navi) e$.fnNavi(go);
			if(e$.number) e$.fnNumber();
			if(e$.bg) e$.fnBG();
			if(how=='loop'){
				e$.fnAuto();
			}else{
				clearTimeout(e$.intRoll);
				if(e$.pause) e$.tgW.find('.showPlay a.pause').click();
			};
		}
	},
	fnAuto : function(value,auto,speed,over){
		var e$=this,
			time=e$.auto || 3000,
			dataAutoValue=Number(e$.rtItemCurrent().attr('data-auto')) || time;
		if(value!='pause'){
			clearTimeout(e$.intRoll);
			e$.intRoll=setTimeout(function(){
				e$.fnMove(e$.rtFade('next'),'loop');
			}, dataAutoValue+e$.speed);
			return;
		}else{
			clearTimeout(e$.intRoll);
		};
	},
	fnNumber : function(){
		var e$=this,
			tgNum=e$.tgW.find('.showNumber');
			total=e$.rtItemLength(),
			current=e$.rtItemCurrent().index();
		tgNum.find('strong').html((current==0)?total:current);
		tgNum.find('span').html(total);
	},
	fnNavi : function(go){
		var e$=this;
		if(e$.rtItemLength()<go) go=1; //초과될때는 1
		e$.tgN.removeClass('on').eq(go-1).addClass('on');
		if(isNaN(e$.navi)) e$.tgNm.removeClass('on').eq(go-1).addClass('on');
	},
	ifNavi : function(){
		var e$=this,
			tgNcon='';
		//마크업 생성
		e$.tgI.not('.shadow').each(function(i){
			tgNcon+='<a href="#'+e$.obj+(i+1)+'"><span>'+(i+1)+'</span></a>';
		});
		jQuery('<div class="showNavi">'+tgNcon+'</div>').clone().appendTo(e$.tgW);

		e$.tgN=e$.tgW.find('.showNavi a'); //네비 버튼
		e$.tgNm=jQuery(e$.navi); //추가 네비
		e$.tgN.on({
			click: function(e) {
				//if(!e$.tgR.hasClass('wait')){
					var num=jQuery(this).index();
					if(!jQuery(this).hasClass('on')) e$.fnMove(num+1);
					jQuery(this).add(e$.tgNm.eq(num)).addClass('on').siblings('.on').removeClass('on'); //활성화
				//};
				//return false;
                e.preventDefault();
			}
		}).eq(e$.rtItemCurrent().index()-2).addClass('on');
		if(isNaN(e$.tgNm)){ //추가 네비 설정시
			e$.tgNm.on({
				click:function(e){
					e$.tgN.eq(jQuery(this).index()).click(); //부모실행
					//return false;
					e.preventDefault();
				}
			}).eq(e$.rtItemCurrent().index()-2).addClass('on');
		};
	},
	fnBG : function(){
		var e$=this,
			move=(e$.rtItemCurrent().index()-1)/(e$.rtItemLength()-1)*100;
		e$.tgW.find('.showBG').css({backgroundPosition:move+'% 0'});
	},
	ifBG : function(){
		var e$=this;
			btncon='<div class="showBG"><span></span></div>'
		jQuery(btncon).clone().appendTo(e$.tgW); //마크업 생성
	},
	fnMouseSwipe : function(down_x,up_x){
		var e$=this,
			move=30;
		if((down_x-up_x)>move){
			e$.fnMove(e$.rtFade('next'));
		}else if((up_x-down_x)>move){
			e$.fnMove(e$.rtFade('prev'));
		}else{
			e$.fnMove(e$.rtItemCurrent().index());
		};
	},
	ifMouseSwipe : function(){
		var e$=this,
			eventCheck,
			evNamespace='.uiSlideEvent'
			moveEvent=['touchstart mousedown','touchmove'+evNamespace+' mousemove'+evNamespace,'touchend'+evNamespace+' mouseup'+evNamespace+' mouseleave'+evNamespace];
		e$.tgW.on(moveEvent[0], function(e){
			var posX=e$.pos*e$.rtItemCurrent().index()-2,
				eTypeCheck=e.type!=moveEvent[0].split(' ',1),
				eventCheck=(eTypeCheck) ? e : e.originalEvent.touches[0],
				down_x=eventCheck.pageX,
				up_x=eventCheck.pageX,
				findLink=e$.rtItemCurrent().find('a');
				if(eTypeCheck) e.preventDefault();
			findLink.off('.uiSlideFindLink');
			jQuery(this).on(moveEvent[1], function(e){
				eventCheck=(eTypeCheck) ? e : e.originalEvent.touches[0];
				if(e$.scene!='fade'){
					up_x=eventCheck.pageX,
						diff=Number(down_x-up_x)+Number(posX);
					if(Math.abs(down_x-up_x)>4){
						findLink.on('click.uiSlideFindLink', function(e){
							e.preventDefault();
						});
					};
					e$.tgR.css({transform:'translate(-'+diff+'px, 0px)', transition:'0s'});
				};
				up_x=eventCheck.pageX;
			}).on(moveEvent[2], function(e){
				e$.tgW.off(evNamespace);
				if(down_x!=eventCheck.pageX){
					up_x=eventCheck.pageX;
					e$.fnMouseSwipe(down_x,up_x);
				};
			});
		});
	},
	ifHover : function(){
		var e$=this;
		e$.tgW.on({
			mouseenter:function(){
				if(e$.pauseChk) e$.fnAuto('pause');
			},mouseleave:function(){
				if(e$.pauseChk) e$.fnAuto();
			}
		});
	},
	fnArrow : function(go,max){
		var e$=this,
			arrowBtn=e$.tgW.find('.showArrow'),
			off='disiable';
		if(go==max&&max==1){
			arrowBtn.find('a').addClass(off);
		}else if(go==max){
			arrowBtn.find('a.next').addClass(off);
			arrowBtn.find('a.prev').removeClass(off);
		}else if(go==1){
			arrowBtn.find('a.prev').addClass(off);
			arrowBtn.find('a.next').removeClass(off);
		}else{
			arrowBtn.find('a').removeClass(off);
		};
	},
	ifArrow : function(){
		var e$=this,
			btncon=(
				'<div class="showArrow">'+
				'<a href="#prev" class="prev"><span>prev</span></a>'+
				'<a href="#next" class="next"><span>next</span></a>'+
				'</div>'
			);
		jQuery(btncon).clone().appendTo(e$.tgW); //마크업 생성
		e$.tgW.find('.showArrow a').on({
			click: function(e){
				var num;
				if(jQuery(this).hasClass('next')){
					num=e$.rtFade('next');
				}else if(jQuery(this).hasClass('prev')){
					num=e$.rtFade('prev');
				};
				e$.fnMove(num);
				//return false;
                e.preventDefault();
			}
		});
	},
	ifPause : function(){
		var e$=this;
		jQuery('<div class="showPlay"><a href="#play" class="play"><span>Play</span></a><a href="#pause" class="pause"><span>Pause</span></a></div>').clone().appendTo(e$.tgW);
		e$.tgW.find('.showPlay a').on({
			click: function(){
				if(jQuery(this).hasClass('play')){
					e$.fnAuto();
					e$.pauseChk=true;
				}else if(jQuery(this).hasClass('pause')){
					e$.fnAuto('pause');
					e$.pauseChk=false;
				};
				jQuery(this).addClass('on').siblings().removeClass('on');
				return false;
			}
		});
		(e$.auto) ? e$.tgW.find('.showPlay a.play').addClass('on') : e$.tgW.find('.showPlay a.pause').addClass('on'); //버튼 활성화
	},
	rtItemLength : function(){
		var e$=this;
		return e$.tgI.length-2;
	},
	rtItemCurrent : function(){
		var e$=this;
		return e$.tgI.siblings('.on:first');
	},
	rtFade : function(value){
		var e$=this;
		if(value=='next'){
			return (e$.scene=='fade'&&e$.loop&&e$.rtItemCurrent().next().hasClass('shadow')) ? 1 : e$.rtItemCurrent().next().index();
		}else if(value=='prev'){
			return (e$.scene=='fade'&&e$.loop&&e$.rtItemCurrent().prev().hasClass('shadow')) ? e$.rtItemLength() : e$.rtItemCurrent().prev().index();
		}
	}
};
function getSupportedTransformIE10(){
	var prefixes='transform WebkitTransform MozTransform OTransform'.split(' '),
		div=document.createElement('div');
	for(var i=0;i<prefixes.length;i++) if(div&&div.style[prefixes[i]]!== undefined) return true;
	return false;
};

//차량상세 SK엔카진단 스크롤체크
function scrollCheckFn(id,data){
	$jq(window).on("load.scrollCheckFn scroll.scrollCheckFn resize.scrollCheckFn",function(){
		var scr=$jq(this).scrollTop(),
			idY=$jq('#'+id).offset().top,
			idH=$jq('#'+id).height(),
			first=idY-document.documentElement.clientHeight + 300,
			last=idY+idH;
		if(scr>=first&&scr<=last){
			inspectFrame(data, true);
			$jq(window).off('.scrollCheckFn');
		};
	});
};
//차량상세 SK엔카진단
function inspectFrame(data, auto){
	var wrap=jQuery('#areaInspect');

	wrap.find('.check_frame').removeClass('animate');
	wrap.find('.check_panel').hide();
	wrap.find('.check_frame').show();

	var toggleInspect = new uiToggleGroup({group:'detailInspect',groupName:['link_tab','list_detail'],allClose:true,noOff:true,start:1})
	jQuery('[toggle-group=detailInspect]').on('shown.ui.togglegroup', function (e, opt) {
		if(opt.currentNum === '1'){
			inspectFrame(data, false);
		}else {
			cksResulte2(data);
		}
		auto = false;
	})

	if(auto) {
		// 교환부위 유무 체크
		var resultCkeck=true,
			checkPoint=['006026','006033','006027','006003','006023','006006','006018','006009'];
		for(var k=0;k<data.length;k++){
			for(var j=0;j<checkPoint.length;j++){
				if(checkPoint[j]==data[k].split('_')[0]){
					if(data[k].split('_')[1]!=1){
						resultCkeck=false; //checkPoint만 체크
					}
				}
			}
		}
		if(resultCkeck==true) jQuery('.uitooltip_comment').addClass('fine');

		var aniFrame = function () {
			if (!oldIE8 && !oldIE9) wrap.find('.check_frame').addClass('animate');
			setTimeout(function () {
				var tg = jQuery('#inspectPanel .area_inspect .emph_accident');
				var count = 1;
				var blinkText = setInterval(function () {
					tg.show()
					if (count < 3) {
						setTimeout(function () {
							tg.hide();
						}, 250);
					}
					count++;
					if (count === 4) {
						clearInterval(blinkText);
						if (auto) {
							setTimeout(function () {
								toggleInspect.setToggle(2);
							}, 500);
						}
					}
				}, 500);
			}, 1800);
			var textCount = 0;
			var tgText = jQuery('#areaInspect .list_frame dd');
			var checkText = setInterval(function () {
				jQuery(tgText[textCount]).addClass('on');
				textCount++;
				if (textCount === tgText.length) clearInterval(checkText);
			}, 350);
		}

		if (oldIE8) {
			aniFrame();
		} else {
			var is_sedan = wrap.find('.area_inspect').hasClass('sedan');// 4도어 세단일경우
			var is_tr = wrap.find('.area_inspect').hasClass('truck');//화물특장일경우
			var is_tr2 = wrap.find('.area_inspect').hasClass('truck2');//화물2Door일경우
			var is_coupe = wrap.find('.area_inspect').hasClass('coupe');// 쿠페일경우
			var is_suv = wrap.find('.area_inspect').hasClass('suv');// 쿠페일경우
			var imgSrc;
			if(is_tr){
				imgSrc = '/images/cardetail/truck/frame_' ;
			}
			else if(is_tr2){
				imgSrc = '/images/cardetail/truck2/frame_' ;
			}
			else if(is_coupe){
				imgSrc = '/images/cardetail/coupe/frame_' ;
			}
			else if(is_suv){
				imgSrc = '/images/cardetail/suv/frame_' ;
			}
			else{
				imgSrc = '/images/cardetail/sedan/frame_' ;
			}
			var imgArray = [];
			for (var i = 0; i < 2; i++) {
				imgArray.push(imgSrc + i + '.png');
			}
			jQuery(function () { //이미지 로딩
				jQuery('<div class="loading"><span>Loading</span></div>').clone().appendTo(wrap.find('.area_inspect'));
				var n = 0,
					val = 100 / imgArray.length,
					cache = new Date().getTime();

				for (var i = 0; i < imgArray.length; i++) {
					jQuery("<img />").attr("src", imgArray[i]).load(function () {
						n = n + val;
						if (n > 99) { //이미지 로딩 완료
							wrap.find('.area_inspect .loading').stop().animate({opacity: 0}, 300, function () {
								jQuery(this).remove();
							});
							aniFrame();
						}
					});
				}
			});
		}
	}else{
		wrap.find('.check_frame .emph_accident').css('opacity', 1);
	}
}
function cksResulte2(data){
	if (data == "" && data.length <= 2) return false; //데이터 유효체크
	var wrap=$jq('#areaInspect'),
		tg=wrap.find('.panel .i'),
		checkPoint=['006026','006033','006027','006003','006023','006006','006018','006009'];
	wrap.find('.check_frame .emph_accident').css('opacity', 0);
	wrap.find('.check_panel').show();

	if(!wrap.find('.area_inspect').hasClass('animateEnd')){
		wrap.find('.check_panel img').remove();
		wrap.find('.check_panel .t').remove();
		// 교환부위 유무 체크
		var resultCkeck=true;
		for(var k=0;k<data.length;k++){
			for(var j=0;j<checkPoint.length;j++){
				if(checkPoint[j]==data[k].split('_')[0]){
					if(data[k].split('_')[1]!=1){
						resultCkeck=false; //checkPoint만 체크
					}
				}
			}
		}
		//이미지 생성
		var is_sedan = wrap.find('.area_inspect').hasClass('sedan');// 4도어 세단일경우
		var is_tr = wrap.find('.area_inspect').hasClass('truck');//화물특장일경우
		var is_tr2 = wrap.find('.area_inspect').hasClass('truck2');//화물2Door일경우
		var is_coupe = wrap.find('.area_inspect').hasClass('coupe');// 쿠페일경우
		var is_suv = wrap.find('.area_inspect').hasClass('suv');// 쿠페일경우
		var imgSrc;
		if(is_tr){
			imgSrc = '/images/cardetail/truck/inspect_' ;
			}
		else if(is_tr2){
			imgSrc = '/images/cardetail/truck2/inspect_' ;
		}
		else if(is_coupe){
			imgSrc = '/images/cardetail/coupe/inspect_' ;
		}
		else if(is_suv){
			imgSrc = '/images/cardetail/suv/inspect_' ;
		}
		else{
			imgSrc = '/images/cardetail/sedan/inspect_' ;
		}
		wrap.find('.area_inspect .panel>div').each(function(i){
			var imgClass=$jq(this).attr('class');

			$jq('<img src="'+imgSrc+imgClass+'.png?190331" alt="" />').clone().appendTo($jq(this).find('.on'));
		});

		wrap.find('.list_panel .txt_g').remove();
		$jq('<span class="txt_g ok">정상</span>').clone().appendTo(wrap.find('.list_panel dd'));

		//교환부위 없을때
		var panelFrame = wrap.find('.area_inspect .frame .f_001');
		var panelFrame2 = wrap.find('.area_inspect .frame .f_002'); // 뒷펜더 용
		if(resultCkeck==true){
			$jq('<img src="'+imgSrc+'f_001on.png?190331" alt="교환부위 없음" />').clone().appendTo(panelFrame.find('.on'));
			wrap.find('.inspect_panel').addClass('fine');
		}else{
			$jq('<img src="'+imgSrc+'f_001.png?190331" alt="" />').clone().appendTo(panelFrame.find('.off'));
			if(is_sedan){
				$jq('<img src="'+imgSrc+'f_002.png?190331" alt="" />').clone().appendTo(panelFrame2.find('.off'));
			}
		};

		if(resultCkeck==false){
			//활성화 체크
			for(var i=0;i<data.length;i++){
				var ckNum=data[i].split('_2')[0],
					tgview=wrap.find('.p_'+ckNum+' .i');

				tgview.addClass('active');
				$jq('<span class="t"><img src="/images/cardetail/ico_exchange.png?190331" alt="교환" /></span>').clone().appendTo(tgview);
				var tglist;
				if(ckNum==checkPoint[0]){
					tglist=wrap.find('.list_panel .bonnet');
				}else if(ckNum==checkPoint[1]||ckNum==checkPoint[2]){
					tglist=wrap.find('.list_panel .frontFender');
				}else if(ckNum==checkPoint[3]||ckNum==checkPoint[4]){
					tglist=wrap.find('.list_panel .frontDoor');
				}else if(ckNum==checkPoint[5]||ckNum==checkPoint[6]){
					tglist=wrap.find('.list_panel .rearDoor');
				}else if(ckNum==checkPoint[7]){
					tglist=wrap.find('.list_panel .trunk');
				};
				$jq(tglist).find('.txt_g').remove();
				$jq('<span class="txt_g ck">교환</span>').clone().appendTo(tglist);
			};
		};
		$jq(function(){ //이미지 로딩
			$jq('<div class="loading"><span>Loading</span></div>').clone().appendTo(wrap.find('.area_inspect'));
			var n=0,
				imgs=wrap.find('.area_inspect .i').find('img'),
				val=100/imgs.length,
				cache=new Date().getTime(),
				len=imgs.length;

			for(var i=0;i<len;i++){
				var src1=$jq(imgs[i]).attr('src');
				if(tg.css('transform').indexOf('translate')!=-1) src1+='&'+cache; //ie7,8 load 대응
				$jq("<img />").attr("src", src1).load(function(){
					n=n+val;
					if(n>99){ //이미지 로딩 완료
						wrap.find('.loading').stop().animate({opacity:0},300,function(){
							$jq(this).remove();
						});
						wrap.find('.area_inspect').addClass('startPanel');
						if(resultCkeck==false){
							setTimeout(function () {
								wrap.find('.area_inspect').addClass('animateGo');
							});
						}
						setTimeout(function () {
							wrap.find('.area_inspect').addClass('animateEnd');
						}, 1500);
					};
				});
			};
		});
	}
};

//data story 클릭지표 체크 (퍼블팀 필요시)
function getIEVersion() {
	var ua = window.navigator.userAgent,
		msie = ua.indexOf("MSIE ");
	if(msie > 0) {
		return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)));
	} else {
		return 0;
	}
}

var userAgent_browserLow_autoClose;
function winXpUpgrade(){
	var oldWinXp=browserChk.indexOf("windows nt 5.1")>= 0,
		cookieName,wrap,wrapID,day;
	if (oldWinXp) {
		cookieName='encar_userAgent_xpEnd';
		wrap=document.createElement('div');
		wrapID='userAgentWrap';
		wrap.id=wrapID;
		day=1;	//쿠기 만료 1시간
		if (UIGetCookie(cookieName)!='hide') {
			document.body.insertBefore(wrap, document.body.firstChild);
			wrap.innerHTML='<div class="userAgentPop_alarm"><p class="txt_stop">보안에 취약한 윈도우XP는 이제 그만!</p><h2><strong>윈도우XP 지원이 종료</strong>되었습니다.</h2><p class="txt_use">PC환경을 업그레이드하여 이용해주세요.</p><a href="https://support.microsoft.com/ko-kr/help/14223/windows-xp-end-of-support" class="uibtn uibtn_red uibtn_inline uibtn_size_h50" target="_blank">XP지원 중단 안내 및 대응방법 안내</a><a href="#close" class="self_close" onclick="winxpClose(\''+wrapID+'\',\''+cookieName+'\',\''+day+'\');return false;">닫기</a></div><div class="userAgentBG"></div>';
		}
	}else if (oldIE7 || oldIE8) {
		cookieName='encar_userAgent_browserLower';
		wrap=document.createElement('div');
		wrapID='userAgentWrap';
		wrap.id=wrapID;
		day=6	//쿠기 만료 6시간
		if (UIGetCookie(cookieName)!='hide') {
			document.body.insertBefore(wrap, document.body.firstChild);
			wrap.innerHTML='<div class="userAgentPop_alarm"><h2><strong>Internet Explorer 이전 버전에<br> 대한 지원이 곧 종료됩니다.</strong></h2><div class="txt_use"><span class="i"><span class="i1"></span>제어판</span><span class="arr">다음</span><span class="i"><span class="i2"></span>Windows Update</span><p>지금, [Windows Update] 기능을 통해 최신버전으로 업그레이드 하세요.</p></div><a href="#close" class="self_close" onclick="winxpClose(\''+wrapID+'\',\''+cookieName+'\',\''+day+'\');return false;">닫기</a></div><div class="userAgentBG"></div>';
		}
	}else if (oldIE9) {
		cookieName='encar_userAgent_browserLow';
		wrap=document.createElement('div');
		wrapID='userAgentWrap';
		wrap.id=wrapID;
		day=12;	//쿠기 만료 12시간
		if (UIGetCookie(cookieName)!='hide') {
			document.body.insertBefore(wrap, document.body.firstChild);
			wrap.innerHTML='<div class="userAgentTop_alarm"><div class="secWrap"><h2 class="blind">Internet Explorer 지원 알림</h2><div class="conWrap"><span class="po"></span><p class="txt"><b>Internet Explorer 이전 버전에 대한 지원이 곧 종료됩니다.</b><br />지금 최신버전으로 업그레이드 하세요.</p></div><div class="btnWrap"><a href="https://support.microsoft.com/ko-kr/help/17621" class="uibtn uibtn_red uibtn_inline uibtn_size_h30" target="_blank">업그레이드 하기</a><a href="#close" class="close" onclick="winxpClose(\''+wrapID+'\',\''+cookieName+'\',\''+day+'\');return false;"><span>닫기</span></a></div></div></div>';
			//자동닫기
			userAgent_browserLow_autoClose=setTimeout(function(){
				winxpClose(wrapID,cookieName,day);
			}, 10000);
		}
	}
}

function winxpClose(tg,name,day){
	if (name){
		var expDate = new Date();
		expDate.setTime(expDate.getTime() + 1000*60*60*day);
		UISetCookie(name, 'hide', expDate,'/');
	}
	D$(tg).style.display="none";
}

/*rs 결제*/

// 체크했던 단품정보를 갖고 있는 배열 (단품 수 : 6)
var chkPieceProdArr = new Array(6);

/*rs 결제*/
function rsPreView(Obj){

	var grpShow = $(Obj).parents("li");
	var chkIdx = $(".chkid").index($(Obj));

	// checkbox click 시 상위 li 제어
	if($(Obj).prop("checked")){
		grpShow.addClass("active");

		// 체크한 단품을 배열에 담음
		if($(Obj).parents("ul:first").hasClass("pieceprod")){
			chkPieceProdArr[chkIdx] = $(Obj);
		}
	}else{
		// 체크해제한 단품을 배열에 null로 넣음
		if($(Obj).parents("ul:first").hasClass("pieceprod")){
			chkPieceProdArr[chkIdx] = null;
		}
		grpShow.removeClass("active");
	}

	// 프리뷰 영역 전체 초기화
	$("#pvProductList .pv").removeClass("active");
	$("#pvProductList .pv .inner").removeClass("active");
	$(".pv_bgimg").removeClass("mpm");
	$("#WdeuList").addClass("active");
	$("#MdefuList").addClass("active");


	// checkbox에 pvTarget attr값 가져와서 각각에 맞는 상품 show
	$(".chkid").each(function(idx){
		var showChks = "";

		// 결합상품 일때만 체크
		if($(Obj).parents("ul:first").hasClass("combiprod")){
			// 선택된 자신을 제외한 다른 결합상품은 체크 해제
			$(".combiprod .chkid").not($(Obj)).prop("checked", false).prop("disabled", false);
			$(".combiprod .chkid").not($(Obj)).parents("li").removeClass("active");

			// 선택한 결합상품 checkbox에 chkTarget attr값을 넣어줌
			if($(Obj).prop("checked"))	showChks = $(Obj).attr("chkTarget");


			$(".combiprod .chkid").each(function(idx){
				var chkTarget = $(".combiprod .chkid").eq(idx).attr("chkTarget");
				if($(".combiprod .chkid").eq(idx).is(":checked")){
					for(i=0; i<chkTarget.split(";").length; i++){
						$(chkTarget.split(";")[i]).removeClass("active");
						$(chkTarget.split(";")[i]).find(".chkid").prop("checked", true).prop("disabled", true);

					}
				}else{
					for(i=0; i<chkTarget.split(";").length; i++){
						// 결합상품 체크 해제됐을 때 유지하고 있을 chkTarget attr값이 showChks에 없을 경우 단품 체크 해제
						if(showChks.indexOf(chkTarget.split(";")[i]) < 0){
							$(chkTarget.split(";")[i]).find(".chkid").prop("checked", false).prop("disabled", false);
							$(chkTarget.split(";")[i]).removeClass("active");
						}
					}

				}
			});

			// 위에서 각각 해제 후 단품 체크했던 것은 다시 체크해줌
			// 결합상품에 해당하는 단품일 경우 체크 해제
			for(i=0; i<chkPieceProdArr.length; i++){
				if(typeof(chkPieceProdArr[i]) != "undefined" && chkPieceProdArr[i] != null &&  $(Obj).attr("chkTarget").indexOf(chkPieceProdArr[i].parents("li:first").attr("class")) < 0){
					chkPieceProdArr[i].prop("checked", true);
					// 디져블드 아니면 li도 살려줌
					if(!chkPieceProdArr[i].prop("disabled")){
						chkPieceProdArr[i].parents("li:first").addClass("active");
					}
				}else{
					chkPieceProdArr[i] = null;
				}
			}
		}

		var pvTarget = $(".chkid").eq(idx).attr("pvTarget");
		if($(".chkid").eq(idx).is(":checked")){

			for(i=0; i<pvTarget.split(";").length; i++){
				$(pvTarget.split(";")[i]).addClass("active");
			}


			if($(".chkid").eq(idx).attr("id") == "mpremium1" && $(".chkid:checked").length == 1){
				$(".pv_bgimg").addClass("mpm");
			}
		}
	});

	new inputLabel('rs_inputTemp',false);
}


// 체크했던 단품정보를 갖고 있는 배열 (단품 수 : 6)
var chkPieceProdArrUnIE = new Array(6);
/*rs 결제*/
function rsPreView_ie7(Obj){

	var grpShow = $(Obj).parents("li");
	var chkIdx = $(".chkid").index($(Obj));


	// checkbox click 시 상위 li 제어
	if($(Obj).prop("checked")){
		grpShow.addClass("active");

		// 체크한 단품을 배열에 담음
		if($(Obj).parents("ul:first").hasClass("pieceprod")){
			chkPieceProdArrUnIE[chkIdx] = $(Obj);
		}
	}else{
		// 체크해제한 단품을 배열에 null로 넣음
		if($(Obj).parents("ul:first").hasClass("pieceprod")){
			chkPieceProdArrUnIE[chkIdx] = null;
		}
		grpShow.removeClass("active");
	}


	var showChks = "";

	// 결합상품 일때만 체크
	if($(Obj).parents("ul:first").hasClass("combiprod")){
		// 선택된 자신을 제외한 다른 결합상품은 체크 해제
		$(".combiprod .chkid").not($(Obj)).prop("checked", false).prop("disabled", false);
		$(".combiprod .chkid").not($(Obj)).parents("li").removeClass("active");

		// 선택한 결합상품 checkbox에 chkTarget attr값을 넣어줌
		if($(Obj).prop("checked"))	showChks = $(Obj).attr("chkTarget");



		$(".combiprod .chkid").each(function(idx){
			var chkTarget = $(".combiprod .chkid").eq(idx).attr("chkTarget");
			if($(".combiprod .chkid").eq(idx).is(":checked")){
				for(i=0; i<chkTarget.split(";").length; i++){
					$(chkTarget.split(";")[i]).removeClass("active");
					$(chkTarget.split(";")[i]).find(".chkid").prop("checked", true).prop("disabled", true);

				}
			}else{
				for(i=0; i<chkTarget.split(";").length; i++){
					// 결합상품 체크 해제됐을 때 유지하고 있을 chkTarget attr값이 showChks에 없을 경우 단품 체크 해제
					if(showChks.indexOf(chkTarget.split(";")[i]) < 0){
						$(chkTarget.split(";")[i]).find(".chkid").prop("checked", false).prop("disabled", false);
						$(chkTarget.split(";")[i]).removeClass("active");
					}
				}

			}
		});

		// 위에서 각각 해제 후 단품 체크했던 것은 다시 체크해줌
		// 결합상품에 해당하는 단품일 경우 체크 해제
		for(i=0; i<chkPieceProdArrUnIE.length; i++){
			if(typeof(chkPieceProdArrUnIE[i]) != "undefined" && chkPieceProdArrUnIE[i] != null &&  $(Obj).attr("chkTarget").indexOf(chkPieceProdArrUnIE[i].parents("li:first").attr("class")) < 0){
				chkPieceProdArrUnIE[i].prop("checked", true);
				// 디져블드 아니면 li도 살려줌
				if(!chkPieceProdArrUnIE[i].prop("disabled")){
					chkPieceProdArrUnIE[i].parents("li:first").addClass("active");
				}
			}else{
				chkPieceProdArrUnIE[i] = null;
			}
		}

	 }

	new inputLabel('rs_inputTemp',false);
}

function rsChoiceAd(Obj){
	$(".choice_list .chkid").prop("checked", false).prop("disabled", false);
	$(".choice_list li").removeClass("active");
	$("#pvProductList .pv").removeClass("active");
	$("#pvProductList .pv .inner").removeClass("active");

	if($(Obj).attr("id") == "pay_ticket2"){
		$(".powerpack").find(".chkid").prop("checked", !$(".powerpack").find(".chkid").prop("checked")).prop("disabled", true);
		rsPreView($(".powerpack").find(".chkid"));
	}

	if($(Obj).attr("id") == "pay_ticket3"){
		$(".plusm_powerpack").find(".chkid").prop("checked", !$(".plusm_powerpack").find(".chkid").prop("checked")).prop("disabled", true);
		rsPreView($(".plusm_powerpack").find(".chkid"));
	}

	new inputLabel('rs_inputTemp',false);
}

 function rsChoiceAd_ie7(Obj){
	$(".choice_list .chkid").prop("checked", false).prop("disabled", false);
	$(".choice_list li").removeClass("active");

	if($(Obj).attr("id") == "pay_ticket2"){
		$(".powerpack").find(".chkid").prop("checked", !$(".powerpack").find(".chkid").prop("checked")).prop("disabled", true);
		rsPreView_ie7($(".powerpack").find(".chkid"));
	}

	if($(Obj).attr("id") == "pay_ticket3"){
		$(".plusm_powerpack").find(".chkid").prop("checked", !$(".plusm_powerpack").find(".chkid").prop("checked")).prop("disabled", true);
		rsPreView_ie7($(".plusm_powerpack").find(".chkid"));
	}

	new inputLabel('rs_inputTemp',false);
}

/*핫마크 수동컨트롤*/
function hotMarkClick(Obj){
	if($(Obj).prop("checked")){
		$(Obj).next("label").addClass("check_checkbox");
	}else{
		$(Obj).next("label").removeClass("check_checkbox");
	}
}

/* selectbox 디자인 ie하위 대응 */
var UIselectbox={
	init : function(){
		this.cacheElement();
		this.fnEvent();
	},
	cacheElement : function(){
		this.selectboxDesign=jQuery(".UIselectboxDesign").find('select');
	},
	fnEvent : function(){
		var e$=this;
		this.selectboxDesign.each(function(){
			e$.fnAction(jQuery(this));
		}).on({
			'change' : function () {
				e$.fnAction(jQuery(this));
			},
			'focus' : function () {
				jQuery(this).parent().addClass('focus');
			},
			'blur' : function () {
				jQuery(this).parent().removeClass('focus');
			}
		});
	},
	fnAction: function(t){
		var con = t.children("option:selected").text();
		t.siblings("label").text(con);
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

/* 클린엔카 저렴매물 알림(차량리스트) 열기 */
function cleanNotiOpen(){
	jQuery('body').addClass('cleanLayerZindex');
	jQuery('#lowPrice_warn').show().addClass('on').animate({'bottom' : 17});
};
/* 클린엔카 저렴매물 알림(차량리스트) 닫기 */
function cleanNotiClose(){
	jQuery('#lowPrice_warn').removeClass('on').animate({'bottom' : -239}, function(){
		jQuery('body').removeClass('cleanLayerZindex');
		jQuery(this).hide();
	});
};

/* 차량리스트우측 컨텐츠 위치고정 */
function carContFix(){
	var lastScrollLeft = 0;
	jQuery(window).bind({
		'scroll' : function(){
			// 좌우스크롤 체크
			var documentScrollLeft = jQuery(window).scrollLeft();
			// 상단고정위치 체크
			if(jQuery('#rySearch2015_wrap')[0].getBoundingClientRect().top > 0){
				jQuery('#carCont').addClass('topFix').removeClass('scrollFix , leftFix');
			}
			// 하단고정위치 체크
			else if(jQuery('#carCont .carinfo_area').height() + jQuery(window).scrollTop() + 10 > jQuery(document).height() - jQuery('#footerDIV').innerHeight() - 40){
				jQuery('#carCont').removeClass('topFix , scrollFix , leftFix').addClass('bottomFix').css({'top' : ' '});
			}
			else{
				if (lastScrollLeft != documentScrollLeft) {
					jQuery('#carCont').removeClass('topFix , scrollFix').addClass('leftFix');
					jQuery('#carCont').css({'top' : jQuery(window).scrollTop() - (jQuery(window).scrollTop() + jQuery('#rySearch2015_wrap')[0].getBoundingClientRect().top) + 10});
				}
				else{
					jQuery('#carCont').removeClass('topFix , leftFix').addClass('scrollFix');
					jQuery('#carCont').addClass('scrollFix').removeClass('bottomFix');
				}
			}
			var tmpW = (jQuery(window).width() < 1280) ? jQuery(window).width() : jQuery('html').width();
			jQuery('#carCont').css({'margin-left' : 420 - jQuery(window).scrollLeft() + (jQuery(document).width() - tmpW)/2}); //좌우 스크롤시 위치조정
			lastScrollLeft = documentScrollLeft;
		},
		'resize' : function(){
			var tmpW = (jQuery(window).width() < 1280) ? jQuery(window).width() : jQuery('html').width();
			jQuery('#carCont').css({'margin-left' : 420 - jQuery(window).scrollLeft() + (jQuery(document).width() - tmpW)/2}); //좌우 스크롤시 위치조정
		}
	});
};

/* 퀵메뉴 위치고정 */
function quickFix(){
	// 상하체크
	jQuery(window).bind({
		'scroll' : function(){
			if(jQuery(window).scrollTop() < 75){
				jQuery('#quickRt').css({'top' : 75 - jQuery(window).scrollTop()});
				jQuery('#quickRt .btn_gotop').css({'bottom' : 75 - jQuery(window).scrollTop()});
			}
			else{
				jQuery('#quickRt').css({'top' : 0});
				jQuery('#quickRt .btn_gotop').css({'bottom' : 0});
			}
		},
		'resize' : function(){
			quickCheck();
		}
	});
	// 좌우체크
	function quickCheck(){
		if(!jQuery('#quickRt').hasClass('user_open') && !jQuery('#quickRt').hasClass('user_close')){
			if(jQuery(window).width()<1460){
				jQuery('#quickRt').addClass('close').stop().animate({'right' : -63});
			}
			else{
				jQuery('#quickRt').removeClass('close').stop().animate({'right' : 0});
			}
		}
	};
	quickCheck();
};

// 퀵메뉴 열기
function quickOpen(action){
	if(action == 'open'){
		jQuery('#quickRt').removeClass('close user_close').stop().animate({'right' : 0}, 200, function(){
			jQuery(this).addClass('user_open');
		});
		return false;
	}
	// toggle open
	if(jQuery('#quickRt').hasClass('user_close') || jQuery('#quickRt').hasClass('close')){
		jQuery('#quickRt').removeClass('close user_close').stop().animate({'right' : 0}, 200, function(){
			jQuery(this).addClass('user_open');
		});
	}
	// toggle close
	else{
		jQuery('#quickRt').removeClass('user_open').stop().animate({'right' : -63}, 200, function(){
			jQuery(this).addClass('user_close');
		});
	}
};

// 인덱스 DA배너
indexDABanner = {
	init : function(o){
		if (jQuery(o.obj).length){
			this.cacheElement(o);
			this.commonEvent();
			this.thumb=o.thumb;
			switch(this.thumb) {
				case "img":
					this.fnThumbImg();
					break;
				case "video":
					this.fnThumbMovie();
					break;
			}
		}
	},
	cacheElement : function(o){
		this.Wrap=jQuery(o.obj);
		this.btn=this.Wrap.find('.ad_more');
		this.close=this.Wrap.find('.ad_close');
		this.video=document.getElementById('indexAdMovie');
		this.videoLength=jQuery(this.video).length;
		this.videoSupport=(oldIE7||oldIE8) ? false : true;
		this.spreadImg=this.Wrap.find('.spread_img');
		this.loadAction=false;
	},
	commonEvent : function(){
		var e$=this;
		this.btn.on('click', function(){
			e$.fnOpen();
		});
		this.close.on('click', function(){
			e$.fnClose();
		});
		if(this.videoLength && this.videoSupport){
			this.video.muted = true;
			this.fnControls();
		}
	},
	fnOpen : function(){
		var e$=this;
		this.Wrap.addClass('view').find('.ad_spread').show().stop().animate({'width':980,'height':400}, 300, function(){
			if(e$.videoLength && e$.videoSupport){
				e$.fnPlay();
			}
		});
	},
	fnClose : function(){
		this.Wrap.removeClass('view').find('.ad_spread').hide().stop().animate({'width':0,'height':0});
		if(this.videoLength && this.videoSupport){
			this.fnStop();
		}
	},
	fnThumbImg : function(){
		var e$=this;
		if(oldIE7 || oldIE8 || oldIE9){
			this.btn.addClass('ie');
		}
		else{
			this.btn.addClass('action');
			setTimeout(function(){
				e$.btn.removeClass('action');
			},5000);
		}
		this.btn
			.on('mouseover', function(){
				if(!e$.loadAction){
					e$.fnLoad();
				}
				jQuery(this).find('button .txt em').stop().animate({'width' : 100+'%'}, 1000, function(){
					e$.fnOpen();
				});
			})
			.on('mouseleave', function(){
				jQuery(this).find('button .txt em').stop().animate({'width' : 0}, 0);
			});
	},
	fnThumbMovie : function(){
		var e$=this;
		if(this.videoLength && this.videoSupport){
			this.btn.addClass('set');
			this.timer;
			this.count=this.Wrap.find('.count');
			this.countNum=4;
			this.Wrap.find('.ad_more').hover(function(){
				if(!e$.loadAction){
					e$.fnLoad();
				}
				e$.countNum --;
				e$.count.attr({'class': 'ir_ad count count'+e$.countNum});
				e$.timer=setInterval(function(){
					e$.countNum --;
					e$.count.attr({'class': 'ir_ad count count'+e$.countNum});
					if(e$.countNum==0){
						clearInterval(e$.timer);
						e$.countNum=4;
						e$.fnOpen();
					}
				},1000);
			}, function(){
				clearInterval(e$.timer);
				e$.countNum=4;
				e$.count.attr({'class': 'ir_ad count count'+e$.countNum});
			});
		}
		else{
			this.btn.remove();
		}
	},
	fnLoad : function(){
		var e$=this;
		this.loadAction=true;
		this.spreadImg.attr('src',e$.spreadImg.data('src'));
		if(this.videoLength && this.videoSupport){
			jQuery(e$.video).find('source').attr('src',jQuery(e$.video).data('src'));
			e$.video.load();
		}
	},
	fnControls : function(){
		var e$=this;
		this.playBtn=this.Wrap.find('.play');
		this.soundBtn=this.Wrap.find('.sound');
		this.progress=this.Wrap.find('.progress');
		this.video.addEventListener('volumechange',this.mutechk.bind(this),false);
		this.video.addEventListener('timeupdate',this.updateProgressBar.bind(this),false);
		this.video.addEventListener('ended',this.fnEnd.bind(this),false);
		this.playBtn.on('click',function(){
			e$.playPause();
		});
		this.soundBtn.on('click',function(){
			e$.mute();
		});
	},
	playPause : function() {
		if (this.video.paused) {
			this.fnPlay();
		}
		else {
			this.fnPause();
		}
	},
	fnPlay : function(){
		this.video.play();
		this.playBtn.removeClass('stop');
//		adTracking.play();
	},
	fnStop : function(){
		this.fnPause();
		this.video.currentTime = 0;
	},
	fnPause : function(){
		this.video.pause();
		this.playBtn.addClass('stop');
	},
	fnEnd : function(){
		this.fnPause();
//		adTracking.end();
	},
	mute : function(){
		if(this.video.muted) {
			this.video.muted = false;
		}
		else{
			this.video.muted = true;
		}
	},
	mutechk : function(){
		if(!this.video.muted) {
			this.soundBtn.removeClass('soundoff');
		}
		else{
			this.soundBtn.addClass('soundoff');
		}
	},
	updateProgressBar : function(){
		var sec = (Math.floor(this.video.currentTime) < 10) ? '0'+Math.floor(this.video.currentTime) : Math.floor(this.video.currentTime);
		var fullsec = (Math.floor(this.video.duration) < 10) ? '0'+Math.floor(this.video.duration) : Math.floor(this.video.duration);
		this.progress.find('.time').html('<span>0:'+sec+'</span>' + '0:' + fullsec);
		this.percentage = Math.floor((this.video.currentTime / this.video.duration) * 100);
		this.progress.find('.current').css({'width':this.percentage+'%'})
	}
};

// 차량리스트 DA배너
uiDABanner=function(o){
	this.init(o);
};
uiDABanner.prototype = {
	init : function(o){
		this.cacheElement(o);
		this.setEvent();
	},
	cacheElement : function(o){
		this.Wrap = jQuery(o.bannerWrap);
		this.spreadClass = 'ad_spread';
		this.callbackTg = jQuery(o.callbackTg);
		this.TgClass = 'daBannerView';
	},
	setEvent : function(){
		var e$=this;
		this.Wrap
			.on('mouseover', '.ad_mouse', function(){
				jQuery(this).find('button span').stop().animate({'width' : 100+'%'}, 500, function(){
					e$.fnOpen(e$.spreadClass);
				})
			})
			.on('mouseleave', '.ad_mouse', function(){
				jQuery(this).find('button span').stop().animate({'width' : 0}, 0)
			})
			.on('click', '.ad_mouse', function(){
				e$.fnOpen(e$.spreadClass);
			})
			.on('click', '.ad_close button', function(){
				e$.fnClose(e$.spreadClass);
			})
	},
	fnOpen : function(tg){
		this.Wrap.addClass('view').find('.'+tg).show().stop().animate({'height' : 162}, 300);
		this.callbackTg.addClass(this.TgClass);
	},
	fnClose : function(tg){
		this.Wrap.removeClass('view').find('.'+tg).hide().stop().animate({'height' : 48});
		this.callbackTg.removeClass(this.TgClass);
	}
};

// 토글 클래스 버튼
function toggleBtn(target){
	jQuery(target).toggleClass('active');
}

// 디자인 셀렉트박스
var UIselectFull = {
	// 공통 이벤트
	init : function() {
		var t = this,
			opt = t.selectOpt,
			optI = jQuery(opt.o).find('li');

		jQuery(document)
			.on('click', opt.sel, 'live', function(event){
				var oMenu = jQuery(this).parent();
				oMenu.toggleClass(opt.cl);
				return false;
			})
			.on('click', opt.optItem, 'live', function(event){
				var oMenu = jQuery(this).parent();
				optI.removeClass(opt.cl);
				oMenu.addClass(opt.cl);
				opt.fn(this);
				return false;
			})

		// 클릭요소 해제
		jQuery(document).on('click', function(event) {
			opt.blurFn();
		});
	},
	// 셀렉트
	selectOpt : {
		'o' : '.opt_common',
		'sel' : '.link_selected',
		'optItem' : '.link_select',
		'cl' : 'on',
		fn : function(target) {
			var option = jQuery(target),
				selOption = option.closest(this.o).find('[data-select]'),
				val,
				tarText;
			val = option.data('val');
			tarText = selOption;
			UIselectFull.replaceText(tarText, val);
			this.blurFn();
		},
		blurFn : function(target) {
			jQuery(this.o).removeClass(this.cl);
		}
	},
	// 텍스트 교체
	replaceText : function(target, param) {
		jQuery(target).contents().filter(function() {
			return this.nodeType == 3;
		}).first().replaceWith(param);
	}
}

//홈서비스소개
homeServiceUI={
	init:function(){
		this.fnReview();
		this.fnAnimation();
		this.fnFaq();
		this.fnBottom();
	},
	fnReview:function(){
		new uiSlide({
			obj:'.uiSlideReview',
			speed:500,
			loop:true,
			mouseswipe:true,
			showNavi: '.area_review .box_review .uitab li',
			showArrow:true,
			showNumber:false
		});
	},
	fnAnimation:function(){
		timeLineAnimation.init({obj:'.intro_timeline .timeline',currentBar:'.bar_current'});
	},
	fnFaq:function(){
		new uiToggleGroup({group:'hsFaq'});
	},
	fnBottom:function(){
		function uiScrFixSchFn(){
			new uiScrFix('scrFix','scrFixStart',null,'scrFix','scrFixEnd');
		};
		if(window.addEventListener){
			window.addEventListener('scroll',uiScrFixSchFn,false);
		}else if(window.attachEvent){
			window.attachEvent('onscroll',uiScrFixSchFn);
		};
	}
}
//타임라인애니메이션
timeLineAnimation = {
	init : function(o){
		if (jQuery(o.currentBar).length) {
			this.cacheElement(o);
			this.eventSet();
		}
	},
	cacheElement : function(o){
		this.obj=jQuery(o.obj);
		this.currentBar = jQuery(o.currentBar);
		this.currentPoint = this.currentBar.data('current').split(',');
	},
	eventSet : function(){
		var e$=this;
		this.scrollEvt();
		jQuery(window).bind('scroll', function(){
			e$.scrollEvt();
		});
	},
	scrollEvt : function(){
		var e$=this;
		var scrollTop=jQuery(window).scrollTop();
		this.obj.each(function(){
			var viewPoint = jQuery(this).offset().top - jQuery(window).height() + 200 + 56; // (상단영역 + 텍스트영역) + 하단버튼
			if(scrollTop > viewPoint){
				if(!jQuery(this).hasClass('on')){
					jQuery(this).addClass('on').find('.explain_img').stop().animate({'margin-top' : 0 , 'opacity' : 1});
				}
			}
			else{
				if(jQuery(this).hasClass('on')){
					jQuery(this).removeClass('on').find('.explain_img').stop().animate({'margin-top' : 50 , 'opacity' : 0});
				}
			}
		});
		var timelineOn = (this.obj.filter('.on').length-1 < 0) ? 0 : this.obj.filter('.on').length-1;
		this.currentBar.stop().animate({'height' : e$.currentPoint[timelineOn]});
	}
};

//내차팔기홈
sellindexUi={
	init:function(){
		this.cacheElement();
		this.setEvent();
		UInumbercount.init(500);
	},
	cacheElement:function(){
		this.tgW=jQuery('.find_myway');
		this.cartype=this.tgW.find('.mycar_type');
		this.saletype=this.tgW.find('.mysale_type button');
		this.saleResult=this.tgW.find('.result_type');
		this.carData=[
			[1810,15,590,1620,2,360,1650,4,40],
			[720,16,350,585,2,245,600,4,26],
			[3050,23,349,2710,2,150,2730,4,3]
		];
	},
	setEvent:function(){
		var e$=this;
		this.slide = new uiSlide({
			obj:this.cartype,
			speed:500,
			showArrow:true,
			showNavi:true
		});
		this.slideBtn=this.cartype.find('.showNavi a , .showArrow a');
		this.slideBtn.on('click',function(){
			var current=e$.slide.rtItemCurrent().index();
			var currentData=e$.carData[current-1];
			for(i=0;i<currentData.length;i++){
				e$.saleResult.find('.dd .uiNumbercount').eq(i).attr('data-count',currentData[i]);
			}
			UInumbercount.init(500);
		});

		this.saletype.on('click',function(){
			e$.saletype.removeClass('on');
			jQuery(this).addClass('on');
			var type=jQuery(this).data('case');
			e$.saleResult.removeClass('on').eq(type-1).addClass('on');
		});
	}
}
//비교견적안내, 셀프등록안내 스크롤시 애니메이션
sellCarAnimation = {
	init : function(){
		this.scrollEvt();
		this.scrollChk();
	},
	scrollChk : function(){
		var e$=this;
		jQuery(window).bind('scroll', function(){
			e$.scrollEvt();
		});
	},
	scrollEvt : function(){
		var scrollTop, btnPoint, viewPoint, graphPoint=[95,53,102,141,81], current=[0,360,722,1083,1459],
		scrollTop = jQuery(window).scrollTop(),
		btnPoint = jQuery('.area_visual .area_action')[0].getBoundingClientRect().top;
		if(btnPoint < 0){
			if(!jQuery('.area_reapply').hasClass('on')){
				jQuery('.area_reapply').addClass('on').stop().animate({'margin-bottom':0});
			}
		}
		else{
			if(jQuery('.area_reapply').hasClass('on')){
				jQuery('.area_reapply').removeClass('on').stop().animate({'margin-bottom':-106});
			}
		}
		jQuery('.sellcar_timeline .timeline').each(function(){
			viewPoint = jQuery(this).offset().top - jQuery(window).height() + 200 + 56; // (상단영역 + 텍스트영역) + 하단버튼
			if(scrollTop > viewPoint){
				if(!jQuery(this).hasClass('on')){
					jQuery(this).addClass('on').find('.explain_img').not(jQuery('.timeline2 .explain_img')).stop().animate({'margin-top' : 0 , 'opacity' : 1});
					if(jQuery(this).find('.auction_graph').length > 0){
						for(i=0;i<5;i++){
							jQuery(this).find('li').eq(i).stop().animate({'height' : graphPoint[i]});
						}
					}
				}
			}
			else{
				if(jQuery(this).hasClass('on')){
					jQuery(this).removeClass('on').find('.explain_img').not(jQuery('.timeline2 .explain_img')).stop().animate({'margin-top' : 50 , 'opacity' : 0});
					if(jQuery(this).find('.auction_graph').length > 0){
						jQuery(this).find('li').stop().animate({'height' : 0});
					}
				}
			}
		});
		var timelineOn = jQuery('.sellcar_timeline .timeline.on').length -1;
		jQuery('.sellcar_timeline .bar_base .bar_current').stop().animate({'height' : current[timelineOn]});
	}
};

//TabUI
function TabUI(scope, callback){
	this.scope = scope;
	this.menu = null;
	this.container = null;
	this.content = null;
	this.current = null;
	this.callback = callback;

	this.init();
}

TabUI.prototype = {
	init: function(){
		this.cacheEl();
		this.setEvent();
	},

	cacheEl: function(){
		var context = this;

		this.menu = this.scope.find('> .ui_menu a');
		this.container = this.scope.find('> .ui_container');
		this.content = this.container.find('> .ui_content');

		this.menu.each(function(a){
			var self = jQuery(this),
				content = context.content.eq(a);

			self.data('content',content);
			if(a===0) context.active(self);
		});
	},

	setEvent: function(){
		var context = this;

		this.scope.on('click', '> .ui_menu a', function(){
			if(typeof context.callback === 'function'){
				if(!context.callback(jQuery(this))) return false;
			}
			if(context.current) context.deActive(context.current);
			context.active(jQuery(this));

			return false;
		});
	},

	active: function(item){
		item.addClass('on');
		item.data('content').addClass('on');
		this.current = item;
	},

	deActive: function(item){
		item.removeClass('on');
		item.data('content').removeClass('on');
	}
};

/*
	* 상세 차량사진 갤러리 레이어

		options = {
			scope: jQuery('...'), //최상위 부모 객체 | jquery object
			start: ''	//시작 코드
		};
*/
var uiGallery = {
	scope: null,
	img: null,
	containerPages: null,
	contents: null,
	pages: null,
	txt: null,
	indicator: null,
	current: {
		click: null,
		hover: null
	},
	isTransitions: false,
	isOpen: false,
	options: {
		scope: null,
		start: '',
		total: 0,
		pos: 60,
		frameW: 973,
		frameH: 730
	},
	isValid: false,

	init: function(options){
		if(options.scope.find('.ui_pages').children().length === 0){
			this.isValid = true;
			return;
		}
		this.setTransitions();
		this.setOptions(options);
		this.setCacheEl();
		this.setEvent();
	},

	setTransitions: function(){
		this.isTransitions = (function(temp) {
			var props = ['transitionProperty', 'WebkitTransition', 'MozTransition', 'OTransition', 'msTransition'];
			for ( var i in props ) if (temp.style[ props[i] ] !== undefined) return true;
			return false;
		}(document.createElement('gallery')));
	},

	setOptions: function(options){
		for(var i in options){
			this.options[i] = options[i];
		}
	},

	setCacheEl: function(){
		var context = this;

		this.scope = this.options.scope ? this.options.scope : jQuery('.ui_layer_gallery');
		this.contents = this.scope.find('.ui_contents');
		this.img = this.scope.find('.ui_img');
		this.indicator = this.contents.find('.ui_indicator');
		this.txt = this.scope.find('.ui_txt');
		this.containerPages = this.scope.find('.ui_pages');
		if(this.isTransitions){
			this.containerPages.css({
				'bottom': 0,
				'-webkit-transition': '400ms',
				'-moz-transition': '400ms',
				'-o-transition': '400ms',
				'-ms-transition': '400ms',
				'transition': '400ms',
				'-webkit-transform': 'translate3d(0,60px,0)',
				'-moz-transform': 'translate3d(0,60px,0)',
				'-o-transform': 'translate3d(0,60px,0)',
				'-ms-transform': 'translate3d(0,60px,0)',
				'transform': 'translate3d(0,60px,0)'
			});
		}

		this.pages = this.containerPages.children();
		this.pages.each(function(a){
			var self = jQuery(this),
				src = self.attr('data-src'),
				code = self.attr('data-type');
				// w = Number(self.attr('data-w')),
				// h = Number(self.attr('data-h')),
				// imgClass = '';

			//if(w > 973 || h > 730) imgClass = context.getImgClass(w, h);

			self.data('info', {src: src, index: a, code: code});//, imgClass: imgClass});
			//if(a === 0 && context.options.start === '') context.active(self, 'active');
			if(code === context.options.start) context.active(self, 'active');
		});
		this.options.total = this.pages.length;
		//this.options.pos = this.current.active.outerHeight();
	},

	setEvent: function(){
		var context = this;

		//TODO: 썸네일 이미지가 반드시 로드될 경우 class 정리..
		this.scope.on({
			'mousemove': function(e){
				var target = jQuery(e.target);

				if(target.hasClass('ui_area')){
					context.displayPages(true);

				}else if(target.hasClass('ui_page')){
					if(context.current.hover) context.deActive(context.current.hover, 'hover');
					context.active(target, 'hover');

				}else if(target.hasClass('ui_thm')){
					if(context.current.hover) context.deActive(context.current.hover, 'hover');
					context.active(target.parent(), 'hover');
				}
			},

			'click': function(e){
				var target = jQuery(e.target);

				if(target.hasClass('ui_prev') || target.hasClass('ui_next')){
					var targetIndex = context.getNextIndex(target.hasClass('ui_prev'));
					context.pages.eq(targetIndex).trigger('click');
					return false;

				}else if(target.hasClass('ui_page') || target.hasClass('ui_thm')){
					var page = target.hasClass('ui_page') ? target : target.parent();
					if(context.current.active) context.deActive(context.current.active, 'active');
					context.active(page, 'active');
					return false;

				}else if(target.hasClass('ui_overlay') || target.hasClass('ui_close')){
					context.open();
					return false;
				}
			}
		});
	},

	getNextIndex: function(isPrev){
		var currentIndex = Number(this.current.active.data('info').index),
			index = isPrev ? currentIndex - 1 : currentIndex + 1;

		return (this.options.total + (index % this.options.total)) % this.options.total;
	},

	displayPages: function(isShow){
		var context = this,
			y = isShow ? -8 : this.options.pos;	//-8 임시

		setTimeout(function(){
			if(context.isTransitions){
				context.containerPages.css({
					'-webkit-transform': 'translateY(' + y + 'px)',
					'-moz-transform': 'translateY(' + y + 'px)',
					'-o-transform': 'translateY(' + y + 'px)',
					'-ms-transform': 'translateY(' + y + 'px)',
					'transform': 'translate3d(0,' + y + 'px,0)'
				});
			}else{
				context.containerPages.stop().animate({bottom: (y * -1) + 'px'},200);
			}
		},0);

		if(!isShow){
			if(this.current.hover){
				this.current.hover.removeClass('hover');
				this.current.hover = null;
			}
			this.current.active.removeClass('temp');
			this.txt.removeClass('hide');
		}else{
			this.containerPages.on('mouseleave', function(){
				context.displayPages(false);
				jQuery(this).off('mouseleave');
			});
			this.txt.addClass('hide');
		}
	},

	open: function(code, url){
		if(this.isValid) return false;
		var ad = typeof url === 'undfined' ? '' : url;
		var iframe = '<iframe width="250" height="730" src="'+ ad +'" noresize scrolling="no" frameborder="0" marginheight="0" marginwidth="0"></iframe>';

		if(!this.isOpen){
			this.scope.find('.area_ad').empty().append(iframe);
			this.scope.insertAfter(jQuery('.ad_encar'));
			this.scope.height(jQuery(document).height());
			this.contents.css({
				top: jQuery(window).scrollTop() + 145 + 'px'
			});
			//this.pages.eq(index).trigger('click');
			this.pages.each(function(){
				var self = jQuery(this);
				if(self.data('info').code === code) self.trigger('click');
			});
			this.scope.addClass('on');
			this.isOpen = true;

			var context = this;
			this.displayPages(true);
			setTimeout(function(){
				context.displayPages(false);
			},1500);
		}else{
			this.scope.removeClass('on');
			this.isOpen = false;
		}
	},

	active: function(item, type){
		var context = this,
			indicator = this.indicator;

		if(type === 'active'){
			item.addClass('on');
			indicator.addClass('on');

			var tmpImg = new Image();

			tmpImg.onload = function(){
				var w = this.width,
					h = this.height,
					imgClass = '';

				if(w > 973 || h > 730) imgClass = context.getImgClass(w, h);

				context.img.removeClass('hor ver');
				context.img.addClass(imgClass);
				context.img.attr('src', item.data('info').src);

				indicator.removeClass('on');
				tmpImg = null;
			}

			tmpImg.src = item.data('info').src;
			this.current.active = item;
		}else{
			if(this.current.active) this.current.active.addClass('temp');
			item.addClass('hover');
			this.current.hover = item;
		}
	},

	deActive: function(item, type){
		if(type === 'active'){
			item.removeClass('on');
			item.removeClass('temp');
		}else{
			item.removeClass('hover');
		}
	},

	getImgClass: function(w, h){
		var frameW = this.options.frameW,
			frameH = this.options.frameH,
			ratio = frameW / w,
			resultH = h * ratio;

		return (w <= h || resultH > frameH) ? 'ver' : 'hor';
	}
};

//중고차론안내 스크롤시 애니메이션
function dcLoanAnimation(r, t){
	var ani_sec = jQuery(r);
	var ani_time = jQuery(t);
	ani_sec.bind('scroll', function(){
		ani_time.find('.timeline').each(function(){
			var viewPoint = jQuery(this).position().top - ani_sec.height() + 700 + 200
			if(ani_sec.scrollTop() > viewPoint){
				ani_time.addClass('animate'+jQuery(this).index());
			}
			else{
				ani_time.removeClass('animate'+jQuery(this).index());
			}
		});
	});

};

var uiTooltipClick=function(obj,btn,postop,zIndex){
	uiTooltip.init({obj:obj,btn:btn,postop:postop,zIndex:zIndex});
}
var uiTooltipHover=function(obj,btn,zIndex){
	uiTooltip.init({obj:obj,btn:btn,hover:true,zIndex:zIndex});
}

var uiPlaceholeder={
	init : function(o){
		if(oldIE7||oldIE8||oldIE9){
			jQuery('input[placeholder],textarea[placeholder]').each(function(){
				var input = jQuery(this);
				if(input.val()=='') {
					input.val(input.attr('placeholder')).addClass('inactive');
				}
				if(input.attr('readonly') != 'readonly'){
					input.focus(function(){
						if (input.val() == input.attr('placeholder')) {
							input.val('').removeClass('inactive');
						}
					});
					input.blur(function(){
						if(input.attr('readonly')=='readonly') return false;
						if (input.val() == '' || input.val() == input.attr('placeholder')) {
							input.val(input.attr('placeholder')).addClass('inactive');
						}
					});
				}
			});
		}
	}
}

//fn : ui
var uiTouchCheck = 'ontouchend' in window;
var uiSlideStats=false;
//fn : ui레이어 2018.05.17
var uiLayer={
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
		this.fixed=(o.fixed || o.fixed==undefined) ? ((this.fixChkOk) ? true : false) : false;
		this.activeClass=(this.fixed) ? this.classObj+' '+this.classFix : this.classObj;
	},
	setEvent : function(){
		this.fnToogle(true);
		var e$=this,
			scrT=jQuery(window).scrollTop(),
			scrH=document.documentElement.clientHeight,
			objWrapH=e$.objWrap.outerHeight(),
			headerH=jQuery('#headerDIV').outerHeight(),
			absolutePosT=(scrH<objWrapH) ? scrT-headerH : scrT+(scrH/2)-(objWrapH/2)-headerH;
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
			jQuery('body').addClass('uiLayerZindex');
		}else {
			e$.objTarget.removeClass(e$.activeClass);
			e$.fnDimmed(false);
			e$.obj.trigger('hidden.ui.layer');
			jQuery('body').removeClass('uiLayerZindex');
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
        jQuery('.uilayer_dimmed').remove();
        this.obj.after('<div class="uilayer_dimmed"></div>');
		return true;
	}
};

//fn : ui툴팁 2018.05.17
var uiTooltipTimeout;
var uiTooltip={
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
		this.btnArrowCheck=(o.arrowPos) ? this.btn.find(o.arrowPos) : this.btn.find('.uitooltip_pos');
		this.btnArrow=(this.btnArrowCheck.length) ? this.btnArrowCheck : jQuery(this.btn);
		this.classObj='view';
		this.classArr='arr';
		this.zIndex=(o.zIndex) ? o.zIndex : 5000;
		this.evtNamespace='.layerTooltip';
		this.namespaceBtn='.nameBtnAction';
		this.baseDiv=(o.baseDiv) ? o.baseDiv : '#depth_main';
		this.bothMargin=(o.bothMargin!=null) ? o.bothMargin: -5;
		this.win=jQuery(window);
		this.doc=jQuery(document);
		this.btnAdd=this.btn.find('.uitooltip_toggle');
		this.hover=o.hover;
        this.posTop=o.postop;
		this.posLeft=o.posleft;
		this.plusTop=jQuery(o.plusTop).outerHeight();
		this.oldIE=(oldIE7||oldIE8||oldIE9) ? 'oldie' : 'default';
		this.evtClickStopOff=(o.evtClickStopOff) ? o.evtClickStopOff : false;
        this.body=(o.body) ? jQuery(o.body) : jQuery('#bodydiv');
        this.header=(o.header) ? jQuery(o.header) : jQuery('#headerDIV');
	},
	setEvent : function(o){
		var toggle=!this.btn.hasClass(this.classObj);
		//arrow
		if (!this.obj.find('.'+this.classArr).length) this.obj.children().append('<div class="'+this.classArr+'"></div>');
		//IE 7,8체크
		if (this.oldIE) this.obj.addClass(this.oldIE);
		//toogle
		this.fnToogle(toggle);
		if (this.hover) this.fnHover();
	},
	fnHover : function(){
		var e$=this;
		clearTimeout(uiTooltipTimeout);
		e$.fnToogle(true);

		e$.btn.add(e$.obj).on('click'+e$.namespaceBtn,function(e){
			if (!e$.evtClickStopOff) e.preventDefault();
		}).on('mouseleave'+e$.namespaceBtn+' blur'+e$.namespaceBtn,function(e){
			clearTimeout(uiTooltipTimeout);
			uiTooltipTimeout=setTimeout(function(){
				e$.fnToogle(false);
			},300)
			jQuery(this).off(e$.namespaceBtn);
		}).on('mouseover'+e$.namespaceBtn+' focus'+e$.namespaceBtn,function(e){
			clearTimeout(uiTooltipTimeout);
			e$.fnToogle(true);
		});
	},
	fnToogle : function(type){
		var e$=this;
		//remove event
		e$.fnRemoveEvt();
		//all remove
		e$.objAll.add(e$.btnAll).add(e$.btnAdd).removeClass(e$.classObj);
		//btn
		e$.fnBtnAction();
		if (type) {
			//active
			e$.obj.add(e$.btn).add(e$.btnAdd).addClass(e$.classObj);
			//position
			e$.fnPos();
			e$.win.on('resize'+e$.evtNamespace,function(){
				e$.fnPos();
			});
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
		var mt=this.btn.height()+this.obj.find('.'+this.classArr).outerHeight()+2;
		//기본
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
		var bodyW=this.body.outerWidth();
		var winW=document.documentElement.clientWidth;
        var headerH=this.header.outerHeight(true);
		var caseLayerBottom=pos.top-headerH+mt;
		var caseLayerTop=pos.top-headerH-(this.obj.outerHeight()+this.obj.find('.'+this.classArr).outerHeight())+2;
		var layerTop=caseLayerBottom;
		//상하 오토
		var ifBottom=this.win.outerHeight()+this.win.scrollTop()<this.obj.outerHeight()+mt+pos.top;
		var ifTop=this.win.scrollTop()-headerH>caseLayerTop-this.plusTop;
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
			}	else{
				layerTop=caseLayerTop;
				this.obj.addClass('reverse');
			}

		}
        //왼쪽정렬
        if (this.posLeft) {
            layerLeft=pos.left;
            arrLeft=btnHalf-arrHalf;
        }
        //중앙정렬 레이아웃
        if (winW>bodyW) {
            var left=(this.posLeft) ? pos.left : layerLeft;
            layerLeft=left-(winW-bodyW)/2;
        }
		var	arrResult={left:Math.floor(arrLeft+1)};
		var layerResult={left:Math.floor(layerLeft),top:Math.floor(layerTop-1),marginRight:Math.floor(this.bothMargin-1),zIndex:this.zIndex};
		this.obj.css(layerResult).find('.'+this.classArr).css(arrResult); //위치
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
		this.objAll.find('.'+this.classArr).css({left:0});
	},
	rtBtnActionElement : function(value){
		return this.obj.find('a[ui-btn-action='+value+']').add(this.obj.find('input[ui-btn-action='+value+']')).add(this.obj.find('button[ui-btn-action='+value+']'));
	},
	rtBaseDiv : function(){
		if (jQuery(this.baseDiv).length) {
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

//fn : ui툴팁멀티 2019.05.15
var uiTooltipMulti = function(o){
	this.init(o);
};
uiTooltipMulti.prototype = {
	init : function(o){
		if (jQuery(o.obj).length) {
			this.cacheElement(o);
			this.setEvent();
		}
	},
	cacheElement : function(o){
		this.obj=jQuery(o.obj);
		this.objClass=o.obj.split('.',2).slice(1);
		this.btn=jQuery(o.btn).addClass('caller_'+this.objClass);
		this.btnArrowCheck=(o.arrowPos) ? this.btn.find(o.arrowPos) : this.btn.find('.uitooltip_pos');
		this.btnArrow=(this.btnArrowCheck.length) ? this.btnArrowCheck : jQuery(this.btn);
		this.classView='view';
		this.classArr='arr';
		this.zIndex=(o.zIndex) ? o.zIndex : 5000;
		this.evtNamespace='.evtTooltip_'+this.objClass;
		this.baseDiv=(o.baseDiv) ? o.baseDiv : '#depth_main';
		this.bothMargin=(o.bothMargin!=null) ? o.bothMargin: -5;
		this.win=jQuery(window);
		this.doc=jQuery(document);
		this.posTop=o.postop;
		this.posLeft=o.posleft;
		this.plusTop=jQuery(o.plusTop).outerHeight();
		this.oldIE=(oldIE7||oldIE8||oldIE9) ? 'oldie' : 'default';
		this.body=(o.body) ? jQuery(o.body) : jQuery('#bodydiv');
		this.header=(o.header) ? jQuery(o.header) : jQuery('#headerDIV');
	},
	setEvent : function(o){
		var toggle=!this.btn.hasClass(this.classView);
		//arrow
		if (!this.obj.find('.'+this.classArr).length) this.obj.children().append('<div class="'+this.classArr+'"></div>');
		//IE 7,8체크
		if (this.oldIE) this.obj.addClass(this.oldIE);
		//toogle
		this.fnToogle(toggle);
	},
	fnToogle : function(type){
		var e$=this;
		//remove event
		e$.fnRemoveEvt();

		//all remove
		jQuery(this.obj).add(jQuery('.caller_'+this.objClass)).removeClass(e$.classView);

		//btn
		e$.fnBtnAction();

		if (type) {
			//active
			e$.obj.add(e$.btn).add(e$.btnAdd).addClass(e$.classView);
			//position
			e$.fnPos();
			e$.win.on('resize'+e$.evtNamespace,function(){
				e$.fnPos();
			});
			e$.obj.trigger('shown.ui.tooltip');
		}else{
			e$.obj.trigger('hidden.ui.tooltip');
		}
	},
	Update : function(time){
		e$=this;
		var delay = (time) ? time : 10;
		setTimeout(function(){
			e$.fnPos();
		},delay);
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
		var mt=this.btn.height()+this.obj.find('.'+this.classArr).outerHeight()+2;
		//기본
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
		var bodyW=this.body.outerWidth();
		var winW=document.documentElement.clientWidth;
		var headerH=this.header.outerHeight(true);
		var caseLayerBottom=pos.top-headerH+mt;
		var caseLayerTop=pos.top-headerH-(this.obj.outerHeight()+this.obj.find('.'+this.classArr).outerHeight())+2;
		var layerTop=caseLayerBottom;
		//상하 오토
		var ifBottom=this.win.outerHeight()+this.win.scrollTop()<this.obj.outerHeight()+mt+pos.top;
		var ifTop=this.win.scrollTop()-headerH>caseLayerTop-this.plusTop;
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
			}	else{
				layerTop=caseLayerTop;
				this.obj.addClass('reverse');
			}

		}
		//왼쪽정렬
		if (this.posLeft) {
			layerLeft=pos.left;
			arrLeft=btnHalf-arrHalf;
		}
		//중앙정렬 레이아웃
		if (winW>bodyW) {
			var left=(this.posLeft) ? pos.left : layerLeft;
			layerLeft=left-(winW-bodyW)/2;
		}
		var	arrResult={left:Math.floor(arrLeft+1)};
		var layerResult={left:Math.floor(layerLeft),top:Math.floor(layerTop-1),marginRight:Math.floor(this.bothMargin-1),zIndex:this.zIndex};
		this.obj.css(layerResult).find('.'+this.classArr).css(arrResult); //위치
	},
	fnRemoveEvt : function(){
		this.win.add(this.doc).off(this.evtNamespace);
	},
	fnBtnAction : function(){
		var e$=this;
		this.rtBtnActionElement('close').on('click',function(){
			e$.fnToogle(false);
		});
	},
	rtReset : function(){
		this.obj.attr('style',''); //초기화
		this.obj.find('.'+this.classArr).css({left:0});
	},
	rtBtnActionElement : function(value){
		return this.obj.find('a[ui-btn-action='+value+']').add(this.obj.find('input[ui-btn-action='+value+']')).add(this.obj.find('button[ui-btn-action='+value+']'));
	},
	rtBaseDiv : function(){
		if (jQuery(this.baseDiv).length) {
			var winW=this.win.outerWidth();
			var tg=jQuery(this.baseDiv);
			var pos=tg.offset();
			var baseW=tg.outerWidth();
			return winW-pos.left-baseW+this.bothMargin;
		}else{
			return this.bothMargin;
		}
	}
}

//fn : ui셀렉트박스 2018.12.28 - ui툴팁 필수
var uiSelect={
    first : function(o){
        //셀렉트 박스 체크
        jQuery('.uiselect_js').each(function() {
            var t=jQuery(this);
            var txt=t.find('select option:selected').text();
            t.find('button .t').text(txt);
        });
    },
    init : function(o){
        this.cacheElement(o);
        this.setEvent();
    },
    cacheElement : function(o){
        this.obj=jQuery(o.obj);
        this.layerClass='.uiselect';
        this.layerboxClass='.uiselect_box';
        this.namespaceBtn='.nameBtnAction';
        this.select=this.obj.parent().find('select').eq(0);
        this.skin=(o.skin) ? o.skin : 'uiselect_skin0';
        this.checkVisible=this.obj.hasClass('view');
    },
    setEvent : function(){
        var e$=this;
        if (e$.checkVisible) {
           e$.fnReset();
           return false;
        }
        if (jQuery(e$.layerClass).length) e$.fnReset();
        e$.fnBtnText();
        e$.fnBtnEvent();
    },
    fnReset : function(){
        //이벤트 리셋
        var e$=this;
        var resetTarget=[
            jQuery(e$.layerClass).find('button'),
            e$.select
        ];
        jQuery.each(resetTarget, function(index, value){
            value.off(e$.namespaceBtn);
        });
        uiTooltip.fnToogle(false); //닫기
    },
    fnBtnText : function(i){
        //버튼 세팅
        var e$=this;
        e$.fnSelectActive(i);
        e$.obj.find('.t').html(e$.select.find('option:selected').text());
    },
    fnBtnEvent : function(){
        //버튼 이벤트
        var e$=this;
        e$.fnLayerMarkup();
        e$.fnSkinChange();
        uiTooltip.init({obj:e$.layerClass,btn:e$.obj,posleft:true});
        e$.fnLayerEvent();
    },
    rtSkinClassFind : function(tg,classname){
        //스킨 타입 찾기
        var list=tg.attr('class').split(/\s+/);
        for (var i = list.length - 1; i >= 0; i--) {
            var chk=list[i].indexOf(classname)==0;
            if (chk) return list[i];
        }
        return '';
    },
    fnSkinChange : function(){
        //스킨 변경
        var e$=this;
        var removeSkin=e$.rtSkinClassFind(jQuery(e$.layerClass),'uiselect_skin');
        var removeOption=e$.rtSkinClassFind(jQuery(e$.layerClass),'uiselect_size');
        var addSkin=e$.rtSkinClassFind(jQuery(e$.obj.parent()),'uiselect_skin');
        var addOption=e$.rtSkinClassFind(jQuery(e$.obj.parent()),'uiselect_size');
        jQuery(e$.layerClass).removeClass(removeSkin+' '+removeOption).addClass(addSkin+' '+addOption);

    },
    fnLayerMarkup : function(){
        //레이어 마크업 생성 and 세팅
        var e$=this;
        if (!jQuery(e$.layerClass).length) {
            jQuery('#bodydiv').append('<div class="uitooltip uiselect"><div class="uiselect_box"></div></div>');
        }
        jQuery(e$.layerClass).find(e$.layerboxClass).empty();
        e$.select.find('option').each(function(i){
            var ifOnclick = jQuery(this).attr('onclick'),
                fnOnclick = (ifOnclick) ? 'onclick="'+ifOnclick+'"' : '';
            jQuery(e$.layerClass).find(e$.layerboxClass).append('<button ui-btn-action="close" '+fnOnclick+'>'+jQuery(this).text()+'</button>')
            if (jQuery(this).filter(':selected').length){
                e$.fnLayerActive(i);
            }
        });
    },
    fnLayerActive : function(i){
        //레이어 버튼 활성화
        var e$=this;
        jQuery(e$.layerClass).find(e$.layerboxClass).find('button').removeClass('on').eq(i).addClass('on');
    },
    fnLayerEvent : function(){
        //레이어 버튼 이벤트
        var e$=this;
        jQuery(e$.layerClass).find('button').on('click'+e$.namespaceBtn,function(){
            e$.fnBtnText(jQuery(this).index());
            e$.fnLayerActive(jQuery(this).index());
            e$.fnReset();
        });
    },
    fnSelectActive : function(i){
        //기본셀렉트 활성화
        var e$=this;
        e$.select.find('option:eq('+i+')').prop('selected', true);
    }
};

//fn : 스크롤 이미지 로드, new UIimageScrollLoad('.class');
UIimageScrollLoad=function(o){
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
var fnImgError=function(element,noimg,beforeTxt,afterTxt){
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

//fn : ui토글 2018.06.04
var uiToggle= {
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
        if (this.tg.hasClass(this.clActive)) {
            this.tg.add(this.btn).removeClass(this.clActive);
        }else{
            this.tg.add(this.btn).addClass(this.clActive);
        }
    }
}

//fn : ui토글 그룹 2018.06.04
uiToggleGroup=function(o){
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
		if (this.start) e$.setToggle(this.start);
	},
	setToggle : function(num){
		if (num > 0) {
			this.group.addClass('uiToggleGroupActive');
			this.fnToggle(this.allBtn.eq(num-1), this.allTg.eq(num-1));
		}
	},
	fnToggle : function(btn,tg){
		if (this.allClose&&!btn.hasClass(this.clActive)) this.allBtn.add(this.allTg).removeClass(this.clActive);
		if (tg.hasClass(this.clActive)) {
			if (!this.noOff) tg.add(btn).removeClass(this.clActive);
		}else{
			tg.add(btn).addClass(this.clActive);
		}
		var currentNum = this.rtActiveNumber();
		this.group.trigger('shown.ui.togglegroup',{currentNum:currentNum});
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
	},
	rtActiveNumber : function(){
		return this.allBtn.filter('.'+this.clActive).attr('toggle-index');
	}
}

//fn : uiTextarea : 2019.04.26
window.uiTextarea=function(o){
	this.init(o);
};
uiTextarea.prototype = {
	init : function(o){
		if (jQuery(o.obj).length) {
			this.cacheElement(o);
			this.setEvent();
		}
	},
	cacheElement : function(o){
		this.o = o.obj;
		this.obj = jQuery(o.obj);
		this.textarea=this.obj.find('textarea');
		this.bytetext=this.obj.find('.byte_num');
		this.maxLength = o.maxLength || 200;
		this.maxRow = o.maxRow || 4; //디자인가이드
		this.lineHeight = o.lineHeight || 27; //디자인가이드
		this.namespaceBtn='.nameTextarea';
	},
	setEvent : function(o){
		var e$ = this;
		e$.fnInput();
		e$.fnMaxRow();
		uiPlaceholeder.init();
		jQuery(window).on('resize'+e$.namespaceBtn,function(){
			e$.fnAutoHeight(e$.textarea);
		}).trigger('resize'+e$.namespaceBtn);
	},
	fnMaxRow : function(value, maxSize){
		var e$ = this;
		var chkMaxHeight = e$.maxRow;
		var maxHeight = e$.maxRow * e$.lineHeight;
		e$.textarea.css('max-height', chkMaxHeight ? maxHeight : 'auto');
	},
	fnInput : function(){
		var e$ = this;
		e$.textarea.on('keydown keypress keyup input', function() {
			var value = e$.textarea.val();
			var maxSize = e$.maxLength;
			var byteData = e$.fnByteCheck(value, maxSize);
			var $byteSize = e$.bytetext;

			if (byteData.size > maxSize) {
				e$.textarea.blur().val(byteData.croppedValue).focus(); //focus for cross browsing
				e$.obj.trigger('max.ui.textarea');
			}

//			$byteSize.css('display', value ? 'block' : 'none');
			$byteSize.html('<strong class="byte">'+ byteData.croppedSize + '</strong>' + ' / ' + maxSize);

			// textarea 높이 내용에 따라 유동적으로
			e$.fnAutoHeight();
		});
	},
	fnByteCheck : function(value, maxSize){
		var codeByte = 0;
		var croppedValue = '';
		var croppedSize = 0;

		for (var i = 0; i < value.length; i++) {
			var oneChar = escape(value.charAt(i));

			if (oneChar.length === 1) {
				codeByte++;
			} else if (oneChar.indexOf("%u") !== -1) {
				codeByte += 2;
			} else if (oneChar.indexOf("%") !== -1) {
				codeByte++;
			}

			if (codeByte <= maxSize) {
				croppedValue += value.charAt(i);
				croppedSize = codeByte;
			}
		}
		return {
			size: codeByte,
			croppedValue: croppedValue,
			croppedSize: croppedSize,
		};
	},
	fnAutoHeight : function(){
		var e$ = this;
		e$.textarea.height(1).height(e$.textarea.prop('scrollHeight'));
	}
};

//아코디언 UI
function AccordionUI(param){
	this.scope = jQuery(param.scope);
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
			var self = jQuery(this),
				parent = self.parent('.uiAccContent');

			self.data('parent', parent);
		});
	},

	setEvent: function(){
		var root = this;

		this.scope.on('click', function(e){
			var target = jQuery(e.target);

			if(target.hasClass('uiAccMenu')){
				root.active(target.data('parent'));
				e.preventDefault();
			}else if(target.hasClass('icon_question') || target.hasClass('icon_arrow')){
				target.parent().trigger('click');
				e.preventDefault();
			}else if(target.hasClass('uiAccBtnAll')){
				root.activeAll();
				jQuery('.btn_center').addClass('hide');
				e.preventDefault();
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
			jQuery(this).data('parent').removeClass('hide');
		});
	}
};

function uiLayerC(layer){
	var layer = jQuery(layer),
		btnClose = layer.find('.uiBtnLayerClose'),
		container = layer.find('.uiLayerContainer'),
		overlay = layer.find('.uiLayerOverlay');

	if(!layer.hasClass('on')){
		layer.appendTo(jQuery('body'));
		layer.addClass('on');

		var windowHeight = jQuery(window).height(),
			containerHeight = container.height(),
			containerTop = jQuery(window).scrollTop() + 106;

		if(containerHeight > windowHeight){
			layer.css({position: 'absolute'});
			container.css({top: containerTop + 'px'});
			overlay.css({height: jQuery(document).height() + 'px'});
		}

		layer.on('click', function(e){
			var eTarget = jQuery(e.target);

			if(eTarget.hasClass('uiBtnLayerClose') || eTarget.hasClass('uiLayerOverlay')){
				layer.removeClass('on').off('click');
				return false;
			}
		});
	}
}



//중고차론 INDEX
var loanUI = (function(){
'use strict';

var $ = null,
	state = {
		recentcars: [],
		price: 0,
		month: 24
	},
	domSlideRecent = null,
	uiSlideRecent = null,
	uiSlideReview = null,
	uiAccordionFaq = null,
	domInputPrice = null,
	domPriceCalc = null,
	domLeftCalc = null;

window.currentSelect = null;

function init(){
	setCache();
	setEvent();
	setSlideRecent();
	setSlideReview();
	setSelect();
	setFaq();
	setScroll();
}

function setCache(){
	domSlideRecent = $('.uiSlideDimension');
	domSlideRecent.find('.uiSlideItem').each(function(e){
		state.recentcars.push($(this).find('.num').text());
	});
	domInputPrice = $('.uiInputPrice');
	domPriceCalc = $('.uiPriceCalc');
	domLeftCalc = $('.left_calc');
}

function setEvent(){
	$(document).on({
		'keydown': function(e){
			var target = $(e.target);

			if(target.hasClass('uiInputPrice')){
				var code = e.keyCode;
				if (code > 47 && code < 58){} return;
				if (code === 9 || code === 36 || code === 35 || code === 37 ||
					code === 39 || code === 8 || code === 46) {
					if(target.val() !== '') target.parent().addClass('checked');
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
		'transition-end': function(e, data){
			var target = $(e.target);
			if(target.hasClass('uiSlideDimension')){
				domInputPrice.val(state.recentcars[data.currentNum]);
				state.price = Number(state.recentcars[data.currentNum].replace(',', ''));

				domPriceCalc.trigger('calculate');
				domInputPrice.trigger('focusout');
			}
		},
		'click': function(e){
			if(currentSelect !== null){
				var pos = currentSelect.data('instance').getPos();
				if(e.pageX < pos.startX || e.pageX > pos.endX || e.pageY < pos.startY || e.pageY > pos.endY) refreshUI();
			}
		}
	});
}

function setSlideRecent(){
	if(!state.recentcars.length){
		state.price = 1000;
		domInputPrice.val(state.price).trigger('keyup');
		return;
	}

    uiSlideRecent = new UISlideDimension({scope: domSlideRecent});

	if(state.recentcars.length < 3){
        domSlideRecent.find('.uiSlideItem').each(function(e){
            state.recentcars.push($(this).find('.num').text());
        });
    }

    domSlideRecent.trigger('transition-end', {currentNum: uiSlideRecent.current});
}

function resetSlideRecent(){
    domSlideRecent = $('.uiSlideDimension');

    state.recentcars = [];
    domSlideRecent.find('.uiSlideItem').each(function(e){
        state.recentcars.push($(this).find('.num').text());
    });

	uiSlideRecent = null;
	setSlideRecent();
}

function setSlideReview(){
	uiSlideReview = new uiSlide({
		obj:'.uiSlideReview',
		speed:500,
		loop:true,
		mouseswipe:true,
		showNavi: '.uiTabMenu',
		showArrow:true,
		showNumber:false
	});
}

function setSelect(){
	$('.ui_select').each(function(a){
		var self = $(this),
			callback = null;

		if(self.hasClass('select_type')){
			callback = function(){
				var currentIndex = this.currentOption.parent().index();

				if(currentIndex !== 0){
					state.price = 1000;
					domInputPrice.val(state.price).trigger('keyup');

					//state.month = '36';
					$('.select_month').data('instance').opts.eq(1).trigger('click');
					domPriceCalc.trigger('calculate');

					domLeftCalc.addClass('type_calc');
				}else{
                    domLeftCalc.removeClass('type_calc');
					domSlideRecent.trigger('transition-end', {currentNum: uiSlideRecent.current});
					domPriceCalc.trigger('calculate');
				}

				if(typeof $('.select_month').data('instance') !== 'undefined') $('.select_month').data('instance').opts.eq(1).trigger('click');
			}
		}

		if(self.hasClass('select_month')){
			callback = function(){
				state.month = Number(this.currentOption.text().replace('개월', ''));
				domPriceCalc.trigger('calculate');
			}
		}

		if(self.hasClass('select_type')){
			if(!state.recentcars.length){
				self.addClass('disabled').find('.ui_menu_txt').text('차량 구매 자금');
				self.find('.ui_menu').on('click', function(e){
					e.preventDefault();
				});
				domLeftCalc.addClass('type_calc');
			}else{
				self.removeClass('disabled')
					.data('instance', new SelectBoxUI({'scope': self, 'useScroll': false, 'callback': callback}));
			}
		}else{
			self.data('instance', new SelectBoxUI({'scope': self, 'useScroll': false, 'callback': callback}));
			self.data('instance').opts.eq(1).trigger('click');
		}
	});
}

function setFaq(){
	uiAccordionFaq = new AccordionUI({scope: '.uiAcc'});
}

function setScroll(){
	var fnLoanpage={
		init : function(){
			this.fnFix();
		},
		fnFix : function(){
			function uiScrFixSchFn(){
				new uiScrFix('scrFix','scrFixStart',null,'scrFix','scrFixEnd');
			};
			if(window.addEventListener){
				window.addEventListener('scroll',uiScrFixSchFn,false);
			}else if(window.attachEvent){
				window.attachEvent('onscroll',uiScrFixSchFn);
			};
		}
	};

	fnLoanpage.init(); //중고차론 페이지 UI
}

function refreshUI(){
	var selectInstance = currentSelect.data('instance');
	selectInstance.hideOption();
}

function comma(str) {
	str = String(str);
	return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}

function uncomma(str) {
	str = String(str);
	return str.replace(/[^\d]+/g, '');
}

/*
{
	scope [jQuery Object] 최상위 부모 객체 - 필수
	index [Number] 활성화 될 옵션 index
	useScroll [Boolean] scroll 사용 여부
	callback [function] 옵션선택 후 실행되어야 할 함수

	depend on - jQuery, jQuery.scrollbar
}
*/

function SelectBoxUI(options){
	this.options = {
		scope: null,
		index: 0,
		useScroll: false
	};
	this.scope = null;
	this.menu = null;
	this.txt = null;
	this.container = null;
	this.opts = null;
	this.currentOption = null;
	this.inpt = null;

	this.init(options);
}

SelectBoxUI.prototype = {
	init: function(options){
		if(!this.setOptions(options)) return;
		this.setCacheEl();
		this.setEvent();
	},

	reinit: function(){
		this.setCacheEl();
	},

	setOptions: function(options){
		if(typeof options === 'undefiend') options = {};

		try{
			if(options.scope === null) throw new Error('SelectBoxUI Initailize Error: scope객체가 정의되어 있지 않습니다.');
		}catch(e){
			console.log(e.message); //TODO: ie8 처리 나중에....
			return false;
		}

		for(var i in options){
			this.options[i] = options[i];
		}

		return true;
	},

	setCacheEl: function(){
		var context = this;

		this.scope = this.options.scope;
		this.menu = this.scope.find('.ui_menu');
		this.txt = this.menu.find('.ui_menu_txt');
		this.container = this.scope.find('.ui_container');
		this.opts = this.container.find('.ui_opt');
		this.opts.each(function(a){
			var self = $(this),
				value = self.attr('data-code'),
				txt = self.find('.ui_opt_txt').text(),
				init = typeof self.attr('data-init') !== 'undefined' ? true : false;

			self.data('info', {'value': value, 'txt': txt, 'init': init});

			if(a === context.options.index){
				context.setValue(self);
			}
		});

		this.inpt = this.scope.find('.ui_inpt');
		this.inpt = this.inpt.length ? this.inpt : null;

		if(this.options.useScroll){
			try{
				if(typeof jQuery.fn.scrollbar === 'undefined') throw new Error('SelectBoxUI Initailize Error: scrollbar 라이브러리가 로드되어 있지 않습니다.');
			}catch(e){
				console.log(e.message); //TODO: ie8 처리 나중에....
				return;
			}

			this.container.scrollbar({
				onInit:function(){
					context.container = context.scope.find('.ui_container');
				}
			});

			// if(this.container.find('.ui_opt').length > 6){
			// 	var sccc = this.container.scrollbar({
			// 		onInit:function(){
			// 			context.container = context.scope.find('.ui_container');
			// 		}
			// 	});
			// }else{
			// 	var h = (this.container.find('.ui_opt').length * 30 ) + 30; // *30(option height) +30(wrapper padding)
			//   context.scope.addClass('noscroll');
			// }
		}
	},

	getPos: function(scope, container){
		var startX = this.scope.offset().left,
			startY = this.scope.offset().top,
			endX = startX + this.container.outerWidth(),
			endY = startY + this.scope.outerHeight() + this.container.outerHeight();

		return {
			startX: startX,
			startY: startY,
			endX: endX,
			endY: endY
		};
	},

	setEvent: function(){
		var context = this;

		this.scope.on('click', 'a', function(e){
			var target = $(this);

			if(target.hasClass('ui_menu')){
				context.setDisplayStatus(target);
				e.preventDefault();
			}else if(target.hasClass('ui_opt')){
				context.setValue(target);
				return false;
			}
		});
	},

	setDisplayStatus: function(target){
		if(target.hasClass('off')) return;
		if(!target.hasClass('on')){
			this.displayOption();
		}else{
			this.hideOption();
		}
	},

	setValue: function(item){
		if(typeof item.data('info') === 'undefined') return;
		if(item.hasClass('on')){
			this.hideOption();
			return;
		}

		var value = item.data('info').value,
			txt = item.data('info').txt;

		if(item.data('info').init) value = '';
		if(typeof item.attr('data-cnt') !== 'undefined') txt = item.attr('data-cnt') + '판';

		this.menu.attr('data-value', value);
		this.txt.text(txt);
		if(this.inpt !== null){
			this.inpt.val(value);
		}

		if(this.currentOption) this.deActiveOption(this.currentOption);
		this.activeOption(item);
		this.hideOption();
	},

	displayOption: function(){
		this.menu.addClass('on');
		this.container.addClass('on');

		if(typeof currentSelect !== 'undefined'){
			if(currentSelect !== null) currentSelect.data('instance').hideOption();
			currentSelect = this.scope;
		}
	},

	hideOption: function(){
		this.menu.removeClass('on');
		this.container.removeClass('on');
		if(typeof currentSelect !== 'undefined') currentSelect = null;
	},

	activeOption: function(item){
		if(!item.data('info').init) item.addClass('on');
		this.currentOption = item;
		if(typeof this.options.callback === 'function') this.options.callback.call(this);
	},

	deActiveOption: function(item){
		if(typeof item.data('info') !== 'undefined' && !item.data('info').init) item.removeClass('on');
	}
};

return {
	init: function(jq){
		$ = jq;
		init();
	},

	setSlideRecent: function(){
		resetSlideRecent();
	},

	getCarId: function(){
		return uiSlideRecent.items.eq(uiSlideRecent.current).find('#rgsid').val();
	}
};

}());
// 이용권선택 광고내용상세보기 관련
function smPaymentViewSet(){
	jQuery('.enclist tr').on('click', function(e){
		if(e.target.nodeName !== 'A' && e.target.nodeName !== 'INPUT'){
			var btn = jQuery(this).find('.btn_view');
			view(btn);
		}
	});
	jQuery('.enclist td .btn_view').on('click', function(){
		view(this);
		return false;
	});
	function view(ele){
		var btn=jQuery(ele);
		var target=jQuery(ele).attr('href');
		btn.toggleClass('on');
		jQuery(target).toggleClass('on');
	};
};


// 선택옵션 툴팁(셀프등록,비교견적,차량정보수정)
var addOptionLayer = function (baseDiv) {
    var link=jQuery('.list_addoption').find('.uitooltip_pos');
    jQuery('#bodydiv').append('<div class="uitooltip uitooltip_option_explan"><div class="uitooltip_box"><strong class="option_ttl"></strong><p class="option_desc"></p></div></div>');
    var optionLayer=jQuery('.uitooltip_option_explan');
    link.on('mouseover focus',function() {
        var tg=jQuery(this);
        var tit = tg.siblings('.txt_subject');
        var obj=tg.closest('label').siblings('.explan');
        if (obj.length) {
            optionLayer.find('.option_ttl').text(tit.text());
            optionLayer.find('.option_desc').html('').text(obj.text());
            //선택옵션 위치
            uiTooltip.init({obj:'.uitooltip_option_explan',btn:tg,baseDiv:baseDiv,hover:true,bothMargin:-5,postop:true});
        }
    });
};

function UISlideDimension(options){
    this.scope = options.scope;
    this.container = null;
    this.items = null;
    this.w = 0;
    this.leng = 0;
    this.current = 0;
    this.ratio = 4;
    this.depth = {
        second: -100,
        third: -200
    };
    this.isLegacy = false;

    this.init();
}

UISlideDimension.prototype = {
    init: function(){
        this.setBrowser();
        this.setCache();
        this.setInitPosition();
        this.setEvent();
    },

    setBrowser: function(){
        this.isLegacy = (function(slide){
            var props = ['transitionProperty', 'WebkitTransition', 'MozTransition', 'OTransition', 'msTransition'],
                leng = props.length;

            for(var i=0; i<leng; i++){
                if (typeof slide.style[props[i]] !== 'undefined') return false;
            }

            return true;
        }(document.createElement('slide')));
    },

    setCache: function(){
        this.container = this.scope.find('.uiSlideContainer');
        this.items = this.container.find('.uiSlideItem');
        this.w = this.items.eq(0).outerWidth();
        this.leng = this.items.length;

        if(this.leng < 3) this.setLoop();
        this.container.width(this.w * this.leng);
    },

    setLoop: function(){
        if(this.leng < 2) return;
        this.container.append(this.items.eq(0).clone());
        this.container.append(this.items.eq(1).clone());
        this.items = this.container.find('.uiSlideItem');
        this.leng = this.items.length;
    },

    setInitPosition: function(){
        var items = this.items,
            target = null,
            leng = this.leng,
            w = this.w,
            type = '',
            pos = null;

        for(var i=0; i<leng; i++){
            target = items.eq(i);
            type = this.getType(i);
            pos = this.getPosition(type);

            target.css({left: (-w * i) + 'px'});

            if(!this.isLegacy){
                target.css({
                    '-webkit-transform': 'perspective(500px) translate3d(' + pos.x + 'px, 0, ' + pos.z + 'px)',
                    '-moz-transform': 'perspective(500px) translate3d(' + pos.x + 'px, 0, ' + pos.z + 'px)',
                    '-o-transform': 'perspective(500px) translate3d(' + pos.x + 'px, 0, ' + pos.z + 'px)',
                    '-ms-transform': 'perspective(500px) translate3d(' + pos.x + 'px, 0, ' + pos.z + 'px)',
                    'transform': 'perspective(500px) translate3d(' + pos.x + 'px, 0, ' + pos.z + 'px)'
                });
            }else{
                target.addClass('uiNoShadow');
            }

            if(i === this.current) target.addClass('active');
        }

        this.scope.css('visibility', 'visible');
    },

    setEvent: function(){
        if(this.leng < 2){
            this.scope.find('.uiSlidePrev').hide();
            this.scope.find('.uiSlideNext').hide();
            return;
        }

        var context = this;

        this.scope.find('.uiSlidePrev').on('click', function(e){
            context.transition('prev');
            e.preventDefault();
        });

        this.scope.find('.uiSlideNext').on('click', function(e){
            context.transition('next');
            e.preventDefault();
        });
    },

    getIndex: function(index){
        var leng = this.leng;
        return (leng + (index % leng)) % leng;
    },

    getType: function(index){
        var current = this.current,
            prev = this.getIndex(current - 1),
            next = this.getIndex(current + 1);

        if(index === current){
            return 'current';
        }else if(index === prev){
            return 'prev';
        }else if(index === next){
            return 'next';
        }else{
            return 'etc';
        }
    },

    getPosition: function(type){
        var w = this.w,
            x = 0,
            z = 0;

        switch(type.toUpperCase()){
            case 'CURRENT':
                break;

            case 'PREV':
                x = -w / this.ratio;
                z = this.depth.second;
                break;

            case 'NEXT':
                x = w / this.ratio;
                z = this.depth.second;
                break;

            default:
                z = this.depth.third;
        }

        return {
            x: x,
            z: z
        }
    },

    transition: function(dir){
        var items = this.items,
            current = this.current,
            prev = this.getIndex(current - 1),
            next = this.getIndex(current + 1),
            etc = 0;

        items.eq(current).removeClass('active');
        this.current = dir === 'prev' ? prev : next;

        if(!this.isLegacy){
            if(dir === 'prev'){
                etc = this.getIndex(prev - 1);
                this.animate(items.eq(prev), 'current');
                this.animate(items.eq(current), 'next');
                this.animate(items.eq(next), 'etc');
                this.animate(items.eq(etc), 'prev');
            }else{
                etc = this.getIndex(next + 1);
                this.animate(items.eq(prev), 'etc');
                this.animate(items.eq(current), 'prev');
                this.animate(items.eq(next), 'current');
                this.animate(items.eq(etc), 'next');
            }
        }

        items.eq(this.current).addClass('active');
        if(this.isLegacy) this.scope.trigger('transition-end', {currentNum: this.current});
    },

    animate: function(target, type){
        var context = this,
            pos = this.getPosition(type);

        target.css({
            '-webkit-transform': 'perspective(500px) translate3d(' + pos.x + 'px, 0, ' + pos.z + 'px)',
            '-webkit-transition': '400ms ease-out',
            '-moz-transform': 'perspective(500px) translate3d(' + pos.x + 'px, 0, ' + pos.z + 'px)',
            '-moz-transition': '400ms ease-out',
            '-o-transform': 'perspective(500px) translate3d(' + pos.x + 'px, 0, ' + pos.z + 'px)',
            '-o-transition': '400ms ease-out',
            '-ms-transform': 'perspective(500px) translate3d(' + pos.x + 'px, 0, ' + pos.z + 'px)',
            '-ms-transition': '400ms ease-out',
            'transform': 'perspective(500px) translate3d(' + pos.x + 'px, 0, ' + pos.z + 'px)',
            'transition': '400ms ease-out'
        });

        if(type === 'current'){
            target.on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e){
                context.scope.trigger('transition-end', {currentNum: context.current});
                jQuery(this).off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
            });
        }
    }
};

function UIPlaceHolder(scope){
    this.scope = scope;
    this.init();
}

UIPlaceHolder.prototype = {
	init: function(){
		this.setCache();
		this.setEvent();
	},

	setCache: function(){
		this.placeholder = this.scope.val();
	},

	setEvent: function(){
		var context = this;

		this.scope.on({
			'focus': function(){
				var self = jQuery(this),
					value = self.val();

				if(value === context.placeholder){
					self.val('');
					self.addClass('active');
				}
			},

			'blur': function(){
                var self = jQuery(this),
                    value = self.val();

                if(value === ''){
                    self.val(context.placeholder);
                    self.removeClass('active');
				}
			}
		});
	}
};

//자동업데이트 시간 수동설정 (마이페이지 판매중)
var autoupdateTimeLayer = function (typeCase) {
    var typeCase=(typeCase=='my') ? '#depth_main' : '#mdcontDIV'; //개인, 딜러 구분
    var link=jQuery('.autoupdateTimeView');
    jQuery('#containerDIV').append('<div class="uitooltip uitooltip_autoupdatetime"><div class="uitooltip_box"><p class="option_desc"></p></div></div>');
    var optionLayer=jQuery('.uitooltip_autoupdatetime');
    link.on('mouseover focus',function() {
        var tg=jQuery(this);
        var obj=tg.siblings('.autoupdateTimeData');
        if (obj.length) {
            optionLayer.find('.option_desc').html('').html(obj.html());
            //선택옵션 위치
            uiTooltip.init({obj:'.uitooltip_autoupdatetime',btn:tg,body:'#containerDIV',baseDiv:typeCase,hover:true,header:'#off'});
        }
    });
};


function rsFuncSelect(){
    var scope = jQuery('.uiFuncSelect'),
        select = scope.find('.uiSelect');

    select.on('change', function(){
        var val = jQuery(this).val();

        if(val === 'self'){
            scope.addClass('self');
            scope.removeClass('none exsist');
        }else{
            scope.removeClass('self');
        }
    });
}

//fn : ui얼럿
var uiAlert = {
    init : function(o){
        this.cacheElement(o);
        this.fnReset();
        this.setEvent();
    },
    cacheElement : function(o){
        this.txt=o.txt;
        this.time=(o.time) ? o.time : 4000;
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

// 엔카보증 서비스 안내페이지
var ewUI = function(){
    function uiScrFixSchFn(){
        new uiScrFix('scrFix','scrFixStart',null,'scrFix','scrFixEnd');
    };
    if(window.addEventListener){
        window.addEventListener('scroll',uiScrFixSchFn,false);
    }else if(window.attachEvent){
        window.attachEvent('onscroll',uiScrFixSchFn);
    };
}

// 오마이콜 소개페이지 안드로이드 애니메이션
var letteringAndroidAnimation = {
	init : function(options){
		this.options = options;
		this.initElement();
		this.initEvent();
		this.scrollEvt();
		this.inProgress = false;
		this.timers = [];
	},
	initElement: function() {
		this.$trigger = jQuery(this.options.trigger);
		this.$scnen = jQuery('.scene_android');
		this.$push = jQuery('.scene_android .animation_push');
		this.$click = jQuery('.scene_android .animation_click');
		this.$step1 = jQuery('.scene_android .scene_step1');
		this.$step2 = jQuery('.scene_android .scene_step2');
		this.$arrow = jQuery('.scene_android .animation_arrow');
	},
	reset: function() {
		this.$push.stop().removeAttr('style');
		this.$click.stop().removeAttr('style');
		this.$step1.stop().removeAttr('style');
		this.$step2.stop().removeAttr('style');
		this.$arrow.stop().removeAttr('style');
		this.inProgress = false;
		for (var i = 0; i < this.timers.length; i++) {
			clearTimeout(this.timers[i]);
		}
		this.timers = [];
	},
	initEvent: function(){
		jQuery(window).bind('scroll', function() {
			letteringAndroidAnimation.scrollEvt();
		});
		this.$trigger.on('click', function() {
			letteringAndroidAnimation.reset();
			letteringAndroidAnimation.scrollEvt();
		});
	},
	scrollEvt: function(){
		var scrollTop = jQuery(window).scrollTop();
		var areaOffset = jQuery('.area_example').offset().top;
		var activeAndroid = this.$scnen.hasClass('view');
		if (scrollTop > areaOffset - 100 && !this.inProgress && activeAndroid) {
			this.inProgress = true;
			this.startAnimation();
		}
	},
	startAnimation: function() {
		var that = this;
		var clickAnimation = function() {
			var animTimer = setTimeout(function() {
				if (!that.inProgress) return;
				that.$click.show();
				that.$click.animate(
					{ width: 60, height: 60, borderWidth: 0 },
					{ duration: 400, complete: detailAnimation }
				);
			}, 400);
			that.timers.push(animTimer);
		};
		var detailAnimation = function() {
			var animTimer = setTimeout(function() {
				that.$step1.animate({ left: '25%' }, { duration: 700 });
				that.$step2.animate(
					{ opacity: 1, left: '75%' },
					{ duration: 700, complete: arrowAnimation }
				);
			}, 300);
			that.timers.push(animTimer);
		};
		var arrowAnimation = function() {
			that.$arrow.animate({ opacity: 1 }, { duration: 200 });
		};
		that.$push.animate({ opacity: 1, top: 31 }, {
			duration: 500,
			complete: clickAnimation,
		});
	}
};

// 오마이콜 소개페이지 ios 애니메이션
var letteringIosAnimation = {
	init : function(options){
		this.options = options;
		this.initElement();
		this.initEvent();
		this.scrollEvt();
		this.inProgress = false;
		this.timers = [];
	},
	initElement: function() {
		this.$trigger = jQuery(this.options.trigger);
		this.$scene = jQuery('.scene_ios');
		this.$push = jQuery('.scene_ios .animation_push');
		this.$longClick = jQuery('.scene_ios .animation_long_click');
		this.$click = jQuery('.scene_ios .animation_click');
		this.$phone = jQuery('.scene_ios .scene_step1 .animation_phone');
		this.$pushDetail = jQuery('.scene_ios .scene_step1 .animation_push_detail');
		this.$step1 = jQuery('.scene_ios .scene_step1');
		this.$step2 = jQuery('.scene_ios .scene_step2');
		this.$arrow = jQuery('.scene_ios .animation_arrow');
	},
	reset: function() {
		this.$push.stop().removeAttr('style');
		this.$longClick.stop().removeAttr('style');
		this.$click.stop().removeAttr('style');
		this.$phone.stop().removeAttr('style');
		this.$pushDetail.stop().removeAttr('style');
		this.$step1.stop().removeAttr('style');
		this.$step2.stop().removeAttr('style');
		this.$arrow.stop().removeAttr('style');
		this.inProgress = false;
		for (var i = 0; i < this.timers.length; i++) {
			clearTimeout(this.timers[i]);
		}
		this.timers = [];
	},
	initEvent: function(){
		jQuery(window).bind('scroll', function(){
			letteringIosAnimation.scrollEvt();
		});
		this.$trigger.on('click', function() {
			letteringIosAnimation.reset();
			letteringIosAnimation.scrollEvt();
		});
	},
	scrollEvt: function(){
		var scrollTop = jQuery(window).scrollTop();
		var areaOffset = jQuery('.area_example').offset().top;
		var activeIos = this.$scene.hasClass('view');
		if (scrollTop > areaOffset - 100 && !this.inProgress && activeIos) {
			this.inProgress = true;
			this.startAnimation();
		}
	},
	startAnimation: function() {
		var that = this;
		var longClickAnimation = function() {
			that.$longClick.show();
			that.$longClick.animate(
				{ width: 60, height: 60, borderWidth: 0 },
				{ duration: 800, complete: detailPushAnimation }
			);
		};
		var detailPushAnimation = function() {
			var animTimer = setTimeout(function() {
				that.$longClick.hide();
				that.$pushDetail.animate(
					{ opacity: 1 },
					{ duration: 400, complete: clickAnimation }
				);
			}, 200);
			that.timers.push(animTimer);
		};
		var clickAnimation = function() {
			var animTimer = setTimeout(function() {
				that.$click.show();
				that.$click.animate(
					{ width: 60, height: 60, borderWidth: 0 },
					{ duration: 400, complete: detailAnimation }
				);
			}, 600);
			that.timers.push(animTimer);
		};
		var detailAnimation = function() {
			var animTimer = setTimeout(function() {
				that.$step1.animate({ left: '25%' }, { duration: 700 });
				that.$step2.animate(
					{ opacity: 1, left: '75%' },
					{ duration: 700, complete: arrowAnimation }
				);
			}, 300);
			that.timers.push(animTimer);
		};
		var arrowAnimation = function() {
			that.$arrow.animate({ opacity: 1 }, { duration: 200 });
		};
		that.$push.animate({ opacity: 1, top: 70 }, {
			duration: 500,
			complete: longClickAnimation,
		});
	}
};
// 오마이콜 페이지
var letteringPage = {
	init: function () {
		// 예시화면 탭
		new uiToggleGroup({group: 'os_group', allClose: true, noOff: true, start: 1});
		// 오마이콜 안드로이드 애니메이션
		letteringAndroidAnimation.init({trigger: '.btn_android'});
		// 오마이콜 iOS 애니메이션
		letteringIosAnimation.init({trigger: '.btn_ios'});
		// qna 토글 스크립트
		new uiToggleGroup({group: 'uiaccordions_qna'});
		// 이용안내 레이어 팝업 탭 스크립트
		new uiToggleGroup({group: 'usage_os_group', allClose: true, noOff: true, start: 1});
	}
};

// 모바일우대소개
preferentialIntro = {
	init:function(){
		this.cacheElement();
		this.fnIntro();
		this.fnTab();
		this.fnBottom();
	},
	cacheElement:function(){
		this.siteBody=jQuery('.whatis .phone .site_body');
		this.sitePreferential=jQuery('.whatis .phone .site_preferential');
		this.updateNum=jQuery('.whatis .phone .update_num');
		this.btn=jQuery('.whatis .btn');
		this.css3check=getSupportedTransformIE10();
		this.timer;
		this.timer1;
		this.timer2;
		this.timer3;
	},
	fnIntro:function(){
		var e$=this;
		var i=0;
		function action(){
			e$.timer=setInterval(function(){
				i=(i<3) ? i+1 : 0;
				e$.fnIntroAction(i);
			}, 2000);
		}
		jQuery(window).on('scroll.introAni load.introAni',function(){
			var scrT=jQuery(window).scrollTop(),
				objT=jQuery('#area_description').offset().top;
			if(scrT+jQuery(window).height()-700>objT){
				e$.fnIntroAction(i);
				action();
				jQuery(window).off('.introAni');
			}
		});
		this.btn.on('click',function(){
			var num=jQuery(this).parent('li').index();
			e$.fnIntroAction(num);
			i=num;
			clearInterval(e$.timer);
			action();
			return false;
		});
	},
	fnIntroAction:function(i){
		var e$=this;
		this.btn.removeClass('on').eq(i).addClass('on');
		switch(i){
			case 0:
				this.updateNum.removeClass('action');
				if(this.css3check){
					clearTimeout(this.timer1);
					clearTimeout(this.timer2);
					clearTimeout(this.timer3);
					this.siteBody.removeClass('action');
					this.sitePreferential.removeClass('action');
					this.timer1=setTimeout(function(){
						e$.siteBody.addClass('action');
					},100);
				}else{
					this.siteBody.stop().css({'top':0}).animate({'top':-1160},1800);
					this.sitePreferential.stop().css({'left':150,'opacity':0});
				};
				break;
			case 1:
				this.updateNum.removeClass('action');
				if(this.css3check){
					clearTimeout(this.timer2);
					clearTimeout(this.timer3);
					this.sitePreferential.removeClass('action');
					this.timer2=setTimeout(function(){
						e$.sitePreferential.addClass('action');
					},100);
				}else{
					this.sitePreferential.stop().css({'left':150,'opacity':0}).animate({'left':-540,'opacity':1},500);
				};
				break;
			case 2:
				clearTimeout(this.timer3);
				this.updateNum.removeClass('action');
				if(this.css3check){
					this.sitePreferential.addClass('action');
				}else{
					this.sitePreferential.stop().css({'left':150,'opacity':0}).animate({'left':-540,'opacity':1},500);
				};
				this.timer3=setTimeout(function(){
					e$.updateNum.addClass('action');
				},100);
				break;
		}
	},
	fnTab:function(){
		new uiToggleGroup({group:'howtobuy_group',allClose:true,noOff:true,start:1});
	},
	fnBottom:function(){
		function uiScrFixSchFn(){
			new uiScrFix('scrFix','area_description',null,'scrFix','scrFixEnd');
		};
		if(window.addEventListener){
			window.addEventListener('scroll',uiScrFixSchFn,false);
		}else if(window.attachEvent){
			window.attachEvent('onscroll',uiScrFixSchFn);
		};
	}

};

//fn : ui스크롤 체크 (특정위치 도달 or 화면에 들어올때)
window.uiScrollFunc=function(o){
    this.init(o);
};
uiScrollFunc.prototype = {
    init : function(o){
        this.cacheElement(o);
        this.setEvent();
    },
    cacheElement : function(o){
        this.floating = jQuery(o.tg);
        this.floatingH = this.floating.outerHeight();
        this.startElement = jQuery(o.startElement);
        this.activeClass = 'active';
        this.eventName = o.tg;
        //option
        this.type = o.type || 'normal'; //normal, screenview
        this.plusPos = o.plusPos || 0;
        this.eventRemove = o.eventRemove;
        this.oldie = o.oldIE;
    },
    setEvent : function(o){
        var e$ = this;
        if (e$.oldie && oldIE8 || e$.oldie && oldIE9) {
            e$.floating.addClass('oldie');
        } else {
            e$.fnScroll();
        }
    },
    fnScroll : function(){
        var e$ = this;
        jQuery(window).on('scroll.' + e$.eventName,function(){
            var winH = jQuery(window).outerHeight();
            var scr = jQuery(this).scrollTop();
            var scrStart = e$.startElement.offset().top + e$.plusPos;
            var scrCheck = e$.type === 'screenview' ? scrStart - e$.plusPos >= scr && scr >= scrStart - winH : scr >= scrStart;
            if (scrCheck){
                e$.floating.addClass(e$.activeClass);
                if (e$.eventRemove) e$.fnEventRemove();
            } else {
                e$.floating.removeClass(e$.activeClass);
            }
        }).trigger('scroll' + e$.eventName);
    },
    fnEventRemove : function(){
        var e$ = this;
        jQuery(window).off('scroll.' + e$.eventName);
    }
}

//fn : 더보기
uiLineShort={
    init : function(tg, tgT ,tgB ,height ,txt){ //타겟, 텍스트, 버튼, 높이
        var tgBtxt = tgB.find('.t');
        tg.removeClass('js');
        if (tgT.height() < height){
            tgB.hide();
        } else {
            tgB.show().off('click').on('click',function(e){
                var chk = jQuery(this).hasClass('view');
                uiToggle.init(tgT,tgB);
				tgBtxt.text(chk ? txt[0] : txt[1])
                e.preventDefault();
            });
        };
        tg.addClass('js');
    }
};


// 엔카보증 (딜러용) 서비스 안내페이지
var dealerEwGuide =  {
	init : function () {
		this.fnRolling();
		this.fnReview();
		this.fnFixedBottom();
		this.fnChatting();
	},
	fnRolling : function () {
		new uiSlide({
			obj:'.slide_introduce',
			speed:1000,
			auto:3000,
			first:1,
			mouseswipe:true,
			showNavi:true,
			showArrow:true,
			hover:true
		});
		jQuery(".slide_introduce").find('.showArrow>a,.showNavi>a>span').addClass('spr_mdew');
	},
	fnReview:function(){
		new uiSlide({
			obj:'.slide_review',
			speed:500,
			first:1,
			mouseswipe:true,
			showNavi: '.mdew_guide_wrap .area_review .uitab li',
			showArrow:true
		});
		jQuery(".slide_review").find('.showArrow>a,.showNavi>a>span').addClass('spr_mdew');
	},
	fnFixedBottom:function(){
		function uiScrFixSchFn(){
			new uiScrFix('scrFix','scrFixStart',null,'scrFix','scrFixEnd');
		};
		if(window.addEventListener){
			window.addEventListener('scroll',uiScrFixSchFn,false);
		}else if(window.attachEvent){
			window.attachEvent('onscroll',uiScrFixSchFn);
		};
	},
	fnChatting:function(){
		jQuery(window).bind('scroll.ewGuide',function(){
			jQuery('.wrap_chat').each(function () {
				var scrollTop = jQuery(window).scrollTop(),
					windowH = jQuery(window).height() / 2 - 140,
					viewPoint = jQuery(this).offset().top - jQuery(window).height()+windowH;
				if(scrollTop>viewPoint){
					jQuery(this).addClass('on');
				}
			});
			if(jQuery('.wrap_chat:not(.on)').length === 0){
				jQuery(window).unbind('scroll.ewGuide');
			}
		});
	}
}

// 법인용시세 차량 최근검색
var numInputEvnt = {
	init : function () {
		this.cacheElement();
		this.fnClose();
		this.fnOpen();
		this.fnValue();
	},
	cacheElement : function() {
		var e$ = this;
		e$.body = jQuery('body');
		e$.schInp = jQuery('.sch_latest_wrap .inputtxt');
		e$.numBox = jQuery('.prsch_input_wrap .num_input_box');
		e$.latestBox = jQuery('.prsch_input_wrap .latest_box');
		e$.latestList = e$.latestBox.find('li');
		e$.btnSch = jQuery(".prsch_input_wrap .num_input_box .btn_action");
		e$.boxH = e$.latestBox.innerHeight();
		e$.boxT = e$.boxH / 4;
	},
	fnOpen : function () {
		var e$ = this;
		e$.body.on('click',function(e){
			if (jQuery(e.target).is(e$.schInp)) {
				e$.numBox.css('top',-e$.boxT);
				e$.latestBox.addClass('open');
			}
		});
		e$.schInp.on('keyup',function () {
				e$.numBox.css('top',-e$.boxT);
				e$.latestBox.addClass('open');
		});
	},
	fnClose : function () {
		var e$ = this;
		e$.body.on('click',function(){
			if (e$.latestBox.hasClass('open')) {
				e$.numBox.css('top',0);
				e$.latestBox.removeClass('open');
			}
		});
		e$.btnSch.on("keyup",function () {
			e$.numBox.css('top',0);
			e$.latestBox.removeClass('open');
		});
	},
	fnValue : function() {
		var e$ = this;
		e$.latestList.on('click',function () {
			var txt = jQuery(this).text();
			jQuery('.inputtxt').val(txt);
		});
	}
}
