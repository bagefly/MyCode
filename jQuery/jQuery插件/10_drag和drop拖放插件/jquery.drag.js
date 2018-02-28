/*!
 * jquery.drag.js 0.0.1 - https://github.com/yckart/jquery.drag_drop.js
 * Makes elements draggable.
 *
 * Copyright (c) 2013 Yannick Albert (http://yckart.com)
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php).
 * 2013/02/09
*/
;(function($, window, document, undefined) {
    var pluginName = "drag",
        defaults = {
            onDrag: function(event, elem) {},
            onMove: function(event, elem) {},
            onDrop: function(event, elem) {}
        },
        Plugin = function(elem, options) {
            options = $.extend({}, defaults, options);
            var doc = $(document),
                $elem = $(elem),
                offset = null;

            var start = function(e) {
                var pos = $elem.offset();
                offset = {
                    x: e.pageX - (parseFloat($elem.css('left')) || 0),
                    y: e.pageY - (parseFloat($elem.css('top')) || 0)
                };

                options.onDrag(e, elem);
                doc.on("mousemove.draggable", moveMe);
                doc.on("mouseup", end);

                e.preventDefault();
            };

            var moveMe = function(e) {
                $elem.stop().css({
                    top: e.pageY - offset.y,
                    left: e.pageX - offset.x
                });
                options.onMove(e, elem);
            };

            var end = function(e) {
                options.onDrop(e, elem);
                doc.off("mousemove.draggable", moveMe);
            };

            $elem.on("mousedown", start);
        };

    $.fn[pluginName] = function(options) {
        return this.each(function() {
            new Plugin(this, options);
        });
    };
}(jQuery, window, document));