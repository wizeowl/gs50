class Bird extends Box {
  constructor() {
    super();
    this.image = IMAGES.bird;
    this.width = BIRD.WIDTH;
    this.height = BIRD.HEIGHT;
    this.x = CENTER - this.width / 2;
    this.y = MIDDLE - this.height / 2;

    this.dy = 0;
    this.padder = padder(JUMP_VECTOR_SIZE, 0);
    this.activations = arrayOf(JUMP_VECTOR_SIZE, 0);
  }

  passed(pipePair) {
    return this.edges.left > pipePair.leftEdge;
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
