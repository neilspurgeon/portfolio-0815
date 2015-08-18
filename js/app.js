$(function() {
  var work = $('.work');
  var topContainer = $('.main-content');
  var topPosition = work.offset().top;
  var docWindow = $(window);
  var landing = $('.landing');
  var footer = $('.site-footer');

  function topOfView() {
    docWindow.scroll(function () {
      if (docWindow.scrollTop() > topPosition) {
        landing.hide(); 
        footer.show();
      } else if (docWindow.scrollTop() <= topPosition) {
        landing.show(); 
        footer.hide();
      }
    });
  }

  topOfView();

});