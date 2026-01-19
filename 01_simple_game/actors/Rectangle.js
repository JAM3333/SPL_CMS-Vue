export class Rectangle {
    constructor(sizeX, sizeY, color, movmenent) {
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.color = color;
        this.movmenent = movmenent;
    }
    update(deltaTime) {
        this.movmenent.update(deltaTime);
    }
    render(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.movmenent.getPosition().x, this.movmenent.getPosition().y, this.sizeX, this.sizeY);
    }
}
