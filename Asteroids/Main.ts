namespace L09_Asteroids {
    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;

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

        let asteroid: Asteroid = new Asteroid(1);
        console.log(asteroid);

        for (let i: number = 0; i < 100; i++) {
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
            asteroid.draw();
            asteroid.move(0.1);
        }


    }
}