$(document).ready(function() {
    $('.burger-button').click(function() { //-- Toggle burger button
        $(this).text($(this).text() == 'menu' ? 'close' : 'menu');
        $('.navbar').toggleClass('navbar-active');
        $('.background').toggleClass('bg-dim');
    });

    $('.menu-link').click(function() { //-- Collapsed navbar when link clicked
        $('.burger-button').text('menu');
        $('.navbar').removeClass('navbar-active');
        $('.background').removeClass('bg-dim');
    });

    $('.home').click(function() { //-- Home action
        $('.dynamic-content').css({'height' : '0'});
    });
    
    $('.about, .showcase, .contact, .support').click (function() { //-- Menu action
        $('.dynamic-content').css({'height' : '100%'});
    });
    
    $('.about').click(function() {
        $('.dynamic-content').empty();
        $('.dynamic-content').load('about.html');
    });
    
    $('.showcase').click(function() {
        $('.dynamic-content').empty();
        $('.dynamic-content').load('showcase.html');
    });
    
    $('.contact').click(function() {
        $('.dynamic-content').empty();
        $('.dynamic-content').load('contact.html');
    });
      
    $('.support').click(function() {
        $('.dynamic-content').empty();
        $('.dynamic-content').load('support.html');
    });
    


    //-- Media query


    //-- Smartphone
    if ($(window).width() <= 425) {
        $('.share p').click(function() {
            $('.share').toggleClass('share-active');
            $('footer').toggleClass('pushed');
        });
    };
    
    //-- Tablet
    if ($(window).width() >= 426) {
        $(window).on('load', function() { //-- Poped share menu
            $('.share-container').addClass('share-pop');
        });
    };
    
    //-- Laptop
    if ($(window).width() >= 769) {
    };
    
    //-- Desktop
    if ($(window).width() >= 1025) {
    };
});