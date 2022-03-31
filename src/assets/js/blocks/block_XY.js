/*!
 * @name comp_recommendation
 * @author
 * comp_recommendation
 * */
;(function($) {
    if (!$.manefaces) {
        $.manefaces = {};
    }

    $.manefaces.block_XY = function(el, options) {
        let base = this;

        // Access to jQuery and DOM versions of element
        base.$el = $(el);
        base.el = el;

        // Add a reverse reference to the DOM object
        base.$el.data("manefaces.block_XY", base);
        base.init = function() {
            base.options = $.extend({}, $.manefaces.block_XY.defaultOptions, options);

            // todo implement functionality here ...
        };
        // Run initializer
        base.init();
    };

    // optional default options
    $.manefaces.block_XY.defaultOptions = {};

    $.fn.manefaces_block_XY = function(options) {
        return this.each(function() {(
            new $.manefaces.block_XY(this, options));
        });
    };
})(jQuery);

$(".recommendation-list").manefaces_block_XY();

