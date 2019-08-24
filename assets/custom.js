//preloader
$(window).on('load', function () {
   $("#preloader").fadeOut(500);
   $('body').removeClass('preloading')
});

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

var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 300;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 100 - Math.random() * 50;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};



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