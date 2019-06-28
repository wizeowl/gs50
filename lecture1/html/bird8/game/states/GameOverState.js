class GameOverState extends BaseState {
  update(dt) {
    this.game.background.update(dt);
    this.game.ground.update(dt);

    if (isDown(KEYS.ENTER)) {
      this.game.stateMachine.change(STATES.TITLE);
    }
  }

  render(ctx) {
    this.game.background.render(ctx);
    this.game.ground.render(ctx);
    this.game.gameOver.render(ctx, this.game.score);
  }
}
