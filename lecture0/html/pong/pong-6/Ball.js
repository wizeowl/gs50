class Ball {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.dx = randomSign() * .95;
    this.dy = Math.sqrt(1 - this.dx ** 2) * randomSign();
  }

  move(dt) {
    this.x += this.dx * dt * .618;
    this.y += this.dy * dt * .618;
  }

  collides(paddle) {
    if ((this.x + this.width < paddle.x) || (paddle.x + paddle.width < this.x)) {
      return false;
    }
    if ((this.y + this.height < paddle.y) || (paddle.y + paddle.height < this.y)) {
      return false;
    }
    return true;
  }

  render(ctx) {
    ctx.fillStyle = 'white';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
