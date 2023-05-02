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


//Switch Case
// let user = "sub-admin";
// switch (user) {
//     case "admin":
//         console.log("Full acces");
//         break;
//     case "sub-admin":
//         console.log("Full acces fot course");
//         break;
//     default:
//         console.log("Trail User");
//         break;
// }

// FAlsy Values

let user = null;
if (user) {
console.log("Condition is true");
}
else{
    console.log("Conditio is False");
}
let user1 = "null";
if (user1) {
console.log("Condition is true");
}
else{
    console.log("Conditio is False");
}
let user2 = "";
if (user2) {
console.log("Condition is true");
}
else{
    console.log("Conditio is False");
}

console.log(2+2);
console.log(2+"2");
console.log(2+parseInt("2"));
console.log("2"+"2");

function sayHello(name) {
    console.log("Hello ,hitesh");
    console.log("Hello,",name);
}
sayHello();

function sayHello(name) {
    console.log("Hello there, hitesh");
    console.log(`Hello There ${name}. How are you???`);
}
sayHello("hitesh");
sayHello("sammy");

function namasthey() {
    return "Hello India";
}
var greetings = namasthey();
console.log(greetings);
console.log(namasthey());

function getUserRole(name,role){
    switch (role) {
        case "admin":
        return `${name} is admin with full  acess`;
        case "sub-admin":
        return `${name} is subadmin with full  acess of Courses`;
        
        default:
        return `${name} is a trial User`;
        }
}
console.log(getUserRole("hitesh","admin"));
console.log(getUserRole("Sammy","sub-admin"));
let getRole = getUserRole("sai","ad");
console.log(getRole);




























