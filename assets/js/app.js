$(function(){
   setTimeout(function() {
      $('#splash').fadeOut(500);
   }, 4000);
});

$(document).ready(function(){
  $('.carousel').carousel();

  $('.modal').modal();

  $('.pets').click(function(){
  	$('.pets').css("color", "#FA5858");
  });

  $('#btn').click(function(){
    var comment = $('#comment').val();
    $('#comment').val("");
    var cont = $('#cont');
    cont.append('<div><p>' + comment + '</p></div>');
  });
});
