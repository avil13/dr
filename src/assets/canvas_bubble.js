export const homeInitCanvas =  () => {

  var canvas = document.getElementById('canvas_bubble'),
      ctx = canvas.getContext("2d"),
      width = window.innerWidth,
      height = window.innerHeight,
      gradient;

  canvas.width = width;
  canvas.height = height;


  var balls = create(100);

  //create the array of circles that will be animated
  function create(size){
      if (!size) size = 5;
      var result = [];
      for (var i = 0; i < size; i++) {
          result.push({
              x: width/2,
              y: height/2,
              radius: randomInteger(20, 80),
              dx: (Math.random() - 0.5) * 8,
              dy: (Math.random() - 0.5) * 8,
              color: {
                  r: randomInteger(0, 900),
                  g: randomInteger(0, 900),
                  b: randomInteger(0, 900),
                  a: Math.random().toFixed(1),
              }
          });
      }
      return result;
  }

  function randomInteger(min, max) {
      var rand = min - 0.5 + Math.random() * (max - min + 1)
      rand = Math.round(rand);
      return rand;
  }



  function animate(){
      // clean canvas
      ctx.clearRect(0,0,width,height);

      for (var i = 0; i < balls.length; i++) {
          //draw the ball
          ctx.beginPath();

          gradient = ctx.createRadialGradient(balls[i].x, balls[i].y, 10, balls[i].x, balls[i].y, 70);
          gradient.addColorStop(0, "rgba(255,255,255,0.7)");
          gradient.addColorStop(1, "rgba("+balls[i].color.r+","+balls[i].color.g+","+balls[i].color.b+","+balls[i].color.a+")");
          ctx.fillStyle = gradient;
          ctx.arc(balls[i].x, balls[i].y, balls[i].radius, 0, Math.PI*2);
          ctx.fill();

          if (balls[i].x - balls[i].radius + balls[i].dx < 0 ||
              balls[i].x + balls[i].radius + balls[i].dx > width) {
                  balls[i].dx = -balls[i].dx;
          }

          if (balls[i].y + balls[i].radius + balls[i].dy > height ||
              balls[i].y - balls[i].radius + balls[i].dy < 0) {
                  balls[i].dy = -balls[i].dy;
          }

          balls[i].x += balls[i].dx
          balls[i].y += balls[i].dy

      }

      requestAnimationFrame(animate);

  }
  animate();

}
// homeInitCanvas();

// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
// MIT license

(function() {
  var lastTime = 0;
  var vendors = ['ms', 'moz', 'webkit', 'o'];
  for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
      window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
                                 || window[vendors[x]+'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame)
      window.requestAnimationFrame = function(callback, element) {
          var currTime = new Date().getTime();
          var timeToCall = Math.max(0, 16 - (currTime - lastTime));
          var id = window.setTimeout(function() { callback(currTime + timeToCall); },
            timeToCall);
          lastTime = currTime + timeToCall;
          return id;
      };

  if (!window.cancelAnimationFrame)
      window.cancelAnimationFrame = function(id) {
          clearTimeout(id);
      };
}());
