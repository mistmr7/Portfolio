(function($){
  $(function(){
    $(".dropdown-trigger").dropdown();
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 500);
          return false;
        }
      }
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space
