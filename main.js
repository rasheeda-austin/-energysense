

var slideIndex = 1;
showSlides (slideIndex);

function moveSlides(n) {
  showSlides(slideIndex += n );
}

function currentSlide(n){
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("swiper-slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) { slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none"; 
}

  // slides[slideIndex-1].style.left = "530px";
  // slides[slideIndex-1].style.display = "block";
  slides[slideIndex-1].animate([
  {transform: 'translateX(-30%)'},
  {transform: 'translateX(530px'}
  ], {
  duration: 3000
  });
}

$(document).ready(function() {

function clsMenu() {
  // x.style.display = "none";
  var element = document.getElementById("menuBtn");
  element.classList.toggle("change");
  $("#mobileNavMenu").toggleClass("mobile-nav-container");

  // $("#menuBtn").toggleClass("change");

}

});

$(document).ready(function(){



  
  var elPosMain = parseFloat($('#whiteDiv').css('left')) / screen.width;
  var elPosPx = $('#whiteDiv').css('left');
  console.log(elPosMain);
  console.log(elPosPx);
    

  $("#clickme").click(function() {
    if (window.matchMedia("min-width: 20rem")) {
      $("#whiteDiv").animate({
        opacity: 0,
        left: "-=55%"
      }, 1300, function(){
      });
      elPosMain = parseFloat($('#whiteDiv').css('left')) / screen.width;
      console.log(elPosMain);
      console.log(elPosPx);

      $("#redDiv").delay(900).animate({
        opacity: 1,
        left: "-=55%"
      }, 1300, function(){
        $("#blueDiv").removeClass("leftDiv");
        $("#blueDiv").addClass("rightDiv");  
        $("#whiteDiv").removeClass("mainDiv");
        $("#whiteDiv").addClass("leftDiv"); 
        $("#redDiv").removeClass("rightDiv");
        $("#redDiv").addClass("mainDiv"); 
      });

      elPosMain = parseFloat($('#redDiv').css('left')) / screen.width;
      console.log(elPosMain);
      console.log(elPosPx);

    } else if (elPosMain == -.3) {

      $("#redDiv").animate({
        opacity: 0,
        left: "-=55%"
      }, 1300, function(){
      });

      $("#blueDiv").delay(900).animate({
        opacity: 1,
        left: "-=55%"
      }, 1300, function(){

        $("#whiteDiv").removeClass("leftDiv");
        $("#whiteDiv").addClass("rightDiv");  
        $("#redDiv").removeClass("mainDiv");
        $("#redDiv").addClass("leftDiv"); 
        $("#blueDiv").removeClass("rightDiv");
        $("#blueDiv").addClass("mainDiv"); 
      });


    } else if (elPosMain == -.3) {

      $("#blueDiv").animate({
        opacity: 0,
        left: "-=55%"
      }, 1300, function(){
      });

      $("#whiteDiv").delay(900).animate({
        opacity: 1,
        left: "-=55%"
      }, 1300, function(){
        $("#redDiv").removeClass("leftDiv");
        $("#redDiv").addClass("rightDiv");  
        $("#blueDiv").removeClass("mainDiv");
        $("#blueDiv").addClass("leftDiv"); 
      });



    }




   
 



 
  });

});

// $(document).ready(function () {
//   $('#btnTop').click(function (event) {
//       event.preventDefault();
//       $('html, body').animate({ scrollTop: 0 }, duration);
//       return false;
//   })
// });


