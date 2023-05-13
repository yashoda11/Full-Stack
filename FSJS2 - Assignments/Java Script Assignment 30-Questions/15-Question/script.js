// 15. Write a program which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-89, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F

let score = prompt("Enter Obtained Score");
if ((80<=score)&&(score<=100)){
    document.getElementById("grades").innerText = "The student obtained score is " + score + " and secured A Grade.";
    document.getElementById("grades").style.color = "#be2edd";

} else if((70<=score)&&(score<=79)){
    document.getElementById("grades").innerText = "The student obtained score is " + score + " and secured B Grade.";
    document.getElementById("grades").style.color = "#be2edd";
}
else if((60<=score)&&(score<=69)){
    document.getElementById("grades").innerText = "The student obtained score is " + score + " and secured C Grade.";
    document.getElementById("grades").style.color = "#be2edd";

}
else if((50<=score)&&(score<=59)){
    document.getElementById("grades").innerText = "The student obtained score is " + score + " and secured D Grade.";
    document.getElementById("grades").style.color = "#be2edd";

}
else if((0<=score)&&(score<=49)){
    document.getElementById("grades").innerText = "The student obtained score is " + score + " and secured F Grade.";
    document.getElementById("grades").style.color = "#eb4d4b";
}
else{
    document.getElementById("grades").innerText = "Please try again later.";
    document.getElementById("grades").style.color = "#eb4d4b";
}