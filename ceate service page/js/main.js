$("#hero-carosel").owlCarousel({
    dots: false,
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3500,
    autoplayHoverPause: false
});

$("#multi-carosel").owlCarousel({
    dots: false,
    items: 5,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: false,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
});

$('#ofu').owlCarousel({
    items: 5,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: false,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
})
