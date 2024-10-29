"use strict";
window.addEventListener("load", handleLoad);
const animals = [];
const foodSupplies = [];
let day = 0;
function handleLoad() {
    const animalNames = ["Sir Hubert", "Garlic", "Goobie", "Jesus", "Noodle", "Rodney"];
    const animalTypes = ["rat", "hamster", "mouse", "raccoon", "cat", "alligator"];
    const animalSounds = ["squeak", "squeak", "squeak", "hiss", "meow", "hiss"];
    const foodNames = ["cheese", "salad", "cheese", "trash", "meat", "meat"];
    for (let i = 0; i < animalNames.length; i++) {
        let animalFood = new Food("");
        let exists = false;
        for (let j = 0; j < foodSupplies.length; j++) {
            if (foodSupplies[j].type === foodNames[i]) {
                exists = true;
                animalFood = foodSupplies[j];
            }
        }
        if (!exists) {
            animalFood = new Food(foodNames[i]);
            foodSupplies.push(animalFood);
        }
        let newAnimal;
        if (animalTypes[i] === "rat") {
            newAnimal = new Rat(animalNames[i], animalTypes[i], animalFood, animalSounds[i]);
        }
        else if (animalTypes[i] === "hamster") {
            newAnimal = new Hamster(animalNames[i], animalTypes[i], animalFood, animalSounds[i]);
        }
        else if (animalTypes[i] === "mouse") {
            newAnimal = new Mouse(animalNames[i], animalTypes[i], animalFood, animalSounds[i]);
        }
        else if (animalTypes[i] === "raccoon") {
            newAnimal = new Raccoon(animalNames[i], animalTypes[i], animalFood, animalSounds[i]);
        }
        else if (animalTypes[i] === "cat") {
            newAnimal = new Cat(animalNames[i], animalTypes[i], animalFood, animalSounds[i]);
        }
        else if (animalTypes[i] === "alligator") {
            newAnimal = new Alligator(animalNames[i], animalTypes[i], animalFood, animalSounds[i]);
        }
        else {
            newAnimal = new Animal(animalNames[i], animalTypes[i], animalFood, animalSounds[i]);
        }
        animals.push(newAnimal);
    }
    document.getElementsByTagName("button")[0].addEventListener("click", startDay);
}
function startDay() {
    day++;
    document.getElementsByTagName("button")[0].innerHTML = "Start Day " + (day + 1);
    document.getElementById("dayheader").innerHTML = "Day " + day;
    const animaldiv = document.getElementById("animalaction");
    const fooddiv = document.getElementById("foodaction");
    const actiondiv = document.getElementById("actiondiv");
    animaldiv.innerHTML = "";
    fooddiv.innerHTML = "";
    for (let i = 0; i < animals.length; i++) {
        animals[i].sing(animaldiv);
        animals[i].eat(animaldiv);
        if (Math.random() < 0.5) {
            const para = document.createElement("p");
            para.innerHTML = animals[i].doSpecialAction();
            actiondiv.appendChild(para);
        }
    }
    for (let i = 0; i < foodSupplies.length; i++) {
        foodSupplies[i].report(fooddiv);
    }
    for (let i = 0; i < foodSupplies.length; i++) {
        foodSupplies[i].restock(fooddiv);
    }
}
