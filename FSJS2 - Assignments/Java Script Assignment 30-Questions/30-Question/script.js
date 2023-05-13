// 30. Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.

let number1 = parseFloat(prompt("Enter Number1"));
let number2 = parseFloat(prompt("Enter Number2"));
let operator = prompt("Enter operator ( either +, -, * or / ): ");
let result;
switch (operator) {
    case "+":
        result = number1 + number2;
        document.getElementById("cal").innerText = `The Addition (+) of ${number1} and ${number2} is: ${result}.`;
        break;
    case "-":
        result = number1 - number2;
        document.getElementById("cal").innerText = `The Subtraction (-) of ${number1} and ${number2} is: ${result}.`;
        break;
    case "*":
        result = number1 * number2;
        document.getElementById("cal").innerText = `The Multiplication(*) of ${number1} and ${number2} is: ${result}.`;
        break;
    case "/":
        result = number1 / number2;
        document.getElementById("cal").innerText = `The Division(/) of ${number1} and ${number2} is: ${result}.`;
        break;

    default:
        document.getElementById("cal").innerText = "Invalid Operator. \n Try Again.";
        document.getElementById("cal").style.color = "red";
        break;
}
