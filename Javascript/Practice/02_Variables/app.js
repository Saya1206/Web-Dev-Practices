//variable is used to store value
//Three ways to create variable : var, let , const

var age = 10;
var age = 45; //redeclared & updated a value using var
console.log(age);

let id = 5;
//let id=6;  // can't redeclared a value using let
id = 6; //value can be updated using let
console.log(id);

//initialization must done at time of declaration
const x = 30;
// x = x + 5;  //error: can't redeclared & updated a value using const
console.log(x);

//scope  of variable

if (true) {
  var a = 23; //The scope of var variable a is outside of block
  let b = 34; //The scope of let variable b is inside of block
  console.log(b);
}

console.log(a); //global scope
// console.log(b);  //It shows error because of block scope

//hoisting : (move)

//hoisting for var: variable declaration move to the top

console.log(y); //undefined: declaration only hoist initialization can't hoist
var y = 15;

//hoisting for let: There is not hoisting in let variable

//console.log(z);  //Cannot access 'z' before initialization
//let z=3;
