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
<body class="bs bs_untact_v01">

<!-- wrap// -->
<div id="wrap">

	<!-- header//-->
	<jsp:include page="/html/_header.jsp?pageType=popup&pageBtn=close&fixed=true&pageBtnLayer=btn_endUntact&pageTitle=한도조회" flush="true"></jsp:include>
	<!-- //header -->	<!-- [규_20181019] x(닫기)버튼 클릭시, 'btn_endUntact'팝업창 호출 -->

	<!-- container//-->
	<div id="container">	<!-- [규_20180928] 컨텐츠 감싸는 'container'추가 -->
		<div class="cont_untact">
			<div class="title_area">
				<h2>1분으로 알아보는 한도 조회</h2>
				<p class="add_txt">신용등급에는 영향을 미치지 않으니<br>안심하고 조회하세요!</p>
			</div>
			<div class="process_area">
				<div class="process_list">
					<p class="step">STEP 1</p>
					<p class="tit">본인인증</p>
				</div>
				<div class="process_list">
					<p class="step">STEP 2</p>
					<p class="tit">정보입력</p>
				</div>
				<div class="process_list">
					<p class="step">STEP 3</p>
					<p class="tit">동의</p>
				</div>
			</div>
			<div class="check_result">
				<p>이전에 한도조회한 이력이 있으신가요?</p>
				<a href="#" class="link_result">한도조회 결과 확인하기</a>
			</div>
			<div class="link_product"><a href="#">대출상품 안내</a></div><!-- [규_20181107] 추가 -->
			<!-- [규_20181019] 버튼영역 수정(class,div구조 등) // -->
			<div class="uifix_bottom"><!-- [규_20181221] 클래스명 변경- -->
				<a href="#" class="uibtn uibtn_red">시작하기</a>
			</div>
			<!-- // 버튼영역 수정 -->
		</div>

		<!-- 레이어 팝업 -->
		<!-- [case : '상단 x버튼' 클릭시, 한도조회를 종료하시겠습니까?] -->
		<div class="uilayer btn_endUntact bsLayer">	<!--btn_endUntact--><!--[규_20181019] 클래스명 변경-->
			<div class="uilayer_wrap">
				<div class="uilayer_box">
					<p class="txt_main">한도조회를 종료하시겠습니까?</p>
					<div class="btn_set uialign_flex">
						<div class="uialign_item"><button type="button" class="uibtn uibtn_white uibtn_size_h45" ui-btn-action="close">취소</button></div>
						<div class="uialign_item"><a href="https://m.encar.com/bs/loanconsult.do?WT.hit=LoanConsult_mWebGnb" class="uibtn uibtn_red uibtn_size_h45">확인</a></div><!--[규_20181019]중고차론 안내페이지로 링크 연결-->
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