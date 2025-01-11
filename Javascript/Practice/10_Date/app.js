let date = new Date();
console.log(date);

console.log(date.getDate());

console.log(date.getDay());

//to get day & date
let d = date.toDateString();
let day = d.substring(0, 3);

console.log(d);
console.log(day);

let i = d.indexOf("Jan");
console.log(i);

console.log(date.getMonth());

console.log(date.getHours());

console.log(date.getSeconds());
