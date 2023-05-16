console.log(this);
var user = {
    fName: "hit",
    courseCount: 4,
    getCourseCount: function(){
console.log("Line 7", this)
    },
};
user.getCourseCount();