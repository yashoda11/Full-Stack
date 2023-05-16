
// var name = "hitesh";
// console.log("LINE 3" , name);
// function sayName() {
//     var name = "MR. H";
//     console.log("LIne 6", name);
// }
// sayName();


// var name = "hitesh";
// console.log("LINE 3" , name);
// function sayName() {
//     // var name = "MR. H";
//     console.log("LIne 6", name);
// }
// sayName();


var name = "hitesh";
console.log("LINE 3" , name);
function sayName() {
    // var name = "MR. H";
    console.log("LIne 6", name);
    sayNameTwo();
    function sayNameTwo(){
        var name = "Hai";
        console.log("Line11", name)
    }
}
sayName();

(function sayHello(){
    conslole.log("Hai");
})();
