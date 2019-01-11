<%@ page contentType="text/html; charset=EUC-KR"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="euc-kr" />
<meta name="viewport" content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width" />
<link rel="stylesheet" type="text/css" href="/css/module_common.css"/>
<link rel="stylesheet" type="text/css" href="/css/bs.css"/>
<!-- 2018/05/03 [��] ���� ���� : title ���� ���� -->
<title>��ī �߰����� : SK��ī</title>
<meta name="description" content="SK��ī���� �����ϴ� �߰��� �Һ�! ��û�� �Ͻø� ���� �ݸ��� ã�Ƶ帳�ϴ�."/>
<meta property="og:type" content="website"/>
<meta property="og:title" content="[SK��ī ��ī �߰�����]"/>
<meta property="og:description" content="SK��ī���� �����ϴ� �߰��� �Һ�! ��û�� �Ͻø� ���� �ݸ��� ã�Ƶ帳�ϴ�."/>
<meta property="og:image" content="http://www.encar.com/images/common/icon/brand_logo_400x400_v2.jpg"/><!--//��ǥ �̹���-->
<meta property="og:url" content="http://m.encar.com/bs/loanconsult.dom"/>
<link rel="canonical" href="http://m.encar.com/bs/loanconsult.dom"/>
<script type="text/javascript" src="/js/jquery-1.11.2.min.js"></script><!-- jquery version upgrade -->
<script type="text/javascript" src="/js/iscroll.js"></script><!-- iscroll library js -->
<script type="text/javascript" src="/js/flipsnap.js"></script><!-- flipsnap library js -->
<script type="text/javascript" src="/js/ui.js"></script><!-- �ۺ��̿� js -->
</head>
<body class="bs bs_loan_v01">

