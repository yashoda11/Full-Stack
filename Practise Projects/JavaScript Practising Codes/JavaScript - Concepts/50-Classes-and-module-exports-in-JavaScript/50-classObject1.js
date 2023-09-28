// import User from "./50-classes";

const User = require("./50-class1");

const hitesh = new User("hitesh", "hitesh@lco.dev");

console.log(hitesh.getInfo());
console.log(hitesh.getInfo().email);
console.log(hitesh.getInfo().name);


console.log("-----------------");

hitesh.enrollCourse("React Bootcamp");
hitesh.enrollCourse("Angular Bootcamp");

console.log(hitesh.getCourseList());

console.log("-----------------");

let courses = hitesh.getCourseList();

courses.forEach((c) => console.log(c));