const WINDOW_WIDTH = 1280;
const WINDOW_HEIGHT = 720;
const MIDDLE = WINDOW_HEIGHT / 2;
const CENTER = WINDOW_WIDTH / 2;
const ZOOM = 2.5;

const GROUND_HEIGHT = 16 * ZOOM;
const BACKGROUND_WIDTH = WINDOW_WIDTH * ZOOM;
const BACKGROUND_HEIGHT = WINDOW_HEIGHT - GROUND_HEIGHT;

const randomSign = () => Math.random() < .5 ? -1 : 1;
const sign = (n) => n < 0 ? -1 : 1;
const arrayOf = (length, value) => Array.from(new Array(length)).map(() => value);
const padStart = (length, defaultValue) => {
  const pad = arrayOf(length, defaultValue);

  return arr => {
    if (arr.length >= length) {
      return arr.slice(-length);
    } else {
      return pad.concat(arr).slice(-length);
    }
  };
};
const dotProduct = (arr1, arr2) => arr1.reduce((acc, curr, i) => acc + arr2[i] * curr, 0);
const sum = arr => arr.reduce((acc, curr) => acc + curr, 0);

const STYLE = {};
const KEYS = {
  SPACE: ' '
};
const SOUNDS = {};
const IMAGES = {
  background: new Image(),
  ground: new Image(),
  bird: new Image(),
};
const FONTS = {};
const MODES = {};

IMAGES.background.src = 'background.png';
IMAGES.ground.src = 'ground.png';
IMAGES.bird.src = 'bird.png';
