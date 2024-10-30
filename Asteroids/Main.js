"use strict";
var L09_Asteroids;
(function (L09_Asteroids) {
    window.addEventListener("load", handleLoad);
    let asteroids = [];
    let projectile;
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
        createAsteroids(5);
        //createShip();
        canvas.addEventListener("mousedown", shootProjectile);
        canvas.addEventListener("mouseup", shootLaser);
        canvas.addEventListener("keypress", handleKeypress);
        canvas.addEventListener("mousemove", setHeading);
        window.setInterval(update, 20);
    }
    function createAsteroids(_nAsteroids) {
        console.log("create asteroids");
        for (let i = 0; i < _nAsteroids; i++) {
            const asteroid = new L09_Asteroids.Asteroid(1.0);
            asteroids.push(asteroid);
        }
    }
    function update() {
        console.log("update");
        L09_Asteroids.crc2.fillRect(0, 0, L09_Asteroids.crc2.canvas.width, L09_Asteroids.crc2.canvas.height);
        for (let asteroid of asteroids) {
            asteroid.move(1 / 50);
            asteroid.draw();
        }
        projectile.move(1 / 50);
        projectile.draw();
    }
    function loadLaser() {
    }
    function shootLaser(_event) {
        console.log("shoot laser");
        let hotspot = new L09_Asteroids.Vector(_event.clientX - L09_Asteroids.crc2.canvas.offsetLeft, _event.clientY - L09_Asteroids.crc2.canvas.offsetTop);
        let asteroidHit = getAsteroidHit(hotspot);
        if (asteroidHit) {
            breakAsteroid(asteroidHit);
        }
        console.log(asteroidHit);
    }
    function breakAsteroid(_asteroid) {
        if (_asteroid.size > 0.3) {
            for (let i = 0; i < 2; i++) {
                const pos = _asteroid.position.copy();
                const fragment = new L09_Asteroids.Asteroid(_asteroid.size / 2, pos);
                fragment.velocity.add(_asteroid.velocity);
                asteroids.push(fragment);
            }
        }
        let index = asteroids.indexOf(_asteroid);
        asteroids.splice(index, 1);
    }
    function getAsteroidHit(_hotspot) {
        for (let asteroid of asteroids) {
            if (asteroid.isHit(_hotspot)) {
                return asteroid;
            }
        }
        return null;
    }
    function handleKeypress() {
    }
    function setHeading() {
    }
    function shootProjectile(_event) {
        console.log("Shoot projectile");
        let origin = new L09_Asteroids.Vector(_event.clientX - L09_Asteroids.crc2.canvas.offsetLeft, _event.clientY - L09_Asteroids.crc2.canvas.offsetTop);
        let velocity = new L09_Asteroids.Vector(0, 0);
        velocity.random(100, 100);
        projectile = new L09_Asteroids.Projectile(origin, velocity);
    }
})(L09_Asteroids || (L09_Asteroids = {}));
//# sourceMappingURL=Main.js.map