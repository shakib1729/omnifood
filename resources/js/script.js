$(document).ready(() => {

  // For Sticky Navigation
    $('.js--section-features').waypoint((direction) => {
    	if(direction == "down"){
           $('nav').addClass('sticky');
    	} else{
           $('nav').removeClass('sticky');
    	}
    }, {
    	offset: '60px'  // it will happen 60px before we hit the section that we defined
    });

    //Scroll On button

       $('.js--scroll-to-plan').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000); 
    });

        $('.js--scroll-to-start').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000); 
    });

    ///////////////////Navigation scroll/////////////////////

        // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

    ///////////////////Animations on Scroll/////////////////////

    $('.js--wp-1').waypoint(direction => {
    	$('.js--wp-1').addClass('animated fadeIn');
    },{
    	offset: '50%'
    });

    $('.js--wp-2').waypoint(direction => {
    	$('.js--wp-2').addClass('animated fadeInUp');
    },{
    	offset: '50%'
    });

      $('.js--wp-3').waypoint(direction => {
    	$('.js--wp-3').addClass('animated fadeIn');
    },{
    	offset: '50%'
    });

     $('.js--wp-4').waypoint(direction => {
    	$('.js--wp-4').addClass('animated pulse');
    },{
    	offset: '50%'
    });

      $('.js--wp-5').waypoint(direction => {
      $('.js--wp-5').addClass('animated fadeInLeft');
    },{
      offset: '50%'
    });

       $('.js--wp-6').waypoint(direction => {
      $('.js--wp-6').addClass('animated fadeInUp');
    },{
      offset: '50%'
    });

     // Mobile Navigation
     $('.js--nav-icon').click(()=>{    // when we click on '.js--nav-icon' then add open and close effect on '.js--main-nav'
     	const nav = $('.js--main-nav');
     	const icon = $('.js--nav-icon i');
     	nav.slideToggle(200);

       icon.hasClass('ion-navicon-round') ? (
    	icon.addClass('ion-close-round'),
    	icon.removeClass('ion-navicon-round') )
      : (
     	icon.addClass('ion-navicon-round'),
    	icon.removeClass('ion-close-round'))
     ;

     });

     // Maps
 const map = new GMaps({
  div: '.map',
  lat: 28.6334119,
  lng: 77.206713,
  zoom: 16
});

  map.addMarker({
  lat: 28.6337695,
  lng: 77.2031403,
  title: 'Gole Market',
  infoWindow: {
  content: '<p>Our Delhi HQ</p>'
    }
});

});