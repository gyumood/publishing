<%@ page contentType="text/html; charset=EUC-KR"%>
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
<body class="bs bs_untact_i03">

<!-- wrap// -->
<div id="wrap">

	<!-- header//-->	<!-- [��_20180928] header => include -->
	<jsp:include page="/html/_header.jsp?pageType=popup&pageBtn=close&fixed=true&pageBtnLayer=btn_endUntact&pageTitle=�ѵ���ȸ" flush="true"></jsp:include>
	<!-- //header -->	<!-- [��_20181019] x(�ݱ�)��ư Ŭ����, 'btn_endUntact'�˾�â ȣ�� -->

	<!-- container//-->
	<div id="container">	<!-- [��_20180928] ������ ���δ� 'container'�߰� -->
		<div class="cont_process inform_input">
			<ul class="bar_area">
				<li class="step on"><p>��������</p></li>
				<li class="step on"><p>�����Է�</p></li>
				<li class="step"><p>����</p></li>
				<li class="step"><p>�ѵ���ȸ���</p></li>
			</ul>
			<!-- �����Է� ���� -->
			<div class="input_area">
				<!-- ��ȸ�� ���� -->
				<div class="information_area">
					<h2 class="tit">��ȸ�� ����</h2>
					<ul class="list_wrap">
						<li class="list_inform">
							<dl>
								<dt>�̸�</dt>
								<dd>�迬��</dd>
							</dl>
						</li>
						<li class="list_inform">
							<dl>
								<dt>�ֹι�ȣ</dt>
								<dd>820523-*******</dd>
							</dl>
						</li>
						<li class="list_inform">
							<dl>
								<dt>�޴���ȭ��ȣ</dt>
								<dd>010-6391-2185</dd>
							</dl>
						</li>
					</ul>
				</div>
				<!-- �����Է� -->
				<div class="input_wrap">
					<!-- �������� -->
					<div class="radio_area alert"><!-- [��_20181024] class���� / alert:�˷� ����(noti_txt) ���� -->
						<h2 class="tit">��������</h2>
						<div class="uialign_float">
							<span class="uialign_item uiinput_oblong">
								<input type="radio" id="insurance4_o" name="work"><!-- [��_20181024] checked���� -->
								<label for="insurance4_o"><span class="td">������<br>(4�뺸�� O)</span></label>
							</span>
							<span class="uialign_item uiinput_oblong">
								<input type="radio" id="insurance4_x" name="work">
								<label for="insurance4_x"><span class="td">������<br>(4�뺸�� X)</span></label>
							</span>
							<span class="uialign_item uiinput_oblong">
								<input type="radio" id="personal" name="work">
								<label for="personal"><span class="td">���λ����</span></label>
							</span>
							<span class="uialign_item uiinput_oblong">
								<input type="radio" id="corporate" name="work">
								<label for="corporate"><span class="td">���λ����</span></label>
							</span>
							<span class="uialign_item uiinput_oblong">
								<input type="radio" id="etc_work" name="work">
								<label for="etc_work"><span class="td">��Ÿ</span></label>
							</span>
						</div>
						<p class="noti_txt">���������� �������ּ���.</p>
					</div>
					<!-- ���ñ��� -->
					<div class="radio_area alert"><!-- [��_20181024] class���� / alert:�˷� ����(noti_txt) ���� -->
						<h2 class="tit">���ñ���</h2>
						<div class="uialign_float">
							<span class="uialign_item uiinput_oblong">
								<input type="radio" id="apt" name="home"><!-- [��_20181024] checked���� -->
								<label for="apt"><span class="td">����Ʈ</span></label>
							</span>
							<span class="uialign_item uiinput_oblong">
								<input type="radio" id="villa" name="home">
								<label for="villa"><span class="td">����</span></label>
							</span>
							<span class="uialign_item uiinput_oblong">
								<input type="radio" id="row" name="home">
								<label for="row"><span class="td">����/�ټ���</span></label>
							</span>
							<span class="uialign_item uiinput_oblong">
								<input type="radio" id="officetel" name="home">
								<label for="officetel"><span class="td">���ǽ���</span></label>
							</span>
							<span class="uialign_item uiinput_oblong">
								<input type="radio" id="single" name="home">
								<label for="single"><span class="td">�ܵ�</span></label>
							</span>
							<span class="uialign_item uiinput_oblong">
								<input type="radio" id="multiplex" name="home">
								<label for="multiplex"><span class="td">�ֻ���</span></label>
							</span>
							<span class="uialign_item uiinput_oblong">
								<input type="radio" id="etc_home" name="home">
								<label for="etc_home"><span class="td">��Ÿ</span></label>
							</span>
						</div>
						<p class="noti_txt">���� ������ �������ּ���.</p>
					</div>
					<!-- �ּ� -->
					<!-- [��_20181024] input�Է� ����� ���̵� ���� // -->
					<div class="uiinput_txt alert"><!-- alert : �˷� ����(noti_txt) ���� -->
						<label for="in_address" class="tit_input">�ּ�</label>
						<input type="number" id="in_address" placeholder="�����ȣ">
						<a class="request" href="#">�����ȣã��</a>
						<input type="text" placeholder="�ּ�">
						<input type="text" placeholder="���ּ� �Է�">
						<p class="noti_txt">�ּҸ� Ȯ�����ּ���.</p>
					</div>
					<!-- // input�Է� ����� ���̵� ���� -->

					<!-- �̸��� -->
					<!-- [��_20181024] input�Է� ����� ���̵� ���� // -->
					<div class="uiinput_txt alert"><!-- alert : �˷� ����(noti_txt) ���� -->
						<label for="in_email" class="tit_input">�̸���</label>
						<input type="text" id="in_email" placeholder="�̸��� �Է�" >
						<p class="add_txt">���� ���� ������ �̸��Ϸ� �߼۵� �� ������ ��Ȯ�ϰ� �ۼ����ּ���.</p>
						<p class="noti_txt">�̸����� Ȯ�����ּ���.</p>
					</div>
					<!-- // input�Է� ����� ���̵� ���� -->

				</div>
			</div>
			<!-- �����Է�(��й�ȣ) ���� -->
			<div class="password_area alert"><!-- alert : �˷� ����(noti_txt) ���� -->
				<p class="request_txt">�ѵ���� Ȯ�� �� ����� ������ �Է����ּ���.</p>
				<!-- [��_20181024] input�Է� ����� ���̵� ���� // -->
				<div class="uiinput_txt alert"><!-- alert : �˷� ����(noti_txt) ���� -->
					<label for="in_password" class="tit_input">��й�ȣ</label>
					<input type="text" id="in_password">
				</div>
				<!-- // input�Է� ����� ���̵� ���� -->

				<!-- [��_20181024] input�Է� ����� ���̵� ���� // -->
				<div class="uiinput_txt alert"><!-- alert : �˷� ����(noti_txt) ���� -->
					<label for="in_rePassword" class="tit_input">��й�ȣ Ȯ��</label>
					<input type="text" id="in_rePassword">
					<p class="add_txt">8~16��, ��/�ҹ���, ����, Ư������ ����</p>
					<p class="noti_txt">��й�ȣ�� �Է����ּ���.</p>	<!-- [case : �׸� ���Է� �� '����'��ư Ŭ�� �� ����] -->
					<p class="noti_txt">��й�ȣ�� ���� ��Ģ�� ���߾� �Է����ּ���.<br>(8~16��, ��/�ҹ���, ����, Ư������ ����)</p>	<!-- [case : ��й�ȣ�� ���� ��Ģ�� ��߳� ��� '����'��ư Ŭ�� �� ����] -->
					<p class="noti_txt">��й�ȣ Ȯ���� ��й�ȣ�� ��ġ���� �ʽ��ϴ�.</p>	<!-- [case : ��й�ȣ Ȯ���� ��й�ȣ�� ��ġ���� �ʴ� ��� '����'��ư Ŭ�� �� ����] -->
				</div>
				<!-- // input�Է� ����� ���̵� ���� -->

				<!-- [��_20181019] ��ư���� ����(class,div���� ��) // -->
				<div class="btn_area">
					<p class="noti_txt">�Է��׸��� Ȯ�����ּ���.</p>	<!-- [case : �Ѱ��� �׸��̶� ���Է��� ��� '����'��ư Ŭ�� �� ����] -->
					<a href="#" class="uibtn uibtn_red">����</a>
				</div>
				<!-- // ��ư���� ���� -->
			</div>
		</div>

		<!-- ���̾� �˾� --><!--[��_20181019]�߰�-->
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
	</div>
	<!-- //container -->

</div>
<!-- //wrap -->

</body>
</html>