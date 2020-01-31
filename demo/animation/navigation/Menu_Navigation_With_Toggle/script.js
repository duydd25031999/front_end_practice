var navUnder = (function($) {
    return {
        init: function() {
            var $navBtn = $(`.nav--under__btn`);
            var $navMenu = $(`.nav--under__menu`);

            $navBtn.click(function(event) {
                $navBtn.toggleClass(`nav--under__btn--change`);
                $navMenu.toggleClass(`nav--under__menu--show`);
            });
        }
    };
})(jQuery);

navUnder.init();