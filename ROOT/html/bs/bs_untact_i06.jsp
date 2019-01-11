<%@ page contentType="text/html; charset=EUC-KR"%>
<%@ taglib uri="http://java.sun.com/jstl/core_rt" prefix="c"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="euc-kr" />
<meta name="viewport" content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width" />
<link rel="stylesheet" type="text/css" href="/css/module_common.css"/>
<link rel="stylesheet" type="text/css" href="/css/bs.css"/>
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
<body class="bs bs_untact_i06">

<!-- wrap// -->
<div id="wrap">

	<!-- header//-->
	<jsp:include page="/html/_header.jsp?pageType=popup&pageBtn=close&fixed=true&pageBtnLayer=btn_endUntact&pageTitle=�ѵ���ȸ" flush="true"></jsp:include>
	<!-- //header -->	<!-- x(�ݱ�)��ư Ŭ����, 'btn_endUntact'�˾�â ȣ�� -->

	<!-- container//-->
	<div id="container">
		<div class="cont_process">

			<ul class="bar_area">
				<li class="step on"><p>��������</p></li>
				<li class="step on"><p>�����Է�</p></li>
				<li class="step on"><p>����</p></li>
				<li class="step on"><p>�ѵ���ȸ���</p></li>
			</ul>

			<!-- [case : ��� ������] // -->
			<div class="result_area">

				<div class="result">
					<h3 class="tit_result">��*�� �� �����ѵ���ȸ ���</h3>

					<c:choose>
						<c:when test="${param.result == 'resultX'}">
							<!-- [case: �����ѵ���ȸ ��� ���� ���(�ΰ�)] -->
							<div class="result_x">
								<c:choose>
									<c:when test="${param.resultX == 'otherCase'}">
										<!-- �ΰ�case1 -->
										<div class="resultX_case2">
											<p class="txt_cont_x">���Բ����� �ſ�� ������ SK��ī �߰������� ����� ��ǰ �̿��� ��ƽ��ϴ�.<br>��2������ ��ǰ���� �ѵ���ȸ�� ���Ͻô� ���� 02-754-9914�� ���� ��Ź�帳�ϴ�.</p>
											<p class="txt_sub_x">(���� ���� 5�� ���� / �ָ� (������ ����) ��û���� ���� �����Ͽ� ���������� �����帳�ϴ�.)</p>
										</div>
									</c:when>
									<c:otherwise>
										<!-- �ΰ�case2 -->
										<div class="resultX_case1">
											<p class="txt_cont_x">���Բ����� ����ϻ󿡼� �ѵ���ȸ�� ��ƽ��ϴ�. ��ī�߰����� ����ڰ� �����Ͽ� �߰� ��� �帮�ڽ��ϴ�.</p>
											<p class="txt_sub_x">(���� ���� 5�� ���� / �ָ� (������ ����) ��û���� ���� �����Ͽ� ���������� �����帳�ϴ�.)</p>
										</div>
									</c:otherwise>
								</c:choose>
							</div>
						</c:when>
						<c:otherwise>
							<!-- [case: �����ѵ���ȸ ��� �ִ� ���} -->
							<div class="result_o">
								<div class="result_view">
									<ul>
										<li class="list_max">
											<span class="tit_list">���� �����ѵ�</span>
											<span class="txt_list"><em>9,000</em>����</span>
										</li>
										<li>
											<span class="tit_list">��ȿ�Ⱓ</span>
											<span class="txt_list">2018. 08. 31</span>
										</li>
										<li>
											<span class="tit_list">����ݸ�</span>
											<span class="txt_list">�� 4.3%</span><!-- [��_20180108] ���� ���� -->
										</li>
									</ul>
									<div class="txt_sub noti">
										<p>���� ��4.3%[(2019.1.2 ����, ���رݸ� 1.951%(����ä 6���� ����) + ����ݸ� 2.749% - �μ��ŷ� ����ݸ�(�ִ� 0.4%)]</p><!-- [��_20180108] ���� ���� -->
										<!-- [��_20180108] ���� ���� -->
									</div>
									<div class="txt_sub">
										<p>��� ����ݸ��� ������ ������ ����ݸ��̸�, ���رݸ�(����ä 6����) ������ �ݸ��� ����� �� �ֽ��ϴ�.</p>
										<p>���� ����ݾ��� ���ſ��� ������ �ü��� ���� ���� �� �� ������, �ʿ� ���� ���� �Ŀ� ���� ���ο��θ� �� �� �ֽ��ϴ�.</p>
									</div>
								</div>
							</div>
						</c:otherwise>
					</c:choose>

					<c:choose>
						<c:when test="${param.carView == 'lately'}">
							<!-- [case: �ֱ� �� ���� ���� ���]  -->
							<div class="lately_carView">
								<h4 class="tit_carView">�ֱ� �� ���� �����Ա� ����</h4>

								<!-- �ֱ� �� ����(slide) -->
								<div class="area_slide">
									<div class="itemSlideWrap slide_recent uiSlideRecent">
										<div class="itemArea">
											<div class="selet_monthly">
												<div class="select_wrap">
													<a href="javascript:uiPage.init({obj:'.uipage_selectmonth'});">
														<span class="txt_monthly">�ҺαⰣ<em class="uiTxtMonth">36����</em></span>
													</a>
												</div>
											</div>
											<div class="itemRoll">
												<div class="itemScene">
													<div href="#" class="recent_item">
														<input type="hidden" id="rgsid" value="123124" />
														<span class="thumb_price">
														<img src="/images/bs/@sample_thm_car.png" class="thumb_img" alt="#">
													</span>
														<div class="carDetail">
															<p class="carName">���� LF �Ÿ ���̺긮��</p>
															<p class="carPrice"><span class="num">2,100</span><em>����</em></p>
															<p class="result_calc carMonth">�� ���Ա� <span class="price_calc uiNumbercount uiPriceCalc">0</span>��</p>
														</div>
													</div>
												</div>
												<div class="itemScene">
													<div href="#" class="recent_item">
														<input type="hidden" id="rgsid" value="123124" />
														<span class="thumb_price">
														<img src="/images/bs/@sample_thm_car.png" class="thumb_img" alt="#">
													</span>
														<div class="carDetail">
															<p class="carName">���� LF �Ÿ ���̺긮��</p>
															<p class="carPrice"><span class="num">2,600</span><em>����</em></p>
															<p class="result_calc carMonth">�� ���Ա� <span class="price_calc uiNumbercount uiPriceCalc">0</span>��</p>
														</div>
													</div>
												</div>
												<div class="itemScene">
													<div href="#" class="recent_item">
														<input type="hidden" id="rgsid" value="123124" />
														<span class="thumb_price">
														<img src="/images/bs/@sample_thm_car.png" class="thumb_img" alt="#">
													</span>
														<div class="carDetail">
															<p class="carName">���� LF �Ÿ ���̺긮��</p>
															<p class="carPrice"><span class="num">3,000</span><em>����</em></p>
															<p class="result_calc carMonth">�� ���Ա� <span class="price_calc uiNumbercount uiPriceCalc">0</span>��</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</c:when>
					</c:choose>
				</div>

				<div class="uifix_bottom">
					<c:choose>
						<c:when test="${param.result == 'resultX'}">
							<!-- �����ѵ���ȸ ��� ���� ���(�ΰ�case) -->
							<a href="#" class="uibtn uibtn_red uibtn_shadow">�߰����� Ȩ���� ����</a>
						</c:when>
						<c:otherwise>
							<a href="#" onclick="uiLayer.init({obj:'.confirm'});return false;" class="uibtn uibtn_red uibtn_shadow">���� ��û�ϱ�</a>
						</c:otherwise>
					</c:choose>
				</div>
			</div>
			<!-- // [case : ��� ������] -->

		</div>

		<!-- ���̾� �˾� -->
		<!-- [case : '��� x��ư' Ŭ����, �ѵ���ȸ�� �����Ͻðڽ��ϱ�?] -->
		<div class="uilayer btn_endUntact bsLayer">	<!--btn_endUntact-->
			<div class="uilayer_wrap">
				<div class="uilayer_box">
					<p class="txt_main">�ѵ���ȸ�� �����Ͻðڽ��ϱ�?</p>
					<div class="btn_set uialign_flex">
						<div class="uialign_item"><button type="button" class="uibtn uibtn_white uibtn_size_h45" ui-btn-action="close">���</button></div>
						<div class="uialign_item"><a href="https://m.encar.com/bs/loanconsult.do?WT.hit=LoanConsult_mWebGnb" class="uibtn uibtn_red uibtn_size_h45">Ȯ��</a></div>
					</div>
				</div>
			</div>
		</div>

		<!-- ���̾� �˾� -->
		<div class="uilayer confirm bsLayer">
			<div class="uilayer_wrap">
				<div class="uilayer_box">
					<p class="txt_main">������ ��û�Ͻðڽ��ϱ�?</p>
					<div class="btn_set uialign_flex">
						<div class="uialign_item"><button type="button" class="uibtn uibtn_red uibtn_size_h45" ui-btn-action="close">Ȯ��</button></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- //container -->

</div>
<!-- //wrap -->
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
<script>
	// �ֱ� �� ���� �����̵�
    loanUI.init(function setEvent(){
        $(document).on({
            'calculate': function(e){
                var target = $(e.target);
                if(target.hasClass('uiPriceCalc') && target.parents('.itemScene.on').length){
                    var price = state.price * 10000,
                        month = state.month,
                        ratio = 0.039;

                    //������� �� ������ �� 12 �� (1 + ������ �� 12)^�Ⱓ �� ((1 + ������ �� 12)^�Ⱓ -1)
                    var monthly = Math.round(price * (ratio / 12) * Math.pow((1 + ratio / 12), month) / (Math.pow((1 + ratio / 12), month) - 1));

                    var attr = comma(monthly).split('').join('/');
                    target.attr('data-count', attr);
                    UInumbercount.init(300);
                }
            }
        });
    });
    /*if(target.parents('.itemScene.on').length){
		alert(111);
    }*/

</script>
</body>
</html>