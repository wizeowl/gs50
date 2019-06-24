class Bird {
  constructor() {
    this.image = IMAGES.bird;
    this.width = 76;
    this.height = 48;
    this.x = CENTER - this.width / 2;
    this.y = MIDDLE - this.height / 2;

    this.dy = 0;
    this.padder = padder(JUMP_VECTOR_SIZE, 0);
    this.activations = arrayOf(JUMP_VECTOR_SIZE, 0);
  }

  monitorJump() {
    if (isDown(KEYS.SPACE)) {
      this.activations = [1].concat(this.activations).slice(0, JUMP_VECTOR_SIZE);
    } else {
      this.activations = [0].concat(this.activations).slice(0, JUMP_VECTOR_SIZE);
    }
    this.dy = -dotProduct(this.activations, WEIGHT_VECTOR) + GRAVITY;
  }

  update(dt) {
    this.monitorJump();
    this.y += this.dy;
  }

  render(ctx) {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}
