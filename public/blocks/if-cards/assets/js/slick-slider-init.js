(function() {
  'use strict'

  function init() {
    if (!window.jQuery) {
      setTimeout(init, 100)
      return
    }

    var $ = jQuery

    $(document).ready(function() {
     $('.slider-cards').each(function() {
        let $cards_to_show = Number( $(this).attr("num-slider-cards") )

       if ($cards_to_show === 4) {
         $(this).slick({
           accessibility: true,
           autoplay: false,
           autoplaySpeed: 5000,
           prevArrow: $(this).prev().find('.left-arrow'),
           nextArrow: $(this).prev().find('.right-arrow'),
           dots: false,
           infinite: false,
           slidesToShow: $cards_to_show,
           slidesToScroll: 1,
           responsive: [
             {
               breakpoint: 1024,
               settings: {
                 slidesToShow: 3,
                 slidesToScroll: 1
               }
             },
             {
               breakpoint: 800,
               settings: {
                 slidesToShow: 2,
                 slidesToScroll: 1
               }
             },
             {
               breakpoint: 600,
               settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1
               }
             }
           ]
         })
       } else {
         $(this).slick({
           accessibility: true,
           autoplay: false,
           autoplaySpeed: 5000,
           prevArrow: $(this).prev().find('.left-arrow'),
           nextArrow: $(this).prev().find('.right-arrow'),
           dots: false,
           infinite: false,
           slidesToShow: $cards_to_show,
           slidesToScroll: 1,
           responsive: [
             {
               breakpoint: 1024,
               settings: {
                 slidesToShow: 2,
                 slidesToScroll: 1
               }
             },
             {
               breakpoint: 600,
               settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1
               }
             }
           ]
         })
       }
     })
    })
  }
  init()
})()