/*
Data Type Has:
1.Primitive Data Type : number, bollean, string, null, undefined
2.Non-Primitive Data Type : object, array, date
*/

// number
let age = 23;
let cgpa = 8.9;
console.log(age);
console.log(cgpa);

//typeof :  used to declare a type of variable
console.log(typeof cgpa);

// string
let msg = "hello";
let lname = "patil";
console.log(msg);
console.log(lname);

// template literal (``) : we can use it string with variable using ${} expression
console.log(`${msg} my age is ${age}`);

//boolean
let isPass = true;
let isRainy = false;
console.log(isPass);
console.log(isRainy);

//null
let x = null;
console.log(x);

console.log(typeof x); //object

//undefined
let y;
console.log(y);

//Non-Primitive

//object
let data = {
  name: "neha",
  id: 35,
  age: 35,
};

console.log(data.name);
console.log(data.id);

//array
let marks = [34, 56, 78, 23, 40, 60];
console.log(typeof marks);

for (let e of marks) {
  console.log(e);
}

//date
let date = new Date();
console.log(date);

// data type conversion

let n1 = 10 + 10 + "new" + 10 + 10; //Implicit Conversion : first two no added after string numbers are converts into string
console.log(n1);

let n2 = Number("10") + 10; //Explicit Conversion
console.log(n2);
