$(document).ready(function() {
    $('.burger-button').click(function() { //-- Toggle burger button
        $(this).text($(this).text() == 'menu' ? 'close' : 'menu');
        $('.navbar').toggleClass('navbar-active');
        $('.background').toggleClass('bg-dim');
    });
    
    $('.menu-link').click(function() {
        $('.burger-button').text('menu');
        $('.navbar').removeClass('navbar-active');
        $('.background').removeClass('bg-dim');
    });

      
    // Media Query


    // Smartphone
    if ($(window).width() <= 425) {
        $('.share p').click(function() { // Share menu toggle
            $('.share').toggleClass('share-active');
            $('footer').toggleClass('pushed');
        });
    };


    // Tablet
    if ($(window).width() >= 426) {
        $(window).on('load', function() { // Share menu poped
            $('.share-container').toggleClass('share-poped');
        });
    };


    // Laptop
    if ($(window).width() >= 769) {
    };


    // Desktop
    if ($(window).width() >= 1025) {
    };
});