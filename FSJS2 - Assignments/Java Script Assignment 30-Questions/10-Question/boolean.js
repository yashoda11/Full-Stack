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