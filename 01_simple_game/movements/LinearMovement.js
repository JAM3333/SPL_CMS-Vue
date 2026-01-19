export class LinearMovement {
    constructor(x, y, vx, vy) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
    }
    update(deltaTime) {
        this.x += this.vx * deltaTime;
        this.y += -this.vy * deltaTime;
    }
    getPosition() {
        return { x: this.x, y: this.y };
    }
}
