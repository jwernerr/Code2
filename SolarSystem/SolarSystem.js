"use strict";
var Solarsystem;
(function (Solarsystem) {
    window.addEventListener("load", handleLoad);
    let astrobodys = [];
    function handleLoad(_event) {
        console.log("asteroids starting");
        let canvas = document.querySelector("canvas");
        if (!canvas) {
            return;
        }
        Solarsystem.crc2 = canvas.getContext("2d");
        Solarsystem.crc2.fillStyle = "black";
        Solarsystem.crc2.strokeStyle = "white";
        Solarsystem.crc2.fillRect(0, 0, Solarsystem.crc2.canvas.width, Solarsystem.crc2.canvas.height);
    }
})(Solarsystem || (Solarsystem = {}));
