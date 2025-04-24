 // DOM Element Selectors (using more descriptive variable names)
const rockButton = document.querySelector('#rockBtn');
const paperButton = document.querySelector('#paperBtn');
const scissorsButton = document.querySelector('#scissorsBtn');
const roundResultsDisplay = document.querySelector('#results');
const scoreDisplay = document.querySelector('#score');
const finalResultDisplay = document.querySelector('#finalResult');

// Game State
let playerScore = 0;
let computerScore = 0;
const winningScore = 5;

// Function to update the score display in the UI
function updateScore() {
  scoreDisplay.textContent = `You: ${playerScore}, Computer: ${computerScore}`;
}

// Function to display the result of a single round
function displayRoundOutcome(playerChoice, computerChoice, resultMessage) {
  const roundOutcomeElement = document.createElement('p');
  roundOutcomeElement.textContent = `You chose: ${playerChoice}, Computer chose: ${computerChoice}. ${resultMessage}`;
  roundResultsDisplay.appendChild(roundOutcomeElement);
}

// Function to determine the computer's choice
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to determine the winner of a single round
function playRound(playerChoice) {
  if (playerScore >= winningScore || computerScore >= winningScore) {
    return; // Game over, do nothing
  }

  const computerChoice = getComputerChoice();
  let roundResult;
  let resultMessage;

  if (playerChoice === computerChoice) {
    resultMessage = "It's a tie!";
    roundResult = 0;
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    playerScore++;
    resultMessage = "You win this round!";
    roundResult = 1;
  } else {
    computerScore++;
    resultMessage = "Computer wins this round!";
    roundResult = -1;
  }

  console.log(`Player chose: ${playerChoice}, Computer chose: ${computerChoice}. Result: ${resultMessage}`);
  displayRoundOutcome(playerChoice, computerChoice, resultMessage);
  updateScore();

  if (playerScore === winningScore || computerScore === winningScore) {
    announceGameWinner();
  }

  return roundResult;
}

// Function to announce the final winner of the game
function announceGameWinner() {
  let finalMessage;
  if (playerScore > computerScore) {
    finalMessage = "🎉 You are the ultimate winner! 🎉";
  } else if (computerScore > playerScore) {
    finalMessage = "😞 The computer reigns supreme! 😞";
  } else {
    finalMessage = "🤝 It's a final tie! 🤝";
  }
  finalResultDisplay.textContent = finalMessage;

  // Disable buttons after the game ends
  rockButton.disabled = true;
  paperButton.disabled = true;
  scissorsButton.disabled = true;
}

// Event Listeners for button clicks
rockButton.addEventListener('click', () => playRound('rock'));
paperButton.addEventListener('click', () => playRound('paper'));
scissorsButton.addEventListener('click', () => playRound('scissors'));

// Initial score display
updateScore();