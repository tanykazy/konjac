import { Drawing } from "./drawing.js";


window.addEventListener('load', function () {
    const drawing = new Drawing();
    drawing.appendCanvas('app').sikaku(10, 10, 40, 50, false, '#00ff0088');

});


