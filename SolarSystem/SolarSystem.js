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
        const mercury = new Solarsystem.Astrobody([], 3, "orange", 6 * Math.PI / 180, 20, "hihihoho");
        const sun = new Solarsystem.Astrobody([mercury], 10, "yellow", 0, 0, "sun lol", new Solarsystem.Vector(500, 400));
        astrobodies1.push(sun);
        astrobodies2.push(mercury);
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
