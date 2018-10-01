// (function($){
//   $(function(){
//     $(".dropdown-trigger").dropdown({
//       alignment: 'bottom',
//       belowOrigin: true,
//       gutter: 0
//     });
//     $('.carousel').carousel({
//       dist:100
//     });

//     $('.modal').modal();
    
//     $('.modal-trigger').on('click', openModal());
//     function openModal () {
//       $('.modal').modal('open')
//     };
//     // $('.modal-trigger').on('click', function(e) {
//     //   let modalHeader = $('modal-header')
//     //   modal('open');
      
//     // })

//     $('a[href*="#"]:not([href="#"])').click(function() {
//       if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//         var target = $(this.hash);
//         target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//         if (target.length) {
//           $('html, body').animate({
//             scrollTop: target.offset().top
//           }, 500);
//           return false;
//         }
//       }
//     });
//   }); // end of document ready
// })(jQuery); // end of jQuery name space
$(document).ready(function (){
  M.AutoInit();
  $(".dropdown-button").dropdown({
    alignment: 'bottom',
    belowOrigin: true,
    gutter: 0
  });
  $('.sidenav').sidenav();
  $('.parallax').parallax();
  $('.carousel').carousel({
    dist:-100,
    padding: 100,
    numVisible: 5,
    shift: 0,
    indicators: true
  });
  $('.modal').modal();
})

