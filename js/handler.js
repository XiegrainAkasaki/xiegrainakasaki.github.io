$(document).ready(function() {
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
            $('.share').toggleClass('share-poped');
        });
    };


    // Laptop
    if ($(window).width() >= 769) {
    };


    // Desktop
    if ($(window).width() >= 1025) {
    };
});