<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<script type="text/javascript" src="//use.typekit.net/qkn5mck.js"></script>
	<script type="text/javascript">try{Typekit.load();}catch(e){}</script>
	<link href="style.css" rel="stylesheet">
	<title>Subliminal.js</title>
</head>
<body>
	<section class="wrapper">
		<header>
			<h1>SUBLIMINAL.JS</h1>
			<h2>A jQuery plugin for sending subliminal messages...</h2>
		</header>
		
		<section class="code">
&lt;script src=&quot;subliminal.js&quot;&gt;&lt;/script&gt;
&lt;script&gt;
	$(function(){
		$(window).subliminal(&quot;Download&quot;,2000,100);
	});
&lt;/script&gt;
		</section>
		
		<section class="ex">
			$(window).subliminal( message , delay , time );
		</section>
		
		<section class="btns">
			<a href="#" class="example">
				See example
			</a>
			<a href="#">
				Download
			</a>
		</section>
	</section>
	<script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js"></script>
	<script src="subliminal.js"></script>
	<script>
		$(function(){
			$(window).subliminal("Download",5000,100);
			var top = ($(window).height() - $(".wrapper").height())/2;
			$(".wrapper").css("margin-top",top+"px");
			$("a.example").click(function(){
				$(window).subliminal("Download",500,100);
				return false;
			});
		});
	</script>
</body>
</html>