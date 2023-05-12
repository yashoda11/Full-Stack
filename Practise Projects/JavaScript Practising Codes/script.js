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

// 12. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm


// 1. YYYY-MM-DD HH:mm Format:

const date = new Date();

// Function to convert single digit input to two digits
const formatData = (input) => {
if (input > 9) {
	return input;
} else return `0${input}`;
};

// Function to convert 24 Hour to 12 Hour clock
const formatHour = (input) => {
if (input > 12) {
	return input - 12;
}
return input;
};

// Data about date
const format = {
dd: formatData(date.getDate()),
mm: formatData(date.getMonth() + 1),
yyyy: date.getFullYear(),
HH: formatData(date.getHours()),
hh: formatData(formatHour(date.getHours())),
MM: formatData(date.getMinutes()),
SS: formatData(date.getSeconds()),
};

const format24Hour = ({ dd, mm, yyyy, HH, MM, SS }) => {
console.log(`${yyyy}-${mm}-${dd} ${HH}:${MM}:${SS}`);
};
const format12Hour = ({ dd, mm, yyyy, hh, MM, SS }) => {
console.log(`${yyyy}-${mm}-${dd} ${hh}:${MM}:${SS}`);
};

// Time in 24 Hour format
format24Hour(format);
// Time in 12 Hour format
format12Hour(format);
// 12. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm


// 2. DD-MM-YYYY HH:mm Format:

const date = new Date();

// Function to convert single digit input to two digits
const formatData = (input) => {
if (input > 9) {
	return input;
} else return `0${input}`;
};

// Function to convert 24 Hour to 12 Hour clock
const formatHour = (input) => {
if (input > 12) {
	return input - 12;
}
return input;
};

// Data about date
const format = {
dd: formatData(date.getDate()),
mm: formatData(date.getMonth() + 1),
yyyy: date.getFullYear(),
HH: formatData(date.getHours()),
hh: formatData(formatHour(date.getHours())),
MM: formatData(date.getMinutes()),
SS: formatData(date.getSeconds()),
};


const format24Hour = ({ dd, mm, yyyy, HH, MM, SS }) => {
console.log(`${dd}-${mm}-${yyyy} ${HH}:${MM}:${SS}`);
};
const format12Hour = ({ dd, mm, yyyy, hh, MM, SS }) => {
console.log(`${dd}-${mm}-${yyyy} ${hh}:${MM}:${SS}`);
};

// Time in 24 Hour format
format24Hour(format);
// Time in 12 Hour format
format12Hour(format);
// 12. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm

// 3. DD/MM/YYYY HH:mm Format:

const date = new Date();

// Function to convert single digit input to two digits
const formatData = (input) => {
if (input > 9) {
	return input;
} else return `0${input}`;
};

// Function to convert 24 Hour to 12 Hour clock
const formatHour = (input) => {
if (input > 12) {
	return input - 12;
}
return input;
};

// Data about date
const format = {
dd: formatData(date.getDate()),
mm: formatData(date.getMonth() + 1),
yyyy: date.getFullYear(),
HH: formatData(date.getHours()),
hh: formatData(formatHour(date.getHours())),
MM: formatData(date.getMinutes()),
SS: formatData(date.getSeconds()),
};

const format24Hour = ({ dd, mm, yyyy, HH, MM, SS }) => {
console.log(`${dd}/${mm}/${yyyy} ${HH}:${MM}:${SS}`);
};
const format12Hour = ({ dd, mm, yyyy, hh, MM, SS }) => {
console.log(`${dd}/${mm}/${yyyy} ${hh}:${MM}:${SS}`);
};

// Time in 24 Hour format
format24Hour(format);
// Time in 12 Hour format
format12Hour(format);
//13. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

let age = prompt("Enter your age");
if (age >= 18) {
    document.getElementById("js").innerText = "You are old enough to drive";
    document.getElementById("js").style.color = "Green";

} else {
    document.getElementById("js").innerText = "You are young. Hence, you are not allowed to to drive";
    document.getElementById("js").style.color = "Red";

}
document.getElementById("js").style.fontSize = "40px";
document.getElementById("js").style.fontStyle = "italic";

// Assigning present time to now variable
const now = new Date();        // Using Date object

// 1. What is the year today?
console.log(now.getFullYear());

// 2. What is the month today as a number?
console.log(now.getMonth());

// 3. What is the date today?
console.log(now.toString());

// 4. What is the day today as a number?
console.log(now.getDay());

// 5. What is the hours now?
console.log(now.getHours());

// 6. What is the minutes now?
console.log(now.getMinutes());

// 7. Find out the numbers of seconds elapsed from January 1, 1970 to now.

// set the time
let past = new Date('1970-01-01');

// assigning present time to present variable
let present = new Date();

let elapsed = (present - past);

