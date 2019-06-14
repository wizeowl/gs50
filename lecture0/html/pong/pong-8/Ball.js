class Ball {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.setSpeed();
  }

  get leftEdge() {
    return this.x;
  }

  set leftEdge(x) {
    this.x = x;
  }

  get rightEdge() {
    return this.x + this.width;
  }

  set rightEdge(x) {
    this.x = x - this.width;
  }

  setSpeed(direction = randomSign()) {
    this.dx = direction * .95;
    this.dy = Math.sqrt(1 - this.dx ** 2) * randomSign();
  }

  horizontalBounce() {
    this.dx *= -1;
    this.dy += randomSign() * .25;
  }

  verticalBounce() {
    this.dy *= -1;
  }

  move(dt, player1, player2) {
    if (this.collides(player1)) {
      this.horizontalBounce();
      this.leftEdge = player1.boundary;
    }
    if (this.collides(player2)) {
      this.horizontalBounce();
      this.rightEdge = player2.boundary;
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

  score() {
    if (this.leftEdge < 0) {
      return -1;
    }
    if (this.rightEdge > WINDOW_WIDTH) {
      return 1;
    }
    return 0;
  }

  give(player, score) {
    if (score === 1) {
      this.rightEdge = player.boundary;
    } else {
      this.leftEdge = player.boundary;
    }
    this.y = player.middle - this.height / 2;
    this.setSpeed(score);
  }

  render(ctx) {
    ctx.fillStyle = 'white';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
