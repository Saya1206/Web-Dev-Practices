// isNaN() is a built-in function used to check if a value is NaN (Not-a-Number)
// It returns true if the value is NaN, and false otherwise

console.log(isNaN(23)); // false

console.log(isNaN("hello")); // true (can't convert "hello" to a number)

console.log(isNaN("123")); // false (can be converted to 123)
