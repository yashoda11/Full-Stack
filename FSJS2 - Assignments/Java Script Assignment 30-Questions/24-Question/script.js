// 24. Write a program to create two array "even" and "odd" having even and odd number between the 0 to 100 (0 and 100 included).

let arrayOfEven = [];
let arrayOfOdd = [];

for (let i=0; i<=100; i++){
    if(i%2 == 0){
        arrayOfEven.push(i);
    }
    else{
        arrayOfOdd.push(i);
    }
}
console.log(`The Array consists of Even Numbers is:`);
console.log(arrayOfEven);
console.log(`The Array consists of Odd Numbers is:`);
console.log(arrayOfOdd);
