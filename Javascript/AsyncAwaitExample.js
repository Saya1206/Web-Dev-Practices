function getData(datId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data", datId);
      resolve();
    }, 2000);
  });
}

async function fetchData() {
  await getData(1); // Waits for 2 seconds
  await getData(2); // Waits for 2 seconds after the first
  await getData(3); // Waits for 2 seconds after the second
  console.log("All data fetched!");
}

fetchData();
