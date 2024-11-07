namespace Dog {
    let dog1: Dog = new Chihuahua("fufu", 20, 5, "brown");
    let dog2: Chihuahua = new Chihuahua("fifi", 30, 6, "white");
    let dog3: Dog = Dog.breed(dog1, dog2, "fefe");

    let x: string = "I'm valid outside"; //validity demonstration
    {
        let x: string = "I'm valid inside";
        console.log(x);
    }
    console.log(x);
}