let ball = $( '.ball' );
let distance = $('.field').width() - ball.width();

ball.on( 'click', function () {
  if (ball.css('left') === '0px') {
    ball.animate({
      left: distance,
      top: Math.random()*($('.field').height() - ball.height())
    },300, function(){
      if (ball.css('top') >='33%' && ball.css('top') <='66%'){
        alert('Goal!');
      }
    });
  } else {
    ball.animate({
      left:0,
      top: Math.random()*($('.field').height() - ball.height())
    },300, function() {
      if (ball.css('top') >='33%' && ball.css('top') <='66%'){
        alert('Goal!');
      }
    });
  }

});
