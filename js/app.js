//this function hide the splash and reapper again the image in a soft fade in 
$(function(){
  $("#copy").hide();
  $(".splash").hide();
  $(".splash").fadeIn(2000)
  
  });
//this function take the time the image is showing and fade it out , then makes appear the intro
 $(function(){
     setTimeout(function() {
       $(".splash").fadeOut(2000, function() {
       $("#copy").show();
    });
   }, 3000);
  });


//Filter
$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".myList li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});


//materialize nav bar
$(document).ready(function(){
  $('.sidenav').sidenav();
});
      
//materialize function for modals
  $(document).ready(function(){
    $('.modal').modal();
    
  });
  
