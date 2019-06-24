class Pipe {
  constructor() {
    this.image = IMAGES.pipe;
    this.width = 140;
    this.height = 556;
    this.x = WINDOW_WIDTH;
    this.y = WINDOW_HEIGHT - randomIn(100, this.height);
    this.speed = PIPE_SPEED;
  }

  accelerate(r) {
    this.speed *= r;
  }

  update() {
    this.x -= this.speed;
  }

  render(ctx) {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}
