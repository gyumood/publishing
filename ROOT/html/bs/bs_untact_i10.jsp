<%@ page contentType="text/html; charset=EUC-KR"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="euc-kr" />
<meta name="viewport" content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width" />
<meta name="format-detection" content="telephone=no, address=no, email=no">
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
<body class="bs bs_untact_i10">

<!-- wrap// -->
<div id="wrap">

	<!-- header//-->
	<jsp:include page="/html/_header.jsp?pageType=popup&pageBtn=close&fixed=true&pageBtnLayer=btn_endPwEdit&pageTitle=��й�ȣ �����ϱ�" flush="true"></jsp:include>
	<!-- //header -->	<!-- * x(�ݱ�)��ư Ŭ����, 'btn_endPwEdit'�˾�â ȣ�� -->

	<!-- container//-->
	<div id="container">
		<div class="cont_process">
			<div class="inputPw_area">
				<p class="tit_inputPw">������ ��й�ȣ�� �Է����ּ���.</p>
				<div class="input_inputPw alert"><!-- alert : �˷� ����(noti_txt) ���� -->
					<!-- ��й�ȣ -->
					<div class="uiinput_txt">
						<label for="in_password" class="tit_input">��й�ȣ</label>
						<input type="text" id="in_password">
					</div>
					<!-- ��й�ȣ Ȯ�� -->
					<div class="uiinput_txt">
						<label for="in_password" class="tit_input">��й�ȣ Ȯ��</label>
						<input type="text" id="in_password">
					</div>
					<p class="add_txt">8~16��, ��/�ҹ���, ����, Ư������ ����</p>
					<p class="noti_txt">��й�ȣ�� �Է����ּ���.</p>
					<p class="noti_txt">��й�ȣ Ȯ���� ��й�ȣ�� ��ġ���� �ʽ��ϴ�.</p>
				</div>
			</div>
			<div class="uifix_bottom"><!-- [��_20181221] Ŭ������ ����- -->
				<!--��й�ȣ ���� �Ϸ� �޼���-->
				<button type="button" onclick="uiAlert.init({txt:'��й�ȣ�� ����Ǿ����ϴ�.'});return false;" class="uibtn uibtn_red">Ȯ��</button>
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
	</div>
	<!-- //container -->

</div>
<!-- //wrap -->

</body>
</html>