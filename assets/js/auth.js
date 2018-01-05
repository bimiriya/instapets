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

  $(".logout").click(function() {
    firebase.auth().signOut();
})

$('.pets').click(function(){
    $(this).css("color", "#FA5858");
});

$('#btn').click(function(){
  var comment = $('#comment').val();
  if (comment !== '') {
  $('#comment').val("");
  var cont = $('#comment-cont');
  cont.append('<div class="chip comment-bubble"><img src="assets/img/golfo.jpg" alt="Contact Person">' + comment + '</div>')
  } else {
    $('#btn').attr('disable', 'disable');
  }
});

$('#modal2').modal();
 
  //check if browser supports file api and filereader features
if (window.File && window.FileReader && window.FileList && window.Blob) {
	
   //this is not completely neccesary, just a nice function I found to make the file size format friendlier
	//http://stackoverflow.com/questions/10420352/converting-file-size-in-bytes-to-human-readable
	function humanFileSize(bytes, si) {
	    var thresh = si ? 1000 : 1024;
	    if(bytes < thresh) return bytes + ' B';
	    var units = si ? ['kB','MB','GB','TB','PB','EB','ZB','YB'] : ['KiB','MiB','GiB','TiB','PiB','EiB','ZiB','YiB'];
	    var u = -1;
	    do {
	        bytes /= thresh;
	        ++u;
	    } while(bytes >= thresh);
	    return bytes.toFixed(1)+' '+units[u];
	}


  //this function is called when the input loads an image
	function renderImage(file){
		var reader = new FileReader();
		reader.onload = function(event){
			the_url = event.target.result
      //of course using a template library like handlebars.js is a better solution than just inserting a string
           
            //$('#photo-source').val("");
 var caption = $('#textarea1').val();
 $('#textarea1').val("");
 $('#new-post').prepend('<div class="container"><div class="row valign-wrapper"><div class="col s1 m1 l1"><img src="assets/img/logo.png" alt="user-photo" class="user-photo responsive-img circle"></div><div class="col s11 m11 l11"><p><strong>USER-NAME</strong></p></div></div><div class="row"><div class="col s12 m12 l12"><div class="card"><div id="funciona" class="card-image"><img src="'+ the_url +'" id="photo-new"><a class="btn-floating halfway-fab waves-effect waves-light"><i class="material-icons pets">pets</i></a></div><div class="card-content photo-comment"><p>' 
  + caption + '</p></div></div></div></div></div><div class="comments"><div class="container"><div id="comment-cont2"></div><ul class="collection"><li class="collection-item avatar"><img src="assets/img/golfo.jpg" alt="" class="circle"><textarea class="txt" id="comment2" placeholder="Añade un comentario..."></textarea><a class="waves-effect waves-teal btn" id="btn2">Submit</a></li></ul></div></div>');
  $('.pets').click(function(){
    $(this).css("color", "#FA5858");
  });
  $('#btn2').click(function(){
  var comm = $('#comment2').val();
  if (comm !== '') {
  $('#comment2').val("");
  var contMessage = $('#comment-cont2');
  contMessage.append('<div class="chip comment-bubble"><img src="assets/img/golfo.jpg" alt="Contact Person">' + comm + '</div>')
  } else {
    $('#btn2').attr('disable', 'disable');
  }
  });
}
    
    //when the file is read it triggers the onload event above.
		reader.readAsDataURL(file);
	}

  

  //watch for change on the 
	$( "#photo-source" ).change(function() {
		console.log("photo file has been chosen")
		//grab the first image in the fileList
		//in this example we are only loading one file.
		console.log(this.files[0].size)
		renderImage(this.files[0])

	});
  
} else {

  alert('The File APIs are not fully supported in this browser.');

}
// Initialize collapse button
  $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();
            
            
          
                
        
