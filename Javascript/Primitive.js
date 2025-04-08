//primitive

let a = 10;
let b = a; // a creates a copy of the value

b = 20;

console.log(a);
console.log(b);

//non-primitive

let obj1 = { name: "sayali" };
let obj2 = obj1;

obj2.name = "say"; // both point to the same object in memory

console.log(obj1);
console.log(obj2);
