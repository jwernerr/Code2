window.addEventListener("load", handleLoad);

const animals: Animal[] = [];
const foodSupplies: Food[] = [];
let day: number = 0;
function handleLoad(): void {
    const animalNames: string[] = ["Sir Hubert", "Garlic", "Goobie", "Jesus", "Noodle", "Rodney"];
    const animalTypes: string[] = ["rat", "hamster", "mouse", "raccoon", "cat", "alligator"];
    const animalSounds: string[] = ["squeak", "squeak", "squeak", "hiss", "meow", "hiss"];
    const foodNames: string[] = ["cheese", "salad", "cheese", "trash", "meat", "meat"]

    for (let i: number = 0; i < animalNames.length; i++) {
        let animalFood: Food = new Food("");
        let exists: boolean = false;
        for (let j: number = 0; j < foodSupplies.length; j++) {
            if (foodSupplies[j].type === foodNames[i]) {
                exists = true;
                animalFood = foodSupplies[j];
            }
        }
        if (!exists) {
            animalFood = new Food(foodNames[i]);
            foodSupplies.push(animalFood);
        }

        const newAnimal: Animal = new Animal(animalNames[i], animalTypes[i], animalFood, animalSounds[i])
        animals.push(newAnimal);
    }

    document.getElementsByTagName("button")[0].addEventListener("click", startDay);
}

function startDay(): void {
    day++
    document.getElementsByTagName("button")[0].innerHTML = "Start Day " + (day + 1);
    document.getElementById("dayheader")!.innerHTML = "Day " + day

    const animaldiv: HTMLDivElement = <HTMLDivElement>document.getElementById("animalaction");
    const fooddiv: HTMLDivElement = <HTMLDivElement>document.getElementById("foodaction");
    animaldiv.innerHTML = "";
    fooddiv.innerHTML = "";

    for (let i: number = 0; i < animals.length; i++) {
        animals[i].sing(animaldiv);
        animals[i].eat(animaldiv);
    }

    for (let i: number = 0; i < foodSupplies.length; i++) {
        foodSupplies[i].report(fooddiv);
    }

    for (let i: number = 0; i < foodSupplies.length; i++) {
        foodSupplies[i].restock(fooddiv);
    }
}