<!-- wrap// -->
<div id="wrap">

	<!-- header//-->
	<jsp:include page="/html/bs/_header_bs.jsp?pageTitle=��ī �߰�����" flush="true" ></jsp:include>
	<!-- //header -->

	<!-- container//-->
	<div id="container">
		<div class="wrap_loan">
			<div class="area_calc">
				<h3 class="blind">�Һ� �ݾ� ����</h3>
				<ul class="list_calc">
					<li><a href="javascript:uiPage.init({obj:'.uipage_selecttype'});" class="link_select uiBtnType"><span class="uiTxtType">�ֱ� �� ����</span><span class="spr_bs ico_open">�� ���Ա� ���� ���� ���̾� ����</span></a></li>
					<li>
						<span class="area_input">
							<!-- 18/05/25 [��] input type tel�� ���� -->
							<input type="tel" class="input_price uiInputPrice" maxlength="6" title="���� �ݾ� �Է�" />
							<span class="unit_price">����</span>
							<!--<span class="spr_bs ico_checked">�Էµ�</span>-->
						</span>
					</li>
					<li><a href="javascript:uiPage.init({obj:'.uipage_selectmonth'});" class="link_select uiBtnMonth"><span class="uiTxtMonth">36����</span><span class="spr_bs ico_open">�Һ� ������ ���� ���̾� ����</span></a></li>
				</ul>
				<p class="result_calc">�� <span class="price_calc uiNumbercount uiPriceCalc">0</span>��</p>
				<p class="txt_standard">*�ݸ� 3.9% ����</p>
				<a href="#" id="btn_kakao" class="uibtn uibtn_size_h30 uibtn_inline">������ ī�� ������</a><!-- [��_20181106] �߰� -->
				<div class="area_slide">
					<div class="itemSlideWrap slide_recent uiSlideRecent">
						<div class="itemArea">
							<div class="itemRoll">
								<div class="itemScene">
									<a href="#" class="recent_item"><!-- 18/07/12 [��] ��ũ�߰� : div �±� a�±׷� ���� -->
										<input type="hidden" id="rgsid" value="123124" />
										<span class="thumb_price">
											<img src="/images/bs/@sample_thm_car.png" class="thumb_img" alt="#">
										</span>
										<span class="tit_recentcar">
											<span class="cls">
												<strong>����</strong>
												<em>LF �Ÿ</em>
											</span>
											<span class="dtl">
												<strong>2.0 ����Ʈ ����� ���� �׽�Ʈ</strong>
											</span>
										</span>
										<span class="price_recentcar"><em class="num">2,600</em> ����</span>
									</a>
								</div>
								<div class="itemScene">
									<a class="recent_item"><!-- 18/07/12 [��] ��ũ�߰� : div �±� a�±׷� ���� -->
										<input type="hidden" id="rgsid" value="321424" />
										<span class="thumb_price">
											<img src="/images/bs/@sample_thm_car.png" class="thumb_img" alt="#">
										</span>
										<span class="tit_recentcar">
											<span class="cls">
												<strong>����</strong>
												<em>LF �Ÿ</em>
											</span>
											<span class="dtl">
												<strong>2.0 ����Ʈ ����� ���� �׽�Ʈ</strong>
											</span>
										</span>
										<span class="price_recentcar"><em class="num">5,800</em> ����</span>
									</a>
								</div>
								<div class="itemScene">
									<a class="recent_item"><!-- 18/07/12 [��] ��ũ�߰� : div �±� a�±׷� ���� -->
										<input type="hidden" id="rgsid" value="125554" />
										<span class="thumb_price">
											<img src="/images/bs/@sample_thm_car.png" class="thumb_img" alt="#">
										</span>
										<span class="tit_recentcar">
											<span class="cls">
												<strong>����</strong>
												<em>LF �Ÿ</em>
											</span>
											<span class="dtl">
												<strong>2.0 ����Ʈ ����� ���� �׽�Ʈ</strong>
											</span>
										</span>
										<span class="price_recentcar"><em class="num">4,400</em> ����</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="area_slogan">
					<p class="txt_slogan">��ī �߰������� �߰��� �Һ��� ��� �� ������ ���� �帳�ϴ�.</p>
				</div>
			</div>
			<script>

			</script>

			<hr />

			<div class="area_loan area_ratio">
				<h3 class="h3_loan">��ī �߰������� �� �ݸ��� �������?</h3>
				<h4 class="h4_loan"><!-- 18/05/25 [��] �������� -->
					1. ���� �������  ��ī�� ���ϸ�<br />
					��Ȧ�� ������ �� ���� 6% ���ݸ�
				</h4>
				<div class="bg_ratio">
					<div class="blind">
						<p>��ī�� �Բ� ���̱���! ����� ���� �ŷ��ϴ� ����̴� ��� �ݸ��� �帱�Կ�!</p>
						<ul>
							<li>��Ȧ�� �����ϸ� 9.9%</li>
							<li>��ī�� �Բ��ϸ� 3.9% - ��ī ��� �ݸ� 6% SAVE</li>
						</ul>
					</div>
				</div>
			</div>

			<hr />

			<div class="area_loan area_compare">
				<h4 class="h4_loan">2. ��ȸ �ѹ��� 8�� �ݸ� ��</h4>
				<p class="txt_compare">��ȸ �ѹ����� ����, ĳ��Ż �ݸ��� ���Ͽ� ���� �ݸ��� �����ص帳�ϴ�.</p>
				<div class="bg_compare">
					<div class="blind">
						<table>
							<caption>��ī �߰����� �ݸ� ��</caption>
							<thead>
								<tr>
									<th scope="col">��������</th>
									<th scope="col">��ī�� ����</th>
									<th scope="col">��Ȧ�� ����</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row">A����</th>
									<td scope="row">3.9%</td>
									<td scope="row">5.2%</td>
								</tr>
								<tr>
									<th scope="row">B����</th>
									<td scope="row">4.7%</td>
									<td scope="row">5.5%</td>
								</tr>
								<tr>
									<th scope="row">Cĳ��Ż</th>
									<td scope="row">10.9%</td>
									<td scope="row">12.9%</td>
								</tr>
								<tr>
									<th scope="row">Dĳ��Ż</th>
									<td scope="row">9.9%</td>
									<td scope="row">11.9%</td>
								</tr>
								<tr>
									<th scope="row">Eĳ��Ż</th>
									<td scope="row">11.9%</td>
									<td scope="row">14.9%</td>
								</tr>
								<tr>
									<th scope="row">Fĳ��Ż</th>
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
				<h3 class="h3_loan">100% ���� �� �ı�</h3>
				<div class="uiTab">
					<div class="tab_review">
						<a href="#" class="tab_menu uiTabMenu">���Ҿ��!</a>	<!-- [��_20180808] (�� �޴�)���� ���� -->
						<a href="#" class="tab_menu uiTabMenu">�������!</a>
						<a href="#" class="tab_menu uiTabMenu">���߾��!</a>
						<a href="#" class="tab_menu uiTabMenu">�ٲ���!</a>	<!-- [��_20180808] �����ı�(��) �߰� -->
					</div>
					<div>
						<div class="area_customer uiTabContent">
							<!-- 18/05/25 [��] �� �̹��� ��� ���� -->
							<p class="pic_customer"><img src="/images/bs/customer1.png" class="img_customer" alt="�� �̹���" /></p>
							<p class="review_customer">���� �˾ƺ� �ݸ����� 6% �Ѱ�<br />�γ׿�. ������ �� �� ����̳׿�!</p>
							<p class="name_customer"><span class="txt_name">��*ȣ</span> ����</p>
							<ul class="list_customer">
								<li>30�� �߹�</li>
								<li>���ҵ� 320����</li>
								<li>�ſ��� : ��</li>
								<li>������ 4�뺸��</li>
							</ul>
							<div class="btn_review"><button type="button" class="uibtn uibtn_white uibtn_size_h45">�ı� �ڼ�������</button></div>
							<div class="area_tbl">
								<table class="tbl_customer">
									<caption>��ī �߰����� �ݸ� ��</caption>
									<thead>
										<tr>
											<th scope="col"><span class="blind">��������</span></th>
											<th scope="col">���� �˾ƺ� ��</th>
											<th scope="col" class="txt_red">��ī �߰�����</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th scope="row">�ݸ�</th>
											<td scope="row">9.90%</td>
											<td scope="row" class="txt_red">3.68%</td>
										</tr>
										<tr>
											<th scope="row">�� ���Ա�</th>
											<td scope="row">483,304��</td>
											<td scope="row" class="txt_red">440,728��</td>
										</tr>
										<tr>
											<th scope="row">�� ����</th>
											<td scope="row">2,398,939��</td>
											<td scope="row" class="txt_red">866,197��</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<div class="area_customer uiTabContent">
							<!-- 18/05/25 [��] �� �̹��� ��� ���� -->
							<p class="pic_customer"><img src="/images/bs/customer2.png" class="img_customer" alt="�� �̹���" /></p>
							<p class="review_customer">�ڵ��� ù ���Ŷ� ����� ���� ���Ҵµ�<br />���� ã�ƿ��ż� ���ϰ� �����߾��.</p>
							<p class="name_customer"><span class="txt_name">��*��</span> ����</p>
							<ul class="list_customer">
								<li>20�� �߹�</li>
								<li>���ҵ� 170����</li>
								<li>�ſ��� : ��</li>
								<li>������ 4�뺸��</li>
							</ul>
							<div class="btn_review"><button type="button" class="uibtn uibtn_white uibtn_size_h45">�ı� �ڼ�������</button></div>
							<div class="bg_speed">
								<ul class="blind">
									<li>Ÿ ������ : ���ð� �ҿ�</li>
									<li>��ī �߰����� : 4�ð����� �Ա�</li>
								</ul>
							</div>
						</div>
						<div class="area_customer uiTabContent">
							<!-- 18/05/25 [��] �� �̹��� ��� ���� -->
							<p class="pic_customer"><img src="/images/bs/customer3.png" class="img_customer" alt="�� �̹���" /></p>
							<p class="review_customer">�̸��� ���������� �����̾����ϴ�. � ��<br />�ΰ����� ���� ������ ������ �����߾��.</p>
							<p class="name_customer"><span class="txt_name">��*��</span> ����</p>
							<ul class="list_customer">
								<li>50�� �߹�</li>
								<li>���ҵ� 250����</li>
								<li>�ſ��� : ��</li>
								<li>4�뺸�� �̰���</li>
							</ul>
							<div class="btn_review"><button type="button" class="uibtn uibtn_white uibtn_size_h45">�ı� �ڼ�������</button></div>
							<div class="bg_novisit">
								<ul class="blind">
									<li>�� �湮 : ���� ��ī�� ���� ������ �ʾƵ� ������ ����˴ϴ�.</li>
									<li>�� ���� : ������ ���� �غ� ���� �ʾƵ� ������ ����˴ϴ�.</li>
								</ul>
							</div>
						</div>
						<!-- // [��_20180808] �����ı�(����) �߰� -->
						<div class="area_customer uiTabContent">
							<p class="pic_customer"><img src="/images/bs/customer4.png" class="img_customer" alt="�� �̹���" /></p>
							<p class="review_customer">��ī ��ȯ������ �����ݸ��� �ٲ����,<br />������ 1,000���� �� ����̿���!</p>
							<p class="name_customer"><span class="txt_name">��*��</span> ����</p>
							<ul class="list_customer">
								<li>20�� �Ĺ�</li>
								<li>���ҵ� 200����</li>
								<li>�ſ��� : ��</li>
								<li>4�뺸�� �̰���</li>
							</ul>
							<div class="btn_review"><button type="button" class="uibtn uibtn_white uibtn_size_h45">�ı� �ڼ�������</button></div>
							<div class="bg_save">
								<ul class="blind">
									<li>ó�� ������� ĳ��Ż : ������ 1,460����</li>
									<li>��ī �߰����� : ������ 360����.1,000���� SAVE</li>
								</ul>
							</div>
						</div>
						<!-- [��_20180808] �����ı�(����) �߰� // -->
					</div>
				</div>
			</div>

			<hr />

			<div class="area_loan area_goods">
				<h3 class="h3_loan">��ī �߰����� ��ǰ</h3>
				<ul class="list_goods">
					<li class="col_goods1">
						<strong class="tit_goods">���� �ݸ�</strong>
						<span class="txt_goods">3.9~14.9%</span> <!-- 2018/06/25 [��] : �ݸ����� -->
					</li>
					<li class="col_goods2">
						<strong class="tit_goods">���� ������</strong>
						<span class="txt_goods">24~120����</span>
					</li>
					<li class="col_goods3">
						<strong class="tit_goods">��ǰ ����</strong>
						<span class="txt_goods">�Һ�,����,��ȯ</span>
					</li>
					<li class="col_goods1">
						<strong class="tit_goods">���� ����ȭ</strong>
						<span class="txt_goods">���湮, ������</span>
					</li>
					<li class="col_goods2">
						<strong class="tit_goods">���� ����</strong>
						<span class="txt_goods">�ɻ�~�Ա� 2�ð�</span>
					</li>
					<li class="col_goods3">
						<strong class="tit_goods">������</strong>
						<span class="txt_goods">����&amp;��������</span>
					</li>
				</ul>
				<!-- 18/06/14 [��] ���� �߰� -->
				<p class="caution_goods">*��ī ���� �������� �ѵ����� ���ο� ����,<br />��ǰ ������ ����ǽ� �� �ֽ��ϴ�.</p>
			</div>

			<hr />

			<div class="area_loan area_faq">
				<h3 class="h3_loan">���� ���� ����</h3>
				<div class="uiAcc">
					<ul class="list_faq">
						<li class="uiAccContent">
							<a href="#" class="question_faq uiAccMenu">��ī �߰������� ��� ����ǳ���?<span class="uiico uiico_arrow down">�亯����</span></a>
							<div class="answer_faq uiAccContent">
								�߰����� ��û�� �Ͻø�, ��û ���� 2�ð� �̳��� ��� ����ڰ� ��ȭ�� �帳�ϴ�.
								������ �����Ͻô� ����, �����, ���� ��, �ſ��ް� ��Ÿ ������ ���ؼ� 1�� ����� �մϴ�.
								�׸��� ���� ��ǰ�� ĳ��Ż ��ǰ �߿��� ���� �ݸ��� ���� ������ ������� �ſ���ȸ�� �մϴ�.
								���Ŀ� ���� ����� �������� �߰� �ſ���ȸ ����, �����纰�� �ݸ��� ���������� ���ؼ� ���� ���� ������� �����մϴ�.
								������ �ѵ� ���� �� ���ǿ� ���� �������� ������� ������� �湮 ���� �ߡ��� ������ ������ ������ ������ ���͵帳�ϴ�.
							</div>
						</li>
						<li class="uiAccContent">
							<a href="#" class="question_faq uiAccMenu">�ſ���ȸ��, ������ �ſ��޿� ������ ������?<span class="uiico uiico_arrow down">�亯����</span></a>
							<div class="answer_faq uiAccContent">
								�� ���� ������ ������ �����ϴ�. �׸��� ���߿� ����ȸ��� ǥ������ ����� �� ���´ٰ� ǥ���� �ϴµ�, ���������� ��ȸ�� ����� �����ϴ�.
								������, ���� ������ �߻����� �ʴ´ٸ�, �ܱ������θ� ��ȸ ����� ���� �������̰�, �ſ��� �� ���� �ٸ� �����ŷ��� �־ ���� ������ �����ϴ�.
							</div>
						</li>
						<li class="uiAccContent">
							<a href="#" class="question_faq uiAccMenu">��ī �߰������� � ���� ��������?<span class="uiico uiico_arrow down">�亯����</span></a>
							<div class="answer_faq uiAccContent">
								��ī �߰������� ���� �� ĳ��Ż��� �����Ͽ�, �� ���ǿ� ���� ��ī Ư���ݸ��� �����ϰ� �ֽ��ϴ�.
								��, ������ ������� ������ �˾ƺ� �ͺ���, ��ī�� ���ϸ� �� ���� �ݸ��� ���� �����Ͻð�, �ܼ��� �� ���� �˾� ���� ���� �ƴ϶�,
								1���� �ſ� ��ȸ�� �Ͽ��� �ټ��� �����纰 ��ī �ݸ��� ���ؼ�, �� ���� ������ �����Ͻð� ���͵帳�ϴ�.
							</div>
						</li>
						<li class="uiAccContent">
							<a href="#" class="question_faq uiAccMenu">����� ĳ��Ż ��ǰ�� ū �������� �����ΰ���?<span class="uiico uiico_arrow down">�亯����</span></a>
							<div class="answer_faq uiAccContent">
								<dl class="dl_answer">
									<dt>1. �ݸ�</dt>
									<dd>���� ��ǰ : 3.9%~4.5%</dd>
									<dd>ĳ��Ż ��ǰ : 6.9%~14.9%</dd>
									<dt>2. ����</dt>
									<dd>���� : ���߿� ��� ����� ��ǰ�� ��������� �����Ͽ� ����Ǳ� ������,  "4�뺸�� ������ or ���λ����, ��Ÿ ������� �����ϴ� ������, �ſ� 6��� �̳� ����, �������� �̿�Ǽ� ����"�� ���� �ѵ����� ���ΰ� �����˴ϴ�.</dd>
									<dd>ĳ��Ż : �ſ����� ���� ������ �Ǹ�, ����&�ҵ��� ����(ex. ����, ��������)�ϰų� ���������� �����ŵ�, �ѵ������� ���ü� �ֽ��ϴ�.</dd>
								</dl>
							</div>
						</li>
						<li class="uiAccContent">
							<a href="#" class="question_faq uiAccMenu">������ ���ؼ� ������ �����ϴ� ��쿡�� ����� ��ǰ�� �̿� �� �� �ֳ���?<span class="uiico uiico_arrow down">�亯����</span></a>
							<div class="answer_faq uiAccContent">
								��. ��ī������ ���������� ó�� �����Ͻʴϴ�.
							</div>
						</li>
						<li class="uiAccContent">
							<a href="#" class="question_faq uiAccMenu">���� ����ÿ� �ʿ��� �������� ������?<span class="uiico uiico_arrow down">�亯����</span></a>
							<div class="answer_faq uiAccContent">
								<dl class="dl_answer">
									<dt>1. ���� ��ǰ</dt>
									<dd>�ѵ���ȸ�� : ������</dd>
									<dd>
										�ѵ����� �� ���� ����� �Աݽ� :<br />
										���������� �纻, ����&�ҵ��������� �纻, ��������� �纻, �ŸŰ�༭ �纻, �ŸŻ�� �����<br />
										�� �纻 : �ѽ� �Ǵ� ���� ����<br />
										�� ���� �ܰ躰 ���������� �ʿ� ����
									</dd>
									<dt>2. ĳ��Ż ��ǰ</dt>
									<dd>�ѵ���ȸ�� : ������</dd>
									<dd>
										�ѵ����� �� ��������� �Աݽ� : <br />
										�� ����ȭO ���� : ���������� �纻, ��������� �纻, ������༭ �ۼ�(��������� ���� ��Ű����� �湮)<br />
										�� ����ȭX ���� : ���������� �纻, ��������� �纻, � ���� 1��, �ΰ����� ���� 2��, ������༭ �ۼ�(��������� ���� ��Ű����� �湮)<br />
										�� �纻 : �ѽ� �Ǵ� ���� ����
									</dd>
								</dl>
							</div>
						</li>
						<li class="uiAccContent">
							<a href="#" class="question_faq uiAccMenu">��û �� �Աݱ��� �󸶳� �ɸ�����?<span class="uiico uiico_arrow down">�亯����</span></a>
							<div class="answer_faq uiAccContent">
								�ּ� 2�ð����� �ִ� �Ϸ����� �ҿ� �˴ϴ�.(������ ����, ���� 6������ �Ա�ó�� �Ϸ�)
							</div>
						</li>
						<li class="uiAccContent hide">
							<a href="#" class="question_faq uiAccMenu">�����縶�� �Һ� �ݸ��� �� �ٸ�����?<span class="uiico uiico_arrow down">�亯����</span></a>
							<div class="answer_faq uiAccContent">
								�ſ��ް� ���� ��������(���� ����, �����, ���� ��)�� ���ؿ� ���� �ݸ��� �����ǰ�,
								���� �����̶� �����縶�� �ݸ��� �ٸ��Ƿ� �񱳰� �ʼ� �Դϴ�.
							</div>
						</li>
						<li class="uiAccContent hide">
							<a href="#" class="question_faq uiAccMenu">�Һ� �ݾ��� ���ϴ� ��ŭ �����Ѱ���?<span class="uiico uiico_arrow down">�亯����</span></a>
							<div class="answer_faq uiAccContent">
								�Һ� �ִ��ѵ��� ���� �����̶� ���� �ſ�� ���� ���Ŀ� ����, �����纰�� ��� �ٸ��ϴ�.
								��ī �߰������� �ִ��ѵ��� ���Ͽ�, ���� �������� �������� ���� �������� Ȯ���� �帳�ϴ�.
							</div>
						</li>
						<li class="uiAccContent hide">
							<a href="#" class="question_faq uiAccMenu">��ȯ�����̳� ���� ��ǰ�� ������?<span class="uiico uiico_arrow down">�亯����</span></a>
							<div class="answer_faq uiAccContent">
								��ȯ������ ����� ��ǰ����, 4.5% Ȯ�� �ݸ� �������� ���� �����մϴ�.
								���� ��ǰ�� ��쿡�� ĳ��Ż�縦 ���ؼ��� ���డ���ϸ�, ���� ����翡���� ���� ��ǰ�� ����ϰ� ���� �ʽ��ϴ�.
							</div>
						</li>
						<li class="uiAccContent hide">
							<a href="#" class="question_faq uiAccMenu">���ݸ��� ���� ���ΰ���?<span class="uiico uiico_arrow down">�亯����</span></a>
							<div class="answer_faq uiAccContent">
								1�� ���� ������ �������Դϴ�.
								�ٸ� ���ݸ��� ���� ��� �ݸ����� ���� ǥ���ǹǷ� �����ϼž� �մϴ�.
								�̸� �����ϱ� ���ؼ�, "������ ����ݰ� ���� ��, �ݸ�"�� �������� "�� �Һα�"�� ���Ͻø� �˴ϴ�.
							</div>
						</li>
					</ul>
					<div class="btn_all"><a href="#" class="uiAccBtnAll"><em class="txt_btn uiTxtAllBtn">��ġ��</em><span class="uiico uiico_arrow down"></span></a></div>
				</div>
			</div>
			<script>loanUI.init();</script>

			<hr />

			<div class="area_loan area_statistics">
				<h3 class="h3_loan">���� �̿� ���</h3>
				<div class="uialign_flex">
					<div class="uialign_item">
						<strong class="tit_statistics">�ְ� ��û ��</strong>
						<span class="txt_statistics">576</span>
					</div>
					<div class="uialign_item">
						<strong class="tit_statistics">�� �ѵ� ���μ�</strong>
						<span class="txt_statistics">12,541</span>
					</div>
					<div class="uialign_item">
						<strong class="tit_statistics">�� ���� ��û ��</strong>
						<span class="txt_statistics">52,785</span>
					</div>
				</div>
			</div>

			<div class="uifix_bottom xx_bottom uialign_flex">
				<div class="uialign_item"><a href="#" class="uibtn uibtn_white uibtn_size_h45 uibtn_shadow">�ѵ���ȸ/�������</a></div><!-- [��_20181106] ���� ���� -->
				<div class="uialign_item"><a href="#" class="uibtn uibtn_red uibtn_size_h45 uibtn_shadow">��� ��û�ϱ�</a></div><!-- [��_20181106] ���� ���� -->
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
				<h1>�� ���Ա� ����</h1>
				<button type="button" class="area_left uibtnico_back" ui-btn-action="back"><span class="blind">�ڷΰ���</span></button>
			</header>
		</div>
		<div class="uipage_container">
			<ul class="list_selectopt">
				<li><a href="#" class="link_opt uiBtnOpt">�ֱ� �� ����</a></li>
				<li><a href="#" class="link_opt uiBtnOpt">���� ���� �ڱ�</a></li>
			</ul>
		</div>
	</section>
</div>

<div class="uipage uipage_selectmonth">
	<section>
		<div class="uipage_header">
			<header>
				<h1>�Һ� ������</h1>
				<button type="button" class="area_left uibtnico_back" ui-btn-action="back"><span class="blind">�ڷΰ���</span></button>
			</header>
		</div>
		<div class="uipage_container">
			<ul class="list_selectopt">
				<li><a href="#" class="link_opt uiBtnOpt">24����</a></li>
				<li><a href="#" class="link_opt uiBtnOpt">36����</a></li>
				<li><a href="#" class="link_opt uiBtnOpt">48����</a></li>
			</ul>
		</div>
	</section>
</div>

</body>
</html>