class Box {
  constructor() {
    this.orientation = Box.ORIENTATIONS.NORMAL;
  }

  get isInverted() {
    return this.orientation === Box.ORIENTATIONS.INVERTED;
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
    if (this.edges.right < box.edges.left + Box.COLLISION_TOLERENCE.LEFT) {
      return false;
    }
    if (this.edges.left > box.edges.right - Box.COLLISION_TOLERENCE.RIGHT) {
      return false;
    }
    if (this.edges.top > box.edges.bottom - Box.COLLISION_TOLERENCE.BOTTOM) {
      return false;
    }
    if (this.edges.bottom < box.edges.top + Box.COLLISION_TOLERENCE.TOP) {
      return false;
    }
    return true;
  }
}

Box.COLLISION_TOLERENCE = {
  LEFT: 0,
  RIGHT: 0,
  TOP: 0,
  BOTTOM: 0,
};

Box.ORIENTATIONS = {
  NORMAL: 0,
  INVERTED: 1
};
