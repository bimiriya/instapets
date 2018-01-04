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
    $('.pets').css("color", "#FA5858");
});

$('#btn').click(function(){
  var comment = $('#comment').val();
  $('#comment').val("");
  var cont = $('#comment-cont');
  cont.append('<div class="chip comment-bubble"><img src="assets/img/golfo.jpg" alt="Contact Person">' + comment + '</div>')
});

$('#modal2').modal();