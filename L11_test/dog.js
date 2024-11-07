"use strict";
var Dog;
(function (Dog_1) {
    class Dog {
        constructor(_name, _height, _weight, _color) {
            this.sound = "woof";
            this.name = _name;
            this.height = _height;
            this.weight = _weight;
            this.color = _color;
        }
        cuddle() {
            console.log(this.name + " cuddles you adorably.");
        }
        static breed(_parent1, _parent2, _name) {
            let child = new Chihuahua(_name, 10, 1, _parent1.color);
            return child;
        }
    }
    Dog_1.Dog = Dog;
    class Chihuahua extends Dog {
        constructor(_name, _height, _weight, _color) {
            super(_name, _height, _weight, _color);
            this.sound = "ARFARFARFFFFFF";
            this.demonicPower = Math.floor(Math.random() * 10 + 1);
        }
        cuddle() {
            if (this.demonicPower < 5) {
                super.cuddle();
            }
            else {
                console.log(this.name + "is a little demon and only allows you to cuddle them if it can bite you at the same time. Good luck");
            }
        }
        bark() {
            console.log(this.sound);
        }
    }
    Dog_1.Chihuahua = Chihuahua;
    class Watchdog extends Dog {
        bark() {
            console.log(this.sound);
        }
    }
    Dog_1.Watchdog = Watchdog;
})(Dog || (Dog = {}));
