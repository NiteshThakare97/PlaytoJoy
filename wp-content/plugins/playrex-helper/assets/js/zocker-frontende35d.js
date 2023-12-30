;(function($) {
    'use strict';
    $(window).on( 'elementor/frontend/init', function() {

        // Video Slider
        elementorFrontend.hooks.addAction('frontend/element_ready/zockervideoslider.default',function($scope) {
            let $slickcarousels = $scope.find('.vs-carousel');
            $slickcarousels.not('.slick-initialized').slick({
                dots: false,
                infinite: true,
                arrows: $slickcarousels.data('slick-arrows'),
                prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-arrow-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next"><i class="fal fa-arrow-right"></i></button>',
                autoplay: $slickcarousels.data('slick-autoplay'),
                autoplaySpeed: 6000,
                fade: false,
                speed: 1000,
                slidesToShow: $slickcarousels.data('slide-to-show'),
                slidesToScroll: 1,
                centerMode: true,
                centerPadding:0,
                responsive: [{
                    breakpoint: 1700,
                    settings: {
                        slidesToShow: 3,
                        arrows: false,
                    }
                },{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
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
        
        // Team Slider
        elementorFrontend.hooks.addAction('frontend/element_ready/zockerteammember.default',function($scope) {
            let $slickcarousels = $scope.find('.vs-carousel');
            $slickcarousels.not('.slick-initialized').slick({
                dots: false,
                infinite: true,
                arrows: $slickcarousels.data('slick-arrows'),
                prevArrow: '<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>',
                autoplay: $slickcarousels.data('slick-autoplay'),
                autoplaySpeed: 6000,
                fade: false,
                speed: 1000,
                slidesToShow: $slickcarousels.data('slide-to-show'),
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 1700,
                    settings: {
                        slidesToShow: 3,
                        arrows: false,
                    }
                },{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
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

        // Blog Slider
        elementorFrontend.hooks.addAction('frontend/element_ready/zockerblogpost.default',function($scope) {
            let $slickcarousels = $scope.find('.vs-carousel');
            $slickcarousels.not('.slick-initialized').slick({
                dots: false,
                infinite: true,
                arrows: $slickcarousels.data('slick-arrows'),
                prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-arrow-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next"><i class="fal fa-arrow-right"></i></button>',
                autoplay: $slickcarousels.data('slick-autoplay'),
                autoplaySpeed: 6000,
                fade: false,
                speed: 1000,
                slidesToShow: $slickcarousels.data('slide-to-show'),
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 1700,
                    settings: {
                        slidesToShow: 3,
                        arrows: false,
                    }
                },{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
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
        
        // Blog Video Slider
        elementorFrontend.hooks.addAction('frontend/element_ready/zockervideonews.default',function($scope) {
            let $slickcarousels = $scope.find('.vs-carousel');
            $slickcarousels.not('.slick-initialized').slick({
                dots: false,
                infinite: true,
                arrows: $slickcarousels.data('slick-arrows'),
                prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-arrow-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next"><i class="fal fa-arrow-right"></i></button>',
                autoplay: $slickcarousels.data('slick-autoplay'),
                autoplaySpeed: 6000,
                fade: false,
                speed: 1000,
                slidesToShow: $slickcarousels.data('slide-to-show'),
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 1700,
                    settings: {
                        slidesToShow: 3,
                        arrows: false,
                    }
                },{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
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
        
        // Trending Post Slider
        elementorFrontend.hooks.addAction('frontend/element_ready/zockertrendingnews.default',function($scope) {
            let $slickcarousels = $scope.find('.vs-carousel');
            $slickcarousels.not('.slick-initialized').slick({
                dots: false,
                infinite: true,
                arrows: $slickcarousels.data('slick-arrows'),
                prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-arrow-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next"><i class="fal fa-arrow-right"></i></button>',
                autoplay: $slickcarousels.data('slick-autoplay'),
                autoplaySpeed: 6000,
                fade: false,
                speed: 1000,
                slidesToShow: $slickcarousels.data('slide-to-show'),
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 1700,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                    }
                },{
                    breakpoint: 992,
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
        
        // Players Slider
        elementorFrontend.hooks.addAction('frontend/element_ready/zockerplayer.default',function($scope) {
            let $slickcarousels = $scope.find('.vs-carousel');
            $slickcarousels.not('.slick-initialized').slick({
                dots: false,
                infinite: true,
                arrows: $slickcarousels.data('slick-arrows'),
                prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-arrow-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next"><i class="fal fa-arrow-right"></i></button>',
                autoplay: $slickcarousels.data('slick-autoplay'),
                autoplaySpeed: 6000,
                fade: false,
                speed: 1000,
                slidesToShow: $slickcarousels.data('slide-to-show'),
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 1700,
                    settings: {
                        slidesToShow: $slickcarousels.data('lg-slide-to-show'),
                        arrows: false,
                    }
                },{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: $slickcarousels.data('lg-slide-to-show'),
                        arrows: false,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: $slickcarousels.data('md-slide-to-show'),
                        arrows: false,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: $slickcarousels.data('sm-slide-to-show'),
                        arrows: false,
                    }
                }
                ]
            });
            
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
            
        });

        // Brand Slider
        elementorFrontend.hooks.addAction('frontend/element_ready/zockerclientlogo.default',function($scope) {
            let $slickcarousels = $scope.find('.vs-carousel');
            $slickcarousels.not('.slick-initialized').slick({
                dots: false,
                infinite: true,
                arrows: false,
                autoplay: $slickcarousels.data('slick-autoplay'),
                arrows: $slickcarousels.data('slick-arrows'),
                prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-arrow-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next"><i class="fal fa-arrow-right"></i></button>',
                autoplaySpeed: 6000,
                fade: false,
                speed: 1000,
                slidesToShow: $slickcarousels.data('slide-to-show'),
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 1700,
                    settings: {
                        slidesToShow: 4,
                        arrows: false,
                    }
                },{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 4,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 2,
                        arrows: false,
                    }
                }
                ]
            });
        });
        
        // Prfoduct Slider
        elementorFrontend.hooks.addAction('frontend/element_ready/zockerproductslider.default',function($scope) {
            let $slickcarousels = $scope.find('.vs-carousel');
            $slickcarousels.not('.slick-initialized').slick({
                dots: false,
                infinite: true,
                autoplay: $slickcarousels.data('slick-autoplay'),
                arrows: $slickcarousels.data('slick-arrows'),
                prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-arrow-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next"><i class="fal fa-arrow-right"></i></button>',
                autoplaySpeed: 6000,
                fade: false,
                speed: 1000,
                slidesToShow: $slickcarousels.data('slide-to-show'),
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 1700,
                    settings: {
                        slidesToShow: 3,
                        arrows: false,
                    }
                },{
                    breakpoint: 992,
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
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                    }
                }
                ]
            });
        });
        
        // Video Streaming Tab
        elementorFrontend.hooks.addAction('frontend/element_ready/zockervideostreamingtab.default',function($scope) {
            let $slickcarousels = $scope.find('.vs-carousel');
            $slickcarousels.not('.slick-initialized').slick({
                dots: false,
                infinite: true,
                arrows: false,
                autoplay: true,
                prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-arrow-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next"><i class="fal fa-arrow-right"></i></button>',
                autoplaySpeed: 6000,
                fade: false,
                speed: 1000,
                slidesToShow: 1,
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 1700,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                    }
                },{
                    breakpoint: 992,
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
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                    }
                }
                ]
            });
        });
        
        // google map
        elementorFrontend.hooks.addAction('frontend/element_ready/zockergooglemap.default',function($scope) {
            var $map = $scope.find('[data-trigger="map"]');

            if ($map.length) {


                // Map Initialization
                window.initMap = function () {
                    $map.css('min-height', '500px');

                    var map, lat, lng, zoom;
                    lat = parseFloat($map.data('latitude'), 10);
                    lng = parseFloat($map.data('longitude'), 10);
                    zoom = parseFloat($map.data('zoom'), 10);

                    map = new google.maps.Map($map[0], {
                        center: { lat: lat, lng: lng },
                        zoom: zoom,
                        scrollwheel: false,
                        disableDefaultUI: true,
                        zoomControl: true,
                        styles: [
                            {
                                "featureType": "water",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "color": "#e9e9e9"
                                    },
                                    {
                                        "lightness": 17
                                    }
                                ]
                            },
                            {
                                "featureType": "landscape",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "color": "#f5f5f5"
                                    },
                                    {
                                        "lightness": 20
                                    }
                                ]
                            },
                            {
                                "featureType": "road.highway",
                                "elementType": "geometry.fill",
                                "stylers": [
                                    {
                                        "color": "#ffffff"
                                    },
                                    {
                                        "lightness": 17
                                    }
                                ]
                            },
                            {
                                "featureType": "road.highway",
                                "elementType": "geometry.stroke",
                                "stylers": [
                                    {
                                        "color": "#ffffff"
                                    },
                                    {
                                        "lightness": 29
                                    },
                                    {
                                        "weight": 0.2
                                    }
                                ]
                            },
                            {
                                "featureType": "road.arterial",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "color": "#ffffff"
                                    },
                                    {
                                        "lightness": 18
                                    }
                                ]
                            },
                            {
                                "featureType": "road.local",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "color": "#ffffff"
                                    },
                                    {
                                        "lightness": 16
                                    }
                                ]
                            },
                            {
                                "featureType": "poi",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "color": "#f5f5f5"
                                    },
                                    {
                                        "lightness": 21
                                    }
                                ]
                            },
                            {
                                "featureType": "poi.park",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "color": "#dedede"
                                    },
                                    {
                                        "lightness": 21
                                    }
                                ]
                            },
                            {
                                "elementType": "labels.text.stroke",
                                "stylers": [
                                    {
                                        "visibility": "on"
                                    },
                                    {
                                        "color": "#ffffff"
                                    },
                                    {
                                        "lightness": 16
                                    }
                                ]
                            },
                            {
                                "elementType": "labels.text.fill",
                                "stylers": [
                                    {
                                        "saturation": 36
                                    },
                                    {
                                        "color": "#333333"
                                    },
                                    {
                                        "lightness": 40
                                    }
                                ]
                            },
                            {
                                "elementType": "labels.icon",
                                "stylers": [
                                    {
                                        "visibility": "off"
                                    }
                                ]
                            },
                            {
                                "featureType": "transit",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "color": "#f2f2f2"
                                    },
                                    {
                                        "lightness": 19
                                    }
                                ]
                            },
                            {
                                "featureType": "administrative",
                                "elementType": "geometry.fill",
                                "stylers": [
                                    {
                                        "color": "#fefefe"
                                    },
                                    {
                                        "lightness": 20
                                    }
                                ]
                            },
                            {
                                "featureType": "administrative",
                                "elementType": "geometry.stroke",
                                "stylers": [
                                    {
                                        "color": "#fefefe"
                                    },
                                    {
                                        "lightness": 17
                                    },
                                    {
                                        "weight": 1.2
                                    }
                                ]
                            }
                        ]
                    });

                    map = new google.maps.Marker({
                        position: { lat: lat, lng: lng },
                        map: map,
                        animation: google.maps.Animation.DROP,
                        draggable: false,
                        icon: $map.data('marker')
                    });

                };
                initMap();
            };
        });
        
        // Testimonial Slider
        elementorFrontend.hooks.addAction('frontend/element_ready/zockertestimonialslider.default',function($scope) {
            
            let $slicknext = $scope.find('[data-slick-next]');
            let $slickprev = $scope.find('[data-slick-prev]');
            
            // Function For Custom Arrow Btn 
            $slicknext.each(function () {
               $(this).on('click', function (e) {
                e.preventDefault()
                $($(this).data('slick-next')).slick('slickNext');
              });
            });
            $slickprev.each(function () {
              $(this).on('click', function (e) {
                e.preventDefault()
                $($(this).data('slick-prev')).slick('slickPrev');
              });
            });
            let $testimonialslider = $scope.find('.testimonial-content');
            
            $testimonialslider.not('.slick-initialized').slick({
                dots: false,
                infinite: true,
                arrows: false,
                prevArrow: '<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>',
                autoplay: true,
                autoplaySpeed: 6000,
                speed: 1000,
                fade: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                asNavFor: $testimonialslider.data('asnavfor'),
            });
            
            
            let $avaterslider = $scope.find('.avater-slide1.vs-carousel');
            
            $avaterslider.not('.slick-initialized').slick({
                dots: false,
                infinite: true,
                arrows: false,
                prevArrow: '<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>',
                autoplay: true,
                autoplaySpeed: 6000,
                speed: 1000,
                fade: false,
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding:0,
                asNavFor: $avaterslider.data('asnavfor'),
                focusOnSelect:true,
            });
            
            let $authorslider = $scope.find('.author-name.vs-carousel');
            
            $authorslider.not('.slick-initialized').slick({
                dots: false,
                infinite: true,
                arrows: false,
                prevArrow: '<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>',
                autoplay: true,
                autoplaySpeed: 6000,
                speed: 1000,
                fade: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                asNavFor: $authorslider.data('asnavfor'),
            });
            
            let $secondslider = $scope.find('.testimonial-slider-two.vs-carousel');
            
            $secondslider.not('.slick-initialized').slick({
                dots: false,
                infinite: true,
                arrows: false,
                prevArrow: '<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>',
                autoplay: true,
                autoplaySpeed: 6000,
                speed: 1000,
                fade: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '450px',
                responsive: [{
                    breakpoint: 1700,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '250px',
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '100px',
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                        centerPadding: 0,
                        centerMode: false,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                        centerPadding: 0,
                        centerMode: false,
                    }
                }
                ]
            });
        });
    });
}(jQuery));