// by dividing by 1000 we will get the time in seconds
console.log(`The numbers of seconds elapsed from January 1, 1970 to now is: ${elapsed/1000}seconds`);

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

//13. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

let age = prompt("Enter your age");
if (age >= 18) {
    document.getElementById("js").innerText = "You are old enough to drive";
    document.getElementById("js").style.color = "Green";

} else {
    document.getElementById("js").innerText = "You are young. Hence, you are not allowed to to drive";
    document.getElementById("js").style.color = "Red";

}
document.getElementById("js").style.fontSize = "40px";
document.getElementById("js").style.fontStyle = "italic";

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>13-Question</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h2>Checking the user allowed to drive or not based on his age <br> with prompt() Method</h2>
    <p id="js"></p>
    <script src="./age.js"></script>
</body>
</html>

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    margin: auto;
    max-width: 1440px;
    background-color: azure;
    font-size: 30px;
}
h2{
    color:#be2edd;
    text-align: center;
}
p{
    margin-top: 150px;
}



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>14 Question</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h2>Checking a gievn number is even or odd <br> with prompt() Method</h2>
    <h3>Even numbers are divisible by 2 and the remainder is zero</h3>
    <p id="js"></p>
    <script src="./script.js"></script>
</body>
</html>
// 14. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript? Create a program which checks that the given number is even or odd.

let number = prompt("Enter a Number");
if (number%2==0) {
    document.getElementById("js").innerText = "The given is an Even Number";
    document.getElementById("js").style.color = "#be2edd";

} else {
    document.getElementById("js").innerText = "The given is an Odd Number";
    document.getElementById("js").style.color = "#e056fd";
}


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    max-width: 1440px;
    margin: auto;
    background-color: #f6e58d;
}
h2{
    color: #6ab04c;
    text-align: center;
    font-size: 50px;
}
h3{
    color: #f0932b;
    font-size: 40px;
}
p{
    font-size: 40px;
    margin-top: 200px;
}

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>15 Question - Grades of a Student</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Grades of Students</h1>
    <p id="grades"></p>
    <script src="./script.js"></script>
</body>
</html>

// 15. Write a program which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-89, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F

let score = prompt("Enter Obtained Score");
if ((80<=score)&&(score<=100)){
    document.getElementById("grades").innerText = "The student secured A Grade.";
    document.getElementById("grades").style.color = "#be2edd";

} else if((70<=score)&&(score<=79)){
    document.getElementById("grades").innerText = "The student secured B Grade.";
    document.getElementById("grades").style.color = "#be2edd";
}
else if((60<=score)&&(score<=69)){
    document.getElementById("grades").innerText = "The student secured C Grade.";
    document.getElementById("grades").style.color = "#be2edd";

}
else if((50<=score)&&(score<=59)){
    document.getElementById("grades").innerText = "The student secured D Grade.";
    document.getElementById("grades").style.color = "#be2edd";

}
else if((0<=score)&&(score<=49)){
    document.getElementById("grades").innerText = "The student secured F Grade.";
    document.getElementById("grades").style.color = "#eb4d4b";
}
else{
    document.getElementById("grades").innerText = "Please try again later.";
    document.getElementById("grades").style.color = "#eb4d4b";
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    max-width: 1440px;
    margin: auto;
    background-color: #dff9fb;
}
h1{
    color: #22a6b3;
    font-size: 50px;
    margin-top: 200px;
}
p{
    font-size: 40px;
    margin-top: 100px;
}

// 16. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer

let season = prompt("Enter Name of a Month");
if((season=="September")||(season=="October")||(season=="November")){
    document.getElementById("season").innerText = "The Entered Month is Autumn Season.";
}
else if((season=="December")||(season=="January")||(season=="February")){
    document.getElementById("season").innerText = "The Entered Month is Winter Season.";
}
else if((season=="March")||(season=="April")||(season=="May")){
    document.getElementById("season").innerText = "The Entered Month is Spring Season.";
}
else if ((season=="June")||(season=="July")||(season=="August")) {
    document.getElementById("season").innerText = "The Entered Month is Summer Season.";  
} 
else {
    document.getElementById("season").innerText = "Please Enter the Valid Month Name. (Note: The name of the month first letter should be capital letter)";
    document.getElementById("season").style.color = "#eb4d4b";
}

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

// 18. Write a program which tells the number of days in a month, now consider leap year.

let month = prompt("Enter a Month");

if((month=="January")||(month=="March")||(month=="May")||(month=="July")||(month=="August")||(month=="October")||(month=="December")){
    document.getElementById("month").innerText = "The Number of days in a "+ month + " are 31 Days";
}
else if ((month=="April")||(month=="June")||(month=="September")||(month=="November")) {
    document.getElementById("month").innerText = "The Number of days in a "+ month + " are 30 Days";
}
else if(month=="February"){
    document.getElementById("month").innerText = "The Number of days in a February are 29 Days";
}
else{
    document.getElementById("month").innerText = "Please Enter the Valid Month Name. (Note: The name of the month first letter should be capital letter";
    document.getElementById("month").style.color = "#eb4d4b";
}

