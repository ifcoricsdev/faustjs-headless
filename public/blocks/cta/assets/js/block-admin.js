(function() {
  'use strict'

  function init() {
    if (!window.jQuery) {
      setTimeout(init, 100)
      return;
    }

    const $ = jQuery

    $(function() {
      // Gutenberg
    
      const resize = () => {
        $('.acf-block-preview .ibf-cta').each(function() {
          const w = $(this).width()
          if ($(this).hasClass('ibf-cta-fullwidth')) {
            //$(this).removeClass('ibf-cta-fullwidth')
            $(this).height(w * 5/16)
            return;
          }
          //$(this).height($(this).closest('div[data-type="acf/ibfcta"]').outerHeight())
          $(this).height($(this).closest('div.wp-block-columns').height()).css('min-height',
            ($(this).width() * 2/3) + 'px')
        })
      }
      resize()
      setTimeout(resize, 5000)
      setTimeout(resize, 10000)
    })
  }
  init()
})()
