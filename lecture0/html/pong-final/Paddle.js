class Paddle {
  constructor(x, y, width, height, speed, upKey, downKey) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.upKey = upKey;
    this.downKey = downKey;
    this.score = 0;

    this.init = { x, y, width, height, speed, upKey, downKey };
  }

  reset() {
    Object.assign(this, this.init);
  }

  up(dt) {
    this.y = Math.max(PAD_BOUNDS.TOP, this.y - this.speed * dt);
  }

  down(dt) {
    this.y = Math.min(PAD_BOUNDS.BOTTOM, this.y + this.speed * dt);
  }

  render(ctx) {
    ctx.fillStyle = 'white';
    ctx.fillRect(this.x, this.y, this.width, this.height);
    this.renderScore(ctx);
  }

  renderScore(ctx) {
    ctx.font = FONTS.SCORE;
    const scoreSize = ctx.measureText(`${this.score}`);
    const scoreX = -(CENTER - this.boundary) / 4 + CENTER - scoreSize.width / 2;
    const scoreY = MIDDLE - 80;
    ctx.fillStyle = 'white';
    ctx.fillText(this.score, scoreX, scoreY);
  }

  hitRatio(ballY) {
    return (ballY - this.middle) / this.height;
  }

  get boundary() {
    return this.x < CENTER ? this.x + this.width : this.x;
  }

  get middle() {
    return this.y + this.height / 2;
  }
}
