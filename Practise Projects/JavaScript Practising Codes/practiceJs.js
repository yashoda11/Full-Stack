


function getUserRole(name,role){
    switch (role) {
        case "admin":
        return `${name} is admin with full  acess`;
        case "sub-admin":
        return `${name} is subadmin with full  acess of Courses`;
        
        default:
        return `${name} is a trial User`;
        }
}
console.log(getUserRole("hitesh","admin"));
console.log(getUserRole("Sammy","sub-admin"));
let getRole = getUserRole("sai","ad");
console.log(getRole);