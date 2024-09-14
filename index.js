const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("PlayerDisplay");
const computerDisplay = document.getElementById("ComputerDisplay");
const resultDisplay = document.getElementById("ResultDisplay");
const playaagainbtn = document.getElementById("Playaagainbtn");
const playerScoreDisplay = document.getElementById("PlayerScore");
const ComputerScoreDisplay = document.getElementById("ComputerScore");

let playaagain = true;
let playerscore = 0;
let computerscore = 0;



function playGame(playerchoice) {
    if (playaagain) {

        playaagain = false;
        const computerchoice = choices[Math.floor(Math.random() * 3)];
        let result = "";
        if (playerchoice === computerchoice) {
            result = "IT'S A TIE!";
        }
        else {
            switch (playerchoice) {
                case "rock":
                    result = (computerchoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                    break;
                case "paper":
                    result = (computerchoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                    break;
                case "scissors":
                    result = (computerchoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                    break;
            }

        }
        playerDisplay.textContent = `PLAYER : ${playerchoice}`;
        computerDisplay.textContent = `COMPUTER : ${computerchoice}`;
        resultDisplay.textContent = result;

        resultDisplay.classList.remove("wintextcolor", "losetextcolor");
        switch (result) {
            case "YOU WIN!":
                resultDisplay.classList.add("wintextcolor");
                playerscore++;
                playerScoreDisplay.textContent = playerscore;
                break;
            case "YOU LOSE!":
                resultDisplay.classList.add("losetextcolor");
                computerscore++;

                ComputerScoreDisplay.textContent = computerscore;
                break;
        }

        resultDisplay.style.visibility = "visible";
        playaagainbtn.style.visibility = "visible";


    }

}
playaagainbtn.addEventListener("click", () => {
    resultDisplay.style.visibility = "hidden";
    playaagainbtn.style.visibility = "hidden";
    playaagain = true;
    playerDisplay.textContent = "PLAYER :";
    computerDisplay.textContent = "COMPUTER :";

})
