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
<body class="bs bs_untact_i08">

<!-- wrap// -->
<div id="wrap">

	<!-- header//-->
	<jsp:include page="/html/_header.jsp?pageType=popup&pageBtn=back&fixed=true&pageTitle=한도조회 결과" flush="true"></jsp:include>
	<!-- //header -->	<!-- '이전'클릭시, 한도조안내 페이지로 돌아가기 -->

	<!-- container//-->
	<div id="container">
		<div class="cont_process">
			<div class="viewResult_area">
				<p class="tit_viewResult">한도조회 결과 확인을 위해 한도 조회시 입력했던 정보를 입력해주세요.</p>
				<div class="input_viewResult">
					<!-- 이름 -->
					<div class="uiinput_txt alert"><!-- alert : 알럿 문구(noti_txt) 노출 -->
						<label for="inpName" class="tit_input">이름</label>
						<input type="text" id="inpName" placeholder="이름 입력">
						<p class="noti_txt">이름을 확인해주세요.</p><!-- [규_20181207] 알럿 문구 추가 -->
					</div>
					<!-- 휴대전화번호 -->
					<div class="uiinput_txt alert"><!-- alert : 알럿 문구(noti_txt) 노출 -->
						<label for="inpPhone" class="tit_input">휴대전화번호</label>
						<input type="number" id="inpPhone" placeholder="'-' 제외하고 숫자만 입력">
						<p class="noti_txt">휴대전화번호을 확인해주세요.</p><!-- [규_20181207] 알럿 문구 추가 -->
					</div>
					<!-- 비밀번호 -->
					<div class="uiinput_txt alert"><!-- alert : 알럿 문구(noti_txt) 노출 -->
						<label for="inpPassword" class="tit_input">비밀번호</label>
						<input type="text" id="inpPassword" placeholder="비밀번호 입력" >
						<p class="add_txt">8~16자, 대/소문자, 숫자, 특수문자 포함</p>
						<p class="noti_txt">비밀번호를 확인해주세요.</p><!-- [규_20181207] 문구 변경 -->
						<a class="forget_pw" href="#" onclick="uiLayer.init({obj:'.btn_pwEdit'});return false;">비밀번호가 기억나지 않으세요?</a>
					</div>
					<p class="add_txt">결과조회 관련하여 어려움이 있다면 중고차론 고객센터로 문의주세요.<br>02-754-9914 (오전 10시 ~ 오후 6시)</p>
				</div>
				<div class="btn_area alert"><!-- alert : 알럿 문구(noti_txt) 노출 -->
					<p class="noti_txt">입력항목을 확인해주세요.</p><!-- 정보 미입력시 --><!-- [규_20181207] 알럿 문구 추가 -->
					<p class="noti_txt">한도조회 신청 정보가 없습니다.</p><!-- 매칭되는 이름, 휴대폰 번호 정보가 없을시 -->
					<button type="button" class="uibtn uibtn_red">한도조회 결과보기</button>
				</div>
			</div>
		</div>

		<!-- 레이어 팝업(본인 확인 후 비밀번호 변경) -->
		<div class="uilayer btn_pwEdit bsLayer">	<!--btn_pwEdit-->
			<div class="uilayer_wrap">
				<div class="uilayer_box">
					<p class="txt_main">본인 확인 후<br>비밀번호를 변경할 수 있습니다.<br>계속 진행하겠습니까?</p>
					<div class="btn_set uialign_flex">
						<div class="uialign_item"><button type="button" class="uibtn uibtn_white uibtn_size_h45" ui-btn-action="close">취소</button></div>
						<div class="uialign_item"><button type="button" class="uibtn uibtn_red uibtn_size_h45">확인</button></div>
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