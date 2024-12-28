//Ternary Operator
let age;

let result = age > 18 ? "Valid age" : "Invalig age";
console.log(result);

//Guard Operator : use when a fallback value is needed
// value || defaultValue

// let age = 32;
let _age;
let finalAge = _age || 18;

console.log(_age);
console.log(finalAge);

//Default Operator : use only null and undefined as falsy
// value || fallbackValue

let Age = null;
// let Age;
let finalPrint = Age ?? 18;

console.log(Age);
console.log(finalPrint);
