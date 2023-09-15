
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
