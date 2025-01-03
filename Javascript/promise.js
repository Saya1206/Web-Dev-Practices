let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
    // reject("some error");
  }, 2000);
});

myPromise.then((res) => {
  console.log("promise fullfilled", res); //PromiseState: "fulfilled", PromiseResult: "success"
});
myPromise.catch((err) => {
  console.log("promise rejected", err); //PromiseState: "rejected", PromiseResult: "some error"
});
