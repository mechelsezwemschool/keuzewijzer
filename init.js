$(document).ready(function() {

  $('[data-goto]').on('click', function(e) {
    var slide = $(this).data('goto');
    if(isNaN(slide)) {
      $('.message[data-message=' + slide + ']').addClass('is-open');
      $('.keuzewijzer').addClass('is-disabled');
    } else {
      $('.keuzewijzer').css('transform', 'translateX(-' + (slide-1)*10 + '%)');
    }
    e.preventDefault();
  });

});
