function isEven(element){
    if(element % 2 === 0){
        return true;
    }
        return false;
}
console.log(isEven(2));  // true
console.log(isEven(7));  // false



function isEven1(element1){
    return element1 % 2 === 0
}
console.log(isEven1(6));  // true
console.log(isEven1(9));  // false


// Arrow Function :

var isEven2 = (element2) =>{
    return element2 % 2 === 0;
}
console.log(isEven2(11));  // false
console.log(isEven2(8));   // true

// Callback Function :

console.log("---------Callback Function----------");
var result = [2, 4, 6, 8].every(isEven2);
console.log(result);

var result = [2, 4, 3, 8].every(isEven2);
console.log(result);


console.log("---------Callback Function----1------");
var result1 = [2, 4, 6, 8].every((e) => {
    return e % 2 === 0;
});
console.log(result1);


console.log("---------Callback Function-----2-----");
var result2 = [2, 4, 11, 8].every((e) => (e % 2 === 0));
console.log(result2);


console.log("---------Callback Function-----3-----");
var result3 = [2, 4, 6, 8].every((e) => e % 2 === 0);
console.log(result3);