// 14. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript? Create a program which checks that the given number is even or odd.

let number = prompt("Enter a Number");
if (number%2==0) {
    document.getElementById("js").innerText = `The entered number ${number} is an Even Number`;
    document.getElementById("js").style.color = "#be2edd";

} else {
    document.getElementById("js").innerText = `The entered number ${number} is an Odd Number`;
    document.getElementById("js").style.color = "#e056fd";
}


