// 03. Declare a varibale and assign string value to it and change all the string characters to capital letters using toUpperCase() method.

//Declaring a varibale and assign a string value to it:

let courseName = ["full stack java script course"];
let upperCourseName = [];    // Empty Array

for (const capitalletter of courseName)  {
    upperCourseName.push(capitalletter.toUpperCase());
}
console.log("The Capital Letter of Course Name Full Stack Java Script is: " + upperCourseName);

