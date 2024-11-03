namespace Solarsystem {
    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;

    let timespeed: number = 0.5;

    const astrobodies1: Astrobody[] = [];
    const astrobodies2: Astrobody[] = [];
    const astrobodies3: Astrobody[] = [];

    function handleLoad(_event: Event): void {
        console.log("asteroids starting");
        const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        if (!canvas) {
            return;
        }
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        crc2.fillStyle = "black";
        crc2.strokeStyle = "white";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        canvas.addEventListener("click", handleClick)

        const slider: HTMLInputElement = document.getElementsByTagName("input")[0];
        slider.onchange = function (): void {
            timespeed = Number(slider.value);
        }

        createPlanets();
        setInterval(update, 20);
    }

    function createPlanets(): void {
        //create moons
        const earthMoon: Astrobody = new Astrobody([], 1, "lightgray", 12 * 6 * Math.PI / 180, 17, "earth moon");

        const marsMoons: Astrobody[] = []
        for (let i: number = 0; i < 2; i++) {
            const marsMoon: Astrobody = new Astrobody([], 1, "lightgray", 12 * 6 * Math.PI / 180, 11, "mars moon" + (i + 1));
            marsMoon.positionrad = (2 * Math.PI) / 2 * i
            marsMoons.push(marsMoon);
            astrobodies3.push(marsMoon);
        }

        const jupiterMoons: Astrobody[] = [];
        for (let i: number = 0; i < 95; i++) {
            const jupiterMoon: Astrobody = new Astrobody([], 1, "lightgray", 12 * 6 * Math.PI / 180, Math.floor(Math.random() * 10 + 35), "jupiter moon" + (i + 1));
            jupiterMoon.positionrad = (2 * Math.PI) / 95 * i
            jupiterMoons.push(jupiterMoon);
            astrobodies3.push(jupiterMoon);
        }

        const saturnMoons: Astrobody[] = [];
        for (let i: number = 0; i < 146; i++) {
            const saturnMoon: Astrobody = new Astrobody([], 1, "lightgray", 12 * 6 * Math.PI / 180, Math.floor(Math.random() * 10 + 30), "saturn moon" + (i + 1));
            saturnMoon.positionrad = (2 * Math.PI) / 146 * i
            saturnMoons.push(saturnMoon);
            astrobodies3.push(saturnMoon);
        }

        const uranusMoons: Astrobody[] = [];
        for (let i: number = 0; i < 28; i++) {
            const uranusMoon: Astrobody = new Astrobody([], 1, "lightgray", 12 * 6 * Math.PI / 180, Math.floor(Math.random() * 10 + 20), "saturn moon" + (i + 1));
            uranusMoon.positionrad = (2 * Math.PI) / 28 * i
            uranusMoons.push(uranusMoon);
            astrobodies3.push(uranusMoon);
        }

        const neptuneMoons: Astrobody[] = [];
        for (let i: number = 0; i < 16; i++) {
            const neptuneMoon: Astrobody = new Astrobody([], 1, "lightgray", 12 * 6 * Math.PI / 180, Math.floor(Math.random() * 10 + 20), "saturn moon" + (i + 1));
            neptuneMoon.positionrad = (2 * Math.PI) / 16 * i
            neptuneMoons.push(neptuneMoon);
            astrobodies3.push(neptuneMoon);
        }

        const mercury: Astrobody = new Astrobody([], 4.9, "#b1adad", (6 * Math.PI / 180) / 0.3, 0.3 * 100, "hihihoho");
        const venus: Astrobody = new Astrobody([], 12.1, "#e3bb76", (6 * Math.PI / 180) / 0.6, 0.65 * 100, "venus hihi");
        const earth: Astrobody = new Astrobody([earthMoon], 12.76, "#6b93d6", 6 * Math.PI / 180, 1 * 100, "earth:3");
        const mars: Astrobody = new Astrobody(marsMoons, 6.8, "#e77d11", (6 * Math.PI / 180) / 2, 1.52 * 100, "mars");
        const jupiter: Astrobody = new Astrobody(jupiterMoons, 30, "#d8ca9d", (6 * Math.PI / 180) / 12, 2.2 * 100, "jupiter");
        const saturn: Astrobody = new Astrobody(saturnMoons, 25, "#fceead", (6 * Math.PI / 180) / 30, 3.1 * 100, "saturn");
        const uranus: Astrobody = new Astrobody(uranusMoons, 15, "#afdbf5", (6 * Math.PI / 180) / 84, 3.9 * 100, "ur anus lollll");
        const neptune: Astrobody = new Astrobody(neptuneMoons, 14.7, "#3d5ef9", (6 * Math.PI / 180) / 165, 4.6 * 100, "neptune");

        const sun: Astrobody = new Astrobody([mercury, venus, earth, mars, jupiter, saturn, uranus, neptune], 20, "yellow", 0, 0, "sun lol", new Vector(500, 400));
        astrobodies1.push(sun);
        astrobodies2.push(mercury, venus, earth, mars, jupiter, saturn, uranus, neptune);
        astrobodies3.push(earthMoon);
    }

    function update(): void {
        crc2.fillStyle = "black";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
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

    function handleClick(_event: MouseEvent): void {
        const div: HTMLDivElement = <HTMLDivElement>document.getElementsByTagName("div")[0];
        const click: Vector = new Vector(_event.clientX - crc2.canvas.offsetLeft, _event.clientY - crc2.canvas.offsetTop)
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
}