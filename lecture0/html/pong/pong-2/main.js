const WINDOW_WIDTH = 1280 / 2;
const WINDOW_HEIGHT = 720 / 2;

const canvas = document.getElementById('pong');
const ctx = canvas.getContext('2d');

ctx.imageSmoothingEnabled = true;

canvas.width = WINDOW_WIDTH;
canvas.height = WINDOW_HEIGHT;
canvas.style.width = `${WINDOW_WIDTH}px`;
canvas.style.height = `${WINDOW_HEIGHT}px`;
canvas.style.marginTop = `${WINDOW_HEIGHT / 2}px`;

// black background
ctx.fillStyle = 'rgb(40, 45, 52, 255)';
ctx.fillRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);

ctx.font = 'normal 12px codeman';
const text = 'HELLO PONG!';
const textSize = ctx.measureText(text);
const textX = WINDOW_WIDTH / 2 - textSize.width / 2;
const textY = 24;
ctx.fillStyle = 'white';
ctx.fillText(text, textX, textY);

const PADDLE_WIDTH = 10;
const PADDLE_HEIGHT = 36;
const PADDLE_MARGIN = 12;
const P1_INITIAL_POSITION = Math.random() * (WINDOW_HEIGHT - PADDLE_HEIGHT);
const P2_INITIAL_POSITION = Math.random() * (WINDOW_HEIGHT - PADDLE_HEIGHT);

const player1 = ctx.fillRect(
  PADDLE_MARGIN,
  P1_INITIAL_POSITION,
  PADDLE_WIDTH,
  PADDLE_HEIGHT
);

const player2 = ctx.fillRect(
  WINDOW_WIDTH - PADDLE_MARGIN - PADDLE_WIDTH,
  P2_INITIAL_POSITION,
  PADDLE_WIDTH,
  PADDLE_HEIGHT
);

const BALL_SIZE = 8;
const BALL_X = WINDOW_WIDTH / 2 - BALL_SIZE / 2;
const BALL_Y = WINDOW_HEIGHT / 2 - BALL_SIZE / 2;

ctx.fillRect(BALL_X, BALL_Y, BALL_SIZE, BALL_SIZE);

document.onkeydown = ({ key }) => {
  if (key === 'Escape') {
    window.close();
  }
};
