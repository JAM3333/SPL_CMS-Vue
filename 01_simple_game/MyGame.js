import { Circle } from "./actors/Circle.js";
import { Game, GameFramework } from "./GameFramework.js";
import { Rectangle } from "./actors/Rectangle.js";
class MyGame extends Game {
    constructor() {
        super();
        this.actors = [];
    }
    addActor(actor) {
        this.actors.push(actor);
    }
    init() {
        console.log("Game started!");
        const r1 = new Rectangle(30, 30, 50, 50);
        const r2 = new Rectangle(0, 0, 50, 50);
        const r3 = new Rectangle(100, 100, 50, 50);
        const c1 = new Circle(200, 200, 30, 30);
        this.addActor(r1);
        this.addActor(r2);
        this.addActor(r3);
        this.addActor(c1);
    }
    update(deltaTime) {
        for (const actor of this.actors) {
            actor.update(deltaTime);
        }
    }
    render(ctx) {
        for (const actor of this.actors) {
            actor.render(ctx);
        }
    }
}
const game = new MyGame();
const framework = new GameFramework(game, 800, 600);
framework.start();
