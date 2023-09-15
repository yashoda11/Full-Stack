var user = {
    fName: "hitesh",
    lName: "choudary",
    role: "Admin",
    loginCount: 32,
    facebookSignedSignedIn: true
};

console.table(user);

console.log(user.fName);
console.log(user["lName"]);
user.loginCount = 44;
console.log(user.loginCount);

console.table(user);