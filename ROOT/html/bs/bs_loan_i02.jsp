<%@ page contentType="text/html; charset=EUC-KR"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="euc-kr" />
<meta name="viewport" content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width" />
<link rel="stylesheet" type="text/css" href="/css/common.css"/>
<link rel="stylesheet" type="text/css" href="/css/bs.css"/>
<title>[SK��ī ��ī �߰����� ��������]</title>
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
			<h2 class="subject"><a href="#">���� ����</a></h2>
			<a class="btnBack" href="#"><span class="blind">�ڷΰ���</span></a>
		</header>
	</div>
	<!-- //header -->
	
	<!-- container//-->
	<div id="container">
		<div class="loan_calculator">
			<h1 class="blind">���� ����</h1>
			<section>
				<div class="apply_form">
					<h1 class="blind">���� ���� �Է�</h1>
					<div class="top">
						<span class="price"><input type="tel" id="apply_price" onkeyup="this.setAttribute('value', this.value);" value="" /><label for="apply_price">������� �Է�</label></span> <span class="txt" onclick="mLayerFc('.layer_loanpricealert');return false;">����</span> <!-- ������� 4õ���� �̻�� �˾����̾� : "����" �ؽ�Ʈ�� Ȯ�ο� onclick ����. ���߽� onclick�� �����ٶ��ϴ�. -->
					</div>
					<h2 class="ttl">�ҺαⰣ ����</h2>
					<div class="chk_list chk_list_3">
						<ul>
							<li><input type="radio" name="g_period" id="g_period1" /><label for="g_period1">24����</label></li>
							<li><input type="radio" name="g_period" id="g_period2" checked="checked" /><label for="g_period2">36����</label></li>
							<li><input type="radio" name="g_period" id="g_period3" /><label for="g_period3">48����</label></li>
						</ul>
					</div>
					<h2 class="ttl">�ſ� ��� ����</h2>
					<div class="chk_list chk_list_4">
						<ul>
							<li><input type="radio" name="g_rating" id="g_rating1" /><label for="g_rating1">1���</label></li>
							<li><input type="radio" name="g_rating" id="g_rating2" /><label for="g_rating2">2���</label></li>
							<li><input type="radio" name="g_rating" id="g_rating3" /><label for="g_rating3">3���</label></li>
							<li><input type="radio" name="g_rating" id="g_rating4" checked="checked" /><label for="g_rating4">4���</label></li>
							<li><input type="radio" name="g_rating" id="g_rating5" onclick="loanCalculatorGraph.fnAction([5.0,15.0]);" /><label for="g_rating5">5���</label></li><!-- �׽�Ʈ onclick --> 
							<li><input type="radio" name="g_rating" id="g_rating6" onclick="loanCalculatorGraph.fnAction([3,20]);" /><label for="g_rating6">6���</label></li><!-- �׽�Ʈ onclick -->
							<li><input type="radio" name="g_rating" id="g_rating7" onclick="loanCalculatorGraph.fnAction([5.1,10.2]);" /><label for="g_rating7">7���</label></li><!-- �׽�Ʈ onclick -->
						</ul>
					</div>
				</div>
			</section>
			<section>
				<div class="result_form">
					<h1 class="blind">���� ��ȸ ���</h1>
					<div class="top">
						<h2 class="ttl">���� �� ���Ա�</h2>
						<span class="price"><span>350,216</span>��</span>
						<em>(�ݸ� 5.7% ���� ����)</em>
					</div>
					<h2 class="ttl">�߰� ���� �ݸ� ���</h2>
					<div class="table">
						<ul>
							<li><span>��ī ���� �ݸ�</span> <em class="po">5.7%</em></li>
							<li><span>Ÿ�� �� ���Ա�</span> <em>0��</em></li>
							<li><span>Ÿ�� ��� ���� �ݾ�</span> <em class="po">0��</em></li>
						</ul>
					</div>
					<h2 class="ttl">�ݸ� ��</h2>
					<div class="graph">
						<ul>
							<li class="c1"><span class="c">SK��ī</span> <em><span class="r">5.7</span>%</em></li>
							<li class="c2"><span class="c">�ܺ� ������</span> <em><span class="r">16.9</span>%</em></li>
						</ul>
					</div>
				</div>
				<div class="area_notice">
					<div class="btnactive">
						<a class="btn_active" href="bs_loan_i01.jsp"><span>��ī �߰����� ��û</span></a>
					</div>
					<div class="explan">
						<ul>
							<li><span class="po">��</span> ����ݸ��� �ѵ� ���� �� �� ���ǿ� ����, '����' �Ǵ� '����' �ǽ� �� �ֽ��ϴ�. (����5.7%~)</li>
							<li><span class="po">��</span> 4000���� �̻� �� 60���� �̻� ������� ����� ����, Ȯ�� �����մϴ�.</li>
							<li><span class="po">��</span> ������ ������ ������, ���� �ſ���ȸ�� ���� ������, ���ϰ� ��� �����մϴ�. �������� ��, ������ �����Դϴ�.��</li>
						</ul>
					</div>
				</div>
			</section>
			<!-- cmm_layer : ��ī �߰����� -->
			<div class="cmm_layer_popFix layer_loanpricealert">
				<div class="cmm_layer_popWrap">
					<div class="cmm_layer_bg" onclick="mLayerFc('.layer_loanpricealert');return false;"></div>
					<div class="cmm_layer_popCon">
						<!-- cmm_layer ���� -->
						<div class="cmm_layer_loanpricealert">
							<h3>��ī �߰�����</h3>
							<p class="visual">�߰����� ��û�� ���� <br>����ݸ��� Ȯ���� ������</p>
							<p class="txt"><em>4,000���� �̻�</em>�� ������ ��û�� ���� <br>Ȯ�� �����մϴ�.</p>
							<a class="btn_active" href="bs_loan_i01.jsp"><span>��ī �߰����� ��û</span></a>
							<a href="#" class="btnClose" onclick="mLayerFc('.layer_loanpricealert');return false;"><b>�ݱ�</b></a>
						</div>	
						<!-- //cmm_layer ���� -->
					</div>
				</div>
			</div>
		</div>
		<!-- //cmm_layer -->
		<script type="text/javascript">
		//fn : ���� ���� �׷��� ����
		var loanCalculatorGraph={
			init : function(){
				this.cacheElement();
				this.fnScroll();
			},
			cacheElement : function(){
				this.windows=jQuery(window);
				this.tg=jQuery('.graph');
				this.active='active';
				this.setttimeGrp;
			},
			fnScroll : function(){
				var e$=this;
				e$.windows.on("load.eventGrp scroll.eventGrp resize.eventGrp",function(){
					e$.fnScrollChk();
				});
			},
			fnScrollChk : function(){
				var e$=this,
					scr=e$.windows.scrollTop(),
					idY=e$.tg.offset().top,
					idH=e$.tg.height(),
					first=idY-document.documentElement.clientHeight,
					last=idY+idH;
				if(scr>=first&&scr<=last&&!e$.tg.hasClass(e$.active)){
					e$.fnAction();
				};
			},
			fnAction : function(data){
				var e$=this,
					ck1=e$.tg.find('.c1 .r'),
					ck2=e$.tg.find('.c2 .r'),
					grp1=e$.tg.find('.c1 em'),
					grp2=e$.tg.find('.c2 em');
				//����
				e$.tg.removeClass(e$.active);
				e$.windows.off('.eventGrp'); //��ũ���̺�Ʈ ����
				grp1.add(grp2).css({height:0});
				if(data){
					//�缳����
					clearTimeout(e$.setttimeGrp);
					ck1.text(data[0]);
					ck2.text(data[1]);
					e$.fnScroll();
					e$.fnScrollChk();
				}else{
					//����
					e$.setttimeGrp=setTimeout(function (){
						e$.tg.addClass(e$.active); //Ȱ��ȭ
						grp1.css({height:(ck1.text()/ck2.text())*100+'%'});
						grp2.css({height:'100%'});
					}, 100);			
				};
			}
		}
		loanCalculatorGraph.init(); //�׷��� ����
		//loanCalculatorGraph.fnAction([5.1,10.2]); //�׷��� �缳����
		</script>
	</div>	
	<!-- //container -->

</div>
<!-- //wrap -->

</body>
</html>