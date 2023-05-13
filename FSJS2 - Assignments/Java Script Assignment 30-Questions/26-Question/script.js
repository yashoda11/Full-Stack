// // 26. Write a program to print the table of any number given by the user. The format of the output should be smiliar to the below example-
// // 	If the number given by the user is 2 then the output should look like this-
// // 	2 * 1 = 2
// // 	2 * 2 = 4
// // 	2 * 3 = 6 and so on till 2 * 10 = 20.


// take input from the user
const number = parseInt(prompt('Enter a number: '));

//creating a multiplication table
document.getElementById("tab").innerText = `The Multiplication Table for the given number ${number} is:`;
document.getElementById("tab").style.color = "#ff3838";
for(let i = 1; i <= 10; i++) {

    // multiply i with number
    const result = i * number;
    let x = document.querySelector("#table").innerText;
    x = x + `${number} * ${i} = ${result}\n`;
    document.getElementById("table").innerText = `${x}`;
    document.getElementById("table").style.paddingLeft = "100px";

}


