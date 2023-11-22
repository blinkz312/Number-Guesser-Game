let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// To generate a random number
const generateTarget = (number) =>{
  return Math.floor(Math.random() * 10)
}
//To compare number
const compareGuesses = (humanGuess,computerGuess,targetGuess) =>{
let humanNumber = Math.abs(humanGuess - targetGuess)
let computerNumber = Math.abs(computerGuess - targetGuess)
if(humanGuess <= computerGuess){
  return true
}
else{
  return false
}
}
// To update the score
const updateScore = (winner) =>{
if(winner === 'human'){
  humanScore++
}
else{
  computerScore++
}
}
//To advance round
const advanceRound = () =>{
  currentRoundNumber++
}
