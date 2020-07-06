$(document).ready(function() {
  $('.share').addClass('share-pop');

  $('.hamburger-menu-button').on('click', function() {
    $('.navbar').toggleClass('navbar-active');
  });

  $('.menu-link').on('click', function() {
    $('.navbar').toggleClass('navbar-active');
  });
});
