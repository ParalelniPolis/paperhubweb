(function ($) {
    "use strict";

    $(document).ready(function () {

        // Timeline JS // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

        if ($("#timeline-embed").length > 0) {

            createStoryJS({
                width: '100%',
                height: '600',
                source: 'assets/js/timeline/source/timeline.json',
                embed_id: 'timeline-embed',               //OPTIONAL USE A DIFFERENT DIV ID FOR EMBED
                start_at_end: false,                          //OPTIONAL START AT LATEST DATE
                start_at_slide: '2',                            //OPTIONAL START AT SPECIFIC SLIDE
                start_zoom_adjust: '2',                            //OPTIONAL TWEAK THE DEFAULT ZOOM LEVEL
                hash_bookmark: false,                           //OPTIONAL LOCATION BAR HASHES
                debug: false,                           //OPTIONAL DEBUG TO CONSOLE
                lang: 'en',                           //OPTIONAL LANGUAGE
                maptype: 'HYBRID',                   //OPTIONAL MAP STYLE
                css: 'assets/js/timeline/css/timeline.css',     //OPTIONAL PATH TO CSS
                js: 'assets/js/timeline/js/timeline-min.js'    //OPTIONAL PATH TO JS
            });
        }
    })
}(jQuery));