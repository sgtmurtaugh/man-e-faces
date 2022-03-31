/*!
 * @name comp_recommendation
 * @author
 * comp_recommendation
 * */
;(function($) {
    if (!$.manefaces) {
        $.manefaces = {};
    }

    $.manefaces.mod_XY = function(el, options) {
        let base = this;

        // Access to jQuery and DOM versions of element
        base.$el = $(el);
        base.el = el;

        // Add a reverse reference to the DOM object
        base.$el.data("manefaces.mod_XY", base);
        base.init = function() {
            base.options = $.extend({}, $.manefaces.mod_XY.defaultOptions, options);

            // todo implement functionality here ...
        };
        // Run initializer
        base.init();
    };

    // optional default options
    $.manefaces.mod_XY.defaultOptions = {};

    $.fn.manefaces_mod_XY = function(options) {
        return this.each(function() {(
            new $.manefaces.mod_XY(this, options));
        });
    };
})(jQuery);

$(".recommendation-list").manefaces_mod_XY();

