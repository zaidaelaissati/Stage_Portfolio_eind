/*  ---------------------------------------------------
    Template Name: Dreams
    Description: Dreams wedding template
    Author: Colorib
    Author URI: https://colorlib.com/
    Version: 1.0
    Created: Colorib
---------------------------------------------------------  */

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");

        /*------------------
            Portfolio filter
        --------------------*/
        $('.portfolio__filter li').on('click', function () {
            $('.portfolio__filter li').removeClass('active');
            $(this).addClass('active');
        });
        if ($('.portfolio__gallery').length > 0) {
            var containerEl = document.querySelector('.portfolio__gallery');
            var mixer = mixitup(containerEl);
        }

        /*------------------
            Blog Post filter
        --------------------*/
        $('.blog__filter .filter-btn').on('click', function () {
            // Remove active class from all filter buttons
            $('.blog__filter .filter-btn').removeClass('active');
            // Add active class to clicked button
            $(this).addClass('active');
            
            // Get the filter value
            var filterValue = $(this).data('filter');
            
            // Filter the blog posts - use CSS display property
            $('.blog__post').each(function () {
                var postTags = $(this).data('tags');
                
                if (filterValue === 'all') {
                    // Show all posts
                    $(this).css('display', 'block');
                } else if (postTags && postTags.indexOf(filterValue) !== -1) {
                    // Show post if it has the selected tag
                    $(this).css('display', 'block');
                } else {
                    // Hide post
                    $(this).css('display', 'none');
                }
            });
            
            // Reinitialize carousel after filtering
            if ($('.blog__slider').length > 0) {
                $('.blog__slider').owlCarousel('destroy');
                $('.blog__slider').owlCarousel({
                    loop: true,
                    margin: 30,
                    items: 1,
                    dots: true,
                    dotsEach: 1,
                    smartSpeed: 1200,
                    autoHeight: true,
                    autoplay: false,
                    nav: true,
                    navText: ['<span class="arrow_left"></span>', '<span class="arrow_right"></span>'],
                    responsive: {
                        992: { items: 1 },
                        768: { items: 1 },
                        320: { items: 1 }
                    }
                });
            }
        });
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    //Masonary
    $('.work__gallery').masonry({
        itemSelector: '.work__item',
        columnWidth: '.grid-sizer',
        gutter: 10
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------
		Hero Slider
	--------------------*/
    $('.hero__slider').owlCarousel({
        loop: true,
        dots: true,
        mouseDrag: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        margin: 0,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
    });

    var dot = $('.hero__slider .owl-dot');
    dot.each(function () {
        var index = $(this).index() + 1;
        if (index < 10) {
            $(this).html('0').append(index);
        } else {
            $(this).html(index);
        }
    });

    /*------------------
        Testimonial Slider
    --------------------*/
    $(".testimonial__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        dots: true,
        dotsEach: 2,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            992: {
                items: 3
            },
            768: {
                items: 2
            },
            320: {
                items: 1
            }
        }
    });

        /*------------------
        Latest Slider
    --------------------*/
    $(".latest__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        dots: true,
        dotsEach: 2,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            992: {
                items: 3
            },
            768: {
                items: 2
            },
            320: {
                items: 1
            }
        }
    });

    /*------------------
        Blog Slider
    --------------------*/
    $(".blog__slider").owlCarousel({
        loop: true,
        margin: 30,
        items: 1,
        dots: true,
        dotsEach: 1,
        smartSpeed: 1200,
        autoHeight: true,
        autoplay: false,
        nav: true,
        navText: ['<span class="arrow_left"></span>', '<span class="arrow_right"></span>'],
        responsive: {
            992: {
                items: 1
            },
            768: {
                items: 1
            },
            320: {
                items: 1
            }
        }
    });

    /*------------------
        Logo Slider
    --------------------*/
    $(".logo__carousel").owlCarousel({
        loop: true,
        margin: 100,
        items: 6,
        dots: false,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            992: {
                items: 5
            },
            768: {
                items: 4
            },
            480: {
                items: 3
            },
            320: {
                items: 2
            }
        }
    });

    /*------------------
        Video Popup
    --------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

    /*------------------
        Counter
    --------------------*/
    $('.counter_num').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

})(jQuery);