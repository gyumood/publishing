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
<body class="bs bs_untact_v01">

<!-- wrap// -->
<div id="wrap">

	<!-- header//-->
	<jsp:include page="/html/_header.jsp?pageType=popup&pageBtn=close&fixed=true&pageBtnLayer=btn_endUntact&pageTitle=�ѵ���ȸ" flush="true"></jsp:include>
	<!-- //header -->	<!-- [��_20181019] x(�ݱ�)��ư Ŭ����, 'btn_endUntact'�˾�â ȣ�� -->

	<!-- container//-->
	<div id="container">	<!-- [��_20180928] ������ ���δ� 'container'�߰� -->
		<div class="cont_untact">
			<div class="title_area">
				<h2>1������ �˾ƺ��� �ѵ� ��ȸ</h2>
				<p class="add_txt">�ſ��޿��� ������ ��ġ�� ������<br>�Ƚ��ϰ� ��ȸ�ϼ���!</p>
			</div>
			<div class="process_area">
				<div class="process_list">
					<p class="step">STEP 1</p>
					<p class="tit">��������</p>
				</div>
				<div class="process_list">
					<p class="step">STEP 2</p>
					<p class="tit">�����Է�</p>
				</div>
				<div class="process_list">
					<p class="step">STEP 3</p>
					<p class="tit">����</p>
				</div>
			</div>
			<div class="check_result">
				<p>������ �ѵ���ȸ�� �̷��� �����Ű���?</p>
				<a href="#" class="link_result">�ѵ���ȸ ��� Ȯ���ϱ�</a>
			</div>
			<div class="link_product"><a href="#">�����ǰ �ȳ�</a></div><!-- [��_20181107] �߰� -->
			<!-- [��_20181019] ��ư���� ����(class,div���� ��) // -->
			<div class="uifix_bottom"><!-- [��_20181221] Ŭ������ ����- -->
				<a href="#" class="uibtn uibtn_red">�����ϱ�</a>
			</div>
			<!-- // ��ư���� ���� -->
		</div>

		<!-- ���̾� �˾� -->
		<!-- [case : '��� x��ư' Ŭ����, �ѵ���ȸ�� �����Ͻðڽ��ϱ�?] -->
		<div class="uilayer btn_endUntact bsLayer">	<!--btn_endUntact--><!--[��_20181019] Ŭ������ ����-->
			<div class="uilayer_wrap">
				<div class="uilayer_box">
					<p class="txt_main">�ѵ���ȸ�� �����Ͻðڽ��ϱ�?</p>
					<div class="btn_set uialign_flex">
						<div class="uialign_item"><button type="button" class="uibtn uibtn_white uibtn_size_h45" ui-btn-action="close">���</button></div>
						<div class="uialign_item"><a href="https://m.encar.com/bs/loanconsult.do?WT.hit=LoanConsult_mWebGnb" class="uibtn uibtn_red uibtn_size_h45">Ȯ��</a></div><!--[��_20181019]�߰����� �ȳ��������� ��ũ ����-->
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