import { Canvas, Size } from "./canvas.js";

export class Konjac {
    constructor(id) {
        this.canvases = [];
        this.entities = new Map();

        this.canvas = new Canvas('2d', {
            alpha: true,
            desynchronized: true
        });
        this.canvas.appendCanvas(id);

        this.canvases.push(this.canvas);
    }

    create(name, width, height, color) {
        const entity = new Entity(
            this.canvases[this.canvases.length - 1],
            width,
            height,
            color);
        this.entities.set(name, entity);
        return entity;
        // return this;
    }

    // draw(name, x, y, z) {
    //     const entity = this.entities.get(name);
    //     entity.draw.bind(entity)(x, y, z);
    //     return this;
    // }

    // clear(name) {
    //     const entity = this.entities.get(name);
    //     entity.clear.bind(entity)();
    //     return this;
    // }

    // move(name, x, y, z) {
    //     const entity = this.entities.get(name);
    //     entity.move.bind(entity)(x, y, z);
    //     return this;
    // }

    // moveAnimation(name, rate, x, y, z) {
    //     const entity = this.entities.get(name);
    //     entity.moveAnimation.bind(entity)(rate, x, y, z);
    //     return this;
    // }
}

export class Entity {
    constructor(canvas, width, height, color) {
        this.canvas = canvas;
        this.size = new Size(width, height);
        this.color = color;
        this.position = new Position(0, 0, 0);
    }

    draw(x, y, z) {
        this.position = new Position(x, y, z);
        this.canvas.context.fillStyle = this.color;
        this.canvas.context.fillRect(
            this.position.x,
            this.position.y,
            this.size.width,
            this.size.height);
        return this;
    }

    clear() {
        this.canvas.context.clearRect(
            this.position.x,
            this.position.y,
            this.size.width,
            this.size.height);
        return this;
    }

    move(x, y, z) {
        this.clear();
        this.draw(
            x,
            y,
            z);
        return this;
    }

    moveAnimation(step, x, y, z) {
        frameRequestCallback.call(this, {
            x: Math.abs(x - this.position.x),
            y: Math.abs(y - this.position.y),
            z: Math.abs(z - this.position.z)
        }, {
            x: Math.ceil((x - this.position.x) / step),
            y: Math.ceil((y - this.position.y) / step),
            z: Math.ceil((z - this.position.z) / step)
        }, {
            x: 0,
            y: 0,
            z: 0
        });
        return this;
    }
}

function frameRequestCallback(range, diff, progress, timestamp) {
    if (progress.x < range.x && progress.y < range.y) {
        let nx = this.position.x + diff.x;
        let ny = this.position.y + diff.y;
        let nz = this.position.z + diff.z;
        if (progress.x > range.x) {
            nx = this.position.x;
        }
        if (progress.y > range.y) {
            ny = this.position.y;
        }
        this.move(
            nx,
            ny,
            nz);
        progress.x += diff.x;
        progress.y += diff.y;
        progress.z += diff.z;
        window.requestAnimationFrame(frameRequestCallback.bind(this, range, diff, progress));
    }
}

class Position {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    set x(x) {
        this._x = Math.floor(x);
    }
    get x() {
        return this._x;
    }
    set y(y) {
        this._y = Math.floor(y);
    }
    get y() {
        return this._y;
    }
    set z(z) {
        this._z = Math.floor(z);
    }
    get z() {
        return this._z;
    }
}
