$(document).ready(function() {
  
  // Media query
  
  // Smartphone
  if ($(window).width() <= 425) {
    $('.share p').click(function() {
      $('.share').toggleClass('share-active');
      $('footer').toggleClass('pushed');
    });
  };
  
  $('.burger-button').click(function() {
    $(this).text($(this).text() == 'menu' ? 'close' : 'menu');
    $('.navbar').toggleClass('navbar-active');
  });

  $('.menu-link').click(function() {
    $('.burger-button').text('menu');
    $('.navbar').removeClass('navbar-active');
    // if ($('.home').click()) {
    //   $('.dynamic-content').css({'height' : '0'});
    // } else if ($('.about').click()) {

    // } else if ($('.showcase').click()) {

    // } else if ($('.contact').click()) {

    // } else if ($('.support').click()) {
      
    // } else {

    // }
  });

  // Tablet
  if ($(window).width() >= 426) {
    $(window).on('load', function() {
      $('.share-container').css({'right' : '-.75rem'});
    });
  };

  // Laptop
  if ($(window).width() >= 769) {
  };

  // Desktop
  if ($(window).width() >= 1025) {
  };
});