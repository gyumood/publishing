<%@ page contentType="text/html; charset=EUC-KR"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="euc-kr" />
<meta name="viewport" content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width" />
<link rel="stylesheet" type="text/css" href="/css/module_common.css"/>
<link rel="stylesheet" type="text/css" href="/css/bs.css"/>
<title>�߰����� ����û : SK��ī</title>
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
<body class="bs bs_loan_i06">

<!-- wrap// -->
<div id="wrap">

	<!-- header//-->
	<div class="backType_header">
		<header>
			<h1 class="blind"><a href="/html/index.jsp">SK encar</a></h1>
			<h2 class="subject"><a>�߰����� ����û</a></h2>
		</header>
	</div>
	<!-- //header -->

	<!-- container//-->
	<div id="container">
		<div class="wrap_request">
			<span class="ico_request"></span>
			<h3>
				�߰����� ��� ��û ����� �����Ͻø�,<br>
				���� ������ ���� �ð� ���� �����帳�ϴ�.
			</h3>
			<p class="info_append">
				���Բ����� �Ʒ� �׸� ���Ǹ� �ź��� �Ǹ��� �ֽ��ϴ�.<br>
				��, �������� ���� ��� ���� ��� �� ��û��<br>
				�Ұ����� �� ������ �˷��帳�ϴ�
			</p>
			<ul class="list_agree">
				<li>
					<div class="area_select">
						<span class="uiinput big">
							<input type="checkbox" id="agree_1" name="">
							<label for="agree_1">���� ���� ���� �̿� �� ��3�� ������ ��� �����մϴ�.</label>
						</span>
					</div>
				</li>
				<li>
					<div class="area_select">
						<span class="uiinput big">
							<input type="checkbox" id="agree_2" name="">
							<label for="agree_2">�������� ���� �� �̿뿡 �����մϴ�.</label>
						</span>
					</div>
					<div id="i_ck1_text" class="txt_agreement">
						<div class="con">
							1. ���� �� �̿� ����<br>
							- ��û���� ���� ��� �� ��û ó��<br>
							- ����û �� ��� ������ǰ �߰� �ȳ�(����,SMS)<br><br>

							2. ���� �� �̿�Ǵ� ���������� �׸�<br>
							- (�ʼ�)�̸�, �޴���ȭ��ȣ<br><br>

							3. ���� �� �̿� �Ⱓ<br>
							����û�Ϸκ��� 1��<br><br>

							* �� �׸� ���Ǹ� �ź��� �Ǹ��� �ֽ��ϴ�. ��, �� �׸� �������� ���� ��� ���� ��� �� ��û�� �Ұ����� �� ������ �˷��帳�ϴ�.
						</div>
					</div>
				</li>
				<li>
					<div class="area_select">
						<span class="uiinput big">
							<input type="checkbox" id="agree_3" name="">
							<label for="agree_3">�������� ��3�� ������ �����մϴ�.</label>
						</span>
					</div>
					<div id="i_ck2_text" class="txt_agreement">
						<div class="con">
							1. ���������� ���� �޴���<br>
							ȿ��ĳ��Ż, �޸���ĳ��Ż, KDBĳ��Ż, ī�Ǿƿ����÷�, ������ĳ��Ż, �ϳ�����, �λ�����, ����ĳ��Ż<br><br>

							2. ���� ����<br>
							- ��û���� ���� ��� �� ��û ó��<br><br>

							3. �����ϴ� �������� �׸�<br>
							- (�ʼ�)�̸�, �޴���ȭ��ȣ<br><br>

							4. �����Ⱓ<br>
							����û�Ϸκ��� 1��<br><br>

							* �� �׸� ���Ǹ� �ź��� �Ǹ��� �ֽ��ϴ�. ��, �� �׸� �������� ���� ��� ���� ��� �� ��û�� �Ұ����� �� ������ �˷��帳�ϴ�.
						</div>
					</div>
				</li>
			</ul>
			<div class="start_btn">
				<a href="#" class="uibtn uibtn_red">��� ��û�ϱ�</a>
			</div>
		</div>
	</div>
	<!-- //container -->

</div>
<!-- //wrap -->
<script type="text/javascript">
    //���� �ڽ� ��ũ�ѹ�
	new iScroll('i_ck1_text', { hScrollbar: false, vScrollbar: true, hScroll: false, bounce:false});
	new iScroll('i_ck2_text', { hScrollbar: false, vScrollbar: true, hScroll: false, bounce:false});
    // ���� ��ü����
    jQuery('.list_agree #agree_1').click(function () {
        jQuery('.list_agree :checkbox').prop('checked', this.checked);
    });
</script>
</body>
</html>