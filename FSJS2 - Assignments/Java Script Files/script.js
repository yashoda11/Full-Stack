// //Print
// console.log("Hello Yashodaaa");

// //VALUES - Data Types:
// //Number Values:
// 7
// 2.5
// //String Values:
// ("Yashoda");
// ('Sai');
// //Boolean Values:
// true;
// false;
// //Empty values:
// null;
// undefined;
// //These are all Primitive data types -always have only one single value.

// //Array - 
// [1, 'sai', true, "Ram"];
// //0, 1, 2, 3     index

// //object
// {
//     key:value;
// }

// {
//     fname:'sai',
//     lname:'ram';
// }
//These are all Non-primitive data types - it always have more than one values

//Variables:
//1.Let
//2.var
//3.const

// let firstname = "sai";
// let lastname = 'ram';
// const MobileNo = 90000000000;

// //print
// console.log(firstname);
// console.log(lastname);
// console.log(MobileNo);

// console.log('My Name is', firstname + '/ My last name is', lastname + '/ My Mobile Number is', MobileNo);

// NEED TO CHECK:console.log(`my name`, $firstname);
// , $lastname, $MobileNo

//Operators:
// Assignment Operators:
// let x = 10;
// let y = 15;

//arithmetic Operators:
// let z = x+y;
// // console.log(z);
// console.log(x+y);
// console.log(x-y);
// console.log(x*y);
// console.log(x/y);
// console.log(x%y);

//comparision operators <,>,==, ===, <=, >=

// let abc = 10;
// let xyz = 20;
// console.log(abc<xyz);
// console.log(abc>xyz);
// console.log(abc<=xyz);
// console.log(abc>=xyz);
// console.log(abc==xyz);
// console.log(abc===xyz);

// let y;
// console.log(y);

// 4.DECISIONS OR CONDITIONS(IF)
//if else
// let age = 17;
// if(age >= 18){
//     console.log('You are allowed');
// }
// else{
// console.log('Not allowed');
// }

// let gender = 'female';
// if(gender == 'female'){
//     console.log('allowed');
// }

// else{
// console.log('Not allowed');
// }

//if else - example

// let STD = 6;
// if(STD == 1){
//     console.log('ONE');
// }
// else if(STD == 2){
//     console.log('TWO')
// }
// else if(STD == 3){
//     console.log('THREE')
// }
// else if(STD == 4){
//     console.log('FOUR')
// }
// else{
//     console.log('PRINCIPLE')
// }

//Switch Case Example:

// let user = 'sai';
// switch(user)
//     {
//         case 'admin':
//             console.log('Redirect him to admin page');
//         break;
//         case 'mentor':
//             console.log('redirect him to mentor page');
//         break;
//         default:
//             console.log('I am simple User')
//     }


//3. Ternary Operations:
// condition?true:false;

// let raining = false;
// // raining?console.log('Its Raining'):console.log('Its not Raining');
// let userLogin = false;
// userLogin?console.log('Logout'):console.log('LOGIN');

//ARRAY:
// let name = ['ani', 'sai', 'ganesh', 'ram', 'hari'];
// console.log(name);
// console.log(name[2]);
// // OBJECT:
// let BankAccount = {
//     fname : 'Sai',
//     lname : "ram",
//     mblno : 900000000000,
//     bal : 900000
// };
// console.log(BankAccount);
// console.log(BankAccount.bal);
// DATE:
// const now = new Date();
// console.log(now);
// console.log(now.toString());
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDay());
// console.log(now.getTime());
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());
// MATH
// const PI = Math.PI;
// console.log(PI);
// console.log(Math.round(PI));
// console.log(Math.round(9.8));
// console.log(Math.round(9.5))
// console.log(Math.round(9.4));
// console.log(Math.round(12.1));
// console.log(Math.floor(12.1));
// console.log(Math.ceil(12.1));
// console.log(Math.min(1,2,));
// console.log(Math.max(1,2,));
// console.log(Math.random());
// console.log(Math.random()*10);
// console.log(Math.random()*100);
// console.log(Math.round(Math.random()*50));
// console.log(Math.pow(2,2));
// console.log(Math.log(2));
// console.log(Math.sin(90));

