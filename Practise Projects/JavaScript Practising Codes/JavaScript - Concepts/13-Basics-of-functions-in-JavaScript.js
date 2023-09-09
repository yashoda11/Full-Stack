console.log("\n1");
function sayHello1() {
    console.log("Hello ,hitesh");
}
sayHello1();

console.log("\n2");
function sayHello2(name) {
    console.log("Hello ,hitesh");
    console.log("Hello,",name);
}
sayHello2();

console.log("\n3");
function sayHello3(name) {
    console.log("Hello ,hitesh");
    console.log("Hello,",name);
}
sayHello3("Sai");

console.log("\n4");
var sayHello4 = function(name){
    console.log(`Hello ${name}!, How are you?`);
}
sayHello4("Ram")

console.log("\n5");
function namasthey() {
    return "Hello India";
}
var greetings = namasthey();
console.log(greetings);
console.log(namasthey());

console.log("\n6");
function namasthey1() {
    console.log("Hello India");
}
namasthey1()