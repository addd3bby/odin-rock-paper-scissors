function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  let computerChoice = '';
  switch (randomNumber) {
    case 1:
      computerChoice = "rock";
      break;

    case 2:
      computerChoice = "paper";
      break;

    case 3:
      computerChoice = "scissors";
      break;
  }

  return computerChoice;
}

function getHumanChoice() {
  let userInput = prompt("Your choice: ");
  userInput = userInput.toLowerCase();
  let userChoice = '';
  
  switch(userInput) {
    case "rock":
    case "paper":
    case "scissors":
      userChoice = userInput;
      break;

    default:
      console.log("Error! Try again");
      userChoice = getHumanChoice();
      break;
  }

  return userChoice;
}

function playRound() {
  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();

  let winner = determineWinner(humanChoice, computerChoice);

  switch (winner) {
    case "human":
      console.log(`Human wins! ${humanChoice} beats ${computerChoice}`);
      ++humanScore;
      break;

    case "computer":
      console.log(`Computer wins! ${computerChoice} beats ${humanChoice}`);
      ++computerScore;
      break;

    case "tie":
      console.log(`Tie! Both players selected ${humanChoice}`)
      break;
  }
}

function determineWinner(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    return "tie";
  }

  if (humanChoice == "rock" && computerChoice == "scissors") {
    return "human";
  }
  if (humanChoice == "rock" && computerChoice == "paper") {
    return "computer";
  }
  if (humanChoice == "paper" && computerChoice == "scissors") {
    return "computer";
  }
  if (humanChoice == "paper" && computerChoice == "rock") {
    return "human";
  }
  if (humanChoice == "scissors" && computerChoice == "rock") {
    return "computer";
  }
  if (humanChoice == "scissors" && computerChoice == "paper") {
    return "human";
  }

}

let humanScore = 0;
let computerScore = 0;

function playGame() {
  let pointsToWin = 3;
  while (humanScore < pointsToWin && computerScore < pointsToWin) {
    playRound();
  }

  if (humanScore == pointsToWin) {
    console.log(`Human wins! Human: ${humanScore}. Computer: ${computerScore}.`)
  } else {
    console.log(`Computer wins! Human: ${humanScore}. Computer: ${computerScore}.`)
  }
}

playGame();



