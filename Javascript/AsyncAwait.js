//async function always returns a promise

async function hello() {
  console.log("hello");
}

//await pauses the execution of its surrounding async function until the promise is settled

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data Fetched");
      resolve();
    }, 2000);
  });
}

async function getData() {
  await fetchData();
}
getData();
