import { Konjac } from "./konjac.js";


window.addEventListener('load', function () {
    const konjac = new Konjac('app');
    let e = konjac.create('sikaku', 50, 50, '#ff0000ff');

    // e.move('sikaku', 1, 0, 0, 0);
    // e.moveAnimation('sikaku', 0.01, 90, 50, 0);
    e.move(0, 0, 0);
    e.moveAnimation(108, 503, 905, 0);


});


