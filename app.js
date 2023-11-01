"use strict"; 

var computer = document.querySelector(".computer");
var player = document.querySelector(".player");
var winner = document.querySelector(".winner");
var cCount = 0;
var pCount = 0;

function play(playerChoice){
    var random = Math.floor(Math.random()*3);
    console.log(random);
    var computerChoice;

    if(random == 0){
        computerChoice = "paper";
        computer.innerText = "Computer choice : paper";

    }else if(random == 1){
        computerChoice = "scissor";
        computer.innerText = "Computer choice : scissor";

    }else{
        computerChoice = "rock";
        computer.innerText = "Computer choice : rock";

    }


    player.innerText = "Player choice: "  + playerChoice ;


    if(playerChoice == computerChoice){
        winner.innerText = ("Draw");

    } else if (
        (playerChoice == "paper"&& computerChoice=="rock") ||
        (playerChoice == "rock"&& computerChoice=="scissor") ||
        (playerChoice == "scissor"&& computerChoice=="paper")
    ) {
        winner.innerText = "You win!";
        pCount++
        document.querySelector('.pCount').innerText="Player "+pCount

    } else{
        winner.innerText = "Computer win!";
        cCount++
        document.querySelector('.cCount').innerText="Computer "+cCount

    }
    console.log(playerChoice);
    console.log(computerChoice);
}
    
function restart(){
    pCount=0;
    cCount=0;
    
}