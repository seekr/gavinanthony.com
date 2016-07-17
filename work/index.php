<?php
	$page = $_GET['page'];
	$pagetitle = $page;
	if($page == "glassesofwater") {
		$pagetitle = "glasses of water";
	}
	function imageurl($page) {
		if ($page == "light") {
			$page = "light.jpg";
		}
		if ($page == "optyn") {
			$page = "optyn.jpg";
		}
		if ($page == "wemontage") {
			$page = "wemontage.jpg";
		}
		if ($page == "swirlys") {
			$page = "swirlys.jpg";
		}
		if ($page == "glassesofwater") {
			$page = "gow.jpg";
		}
		return $page;
	}
	function pagecolor($page) {
		if ($page == "light") {
			$pagecolor = "19,167,215";
		}
		if ($page == "blip") {
			$pagecolor = "0,126,255";
		}
		if ($page == "taplet") {
			$pagecolor = "255,50,33";
		}
		if ($page == "optyn") {
			$pagecolor = "optyn.jpg";
		}
		if ($page == "wemontage") {
			$pagecolor = "255,158,67";
		}
		if ($page == "swirlys") {
			$page = "swirlys.jpg";
		}
		if ($page == "glassesofwater") {
			$page = "gow.jpg";
		}
		return $pagecolor;
	}
?>
<!doctype html>
<html lang="en">
<head>
	<title>Work</title>

	<script type="text/javascript" src="//use.typekit.net/bsb7qnm.js"></script>
	<script type="text/javascript">try{Typekit.load();}catch(e){}</script>

	<link rel="stylesheet" href="/css/style.css">
	<link rel="stylesheet" href="/css/work.css">
	<link rel="icon" type="image/png" href="/img/favicon.png?2">

	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="height=device-height, width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, minimal-ui">
	<meta name="author" content="Gavin Anthony">
	<meta name="copyright" content="2006-2014 GavinAnthony.com - All rights reserved.">
	<meta property="twitter:account_id" content="97514698" />
	<style>
		.splash {
			/*background: url(/img/<?= imageurl($page) ?>) no-repeat;
			background-size: cover;
			background-position: center center;
			*/
			background: rgba(<?= pagecolor($page) ?>,1);
		}
	</style>
</head>
<body>
	<nav class="nav animated fadeInDown">
		<div class="navwrap">
			<ul class="float-left">
				<li class="splash-link full"><a href="/"></a></li>
			</ul>
			<ul>
				<li class="splash-link full"><a href="/work/<?= $page ?>"><?= $pagetitle ?></a></li>
			</ul>
		</div>
	</nav>
	<?php include_once("work/_".$page."/index.php"); ?>
	<script src="/js/min/work-ck.js"></script>
</body>
</html>
