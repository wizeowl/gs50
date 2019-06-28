class StateMachine {
  constructor(states) {
    this.empty = {
      render() {
      },
      update() {
      },
      enter() {
      },
      exit() {
      }
    };

    this.states = states || {};
    this.current = this.empty;
  }

  change(stateName, enterParams) {
    if (!this.states[stateName]) {
      console.warn(`unknown state: ${stateName}`);
    } else {
      this.current.exit();
      this.current = this.states[stateName];
      this.current.enter(enterParams);
    }
  }

  update(dt) {
    this.current.update(dt);
  }

  render(ctx) {
    this.current.render(ctx);
  }
}
