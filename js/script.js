$('.owl-carousel').owlCarousel({
    loop:true,
    items:1,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    nav:true,
    navText:[
        "<button class='btn btn-prevNext me-2 mt-3'><i class='bi bi-arrow-left'></i></button>",
        "<button class='btn btn-prevNext mx-2 mt-3'><i class='bi bi-arrow-right'></i></button>"
    ]
})