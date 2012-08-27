/*!
 * jQuery Aspect Ratio Plugin
 * Copyright (c) 2012 Evan Coury
 * Dual licensed under the MIT and GPL licenses.
 */
(function($){
    $.fn.aspectRatio = function(options) {
        var self = this;
        var defaults = {
            scale: false
        };
        var options = $.extend(defaults, options);

        var resizeElements = function() {
            self.each(function(i) {
                var pw = $(this).parent().width();
                var ph = $(this).parent().height();

                var w = $(this).width();
                var h = $(this).height();

                if (!options.scale) {
                    var ratio = w / h;
                    if (ph < pw) {
                        $(this).height(ph).width(ph * ratio);
                    } else {
                        $(this).width(pw).height(pw * ratio);
                    }
                    return;
                }

                var sx = w / pw;
                var sy = h / ph;

                var transform = 'scale(' + (1/Math.max(sx, sy)) + ')';

                $(this).css('transform', transform);
                $(this).css('-ms-transform', transform);
                $(this).css('-moz-transform', transform);
                $(this).css('-webkit-transform', transform);
                $(this).css('-o-transform', transform);
            });
        };

        $(window).resize(function(){ resizeElements(); });

        return resizeElements();
    };
})(jQuery);
