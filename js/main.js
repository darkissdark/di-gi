$(document).ready(function () {
    const headOwl = $('#head-owl-slider').owlCarousel({
        items: 1,
        loop: true,
        nav: false,
    });
    $('.slider-arr-nav.prev').click(function () {
        headOwl.trigger('prev.owl.carousel');
    });

    $('.slider-arr-nav.next').click(function () {
        headOwl.trigger('next.owl.carousel');
    });
    
    const reviewsCarousel = $('#reviewsCarousel').owlCarousel({
        items: 1,
        loop: true,
        nav: false,
    });
});