class Pipes {
  constructor() {
    this.interval = 1000;
    this.counter = 0;
    this.pipes = [];
  }

  addPipe() {
    this.pipes.push(new Pipe());
    this.pipes = this.pipes.filter(pipe => pipe.x > -pipe.width);
  }

  update(dt) {
    this.counter += dt;
    this.pipes.forEach(pipe => pipe.update(dt));

    if (this.counter >= this.interval) {
      this.counter = 0;
      this.addPipe();
    }
  }

  render(ctx) {
    this.pipes.forEach(pipe => pipe.render(ctx));
  }
}
