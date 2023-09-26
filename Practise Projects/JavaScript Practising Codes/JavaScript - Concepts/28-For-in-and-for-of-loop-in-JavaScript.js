// for of - Arrays

const names = ["youtube", "Amazon", "Hai", "Instagram", "facebook"];

for (const n of names)
console.log(n);

// for in - Objects :

console.log("----------for in Objects----------------");

const symbols = {
    yt: "youtube",
    ig: "Instagram",
    fb: "Facebook",
    lco: "Learn Code Online"
};

console.log("-----KEYS-----");
for ( const n1 in symbols)
console.log(n1);

console.log("------VALUES-----------");
for ( const n2 in symbols)
console.log(symbols[n2]);

console.log("-------------------");
for (const n in symbols)
console.log( `The Key is: ${n} and its Value is: ${symbols[n]}.`);