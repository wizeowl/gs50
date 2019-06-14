const init = (canvas, ctx) => {
  ctx.imageSmoothingEnabled = true;

  canvas.width = WINDOW_WIDTH;
  canvas.height = WINDOW_HEIGHT;
  canvas.style.width = `${WINDOW_WIDTH}px`;
  canvas.style.height = `${WINDOW_HEIGHT}px`;
  canvas.style.marginTop = `${WINDOW_HEIGHT / 2}px`;
};

const randomSign = () => {
  return Math.random() < .5 ? -1 : 1;
};

const switchMode = () => {
  if (game.mode === MODES.PLAY) {
    game = new Game();
  } else {
    game.mode = MODES.PLAY;
  }
};
