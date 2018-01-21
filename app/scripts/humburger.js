/*
$(document).ready(function() {
  var burger = $('.humburger');
  var burger-active = $('.is-active');

  burger.click(function () {

  })

});

*/


$(document).ready(function() {
  $('.hamburger').click(function () {
    $('.hamburger').toggleClass('is-active');
    $('.hamburger-menu').toggleClass('visible');


  });
});

