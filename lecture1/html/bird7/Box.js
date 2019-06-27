class Box {
  constructor() {
    this.orientation = ORIENTATIONS.NORMAL;
  }

  get isInverted() {
    return this.orientation === ORIENTATIONS.INVERTED;
  }

  get edges() {
    return {
      top: this.isInverted ? -this.y - this.height : this.y,
      right: this.x + this.width,
      bottom: this.isInverted ? -this.y : this.y + this.height,
      left: this.x
    };
  }

  collides(box) {
    if (this.edges.right < box.edges.left + COLLISION_TOLERENCE) {
      return false;
    }
    if (this.edges.left > box.edges.right - COLLISION_TOLERENCE) {
      return false;
    }
    if (this.edges.top > box.edges.bottom - COLLISION_TOLERENCE) {
      return false;
    }
    if (this.edges.bottom < box.edges.top + COLLISION_TOLERENCE) {
      return false;
    }
    return true;
  }
}
