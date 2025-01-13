// 1.Synchronous Code

function msg() {
  console.log("Time taken...");
}

// console.log("start");
// msg();
// console.log("end");

// 2.Asynchronous Code

console.log("start");
setTimeout(msg, 2000);
console.log("end");

// 3.Callback Functions
//A callback function is passed as an argument to another function and is executed after the completion of the task

function myData(callback) {
  setTimeout(() => {
    console.log("Fetching data...");
    callback();
  }, 2000);
}

myData(() => {
  console.log("Getting data...");
});
