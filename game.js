let p1 = prompt("Enter player1 name:");
let p2 = prompt("Enter player2 name");

let head = document.getElementById("h");
head.innerText = p1 + " vs " + p2;

let playerTurn = 1;
let t = document.getElementById("turn");
t.innerText = `${p1}'s turn`;
let state =0;
const wp = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];
let boxes = document.querySelectorAll(".box");
let count = 0;
let head2 = document.getElementById("hh");
let b2 = document.getElementsByClassName("reset-btn");
const reset = () => {
  state = 0;
  count = 0;
  playerTurn =1;
   t.innerText = `${p1}'s turn.`;
   head2.innerText ="";
   boxes.forEach((b)=>{
    b.innerText ="";
   })
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       
       let i =  box.getAttribute("id");
        if(playerTurn ===1){
            console.log("press")
            box.innerText = "X";
            box.style.color = "green";
            playerTurn = 0;
            t.innerText = `${p2}'s turn.`
            
        }else{
            box.innerText = "O";
            playerTurn =1;
            t.innerText = `${p1}'s turn.`
        }
     box.disabled = true;
     count++;
     check();
     checkDraw();
    })
})

b2[0].addEventListener("click",reset)

const check = () => {
    for (let pattern of wp) {
      let pos1Val = boxes[pattern[0]].innerText;
      let pos2Val = boxes[pattern[1]].innerText;
      let pos3Val = boxes[pattern[2]].innerText;
  
      if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if (pos1Val === pos2Val && pos2Val === pos3Val && pos1Val === "X") {
           
          head2.innerText = `${p1} won!`;
          t.innerText="";
          boxes.forEach((box)=>{box.disabled=true;});
          state = 1;
          return true;
        }else if(pos1Val === pos2Val && pos2Val === pos3Val && pos1Val === "O"){
            head2.innerText = `${p2} won!`;
            boxes.forEach((box)=>{box.disabled=true;});
            t.innerText="";
            state = 1;
          return true;
        }
      }
    }
  };
  const checkDraw = ()=>{
    let v = check();
    if(count === 9 && state === 0){
        head2.innerText = "It is a Draw"
    }
  }