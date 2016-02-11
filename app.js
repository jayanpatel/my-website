$(document).ready(function() {
  $('#fullpage').fullpage({
  	// anchors: ['Home', 'About', 'Projects', 'Contact'],
  	// verticalCentered: false,

  	// //Navigation
    navigation: false,
    navigationPosition: 'right',
    slidesNavigation: true,
    slidesNavPosition: 'bottom',

   //  //Scrolling
    css3: true,
    scrollingSpeed: 1200,
    autoScrolling: true,
    scrollBar: true,

   //  //Accessibility
    keyboardScrolling: true,
    animateAnchor: true,

   //  //Design
    controlArrows: true,
    verticalCentered: false,
    resize: true,

   //  //Custom selectors
    sectionSelector: '.section',
    slideSelector: '.slide',

  });


  $('#header').hide();   
  $(window).scroll(function(){
    $('#header').fadeIn(2000);
  })


});