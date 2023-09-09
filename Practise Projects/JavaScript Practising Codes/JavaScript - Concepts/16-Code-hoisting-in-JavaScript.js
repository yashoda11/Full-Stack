function tipper1(a){
    var bill = a;
    console.log(bill + 5);
}
tipper1(5)


function tipper2(a){
    var bill = a;
    console.log(bill + 5);
}
tipper2("5")


function tipper3(a){
    var bill = parseInt(a);
    console.log(bill + 5);
}
tipper3("5")


function tipper4(a){
    var bill = parseInt(a);
    console.log(bill + 5);
}
tipper4("a")


function bigTipper(a){
    var bill = parseInt(a);
    console.log(bill + 15);
}
bigTipper("200")


bigTipperr("200")
function bigTipperr(a){
    var bill = parseInt(a);
    console.log(bill + 25);
}

// bigTipper1("200")
// var bigTipper1 = function (a){
//     var bill = parseInt(a);
//     console.log(bill + 15);
// }        gives Error

var bigTipper2 = function (a){
    var bill = parseInt(a);
    console.log(bill + 115);
}
bigTipper2("200")

// console.log(name);  --> Error

console.log(name);   // undefined
// var name = "sai"   

console.log(name);
var name = "hitesh";

function sayName(){
    var name = "Mr.H"
    console.log(name);
}
sayName()

console.log(name);