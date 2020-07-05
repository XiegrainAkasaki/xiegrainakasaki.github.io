$(document).ready(function() {
  $('.hamburger-menu-button').on('click', function() {
    $('.navbar').toggleClass('navbar-active')
  });

  $('.menu-link').on('click', function() {
    $('.navbar').toggleClass('navbar-active')
  })
});
