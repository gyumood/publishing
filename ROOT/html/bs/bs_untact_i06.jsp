<%@ page contentType="text/html; charset=EUC-KR"%>
<%@ taglib uri="http://java.sun.com/jstl/core_rt" prefix="c"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="euc-kr" />
<meta name="viewport" content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width" />
<link rel="stylesheet" type="text/css" href="/css/module_common.css"/>
<link rel="stylesheet" type="text/css" href="/css/bs.css"/>
<title>엔카 중고차론 : SK엔카</title>
<meta name="description" content="SK엔카에서 진행하는 중고차 할부! 신청만 하시면 낮은 금리를 찾아드립니다."/>
<meta property="og:type" content="website"/>
<meta property="og:title" content="[SK엔카 엔카 중고차론]"/>
<meta property="og:description" content="SK엔카에서 진행하는 중고차 할부! 신청만 하시면 낮은 금리를 찾아드립니다."/>
<meta property="og:image" content="http://www.encar.com/images/common/icon/brand_logo_400x400_v2.jpg"/><!--//대표 이미지-->
<meta property="og:url" content="http://m.encar.com/bs/loanconsult.dom"/>
<link rel="canonical" href="http://m.encar.com/bs/loanconsult.dom"/>
<script type="text/javascript" src="/js/jquery-1.11.2.min.js"></script><!-- jquery version upgrade -->
<script type="text/javascript" src="/js/iscroll.js"></script><!-- iscroll library js -->
<script type="text/javascript" src="/js/flipsnap.js"></script><!-- flipsnap library js -->
<script type="text/javascript" src="/js/ui.js"></script><!-- 퍼블리싱용 js -->
</head>
<body class="bs bs_untact_i06">

