export default class ShootingStar {
  constructor(context, { width, height }) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.speed = (Math.random() * 10) + 20;
    this.len = (Math.random() * 80) + 20;
    this.maxX = width;
    this.maxY = height;
    this.active = true;
    this.waitTime = 0;
    this.context = context;
    this.initDelay = Math.floor(Math.random() * 100);
  }

  set canvasSize({ width, height }) {
    this.maxX = width;
    this.maxY = height;
  }

  update() {
    if (this.isOutsideCanvas()) {
      // if not active, decrease timer
      if (!this.active) {
        this.waitTime -= 1;
      // it's active so start timer
      } else {
        this.waitTime = Math.floor(Math.random() * 500) + 500;
        this.active = false;
      }
      
      // check if reset to active
      if (this.waitTime === 0) {
        this.active = true;
        this.reset();
      }
    }

    this.x -= this.speed;
    this.y += this.speed;
  }

  reset() {
    this.y = -this.len;
    this.x = Math.random()* 2 * this.maxX;
  }

  isOutsideCanvas() {
    return this.y >= this.maxY + 100;   
  }

  draw() {
    if (this.initDelay >= 0) {
      this.initDelay--;
      return;
    }
    if (!this.active) return;
    this.context.strokeStyle = '#ffffff';
    this.context.lineWidth = 1;
    this.context.beginPath();
    this.context.moveTo(this.x, this.y);
    this.context.lineTo(this.x + this.len, this.y - this.len);
    this.context.stroke();
  }
}