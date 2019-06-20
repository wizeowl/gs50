const canvas = document.getElementById('pong');
const ctx = canvas.getContext('2d');
init(canvas, ctx);

let lastTick = 0;
watch(Object.values(KEYS));

let game = new Game();

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
