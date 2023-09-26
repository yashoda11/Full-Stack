var myMap = new Map();

myMap.set(1, "Uno");
myMap.set(2, "dos");
myMap.set(3, "Tres");
myMap.set(4, "Cuatro");


myMap.forEach((key) => console.log(`${key}`));

console.log("-------------");

myMap.forEach((value) => console.log(`${value}`));