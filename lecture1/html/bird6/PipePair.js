class PipePair {
  constructor() {
    this.x = WINDOW_WIDTH;
    this.bottomY = WINDOW_HEIGHT - randomIn(PIPE.MIN_VISIBLE_HEIGHT, PIPE.MAX_VISIBLE_HEIGHT);
    this.topY = -this.bottomY + PIPE.GAP;

    this.pipes = {
      top: new Pipe(this.x, this.topY),
      bottom: new Pipe(this.x, this.bottomY)
    };
    this.speed = PIPE.SPEED;
  }

  update(dt) {
    this.x -= this.speed;
    this.pipes.top.x = this.x;
    this.pipes.bottom.x = this.x;
  }
}
