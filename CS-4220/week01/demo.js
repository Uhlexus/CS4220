/*
Run this file by using the command: node demo.js
*/

// // // --- Welcome Message ----------------------------------
console.log('Welcome to Spring 2023 CS4220!');

// // // --- Logging to the console and Comments ----------------------------------
console.log('hello', 'world');
console.log(1+1+1);
console.log(undefined);
console.log(null);

// // // --- Declarations (let vs const) ---------------------------------------
const hello = 'hello';
console.log(hello);

let count = 1;
count++;
console.log(count);

let hey = 'hey';
hey = hello + hey;
console.log(hey);


// // // --- Dynamic Typing -----------------------------------------------------
let x;
console.log(x);

x = 1;
x++;
console.log(x);

x = 'hello';
x += ' world!';
console.log(x);

x = [9, 8, 7];
console.log(x[0]);