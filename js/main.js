
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin:20,
        nav: true,
        dots:true,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause:true,
        responsive: {
            0:{ items: 1 }, 
            500:{items:2},
            600: { items: 3 },
            1000: { items: 5 }
        }
    });
});

