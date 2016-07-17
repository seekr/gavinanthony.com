$(function(){
	function dynamicStyleTweaks(width,height) {
		//Setup Some Variable
		var splashInner = $(".splash-main").height();
		//	mainWrapper = $("#mainwrapper").height();
		
		//Do the stuff!
		//splash
		
		$(".aboutme").css("min-height",height);
		$(".aboutme").css("max-height",height);
		if(width >= 600) {
			$(".splash-main").css("margin-top",splashInner/2-30+"px");
		}
		if(width < 600) {
			$(".splash-main").css("margin-top",splashInner+"px");
		}
		
		if (width > 600) {
			//$('.main-nav').kindasticky();
			$(".centertitle.mainTitle").css("z-index","110");
		}
		if (width <= 600) {
			$(".centertitle.mainTitle").css("z-index","99");
		}
		
	}
	//Process Links. Woot Woot.
	$("a[href^=#]").click(function(){
		var globalLink = $(this).prop("href");
		//call global function!
		globalhref(globalLink);
		return false;
	});
	function globalhref(link) {
		var trimmedLink = link.split("#")[1];
		
		if(trimmedLink === "submit") {
			$.post("form.php",{
				name: $(".namebox").val(),
				email: $(".emailbox").val(),
				inquiry: $(".inquiry").val(),
				location: $(".location").val(),
				msg: $(".message").val(),
			},function(data) { // data == returned string from form.php
				//alert(data);
				if(data === "success") {
					$(".ribbon").css("left","0");
					$(".label").addClass("success");
					$(".label").text("Thank you! We'll be in touch soon.");
					$(".label").fadeIn(1000);
					$(".label").delay(3000).fadeOut(1000);
				}
				if(data !== "success") {
					$(".ribbon").addClass("shake");
					$(".label").addClass("error");
					$(".label").text(data);
					$(".label").fadeIn(1000);
					$(".label").delay(3000).fadeOut(1000);
					setTimeout(function(){
						$(".ribbon").removeClass("shake");
					}, 3000);
				}
			}); // brackets are confusing, but correct
			return false;
		}
		
		$("body").scrollTo("#"+trimmedLink,{duration:1000, offset: 2});
	}
	
	//gallery hovers
	$("body").delegate(".galleryCard","mouseenter",function(){
		$(this).children("a").children("img").css("opacity",".7");
		$(this).children("a").children("div").children(".inner-btn").css("opacity","1");
	});
	$("body").delegate(".galleryCard","mouseleave",function(){
		$(this).children("a").children("img").css("opacity","1");
		$(this).children("a").children("div").children(".inner-btn").css("opacity","0");
	});
	
	//email thinger
	var email1 = "iam",
		email2 = "@",
		email3 = "gavinanthony",
		email4 = ".com";
	
	$(".myemail").text("Email: "+email1+email2+email3+email4);
	$(".myemail, .email").prop("href","mailto:"+email1+email2+email3+email4);
	
	//Scrolling
	var scroll_pos = $("body").scrollTop();
	//var winwidth = $(window).width();
	var height = $(window).height();
	//var headheight = (height-70)/2;
	//var docHeight = $(document).height();
	
	function makeHeaderWhite() {
		$(".name").css("color","white");
		$(".right li a").css("color","white");
		$(".viewWork").css("border-color","white");
		$(".aboutme *").css("color","white");
		$(".aboutme").data("color","white");
	}
	function makeHeaderBlack() {
		$(".main-nav").css("background","transparent");
		$(".name").css("color","#111");
		$(".right li a").css("color","#111");
		$(".aboutme *").css("color","white");
	}
	function chooseHeaderClass() {
		var colors = new Array ("white","yellow","red","green","sea","graphite","lake","contrast");
		var rand = colors[Math.floor(Math.random() * colors.length)];
		rand = "rain";
		if(rand === "red" || rand === "green" || rand === "sea" || rand === "graphite" || rand === "lake" || rand === "contrast" || rand === "rain") {
			makeHeaderWhite();
		}
		$(".aboutme").addClass(rand);
	}
	function centerHeaderText(scroll_posheader) {
		var divHeight = $(".aboutme div").height(),
			divMargin = ($(window).height()/2 - divHeight/1.45);
		$(".aboutme div").css("padding-top",(divMargin)+"px");
	}
	chooseHeaderClass();
	centerHeaderText(scroll_pos);
	//makeHeaderWhite();
	
	$(document).scroll(function() {
		scroll_pos = $(this).scrollTop();
		
		
		//CENTER TITLES
		
		var workTitle = $("#work").offset().top;
		var galleryTitle = $("#gallery").offset().top;
		//var galleryShots = $("#gallery").offset().top;
		var contactTitle = $("#contact").offset().top;
		
		//functions
		centerHeaderText(scroll_pos);
		
		function dynamicStyleWhileScrolling(width){
			if(width > 600) {
				
				if(scroll_pos >= height) {
					makeHeaderBlack();
				}
				if(scroll_pos < height && scroll_pos > 0) {
					if ($(".aboutme").data("color") === "white") {
						makeHeaderWhite();
					}
				}
				if(scroll_pos >= workTitle) {
					//$(".main-nav").removeClass("styled");
					//$("nav.main-nav").css("background","rgba(255,255,255,1)");
					//$("nav.main-nav").css("box-shadow","5px 0 10px rgba(0,0,0,.2)");
					//$(".hamburger").addClass("darkhamburger");
					//$(".hamburger").css("background-size","80% 80%");
					//$(".hamburger").css("background-position","center center");
					//$("nav.main-nav *").css("color","#444");
					//$(".centertitlebreak.scrollWithPage").css("box-shadow","5px 0 50px rgba(255,255,255,1)");
					$(".centertitlebreak.scrollWithPage").css("background","white");
					//$(".centertitlebreak.scrollWithPage").css("border-bottom","1px solid rgba(0,0,0,.1)");
				}
				if(scroll_pos < workTitle) {
					//$(".main-nav").addClass("styled");
					//$("nav.main-nav").css("background","rgba(255,255,255,0)");
					//$("nav.main-nav").css("box-shadow","none");
					//$(".hamburger").removeClass("darkhamburger");
					//$(".hamburger").css("background-size","80% 80%");
					//$(".hamburger").css("background-position","center center");
					//$("nav.main-nav *").css("color","white");
					//$(".centertitlebreak.scrollWithPage").css("background","#E5E9EC");
					$(".centertitlebreak.scrollWithPage").css("box-shadow","none");
					$(".centertitlebreak.scrollWithPage").css("border-bottom","none");
				}
				if(scroll_pos >= workTitle) {
					$(".worktitle").css("position","fixed");
					$(".centertitlebreak.scrollWithPage").css("position","fixed");
				}
				if(scroll_pos < workTitle) {
					$(".worktitle").css("position","absolute");
					$(".centertitlebreak.scrollWithPage").css("position","absolute");
				}
				if(scroll_pos >= galleryTitle) {
					$(".worktitle").text("GALLERY");
				}
				if(scroll_pos < galleryTitle) {
					$(".worktitle").text("MY WORK");
				}
				if(scroll_pos >= contactTitle) {
					$(".worktitle").text("CONTACT ME");
				}
				if(scroll_pos < contactTitle && scroll_pos >= galleryTitle) {
					$(".worktitle").text("GALLERY");
				}
			}
		}
		var height = $(window).height(),
			width  = $(window).width();
		dynamicStyleWhileScrolling(width,height);
		
	});
	var width  = $(window).width();
		
	dynamicStyleTweaks(width,height);
	
	
	//HAMBURGER HELPER
	/*
	$(".hamburger,.leftlink").mouseover(function(){
		$("#hiddennav").css("right","0");
		$(".closeNav").show();
	});
	*/
	$("#hiddennav").mouseleave(function(){
		$("#hiddennav").css("right","-250px");
		$(".closeNav").hide();
	});
	$(".hamburger,.leftlink").click(function(){
		$("#hiddennav").css("right","0");
		if(width < 600) {
			$(".closeNav").show();
		}
	});
	$("a.closeNav").click(function(){
		$("#hiddennav").css("right","-250px");
		$(".closeNav").hide();
		return false;
	});
	$("#hiddennav a").click(function(){
		$("#hiddennav").css("right","-250px");
		$(".closeNav").hide();
	});
	
	//DRIBBBLE API
	
	
	$('textarea').autosize({append: "\n"});
	
	if(width >= 600) {
		$(".workCard > aside").css("opacity","0");
		$(".workCard").waypoint(function(){
			$(this).children("aside").css("opacity","1");
			$(this).children("aside:first-of-type").addClass("animate").addClass("fadeInLeft");
			$(this).children("aside:last-of-type").addClass("animate").addClass("fadeInRight");
		},{
			offset: 500
		});
	}
	
	// Align Work descriptions with the macbook / iphone
	
	$("article.workCard").each(function(){
		var mbookheight = $(this).height(),
			descheight = $(this).children("aside:last-of-type").height();
		$(this).children("aside:last-of-type").css("margin-top",(mbookheight-descheight)/2);
	});
	
	//SNAPPER FOR THE SLIDING HAMBURGER MENU
	/*
	var snapper = new Snap({
	  element: document.getElementById('body')
	});
var addEvent = function addEvent(element, eventName, func) {
    if (element.addEventListener) {
        return element.addEventListener(eventName, func, false);
    } else if (element.attachEvent) {
        return element.attachEvent("on" + eventName, func);
    }
};
*/
		
});

