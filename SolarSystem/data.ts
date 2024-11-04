namespace Solarsystem {
    interface Data {
        orbit: Data[];
        size: number;
        color: string;
        speed: number;
        orbitradius: number;
        description: string;
        position?: Vector;
    }

    export const data: Data = {
        orbit
    }

}