class PlayState extends BaseState {
  enter() {
    this.game.init();
  }

  update(dt) {
    const collision = this.game.pipes.allPipes
      .concat([this.game.ground])
      .some(pipe => this.game.bird.collides(pipe));

    if (collision) {
      this.game.stateMachine.change(STATES.SCORE);
    } else {
      this.game.background.update(dt);
      this.game.bird.update(dt);
      this.game.pipes.update(dt);
      this.game.ground.update(dt);

      this.game.pipes.checkScore(this.game.bird);
    }
  }

  render(ctx) {
    this.game.background.render(ctx);
    this.game.pipes.render(ctx);
    this.game.scorePanel.render(ctx, this.game.score);
    this.game.bird.render(ctx);
    this.game.ground.render(ctx);
  }
}
