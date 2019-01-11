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
<body class="bs bs_untact_i09">

<!-- wrap// -->
<div id="wrap">

	<!-- header//-->
	<jsp:include page="/html/_header.jsp?pageType=popup&pageBtn=close&fixed=true&pageBtnLayer=btn_endPwEdit&pageTitle=비밀번호 변경하기" flush="true"></jsp:include>	<!-- x(닫기)버튼 클릭시, 'btn_endPwEdit'팝업창 호출 -->
	<!-- //header -->

	<!-- container//-->
	<div id="container">
		<div class="cont_process pwEdit">	<!-- pwEdit : 비밀번호 변경 페이지 -->
			<!-- 정보입력 영역 -->
			<div class="input_area">
				<div class="input_wrap">
					<!-- 이름 -->
					<div class="uiinput_txt alert"><!-- alert : 알럿 문구(noti_txt) 노출 -->
						<label for="in_name" class="tit_input">이름</label>
						<input type="text" id="in_name" placeholder="이름 입력" >
						<p class="noti_txt">이름을 확인해주세요.</p>
					</div>
					<!-- 생년월일 -->
					<div class="uiinput_txt alert"><!-- alert : 알럿 문구(noti_txt) 노출 -->
						<label for="in_birth" class="tit_input">생년월일</label>
						<input type="tel" id="in_birth" placeholder="YYMMDD" maxlength="6" />
						<p class="noti_txt">생년월일을 확인해주세요.</p>
					</div>
					<!-- 성별 선택 -->
					<div class="radio_area alert"><!-- alert:알럿 문구(noti_txt) 노출 -->
						<h2 class="tit">성별</h2>
						<div class="uialign_float">
							<span class="uialign_item uiinput_oblong">
								<input type="radio" id="male" name="gender">
								<label for="male"><span class="td">남</span></label>
							</span>
							<span class="uialign_item uiinput_oblong">
								<input type="radio" id="female" name="gender">
								<label for="female"><span class="td">여</span></label>
							</span>
						</div>
						<p class="noti_txt">성별을 확인해주세요.</p>
					</div>
					<!-- 휴대전화번호 -->
					<div class="uiinput_txt alert"><!-- alert : 알럿 문구(noti_txt) 노출 -->
						<label for="in_phone" class="tit_input">휴대전화번호</label>
						<input type="tel" id="in_phone" placeholder="'-' 제외하고 숫자만 입력" >
						<p class="noti_txt">휴대전화번호를 확인해주세요</p>
					</div>
					<!-- 인증번호 -->
					<div class="uiinput_txt alert"><!-- alert : 알럿 문구(noti_txt) 노출 -->
						<label for="in_verifiCode" class="tit_input">인증번호</label>
						<input type="number" id="in_phone" placeholder="인증번호 입력" >
						<a class="request" onclick="uiLayer.init({obj:'.code_input'});return false;" href="#">인증번호 요청</a>		<!-- [case : 입력하여 주십시오 메세지] -->
						<!--<a class="request" onclick="uiLayer.init({obj:'.inform_wrong'});return false;" href="#">인증번호 요청</a>-->	<!-- [case : 입력한 정보가 일치하지 않습니다] -->
						<p class="noti_timer">남은 시간 : 02:57</p>
						<p class="noti_txt">인증번호를 확인해주세요.</p>
					</div>
				</div>
			</div>
			<div class="btn_area alert"><!-- alert : 알럿 문구(noti_txt) 노출 -->
				<p class="noti_txt">입력항목을 확인해주세요.</p>
				<a href="#" class="uibtn uibtn_red" onclick="uiAlert.init({txt:'휴대전화 본인인증이 완료되었습니다.'});return false;">다음</a>
				<!-- [레이어팝업] 3가지 case -->
				<!--<a href="#" class="uibtn uibtn_red uibtn_shadow" onclick="uiLayer.init({obj:'.code_wrong'});return false;">다음</a>-->	<!-- [case : 인증번호 불일치 시] -->
				<!--<a href="#" class="uibtn uibtn_red uibtn_shadow" onclick="uiLayer.init({obj:'.time_over'});return false;">다음</a>-->	<!-- [case : 인증번호 3분 안에 입력X 시] -->
				<!--<a href="#" class="uibtn uibtn_red uibtn_shadow" onclick="uiLayer.init({obj:'.history_already'});return false;">다음</a>	-->		<!-- [case : 한도조회를 이미 했던 고객] -->
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

		<!-- [case : '인증번호 요청' 클릭시, 입력하여 주십시오 메세지] -->
		<div class="uilayer code_input bsLayer">
			<div class="uilayer_wrap">
				<div class="uilayer_box">
					<p class="txt_main">고객님의 휴대전화에 수신된 인증번호를 입력하여 주십시오.</p><!-- [규_20181213] 마침표 추가 -->
					<p class="sub_txt">네트워크 상황에 따라 지연될 수 있습니다.</p>
					<div class="btn_set uialign_flex">
						<div class="uialign_item"><button type="button" class="uibtn uibtn_red uibtn_size_h45" ui-btn-action="close">확인</button></div>
					</div>
				</div>
			</div>
		</div>
		<!-- [case : '인증번호 요청' 클릭시, 입력한 정보가 일치하지 않습니다.] -->
		<div class="uilayer inform_wrong bsLayer">
			<div class="uilayer_wrap">
				<div class="uilayer_box">
					<p class="txt_main">입력한 정보가 일치하지 않습니다.<br>정보를 다시 한번 확인해주세요.</p>
					<div class="btn_set uialign_flex">
						<div class="uialign_item"><button type="button" class="uibtn uibtn_red uibtn_size_h45" ui-btn-action="close">확인</button></div>
					</div>
				</div>
			</div>
		</div>

		<!-- [case : '다음'클릭시, 인증번호가 일치하지 않습니다.] -->
		<div class="uilayer code_wrong bsLayer">
			<div class="uilayer_wrap">
				<div class="uilayer_box">
					<p class="txt_main">인증번호가 일치하지 않습니다.<br>인증번호 요청을 다시 한번 진행해주세요.</p>
					<div class="btn_set uialign_flex">
						<div class="uialign_item"><button type="button" class="uibtn uibtn_red uibtn_size_h45" ui-btn-action="close">확인</button></div>
					</div>
				</div>
			</div>
		</div>
		<!-- [case : '다음'클릭시, 입력시간이 초과하였습니다.] -->
		<div class="uilayer time_over bsLayer">
			<div class="uilayer_wrap">
				<div class="uilayer_box">
					<p class="txt_main">인증번호 입력시간이 초과하였습니다.<br>인증번호 요청을 다시 한번 진행해주세요.</p>
					<div class="btn_set uialign_flex">
						<div class="uialign_item"><button type="button" class="uibtn uibtn_red uibtn_size_h45" ui-btn-action="close">확인</button></div>
					</div>
				</div>
			</div>
		</div>
		<!-- [case : '다음'클릭시, 한도조회 이력이 있습니다.] -->
		<div class="uilayer history_already bsLayer">
			<div class="uilayer_wrap">
				<div class="uilayer_box">
					<p class="txt_main">이미 한도조회 이력이 있습니다. 이전에 조회했던 정보로 결과를 확인할 수 있습니다. 한도를 확인하겠습니까?</p><!-- [규_20181213] 띄어쓰기(있습니다. 이전에) -->
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

</body>
</html>