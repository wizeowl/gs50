class Game {
  constructor() {
    this.player1 = new Paddle(
      P1_X,
      PAD_BOUNDS.TOP + PAD_HEIGHT * 1.5,
      PAD_WIDTH,
      PAD_HEIGHT,
      PAD_SPEED,
      KEYS.P1_UP,
      KEYS.P1_DOWN
    );

    this.player2 = new Paddle(
      P2_X,
      PAD_BOUNDS.BOTTOM - PAD_HEIGHT * 1.5,
      PAD_WIDTH,
      PAD_HEIGHT,
      PAD_SPEED,
      KEYS.P2_UP,
      KEYS.P2_DOWN
    );

    this.ball = new Ball(
      WINDOW_WIDTH / 2 - BALL_SIZE / 2,
      WINDOW_HEIGHT / 2 - BALL_SIZE / 2,
      BALL_SIZE,
      BALL_SIZE
    );

    this.mode = MODES.START;
  }

  render(ctx, dt) {
    this.clear(ctx);
    this.paintTitle(ctx, this.title);
    this.update(dt);

    this.player1.render(ctx);
    this.player2.render(ctx);
    this.ball.render(ctx);
  }

  clear(ctx) {
    ctx.fillStyle = BACKGROUND_COLOR;
    ctx.fillRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);
  }

  paintTitle(ctx, text) {
    const textSize = ctx.measureText(text);
    const textX = WINDOW_WIDTH / 2 - textSize.width / 2;
    const textY = 32;
    ctx.font = 'normal 14px retro';
    ctx.fillStyle = 'white';
    ctx.fillText(text, textX, textY);
  };

  update(dt) {
    const { player1, player2, ball, mode } = this;
    if (mode === MODES.PLAY) {
      ball.move(dt);

      if (isDown(player1.upKey)) {
        player1.up(dt);
      }
      if (isDown(player1.downKey)) {
        player1.down(dt);
      }
      if (isDown(player2.upKey)) {
        player2.up(dt);
      }
      if (isDown(player2.downKey)) {
        player2.down(dt);
      }
    }
  }

  get title() {
    return this.mode === MODES.START ? 'START STATE' : 'PLAY STATE';
  }
}
