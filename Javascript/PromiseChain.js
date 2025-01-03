/*
function getData(dataId, callback) {
  setTimeout(() => {
    console.log("data", dataId);
    if (callback) {
      callback(); // Execute the next step.
    }
  }, 2000);
}

// Callback hell structure
getData(1, () => {
  getData(2, () => {
    getData(3, () => {
      console.log("All data fetched!");
    });
  });
});
*/

// Avoid Callback Hell : use promise chain

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve();
    }, 2000);
  });
}

// Promise Chain

getData(1) // Returns a Promise
  .then(() => getData(2)) // Wait for the first to complete before starting the second
  .then(() => getData(3)) // Wait for the second to complete before starting the third
  .then(() => {
    console.log("All data fetched!");
  });
