// console.log(module);

const calculator = require('./mathWorks');

//calling calculator functions

// console.log(calculator.addFunc(30, 90), calculator.multiplyFunc(3, 87));
console.log("Area of circle: ", calculator.circleArea(20));

// to check the directory and filename of the file worked on
// console.log(`My filename: ${__filename}, directory: ${__dirname}`);

//using path
const path = require('path');
const os = require('os');

//check file type if pdf
const checkFileType =  path.parse(__filename)

// if (checkFileType.ext !== '.pdf') {
//     console.log("File is good to go");
// } else {
//     console.log('Please a PDF file is not acceptable');
// }

console.log(`Total RAM ${os.totalmem()}`);
console.log(`Free RAM ${os.freemem()}`);
console.log(os.platform(), os.homedir());