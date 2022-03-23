/*!
 * @name comp_recommendation
 * @author
 * comp_recommendation
 * */
;(function($) {
    if (!$.manefaces) {
        $.manefaces = {};
    }

    $.manefaces.comp_XY = function(el, options) {
        let base = this;

        // Access to jQuery and DOM versions of element
        base.$el = $(el);
        base.el = el;

        // Add a reverse reference to the DOM object
        base.$el.data("manefaces.comp_XY", base);
        base.init = function() {
            base.options = $.extend({}, $.manefaces.comp_XY.defaultOptions, options);

            // todo implement functionality here ...
        };
        // Run initializer
        base.init();
    };

    // optional default options
    $.manefaces.comp_XY.defaultOptions = {};

    $.fn.manefaces_comp_XY = function(options) {
        return this.each(function() {(
            new $.manefaces.comp_XY(this, options));
        });
    };
})(jQuery);

$(".recommendation-list").manefaces_comp_XY();

