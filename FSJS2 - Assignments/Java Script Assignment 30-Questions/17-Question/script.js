// 17. Write a program which tells the number of days in a month.

let month = prompt("Enter a Month:");

if((month=="January")||(month=="March")||(month=="May")||(month=="July")||(month=="August")||(month=="October")||(month=="December")){
    document.getElementById("month").innerText = "The Number of Days in a "+ month + " are 31 Days";
}
else if ((month=="April")||(month=="June")||(month=="September")||(month=="November")) {
    document.getElementById("month").innerText = "The Number of Days in a "+ month + " are 30 Days";
}
else if(month=="February"){
    document.getElementById("month").innerText = "The Number of Days in a February are 28 Days";
}
else{
    document.getElementById("month").innerText = "Please Enter the Valid Month Name. (Note: The name of the month first letter should be capital letter";
    document.getElementById("month").style.color = "#eb4d4b";
}