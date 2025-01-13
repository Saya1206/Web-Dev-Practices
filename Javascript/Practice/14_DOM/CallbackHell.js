//callback hell

function getData(dataId, callback) {
  setTimeout(() => {
    console.log("data", dataId);
    if (callback) {
      callback();
    }
  }, 2000);
}

//nested callbacks

getData(1, () => {
  getData(2, () => {
    getData(3, () => {
      console.log("All data fetched");
    });
  });
});
