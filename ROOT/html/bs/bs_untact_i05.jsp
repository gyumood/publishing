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
<body class="bs bs_untact_i05">

<!-- wrap// -->
<div id="wrap">

	<!-- header//-->
	<jsp:include page="/html/_header.jsp?pageType=popup&pageBtn=close&fixed=true&pageBtnLayer=btn_endUntact&pageTitle=한도조회" flush="true"></jsp:include>
	<!-- //header -->	<!-- x(닫기)버튼 클릭시, 'btn_endUntact'팝업창 호출 -->

	<!-- container//-->
	<div id="container">
		<div class="cont_process ars"><!-- [규_20181219] 조회중 화면 : 클래스'loading'추가 -->

			<ul class="bar_area">
				<li class="step on"><p>본인인증</p></li>
				<li class="step on"><p>정보입력</p></li>
				<li class="step on"><p>동의</p></li>
				<li class="step"><p>한도조회결과</p></li>
			</ul>

			<!-- [규_20181219] [case : 조회중] // -->
			<div class="cont_area">
				<strong class="txt_main">김*진 님 대출한도를 조회중입니다.</strong>
				<p class="txt_sub">통신 상황에 따라 최대 1분 정도의 시간이 소요될 수 있습니다.</p>
				<div class="ui_loading_listing"></div>	<!-- 로딩바 -->
			</div>
			<!-- // [case : 조회중] -->

			<!-- ARS동의 영역 -->
			<div class="ars_area">
				<div class="ars_request">
					<h3 class="tit_ars">ARS 동의</h3>
					<a class="link_arsPreview" href="#" onclick="uiLayer.init({obj:'.btn_arsPreview'});return false;">ARS멘트 미리보기</a><!-- [규_20181107] onclick추가 -->
					<p class="txt_detail">개인신용정보의 조회, 제공 및 활용, 이용 등에 대한 동의를 위해 ARS를 통한 동의 절차를 진행합니다.</p>
					<div class="input_phone">
						<label for="ars_phone">휴대전화번호</label>
						<input type="text" id="ars_phone" value="010-6391-****">
					</div>
					<div class="btn_area alert"><!-- [규_20181123] alert : 버튼 비활성화 & 알럿 문구(noti_txt) 노출 -->
						<!--기본 안내메세지-->
						<button type="button" onclick="uiLayer.init({obj:'.btn_arsOneM'});return false;" class="uibtn uibtn_redline uibtn_size_h45">ARS 동의요청</button><!-- [규_20181123] 'uibtn_size_h45'추가 -->
						<!--ARS채널부족-->
						<!--<button type="button" onclick="uiLayer.init({obj:'.btn_arsLater'});return false;" class="uibtn uibtn_redline uibtn_size_h45">ARS 동의요청</button>--><!-- [규_20181123] 'uibtn_size_h45'추가 -->
						<button type="button" class="uibtn uibtn_silverline uibtn_size_h45">ARS 동의요청</button><!-- [규_20181123] 비활성화 버튼 추가 -->
						<p class="noti_txt">전화 수신 거절 시 재요청까지 1분 정도 소요될 수 있습니다.</p><!-- [규_20181123] 알럿 문구 추가 -->
					</div>
				</div>
			</div>
			<div class="pw_area">
				<h4 class="tix_pw">개인비밀번호</h4>
				<div class="input_pw">	<!-- [case: input disabled ] finished 클래스 추가 -->
					<input type="number" class="num_pw"><!--input활성화-->
					<!--<input type="number" class="num_pw" value="66" disabled="disabled">--><!--input비활성화(입력완료)-->
				</div>
				<div class="txt_sub">
					<p>개인비밀번호를 3회 잘못 입력했을 경우, ARS 인증이 자동으로 종료됩니다.</p>
					<p>재시도를 원하시면 ARS 동의요청 버튼을 다시 눌러주시기 바랍니다.</p>
				</div>
				<div class="btn_area">
					<!--ARS 동의요청 버튼 클릭 안한 경우-->
					<button type="button" onclick="uiLayer.init({obj:'.btn_arsError3'});return false;" class="uibtn uibtn_red">다음</button>
					<!--인증번호 3회 입력 오류시-->
					<!--<button type="button" onclick="uiLayer.init({obj:'.btn_arsError1'});return false;" class="uibtn uibtn_red">확인</button>-->
					<!--응답 없을시-->
					<!--<button type="button" onclick="uiLayer.init({obj:'.btn_arsError2'});return false;" class="uibtn uibtn_red">확인</button>-->
					<!--인증번호 미입력시-->
					<!--<button type="button" onclick="uiLayer.init({obj:'.btn_arsError3'});return false;" class="uibtn uibtn_red">확인</button>-->
					<!--인증요청시간 초과시-->
					<!--<button type="button" onclick="uiLayer.init({obj:'.btn_arsError4'});return false;" class="uibtn uibtn_red">확인</button>-->
					<!--오류 발생시-->
					<!--<button type="button" onclick="uiLayer.init({obj:'.btn_arsError5'});return false;" class="uibtn uibtn_red">확인</button>-->

					<!--ARS 인증 완료 메세지-->
					<!--<button type="button" onclick="uiAlert.init({txt:'ARS 인증이 완료되었습니다.'});return false;" class="uibtn uibtn_red">확인</button>-->
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

		<!-- 레이어 팝업 ['ARS 동의요청' 버튼 클릭시 case1~3 ] // -->

		<!-- [규_20181107] [case : ARS멘트 미리보기 클릭시] 추가 -->
		<div class="uilayer btn_arsPreview bsLayer">	<!-- btn_ars -->
			<div class="uilayer_wrap">
				<div class="uilayer_box">
					<p class="txt_main">ARS멘트 미리보기</p>
					<p class="sub_txt">KEB 하나은행입니다. 손님께서는 현재 대출 신청을 위해 신용정보법 등에 의거 개인신용정보의 조회, 제공 및 활용, 이용 등에 대한 동의를 하려고 하십니다.<br><br>동의하시면 화면에서 확인하신 개인비밀번호 두 자리를 눌러주시기 바랍니다.</p>
					<div class="btn_set uialign_flex">
						<div class="uialign_item"><button type="button" class="uibtn uibtn_red uibtn_size_h45" ui-btn-action="close">확인</button></div>
					</div>
				</div>
			</div>
		</div>

		<!-- 레이어 팝업 ['ARS 동의요청' 버튼 클릭시 case1~3 ] // -->

		<!-- [case: 'ARS 동의요청' 버튼 클릭시 => 기본 안내메세지] -->
		<div class="uilayer btn_arsOneM bsLayer">	<!--btn_arsOneM-->
			<div class="uilayer_wrap">
				<div class="uilayer_box">
					<p class="txt_main">화면에 생성된 개인 비밀번호 두 자리를 기억한 후 ARS 동의 전화가 오면 입력해주세요.<br>아래 확인 버튼을 누르시면 1분 내로 ARS 전화를 드리겠습니다.</p><!-- [규_20181213] 띄어쓰기 -->
					<div class="btn_set uialign_flex">
						<div class="uialign_item"><button type="button" class="uibtn uibtn_red uibtn_size_h45" ui-btn-action="close">확인</button></div>
					</div>
				</div>
			</div>
		</div>
		<!-- [case: 'ARS 동의요청' 버튼 클릭시 => ARS채널부족] -->
		<div class="uilayer btn_arsLater bsLayer">	<!--btn_arsLater-->
			<div class="uilayer_wrap">
				<div class="uilayer_box">
					<p class="txt_main">현재 모든 ARS 채널이 이용중입니다.<br>잠시 후에 시도해주세요.</p>
					<div class="btn_set uialign_flex">
						<div class="uialign_item"><button type="button" class="uibtn uibtn_red uibtn_size_h45" ui-btn-action="close">확인</button></div>
					</div>
				</div>
			</div>
		</div>
		<!-- // 레이어 팝업 ['ARS 동의요청' 버튼 클릭시 case1~3 ] -->


		<!-- 레이어 팝업 ['확인' 버튼 클릭시 case1~6 ] // -->

		<!-- [case: 확인'버튼 클릭 => ARS 동의요청 버튼 클릭 안한 경우] -->
		<div class="uilayer btn_arsRequest bsLayer">	<!--btn_arsRequest-->
			<div class="uilayer_wrap">
				<div class="uilayer_box">
					<p class="txt_main">ARS 동의요청 버튼을 눌러<br>ARS 인증을 먼저 진행해주세요.</p>
					<div class="btn_set uialign_flex">
						<div class="uialign_item"><button type="button" class="uibtn uibtn_red uibtn_size_h45" ui-btn-action="close">확인</button></div>
					</div>
				</div>
			</div>
		</div>
		<!-- [case: 확인'버튼 클릭 => 인증번호 3회 입력 오류시] -->
		<div class="uilayer btn_arsError1 bsLayer">	<!--btn_arsError1-->
			<div class="uilayer_wrap">
				<div class="uilayer_box">
					<p class="txt_main">인증번호를 3회 잘못 입력하였습니다.<br>ARS 인증을 다시 진행해주시기 바랍니다.</p>
					<div class="btn_set uialign_flex">
						<div class="uialign_item"><button type="button" class="uibtn uibtn_red uibtn_size_h45" ui-btn-action="close">확인</button></div>
					</div>
				</div>
			</div>
		</div>
		<!-- [case: 확인'버튼 클릭 => 응답 없을시] -->
		<div class="uilayer btn_arsError2 bsLayer">	<!--btn_arsError2-->
			<div class="uilayer_wrap">
				<div class="uilayer_box">
					<p class="txt_main">고객님께서 선택하신 연락처로 ARS 연결시도하였으나 응답이 없어 연결을 중단합니다.<br>잠시 후 다시 시도해주시기 바랍니다.</p>
					<div class="btn_set uialign_flex">
						<div class="uialign_item"><button type="button" class="uibtn uibtn_red uibtn_size_h45" ui-btn-action="close">확인</button></div>
					</div>
				</div>
			</div>
		</div>
		<!-- [case: 확인'버튼 클릭 => 인증번호 미입력시] -->
		<div class="uilayer btn_arsError3 bsLayer">	<!--btn_arsError3-->
			<div class="uilayer_wrap">
				<div class="uilayer_box">
					<p class="txt_main">인증번호를 입력하지 않고 ARS 인증을 종료하셨습니다. ARS 인증을 다시 진행해주시기 바랍니다.</p>
					<div class="btn_set uialign_flex">
						<div class="uialign_item"><button type="button" class="uibtn uibtn_red uibtn_size_h45" ui-btn-action="close">확인</button></div>
					</div>
				</div>
			</div>
		</div>
		<!-- [case: 확인'버튼 클릭 => 인증요청시간 초과시] -->
		<div class="uilayer btn_arsError4 bsLayer">	<!--btn_arsError4-->
			<div class="uilayer_wrap">
				<div class="uilayer_box">
					<p class="txt_main">ARS 인증요청시간이 초과하였습니다.<br>ARS 인증을 다시 진행해주시기 바랍니다.</p>
					<div class="btn_set uialign_flex">
						<div class="uialign_item"><button type="button" class="uibtn uibtn_red uibtn_size_h45" ui-btn-action="close">확인</button></div>
					</div>
				</div>
			</div>
		</div>
		<!-- [case: 확인'버튼 클릭 => 오류 발생시] -->
		<div class="uilayer btn_arsError5 bsLayer">	<!--btn_arsError5-->
			<div class="uilayer_wrap">
				<div class="uilayer_box">
					<p class="txt_main">오류가 발생하여 ARS 인증을 완료하지 못하였습니다. ARS 인증을 다시 진행해주시기 바랍니다.</p>
					<div class="btn_set uialign_flex">
						<div class="uialign_item"><button type="button" class="uibtn uibtn_red uibtn_size_h45" ui-btn-action="close">확인</button></div>
					</div>
				</div>
			</div>
		</div>

		<!-- // 레이어 팝업 ['확인' 버튼 클릭시 case1~6 ] -->

	</div>
	<!-- //container -->

</div>
<!-- //wrap -->

</body>
</html>