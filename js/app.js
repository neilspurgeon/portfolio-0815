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
    var docWindow = $(window);
    var windowHieght = docWindow.height();
    var content = $('.main-content');
    var contentBottom = content.height() + content.offset().top - windowHieght;
    var footer = $('.site-footer');
    var landing = $('.landing');

    footer.hide();

    docWindow.scroll(function () {
      if (docWindow.scrollTop() < contentBottom) {
        landing.show(); 
        footer.hide();
      } else if (docWindow.scrollTop() >= contentBottom) {
        landing.hide(); 
        footer.show();
      }
    });
  }

  function projectParallax() {
    var docWindow = $(window);
    var windowHieght = docWindow.height();
    var content = $('.project-container');
    var contentBottom = content.height() + content.offset().top - windowHieght;
    var footer = $('.site-footer');

    footer.hide();

    docWindow.scroll(function () {
      if (docWindow.scrollTop() < contentBottom) {
        footer.hide();
      } else if (docWindow.scrollTop() >= contentBottom) {
        footer.show();
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