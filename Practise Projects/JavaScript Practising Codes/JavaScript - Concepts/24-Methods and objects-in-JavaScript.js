var user = {
    fName : "Yashoda",
    lName: "Viyyapu",
    role : "Student",
    isFacebookSignedIn : true,
    loginCount : 32,
    courseList : [],
    buyCourse : function(courseName){
        this.courseList.push(courseName);
    },
    getCourseCount : function(){
        return `${this.fName} ${this.lName} enrolled in ${this.courseList.length} Courses.`
    },
};

var courseList = true;
console.log(user.fName);

console.log(user.getCourseCount());

user.buyCourse("React-Js");
user.buyCourse("Angular-Js");
user.buyCourse("HTML-CSS");
console.log(user.getCourseCount());