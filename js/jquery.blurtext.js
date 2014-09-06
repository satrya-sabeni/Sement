/* 
 * jQuery BlurText - Blurs text instantly, through an animation, or in conjunction with an opacity change animation
 * Copyright(c) 2012 Ilya Yakubovich <yak.nu>
 * MIT Licensed.
 */

// TODO: When a user starts animating a child element while the parent is animating, it becomes invisible
// TODO: Stop blurring an element when that same element starts blurring again

(function($) {
  
  var methods = {

    init : function(options) {

      if (typeof options == "number")
        options = { blur: options };

      this.each(function() {
        var settings = $.extend({
          blur:  10,
          color: $(this).css("color")
        }, options);

        /* Remember the original color in case we want to blur multiple times */
        if ($(this).data("color"))
          settings.color = $(this).data("color");
        else
          $(this).data("color", settings.color);

        $(this).data("blur", settings.blur);

        /* Make the text transparent and add a shadow */
        $(this).css("text-shadow", "0 0 " + settings.blur + "px " + settings.color);
       
        if (!$.browser.msie)
          $(this).css("color","transparent");
      })

      return this;
    },

    /* Animate opacity from 0 to 1, and the blur from blurry to clear */
    in : function(options, callback) {
      if (typeof options == 'function') {
        callback=options;
        options={};
      }
      if (typeof options == "number")
        options = { duration: options };
      return this.css("opacity",0)
                 .show()
                 .removeData("blur")
                 .blurText("to", $.extend(options, { endOpacity: 1 }), callback);
    },

    /* Animate opacity from 1 to 0, and the blur from clear to blurry */
    out : function(options, callback) {
      if (typeof options == "function") {
        callback=options;
        options={};
      }
      if (typeof options == "number")
        options = { duration: options };
      return this.blurText("to", $.extend(options, { endOpacity: 0 }), callback);
    },

    /* Animate the blur from 0 to the value of the "blur" parameter */
    to : function(options, callback) {
      if (typeof options == "number")
        options = { blur: options };

      var settings = $.extend({
        duration:   1000,
        blur:       100,
        endOpacity: 0,
        color:      this.css("color")
      }, options);

      var el = this;
      var blurFrom = this.data("blur") ? this.data("blur") : 0;

      if (options.endOpacity != null) {
        this.animate({ opacity: settings.endOpacity }, { duration: settings.duration, step: function(now, fx) {
          $(this).blurText({ blur : Math.round(blurFrom + (1-now) * (settings.blur - blurFrom)), color: settings.color });
        }, complete: (function() { callback ? callback.call(el) : false })});
      } else {
        $({theblur: blurFrom }).animate({ theblur: settings.blur }, { duration: settings.duration, step: function(now, fx) {
          el.blurText({ blur : now, color: settings.color });
        }, complete: (function() { callback ? callback.call(el) : false }) });
      }
      return this;
    }
  };

  $.fn.blurText = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === "object" || typeof method === "number" || ! method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error("Method " +  method + " does not exist on jquery.blurtext");
    }  
  };

})(jQuery);
