//spread operator (...) widely used for copying, merging, and passing data efficiently

// 1. Copying an Array

let originalArray = [1, 2, 3, 4];
let copiedArray = [...originalArray];
console.log(copiedArray);

// 2. Merging Arrays
let arr1 = [31, 32, 33, 34, 35];
let arr2 = [36, 37, 38];
let mergedArray = [...arr1, ...arr2];
console.log(mergedArray);

// 3. Passing Array Elements as Arguments
const numbers = [12, 3, 56, 4, 80, 5, 40];
console.log(Math.max(...numbers));
