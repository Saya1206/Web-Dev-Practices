function wakeUp() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Woke up!");
      resolve();
    }, 1000);
  });
}

function brushTeeth() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Brushed teeth!");
      resolve();
    }, 1000);
  });
}

function eatBreakfast() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Ate breakfast!");
      resolve();
    }, 1000);
  });
}

wakeUp()
  .then(() => brushTeeth())
  .then(() => eatBreakfast())
  .then(() => {
    console.log("Ready to start the day!");
  });
