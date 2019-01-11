<%@ page contentType="text/html; charset=EUC-KR"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="euc-kr" />
<meta name="viewport" content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width" />
<link rel="stylesheet" type="text/css" href="/css/module_common.css"/>
<link rel="stylesheet" type="text/css" href="/css/bs.css"/>
<!-- 2018/05/03 [손] 금융 개편 : title 내용 수정 -->
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
<body class="bs bs_loan_v01">

<!-- wrap// -->
<div id="wrap">

	<!-- header//-->
	<jsp:include page="/html/bs/_header_bs.jsp?pageTitle=엔카 중고차론" flush="true" ></jsp:include>
	<!-- //header -->

	<!-- container//-->
	<div id="container">
		<div class="wrap_loan">
			<div class="area_calc">
				<h3 class="blind">할부 금액 계산기</h3>
				<ul class="list_calc">
					<li><a href="javascript:uiPage.init({obj:'.uipage_selecttype'});" class="link_select uiBtnType"><span class="uiTxtType">최근 본 차량</span><span class="spr_bs ico_open">월 납입금 기준 선택 레이어 열기</span></a></li>
					<li>
						<span class="area_input">
							<!-- 18/05/25 [손] input type tel로 변경 -->
							<input type="tel" class="input_price uiInputPrice" maxlength="6" title="차량 금액 입력" />
							<span class="unit_price">만원</span>
							<!--<span class="spr_bs ico_checked">입력됨</span>-->
						</span>
					</li>
					<li><a href="javascript:uiPage.init({obj:'.uipage_selectmonth'});" class="link_select uiBtnMonth"><span class="uiTxtMonth">36개월</span><span class="spr_bs ico_open">할부 개월수 선택 레이어 열기</span></a></li>
				</ul>
				<p class="result_calc">월 <span class="price_calc uiNumbercount uiPriceCalc">0</span>원</p>
				<p class="txt_standard">*금리 3.9% 기준</p>
				<a href="#" id="btn_kakao" class="uibtn uibtn_size_h30 uibtn_inline">견적서 카톡 보내기</a><!-- [규_20181106] 추가 -->
				<div class="area_slide">
					<div class="itemSlideWrap slide_recent uiSlideRecent">
						<div class="itemArea">
							<div class="itemRoll">
								<div class="itemScene">
									<a href="#" class="recent_item"><!-- 18/07/12 [손] 링크추가 : div 태그 a태그로 변경 -->
										<input type="hidden" id="rgsid" value="123124" />
										<span class="thumb_price">
											<img src="/images/bs/@sample_thm_car.png" class="thumb_img" alt="#">
										</span>
										<span class="tit_recentcar">
											<span class="cls">
												<strong>현대</strong>
												<em>LF 쏘나타</em>
											</span>
											<span class="dtl">
												<strong>2.0 스마트 스페셜 두줄 테스트</strong>
											</span>
										</span>
										<span class="price_recentcar"><em class="num">2,600</em> 만원</span>
									</a>
								</div>
								<div class="itemScene">
									<a class="recent_item"><!-- 18/07/12 [손] 링크추가 : div 태그 a태그로 변경 -->
										<input type="hidden" id="rgsid" value="321424" />
										<span class="thumb_price">
											<img src="/images/bs/@sample_thm_car.png" class="thumb_img" alt="#">
										</span>
										<span class="tit_recentcar">
											<span class="cls">
												<strong>현대</strong>
												<em>LF 쏘나타</em>
											</span>
											<span class="dtl">
												<strong>2.0 스마트 스페셜 두줄 테스트</strong>
											</span>
										</span>
										<span class="price_recentcar"><em class="num">5,800</em> 만원</span>
									</a>
								</div>
								<div class="itemScene">
									<a class="recent_item"><!-- 18/07/12 [손] 링크추가 : div 태그 a태그로 변경 -->
										<input type="hidden" id="rgsid" value="125554" />
										<span class="thumb_price">
											<img src="/images/bs/@sample_thm_car.png" class="thumb_img" alt="#">
										</span>
										<span class="tit_recentcar">
											<span class="cls">
												<strong>현대</strong>
												<em>LF 쏘나타</em>
											</span>
											<span class="dtl">
												<strong>2.0 스마트 스페셜 두줄 테스트</strong>
											</span>
										</span>
										<span class="price_recentcar"><em class="num">4,400</em> 만원</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="area_slogan">
					<p class="txt_slogan">엔카 중고차론은 중고차 할부의 상담 및 진행을 도와 드립니다.</p>
				</div>
			</div>
			<script>

			</script>

			<hr />

			<div class="area_loan area_ratio">
				<h3 class="h3_loan">엔카 중고차론은 왜 금리가 낮을까요?</h3>
				<h4 class="h4_loan"><!-- 18/05/25 [손] 문구변경 -->
					1. 같은 금융사라도  엔카를 통하면<br />
					나홀로 진행할 때 보다 6% 우대금리
				</h4>
				<div class="bg_ratio">
					<div class="blind">
						<p>엔카와 함께 오셨군요! 저희와 많이 거래하는 기업이니 우대 금리로 드릴게요!</p>
						<ul>
							<li>나홀로 진행하면 9.9%</li>
							<li>엔카와 함께하면 3.9% - 엔카 우대 금리 6% SAVE</li>
						</ul>
					</div>
				</div>
			</div>

			<hr />

			<div class="area_loan area_compare">
				<h4 class="h4_loan">2. 조회 한번에 8개 금리 비교</h4>
				<p class="txt_compare">조회 한번으로 은행, 캐피탈 금리를 비교하여 최저 금리를 제공해드립니다.</p>
				<div class="bg_compare">
					<div class="blind">
						<table>
							<caption>엔카 중고차론 금리 비교</caption>
							<thead>
								<tr>
									<th scope="col">은행종류</th>
									<th scope="col">엔카로 진행</th>
									<th scope="col">나홀로 진행</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row">A은행</th>
									<td scope="row">3.9%</td>
									<td scope="row">5.2%</td>
								</tr>
								<tr>
									<th scope="row">B은행</th>
									<td scope="row">4.7%</td>
									<td scope="row">5.5%</td>
								</tr>
								<tr>
									<th scope="row">C캐피탈</th>
									<td scope="row">10.9%</td>
									<td scope="row">12.9%</td>
								</tr>
								<tr>
									<th scope="row">D캐피탈</th>
									<td scope="row">9.9%</td>
									<td scope="row">11.9%</td>
								</tr>
								<tr>
									<th scope="row">E캐피탈</th>
									<td scope="row">11.9%</td>
									<td scope="row">14.9%</td>
								</tr>
								<tr>
									<th scope="row">F캐피탈</th>
									<td scope="row">10.9%</td>
									<td scope="row">13.9%</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>

			<hr />

			<div class="area_loan area_review">
				<h3 class="h3_loan">100% 리얼 고객 후기</h3>
				<div class="uiTab">
					<div class="tab_review">
						<a href="#" class="tab_menu uiTabMenu">낮았어요!</a>	<!-- [규_20180808] (탭 메뉴)문구 수정 -->
						<a href="#" class="tab_menu uiTabMenu">빨랐어요!</a>
						<a href="#" class="tab_menu uiTabMenu">편했어요!</a>
						<a href="#" class="tab_menu uiTabMenu">바꿨어요!</a>	<!-- [규_20180808] 리얼후기(탭) 추가 -->
					</div>
					<div>
						<div class="area_customer uiTabContent">
							<!-- 18/05/25 [손] 고객 이미지 경로 변경 -->
							<p class="pic_customer"><img src="/images/bs/customer1.png" class="img_customer" alt="고객 이미지" /></p>
							<p class="review_customer">직접 알아본 금리보다 6% 넘게<br />싸네요. 오히려 돈 번 기분이네요!</p>
							<p class="name_customer"><span class="txt_name">박*호</span> 고객님</p>
							<ul class="list_customer">
								<li>30대 중반</li>
								<li>월소득 320만원</li>
								<li>신용등급 : 상</li>
								<li>직장인 4대보험</li>
							</ul>
							<div class="btn_review"><button type="button" class="uibtn uibtn_white uibtn_size_h45">후기 자세히보기</button></div>
							<div class="area_tbl">
								<table class="tbl_customer">
									<caption>엔카 중고차론 금리 비교</caption>
									<thead>
										<tr>
											<th scope="col"><span class="blind">대출정보</span></th>
											<th scope="col">직접 알아본 곳</th>
											<th scope="col" class="txt_red">엔카 중고차론</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th scope="row">금리</th>
											<td scope="row">9.90%</td>
											<td scope="row" class="txt_red">3.68%</td>
										</tr>
										<tr>
											<th scope="row">월 납입금</th>
											<td scope="row">483,304원</td>
											<td scope="row" class="txt_red">440,728원</td>
										</tr>
										<tr>
											<th scope="row">총 이자</th>
											<td scope="row">2,398,939원</td>
											<td scope="row" class="txt_red">866,197원</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<div class="area_customer uiTabContent">
							<!-- 18/05/25 [손] 고객 이미지 경로 변경 -->
							<p class="pic_customer"><img src="/images/bs/customer2.png" class="img_customer" alt="고객 이미지" /></p>
							<p class="review_customer">자동차 첫 구매라 어려운 점이 많았는데<br />직접 찾아오셔서 편하게 진행했어요.</p>
							<p class="name_customer"><span class="txt_name">김*국</span> 고객님</p>
							<ul class="list_customer">
								<li>20대 중반</li>
								<li>월소득 170만원</li>
								<li>신용등급 : 중</li>
								<li>직장인 4대보험</li>
							</ul>
							<div class="btn_review"><button type="button" class="uibtn uibtn_white uibtn_size_h45">후기 자세히보기</button></div>
							<div class="bg_speed">
								<ul class="blind">
									<li>타 금융사 : 상당시간 소요</li>
									<li>엔카 중고차론 : 4시간만에 입금</li>
								</ul>
							</div>
						</div>
						<div class="area_customer uiTabContent">
							<!-- 18/05/25 [손] 고객 이미지 경로 변경 -->
							<p class="pic_customer"><img src="/images/bs/customer3.png" class="img_customer" alt="고객 이미지" /></p>
							<p class="review_customer">이른바 ‘무서류’ 대출이었습니다. 등본 및<br />인감서류 없이 간소한 절차로 진행했어요.</p>
							<p class="name_customer"><span class="txt_name">김*범</span> 고객님</p>
							<ul class="list_customer">
								<li>50대 중반</li>
								<li>월소득 250만원</li>
								<li>신용등급 : 하</li>
								<li>4대보험 미가입</li>
							</ul>
							<div class="btn_review"><button type="button" class="uibtn uibtn_white uibtn_size_h45">후기 자세히보기</button></div>
							<div class="bg_novisit">
								<ul class="blind">
									<li>무 방문 : 고객과 엔카가 직접 만나지 않아도 대출이 진행됩니다.</li>
									<li>무 서류 : 복잡한 서류 준비를 하지 않아도 대출이 진행됩니다.</li>
								</ul>
							</div>
						</div>
						<!-- // [규_20180808] 리얼후기(내용) 추가 -->
						<div class="area_customer uiTabContent">
							<p class="pic_customer"><img src="/images/bs/customer4.png" class="img_customer" alt="고객 이미지" /></p>
							<p class="review_customer">엔카 대환대출의 낮은금리로 바꿨더니,<br />오히려 1,000만원 번 기분이에요!</p>
							<p class="name_customer"><span class="txt_name">동*형</span> 고객님</p>
							<ul class="list_customer">
								<li>20대 후반</li>
								<li>월소득 200만원</li>
								<li>신용등급 : 하</li>
								<li>4대보험 미가입</li>
							</ul>
							<div class="btn_review"><button type="button" class="uibtn uibtn_white uibtn_size_h45">후기 자세히보기</button></div>
							<div class="bg_save">
								<ul class="blind">
									<li>처음 대출받은 캐피탈 : 총이자 1,460만원</li>
									<li>엔카 중고차론 : 총이자 360만원.1,000만원 SAVE</li>
								</ul>
							</div>
						</div>
						<!-- [규_20180808] 리얼후기(내용) 추가 // -->
					</div>
				</div>
			</div>

			<hr />

			<div class="area_loan area_goods">
				<h3 class="h3_loan">엔카 중고차론 상품</h3>
				<ul class="list_goods">
					<li class="col_goods1">
						<strong class="tit_goods">최저 금리</strong>
						<span class="txt_goods">3.9~14.9%</span> <!-- 2018/06/25 [허] : 금리수정 -->
					</li>
					<li class="col_goods2">
						<strong class="tit_goods">가능 개월수</strong>
						<span class="txt_goods">24~120개월</span>
					</li>
					<li class="col_goods3">
						<strong class="tit_goods">상품 종류</strong>
						<span class="txt_goods">할부,리스,대환</span>
					</li>
					<li class="col_goods1">
						<strong class="tit_goods">서류 간소화</strong>
						<span class="txt_goods">무방문, 무서류</span>
					</li>
					<li class="col_goods2">
						<strong class="tit_goods">빠른 대출</strong>
						<span class="txt_goods">심사~입금 2시간</span>
					</li>
					<li class="col_goods3">
						<strong class="tit_goods">컨설팅</strong>
						<span class="txt_goods">금융&amp;차량구매</span>
					</li>
				</ul>
				<!-- 18/06/14 [손] 문구 추가 -->
				<p class="caution_goods">*엔카 제휴 금융사의 한도승인 여부에 따라,<br />상품 내용이 변경되실 수 있습니다.</p>
			</div>

			<hr />

			<div class="area_loan area_faq">
				<h3 class="h3_loan">자주 묻는 질문</h3>
				<div class="uiAcc">
					<ul class="list_faq">
						<li class="uiAccContent">
							<a href="#" class="question_faq uiAccMenu">엔카 중고차론은 어떻게 진행되나요?<span class="uiico uiico_arrow down">답변보기</span></a>
							<div class="answer_faq uiAccContent">
								중고차론 신청을 하시면, 신청 기준 2시간 이내에 상담 담당자가 전화를 드립니다.
								고객님이 진행하시는 차종, 대출금, 개월 수, 신용등급과 기타 정보에 대해서 1차 상담을 합니다.
								그리고 은행 상품과 캐피탈 상품 중에서 낮은 금리로 진행 가능한 금융사로 신용조회를 합니다.
								이후에 나온 결과를 바탕으로 추가 신용조회 없이, 금융사별로 금리를 최종적으로 비교해서 가장 낮은 금융사로 진행합니다.
								금융사 한도 승인 후 조건에 따라 ‘무서류 진행부터 계약담당자 방문 진행 중’에 고객님이 가능한 절차로 대출을 도와드립니다.
							</div>
						</li>
						<li class="uiAccContent">
							<a href="#" class="question_faq uiAccMenu">신용조회시, 정말로 신용등급에 영향이 없나요?<span class="uiico uiico_arrow down">답변보기</span></a>
							<div class="answer_faq uiAccContent">
								네 고객님 정말로 영향이 없습니다. 그리고 시중에 가조회라는 표현으로 기록이 안 남는다고 표현을 하는데, 실제적으로 조회한 기록은 남습니다.
								하지만, 실제 대출이 발생되지 않는다면, 단기적으로만 조회 기록이 남아 있을뿐이고, 신용등급 및 차후 다른 금융거래에 있어서 전혀 영향이 없습니다.
							</div>
						</li>
						<li class="uiAccContent">
							<a href="#" class="question_faq uiAccMenu">엔카 중고차론은 어떤 점이 좋은가요?<span class="uiico uiico_arrow down">답변보기</span></a>
							<div class="answer_faq uiAccContent">
								엔카 중고차론은 은행 및 캐피탈사와 제휴하여, 고객 조건에 따른 엔카 특별금리를 보유하고 있습니다.
								즉, 동일한 금융사라도 개인이 알아본 것보다, 엔카를 통하면 더 낮은 금리로 진행 가능하시고, 단순히 한 곳만 알아 보는 것이 아니라,
								1번의 신용 조회만 하여도 다수의 금융사별 엔카 금리를 비교해서, 더 낮은 곳으로 진행하시게 도와드립니다.
							</div>
						</li>
						<li class="uiAccContent">
							<a href="#" class="question_faq uiAccMenu">은행과 캐피탈 상품의 큰 차이점은 무엇인가요?<span class="uiico uiico_arrow down">답변보기</span></a>
							<div class="answer_faq uiAccContent">
								<dl class="dl_answer">
									<dt>1. 금리</dt>
									<dd>은행 상품 : 3.9%~4.5%</dd>
									<dd>캐피탈 상품 : 6.9%~14.9%</dd>
									<dt>2. 조건</dt>
									<dd>은행 : 시중에 모든 은행권 상품은 보증보험과 연계하여 진행되기 때문에,  "4대보험 직장인 or 개인사업자, 기타 은행권이 인정하는 직업군, 신용 6등급 이내 충족, 기존대출 이용건수 충족"에 따라 한도승인 여부가 결정됩니다.</dd>
									<dd>캐피탈 : 신용등급이 가장 메인이 되며, 재직&소득이 부족(ex. 무직, 프리랜서)하거나 기존대출이 많으셔도, 한도승인이 나올수 있습니다.</dd>
								</dl>
							</div>
						</li>
						<li class="uiAccContent">
							<a href="#" class="question_faq uiAccMenu">개인을 통해서 차량을 구입하는 경우에도 은행권 상품을 이용 할 수 있나요?<span class="uiico uiico_arrow down">답변보기</span></a>
							<div class="answer_faq uiAccContent">
								네. 엔카에서는 예외적으로 처리 가능하십니다.
							</div>
						</li>
						<li class="uiAccContent">
							<a href="#" class="question_faq uiAccMenu">대출 진행시에 필요한 서류들이 많나요?<span class="uiico uiico_arrow down">답변보기</span></a>
							<div class="answer_faq uiAccContent">
								<dl class="dl_answer">
									<dt>1. 은행 상품</dt>
									<dd>한도조회시 : 무서류</dd>
									<dd>
										한도승인 후 최종 대출금 입금시 :<br />
										운전면허증 사본, 재직&소득증빙서류 사본, 차량등록증 사본, 매매계약서 사본, 매매상사 사업자<br />
										※ 사본 : 팩스 또는 사진 가능<br />
										※ 진행 단계별 공인인증서 필요 없음
									</dd>
									<dt>2. 캐피탈 상품</dt>
									<dd>한도조회시 : 무서류</dd>
									<dd>
										한도승인 후 최종대출금 입금시 : <br />
										① 간소화O 절차 : 운전면허증 사본, 차량등록증 사본, 금융계약서 작성(계약직원이 고객님 계신곳으로 방문)<br />
										② 간소화X 절차 : 운전면허증 사본, 차량등록증 사본, 등본 원본 1부, 인감증명서 원본 2부, 금융계약서 작성(계약직원이 고객님 계신곳으로 방문)<br />
										※ 사본 : 팩스 또는 사진 가능
									</dd>
								</dl>
							</div>
						</li>
						<li class="uiAccContent">
							<a href="#" class="question_faq uiAccMenu">신청 후 입금까지 얼마나 걸리나요?<span class="uiico uiico_arrow down">답변보기</span></a>
							<div class="answer_faq uiAccContent">
								최소 2시간에서 최대 하루정도 소요 됩니다.(영업일 기준, 오후 6시전에 입금처리 완료)
							</div>
						</li>
						<li class="uiAccContent hide">
							<a href="#" class="question_faq uiAccMenu">금융사마다 할부 금리가 왜 다른가요?<span class="uiico uiico_arrow down">답변보기</span></a>
							<div class="answer_faq uiAccContent">
								신용등급과 차량 대출조건(차량 연식, 대출금, 개월 수)의 기준에 따라 금리가 산정되고,
								같은 기준이라도 금융사마다 금리가 다르므로 비교가 필수 입니다.
							</div>
						</li>
						<li class="uiAccContent hide">
							<a href="#" class="question_faq uiAccMenu">할부 금액은 원하는 만큼 가능한가요?<span class="uiico uiico_arrow down">답변보기</span></a>
							<div class="answer_faq uiAccContent">
								할부 최대한도는 같은 차량이라도 개인 신용과 차량 연식에 따라, 금융사별로 모두 다릅니다.
								엔카 중고차론은 최대한도를 비교하여, 명의 이전비용과 보험료까지 대출 가능한지 확인해 드립니다.
							</div>
						</li>
						<li class="uiAccContent hide">
							<a href="#" class="question_faq uiAccMenu">대환대출이나 리스 상품은 없나요?<span class="uiico uiico_arrow down">답변보기</span></a>
							<div class="answer_faq uiAccContent">
								대환대출은 은행사 상품으로, 4.5% 확정 금리 조건으로 진행 가능합니다.
								리스 상품의 경우에는 캐피탈사를 통해서만 진행가능하며, 현재 은행사에서는 리스 상품을 취급하고 있지 않습니다.
							</div>
						</li>
						<li class="uiAccContent hide">
							<a href="#" class="question_faq uiAccMenu">연금리가 무슨 말인가요?<span class="uiico uiico_arrow down">답변보기</span></a>
							<div class="answer_faq uiAccContent">
								1년 동안 내야할 이자율입니다.
								다만 연금리는 실제 계약 금리보다 낮게 표현되므로 주의하셔야 합니다.
								이를 조심하기 위해선, "동일한 대출금과 개월 수, 금리"를 바탕으로 "월 할부금"을 비교하시면 됩니다.
							</div>
						</li>
					</ul>
					<div class="btn_all"><a href="#" class="uiAccBtnAll"><em class="txt_btn uiTxtAllBtn">펼치기</em><span class="uiico uiico_arrow down"></span></a></div>
				</div>
			</div>
			<script>loanUI.init();</script>

			<hr />

			<div class="area_loan area_statistics">
				<h3 class="h3_loan">서비스 이용 통계</h3>
				<div class="uialign_flex">
					<div class="uialign_item">
						<strong class="tit_statistics">주간 신청 수</strong>
						<span class="txt_statistics">576</span>
					</div>
					<div class="uialign_item">
						<strong class="tit_statistics">총 한도 승인수</strong>
						<span class="txt_statistics">12,541</span>
					</div>
					<div class="uialign_item">
						<strong class="tit_statistics">총 누적 신청 수</strong>
						<span class="txt_statistics">52,785</span>
					</div>
				</div>
			</div>

			<div class="uifix_bottom xx_bottom uialign_flex">
				<div class="uialign_item"><a href="#" class="uibtn uibtn_white uibtn_size_h45 uibtn_shadow">한도조회/결과보기</a></div><!-- [규_20181106] 문구 변경 -->
				<div class="uialign_item"><a href="#" class="uibtn uibtn_red uibtn_size_h45 uibtn_shadow">상담 신청하기</a></div><!-- [규_20181106] 문구 변경 -->
			</div>
		</div>
	</div>
	<!-- //container -->

