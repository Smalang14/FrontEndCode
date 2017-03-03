/*!
 * Navigation scroll made using tutorial from https://blackrockdigital.github.io/startbootstrap-scrolling-nav/ & https://codeplanet.io/how-to-make-a-single-page-website/
 * 
 */


(function($) {
  "use strict"; // Start of use strict defines that Javascript code should be executed in "strict mode"

  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $('.page-scroll a').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top - 50)
    }, 1250, 'easeInOutExpo');
    event.preventDefault();
  });

  // Highlights the top nav bar as scrolling takes place
  $('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 51
  });

  // Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
  });

  // Offset for Main Navigation
  $('#mainNav').affix({
    offset: {
      top: 100
    }
  })



})(jQuery); // End of use strict