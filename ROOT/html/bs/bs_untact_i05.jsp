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
<body class="bs bs_untact_i05">

<!-- wrap// -->
<div id="wrap">

	<!-- header//-->
	<jsp:include page="/html/_header.jsp?pageType=popup&pageBtn=close&fixed=true&pageBtnLayer=btn_endUntact&pageTitle=�ѵ���ȸ" flush="true"></jsp:include>
	<!-- //header -->	<!-- x(�ݱ�)��ư Ŭ����, 'btn_endUntact'�˾�â ȣ�� -->

	<!-- container//-->
	<div id="container">
		<div class="cont_process ars"><!-- [��_20181219] ��ȸ�� ȭ�� : Ŭ����'loading'�߰� -->

			<ul class="bar_area">
				<li class="step on"><p>��������</p></li>
				<li class="step on"><p>�����Է�</p></li>
				<li class="step on"><p>����</p></li>
				<li class="step"><p>�ѵ���ȸ���</p></li>
			</ul>

			<!-- [��_20181219] [case : ��ȸ��] // -->
			<div class="cont_area">
				<strong class="txt_main">��*�� �� �����ѵ��� ��ȸ���Դϴ�.</strong>
				<p class="txt_sub">��� ��Ȳ�� ���� �ִ� 1�� ������ �ð��� �ҿ�� �� �ֽ��ϴ�.</p>
				<div class="ui_loading_listing"></div>	<!-- �ε��� -->
			</div>
			<!-- // [case : ��ȸ��] -->

			<!-- ARS���� ���� -->
			<div class="ars_area">
				<div class="ars_request">
					<h3 class="tit_ars">ARS ����</h3>
					<a class="link_arsPreview" href="#" onclick="uiLayer.init({obj:'.btn_arsPreview'});return false;">ARS��Ʈ �̸�����</a><!-- [��_20181107] onclick�߰� -->
					<p class="txt_detail">���νſ������� ��ȸ, ���� �� Ȱ��, �̿� � ���� ���Ǹ� ���� ARS�� ���� ���� ������ �����մϴ�.</p>
					<div class="input_phone">
						<label for="ars_phone">�޴���ȭ��ȣ</label>
						<input type="text" id="ars_phone" value="010-6391-****">
					</div>
					<div class="btn_area alert"><!-- [��_20181123] alert : ��ư ��Ȱ��ȭ & �˷� ����(noti_txt) ���� -->
						<!--�⺻ �ȳ��޼���-->
						<button type="button" onclick="uiLayer.init({obj:'.btn_arsOneM'});return false;" class="uibtn uibtn_redline uibtn_size_h45">ARS ���ǿ�û</button><!-- [��_20181123] 'uibtn_size_h45'�߰� -->
						<!--ARSä�κ���-->
						<!--<button type="button" onclick="uiLayer.init({obj:'.btn_arsLater'});return false;" class="uibtn uibtn_redline uibtn_size_h45">ARS ���ǿ�û</button>--><!-- [��_20181123] 'uibtn_size_h45'�߰� -->
						<button type="button" class="uibtn uibtn_silverline uibtn_size_h45">ARS ���ǿ�û</button><!-- [��_20181123] ��Ȱ��ȭ ��ư �߰� -->
						<p class="noti_txt">��ȭ ���� ���� �� ���û���� 1�� ���� �ҿ�� �� �ֽ��ϴ�.</p><!-- [��_20181123] �˷� ���� �߰� -->
					</div>
				</div>
			</div>
			<div class="pw_area">
				<h4 class="tix_pw">���κ�й�ȣ</h4>
				<div class="input_pw">	<!-- [case: input disabled ] finished Ŭ���� �߰� -->
					<input type="number" class="num_pw"><!--inputȰ��ȭ-->
					<!--<input type="number" class="num_pw" value="66" disabled="disabled">--><!--input��Ȱ��ȭ(�Է¿Ϸ�)-->
				</div>
				<div class="txt_sub">
					<p>���κ�й�ȣ�� 3ȸ �߸� �Է����� ���, ARS ������ �ڵ����� ����˴ϴ�.</p>
					<p>��õ��� ���Ͻø� ARS ���ǿ�û ��ư�� �ٽ� �����ֽñ� �ٶ��ϴ�.</p>
				</div>
				<div class="btn_area">
					<!--ARS ���ǿ�û ��ư Ŭ�� ���� ���-->
					<button type="button" onclick="uiLayer.init({obj:'.btn_arsError3'});return false;" class="uibtn uibtn_red">����</button>
					<!--������ȣ 3ȸ �Է� ������-->
					<!--<button type="button" onclick="uiLayer.init({obj:'.btn_arsError1'});return false;" class="uibtn uibtn_red">Ȯ��</button>-->
					<!--���� ������-->
					<!--<button type="button" onclick="uiLayer.init({obj:'.btn_arsError2'});return false;" class="uibtn uibtn_red">Ȯ��</button>-->
					<!--������ȣ ���Է½�-->
					<!--<button type="button" onclick="uiLayer.init({obj:'.btn_arsError3'});return false;" class="uibtn uibtn_red">Ȯ��</button>-->
					<!--������û�ð� �ʰ���-->
					<!--<button type="button" onclick="uiLayer.init({obj:'.btn_arsError4'});return false;" class="uibtn uibtn_red">Ȯ��</button>-->
					<!--���� �߻���-->
					<!--<button type="button" onclick="uiLayer.init({obj:'.btn_arsError5'});return false;" class="uibtn uibtn_red">Ȯ��</button>-->

					<!--ARS ���� �Ϸ� �޼���-->
					<!--<button type="button" onclick="uiAlert.init({txt:'ARS ������ �Ϸ�Ǿ����ϴ�.'});return false;" class="uibtn uibtn_red">Ȯ��</button>-->
				</div>
			</div>

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

		<!-- ���̾� �˾� ['ARS ���ǿ�û' ��ư Ŭ���� case1~3 ] // -->

		<!-- [��_20181107] [case : ARS��Ʈ �̸����� Ŭ����] �߰� -->
		<div class="uilayer btn_arsPreview bsLayer">	<!-- btn_ars -->
			<div class="uilayer_wrap">
				<div class="uilayer_box">
					<p class="txt_main">ARS��Ʈ �̸�����</p>
					<p class="sub_txt">KEB �ϳ������Դϴ�. �մԲ����� ���� ���� ��û�� ���� �ſ������� � �ǰ� ���νſ������� ��ȸ, ���� �� Ȱ��, �̿� � ���� ���Ǹ� �Ϸ��� �Ͻʴϴ�.<br><br>�����Ͻø� ȭ�鿡�� Ȯ���Ͻ� ���κ�й�ȣ �� �ڸ��� �����ֽñ� �ٶ��ϴ�.</p>
					<div class="btn_set uialign_flex">
						<div class="uialign_item"><button type="button" class="uibtn uibtn_red uibtn_size_h45" ui-btn-action="close">Ȯ��</button></div>
					</div>
				</div>
			</div>
		</div>

		<!-- ���̾� �˾� ['ARS ���ǿ�û' ��ư Ŭ���� case1~3 ] // -->

		<!-- [case: 'ARS ���ǿ�û' ��ư Ŭ���� => �⺻ �ȳ��޼���] -->
		<div class="uilayer btn_arsOneM bsLayer">	<!--btn_arsOneM-->
			<div class="uilayer_wrap">
				<div class="uilayer_box">
					<p class="txt_main">ȭ�鿡 ������ ���� ��й�ȣ �� �ڸ��� ����� �� ARS ���� ��ȭ�� ���� �Է����ּ���.<br>�Ʒ� Ȯ�� ��ư�� �����ø� 1�� ���� ARS ��ȭ�� �帮�ڽ��ϴ�.</p><!-- [��_20181213] ���� -->
					<div class="btn_set uialign_flex">
						<div class="uialign_item"><button type="button" class="uibtn uibtn_red uibtn_size_h45" ui-btn-action="close">Ȯ��</button></div>
					</div>
				</div>
			</div>
		</div>
		<!-- [case: 'ARS ���ǿ�û' ��ư Ŭ���� => ARSä�κ���] -->
		<div class="uilayer btn_arsLater bsLayer">	<!--btn_arsLater-->
			<div class="uilayer_wrap">
				<div class="uilayer_box">
					<p class="txt_main">���� ��� ARS ä���� �̿����Դϴ�.<br>��� �Ŀ� �õ����ּ���.</p>
					<div class="btn_set uialign_flex">
						<div class="uialign_item"><button type="button" class="uibtn uibtn_red uibtn_size_h45" ui-btn-action="close">Ȯ��</button></div>
					</div>
				</div>
			</div>
		</div>
		<!-- // ���̾� �˾� ['ARS ���ǿ�û' ��ư Ŭ���� case1~3 ] -->


		<!-- ���̾� �˾� ['Ȯ��' ��ư Ŭ���� case1~6 ] // -->

		<!-- [case: Ȯ��'��ư Ŭ�� => ARS ���ǿ�û ��ư Ŭ�� ���� ���] -->
		<div class="uilayer btn_arsRequest bsLayer">	<!--btn_arsRequest-->
			<div class="uilayer_wrap">
				<div class="uilayer_box">
					<p class="txt_main">ARS ���ǿ�û ��ư�� ����<br>ARS ������ ���� �������ּ���.</p>
					<div class="btn_set uialign_flex">
						<div class="uialign_item"><button type="button" class="uibtn uibtn_red uibtn_size_h45" ui-btn-action="close">Ȯ��</button></div>
					</div>
				</div>
			</div>
		</div>
		<!-- [case: Ȯ��'��ư Ŭ�� => ������ȣ 3ȸ �Է� ������] -->
		<div class="uilayer btn_arsError1 bsLayer">	<!--btn_arsError1-->
			<div class="uilayer_wrap">
				<div class="uilayer_box">
					<p class="txt_main">������ȣ�� 3ȸ �߸� �Է��Ͽ����ϴ�.<br>ARS ������ �ٽ� �������ֽñ� �ٶ��ϴ�.</p>
					<div class="btn_set uialign_flex">
						<div class="uialign_item"><button type="button" class="uibtn uibtn_red uibtn_size_h45" ui-btn-action="close">Ȯ��</button></div>
					</div>
				</div>
			</div>
		</div>
		<!-- [case: Ȯ��'��ư Ŭ�� => ���� ������] -->
		<div class="uilayer btn_arsError2 bsLayer">	<!--btn_arsError2-->
			<div class="uilayer_wrap">
				<div class="uilayer_box">
					<p class="txt_main">���Բ��� �����Ͻ� ����ó�� ARS ����õ��Ͽ����� ������ ���� ������ �ߴ��մϴ�.<br>��� �� �ٽ� �õ����ֽñ� �ٶ��ϴ�.</p>
					<div class="btn_set uialign_flex">
						<div class="uialign_item"><button type="button" class="uibtn uibtn_red uibtn_size_h45" ui-btn-action="close">Ȯ��</button></div>
					</div>
				</div>
			</div>
		</div>
		<!-- [case: Ȯ��'��ư Ŭ�� => ������ȣ ���Է½�] -->
		<div class="uilayer btn_arsError3 bsLayer">	<!--btn_arsError3-->
			<div class="uilayer_wrap">
				<div class="uilayer_box">
					<p class="txt_main">������ȣ�� �Է����� �ʰ� ARS ������ �����ϼ̽��ϴ�. ARS ������ �ٽ� �������ֽñ� �ٶ��ϴ�.</p>
					<div class="btn_set uialign_flex">
						<div class="uialign_item"><button type="button" class="uibtn uibtn_red uibtn_size_h45" ui-btn-action="close">Ȯ��</button></div>
					</div>
				</div>
			</div>
		</div>
		<!-- [case: Ȯ��'��ư Ŭ�� => ������û�ð� �ʰ���] -->
		<div class="uilayer btn_arsError4 bsLayer">	<!--btn_arsError4-->
			<div class="uilayer_wrap">
				<div class="uilayer_box">
					<p class="txt_main">ARS ������û�ð��� �ʰ��Ͽ����ϴ�.<br>ARS ������ �ٽ� �������ֽñ� �ٶ��ϴ�.</p>
					<div class="btn_set uialign_flex">
						<div class="uialign_item"><button type="button" class="uibtn uibtn_red uibtn_size_h45" ui-btn-action="close">Ȯ��</button></div>
					</div>
				</div>
			</div>
		</div>
		<!-- [case: Ȯ��'��ư Ŭ�� => ���� �߻���] -->
		<div class="uilayer btn_arsError5 bsLayer">	<!--btn_arsError5-->
			<div class="uilayer_wrap">
				<div class="uilayer_box">
					<p class="txt_main">������ �߻��Ͽ� ARS ������ �Ϸ����� ���Ͽ����ϴ�. ARS ������ �ٽ� �������ֽñ� �ٶ��ϴ�.</p>
					<div class="btn_set uialign_flex">
						<div class="uialign_item"><button type="button" class="uibtn uibtn_red uibtn_size_h45" ui-btn-action="close">Ȯ��</button></div>
					</div>
				</div>
			</div>
		</div>

		<!-- // ���̾� �˾� ['Ȯ��' ��ư Ŭ���� case1~6 ] -->

	</div>
	<!-- //container -->

</div>
<!-- //wrap -->

</body>
</html>