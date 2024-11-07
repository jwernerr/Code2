namespace Dog {
    export abstract class Dog { //abstract class: only a concept/an idea, no instances can be created
        name: string;
        height: number;
        weight: number;
        color: string;
        sound: string = "woof";


        constructor(_name: string, _height: number, _weight: number, _color: string) {
            this.name = _name;
            this.height = _height;
            this.weight = _weight;
            this.color = _color;
        }

        abstract bark(): void //each subclass is forced to have an own implementation of this method

        cuddle(): void {
            console.log(this.name + " cuddles you adorably.")
        }

        static breed(_parent1: Dog, _parent2: Dog, _name: string): Dog { //static methods can be called on the object class, not on objects of the class
            let child: Dog = new Chihuahua(_name, 10, 1, _parent1.color);
            return child;
        }
    }

    export class Chihuahua extends Dog {
        sound: string = "ARFARFARFFFFFF";
        demonicPower: number;

        constructor(_name: string, _height: number, _weight: number, _color: string) {
            super(_name, _height, _weight, _color);
            this.demonicPower = Math.floor(Math.random() * 10 + 1);
        }

        cuddle(): void {
            if (this.demonicPower < 5) {
                super.cuddle();
            }
            else {
                console.log(this.name + "is a little demon and only allows you to cuddle them if it can bite you at the same time. Good luck")
            }
        }

        bark() {
            console.log(this.sound);
        }
    }

    export class Watchdog extends Dog {
        bark(): void {
            console.log(this.sound)
        }
    }
}