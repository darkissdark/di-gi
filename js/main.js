$(document).ready(function () {
    var owl = $('.owl-carousel').owlCarousel({
        items: 1    ,
        loop: true,
        nav: false,
    });
    $('.slider-arr-nav.prev').click(function () {
        owl.trigger('prev.owl.carousel');
    });

    $('.slider-arr-nav.next').click(function () {
        owl.trigger('next.owl.carousel');
    });
});