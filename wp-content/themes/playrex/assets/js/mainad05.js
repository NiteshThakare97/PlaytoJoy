(function ($) {
    ("use strict");
    /*=================================
        JS Index Here
    ==================================*/
    /*
      01. On Load Function
      02. Preloader
      03. Mobile Menu Active
      04. Sticky fix
      05. Scroll To Top
      06. Set Background Image
      07. Hero Slider Active
      08. Popup Sidemenu
      09. Magnific Popup
      11. Filter
      12. Woocommerce Toggle
      13. Slick 3D Slider
      14. Tournament Hover Height Setup
      15. Tournament Slider Area
      16. Tournament Hero Slider
      17. Quantity Added
    */
    /*=================================
        JS Index End
    ==================================*/
    /*
  
    /*---------- 01. On Load Function ----------*/
    $(window).on("load", function () {
        $(".preloader").fadeOut();
        tournamentFixer();
        slickFixer();
    });
    
    function slickFixer() {
        setTimeout(function () {
          $('.slick-slider').not('.slick-3d-active').each(function () {
              $(this).slick('refresh');
          });
      }, 400);
    }
    
    /*---------- 02. Preloader ----------*/
    if ($(".preloader").length > 0) {
        $(".preloaderCls").each(function () {
            $(this).on("click", function (e) {
                e.preventDefault();
                $(".preloader").css("display", "none");
            });
        });
    }
    
    /*---------- 03. Mobile Menu Active ----------*/
    $.fn.vsmobilemenu = function (options) {
        var opt = $.extend(
            {
                menuToggleBtn: ".vs-menu-toggle",
                bodyToggleClass: "vs-body-visible",
                subMenuClass: "vs-submenu",
                subMenuParent: "vs-item-has-children",
                subMenuParentToggle: "vs-active",
                meanExpandClass: "vs-mean-expand",
                appendElement: '<span class="vs-mean-expand"></span>',
                subMenuToggleClass: "vs-open",
                toggleSpeed: 400,
            },
            options
        );

        return this.each(function () {
            var menu = $(this); // Select menu

            // Menu Show & Hide
            function menuToggle() {
                menu.toggleClass(opt.bodyToggleClass);

                // collapse submenu on menu hide or show
                var subMenu = "." + opt.subMenuClass;
                $(subMenu).each(function () {
                    if ($(this).hasClass(opt.subMenuToggleClass)) {
                        $(this).removeClass(opt.subMenuToggleClass);
                        $(this).css("display", "none");
                        $(this).parent().removeClass(opt.subMenuParentToggle);
                    }
                });
            }

            // Class Set Up for every submenu
            menu.find("li").each(function () {
                var submenu = $(this).find("ul");
                submenu.addClass(opt.subMenuClass);
                submenu.css("display", "none");
                submenu.parent().addClass(opt.subMenuParent);
                submenu.prev("a").append(opt.appendElement);
                submenu.next("a").append(opt.appendElement);
            });

            // Toggle Submenu
            function toggleDropDown($element) {
                if ($($element).next("ul").length > 0) {
                    $($element).parent().toggleClass(opt.subMenuParentToggle);
                    $($element).next("ul").slideToggle(opt.toggleSpeed);
                    $($element).next("ul").toggleClass(opt.subMenuToggleClass);
                } else if ($($element).prev("ul").length > 0) {
                    $($element).parent().toggleClass(opt.subMenuParentToggle);
                    $($element).prev("ul").slideToggle(opt.toggleSpeed);
                    $($element).prev("ul").toggleClass(opt.subMenuToggleClass);
                }
            }

            // Submenu toggle Button
            var expandToggler = "." + opt.meanExpandClass;
            $(expandToggler).each(function () {
                $(this).on("click", function (e) {
                    e.preventDefault();
                    toggleDropDown($(this).parent());
                });
            });

            // Menu Show & Hide On Toggle Btn click
            $(opt.menuToggleBtn).each(function () {
                $(this).on("click", function () {
                    menuToggle();
                });
            });

            // Hide Menu On out side click
            menu.on("click", function (e) {
                e.stopPropagation();
                menuToggle();
            });

            // Stop Hide full menu on menu click
            menu.find("div").on("click", function (e) {
                e.stopPropagation();
            });
        });
    };

    $(".vs-menu-wrapper").vsmobilemenu();

    /*---------- 04. Sticky fix ----------*/
    var lastScrollTop = "";
    var scrollToTopBtn = ".scrollToTop";

    function stickyMenu($targetMenu, $toggleClass, $parentClass) {
        var st = $(window).scrollTop();
        var height = $targetMenu.css("height");
        $targetMenu.parent().css("min-height", height);
        if ($(window).scrollTop() > 800) {
            $targetMenu.parent().addClass($parentClass);

            if (st > lastScrollTop) {
                $targetMenu.removeClass($toggleClass);
            } else {
                $targetMenu.addClass($toggleClass);
            }
        } else {
            $targetMenu.parent().css("min-height", "").removeClass($parentClass);
            $targetMenu.removeClass($toggleClass);
        }
        lastScrollTop = st;
    }
    $(window).on("scroll", function () {
        stickyMenu($(".sticky-active"), "active", "will-sticky");
        if ($(this).scrollTop() > 500) {
            $(scrollToTopBtn).addClass("show");
        } else {
            $(scrollToTopBtn).removeClass("show");
        }
    });

    /*---------- 05. Scroll To Top ----------*/
    $(scrollToTopBtn).each(function () {
        $(this).on("click", function (e) {
            e.preventDefault();
            $("html, body").animate(
                {
                    scrollTop: 0,
                },
                lastScrollTop / 3
            );
            return false;
        });
    });

    /*---------- 06.Set Background Image ----------*/
    if ($("[data-bg-src]").length > 0) {
        $("[data-bg-src]").each(function () {
            var src = $(this).attr("data-bg-src");
            $(this).css("background-image", "url(" + src + ")");
            $(this).removeAttr("data-bg-src").addClass("background-image");
        });
    }

    /*---------- 08. Popup Sidemenu ----------*/
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

    /*----------- 09. Magnific Popup ----------*/
    /* magnificPopup img view */
    $(".popup-image").magnificPopup({
        type: "image",
        gallery: {
            enabled: true,
        },
    });

    /* magnificPopup video view */
    $(".popup-video").magnificPopup({
        type: "iframe",
    });
    
    /*---------- 08. Search Box Popup ----------*/
    function popupSarchBox($searchBox, $searchOpen, $searchCls, $toggleCls) {
        $($searchOpen).on('click', function (e) {
            e.preventDefault();
            $($searchBox).addClass($toggleCls);
        });
        $($searchBox).on('click', function (e) {
            e.stopPropagation();
            $($searchBox).removeClass($toggleCls);
        });
        $($searchBox).find('form').on('click', function (e) {
            e.stopPropagation();
            $($searchBox).addClass($toggleCls);
        });
        $($searchCls).on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            $($searchBox).removeClass($toggleCls);
        });
    };
    popupSarchBox('.popup-search-box', '.searchBoxTggler', '.searchClose', 'show');
    
    /*----------- 11. Filter ----------*/
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


    /*----------- 14. Tournament Hover Height Setup ----------*/
    function tournamentFixer() {
        $(".tournament-style2").each(function () {
            var box = $(this);
            var boxBottomHeight = box.find(".tournament-bottom").height();
            var boxImgHeight = box.find(".tournament-img").height();
            box
                .css({
                    "--toggle-height": boxBottomHeight + "px",
                    "--img-height": boxImgHeight + "px",
                })
                .addClass("toggle-active");
        });
    }

    $('.blog-img-slider').slick({
        dots: false,
        infinite: true,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="far fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="far fa-chevron-right"></i></button>',
        autoplay: true,
        autoplaySpeed: 6000,
        fade: false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    
    $('.product-img-slide').slick({
        dots: true,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 6000,
        fade: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    
    $('.related-product-slider').slick({
        dots: false,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 6000,
        fade: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        },{
            breakpoint: 767,
            settings: {
                slidesToShow: 1
            }
        }]
    });
    
    // add to cart
    $(document).on('click', '.quantity-plus,.quantity-minus', function (e) {
        e.preventDefault();
        // Get current quantity values
        var qty = $(this).closest('.product-quantity').find('.qty');
        var val = parseFloat(qty.val());
        var max = parseFloat(qty.attr('max'));
        var min = parseFloat(qty.attr('min'));
        var step = parseFloat(qty.attr('step'));

        // Change the value if plus or minus
        if ($(this).is('.quantity-plus')) {
            if (max && (max <= val)) {
                qty.val(max);
            } else {
                qty.val(val + step);
            }
        } else {
            if (min && (min >= val)) {
                qty.val(min);
            } else if (val > 0) {
                qty.val(val - step);
            }
        }
        $('.cart_table button[name="update_cart"]').prop('disabled', false);
    });
    
    /*----------- 13. Filter Menu ----------*/
    $('.search-active').imagesLoaded(function() {
        var $filter = '.search-active',
            $filterItem = '.grid-item';

        if ($($filter).length > 0) {
            var $grid = $($filter).isotope({
                itemSelector: $filterItem,
                filter: '*',
                masonry: {
                    // use outer width of grid-sizer for columnWidth
                    columnWidth: $filterItem
                }
            });
        };
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
    
    function popupSarchBox($searchBox, $searchOpen, $searchCls, $toggleCls) {
		$($searchOpen).on('click', function(e) {
			e.preventDefault();
			$($searchBox).addClass($toggleCls);
		});
		$($searchBox).on('click', function(e) {
			e.stopPropagation();
			$($searchBox).removeClass($toggleCls);
		});
		$($searchBox).find('form').on('click', function(e) {
			e.stopPropagation();
			$($searchBox).addClass($toggleCls);
		});
		$($searchCls).on('click', function(e) {
			e.preventDefault();
			e.stopPropagation();
			$($searchBox).removeClass($toggleCls);
		});
	};
	popupSarchBox('.popup-search-box', '.searchBoxTggler', '.searchClose', 'show');

    $.fn.vsslideTab = function(btn) {
		$(this).each(function() {
			var $menu = $(this),
				slider = $menu.data('asnavfor'),
				$btn = $menu.find(btn);
			var i = 0;
			// Change Slide on Btn Click
			$btn.each(function() {
				$(this).attr('data-slide-go-to', i)
				i++
				$(this).on('click', function(e) {
					e.preventDefault();
					var slideno = $(this).data('slide-go-to');
					$(slider).slick('slickGoTo', slideno);
				})
			})
			// Change Btn Active Class On Slide Change
			$(slider).on('afterChange', function(event, slick, currentSlide, nextSlide) {
				$btn.removeClass('active');
				$('[data-slide-go-to=' + currentSlide + ']').addClass('active');
			});
		});
	};

	if ($('.vs-slider-tab').length) {
		$('.vs-slider-tab').vsslideTab('.tab-btn');
	}

    if ($('.title-rotate').length) {
		$('.title-rotate').each(function() {
			var $title = $(this);
			var $letter = $title.text().split('');
			$title.html('')
			for (var i = 0; i < $letter.length; i++) {
				$title.prepend('<span class="letter">' + $letter[i] + '</span>')
			}
		})
	}

})(jQuery);