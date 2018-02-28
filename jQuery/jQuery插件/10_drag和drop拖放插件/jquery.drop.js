/*!
 * jquery.drop.js 0.0.1 - https://github.com/yckart/jquery.drag_drop.js
 * Makes elements droppable.
 *
 * Copyright (c) 2013 Yannick Albert (http://yckart.com)
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php).
 * 2013/02/09
*/
;(function($, window, document, undefined) {
    var pluginName = "drop",
        Plugin = function(elem, fn) {
            var $elem = $(elem),
                offset = null,
                state = false;

            var drop = function(e) {
                var offset = $elem.offset(),
                    dimensions = {
                        left: offset.left - $(document).scrollLeft(),
                        top: offset.top - $(document).scrollTop(),
                        right: offset.left + $elem.width(),
                        bottom: offset.top + $elem.height()
                    };

                // Has the mouse dragged into the drop zone?
                var in_item = (dimensions.left <= e.clientX) && (e.clientX <= dimensions.right) && (dimensions.top <= e.clientY) && (e.clientY <= dimensions.bottom);

                // Update the drop zone class accordingly.
                if (in_item) {
                    fn(e, elem);
                }
            };
            $(document).on("mouseup", drop);
        };


    $.fn[pluginName] = function(fn) {
        return this.each(function() {
            new Plugin(this, fn);
        });
    };
}(jQuery, window, document));