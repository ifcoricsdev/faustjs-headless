(function( $ ) {
    var $if_masonry_wrapper = jQuery('div.if-blocks-masonry-gallery-wrapper');

    $if_masonry_wrapper.find('.if-blocks-masonry-gallery-group').each(function() {
        var $this = jQuery(this);
        var $grid = $this.masonry({
            isInitLayout: false,
            resize: true,
            columnWidth: 287,
            gutter: 30,
            itemSelector: ".masonry-item"
        });

        if ( $this.index() == $this.siblings().length-1 ) {
            $grid.on( 'layoutComplete', function( event, items ) {
                $if_masonry_wrapper.flickity({
                    contain: true,
                    groupCells: true,
                    draggable: true,
                    resize: true,
                    pageDots: false,
                });

            });
            /**
             * Optional timeout added just to make sure that elements are wrapped properly
             */
            setTimeout(function (){
                $if_masonry_wrapper.flickity('resize');
                $if_masonry_wrapper.removeClass('flickity-loading');
            }, 1000);
        }
        $grid.masonry();
    });


})( jQuery );