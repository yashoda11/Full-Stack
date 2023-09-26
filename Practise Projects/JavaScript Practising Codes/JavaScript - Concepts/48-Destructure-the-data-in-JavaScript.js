// Arrays :

console.log("-----Arrays-------");

const user = ["hitesh", 3, "admin"];

var role = user[2];
var name = user[0];
console.log(role);   // admin

console.log("------------");

var [name, courseCount, role] = user;
console.log(role);  // admin

// Objects :

console.log("-----Objects-------");

const MyUser = {
    name1: "choudary",
    courseCount1: 5,
    role1: "sub-admin",
  };
  
  console.log(MyUser.courseCount1);
  
  const { name1, courseCount1, role1 } = MyUser;
  console.log(role1);