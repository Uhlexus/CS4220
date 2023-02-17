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
// repeat([1, 2, 3], console.log);

// // --- Array forEach  -------------------------------------------------
// for each item object in the inventory array
// get the total inventory available
const arrForEach = (inventory) => {
    let total = 0;

    inventory.forEach((item) => {
        total += item.count;
    });
    return total;
};
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
const arrMap = (inventory) => {
    return inventory.map((item, index) => {
        return{...item, location: index+1 };
    });
};
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
const arrFilter = (inventory) => {
    return inventory.filter((item) => {
        if (item.count === 0){
            return item;
        }
    });
};
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
const arrSortByFounded = (arr) => {
    return arr.sort((a, b) =>{
        return b.founded - a.founded;
    });
};

// console.log(companies.sort());
// console.log(arrSortByFounded(companies));

// // --- Built In Prototypes  --------------------------------------------------
// console.log(Object.getOwnPropertyNames(Object.prototype));
// console.log(Object.getOwnPropertyNames(Array.prototype));
// console.log(Object.getOwnPropertyNames(Function.prototype));
// console.log(Object.getOwnPropertyNames(String.prototype));

// //--- Prototypes with ES6 Classes ----------------------------------------------------------

class Penguin {
    constructor(type){
        this.type = type;
    }

    greet(greeting){
        return `This ${this.type} penguin says hello`;
    }
}

const pengu = new Penguin('jessy');

Penguin.prototype.fact = function() {
    return 'all penguins have knees';
};

// console.log(pengu.greet('hello!'));
// console.log(pengu.fact());

// looping for..in versus Object.keys

const forInLoop = () => {
    for(const key in pengu){
        console.log(key);
    }
    // console.log(Object.keys(pengu));
};
// forInLoop();

// // --- Dangers of Prototypes - DO NOT TOUCH built-in attributes/properties on the Prototype

// Array.prototype.findFirst = function() {
//     return this[0];
// };

// const arr = [1, 2, 3, 4];
// console.log(arr.findFirst());
// console.log(arr);

// //--- ES6 Classes -----------------------------------------

class EncryptPassword {
    constructor(password){
        this.password = password;
        this._seedphrase = 'seedphrase';
    }

    encrypt( ){
        const encrypted = Buffer.from(
            this.password + this._seedphrase
        ).toString('base64');
        return encrypted;
    }

    decrypt(encrypted){
        const decrypted = Buffer.from(encrypted, 'base64').toString();

        return decrypted.split(this._seedphrase)[0];
    }

    _reveal() {
        return this.password;
    }
}

// const pw = new EncryptPassword('yolo');
// const encrypt = pw.encrypt();
// console.log(encrypt);

// const decrypt = pw.decrypt(encrypt);
// console.log(decrypt);

// const reveal = pw._reveal();
// console.log(reveal);

// console.log(pw._seedphrase);

// /// --- Module Pattern -----------------------------------------
const EncryptPasswordMod = (password) => {
    const _seedphrase = 'seedphrase';

    function encrypt( ){
        const encrypted = Buffer.from(
            password + _seedphrase
        ).toString('base64');
        return encrypted;
    }

    function decrypt(encrypted){
        const decrypted = Buffer.from(encrypted, 'base64').toString();

        return decrypted.split(_seedphrase)[0];
    }

    function _reveal() {
        return password;
    }

    return {
        encrypt,
        decrypt
    };
};

// console.log(EncryptPasswordMod('bruh'));

const pw = EncryptPasswordMod('bruh');
const encrypt = pw.encrypt();
console.log(encrypt);

const decrypt = pw.decrypt(encrypt);
console.log(decrypt);

// const reveal = pw._reveal();
// console.log(reveal);

console.log(pw._seedphrase);
