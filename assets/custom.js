//preloader
//$(window).on('load', function () {
 //  $("#preloader").fadeOut(500);
  // $('body').removeClass('preloading')
//});

//smooth scroll 
$("#navbar nav a[href^='#'],.slide-nav a[href^='#'],.scroll[href^='#']").on('click', function(e) {
 e.preventDefault();
 var hash = this.hash;
 $('html, body').animate({
     scrollTop: $(hash).offset().top
   }, 300, function(){
     window.location.hash = hash;
   });
});




// mobile menu
$(".navbar-toggler").click(function() {
  // toggle the class after half second
  setTimeout(function() {
    $(".navbar-toggler").toggleClass("collapsed");
  }, 200);
});

// Stop carousel
$('.carousel').carousel({
  interval: false
});

//back button in portfolio
var count = 1; 
$("nav a").click(function(){ 
  count++;
});

// script to pause video in modal after close
$('#youtube-immersive-insights').on('hidden.bs.modal', function () {
 jQuery("#youtube-immersive-insights iframe").attr("src", jQuery("#youtube-immersive-insights iframe").attr("src"));
});