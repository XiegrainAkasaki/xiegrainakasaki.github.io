$(document).ready(function() {
  $('.share').addClass('share-pop'); /*-- Poped share menu --*/

  $('.burger-button').on('click', function() { /*-- Expand navbar when button clicked --*/
    $('.navbar').toggleClass('navbar-active');
  });

  $('.menu-link').on('click', function() { /*-- Collapsed navbar when link clicked --*/
    $('.navbar').removeClass('navbar-active');
  });

  $('.home').click(function() { /*-- Home action --*/
    $('.dynamic-content').animate({height: '0'});
    $('.title').css({'transform' : 'scale(' + 1 + ')'});
    $('footer').css({'color' : '#FFFFFF'});
    if ($(document).width() <= 768) {
      $('.share').css({'color' : '#FFFFFF'});
    };
  });

  $('.about, .showcase, .contact, .support').click(function() { /*-- Content action --*/
    $('.title').css({'transform' : 'scale(' + 0 + ')'});
    $('.dynamic-content').animate({height: '100%'});
    $('footer').css({'color' : '#000000'});
    if ($(document).width() <= 768) {
      $('.share').css({'color' : '#000000'});
    };
  });

  $(document).on('click', '.about', function() {
    $('.dynamic-content').empty();
    $('.dynamic-content').load('about.html');
  });

  $(document).on('click', '.showcase', function() {
    $('.dynamic-content').empty();
    $('.dynamic-content').load('showcase.html');
  });

  $(document).on('click', '.contact', function() {
    $('.dynamic-content').empty();
    $('.dynamic-content').load('contact.html');
  });

  $(document).on('click', '.support', function() {
    $('.dynamic-content').empty();
    $('.dynamic-content').load('support.html');
  });
});


/*-- Repo --*/
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
