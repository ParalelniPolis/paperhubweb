(function ($) {
    "use strict";

    jQuery(window).load(function () {
        if ($().masonry && ($('.ct-js-blogMasonry').length > 0)) {
            $('.ct-js-blogMasonry').masonry({
                itemSelector: '.ct-js-blogMasonry-item',
                masonry: {
                }
            });
        }
    });
}(jQuery));