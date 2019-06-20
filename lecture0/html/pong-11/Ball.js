class Ball {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.init = { x, y, width, height };

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
    this.dx = direction * .79;
    this.dy = Math.sqrt(.8 - this.dx ** 2) * direction;
  }

  bounceHorizontally() {
    this.dx *= -ACCELERATION;
    this.dy *= ACCELERATION;
    SOUNDS.PADDLE_HIT.play();
  }

  bounceVertically() {
    this.dy *= -1;
    SOUNDS.WALL_HIT.play();
  }

  move(dt, player1, player2) {
    if (this.collides(player1)) {
      this.bounceHorizontally();
      this.leftEdge = player1.boundary;
    }
    if (this.collides(player2)) {
      this.bounceHorizontally();
      this.rightEdge = player2.boundary;
    }
    if (this.y <= 0) {
      this.bounceVertically();
      this.y = 1;
    }
    if (this.y >= WINDOW_HEIGHT) {
      this.bounceVertically();
      this.y = WINDOW_HEIGHT - 1;
    }
    this.x += this.dx * dt;
    this.y += this.dy * dt;
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
      SOUNDS.SCORE.play();
      return -1;
    }
    if (this.rightEdge > WINDOW_WIDTH) {
      SOUNDS.SCORE.play();
      return 1;
    }
    return 0;
  }

  reset() {
    Object.assign(this, this.init);
  }

  render(ctx) {
    ctx.fillStyle = 'white';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
