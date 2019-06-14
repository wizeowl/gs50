const WINDOW_WIDTH = 1280;
const WINDOW_HEIGHT = 720;

const canvas = document.getElementById('pong');
const ctx = canvas.getContext('2d');

canvas.width = WINDOW_WIDTH;
canvas.style.width = WINDOW_WIDTH;
canvas.height = WINDOW_HEIGHT;
canvas.style.height = WINDOW_HEIGHT;

// black background
ctx.fillStyle = 'black';
ctx.fillRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);

const text = 'Hello Pong!';
const textWidth = ctx.measureText(text).width;
const textX = WINDOW_WIDTH / 2 - textWidth / 2;
const textY = WINDOW_HEIGHT / 2 - 6;
ctx.fillStyle = 'white';
ctx.fillText('Hello Pong!', textX, textY);
