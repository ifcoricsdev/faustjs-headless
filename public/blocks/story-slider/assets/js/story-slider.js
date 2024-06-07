(function() {
    jQuery(document).ready(function() {
        jQuery('.story-slider').slick({
            accessibility: true,
            autoplay: false,
            adaptiveHeight: true,
            arrows: true,
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: 0,
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 720,
                    settings: {
                        accessibility: true,
                        autoplay: false,
                        adaptiveHeight: true,
                        arrows: true,
                        dots: false,
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        focusOnSelect: true,
                    }
                }
            ],
        })
    })
})()