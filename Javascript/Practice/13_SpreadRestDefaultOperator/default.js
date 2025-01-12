const add = (num1, num2 = 10) => {
  return num1 + num2;
};
console.log(add(20));


function msg(name = "JS") {
  console.log(`Hello, ${name}`);
}
// msg('HTML');
msg();