<!-- wrap// -->
<div id="wrap">

	<!-- header//-->
	<jsp:include page="/html/_header.jsp?pageType=popup&pageBtn=close&fixed=true&pageBtnLayer=btn_endUntact&pageTitle=한도조회" flush="true"></jsp:include>
	<!-- //header -->	<!-- x(닫기)버튼 클릭시, 'btn_endUntact'팝업창 호출 -->

	<!-- container//-->
	<div id="container">
		<div class="cont_process">

			<ul class="bar_area">
				<li class="step on"><p>본인인증</p></li>
				<li class="step on"><p>정보입력</p></li>
				<li class="step on"><p>동의</p></li>
				<li class="step on"><p>한도조회결과</p></li>
			</ul>

			<!-- [case : 결과 페이지] // -->
			<div class="result_area">

				<div class="result">
					<h3 class="tit_result">김*진 님 대출한도조회 결과</h3>

					<c:choose>
						<c:when test="${param.result == 'resultX'}">
							<!-- [case: 대출한도조회 결과 없는 경우(부결)] -->
							<div class="result_x">
								<c:choose>
									<c:when test="${param.resultX == 'otherCase'}">
										<!-- 부결case1 -->
										<div class="resultX_case2">
											<p class="txt_cont_x">고객님께서는 신용상 이유로 SK엔카 중고차론의 은행권 상품 이용이 어렵습니다.<br>제2금융권 상품으로 한도조회를 원하시는 분은 02-754-9914로 연락 부탁드립니다.</p>
											<p class="txt_sub_x">(평일 오후 5시 이후 / 주말 (공휴일 포함) 신청건은 다음 영업일에 순차적으로 연락드립니다.)</p>
										</div>
									</c:when>
									<c:otherwise>
										<!-- 부결case2 -->
										<div class="resultX_case1">
											<p class="txt_cont_x">고객님께서는 모바일상에서 한도조회가 어렵습니다. 엔카중고차론 담당자가 연락하여 추가 상담 드리겠습니다.</p>
											<p class="txt_sub_x">(평일 오후 5시 이후 / 주말 (공휴일 포함) 신청건은 다음 영업일에 순차적으로 연락드립니다.)</p>
										</div>
									</c:otherwise>
								</c:choose>
							</div>
						</c:when>
						<c:otherwise>
							<!-- [case: 대출한도조회 결과 있는 경우} -->
							<div class="result_o">
								<div class="result_view">
									<ul>
										<li class="list_max">
											<span class="tit_list">가능 대출한도</span>
											<span class="txt_list"><em>9,000</em>만원</span>
										</li>
										<li>
											<span class="tit_list">유효기간</span>
											<span class="txt_list">2018. 08. 31</span>
										</li>
										<li>
											<span class="tit_list">대출금리</span>
											<span class="txt_list">연 4.3%</span><!-- [규_20180108] 문구 변경 -->
										</li>
									</ul>
									<div class="txt_sub noti">
										<p>최저 연4.3%[(2019.1.2 현재, 기준금리 1.951%(금융채 6개월 변동) + 가산금리 2.749% - 부수거래 감면금리(최대 0.4%)]</p><!-- [규_20180108] 문구 변경 -->
										<!-- [규_20180108] 문구 제거 -->
									</div>
									<div class="txt_sub">
										<p>상기 대출금리는 기준일 현재의 적용금리이며, 기준금리(금융채 6개월) 변동시 금리가 변경될 수 있습니다.</p>
										<p>실제 대출금액은 구매예정 차량의 시세에 따라 변경 될 수 있으며, 필요 서류 접수 후에 최종 승인여부를 알 수 있습니다.</p>
									</div>
								</div>
							</div>
						</c:otherwise>
					</c:choose>

					<c:choose>
						<c:when test="${param.carView == 'lately'}">
							<!-- [case: 최근 본 차량 있을 경우]  -->
							<div class="lately_carView">
								<h4 class="tit_carView">최근 본 차량 월납입금 예시</h4>

								<!-- 최근 본 차량(slide) -->
								<div class="area_slide">
									<div class="itemSlideWrap slide_recent uiSlideRecent">
										<div class="itemArea">
											<div class="selet_monthly">
												<div class="select_wrap">
													<a href="javascript:uiPage.init({obj:'.uipage_selectmonth'});">
														<span class="txt_monthly">할부기간<em class="uiTxtMonth">36개월</em></span>
													</a>
												</div>
											</div>
											<div class="itemRoll">
												<div class="itemScene">
													<div href="#" class="recent_item">
														<input type="hidden" id="rgsid" value="123124" />
														<span class="thumb_price">
														<img src="/images/bs/@sample_thm_car.png" class="thumb_img" alt="#">
													</span>
														<div class="carDetail">
															<p class="carName">현대 LF 쏘나타 하이브리드</p>
															<p class="carPrice"><span class="num">2,100</span><em>만원</em></p>
															<p class="result_calc carMonth">월 납입금 <span class="price_calc uiNumbercount uiPriceCalc">0</span>원</p>
														</div>
													</div>
												</div>
												<div class="itemScene">
													<div href="#" class="recent_item">
														<input type="hidden" id="rgsid" value="123124" />
														<span class="thumb_price">
														<img src="/images/bs/@sample_thm_car.png" class="thumb_img" alt="#">
													</span>
														<div class="carDetail">
															<p class="carName">현대 LF 쏘나타 하이브리드</p>
															<p class="carPrice"><span class="num">2,600</span><em>만원</em></p>
															<p class="result_calc carMonth">월 납입금 <span class="price_calc uiNumbercount uiPriceCalc">0</span>원</p>
														</div>
													</div>
												</div>
												<div class="itemScene">
													<div href="#" class="recent_item">
														<input type="hidden" id="rgsid" value="123124" />
														<span class="thumb_price">
														<img src="/images/bs/@sample_thm_car.png" class="thumb_img" alt="#">
													</span>
														<div class="carDetail">
															<p class="carName">현대 LF 쏘나타 하이브리드</p>
															<p class="carPrice"><span class="num">3,000</span><em>만원</em></p>
															<p class="result_calc carMonth">월 납입금 <span class="price_calc uiNumbercount uiPriceCalc">0</span>원</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</c:when>
					</c:choose>
				</div>

				<div class="uifix_bottom">
					<c:choose>
						<c:when test="${param.result == 'resultX'}">
							<!-- 대출한도조회 결과 없는 경우(부결case) -->
							<a href="#" class="uibtn uibtn_red uibtn_shadow">중고차론 홈으로 가기</a>
						</c:when>
						<c:otherwise>
							<a href="#" onclick="uiLayer.init({obj:'.confirm'});return false;" class="uibtn uibtn_red uibtn_shadow">대출 신청하기</a>
						</c:otherwise>
					</c:choose>
				</div>
			</div>
			<!-- // [case : 결과 페이지] -->

		</div>

		<!-- 레이어 팝업 -->
		<!-- [case : '상단 x버튼' 클릭시, 한도조회를 종료하시겠습니까?] -->
		<div class="uilayer btn_endUntact bsLayer">	<!--btn_endUntact-->
			<div class="uilayer_wrap">
				<div class="uilayer_box">
					<p class="txt_main">한도조회를 종료하시겠습니까?</p>
					<div class="btn_set uialign_flex">
						<div class="uialign_item"><button type="button" class="uibtn uibtn_white uibtn_size_h45" ui-btn-action="close">취소</button></div>
						<div class="uialign_item"><a href="https://m.encar.com/bs/loanconsult.do?WT.hit=LoanConsult_mWebGnb" class="uibtn uibtn_red uibtn_size_h45">확인</a></div>
					</div>
				</div>
			</div>
		</div>

		<!-- 레이어 팝업 -->
		<div class="uilayer confirm bsLayer">
			<div class="uilayer_wrap">
				<div class="uilayer_box">
					<p class="txt_main">대출을 신청하시겠습니까?</p>
					<div class="btn_set uialign_flex">
						<div class="uialign_item"><button type="button" class="uibtn uibtn_red uibtn_size_h45" ui-btn-action="close">확인</button></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- //container -->

</div>
<!-- //wrap -->
<div class="uipage uipage_selectmonth">
	<section>
		<div class="uipage_header">
			<header>
				<h1>할부 개월수</h1>
				<button type="button" class="area_left uibtnico_back" ui-btn-action="back"><span class="blind">뒤로가기</span></button>
			</header>
		</div>
		<div class="uipage_container">
			<ul class="list_selectopt">
				<li><a href="#" class="link_opt uiBtnOpt">24개월</a></li>
				<li><a href="#" class="link_opt uiBtnOpt">36개월</a></li>
				<li><a href="#" class="link_opt uiBtnOpt">48개월</a></li>
			</ul>
		</div>
	</section>
</div>
<script>
	// 최근 본 차량 슬라이드
    loanUI.init(function setEvent(){
        $(document).on({
            'calculate': function(e){
                var target = $(e.target);
                if(target.hasClass('uiPriceCalc') && target.parents('.itemScene.on').length){
                    var price = state.price * 10000,
                        month = state.month,
                        ratio = 0.039;

                    //대출원금 × 이자율 ÷ 12 × (1 + 이자율 ÷ 12)^기간 ÷ ((1 + 이자율 ÷ 12)^기간 -1)
                    var monthly = Math.round(price * (ratio / 12) * Math.pow((1 + ratio / 12), month) / (Math.pow((1 + ratio / 12), month) - 1));

                    var attr = comma(monthly).split('').join('/');
                    target.attr('data-count', attr);
                    UInumbercount.init(300);
                }
            }
        });
    });
    /*if(target.parents('.itemScene.on').length){
		alert(111);
    }*/

</script>
</body>
</html>