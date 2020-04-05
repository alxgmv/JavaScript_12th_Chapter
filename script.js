let ball = $( '.ball' );
let distance = $('.field').width() - ball.width();

ball.on( 'click', function () {
  if (ball.css('left') === '0px') {
    ball.animate({
      left: distance,
      top: Math.random()*($('.field').height() - ball.height())
    },300);
  } else {
    ball.animate({
      left:0,
      top: Math.random()*($('.field').height() - ball.height())
    },300);
  }
  if (ball.css('top') >='200px' && ball.css('top') <='300px'){
    alert('Goal!');
  }
});
