class Pipe {
  constructor(x, y) {
    this.image = IMAGES.pipe;
    this.width = PIPE.WIDTH;
    this.height = PIPE.HEIGHT;
    this.x = x;
    this.y = y;
  }

  render(ctx) {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}