// LOOPS:
// 1.do-while:

// let i=8;
// do{
//     console.log('Value of i: ',i);
//     i++;
// }while(i<=5);

//2. while:
// let j=8;
// while(j<=5){
//     console.log('J is: ',j);
//     j++;
// }
// 3.for loop
// for(i=0; i<=5;i++){
//     console.log('I is: ',i);
// }

// for(i=0; i<=5;i++){
//     console.log(`${i}+${i}=${i+i}`);
// }

// let names = ['ani', 'sai', 'ganesh', 'ram', 'hari'];
// console.log(name);
// console.log(name.length);
// console.log(name[1]);
// console.log(name[name.length-1]);
// name[0]='hanu';
// name.push('apple');
// console.log(name);
// console.log(names.slice(1,4));
// names.splice(1,2,'app','bal');
// console.log(names);

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = [4, 5, 6];
// console.log(arr1.concat(arr2,arr3));

// let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// arr4.fill('ram',2,6);
// console.log(arr4);
// let number = [1,4, 6];
// console.log(num.includes(3,6));
// // console.log(number.indexOf(6));
// let number = [1,4,6];
// let number1 = 'say'
// console.log(Array.isArray(number));
// console.log(Array.isArray(number1));

// let arr1 = [1, 2, 3, 4];
// console.log(arr1.join(''));
// console.log(arr1.join(' and '));

// let arr1 = [1, 2, 3, 4];
// let var1 = arr1.join(' hai ');
// console.log(var1);
// console.log(typeof var1);
// console.log(arr1.lastIndexOf(4));

// let maths = [1, 4, 9];
// // console.log(maths.map(Math.sqrt));
// console.log(maths.pop());
// console.log(maths);
// console.log(maths.reverse());
// console.log(maths.shift());
// console.log(maths);

// let names = ['boy', 'cat', 'app'];
// console.log(names.sort());
// console.log(names.reverse(names.sort()));

// let names = ['app', 'bank', 'cat', 'dog'];
// console.log(names.unshift('hai'));
// console.log(names);

// let name = 'sai'
// let array = name.split('');
// console.log(array);

// let names = ['sai', 'ram', 'hari'];
// let uppernames = ['hai', 'baa'];
// for(x of names){
//     uppernames.push(x.toUpperCase());
// }
// console.log(uppernames);

// for(let i=0; i<=5; i++){
// if(i==4){
//     continue;
// }
// console.log('I is: ',i);
// }

// function sum(){
//     let num1=10;
//     let num2=20;
// console.log('add: ',num1+num2);
// }
// sum();

// function sum(val1,val2){
// console.log('add: ', val1+val2);
// }
// sum(10,15);
// sum(2, 5)

// function sum(val1,val2){
//     let result = val1+val2;
//     return result;
// }
// let add = sum(1, 3);
// console.log(add);

// String

// function URL(url,domain){
//     let con = 'https://';
//     let result = con + url + domain;
//     return result;
// }
// let arrsitename = URL('anurag','.me');
// console.log(arrsitename);

// sum of the array more than 2 values

// function sum(arr){
//     let sum=0;
//     for(let i=0; i<arr.length; i++){
//         sum = sum + arr[i];
//     }
//     return sum;
// }
// let sumarry = [1, 2, 3, 4, 5];
// let arrresult = sum(sumarry);
// console.log(arrresult);

// function sum(arr){
//     let sum=0;
//     for(let i=0; i<arr.length; i++){
//         sum = sum+arr[i];
//     }
//     return sum;
// }
// let arrresult = sum(1, 2, 3);
// console.log(arrresult);

// function sum(){
//     let sum = 0;
//     for(let i=0; i<arguments.length; i++){
//         sum=sum+arguments[i];
//     }
//     return sum;
// }
// console.log(sum(1,2,3, 10));

// function sum(){
//     console.log(arguments);
//     let sum = 0;
//     for(let i=0; i<arguments.length; i++){
//         sum=sum+arguments[i];
//     }
//     return sum;
// }
// console.log(sum(1,2,3));

// Arrow function

