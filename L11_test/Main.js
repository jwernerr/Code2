"use strict";
var Dog;
(function (Dog) {
    let dog1 = new Dog.Chihuahua("fufu", 20, 5, "brown");
    let dog2 = new Dog.Chihuahua("fifi", 30, 6, "white");
    Dog.Dog.breed(dog1, dog2, "fefe");
})(Dog || (Dog = {}));
