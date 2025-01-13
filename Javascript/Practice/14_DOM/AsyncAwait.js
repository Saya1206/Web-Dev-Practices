// async function always returns a promise

async function msg() {
  return "Hello!";
}
msg().then(console.log);

// await pause the execution and wait for a resolved promise before it continues
function myfun() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data Fetched");
      resolve();
    }, 2000);
  });
}

async function handleFun() {
  await myfun();
}
handleFun();

//Avoid Promise Chain : using async await

function fetchData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve();
    }, 2000);
  });
}

async function getData() {
  await fetchData(1); // Waits for 2 seconds
  await fetchData(2); // Waits for 2 seconds after the first
  await fetchData(3); // Waits for 2 seconds after the second
  console.log("All data fetched!");
}
getData();
