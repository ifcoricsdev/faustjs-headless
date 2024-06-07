(function() {

    jQuery('.ibf-testimonials-cards-description').each(function() {

        var slider_id = jQuery(this).attr('data-slider-navigation');

        jQuery(this).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            infinite: true,
            centerMode: false,
            asNavFor: '#' + slider_id
        })
    });

    jQuery('.ibf-testimonials-cards').each(function() {
        var slider_name = jQuery(this).attr('id');
        jQuery( '#' + slider_name ).slick({
            accessibility: true,
            autoplay: false,
            autoplaySpeed: 5000,
            prevArrow: jQuery(this).prev().find('.left-arrow'),
            nextArrow: jQuery(this).prev().find('.right-arrow'),
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            asNavFor: '#' + slider_name + '-description',
            centerPadding: '60px',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        })

        jQuery( '#' + slider_name ).on('click', '.slick-slide', function(a) {
            a.preventDefault();
            var goToSingleSlide = jQuery(this).data('slick-index');
            jQuery( '#' + slider_name + '-description' ).slick('slickGoTo', goToSingleSlide);
        });

     });

})();
