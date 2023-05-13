// 16. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer

let month = prompt("Enter Name of a Month");
if((month=="September")||(month=="October")||(month=="November")){
    document.getElementById("season").innerText = `The Entered Month is ${month}, Hence the Season is Autumn Season.`;
}
else if((month=="December")||(month=="January")||(month=="February")){
    document.getElementById("season").innerText = `The Entered Month is ${month}, Hence the Season is Winter Season.`;
}
else if((month=="March")||(month=="April")||(month=="May")){
    document.getElementById("season").innerText = `The Entered Month is ${month}, Hence the Season is Spring Season.`;
}
else if ((month=="June")||(month=="July")||(month=="August")) {
    document.getElementById("season").innerText = `The Entered Month is ${month}, Hence the Season is Summer Season.`;  
} 
else {
    document.getElementById("season").innerText = "Please Enter the Valid Month Name. (Note: The name of the month first letter should be capital letter)";
    document.getElementById("season").style.color = "#eb4d4b";
}