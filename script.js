let boxes = document.querySelectorAll('.box');
let resetbtn = document.querySelector('.reset');
let newbtn = document.querySelector('#newgame');
let msgcont = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');
let turn0 = true;

const winPattern =[
    [0,1,2],[0,3,6],[0,4,8],
    [1,4,7],[2,5,8],[2,4,6],
    [3,4,5],[6,7,8]
]

boxes.forEach(box => {
    box.addEventListener("click", (event)=>{
        console.log("box was clicked");
        if(turn0 == true){
            box.innerText = "0";
            turn0 = false;
        }else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkwinner();
    })
})

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Winner is: ${winner} ,Congratulations!`;
    msgcont.classList.remove('hide');
    disableBoxes();
}

const checkwinner = () => {
      for(let pattern of winPattern){
          let pos1 = boxes[pattern[0]].innerText;
          let pos2 = boxes[pattern[1]].innerText;
          let pos3 = boxes[pattern[2]].innerText;
          if(pos1 !="" && pos2 !="" && pos3 !=""){
              if(pos1 == pos2 && pos2 == pos3){
                  console.log("Winner winner chicken dinner",pos1);
                  showWinner(pos1);
              }
          }
      }
}

const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgcont.classList.add('hide');
}

newbtn.addEventListener('click', resetGame);
resetbtn.addEventListener('click', resetGame);