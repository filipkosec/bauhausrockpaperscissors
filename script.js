const selected = document.querySelector(".gameSpace");
const playerScore = document.querySelector("#playerResults");
const pcScore = document.querySelector("#pcResults");
const winnerFlavorText = document.querySelector(".whoWinsText");
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
function wordToNumber(a) {
    let b = 0
    if (a === "rock") {
        b = 1;
    } else if (a === "paper") {
        b = 2;
    } else if (a === "scissors") {
        b = 3;
    } else if (a === "") {
        b = 0
    }
return(b);
}

function computerplay() {
    return Math.floor(Math.random()*3)+1;
}

function whowins(user, pc) {
    if (user === 0) {
        return;
    }
    if (user === pc) {
        return["tie", 0, 0];
    } else if ((user === 1) && (pc === 2)) {
        return["user", user, pc];
    } else if ((user === 2) && (pc === 3)) {
        return ["user", user, pc];
    } else if ((user === 3) && (pc === 1)) {
        return["user", user, pc];
    }
    return["pc", pc, user];
}
/*
function toggleGoodAndBad (winningChoice, losingChoice) {
    if (winningChoice === 1) {
        rockButton.classList.add("goodChoice");
    } else if (winningChoice === 2) {
        paperButton.classList.add("goodChoice");
    } else if (winningChoice === 3) {
        scissorsButton.classList.add("goodChoice");
    }
    if (losingChoice === 1) {
        rockButton.classList.add("badChoice");
    } else if (losingChoice === 2) {
        paperButton.classList.add("badChoice");
    } else if (losingChoice === 3) {
        scissorsButton.classList.add("badChoice");
    }
}

function turnOffGoodBad(e) {
    e.target.classList.remove('goodChoice');
    e.target.classList.remove('badChoice');
}
*/
function oneround(playerChoice) {
    let winner = (whowins(playerChoice,computerplay()));
    if (winner[0] === "user") {
        let changer = Number.parseInt(playerScore.textContent) + 1;
        playerScore.textContent = changer;
        winnerFlavorText.textContent = "You won!";
    }
    if (winner[0] === "pc") {
        let changer = Number.parseInt(pcScore.textContent) + 1;
        pcScore.textContent = changer;
        winnerFlavorText.textContent = "The PC won!"
    }
    if (winner[0] === "tie") {
        winnerFlavorText.textContent = "It's a tie!"
    }
   /* toggleGoodAndBad(winner[1],winner[2]); */
};

selected.addEventListener('click', function(e) {
    let matchPick = e.target.id;
    oneround(wordToNumber(matchPick));
});