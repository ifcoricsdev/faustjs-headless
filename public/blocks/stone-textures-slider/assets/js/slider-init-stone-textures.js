jQuery(document).ready(function ($) {

  /**
   * Initialize the main slider
   */
  jQuery('.slider-content-block_634db53e0bc72').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    infinite: false,
    centerMode: true,
    asNavFor: '.slider-nav-block_634db53e0bc72',
    prevArrow: jQuery('div.slider-content-wrapper-block_634db53e0bc72').find('.arrows .rsArrowLeft'),
    nextArrow: jQuery('div.slider-content-wrapper-block_634db53e0bc72').find('.arrows .rsArrowRight')
  });


  /**
   * Initialize the thumbnail navigations
   */

  jQuery('.slider-nav-block_634db53e0bc72').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-content-block_634db53e0bc72',
    dots: false,
    focusOnSelect: false,
    infinite: false,
    arrows: false,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          arrows: false,
          centerMode: false
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          arrows: false,
          centerMode: false
        }
      }
    ]
  });

  jQuery('.slider-nav-block_634db53e0bc72').on('click', '.slick-slide', function (a) {
    a.preventDefault();
    console.log('test');
    var goToSingleSlide = jQuery(this).data('slick-index');

    jQuery('.slider-content-block_634db53e0bc72').slick('slickGoTo', goToSingleSlide);
  });

  /*
  * Triggers the Lightbox when clicked on navigation thumbnails
  * */

  jQuery('.slider-nav .slider-nav-sku').click(function (a) {
    a.preventDefault();
    var lightbox_id = jQuery(this).attr('data-id');
    jQuery('#' + lightbox_id).trigger('click');
  });


});

/*
(function() {
  'use strict'

  function init() {
    if(!window.jQuery) {
      setTimeout('init', 100);
      return;
    }

    jQuery(document).ready(function() {
      jQuery('.stone-finishes-slider-container:not(.stones-cards-columns)').each(function () {
        jQuery(this).flickity({
          contain: true,
          groupCells: 5,
          draggable: true,
          resize: true,
          pageDots: false,
          cellAlign: 'left',
          accessibility: false,
          slidesToShow: 5,
          responsive: [
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
              }
            }
          ]
        });
      });
    })
  }
  init();
})();
*/
