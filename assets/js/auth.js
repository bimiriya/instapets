var config = {
    apiKey: "AIzaSyBULmuoRTSxOzTk453bgI6gkhr3H6BZzto",
    authDomain: "instapet-dd1be.firebaseapp.com",
    databaseURL: "https://instapet-dd1be.firebaseio.com",
    projectId: "instapet-dd1be",
    storageBucket: "instapet-dd1be.appspot.com",
    messagingSenderId: "395076515506"
  };
  firebase.initializeApp(config);

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log(user)
    } else {
        $(location).attr("href","index.html")
    }
  });

  $("#logout").click(function() {
    firebase.auth().signOut();
})

$('.pets').click(function(){
    $(this).css("color", "#FA5858");
});

$('#btn').click(function(){
  var comment = $('#comment').val();
  $('#comment').val("");
  var cont = $('#comment-cont');
  cont.append('<div class="chip comment-bubble"><img src="assets/img/golfo.jpg" alt="Contact Person">' + comment + '</div>')
});

$('#modal2').modal();

$('#agree').click(function(){
 var source = $('#photo-source').val();
 alert(source);
 $('#photo-source').val("");
 var caption = $('#textarea1').val();
 $('#textarea1').val("");
 $('#new-post').prepend('<div class="container"><div class="row valign-wrapper"><div class="col s1 m1 l1"><img src="assets/img/logo.png" alt="user-photo" class="user-photo responsive-img circle"></div><div class="col s11 m11 l11"><p><strong>USER-NAME</strong></p></div></div><div class="row"><div class="col s12 m12 l12"><div class="card"><div class="card-image"><img src="" id="photo-new"><a class="btn-floating halfway-fab waves-effect waves-light"><i class="material-icons pets">pets</i></a></div><div class="card-content photo-comment"><p>' 
  + caption + '</p></div></div></div></div></div><div class="comments"><div class="container"><div id="comment-cont2"></div><ul class="collection"><li class="collection-item avatar"><img src="assets/img/golfo.jpg" alt="" class="circle"><textarea class="txt" id="comment2" placeholder="Añade un comentario..."></textarea><a class="waves-effect waves-teal btn" id="btn2">Submit</a></li></ul></div></div>')
  $('#photo-new').attr("src", source);
  $('.pets').click(function(){
    $(this).css("color", "#FA5858");
  });
  $('#btn2').click(function(){
  var comm = $('#comment2').val();
  $('#comment2').val("");
  var contMessage = $('#comment-cont2');
  contMessage.append('<div class="chip comment-bubble"><img src="assets/img/golfo.jpg" alt="Contact Person">' + comm + '</div>')
  });
});

        
            
            
          
                
        
