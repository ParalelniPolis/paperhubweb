(function ($) {
    "use strict";

    $(document).ready(function () {

        // ct-tabs add active to element // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

        var $tab_link = jQuery('.ct-tabs .ct-tabs-toggle');

        jQuery('.ct-tabs [data-toggle=tab]').click(function(){
            var $parent = jQuery(this).parent();
            if ($parent.hasClass('active')){
                $tab_link.addClass("is-active");
                if(!jQuery(jQuery(this).attr("href")).hasClass("is-active")){
                    $tab_link.not(this).removeClass('is-active');
                }
                jQuery(jQuery(this).attr("href")).toggleClass('is-active');
            } else{
                $tab_link.addClass("is-active");
                $tab_link.not(this).removeClass('is-active');
            }
            if($devicewidth < 767){
                var $container = jQuery(jQuery(this).attr("href"));
                setTimeout(function(){

                    $('html,body').animate({
                        scrollTop: $container.offset().top - 130
                    }, 600, 'swing');
                }, 100);

            }
        })
    })
}(jQuery));