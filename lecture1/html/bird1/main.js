const canvas = document.getElementById('bird');
const ctx = canvas.getContext('2d');

canvas.width = WINDOW_WIDTH;
canvas.height = WINDOW_HEIGHT;

watch(Object.values(KEYS));

const bgSpeed = .2;
const gSpeed = .4;
const bgLoop = 1142;
let bgOffset = 0;
let gOffset = 0;

loop((dt) => {
  ctx.drawImage(IMAGES.background, bgOffset, 0, BACKGROUND_WIDTH, BACKGROUND_HEIGHT);
  ctx.drawImage(IMAGES.ground, gOffset, BACKGROUND_HEIGHT, WINDOW_WIDTH * ZOOM, GROUND_HEIGHT);
  bgOffset = (bgOffset - bgSpeed * dt) % bgLoop;
  gOffset = (gOffset - gSpeed * dt) % WINDOW_WIDTH;
});
