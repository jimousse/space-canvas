import Star from './star';
import ShootingStar from './shooting-star';

// on screen canvas
const canvas = document.querySelector('#my-canvas');
const context = canvas.getContext("2d");
const { height: canvasHeight, width: canvasWidth } = document.body.getBoundingClientRect();
canvas.width = canvasWidth;
canvas.height = canvasHeight;

// off screen canvas
const offScreenCanvas = document.createElement('canvas');
const bufferCtx = offScreenCanvas.getContext('2d');
offScreenCanvas.width = canvasWidth;
offScreenCanvas.height = canvasHeight;

// stars
let stars = [];
for(let i = 0; i < 300; i++) {
  stars.push(new Star(bufferCtx, { width: canvasWidth, height: canvasHeight }));
}

// shooting stars
let shootingStars = [];
for(let i = 0; i < 5; i++) {
  shootingStars.push(new ShootingStar(bufferCtx, { width: canvasWidth, height: canvasHeight }));
}

const ro = new ResizeObserver(entries => {
  for (let entry of entries) {
    const { width, height } = entry.contentRect;
    canvas.width = width;
    canvas.height = height;
    offScreenCanvas.width = width;
    offScreenCanvas.height = height;
    stars.forEach(star => star.canvasSize = { width, height });
    shootingStars.forEach(shootingStar => shootingStar.canvasSize = { width, height });
  }
});

ro.observe(document.body);

function animate() {
  // update stars
  stars.forEach(star => star.update());
  // update shooting star
  shootingStars.forEach(shootingStar => shootingStar.update());

  // draw on off-screen canvas
  bufferCtx.fillStyle = '#110E19';
  bufferCtx.fillRect(0, 0, offScreenCanvas.width, offScreenCanvas.height);
  stars.forEach(star => star.draw());
  shootingStars.forEach(shootingStar => shootingStar.draw());

  // copy to on-screen canvas
  context.drawImage(offScreenCanvas, 0, 0);

  // request frame
  window.requestAnimationFrame(animate);
}

animate();