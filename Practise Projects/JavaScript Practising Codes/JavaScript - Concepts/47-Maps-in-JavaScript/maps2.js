var myMap = new Map();

myMap.set(1, "Uno");
myMap.set(2, "dos");
myMap.set(3, "Tres");
myMap.set(4, "Cuatro");

for (let key of myMap.keys()) {
  console.log(`Key is = ${key}`);
}