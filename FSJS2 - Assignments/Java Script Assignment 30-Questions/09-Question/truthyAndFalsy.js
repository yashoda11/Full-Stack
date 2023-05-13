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
if ([]) {
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
