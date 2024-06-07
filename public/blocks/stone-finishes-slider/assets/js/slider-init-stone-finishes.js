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
