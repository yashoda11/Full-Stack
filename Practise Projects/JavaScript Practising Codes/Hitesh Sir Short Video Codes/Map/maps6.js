var myMap = new Map();

myMap.set(1, "Uno");
myMap.set(2, "dos");
myMap.set(3, "Tres");
myMap.set(4, "Cuatro");

console.log(myMap);

myMap.forEach((v, k) => console.log(`The value is : ${v} and key is ${k}`));

