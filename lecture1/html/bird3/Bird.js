class Bird {
  constructor(jumpLength) {
    this.image = IMAGES.bird;
    this.width = 76;
    this.height = 48;
    this.x = CENTER - this.width / 2;
    this.y = MIDDLE - this.height / 2;
    this.dy = 0;
  }

  jump() {
    this.dy -= GRAVITY * 4;
  }

  update(dt) {
    if (isDown(KEYS.SPACE)) {
      this.jump();
    }
    this.dy += GRAVITY;
    this.y += this.dy;
  }

  render(ctx) {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}
