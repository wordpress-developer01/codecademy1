let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () =>{
  return Math.floor(Math.random() * 10)
}

const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
 const humanDifference = Math.abs(targetNumber - humanGuess);
  const computerDifference = Math.abs(targetNumber - computerGuess);

  if (humanDifference <= computerDifference) {
    return true; // Человек выигрывает или ничья
  } else {
    return false; // Компьютер выигрывает
  }
};

 const updateScore = (winner) => {
    if(winner === 'human') {
      humanScore += 1;
    } else if (winner === 'computer') {
      computerScore += 1;
    }
 };


 const advanceRound = () => {
   currentRoundNumber +=1;
 };

 console.log(advanceRound());
 console.log(updateScore());
