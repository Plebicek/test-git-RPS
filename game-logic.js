const hodnoty =["rock","paper","scisors"]
let playerScore=0;
let computerScore = 0;

function computerplay(){
    return hodnoty[Math.floor(Math.random()*3)]
}

function playerPlay(){
value = prompt("what you chose ? ");
let preparedValue = value.toLowerCase();
if(hodnoty.includes(preparedValue)){
    return preparedValue;
}
return "wrongValue"
}

function playRound(computerPlay, playerPlay){

    if (playerPlay=="wrongValue"){
        return "Wat a fuck are you doin???"
    }
    if (computerPlay ===playerPlay){
        return "Equal, both have same shit"
    }
switch(computerPlay+playerPlay){
    case "rockscisors":
        computerScore++;
        return `You lost, ${computerPlay} beats ${playerPlay}`;
        break;
    case "paperrock":
        computerScore++;
        return `You lost, ${computerPlay} beats ${playerPlay}`;
        break;
    case "scisorspaper":
        computerScore++;
        return `You lost, ${computerPlay} beats ${playerPlay}`;
        break;
    default:
        playerScore++;
        return `You won, ${playerPlay} beats ${computerPlay}`;

}
}
for(let i=0;i<=5;i++){
console.log(playRound(computerplay(),playerPlay()));
console.log(computerScore);
console.log(playerScore);
console.log("");
if(i==5){

console.log("Game over - RESET!!!");
    computerScore=0;
    playerScore=0;
}
}