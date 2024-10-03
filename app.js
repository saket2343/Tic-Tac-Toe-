let boxes = document.querySelectorAll('.box');
let resetbutton = document.querySelector("#reset-btn");

let newgamebutton = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;
let count = 0;

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
    
];
boxes.forEach((box) =>{
    box.addEventListener("click", ()=>{
        if (turn0){
            box.innerText = "O";
            turn0 = false;
        }else{
            box.innerText = "X"
            turn0 = true;

        }
       
        box.disabled = true;
        count++;
        
        let iswinner = checkwinner();
        if (count===9 && !iswinner){
            gamedraw();
        }

    });
});

const checkwinner = () =>{
    for (let pattern of winpatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !="" && pos2val != "" && pos3val != ""){
            if (pos1val === pos2val && pos2val === pos3val){
                showwinner(pos1val);
                return true;
            }
        }
    }
}

const gamedraw = () => {
    msg.innerText = `Game was a Draw`;
    msg.container.classList.remove("hide");
    disableBoxes();
};

const showwinner = (winner) => {
    msg.innerText = `Congratulations, winnner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};

const disableBoxes = (winner) => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const resetgame = () => {
    true0 = true;
    count = 0;
    enableBoxes();
    msgcontainer.classList.add("hide");
};

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText="";
    }
};

newgamebutton.addEventListener("click", resetgame);
resetbutton.addEventListener("click", resetgame);