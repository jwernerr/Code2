"use strict";
const animals = [];
const foods = [];
let counter = 0;
window.addEventListener("load", handleLoad);
function handleLoad() {
    document.getElementsByTagName("button")[0].addEventListener("click", simulate);
    for (let i = 0; i < 6; i++) {
        const names = ["Jeep", "Sir Hubert", "Jaques", "Garlic", "Stinky", "Rodney"];
        const species = ["sheep", "rat", "pig", "hamster", "cat", "alligator"];
        const sounds = ["baa", "squeak", "oink", "squeak", "meow", "hiss"];
        const food1 = ["grass", "trash", "potatoes", "salad", "mice", "birds"];
        const newAnimal = new Animal(names[i], species[i], sounds[i], food1[i]);
        animals.push(newAnimal);
        foods.push(food1[i]);
        foods.push(Math.floor(Math.random() * 30 + 20));
    }
}
function simulate() {
    if (counter < animals.length) {
        animals[counter].sing(document.getElementById("sing"));
        animals[counter].eat(document.getElementById("eat"), foods);
        if (counter === animals.length - 1) {
            document.getElementsByTagName("button")[0].innerHTML = "Time to order food!";
        }
        else {
            document.getElementsByTagName("button")[0].innerHTML = "Next Animal!";
        }
        counter++;
    }
    else {
        const critFoods = [];
        for (let i = 1; i < foods.length; i + 2) {
            if (foods[i] <= 10) {
                critFoods.push(foods[i - 1]);
            }
        }
        switch (critFoods.length) {
            case 0:
                document.getElementById("sing").innerHTML = "Oh boy, what a lucky day! Old MacDonald doesn't have to buy any food, there's enough to feed all the animals for at least another day.";
            case 1:
                const boughtAmount = Math.floor(Math.random() * 10 + 30);
                document.getElementById("sing").innerHTML = "Old MacDonald buys " + boughtAmount + "kgs of " + critFoods[0] + ".";
                let index = foods.indexOf(critFoods[0]);
                foods[index + 1] = foods[index + 1] + boughtAmount;
            default:
                const boughtAmounts = [];
                let sentence = "";
                for (let i = 0; i < critFoods.length; i++) {
                    boughtAmounts.push(Math.floor(Math.random() * 10 + 30));
                    if (i === critFoods.length - 1) {
                        sentence = sentence + "and " + boughtAmounts[i] + "kgs of " + critFoods[i] + ".";
                    }
                    else {
                        sentence = sentence + boughtAmounts[i] + "kgs of " + critFoods[i] + ",";
                    }
                }
                for (let i = 0; i < critFoods.length; i++) {
                    index = foods.indexOf(critFoods[i]);
                    foods[index + 1] = foods[index + 1] + boughtAmounts[i];
                }
                document.getElementById("sing").innerHTML = "Poor Old MacDonald had to sell a kidney to afford this shopping trip! He bought " + sentence;
        }
        document.getElementById("eat").innerHTML = "";
        counter = 0;
        document.getElementsByTagName("button")[0].innerHTML = "Start another day!";
    }
}
