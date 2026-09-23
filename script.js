

let humanScore = 0;
let computerScore = 0;



const startButton = document.querySelector("#startBtn");
const buttonsToPlay = document.querySelector(".buttons-selection");


startButton.addEventListener('click', () => {
    
    let oneButton = buttonsToPlay.querySelector("button");

    disableButtons(false);

    if (!oneButton.disabled) {
        let divs = document.querySelectorAll(".current-round, .human-score, .computer-score, .final-score, .restart");
        
        divs.forEach((div) => {
            div.textContent = "";
            
        });

        displayWhoseScoreText('none');
        displayScoresBorder('none');
        
    }
    
    humanScore = 0;
    computerScore = 0;
    
});


function disableButtons(value) {
    const buttons = buttonsToPlay.querySelectorAll("button");
    buttons.forEach((button) => {
        button.disabled = value;
    });
    
}


function displayWhoseScoreText(value) {
    const whoseScore = document.querySelectorAll(".whose-score");
        whoseScore.forEach((div) => {
            div.style.display = value;
        });
}


function displayScoresBorder(value) {
    const scoresBorders = document.querySelectorAll(".score");
        scoresBorders.forEach((div) => {
            div.style.display = value;
        });
        
}



buttonsToPlay.addEventListener('click', (event) => {
    const clickedButton = event.target;

    if (!clickedButton.disabled) {
        //this fixes a bug where when I click anywhere on the area that aligns with the buttons, the scores text appears and counts
        if (!clickedButton.matches("button")) {
            return; //do nothing
        }

        const buttonText = clickedButton.textContent;
        playGame(buttonText, getComputerChoice());

        const finalScoreText = document.querySelector(".final-score");
        finalScoreText.textContent = finalScore();

    }
 

});



function getComputerChoice() {
    let number = Math.floor(Math.random() * 3) + 1;
    if (number === 1) {
        return "Rock";
    }
    else if (number === 2) {
        return "Paper";
    }
    else if (number === 3) {
        return "Scissors";
    }
    
}


function playGame(humanChoice, computerChoice) {
    const humanScoreText = document.querySelector(".human-score");
    const computerScoreText = document.querySelector(".computer-score");
    
    playRound(humanChoice, computerChoice);
    
    displayWhoseScoreText('');
    displayScoresBorder('');
    
    humanScoreText.textContent = humanScore;
    computerScoreText.textContent = computerScore;

    if (humanScore === 5 || computerScore === 5) {
        disableButtons(true);

        const restartText = document.querySelector(".restart");
        restartText.textContent = "Want to play another round? Just click the Start button."
        
    }

}


function playRound(humanChoice, computerChoice) {
    
    const roundText = document.querySelector(".current-round");

    if (
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper") ||
        (humanChoice === "Rock" && computerChoice === "Scissors")
    ) {  
        roundText.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
        humanScore++;

    }
    else if (humanChoice === computerChoice) {
        roundText.textContent = `It's a tie! You both chose ${humanChoice}.`;
    }
    else { 
        roundText.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
    }


}



function finalScore() {
    
    if (humanScore === 5) {
        return "Wow, super! You beat the computer!";
    }
    else if (computerScore === 5) {
        return "Computer wins! Nice try 😁";
    }

    
        
    
}


