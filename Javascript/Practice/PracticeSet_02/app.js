function bat() {
  let random = Math.random() * 3;
  let computerChoice;

  if (random > 0 && random <= 1) {
    computerChoice = "Bat";
  } else if (random > 1 && random <= 2) {
    computerChoice = "Ball";
  } else {
    computerChoice = "Stump";
  }

  //checking condition

  let resultMsg;
  if (computerChoice === "Ball") {
    resultMsg = "User Won..";
  } else if (computerChoice == "Bat") {
    resultMsg = "It's a Tie..";
  } else {
    resultMsg = "Computer Won..";
  }

  alert(
    `You have choosen Bat. Computer choice is ${computerChoice} and ${resultMsg}`
  );
}

function ball() {
  let random = Math.random() * 3;
  let computerChoice;

  if (random > 0 && random <= 1) {
    computerChoice = "Bat";
  } else if (random > 1 && random <= 2) {
    computerChoice = "Ball";
  } else {
    computerChoice = "Stump";
  }

  //checking condition

  let resultMsg;
  if (computerChoice === "Ball") {
    resultMsg = "It's a Tie..";
  } else if (computerChoice == "Bat") {
    resultMsg = "Computer Won..";
  } else {
    resultMsg = "User Won..";
  }

  alert(
    `You have choosen Ball. Computer choice is ${computerChoice} and ${resultMsg}`
  );
}

function stump() {
  let random = Math.random() * 3;
  let computerChoice;

  if (random > 0 && random <= 1) {
    computerChoice = "Bat";
  } else if (random > 1 && random <= 2) {
    computerChoice = "Ball";
  } else {
    computerChoice = "Stump";
  }

  //checking condition

  let resultMsg;
  if (computerChoice === "Ball") {
    resultMsg = "Computer Won..";
  } else if (computerChoice == "Bat") {
    resultMsg = "User Won..";
  } else {
    resultMsg = "It's a Tie..";
  }

  alert(
    `You have choosen Stump. Computer choice is ${computerChoice} and ${resultMsg}`
  );
}
