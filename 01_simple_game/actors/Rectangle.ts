import { Actor } from "./Actor";
import { Movement } from "../movements/movement.js";

export class Rectangle implements Actor {
  constructor(
    private sizeX: number,
    private sizeY: number,
    private color: string,
    private movmenent: Movement,
  ) {}

  update(deltaTime: number) {
    this.movmenent.update(deltaTime);
  }

  render(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.fillRect(
      this.movmenent.getPosition().x,
      this.movmenent.getPosition().y,
      this.sizeX,
      this.sizeY,
    );
  }
}
