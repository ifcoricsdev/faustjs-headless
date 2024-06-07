(function() {
  'use strict'

  function init() {

    var $ = jQuery

    $(document).ready(function() {
      $("ul.accordionjs li:even").addClass('list-item-even')

      $("ul.accordionjs").accordionjs({
        // Allow self close.(data-close-able)
        closeAble   : true,

        // Close other sections.(data-close-other)
        closeOther  : true,

        // Animation Speed.(data-slide-speed)
        slideSpeed  : 150,

        // The section open on first init. A number from 1 to X or false.(data-active-index)
        activeIndex : false,

        // Callback when a section is open
        openSection: function( section ){},

        // Callback before a section is open
        beforeOpenSection: function( section ){},
      })
    })


  }
  init()
})()
