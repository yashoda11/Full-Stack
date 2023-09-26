console.log(this);
var user1 = {
    fName: "hit",
    courseCount: 4,
    getCourseCount: function(){
console.log("Line 7", this)
    },
};
user1.getCourseCount();

console.log(("---------------"));


console.log(this);
var user2 = {
    fName: "hit",
    courseCount: 4,
    getCourseCount: function(){
console.log("Line 7", this);
function sayHello(){
    console.log("Hello");
    console.log("LIne 10", this);
    }
    sayHello();
    },
};
user2.getCourseCount();