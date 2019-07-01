class CountdownState extends BaseState {
  enter() {
    this.game.resetCountdwon();
  }

  update(dt) {
    this.game.background.update(dt);
    this.game.ground.update(dt);
    this.game.countdwon.update(dt);

    if (this.game.countdwon.count < 1) {
      this.game.stateMachine.change(STATES.PLAY);
    }
  }

  render(ctx) {
    this.game.background.render(ctx);
    this.game.ground.render(ctx);
    this.game.countdwon.render(ctx);
  }
}
