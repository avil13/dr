export const homeInitCanvas = () => {
  if (!('requestAnimationFrame' in window)) {
    return;
  }

  const canvas = <HTMLCanvasElement>document.getElementById('canvas_bubble');

  if (!canvas) {
    return;
  }

  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

  if (!ctx) {
    return;
  }

  let gradient;
  let width = window.innerWidth;
  let height = window.innerHeight;

  canvas.width = width;
  canvas.height = height;

  addEventListener('resize', () => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
  });

  var balls = create(100);

  //create the array of circles that will be animated
  function create(size?: number) {
    if (!size) size = 5;
    var result = [];
    for (var i = 0; i < size; i++) {
      result.push({
        x: width / 2,
        y: height / 2,
        radius: randomInteger(20, 80),
        dx: (Math.random() - 0.5) * 8,
        dy: (Math.random() - 0.5) * 8,
        color: {
          r: randomInteger(0, 900),
          g: randomInteger(0, 900),
          b: randomInteger(0, 900),
          a: Math.random().toFixed(1),
        },
      });
    }
    return result;
  }

  function randomInteger(min: number, max: number) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
  }

  function animate() {
    // clean canvas
    ctx.clearRect(0, 0, width, height);

    for (var i = 0; i < balls.length; i++) {
      //draw the ball
      ctx.beginPath();

      gradient = ctx.createRadialGradient(
        balls[i].x,
        balls[i].y,
        10,
        balls[i].x,
        balls[i].y,
        70
      );
      gradient.addColorStop(0, 'rgba(255,255,255,0.7)');
      gradient.addColorStop(
        1,
        'rgba(' +
          balls[i].color.r +
          ',' +
          balls[i].color.g +
          ',' +
          balls[i].color.b +
          ',' +
          balls[i].color.a +
          ')'
      );
      ctx.fillStyle = gradient;
      ctx.arc(balls[i].x, balls[i].y, balls[i].radius, 0, Math.PI * 2);
      ctx.fill();

      if (
        balls[i].x - balls[i].radius + balls[i].dx < 0 ||
        balls[i].x + balls[i].radius + balls[i].dx > width
      ) {
        balls[i].dx = -balls[i].dx;
      }

      if (
        balls[i].y + balls[i].radius + balls[i].dy > height ||
        balls[i].y - balls[i].radius + balls[i].dy < 0
      ) {
        balls[i].dy = -balls[i].dy;
      }

      balls[i].x += balls[i].dx;
      balls[i].y += balls[i].dy;
    }

    requestAnimationFrame(animate);
  }
  animate();
};
