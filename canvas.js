export class Canvas {
    constructor(type, attributes) {
        this.type = type;
        this.attributes = attributes;

        const root = document.documentElement;
        this.size = new Size(root.clientWidth, root.clientHeight);

        this.canvas = document.createElement('canvas');
    }

    appendCanvas(targetId) {
        this.setSize(this.size.width, this.size.height);
        const target = document.getElementById(targetId);
        target.appendChild(this.canvas);

        if (this.canvas.getContext) {
            this.context = this.canvas.getContext(this.type, this.attributes);
            if (this.context === null) {
                throw "the contextType doesn't match a possible drawing context, or differs from the first contextType requested";
            }
        } else {
            throw 'canvas unsupported';
        }

        return this;
    }

    setSize(width, height) {
        this.size.width = width;
        this.size.height = height;
        this.canvas.setAttribute('width', this.size.width.toString(10));
        this.canvas.setAttribute('height', this.size.height.toString(10));
        return this;
    }
}

export class Size {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    valueOf() {
        return {
            width: this.width,
            height: this.height
        };
    }
    get width() {
        return this._width;
    }
    set width(width) {
        this._width = Math.floor(width);
    }
    get height() {
        return this._height;
    }
    set height(height) {
        this._height = Math.floor(height);
    }
}
