namespace Test{
    export class Moveable {
        position: Vector;
        velocity: Vector;

        constructor(_position?: Vector) {
            if (_position) {
                this.position = _position.copy();
            }
            else {
                this.position = new Vector(0, 0);
            }

            this.velocity = new Vector(0, 0);
        }

        move(_timeslice: number): void {
            const offset: Vector = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
        }

        draw(): void {
            //console.log("moveable draw");
        }
    }

    export class Vector {
        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            this.set(_x, _y);
        }

        set(_x: number, _y: number): void {
            this.x = _x;
            this.y = _y;
        }

        scale(_factor: number): void {
            this.x *= _factor;
            this.y *= _factor;
        }

        add(_addend: Vector): void {
            this.x += _addend.x;
            this.y += _addend.y;
        }

        random(_minLength: number, _maxLength: number): void {
            const length: number = _minLength + Math.random() * (_maxLength - _minLength);
            const direction: number = Math.random() * 2 * Math.PI;

            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        }

        copy(): Vector {
            const copiedVector: Vector = new Vector(this.x, this.y);
            return copiedVector;
        }
    }

    export class Projectile extends Moveable {
        lifetime: number = 2;

        constructor(_position: Vector, _velocity: Vector) {
            super(_position);

            this.velocity = _velocity.copy();
        }

        draw(): void {
            //console.log("asteroid draw");
        }

        move(_timeslice: number): void {
            super.move(_timeslice);
            this.lifetime -= _timeslice;
            if (this.lifetime < 0) {
                this.velocity = new Vector(0, 0);
            }

        }
    }

    export class Asteroid extends Moveable {
        position: Vector;
        velocity: Vector;
        type: number;
        size: number;

        constructor(_size: number, _position?: Vector) {
            super(_position);

            if (_position) {
                this.position = _position
            }
            else {
                this.position = new Vector(0, 0);
            }

            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 200);
            this.type = Math.floor(Math.random() * 4);
            this.size = _size;
        }

        draw(): void {
            //console.log("asteroid draw");
            
        }

        isHit(_hotspot: Vector): boolean {
            const hitsize: number = 50 * this.size;
            const difference: Vector = new Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
            return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize);
        }
    }
}