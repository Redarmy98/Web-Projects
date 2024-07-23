let myScore = 0, compScore = 0;
let msg = document.querySelector(".msg");
let uscore = document.querySelector('.user-score');
let cscore = document.querySelector('.comp-score');

const genCompChoice = () => {
    let objects = ["rock", "paper", "scissor"];
    let index = Math.floor(Math.random() * 3);
    return objects[index];
}

const drawGame = () => {
    let res = "The game ended in draw";
    msg.innerText = res;
    msg.classList.remove('lose');
    msg.classList.remove('win');
    msg.classList.add('draw');
}

const showResult = (win) => {
    let res = win ? "You Win" : "You Lose";
    msg.innerText = res;
    msg.classList.remove('draw');
    if(win){
        msg.classList.remove('lose');
        msg.classList.add('win');
        uscore.innerText = myScore;
    }
    else{
        msg.classList.remove('win');
        msg.classList.add('lose');
        cscore.innerText = compScore;
    }
}

const game = (userChoice) => {
    const compChoice = genCompChoice();

    // result conditions
    if(userChoice === compChoice) drawGame();
    else{
        let win = true;
        if(userChoice === "rock" && compChoice === "paper") win = false;
        else if(userChoice === "paper" && compChoice === "scissor") win = false;
        else if(userChoice === "scissor" && compChoice === "rock") win = false;
        win ? myScore++ : compScore++;
        showResult(win);
    }
}

const choices = document.querySelectorAll('.option');
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute('id');
        game(userChoice);
    })
})

