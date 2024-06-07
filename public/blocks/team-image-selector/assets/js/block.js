/* Post Thumbnail */
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
    })
  }
  init()
})()
