//length
let str = "Hello Everyone!";
let strlength = str.length;
console.log(strlength);

//charAt
let character = str.charAt(3);
console.log(character);

console.log(str[0]);

//indexOf
let indexOfChar = str.indexOf("E");
console.log(indexOfChar);

//lastIndexOf
let str2 = "Hello";

let firstIndex = str2.indexOf("l");
console.log(firstIndex);

let lastIndex = str2.lastIndexOf("l");
console.log(lastIndex);

//toUpperCase
let msg = "Good Morning";
let upper = msg.toUpperCase();
console.log(upper);

//toLowerCase
let lower = msg.toLowerCase();
console.log(lower);

//trim
let str3 = "            JS String       ";
console.log(str3.trim());

//substring
let str4 = "congratulations";
let substring = str4.substring(3, 9);
console.log(substring);

//slice (negative index allow)
console.log(str4.slice(-9, -3));

//concat
let str5 = ".com";
console.log(str4.concat(str5));

//includes
let s1 = "hi how are you";
console.log(s1.includes("how")); //true
console.log(s1.includes(".com")); //false

//startsWith
console.log(s1.startsWith("hi"));

//endsWith
console.log(s1.endsWith("bye"));

//replace
let m = "Welcome to HTML tutorial";
let change = m.replace("HTML", "JS");
console.log(change);

//replaceAll
let m1 = "I hate fruits, I hate vegetables";
let changeAll = m1.replaceAll("hate", "love");
console.log(changeAll);
