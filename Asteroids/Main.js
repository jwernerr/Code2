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
        L09_Asteroids.crc2.fillRect(0, 0, L09_Asteroids.crc2.canvas.width, L09_Asteroids.crc2.canvas.height);
        L09_Asteroids.createPaths();
        console.log("Asteroid paths: ", L09_Asteroids.asteroidPaths);
        let asteroid = new L09_Asteroids.Asteroid(1);
        console.log(asteroid);
        for (let i = 0; i < 100; i++) {
            L09_Asteroids.crc2.fillRect(0, 0, L09_Asteroids.crc2.canvas.width, L09_Asteroids.crc2.canvas.height);
            asteroid.draw();
            asteroid.move(0.1);
        }
    }
})(L09_Asteroids || (L09_Asteroids = {}));
//# sourceMappingURL=Main.js.map