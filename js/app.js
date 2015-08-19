$(function() {
  var windowLoc = $(location).attr('pathname');
  
  switch(windowLoc){      
    case '/':
      homeParallax();
      animateScroll();
      console.log("home");
      break;
    default:
      // extInfoLink();
      projectParallax();
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

  function projectParallax() {
    var project = $('.project-container');
    var topPosition = project.offset().top;
    var docWindow = $(window);
    var footer = $('.site-footer');

    footer.hide();

    docWindow.scroll(function () {
      if (docWindow.scrollTop() > (topPosition * 0.7)) {
        footer.show();
      } else if (docWindow.scrollTop() <= (topPosition * 0.7)) {
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


  // Bug: not getting correct height probably because of images not being loaded
  // Redirecting to home page until fixed

  // function extInfoLink() {
  //   var infoLink = $('.info-link');
  //   var bottom = $(document).height();

  //   infoLink.on('click', function(e) {

  //     e.preventDefault();
  //     $('html, body').animate({
  //       scrollTop: bottom
  //     }, 500);
  //   }); 
  // }
});