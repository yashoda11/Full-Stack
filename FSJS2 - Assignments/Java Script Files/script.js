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
const PI = Math.PI;
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

