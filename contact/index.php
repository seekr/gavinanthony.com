<!doctype html>
<html lang="en">
<head>
		<title>Contact</title>
		<script type="text/javascript" src="//use.typekit.net/bsb7qnm.js"></script>
		<script type="text/javascript">try{Typekit.load();}catch(e){}</script>
		
		<link rel="stylesheet" href="/resume/reset.css">
		<link rel="stylesheet" href="/css/about.css">
		<link rel="icon" type="image/png" href="/assets/favicon.png">
		
		<meta name="viewport" content="height=device-height, width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
		<meta property="twitter:account_id" content="97514698" />
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
	
	<script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
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