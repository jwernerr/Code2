"use strict";
var Solarsystem;
(function (Solarsystem) {
    window.addEventListener("load", handleLoad);
    let astrobodies1 = [];
    let astrobodies2 = [];
    let astrobodies3 = [];
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
        createPlanets();
        setInterval(update, 20);
    }
    function createPlanets() {
        const mercury = new Solarsystem.Astrobody([], 3, "orange", 6 * Math.PI, 20, "hihihoho");
        const sun = new Solarsystem.Astrobody([mercury], 10, "yellow", 0, 0, "sun lol", new Solarsystem.Vector(Solarsystem.crc2.canvas.width, Solarsystem.crc2.canvas.height));
        astrobodies1.push(sun);
        astrobodies2.push(mercury);
    }
    function update() {
        Solarsystem.crc2.fillStyle = "black";
        Solarsystem.crc2.fillRect(0, 0, Solarsystem.crc2.canvas.width, Solarsystem.crc2.canvas.height);
        for (const element of astrobodies1) {
            element.moveChildren(1, 1 / 50);
            element.draw();
        }
        for (const element of astrobodies2) {
            element.moveChildren(1, 1 / 50);
            element.draw();
        }
        for (const element of astrobodies3) {
            element.moveChildren(1, 1 / 50);
            element.draw();
        }
    }
})(Solarsystem || (Solarsystem = {}));
