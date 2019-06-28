class Game {
  constructor(ctx) {
    this.title = new Title();
    this.background = new Background();
    this.ground = new Ground();
    this.init();

    this.ctx = ctx;

    this.stateMachine = new StateMachine({
      [STATES.TITLE]: new TitleScreenState(this),
      [STATES.PLAY]: new PlayState(this),
      [STATES.PAUSE]: new PauseScreenState(this)
    });

    this.stateMachine.change(STATES.TITLE);
  }

  init() {
    this.bird = new Bird();
    this.pipes = new Pipes();
  }

  run(dt) {
    if (isDown(KEYS.ESCAPE)) {
      window.close();
    }

    this.stateMachine.render(this.ctx);
    this.stateMachine.update(dt);
  }
}
