// While loops in Java Script :

var myStates1 = ["Rajasthan", "Delhi", 1947, "Assam", "Tamil Nadu", "Maharashtra"];

let i = 0;
while(i < myStates1.length){
    i++;
    console.log(myStates1[i]);
}

console.log("------------------------");

let j = 0;
while(j < myStates1.length){
    console.log(myStates1[j]);
    j++;
}

// Do - While Condition in Java Script :

console.log("--------------Do - While - 01---------------");
let k = 0;
do{
    console.log(myStates1[k]);
    k++;
}while(k < myStates1.length)

console.log("--------------Do - While - 02---------------");

let l = 0;

do {
l++;
    console.log(l);

}while(l < 10)