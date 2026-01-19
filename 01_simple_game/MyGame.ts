import { Circle } from "./actors/Circle.js";
import { Game, GameFramework } from "./GameFramework.js";
import { Rectangle } from "./actors/Rectangle.js";
import { Actor } from "./actors/Actor.js";
import { SinMovement } from "./movements/SinMovement.js";
import { LinearMovement } from "./movements/LinearMovement.js";

class MyGame extends Game {
  private actors: Actor[] = [];
  constructor() {
    super();
  }

  addActor(actor: Actor) {
    this.actors.push(actor);
  }
  init(): void {
    console.log("Game started!");
    const r1 = new Rectangle(30, 30, "red", new SinMovement(100, 100));
    const r2 = new Rectangle(
      10,
      50,
      "blue",
      new LinearMovement(700, 100, -100, 30),
    );
    const r3 = new Rectangle(100, 100, "purple", new SinMovement(10, 10));
    const c1 = new Circle(20, "green", new LinearMovement(50, 50, 20, -30));
    this.addActor(r1);
    this.addActor(r2);
    this.addActor(r3);
    this.addActor(c1);
  }

  update(deltaTime: number): void {
    for (const actor of this.actors) {
      actor.update(deltaTime);
    }
  }

  render(ctx: CanvasRenderingContext2D): void {
    for (const actor of this.actors) {
      actor.render(ctx);
    }
  }
}

const game = new MyGame();

const framework = new GameFramework(game, 800, 600);
framework.start();
