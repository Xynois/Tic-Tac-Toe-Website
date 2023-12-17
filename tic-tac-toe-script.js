let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let newBtn = document.querySelector(".new-game");
let msgContainer = document.querySelector(".msg-win");
let msg = document.querySelector("#msg");
let toggleBtn = document.querySelector('.toggle');

let turnO = true;

const winPattern = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO){
            box.innerText = 'O';
            turnO = false;
        }else {
            box.innerText = 'X';
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    })
})

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = '';
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulation, the winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}



const checkWinner = () => {
    for (patterns of winPattern){
        let pos1Val = boxes[patterns[0]].innerText;
        let pos2Val = boxes[patterns[1]].innerText;
        let pos3Val = boxes[patterns[2]].innerText;

        if (pos1Val != '' && pos2Val != '' && pos3Val != ''){
            if (pos1Val === pos2Val && pos2Val === pos3Val){
                console.log('winner');
                showWinner(pos1Val);
            }
        }
    }
}

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const toggleState = () => {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

toggleBtn.addEventListener("click", toggleState);