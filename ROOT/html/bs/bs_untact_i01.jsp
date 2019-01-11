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
<body class="bs bs_untact_i01">

<!-- wrap// -->
<div id="wrap">

	<!-- header//-->	<!-- [규_20180928] header => include -->
	<jsp:include page="/html/_header.jsp?pageType=popup&pageBtn=close&fixed=true&pageBtnLayer=btn_endUntact&pageTitle=한도조회" flush="true"></jsp:include>
	<!-- //header -->	<!-- [규_20181019] x(닫기)버튼 클릭시, 'btn_endUntact'팝업창 호출 -->

	<!-- container//-->
	<div id="container">	<!-- [규_20180928] 컨텐츠 감싸는 'container'추가 -->
		<div class="cont_process">
			<ul class="bar_area">
				<li class="step on"><p>본인인증</p></li>
				<li class="step"><p>정보입력</p></li>
				<li class="step"><p>동의</p></li>
				<li class="step"><p>한도조회결과</p></li>
			</ul>
			<!-- 정보입력 영역 -->
			<div class="input_area">
				<div class="input_wrap">

					<!-- 이름 -->
					<!-- [규_20181024] input입력 모바일 가이드 적용 // -->
					<div class="uiinput_txt alert"><!-- alert : 알럿 문구(noti_txt) 노출 -->
						<label for="in_name" class="tit_input">이름</label><!-- [규_20181112] '이름'(성명x,실명x)으로 통일 -->
						<input type="text" id="in_name" placeholder="이름 입력" >
						<p class="noti_txt">이름을 확인해주세요.</p>
					</div>
					<!-- // input입력 모바일 가이드 적용 -->

					<!-- 주민번호 -->
					<div class="id_number alert"><!-- [규_20181024] alert : 알럿 문구(noti_txt) 노출 -->
						<div class="wrap">
							<label for="in_citizenNum" class="tit">주민번호</label>
							<input type="number" id="in_citizenNum">
							<em class="id_num_bar"></em>
							<input type="number">
						</div>
						<p class="add_txt">주민번호 뒷자리는 하나은행에서 제공하는 한도조회 서비스에 필요한것으로, SK엔카는 위 정보를 수집 또는 저장하지 않습니다.</p>
						<p class="noti_txt">주민번호를 확인해주세요.</p>
					</div>

					<!-- 통신사 선택 -->
					<div class="radio_area alert"><!-- [규_20181024] class변경 / alert:알럿 문구(noti_txt) 노출 -->
						<h2 class="tit">통신사 선택</h2>
						<div class="uialign_float">
							<span class="uialign_item uiinput_oblong">
								<input type="radio" id="tel1" name="tel_comp"><!-- [규_20181024] checked제거 -->
								<label for="tel1"><span class="td">SKT</span></label>
							</span>
							<span class="uialign_item uiinput_oblong">
								<input type="radio" id="tel2" name="tel_comp">
								<label for="tel2"><span class="td">KT</span></label>
							</span>
							<span class="uialign_item uiinput_oblong">
								<input type="radio" id="tel3" name="tel_comp">
								<label for="tel3"><span class="td">LGU+</span></label>
							</span>
							<span class="uialign_item uiinput_oblong">
								<input type="radio" id="tel4" name="tel_comp">
								<label for="tel4"><span class="td">SKT(알뜰폰)</span></label>
							</span>
							<span class="uialign_item uiinput_oblong">
								<input type="radio" id="tel5" name="tel_comp">
								<label for="tel5"><span class="td">KT(알뜰폰)</span></label>
							</span>
							<span class="uialign_item uiinput_oblong">
								<input type="radio" id="tel6" name="tel_comp">
								<label for="tel6"><span class="td">LGU+(알뜰폰)</span></label>
							</span>
						</div>
						<p class="noti_txt">통신사를 확인해주세요.</p>
					</div>

					<!-- 휴대전화번호 -->
					<!-- [규_20181024] input입력 모바일 가이드 적용 // -->
					<div class="uiinput_txt alert"><!-- alert : 알럿 문구(noti_txt) 노출 -->
						<label for="in_phone" class="tit_input">휴대전화번호</label>
						<input type="number" id="in_phone" placeholder="'-' 제외하고 숫자만 입력" >
						<p class="noti_txt">휴대전화번호를 확인해주세요</p>
					</div>
					<!-- // input입력 모바일 가이드 적용 -->

					<!-- 인증번호 -->
					<!-- [규_20181024] input입력 모바일 가이드 적용 // -->
					<div class="uiinput_txt alert"><!-- alert:알럿 문구(noti_txt) 노출 -->
						<label for="in_verifiCode" class="tit_input">인증번호</label>
						<input type="number" id="in_phone" placeholder="인증번호 입력" >
						<a class="request" onclick="uiLayer.init({obj:'.code_input'});return false;" href="#">인증번호 요청</a>		<!-- [case : 입력하여 주십시오 메세지] -->
						<!--<a class="request" onclick="uiLayer.init({obj:'.inform_wrong'});return false;" href="#">인증번호 요청</a>-->	<!-- [case : 입력한 정보가 일치하지 않습니다] -->
						<p class="noti_timer">남은 시간 : 02:57</p><!-- [규_20181024] '남은 시간'추가 -->
						<p class="noti_txt">인증번호를 확인해주세요.</p><!-- [규_20181112] 추가 -->
					</div>
					<!-- // input입력 모바일 가이드 적용 -->

				</div>
			</div>
			<!-- 약관 동의 영역 -->
			<div class="agreement_area">
				<div class="check_area alert"><!-- [규_20181024] class변경 / alert:알럿 문구(noti_txt) 노출 -->
					<div class="total_check">
						<span class="uiinput big">
						<input type="checkbox" id="chk3_1" name="">
						<label for="chk3_1">약관 전체동의</label>
					</span>
					</div>
					<div class="sub_check">
						<span class="uiinput">
							<input type="checkbox" id="chk1_1" name="">
							<label for="chk1_1">개인정보 수집이용</label>
							<a href="bs_untact_i01_pp1.jsp" class="view_pg"><em>약관보기</em></a><!-- [규_20181112] 약관 링크 연결-->
						</span>
						<span class="uiinput">
							<input type="checkbox" id="chk1_2" name="">
							<label for="chk1_2">개인정보 제3자 제공 동의</label>
							<a href="bs_untact_i01_pp2.jsp" class="view_pg"><em>약관보기</em></a><!-- [규_20181112] 약관 링크 연결-->
						</span>
						<span class="uiinput">
							<input type="checkbox" id="chk1_3" name="">
							<label for="chk1_3">이용약관 동의</label>
							<a href="bs_untact_i01_pp3.jsp" class="view_pg"><em>약관보기</em></a><!-- [규_20181112] 약관 링크 연결-->
						</span>
					</div>
					<p class="noti_txt">약관에 동의해주세요.</p>	<!-- [case : 항목 미입력 후 '다음'버튼 클릭 시 노출] -->
				</div>
				<!-- [규_20181019] 버튼영역 수정(class,div구조 등) // -->
				<div class="btn_area alert"><!-- [규_20181024] alert : 알럿 문구(noti_txt) 노출 -->
					<p class="noti_txt">입력항목을 확인해주세요.</p>	<!-- [case : 항목 미입력 후 '다음'버튼 클릭 시 노출] -->
					<a href="#" class="uibtn uibtn_red" onclick="uiAlert.init({txt:'휴대전화 본인인증이 완료되었습니다.'});return false;">다음</a>
					<!-- [레이어팝업] 3가지 case -->
					<!--<a href="#" class="uibtn uibtn_red" onclick="uiLayer.init({obj:'.code_wrong'});return false;">다음</a>-->	<!-- [case : 인증번호 불일치 시] -->
					<!--<a href="#" class="uibtn uibtn_red" onclick="uiLayer.init({obj:'.time_over'});return false;">다음</a>-->	<!-- [case : 인증번호 3분 안에 입력X 시] -->
					<!--<a href="#" class="uibtn uibtn_red" onclick="uiLayer.init({obj:'.history_already'});return false;">다음</a>	-->		<!-- [case : 한도조회를 이미 했던 고객] -->
				</div>
				<!-- // 버튼영역 수정 -->
			</div>
		</div>

		<!-- 레이어 팝업 --><!--[규_20181019]추가-->
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
		<!-- [case : '인증번호 요청' 클릭시, 입력하여 주십시오 메세지] -->
		<div class="uilayer code_input bsLayer"><!-- [규_20181112] bsLayer 추가 -->
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
		<!-- [case : 입력한 정보가 일치하지 않습니다.] -->
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
		<!-- [case : 인증번호가 일치하지 않습니다.] -->
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
		<!-- [case : 입력시간이 초과하였습니다.] -->
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
		<!-- [case : 한도조회 이력이 있습니다.] -->
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