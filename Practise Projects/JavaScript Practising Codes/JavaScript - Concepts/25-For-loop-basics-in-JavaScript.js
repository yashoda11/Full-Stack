// basic for Loops :

console.log("--------------Basic For Loops-------------");

for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log("---------------------------");

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

console.log("---------------------------");

var myStates1 = ["Rajasthan", "Delhi", 1947, "Assam", "Tamil Nadu", "Maharashtra"];

for (let i = 0; i <= myStates1.length; i++) {
    console.log(i);
}

console.log("---------------------------");

var myStates1 = ["Rajasthan", "Delhi", 1947, "Assam", "Tamil Nadu", "Maharashtra"];

for (let i = 0; i < myStates1.length; i++) {
    console.log(myStates1[i]);
}

console.log("---------------------------");

var myStates1 = ["Rajasthan", "Delhi", 1947, "Assam", "Tamil Nadu", "Maharashtra"];

for (let i = 0; i < myStates1.length; i++) {
    console.log(myStates1[0]);
}

console.log("---------CONTINUE - 01 ------------------");

var myStates1 = ["Rajasthan", "Delhi", 1947, "Assam", "Tamil Nadu", "Maharashtra"];

for (let i = 0; i < myStates1.length; i++) {
    if(typeof myStates1[i] !== 'string')
    continue;
    console.log(myStates1[i]);
}

console.log("---------CONTINUE - 02 ------------------");

var myStates1 = ["Rajasthan", "Delhi", 1947, "Assam", "Tamil Nadu", "Maharashtra"];

for (let i = 0; i < myStates1.length; i++) {
    if(typeof myStates1[i] === 'string')
    continue;
    console.log(myStates1[i]);
}

console.log("---------BREAK------------------");

var myStates1 = ["Rajasthan", "Delhi", 1947, "Assam", "Tamil Nadu", "Maharashtra"];

for (let i = 0; i < myStates1.length; i++) {
    if(typeof myStates1[i] !== 'string')
    break;
    console.log(myStates1[i]);
}