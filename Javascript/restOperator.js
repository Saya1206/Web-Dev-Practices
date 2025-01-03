//Rest Operator(...): Collects multiple elements into a single array or object

function add(...num) {
  let sum = 0;

  for (let e of num) {
    sum = sum + e;
  }
  console.log("Sum: " + sum);
}

add(1, 2, 3);
add(4, 5, 6, 7, 8);
