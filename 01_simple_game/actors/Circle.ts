import { Actor } from "./Actor";
import { Movement } from "../movements/movement.js";

export class Circle implements Actor {
  constructor(
    private size: number,
    private color: string,
    private movmenent: Movement,
  ) {}

  update(deltaTime: number) {
    this.movmenent.update(deltaTime);
  }

  render(ctx: CanvasRenderingContext2D) {
    ctx.strokeStyle = this.color;
    ctx.beginPath();
    ctx.arc(
      this.movmenent.getPosition().x,
      this.movmenent.getPosition().y,
      this.size,
      0,
      2 * Math.PI,
    );
    ctx.stroke();
  }
}
