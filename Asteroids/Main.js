"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crc2 = void 0;
window.addEventListener("load", handleLoad);
function handleLoad(_event) {
    console.log("asteroids starting");
    let canvas = document.querySelector("canvas");
    if (!canvas) {
        return;
    }
    exports.crc2 = canvas.getContext("2d");
    exports.crc2.fillStyle = "black";
    exports.crc2.strokeStyle = "white";
    createPaths();
    console.log("Asteroid paths: ", asteroidPaths);
}
//# sourceMappingURL=Main.js.map