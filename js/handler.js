$(document).ready(function() {
  $('.burger-button').click(function() { //-- Toggle burger button
    $(this).text($(this).text() == 'menu' ? 'close' : 'menu');
    $('.navbar').toggleClass('navbar-active');
  });

  $('.menu-link').click(function() { //-- Collapsed navbar when link clicked
    $('.burger-button').text('menu');
    $('.navbar').removeClass('navbar-active');
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
    $('.share p').click(function() { //-- Toggle share menu in mobile
      $('.share').toggleClass('share-active');
      $('footer').toggleClass('pushed');
    });

    $('.home').click(function() { //-- Home action
      $('.share, .burger-button, footer').css({'color' : '#FFFFFF'});
    });
  
    $('.about, .showcase, .contact, .support').click (function() { //-- Menu action
      $('.share, .burger-button, footer').css({'color' : '#FFC0CB'});
    });
  };

  //-- Tablet
  if ($(window).width() >= 426) {
    $(window).on('load', function() { //-- Poped share menu
      $('.share-container').css({'right' : '-.75rem'});
    });
  };

  //-- Laptop
  if ($(window).width() >= 769) {
  };

  //-- Desktop
  if ($(window).width() >= 1025) {
  };
});