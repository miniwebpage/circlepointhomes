$(function() {
  // Owl Carousel
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 3,
    margin: 30,
    loop: true,
    nav: false,
    autoplay:true,
    autoplayTimeout:6000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
            margin: 25,
        },
        1000:{
            items:3,
            margin: 25
        }
    }
  });
});