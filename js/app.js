$(function() {
  var windowLoc = $(location).attr('pathname');
  
  switch(windowLoc){      
    case '/':
      homeParallax();
      animateScroll();
      console.log("home");
      break;
    case 'something':
      break;
  }

  function homeParallax() {
    var work = $('.work');
    var topContainer = $('.main-content');
    var topPosition = work.offset().top;
    var docWindow = $(window);
    var landing = $('.landing');
    var footer = $('.site-footer');

    footer.hide();

    docWindow.scroll(function () {
      if (docWindow.scrollTop() > (topPosition * 0.7)) {
        landing.hide(); 
        footer.show();
      } else if (docWindow.scrollTop() <= (topPosition * 0.7)) {
        landing.show(); 
        footer.hide();
      }
    });
  }

  function animateScroll() {
    var docWindow = $(window);
    var workLink = $('.work-link');
    var infoLink = $('.info-link');
    var workTop = $('.work').offset().top;
    var bottom = $(document).height();

    workLink.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: workTop
      }, 500);
    }); 

    infoLink.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: bottom
      }, 500);
    }); 
  }
});