<%@ page contentType="text/html; charset=EUC-KR"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="euc-kr" />
<meta name="viewport" content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width" />
<link rel="stylesheet" type="text/css" href="/css/common.css"/>
<link rel="stylesheet" type="text/css" href="/css/bs.css"/>
<title>[SK엔카 엔카 중고차론 신청]</title>
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
			<h2 class="subject"><a href="#">엔카 중고차론 신청</a></h2>
			<a class="btnBack" href="#"><span class="blind">뒤로가기</span></a>
		</header>
	</div>
	<!-- //header -->

	<!-- container//-->
	<div id="container">
		<section class="loan_apply">
			<h1 class="blind">엔카 중고차론 신청하기</h1>
			<p class="explan">“중고차 할부에 대한 상담 및 진행을 도와 드립니다.”</p>
			<div class="apply_form">
				<h2 class="blind">신청자정보</h2>
				<div class="line"><input type="text" placeholder="이름" class="cmm_input_type1" /></div>
				<!-- 2017/04/28 [허] 엔카중고차론 신청페이지 수정(전화번호 입력란 수정) -->
				<div class="line">
					<div class="phoneArea">
						<span class="cmm_sel_type1">
							<select title="휴대폰 앞번호">
								<option value="" selected="selected">010</option>
							</select>
						</span>
						<input type="tel" placeholder="숫자만 입력해주세요" class="cmm_input_type1" />
					</div>
				</div>
				<div class="line"><input type="tel" placeholder="생년월일 (예. 19800101)" class="cmm_input_type1" /></div>
				<div class="line">
					<span class="cmm_sel_type1">
						<select title="재직유무">
							<option value="" selected="selected">재직유무</option>
						</select>
					</span>
				</div>
				<div class="line">
					<span class="cmm_sel_type1">
						<select title="거주지역">
							<option value="" selected="selected">거주지역</option>
						</select>
					</span>
				</div>
				<div class="line">
					<div class="check">
						<strong>대출 보유현황 (선택)</strong>
						<span class="chk"><input type="checkbox" id="i_sel1" /> <label for="i_sel1">담보대출</label></span>
						<span class="chk"><input type="checkbox" id="i_sel2" /> <label for="i_sel2">신용대출</label></span>
						<span class="chk"><input type="checkbox" id="i_sel3" /> <label for="i_sel3">카드론</label></span>
						<span class="chk"><input type="checkbox" id="i_sel4" /> <label for="i_sel4">현금서비스</label></span>
						<span class="chk"><input type="checkbox" id="i_sel5" /> <label for="i_sel5">기타</label></span>
					</div
				</div>
				<div class="line"><input type="text" placeholder="구매 차량명 (예.르노삼성 뉴 SM3)" class="cmm_input_type1" /></div>
				<div class="line price"><input type="tel" placeholder="대출 신청금액" class="cmm_input_type1" /> <span class="currency">만원</span></div>
			</div>
			<div class="text_chk">
				<h2 class="blind">약관동의</h2>
				<input type="checkbox" id="i_ck1" /> <label for="i_ck1">개인정보 수집 이용 및 제3자 제공에 동의합니다.</label>
				<!-- 2018/2/19 [문] : 개인정보처리 수정-->
				<div id="box_group" class="box_group">
					<p class="rule_tip">고객님께서는 아래 항목에 동의를 거부할 권리가 있습니다.<br> 단, 동의하지 않을 경우 대출 상담 및 신청이 불가능할 수 있음을 알려드립니다</p>
					<div class="box_unit">
						<div class="label_chk">
							<input type="checkbox" id="i_ck1-1" /> <label for="i_ck1-1">개인정보 수집 이용 동의</label>
						</div>
						<div id="i_ck1_text1" class="box_area">
							<div class="con">
								<dl>
									<dt class="blind">개인정보 수집 및 이용</dt>
									<dd>
										<strong>1. 수집 및 이용 목적</strong>
										<p>
											- 신청자의 대출 상담 및 신청 처리 <br/>
											- 상담신청 고객 대상 금융상품 추가 안내(유선,SMS)<br/>
										</p>
									</dd>
									<dd>
										<strong>2. 수집 및 이용되는 개인정보의 항목</strong>
									<p>
										- (필수)이름, 휴대전화번호, 생년월일, 재직유무, 거주지역, 구매차량명, 대출신청금액, 대출실행결과(실행대출금, 금리)<br>
										- (선택)대출보유현황
									</p>
									</dd>
									<dd>
										<strong>3. 보유 및 이용 기간</strong>
										<p><span class="txt_deco">상담신청일로부터 1년</span></p><!-- 18/07/24 [손] 개인정보 수정 : <span class="txt_deco"> 추가 -->
									</dd>
								</dl>
							</div>
						</div>
					</div>

					<div class="box_unit">
						<div class="label_chk">
							<input type="checkbox" id="i_ck1-2" /> <label for="i_ck1-2">개인정보 제3자 제공 동의</label>
						</div>
						<div id="i_ck1_text2" class="box_area">
							<div class="con">
								<dl>
									<dt class="blind">개인정보 제3자 제공 동의</dt>
									<dd>
										<strong>1. 개인정보를 제공 받는자</strong>
										<p><span class="txt_deco">효성캐피탈, 메리츠캐피탈, KDB캐피탈, 카피아오토플랜, 오릭스캐피탈, 하나은행, 부산은행, 현대캐피탈</span></p><!-- 18/07/24 [손] 개인정보 수정 : <span class="txt_deco"> 추가 -->
									</dd>
									<dd>
										<strong>2. 제공 목적</strong>
										<p>
											- <span class="txt_deco">신청자의 대출 상담 및 신청 처리</span> <br/><!-- 18/07/24 [손] 개인정보 수정 : <span class="txt_deco"> 추가 -->
										</p>
									</dd>
									<dd>
										<strong>3. 제공하는 개인정보 항목</strong>
										<p>
											- (필수)이름, 휴대전화번호, 생년월일, 재직유무, 거주지역, 구매차량명, 대출신청금액<br>
											- (선택)대출보유현황
										</p>
									</dd>
									<dd>
										<strong>4. 보유기간</strong>
										<p><span class="txt_deco">상담신청일로부터 1년</span></p><!-- 18/07/24 [손] 개인정보 수정 : <span class="txt_deco"> 추가 -->
									</dd>
								</dl>
							</div>
						</div>
					</div>
				</div>
				<!-- 2018/2/19 [문] : 개인정보처리 수정-->
			</div>
			<div class="cmm_btn_red2">
				<button type="button" class="func_close">상담신청</button>
			</div>
			<script type="text/javascript">
			//동의 박스 스크롤바
			jQuery(function (){ 
				new iScroll('i_ck1_text1', { hScrollbar: false, vScrollbar: true, hScroll: false, bounce:false});
				new iScroll('i_ck1_text2', { hScrollbar: false, vScrollbar: true, hScroll: false, bounce:false});
			});
			</script>
		</section>
	</div>	
	<!-- //container -->

</div>
<!-- //wrap -->

</body>
</html>