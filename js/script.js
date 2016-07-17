$(document).ready(function(){

	//vars
	var $submit = $(".submit"),
		$alert = $(".alert"),
		$name = $(".name"),
		$headertext = $(".headertext"),
		$myemail = $(".myemail"),
		$profilepicimg = $(".profilepic img"),
		$nav = $(".nav"),
		$splashheight = $(".splash").height(),
		navoffset = 80;
		
	var isTouchDevice = (function () {
		if (('ontouchstart' in window) || window.DocumentTouch) {
			return true;
		}
	})();
	
	if (isTouchDevice) {
		navoffset = 44;
	}
	
	$("a[href^=#]").click(function(){
		var rawlink = $(this).prop("href"),
			link = "#" + rawlink.split("#")[1];
		//call global function!
		if(link == "#splash") {
			$("body").scrollTo(0,{duration:1000,'axis':'y'});
			return false;
		}
		if(link == "#about") {
			$("body").scrollTo($splashheight,{duration:1000,'axis':'y'});
			return false;
		}
		$("body").scrollTo(link,{duration:1000,offset:-navoffset,'axis':'y'});
		return false;
	});
	
	//
	
	//var scene = document.getElementById('splashimg');
	//var parallax = new Parallax(scene);
	
	// contact form
	
	$(".submit.activebtn").click(function(){
		function notfy(type,message,time) {
			if(time == "long") {
				time = 4000;
			}
			if(time == "short") {
				time = 2000;
			}
			
			$alert.addClass(type);
			$alert.text(message);
			$alert.fadeIn(1000);
			if(type == "error") {
				$submit.addClass("animated shake");
			}
			function hidenotify() {
				$alert.fadeOut(1000);
				$submit.removeClass("animated shake");
			}
			if (time != "sticky") {
				setTimeout(hidenotify, time);
			}
		}
		
		//notfy("error","Please fill out all fields",short);
		
		$.post("form.php",{
			name: $(".fullname").val(),
			email: $(".email").val(),
			budget: $(".budget").val(),
			timeline: $(".timeline").val(),
			msg: $(".message").val(),
		},function(data) { // data == returned string from form.php
			//alert(data);
			if(data === "success") {	//IF FORM IS CORRECT
				notfy("success","Thank you, we will be in touch","sticky");
				$("form input, form textarea").prop("disabled","disabled");
				$submit.css("border-color","#2ecc71");
				$submit.css("color","#2ecc71");
				$submit.text("Message Sent!");
				$submit.removeClass("activebtn");
			}
			if(data !== "success") {	//IF FORM IS INCORRECT
				notfy("error",data,"short");
			}
		}); // brackets are confusing, but correct
		return false;
	});
	
	//
	function transformWithPrefixes(element, yDistance) {
	    $(element).css({
	        WebkitTransform: createTranslationString(yDistance),
	        MozTransform: createTranslationString(yDistance),
	        MsTransform: createTranslationString(yDistance),
	        OTransform: createTranslationString(yDistance),
	        transform: createTranslationString(yDistance)
	    });
	}
	
	function fadeOpacity(element, newOpacity) {
	    $(element).css('opacity', newOpacity);
	}
	function createTranslationString(yDistance) {
	    return 'translateY(' + (yDistance) + 'px)';
	}
	function removeAnimatedClasses() {	
		$(".animated").each(function(){
			$(this).removeClass("animated");
			$(this).removeClass("fadeInDown");
			$(this).removeClass("fadeInUp");
			animated = false;
		});
		$(".name").css({
			"-webkit-animation-name": "shimmer",
			"-webkit-animation-duration": "2.2s",
			"-webkit-animation-iteration-count": "infinite"
		});
	}
	function generateEmail() {
		var email1 = "iam",
			email2 = "@",
			email3 = "gavinanthony",
			email4 = ".",
			email5 = "com",
			email = email1+email2+email3+email4+email5;
		$myemail.text(email);
		$myemail.prop("href","mailto:"+email);
	}
	generateEmail();
	
	var animated = true;
	setTimeout(function(){
		removeAnimatedClasses();
	}, 1000);
	if (isTouchDevice) {
		$("input,textarea").focus(function(){
			$("nav").hide();
		});
		$("input,textarea").blur(function(){
			$("nav").show();
		});
	} 
	function colorNav(element, newOpacity) {
	    $(element).css('background', "rgba(255,255,255,"+newOpacity+")");
	    $(element).css('border-color', "rgba(225,225,225,"+newOpacity+")");
	}
	
	if (!isTouchDevice) {
		$(window).on('scroll', function () {
			var scrollDistance = $(window).scrollTop();
			var cutoff = 600;
			
			$(".waypoint").each(function(){
				var wID  = $(this).prop("id"),
					wPOS = $(this).offset().top;
				if(wID == "splash") {
					wPOS = 0;
				}
				if(wID == "about") {
					wPOS = 680;
				}
				if (scrollDistance >= wPOS-80) {
					$(".current").removeClass("current");
					$("."+wID+"-link").addClass("current");
				}
			});
			
			if(animated == true) {
				removeAnimatedClasses();
			}
			
	
			// if the header is no longer in view, don't bother calculating parallax values
			// since no one can see it anymore
			
			
			if (scrollDistance >= 0 && scrollDistance <= 80) {
				$name.show();
				fadeOpacity(".name", cutoff / (scrollDistance * 10 + cutoff));
				transformWithPrefixes(".name", scrollDistance / 1);
			}
			if (scrollDistance >= 0 && scrollDistance > 80) {
				$name.hide();
			}
			
			if (scrollDistance < cutoff && scrollDistance >= 0) {
				fadeOpacity(".headertext", cutoff / (scrollDistance * 10 + cutoff));
				transformWithPrefixes(".headertext", scrollDistance / 3);
			}
			//color nav white on scroll
			
			var pageEquation = (cutoff / (cutoff - scrollDistance * 1) - 1);
			if (scrollDistance <= cutoff) {
				if(pageEquation <= "1") {
					colorNav("nav", pageEquation);
				}
			}
			if (scrollDistance > cutoff) {
				colorNav("nav", "1");
			}
			
			//if (scrollDistance >+ 600) {
			//	$nav.css("position","fixed");
			//	$nav.css("top","0");
			//}
			//if (scrollDistance < 600) {
			//	$nav.css("position","absolute");
			//	$nav.css("top","600");
			//}
			//end
			if (scrollDistance <= 0) {
				fadeOpacity(".headertext", 1);
				transformWithPrefixes(".headertext", 1);
				
				fadeOpacity(".profilepic", 1);
				transformWithPrefixes(".profilepic", 1);
				
				fadeOpacity(".name", 1);
				transformWithPrefixes(".name", 1);
			}
		});
	}
});