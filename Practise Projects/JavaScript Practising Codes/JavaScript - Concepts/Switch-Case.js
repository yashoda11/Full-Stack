console.log("Switch Case");
let user = "sub-admin";
switch (user) {
    case "admin":
        console.log("Full acces");
        break;
    case "sub-admin":
        console.log("Full access for course\nBecause User is sub-admin");
        break;
    default:
        console.log("Trail User");
        break;
}