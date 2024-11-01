namespace Solarsystem {
    export class Astrobody {
        orbit: Astrobody[];
        size: number;
        color: string;
        speed: number;
        orbitradius: number;
        description: string;
        positiondeg: number;
        position: Vector;

        constructor(_orbit: Astrobody[], _size: number, _color: string, _speed: number, _orbitradius: number, _description: string, _position?: Vector) {
            this.orbit = _orbit;
            this.size = _size;
            this.color = _color;
            this.speed = _speed;
            this.orbitradius = _orbitradius;
            this.description = _description;
            this.positiondeg = 0;
            if (_position) {
                this.position = _position;
            }
            else {
                this.position = new Vector(0, 0);
            }
        }

        assignChildPositions(): void {
            for (const element of this.orbit) {
                const addend: Vector = new Vector(Math.cos(element.positiondeg), Math.sin(element.positiondeg));
                addend.scale(element.orbitradius);
                element.position = addend.add(this.position)
            }
        }

        moveChildren(_timespeed: number, _timeslice: number): void {
            for (const element of this.orbit) {
                element.positiondeg += (element.speed * _timespeed * _timeslice);
                const addend: Vector = new Vector(Math.cos(element.positiondeg), Math.sin(element.positiondeg));
                addend.scale(element.orbitradius);
                element.position = addend.add(this.position);
            }
        }

        draw(): void {
            crc2.arc(this.position.x, this.position.y, this.size, 0, 2 * Math.PI);
        }

        checkClick(_click: Vector): boolean {
            const difference: Vector = new Vector(_click.x - this.position.x, _click.y - this.position.y);
            return (difference.x <= this.size && difference.y <= this.size);
        }
    }
}