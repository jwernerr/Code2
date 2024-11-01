"use strict";
var Solarsystem;
(function (Solarsystem) {
    class Astrobody {
        constructor(_orbit, _size, _color, _speed, _orbitradius, _description, _position) {
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
                this.position = new Solarsystem.Vector(0, 0);
            }
        }
        assignChildPositions() {
            for (const element of this.orbit) {
                const addend = new Solarsystem.Vector(Math.cos(element.positiondeg), Math.sin(element.positiondeg));
                addend.scale(element.orbitradius);
                element.position = addend.add(this.position);
            }
        }
        moveChildren(_timespeed, _timeslice) {
            for (const element of this.orbit) {
                element.positiondeg += (element.speed * _timespeed * _timeslice);
                const addend = new Solarsystem.Vector(Math.cos(element.positiondeg), Math.sin(element.positiondeg));
                addend.scale(element.orbitradius);
                element.position = addend.add(this.position);
            }
        }
        draw() {
            Solarsystem.crc2.arc(this.position.x, this.position.y, this.size, 0, 2 * Math.PI);
        }
        checkClick(_click) {
            const difference = new Solarsystem.Vector(_click.x - this.position.x, _click.y - this.position.y);
            return (difference.x <= this.size && difference.y <= this.size);
        }
    }
    Solarsystem.Astrobody = Astrobody;
})(Solarsystem || (Solarsystem = {}));
