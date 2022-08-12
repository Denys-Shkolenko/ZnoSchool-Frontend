$(document).ready(function () {
     $('.benefits-slider').slick({
          arrows: true,
          dots: true,
          slidesToShow: 2,
          speed: 1500,
          autoplay: true,
          autoplaySpeed: 2000,
          draggable: false,
          swipe: false,
          responsive: [
               {
                    breakpoint: 992,
                    settings: {
                         slidesToShow: 1
                    }
               }
          ]
     });

     $('.teachers-slider').slick({
          arrows: true,
          dots: true,
          slidesToShow: 3,
          speed: 1500,
          draggable: false,
          swipe: false,
          responsive: [
               {
                    breakpoint: 992,
                    settings: {
                         slidesToShow: 1
                    }
               }
          ]
     });
});