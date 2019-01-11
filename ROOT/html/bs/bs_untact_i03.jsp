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
<body class="bs bs_untact_i03">

<!-- wrap// -->
<div id="wrap">

	<!-- header//-->	<!-- [규_20180928] header => include -->
	<jsp:include page="/html/_header.jsp?pageType=popup&pageBtn=close&fixed=true&pageBtnLayer=btn_endUntact&pageTitle=한도조회" flush="true"></jsp:include>
	<!-- //header -->	<!-- [규_20181019] x(닫기)버튼 클릭시, 'btn_endUntact'팝업창 호출 -->

	<!-- container//-->
	<div id="container">	<!-- [규_20180928] 컨텐츠 감싸는 'container'추가 -->
		<div class="cont_process inform_input">
			<ul class="bar_area">
				<li class="step on"><p>본인인증</p></li>
				<li class="step on"><p>정보입력</p></li>
				<li class="step"><p>동의</p></li>
				<li class="step"><p>한도조회결과</p></li>
			</ul>
			<!-- 정보입력 영역 -->
			<div class="input_area">
				<!-- 조회자 정보 -->
				<div class="information_area">
					<h2 class="tit">조회자 정보</h2>
					<ul class="list_wrap">
						<li class="list_inform">
							<dl>
								<dt>이름</dt>
								<dd>김연진</dd>
							</dl>
						</li>
						<li class="list_inform">
							<dl>
								<dt>주민번호</dt>
								<dd>820523-*******</dd>
							</dl>
						</li>
						<li class="list_inform">
							<dl>
								<dt>휴대전화번호</dt>
								<dd>010-6391-2185</dd>
							</dl>
						</li>
					</ul>
				</div>
				<!-- 정보입력 -->
				<div class="input_wrap">
					<!-- 재직유무 -->
					<div class="radio_area alert"><!-- [규_20181024] class변경 / alert:알럿 문구(noti_txt) 노출 -->
						<h2 class="tit">재직유무</h2>
						<div class="uialign_float">
							<span class="uialign_item uiinput_oblong">
								<input type="radio" id="insurance4_o" name="work"><!-- [규_20181024] checked제거 -->
								<label for="insurance4_o"><span class="td">직장인<br>(4대보험 O)</span></label>
							</span>
							<span class="uialign_item uiinput_oblong">
								<input type="radio" id="insurance4_x" name="work">
								<label for="insurance4_x"><span class="td">직장인<br>(4대보험 X)</span></label>
							</span>
							<span class="uialign_item uiinput_oblong">
								<input type="radio" id="personal" name="work">
								<label for="personal"><span class="td">개인사업자</span></label>
							</span>
							<span class="uialign_item uiinput_oblong">
								<input type="radio" id="corporate" name="work">
								<label for="corporate"><span class="td">법인사업자</span></label>
							</span>
							<span class="uialign_item uiinput_oblong">
								<input type="radio" id="etc_work" name="work">
								<label for="etc_work"><span class="td">기타</span></label>
							</span>
						</div>
						<p class="noti_txt">재직유무를 선택해주세요.</p>
					</div>
					<!-- 주택구분 -->
					<div class="radio_area alert"><!-- [규_20181024] class변경 / alert:알럿 문구(noti_txt) 노출 -->
						<h2 class="tit">주택구분</h2>
						<div class="uialign_float">
							<span class="uialign_item uiinput_oblong">
								<input type="radio" id="apt" name="home"><!-- [규_20181024] checked제거 -->
								<label for="apt"><span class="td">아파트</span></label>
							</span>
							<span class="uialign_item uiinput_oblong">
								<input type="radio" id="villa" name="home">
								<label for="villa"><span class="td">빌라</span></label>
							</span>
							<span class="uialign_item uiinput_oblong">
								<input type="radio" id="row" name="home">
								<label for="row"><span class="td">연립/다세대</span></label>
							</span>
							<span class="uialign_item uiinput_oblong">
								<input type="radio" id="officetel" name="home">
								<label for="officetel"><span class="td">오피스텔</span></label>
							</span>
							<span class="uialign_item uiinput_oblong">
								<input type="radio" id="single" name="home">
								<label for="single"><span class="td">단독</span></label>
							</span>
							<span class="uialign_item uiinput_oblong">
								<input type="radio" id="multiplex" name="home">
								<label for="multiplex"><span class="td">주상복합</span></label>
							</span>
							<span class="uialign_item uiinput_oblong">
								<input type="radio" id="etc_home" name="home">
								<label for="etc_home"><span class="td">기타</span></label>
							</span>
						</div>
						<p class="noti_txt">주택 구분을 선택해주세요.</p>
					</div>
					<!-- 주소 -->
					<!-- [규_20181024] input입력 모바일 가이드 적용 // -->
					<div class="uiinput_txt alert"><!-- alert : 알럿 문구(noti_txt) 노출 -->
						<label for="in_address" class="tit_input">주소</label>
						<input type="number" id="in_address" placeholder="우편번호">
						<a class="request" href="#">우편번호찾기</a>
						<input type="text" placeholder="주소">
						<input type="text" placeholder="상세주소 입력">
						<p class="noti_txt">주소를 확인해주세요.</p>
					</div>
					<!-- // input입력 모바일 가이드 적용 -->

					<!-- 이메일 -->
					<!-- [규_20181024] input입력 모바일 가이드 적용 // -->
					<div class="uiinput_txt alert"><!-- alert : 알럿 문구(noti_txt) 노출 -->
						<label for="in_email" class="tit_input">이메일</label>
						<input type="text" id="in_email" placeholder="이메일 입력" >
						<p class="add_txt">대출 관련 내용이 이메일로 발송될 수 있으니 정확하게 작성해주세요.</p>
						<p class="noti_txt">이메일을 확인해주세요.</p>
					</div>
					<!-- // input입력 모바일 가이드 적용 -->

				</div>
			</div>
			<!-- 정보입력(비밀번호) 영역 -->
			<div class="password_area alert"><!-- alert : 알럿 문구(noti_txt) 노출 -->
				<p class="request_txt">한도결과 확인 시 사용할 정보를 입력해주세요.</p>
				<!-- [규_20181024] input입력 모바일 가이드 적용 // -->
				<div class="uiinput_txt alert"><!-- alert : 알럿 문구(noti_txt) 노출 -->
					<label for="in_password" class="tit_input">비밀번호</label>
					<input type="text" id="in_password">
				</div>
				<!-- // input입력 모바일 가이드 적용 -->

				<!-- [규_20181024] input입력 모바일 가이드 적용 // -->
				<div class="uiinput_txt alert"><!-- alert : 알럿 문구(noti_txt) 노출 -->
					<label for="in_rePassword" class="tit_input">비밀번호 확인</label>
					<input type="text" id="in_rePassword">
					<p class="add_txt">8~16자, 대/소문자, 숫자, 특수문자 포함</p>
					<p class="noti_txt">비밀번호를 입력해주세요.</p>	<!-- [case : 항목 미입력 후 '다음'버튼 클릭 시 노출] -->
					<p class="noti_txt">비밀번호를 생성 규칙에 맞추어 입력해주세요.<br>(8~16자, 대/소문자, 숫자, 특수문자 포함)</p>	<!-- [case : 비밀번호를 생성 규칙에 어긋난 경우 '다음'버튼 클릭 시 노출] -->
					<p class="noti_txt">비밀번호 확인이 비밀번호와 일치하지 않습니다.</p>	<!-- [case : 비밀번호 확인이 비밀번호와 일치하지 않는 경우 '다음'버튼 클릭 시 노출] -->
				</div>
				<!-- // input입력 모바일 가이드 적용 -->

				<!-- [규_20181019] 버튼영역 수정(class,div구조 등) // -->
				<div class="btn_area">
					<p class="noti_txt">입력항목을 확인해주세요.</p>	<!-- [case : 한가지 항목이라도 미입력한 경우 '다음'버튼 클릭 시 노출] -->
					<a href="#" class="uibtn uibtn_red">다음</a>
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
	</div>
	<!-- //container -->

</div>
<!-- //wrap -->

</body>
</html>