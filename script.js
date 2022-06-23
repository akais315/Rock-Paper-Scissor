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
            console.log("You Lose! Paper beats Rock");
            return -1;
        } else if(computerSelection === "Scissor"){
            console.log("You Win! Rock beats Scissor");
            return 1
        } else {
            console.log("Draw ! Rock vs Rock has no winner");
            return 0
        }
    } else if(playerSelection === "PAPER"){
        if(computerSelection === "Scissor"){
            console.log("You Lose! Scissor beats Paper");
            return -1;
        } else if(computerSelection === "Rock"){
            console.log("You Win! Paper beats Rock");
            return 1;
        } else {
            console.log("Draw ! Paper vs Paper has no winner");
            return 0;
        }
    } else if(playerSelection === "SCISSOR"){
        if(computerSelection === "Rock"){
            console.log("You Lose! Rock beats Scissor");
            return -1;
        } else if(computerSelection === "Paper"){
            console.log("You Win! Scissor beats Paper");
            return 1;
        } else {
            console.log("Draw ! Scissor vs Rock has no winner");
            return 0;
        }
    }
}

function game(){
    let result = 0;
    for(let i = 0; i < 5; i++){
        result += playRound(prompt("Choose Rock, Paper or Scissor"),computerPlay());
    }
    if(result > 0){
        console.log("You Won!");
    }else if(result < 0){
        console.log("You Lost!");
    } else{
        console.log("Draw, nobody wins!")
    }
}

game();