(function() {
  'use strict'

  function init() {
    if (!window.jQuery) {
      setTimeout(init, 100)
      return
    }
    var $ = jQuery

    $(document).ready(function() {
      $('.tl-slider-cards').each(function() {
        $(this).slick({
          accessibility: true,
          autoplay: false,
          autoplaySpeed: 5000,
          prevArrow: $(this).prev().find('.left-arrow'),
          nextArrow: $(this).prev().find('.right-arrow'),
          dots: false,
          infinite: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 550,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        })
      })
    })
  }
  init()
})()