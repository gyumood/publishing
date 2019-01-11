<%@ page contentType="text/html; charset=EUC-KR"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="euc-kr" />
<meta name="viewport" content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width" />
<meta name="format-detection" content="telephone=no, address=no, email=no">
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
<body class="bs bs_untact_i10">

<!-- wrap// -->
<div id="wrap">

	<!-- header//-->
	<jsp:include page="/html/_header.jsp?pageType=popup&pageBtn=close&fixed=true&pageBtnLayer=btn_endPwEdit&pageTitle=비밀번호 변경하기" flush="true"></jsp:include>
	<!-- //header -->	<!-- * x(닫기)버튼 클릭시, 'btn_endPwEdit'팝업창 호출 -->

	<!-- container//-->
	<div id="container">
		<div class="cont_process">
			<div class="inputPw_area">
				<p class="tit_inputPw">변경할 비밀번호를 입력해주세요.</p>
				<div class="input_inputPw alert"><!-- alert : 알럿 문구(noti_txt) 노출 -->
					<!-- 비밀번호 -->
					<div class="uiinput_txt">
						<label for="in_password" class="tit_input">비밀번호</label>
						<input type="text" id="in_password">
					</div>
					<!-- 비밀번호 확인 -->
					<div class="uiinput_txt">
						<label for="in_password" class="tit_input">비밀번호 확인</label>
						<input type="text" id="in_password">
					</div>
					<p class="add_txt">8~16자, 대/소문자, 숫자, 특수문자 포함</p>
					<p class="noti_txt">비밀번호를 입력해주세요.</p>
					<p class="noti_txt">비밀번호 확인이 비밀번호와 일치하지 않습니다.</p>
				</div>
			</div>
			<div class="uifix_bottom"><!-- [규_20181221] 클래스명 변경- -->
				<!--비밀번호 변경 완료 메세지-->
				<button type="button" onclick="uiAlert.init({txt:'비밀번호가 변경되었습니다.'});return false;" class="uibtn uibtn_red">확인</button>
			</div>
		</div>

		<!-- 레이어 팝업 -->
		<!-- [case : '상단 x버튼' 클릭시, 비밀번호 변경을 종료하시겠습니까?] -->
		<div class="uilayer btn_endPwEdit bsLayer">	<!--btn_endPwEdit-->
			<div class="uilayer_wrap">
				<div class="uilayer_box">
					<p class="txt_main">비밀번호 변경을 종료하시겠습니까?</p>
					<div class="btn_set uialign_flex">
						<div class="uialign_item"><button type="button" class="uibtn uibtn_white uibtn_size_h45" ui-btn-action="close">취소</button></div>
						<div class="uialign_item"><a href="#" class="uibtn uibtn_red uibtn_size_h45">확인</a></div>
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