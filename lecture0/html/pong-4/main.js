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
  const text = state.mode === MODES.START ? 'START STATE' : 'PLAY STATE';

  paintBackground(ctx);
  paintTitle(ctx, text);
  update(dt);
  paintGame(ctx);

  window.requestAnimationFrame((tick) => {
    const newDt = tick - lastTick;
    lastTick = tick;
    loop(newDt);
  });
};
