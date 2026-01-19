export class LinearMovement {
  constructor(
    private x: number,
    private y: number,
    private vx: number,
    private vy: number,
  ) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
  }
  update(deltaTime: number) {
    this.x += this.vx * deltaTime;
    this.y += -this.vy * deltaTime;
  }
  getPosition() {
    return { x: this.x, y: this.y };
  }
}
