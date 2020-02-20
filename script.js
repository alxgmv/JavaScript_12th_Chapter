$( '#ball' ).on( 'click', function () {
  let ball = $( '#ball' );
  let className = $( '#ball' ).attr('class')
  if (className = 'ball') {
    ball.switchClass( 'ball','ball_clicked', 100, 'easeInOutQuad' );
    ball.css({ 'top': Math.random()*($('.field').height() - ball.height()) });
  }
  if (className = 'ball_clicked') {
    ball.switchClass( 'ball_clicked','ball', 100, 'easeInOutQuad' );
    ball.css({ 'top': Math.random()*($('.field').height() - ball.height()) });
  }
});
