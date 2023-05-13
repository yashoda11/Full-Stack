// 23. Write a program to check that the number given by the user is a prime number or not.

// take input from the user
const number = parseInt(prompt("Enter a Positive number: "));
let isPrime = true;

// check if number is equal to 1
if (number === 1) {
    document.getElementById("prime").innerText = "1 is neither prime nor composite number.";
}

// check if number is greater than 1
else if (number > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        document.getElementById("prime").innerText = `The Entered Number ${number} is a Prime Number`;
    } else {
        document.getElementById("prime").innerText = `The Entered Number ${number} is not a Prime Number`;
    }
}
// check if number is less than 1
else {
    document.getElementById("prime").innerText = `The Entered Number ${number} is a not Prime Number \n Try Again`;
}

