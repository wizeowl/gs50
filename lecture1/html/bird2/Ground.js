class Ground {
  constructor() {
    this.width = WINDOW_WIDTH * ZOOM;
    this.height = GROUND_HEIGHT;
    this.y = BACKGROUND_HEIGHT;
    this.x = 0;
    this.speed = .4;
    this.cycle = WINDOW_WIDTH;
    this.image = IMAGES.ground;
  }

  update(dt) {
    this.x = (this.x - this.speed * dt) % this.cycle;
  }

  render(ctx) {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}
