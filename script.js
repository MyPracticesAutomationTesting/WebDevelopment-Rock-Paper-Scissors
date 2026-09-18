

console.log("Hello, World! Play Rock-Paper-Scissors");
console.log("See if you can beat the computer!")

let humanScore = 0;
let computerScore = 0;

let count = 1;
while (count <= 5) {
    const humanChoice = getHumanChoice().toLowerCase();
    const computerChoice = getComputerChoice().toLowerCase();
    playGame(humanChoice, computerChoice);
    count++;
}

if (humanScore > computerScore) {
    console.log("Wow, super! You beat the computer!")
}
else if (computerScore > humanScore) {
    console.log("Nice try 😁")
}
else {
    console.log("A tie! Great job!");
}


function getComputerChoice() {
    let number = Math.floor(Math.random() * 3) + 1;
    if (number === 1) {
        return "rock";
    }
    else if (number === 2) {
        return "paper";
    }
    else if (number === 3) {
        return "scissors";
    }
    
}

/*this assumes user will always enter a valid choice*/
function getHumanChoice() {
    let choice = prompt("Type any of these: paper, rock, scissors");
    return choice;
}


function playRound(humanChoice, computerChoice) {
    const capitalizeHuman = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
    const capitalizeComputer = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
    
    if (
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "rock" && computerChoice === "scissors")
    ) {
        console.log(`You won! ${capitalizeHuman} beats ${capitalizeComputer}.`);
        humanScore++;
    }
    else if (humanChoice === computerChoice) {
        console.log(`It's a tie! You both chose ${capitalizeHuman}.`);
    }
    else {
        console.log(`You lose! ${capitalizeComputer} beats ${capitalizeHuman}.`);
        computerScore++;
    }

}


function playGame(humanChoice, computerChoice) {
    playRound(humanChoice, computerChoice);
    console.log("Human: " + humanScore);
    console.log("Computer: " + computerScore);

}




/*unfortunately, throughout the lessons so far, I haven't been able to install Xubuntu successfully, hence, still using my own Windows OS, hence, the line below*/
window.getComputerChoice = getComputerChoice;
