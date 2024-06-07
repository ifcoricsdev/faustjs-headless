(function() {
  'use strict'
  function init() {
    if (!window.jQuery) {
      setTimeout(init, 100)
      return;
    }

    const $ = jQuery

    $(function() {


      $(document).on('click', '.acf-block-preview .ibf-post-thumbnail a', function(e) { e.preventDefault() })

      const resize = doAdmin => {

        // 16x9 ratio
        $('.ibf-post-thumbnail a.ibf-post-thumbnail-image-container').each(function() {
          const w = $(this).width();
          $(this).height(w * 9 / 16);
        })
      }

      resize()
      setTimeout(resize, 1000)
      setTimeout(resize, 5000)
      setTimeout(resize, 10000)
      $(window).on('resize', function() {
        resize()
      })
    })
  }
  init()
})()
