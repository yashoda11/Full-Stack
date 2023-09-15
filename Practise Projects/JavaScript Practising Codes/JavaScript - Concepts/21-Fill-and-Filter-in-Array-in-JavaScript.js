// Fill in Array Methods :

var testArray = [2, 3 ,4, 5, 6, 7, 8, 9, 10];

console.log(testArray);

// Fill in Array :
// console.log(testArray.fill(0));
// console.log(testArray.fill("h"));
// console.log(testArray.fill("i", 2));
console.log(testArray.fill("u", 2, 5));

// Filter in Array Methods :

console.log("----------Filter in Array Methods : ------------");

const numbers = [23, 24, 25, 26, ,55, 56, 100];

const result1 = numbers.filter((num) => num != 55);

console.log(result1);

// to delete something  :

const numbers1 = [22, 23, 34, 56, 67 ,78, 100];

const result2 = numbers1.filter((num) => num > 55);

console.log(`Numbers Greater than 55 from the given numbers [${numbers1}] are : [${result2}]`);

const result3 = numbers1.filter((num) => num < 55);

console.log(`Numbers Less than 55 from the given numbers [${numbers1}] are : [${result3}]`);