<%@ page contentType="text/html; charset=EUC-KR"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="euc-kr" />
<meta name="viewport" content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width" />
<title>엔카 중고차론 : SK엔카</title>
<meta name="description" content="SK엔카에서 진행하는 중고차 할부! 신청만 하시면 낮은 금리를 찾아드립니다."/>
<meta property="og:type" content="website"/>
<meta property="og:title" content="[SK엔카 엔카 중고차론]"/>
<meta property="og:description" content="SK엔카에서 진행하는 중고차 할부! 신청만 하시면 낮은 금리를 찾아드립니다."/>
<meta property="og:image" content="http://www.encar.com/images/common/icon/brand_logo_400x400_v2.jpg"/><!--//대표 이미지-->
<meta property="og:url" content="http://m.encar.com/bs/loanconsult.dom"/>
<link rel="canonical" href="http://m.encar.com/bs/loanconsult.dom"/>
<style>
	/*reset*/
	body,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,fieldset,legend,textarea,p,blockquote,th,td,input,select,textarea,button{margin:0;padding:0}
	fieldset,img{border:0 none}
	dl,ul,ol,menu,li{list-style:none}
	blockquote,q{quotes:none}
	input,select,textarea,button{vertical-align:middle}
	img{vertical-align:top}
	button{border:0 none;background-color:transparent;cursor:pointer}
	table{border-collapse:collapse;border-spacing:0}
	input[type='text'],input[type='password'],input[type='submit'],input[type='search'],input[type='tel'],input[type='email'],html input[type='button'],input[type='reset']{-webkit-appearance:none;border-radius:0}
	address,caption,cite,code,dfn,em,var,i{font-style:normal;font-weight:normal}
	article,aside,dialog,footer,header,section,footer,nav,figure{display:block}
	body,input,select,textarea,table,button,pre{font-size:14px;line-height:1.5;font-family:'Malgun Gothic','맑은 고딕',sans-serif;color:#333}
	body{background-color:#fff;-webkit-text-size-adjust:none;font-family: Malgun Gothic,"\B9D1\C740   \ACE0\B515",sans-serif;line-height: 1.5;}
	hr{display:none}
	a{color:#333;text-decoration:none}
	a:active,a:hover{text-decoration:none}
	caption,legend{font-size:0;line-height:0;visibility:hidden}
	input:focus,select:focus,textarea:focus{outline-width:thin}
	.skip_navi{position: absolute;width:1px;height:1px;overflow:hidden;font-size: 1px;white-space: nowrap;text-indent: 4px;line-height: 1px}
	.blind{overflow:hidden;position:absolute;width:1px;height:1px;margin:-1px;clip:rect(0 0 0 0)}

	/* custom */
	.backType_header {position:relative;height:44px !important;text-align:center;border-bottom:1px solid #d9d9d9 !important;background:#fff !important;}
	.backType_header.fixed {position:fixed;left:0;top:0;z-index:1000;width:100%;}
	.backType_header .subject {line-height:46px;text-align:center;font-size:16px;color:#3d3d3d;font-weight:bold;}
	.backType_header .area_right {position:absolute;right:0;top:0;}
	.uibtnico_x {display:inline-block;width:44px;height:44px;line-height:44px;text-align:center;
		box-sizing:border-box;
		-moz-box-sizing:border-box;
		-webkit-box-sizing:border-box;
	}
	.uibtnico_x:before {content:'';display:inline-block;overflow:hidden;width:16px;height:16px;vertical-align:middle;background:url(/images/module/ico_layer_x.png?20180604) no-repeat 0 0;background-size:16px;}

	.cont_process .tit {color: #666;font-size: 13px;font-weight: normal;}
	.citizenNum_area {padding: 70px 20px 0;}
	.citizenNum_area .add_txt {position: relative;padding-left: 5px;}
	.citizenNum_area .add_txt:before {content: "";width: 2px;height: 2px;border-radius: 50%;position: absolute;top: 10px;left: 0;background: #999}
	.cont_process .id_number {position: relative;overflow: hidden;margin-top: 20px;}
	.cont_process .id_number .wrap {display: block;overflow: hidden;}
	.cont_process .id_number label {display: block;margin-bottom: 8px;}
	.cont_process input {-webkit-appearance:none;-o-appearance:none;appearance:none;border: none;font-size: 15px;-webkit-box-sizing: border-box;-o-box-sizing: border-box;box-sizing: border-box;-moz-box-sizing:border-box;outline: none;border-radius: 0;margin-bottom: 15px;}
	.cont_process .id_number input {float: left;width: 50%;border-bottom: 1px solid #E5E5E5;height: 35px;background: #fff;margin-bottom: 0;}
	.cont_process .id_number input:last-child {padding-left: 30px;}
	.cont_process .id_number .id_num_bar {position: absolute;top: 37px;left: 50%;margin-left: -3px;width: 6px;height: 1px;background: #BFBFBF;}
	.cont_process .add_txt {font-size: 12px;color: #999;margin-top: 8px;}
	.citizenNum_area .add_txt {position: relative;padding-left: 5px;}
	.citizenNum_area .add_txt:before {content: "";width: 2px;height: 2px;border-radius: 50%;position: absolute;top: 10px;left: 0;background: #999}

	.noti_txt {display: none;}
	.alert .noti_txt {display: block;margin: 10px 0 0;color: #FF2626;font-size: 13px;}
	.uiinput_txt.alert input {border-bottom: 1px solid #FF2626;}
	.btn_area {padding: 0 20px;margin: 33px 0 0;}
	.btn_area .noti_txt, .uifix_bottom .noti_txt {margin-bottom: 10px;}
	.uibtn {display:block;overflow:hidden;width:100%;height:50px;text-align:center;line-height:50px;font-size:16px;font-weight:bold;letter-spacing:-0.5px;
		box-sizing:border-box;
		-moz-box-sizing:border-box;
		-webkit-box-sizing:border-box;
	}
	.uibtn_red {color:#fff;border-radius:50px;
		background-image: -webkit-linear-gradient(223deg, #FF2020 6%, #FB6612 88%);
		background-image: -o-linear-gradient(223deg, #FF2020 6%, #FB6612 88%);
		background-image: linear-gradient(313deg, #FF2020 6%, #FB6612 88%);
	}
	/* [규_20181221] 스타일 추가 */
	.uifix_bottom {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		z-index: 2000;
		padding: 0 20px 20px;
		box-sizing: border-box;
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
	}
</style>
</head>
<body class="bs bs_untact_i02">

<!-- wrap// -->
<div id="wrap">

	<div class="backType_header fixed"><!-- '이전'클릭시, 본인인증 페이지로 돌아가기 -->
		<header>
			<h1 class="blind"><a href="#">SK encar</a></h1>
			<h2 class="subject"><a>주민번호 입력</a></h2>
			<a class="area_right uibtnico_x" href="#"><span class="blind">닫기</span></a>
		</header>
	</div>

	<!-- container//-->
	<div id="container">
		<div class="cont_process">
			<div class="citizenNum_area">
				<!-- 주민번호 -->
				<div class="id_number alert">
					<div class="wrap">
						<label for="in_citizenNum" class="tit">주민번호</label>
						<input type="tel" id="in_citizenNum" maxlength="6">
						<em class="id_num_bar"></em>
						<input type="tel" maxlength="7">
					</div>
					<p class="add_txt">위 주민번호는 SK엔카와 제휴된 하나은행 1Q오토론으로 한도조회하기 위한 목적입니다.</p>
					<p class="add_txt">SK엔카는 주민번호 뒷자리를 저장하지 않습니다.</p>
				</div>
			</div>

			<div class="uifix_bottom alert"><!-- alert : 알럿 문구(noti_txt) 노출 --><!-- [규_20181221] 클래스명 변경- -->
				<p class="noti_txt">주민번호를 확인해주세요.</p>
				<a href="#" class="uibtn uibtn_red">다음</a>
			</div>
		</div>

	</div>
	<!-- //container -->

</div>
<!-- //wrap -->

</body>
</html>