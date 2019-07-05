class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.stateMachine = new StateMachine({});
  }

  run(dt) {
    if (isDown(KEYS.ESCAPE)) {
      window.close();
    }

    this.stateMachine.render(this.ctx);
    this.stateMachine.update(dt);
  }
}