// let jai = () =>{
//     console.log('Namasthe');
// }
// jai();
// let sai = (val1, val2) =>{
//     console.log('hare', val1, val2);
// }
// // sai('krisna', 'Ram');
// let sum = (val1,val2) =>{
//     console.log('add: ', val1+val2);
// }
// sum(1,2);

// let UserName = {
//     fname: 'sai',
//     lname: 'Ram',
//     role:'admin',
//     LoginCount: 25
// };
// console.log(UserName);
// // console.log(UserName.LoginCount);
// UserName.role='Mentor';
// console.log(UserName);

// for(let x in UserName){
//     console.log(x);
//     console.log(UserName[x]);
// }

// const object ={
//     rocket:'R',
//     Home:'H'
// };
// for(let x in object){
//     console.log(x);
//     console.log(object[x]);
// }

// const object1 = {
//     Toy: 'Teddy',
//     Game:'Candy',
//     Sweet:{
//         name:'Gulab Jam'
//     }
// };
// object1.Game='Temple Run',
// object1.Movie='Karthikeya - 2'
// object1.year=2000
// for(x in object1){
// console.log(x);
// console.log(object1[x]);
// }

// const obj2 = new Object();
// obj2.name = 'sai';
// obj2.no = 9000000;
// console.log(obj2);

// const powers={
//     fly:true,
//     PI: Math.round(3.14)
// };
// // console.log(powers);
// const obj3 = Object.create(powers)
// console.log(obj3);
// console.log(obj3.fly);
// console.log(obj3.PI);
// console.log(Object.getPrototypeOf(obj3));

//Videos Examples

//Declaring Variables:
 
let fullName = "Yashoda Viyyapu";    // String Data Type
let a;                               //Undefined Data Type
//Boolean Data Type
//Null Data Type

console.log("The Full Name of  " + fullName + " is a " + typeof fullName + " Data Type");
console.log("The Value of a " + "is " + typeof a + " Data Type");

//Declaring Varibales

let firstName = "Yashoda";
let lastName = "Viyyapu";
let maritalStatus = "Married";
let country = "India";
let age = "25";

//Display the variales in "interploation method":

console.log(`The User First Name is ${firstName}
                      Last Name is ${lastName}
                      Marital Status is ${maritalStatus}
                      Country is ${country}
                      Age is ${age} `);
//or
console.log(` I am ${firstName} ${lastName}.
I am ${maritalStatus}.
My Age is ${age} and lives in ${country}.
 `);

////Declaring a varibale and assign a string value to it:

let courseName = ["full stack java script course"];
let upperCourseName = [];    // Empty Array

for (const capitalletter of courseName)  {
    upperCourseName.push(capitalletter.toUpperCase());
}
console.log("The Capital Letters of Course Name Full Stack Java Script is: " + upperCourseName);

// 01. Create a variable.js file and declare variables and assign string, boolean, undefined and null data types, Display all the value with their data type.

//Declaring Variables:
 
let fullName = "Yashoda Viyyapu";    // String Data Type
let x = true;                        //Boolean Data Type
let a;                               //Undefined Data Type
let number = null;                   //Null Data Type

//All the Values with their Data Types.

console.log("The Full Name is " + fullName + " and it's data type is "  + typeof fullName + " Data Type");
console.log("The Value of x is " + x + " and it's data type is "  + typeof x + " Data Type");
console.log("The Value of a is " + a + " and it's data type is "  + typeof a + " Data Type");
console.log("The Value of number is " + number + " and it's data type is " + typeof number + " Data Type");

//04. Declare a varibale and assign string value to it and check if the string contains a word Script using includes() method.

var courseName = "Full Stack Java Script";
var isCourseNameIncludes = courseName.includes("Script");
console.log("The Course Name " + courseName + " contains the word Script. Therefore its value is " + isCourseNameIncludes);

//05. Declare a varibale and assign string value to it and then split it into an array using split() method


//(1). Assigning String value to variable
let cName = "JavaScript";

let arrayOfName = cName.split('');               //Split it into an array using split() Method.
console.log(arrayOfName);

