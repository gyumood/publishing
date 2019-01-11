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
<body class="bs bs_untact_i09">

<!-- wrap// -->
<div id="wrap">

	<!-- header//-->
	<jsp:include page="/html/_header.jsp?pageType=popup&pageBtn=close&fixed=true&pageBtnLayer=btn_endPwEdit&pageTitle=��й�ȣ �����ϱ�" flush="true"></jsp:include>	<!-- x(�ݱ�)��ư Ŭ����, 'btn_endPwEdit'�˾�â ȣ�� -->
	<!-- //header -->

	<!-- container//-->
	<div id="container">
		<div class="cont_process pwEdit">	<!-- pwEdit : ��й�ȣ ���� ������ -->
			<!-- �����Է� ���� -->
			<div class="input_area">
				<div class="input_wrap">
					<!-- �̸� -->
					<div class="uiinput_txt alert"><!-- alert : �˷� ����(noti_txt) ���� -->
						<label for="in_name" class="tit_input">�̸�</label>
						<input type="text" id="in_name" placeholder="�̸� �Է�" >
						<p class="noti_txt">�̸��� Ȯ�����ּ���.</p>
					</div>
					<!-- ������� -->
					<div class="uiinput_txt alert"><!-- alert : �˷� ����(noti_txt) ���� -->
						<label for="in_birth" class="tit_input">�������</label>
						<input type="tel" id="in_birth" placeholder="YYMMDD" maxlength="6" />
						<p class="noti_txt">��������� Ȯ�����ּ���.</p>
					</div>
					<!-- ���� ���� -->
					<div class="radio_area alert"><!-- alert:�˷� ����(noti_txt) ���� -->
						<h2 class="tit">����</h2>
						<div class="uialign_float">
							<span class="uialign_item uiinput_oblong">
								<input type="radio" id="male" name="gender">
								<label for="male"><span class="td">��</span></label>
							</span>
							<span class="uialign_item uiinput_oblong">
								<input type="radio" id="female" name="gender">
								<label for="female"><span class="td">��</span></label>
							</span>
						</div>
						<p class="noti_txt">������ Ȯ�����ּ���.</p>
					</div>
					<!-- �޴���ȭ��ȣ -->
					<div class="uiinput_txt alert"><!-- alert : �˷� ����(noti_txt) ���� -->
						<label for="in_phone" class="tit_input">�޴���ȭ��ȣ</label>
						<input type="tel" id="in_phone" placeholder="'-' �����ϰ� ���ڸ� �Է�" >
						<p class="noti_txt">�޴���ȭ��ȣ�� Ȯ�����ּ���</p>
					</div>
					<!-- ������ȣ -->
					<div class="uiinput_txt alert"><!-- alert : �˷� ����(noti_txt) ���� -->
						<label for="in_verifiCode" class="tit_input">������ȣ</label>
						<input type="number" id="in_phone" placeholder="������ȣ �Է�" >
						<a class="request" onclick="uiLayer.init({obj:'.code_input'});return false;" href="#">������ȣ ��û</a>		<!-- [case : �Է��Ͽ� �ֽʽÿ� �޼���] -->
						<!--<a class="request" onclick="uiLayer.init({obj:'.inform_wrong'});return false;" href="#">������ȣ ��û</a>-->	<!-- [case : �Է��� ������ ��ġ���� �ʽ��ϴ�] -->
						<p class="noti_timer">���� �ð� : 02:57</p>
						<p class="noti_txt">������ȣ�� Ȯ�����ּ���.</p>
					</div>
				</div>
			</div>
			<div class="btn_area alert"><!-- alert : �˷� ����(noti_txt) ���� -->
				<p class="noti_txt">�Է��׸��� Ȯ�����ּ���.</p>
				<a href="#" class="uibtn uibtn_red" onclick="uiAlert.init({txt:'�޴���ȭ ���������� �Ϸ�Ǿ����ϴ�.'});return false;">����</a>
				<!-- [���̾��˾�] 3���� case -->
				<!--<a href="#" class="uibtn uibtn_red uibtn_shadow" onclick="uiLayer.init({obj:'.code_wrong'});return false;">����</a>-->	<!-- [case : ������ȣ ����ġ ��] -->
				<!--<a href="#" class="uibtn uibtn_red uibtn_shadow" onclick="uiLayer.init({obj:'.time_over'});return false;">����</a>-->	<!-- [case : ������ȣ 3�� �ȿ� �Է�X ��] -->
				<!--<a href="#" class="uibtn uibtn_red uibtn_shadow" onclick="uiLayer.init({obj:'.history_already'});return false;">����</a>	-->		<!-- [case : �ѵ���ȸ�� �̹� �ߴ� ��] -->
			</div>
		</div>

		<!-- ���̾� �˾� -->
		<!-- [case : '��� x��ư' Ŭ����, ��й�ȣ ������ �����Ͻðڽ��ϱ�?] -->
		<div class="uilayer btn_endPwEdit bsLayer">	<!--btn_endPwEdit-->
			<div class="uilayer_wrap">
				<div class="uilayer_box">
					<p class="txt_main">��й�ȣ ������ �����Ͻðڽ��ϱ�?</p>
					<div class="btn_set uialign_flex">
						<div class="uialign_item"><button type="button" class="uibtn uibtn_white uibtn_size_h45" ui-btn-action="close">���</button></div>
						<div class="uialign_item"><a href="#" class="uibtn uibtn_red uibtn_size_h45">Ȯ��</a></div>
					</div>
				</div>
			</div>
		</div>

		<!-- [case : '������ȣ ��û' Ŭ����, �Է��Ͽ� �ֽʽÿ� �޼���] -->
		<div class="uilayer code_input bsLayer">
			<div class="uilayer_wrap">
				<div class="uilayer_box">
					<p class="txt_main">������ �޴���ȭ�� ���ŵ� ������ȣ�� �Է��Ͽ� �ֽʽÿ�.</p><!-- [��_20181213] ��ħǥ �߰� -->
					<p class="sub_txt">��Ʈ��ũ ��Ȳ�� ���� ������ �� �ֽ��ϴ�.</p>
					<div class="btn_set uialign_flex">
						<div class="uialign_item"><button type="button" class="uibtn uibtn_red uibtn_size_h45" ui-btn-action="close">Ȯ��</button></div>
					</div>
				</div>
			</div>
		</div>
		<!-- [case : '������ȣ ��û' Ŭ����, �Է��� ������ ��ġ���� �ʽ��ϴ�.] -->
		<div class="uilayer inform_wrong bsLayer">
			<div class="uilayer_wrap">
				<div class="uilayer_box">
					<p class="txt_main">�Է��� ������ ��ġ���� �ʽ��ϴ�.<br>������ �ٽ� �ѹ� Ȯ�����ּ���.</p>
					<div class="btn_set uialign_flex">
						<div class="uialign_item"><button type="button" class="uibtn uibtn_red uibtn_size_h45" ui-btn-action="close">Ȯ��</button></div>
					</div>
				</div>
			</div>
		</div>

		<!-- [case : '����'Ŭ����, ������ȣ�� ��ġ���� �ʽ��ϴ�.] -->
		<div class="uilayer code_wrong bsLayer">
			<div class="uilayer_wrap">
				<div class="uilayer_box">
					<p class="txt_main">������ȣ�� ��ġ���� �ʽ��ϴ�.<br>������ȣ ��û�� �ٽ� �ѹ� �������ּ���.</p>
					<div class="btn_set uialign_flex">
						<div class="uialign_item"><button type="button" class="uibtn uibtn_red uibtn_size_h45" ui-btn-action="close">Ȯ��</button></div>
					</div>
				</div>
			</div>
		</div>
		<!-- [case : '����'Ŭ����, �Է½ð��� �ʰ��Ͽ����ϴ�.] -->
		<div class="uilayer time_over bsLayer">
			<div class="uilayer_wrap">
				<div class="uilayer_box">
					<p class="txt_main">������ȣ �Է½ð��� �ʰ��Ͽ����ϴ�.<br>������ȣ ��û�� �ٽ� �ѹ� �������ּ���.</p>
					<div class="btn_set uialign_flex">
						<div class="uialign_item"><button type="button" class="uibtn uibtn_red uibtn_size_h45" ui-btn-action="close">Ȯ��</button></div>
					</div>
				</div>
			</div>
		</div>
		<!-- [case : '����'Ŭ����, �ѵ���ȸ �̷��� �ֽ��ϴ�.] -->
		<div class="uilayer history_already bsLayer">
			<div class="uilayer_wrap">
				<div class="uilayer_box">
					<p class="txt_main">�̹� �ѵ���ȸ �̷��� �ֽ��ϴ�. ������ ��ȸ�ߴ� ������ ����� Ȯ���� �� �ֽ��ϴ�. �ѵ��� Ȯ���ϰڽ��ϱ�?</p><!-- [��_20181213] ����(�ֽ��ϴ�. ������) -->
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

</body>
</html>