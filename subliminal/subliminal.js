(function($){
    $.subliminal = function(el, message, delay,time){
        // To avoid scope issues, use 'base' instead of 'this'
        // to reference this class from internal events and functions.
        var base = this;
        
        // Access to jQuery and DOM versions of element
        base.$el = $(el);
        base.el = el;
        
        // Add a reverse reference to the DOM object
        base.$el.data("subliminal", base);
        
        base.init = function(){
            if( typeof( message ) === "undefined" || message === null ) message = "Put message here.";
            
            base.message = message;
            
            base.options = $.extend({},$.subliminal.defaultOptions, delay, time);
            
            // Put your initialization code here
        };
        
        // Sample Function, Uncomment to use
        // base.functionName = function(paramaters){
        // 
        // };
        
        // Run initializer
        base.init();
    };
    
    $.subliminal.defaultOptions = {
        message: "Put message here.",
        delay: 0,
        time: 200
    };
    
    $.fn.subliminal = function(message, delay, time){
        return this.each(function(){
            (new $.subliminal(this, message, delay, time));
		   // HAVE YOUR PLUGIN DO STUFF HERE
			setTimeout(function(){
				$("body").append("<div class='subliminal'>"+message+"</div>");
				$(".subliminal").css({
					position: "fixed",
					display: "block",
					top: 0,
					width: $(window).width(),
					height: $(window).height(),
					lineHeight: $(window).height()+"px",
					background: "white",
					fontFamily: "Helvetica",
					fontSize: "120px",
					textTransform: "uppercase",
					fontWeight: "bold",
					textAlign: "center"
				});
				setTimeout(function(){
					$(".subliminal").hide();
				},time);
			}, delay);
		   
		   // END DOING STUFF

        });
    };
    
})(jQuery);