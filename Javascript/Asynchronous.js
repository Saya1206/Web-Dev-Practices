//Synchronous Code: Executes line by line. Each line of code waits for the previous one to finish before executing.

function myfun() {
  console.log("Time taken");
}
/*
console.log("start");
myfun();
console.log("end");
*/

//Asynchronous Code: Allows the program to continue executing other tasks while waiting for a task to complete.
//(first print "Start" then continue executing "End" after waiting 3 sec print callback function myfun "Time taken")

console.log("Start");
setTimeout(myfun, 3000);
console.log("End");


function fetchData(callabck) {
  console.log("Data Fetched...");
  setTimeout(() => {
    callabck(); // Simulates a 3-second delay
  }, 3000);
}

fetchData(() => {
  console.log("Data fetched successfully!");
});
