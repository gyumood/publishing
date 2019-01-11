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
<body class="bs bs_untact_i01">

<!-- wrap// -->
<div id="wrap">

	<!-- header//-->	<!-- [��_20180928] header => include -->
	<jsp:include page="/html/_header.jsp?pageType=popup&pageBtn=close&fixed=true&pageBtnLayer=btn_endUntact&pageTitle=�ѵ���ȸ" flush="true"></jsp:include>
	<!-- //header -->	<!-- [��_20181019] x(�ݱ�)��ư Ŭ����, 'btn_endUntact'�˾�â ȣ�� -->

	<!-- container//-->
	<div id="container">	<!-- [��_20180928] ������ ���δ� 'container'�߰� -->
		<div class="cont_process">
			<ul class="bar_area">
				<li class="step on"><p>��������</p></li>
				<li class="step"><p>�����Է�</p></li>
				<li class="step"><p>����</p></li>
				<li class="step"><p>�ѵ���ȸ���</p></li>
			</ul>
			<!-- �����Է� ���� -->
			<div class="input_area">
				<div class="input_wrap">

					<!-- �̸� -->
					<!-- [��_20181024] input�Է� ����� ���̵� ���� // -->
					<div class="uiinput_txt alert"><!-- alert : �˷� ����(noti_txt) ���� -->
						<label for="in_name" class="tit_input">�̸�</label><!-- [��_20181112] '�̸�'(����x,�Ǹ�x)���� ���� -->
						<input type="text" id="in_name" placeholder="�̸� �Է�" >
						<p class="noti_txt">�̸��� Ȯ�����ּ���.</p>
					</div>
					<!-- // input�Է� ����� ���̵� ���� -->

					<!-- �ֹι�ȣ -->
					<div class="id_number alert"><!-- [��_20181024] alert : �˷� ����(noti_txt) ���� -->
						<div class="wrap">
							<label for="in_citizenNum" class="tit">�ֹι�ȣ</label>
							<input type="number" id="in_citizenNum">
							<em class="id_num_bar"></em>
							<input type="number">
						</div>
						<p class="add_txt">�ֹι�ȣ ���ڸ��� �ϳ����࿡�� �����ϴ� �ѵ���ȸ ���񽺿� �ʿ��Ѱ�����, SK��ī�� �� ������ ���� �Ǵ� �������� �ʽ��ϴ�.</p>
						<p class="noti_txt">�ֹι�ȣ�� Ȯ�����ּ���.</p>
					</div>

					<!-- ��Ż� ���� -->
					<div class="radio_area alert"><!-- [��_20181024] class���� / alert:�˷� ����(noti_txt) ���� -->
						<h2 class="tit">��Ż� ����</h2>
						<div class="uialign_float">
							<span class="uialign_item uiinput_oblong">
								<input type="radio" id="tel1" name="tel_comp"><!-- [��_20181024] checked���� -->
								<label for="tel1"><span class="td">SKT</span></label>
							</span>
							<span class="uialign_item uiinput_oblong">
								<input type="radio" id="tel2" name="tel_comp">
								<label for="tel2"><span class="td">KT</span></label>
							</span>
							<span class="uialign_item uiinput_oblong">
								<input type="radio" id="tel3" name="tel_comp">
								<label for="tel3"><span class="td">LGU+</span></label>
							</span>
							<span class="uialign_item uiinput_oblong">
								<input type="radio" id="tel4" name="tel_comp">
								<label for="tel4"><span class="td">SKT(�˶���)</span></label>
							</span>
							<span class="uialign_item uiinput_oblong">
								<input type="radio" id="tel5" name="tel_comp">
								<label for="tel5"><span class="td">KT(�˶���)</span></label>
							</span>
							<span class="uialign_item uiinput_oblong">
								<input type="radio" id="tel6" name="tel_comp">
								<label for="tel6"><span class="td">LGU+(�˶���)</span></label>
							</span>
						</div>
						<p class="noti_txt">��Ż縦 Ȯ�����ּ���.</p>
					</div>

					<!-- �޴���ȭ��ȣ -->
					<!-- [��_20181024] input�Է� ����� ���̵� ���� // -->
					<div class="uiinput_txt alert"><!-- alert : �˷� ����(noti_txt) ���� -->
						<label for="in_phone" class="tit_input">�޴���ȭ��ȣ</label>
						<input type="number" id="in_phone" placeholder="'-' �����ϰ� ���ڸ� �Է�" >
						<p class="noti_txt">�޴���ȭ��ȣ�� Ȯ�����ּ���</p>
					</div>
					<!-- // input�Է� ����� ���̵� ���� -->

					<!-- ������ȣ -->
					<!-- [��_20181024] input�Է� ����� ���̵� ���� // -->
					<div class="uiinput_txt alert"><!-- alert:�˷� ����(noti_txt) ���� -->
						<label for="in_verifiCode" class="tit_input">������ȣ</label>
						<input type="number" id="in_phone" placeholder="������ȣ �Է�" >
						<a class="request" onclick="uiLayer.init({obj:'.code_input'});return false;" href="#">������ȣ ��û</a>		<!-- [case : �Է��Ͽ� �ֽʽÿ� �޼���] -->
						<!--<a class="request" onclick="uiLayer.init({obj:'.inform_wrong'});return false;" href="#">������ȣ ��û</a>-->	<!-- [case : �Է��� ������ ��ġ���� �ʽ��ϴ�] -->
						<p class="noti_timer">���� �ð� : 02:57</p><!-- [��_20181024] '���� �ð�'�߰� -->
						<p class="noti_txt">������ȣ�� Ȯ�����ּ���.</p><!-- [��_20181112] �߰� -->
					</div>
					<!-- // input�Է� ����� ���̵� ���� -->

				</div>
			</div>
			<!-- ��� ���� ���� -->
			<div class="agreement_area">
				<div class="check_area alert"><!-- [��_20181024] class���� / alert:�˷� ����(noti_txt) ���� -->
					<div class="total_check">
						<span class="uiinput big">
						<input type="checkbox" id="chk3_1" name="">
						<label for="chk3_1">��� ��ü����</label>
					</span>
					</div>
					<div class="sub_check">
						<span class="uiinput">
							<input type="checkbox" id="chk1_1" name="">
							<label for="chk1_1">�������� �����̿�</label>
							<a href="bs_untact_i01_pp1.jsp" class="view_pg"><em>�������</em></a><!-- [��_20181112] ��� ��ũ ����-->
						</span>
						<span class="uiinput">
							<input type="checkbox" id="chk1_2" name="">
							<label for="chk1_2">�������� ��3�� ���� ����</label>
							<a href="bs_untact_i01_pp2.jsp" class="view_pg"><em>�������</em></a><!-- [��_20181112] ��� ��ũ ����-->
						</span>
						<span class="uiinput">
							<input type="checkbox" id="chk1_3" name="">
							<label for="chk1_3">�̿��� ����</label>
							<a href="bs_untact_i01_pp3.jsp" class="view_pg"><em>�������</em></a><!-- [��_20181112] ��� ��ũ ����-->
						</span>
					</div>
					<p class="noti_txt">����� �������ּ���.</p>	<!-- [case : �׸� ���Է� �� '����'��ư Ŭ�� �� ����] -->
				</div>
				<!-- [��_20181019] ��ư���� ����(class,div���� ��) // -->
				<div class="btn_area alert"><!-- [��_20181024] alert : �˷� ����(noti_txt) ���� -->
					<p class="noti_txt">�Է��׸��� Ȯ�����ּ���.</p>	<!-- [case : �׸� ���Է� �� '����'��ư Ŭ�� �� ����] -->
					<a href="#" class="uibtn uibtn_red" onclick="uiAlert.init({txt:'�޴���ȭ ���������� �Ϸ�Ǿ����ϴ�.'});return false;">����</a>
					<!-- [���̾��˾�] 3���� case -->
					<!--<a href="#" class="uibtn uibtn_red" onclick="uiLayer.init({obj:'.code_wrong'});return false;">����</a>-->	<!-- [case : ������ȣ ����ġ ��] -->
					<!--<a href="#" class="uibtn uibtn_red" onclick="uiLayer.init({obj:'.time_over'});return false;">����</a>-->	<!-- [case : ������ȣ 3�� �ȿ� �Է�X ��] -->
					<!--<a href="#" class="uibtn uibtn_red" onclick="uiLayer.init({obj:'.history_already'});return false;">����</a>	-->		<!-- [case : �ѵ���ȸ�� �̹� �ߴ� ��] -->
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

		<!-- ���̾� �˾� -->
		<!-- [case : '������ȣ ��û' Ŭ����, �Է��Ͽ� �ֽʽÿ� �޼���] -->
		<div class="uilayer code_input bsLayer"><!-- [��_20181112] bsLayer �߰� -->
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
		<!-- [case : �Է��� ������ ��ġ���� �ʽ��ϴ�.] -->
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
		<!-- [case : ������ȣ�� ��ġ���� �ʽ��ϴ�.] -->
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
		<!-- [case : �Է½ð��� �ʰ��Ͽ����ϴ�.] -->
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
		<!-- [case : �ѵ���ȸ �̷��� �ֽ��ϴ�.] -->
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