// 19. Create a countries.js file and store the countries name into this file, create a file web_techs.js and store the popular web technology names into this file. Access both file in a third file named main.js


// program to include JS file into another JS file
let countryNames = ["India", "Nepal", "Poland", "Bhutan", "America", "Russia", "Italy", "Japan", "Jermany", "Alaska", "Grrenland", "Indonesia", "Panama", "Irland", "Egypt", "China", "Portugal", "Oman", "Thailand", "Peru."];

// exporting variables and function
export { countryNames };
// 19. Create a countries.js file and store the countries name into this file, create a file web_techs.js and store the popular web technology names into this file. Access both file in a third file named main.js


// import the variables from countries.js
import { countryNames } from './countries.js';
// import the variables from web_techs.js
import { webTechnologyNames } from './web_techs.js';

// Print list of contry Names
document.getElementById("country2").innerText = countryNames.join(" , ");
document.getElementById("country2").style.color = "#6F1E51";

// Print list of Web Technology Names
document.getElementById("web2").innerText = webTechnologyNames.join(' , ');
document.getElementById("web2").style.color = "#6F1E51";

// 19. Create a countries.js file and store the countries name into this file, create a file web_techs.js and store the popular web technology names into this file. Access both file in a third file named main.js

// program to include JS file into another JS file

let webTechnologyNames = ["HTML", "CSS", "JavaScript", "ReactJS", "MangoDB", "PHP", "Python", "Java", "ExpressJS", "NodeJS."];

// exporting variables and function
export { webTechnologyNames };

// 20. In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of your shopping cart if it has not been already added
//     - remove 'Honey'
//     - modify Tea to 'Green Tea'


const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
console.log(shoppingCart);

// add 'Meat' in the beginning of your shopping cart if it has not been already added.
shoppingCart.unshift("Meat");
console.log(shoppingCart);

// add Sugar at the end of your shopping cart if it has not been already added.
shoppingCart.push("Sugar");
console.log(shoppingCart);

// remove 'Honey'.
shoppingCart.splice(4,1);
console.log(shoppingCart);

// modify Tea to 'Green Tea'.
shoppingCart[3]="Green Tea";
console.log(shoppingCart);

// 21. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.


var countryNames = ["India", "U.S.A", "Peru", "Alaska", "Italy", "Oman", "Panama"];
var iscountryNamesIncludes = countryNames.includes("Ethiopia");
if(iscountryNamesIncludes)
{
    console.log(`The Ethiopia Country exists in the given array of Countries List.`);
}
else{
    console.log("The Country Name Ethiopia does not exists in the given array");
    countryNames.push("Ethiopia");
    console.log(`After adding of Ethiopia to the countries list,\nThe New Countries List is: \n${countryNames}`);

}

// 21. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.


var countryNames = ["India", "U.S.A", "Peru", "Alaska", "Italy", "Oman", "Panama", "Ethiopia"];
var result = countryNames.filter((country) => (country==="Ethiopia"));
console.log(countryNames);
let upper = [];
for (const letter of result){
    upper.push(letter.toUpperCase());
}
console.log(`The required Country Name exists in the given array that is ${upper}.`);

// 22. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array and find the min and max age
console.log(ages.sort());
let minimumValue = Math.min(...ages);
let maximumValue = Math.max(...ages);
console.log(`The Student's Minimum age is: ${minimumValue}.`);
console.log(`The Student's Maximum age is: ${maximumValue}.`);

// Find the median age(one middle item or two middle items divided by two).
let median;
if(ages.length%2 != 0){
    let middleIndex = Math.floor(ages.length/2)
    median = ages[middleIndex]
}else{
    let middleIndex = Math.floor(ages.length/2)
    median = (ages[middleIndex] + ages[middleIndex - 1])/2;
}
console.log(`The Median of given student's age (${ages}) is: ${median}.`)

// Find the average age(all items divided by number of items).
let average;
sum = 0;
for( let number of ages){
    sum += number;
}
average = sum/ages.length;
console.log(`The Average of student's age is: ${average}.`);

// Find the range of the ages(max minus min).
let range = (maximumValue - minimumValue);
console.log(`The Range of the given student's age is: ${range}.`);

// Compare the value of (min - average) and (max - average), use abs() method.
let value1 = (minimumValue-average);
let value2 = (maximumValue-average);
console.log(`The Comparision of ${value1} and ${value2} is: ${Math.abs(value1-value2)}.`);



