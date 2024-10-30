"use strict";
var Test;
(function (Test) {
    class Moveable {
        constructor(_position) {
            if (_position) {
                this.position = _position.copy();
            }
            else {
                this.position = new Vector(0, 0);
            }
            this.velocity = new Vector(0, 0);
        }
        move(_timeslice) {
            const offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
        }
        draw() {
            //console.log("moveable draw");
        }
    }
    Test.Moveable = Moveable;
    class Vector {
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        random(_minLength, _maxLength) {
            const length = _minLength + Math.random() * (_maxLength - _minLength);
            const direction = Math.random() * 2 * Math.PI;
            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        }
        copy() {
            const copiedVector = new Vector(this.x, this.y);
            return copiedVector;
        }
    }
    Test.Vector = Vector;
    class Projectile extends Moveable {
        constructor(_position, _velocity) {
            super(_position);
            this.lifetime = 2;
            this.velocity = _velocity.copy();
        }
        draw() {
            //console.log("asteroid draw");
        }
        move(_timeslice) {
            super.move(_timeslice);
            this.lifetime -= _timeslice;
            if (this.lifetime < 0) {
                this.velocity = new Vector(0, 0);
            }
        }
    }
    Test.Projectile = Projectile;
    class Asteroid extends Moveable {
        constructor(_size, _position) {
            super(_position);
            if (_position) {
                this.position = _position;
            }
            else {
                this.position = new Vector(0, 0);
            }
            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 200);
            this.type = Math.floor(Math.random() * 4);
            this.size = _size;
        }
        draw() {
            //console.log("asteroid draw");
        }
        isHit(_hotspot) {
            const hitsize = 50 * this.size;
            const difference = new Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
            return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize);
        }
    }
    Test.Asteroid = Asteroid;
})(Test || (Test = {}));
