<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>Gavin Anthony - Resume</title>
	<link rel="stylesheet" href="reset.css">
	<link rel="icon" type="image/png" href="/favicon.png?v=2">
	<link rel="stylesheet" type="text/css" href="//cloud.typography.com/6369512/669524/css/fonts.css" />
	<link rel="stylesheet" href="style.css">
</head>
<body>
	<nav>
		<aside class="name">
			<h1>Gavin Anthony</h1>
			<h2>UI / UX Designer & Front End Developer</h2>
		</aside>
		<aside class="contact">
			<ul>
				<li><a class="genPhone"></a></li>
				<li><a class="genEmail"></a></li>
				<li><a href="/">gavinanthony.com</a></li>
			</ul>
		</aside>
	</nav>
	<article class="block">
		<h1>About Me</h1>
		<p class="paragraph">I am a user interface / experience designer & front end web developer based in Milwaukee, WI. I have over five years of experience working with HTML, CSS, jQuery, and PHP. In 2012, I shifted all of my work torwards mobile design and User Interface/Experience. The last three companies I've worked for were all iPhone applications that were published on the app store or are waiting on approval.</p>
	</article>
	<article class="block half">
		<h1>Job Experience</h1>
		<ul class="timeline">
			<li>
				<h1>iOS Designer at <a href="http://gotaplet.com" target="_blank">Taplet</a> <span>(March 2014 - Present)</span></h1>
				<p>Taplet, a Los Angeles based mobile app company hired me to design a complex social networking app that allows you to extract soundless video clips and upload them to a feed.</p>
				<hr>
			</li>
			<li>
				<h1>Logo/Branding Designer at <a href="http://blueye.com" target="_blank">Blueye</a> <span>(November 2013 - January 2014)</span></h1>
				<p>Blueye is a creative agency located in Chicago, IL. They reached out to me looking for someone that could do branding, logo design, and web design/development.</p>
				<hr>
			</li>
			<li>
				<h1>UI / UX Designer & Mobile Web Developer at <a href="http://optyn.com" target="_blank">Optyn</a> <span>(June 2013 - September 2013)</span></h1>
				<p>While working at Optyn, I was assigned to work on the redesign of the home page, the Google Chrome extension, and the design/development of a merchant mobile website.</p>
				<hr>
			</li>
			<li>
				<h1>UI / UX Designer at <a href="http://wemontage.com" target="_blank">WeMontage</a> <span>(March 2013 - June 2013)</span></h1>
				<p>At WeMontage, I was redesigned their entire website from scratch and fixed various user experience flaws within their website flow.</p>
				<hr>
			</li>
			<li>
				<h1>UI / UX Design Intern at <a href="http://gener8tor.com" target="_blank">Gener8tor</a> <span>(March 2013 - September 2013)</span></h1>
				<p>At gener8tor, I had the opportunity to work with several companies that were chosen to be a part of the summer startup accelerator program. During this time, I worked with companies to design and develop several different web based projects.</p>
				<hr>
			</li>
		</ul>
	</article>
	<article class="block half">
		<h1>Freelance Experience</h1>
		<ul class="timeline">
			<li>
				<h1>Light - <span>(September 2013 - March 2014)</span></h1>
				<p>While working at Light, I designed over 15 different mobile app screens that included feeds, user profiles, and login flows.</p>
				<hr>
			</li>
			<li>
				<h1>Pic'n'Roll - <span>(January 2014)</span></h1>
				<p>The company Pic'n'Roll hired me to create a new iOS icon that fit well into the iOS 7 aesthetic and that had very simple/minimal branding. I also created a landing/splash page and improved the UX of the login pages.</p>
				<hr>
			</li>
			<li>
				<h1>Swirly's Ice Cream Shoppe - <a href="http://swirlys.net" target="_blank">Website</a> - <span>(March 2013)</span></h1>
				<p>I made this site for a local ice cream shoppe called Swirly's. The coding portion of the site was particularly difficult because I wanted to develop something that impressed the user as they view more of the content. Notice as you scroll how certain element are shown, hidden, and change the aspects of the page as you go.</p>
				<hr>
			</li>
			<li>
				<h1>Glasses of Water - <a href="http://glassesofwater.com" target="_blank">Website</a> - <span>(2011-2013)</span></h1>
				<p>I created Glasses of Water to help all of the people that like staying hydrated. It counts the amount of glasses of water you drink and shares it in a social network setting. After a year of being in service, it came to have over 5,500 users in over 100 countries!</p>
				<hr>
			</li>
			<li>
				<h1>Cloud Images - <a href="http://cloudimages.co" target="_blank">Website</a> - <span>(2011)</span></h1>
				<p>Cloud Images is a secure way to manage your images in the cloud. It's a cheap service that allows you to upload images and get a code in return to put on craigslist ads or ebay ads.</p>
				<hr>
			</li>
		</ul>
	</article>
	<div class="clear"></div>
	<script src="zepto.js"></script>
	<script>
		$(function(){
			function genPhone() {
				var a = "414",
					b = ".242",
					c = ".59",
					d = "15",
					phone = a+b+c+d;
				$(".genPhone").text(phone);
			}
			genPhone();
			function genEmail() {
				var a = "iam",
					b = "@",
					c = "gavinanthony.",
					d = "com",
					email = a+b+c+d;
				$(".genEmail").text(email);
			}
			genEmail();
		});
	</script>
</body>
</html>