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
<body class="bs bs_untact_v02">

<!-- wrap// -->
<div id="wrap">

	<!-- header//-->
	<jsp:include page="/html/_header.jsp?pageType=popup&pageBtn=close&fixed=true&pageTitle=대출상품 안내" flush="true"></jsp:include>
	<!-- //header -->	<!-- x(닫기)버튼 클릭시, 한도조회 안내페이지로 이동 -->

	<!-- container//-->
	<div id="container">
		<div class="cont_product">
			<!-- tab title --><!--비대면 한도조회 오픈시에는 비노출-->
			<div class="ui_tab_wrap">
				<ul class="ui_tab">
					<li class="active"><a href="#informTab_1" class="link_tab" onclick="tabMenuFn(this);return false;">대출상품 안내</a></li>
					<li><a href="#informTab_2" class="link_tab" onclick="tabMenuFn(this);return false;">필요증빙서류 안내</a></li>
				</ul>
			</div>

			<!-- tab content -->
			<!-- 대출상품 안내 -->
			<div class="tabContent active" id="informTab_1">
				<div class="txt_box">
					<h3>대출대상</h3>
					<!-- [규_20181213] 전체 문구 변경 // -->
					<em class="point">※ 구매 자동차 하자 등으로 인한 대출계약 취소가 불가능한 상품으로 대출 신청시 유의하시기 바랍니다.</em>
					<ul class="sub_list">
						<li>
							<h4>신차구입자금</h4>
							<p>신차 구매를 목적으로 자동차판매회사와 자동차매매계약을 체결한 만19세 이상이며, 3개월 이상 재직 및 소득증빙이 가능한 손님</p>
						</li>
						<li>
							<h4>신차대환자금</h4>
							<p>은행을 제외한 금융회사(캐피탈등)에서 신차구입 대출을 이용하고 있는 만19세 이상이며, 3개월 이상 재직 및 소득증빙이 가능한 손님</p>
						</li>
						<li>
							<h4>중고차구입자금</h4>
							<p>중고차 구매를 목적으로 자동차 매매업자와 자동차매매계약을 체결한 만 19세 이상이며, 3개월 이상 재직 및 소득증빙이 가능한 손님</p>
						</li>
						<li>
							<h4>중고차대환자금</h4>
							<p>은행을 제외한 금융회사(캐피탈 등)에서 중고차구입 대출을 이용하고 있는 만 19세 이상이며, 3개월 이상 재직 및 소득증빙이 가능한 손님</p>
						</li>
					</ul>
					<!-- // 전체 문구 변경 -->
				</div>
				<div class="txt_box">
					<h3>대상차량</h3>
					<!-- [규_20181213] 전체 문구 변경 // -->
					<ul class="sub_list">
						<li>
							<h4>신차구입자금</h4>
							<p>승용차(전차종), 승합차(전차종), 화물차(2.5톤 이하), 대형이륜차(260CC 초과), 캠핑용차량</p>
						</li>
						<li>
							<h4>신차대환자금/중고차구입자금/중고차대환자금</h4>
							<p>승용차(전차종), 승합차(전차종), 화물차(2.5톤 이하)</p>
						</li>
					</ul>
					<!-- // 전체 문구 변경 -->
				</div>
				<div class="txt_box">
					<h3>대출한도</h3>
					<ul>
						<li>최대 1억원 (단, 최저금액은 3백만원 이상)</li>
						<li>자동차판매가격 또는 자동차할부대출 상환액 이내</li><!-- [규_20181213] 문구 변경 -->
					</ul>
					<p class="noti">※ 손님의 신용등급 및 연소득 기준으로 산출된 서울보증보험의 보증한도내에서 대출가능합니다</p><!-- [규_20181213] 문구 ※ 추가 -->
				</div>
				<div class="txt_box">
					<h3>대출기간</h3>
					<p>12개월~120개월</p><!-- [규_20181213] 문구 제거(거치기간 없음) -->
					<!-- [규_20181213] 문구 추가 // -->
					<ul class="sub_list inline">
						<li>
							<h4>거치기간</h4>
						</li>
						<li>
							<h4>신차구입자금</h4>
							<span>: 대출실행일로부터 최장 6개월</span>
						</li>
						<li>
							<h4>신차대환자금/중고차구입자금/중고차대환자금</h4>
							<span>: 없음</span>
						</li>
					</ul>
					<!-- // 문구 추가 -->
				</div>
				<div class="txt_box">
					<h3>담보</h3>
					<p>서울보증보험 담보(100%)</p>
				</div>
				<div class="txt_box">
					<h3>상환방식</h3>
					<p>원리금 균등분할상환</p>
				</div>
				<div class="txt_box">
					<h3>중도상환해약금</h3>
					<p>중도상환해약금은 중도상환대출금액 X 중도상환해약금률 0.8% X (중도상환약정잔여일수/중도상환약정기간)으로 하며, 최초 대출일로부터 3년까지 적용합니다.<br>(단, 대출잔여기간 3개월 이내 상환시 면제)</p><!-- [규_20181213] br태그 추가 -->
				</div>
				<div class="txt_box">
					<h3>대출관련비용</h3>
					<p>인지세</p>
					<strong class="point">※ 인지세법에 의해 대출약정 체결 시 납부하는 세금으로 대출금액에 따라 세액이 차등 적용되며, 은행과 손님이 각 50%씩 부담합니다.</strong><!-- [규_20181213] 문구 ※ 추가 -->
				</div>
				<div class="uitable_col">
					<table class="cellalign_left">
						<caption>대출관련비용</caption><!-- [규_20181213] caption 문구 수정 -->
						<colgroup>
							<col><col>
						</colgroup>
						<thead>
						<tr>
							<th scope="col" class="">대출금액</th>
							<th scope="col" class="">인지세액</th>
						</tr>
						</thead>
						<tbody>
						<tr>
							<td class="">5천만원 이하</td>
							<td class="">없음</td>
						</tr>
						<tr>
							<td class="">5천만원 초과~1억원 이하</td>
							<td class="">7만원</td>
						</tr>
						<tr>
							<td class="">1억원 초과~10억원 이하</td>
							<td class="">15만원</td>
						</tr>
						<tr>
							<td class="">10억원 초과</td>
							<td class="">35만원</td>
						</tr>
						</tbody>
					</table>
				</div>
				<div class="txt_box point">
					<h3>유의사항</h3>
					<p>손님의 신용도에 따라 대출한도와 대출금리가 차등 적용되며 대출취급이 제한될 수 있습니다.</p><!-- [규_20181213] 문구 변경 -->
					<!-- [규_20181213] 문구 추가 // -->
					<ul class="point">
						<li><strong class="point">대출원리금 납입이 지연되거나 대출만기 도래시 대출금액을 상환하지 않을 경우에는 연체이자가 부과되며 채무자의 자산(압류,경매 등) 및 신용상의 불이익이 발생할 수 있으니 채무상환능력을 고려하여 신청하시기 바랍니다.</strong></li>
						<li><strong class="point">신차/중고차 구입자금의 경우 대출 실행 후 본인명의로 소유권 이전해야 합니다.</strong></li>
						<li><strong class="point">신차/중고차 대환자금의 경우 대출 실행후 완제영수증 제출해야 합니다.</strong></li>
						<li><strong class="point">대출 실행 후 6개월 내에 자동차를 제3자에게 매도시 대출금을 상환해야 합니다.</strong></li>
						<li><strong class="point">본 상품은 대출계약철회권이 인정되지 않는 상품으로 매매계약 취소 시 대출금 상환에 따른 중도상환수수료가 발생할 수 있습니다.</strong></li>
					</ul>
					<!-- // 문구 추가 -->
				</div>
				<!-- [규_20180108] '상품내용 변경에 관한 사항' 제거 -->
				<div class="txt_box">
					<h3>금리안내 <span>(금리:연이율)</span></h3><!-- [규_20180108] span문구추가 -->
					<!-- [규_20180108] noti_table 제거 -->
					<!-- [규_20180108] uitable_col 제거 -->
					<!-- [규_20180108] 추가 // -->
					<ul class="sub_list">
						<li>
							<p>최저 연 4.3%(2019.1.2. 현재, 기준금리 1.951%(금융채 6개월 변동) + 가산금리<em class="num_1">1)</em> 2.749% - 부수거래 감면금리<em class="num_2">2)</em> 최대 0.4%)</p><!-- [규_20180108] num_1,num_2 <em><em> 추가 -->
						</li>
						<li>
							<p><span class="num_1">1)</span> 가산금리 : 내부신용 ASS 1~11등급, 대출기간 5년, 대출금액 50백만원 취급기준</p>
						</li>
						<li>
							<p><span class="num_1">2)</span> 부수거래 감면금리 : 부수거래 항목에 따라 최대 0.4%까지 금리감면(급여이체 0.2%, 제휴카드결제 0.1%, 자동이체 3건 이상 0.1%)</p>
						</li>
						<li>
							<p class="noti">※  단, 매월 거래실적 체크하여 미 충족할 경우 해당 금리만큼 인상됩니다.</p>
						</li>
					</ul>
					<ul class="point_one">
						<li>
							<strong class="point">SK엔카닷컴㈜내 금융서비스 통해서 대출이 진행 되어야만 연 4.3%의 금리로 진행 가능</strong>
						</li>
						<li>
							<p>기간 : 2019. 3. 29.까지</p>
						</li>
					</ul>
					<!-- // 추가 -->
				</div>
				<!-- [규_20180108] '안내' 제거 -->
				<!-- [규_20180108] '감면금리' 제거 -->
				<div class="txt_box cs">
					<p>연체 시 적용하는 이자율은 아래와 같습니다.<br>대출금리+3%<br>연체이자율은 최고 15%를 넘을 수 없습니다.</p><!-- [규_20180108] 문구 변경 -->
					<p>자세한 내용은 엔카 중고차론 고객센터로 문의주시기 바랍니다.<br>02-754-9914 (오전 10시~ 오후 6시)</p>
				</div>
				<!-- [규_20180108] 이동 & 감싸는 DIV(txt_box) 추가 // -->
				<div class="txt_box">
					<ul class="point">
						<li><strong class="point">준법감시인 심사필 2019-광고-1056호(2019. 1. 7)</strong></li><!-- [규_20180108] 문구 변경 -->
						<li><strong class="point">본 홍보물의 유효기간은 2019. 3. 29까지입니다.</strong></li><!-- [규_20180108] 문구 변경 -->
						<li><strong class="point">기준일자: 2019. 1. 2	</strong></li><!-- [규_20180108] 문구 변경 -->
						<li><strong class="point">CC브랜드191812-160</strong></li><!-- [규_20180108] 문구 추가 -->
					</ul>
				</div>
				<!-- // 이동 & 감싸는 DIV(txt_box) 추가 -->
			</div>

			<!-- 필요증빙서류 안내 --><!--비대면 한도조회 오픈시에는 비노출-->
			<div class="tabContent" id="informTab_2">
			</div>
		</div>
	</div>
	<!-- //container -->

</div>
<!-- //wrap -->
</body>
</html>