"use strict";
var Classes;
(function (Classes) {
    class Vector {
        constructor(_x, _y) {
            this.x = 0;
            this.y = 0;
            this.set(_x, _y);
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
    }
    const v1 = new Vector(1, 2);
    v1.set(2, 5);
    v1.scale(2);
    console.log(v1);
})(Classes || (Classes = {}));
