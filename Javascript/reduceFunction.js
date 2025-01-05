//The reduce function in JavaScript is an array method used to reduce an array to a single value by applying a callback function to each element in the array

//array.reduce(callbackFunction, initialValue);

let arr = [1, 2, 3, 4, 5];

let sum = arr.reduce((previous, current) => previous + current, 0);

console.log(sum);
