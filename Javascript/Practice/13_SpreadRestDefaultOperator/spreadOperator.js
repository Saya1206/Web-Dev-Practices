// Copying an array
let arr1 = [1, 2, 3, 4, 5];
let copiedArray = [...arr1];
console.log(copiedArray);

// Merge two arrays
let arr2 = [6, 7, 8, 9];
let merge = [...arr1, ...arr2];
console.log(merge);

// passing array elements as arguments
let arr3 = [20, 34, 89, 12, 44];
let maxnumber = Math.max(...arr3);
console.log(maxnumber);
