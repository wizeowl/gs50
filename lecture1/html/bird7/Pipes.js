class Pipes {
  constructor() {
    this.interval = 1600;
    this.counter = 0;
    this.pipePairs = [];
  }

  get allPipes() {
    return this.pipePairs
      .reduce((acc, { pipes: { top, bottom } }) => acc.concat([top, bottom]), []);
  }

  addPipePair() {
    this.pipePairs.push(new PipePair());
    // remove pipes when the leave the screen
    this.pipePairs = this.pipePairs.filter(pair => pair.x > -PIPE.WIDTH);
  }

  update(dt) {
    this.counter += dt;
    this.pipePairs.forEach(pair => pair.update(dt));

    if (this.counter >= this.interval) {
      this.counter = 0;
      this.addPipePair();
    }
  }

  /*
    Rendering the pipe upside down turned out to be such a pain in the ass
    thanks canvas, we need flip the whole 2d context to draw an image upside down then put back in place
    we decided to perform one single flip, draw all the top pipes then restore the context
   */
  renderTopPipes(ctx) {
    const tops = this.pipePairs.map(({ pipes: { top } }) => top);

    ctx.save();
    ctx.rotate(Math.PI);
    ctx.scale(-1, 1);

    tops.forEach(pipe => pipe.render(ctx));

    ctx.restore();
  }

  renderBottomPipes(ctx) {
    const bottoms = this.pipePairs.map(({ pipes: { bottom } }) => bottom);
    bottoms.forEach(pipe => pipe.render(ctx));
  }

  render(ctx) {
    this.renderBottomPipes(ctx);
    this.renderTopPipes(ctx);
  }
}
