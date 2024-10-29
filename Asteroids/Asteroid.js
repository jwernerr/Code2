"use strict";
var L09_Asteroids;
(function (L09_Asteroids) {
    class Asteroid {
        constructor(_size) {
            console.log("Asteroid constructor");
        }
        move(_timeslice) {
            console.log("Asteroid move");
        }
        draw() {
            console.log("asteroid draw");
        }
    }
    L09_Asteroids.Asteroid = Asteroid;
})(L09_Asteroids || (L09_Asteroids = {}));
//# sourceMappingURL=Asteroid.js.map