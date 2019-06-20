class Bird {
  constructor() {
    this.image = IMAGES.bird;
    this.width = this.image.width * 2;
    this.height = this.image.height * 2;
    this.x = CENTER - this.width / 2;
    this.y = MIDDLE - this.height / 2;
  }

  update(dt) {
  }

  render(ctx) {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}
