/* All Blocks */
(function() {
  'use strict';

  function init() {
    if (!window.jQuery) {
      setTimeout(init, 100);
      return;
    }

    var $ = jQuery;

    $(function() {
      const evenOutHeights = () => {
        $('.wp-block-columns').each(function() {
          const $labels = $(this).find('.ibf-cta-content-container, .ibf-video-thumbnail-label, .ibf-post-thumbnail-label');
          if (!$labels.length) { return }

          console.log($(this).css('display'))
          if ($(this).css('display') == 'block') {
            $labels.css('height', 'auto')
            return
          }

          let h = 0
          for (let label of $labels) {
            h = Math.max(h, $(label).outerHeight())
          }

          $labels.outerHeight(h)
          return
        })
      }
      evenOutHeights()
      let resizeTimeout;
      $(window).on('resize', function() {
        if (resizeTimeout) {
          clearTimeout(resizeTimeout)
        }
        resizeTimeout = setTimeout(function() {
          evenOutHeights()
        }, 500)
      })
    })
  }
  init()
})();
