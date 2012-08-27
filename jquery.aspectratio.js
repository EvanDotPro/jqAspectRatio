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
            self.each(function() {
                var pw = $(this).parent().width();
                var ph = $(this).parent().height();

                if (!options.scale) {
                    var ratio = $(this).data('aspectRatio');
                    if (ph < pw) {
                        $(this).height(ph).width(ph * ratio);
                    } else {
                        $(this).width(pw).height(pw * ratio);
                    }
                    return;
                }

                var sx = $(this).width() / pw;
                var sy = $(this).height() / ph;

                var transform = 'scale(' + (1/Math.max(sx, sy)) + ')';

                if ($(this).data('transform') == transform) return;
                $(this).data('transform', transform);

                $(this).css('transform', transform);
                $(this).css('-ms-transform', transform);
                $(this).css('-moz-transform', transform);
                $(this).css('-webkit-transform', transform);
                $(this).css('-o-transform', transform);
            });
        };

        $(window).resize(function(){ resizeElements(); });

        if (!options.scale) {
            self.each(function() {
                $(this).data('aspectRatio', ($(this).width() / $(this).height()));
            });
        }

        return resizeElements();
    };
})(jQuery);
