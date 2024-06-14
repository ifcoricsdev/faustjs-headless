window.addEventListener('DOMContentLoaded', initStaticCardsSlider)
function initStaticCardsSlider() {
  jQuery(document).ready(function() {
    jQuery('.static-cards-with-slider').each(function() {
      jQuery(this).flickity({
        contain: true,
        groupCells: true,
        draggable: true,
        resize: true,
        pageDots: false
      })
    })
  })
}