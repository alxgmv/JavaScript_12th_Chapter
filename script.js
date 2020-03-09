let ball = $( '.ball' );
let distance = $('.field').width() - ball.width();

ball.on( 'click', function () {
  if (ball.css('left', 0) ) {
    ball.animate({
      left: distance,
      top: Math.random()*($('.field').height() - ball.height())
    },200);
  };
  if (ball.css('left', distance)) {
    ball.animate({
      left:ball.width(),
      top: Math.random()*($('.field').height() - ball.height())
    },200);
  }
});
