<%@ page contentType="text/html; charset=EUC-KR"%>
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
<body class="bs bs_untact_i04">

<!-- wrap// -->
<div id="wrap">

	<!-- header//-->
	<jsp:include page="/html/_header.jsp?pageType=popup&pageBtn=close&fixed=true&pageBtnLayer=btn_endUntact&pageTitle=한도조회" flush="true"></jsp:include>
	<!-- //header -->	<!-- x(닫기)버튼 클릭시, 'btn_endUntact'팝업창 호출 -->

	<!-- container//-->
	<div id="container">
		<div class="cont_process agreement">
			<ul class="bar_area">
				<li class="step on"><p>본인인증</p></li>
				<li class="step on"><p>정보입력</p></li>
				<li class="step on"><p>동의</p></li>
				<li class="step"><p>한도조회결과</p></li>
			</ul>
			<!-- 약관 동의 영역 -->
			<div class="agreement_area">
				<div class="check_area">
					<div class="total_check">
						<span class="uiinput big">
						<input type="checkbox" id="chk3_1" name="" checked="checked">
						<label for="chk3_1">전체 동의하기</label>
					</span>
					</div>
					<div class="sub_check">
						<span class="uiinput">
							<input type="checkbox" id="chk1_1" name="" checked="checked">
							<label for="chk1_1">개인(신용)정보 조회 동의서</label>
							<a href="bs_untact_i04_pp1.jsp" class="view_pg"><em>내용보기</em></a><!-- [규_20181107] 1. 문구수정(->내용보기) 2. 링크연결 변경된 페이지명 적용 : 이하 동일 -->
						</span>
						<span class="uiinput">
							<input type="checkbox" id="chk1_2" name="">
							<label for="chk1_2">필수 개인(신용)정보 수집 · 이용 및 제공 동의서 (가계여신 금융거래)</label>
							<a href="bs_untact_i04_pp2.jsp" class="view_pg"><em>내용보기</em></a>
						</span>
						<span class="uiinput">
							<input type="checkbox" id="chk1_3" name="">
							<label for="chk1_3">상품별 필수 개인(신용)정보 수집 · 이용 및 제공 동의서 (1Q 오토론용)</label>
							<a href="bs_untact_i04_pp3.jsp" class="view_pg"><em>내용보기</em></a>
						</span>
						<span class="uiinput">
							<input type="checkbox" id="chk1_4" name="">
							<label for="chk1_4">계약 체결 · 이행 등을위한 필수 동의서 (개인금융성 신용보험용)</label>
							<a href="bs_untact_i04_pp4.jsp" class="view_pg"><em>내용보기</em></a>
						</span>
						<span class="uiinput">
							<input type="checkbox" id="chk1_5" name="">
							<label for="chk1_5">고객정보 등록/변경 동의</label>
							<a href="bs_untact_i04_pp5.jsp" class="view_pg"><em>내용보기</em></a>
						</span>
						<span class="uiinput">
							<input type="checkbox" id="chk1_6" name="">
							<label for="chk1_6">대출 승인 및 실행(약정)관련 SMS 수신 동의</label>
							<a href="bs_untact_i04_pp5.jsp" class="view_pg"><em>내용보기</em></a>
						</span>
						<span class="uiinput">
							<input type="checkbox" id="chk1_7" name="">
							<label for="chk1_7">개인(신용)정보 수집 · 이용 · 제공 동의서 (1Q오토론용)</label>
							<a href="bs_untact_i04_pp7.jsp" class="view_pg"><em>내용보기</em></a>
						</span>
						<span class="uiinput">
							<input type="checkbox" id="chk1_8" name="">
							<label for="chk1_8">필수 개인(신용)정보 및 금융거래정보 제3자 제공 동의서</label>
							<a href="bs_untact_i04_pp8.jsp" class="view_pg"><em>내용보기</em></a>
						</span>
						<span class="uiinput">
							<input type="checkbox" id="chk1_9" name="">
							<label for="chk1_9">개인(신용)정보 수집 · 이용 및 제공 관련 고객 권리 안내문</label>
							<a href="bs_untact_i04_pp9.jsp" class="view_pg"><em>내용보기</em></a>
						</span>
						<span class="uiinput">
							<input type="checkbox" id="chk1_10" name="">
							<label for="chk1_10">필수 개인(신용)정보 및 금융거래정보 제3자 제공 동의서 (Open API 서비스용)</label>
							<a href="bs_untact_i04_pp10.jsp" class="view_pg"><em>내용보기</em></a>
						</span>
						<p class="add_txt">본인은 위 내용을 충분히 이해하고 확인하였으며, 신용정보법에 의거 개인신용정보의 조회, 제공 및 활용, 이용 등에 대한 동의를 위해 ARS 동의절차로 이동합니다.</p><!-- [규_20181107] 추가 -->
					</div>
				</div>
				<div class="uifix_bottom alert"><!-- alert : 알럿 문구(noti_txt) 노출 -->
					<p class="noti_txt">전체 동의해주세요.</p><!-- [규_20181107] 문구수정 -->
					<a href="#" class="uibtn uibtn_red uibtn_shadow">다음</a>
				</div>
			</div>
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
	</div>
	<!-- //container -->

</div>
<!-- //wrap -->

</body>
</html>