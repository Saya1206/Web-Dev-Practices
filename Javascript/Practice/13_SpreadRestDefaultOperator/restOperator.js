function addition(...numbers) {
  let sum = 0;

  for (let e of numbers) {
    sum += e;
  }
  console.log(`Sum: `, sum);
}

addition(1, 7, 3, 9);
addition(30, 50, 12, 34, 56, 90);
