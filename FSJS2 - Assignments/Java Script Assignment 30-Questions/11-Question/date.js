// 11. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.

// Assigning present time to now variable
const now = new Date();        // Using Date object

// 1. What is the year today?
console.log(now.getFullYear());

// 2. What is the month today as a number?
console.log(now.getMonth());

// 3. What is the date today?
console.log(now.toString());

// 4. What is the day today as a number?
console.log(now.getDay());

// 5. What is the hours now?
console.log(now.getHours());

// 6. What is the minutes now?
console.log(now.getMinutes());

// 7. Find out the numbers of seconds elapsed from January 1, 1970 to now.

// set the time
let past = new Date('1970-01-01');

// assigning present time to present variable
let present = new Date();

let elapsed = (present - past);

// by dividing by 1000 we will get the time in seconds
console.log(`The numbers of seconds elapsed from January 1, 1970 to now is: ${elapsed/1000}seconds`);



// Final Output:
// PS D:\FullStackJS2\FSJS2 - Assignments\Java Script Assignment> node 11-Question/date.js
// 2023
// 4
// Sat May 13 2023 08:16:15 GMT+0530 (India Standard Time)
// 6
// 8
// 16
// The numbers of seconds elapsed from January 1, 1970 to now is: 1683945975.99seconds
// PS D:\FullStackJS2\FSJS2 - Assignments\Java Script Assignment> 