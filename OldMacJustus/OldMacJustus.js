"use strict";
window.addEventListener("load", handleLoad);
let animals = [];
let foodSupplies = [];
let day = 0;
function handleLoad() {
    const animalNames = [];
    const animalTypes = [];
    const foods = [];
    const animalSounds = [];
    for (let i = 0; i < animalNames.length; i++) {
        const newAnimal = new Animal(animalNames[i], animalTypes[i], foods[i], animalSounds[i]);
        animals.push(newAnimal);
        if (foodSupplies.indexOf(foods[i]) === -1) {
            foodSupplies.push(foods[i]);
        }
    }
    document.getElementsByTagName("button")[0].addEventListener("click", startDay);
}
function startDay() {
    day++;
    document.getElementsByTagName("button")[0].innerHTML = "Start Day " + (day + 1);
    document.getElementById("dayheader").innerHTML = "Day " + day;
    const animaldiv = document.getElementById("animalaction");
    const fooddiv = document.getElementById("foodaction");
    animaldiv.innerHTML = "";
    fooddiv.innerHTML = "";
    for (let i = 0; i < animals.length; i++) {
        animals[i].sing(animaldiv);
        animals[i].eat(animaldiv);
    }
    for (let i = 0; i < foodSupplies.length; i++) {
        foodSupplies[i].report(fooddiv);
    }
}
