console.log(this);
var user = {
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
user.getCourseCount();