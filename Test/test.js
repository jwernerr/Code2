"use strict";
var Test;
(function (Test) {
    let moveables = [];
    moveables.push(new Test.Asteroid(1));
    moveables.push(new Test.Projectile(new Test.Vector(0, 0), new Test.Vector(0, 0)));
    console.log(moveables);
})(Test || (Test = {}));
