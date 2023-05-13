// 29. Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.

function getFileExtension(filename){

    // get file extension
    const extension = filename.split('.').pop();
    return extension;
}

// passing the filename
const result1 = getFileExtension('script.js');
console.log(`The filename is: "script.js" and its extension is: ${result1}`);

const result2 = getFileExtension('document.txt');
console.log(`The filename is: "document.txt" and its extension is: ${result2}`);

const result3 = getFileExtension('index.html');
console.log(`The filename is: "index.html" and its extension is: ${result3}`);

const result4 = getFileExtension('style.css');
console.log(`The filename is: "style.css" and its extension is: ${result4}`);