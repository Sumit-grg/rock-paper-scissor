const userScreen = document.getElementById("userScreen");
const computerScreen = document.getElementById("computerScreen");

const choicePaper = document.getElementById("paper");
const choiceRock = document.getElementById("rock");
const choiceScissor = document.getElementById("scissor");

const win = `<img src="./img/win.png" id="win" width="20px">`;
const lose = `<img src="./img/lose.png" id="lose" width="16px">`;
const draw = `<img src="./img/draw.png" id="draw" width="30px">`;

const userOutcome = document.getElementById("userOutcome");
const computerOutcome = document.getElementById("computerOutcome");

const hPaper = `<img src="./img/hPaper.png" id="paper" width="180px">`;
const hRock = `<img src="./img/hRock.png" id="rock" width="180px">`;
const hScissor = `<img src="./img/hScissor.png" id="scissor" width="180px">`;

const rPaper = `<img src="./img/rPaper.png" id="paper" width="180px">`;
const rRock = `<img src="./img/rRock.png" id="rock" width="180px">`;
const rScissor = `<img src="./img/rScissor.png" id="scissor" width="180px">`;

const array1 = [rPaper, rRock, rScissor];


let userScore = 0;
let computerScore = 0;

choicePaper.addEventListener("click", function() {
  userScreen.innerHTML = hPaper;
  computerScreen.innerHTML = array1[Math.floor(Math.random() * array1.length)];
  
  if(computerScreen.innerHTML === rPaper) {
    userOutcome.innerHTML = draw;
    computerOutcome.innerHTML = draw;
  } else if(computerScreen.innerHTML === rRock){
    userOutcome.innerHTML = win;
    userScore++;
    computerOutcome.innerHTML = lose;
  } else if(computerScreen.innerHTML === rScissor) {
    userOutcome.innerHTML = lose;
    computerOutcome.innerHTML = win;
    computerScore++;
  }
  scoreCounter;
  document.getElementById("userScore").innerHTML = userScore;
  document.getElementById("computerScore").innerHTML = computerScore; 
});


choiceRock.addEventListener("click", function() {
  userScreen.innerHTML = hRock;
  computerScreen.innerHTML = array1[Math.floor(Math.random() * array1.length)];
  
  if(computerScreen.innerHTML === rPaper) {
    userOutcome.innerHTML = lose;
    computerOutcome.innerHTML = win;
    computerScore++;
  } else if(computerScreen.innerHTML === rRock){
    userOutcome.innerHTML = draw;
    computerOutcome.innerHTML = draw;
  } else if(computerScreen.innerHTML === rScissor) {
    userOutcome.innerHTML = win;
    userScore++;
    computerOutcome.innerHTML = lose;
  }

  scoreCounter;
  document.getElementById("userScore").innerHTML = userScore;
  document.getElementById("computerScore").innerHTML = computerScore;
});


choiceScissor.addEventListener("click", function() {
  userScreen.innerHTML = hScissor;
  computerScreen.innerHTML = array1[Math.floor(Math.random() * array1.length)];
  
  if(computerScreen.innerHTML === rPaper) {
    userOutcome.innerHTML = win;
    userScore++;
    computerOutcome.innerHTML = lose;
  } else if(computerScreen.innerHTML === rRock){
    userOutcome.innerHTML = lose;
    computerOutcome.innerHTML = win;
    computerScore++;
  } else if(computerScreen.innerHTML === rScissor) {
    userOutcome.innerHTML = draw;
    computerOutcome.innerHTML = draw;
  } 
  
  scoreCounter;
  document.getElementById("userScore").innerHTML = userScore;
  document.getElementById("computerScore").innerHTML = computerScore;
});


const scoreCounter = function score(){
  if(userOutcome === win){
    userScore++;
  } else if (computerOutcome === win) {
    computerScore++;
  }
}



// const paper = `<img src="./img/paper.png" id="paper">`;
// const rock = `<img src="./img/rock.png" id="rock">`;
// const scissor = `<img src="./img/scissor.png" id="scissor">`;

// const array = [paper, rock, scissor];
