$(document).ready(function(){

	//vars
	var $nav = $(".nav"),
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
		$("body").scrollTo(link,{duration:1000,offset:-navoffset,'axis':'y'});
		return false;
	});
	
	//
	
	//var scene = document.getElementById('splashimg');
	//var parallax = new Parallax(scene);
	
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
	function colorNav(element, newOpacity) {
	    $(element).css('background', "rgba(0,0,0,"+newOpacity+")");
	    $(element).css('border-color', "rgba(0,0,0,"+newOpacity+")");
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
		$(".title").css({
			"-webkit-animation-name": "shimmer",
			"-webkit-animation-duration": "2.2s",
			"-webkit-animation-iteration-count": "infinite"
		});
	}
	
	var animated = true;
	setTimeout(function(){
		removeAnimatedClasses();
	}, 1000);
	
	if (!isTouchDevice) {
		$(window).on('scroll', function () {
			var scrollDistance = $(window).scrollTop();
			var cutoff = $(".splash").height();
			var headerElements = ".workblock h1,.workblock p,.workblock a,.workblock .divider, .workblock h2";
			
			if(animated === true) {
				removeAnimatedClasses();
			}
			var pageEquation = (cutoff / (cutoff - scrollDistance * 1) - 1);
			
			if (scrollDistance <= cutoff) {
				if(pageEquation <= ".7") {
					colorNav("nav", pageEquation);
				}
			}
			if (scrollDistance > cutoff) {
				colorNav("nav", ".7");
			}
			if (scrollDistance < cutoff && scrollDistance >= 0) {
				fadeOpacity(headerElements, cutoff / (scrollDistance * 10 + cutoff));
				transformWithPrefixes(headerElements, scrollDistance / 3);
			}
			//end
			if (scrollDistance <= 0) {
				fadeOpacity(headerElements, 1);
				transformWithPrefixes(headerElements, 1);
			}
			
		});
	}
});