namespace L09_Asteroids {
    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;

    let asteroids: Asteroid[] = [];

    function handleLoad(_event: Event): void {
        console.log("asteroids starting");
        let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        if (!canvas) {
            return;
        }
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        crc2.fillStyle = "black";
        crc2.strokeStyle = "white";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        createPaths();
        console.log("Asteroid paths: ", asteroidPaths);

        createAsteroids(5);

        //createShip();

        canvas.addEventListener("mousedown", loadLaser);
        canvas.addEventListener("mouseup", shootLaser);
        canvas.addEventListener("keypress", handleKeypress);
        canvas.addEventListener("mousemove", setHeading);

        window.setInterval(update, 20)
    }

    function createAsteroids(_nAsteroids: number): void {
        console.log("create asteroids");
        for (let i: number = 0; i < _nAsteroids; i++) {
            const asteroid: Asteroid = new Asteroid(1.0);
            asteroids.push(asteroid);
        }
    }

    function update(): void {
        console.log("update");
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        for (let asteroid of asteroids) {
            asteroid.move(1 / 50);
            asteroid.draw();
        }
    }

    function loadLaser(): void {

    }

    function shootLaser(_event: MouseEvent): void {
        console.log("shoot laser");
        let hotspot: Vector = new Vector(_event.clientX - crc2.canvas.offsetLeft, _event.clientY - crc2.canvas.offsetTop);
        let asteroidHit: Asteroid | null = getAsteroidHit(hotspot);
        if (asteroidHit) {
            breakAsteroid(asteroidHit);
        }
        console.log(asteroidHit)
    }

    function breakAsteroid(_asteroid: Asteroid): void {
        if (_asteroid.size > 0.3) {
            for (let i: number = 0; i < 2; i++) {
                const pos: Vector = _asteroid.position.copy();
                const fragment: Asteroid = new Asteroid(_asteroid.size / 2, pos);
                fragment.velocity.add(_asteroid.velocity)
                asteroids.push(fragment);
            }
        }
        let index: number = asteroids.indexOf(_asteroid);
        asteroids.splice(index, 1)
    }

    function getAsteroidHit(_hotspot): Asteroid | null {
        for (let asteroid of asteroids) {
            if (asteroid.isHit(_hotspot)) {
                return asteroid;
            }
        }
        return null;

    }

    function handleKeypress(): void {

    }

    function setHeading(): void {

    }
}