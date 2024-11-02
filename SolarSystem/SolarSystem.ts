namespace Solarsystem {
    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;

    let astrobodies1: Astrobody[] = [];
    let astrobodies2: Astrobody[] = [];
    let astrobodies3: Astrobody[] = [];

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

        createPlanets();
        setInterval(update, 20)
    }

    function createPlanets(): void {
        const mercury: Astrobody = new Astrobody([], 3, "orange", 6 * Math.PI / 180, 20, "hihihoho");
        const sun: Astrobody = new Astrobody([mercury], 10, "yellow", 0, 0, "sun lol", new Vector(500, 400));
        astrobodies1.push(sun);
        astrobodies2.push(mercury);
    }

    function update(): void {
        crc2.fillStyle = "black";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
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
}