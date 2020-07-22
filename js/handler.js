$(document).ready(function() {
  $('.share').addClass('share-pop');

  $('.burger-button').on('click', function() {
    $('.navbar').toggleClass('navbar-active');
  });

  $('.menu-link').on('click', function() {
    $('.navbar').toggleClass('navbar-active');
  });
});
