$(document).ready(function(){

  $('aside nav ul li a').eq(0).addClass('active');
  $('section article#article1').show();

  $('aside nav ul li a').click(function(){
    articleId = $(this).attr('rel');

    $('section article').hide();
    $('section article#' + articleId).show();

    $('aside nav ul li a').removeClass('active');
    $(this).addClass('active');
  });

});





