function computerPlay(){
    let rand = Math.floor(Math.random() * 3);
    let choice
    switch(rand){
        case 0:
            choice = "Rock";
            break;
        case 1:
            choice = "Paper";
            break;
        case 2:
            choice = "Scissor";
            break;
    }
    return choice;
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toUpperCase();
    if(playerSelection === "ROCK"){
        if(computerSelection === "Paper"){
            return "You Lose! Paper beats Rock";
        } else if(computerSelection === "Scissor"){
            return "You Win! Rock beats Scissor";
        } else {
            return "Draw ! Rock vs Rock has no winner"
        }
    } else if(playerSelection === "PAPER"){
        if(computerSelection === "Scissor"){
            return "You Lose! Scissor beats Paper";
        } else if(computerSelection === "Rock"){
            return "You Win! Paper beats Rock";
        } else {
            return "Draw ! Paper vs Paper has no winner"
        }
    } else if(playerSelection === "SCISSOR"){
        if(computerSelection === "Rock"){
            return "You Lose! Rock beats Scissor";
        } else if(computerSelection === "Paper"){
            return "You Win! Scissor beats Paper";
        } else {
            return "Draw ! Scissor vs Rock has no winner"
        }
    }
}

console.log(playRound(prompt("Choose Rock, Paper or Scissor"),computerPlay()));