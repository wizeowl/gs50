const KEYS = {
  P2_UP: 'ArrowUp',
  P2_DOWN: 'ArrowDown',
  P1_UP: 'z',
  P1_DOWN: 's'
};

const WINDOW_WIDTH = 1280 / 2;
const WINDOW_HEIGHT = 720 / 2;

const PAD_SPEED = .5;
const PAD_WIDTH = 10;
const PAD_HEIGHT = 36;
const PAD_MARGIN = 12;
const PAD_BOUNDS = {
  TOP: 1,
  BOTTOM: WINDOW_HEIGHT - PAD_HEIGHT - 1
};
const P1_X = PAD_MARGIN;
const P2_X = WINDOW_WIDTH - PAD_MARGIN - PAD_WIDTH;
const BALL_SIZE = 8;

const MODES = {
  START: 0,
  PLAY: 1
};

const initialState = {
  p1Y: PAD_BOUNDS.TOP + PAD_HEIGHT * 1.5,
  p2Y: PAD_BOUNDS.BOTTOM - PAD_HEIGHT * 1.5,
  ballX: WINDOW_WIDTH / 2 - BALL_SIZE / 2,
  ballY: WINDOW_HEIGHT / 2 - BALL_SIZE / 2,
  mode: MODES.START
};

let state = {};
Object.assign(state, initialState);

const BACKGROUND_COLOR = 'rgb(40, 45, 52, 255)';
