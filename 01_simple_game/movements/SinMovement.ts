export class SinMovement {
  constructor(
    private x: number,
    private y: number,
  ) {
    this.x = x;
    this.y = y;
  }

  update(deltaTime: number) {
    this.x += deltaTime * 100;
    this.y = Math.sin(this.x / 50) * 100 + 50;
  }
  getPosition() {
    return { x: this.x, y: this.y };
  }
}
