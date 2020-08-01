$(document).ready(function() {
  $('.share').delay(500).addClass('share-pop');

  $('.burger-button').on('click', function() {
    $('.navbar').toggleClass('navbar-active');
  });

  $('.menu-link').on('click', function() {
    $('.navbar').removeClass('navbar-active');
  });

  $('.about, .showcase, .contact, .support').click(function() {
    $('.title').css({'transform' : 'scale(' + 0 + ')'});
    $('.dynamic-content').animate({height: '100%'});
  });

  $('.home').click(function() {
    $('.dynamic-content').animate({height: '0'});
    $('.title').css({'transform' : 'scale(' + 1 + ')'});
  });
});

$('.about, .showcase, .contact, .support').on('click', function() {
  $('.title').removeClass('title-active').delay(500).queue(function() {
    $('.dynamic-content').addClass('content-active').dequeue();
  });
});

$('.home').on('click', function() {
  $('.dynamic-content').removeClass('content-active').delay(500).queue(function() {
    $('.title').addClass('title-active').dequeue();
  });
});
