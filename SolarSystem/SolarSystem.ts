namespace Solarsystem {
    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;

    let astrobodys: Astrobody[] = [];

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
    }
}