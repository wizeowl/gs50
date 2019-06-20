class Bird {
  constructor(jumpLength) {
    this.image = IMAGES.bird;
    this.width = 76;
    this.height = 48;
    this.x = CENTER - this.width / 2;
    this.y = MIDDLE - this.height / 2;
    this.jumpLength = jumpLength || 250;
    this.timeSinceLastJump = -500;

    this.weights = arrayOf(16).map((e, i) => i * .1);
    this.shift = sum(this.weights) / 2;
    this.padder = padStart(16, 0);
    this.activations = arrayOf(16, 0);
  }

  get dy() {
    return Math.tanh((this.timeSinceLastJump - this.jumpLength) / this.jumpLength);
  }

  jump() {
    this.timeSinceLastJump = 0;
  }

  update(dt) {
    if (isDown(KEYS.SPACE)) {
      this.jump();
      this.activations = this.activations.concat([1]).slice(-16);
    } else {
      this.activations = this.activations.concat([0]).slice(-16);
    }
    this.timeSinceLastJump += dt;
    const dy = -dotProduct(this.activations, this.weights) + this.shift;
    this.y += dy;
  }

  render(ctx) {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}
