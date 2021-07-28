import { Canvas } from "./canvas.js";

export class Drawing extends Canvas {
    constructor() {
        super('2d');
    }

    sikaku(x, y, width, height, fill, rgba) {
        if (fill) {
            this.context.fillStyle = rgba;
            this.context.fillRect(x, y, width, height);
        } else {
            this.context.strokeStyle = rgba;
            this.context.strokeRect(x, y, width, height);
        }
        return this;
    }

}