"use strict";
var Dog;
(function (Dog) {
    let dog1 = new Dog.Chihuahua("fufu", 20, 5, "brown");
    let dog2 = new Dog.Chihuahua("fifi", 30, 6, "white");
    let dog3 = Dog.Dog.breed(dog1, dog2, "fefe");
    let x = "I'm valid outside"; //validity demonstration
    {
        let x = "I'm valid inside";
        console.log(x);
    }
    console.log(x);
})(Dog || (Dog = {}));
