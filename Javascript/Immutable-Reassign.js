// Strings are immutable but you can still reassign the whole variable to point to a new string.

let str = "good";
str = "good morning";
console.log(str);

//Immutable means: you can’t change the string characters directly

// Example of immutability

let msg = "good";
msg[0] = "G";
console.log(msg);
