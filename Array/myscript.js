$(document).ready(function(){
    $(function() {
        // Owl Carousel
        var owl = $(".owl-carousel");
        owl.owlCarousel({
            items: 3,
            margin: 20,
            autoplay:true,
            autoplayTimeOUt:2000,
            autoplayHOverPause:true,
            loop: true,
            nav: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 2,
                    nav: false
                },
                1000: {
                    items: 3,
                    nav: false
                },
    
            }
        });
    });
});