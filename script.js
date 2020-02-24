$( '#ball' ).on( 'click', function () {
  let ball = $( '#ball' );
  let className = $( '#ball' ).attr('class')
  if (className == 'ball') {
    ball.switchClass( 'ball','ball_clicked', 500, 'easeInOutQuad' );
    ball.css({ 'top': Math.random()*($('.field').height() - ball.height()) });

  } else {
    ball.switchClass( 'ball_clicked','ball', 500, 'easeInOutQuad' );
    ball.css({ 'top': Math.random()*($('.field').height() - ball.height()) });
  }
  alert('Goal!');
});
