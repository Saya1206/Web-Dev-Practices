//using subscript[]

let arr = [10, 20, 30, 40];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

let names = [];
names.push("savani");
names.push("neha");
names.push("raghav");
console.log(names);

//using new Array
let empId = new Array();
empId[0] = 101;
empId[1] = 102;
empId[2] = 103;
console.log(empId);

//Array constructor
let departments = new Array("CSE", "DS", "AIML", "ENTC");
console.log(departments);

//using Array.of
let fname = Array.of("ajay", "raghav", "neha");
console.log(fname);

//ways to iterate elements from array

let fruits = ["apple", "banana", "orange", "cherry", "mango"];

// 1.for-in
for (let i in fruits) {
  //i represents index
  console.log(fruits[i]);
}

// 2.for-of
for (let e of fruits) {
  //e represents element
  console.log(e);
}

// 3.for-each
fruits.forEach((e, i) => {
  console.log(`An element in index ${i} is ${e}`);
});
