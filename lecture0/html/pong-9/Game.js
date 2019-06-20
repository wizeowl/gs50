class Game {
  constructor() {
    this.initPlayers();
    this.initBall();

    this.mode = MODES.START;
  }

  initPlayers() {
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
  }

  resetPlayers() {
    this.player1.reset();
    this.player2.reset();
  }

  initBall() {
    this.ball = new Ball(
      CENTER - BALL_SIZE / 2,
      MIDDLE - BALL_SIZE / 2,
      BALL_SIZE,
      BALL_SIZE
    );
  }

  switchMode() {
    if (this.mode === MODES.START) {
      this.mode = MODES.SERVE;
      this.servingPlayer = randomSign() === 1 ? PLAYERS.PLAYER1 : PLAYERS.PLAYER2;
      this.ball.setSpeed(this.servingPlayer);
    } else if (this.mode === MODES.SERVE) {
      this.mode = MODES.PLAY;
    }
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

  paintTitle(ctx, texts) {
    ctx.font = FONTS.TITLE;
    ctx.fillStyle = 'white';
    const textY = 60;
    const lineHeight = 30;
    texts.forEach((text, i) => {
      const textSize = ctx.measureText(text);
      const textX = CENTER - textSize.width / 2;
      ctx.fillText(text, textX, textY + lineHeight * i);
    });
  };

  update(dt) {
    const { player1, player2, ball, mode } = this;
    if (mode === MODES.PLAY) {
      ball.move(dt, player1, player2);

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

      const score = this.ball.score();
      if (score) {
        this.resetPlayers();
        this.mode = MODES.SERVE;
        this.updateScore(score);
        this.ball.reset();
        this.assignService(score);
      }
    }
  }

  updateScore(score) {
    score === 1 ? this.player1.score++ : this.player2.score++;
  }

  assignService(score) {
    this.servingPlayer = score === 1 ? PLAYERS.PLAYER2 : PLAYERS.PLAYER1;
    this.ball.setSpeed(-score);
  }

  get title() {
    if (this.mode === MODES.START) {
      return ['Welcome to pong!', 'Press enter to start'];
    }
    if (this.mode === MODES.SERVE) {
      return [`Player ${this.servingPlayer} serves`, 'Press enter to play'];
    }
    return [];
  }
}
