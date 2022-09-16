let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


const generateTarget = ()=>{
    return Math.floor(Math.random()*10);
  }
  
  const compareGuesses=(humanGuess,computerGuess, targetGuess)=>{
    const humanDiffence = Math.abs(humanGuess-targetGuess);
    const computerDiffence = Math.abs(computerGuess-targetGuess);
    
    return humanDiffence<=computerDiffence;
     
  }
  
  const updateScore = winner=>{
    if(winner==="human"){
      humanScore++;
    }else if(winner==="computer"){
      computerScore++;
    }
  }
  
  const advanceRound =()=>currentRoundNumber++;
  