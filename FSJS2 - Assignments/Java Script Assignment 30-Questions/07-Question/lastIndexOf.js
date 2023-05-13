//07. Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills".


let array = ['JavaScript','HTML','pw skills','CSS','Python','R', 'pw skills'];


let arr1 = array.lastIndexOf('pw skills');
console.log(arr1);

let arr2 = array.lastIndexOf('pw skills', 3);
console.log(arr2);