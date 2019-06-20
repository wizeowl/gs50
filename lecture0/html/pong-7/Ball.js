class Ball {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.dx = randomSign() * .95;
    this.dy = Math.sqrt(1 - this.dx ** 2) * randomSign();
  }

  horizontalBounce() {
    this.dx *= -1;
    this.dy += randomSign() * .1;
  }

  verticalBounce() {
    this.dy *= -1;
  }

  move(dt, player1, player2) {
    if (this.collides(player1)) {
      this.horizontalBounce();
      this.x = player1.x + player1.width;
    }
    if (this.collides(player2)) {
      this.horizontalBounce();
      this.x = player2.x - this.width;
    }
    if (this.y <= 0) {
      this.verticalBounce();
      this.y = 1;
    }
    if (this.y >= WINDOW_HEIGHT) {
      this.verticalBounce();
      this.y = WINDOW_HEIGHT - 1;
    }
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
