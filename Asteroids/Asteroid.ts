namespace L09_Asteroids {
    export class Asteroid {
        position: Vector;
        velocity: Vector;
        type: number;
        size: number;

        constructor(_size: number) {
            console.log("Asteroid constructor");
        }

        move(_timeslice: number): void {
            console.log("Asteroid move");
        }

        draw(): void {
            console.log("asteroid draw");
        }
    }
}