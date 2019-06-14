const init = (canvas, ctx) => {
  ctx.imageSmoothingEnabled = true;

  canvas.width = WINDOW_WIDTH;
  canvas.height = WINDOW_HEIGHT;
  canvas.style.width = `${WINDOW_WIDTH}px`;
  canvas.style.height = `${WINDOW_HEIGHT}px`;
  canvas.style.marginTop = `${WINDOW_HEIGHT / 2}px`;
};

const paintBackground = ctx => {
  ctx.fillStyle = BACKGROUND_COLOR;
  ctx.fillRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);
};

const paintTitle = (ctx, text) => {
  const textSize = ctx.measureText(text);
  const textX = WINDOW_WIDTH / 2 - textSize.width / 2;
  const textY = 32;
  ctx.font = 'normal 14px retro';
  ctx.fillStyle = 'white';
  ctx.fillText(text, textX, textY);
};

const paintGame = ctx => {
  ctx.fillStyle = 'white';
  ctx.fillRect(P1_X, state.p1Y, PAD_WIDTH, PAD_HEIGHT);
  ctx.fillRect(P2_X, state.p2Y, PAD_WIDTH, PAD_HEIGHT);
  ctx.fillRect(state.ballX, state.ballY, BALL_SIZE, BALL_SIZE);
};

const switchMode = () => {
  if (state.mode === MODES.PLAY) {
    Object.assign(state, initialState);
  } else {
    state.mode = MODES.PLAY;
    state.ballDX = Math.random() < .5 ? -.8 : .8;
    state.ballDY = Math.sqrt(1 - state.ballDX ** 2) - .5;
  }
};

const update = dt => {
  if (state.mode === MODES.PLAY) {
    state.ballX += state.ballDX * dt / 2;
    state.ballY += state.ballDY * dt / 2;
    if (isDown(KEYS.P1_UP)) {
      state.p1Y = Math.max(PAD_BOUNDS.TOP, state.p1Y - PAD_SPEED * dt);
    }
    if (isDown(KEYS.P1_DOWN)) {
      state.p1Y = Math.min(PAD_BOUNDS.BOTTOM, state.p1Y + PAD_SPEED * dt);
    }
    if (isDown(KEYS.P2_UP)) {
      state.p2Y = Math.max(PAD_BOUNDS.TOP, state.p2Y - PAD_SPEED * dt);
    }
    if (isDown(KEYS.P2_DOWN)) {
      state.p2Y = Math.min(PAD_BOUNDS.BOTTOM, state.p2Y + PAD_SPEED * dt);
    }
  }
};
