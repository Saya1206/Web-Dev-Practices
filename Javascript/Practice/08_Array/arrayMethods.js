//length

let marks = [96, 75, 48, 83, 66];
let size = marks.length;
console.log(size);

//toString : converts array to string

let fruits = ["Banana", "Orange", "Apple", "Mango"];
let string = fruits.toString();
console.log(string);

//push

marks.push(54);
for (let e of marks) {
  console.log(e);
}

//pop

let removeEnd = fruits.pop();
console.log("Remove Last Element: ", removeEnd);
for (let e of fruits) {
  console.log(e);
}

//concat
let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8, 9, 10];
let result = arr1.concat(arr2);
console.log(result);

//shift

let names = ["ajay", "raghav", "neha", "sakshi"];
let removeFirst = names.shift();
console.log("Remove First Element: ", removeFirst);

for (let e of names) {
  console.log(e);
}

//unshift

names.unshift("tejal");
for (let e of names) {
  console.log(e);
}

//slice

let mark = [10, 20, 30, 40, 50];
let part = mark.slice(2, 4);
let part1 = mark.slice(-4, -1);
console.log(part);
console.log(part1);

//map

let m2 = ["Vivan", "Rita", "Sanmesh"];

let upper = m2.map((x) => x.toUpperCase());
console.log(upper);

//filter

let id = [23, 40, 33, 10, 89, 72];

let even = id.filter((value) => value % 2 == 0);
console.log(even);
