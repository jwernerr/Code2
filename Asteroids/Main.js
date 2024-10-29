"use strict";
var L09_Asteroids;
(function (L09_Asteroids) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("asteroids starting");
        let canvas = document.querySelector("canvas");
        if (!canvas) {
            return;
        }
        L09_Asteroids.crc2 = canvas.getContext("2d");
        L09_Asteroids.crc2.fillStyle = "black";
        L09_Asteroids.crc2.strokeStyle = "white";
        L09_Asteroids.createPaths();
        console.log("Asteroid paths: ", L09_Asteroids.asteroidPaths);
        let asteroid = new L09_Asteroids.Asteroid(1);
        console.log(asteroid);
    }
})(L09_Asteroids || (L09_Asteroids = {}));
//# sourceMappingURL=Main.js.map