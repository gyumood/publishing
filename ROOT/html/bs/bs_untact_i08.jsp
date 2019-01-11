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
<body class="bs bs_untact_i08">

<!-- wrap// -->
<div id="wrap">

	<!-- header//-->
	<jsp:include page="/html/_header.jsp?pageType=popup&pageBtn=back&fixed=true&pageTitle=�ѵ���ȸ ���" flush="true"></jsp:include>
	<!-- //header -->	<!-- '����'Ŭ����, �ѵ����ȳ� �������� ���ư��� -->

	<!-- container//-->
	<div id="container">
		<div class="cont_process">
			<div class="viewResult_area">
				<p class="tit_viewResult">�ѵ���ȸ ��� Ȯ���� ���� �ѵ� ��ȸ�� �Է��ߴ� ������ �Է����ּ���.</p>
				<div class="input_viewResult">
					<!-- �̸� -->
					<div class="uiinput_txt alert"><!-- alert : �˷� ����(noti_txt) ���� -->
						<label for="inpName" class="tit_input">�̸�</label>
						<input type="text" id="inpName" placeholder="�̸� �Է�">
						<p class="noti_txt">�̸��� Ȯ�����ּ���.</p><!-- [��_20181207] �˷� ���� �߰� -->
					</div>
					<!-- �޴���ȭ��ȣ -->
					<div class="uiinput_txt alert"><!-- alert : �˷� ����(noti_txt) ���� -->
						<label for="inpPhone" class="tit_input">�޴���ȭ��ȣ</label>
						<input type="number" id="inpPhone" placeholder="'-' �����ϰ� ���ڸ� �Է�">
						<p class="noti_txt">�޴���ȭ��ȣ�� Ȯ�����ּ���.</p><!-- [��_20181207] �˷� ���� �߰� -->
					</div>
					<!-- ��й�ȣ -->
					<div class="uiinput_txt alert"><!-- alert : �˷� ����(noti_txt) ���� -->
						<label for="inpPassword" class="tit_input">��й�ȣ</label>
						<input type="text" id="inpPassword" placeholder="��й�ȣ �Է�" >
						<p class="add_txt">8~16��, ��/�ҹ���, ����, Ư������ ����</p>
						<p class="noti_txt">��й�ȣ�� Ȯ�����ּ���.</p><!-- [��_20181207] ���� ���� -->
						<a class="forget_pw" href="#" onclick="uiLayer.init({obj:'.btn_pwEdit'});return false;">��й�ȣ�� ��ﳪ�� ��������?</a>
					</div>
					<p class="add_txt">�����ȸ �����Ͽ� ������� �ִٸ� �߰����� �����ͷ� �����ּ���.<br>02-754-9914 (���� 10�� ~ ���� 6��)</p>
				</div>
				<div class="btn_area alert"><!-- alert : �˷� ����(noti_txt) ���� -->
					<p class="noti_txt">�Է��׸��� Ȯ�����ּ���.</p><!-- ���� ���Է½� --><!-- [��_20181207] �˷� ���� �߰� -->
					<p class="noti_txt">�ѵ���ȸ ��û ������ �����ϴ�.</p><!-- ��Ī�Ǵ� �̸�, �޴��� ��ȣ ������ ������ -->
					<button type="button" class="uibtn uibtn_red">�ѵ���ȸ �������</button>
				</div>
			</div>
		</div>

		<!-- ���̾� �˾�(���� Ȯ�� �� ��й�ȣ ����) -->
		<div class="uilayer btn_pwEdit bsLayer">	<!--btn_pwEdit-->
			<div class="uilayer_wrap">
				<div class="uilayer_box">
					<p class="txt_main">���� Ȯ�� ��<br>��й�ȣ�� ������ �� �ֽ��ϴ�.<br>��� �����ϰڽ��ϱ�?</p>
					<div class="btn_set uialign_flex">
						<div class="uialign_item"><button type="button" class="uibtn uibtn_white uibtn_size_h45" ui-btn-action="close">���</button></div>
						<div class="uialign_item"><button type="button" class="uibtn uibtn_red uibtn_size_h45">Ȯ��</button></div>
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