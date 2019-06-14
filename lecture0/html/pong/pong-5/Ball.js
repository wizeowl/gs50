class Ball {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.dx = randomSign() * .8;
    this.dy = Math.sqrt(1 - this.dx ** 2) * randomSign();
  }

  move(dt) {
    this.x += this.dx * dt / 2;
    this.y += this.dy * dt / 2;
  }

  render(ctx) {
    ctx.fillStyle = 'white';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
