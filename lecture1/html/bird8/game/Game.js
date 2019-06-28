class Game {
  constructor(ctx) {
    this.background = new Background();
    this.ground = new Ground();
    this.bird = new Bird();
    this.pipes = new Pipes();

    this.mode = MODES.PLAY;
    this.ctx = ctx;
  }

  run(dt) {
    if (this.mode === MODES.PLAY) {
      this.play(dt);
    }
  }

  play(dt) {
    this.background.render(this.ctx);
    this.pipes.render(this.ctx);
    this.bird.render(this.ctx);
    this.ground.render(this.ctx);

    const collision = this.pipes.allPipes
      .some(pipe => this.bird.collides(pipe));

    if (collision) {
      this.mode = MODES.PAUSE;
    }

    this.background.update(dt);
    this.bird.update(dt);
    this.pipes.update(dt);
    this.ground.update(dt);
  }
}
