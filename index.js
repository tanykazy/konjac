import { Konjac } from "./konjac.js";


window.addEventListener('load', function () {
    const konjac = new Konjac('app');
    let e = konjac.create('sikaku', 50, 50, '#ff0000ff');

    e.move(0, 0, 0);


});


