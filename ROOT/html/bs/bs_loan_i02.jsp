<%@ page contentType="text/html; charset=EUC-KR"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="euc-kr" />
<meta name="viewport" content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width" />
<link rel="stylesheet" type="text/css" href="/css/common.css"/>
<link rel="stylesheet" type="text/css" href="/css/bs.css"/>
<title>[SK엔카 엔카 중고차론 금융계산기]</title>
<script type="text/javascript" src="/js/jquery-1.11.2.min.js"></script><!-- jquery version upgrade -->
<script type="text/javascript" src="/js/iscroll.js"></script><!-- iscroll library js -->
<script type="text/javascript" src="/js/flipsnap.js"></script><!-- flipsnap library js -->
<script type="text/javascript" src="/js/ui.js"></script><!-- 퍼블리싱용 js -->
</head>
<body class="bs bs_loan_v01">
<!-- wrap// -->
<div id="wrap">

	<!-- header//-->
	<div class="backType_header3">
		<header>
			<h1 class="blind"><a href="/html/index.jsp">SK encar</a></h1>
			<h2 class="subject"><a href="#">금융 계산기</a></h2>
			<a class="btnBack" href="#"><span class="blind">뒤로가기</span></a>
		</header>
	</div>
	<!-- //header -->
	
	<!-- container//-->
	<div id="container">
		<div class="loan_calculator">
			<h1 class="blind">금융 계산기</h1>
			<section>
				<div class="apply_form">
					<h1 class="blind">대출 정보 입력</h1>
					<div class="top">
						<span class="price"><input type="tel" id="apply_price" onkeyup="this.setAttribute('value', this.value);" value="" /><label for="apply_price">대출원금 입력</label></span> <span class="txt" onclick="mLayerFc('.layer_loanpricealert');return false;">만원</span> <!-- 대출원금 4천만원 이상시 팝업레이어 : "만원" 텍스트에 확인용 onclick 있음. 개발시 onclick은 삭제바랍니다. -->
					</div>
					<h2 class="ttl">할부기간 선택</h2>
					<div class="chk_list chk_list_3">
						<ul>
							<li><input type="radio" name="g_period" id="g_period1" /><label for="g_period1">24개월</label></li>
							<li><input type="radio" name="g_period" id="g_period2" checked="checked" /><label for="g_period2">36개월</label></li>
							<li><input type="radio" name="g_period" id="g_period3" /><label for="g_period3">48개월</label></li>
						</ul>
					</div>
					<h2 class="ttl">신용 등급 선택</h2>
					<div class="chk_list chk_list_4">
						<ul>
							<li><input type="radio" name="g_rating" id="g_rating1" /><label for="g_rating1">1등급</label></li>
							<li><input type="radio" name="g_rating" id="g_rating2" /><label for="g_rating2">2등급</label></li>
							<li><input type="radio" name="g_rating" id="g_rating3" /><label for="g_rating3">3등급</label></li>
							<li><input type="radio" name="g_rating" id="g_rating4" checked="checked" /><label for="g_rating4">4등급</label></li>
							<li><input type="radio" name="g_rating" id="g_rating5" onclick="loanCalculatorGraph.fnAction([5.0,15.0]);" /><label for="g_rating5">5등급</label></li><!-- 테스트 onclick --> 
							<li><input type="radio" name="g_rating" id="g_rating6" onclick="loanCalculatorGraph.fnAction([3,20]);" /><label for="g_rating6">6등급</label></li><!-- 테스트 onclick -->
							<li><input type="radio" name="g_rating" id="g_rating7" onclick="loanCalculatorGraph.fnAction([5.1,10.2]);" /><label for="g_rating7">7등급</label></li><!-- 테스트 onclick -->
						</ul>
					</div>
				</div>
			</section>
			<section>
				<div class="result_form">
					<h1 class="blind">대출 조회 결과</h1>
					<div class="top">
						<h2 class="ttl">예상 월 납입금</h2>
						<span class="price"><span>350,216</span>원</span>
						<em>(금리 5.7% 적용 예시)</em>
					</div>
					<h2 class="ttl">추가 예상 금리 결과</h2>
					<div class="table">
						<ul>
							<li><span>엔카 예상 금리</span> <em class="po">5.7%</em></li>
							<li><span>타사 월 납입금</span> <em>0원</em></li>
							<li><span>타사 대비 절약 금액</span> <em class="po">0원</em></li>
						</ul>
					</div>
					<h2 class="ttl">금리 비교</h2>
					<div class="graph">
						<ul>
							<li class="c1"><span class="c">SK엔카</span> <em><span class="r">5.7</span>%</em></li>
							<li class="c2"><span class="c">외부 금융사</span> <em><span class="r">16.9</span>%</em></li>
						</ul>
					</div>
				</div>
				<div class="area_notice">
					<div class="btnactive">
						<a class="btn_active" href="bs_loan_i01.jsp"><span>엔카 중고차론 신청</span></a>
					</div>
					<div class="explan">
						<ul>
							<li><span class="po">·</span> 예상금리는 한도 승인 및 고객 조건에 따라, '상향' 또는 '하향' 되실 수 있습니다. (최저5.7%~)</li>
							<li><span class="po">·</span> 4000만원 이상 및 60개월 이상 진행건은 상담을 통해, 확인 가능합니다.</li>
							<li><span class="po">·</span> 고객님이 원하지 않으면, 절대 신용조회를 하지 않으니, 편하게 상담 가능합니다. “과도한 빚, 고통의 시작입니다.”</li>
						</ul>
					</div>
				</div>
			</section>
			<!-- cmm_layer : 엔카 중고차론 -->
			<div class="cmm_layer_popFix layer_loanpricealert">
				<div class="cmm_layer_popWrap">
					<div class="cmm_layer_bg" onclick="mLayerFc('.layer_loanpricealert');return false;"></div>
					<div class="cmm_layer_popCon">
						<!-- cmm_layer 내용 -->
						<div class="cmm_layer_loanpricealert">
							<h3>엔카 중고차론</h3>
							<p class="visual">중고차론 신청을 통해 <br>예상금리를 확인해 보세요</p>
							<p class="txt"><em>4,000만원 이상</em>의 대출은 신청을 통해 <br>확인 가능합니다.</p>
							<a class="btn_active" href="bs_loan_i01.jsp"><span>엔카 중고차론 신청</span></a>
							<a href="#" class="btnClose" onclick="mLayerFc('.layer_loanpricealert');return false;"><b>닫기</b></a>
						</div>	
						<!-- //cmm_layer 내용 -->
					</div>
				</div>
			</div>
		</div>
		<!-- //cmm_layer -->
		<script type="text/javascript">
		//fn : 금융 계산기 그래프 실행
		var loanCalculatorGraph={
			init : function(){
				this.cacheElement();
				this.fnScroll();
			},
			cacheElement : function(){
				this.windows=jQuery(window);
				this.tg=jQuery('.graph');
				this.active='active';
				this.setttimeGrp;
			},
			fnScroll : function(){
				var e$=this;
				e$.windows.on("load.eventGrp scroll.eventGrp resize.eventGrp",function(){
					e$.fnScrollChk();
				});
			},
			fnScrollChk : function(){
				var e$=this,
					scr=e$.windows.scrollTop(),
					idY=e$.tg.offset().top,
					idH=e$.tg.height(),
					first=idY-document.documentElement.clientHeight,
					last=idY+idH;
				if(scr>=first&&scr<=last&&!e$.tg.hasClass(e$.active)){
					e$.fnAction();
				};
			},
			fnAction : function(data){
				var e$=this,
					ck1=e$.tg.find('.c1 .r'),
					ck2=e$.tg.find('.c2 .r'),
					grp1=e$.tg.find('.c1 em'),
					grp2=e$.tg.find('.c2 em');
				//리셋
				e$.tg.removeClass(e$.active);
				e$.windows.off('.eventGrp'); //스크롤이벤트 제거
				grp1.add(grp2).css({height:0});
				if(data){
					//재설정시
					clearTimeout(e$.setttimeGrp);
					ck1.text(data[0]);
					ck2.text(data[1]);
					e$.fnScroll();
					e$.fnScrollChk();
				}else{
					//실행
					e$.setttimeGrp=setTimeout(function (){
						e$.tg.addClass(e$.active); //활성화
						grp1.css({height:(ck1.text()/ck2.text())*100+'%'});
						grp2.css({height:'100%'});
					}, 100);			
				};
			}
		}
		loanCalculatorGraph.init(); //그래프 실행
		//loanCalculatorGraph.fnAction([5.1,10.2]); //그래프 재설정시
		</script>
	</div>	
	<!-- //container -->

</div>
<!-- //wrap -->

</body>
</html>