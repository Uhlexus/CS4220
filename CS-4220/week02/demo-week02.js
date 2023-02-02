/*
    Run this file by using the command: node demo.js
*/

// // // --- Operators and Coercion -------------------------------------------------
// // Double Equals
// console.log('2' == 2);
// console.log(0 == false);
// console.log('' == false);
// console.log(0 == '');
// console.log(undefined == null);

// // Triple Equals
// console.log('2' === 2);
// console.log(0 === false);
// console.log('' === false);
// console.log(0 === '');
// console.log(undefined === null);

// // // --- More Type Coercion -------------------------------------------------

// // Implicit coercion
// const n1 = '9';
// const n2 = 10;
// const sum = n1 + n2;
// console.log(typeof sum);
// console.log(sum);

// const n3 = '9';
// const n4 = 10;
// const product = n3 * n4;
// console.log(typeof product);
// console.log(product);

// // --- Issues when not Variable Scoping properly  ----------------------------------
// let number;
// for (number = 1; number < 10; number++) {
//     console.log('for loop', number);
// }

// // the variable number already incremented to 10
// // so this while loop conditional evaluates to false
// // this an example of improper scoping and variable leaking into other code block
// while (number < 10) {
//     console.log('while loop', number);
//     number++;
// }

// // --- Function Declaration vs Function Expressions  ---

// function declaration allows to call the function before defining
// this however is not considered a best practice
// when using function function declaration always defined the function and then call it
// declaration();
// function declaration() {
//     console.log('call this from anywhere?');
// }

// // function expression is best practice because
// // you must first defined the function and then call the function
// const expression = function () {
//     console.log('call this from anywhere too?');
// };
// expression();

// // --- Mutation  -------------------------------------
// const js = 'javascript';
// console.log(js[0]);
// js[0] = 'z';

// console.log(js.length);
// js.length = 100;
// console.log(js.length);

// console.log();

// const jsArr = ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't'];
// console.log(jsArr[0]);
// jsArr[0] = 'z';

// console.log(jsArr.length);
// jsArr.length = 100;
// console.log(jsArr.length);
// console.log(jsArr);

// // --- Function Declaration  -----------------------------

// function add(a, b){
//     return a + b;
// };
// console.log(add(5, 5));

// console.log();

// // --- Function Expression  -----------------------------
// const addExp = function (a, b) {
//     return a + b;
// };
// console.log(addExp(6, 6));

// console.log();

// using default values in function arguments
// const addDefaults = function (a = 2, b = 2){
//     return a + b;
// };
// console.log(addDefaults(7,7));
// console.log(addDefaults(7));
// console.log(addDefaults());

// console.log();

// // --- Arrow Functions  ---------------------------------
// const addArrow = (a, b) => {
//     return a + b;
// };
// console.log(addArrow(4, 4));

// console.log();

// simplified arrow
// const addArrowSimple = (a, b) => a+b;
// console.log(addArrowSimple(3, 3));

// // --- Ternary + String Template Literal  -------------------------
// conditional ? true : false
// const getH20Sate = (degreesCelsius) => {
//     const H20 = degreesCelsius > 0? 'liquid' : 'solid';
//     return `The current state of water is ${H20}`;
// };
// console.log(getH20Sate(-5));
// console.log(getH20Sate(5));


// // --- Strings  ----------------------------------
const workingWithStrings = () => {
    const greeting = 'Hello World';

    // // includes
    // const strIncludes = greeting.includes('ello');
    // console.log(strIncludes);

    // // charAt
    // const letter = greeting.charAt(4);
    // console.log(letter);

    // TODO in LAB
    // use toUpperCase() to display the greeting with all uppercase characters
    // const upperGreet = greeting.toUpperCase();
    // console.log(upperGreet);

    // TODO in LAB
    // use toLowerCase() to display the greeting with all lowercase characters
    // const lowerGreet = greeting.toLowerCase();
    // console.log(lowerGreet);

};
workingWithStrings();

// // --- Arrays  ----------------------------------
const workingWithArrays = () => {
    const csv = 'venus,earth,mars';

    // split (string method)
    const planets = csv.split(',');
    // console.log(planets);

    // push
    planets.push('saturn');
    planets.push('jupiter', 'neptune', 'uranus', 'pluto');
    // console.log(planets);

    // pop
    const last = planets.pop();
    // console.log(last);
    // console.log(planets);

    // unshift
    planets.unshift('mercury');
    planets.unshift('sun');
    // console.log(planets);

    // shift
    const first = planets.shift();
    // console.log(first);
    // console.log(planets);

    // join
    const csvPlanets = planets.join(',');
    // console.log(csvPlanets);
    // console.log(planets);

    // reverse
    planets.reverse();
    // console.log(planets);
    planets.reverse();
    // console.log(planets);

    // TODO in LAB
    // use concat() to add 'pluto' string back to the planets array
    const addPluto = planets.concat('pluto');
    // console.log(addPluto);
    // use concat() to add ['pluto'] array back to the planets array

    // TODO in LAB
    // use includes() to see if the planets array includes 'earth'

    // TODO in LAB
    // use sort() to sort the planets in alpha order
};
workingWithArrays();

/*Write a function called findMin
- The findMin accepts one argument which is a JavaScript array of mixed data type.
- The findMin argument is able to find and return the minimum numeric value in the array.
- DO NOT use Math.max() or Math.min() in your solution
*/
const findMin = (arr) => {
    let min = null;

    for( let i = 0; i < arr.length; i++){
        const element = arr[i];
        
        if(typeof(element === 'number')){
            if(min > element || min === null){
                min = element;
            }
        }
    }
    return min;

};
console.log(findMin([0, 100, 'hi', null, -1, 5, false, 'hello']));
