const canvas = document.getElementById('pong');
const ctx = canvas.getContext('2d');

canvas.width = WINDOW_WIDTH;
canvas.height = WINDOW_HEIGHT;

let lastTick = 0;
watch(Object.values(KEYS));

let game = new Game();

document.onkeypress = ({ key }) => {
  if (key === 'Escape') {
    window.close();
  }
  if (key === 'Enter') {
    game.switchMode();
  }
};


window.requestAnimationFrame((tick) => {
  lastTick = tick;
  loop(tick);
});

const loop = (dt) => {
  game.render(ctx, dt);

  window.requestAnimationFrame((tick) => {
    const newDt = tick - lastTick;
    lastTick = tick;
    loop(newDt);
  });
};
