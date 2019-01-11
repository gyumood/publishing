<%@ page contentType="text/html; charset=EUC-KR"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="euc-kr" />
<meta name="viewport" content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width" />
<link rel="stylesheet" type="text/css" href="/css/module_common.css"/>
<link rel="stylesheet" type="text/css" href="/css/bs.css"/>
<title>중고차론 상담신청 : SK엔카</title>
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
<body class="bs bs_loan_i06">

<!-- wrap// -->
<div id="wrap">

	<!-- header//-->
	<div class="backType_header">
		<header>
			<h1 class="blind"><a href="/html/index.jsp">SK encar</a></h1>
			<h2 class="subject"><a>중고차론 상담신청</a></h2>
		</header>
	</div>
	<!-- //header -->

	<!-- container//-->
	<div id="container">
		<div class="wrap_request">
			<span class="ico_request"></span>
			<h3>
				중고차론 상담 신청 약관에 동의하시면,<br>
				전문 상담원이 빠른 시간 내에 연락드립니다.
			</h3>
			<p class="info_append">
				고객님께서는 아래 항목에 동의를 거부할 권리가 있습니다.<br>
				단, 동의하지 않을 경우 대출 상담 및 신청이<br>
				불가능할 수 있음을 알려드립니다
			</p>
			<ul class="list_agree">
				<li>
					<div class="area_select">
						<span class="uiinput big">
							<input type="checkbox" id="agree_1" name="">
							<label for="agree_1">개인 정보 수집 이용 및 제3자 제공에 모두 동의합니다.</label>
						</span>
					</div>
				</li>
				<li>
					<div class="area_select">
						<span class="uiinput big">
							<input type="checkbox" id="agree_2" name="">
							<label for="agree_2">개인정보 수집 및 이용에 동의합니다.</label>
						</span>
					</div>
					<div id="i_ck1_text" class="txt_agreement">
						<div class="con">
							1. 수집 및 이용 목적<br>
							- 신청자의 대출 상담 및 신청 처리<br>
							- 상담신청 고객 대상 금융상품 추가 안내(유선,SMS)<br><br>

							2. 수집 및 이용되는 개인정보의 항목<br>
							- (필수)이름, 휴대전화번호<br><br>

							3. 보유 및 이용 기간<br>
							상담신청일로부터 1년<br><br>

							* 위 항목에 동의를 거부할 권리가 있습니다. 단, 위 항목에 동의하지 않을 경우 대출 상담 및 신청이 불가능할 수 있음을 알려드립니다.
						</div>
					</div>
				</li>
				<li>
					<div class="area_select">
						<span class="uiinput big">
							<input type="checkbox" id="agree_3" name="">
							<label for="agree_3">개인정보 제3자 제공에 동의합니다.</label>
						</span>
					</div>
					<div id="i_ck2_text" class="txt_agreement">
						<div class="con">
							1. 개인정보를 제공 받는자<br>
							효성캐피탈, 메리츠캐피탈, KDB캐피탈, 카피아오토플랜, 오릭스캐피탈, 하나은행, 부산은행, 현대캐피탈<br><br>

							2. 제공 목적<br>
							- 신청자의 대출 상담 및 신청 처리<br><br>

							3. 제공하는 개인정보 항목<br>
							- (필수)이름, 휴대전화번호<br><br>

							4. 보유기간<br>
							상담신청일로부터 1년<br><br>

							* 위 항목에 동의를 거부할 권리가 있습니다. 단, 위 항목에 동의하지 않을 경우 대출 상담 및 신청이 불가능할 수 있음을 알려드립니다.
						</div>
					</div>
				</li>
			</ul>
			<div class="start_btn">
				<a href="#" class="uibtn uibtn_red">상담 신청하기</a>
			</div>
		</div>
	</div>
	<!-- //container -->

</div>
<!-- //wrap -->
<script type="text/javascript">
    //동의 박스 스크롤바
	new iScroll('i_ck1_text', { hScrollbar: false, vScrollbar: true, hScroll: false, bounce:false});
	new iScroll('i_ck2_text', { hScrollbar: false, vScrollbar: true, hScroll: false, bounce:false});
    // 동의 전체선택
    jQuery('.list_agree #agree_1').click(function () {
        jQuery('.list_agree :checkbox').prop('checked', this.checked);
    });
</script>
</body>
</html>