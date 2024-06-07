(function() {
'use strict'

  function init() {
    if(!window.jQuery) {
      setTimeout('init', 100);
      return;
    }

    jQuery(document).ready(function() {
      jQuery('.static-cards-with-slider').each(function () {
        jQuery(this).flickity({
          contain: true,
          groupCells: true,
          draggable: true,
          resize: true,
          pageDots: false,
          responsive: [
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
        });
      });
    })
  }
init();
})();
