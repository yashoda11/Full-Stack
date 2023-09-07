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