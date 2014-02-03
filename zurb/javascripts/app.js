$(document).ready(function(){
  $('#featured').orbit({
    timer: true,
    advanceSpeed: 30,
    startClockOnMouseOut: true,
    pauseOnHover: true
  });
  $('div.four.columns nav ul li a').eq(0).addClass('active');
  $('div.eight.columns div#article1').show();

  $('div.four.columns nav ul li a').click(function(){
    divId = $(this).attr('rel');

    $('div.eight.columns div').hide();
    $('div.eight.columns div#' + divId).show();

    $('div.four.columns nav ul li a').removeClass('active');
    $(this).addClass('active');
  });

});





