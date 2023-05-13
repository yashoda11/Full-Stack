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
    console.log(`After adding of Ethiopia to the countries list,\nThe New Countries List is: \n${countryNames}.`);

}
