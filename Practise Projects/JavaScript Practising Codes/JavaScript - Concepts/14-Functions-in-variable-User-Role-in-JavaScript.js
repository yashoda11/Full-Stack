var getUserRole = function (name,role){
    switch (role) {
        case "admin":
        return `${name} is admin with full  access`;
        break; //this is not necessary

        case "sub-admin":
        return `${name} is sub-admin with full  access to create and delete Courses`;
        break;

        
        case "teset-prep":
        return `${name} is test-prep with full  access to create and delete tesets`;
        break;

        
        case "user":
        return `${name} is a user to consume content`;
        break;

        default:
        return `${name} is a trial User`;
        break;

        }
};

console.log(getUserRole("hitesh","admin"));
console.log(getUserRole("Sammy","sub-admin"));
let getRole1 = getUserRole("Ram","user");
console.log(getRole1)
let getRole = getUserRole("sai","ad");
console.log(getRole);