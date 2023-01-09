$(function (){
    $(document).ready(function(){
        $('.owl-carousel').owlCarousel();
    });


    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:1
            }
        }
    })
})


$('#navToggle').click(function() {
    $(this).toggleClass('active');
});

