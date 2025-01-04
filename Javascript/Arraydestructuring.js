//Array destructuring : way to unpack values from arrays and assign them to variables in a concise manner

//Basic Syntax
let numbers = [10, 20, 30];
const [a, b, c] = numbers;

console.log(a);
console.log(b);
console.log(c);

//Skipping Elements (using commas)
let nums = [10, 20, 30, 40];
const [, second, , fourth] = nums;

console.log(second);
console.log(fourth);

//Default Values
let number = [10];
const [a1, b1 = 20, c1 = 30] = number;

console.log(a1);
console.log(b1);
console.log(c1);

//Rest Operator(...) : collect the remaining elements into a new array
let arr = [33, 22, 11, 77, 66];
const [x, y, ...m] = arr;

console.log(`x is ${x}`);
console.log(`y is ${y}`);
console.log(m);
