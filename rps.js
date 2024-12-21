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

function playRound(humanChoice) {
  let computerChoice = getComputerChoice();

  let winner = determineWinner(humanChoice, computerChoice);

  switch (winner) {
    case "human":
      ++humanScore;
      displayRoundScore(`Human wins! ${humanChoice} beats ${computerChoice}`);
      break;

    case "computer":
      ++computerScore;
      displayRoundScore(`Computer wins! ${computerChoice} beats ${humanChoice}`);
      break;

    case "tie":
      displayRoundScore(`Tie! Both players selected ${humanChoice}`)
      break;
  }

  checkExitGame();
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

function displayRoundScore(message) {
  let para = document.createElement('p');
  para.textContent = message;
  resultsBlock.appendChild(para);
}

function checkExitGame() {
  if (humanScore < pointsToWin && computerScore < pointsToWin) {
    return;
  }

  displayRoundScore(" ");
  displayRoundScore("Game ended!");

  if (humanScore == pointsToWin) {
    displayRoundScore(`Human wins! Human: ${humanScore}. Computer: ${computerScore}.`)
  } else {
    displayRoundScore(`Computer wins! Human: ${humanScore}. Computer: ${computerScore}.`)
  }

  displayRoundScore(" ");
  displayRoundScore("Press 'New game' to play again!");

  showElement(newGameButton);
  hideElement(choiceButtonsBlock);
}

function voidScores() {
  humanScore = 0;
  computerScore = 0;
}

function showElement(element) {
  element.style.display = "block";
}

function hideElement(element) {
  element.style.display = "none";
}

let humanScore = 0;
let computerScore = 0;
let pointsToWin = 5;


let newGameButton = document.querySelector(".new-game");
let choiceButtonsBlock = document.querySelector('.choice-buttons');
let resultsBlock = document.querySelector(".results");

newGameButton.addEventListener("click", (e) => {
  voidScores();
  showElement(choiceButtonsBlock);
  hideElement(e.target);
  resultsBlock.innerHTML = "";
});

choiceButtonsBlock.addEventListener('click', (e) => {
  let button = e.target;
  if (button.classList.contains('choice-button')) {
    playRound(button.textContent.toLowerCase());
  }
});




