var user = {
    fName: "hit",
    lName: "chou",
    loginCount: 34,
    role: "Admin",
    facebookSignedSignedIn: true
};
console.log(user.fName);
console.log(user["fName"]);
user.loginCount = 44;
console.log(user.loginCount);
console.table(user)