function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
    return 0; // Return 0 for a tie
  } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
    console.log("You win!");
    return 1; // Return 1 for human win
  } else {
    console.log("You lose!");
    return -1; // Return -1 for computer win
  }
}

function getComputerChoice() {
  const computerChoice = Math.random();
  if (computerChoice < 1 / 3) {
    return 'rock';
  } else if (computerChoice < 2 / 3) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function getHumanChoice() {
  const humanChoice = prompt('Enter your choice: rock, paper, or scissors').toLowerCase(); // Convert to lowercase
  if (humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors') {
    return humanChoice; // Return the *validated* human choice
  } else {
    alert('Invalid choice. Please enter rock, paper, or scissors.');
    return getHumanChoice(); // Use recursion to get a valid input
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let round = 0; round < 5; round++) {
    console.log(`Round ${round + 1}`);
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    const roundResult = playRound(humanChoice, computerChoice);

    if (roundResult === 1) {
      humanScore++;
    } else if (roundResult === -1) {
      computerScore++;
    }
  }
  console.log(`Final Score - Human: ${humanScore}, Computer: ${computerScore}`);
  if (humanScore > computerScore) {
    console.log("Congratulations! You win the game!");
  } else if (computerScore > humanScore) {
    console.log("Sorry, you lose the game.");
  } else {
    console.log("It's a tie game!");
  }
}

playGame();