//(2). Assigning Multiple String values to variable
let rainbowColors = "Violet Indigo Blue Green Yellow Orange Red";

let arrayOfColors = rainbowColors.split(' ');       //Split it into an array using split() Method.
console.log(arrayOfColors);

//06. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

let socialPlatform = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';

let arrayOfSocialPlatform = socialPlatform.split(',');
console.log(arrayOfSocialPlatform);

//07. Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills".


let array = ['JavaScript','HTML','pw skills','CSS','Python','R', 'pw skills'];


let arr1 = array.lastIndexOf('pw skills');
console.log(arr1);

let arr2 = array.lastIndexOf('pw skills', 3);
console.log(arr2);

//08. Demonstrate the use of trim() to remove any trailing whitespace at the beginning and the end of a string.

let string = " Hello Java Script ";

let afterTrimString = string.trim();  //With trim()
console.log(afterTrimString);

console.log(string);                  //Without trim()

// 09. Boolean value is either true or false.
//     - Write three JavaScript statement example which provide truthy value.
//     - Write three JavaScript statement example which provide falsy value.


// The folowing values are Truthy Values:
// '0' (a string containing a single zero)
// 'false' (a string containing the text “false”)
// [] (an empty array)
// {} (an empty object)
// function(){} (an “empty” function)

if('0'){
    console.log("value is truthy value");
}
else{
    console.log('value is falsy value');
}
if ('false') {
    console.log("value is truthy value");
} else {
    console.log('value is falsy value');
}
if ('[]') {
    console.log("value is truthy value");
} else {
    console.log('value is falsy value');
}
if (function(){}) {
    console.log("value is truthy value");
} else {
    console.log('value is falsy value');
}
if ({}) {
    console.log("value is truthy value");
} else {
    console.log('value is falsy value');
}

// The following values are Falsy Values:
// 0 (zero)
// -0 (minus zero)
// 0n (BigInt zero)
// '', "", `` (empty string)
// null
// undefined
// NaN

if(0){
    console.log("value is truthy value");
}
else{
    console.log('value is falsy value');
}
if (null) {
    console.log("value is truthy value");
} else {
    console.log('value is falsy value');
}
if ('') {
    console.log("value is truthy value");
} else {
    console.log('value is falsy value');
}
if (NaN) {
    console.log("value is truthy value");
} else {
    console.log('value is falsy value');
}
if (``) {
    console.log("value is truthy value");
} else {
    console.log('value is falsy value');
}
if (undefined) {
    console.log("value is truthy value");
} else {
    console.log('value is falsy value');
}

// 10. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
//     - 4 > 3
//     - 4 >= 3
//     - 4 < 3
//     - 4 <= 3
//     - 4 == 4
//     - 4 === 4
//     - 4 != 4
//     - 4 !== 4
//     - 4 != '4'
//     - 4 == '4'
//     - 4 === '4'
//     - Find the length of python and jargon and make a falsy comparison statement.

// 1. 4 > 3 = True
    console.log(4 > 3);

// 2. 4 >= 3 = True
    console.log(4 >= 3);

// 3. 4 < 3 = False
    console.log(4 < 3);    

// 4. 4 <= 3 = False
    console.log(4 <= 3);

// 5. 4 == 4 = True
    console.log(4 == 4);

// 6. 4 === 4 --> True
    console.log(4 === 4);

// 7. 4 != 4 --> False
        console.log(4 != 4);

// 8. 4 !== 4 --> Fasle
    console.log( 4 !== 4 );
    
// 9. 4 != '4' -->False
    console.log(4 != '4');

// 10. 4 == '4'  -->True
    console.log(4 == '4');

// 11. 4 === '4'  -->False
console.log(4 === '4');

// 12. Find the length of python and jargon and make a falsy comparison statement.

let str1 = "python";
let str2 = "jargon";
const len1 = str1.length;
const len2 = str2.length;
console.log(`
The Length of python is: ${len1}
The Length of jargon is: ${len2}`
);
if (len1 == len1+len2) {
    console.log(`The length of the both strings ${str1} and ${str2} are same which is ${len1}`);
} else {
    console.log(`The comparision is False. Hence executes a Fasly Statement.`);
}










