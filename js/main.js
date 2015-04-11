$(document).ready( function () {

//BACKSTRETCH
  $('header').backstretch([
    "img/chicken.jpg",
    "img/breadcheese2.jpg",
    "img/fish.jpg",
    "img/pighead.jpg",
    "img/octopussalad.jpg"
  ], {duration: 3000, fade: 750});

//DRAWER
      $(".drawer").drawer();

//SLOW SCROLL
    $(function() {
        $('nav a').bind('click',function(event){
            var $anchor = $(this);

            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1000);

            event.preventDefault();
        });
    });

});