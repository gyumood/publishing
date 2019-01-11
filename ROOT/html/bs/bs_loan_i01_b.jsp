<%@ page contentType="text/html; charset=EUC-KR"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="euc-kr" />
<meta name="viewport" content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width" />
<link rel="stylesheet" type="text/css" href="/css/common.css"/>
<link rel="stylesheet" type="text/css" href="/css/bs.css"/>
<title>[SK��ī ��ī �߰����� ��û]</title>
<script type="text/javascript" src="/js/jquery-1.11.2.min.js"></script><!-- jquery version upgrade -->
<script type="text/javascript" src="/js/iscroll.js"></script><!-- iscroll library js -->
<script type="text/javascript" src="/js/flipsnap.js"></script><!-- flipsnap library js -->
<script type="text/javascript" src="/js/ui.js"></script><!-- �ۺ��̿� js -->
</head>
<body class="bs bs_loan_v01">
<!-- wrap// -->
<div id="wrap">

	<!-- header//-->
	<div class="backType_header3">
		<header>
			<h1 class="blind"><a href="/html/index.jsp">SK encar</a></h1>
			<h2 class="subject"><a href="#">��ī �߰����� ��û</a></h2>
			<a class="btnBack" href="#"><span class="blind">�ڷΰ���</span></a>
		</header>
	</div>
	<!-- //header -->

	<!-- container//-->
	<div id="container">
		<section class="loan_apply">
			<h1 class="blind">��ī �߰����� ��û�ϱ�</h1>
			<p class="explan">���߰��� �Һο� ���� ��� �� ������ ���� �帳�ϴ�.��</p>
			<div class="apply_form">
				<h2 class="blind">��û������</h2>
				<div class="line"><input type="text" placeholder="�̸�" class="cmm_input_type1" /></div>
				<!-- 2017/04/28 [��] ��ī�߰����� ��û������ ����(��ȭ��ȣ �Է¶� ����) -->
				<div class="line">
					<div class="phoneArea">
						<span class="cmm_sel_type1">
							<select title="�޴��� �չ�ȣ">
								<option value="" selected="selected">010</option>
							</select>
						</span>
						<input type="tel" placeholder="���ڸ� �Է����ּ���" class="cmm_input_type1" />
					</div>
				</div>
				<div class="line"><input type="tel" placeholder="������� (��. 19800101)" class="cmm_input_type1" /></div>
			</div>
			<div class="text_chk">
				<h2 class="blind">�������</h2>
				<input type="checkbox" id="i_ck1" /> <label for="i_ck1">�������� ���� �̿� �� ��3�� ������ �����մϴ�.</label>
				<!-- 2017/07/20 [��] : ��������ó����ħ ���� -->
				<div id="box_group" class="box_group">
					<p class="rule_tip">���Բ����� �Ʒ� �׸� ���Ǹ� �ź��� �Ǹ��� �ֽ��ϴ�.<br> ��, �������� ���� ��� ���� ��� �� ��û�� �Ұ����� �� ������ �˷��帳�ϴ�</p>
					<div class="box_unit">
						<div class="label_chk">
							<input type="checkbox" id="i_ck1-1" /> <label for="i_ck1-1">�������� ���� �̿� ����</label>
						</div>
						<div id="i_ck1_text1" class="box_area">
							<div class="con">
								<dl>
									<dt class="blind">�������� ���� �� �̿�</dt>
									<dd>
										<strong>1. ���� �� �̿� ����</strong>
										<p>��û���� ���� ��� �� ��û ó��</p>
									</dd>
									<dd>
										<strong>2. ���� �� �̿�Ǵ� ���������� �׸�</strong>
									<p>
										- (�ʼ�)�̸�, �޴���ȭ��ȣ, �������, ��������, ��������, ����������, �����û�ݾ�<br>
										- (����)���⺸����Ȳ
									</p>
									</dd>
									<dd>
										<strong>3. ���� �� �̿� �Ⱓ</strong>
										<p>��û���� ���� ��û�������� 90�� ���Ŀ� �ڵ� �ı�</p>
									</dd>
								</dl>
							</div>
						</div>
					</div>

					<div class="box_unit">
						<div class="label_chk">
							<input type="checkbox" id="i_ck1-2" /> <label for="i_ck1-2">�������� ��3�� ���� ����</label>
						</div>
						<div id="i_ck1_text2" class="box_area">
							<div class="con">
								<dl>
									<dt class="blind">�������� ��3�� ���� ����</dt>
									<dd>
										<strong>1. ���������� ���� �޴���</strong>
										<p>ȿ��ĳ��Ż, �޸���ĳ��Ż, KDBĳ��Ż, ī�Ǿƿ����÷�, ������ĳ��Ż</p>
									</dd>
									<dd>
										<strong>2. ���� ����</strong>
										<p>��û���� ���� ��� �� ��û ó��</p>
									</dd>
									<dd>
										<strong>3. �����ϴ� �������� �׸�</strong>
										<p>
											- (�ʼ�)�̸�, �޴���ȭ��ȣ, �������, ��������, ��������, ����������, �����û�ݾ�<br>
											- (����)���⺸����Ȳ
										</p>
									</dd>
									<dd>
										<strong>4. �����Ⱓ</strong>
										<p>�������� ���� �� �̿� �����Ϸκ��� 90�� ���Ŀ� �ڵ� �ı�</p>
									</dd>
								</dl>
							</div>
						</div>
					</div>
				</div>
				<!-- //2017/07/20 [��] : ��������ó����ħ ���� -->
			</div>
			<div class="cmm_btn_red2">
				<button type="button" class="func_close">����û</button>
			</div>
			<script type="text/javascript">
			//���� �ڽ� ��ũ�ѹ�
			jQuery(function (){ 
				new iScroll('i_ck1_text1', { hScrollbar: false, vScrollbar: true, hScroll: false, bounce:false});
				new iScroll('i_ck1_text2', { hScrollbar: false, vScrollbar: true, hScroll: false, bounce:false});
			});
			</script>
		</section>
	</div>	
	<!-- //container -->

</div>
<!-- //wrap -->

</body>
</html>