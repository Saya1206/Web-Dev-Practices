//function is a block of code and it is used to perform some task

// 1. function Declaration

//function defination
function myFunction(msg) {
  //parameter -> input
  console.log(msg);
}

//function call
myFunction("Welcome Coders"); //argument

// 2. function expression
// It can be named or unamed function

const first = function myfun() {
  console.log("It is named function");
};
first();

const second = function () {
  console.log("It is unamed function");
};
second();

//return statement : used to exit a function and send a value back to the location where the function was called

function sum(n1, n2) {
  return n1 + n2;
}
let s = sum(10, 20);
console.log(s);

console.log(sum(3, 5));

//Once a return statement is encountered, the function immediately exits, and any code after it is not executed

function checkPositive(num) {
  if (num > 0) {
    return "Positive";
  } else {
    return "Non-Positive";
  }
}
console.log(checkPositive(5));

// 3. Arrow Function

const greet = () => {
  console.log("Hello World!");
};
greet();

const add = (a, b) => {
  return a + b;
};
console.log(add(3, 5));

// 4. callback function

function fetchData(name, callback) {
  console.log("Fetching Data...");
  console.log(`My name is ${name}`);
  callback();
}

function getData() {
  console.log("Getting data...");
}

fetchData("neha", getData);

//using arrow function

function mul(callback) {
  var a = 3,
    b = 5;
  callback(a, b);
}

mul((a, b) => {
  console.log("This is callback function");
  console.log("Multiplication is:", a * b);
});

// 5. Annonyymous function

const f1 = function () {
  console.log("Hello there!");
};
f1();

const division = function (a, b) {
  return a / b;
};
console.log(division(10, 2));

// setTimeout function

setTimeout(() => {
  console.log("Hello after 2 sec");
}, 2000);

//setInterval function

let m = setInterval(() => {
  console.log("Display Hello after every 2 sec");
}, 2000);

clearInterval(m);

function fetchData1(callback) {
  setTimeout(() => {
    console.log("Fetching Data...");
    callback();
  }, 3000);
}

fetchData1(() => {
  console.log("under callback function");
});
