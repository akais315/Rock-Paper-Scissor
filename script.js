let playerResult = 0;
let computerResult = 0;

const rock = document.querySelector('#rock');
rock.addEventListener('click', function() {playRound("ROCK", computerPlay());});
const paper = document.querySelector('#paper');
paper.addEventListener('click', function() {playRound("PAPER", computerPlay());});
const scissor = document.querySelector('#scissor');
scissor.addEventListener('click', function() {playRound("SCISSOR", computerPlay());});

function checkResult(){
    if(playerResult >= 5){
        document.getElementById("result").innerHTML = ("You Won the game!");
    }else if(computerResult >= 5){
        document.getElementById("result").innerHTML = ("You Lost, the computer won the game!");
    }
}

function drawScore(){
    document.getElementById("score").innerHTML = playerResult + " - " + computerResult;
}

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
    if(playerResult < 5 && computerResult < 5){
        playerSelection = playerSelection.toUpperCase();
        if(playerSelection === "ROCK"){
            if(computerSelection === "Paper"){
                document.getElementById("result").innerHTML = "You Lose! Paper beats Rock";
                computerResult += 1;
            } else if(computerSelection === "Scissor"){
                document.getElementById("result").innerHTML = "You Win! Rock beats Scissor";
                playerResult += 1;
            } else {
                document.getElementById("result").innerHTML = "Draw ! Rock vs Rock has no winner";
            }
        } else if(playerSelection === "PAPER"){
            if(computerSelection === "Scissor"){
                document.getElementById("result").innerHTML = ("You Lose! Scissor beats Paper");
                computerResult += 1;
            } else if(computerSelection === "Rock"){
                document.getElementById("result").innerHTML = ("You Win! Paper beats Rock");
                playerResult += 1;
            } else {
                document.getElementById("result").innerHTML = ("Draw ! Paper vs Paper has no winner");
            }
        } else if(playerSelection === "SCISSOR"){
            if(computerSelection === "Rock"){
                document.getElementById("result").innerHTML = ("You Lose! Rock beats Scissor");
                computerResult += 1;
            } else if(computerSelection === "Paper"){
                document.getElementById("result").innerHTML = ("You Win! Scissor beats Paper");
                playerResult += 1;
            } else {
                document.getElementById("result").innerHTML = ("Draw ! Scissor vs Scissor has no winner");
            }
        }
        drawScore();
        checkResult();
    }
}

