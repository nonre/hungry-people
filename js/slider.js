jQuery(function($) {
      $('.gallery').slick({
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true,
          prevArrow: '<button class="gallery__btn gallery__btn_prev" type="button"><i class="fas fa-chevron-left"></i></button>',
          nextArrow: '<button class="gallery__btn gallery__btn_next" type="button"><i class="fas fa-chevron-right"></i></button>',
          responsive: [
              {
                  breakpoint: 767,
                  settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1,
                  }
              }
          ]
      })

});
