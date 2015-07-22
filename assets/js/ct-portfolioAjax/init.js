(function ($){
    $(document).ready(function(){
        $("body").on("click", ".ct-js-galleryAjax-getAjaxItem", function () {
            var $this = $(this);
            var $galDetails = $($this.attr("data-rel"));
            var $galDetailsAll = $(".ct-galleryAjax-Details");

            $(".ct-js-galleryAjax-getAjaxItem").parent().removeClass("is-visible")

            if ($galDetails.length <= 0) {
                return true;
            }
            $galDetailsAll.not($galDetails).animate({opacity: 0}, 400, function () {
                $galDetailsAll.not($galDetails).slideUp( 400, function() {});
            });
            var url = $this.attr("href") + " #ct-ajaxContent";

            var navHeight = 70;

            if (($galDetails).is(":visible")) {
                $galDetails.animate({opacity: 0}, 400, function () {
                    $galDetails.load(url, function () {
                        $galDetails.delay(300).animate({opacity: 1}, 400, function () {
                            $('html,body').animate({
                                scrollTop: $this.offset().top - navHeight - 30
                            }, 600, 'swing');
                        });
                        $('.ct-js-flexslider-ajax').flexslider({
                            animationLoop: true,
                            controlNav: false,
                            animation: "slide"
                        })
                        $this.parent().addClass("is-visible");
                    });
                });
            } else {
                $galDetails.slideUp(300, function () {
                    $galDetails.load(url, function () {
                        $galDetails.delay(300).animate({opacity: 1}, 400).slideDown(700, function () {
                            if($devicewidth > 767) {
                                $('html,body').animate({
                                    scrollTop: $this.offset().top - navHeight - 30
                                }, 600, 'swing');
                            } else{
                                $('html,body').animate({
                                    scrollTop: $galDetails.offset().top - navHeight
                                }, 600, 'swing');
                            }
                            $('.ct-js-flexslider-ajax').flexslider({
                                animationLoop: true,
                                controlNav: false,
                                animation: "slide"
                            })
                        });
                        $this.parent().addClass("is-visible");
                    });
                });
            }

            return false;
        })

        $("body").on("click", ".closeAjaxPortfolio", function () {
            var $galDetails = $("#ct-galleryAjax-Details");

            var $navbar = $('.navbar-fixed-top');
            var navHeight = 0;
            if ($navbar.length > 0) {
                navHeight = parseInt($navbar.height());
            }

            $galDetails.slideUp(300, function () {
                $('html,body').animate({
                    scrollTop: $("#portfolio").offset().top - navHeight
                }, 600, 'swing');
            });
            return false;
        });


        $(document).ajaxStart(function () {
            $("#ct_preloader").addClass("ajax-inprogress").show();

        });

        $(document).ajaxStop(function () {
            setTimeout(function () {
                $("#ct_preloader").removeClass("ajax-inprogress").hide();
            }, 300);

            // init js after ajax stop
            $("#ct-galleryAjax-Details .content-area").each(function () {
                var $this = $(this);
                var bottomSpace = $this.attr("data-btmspace");
                var topSpace = $this.attr("data-topspace");

                if (validatedata(bottomSpace, false)) {
                    $this.css("padding-bottom", bottomSpace + "px");
                }
                if (validatedata(topSpace, false)) {
                    $this.css("padding-top", topSpace + "px");
                }
            })
            $("[data-toggle='tooltip']").tooltip();

        });
    })
}(jQuery))