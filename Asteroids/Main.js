"use strict";
window.addEventListener("load", handleLoad);
let crc2;
function handleLoad(_event) {
    console.log("asteroids starting");
    let canvas = document.querySelector("canvas");
    if (!canvas) {
        return;
    }
    crc2 = canvas.getContext("2d");
    crc2.fillStyle = "black";
    crc2.strokeStyle = "white";
    createPaths();
    console.log("Asteroid paths: ", asteroidPaths);
    let asteroid = new Asteroid(1);
    console.log(asteroid);
}
//# sourceMappingURL=Main.js.map