const BACKGROUND_COLOR = 'rgb(40, 45, 52, 255)';

const KEYS = {
  P2_UP: 'ArrowUp',
  P2_DOWN: 'ArrowDown',
  P1_UP: 'z',
  P1_DOWN: 's'
};

const WINDOW_WIDTH = 1280;
const WINDOW_HEIGHT = 720;
const CENTER = WINDOW_WIDTH / 2;
const MIDDLE = WINDOW_HEIGHT / 2;

const PAD_SPEED = .618;
const PAD_WIDTH = 16;
const PAD_HEIGHT = 80;
const PAD_MARGIN = 24;
const PAD_BOUNDS = {
  TOP: 1,
  BOTTOM: WINDOW_HEIGHT - PAD_HEIGHT - 1
};
const P1_X = PAD_MARGIN;
const P2_X = WINDOW_WIDTH - PAD_MARGIN - PAD_WIDTH;

const BALL_SIZE = 16;

const MODES = {
  START: 0,
  PLAY: 1
};

const FONTS = {
  TITLE: 'normal 23px retro',
  SCORE: 'normal 100px retro'
};

const randomSign = () => Math.random() < .5 ? -1 : 1;
