var countries = ["india", "USA", "Russia", "Japan", "UK"];

var states = new Array("AP", "TN", "Mumbai", "Gao");

console.log(states[0]);

console.log(states);

console.log(states.length);

// Replace Item in Array :

states[0] = "Punjab"
console.log(states);

// Delete Last Item :

var user = ["hitesh", "example@gmail.com", 3, 34, true];
console.log(user);
user.pop()
user.pop()
console.log(user);

// Adding in Array :(add at starting )

user.unshift("NEW VALUE");
console.log(user);


// deleting the starting item in array
user.shift()   
console.log(user);

// finding index of an Item in Array: 

console.log(user.indexOf(3));
console.log(user.indexOf("hitesh"));
console.log(user.indexOf("hite"));

// Converting Strings to Array :
console.log(Array.from("hitesh"));
