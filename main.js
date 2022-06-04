let userSelection = userPlay();
function userPlay(){
    let random = ["rock", "paper", "scissors"];
    return random[Math.floor(Math.random()* 3)];
}
let computerSelection = computerPlay();

function computerPlay(){
    let random = ["rock", "paper", "scissors"];
    return random[Math.floor(Math.random() * 3)];
}
function playRound(playerSelection, computerSelection){
    if(playerSelection === "rock"){
        if(computerSelection === "rock"){
            return "Draw!";
        } else if (computerSelection === "paper"){
            return "Computer Wins!";
        } else {
            return "User Wins!";
        }
    } else if(playerSelection === "paper"){
        if(computerSelection === "rock"){
            return "User Wins!";
        } else if (computerSelection === "paper"){
            return "Draw!";
        } else{
            return "Computer Wins";
        }
    } else{
        if(computerSelection === "rock"){
            return "Computer Wins";
        } else if(computerSelection === "paper"){
            return "User Wins";
        } else{
            return "Draw!";
        }
    }
}

console.log(playRound(userPlay, computerSelection));