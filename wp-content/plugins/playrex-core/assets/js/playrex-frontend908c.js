; (function ($) {
    'use strict';
    $(window).on('elementor/frontend/init', function () {

        // Match Slider
        elementorFrontend.hooks.addAction('frontend/element_ready/playrexmatch.default', function ($scope) {

            let $slickcarousels = $scope.find('.match-custom');
            $slickcarousels.not('.slick-initialized').slick({
                dots: $slickcarousels.data('slick-dots'),
                infinite: true,
                arrows: $slickcarousels.data('slick-arrows'),
                prevArrow: '<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>',
                autoplay: $slickcarousels.data('slick-autoplay'),
                autoplaySpeed: 6000,
                fade: true,
                speed: 1000,
                slidesToShow: $slickcarousels.data('slide-to-show'),
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                    }
                },{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                    }
                },{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                    }
                },{
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                    }
                }
                ]
            });

            if ($('[data-bg-src]').length > 0) {
                $('[data-bg-src]').each(function () {
                    var src = $(this).attr('data-bg-src');
                    $(this).css('background-image', 'url(' + src + ')');
                    $(this).removeAttr('data-bg-src').addClass('background-image');
                });
            };
        });

        // Filter Tourament
        elementorFrontend.hooks.addAction('frontend/element_ready/playrexblogpost.default', function ($scope) {

            $(".filter-active").imagesLoaded(function () {
                var $filter = ".filter-active",
                    $filterItem = ".filter-item",
                    $filterMenu = ".filter-menu-active";

                if ($($filter).length > 0) {
                    var $grid = $($filter).isotope({
                        itemSelector: $filterItem,
                        filter: "*",
                        masonry: {
                            // use outer width of grid-sizer for columnWidth
                            columnWidth: 1,
                        },
                    });

                    // filter items on button click
                    $($filterMenu).on("click", "button", function () {
                        var filterValue = $(this).attr("data-filter");
                        $grid.isotope({
                            filter: filterValue,
                        });
                    });

                    // Menu Active Class
                    $($filterMenu).on("click", "button", function (event) {
                        event.preventDefault();
                        $(this).addClass("active");
                        $(this).siblings(".active").removeClass("active");
                    });
                }
            });

        });

        // Blog Slider
        elementorFrontend.hooks.addAction('frontend/element_ready/playrexblogpost.default', function ($scope) {

            let blogslider = $scope.find('.blog-slider');
            blogslider.not('.slick-initialized').slick({
                dots: false,
                infinite: true,
                arrows: false,
                autoplay: blogslider.data('slick-autoplay'),
                autoplaySpeed: 6000,
                fade: false,
                speed: 1000,
                slidesToShow: blogslider.data('slide-to-show'),
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                    }
                }, {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                }
                ]
            });

            if ($('[data-bg-src]').length > 0) {
                $('[data-bg-src]').each(function () {
                    var src = $(this).attr('data-bg-src');
                    $(this).css('background-image', 'url(' + src + ')');
                    $(this).removeAttr('data-bg-src').addClass('background-image');
                });
            };

        });
        
        // Prodcut Slider
        elementorFrontend.hooks.addAction('frontend/element_ready/playrexproductslider.default', function ($scope) {

            let carousel = $scope.find('.vs-carousel');
            carousel.not('.slick-initialized').slick({
                dots: false,
                infinite: true,
                arrows: false,
                autoplay: carousel.data('slick-autoplay'),
                autoplaySpeed: 6000,
                fade: false,
                speed: 1000,
                slidesToShow: carousel.data('slide-to-show'),
                slidesToScroll: 1,
                centerMode: carousel.data('center-mode'),
                centerPadding: carousel.data('center-padding'),
                responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    }
                }, {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                }
                ]
            });
        });

        // Slider Image
        elementorFrontend.hooks.addAction('frontend/element_ready/playrexplayerimageslider.default', function ($scope) {
            let image_slider = $scope.find('.match-iamge-slider');
            image_slider.not('.slick-initialized').slick({
                dots: true,
                infinite: true,
                arrows: false,
                autoplay: false,
                autoplaySpeed: 6000,
                fade: true,
                speed: 1000,
                slidesToShow: 1,
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 1,
                    }
                }, {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                }
                ]
            });

        });

        // UpComing Slider
        elementorFrontend.hooks.addAction('frontend/element_ready/playrexupcoming_t.default', function ($scope) {

            let up_slider = $scope.find('.up_tournament_slider');
            up_slider.not('.slick-initialized').slick({
                dots: true,
                infinite: true,
                arrows: false,
                autoplay: up_slider.data('slick-autoplay'),
                autoplaySpeed: 6000,
                fade: false,
                speed: 1000,
                slidesToShow: up_slider.data('slide-to-show'),
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                    }
                }, {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                }
                ]
            });

        });

        /*----------- Tournament Hero Slider  ----------*/
        elementorFrontend.hooks.addAction('frontend/element_ready/playrextournament_hero.default', function ($scope) {

            let playrextournament_hero = $scope.find('#ournament4554');
            playrextournament_hero.not('.slick-initialized').slick({
                speed: 800,
                arrows: false,
                fade: false,
                dots: false,
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true, // Infinite should set be false
                centerPadding: "475px",
                centerMode: true,
                responsive: [
                    {
                        breakpoint: 1600,
                        settings: {
                            centerPadding: "300px",
                        },
                    },
                    {
                        breakpoint: 1366,
                        settings: {
                            centerPadding: "200px",
                        },
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            centerPadding: "50px",
                        },
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            centerPadding: "0",
                        },
                    },
                ],
            });

            $("[data-slick-next]").each(function () {
                $(this).on("click", function (e) {
                    e.preventDefault();
                    $($(this).data("slick-next")).slick("slickNext");
                });
            });

            $("[data-slick-prev]").each(function () {
                $(this).on("click", function (e) {
                    e.preventDefault();
                    $($(this).data("slick-prev")).slick("slickPrev");
                });
            });
        });

        // Team Slider
        elementorFrontend.hooks.addAction('frontend/element_ready/playrexteam.default', function ($scope) {

            let $slickcarousels = $scope.find('.playrex-team');
            $slickcarousels.not('.slick-initialized').slick({
                dots: $slickcarousels.data('slick-dots'),
                infinite: true,
                arrows: $slickcarousels.data('slick-arrows'),
                prevArrow: '',
                nextArrow: '',
                autoplay: $slickcarousels.data('slick-autoplay'),
                autoplaySpeed: 6000,
                fade: false,
                centerMode: true,
                centerPadding: 0,
                speed: 1000,
                slidesToShow: $slickcarousels.data('slide-to-show'),
                slidesToScroll: 2,
                responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    }
                }, {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                }
                ]
            });

        });

        
        elementorFrontend.hooks.addAction('frontend/element_ready/playrexpricta.default', function ($scope) {

            if ($('[data-bg-src]').length > 0) {
                $('[data-bg-src]').each(function () {
                    var src = $(this).attr('data-bg-src');
                    $(this).css('background-image', 'url(' + src + ')');
                    $(this).removeAttr('data-bg-src').addClass('background-image');
                });
            };
        });

        // Player Slider
        elementorFrontend.hooks.addAction('frontend/element_ready/playrexplayer.default', function ($scope) {

            let $team_nav = $scope.find('.team-nav1');
            let $conten_slide = $scope.find('.content-slide');

            $team_nav.not('.slick-initialized').slick({
                dots: false,
                infinite: true,
                arrows: true,
                prevArrow: '<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>',
                autoplay: false,
                autoplaySpeed: 6000,
                fade: false,
                speed: 1000,
                centerMode: true,
                centerPadding: 0,
                slidesToShow: 5,
                asNavFor: '#palyergroup1',
                focusOnSelect: true,
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 3,
                        arrows: false,
                    }
                }, {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        arrows: false,
                    }
                }
                ]
            });

            $conten_slide.not('.slick-initialized').slick({
                dots: false,
                infinite: true,
                arrows: false,
                autoplay: false,
                autoplaySpeed: 6000,
                fade: true,
                speed: 1000,
                slidesToShow: 1,
                asNavFor: '#teamnav',
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 1,
                    }
                }, {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                }
                ]
            });

        });

        // Live Streming
        elementorFrontend.hooks.addAction('frontend/element_ready/playrexprilivestreaimg.default', function ($scope) {

            let $livetreaming_nav = $scope.find('.livetreaming-nav');
            let $livetreaming_content = $scope.find('.livetreaming-content');

            $livetreaming_nav.not('.slick-initialized').slick({
                dots: false,
                infinite: true,
                arrows: true,
                prevArrow: '<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>',
                autoplay: false,
                autoplaySpeed: 6000,
                fade: true,
                speed: 1000,
                slidesToShow: 1,
                asNavFor: '.video-nav1',
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                    }
                },{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                    }
                }, {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                    }
                }
                ]
            });

            $livetreaming_content.not('.slick-initialized').slick({
                dots: false,
                infinite: true,
                arrows: false,
                autoplay: false,
                autoplaySpeed: 6000,
                fade: false,
                speed: 1000,
                slidesToShow: 4,
                asNavFor: '#videoslide1',
                focusOnSelect: true,
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                    }
                }, {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                }
                ]
            });

        });

        // Tournamanet Slider
        elementorFrontend.hooks.addAction('frontend/element_ready/playrexpritournament.default', function ($scope) {

            let $tournament_nav = $scope.find('.tournament-nav');
            let $tournament_conten_slide = $scope.find('.tournament-content-slider');

            $tournament_nav.not('.slick-initialized').slick({
                dots: false,
                infinite: true,
                arrows: true,
                prevArrow: '<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>',
                autoplay: false,
                autoplaySpeed: 6000,
                fade: false,
                speed: 1000,
                centerMode: true,
                centerPadding: 0,
                slidesToShow: 3,
                asNavFor: '#tournament-style-one',
                focusOnSelect: true,
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 3,
                        arrows: false,
                    }
                },{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        arrows: false,
                    }
                }, {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        arrows: false,
                    }
                }
                ]
            });

            $tournament_conten_slide.not('.slick-initialized').slick({
                dots: false,
                infinite: true,
                arrows: false,
                autoplay: false,
                autoplaySpeed: 6000,
                fade: true,
                speed: 1000,
                slidesToShow: 1,
                asNavFor: '#tournament-menu-nav',
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 1,
                    }
                }, {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                }
                ]
            });

            let $tournament_st = $scope.find('.tournament_style_two');

            $tournament_st.not('.slick-initialized').slick({
                speed: 800,
                arrows: false,
                fade: false,
                dots: false,
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true, // Infinite should set be false
                centerPadding: "475px",
                centerMode: true,
                responsive: [
                    {
                        breakpoint: 1600,
                        settings: {
                            centerPadding: "300px",
                        },
                    },
                    {
                        breakpoint: 1366,
                        settings: {
                            centerPadding: "200px",
                        },
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            centerPadding: "50px",
                        },
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            centerPadding: "0",
                        },
                    },
                ],
            });
        });

        elementorFrontend.hooks.addAction('frontend/element_ready/playrexplayer3dslider.default', function ($scope) {

            var slick3d = $scope.find('.slick-3d-active');
            var secondslider = $scope.find('.player-slider1');
            slick3d
              .on("init", function (event, slick, currentSlide) {
                var cur = $(slick.$slides[slick.currentSlide]),
                  next = cur.next(),
                  next2 = cur.next().next(),
                  next3 = cur.next().next().next(),
                  prev = cur.prev(),
                  prev2 = cur.prev().prev(),
                  prev3 = cur.prev().prev().prev();
                prev.addClass("slick-3d-prev");
                next.addClass("slick-3d-next");
                prev2.addClass("slick-3d-prev2");
                prev3.addClass("slick-3d-prev3");
                next2.addClass("slick-3d-next2");
                next3.addClass("slick-3d-next3");
                cur
                  .removeClass("slick-3d-next")
                  .removeClass("slick-3d-prev")
                  .removeClass("slick-3d-next2")
                  .removeClass("slick-3d-prev2")
                  .removeClass("slick-3d-next3")
                  .removeClass("slick-3d-prev3");
                slick.$prev = prev;
                slick.$next = next;
              })
              .on("beforeChange", function (event, slick, currentSlide, nextSlide) {
                var cur = $(slick.$slides[nextSlide]);
                slick.$prev.removeClass("slick-3d-prev");
                slick.$next.removeClass("slick-3d-next");
                slick.$prev.prev().removeClass("slick-3d-prev2");
                slick.$next.next().removeClass("slick-3d-next2");
                slick.$prev.prev().prev().removeClass("slick-3d-prev3");
                slick.$next.next().next().removeClass("slick-3d-next3");
                var next = cur.next(),
                  prev = cur.prev();
                prev.addClass("slick-3d-prev");
                next.addClass("slick-3d-next");
                prev.prev().addClass("slick-3d-prev2");
                next.next().addClass("slick-3d-next2");
                prev.prev().prev().addClass("slick-3d-prev3");
                next.next().next().addClass("slick-3d-next3");
                slick.$prev = prev;
                slick.$next = next;
                cur
                  .removeClass("slick-next")
                  .removeClass("slick-3d-prev")
                  .removeClass("slick-next2")
                  .removeClass("slick-3d-prev2")
                  .removeClass("slick-next3")
                  .removeClass("slick-3d-prev3");
              });
            slick3d.not('.slick-initialized').slick({
              speed: 1000,
              arrows: false,
              dots: false,
              focusOnSelect: true,
              infinite: true,
              centerMode: true,
              slidesPerRow: 1,
              slidesToShow: 1,
              slidesToScroll: 1,
              centerPadding: "0",
              swipe: true,
              autoplay: false,
              asNavFor: ".player-slider1",
            });
            secondslider.not('.slick-initialized').slick({
              speed: 1300,
              arrows: false,
              dots: false,
              focusOnSelect: true,
              infinite: true,
              centerMode: true,
              slidesPerRow: 1,
              slidesToShow: 1,
              slidesToScroll: 1,
              centerPadding: "0",
              swipe: true,
              autoplay: false,
              fade: true,
              asNavFor: "#playeravater1",
            });

        });

        // Gallry Slider
        elementorFrontend.hooks.addAction('frontend/element_ready/playrexgallery.default', function ($scope) {

            let $slickgallery = $scope.find('.vs-carousel');
            $slickgallery.not('.slick-initialized').slick({
                dots: false,
                infinite: true,
                arrows: false,
                autoplay: $slickgallery.data('slick-autoplay'),
                autoplaySpeed: 6000,
                fade: false,
                speed: 1000,
                slidesToShow: $slickgallery.data('slide-to-show'),
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                    }
                }, {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                }
                ]
            });

            //gallery popup
            $(".popup-image").magnificPopup({
                type: "image",
                gallery: {
                    enabled: true,
                },
            });

        });

        // Testimonial  Slider
        elementorFrontend.hooks.addAction('frontend/element_ready/playrextestimonial.default', function ($scope) {
            $('[data-slick-next]').each(function () {
                $(this).on('click', function (e) {
                    e.preventDefault()
                    $($(this).data('slick-next')).slick('slickNext');
                })
            })

            $('[data-slick-prev]').each(function () {
                $(this).on('click', function (e) {
                    e.preventDefault()
                    $($(this).data('slick-prev')).slick('slickPrev');
                })
            })


            let $testi_style1 = $scope.find('.testi-style1');
            $testi_style1.not('.slick-initialized').slick({
                dots: false,
                infinite: true,
                arrows: true,
                prevArrow: '<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>',
                autoplay: true,
                autoplaySpeed: 6000,
                fade: true,
                speed: 1000,
                slidesToShow: 1,
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                    }
                },{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                    }
                }, {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                    }
                }
                ]
            });

        });

        // Offcanvas
        elementorFrontend.hooks.addAction('frontend/element_ready/playrexoffcanvas.default', function ($scope) {
            function popupSideMenu($sideMenu, $sideMunuOpen, $sideMenuCls, $toggleCls) {
                // Sidebar Popup
                $($sideMunuOpen).on("click", function (e) {
                    e.preventDefault();
                    $($sideMenu).addClass($toggleCls);
                });
                $($sideMenu).on("click", function (e) {
                    e.stopPropagation();
                    $($sideMenu).removeClass($toggleCls);
                });
                var sideMenuChild = $sideMenu + " > div";
                $(sideMenuChild).on("click", function (e) {
                    e.stopPropagation();
                    $($sideMenu).addClass($toggleCls);
                });
                $($sideMenuCls).on("click", function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    $($sideMenu).removeClass($toggleCls);
                });
            }
            popupSideMenu(
                ".sidemenu-wrapper",
                ".sideMenuToggler",
                ".sideMenuCls",
                "show"
            );
        });

        /*----------- 15. Tournament Slider Area  ----------*/
        elementorFrontend.hooks.addAction('frontend/element_ready/playrexprifeaturematch.default', function ($scope) {
            
            $("[data-slick-next]").each(function () {
                $(this).on("click", function (e) {
                    e.preventDefault();
                    $($(this).data("slick-next")).slick("slickNext");
                });
            });

            $("[data-slick-prev]").each(function () {
                $(this).on("click", function (e) {
                    e.preventDefault();
                    $($(this).data("slick-prev")).slick("slickPrev");
                });
            });

            let tournamentSlider = "#tournamentslide1",
                tournamentNav = ".tournament-menu2";

            $(tournamentNav).each(function () {
                var tabBtnIndex = 0;
                $(this)
                    .find(".tab-btn")
                    .each(function () {
                        var btnCurrent = $(this);
                        btnCurrent.attr("data-goto", tabBtnIndex);
                        tabBtnIndex++;
                        btnCurrent.on("click", function () {
                            $("#tournamentslide1").slick("slickGoTo", btnCurrent.data("goto"));
                        });
                    });
            });

            $(tournamentSlider)
                .on("init", function (event, slick, currentSlide) {
                    var cur = $(slick.$slides[slick.currentSlide]);
                    var currentIndex = cur.data("slick-index");
                    var prevIndex = cur.prev().data("slick-index");
                    var nextIndex = cur.next().data("slick-index");
                    $(`${tournamentNav} .tab-btn[data-goto="${currentIndex}"]`).addClass(
                        "active"
                    );
                    $(`${tournamentNav} .tab-btn[data-goto="${nextIndex}"]`).addClass("next");
                    $(`${tournamentNav} .tab-btn[data-goto="${prevIndex}"]`).addClass("prev");
                    slick.$prevIndex = prevIndex;
                    slick.$nextIndex = nextIndex;
                })
                .on("beforeChange", function (event, slick, currentSlide, nextSlide) {
                    var cur = $(slick.$slides[nextSlide]);
                    var currentIndex = cur.data("slick-index");
                    $(
                        `${tournamentNav} .tab-btn[data-goto="${slick.$prevIndex}"]`
                    ).removeClass("prev");
                    $(
                        `${tournamentNav} .tab-btn[data-goto="${slick.$nextIndex}"]`
                    ).removeClass("next");
                    var prevIndex = cur.prev().data("slick-index");
                    var nextIndex = cur.next().data("slick-index");
                    $(`${tournamentNav} .tab-btn[data-goto="${nextIndex}"]`).addClass("next");
                    $(`${tournamentNav} .tab-btn[data-goto="${prevIndex}"]`).addClass("prev");
                    slick.$prevIndex = prevIndex;
                    slick.$nextIndex = nextIndex;
                    $(`${tournamentNav} .tab-btn[data-goto="${currentIndex}"]`)
                        .addClass("active")
                        .removeClass("next")
                        .removeClass("prev")
                        .siblings()
                        .removeClass("active");
                });

            $(tournamentSlider).slick({
                speed: 600,
                arrows: false,
                fade: true,
                dots: true,
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false, // Infinite should set be false
                responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                            dots: false,
                        },
                    },
                ],
            });
        });

    });
}(jQuery));