</div>
<!-- //wrap -->

<div class="uipage uipage_selecttype">
	<section>
		<div class="uipage_header">
			<header>
				<h1>월 납입금 기준</h1>
				<button type="button" class="area_left uibtnico_back" ui-btn-action="back"><span class="blind">뒤로가기</span></button>
			</header>
		</div>
		<div class="uipage_container">
			<ul class="list_selectopt">
				<li><a href="#" class="link_opt uiBtnOpt">최근 본 차량</a></li>
				<li><a href="#" class="link_opt uiBtnOpt">차량 구매 자금</a></li>
			</ul>
		</div>
	</section>
</div>

<div class="uipage uipage_selectmonth">
	<section>
		<div class="uipage_header">
			<header>
				<h1>할부 개월수</h1>
				<button type="button" class="area_left uibtnico_back" ui-btn-action="back"><span class="blind">뒤로가기</span></button>
			</header>
		</div>
		<div class="uipage_container">
			<ul class="list_selectopt">
				<li><a href="#" class="link_opt uiBtnOpt">24개월</a></li>
				<li><a href="#" class="link_opt uiBtnOpt">36개월</a></li>
				<li><a href="#" class="link_opt uiBtnOpt">48개월</a></li>
			</ul>
		</div>
	</section>
</div>

</body>
</html>