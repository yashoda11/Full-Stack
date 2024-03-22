// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

let name1 = "hari"
let name2 = "hero"
let age = 25

console.log(`
the name is : ${name1} and he is : ${name2} and his age : ${age}
`)

console.log(name1.toUpperCase())

let strings = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
let strings2 = "Violet Indigo Blue Green Yellow Orange Red"
let strings3 = "Violet"


res1= strings.split(",")
res2 = strings2.split(" ")
res3 = strings3.split("")

console.log(res1)
console.log(res2)
console.log(res3)

//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.

const now = new Date();

console.log(now.getFullYear())
console.log(now.getMonth())
console.log(now.toString())
console.log(now.getDay())
console.log(now.getHours())
console.log(now.getMinutes())

let past = new Date('1970-01-01')
let present = new Date()

let elapsed = present - past;

console.log("Elapsed is : ", elapsed/1000,"seconds");


let week = ["sun", "Mon", "Tues"];
console.log(week[2])

let student = {
    fname : "name",
    lname : "Lname",
    age : "25"
}
console.log(student)
console.log(student.fname)

let age = 19;

if (age >=18) {
    console.log("Allowed")
}
else{
    console.log("not Allowed")
}

let user = "Mentor";

switch(user){
    case "admin":
         console.log("Access");
    break;
     case "Mentor":
         console.log("Semi Access");
    break;
    default:
         console.log("Simple user");
}

const PI = Math.PI;
console.log(PI)

console.log(Math.round(PI));
console.log(Math.round(9.8));
console.log(Math.round(9.5))
console.log(Math.round(9.4));
console.log(Math.round(12.1));
console.log(Math.floor(12.1));
console.log(Math.ceil(12.1));
console.log(Math.min(1,2));
console.log(Math.max(1,2,));
console.log(Math.random());
console.log(Math.random()*10);
console.log(Math.random()*100);
console.log(Math.round(Math.random()*50));
console.log(Math.pow(2,2));
console.log(Math.log(2));
console.log(Math.sin(90));

console.log(Math.floor(15.5));
console.log(Math.ceil(15.5));

// 3.141592653589793
// 3
// 10
// 10
// 9
// 12
// 12
// 13
// 1
// 2
// 0.7360371802186902
// 5.538807905914358
// 83.7801445213588
// 37
// 4
// 0.6931471805599453
// 0.8939966636005579
// 15
// 16
