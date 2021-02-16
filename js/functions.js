jQuery(document).ready(function() {
    "use strict";

        /* Parallax Background */
        /*------------------------------------------------------------------>*/
        if ($(window).width() > 1280) {
                $(".parallax").parallax({
                        speed: 0.50
                });
        }

        /* Header Navigation Bootstrap Fixed */
        /*------------------------------------------------------------------>*/
        $('#navigation').affix({
                offset: {
                        top: $('#navigation').offset().top
                }
        });
        /* Collapse navigation on click on nav anchor*/
       /*------------------------------------------------------------------>*/
       $('.nav a').on('click', function() {
               $('#myNavbar').removeClass('in').addClass('collapse');
       });

        /* Header Navigation Scrolling */
        /*------------------------------------------------------------------>*/
        $('.navbar-nav li a, .navbar-brand').on('click', function(e) {
                e.preventDefault();
                var place = $(this).attr('href');
                var off = $(place).offset().top;
                $('html, body').animate({
                        scrollTop: off
                }, 1200, 'easeInOutCubic');
        });

        /*  Baner Text Rotator*/
        /*------------------------------------------------------------------>*/
        $(".rotate").rotator();

        /* Fun Facts Counter */
        /*------------------------------------------------------------------>*/
        jQuery('.counter').counterUp({
                delay: 10,
                time: 3000
        });

        /* Expertise Progress Bars */
        /*------------------------------------------------------------------>*/
        $(".progress .progress-bar").appear(function () {
                $('.progress .progress-bar').progressbar();
        });

        /*  Our Showcase - Layout Isotope after each image loads  */
        /*------------------------------------------------------------------>*/
        $('.grid').imagesLoaded().progress( function() {
                $('.grid').isotope('layout');
        });

        /*  Our Showcase - Full Width  */
        /*------------------------------------------------------------------>*/
        $('.grid').isotope({
                itemSelector: '.item'
        });

        /*  Our Showcase - Filter Items on anchor click*/
        /*------------------------------------------------------------------>*/
        $('.filters li').on('click', 'a', function(e) {
                e.preventDefault();
                var filterValue = $(this).attr('data-filter');
                $('.grid').isotope({
                        filter: filterValue
                });
        });

        /*  Our Showcase - Toggle Active Class*/
        /*------------------------------------------------------------------>*/
        $('.filters').each(function(i, buttonGroup) {
                var $buttonGroup = $(buttonGroup);
                $buttonGroup.on('click', 'a', function() {
                        $buttonGroup.find('.active').removeClass('active');
                        $(this).addClass('active');
                });
        });
        
        /* Portfolio Gallery Popup */
       /*------------------------------------------------------------------>*/
       $("a[data-rel^=lightcase]").lightcase({showSequenceInfo:false});

        /* Our Team Carousel */
        /*------------------------------------------------------------------>*/
        $(".testimonials-owlCarousel").owlCarousel({
                loop: true,
                margin: 30,
                responsiveClass: true,
                nav: false,
                dots: true,
                responsive: {
                        0: {
                                items: 1
                        },
                        768: {
                                items: 2
                        },
                        1000: {
                                items: 2
                        }
                }
        });

        /* CSS Animation by WOW.JS */
        /*------------------------------------------------------------------>*/
        if ($(window).width() > 1000) {
                new WOW().init();
        }

        /*  Evaluates the Copyright Year */
        /*------------------------------------------------------------------>*/
        var currentYear = (new Date).getFullYear();
        $("#copyright-year").text((new Date).getFullYear());

        /*  Style Switcher */
        /*------------------------------------------------------------------>*/
        $("head").append('<link rel="stylesheet" type="text/css"  id="switch-style">');
                var $switchStyle = $('.switch-style');
                $('.switch-style-toggle').on('click', function(){
                $switchStyle.toggleClass('active');
                });
        $('.color').on('click', function(e) {
                var id = $(this).attr("id");
                $("#switch-style").attr("href", "css/colors/" + id + ".css");
                $('.switch-style').removeClass('active');
                e.preventDefault();
        });

        });

/* Pre-Loader  */
/*------------------------------------------------------------------>*/
jQuery(window).on('load', function() {
        /*  Pre-Loader  */
        /*------------------------------------------------------------------>*/
        $("#preloader").fadeOut(450);
});
