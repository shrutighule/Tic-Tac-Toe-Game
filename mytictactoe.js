let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn")
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;
// let colorblack = document.querySelector(".color")

const winPatterns =  [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
    turnO = true;  
    enableBoxes();  
    msgContainer.classList.add("hide")
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
    // console.log("box was Clicked")     
    if (turnO) {
      box.innerText = "O";
      box.style.color = "black";
      turnO = false; 
    //   colorblack.classList.add("color");

    } else {
        box.innerText = "X";
        // colorblack.classList.remove("color");
        turnO = true;
        box.style.color = "#b0413e";
        
    }
    box.disabled = true;

    checkWinner();
    });
});




const disableBoxes = () => {
    for(let box of boxes){
       box.disabled =  true;
    }
}

const enableBoxes = () => {
    for(let box of boxes){
       box.disabled =  false;
       box.innerText = "";
    }
}




const showWinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for ( let pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2])
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText
        // );

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Va1 = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Va1 != "" && pos3Val != ""){
         if ( pos1Val === pos2Va1 && pos2Va1 === pos3Val) {
          console.log("Winner", pos1Val);

          showWinner(pos1Val);
         }  
        }
    }}

    newGameBtn.addEventListener("click",resetGame);
    resetBtn.addEventListener("click", resetGame);