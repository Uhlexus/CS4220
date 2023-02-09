/*
    Run this file by using the command: node examples.js
*/

// // --- Array for..in Issues  ------------------------------------------
const brokenArrayForIn = () => {
    const arr = ['a', 'b', 'c'];
    arr.length = 26;

    // does not work as expected
    for (const index in arr) {
        console.log(arr[index]);
    }

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
};
// brokenArrayForIn();

// // --- Object Ref Comparison ------------------------------------------
const refComparison = () => {
    const obj1 = { a: 1 };
    const obj2 = { a: 1 };

    console.log(obj1 === obj1);
    console.log(obj1 === obj2);
};
// refComparison();

// // --- Shallow Comparison Objects  ------------------------------------------
const shallowComparison = (obj1, obj2) => {
    const objKeys1 = Object.keys(obj1);
    const objKeys2 = Object.keys(obj2);

    if (objKeys1.length !== objKeys2.length) {
        return false;
    }

    for (let i = 0; i < objKeys1.length; i++) {
        const key = objKeys1[i];

        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;
};
// console.log(shallowComparison({ a: 1 }, { a: 1 }));

// // --- Deep Comparison Objects  ------------------------------------------
const deepComparison = (obj1, obj2) => {
    const objKeys1 = Object.keys(obj1);
    const objKeys2 = Object.keys(obj2);

    if (objKeys1.length !== objKeys2.length) {
        return false;
    }

    for (let i = 0; i < objKeys1.length; i++) {
        const key = objKeys1[i];

        const objValue1 = obj1[key];
        const objValue2 = obj2[key];

        if (typeof objValue1 === 'object' && typeof objValue2 === 'object') {
            const isEqual = deepComparison(objValue1, objValue2);
            if (!isEqual) {
                return false;
            }
        } else if (objValue1 !== objValue2) {
            return false;
        }
    }

    return true;
};
// console.log(
//     'deep',
//     deepComparison(
//         { a: { b: 1 }, c: { d: 2 } },
//         { a: { b: 1 }, c: { d: 2 } }
//     )
// );

// // --- Objects  ------------------------------------------
const objectLiteral = () => {
    const transformer = {
        name: 'Optimus Prime',
        team: 'Autobots',
        colors: ['red', 'blue', 'silver']
    };

    //access a property using dot notation

    // access a property using bracket notation w/ string

    // add a key using dot notation

    // add a key using bracket notation w/ variable

    // delete a key using dot notation

    // delete a key using bracket notation w/ variable
};
objectLiteral();

// // -- Object Methods  ------------------------------------
const objectMethods = () => {
    const course = {
        department: 'Computer Science',
        number: 4220,
        startTime: '6:00pm'
    };

    // Object.assign

    // using a variable to create a key

    // Object.assign with short hand notation

    // entries

    // keys

    // values
};
objectMethods();

// // -- Object Destructuring----------------------------------
const objectDestructure = () => {
    const optimus = {
        name: 'Optimus Prime',
        team: 'Autobots',
        colors: ['red', 'blue', 'silver']
    };

    const bumblebee = {
        name: 'Bumblebee',
        team: 'Autobots',
        colors: ['yellow', 'black'],
        vehicleType: 'camero'
    };
};
objectDestructure();

// // -- Object Spread ----------------------------------
const objectSpread = () => {
    const dev = {
        name: 'Harley Quinn',
        title: 'Software Engineer',
        tenure: '3 years',
        manager: 'Joker'
    };
    const corp = {
        manager: 'Bruce Wayne',
        company: 'Wayne Industries',
        location: 'Gotham City'
    };
};
objectSpread();

// // Array Spread and Rest ---------------
const arrayOps = () => {
    const planents = [
        'mercury',
        'venus',
        'earth',
        'mars',
        'jupiter',
        'saturn',
        'uranus',
        'neptune'
    ];

    // copy spread

    // concat spread

    // rest
};
arrayOps();

// // Function Rest ---------------
const fnRest = (...args) => {};
fnRest();

// EXAMPLE Object PROBLEM
// Write a Function called convertToArray.
// - The function takes an object as an argument and returns a 2D array.
// - Each key, value pair in the object should be added to an array.
// - The first item is the key and the second is the value.
// - DO NOT USE Object.entries()
//
// Example:
//
// convertToArray({
//     developer: 'FromSoftware',
//     genre: 'RPG',
//     game: 'Elden Ring',
//     year: 2022
// });
// [
//     [ 'developer', 'FromSoftware' ],
//     [ 'genre', 'RPG' ],
//     [ 'game', 'Elden Ring' ],
//     [ 'year', 2022 ]
// ]
const convertToArray = (game) => {};

convertToArray({
    developer: 'FromSoftware',
    genre: 'RPG',
    game: 'Elden Ring',
    year: 2022
});
