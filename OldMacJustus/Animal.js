"use strict";
class Animal {
    constructor(_name, _type, _food, _sound) {
        this.set(_name, _type, _food, _sound);
    }
    set(_name, _type, _food, _sound) {
        this.name = _name;
        this.type = _type;
        this.food = _food;
        this.sound = _sound;
        this.foodConsumption = Math.floor(Math.random() * 15 + 1);
    }
    sing(_element) {
        const para = document.createElement("p");
        para.innerHTML = "Old MacDonald had a farm, E-I-E-I-O<br>And on that farm he had a" + this.type + " E-I-E-I-O<br>With a " + this.sound + "-" + this.sound + " here and a " + this.sound + "-" + this.sound + " there<br>Here a " + this.sound + ", there a " + this.sound + ", everywhere a " + this.sound + "-" + this.sound;
        _element.appendChild(para);
    }
    eat(_element) {
        const para = document.createElement("p");
        para.innerHTML = this.name + " the " + this.type + " has eaten " + this.foodConsumption + "kgs of " + this.food.type + ".";
        _element.appendChild(para);
        this.food.stock -= this.foodConsumption;
    }
}
