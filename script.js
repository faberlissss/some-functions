'use strict';
console.log('The first task');
let array = ['box', 2, 'key', 8, true, 12, undefined, 3, null, 10, 'item', 17, 20];
function averageOfNumbers(arr) {
    let sum = 0;
    let consider = 0;
    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i])) {
            sum = sum + arr[i];
            consider++;
        }
        
    }
    return sum / consider;
}
let result = averageOfNumbers(array);
if (!isNaN(result)) {
    console.log('Average of numbers array:',result);
    
} else {
    console.log('I dont see numbers');
}


console.log('Second task');
let x = Number(prompt('Please enter the first number'));
let znak = prompt('Please enter the sign: +, -, *, /, %, ^');
let y = Number(prompt('Please enter the second number'));
let znakk = ['+', '-', '*', '/', '%', '^'];
function doMath(x, znak, y) {
    if (znak === '+') {
        return x + y;
    }
    if (znak === '-') {
        return x - y;
    }
    if (znak === '*') {
        return x * y;
    }
    if (znak === '/') {
        return x / y;
    }
     if (znak === '%') {
        return x % y;
    }
     if (znak === '^') {
        return Math.pow(x,y);
    }
    
}
let resultDoMath = doMath(x, znak, y);
console.log(resultDoMath);

console.log('Third task');
function userArray() {
    let arr = new Array();
    let mainarr = Number(prompt('Enter the length of main array'));
    for (let i = 0; i < mainarr; i++) {
        let minarr = Number(prompt(`Enter the length of minor array  ${i}`));
        let arrMinor = new Array();
        for (let g = 0; g < minarr; g++) {
            let userElements = prompt(`Enter the elements of array  ${g}`);
            if (!isNaN(userElements)) {
                let userNumber = arrMinor.push(Number(userElements));
                arr.push(userNumber);
            } else {
                arrMinor.push(userElements);
                arr.push(arrMinor);
            }
        }
    }
    return arr;
}
console.log(userArray());

console.log('Fourth task');
let element1 = prompt('Please enter the word');
let symbol=prompt('Please enter the symbol you want to delete')
function deleteSymbol(element1, symbol) {
    let result = '';
    for (let g = 0; g < element1.length; g++){
        let del = element1[g];
        if (symbol.indexOf(del) < 0) {
            result = result + del;
        }
    }
    return result;
}
let funcDelete = deleteSymbol(element1, symbol);
console.log(funcDelete);

