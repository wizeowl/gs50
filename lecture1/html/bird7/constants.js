const WINDOW_WIDTH = 1280;
const WINDOW_HEIGHT = 720;
const MIDDLE = WINDOW_HEIGHT / 2;
const CENTER = WINDOW_WIDTH / 2;
const ZOOM = 2.5;

const GROUND_HEIGHT = 16 * ZOOM;
const BACKGROUND_WIDTH = WINDOW_WIDTH * ZOOM;
const BACKGROUND_HEIGHT = WINDOW_HEIGHT - GROUND_HEIGHT;

const JUMP_VECTOR_SIZE = 16;
const WEIGHT_VECTOR = reverse(arrayOf(JUMP_VECTOR_SIZE).map((e, i) => ((i - 4) ** 3 * .005)));
const GRAVITY = sum(WEIGHT_VECTOR) / 2;

const PIPE = {
  SPEED: 4,
  WIDTH: 140,
  HEIGHT: 576,
  GAP: 200,
  MIN_VISIBLE_HEIGHT: 100
};
PIPE.MAX_VISIBLE_HEIGHT = WINDOW_HEIGHT - PIPE.MIN_VISIBLE_HEIGHT - PIPE.GAP;

const BIRD = {
  WIDTH: 76,
  HEIGHT: 48
};
const COLLISION_TOLERENCE = 4;
const STYLE = {};
const KEYS = {
  SPACE: ' '
};
const SOUNDS = {};
const IMAGES = {
  background: new Image(),
  ground: new Image(),
  bird: new Image(),
  pipe: new Image(),
};
const ORIENTATIONS = {
  NORMAL: 0,
  INVERTED: 1
};
const FONTS = {};
const MODES = {
  PLAY: 0,
  PAUSE: 1
};

IMAGES.background.src = 'background.png';
IMAGES.ground.src = 'ground.png';
IMAGES.bird.src = 'bird.png';
IMAGES.pipe.src = 'pipe.png';

