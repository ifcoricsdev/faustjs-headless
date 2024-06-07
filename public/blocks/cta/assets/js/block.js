/* CTA */

(function() {
  'use strict'

  return

  function init() {
    if (!window.jQuery) {
      setTimeout(init, 100)
      return;
    }

    const $ = jQuery

    $(function() {
      return
      const resize = () => {
        // Lame
        $('.ibf-cta').each(function() {

          const w = $(this).width()
          let ratio = 5/16

          if ($(window).width() < 600) {
            ratio = .8
          }

          if ($(this).hasClass('ibf-cta-fullwidth')) {
            $(this).height(w * ratio)
            return;
          }

          if ($(window).width() < 600) {
            $(this).height(w * ratio)
            return
          }

          const $closest = $(this).closest('.wp-block-columns')
          if ($closest.length) {
            if ($closest.find('.ibf-video-thumbnail-container').length) { 
              $(this).height($closest.find('.ibf-video-thumbnail-container').outerHeight())
              return
            }
          }
          $(this).height(w * 2/3)
        })

      }
      resize()
      $(window).on('resize', resize);
      $(document).on('ibf-video-resized', resize)
        /*
      let h = 0
      const resizeOverlay = () => {
        h = 0
        $('.wp-block-columns .wp-block-column .ibf-cta-content-container').each(function() {
          h = Math.max($(this).height(), h)
          console.log(h)
        })
        $('.wp-block-columns .wp-block-column .ibf-cta-content-container').each(function() {
          if ($(this).closest('.wp-block-columns').css('display') == 'block') {
            $(this).css('height', 'inherit')
            return
          }
          $(this).height(h)
        })
      }
      resizeOverlay()
      $(window).on('resize', function() {
        $
        resizeOverlay()
      })
      */
    })
  }
  init()
})()
