$(document).ready(function(){
  $(function(){
    setTimeout(function() {
       $('#splash').fadeOut(500);
    }, 4000);
 });
 
  $('.carousel').carousel();

  $('.modal').modal();

  
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      $(location).attr("href","inicio.html");
    } else {
      console.log("not logged in")
    }
  });

  $("#login-btn").click(function() {
      var email = $("#login-email").val();
      var pw = $("#login-pw").val();
      if (email != "" && pw != "") {
        var promise = firebase.auth().signInWithEmailAndPassword(email,pw);
        promise.catch(e => alert(e.message))
      }     
  })

  $("#signup-btn").click(function() {
      var email = $("#signup-email").val();
      var pw = $("#signup-pw").val();
      if (email != "" && pw != "") {
      }
      var promise = firebase.auth().createUserWithEmailAndPassword(email,pw);
      promise.catch(e => alert(e.message))
  })
})
