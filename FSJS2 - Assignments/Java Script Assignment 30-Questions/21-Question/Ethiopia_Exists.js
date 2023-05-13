// 21. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.


var countryNames = ["India", "U.S.A", "Peru", "Alaska", "Italy", "Oman", "Panama", "Ethiopia"];
var result = countryNames.filter((country) => (country==="Ethiopia"));
console.log(countryNames);
let upper = [];
for (const letter of result){
    upper.push(letter.toUpperCase());
}
console.log(`The required Country Name exists in the given array that is ${upper}.`);