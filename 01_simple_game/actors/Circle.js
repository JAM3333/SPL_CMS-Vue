export class Circle {
    constructor(size, color, movmenent) {
        this.size = size;
        this.color = color;
        this.movmenent = movmenent;
    }
    update(deltaTime) {
        this.movmenent.update(deltaTime);
    }
    render(ctx) {
        ctx.strokeStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.movmenent.getPosition().x, this.movmenent.getPosition().y, this.size, 0, 2 * Math.PI);
        ctx.stroke();
    }
}
