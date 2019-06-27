class Background {
  constructor() {
    this.width = BACKGROUND_WIDTH;
    this.height = BACKGROUND_HEIGHT;
    this.x = 0;
    this.y = 0;
    this.image = IMAGES.background;
    this.speed = .3;
    this.cycle = 1142;
  }

  update(dt) {
    this.x = (this.x - this.speed * dt) % this.cycle;
  }

  render(ctx) {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}
