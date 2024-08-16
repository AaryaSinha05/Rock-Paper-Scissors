//introduction
console.log("Hello World !");
console.log("Let's play Rock-paper-scissors...");

//declaration of variables for storing the players' scores
var playerScore = 0;
var AIplayerScore = 0;

//function AI player's random choice 
function AIPlayersChoice(){
    const options = ['rock', 'paper', 'scissors'];

    //random no. between 0 - 3 (3 not included)
    let index = Math.floor(Math.random()*3);
    return options[index]
}

function drawMatch(){
    console.log("draw");
}

function displayLoseOrWin(Win){
    if(Win == true){
        console.log("you win");
    }else{
        console.log("you lose");
    }
}

function playGame(userChoice){
    let computerChoice = AIPlayersChoice();
    console.log(userChoice,computerChoice);

    if (userChoice == computerChoice){
        return drawMatch();
    }else{
        var Win = true;
        if (userChoice == 'rock'){
            Win = (computerChoice == 'paper') ? false : true;
        }else if(userChoice == 'paper'){
            Win = (computerChoice == 'scissors') ? false : true;
        }else{
            Win = (computerChoice == 'rock') ? false : true;
        }
    }

    return displayLoseOrWin(Win)
}

//getting an array that contains all the elements under the div of class name - choice
const choices = document.querySelectorAll(".choice");

//traversal of choices
choices.forEach((choice) =>{
    choice.addEventListener('click', ()=>{
        const choice_name = choice.id;
        playGame(choice_name);
    });
})