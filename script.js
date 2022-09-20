function selectshape() {
    let a = prompt("Select rock/paper/scissors");
    a = a.toLowerCase();
    let b = 0;
    if (a === "rock") {
        b = 1;
    } else if (a === "paper") {
        b = 2;
    } else if (a === "scissors") {
        b = 3;
    } else {
        alert("Please choose only rock, paper or scissors!")
        b = selectshape();
    }
return(b);
}

function computerplay() {
    return Math.floor(Math.random()*3)+1;
}

function whowins(user, pc) {
    if (user === pc) {
        return("tie");
    } else if ((user === 1) && (pc === 2)) {
        return("user");
    } else if ((user === 2) && (pc === 3)) {
        return ("user");
    } else if ((user === 3) && (pc === 1)) {
        return("user");
    }
    return("pc");
}

function oneround() {
    return(whowins(selectshape(),computerplay()));
}

function game(n) {
    let user = 0;
    let pc = 0;
    for (i = 0; i < n; i++) {
        let winner = oneround();
        if (winner === "tie") {
            alert("Tie")
        } else if (winner === "user") {
            user = user + 1;
        } else {
            pc = pc + 1;
        }
        alert("PC - " + pc + ", USER - " + user);
    }
}