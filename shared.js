
var elem = document.getElementById("mobileNavMenu");
var imgLogo = document.getElementById("logoImg");
var isClicked = 0; //current state is up
var windowState = 0;

function toggleMenuBtn(x) {
   
    $(document).ready(function () {
        x.classList.toggle("change");
    //     $("#cnt-grid1").toggleClass("container container-menu");
    //     $("#cardIcon1").toggleClass("card-icon1 card-icon1-mobile");
    //     $("#cardIcon2").toggleClass("card-icon2 card-icon2-mobile");
    //     $("#cardIcon3").toggleClass("card-icon3 card-icon3-mobile");
        // $("#menuBtn").toggle("change");
        $("#mobileNavMenu").toggleClass("mobile-nav-container");
        $("#mobileNavMenu").attr({
            "top": "340px"
        });
    //     $("#sectionImg").toggleClass("section-image section-image-mobile");
    //     $("#sectionCards").toggleClass("section-cards section-cards-mobile");
    //     $("#sectionArticle1").toggleClass("section-article1 section-article1-mobile");
    //     $("#sectionArticle2").toggleClass("section-article1 section-article2-mobile");
    //     $("#sectionArticle3").toggleClass("section-article1 section-article3-mobile");
    //     $("#sectionGurantee").toggleClass("section-gurantee section-gurantee-mobile");
    //     $("#sectionReviews").toggleClass("section-reviews section-reviews-mobile");
    //     $("#footerMain").toggleClass("footer-main footer-main-mobile");
    //     $("#sectionAboutUs").toggleClass("section-aboutUs section-aboutUs-mobile");
    });
}



$(document).ready(function () {
    if (window.innerWidth < 641 && windowState === 1) {
        $("#logoImg").attr({
            "src": "http://airkings-hvac.com/images/logo-banner_300x72.png",
            "width": "300px",
            "height": "72px"
        });
        windowState = 0;
    } else if (window.innerWidth > 640 && windowState === 0) {
        $("#logoImg").attr({
            "src": "http://airkings-hvac.com/images/logo-banner_471x123.png",
            "width": "471px",
            "height": "123px"
        });
        windowState = 1;
    };
});


$(window).resize(function () {
    if (window.innerWidth < 641 && windowState === 1) {
        $("#logoImg").attr({
            "src": "http://airkings-hvac.com/images/logo-banner_300x72.png",
            "width": "300px",
            "height": "72px"
        });
        windowState = 0;
    } else if (window.innerWidth > 640 && windowState === 0) {
        $("#logoImg").attr({
            "src": "http://airkings-hvac.com/images/logo-banner_471x123.png",
            "width": "471px",
            "height": "123px"
        });
        windowState = 1;
    };
}
)

$(document).ready(function () {
    var offset = 250;
    var duration = 300;
    var windowState = 0;
    $(window).scroll(function () {
        if ($(this).scrollTop() > offset) {
            $('#btnTop').fadeIn(duration);
        } else {
            $('#btnTop').fadeOut(duration);
        }

        
        if ($(this).scrollTop() > offset) {
            $('#sbarbtm').fadeIn(duration);
        } else {
            $('#sbarbtm').fadeOut(duration);
        }


    });

    $('#btnTop').click(function (event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, duration);
        return false;
    })

});


function popUpFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

$(document).ready(function () {
    // When the user scrolls the page, execute myFunction
    window.onscroll = function () { myFunction() };

    // Get the navbar
    var navbar = document.getElementById("navbar");
    var mblNavBar = document.getElementById("mobileNavMenu");

    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
        //   if (window.pageYOffset >= sticky) {
        //     navbar.classList.add("sticky")
        //   } else {
        //     navbar.classList.remove("sticky");
        //   }
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            navbar.style.display = "grid"
            // $("#navbar").toggleClass("container-navbar__scroll-sticky container-navbar__scroll-displaySticky");
        } else {
            navbar.style.display = "none"
            if(mblNavBar.style.display == "flex") {
                mblNavBar.style.display = "none"
            }

        }
    }
});

$(document).ready(function () {
    // Add smooth scrolling to all links
  
  
    // if(window.location.hash) 
    //   scroll(0,0);
  
    // //   setTimeout(function(){
    // //     (0,0);
    // //   },1);
  
    //   $(function(){
    //     $('a').on('click',function(e){
    //       e.preventDefault();
    //       $('html,body').animate({
    //         scrollTop:$($(this).attr('href')).offset().top + 'px'
    //       },800,'swing');
    //   });
  
    //   // if(window.location.hash){
    //   //   $('html,body').animate({
    //   //     scrollTop:$(window.location.hash).offset().top + 'px'
    //   //   },800,'swing');
    //   //   }
    //   });
  
  
  
  
  
  
    $("a").on('click', function (event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
        
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function () {
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  
  });