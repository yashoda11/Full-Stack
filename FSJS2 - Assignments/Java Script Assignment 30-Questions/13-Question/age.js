//13. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

let age = prompt("Enter your age");
if (age >= 18) {
    document.getElementById("js").innerText = `Your age is: ${age}.\nYou are old enough to drive`;
    document.getElementById("js").style.color = "Green";

} else {
    document.getElementById("js").innerText = `Your age is: ${age}.\nYou are young. Hence, you are not allowed to to drive`;
    document.getElementById("js").style.color = "Red";

}
document.getElementById("js").style.fontSize = "40px";
document.getElementById("js").style.fontStyle = "italic";

