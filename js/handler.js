$(document).ready(function() {
    $('.burger-button').click(function() { //-- Toggle burger button
        $(this).text($(this).text() == 'menu' ? 'close' : 'menu');
        $('.navbar').toggleClass('navbar-active');
        $('.background').toggleClass('bg-dim');
    });

    
    $('.menu-link').click(function() { //-- Collapsible navbar + background dim
        $('.burger-button').text('menu');
        $('.navbar').removeClass('navbar-active');
        $('.background').removeClass('bg-dim');
    });


    $('.home').click(function() { //-- Home action
        $('.dynamic-content').css('height', '0');
        $('.title').css('transform', 'scale(1) translate(-50%, -50%)');
    });
    $('.about, .showcase, .contact, .support').click(function() { //-- Main menu action
        $('.dynamic-content').css('height', '100%');
        $('.title').css('transform', 'scale(0) translate(-50%, -50%)');
    });
    
    
    //-- Dynamic content
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
      
    // Media Query


    // Smartphone
    if ($(window).width() <= 425) {
        $('.share p').click(function() { //-- Share menu toggle
            $('.share').toggleClass('share-active');
            $('footer').toggleClass('pushed');
        });


        $('.home').click(function() { //-- Home action
            $('footer, .share-container').css('color', '#FFFFFF');
        });
        $('.about, .showcase, .contact, .support').click(function() { //-- Main menu action
            $('footer, .share-container').css('color', '#000000');
        });
    };
    
    
    // Tablet
    if ($(window).width() >= 426) {
        $(window).on('load', function() { //-- Share menu poped
            $('.share-container').toggleClass('share-poped');
        });

        $('.home').click(function() { //-- Home action
            $('footer').css('color', '#FFFFFF');
        });
        $('.about, .showcase, .contact, .support').click(function() { //-- Main menu action
            $('footer').css('color', '#000000');
        });
    };
    
    
    // Laptop
    if ($(window).width() >= 769) {
    };


    // Desktop
    if ($(window).width() >= 1025) {
    };
});