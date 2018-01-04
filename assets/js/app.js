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
    var cont = $('#comment-cont');
    cont.append('<div class="chip comment-bubble"><img src="assets/img/golfo.jpg" alt="Contact Person">' + comment + '</div>')
  });

  $('#modal2').modal();
});

  