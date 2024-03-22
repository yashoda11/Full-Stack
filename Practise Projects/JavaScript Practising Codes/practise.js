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