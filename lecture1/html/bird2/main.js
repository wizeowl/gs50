const canvas = document.getElementById('bird');
const ctx = canvas.getContext('2d');

canvas.width = WINDOW_WIDTH;
canvas.height = WINDOW_HEIGHT;

watch(Object.values(KEYS));

const background = new Background();
const ground = new Ground();
const bird = new Bird();

loop((dt) => {
  background.render(ctx);
  ground.render(ctx);
  bird.render(ctx);

  background.update(dt);
  ground.update(dt);
  bird.update(dt);
});
