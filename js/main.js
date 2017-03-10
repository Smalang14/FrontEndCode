/*!
 * Navigation Scroll 
 *
 */
(function($) {
  "use strict"; // Start of use strict defines that Javascript code should be executed in "strict mode"

  // jQuery for page scrolling feature - requires or will not work jQuery Easing plugin
  $('.page-scroll a').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top - 50) // The offset is the % of the viewport 
    }, 1250, 'easeInOutExpo');
    event.preventDefault();
  });

  // Highlights the top nav bar as scrolling takes place 
  $('body').scrollspy({ //The Scrollspy plugin is used to automatically update links in a navigation list based on scroll position.
    target: '.navbar-fixed-top',
    offset: 51 // The offset is the % of the viewport this will be triggred when 51%
  });

  // Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
  });

  // Offset for Main Navigation
  $('#mainNav').affix({ // # used in the HTML code to link to the nav bar for example #portfolio will go down to the portfolio area
    offset: {
      top: 100
    }
  })



})(jQuery); // End of use strict