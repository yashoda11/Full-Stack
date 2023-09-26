var myMap = new Map();

myMap.set(1, "Uno");
myMap.set(2, "dos");
myMap.set(3, "Tres");
myMap.set(4, "Cuatro");

console.log(myMap)

myMap.set(1, "fiv");
console.log(myMap.get(1));

console.log(myMap.size);
console.log(myMap.delete(5));

console.log(myMap.size);