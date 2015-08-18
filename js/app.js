$(function() {
  var windowLoc = $(location).attr('pathname');
  
  switch(windowLoc){      
    case "/":
      homeParallax();
      console.log("home");
      break;
    case "/alert.php":
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
  };

});