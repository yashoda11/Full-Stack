// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// const myStates1 = ["Rajasthan", "Delhi", 1947, "Assam", "TN", "Maha"];
// for (let i = 0; i <=myStates1.length; i++) {
//     console.log(i);
// }

// const myStates2 = ["Rajasthan", "Delhi", 1947, "Assam", "TN", "Maha"];
// for (let i = 0; i <=myStates2.length; i++) {
//     console.log(myStates2[0]);
// }

// const myStates3 = ["Rajasthan", "Delhi", 1947, "Assam", "TN", "Maha"];

// for (let i = 0; i <myStates3.length; i++) {
//     console.log(myStates3[i]);
// }

// for (let i = 0; i < myStates3.length; i++) {
//     if(typeof myStates3[i] !== "string")
//        continue;
//     console.log(myStates3[i]);
// }
// for (let i = 0; i < myStates3.length; i++) {
//     if(typeof myStates3[i] === "string")
//        continue;
//     console.log(myStates3[i]);
// }

// for (let i = 0; i < myStates3.length; i++) {
//     if(typeof myStates3[i] !== "string")
//        break;
//     console.log(myStates3[i]);
// }

// const myStates = ["Rajasthan", "Delhi", 1947, "Assam", "TN", "Maha"];
// myStates.forEach ((s) => (console.log(s)));

// const names = ["youtube", "Amazon", "Hai", "Instagram", "facebook"];
// console.log(names);
// for (const n of names)
// console.log(n);

const symbols = {
    yt: "youtube",
    fb: "Facebook",
    id: "Instagram",
    lco: "Learn Code Online"
};
for ( const n in symbols)
// console.log(n);
// console.log(symbols[n]);
console.log( `The Key is: ${n} and its Value is: ${symbols[n]}.`);
