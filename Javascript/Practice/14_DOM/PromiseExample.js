function checkWeather(isSunny) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isSunny) {
        console.log("Weather is sunny!");
        resolve();
      } 
      else {
        reject("It's raining");
      }
    }, 2000);
  });
}

checkWeather(true)
  .then(() => console.log("Go for a walk!"))
  .catch((error) => console.error("Error:", error));

checkWeather(false)
  .then(() => console.log("Go for a walk!"))
  .catch((error) => console.error("Error:", error));
