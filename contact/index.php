<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>Gavin Anthony - Contact</title>
	
	<!-- Stylesheet stuff -->
	<link rel="stylesheet" href="/css/plugins.css">
	<link rel="stylesheet" href="/css/about.css">
	<link rel="icon" type="image/png" href="/favicon.png?v=2">
	
	<!-- Typekit stuff -->
	<script type="text/javascript" src="//use.typekit.net/tfx1zub.js"></script>
	<script type="text/javascript">try{Typekit.load();}catch(e){}</script>
	
	<!-- Meta stuff -->
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="author" content="Gavin Anthony">
	<meta name="description" content="I am a user interface designer. I design/code website interfaces, add functionality to them, and make sure they are user friendly. I have six years of coding experience and a passion for what I do.">
	<meta name="keywords" content="web,design,development,graphics,psd,photoshop,adobe,ui,ux,user,experience,internet,html,html5,css,css3,jquery,javascript,front,end,back,apple,iphone,mobile,application,market,marketing,strategy,branding,social,networking,seo,optimization">
	<meta name="author" content="Gavin Anthony">
	<meta name="copyright" content="2006-2013 GavinAnthony.com - All rights reserved.">
	<meta property="og:title" content="Gavin Anthony - Web UI & Design">
	<meta property="og:image" content="http://gavinanthony.com/img/fb.png">
	<meta property="og:site_name" content="Gavin Anthony's Online Portfolio">
	<meta property="og:description" content="Gavin Anthony is a user interface designer and front-end web developer. He has over six years of experience and a passion for what he does.">
	<meta name="viewport" content="width=device-width">
</head>
<body>
	<div class="body">
		<h1 class="contact">Contact</h1>
		<div class="break"></div>
		<h1 class="name">Gavin Anthony</h1>
		<h1 class="addressone">310 E Buffalo St</h1>
		<h1 class="addresstwo">Milwaukee, WI 53202</h1>
		<div class="break"></div>
		<h1 class="tel"></h1>
		<h1 class="email"></h1>
	</div>
	
	<script src="/plugins/jquery-ck.js?1"></script>
	<script>
		$(function(){
			function generateText() {
				var tel1 = "+1 41",
					tel2 = "4.24",
					tel3 = "2.5",
					tel4 = "9",
					tel5 = "15",
					tel = tel1+tel2+tel3+tel4+tel5;
				var email1 = "iam",
					email2 = "@",
					email3 = "gavinanthony",
					email4 = ".",
					email5 = "com",
					email = email1+email2+email3+email4+email5;
				$(".tel").text(tel);
				$(".email").text(email);
			}
			generateText();
			function centerBody() {
				var height = $(window).height(),
					body   = $(".body").height()
					center = (height/2)-(body/2);
				$(".body").css("margin-top",center+"px");
					
			}
			centerBody();
			$(".body").fadeIn(1000);
		});
	</script>
</body>
</html>