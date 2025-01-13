let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve();
    reject("Fail");
  }, 2000);
});

myPromise.then(() => {
  console.log("Promise Fullfilled");
});

myPromise.catch((err) => {
  console.log("Promise Rejected: ", err);
});
