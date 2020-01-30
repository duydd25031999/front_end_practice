var navBar = (function($) {
    return {
        init: function() {
            var $navBtn = $(`.navbar__btn`);
            var $navBar = $(`.navbar__list`);

            $navBtn.click(function(event) {
                $navBar.toggleClass(`navbar__list--show`);
            })
        }
    }
})(jQuery);