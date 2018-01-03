$(function(){
   setTimeout(function() {
      $('#splash').fadeOut(500);
   }, 4000);
});

$(document).ready(function(){
  $('.carousel').carousel();

  $('.modal').modal();

  $('.pets').click(function(){
  	$('.pets').css("color", "red");
  });
});
