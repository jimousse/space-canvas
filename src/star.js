export default class Star {
  constructor(context, { width, height }) {
    this.size = Math.random() + .5;
    this.speed = 0.05;
    this.maxX = width;
    this.maxY = height;
    this.context = context;
  }
  
  set canvasSize({ width, height }) {
    this.maxX = width;
    this.maxY = height;
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.draw();
  }

  update() {
    this.x -= this.speed;
    this.reset();
  }

  reset() {
    if (this.x <= 0) {
      this.x = this.maxX;
    } else if (this.x >= this.maxX) {
      this.x = 0;
    } else if (this.y <= 0) {
      this.y = this.maxY;
    } else if (this.y >= this.maxY) {
      this.y = 0;
    }
  }

  draw() {
    this.context.fillStyle = '#fff';
    this.context.fillRect(this.x, this.y, this.size, this.size);
  }
}