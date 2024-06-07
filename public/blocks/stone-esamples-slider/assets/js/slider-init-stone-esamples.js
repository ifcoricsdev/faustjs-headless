(function() {
  'use strict'

  function init() {
    if(!window.jQuery) {
      setTimeout('init', 100);
      return;
    }

    var $ = jQuery

    $(document).ready(function() {
      let slider = $('.esamples-top-slider-container').flickity({
        contain: true,
        groupCells: false,
        draggable: true,
        resize: true,
        pageDots: false,
        initialIndex: 3,
        accessibility: true,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 5,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
            }
          }
        ]
      })

      let flkty = slider.data('flickity')

      const elem_stone_finish_image = document.querySelector('.stone-finish-image')
      const elem_stone_post_title = document.querySelector('.stone-title')
      const elem_stone_finish_title = document.querySelector('.stone-finish-title')
      const elem_stone_finish_image_container = document.querySelector('.stone-finish-image-container')
      const elem_stone_lightbeans = document.querySelector('.stone-lightbeans')
      const elem_stone_detail_text = document.querySelector('.stone-detail-text')
      const elem_stone_button = document.querySelector('.stone-details-button')

      console.log(elem_stone_finish_image)

      slider.on('staticClick.flickity', function( event, pointer, cellElem, cellIndex ) {
        /*
        console.log('clicked on slider, cellIndex = ' + cellIndex)
        console.log(event)
        console.log('cellElem = ')
        console.log(cellElem)
        */
        if ( cellIndex !== undefined ) {
          slider.flickity( 'select', cellIndex );
        }
      })

      slider.on('select.flickity', function(event, index) {
        let slide = flkty.selectedElement
        let data_to_send = slide.dataset.stone.toString()
        console.log('logging data to send:' + data_to_send)

        const ajaxData = {
          'action': 'load_stone_lightbeans',
          'stone_id': data_to_send,
        }
        const lightbeans_string = "3d_lightbeans_id"
        let stone_lightbeans = ''
        let finish_img_url = ''
        let finish_label = ''


        // console.log(esamples_ajax_obj)
        if(esamples_ajax_obj.ajax_url) {
          $.get(esamples_ajax_obj.ajax_url, ajaxData, function(data) {
            console.log(data)
            for (let lb in data.finishes) {
              console.log('LOGGING LB')
              console.log(data.finishes[lb])
              if(data.finishes[lb][lightbeans_string]) {
                stone_lightbeans = data.finishes[lb][lightbeans_string]
                finish_img_url = data.finishes[lb].photo_hires.sizes.medium
                finish_label = data.finishes[lb].finish_selection.label
                break;
              }
            }

            console.log(finish_img_url)

            elem_stone_lightbeans.innerHTML = '<iframe width="100%" height="550" class="lightbeans-esample" src="https://v-api.lightbeans.com/organizations/polycor/products/' + stone_lightbeans + '?showFullscreenButton=true"></iframe>'
            elem_stone_finish_image.innerHTML = '<img src="' + finish_img_url + '">'
            elem_stone_finish_title.innerText = finish_label
            elem_stone_post_title.innerText = data.post_title
            elem_stone_button.setAttribute('href', data.guid)
            elem_stone_detail_text.innerHTML = data.stone_blurb
            elem_stone_finish_image_container.setAttribute('href', data.guid)
          }, "json")

        }
      })
    })
  }
  init()
})()
