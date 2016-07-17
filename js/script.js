$(document).ready(function(){
	if(window.location.hash == "#work") {
		var hash = "#taplet";
		history.pushState("", document.title, window.location.pathname);
		$("body").scrollTo(hash,{duration:0,'axis':'y'});
		return false;
	}
	if(window.location.hash == "#aboutme") {
		var hash = "#aboutme";
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
		if (link == "#aboutme") {
			showaboutme();
			return false;
		}
		if (link == "#close") {
			hideaboutme();
			return false;
		}
		$("body").scrollTo(link,{duration:1000,'axis':'y'});
		return false;
	});
	// Load images first
	
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
		var rounded = newOpacity.toFixed(2);
	    $(element).css('opacity', rounded);
	}
	function createTranslationString(yDistance) {
		var rounded = yDistance.toFixed(2);
	    return 'translateY(' + (rounded) + 'px)';
	}
	$(window).on("scroll",function(){
		var position = parseInt($(window).scrollTop()),
			windowheight = parseInt($(window).height());
		if (position <= windowheight && position >= 0) {
			//fadeOpacity(".homeheader div.text", windowheight / (position * 2 + windowheight));
			//transformWithPrefixes(".homeheader div.text", position/5);
			
			//fadeOpacity("header:not(#contact):not(.homeheader) div.text", windowheight / (position * 2 + windowheight));
			//transformWithPrefixes("header:not(#contact):not(.homeheader) div.text", position/1.3);
			
			//fadeOpacity(".arrows", windowheight / (position * 5 + windowheight));
			//transformWithPrefixes(".arrows", position/2.5);
			
			//transformWithPrefixes(".iphones,.webclip", position/1.5);
		}
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