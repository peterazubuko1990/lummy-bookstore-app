'use strict';
(function ($) {
    // ==========================================
    //      Start Document Ready function
    // ==========================================
    $(document).ready(function () {
        // ==================== Header Navbar Collapse JS Start =====================
        function hideNavbarCollapse() {
            new bootstrap.Collapse($('.navbar-collapse')[0]).hide();
            $('.navbar-collapse').trigger('hide.bs.collapse');
        }

        $('.navbar-collapse').on({
            'show.bs.collapse': function () {
                $('body').addClass('scroll-hide');
                $('.body-overlay').addClass('show').on('click', hideNavbarCollapse);
            },
            'hide.bs.collapse': function () {
                $('body').removeClass('scroll-hide');
                $('.body-overlay').removeClass('show').unbind('click', hideNavbarCollapse);
            },
        });
        // ==================== Header Navbar Collapse JS End ======================= 

        //============================ Scroll To Top Icon Js Start =========
        (function () {
            const btn = $('.scroll-top');
            $(window).on('scroll', function () {
                if ($(window).scrollTop() >= 300) {
                    btn.addClass('show');
                } else {
                    btn.removeClass('show');
                }
            });

            btn.on('click', function (e) {
                e.preventDefault();
                $('html, body').animate({ scrollTop: 0 }, '300');
            });

            // header sticky
            var prevScroll = '';
            $(window).on('scroll', function () {
                var scrollTopCount = $(this).scrollTop();
                var mainMenuTop = $('.header-sticky-wrapper ');
                if ($(window).scrollTop() > 300) {
                    if (scrollTopCount > prevScroll) {
                        mainMenuTop.removeClass('fixed-header');

                    } else {
                        mainMenuTop.addClass('fixed-header');
                    }
                } else {
                    mainMenuTop.removeClass('fixed-header');
                }
                prevScroll = scrollTopCount;
            });

        })();

        // ========================== Small Device Header Menu On Click Dropdown menu collapse Stop Js Start =====================
        $('.dropdown-item').on('click', function () {
            $(this).closest('.dropdown-menu').addClass('d-block');
        });
        // ========================== Small Device Header Menu On Click Dropdown menu collapse Stop Js End =====================

        // ========================== Add Attribute For Bg Image Js Start =====================
        $('.bg-img').css('background-image', function () {
            return `url(${$(this).data('background-image')})`;
        });
        // ========================== Add Attribute For Bg Image Js End =====================

        // ========================== add active class to ul>li top Active current page Js Start =====================
        function dynamicActiveMenuClass(selector) {
            if (!($(selector).length)) return;

            let fileName = window.location.pathname.split('/').reverse()[0];
            selector.find('li').each(function () {
                let anchor = $(this).find('a');
                if ($(anchor).attr('href') == fileName) {
                    $(this).addClass('active');
                }
            });
            // if any li has active element add class
            selector.children('li').each(function () {
                if ($(this).find('.active').length) {
                    $(this).addClass('active');
                }
            });
            // if no file name return
            if ('' == fileName) {
                selector.find('li').eq(0).addClass('active');
            }
        }
        dynamicActiveMenuClass($('ul.sidebar-menu-list'));

        // ========================== add active class to ul>li top Active current page Js End =====================

        // ================== Password Show Hide Js Start ==========
        $('.toggle-password').on('click', function () {
            $(this).toggleClass('fa-eye');
            var input = $($(this).attr('id'));
            if (input.attr('type') == 'password') {
                input.attr('type', 'text');
            } else {
                input.attr('type', 'password');
            }
        });
        // =============== Password Show Hide Js End =================

        // ================== Sidebar Menu Js Start ===============
        // Sidebar Dropdown Menu Start
        $('.has-dropdown > a').click(function () {
            $('.sidebar-submenu').slideUp(200);
            if ($(this).parent().hasClass('active')) {
                $('.has-dropdown').removeClass('active');
                $(this).parent().removeClass('active');
            } else {
                $('.has-dropdown').removeClass('active');
                $(this).next('.sidebar-submenu').slideDown(200);
                $(this).parent().addClass('active');
            }
        });
        // Sidebar Dropdown Menu End
        // Sidebar Icon & Overlay js
        $('.dashboard-body__bar').on('click', function () {
            $('.sidebar-menu').addClass('show');
            $('.sidebar-overlay').addClass('show');
            $('body').addClass('scroll-hide-sm');
        });
        $('.sidebar-menu__close, .sidebar-overlay').on('click', function () {
            $('.sidebar-menu').removeClass('show');
            $('.sidebar-overlay').removeClass('show');
            $('body').removeClass('scroll-hide-sm');
        });
        // Sidebar Icon & Overlay js
        // ===================== Sidebar Menu Js End =================

        // ==================== Dashboard User Profile Dropdown Start ==================
        $('.user-info__button').on('click', function () {
            $('.user-info-dropdown').toggleClass('show');
        });
        $('.user-info__button').attr('tabindex', -1).focus();

        $('.user-info__button').on('focusout', function () {
            $('.user-info-dropdown').removeClass('show');
        });
        // ==================== Dashboard User Profile Dropdown End ==================

        //Plugin Customization Start
        // ========================= Select2 Js Start ==============
        (function () {
            $('.select2').each((index, select) => {
                $(select).wrap('<div class="select2-wrapper"></div>').select2({
                    dropdownParent: $(select).closest('.select2-wrapper')
                });
            });
        })();
        // ========================= Select2 Js End ==============

        // ========================= Slick Slider Js Start ==============
        const sliderConfig = {
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 5000,
            speed: 1000,
            dots: false,
            pauseOnHover: true,
            arrows: true,
            prevArrow:
                '<button type="button" class="slick-prev"><i class="fa-solid fa-angle-left"></i></button>',
            nextArrow:
                '<button type="button" class="slick-next"><i class="fa-solid fa-chevron-right"></i></button>',
        };

        $('.category-grid-slider').slick({
            ...sliderConfig,
            slidesToShow: 6,
            responsive: [
                {
                    breakpoint: 1399,
                    settings: {
                        slidesToShow: 4,
                    },
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                    },
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        });


        $('.common-product-slider').slick({
            ...sliderConfig,
            arrows: true,
            variableWidth: true,
        });
        // ========================= Slick Slider Js End ===================

        $('.header-search-btn').on('click', function () {
            $('.search-form__wrapper').toggleClass('show');
        });

        $('.search-close-btn').on('click', function () {
            $('.search-form__wrapper').removeClass('show');
        })

        $('.body-overlay').on('click', function () {
            $('.cart__sidebar').removeClass('show');
            removeOverlay()
        });

        $(document).on('click', '.sidebar-close-btn', function (e) {
            $(this).parents('.cart__sidebar').removeClass('show');
            removeOverlay();
        });

        function removeOverlay() {
            $('.body-overlay').removeClass('show');
            $('body').removeClass('scroll-hide-sm');
        }

        $('.shop-cart').on('click', function (e) {
            e.preventDefault();
            $('.cart__sidebar').addClass('show');
            $('.body-overlay').addClass('show');
            $('body').addClass('scroll-hide-sm');
        });



        // grid control js 
        $(".view-list-style").on("click", (function () {
            $(".view-grid-style").removeClass("active");
            $(this).addClass("active");
            $("#grid-view .grid-control").addClass("list-view-active");
        }));

        $(".view-grid-style").on("click", (function () {
            $(".view-list-style").removeClass("active");
            $(this).addClass("active");
            $("#grid-view .grid-control").removeClass("list-view-active");
        }));

        $(".filter-in").on("click", (function () {
            $(".product-filter").addClass("show");
            $(".body-overlay").addClass("show");
            $('body').addClass('scroll-hide-sm');
        }));
        $(".body-overlay").on("click", (function () {
            $(".shop-cart__sidebar").removeClass("show");
            $(".product-filter").removeClass("show");

        }));
        $(".sidebar-close").on("click", (function (e) {
            e.preventDefault();
            $(".product-filter").removeClass("show");
            $(".body-overlay").removeClass("show");
        }));

        // ========================= Odometer Up Counter Js End =====================
        // Animated Placeholder
        $(".animated-placeholder").each(function () {
            var placeholderText = $(this).attr('placeholder');
            var inputField = $(this);
            var index = 0;

            function typePlaceholder() {
                if (index < placeholderText.length) {
                    inputField.attr("placeholder", placeholderText.substring(0, index + 1));
                    index++;
                    setTimeout(typePlaceholder, 100);
                } else {
                    setTimeout(erasePlaceholder, 1500);
                }
            }

            function erasePlaceholder() {
                if (index > 0) {
                    inputField.attr("placeholder", placeholderText.substring(0, index - 1));
                    index--;
                    setTimeout(erasePlaceholder, 50);
                } else {
                    setTimeout(typePlaceholder, 500);
                }
            }

            typePlaceholder();
        });

        // ========================= Custom Language Dropdown Js Start =====================
        $(document).ready(function () {
            $('.language-dropdown__selected').on('click', function () {
                $(this).parent().toggleClass('open');
            });

            $('.language-dropdown__list-item').on('click', function () {
                let selectedImg = $(this).find('.flag').attr('src');
                let selectedText = $(this).find('.text').text();

                $('.language-dropdown__selected .flag').attr('src', selectedImg);
                $('.language-dropdown__selected .text').text(selectedText);

                $(this).addClass('selected').siblings().removeClass('selected')
                    .closest('.language-dropdown').removeClass('open');
            });

            $(document).on('keyup click', function (evt) {
                if (evt.type === 'keyup' && (evt.keyCode || evt.which) !== 27) return;
                if ($(evt.target).closest('.language-dropdown__selected').length === 0) {
                    $('.language-dropdown').removeClass('open');
                }
            });
        });

        // ========================= Custom Language Dropdown Js End =====================

        $(document).ready(function () {
            // Function to handle category menu toggle
            function toggleCategoryMenu() {
                $(".category-menu-wrap").toggleClass("show");
                $("body").toggleClass("show");
                $(".category-menu-toggle-btn i").toggleClass("fa-chevron-down fa-chevron-up"); // Toggle icons
            }

            // Close category menu when clicking outside
            $(document).on("click", function (event) {
                if (!$(event.target).closest(".category-menu-toggle-btn, .category-menu-wrap").length) {
                    $(".category-menu-wrap").removeClass("show");
                    $("body").removeClass("show");
                    $(".category-menu-toggle-btn i").removeClass("fa-chevron-up").addClass("fa-chevron-down"); // Reset to down arrow
                }
            });

            // Toggle menu on button click
            $(".category-menu-toggle-btn").on("click", function (event) {
                event.stopPropagation();
                toggleCategoryMenu();
            });

            $(document).ready(function () {
                // Toggle category submenu
                $(".category-menu-item.has-submenu > a").on("click", function (e) {
                    e.preventDefault();
                    let parentItem = $(this).parent();
                    let submenu = parentItem.find(".category-menu-item__submenu").first();

                    // Check if submenu is already open
                    if (submenu.is(":visible")) {
                        submenu.slideUp(200, function () {
                            parentItem.removeClass("active"); // Remove active class after animation
                        });
                    } else {
                        // Close all other open submenus first
                        $(".category-menu-item.has-submenu").not(parentItem).removeClass("active")
                            .find(".category-menu-item__submenu").slideUp(200);

                        // Open the clicked submenu
                        parentItem.addClass("active");
                        submenu.slideDown(200);
                    }
                });
            });



        });

        const menu = document.querySelector(".menu-inner");
        const leftBtn = document.getElementById("left-btn");
        const rightBtn = document.getElementById("right-btn");

        let isDragging = false;
        let startX;
        let scrollLeft;

        // Function to check scroll position & show/hide buttons
        function checkScroll() {
            const maxScrollLeft = menu.scrollWidth - menu.clientWidth;

            if (menu.scrollLeft <= 0) {
                leftBtn.style.display = "none"; // Hide left button
            } else {
                leftBtn.style.display = "block"; // Show left button
            }

            if (menu.scrollLeft >= maxScrollLeft - 1) {
                rightBtn.style.display = "none"; // Hide right button
            } else {
                rightBtn.style.display = "block"; // Show right button
            }
        }

        // Scroll buttons functionality
        leftBtn.addEventListener("click", () => {
            menu.scrollBy({ left: -200, behavior: "smooth" });
        });

        rightBtn.addEventListener("click", () => {
            menu.scrollBy({ left: 200, behavior: "smooth" });
        });

        // Drag Scroll Functionality
        menu.addEventListener("mousedown", (e) => {
            isDragging = true;
            startX = e.pageX - menu.offsetLeft;
            scrollLeft = menu.scrollLeft;
            menu.style.cursor = "grabbing";
        });

        menu.addEventListener("mouseleave", () => {
            isDragging = false;
            menu.style.cursor = "grab";
        });

        menu.addEventListener("mouseup", () => {
            isDragging = false;
            menu.style.cursor = "grab";
        });

        menu.addEventListener("mousemove", (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - menu.offsetLeft;
            const walk = (x - startX) * 2; // Speed increase
            menu.scrollLeft = scrollLeft - walk;
        });

        // Listen for scrolling
        menu.addEventListener("scroll", checkScroll);

        // Run on load
        window.addEventListener("load", checkScroll);
        window.addEventListener("resize", checkScroll);


    });


    // ==========================================
    //      End Document Ready function
    // ==========================================

    // =========================  Increament & Decreament Js Start =====================

    $(document).on("click", ".productQtyIncrement", function () {
        const qtyValue = $(this).closest(".product-qty").find(".product-qty__value");
        let oldValue = parseFloat(qtyValue.val()) || 0;
        let newVal = oldValue + 1;
        qtyValue.val(newVal).trigger("change");
    });

    // Event delegation for decrement button
    $(document).on("click", ".productQtyDecrement", function () {
        const qtyValue = $(this).closest(".product-qty").find(".product-qty__value");
        let oldValue = parseFloat(qtyValue.val()) || 0;
        let newVal = oldValue <= 0 ? 0 : oldValue - 1;
        qtyValue.val(newVal).trigger("change");
    });

    // ========================= Increament & Decreament Js End =====================

    //======= form-check js =======
    $('.checkAll').on('click', function () {
        $('.form--check .form-check-input').prop('checked', $(this).prop('checked'));
    });
    //======= form-check js =======

    // ========================= Preloader Js Start =====================
    $(window).on('load', () => $('.preloader').fadeOut());
    // ========================= Preloader Js End=====================

    $('.country-field').on('change', function () {
        const data = $(this).find('option:selected').data('code');
        $('#mobile-code').text('+' + data);
    });
    // search js
    $('.search-btn').on('click', function (e) {
        $('.search-form-overlay').addClass('show');
        $('.search-form').addClass('show');
    });
    // search js
    $('.search-form-overlay').on('click', function (e) {
        $('.search-form-overlay').removeClass('show');
        $('.search-form').removeClass('show');
    });

})(jQuery);








