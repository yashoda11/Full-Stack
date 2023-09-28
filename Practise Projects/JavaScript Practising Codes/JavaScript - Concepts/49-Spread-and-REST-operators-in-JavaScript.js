var returnedValue = Math.max(2, 5, 7, 4, 2, 8);
console.log(returnedValue);

console.log("----------------------");

var myObj = {};

Object.assign(myObj, { a: 1, b: 2, c: 3 }, { z: 9, y: 8, x: 7 });
console.log(myObj);

console.log("----------------------");

function sumOne(a, b) {
    return a + b;
  }
  
  var myA = [5, 4];
  console.log(sumOne(...myA));   // spread Op
  
  console.log("----------------------");

  function sumTwo(...args) {
    console.log(args);
    let sum = 0;
    for (const arg of args) {
      sum += arg;
    }
    return sum;
  }
  
  console.log(sumTwo(2, 3, 1, 5, 7));
  
  console.log("----------------------");

  function multiVal(a, b, ...args) {
    console.log(args);
    let multi = a * b;
    let sum = 0;
    for (const arg of args) {
      sum += arg;
    }
    return [sum, multi];
  }
  
  console.log(multiVal(2, 3, 1, 5, 7));