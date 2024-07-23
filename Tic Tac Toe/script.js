let boxes = document.querySelectorAll('.box');
let reset = document.querySelector('.reset');
let newGame = document.querySelector('.newGame');
let msg_container = document.querySelector('.msg-container');
let msg = document.querySelector("#msg")
let playerX = true;
let moves = 0;

const win_patterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if(playerX){
            playerX = false;
            box.innerText = "X";
            box.classList.remove('O');
            box.classList.add('X');
        }
        else{
            playerX = true;
            box.innerText = "O";
            box.classList.remove('X');
            box.classList.add('O');
        }
        box.disabled = true;
        moves++;
        checkwinner();
    })
});

const disableboxes = () => {
    for(let box of boxes)
        box.disabled = true;
}

const resetGame = () => {
    playerX = true;
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        box.classList.remove('O');
        box.classList.remove('X');
    }
    msg_container.classList.add('hide');
}

const showWinner = (winner) => {
    msg.innerText = `Congratulation, the winner is ${winner}`;
    msg_container.classList.remove('hide');
    disableboxes();
}

const showDraw = () => {
    msg.innerText = "It's a Draw!";
    msg_container.classList.remove('hide');
    disableboxes();
}

const checkwinner = () => {
    for(let pattern of win_patterns){
        let p0 = boxes[pattern[0]].innerText;
        let p1 = boxes[pattern[1]].innerText;
        let p2 = boxes[pattern[2]].innerText;
        if(p1 === p2 && p2 === p0 && p0 != ""){
            console.log(`Winner ${p0}`);
            showWinner(p0);
        }
    }
    if(moves === 9)
        showDraw();
}


newGame.addEventListener('click', resetGame);
reset.addEventListener('click', resetGame);