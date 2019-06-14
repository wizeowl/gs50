const canvas = document.getElementById('pong');
const ctx = canvas.getContext('2d');

let lastTick = 0;
watch(Object.values(KEYS));

init(canvas, ctx);
paintTitle(ctx);


window.requestAnimationFrame((tick) => {
  lastTick = tick;
  loop(tick);
});

const loop = (dt) => {
  paintBackground(ctx);
  paintTitle(ctx);
  update(dt);
  paintGame(ctx);

  window.requestAnimationFrame((tick) => {
    const newDt = tick - lastTick;
    lastTick = tick;
    loop(newDt);
  });
};
