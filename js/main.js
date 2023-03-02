$('.owl-carousel').owlCarousel({
    loop:false,
    margin: 10,
    // animateOut: 'fadeOut',
    // animateIn: 'fadeIn',

    nav: false,
    dots: false,
    autoplay:false,
    items: 6,
    margin: 30,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})