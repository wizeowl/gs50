class Countdown {
  constructor() {
    this.counter = 0;
    this.countDelay = 618;
    this.count = 3;
  }

  get fontSize() {
    return 50 + Math.round(50 * this.counter / this.countDelay);
  }

  update(dt) {
    this.counter += dt;
    if (this.counter >= this.countDelay) {
      this.counter = 0;
      this.count--;
    }
  }

  render(ctx) {
    ctx.fillStyle = 'white';

    const title = `${this.count}`;
    ctx.font = `normal ${this.fontSize}px flappy`;
    const titleSize = ctx.measureText(title);
    const titleX = CENTER - titleSize.width / 2;
    const titleY = MIDDLE - 40;
    ctx.fillText(title, titleX, titleY);
  }
}
