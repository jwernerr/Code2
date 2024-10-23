"use strict";
class Animal {
    constructor(_name, _species, _sound, _food) {
        this.name = "Helga";
        this.species = "pig";
        this.sound = "oink";
        this.food = "potatoes";
        this.amount = 10;
        this.songtext = "lalala";
        this.set(_name, _species, _sound, _food);
    }
    set(_name, _species, _sound, _food) {
        this.name = _name;
        this.species = _species;
        this.sound = _sound;
        this.food = _food;
        this.amount = Math.floor(Math.random() * 10 + 1);
        let article = "a";
        if (!(["a", "e", "i", "o", "u"].indexOf(this.species.charAt(0)) === -1)) { //yes i know there are exceptions, no i dont want to take this further
            article = "an";
        }
        this.songtext = "Old MacDonald had a farm, E-I-E-I-O\nAnd on that farm he had " + article + " " + this.species + " E-I-E-I-O\nWith a " + this.sound + "-" + this.sound + " here and a " + this.sound + "-" + this.sound + " there\nHere a " + this.sound + ", there a " + this.sound + ", everywhere a " + this.sound + "-" + this.sound;
    }
    sing(_element) {
        _element.innerHTML = this.name + " the " + this.species + ":\n\"" + this.songtext + "\"";
    }
    eat(_element, _foods) {
        _foods[_foods.indexOf(this.food) + 1] = _foods[_foods.indexOf(this.food) + 1] - this.amount;
        _element.innerHTML = this.name + " the " + this.species + " ate " + this.amount + " kgs of " + this.food + "!\nThere are " + _foods[_foods.indexOf(this.food) + 1] + "kgs of " + this.food + " left.";
    }
}
