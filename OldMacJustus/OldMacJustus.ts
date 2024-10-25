window.addEventListener("load", handleLoad);

let animals: Animal[] = [];
let foodSupplies: Food[] = [];
let day: number = 0;
function handleLoad(): void {
    const animalNames: string[] = [];
    const animalTypes: string[] = [];
    const foods: Food[] = [];
    const animalSounds: string[] = [];

    for (let i: number = 0; i < animalNames.length; i++) {
        const newAnimal: Animal = new Animal(animalNames[i], animalTypes[i], foods[i], animalSounds[i])
        animals.push(newAnimal);
        if (foodSupplies.indexOf(foods[i]) === -1) {
            foodSupplies.push(foods[i]);
        }
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
}