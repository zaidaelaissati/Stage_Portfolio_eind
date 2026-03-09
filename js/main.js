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
        Typewriter Animation (Letter per letter)
    --------------------*/
    function typeWriter() {
        var textElement = document.querySelector('.hero__text h2');
        if (!textElement) return;
        
        // Get the original text
        var text = textElement.textContent;
        textElement.textContent = '';
        textElement.style.display = 'inline';
        
        var i = 0;
        
        function type() {
            if (i < text.length) {
                textElement.textContent += text.charAt(i);
                i++;
                setTimeout(type, 100);
            }
        }
        
        setTimeout(type, 500);
    }
    
    typeWriter();

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
            
            // Get the filter value directly from the attribute and convert to lowercase
            var filterValue = $(this).attr('data-filter').toLowerCase().trim();
            
            // Get all blog posts
            var $posts = $('.blog__posts .blog__post');
            var visiblePosts = [];
            
            // Filter the blog posts
            $posts.each(function () {
                // Get tags directly from attribute to ensure consistency
                var postTags = $(this).attr('data-tags');
                var $post = $(this);
                
                if (!postTags || postTags === '') {
                    // If no tags, show post only if filter is 'all'
                    if (filterValue === 'all') {
                        $post.removeClass('hidden-post');
                        $post.show();
                        visiblePosts.push(this);
                    } else {
                        $post.addClass('hidden-post');
                        $post.hide();
                    }
                    return;
                }
                
                // Split tags by comma, trim whitespace, and convert to lowercase
                var tagsArray = postTags.split(',').map(function(tag) {
                    return tag.trim().toLowerCase();
                });
                
                if (filterValue === 'all') {
                    // Show all posts
                    $post.removeClass('hidden-post');
                    $post.show();
                    visiblePosts.push(this);
                } else if (tagsArray.indexOf(filterValue) !== -1) {
                    // Show post if it has the selected tag
                    $post.removeClass('hidden-post');
                    $post.show();
                    visiblePosts.push(this);
                } else {
                    // Hide post
                    $post.addClass('hidden-post');
                    $post.hide();
                }
            });
            
            // Just show/hide the posts - no slider re-initialization needed
            // Owl carousel will automatically only show visible elements
            console.log('Filter applied: ' + filterValue + ', Visible posts: ' + visiblePosts.length);
        });
        
        /*------------------
            Blog Slider Initialize on page load
        --------------------*/
        if ($('.blog__slider').length > 0) {
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
        }
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
        Stageopdracht Slider
    --------------------*/
    $(".stageopdracht__slider").owlCarousel({
        loop: true,
        margin: 20,
        items: 1,
        dots: true,
        dotsEach: 1,
        smartSpeed: 1200,
        autoHeight: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
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
        Load More Button - Collapsible Blog Posts
    --------------------*/
    // Wait for DOM to be ready
    $(document).ready(function() {
        const loadMoreBtn = $('#loadMoreBtn');
        const hiddenPosts = $('#hiddenPosts');
        const postsCount = $('#postsCount');
        let isExpanded = false;
        
        // Total posts count
        const totalPosts = 5;
        const initialVisible = 3;
        
        loadMoreBtn.on('click', function() {
            isExpanded = !isExpanded;
            
            if (isExpanded) {
                // Show hidden posts
                hiddenPosts.addClass('visible');
                loadMoreBtn.addClass('expanded');
                loadMoreBtn.find('.btn-text').text('Toon minder');
                postsCount.text('Toon alle ' + totalPosts + ' weekoverzichten');
            } else {
                // Hide posts
                hiddenPosts.removeClass('visible');
                loadMoreBtn.removeClass('expanded');
                loadMoreBtn.find('.btn-text').text('Bekijk meer weekoverzichten');
                postsCount.text('Toon 1-' + initialVisible + ' van ' + totalPosts + ' weekoverzichten');
                
                // Scroll back to the button smoothly
                $('html, body').animate({
                    scrollTop: loadMoreBtn.offset().top - 100
                }, 400);
            }
        });
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