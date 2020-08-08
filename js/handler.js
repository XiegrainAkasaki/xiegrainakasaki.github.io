$(document).ready(function() {
  $('.burger-button').click(function() {
    $(this).text($(this).text() == 'menu' ? 'close' : 'menu');
    $('.navbar').toggleClass('navbar-active');
  });

  // Media query

  // Smartphone
  if ($(window).width() <= 425) {
    $('.share p').click(function() {
      $('.share').toggleClass('share-active');
      $('footer').toggleClass('pushed');
    });
  };

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