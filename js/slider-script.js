$(document).ready(function () {
     $('.benefits-slider').slick({
          arrows: true,
          dots: true,
          slidesToShow: 2,
          speed: 1500,
          autoplay: true,
          autoplaySpeed: 2000,
          draggable: false,
          responsive: [
               {
                    breakpoint: 768,
                    settings: {
                         slidesToShow: 1
                    }
               }
          ]
     });
});