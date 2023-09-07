//Logical Operators 

console.log("Logical Operators - OR Operator");

let email = true;
let facebook = false;
let google = true;
if(email||facebook||google){
    console.log("Login Success");
}
else{
    console.log("Login Fail");
}


console.log("Logical Operators - AND Operator");

if(email&&facebook&&google){
    console.log("Login Success");
}
else{
    console.log("Login Fail");
}