\]=// 22. The following is an array of 10 students ages:
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
