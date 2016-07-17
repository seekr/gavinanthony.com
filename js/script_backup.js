$(document).ready(function(){
	if(window.location.hash == "#work") {
		var hash = "#taplet";
		history.pushState("", document.title, window.location.pathname);
		$("body").scrollTo(hash,{duration:0,'axis':'y'});
		return false;
	}
	if(window.location.hash) {
		var hash = window.location.hash;
		history.pushState("", document.title, window.location.pathname);
		$("body").scrollTo(hash,{duration:0,'axis':'y'});
	}
	$("a[href^=#]").click(function(){
		var rawlink = $(this).prop("href"),
			link = "#" + rawlink.split("#")[1];
		$("body").scrollTo(link,{duration:1000,'axis':'y'});
		return false;
	});
	// Load images first
	$(window).load(function(){
		$(".workblock").each(function(){
			var left = $(this).children(".left").height(),
				right = $(this).children(".right").height(),
				margin = (right-left)/2;
			$(this).children(".left").css("margin-top",margin);
		});
	});
	//
	//	ANIMATIONS
	//
	function transformWithPrefixes(element,yDistance) {
	    $(element).css({
	        WebkitTransform: createTranslationString(yDistance),
	        MozTransform: createTranslationString(yDistance),
	        MsTransform: createTranslationString(yDistance),
	        OTransform: createTranslationString(yDistance),
	        transform: createTranslationString(yDistance)
	    });
	}
	function fadeOpacity(element, newOpacity) {
		var rounded = newOpacity.toFixed(1);
	    $(element).css('opacity', rounded);
	}
	function createTranslationString(yDistance) {
		var rounded = yDistance.toFixed(1);
	    return 'translateY(' + (rounded) + 'px)';
	}
	$(window).on("scroll",function(e){
		var position = parseInt($(window).scrollTop()),
			windowheight = parseInt($(window).height());
		if (position <= windowheight && position >= 0) {
			fadeOpacity(".homeheader div.text", windowheight / (position * 2 + windowheight));
			transformWithPrefixes(".homeheader div.text", position/5);
			
			fadeOpacity("header:not(#contact):not(.homeheader) div.text", windowheight / (position * 2 + windowheight));
			transformWithPrefixes("header:not(#contact):not(.homeheader) div.text", position/1.3);
			
			fadeOpacity(".arrows", windowheight / (position * 5 + windowheight));
			transformWithPrefixes(".arrows", position/2.5);
			
			transformWithPrefixes(".iphones,.webclip", position/1.5);
		}
		window.requestAnimationFrame(e);
	});
	
	//
	//	KEYDOWN FUNCTIONS
	//
	if ($(".arrows").length > 0) {
		$(document).keydown(function(e){
			if(e.keyCode == 37) { // left
				window.location = $("a.left").prop("href");
			}
			if(e.keyCode == 39) { // right
				window.location = $("a.right").prop("href");
			}
		});
	}
	
});