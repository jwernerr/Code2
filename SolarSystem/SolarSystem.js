"use strict";
var Solarsystem;
(function (Solarsystem) {
    window.addEventListener("load", handleLoad);
    let timespeed = 0.5;
    const astrobodies1 = [];
    const astrobodies2 = [];
    const astrobodies3 = [];
    function handleLoad(_event) {
        console.log("asteroids starting");
        const canvas = document.querySelector("canvas");
        if (!canvas) {
            return;
        }
        Solarsystem.crc2 = canvas.getContext("2d");
        Solarsystem.crc2.fillStyle = "black";
        Solarsystem.crc2.strokeStyle = "white";
        Solarsystem.crc2.fillRect(0, 0, Solarsystem.crc2.canvas.width, Solarsystem.crc2.canvas.height);
        canvas.addEventListener("click", handleClick);
        const slider = document.getElementsByTagName("input")[0];
        slider.onchange = function () {
            timespeed = Number(slider.value);
        };
        createPlanets();
        setInterval(update, 20);
    }
    function createPlanets() {
        //create moons
        const earthMoon = new Solarsystem.Astrobody([], 1, "lightgray", 12 * 6 * Math.PI / 180, 17, "earth moon");
        const mercury = new Solarsystem.Astrobody([], 4.9, "#b1adad", (6 * Math.PI / 180) / 0.3, 0.3 * 100, "hihihoho");
        const venus = new Solarsystem.Astrobody([], 12.1, "#e3bb76", (6 * Math.PI / 180) / 0.6, 0.65 * 100, "venus hihi");
        const earth = new Solarsystem.Astrobody([earthMoon], 12.76, "#6b93d6", 6 * Math.PI / 180, 1 * 100, "earth:3");
        const mars = new Solarsystem.Astrobody([], 6.8, "#e77d11", (6 * Math.PI / 180) / 2, 1.52 * 100, "mars");
        const jupiter = new Solarsystem.Astrobody([], 30, "#d8ca9d", (6 * Math.PI / 180) / 12, 2 * 100, "jupiter");
        const saturn = new Solarsystem.Astrobody([], 25, "#fceead", (6 * Math.PI / 180) / 30, 2.7 * 100, "saturn");
        const uranus = new Solarsystem.Astrobody([], 15, "#afdbf5", (6 * Math.PI / 180) / 84, 3.5 * 100, "ur anus lollll");
        const neptune = new Solarsystem.Astrobody([], 14.7, "#3d5ef9", (6 * Math.PI / 180) / 165, 4.2 * 100, "neptune");
        const sun = new Solarsystem.Astrobody([mercury, venus, earth, mars, jupiter, saturn, uranus, neptune], 20, "yellow", 0, 0, "sun lol", new Solarsystem.Vector(500, 400));
        astrobodies1.push(sun);
        astrobodies2.push(mercury, venus, earth, mars, jupiter, saturn, uranus, neptune);
        astrobodies3.push(earthMoon);
    }
    function update() {
        Solarsystem.crc2.fillStyle = "black";
        Solarsystem.crc2.fillRect(0, 0, Solarsystem.crc2.canvas.width, Solarsystem.crc2.canvas.height);
        for (const element of astrobodies1) {
            element.moveChildren(timespeed, 1 / 50);
            element.draw();
        }
        for (const element of astrobodies2) {
            element.moveChildren(timespeed, 1 / 50);
            element.draw();
        }
        for (const element of astrobodies3) {
            element.moveChildren(timespeed, 1 / 50);
            element.draw();
        }
    }
    function handleClick(_event) {
        const div = document.getElementsByTagName("div")[0];
        const click = new Solarsystem.Vector(_event.clientX - Solarsystem.crc2.canvas.offsetLeft, _event.clientY - Solarsystem.crc2.canvas.offsetTop);
        for (const element of astrobodies1) {
            element.checkClick(click, div);
        }
        for (const element of astrobodies2) {
            element.checkClick(click, div);
        }
        for (const element of astrobodies3) {
            element.checkClick(click, div);
        }
    }
})(Solarsystem || (Solarsystem = {}));
