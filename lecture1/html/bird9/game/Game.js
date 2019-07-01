class Game {
  constructor(ctx) {
    this.title = new Title();
    this.background = new Background();
    this.ground = new Ground();
    this.scorePanel = new ScorePanel();
    this.init();

    this.ctx = ctx;

    this.stateMachine = new StateMachine({
      [STATES.TITLE]: new TitleScreenState(this),
      [STATES.PLAY]: new PlayState(this),
      [STATES.SCORE]: new GameOverState(this),
      [STATES.COUNTDOWN]: new CountdownState(this),
      [STATES.PAUSE]: new PauseScreenState(this)
    });

    this.stateMachine.change(STATES.TITLE);
  }

  get score() {
    return this.pipes.score;
  }

  resetCountdwon() {
    this.countdwon = new Countdown();
  }

  init() {
    this.gameOver = new GameOver();
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
