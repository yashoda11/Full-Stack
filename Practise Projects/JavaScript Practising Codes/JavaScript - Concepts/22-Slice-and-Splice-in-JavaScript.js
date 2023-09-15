// Slice in Java Script :

var users = ["Ted", "Tim", "Ton", "Sam", "Sor", "Sod"];

console.log(users.slice(1, 3));

console.log(users.slice(1, 4));

console.log(users.slice(1));

console.log(users.slice(3));

// Splice in Java Script :

console.log("------------Splice in Java Script----------");


var userss= ["Ted", "Tim", "Ton", "Sam", "Sor", "Sod"];
userss.splice(1, 2, "Hai");
console.log(userss);


var user1= ["Ted", "Tim", "Ton", "Sam", "Sor", "Sod"];
user1.splice(1, 3, "Hai");
console.log(user1);


var usersss= ["Ted", "Tim", "Ton", "Sam", "Sor", "Sod"];
usersss.splice(1, 3, "Hai", "Bye", "Hello");
console.log(usersss);