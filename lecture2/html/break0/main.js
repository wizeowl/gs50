const canvas = document.getElementById('breakout');
const ctx = canvas.getContext('2d');

canvas.width = WINDOW_WIDTH;
canvas.height = WINDOW_HEIGHT;

watch(Object.values(KEYS));

const game = new Game(ctx);

(() => {
  loop((dt) => {
    game.run(dt);
  });
})();
