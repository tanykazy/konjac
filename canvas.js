export class Canvas {
    constructor(type, attributes) {
        this.type = type;
        this.attributes = attributes;
        this.canvas = document.createElement('canvas');
    }

    appendCanvas(targetId) {
        if (this.canvas.getContext) {
            this.context = this.canvas.getContext(this.type, this.attributes);
            if (this.context === null) {
                throw "the contextType doesn't match a possible drawing context, or differs from the first contextType requested";
            }
        } else {
            throw 'canvas unsupported';
        }

        const root = document.documentElement;
        const width = Math.floor(root.clientWidth * 0.9);
        const height = Math.floor(root.clientHeight * 0.9);
        this.setSize(width, height);

        const target = document.getElementById(targetId);
        target.appendChild(this.canvas);

        return this;
    }

    setSize(width, height) {
        this.canvas.setAttribute('width', width.toString(10));
        this.canvas.setAttribute('height', height.toString(10));
        return this;
    }
}
