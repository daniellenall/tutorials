var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById('reset');
var numInput = document.querySelector("input");
var winScoreDisplay = document.getElementById("winscoredisplay");
var p1Score = 0;
var p2Score = 0;
var winScore = 5;
var gameOver = false;

//Set game over state
function gameFinish(winner) {
  if(winner == "player1") {
    p1score.classList.toggle("win");
    gameOver = true;
  } else if (winner == "player2") {
    p2score.classList.toggle("win");
    gameOver = true;
  } else if(winner == "reset") {
    console.log("Game Reset");
    p1score.classList.remove("win");
    p2score.classList.remove("win");
  }
  p1Score = 0;
  p2Score = 0;

  console.log("Game Over");
};

//Increment player 1 score when button is clicked
p1Button.addEventListener("click", function(){
  if(!gameOver) {
    p1Score++;
    p1score.textContent = p1Score;
    if(p1Score == winScore){
      gameFinish("player1");
    }
  }
});

//Increment player 2 score when button is clicked
p2Button.addEventListener("click", function(){
  if(!gameOver) {
    p2Score++;
    p2score.textContent = p2Score;
    if(p2Score == winScore) {
      gameFinish("player2");
    }
  }
});

//Reset score when button is clicked
resetButton.addEventListener("click", function(){
  console.log("Game Over");
  p1score.textContent = p1Score;
  p2score.textContent = p2Score;
  gameOver = false;
  p1score.classList.remove("win");
  p2score.classList.remove("win");
  return gameOver;
});

//Event Listener for changed input in number input box
numInput.addEventListener("change", function() {
  winScore = Number(numInput.value);
  winScoreDisplay.textContent = winScore;
  gameFinish("reset");
  p1score.textContent = p1Score;
  p2score.textContent = p2Score;

});
