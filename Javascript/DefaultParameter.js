//Default parameters allow you to set a value for a function parameter if it is not provided or is undefined

function greet(name = "Guest") {
  return `Hello, ${name}!`;
}

console.log(greet("neha")); 
console.log(greet()); 

function addition(n1, n2 = 5) {
  console.log(n1 + n2);
}
addition(6);

function addition1(n1, n2 = 6, n3 = 2) {
  console.log(n1 + n2 + n3);
}
addition1(5, 2);
addition1(6);
