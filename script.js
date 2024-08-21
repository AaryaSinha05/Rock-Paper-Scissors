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

function imageChange(userChoice, computerChoice) {

    //function for changing the images in the play area (use querySelector - change in tags)
    const imageContainer = document.querySelector('.images');
    imageContainer.innerHTML = `
            <div id="image">
                <img src="${userChoice}.png" alt="${userChoice}">
            </div>
            <div id="image-inverted">
                <img src="${computerChoice}-inverted.png" alt="${computerChoice}_inverted">
            </div>
        `;
        
}

function displayLoseOrWinOrDraw(result){

    if(result == true){

        //console.log("you win");
        var text = "GREAT ! You Win!";
        var color = 'green';
        playerScore += 1;

    }else if (result == false){

        //console.log("you lose");
        var text = "You lose. It's okay - try again";
        var color = 'red';
        AIplayerScore += 1;

    }else {

        //console.log("draw");
        var text = "Game was Draw. Play again."
        var color = 'white';

    }

    //changing the comments
    const comments = document.getElementById('paraClass');
    comments.innerHTML = text;
    comments.style.color = color;
    comments.style.borderColor = color;

    //changing the scores
    const playerScoreUpdate = document.getElementById('player');
    playerScoreUpdate.innerHTML = playerScore;
    const aiplayerScoreUpdate = document.getElementById('ai-player');
    aiplayerScoreUpdate.innerHTML = AIplayerScore;


}

function playGame(userChoice){
    //play game function
    let computerChoice = AIPlayersChoice();
    
    //console.log(userChoice,computerChoice);
    

    var result;
    if (userChoice == computerChoice){
        result = null;//returns none if draw

    }else{

        if (userChoice == 'rock'){
            result = (computerChoice == 'paper') ? false : true;
        }else if(userChoice == 'paper'){
            result = (computerChoice == 'scissors') ? false : true;
        }else{
            result = (computerChoice == 'rock') ? false : true;
        }
    }

    imageChange(userChoice, computerChoice)
    return displayLoseOrWinOrDraw(result)

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
