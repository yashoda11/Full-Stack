// 28. Write a program to print the given patterns using the loops-
// 	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
// 	   *
// 	   **
// 	   ***
	
// 	b. Print a square pattern, if the input is 3 then the output should be similar to the given output
// 	   ***
// 	   ***
// 	   ***

// 	c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
// 	     *
// 	    ***
//     *****


// a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
// 	   *
// 	   **
// 	   ***

let pattern1 = 3;
let string1 = "";
for (let i = 1; i <= pattern1; i++) {
  for (let j = 0; j < i; j++) {
    string1 += "*";
  }
  string1 += "\n";
}
console.log(`The Triangle Pattern is:\n${string1}`);


// 	b. Print a square pattern, if the input is 3 then the output should be similar to the given output
// 	   ***
// 	   ***
// 	   ***

let pattern2 = 3; // row or column count
// defining an empty string
let string2 = "";

for(let i = 0; i < pattern2; i++) { // external loop
  for(let j = 0; j < pattern2; j++) { // internal loop
    string2 += "*";
  }
  // newline after each row
  string2 += "\n";
}
// printing the string
console.log(`The Square Pattern is:\n${string2}`);


// 	c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
// 	     *
// 	    ***
//     *****

let pattern3 = 3;
let string3 = "";
// External loop
for (let i = 1; i <= pattern3; i++) {
  // printing spaces
  for (let j = 1; j <= pattern3 - i; j++) {
    string3 += " ";
  }
  // printing star
  for (let k = 0; k < 2 * i - 1; k++) {
    string3 += "*";
  }
  string3 += "\n";
}
console.log(`The Pyramid Pattern is:\n${string3}`);
