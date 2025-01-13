/*
//callback hell

function getData(dataId, callback) {
  setTimeout(() => {
    console.log("data", dataId);
    if (callback) {
      callback();
    }
  }, 2000);
}

getData(1, () => {
  getData(2, () => {
    getData(3, () => {
      console.log("All data fetched");
    });
  });
});
*/

// Avoid callback hell(nested callbacks): use promise chain

function getData(dataId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve();
    }, 3000);
  });
}

//promise chain
getData(1)
  .then(() => getData(2))
  .then(() => getData(3))
  .then(() => console.log("All data fetched"));
