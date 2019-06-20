const canvas = document.getElementById('bird');
const ctx = canvas.getContext('2d');

canvas.width = WINDOW_WIDTH;
canvas.height = WINDOW_HEIGHT;

watch(Object.values(KEYS));

loop((dt) => {
  ctx.drawImage(IMAGES.background, 0, 0, BACKGROUND_WIDTH, BACKGROUND_HEIGHT);
  ctx.drawImage(IMAGES.ground, 0, BACKGROUND_HEIGHT, WINDOW_WIDTH, GROUND_HEIGHT);
});
