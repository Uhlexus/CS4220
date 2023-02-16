// Problem 1: soda machine
const sodaMachine = (args) => {
    const values = Object.values(args);
    let min = values[0];
    for (let i = 1; i < values.length; i++) {
        if (min > values[i]) {
            min = values[i];
        }
    }

    return min;
};

console.log(sodaMachine({ pepsi: 10, coke: 5, sprite: 4, redbull: 9 }));
console.log(sodaMachine({ pepsi: 0, coke: 7, sprite: 9, redbull: 8, water: 10 }));

//Problem 2 : sumEvenOdd

const sumEvenOdd = (num) => {
    const numString = num.toString();
    const numLength = numString.length;
    let sum = 0;
    for (let i = 0; i < numLength; i++) {
        const numPos = numString.charAt(i);
        sum += Number.parseInt(numPos);
    }

    const ans = sum % 2 === 0 ? 'even' : 'odd';

    return `The sum of the digits for ${num} is ${ans}`;

};

console.log(sumEvenOdd(11));
console.log(sumEvenOdd(12345));


//Problem 3 : countNestedWord
const countNestedWord = (word1, find) => {
    let word = word1.toLowerCase();
    find = find.toLowerCase();
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === find[0]) {
            for (let startWord = 0; startWord < find.length; startWord++) {
                if (word[i] === find[find.length - 1] && startWord === find.length - 1) {
                    count++;
                }
                else if (word[i] !== find[startWord]) {
                    i++;
                    break;
                } else {
                    i++;
                }
            }
        }
    }
    return count;
};

console.log(countNestedWord(
    'nodejavascriptnodevscodejsnodejavascriptvscodenopenonenode',
    'node'
));
console.log(countNestedWord(
    'There are many differences between Java and JavaScript',
    'java'
));
console.log(countNestedWord(
    'To the people who toodle, do you to, or too or to',
    'to'
));


//Problem 4 : cleanPhrase
const cleanPhrase = (phrase) => {
    let newPhrase = '';
    for (let x = 0; x < phrase.length; x++) {
        const num = phrase[x];
        if (!isNaN(num)) {
            if (num === ' ') {
                newPhrase = newPhrase + num;
            }
        }
        else {
            newPhrase = newPhrase + num;
        }
    }

    return newPhrase;
};

console.log(cleanPhrase('Th7e qu1ick br8own fo0x jum1ps over 22the la9zy d3og5.'));


//Problem 5: reverseAtWord

const reverseAtWord = (wordArray, word) => {
    let newArray = [];
    let otherArray = [];
    for (let i = 0; i < wordArray.length; i++) {
        if (word === wordArray[i]) {
            if (i === 0) {
                newArray = wordArray.reverse();
                break;
            }
            else if (i === wordArray.length - 1) {
                const lastVal = wordArray.pop();
                newArray = wordArray;
                otherArray.push(lastVal);
                break;

            }
            newArray = wordArray.slice(0, i);
            otherArray = wordArray.slice(i, wordArray.length);
            break;
        }
    }

    otherArray.reverse();
    const array = newArray.concat(otherArray);

    return array;
};

console.log(reverseAtWord(['alpha', 'beta', 'gamma', 'delta', 'epsilon'], 'gamma'));
console.log(reverseAtWord(['alpha', 'beta', 'gamma', 'delta', 'epsilon'], 'alpha'));
console.log(reverseAtWord(['alpha', 'beta', 'gamma', 'delta', 'epsilon'], 'epsilon'));



//Problem 6: ascendingArray
const ascendingArray = (wordArray) => {
    let newArray = [];
    let lengthArray = [];
    for (let i = 0; i < wordArray.length; i++) {
        lengthArray.push(wordArray[i].length);
    }

    lengthArray.sort();

    for (let i = 0; i < lengthArray.length; i++) {
        const len = lengthArray[i];
        for (let x = 0; x < wordArray.length; x++) {
            if (len === wordArray[x].length) {
                newArray.push(wordArray[x]);
            }
        }
    }

    return newArray;
};

console.log(ascendingArray(['march', 'may', 'august', 'june']));


//Problem 7 : letterMap 
const letterMap = (arrayMap) => {
    let letterBig = [];
    let letterSmall = [];
    const map = {};

    for (let i = 0; i < arrayMap.length; i++) {
        letterBig.push(arrayMap[i].toUpperCase());
        letterSmall.push(arrayMap[i].toLowerCase());
    }

    letterBig.sort();
    letterSmall.sort();
    for (let i = 0; i < letterBig.length; i++) {
        const big = letterBig[i];
        const small = letterSmall[i];
        Object.assign(map, { [small]: big });
    }

    return map;


};

console.log(letterMap(['Z', 'a', 'b', 'y', 'x', 'c']));