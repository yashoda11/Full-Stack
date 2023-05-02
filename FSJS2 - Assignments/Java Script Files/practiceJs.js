// Operators - Discount Percentage

let listingPrice = 799;
let sellingPrice = 199;
let discountPercent = ((listingPrice-sellingPrice)/listingPrice)*100;
console.log("Discount Percentage is: " + discountPercent);
displayDiscountPercentage = Math.round(discountPercent);
console.log(displayDiscountPercentage + "% off");
var result = listingPrice>sellingPrice;
console.log(result);
console.log(typeof result);


var temp = 20;
var result = temp<20;
console.log(result);

//Logical Operators

let email = true;
let facebook = false;
let google = true;
if(email||facebook||google){
    console.log("Login Success");
}
else{
    console.log("Login Fail");
}

if(email&&facebook&&google){
    console.log("Login Success");
}
else{
    console.log("Login Fail");
}

//Ternary Operators
//condition ? true : false;

let authenticated = true;
let authenticated1 = false;

authenticated?console.log("Success"):console.log("Fail");
authenticated1?console.log("Success"):console.log("Fail");

