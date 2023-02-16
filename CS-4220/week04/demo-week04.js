/* eslint-disable no-undef */
/*
    Run this file by using the command: node demo-week04.js
*/

// // --- Higher Order Functions  ----------------------------------------
const repeat = (arr, action) => {
    for (let i = 0; i < arr.length; i++) {
        const n = arr[i];
        action(i, n);
    }
};
repeat([1, 2, 3], console.log);

// // --- Array forEach  -------------------------------------------------
// for each item object in the inventory array
// get the total inventory available
const arrForEach = (inventory) => {};
// console.log(
//     arrForEach([
//         { drink: 'pepsi', count: 10 },
//         { drink: 'redbull', count: 7 },
//         { drink: 'water', count: 4 }
//     ])
// );

// // --- Array .map()  --------------------------------------------------
// for each item object in the inventory array
// get add the key location which shows the position in the soda machine
const arrMap = (inventory) => {};
// console.log(
//     arrMap([
//         { drink: 'pepsi', count: 10 },
//         { drink: 'redbull', count: 7 },
//         { drink: 'water', count: 4 }
//     ])
// );

// // --- Array .filter()  ------------------------------------------------
// for each item object in the inventory array
// get all the items that are out of stock
const arrFilter = (mixed) => {};
// console.log(
//     arrFilter([
//         { drink: 'pepsi', count: 10 },
//         { drink: 'coke', count: 0 },
//         { drink: 'redbull', count: 7 },
//         { drink: 'sprite', count: 0 },
//         { drink: 'water', count: 4 }
//     ])
// );

// // --- Array .sort()  -------------------------------------------------
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// sort the companies in order that they were founded in descending order
const companies = [
    { name: 'Google', founded: 1998 },
    { name: 'Tesla', founded: 2003 },
    { name: 'Apple', founded: 1976 },
    { name: 'Microsoft', founded: 1975 }
];
const arrSortByFounded = (arr) => {};

// console.log(companies.sort());
// console.log(arrSortByFounded(companies));

// // --- Built In Prototypes  --------------------------------------------------
// console.log(Object.getOwnPropertyNames(Object.prototype));
// console.log(Object.getOwnPropertyNames(Array.prototype));
// console.log(Object.getOwnPropertyNames(Function.prototype));
// console.log(Object.getOwnPropertyNames(String.prototype));

// //--- Prototypes with ES6 Classes ----------------------------------------------------------

// looping for..in versus Object.keys

// // --- Dangers of Prototypes - DO NOT TOUCH built-in attributes/properties on the Prototype

// //--- ES6 Classes -----------------------------------------

// /// --- Module Pattern -----------------------------------------
