class TitleScreenState extends BaseState {
  enter() {
    this.idle = 0;
  }

  update(dt) {
    this.game.background.update(dt);
    this.game.ground.update(dt);
    this.idle += dt;

    if (isDown(KEYS.ENTER) && this.idle > 512) {
      this.game.stateMachine.change(STATES.COUNTDOWN);
    }
  }

  render(ctx) {
    this.game.background.render(ctx);
    this.game.ground.render(ctx);
    this.game.title.render(ctx);
  }
}
