<?php
	$page = $_GET['page'];
	$array = array(
		"optyn" => array("title" => "Optyn", "description" => "During my 2013 summer internship at the startup-accelerator company, <a href='http://gener8tor.com'>gener8tor</a>, I worked with Optyn on several different projects. The first projects I was assigned to was redesigning their homepage, focusing heavily on the consumer side of the site rather than the merchant side. The result was a single-page web design that showcased the company's main features for the consumers, while also giving merchants information on pricing and a place to sign up. The second project I was assigned to was building a merchant mobile website. This was a control panel that merchants could use to view their control panel, messages, ect. Not only did I design the mobile website, but I also coded it and maintained it on Github.", "html" => "<section class=\"img\">
		<img src=\"/img/optynmockup.jpg\">
	</section>"),
	
		"wemontage" => array("title" => "WeMontage", "description" => "During my 2013 summer internship at the startup-accelerator company, <a href='http://gener8tor.com'>gener8tor</a>, I worked with WeMontage to redesign their entire website. The displayed work was for the homepage for the website. While working for WeMontage I created style guides that were used throughout the site. This style guide was used for as framework for their new design which can be viewed at <a href='http://wemontage.com'>wemontage.com</a>", "html" => "<section class=\"img\">
		<img src=\"/img/wemontage.png\">
	</section>"),
	
		"light" => array("title" => "Light", "description" => "Light is an iPhone application that lets users take pictures and share them to all of their friends on the app for a set amount of time. Light is unqiue because it incorporates a feed-style view for the app to allow users to scroll between their friends updates. The app is currently a work in progress and more details will be shared soon, so look for it when it becomes available!", "html" => "<section class=\"img\">
		<img src=\"/img/req/light-iphone-full.png\">
	</section>")
	);
	$title = $array[$page]["title"];
	$description = $array[$page]["description"];
	$html = $array[$page]["html"];
?>
<!doctype html>
<html lang="en">
<head>
	<title>Work</title>
	
	<!-- Stylesheet stuff -->
	<link rel="stylesheet" href="/css/plugins.css">
	<link rel="stylesheet" href="/css/work.css">
	<link rel="icon" type="image/png" href="/favicon.png">
	
	<!-- Typekit stuff -->
	<script type="text/javascript" src="//use.typekit.net/zgv6itd.js"></script>
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
	<nav>
		<a class="backtosite" href="/">Back to home</a>
		<h1 class="name">Gavin Anthony</h1>
	</nav>
	<div class="navclear"></div>
	<article class="title">
		<h1><?= $title ?></h1>
		<p><?= $description ?></p>
		<div class="rule"></div>
	</article>
	<?= $html ?>
</body>
</html>