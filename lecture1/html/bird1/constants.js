const WINDOW_WIDTH = 1280;
const WINDOW_HEIGHT = 720;
const ZOOM = 2.5;

const GROUND_HEIGHT = 16 * ZOOM;
const BACKGROUND_WIDTH = WINDOW_WIDTH * ZOOM;
const BACKGROUND_HEIGHT = WINDOW_HEIGHT - GROUND_HEIGHT;

const randomSign = () => Math.random() < .5 ? -1 : 1;
const sign = (n) => n < 0 ? -1 : 1;

const STYLE = {};
const KEYS = {};
const SOUNDS = {};
const IMAGES = {
  background: new Image(),
  ground: new Image(),
};
const FONTS = {};
const MODES = {};

IMAGES.background.src = 'background.png';
IMAGES.ground.src = 'ground.png';
